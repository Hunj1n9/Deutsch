import { describe, expect, it } from 'vitest';
import { STAGE_LESSONS } from '@/data/lessons';
import { vocabEntries } from '@/lib/course/catalog';
import {
  drawLevelTest,
  EXAM_LEVELS,
  findLevelQuestion,
  LEVEL_TOTAL,
  levelStages,
  questionStage,
  scoreLevelTest,
} from '@/lib/course/level-test';
import { gradeTestQuestion } from '@/lib/course/stage-test';

const vocabFor = (stages: ReturnType<typeof levelStages>) => new Map(stages.map((s) => [s.stage_id, vocabEntries(s.stage_id)]));

describe('drawLevelTest (TCHT F14)', () => {
  for (const level of EXAM_LEVELS) {
    it(`${level}: đủ 40 câu, đúng tỉ lệ, không trùng`, () => {
      const stages = levelStages(STAGE_LESSONS, level);
      expect(stages.length).toBeGreaterThanOrEqual(12);
      const vocab = vocabFor(stages);
      for (const seed of [1, 42, 9999]) {
        const qs = drawLevelTest(stages, vocab, seed);
        expect(qs).toHaveLength(LEVEL_TOTAL);
        expect(new Set(qs.map((q) => q.id)).size).toBe(qs.length);
        const by = (s: string) => qs.filter((q) => q.section === s);
        expect(by('vocab')).toHaveLength(12);
        expect(by('vocab').filter((q) => q.section === 'vocab' && q.vocab.mode === 'listen')).toHaveLength(3);
        expect(by('grammar')).toHaveLength(22);
        expect(by('reading')).toHaveLength(6);
        // 22 điểm ngữ pháp khác nhau.
        const points = by('grammar').map((q) => (q.section === 'grammar' ? `${questionStage(q.id)}:${q.point}` : ''));
        expect(new Set(points).size).toBe(22);
        // 2 bài đọc của 2 chặng khác nhau, mỗi bài 3 câu.
        const readingStages = by('reading').map((q) => questionStage(q.id));
        expect(new Set(readingStages).size).toBe(2);
        // Mọi câu đều thuộc chặng của cấp.
        for (const q of qs) expect(questionStage(q.id).startsWith(level.toLowerCase())).toBe(true);
      }
    });
  }

  it('cùng hạt giống thì cùng đề, khác hạt giống thì khác đề', () => {
    const stages = levelStages(STAGE_LESSONS, 'A1');
    const vocab = vocabFor(stages);
    expect(drawLevelTest(stages, vocab, 7).map((q) => q.id)).toEqual(drawLevelTest(stages, vocab, 7).map((q) => q.id));
    expect(drawLevelTest(stages, vocab, 7).map((q) => q.id)).not.toEqual(drawLevelTest(stages, vocab, 8).map((q) => q.id));
  });

  it('server tìm lại được mọi câu theo mã và chấm được', () => {
    const stages = levelStages(STAGE_LESSONS, 'B1');
    const vocab = vocabFor(stages);
    for (const q of drawLevelTest(stages, vocab, 3)) {
      const found = findLevelQuestion(stages, vocab, q.id);
      expect(found?.id).toBe(q.id);
      expect(gradeTestQuestion(found!, '').correct).toBe(false);
    }
    expect(findLevelQuestion(stages, vocab, 'a1-01.r.0')).toBeNull();
  });
});

describe('scoreLevelTest', () => {
  const stages = levelStages(STAGE_LESSONS, 'A2');
  const qs = drawLevelTest(stages, vocabFor(stages), 5);

  it('đạt từ 24/40, điểm từng phần, liệt kê điểm ngữ pháp sai', () => {
    const grammar = qs.filter((q) => q.section === 'grammar');
    const wrong = new Set([...grammar.slice(0, 10), ...qs.filter((q) => q.section === 'vocab').slice(0, 6)].map((q) => q.id));
    const r = scoreLevelTest(qs.map((question) => ({ question, correct: !wrong.has(question.id) })));
    expect(r).toMatchObject({ score: 24, total: 40, passed: true });
    expect(r.sections).toEqual({ vocab: { right: 6, all: 12 }, grammar: { right: 12, all: 22 }, reading: { right: 6, all: 6 } });
    expect(r.weakPoints).toHaveLength(10);
    expect(r.weakPoints[0]).toMatch(/^a2-\d{2}:/);

    const r2 = scoreLevelTest(qs.map((question, i) => ({ question, correct: !wrong.has(question.id) && i !== qs.length - 1 })));
    expect(r2).toMatchObject({ score: 23, passed: false });
  });
});
