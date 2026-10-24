import type { Exercise, GrammarPoint, Lesson, StageLessons } from './types';

/**
 * Hàm soạn dữ liệu bài học cho gọn (`data/lessons/*.ts`). `defineStage` gán id ổn định theo vị trí.
 */
type Opts = { hint?: string; explain?: string };
type Draft = Exercise extends infer E ? (E extends Exercise ? Omit<E, 'id'> : never) : never;

function extra({ hint, explain }: Opts = {}) {
  return { ...(hint ? { hint_vi: hint } : {}), ...(explain ? { explain_vi: explain } : {}) };
}

const CLOZE_RE = /\{([^{}]+)\}/;

/** Câu có một chỗ trống `{đáp án}`; `alt` thêm đáp án khác cũng đúng. */
export function fill(text: string, vi: string, opts: Opts & { alt?: string[] } = {}): Draft {
  const m = CLOZE_RE.exec(text);
  return { kind: 'fill', text, vi, answers: [m ? m[1] : '', ...(opts.alt ?? [])], ...extra(opts) };
}

/** Mảnh câu ngăn bằng ` / ` theo thứ tự đúng; `alt` là các câu đúng khác. */
export function order(sentence: string, vi: string, opts: Opts & { alt?: string[] } = {}): Draft {
  const chunks = sentence.split(' / ').map((c) => c.trim());
  return { kind: 'order', chunks, vi, answers: [chunks.join(' '), ...(opts.alt ?? [])], ...extra(opts) };
}

/** Câu có `___`, các lựa chọn và đáp án đúng. */
export function choose(text: string, options: string[], answer: string, opts: Opts & { vi?: string } = {}): Draft {
  return { kind: 'choose', text, options, answer, ...(opts.vi ? { vi: opts.vi } : {}), ...extra(opts) };
}

export function transform(instruction_vi: string, text: string, answers: string | string[], opts: Opts = {}): Draft {
  return { kind: 'transform', instruction_vi, text, answers: [answers].flat(), ...extra(opts) };
}

export function translate(vi: string, answers: string | string[], opts: Opts = {}): Draft {
  return { kind: 'translate', vi, answers: [answers].flat(), ...extra(opts) };
}

export function listen(text: string, opts: Opts & { alt?: string[] } = {}): Draft {
  return { kind: 'listen', text, answers: [text, ...(opts.alt ?? [])], ...extra(opts) };
}

export const RICHTIG = 'richtig';
export const FALSCH = 'falsch';

/** Câu hỏi richtig/falsch về hội thoại hoặc bài đọc. */
export function tf(statement: string, isTrue: boolean, opts: Opts = {}): Draft {
  return { kind: 'question', text: statement, options: [RICHTIG, FALSCH], answer: isTrue ? RICHTIG : FALSCH, ...extra(opts) };
}

/** Câu hỏi chọn một đáp án về hội thoại hoặc bài đọc. */
export function mc(question: string, options: string[], answer: string, opts: Opts = {}): Draft {
  return { kind: 'question', text: question, options, answer, ...extra(opts) };
}

type SectionInput = { text_vi: string; table?: string; examples: [string, string][]; exercises: Draft[] };

export type LessonInput = Omit<Lesson, 'id' | 'stage_id' | 'grammar' | 'dialogue'> & {
  grammar: { point: string; sections: SectionInput[]; mixed: Draft[] };
  dialogue: Omit<Lesson['dialogue'], 'questions'> & { questions: Draft[] };
};

export type StageInput = {
  stage_id: string;
  points: GrammarPoint[];
  lessons: LessonInput[];
  test: {
    grammar: Record<string, Draft[]>;
    reading: Omit<StageLessons['test']['reading'], 'questions'> & { questions: Draft[] };
  };
};

function withIds(prefix: string, list: Draft[]): Exercise[] {
  return list.map((e, i) => ({ ...e, id: `${prefix}.${i}` }) as Exercise);
}

export function defineStage(input: StageInput): StageLessons {
  const lessons: Lesson[] = input.lessons.map((l, li) => {
    const id = `${input.stage_id}-${li + 1}`;
    return {
      ...l,
      id,
      stage_id: input.stage_id,
      grammar: {
        point: l.grammar.point,
        sections: l.grammar.sections.map((s, si) => ({ ...s, exercises: withIds(`${id}.g${si}`, s.exercises) })),
        mixed: withIds(`${id}.m`, l.grammar.mixed),
      },
      dialogue: { ...l.dialogue, questions: withIds(`${id}.q`, l.dialogue.questions) },
    };
  });
  return {
    stage_id: input.stage_id,
    points: input.points,
    lessons,
    test: {
      grammar: Object.fromEntries(
        Object.entries(input.test.grammar).map(([key, list]) => [key, withIds(`${input.stage_id}.t.${key}`, list)]),
      ),
      reading: { ...input.test.reading, questions: withIds(`${input.stage_id}.r`, input.test.reading.questions) },
    },
  };
}
