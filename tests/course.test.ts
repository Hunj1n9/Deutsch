import { describe, expect, it } from 'vitest';
import { STAGE_LESSONS } from '@/data/lessons';
import { STAGES } from '@/data/roadmap';
import { packDrafts, vocabEntries } from '@/lib/course/catalog';
import { choose, defineStage, fill, listen, mc, order, tf, transform, translate } from '@/lib/course/define';
import { fullSentence, gradeExercise, recallRating, shuffledChunks } from '@/lib/course/grade';
import { coursePosition, learnHref, lessonDone, stageStatus, unfinishedBefore, type LessonState } from '@/lib/course/position';
import {
  drawStageTest,
  findTestQuestion,
  gradeTestQuestion,
  scoreTest,
  stageTestSize,
  type TestQuestion,
} from '@/lib/course/stage-test';
import type { Exercise, StageLessons } from '@/lib/course/types';
import { validateStageLessons } from '@/lib/course/validate';

const ex = (d: ReturnType<typeof fill>, id = 'x.0') => ({ ...d, id }) as Exercise;

describe('gradeExercise', () => {
  it('fill: chấp nhận umlaut thay thế kèm cờ, sai thì không', () => {
    const e = ex(fill('Er {fährt} nach Berlin.', 'Anh ấy đi Berlin.'));
    expect(gradeExercise(e, 'fährt')).toMatchObject({ correct: true, flags: [] });
    expect(gradeExercise(e, 'faehrt')).toMatchObject({ correct: true, flags: ['umlaut_fallback'] });
    expect(gradeExercise(e, 'fahrt').correct).toBe(false);
    expect(fullSentence(e)).toBe('Er fährt nach Berlin.');
    expect(fullSentence(e, 'fahrt')).toBe('Er fahrt nach Berlin.');
  });

  it('fill: đáp án alt', () => {
    const e = ex(fill('Ich {heiße} Minh.', '', { alt: ['bin'] }));
    expect(gradeExercise(e, 'bin').correct).toBe(true);
  });

  it('order: khớp câu đúng hoặc câu alt, bỏ dấu câu cuối', () => {
    const e = ex(order('Wo / wohnst / du?', 'Bạn sống ở đâu?', { alt: ['Du wohnst wo?'] }));
    expect(gradeExercise(e, 'Wo wohnst du').correct).toBe(true);
    expect(gradeExercise(e, 'Du wohnst wo?').correct).toBe(true);
    expect(gradeExercise(e, 'Wohnst wo du?').correct).toBe(false);
  });

  it('choose / question: khớp đúng lựa chọn', () => {
    const c = ex(choose('___ heiße Minh.', ['Ich', 'Du'], 'Ich'));
    expect(gradeExercise(c, 'Ich').correct).toBe(true);
    expect(gradeExercise(c, 'Du').correct).toBe(false);
    expect(fullSentence(c)).toBe('Ich heiße Minh.');
    expect(gradeExercise(ex(tf('Lan wohnt in Berlin.', false)), 'falsch').correct).toBe(true);
    expect(gradeExercise(ex(mc('?', ['a', 'b'], 'b')), 'a').correct).toBe(false);
  });

  it('transform / translate: sai mà có chữ thì hỏi AI, để trống thì không', () => {
    const t = ex(transform('ngôi er', 'Ich habe Zeit.', ['Er hat Zeit.']));
    expect(gradeExercise(t, 'Er hat Zeit').correct).toBe(true);
    expect(gradeExercise(t, 'Er hat keine Zeit.')).toMatchObject({ correct: false, askAi: true });
    expect(gradeExercise(t, '  ')).toMatchObject({ correct: false, askAi: false });
    const tr = ex(translate('Tôi 25 tuổi.', ['Ich bin 25.', 'Ich bin 25 Jahre alt.']));
    expect(gradeExercise(tr, 'ich bin 25 Jahre alt')).toMatchObject({ correct: true, flags: ['capitalization'] });
  });

  it('listen: bỏ qua dấu câu giữa câu nhưng vẫn chấm chữ', () => {
    const e = ex(listen('Freut mich, Anna!'));
    expect(gradeExercise(e, 'Freut mich Anna').correct).toBe(true);
    expect(gradeExercise(e, 'Freut mich, Ana').correct).toBe(false);
  });

  it('xáo mảnh câu không trùng thứ tự đúng', () => {
    const chunks = ['Wo', 'wohnst', 'du?'];
    for (let seed = 1; seed < 50; seed++) expect(shuffledChunks(chunks, seed)).not.toEqual(chunks);
  });
});

