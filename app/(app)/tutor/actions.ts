'use server';

import { z } from 'zod';
import { getAiClient } from '@/lib/ai/anthropic';
import { checkText } from '@/lib/ai/p2-check-text';
import { AI_ERROR_VI } from '@/lib/ai/structured';
import { errorSentences, fixOffset } from '@/lib/errors';
import { loadRuleKeys, recordErrors } from '@/lib/errors-db';
import { loadSettings } from '@/lib/supabase/queries';
import { getSession, SESSION_EXPIRED_VI } from '@/lib/supabase/session';

export type SaveTutorErrorResponse = { ok: true; titles: string[] } | { ok: false; error: string };

/**
 * "Lưu lỗi này" (SPEC F6): kiểm câu tiếng Đức người học đã gửi bằng P2 rồi ghi lỗi vào sổ lỗi, nguồn `tutor`.
 * Dùng chung P2 để khóa lỗi nhất quán với lỗi từ bài viết.
 */
export async function saveTutorErrorAction(input: { text: string }): Promise<SaveTutorErrorResponse> {
  const parsed = z.object({ text: z.string().trim().min(1).max(2000) }).safeParse(input);
  if (!parsed.success) return { ok: false, error: 'Tin nhắn không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const ai = getAiClient();
  if (!ai) return { ok: false, error: AI_ERROR_VI.config };

  const text = parsed.data.text;
  const [settings, existingRules] = await Promise.all([loadSettings(session), loadRuleKeys(session)]);
  const result = await checkText(ai.create, ai.model, {
    text,
    prompt: 'Tin nhắn gửi gia sư, có thể lẫn tiếng Việt: chỉ kiểm các câu tiếng Đức, bỏ qua phần tiếng Việt.',
    level: settings.current_level,
    existingRules,
    mode: 'check',
  });
  if (!result.ok) return { ok: false, error: result.message };

  const errors = result.data.errors.flatMap((e) => {
    const pos = fixOffset(text, e);
    return pos ? [{ ...e, ...pos }] : [];
  });
  if (errors.length === 0) return { ok: true, titles: [] };

  const sentences = errorSentences(text, errors);
  try {
    await recordErrors(
      session,
      errors.map((e, i) => ({
        rule_key: e.rule_key,
        category: e.category,
        title_vi: e.title_vi,
        explanation_vi: e.explanation_vi,
        source: 'tutor' as const,
        text_wrong: sentences[i].text_wrong,
        text_correct: sentences[i].text_correct,
      })),
    );
  } catch {
    return { ok: false, error: 'Không ghi được vào sổ lỗi. Thử lại sau.' };
  }
  return { ok: true, titles: errors.map((e) => e.title_vi) };
}
