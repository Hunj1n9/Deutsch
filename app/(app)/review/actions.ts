'use server';

import { z } from 'zod';
import { getAiClient } from '@/lib/ai/anthropic';
import { isAcceptedFix, judgeFix } from '@/lib/ai/p4-judge-fix';
import { genderRuleKey } from '@/lib/errors';
import { genderErrorEntry, maybeResolveError, recordErrors } from '@/lib/errors-db';
import { isArticle } from '@/lib/items/types';
import { scheduleCard, type CardState, type Rating } from '@/lib/scheduler';
import { loadSettings } from '@/lib/supabase/queries';
import { getSession, SESSION_EXPIRED_VI } from '@/lib/supabase/session';

const FLAGS = ['umlaut_fallback', 'eszett_fallback', 'capitalization', 'wrong_article', 'missing_article', 'used_hint'] as const;

const submitSchema = z.object({
  cardId: z.uuid(),
  rating: z.number().int().min(1).max(4),
  suggested: z.number().int().min(1).max(4),
  answer: z.string().max(2000),
  correct: z.boolean(),
  flags: z.array(z.enum(FLAGS)).max(10),
  responseMs: z.number().int().min(0).max(3_600_000),
});

export type SubmitInput = z.infer<typeof submitSchema>;

export type SubmitResponse =
  | { ok: true; logId: string; before: CardState; next: CardState }
  | { ok: false; error: string };

const STATE_COLUMNS =
  'id, item_id, kind, due, stability, difficulty, elapsed_days, scheduled_days, learning_steps, reps, lapses, state, last_review';

/** Chấm một thẻ: server tính lịch mới bằng giờ của server, ghi thẻ + review_logs trong một giao dịch. */
export async function submitReviewAction(input: SubmitInput): Promise<SubmitResponse> {
  const parsed = submitSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: 'Dữ liệu chấm không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const p = parsed.data;

  const [{ data: row, error }, settings] = await Promise.all([
    session.supabase.from('cards').select(STATE_COLUMNS).eq('id', p.cardId).single(),
    loadSettings(session),
  ]);
  if (error || !row) return { ok: false, error: 'Không tìm thấy thẻ.' };

  const before: CardState = {
    due: row.due,
    stability: row.stability,
    difficulty: row.difficulty,
    elapsed_days: row.elapsed_days,
    scheduled_days: row.scheduled_days,
    learning_steps: row.learning_steps,
    reps: row.reps,
    lapses: row.lapses,
    state: row.state,
    last_review: row.last_review,
  };
  const next = scheduleCard(before, p.rating as Rating, new Date(), { retention: settings.desired_retention });

  const { data: logId, error: rpcError } = await session.supabase.rpc('apply_review', {
    p_card_id: p.cardId,
    p_expected_reps: before.reps,
    p_next: next,
    p_log: {
      rating: p.rating,
      suggested_rating: p.suggested,
      answer_given: p.answer,
      correct: p.correct,
      flags: p.flags,
      response_ms: p.responseMs,
      state_before: before.state,
      due_before: before.due,
      stability_before: before.stability,
      difficulty_before: before.difficulty,
    },
  });
  if (rpcError || !logId) {
    console.error('[review] apply_review lỗi:', rpcError?.code);
    return { ok: false, error: 'Không lưu được lần chấm. Thử lại.' };
  }
  // Sổ lỗi: sai mạo từ ghi một lần mắc lỗi giống; thẻ error_fix thì xét đóng lỗi (SPEC F3 bước 4, F4).
  try {
    if (p.flags.includes('wrong_article') || row.kind === 'error_fix') {
      const { data: item } = await session.supabase
        .from('items')
        .select('german, article, error_id')
        .eq('id', row.item_id)
        .single();
      if (item && p.flags.includes('wrong_article') && item.article && isArticle(item.article)) {
        await recordErrors(session, [
          genderErrorEntry(item.german, item.article, p.answer.trim(), genderRuleKey(item.german)),
        ]);
      }
      if (item?.error_id && row.kind === 'error_fix') await maybeResolveError(session, item.error_id, p.cardId);
    }
  } catch (e) {
    console.error('[review] ghi sổ lỗi lỗi:', (e as { code?: string }).code);
  }

  return { ok: true, logId: logId as string, before, next };
}