describe('recallRating (lần ôn đầu của thẻ vi_de)', () => {
  it('sai → Lại, có cờ hoặc chậm → Khó, đúng → Được, thẻ New không bao giờ Dễ', () => {
    expect(recallRating({ correct: false, flags: [], responseMs: 2000 })).toBe(1);
    expect(recallRating({ correct: true, flags: ['umlaut_fallback'], responseMs: 2000 })).toBe(2);
    expect(recallRating({ correct: true, flags: [], responseMs: 20_000 })).toBe(2);
    expect(recallRating({ correct: true, flags: [], responseMs: 2000 })).toBe(3);
    expect(recallRating({ correct: true, flags: [], responseMs: 2000, usedHint: true })).toBe(2);
  });
});

function tinyStage(id: string, lessons: number): StageLessons {
  return defineStage({
    stage_id: id,
    points: [],
    lessons: Array.from({ length: lessons }, () => ({
      title_vi: 't',
      goal_vi: 'g',
      items: [],
      grammar: { point: 'p', sections: [], mixed: [] },
      dialogue: { title_de: 'd', lines: [], gloss: {}, questions: [], dictation: [] },
      writing_prompt_vi: 'w',
    })),
    test: { grammar: {}, reading: { title_de: '', text_de: '', gloss: {}, questions: [] } },
  });
}

describe('coursePosition', () => {
  const stages = [tinyStage('a1-01', 2), tinyStage('a1-02', 2)];
  const st = (s: Partial<LessonState>): LessonState => ({ step: 0, completed: false, skipped: false, score: null, total: null, ...s });

  it('bắt đầu ở bài đầu tiên', () => {
    expect(coursePosition(stages, new Map(), new Set())).toMatchObject({ kind: 'lesson', lesson: { id: 'a1-01-1' }, state: null });
  });

  it('bài đang dở vẫn là việc kế tiếp; xong hết bài thì là kiểm tra', () => {
    const p = new Map([['a1-01-1', st({ completed: true })], ['a1-01-2', st({ step: 3 })]]);
    expect(coursePosition(stages, p, new Set())).toMatchObject({ kind: 'lesson', lesson: { id: 'a1-01-2' }, state: { step: 3 } });
    p.set('a1-01-2', st({ completed: true }));
    expect(coursePosition(stages, p, new Set())).toMatchObject({ kind: 'test', stage: { stage_id: 'a1-01' } });
    expect(stageStatus(stages[0], p, new Set())).toBe('lessons_done');
  });

  it('qua kiểm tra thì sang chặng sau; qua hết thì null', () => {
    expect(coursePosition(stages, new Map(), new Set(['a1-01']))).toMatchObject({ lesson: { id: 'a1-02-1' } });
    expect(coursePosition(stages, new Map(), new Set(['a1-01', 'a1-02']))).toBeNull();
    expect(stageStatus(stages[0], new Map(), new Set(['a1-01']))).toBe('passed');
    expect(stageStatus(stages[1], new Map([['a1-02-1', st({ step: 1 })]]), new Set())).toBe('learning');
  });

  it('bỏ qua (skipped) tính như đã xong; mở bài không theo thứ tự thì biết bài trước chưa xong', () => {
    expect(lessonDone(st({ skipped: true }))).toBe(true);
    expect(unfinishedBefore(stages, 'a1-02-1', new Map(), new Set())).toMatchObject({ id: 'a1-01-1' });
    expect(unfinishedBefore(stages, 'a1-02-1', new Map(), new Set(['a1-01']))).toBeNull();
    expect(unfinishedBefore(stages, 'a1-01-1', new Map(), new Set())).toBeNull();
  });
});

