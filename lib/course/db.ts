import 'server-only';
import { LESSON_FLAG } from '@/lib/review/load';
import { packTag } from '@/lib/roadmap';
import { importStageDrafts, type OpenResult } from '@/lib/roadmap-db';
import { scheduleCard, type CardState } from '@/lib/scheduler';
import { loadSettings } from '@/lib/supabase/queries';
import type { Session } from '@/lib/supabase/session';
import type { AnswerFlag } from '@/lib/answer-check';
import { lessonDrafts, roadmapStage } from './catalog';
import { recallRating } from './grade';
import type { LessonState } from './position';
import type { Lesson, StageLessons } from './types';
import { SUMMARY_STEP } from './types';
import { itemKey } from './validate';

/**
 * Đọc/ghi tiến độ khóa học và nối bài học với kho mục, thẻ ôn (SPEC F11, F12).
 */
export const LESSON_TAG_PREFIX = 'lesson:';

export function lessonTag(lessonId: string): string {
  return `${LESSON_TAG_PREFIX}${lessonId}`;
}

export type CourseState = {
  progress: Map<string, LessonState>;
  passed: Set<string>;
  /** Lần kiểm tra điểm cao nhất của mỗi chặng. */
  best: Map<string, { score: number; total: number }>;
};

export async function loadCourseState({ supabase }: Session): Promise<CourseState> {
  const [{ data: rows }, { data: tests }] = await Promise.all([
    supabase.from('lesson_progress').select('lesson_id, step, completed_at, skipped, score, total'),
    supabase.from('stage_tests').select('stage_id, score, total, passed'),
  ]);
  const progress = new Map<string, LessonState>();
  for (const r of (rows ?? []) as {
    lesson_id: string;
    step: number;
    completed_at: string | null;
    skipped: boolean;
    score: number | null;
    total: number | null;
  }[]) {
    progress.set(r.lesson_id, { step: r.step, completed: Boolean(r.completed_at), skipped: r.skipped, score: r.score, total: r.total });
  }
  const passed = new Set<string>();
  const best = new Map<string, { score: number; total: number }>();
  for (const t of (tests ?? []) as { stage_id: string; score: number; total: number; passed: boolean }[]) {
    if (t.passed) passed.add(t.stage_id);
    const cur = best.get(t.stage_id);
    if (!cur || t.score > cur.score) best.set(t.stage_id, { score: t.score, total: t.total });
  }
  return { progress, passed, best };
}

/** Lưu bước đang làm và điểm tạm; tới bước Tổng kết thì ghi lần hoàn thành đầu tiên. */
export async function saveLessonStep(
  { supabase, userId }: Session,
  lessonId: string,
  input: { step: number; score: number; total: number },
): Promise<void> {
  const { data: cur } = await supabase.from('lesson_progress').select('completed_at').eq('lesson_id', lessonId).maybeSingle();
  const done = input.step >= SUMMARY_STEP;
  const completedAt = (cur?.completed_at as string | null | undefined) ?? (done ? new Date().toISOString() : null);
  const { error } = await supabase.from('lesson_progress').upsert(
    {
      user_id: userId,
      lesson_id: lessonId,
      step: Math.min(input.step, SUMMARY_STEP),
      completed_at: completedAt,
      score: input.score,
      total: input.total,
    },
    { onConflict: 'user_id,lesson_id' },
  );
  if (error) throw error;
}

/** Bắt đầu lại một bài đã xong (chỉ để luyện): về bước đầu, giữ ngày hoàn thành. */
export async function restartLesson({ supabase }: Session, lessonId: string): Promise<void> {
  await supabase.from('lesson_progress').update({ step: 0, score: 0, total: 0 }).eq('lesson_id', lessonId);
}

function stageOf(lesson: Lesson) {
  const stage = roadmapStage(lesson.stage_id);
  if (!stage) throw new Error('unknown stage');
  return stage;
}

export type RecallResult = { key: string; correct: boolean; flags: AnswerFlag[]; responseMs: number; usedHint?: boolean };

const CARD_COLUMNS =
  'id, kind, due, stability, difficulty, elapsed_days, scheduled_days, learning_steps, reps, lapses, state, last_review';

/**
 * Xong lượt gợi nhớ một nhóm từ: nhập các mục vào kho (tag gói + tag bài), rồi lấy lần gõ đầu làm
 * lần ôn đầu của thẻ vi_de còn ở trạng thái New (SPEC F11). Thẻ đã qua New thì không ghi gì.
 */
