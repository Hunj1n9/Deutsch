'use server';

import { z } from 'zod';
import { getAiClient } from '@/lib/ai/anthropic';
import { isAcceptedAnswer, judgeExercise } from '@/lib/ai/p6-judge-exercise';
import { AI_ERROR_VI } from '@/lib/ai/structured';
import { LESSONS_BY_STAGE, STAGE_LESSONS } from '@/data/lessons';
import { findLesson, findLessonExercise, grammarPoint, isMixedExercise, packDrafts, vocabEntries } from '@/lib/course/catalog';
import { importGrammarItems, learnWords, loadCourseState, restartLesson, saveLessonStep, skipStage } from '@/lib/course/db';
import { fullSentence } from '@/lib/course/grade';
import { EXAM_LEVELS, findLevelQuestion, LEVEL_TOTAL, levelStages, questionStage, scoreLevelTest, type LevelOutcome } from '@/lib/course/level-test';
import { cleanExcerpt, parseReportTarget, REPORT_NOTE_MAX, REPORT_TARGET_MAX } from '@/lib/course/report';
import { findTestQuestion, gradeTestQuestion, scoreTest, type TestOutcome } from '@/lib/course/stage-test';
import type { GrammarPoint } from '@/lib/course/types';
import { SUMMARY_STEP } from '@/lib/course/types';
import { genderRuleKey } from '@/lib/errors';
import { genderErrorEntry, recordErrors, type ErrorEntry } from '@/lib/errors-db';
import { loadSettings } from '@/lib/supabase/queries';
import { getSession, SESSION_EXPIRED_VI } from '@/lib/supabase/session';

const lessonIdSchema = z.string().regex(/^[ab][12]-\d{2}-\d$/);
const stageIdSchema = z.string().regex(/^[ab][12]-\d{2}$/);

export type ActionResponse<T = object> = ({ ok: true } & T) | { ok: false; error: string };

function logError(where: string, e: unknown) {
  console.error(`[learn] ${where} lỗi:`, (e as { code?: string }).code ?? (e as Error).message);
}

export async function saveStepAction(input: { lessonId: string; step: number; score: number; total: number }): Promise<ActionResponse> {
  const parsed = z
    .object({
      lessonId: lessonIdSchema,
      step: z.number().int().min(0).max(SUMMARY_STEP),
      score: z.number().int().min(0).max(500),
      total: z.number().int().min(0).max(500),
    })
    .safeParse(input);
  if (!parsed.success || !findLesson(parsed.data.lessonId)) return { ok: false, error: 'Dữ liệu không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  try {
    await saveLessonStep(session, parsed.data.lessonId, parsed.data);
    return { ok: true };
  } catch (e) {
    logError('lưu bước', e);
    return { ok: false, error: 'Không lưu được tiến độ bài. Thử lại.' };
  }
}