describe('kiểm tra chặng (F12)', () => {
  const stage = STAGE_LESSONS[0];
  const vocab = vocabEntries(stage.stage_id);

  it('rút đủ 20 câu đúng tỉ lệ, không trùng, tìm lại được theo id', () => {
    for (const seed of [1, 7, 12345]) {
      const qs = drawStageTest(stage, vocab, seed);
      expect(qs).toHaveLength(20);
      expect(new Set(qs.map((q) => q.id)).size).toBe(20);
      expect(qs.filter((q) => q.section === 'vocab')).toHaveLength(8);
      expect(qs.filter((q) => q.section === 'vocab' && q.vocab.mode === 'listen')).toHaveLength(2);
      expect(qs.filter((q) => q.section === 'grammar')).toHaveLength(9);
      for (const p of stage.points) expect(qs.filter((q) => q.section === 'grammar' && q.point === p.key)).toHaveLength(3);
      expect(qs.filter((q) => q.section === 'reading')).toHaveLength(3);
      for (const q of qs) expect(findTestQuestion(stage, vocab, q.id)?.id).toBe(q.id);
    }
  });

  it('chặng 4 điểm ngữ pháp: đề 23 câu, đạt từ 19', () => {
    expect(stageTestSize(3)).toEqual({ total: 20, pass: 16 });
    expect(stageTestSize(4)).toEqual({ total: 23, pass: 19 });
    const four = STAGE_LESSONS.find((s) => s.points.length === 4)!;
    const qs = drawStageTest(four, vocabEntries(four.stage_id), 5);
    expect(qs).toHaveLength(23);
    expect(qs.filter((q) => q.section === 'grammar')).toHaveLength(12);
  });

  it('câu từ vựng: danh từ phải đúng mạo từ', () => {
    const entry = vocab.find((v) => v.article)!;
    const q: TestQuestion = { section: 'vocab', id: 'v', vocab: { id: 'v', mode: 'vi_de', entry } };
    expect(gradeTestQuestion(q, `${entry.article} ${entry.german}`).correct).toBe(true);
    expect(gradeTestQuestion(q, entry.german).correct).toBe(false);
  });

  it('đạt khi ≥ 16/20; điểm ngữ pháp đúng dưới 2/3 là điểm yếu', () => {
    const qs = drawStageTest(stage, vocab, 3);
    const weak = stage.points[0].key;
    const results = qs.map((question, i) => ({
      question,
      correct: !(question.section === 'grammar' && question.point === weak) && i !== 0,
    }));
    // Sai 3 câu của một điểm + 1 câu từ vựng = 16/20.
    expect(scoreTest(results)).toEqual({ score: 16, total: 20, passed: true, weakPoints: [weak] });
    results[1].correct = false;
    expect(scoreTest(results).passed).toBe(false);
  });
});

describe('dữ liệu bài học (TCHT F11)', () => {
  it('mọi chặng có bài đều hợp lệ', () => {
    let known = new Set<string>();
    const ids = new Set<string>();
    for (const stage of STAGE_LESSONS) {
      const roadmap = STAGES.find((s) => s.id === stage.stage_id);
      expect(roadmap, stage.stage_id).toBeDefined();
      const r = validateStageLessons(stage, [...packDrafts(stage.stage_id).values()], roadmap!.grammar.length, known);
      expect(r.problems, stage.stage_id).toEqual([]);
      known = r.known;
      for (const l of stage.lessons) {
        expect(ids.has(l.id)).toBe(false);
        ids.add(l.id);
      }
    }
  });

  it('rule_key của các điểm ngữ pháp không trùng giữa các chặng', () => {
    const keys = STAGE_LESSONS.flatMap((s) => s.points.map((p) => p.rule_key));
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('bộ kiểm bắt được dữ liệu sai', () => {
    const bad = defineStage({
      stage_id: 'a1-99',
      points: [{ key: 'p', rule_key: 'Sai Khoa', category: 'other', title_vi: 't', explanation_vi: 'e' }],
      lessons: [
        {
          title_vi: 't',
          goal_vi: 'g',
          items: ['Tisch', 'Gibtsnicht'],
          grammar: {
            point: 'p',
            sections: [{ text_vi: 'x', examples: [], exercises: [fill('Kein Chỗ trống', 'x')] }],
            mixed: [choose('___ Tisch', ['der', 'die'], 'das'), order('Ich / bin', 'x', {})],
          },
          dialogue: { title_de: 'd', lines: [{ speaker: 'A', de: 'Quatsch Blabla Xyz', vi: '' }], gloss: {}, questions: [], dictation: [5] },
          writing_prompt_vi: 'w',
        },
      ],
      test: { grammar: {}, reading: { title_de: '', text_de: 'kurz', gloss: {}, questions: [] } },
    });
    const { problems } = validateStageLessons(bad, [], 3);
    const text = problems.join('\n');
    for (const needle of ['không có trong gói', 'rule_key sai', 'cần đúng một {…}', 'không nằm trong lựa chọn', 'chép chính tả', 'chưa học', 'kho kiểm tra', 'cần 3 điểm']) {
      expect(text).toContain(needle);
    }
  });
});

describe('learnHref', () => {
  it('mở đúng cấp và chặng từ mã chặng hoặc mã bài', () => {
    expect(learnHref('a1-03')).toBe('/learn?level=A1#a1-03');
    expect(learnHref('b2-11-4')).toBe('/learn?level=B2#b2-11');
  });

  it('mã chặng nào cũng thuộc một cấp có tab trên trang Học', () => {
    for (const s of STAGES) expect(learnHref(s.id)).toBe(`/learn?level=${s.level}#${s.id}`);
  });
});