export async function learnWords(
  session: Session,
  lesson: Lesson,
  results: RecallResult[],
): Promise<OpenResult & { reviewed: number }> {
  const byKey = new Map(results.map((r) => [r.key, r]));
  const drafts = lessonDrafts(lesson).filter((d) => d.type !== 'grammar' && byKey.has(itemKey(d)));
  if (drafts.length === 0) return { added: 0, tagged: 0, reviewed: 0 };
  const imported = await importStageDrafts(session, stageOf(lesson), drafts, [packTag(lesson.stage_id), lessonTag(lesson.id)]);

  const [{ data: items, error }, settings] = await Promise.all([
    session.supabase
      .from('items')
      .select(`german, type, cards(${CARD_COLUMNS})`)
      .contains('tags', [lessonTag(lesson.id)])
      .in('german', drafts.map((d) => d.german)),
    loadSettings(session),
  ]);
  if (error) throw error;

  const now = new Date();
  const jobs: PromiseLike<{ error: unknown }>[] = [];
  for (const item of (items ?? []) as { german: string; type: string; cards: (CardState & { id: string; kind: string })[] }[]) {
    const r = byKey.get(item.german);
    const card = item.cards.find((c) => c.kind === 'vi_de');
    if (!r || !card || card.state !== 0 || item.type === 'grammar') continue;
    const rating = recallRating(r);
    const before: CardState = {
      due: card.due,
      stability: card.stability,
      difficulty: card.difficulty,
      elapsed_days: card.elapsed_days,
      scheduled_days: card.scheduled_days,
      learning_steps: card.learning_steps,
      reps: card.reps,
      lapses: card.lapses,
      state: card.state,
      last_review: card.last_review,
    };
    const next = scheduleCard(before, rating, now, { retention: settings.desired_retention });
    jobs.push(
      session.supabase.rpc('apply_review', {
        p_card_id: card.id,
        p_expected_reps: before.reps,
        p_next: next,
        p_log: {
          rating,
          suggested_rating: rating,
          answer_given: '',
          correct: r.correct,
          flags: [...r.flags, ...(r.usedHint ? ['used_hint'] : []), LESSON_FLAG],
          response_ms: Math.min(r.responseMs, 3_600_000),
          state_before: before.state,
          due_before: before.due,
          stability_before: before.stability,
          difficulty_before: before.difficulty,
        },
      }),
    );
  }
  const done = await Promise.all(jobs);
  const reviewed = done.filter((res) => !res.error).length;
  return { ...imported, reviewed };
}

/** Xong bước Ngữ pháp: nhập mục ngữ pháp (`g`) của bài, thẻ cloze ở trạng thái New. */
export async function importGrammarItems(session: Session, lesson: Lesson): Promise<OpenResult> {
  const drafts = lessonDrafts(lesson).filter((d) => d.type === 'grammar');
  if (drafts.length === 0) return { added: 0, tagged: 0 };
  return importStageDrafts(session, stageOf(lesson), drafts, [packTag(lesson.stage_id), lessonTag(lesson.id)]);
}

/**
 * Bỏ qua chặng (F12): đạt kiểm tra khi chưa học bài nào. Các bài thành `skipped`,
 * mục của gói được nhập vào kho, thẻ ở trạng thái New.
 */
export async function skipStage(session: Session, stage: StageLessons): Promise<void> {
  const rows = stage.lessons.map((l) => ({ user_id: session.userId, lesson_id: l.id, step: 0, skipped: true }));
  const { error } = await session.supabase.from('lesson_progress').upsert(rows, { onConflict: 'user_id,lesson_id', ignoreDuplicates: true });
  if (error) throw error;
  for (const lesson of stage.lessons) {
    await importStageDrafts(session, stageOf(lesson), lessonDrafts(lesson), [packTag(lesson.stage_id), lessonTag(lesson.id)]);
  }
}

export type LevelBest = { score: number; total: number; passed: boolean };
export type LevelTestState = Map<string, LevelBest>;

/** Thi thử cuối cấp (F14): lần điểm cao nhất của mỗi cấp và đã từng đạt chưa. */
export async function loadLevelTests({ supabase }: Session): Promise<LevelTestState> {
  const { data } = await supabase.from('level_tests').select('level, score, total, passed');
  const out: LevelTestState = new Map();
  for (const t of (data ?? []) as { level: string; score: number; total: number; passed: boolean }[]) {
    const cur = out.get(t.level);
    out.set(t.level, {
      score: Math.max(cur?.score ?? 0, t.score),
      total: t.total,
      passed: Boolean(cur?.passed) || t.passed,
    });
  }
  return out;
}