export type JudgeResponse =
  | { ok: true; correct: boolean; note: string; otherErrors: string[] }
  | { ok: false; error: string };

/**
 * Thẻ error_fix: câu gõ không khớp đáp án đã lưu thì hỏi AI (P4).
 * AI xác nhận đúng → lưu câu đó thành đáp án hợp lệ mới; vẫn mắc đúng lỗi đó → ghi thêm một lần mắc.
 */
export async function judgeErrorFixAction(input: { cardId: string; wrong: string; answer: string }): Promise<JudgeResponse> {
  const parsed = z
    .object({ cardId: z.uuid(), wrong: z.string().min(1).max(1000), answer: z.string().trim().min(1).max(1000) })
    .safeParse(input);
  if (!parsed.success) return { ok: false, error: 'Dữ liệu không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const ai = getAiClient();
  if (!ai) return { ok: false, error: 'Chưa cấu hình AI nên không phán được câu khác đáp án.' };

  const { data: card } = await session.supabase
    .from('cards')
    .select('items!inner(error_id, errors(id, rule_key, category, title_vi, explanation_vi, error_occurrences(text_wrong, text_correct)))')
    .eq('id', parsed.data.cardId)
    .single();
  type Err = {
    id: string;
    rule_key: string;
    category: string;
    title_vi: string;
    explanation_vi: string;
    error_occurrences: { text_wrong: string; text_correct: string }[];
  };
  const err = (card as unknown as { items: { errors: Err | null } } | null)?.items.errors;
  if (!err) return { ok: false, error: 'Không tìm thấy lỗi của thẻ này.' };

  const accepted = [
    ...new Set(err.error_occurrences.filter((o) => o.text_wrong === parsed.data.wrong).map((o) => o.text_correct)),
  ];
  const settings = await loadSettings(session);
  const result = await judgeFix(ai.create, ai.model, {
    wrong: parsed.data.wrong,
    accepted,
    answer: parsed.data.answer,
    ruleTitle: err.title_vi,
    level: settings.current_level,
  });
  if (!result.ok) return { ok: false, error: result.message };

  const correct = isAcceptedFix(result.data);
  if (correct) {
    await session.supabase.from('error_occurrences').insert({
      error_id: err.id,
      source: 'other',
      text_wrong: parsed.data.wrong,
      text_correct: parsed.data.answer,
    });
  } else if (!result.data.fixes_target_error && accepted[0]) {
    await recordErrors(session, [
      {
        rule_key: err.rule_key,
        category: err.category as 'other',
        title_vi: err.title_vi,
        explanation_vi: err.explanation_vi,
        source: 'other',
        text_wrong: parsed.data.answer,
        text_correct: accepted[0],
      },
    ]).catch(() => undefined);
  }
  return { ok: true, correct, note: result.data.note_vi, otherErrors: result.data.other_errors };
}

const stateSchema = z.object({
  due: z.string(),
  stability: z.number(),
  difficulty: z.number(),
  elapsed_days: z.number().int(),
  scheduled_days: z.number().int(),
  learning_steps: z.number().int(),
  reps: z.number().int(),
  lapses: z.number().int(),
  state: z.number().int().min(0).max(3),
  last_review: z.string().nullable(),
});

export type UndoResponse = { ok: true } | { ok: false; error: string };

/** Hoàn tác lần chấm gần nhất: khôi phục trạng thái thẻ từ ảnh chụp trước khi chấm, xóa log. */
export async function undoReviewAction(input: { logId: string; before: CardState }): Promise<UndoResponse> {
  const parsed = z.object({ logId: z.uuid(), before: stateSchema }).safeParse(input);
  if (!parsed.success) return { ok: false, error: 'Dữ liệu hoàn tác không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };

  const { error } = await session.supabase.rpc('undo_review', {
    p_log_id: parsed.data.logId,
    p_restore: parsed.data.before,
  });
  if (error) {
    console.error('[review] undo_review lỗi:', error.code);
    return { ok: false, error: 'Không hoàn tác được lần chấm này.' };
  }
  return { ok: true };
}