export async function restartLessonAction(lessonId: string): Promise<ActionResponse> {
  if (!lessonIdSchema.safeParse(lessonId).success) return { ok: false, error: 'Bài không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  await restartLesson(session, lessonId);
  return { ok: true };
}

const FLAGS = ['umlaut_fallback', 'eszett_fallback', 'capitalization', 'wrong_article', 'missing_article'] as const;

/** Xong lượt gợi nhớ một nhóm từ: nhập mục, ghi lần ôn đầu của thẻ vi_de; sai mạo từ thì ghi sổ lỗi như F3. */
export async function learnWordsAction(input: {
  lessonId: string;
  results: { key: string; correct: boolean; flags: string[]; responseMs: number; answer: string; usedHint?: boolean }[];
}): Promise<ActionResponse<{ added: number; reviewed: number }>> {
  const parsed = z
    .object({
      lessonId: lessonIdSchema,
      results: z
        .array(
          z.object({
            key: z.string().min(1).max(200),
            correct: z.boolean(),
            flags: z.array(z.enum(FLAGS)).max(5),
            responseMs: z.number().int().min(0).max(3_600_000),
            answer: z.string().max(300),
            usedHint: z.boolean().optional(),
          }),
        )
        .min(1)
        .max(40),
    })
    .safeParse(input);
  if (!parsed.success) return { ok: false, error: 'Dữ liệu không hợp lệ.' };
  const found = findLesson(parsed.data.lessonId);
  if (!found) return { ok: false, error: 'Bài không tồn tại.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  try {
    const r = await learnWords(session, found.lesson, parsed.data.results);
    const drafts = packDrafts(found.lesson.stage_id);
    const gender = parsed.data.results.flatMap((res) => {
      const d = drafts.get(res.key);
      if (!res.flags.includes('wrong_article') || !d?.article) return [];
      return [{ ...genderErrorEntry(d.german, d.article, res.answer.trim(), genderRuleKey(d.german)), source: 'lesson' as const }];
    });
    if (gender.length) await recordErrors(session, gender).catch((e) => logError('ghi lỗi mạo từ', e));
    return { ok: true, added: r.added, reviewed: r.reviewed };
  } catch (e) {
    logError('nhập từ', e);
    return { ok: false, error: 'Không lưu được từ của bài vào kho. Thử lại.' };
  }
}

export async function finishGrammarAction(lessonId: string): Promise<ActionResponse<{ added: number }>> {
  const found = lessonIdSchema.safeParse(lessonId).success ? findLesson(lessonId) : null;
  if (!found) return { ok: false, error: 'Bài không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  try {
    const r = await importGrammarItems(session, found.lesson);
    return { ok: true, added: r.added };
  } catch (e) {
    logError('nhập mục ngữ pháp', e);
    return { ok: false, error: 'Không lưu được mục ngữ pháp. Thử lại.' };
  }
}

function errorEntry(point: GrammarPoint, wrong: string, correct: string): ErrorEntry {
  return {
    rule_key: point.rule_key,
    category: point.category,
    title_vi: point.title_vi,
    explanation_vi: point.explanation_vi,
    source: 'lesson',
    text_wrong: wrong,
    text_correct: correct,
  };
}

/**
 * Sai một bài tập: chỉ ghi sổ lỗi khi là bài tập trộn cuối bước Ngữ pháp (SPEC F11).
 * Trả `recorded` để client báo "đã vào sổ lỗi".
 */
export async function lessonMistakeAction(input: { lessonId: string; exerciseId: string; answer: string }): Promise<ActionResponse<{ recorded: boolean }>> {
  const parsed = z
    .object({ lessonId: lessonIdSchema, exerciseId: z.string().max(80), answer: z.string().trim().min(1).max(500) })
    .safeParse(input);
  if (!parsed.success) return { ok: true, recorded: false };
  const found = findLesson(parsed.data.lessonId);
  const ex = found && findLessonExercise(found.lesson, parsed.data.exerciseId);
  if (!found || !ex || !isMixedExercise(found.lesson, ex.id)) return { ok: true, recorded: false };
  const point = grammarPoint(found.stage, found.lesson.grammar.point);
  if (!point) return { ok: true, recorded: false };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  try {
    await recordErrors(session, [errorEntry(point, fullSentence(ex, parsed.data.answer), fullSentence(ex))]);
    return { ok: true, recorded: true };
  } catch (e) {
    logError('ghi sổ lỗi', e);
    return { ok: true, recorded: false };
  }
}

/** P6: câu tự do không khớp đáp án soạn sẵn thì hỏi AI. AI lỗi thì tính sai và nói rõ. */
export async function judgeExerciseAction(input: {
  lessonId: string;
  exerciseId: string;
  answer: string;
}): Promise<ActionResponse<{ correct: boolean; note: string }>> {
  const parsed = z
    .object({ lessonId: lessonIdSchema, exerciseId: z.string().max(80), answer: z.string().trim().min(1).max(500) })
    .safeParse(input);
  if (!parsed.success) return { ok: false, error: 'Dữ liệu không hợp lệ.' };
  const found = findLesson(parsed.data.lessonId);
  const ex = found && findLessonExercise(found.lesson, parsed.data.exerciseId);
  if (!found || !ex || (ex.kind !== 'transform' && ex.kind !== 'translate')) return { ok: false, error: 'Bài tập không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const ai = getAiClient();
  if (!ai) return { ok: false, error: AI_ERROR_VI.config };
  const settings = await loadSettings(session);
  const point = grammarPoint(found.stage, found.lesson.grammar.point);
  const result = await judgeExercise(ai.create, ai.model, {
    instruction: ex.kind === 'transform' ? ex.instruction_vi : 'Dịch sang tiếng Đức',
    prompt: ex.kind === 'transform' ? ex.text : ex.vi,
    accepted: ex.answers,
    answer: parsed.data.answer,
    grammarTitle: point?.title_vi ?? '',
    level: settings.current_level,
  });
  if (!result.ok) return { ok: false, error: result.message };
  return { ok: true, correct: isAcceptedAnswer(result.data), note: result.data.note_vi };
}

export type TestReview = { id: string; answer: string; correct: boolean; expected: string };

/** Nộp kiểm tra chặng: server chấm lại theo id câu, lưu lần làm, ghi lỗi ngữ pháp, bỏ qua chặng nếu đạt khi chưa học. */
export async function submitStageTestAction(input: {
  stageId: string;
  answers: { id: string; answer: string }[];
}): Promise<ActionResponse<{ outcome: TestOutcome; review: TestReview[]; skipped: boolean }>> {
  const parsed = z
    .object({
      stageId: stageIdSchema,
      answers: z.array(z.object({ id: z.string().max(300), answer: z.string().max(500) })).min(1).max(40),
    })
    .safeParse(input);
  if (!parsed.success) return { ok: false, error: 'Dữ liệu không hợp lệ.' };
  const stage = LESSONS_BY_STAGE.get(parsed.data.stageId);
  if (!stage) return { ok: false, error: 'Chặng chưa có bài kiểm tra.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };

  const vocab = vocabEntries(stage.stage_id);
  const graded = parsed.data.answers.flatMap(({ id, answer }) => {
    const question = findTestQuestion(stage, vocab, id);
    if (!question) return [];
    const r = gradeTestQuestion(question, answer);
    return [{ question, answer, ...r }];
  });
  if (graded.length !== parsed.data.answers.length) return { ok: false, error: 'Đề không khớp. Tải lại trang rồi làm lại.' };
  const outcome = scoreTest(graded);
  const review = graded.map((g) => ({ id: g.question.id, answer: g.answer, correct: g.correct, expected: g.expected }));

  const { error } = await session.supabase.from('stage_tests').insert({
    user_id: session.userId,
    stage_id: stage.stage_id,
    score: outcome.score,
    total: outcome.total,
    passed: outcome.passed,
    answers: review,
  });
  if (error) {
    logError('lưu kiểm tra', error);
    return { ok: false, error: 'Không lưu được bài kiểm tra. Thử nộp lại.' };
  }

  const entries = graded.flatMap((g) => {
    if (g.correct || g.question.section !== 'grammar' || !g.answer.trim()) return [];
    const point = grammarPoint(stage, g.question.point);
    return point ? [errorEntry(point, fullSentence(g.question.exercise, g.answer), fullSentence(g.question.exercise))] : [];
  });
  if (entries.length) await recordErrors(session, entries).catch((e) => logError('ghi lỗi kiểm tra', e));

  let skipped = false;
  if (outcome.passed) {
    const { progress } = await loadCourseState(session);
    if (stage.lessons.every((l) => !progress.has(l.id))) {
      try {
        await skipStage(session, stage);
        skipped = true;
      } catch (e) {
        logError('bỏ qua chặng', e);
      }
    }
  }
  return { ok: true, outcome, review, skipped };
}

/** Báo nội dung sai (F13): mỗi chỗ một dòng đang mở; báo lại thì cập nhật dòng đó. */
export async function reportContentAction(input: { target: string; excerpt: string; note: string }): Promise<ActionResponse> {
  const parsed = z
    .object({
      target: z.string().max(REPORT_TARGET_MAX).refine((t) => parseReportTarget(t) !== null),
      excerpt: z.string().max(5000),
      note: z.string().trim().max(REPORT_NOTE_MAX),
    })
    .safeParse(input);
  if (!parsed.success) return { ok: false, error: 'Ghi chú tối đa 500 ký tự.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const row = { excerpt: cleanExcerpt(parsed.data.excerpt) || parsed.data.target, note: parsed.data.note || null };
  const { supabase, userId } = session;
  const { data: open } = await supabase
    .from('content_reports')
    .select('id')
    .eq('target', parsed.data.target)
    .is('resolved_at', null)
    .maybeSingle();
  const { error } = open
    ? await supabase.from('content_reports').update({ ...row, created_at: new Date().toISOString() }).eq('id', open.id)
    : await supabase.from('content_reports').insert({ user_id: userId, target: parsed.data.target, ...row });
  if (error) {
    logError('báo nội dung', error);
    return { ok: false, error: 'Không lưu được. Thử lại.' };
  }
  return { ok: true };
}

/** Nộp thi thử cuối cấp (F14): server chấm lại theo mã câu, lưu lần làm, ghi lỗi ngữ pháp như F12. Không đổi trạng thái bài, chặng. */
export async function submitLevelTestAction(input: {
  level: string;
  answers: { id: string; answer: string }[];
}): Promise<ActionResponse<{ outcome: LevelOutcome; review: TestReview[]; skipped: boolean }>> {
  const parsed = z
    .object({
      level: z.enum(EXAM_LEVELS),
      answers: z.array(z.object({ id: z.string().max(300), answer: z.string().max(500) })).min(1).max(LEVEL_TOTAL),
    })
    .safeParse(input);
  if (!parsed.success) return { ok: false, error: 'Dữ liệu không hợp lệ.' };
  const stages = levelStages(STAGE_LESSONS, parsed.data.level);
  if (stages.length === 0) return { ok: false, error: 'Cấp này chưa có thi thử.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };

  const vocab = new Map(stages.map((s) => [s.stage_id, vocabEntries(s.stage_id)]));
  const graded = parsed.data.answers.flatMap(({ id, answer }) => {
    const question = findLevelQuestion(stages, vocab, id);
    if (!question) return [];
    return [{ question, answer, ...gradeTestQuestion(question, answer) }];
  });
  if (graded.length !== parsed.data.answers.length) return { ok: false, error: 'Đề không khớp. Tải lại trang rồi làm lại.' };
  const outcome = scoreLevelTest(graded);
  const review = graded.map((g) => ({ id: g.question.id, answer: g.answer, correct: g.correct, expected: g.expected }));

  const { error } = await session.supabase.from('level_tests').insert({
    user_id: session.userId,
    level: parsed.data.level,
    score: outcome.score,
    total: outcome.total,
    passed: outcome.passed,
    answers: review,
  });
  if (error) {
    logError('lưu thi thử', error);
    return { ok: false, error: 'Không lưu được bài thi thử. Thử nộp lại.' };
  }

  const entries = graded.flatMap((g) => {
    if (g.correct || g.question.section !== 'grammar' || !g.answer.trim()) return [];
    const stage = LESSONS_BY_STAGE.get(questionStage(g.question.id));
    const point = stage && grammarPoint(stage, g.question.point);
    return point ? [errorEntry(point, fullSentence(g.question.exercise, g.answer), fullSentence(g.question.exercise))] : [];
  });
  if (entries.length) await recordErrors(session, entries).catch((e) => logError('ghi lỗi thi thử', e));
  return { ok: true, outcome, review, skipped: false };
}
