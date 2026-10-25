import { shuffled } from './grade';
import { findTestQuestion, vocabId, type TestOutcome, type TestQuestion, type VocabEntry } from './stage-test';
import type { StageLessons } from './types';

/**
 * Thi thử cuối cấp (SPEC F14): đề 40 câu rút từ dữ liệu của mọi chặng trong cấp, chấm, điểm từng phần. Hàm thuần.
 */
export const LEVEL_VOCAB_VI_DE = 9;
export const LEVEL_VOCAB_LISTEN = 3;
export const LEVEL_GRAMMAR = 22;
export const LEVEL_READINGS = 2;
export const LEVEL_PER_READING = 3;
export const LEVEL_PASS_RATIO = 0.6;
export const LEVEL_TOTAL = LEVEL_VOCAB_VI_DE + LEVEL_VOCAB_LISTEN + LEVEL_GRAMMAR + LEVEL_READINGS * LEVEL_PER_READING;

export const EXAM_LEVELS = ['A1', 'A2', 'B1', 'B2'] as const;
export type ExamLevel = (typeof EXAM_LEVELS)[number];

export function isExamLevel(value: string): value is ExamLevel {
  return (EXAM_LEVELS as readonly string[]).includes(value);
}

/** Các chặng có bài của một cấp, theo thứ tự lộ trình. */
export function levelStages(all: readonly StageLessons[], level: ExamLevel): StageLessons[] {
  return all.filter((s) => s.stage_id.startsWith(`${level.toLowerCase()}-`));
}

/** Mã chặng của một câu (mọi mã câu bắt đầu bằng mã chặng, vd `a1-03.t.akk.2`). */
export function questionStage(id: string): string {
  return id.slice(0, 5);
}

/** Khóa điểm ngữ pháp duy nhất trong cả cấp: `<chặng>:<khóa điểm>`. */
export function levelPointKey(stageId: string, pointKey: string): string {
  return `${stageId}:${pointKey}`;
}

export function drawLevelTest(
  stages: readonly StageLessons[],
  vocabByStage: ReadonlyMap<string, readonly VocabEntry[]>,
  seed: number,
): TestQuestion[] {
  const allVocab = stages.flatMap((s) => (vocabByStage.get(s.stage_id) ?? []).map((entry) => ({ stageId: s.stage_id, entry })));
  const vocabQs: TestQuestion[] = shuffled(allVocab, seed)
    .slice(0, LEVEL_VOCAB_VI_DE + LEVEL_VOCAB_LISTEN)
    .map(({ stageId, entry }, i) => {
      const mode = i < LEVEL_VOCAB_VI_DE ? 'vi_de' : 'listen';
      const id = vocabId(stageId, mode, entry.key);
      return { section: 'vocab', id, vocab: { id, mode, entry } };
    });

  const points = stages.flatMap((s) => s.points.filter((p) => (s.test.grammar[p.key] ?? []).length > 0).map((p) => ({ stage: s, point: p })));
  const grammarQs: TestQuestion[] = shuffled(points, seed + 1)
    .slice(0, LEVEL_GRAMMAR)
    .map(({ stage, point }, i) => {
      const exercise = shuffled(stage.test.grammar[point.key], seed + 2 + i)[0];
      return { section: 'grammar', id: exercise.id, point: point.key, exercise };
    });

  const readingQs: TestQuestion[] = shuffled(stages, seed + 100)
    .slice(0, LEVEL_READINGS)
    .flatMap((s, i) =>
      shuffled(s.test.reading.questions, seed + 101 + i)
        .slice(0, LEVEL_PER_READING)
        .map((exercise) => ({ section: 'reading' as const, id: exercise.id, exercise })),
    );

  return [...vocabQs, ...grammarQs, ...readingQs];
}

/** Tìm lại câu theo mã (server chấm lại bài nộp). */
export function findLevelQuestion(
  stages: readonly StageLessons[],
  vocabByStage: ReadonlyMap<string, readonly VocabEntry[]>,
  id: string,
): TestQuestion | null {
  const stage = stages.find((s) => s.stage_id === questionStage(id));
  return stage ? findTestQuestion(stage, vocabByStage.get(stage.stage_id) ?? [], id) : null;
}

export type SectionScore = { right: number; all: number };

export type LevelOutcome = TestOutcome & {
  sections: Record<TestQuestion['section'], SectionScore>;
};

/** Điểm, ngưỡng đạt 60 %, điểm từng phần; `weakPoints` là các điểm ngữ pháp sai (khóa `<chặng>:<điểm>`). */
export function scoreLevelTest(results: readonly { question: TestQuestion; correct: boolean }[]): LevelOutcome {
  const total = results.length;
  const score = results.filter((r) => r.correct).length;
  const sections: LevelOutcome['sections'] = {
    vocab: { right: 0, all: 0 },
    grammar: { right: 0, all: 0 },
    reading: { right: 0, all: 0 },
  };
  const weak: string[] = [];
  for (const r of results) {
    const s = sections[r.question.section];
    s.all += 1;
    if (r.correct) s.right += 1;
    else if (r.question.section === 'grammar') {
      const key = levelPointKey(questionStage(r.question.id), r.question.point);
      if (!weak.includes(key)) weak.push(key);
    }
  }
  return { score, total, passed: total > 0 && score >= Math.ceil(total * LEVEL_PASS_RATIO), weakPoints: weak, sections };
}
