'use server';

import { z } from 'zod';
import { getAiClient } from '@/lib/ai/anthropic';
import { checkText, type P2Error, type P2Result } from '@/lib/ai/p2-check-text';
import { AI_ERROR_VI } from '@/lib/ai/structured';
import { errorSentences, fixOffset, splitSentences } from '@/lib/errors';
import { loadRuleKeys, recordErrors } from '@/lib/errors-db';
import { loadSettings } from '@/lib/supabase/queries';
import { getSession, SESSION_EXPIRED_VI } from '@/lib/supabase/session';

const MAX_SENTENCES = 10;

/** Lỗi đã khớp vị trí trong văn bản (gạch chân được). */
export type PlacedError = P2Error & { start: number; end: number };

export type CheckFeedback = Omit<P2Result, 'errors'> & { errors: PlacedError[] };

export type WritingFeedback = { check: CheckFeedback; recheck?: CheckFeedback };

function place(text: string, result: P2Result): CheckFeedback {
  const errors = result.errors.flatMap((e) => {
    const pos = fixOffset(text, e);
    return pos ? [{ ...e, ...pos }] : [];
  });
  return { ...result, errors };
}

const textSchema = z.string().trim().min(1, 'Nhập ít nhất một câu tiếng Đức.').max(2000, 'Văn bản quá dài (tối đa 2000 ký tự).');

export type CheckResponse = { ok: true; writingId: string; feedback: CheckFeedback } | { ok: false; error: string };

/** F5 bước 2: AI kiểm (P2), lưu bài viết, ghi mọi lỗi vào sổ lỗi (nguồn writing). */
export async function checkWritingAction(input: { text: string; prompt: string }): Promise<CheckResponse> {
  const parsed = z.object({ text: textSchema, prompt: z.string().trim().max(500) }).safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? 'Dữ liệu không hợp lệ.' };
  const { text, prompt } = parsed.data;
  if (splitSentences(text).length > MAX_SENTENCES) {
    return { ok: false, error: `Mỗi lần kiểm tối đa ${MAX_SENTENCES} câu.` };
  }
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const ai = getAiClient();
  if (!ai) return { ok: false, error: AI_ERROR_VI.config };

  const [settings, existingRules] = await Promise.all([loadSettings(session), loadRuleKeys(session)]);
  const result = await checkText(ai.create, ai.model, {
    text,
    prompt: prompt || undefined,
    level: settings.current_level,
    existingRules,
    mode: 'check',
  });
  if (!result.ok) return { ok: false, error: result.message };

  const feedback = place(text, result.data);
  const { data: writing, error } = await session.supabase
    .from('writings')
    .insert({
      user_id: session.userId,
      prompt: prompt || null,
      original_text: text,
      ai_feedback: { check: feedback } satisfies WritingFeedback,
    })
    .select('id')
    .single();
  if (error || !writing) {
    console.error('[write] lưu bài viết lỗi:', error?.code);
    return { ok: false, error: 'Không lưu được bài viết. Văn bản của bạn vẫn còn; thử lại.' };
  }

  try {
    const sentences = errorSentences(text, feedback.errors);
    await recordErrors(
      session,
      feedback.errors.map((e, i) => ({
        rule_key: e.rule_key,
        category: e.category,
        title_vi: e.title_vi,
        explanation_vi: e.explanation_vi,
        source: 'writing' as const,
        text_wrong: sentences[i].text_wrong,
        text_correct: sentences[i].text_correct,
      })),
    );
  } catch (e) {
    console.error('[write] ghi sổ lỗi lỗi:', (e as { code?: string }).code);
  }

  return { ok: true, writingId: writing.id as string, feedback };
}

export type RecheckResponse = { ok: true; feedback: CheckFeedback } | { ok: false; error: string };

/** F5 bước 4: kiểm lại bản người học tự sửa (P2 chế độ recheck). */
export async function recheckWritingAction(input: { writingId: string; revised: string }): Promise<RecheckResponse> {
  const parsed = z.object({ writingId: z.uuid(), revised: textSchema }).safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? 'Dữ liệu không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const ai = getAiClient();
  if (!ai) return { ok: false, error: AI_ERROR_VI.config };

  const { data: writing } = await session.supabase
    .from('writings')
    .select('prompt, ai_feedback')
    .eq('id', parsed.data.writingId)
    .single();
  if (!writing) return { ok: false, error: 'Không tìm thấy bài viết.' };
  const previous = (writing.ai_feedback as WritingFeedback).check;

  const [settings, existingRules] = await Promise.all([loadSettings(session), loadRuleKeys(session)]);
  const result = await checkText(ai.create, ai.model, {
    text: parsed.data.revised,
    prompt: writing.prompt ?? undefined,
    level: settings.current_level,
    existingRules,
    mode: 'recheck',
    previous: previous.errors.map((e) => ({ wrong: e.wrong, correct: e.correct, rule_key: e.rule_key })),
  });
  if (!result.ok) return { ok: false, error: result.message };

  const feedback = place(parsed.data.revised, result.data);
  await session.supabase
    .from('writings')
    .update({
      revised_text: parsed.data.revised,
      ai_feedback: { check: previous, recheck: feedback } satisfies WritingFeedback,
    })
    .eq('id', parsed.data.writingId);
  return { ok: true, feedback };
}
