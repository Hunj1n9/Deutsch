import { checkAnswer } from '@/lib/answer-check';
import { gradeExercise, hashSeed, shuffled, shuffledChunks } from './grade';
import type { Exercise, StageLessons } from './types';

/**
 * Kiểm tra chặng (SPEC F12): rút đề 20 câu, chấm, xét đạt và điểm yếu. Hàm thuần.
 */
export const TEST_VOCAB_VI_DE = 6;
export const TEST_VOCAB_LISTEN = 2;
export const TEST_PER_POINT = 3;
export const TEST_READING = 3;
export const PASS_RATIO = 0.8;

/** Số câu của đề và số câu cần đúng để đạt, theo số điểm ngữ pháp của chặng. */
export function stageTestSize(pointCount: number): { total: number; pass: number } {
  const total = TEST_VOCAB_VI_DE + TEST_VOCAB_LISTEN + pointCount * TEST_PER_POINT + TEST_READING;
  return { total, pass: Math.ceil(total * PASS_RATIO) };
}

/** Mục từ của gói dùng cho câu từ vựng (không gồm mục ngữ pháp). */
export type VocabEntry = { key: string; german: string; article: string | null; vietnamese: string };

export type VocabQuestion = { id: string; mode: 'vi_de' | 'listen'; entry: VocabEntry };

export type TestQuestion =
  | { section: 'vocab'; id: string; vocab: VocabQuestion }
  | { section: 'grammar'; id: string; point: string; exercise: Exercise }
  | { section: 'reading'; id: string; exercise: Exercise };

export function vocabId(stageId: string, mode: VocabQuestion['mode'], key: string): string {
  return `${stageId}.v.${mode}.${key}`;
}

/** Câu tiếng Đức đầy đủ của mục (danh từ kèm mạo từ). */
export function vocabGerman(e: VocabEntry): string {
  return e.article ? `${e.article} ${e.german}` : e.german;
}

export function drawStageTest(stage: StageLessons, vocab: readonly VocabEntry[], seed: number): TestQuestion[] {
  const words = shuffled(vocab, seed).slice(0, TEST_VOCAB_VI_DE + TEST_VOCAB_LISTEN);
  const vocabQs: TestQuestion[] = words.map((entry, i) => {
    const mode = i < TEST_VOCAB_VI_DE ? 'vi_de' : 'listen';
    const id = vocabId(stage.stage_id, mode, entry.key);
    return { section: 'vocab', id, vocab: { id, mode, entry } };
  });
  const grammarQs: TestQuestion[] = stage.points.flatMap((p, pi) =>
    shuffled(stage.test.grammar[p.key] ?? [], seed + pi + 1)
      .slice(0, TEST_PER_POINT)
      .map((exercise) => ({ section: 'grammar' as const, id: exercise.id, point: p.key, exercise })),
  );
  const readingQs: TestQuestion[] = shuffled(stage.test.reading.questions, seed + 99)
    .slice(0, TEST_READING)
    .map((exercise) => ({ section: 'reading' as const, id: exercise.id, exercise }));
  return [...vocabQs, ...grammarQs, ...readingQs];
}

/** Tìm lại câu hỏi theo id (server chấm lại bài nộp). */
export function findTestQuestion(stage: StageLessons, vocab: readonly VocabEntry[], id: string): TestQuestion | null {
  for (const mode of ['vi_de', 'listen'] as const) {
    const prefix = `${stage.stage_id}.v.${mode}.`;
    if (id.startsWith(prefix)) {
      const entry = vocab.find((v) => v.key === id.slice(prefix.length));
      return entry ? { section: 'vocab', id, vocab: { id, mode, entry } } : null;
    }
  }
  for (const p of stage.points) {
    const exercise = stage.test.grammar[p.key]?.find((e) => e.id === id);
    if (exercise) return { section: 'grammar', id, point: p.key, exercise };
  }
  const exercise = stage.test.reading.questions.find((e) => e.id === id);
  return exercise ? { section: 'reading', id, exercise } : null;
}

export function gradeTestQuestion(q: TestQuestion, given: string): { correct: boolean; expected: string } {
  if (q.section === 'vocab') {
    const e = q.vocab.entry;
    const r = checkAnswer(given, [e.german], e.article);
    return { correct: r.correct, expected: vocabGerman(e) };
  }
  const r = gradeExercise(q.exercise, given);
  return { correct: r.correct, expected: r.expected };
}

export type TestOutcome = {
  score: number;
  total: number;
  passed: boolean;
  /** Điểm ngữ pháp đúng dưới 2/3 câu. */
  weakPoints: string[];
};

export function scoreTest(results: readonly { question: TestQuestion; correct: boolean }[]): TestOutcome {
  const total = results.length;
  const score = results.filter((r) => r.correct).length;
  const byPoint = new Map<string, { right: number; all: number }>();
  for (const r of results) {
    if (r.question.section !== 'grammar') continue;
    const cur = byPoint.get(r.question.point) ?? { right: 0, all: 0 };
    byPoint.set(r.question.point, { right: cur.right + (r.correct ? 1 : 0), all: cur.all + 1 });
  }
  const weakPoints = [...byPoint].filter(([, v]) => v.right / v.all < 2 / 3).map(([k]) => k);
  return { score, total, passed: total > 0 && score >= Math.ceil(total * PASS_RATIO), weakPoints };
}

/** Câu hỏi gửi xuống trình duyệt: không kèm đáp án (SPEC F12: không lộ đáp án trước khi nộp). */
export type TestView =
  | { id: string; section: 'vocab'; mode: 'vi_de'; vietnamese: string; needsArticle: boolean }
  | { id: string; section: 'vocab'; mode: 'listen'; speak: string }
  | { id: string; section: 'grammar' | 'reading'; exercise: Exercise };

function hideAnswers(e: Exercise): Exercise {
  switch (e.kind) {
    case 'fill':
      return { ...e, text: e.text.replace(/\{[^{}]+\}/, '{_}'), answers: [] };
    case 'choose':
    case 'question':
      return { ...e, answer: '' };
    case 'order':
      return { ...e, chunks: shuffledChunks(e.chunks, hashSeed(e.id)), answers: [] };
    default:
      return { ...e, answers: [] };
  }
}

export function testView(q: TestQuestion): TestView {
  if (q.section === 'vocab') {
    const e = q.vocab.entry;
    return q.vocab.mode === 'vi_de'
      ? { id: q.id, section: 'vocab', mode: 'vi_de', vietnamese: e.vietnamese, needsArticle: Boolean(e.article) }
      : { id: q.id, section: 'vocab', mode: 'listen', speak: vocabGerman(e) };
  }
  const { explain_vi: _e, hint_vi: _h, ...exercise } = hideAnswers(q.exercise);
  void _e;
  void _h;
  return { id: q.id, section: q.section, exercise: exercise as Exercise };
}

/** Hạt giống ngẫu nhiên cho mỗi lần rút đề. */
export function randomSeed(): number {
  return Math.floor(Math.random() * 2 ** 31);
}
