import type { ErrorCategory } from '@/lib/errors';

/**
 * Khóa học (SPEC F11, F12): kiểu dữ liệu bài học tĩnh trong `data/lessons/`. Không phụ thuộc UI hay CSDL.
 */

/** Phần chung của mọi bài tập. `id` do `defineStage` gán theo vị trí, ổn định giữa các lần build. */
type Base = { id: string; hint_vi?: string; explain_vi?: string };

export type Exercise =
  /** Câu có đúng một chỗ trống `{…}`; đáp án = chữ trong ngoặc + `alt`. */
  | (Base & { kind: 'fill'; text: string; vi: string; answers: string[] })
  /** Mảnh câu theo thứ tự đúng (app tự xáo); `answers` = các câu đúng (thứ tự khác cũng hợp lệ). */
  | (Base & { kind: 'order'; chunks: string[]; vi: string; answers: string[] })
  /** Câu có `___` + lựa chọn. */
  | (Base & { kind: 'choose'; text: string; vi?: string; options: string[]; answer: string })
  | (Base & { kind: 'transform'; instruction_vi: string; text: string; answers: string[] })
  | (Base & { kind: 'translate'; vi: string; answers: string[] })
  /** Nghe chép chính tả. */
  | (Base & { kind: 'listen'; text: string; answers: string[] })
  /** Câu hỏi hiểu (richtig/falsch hoặc a/b/c). */
  | (Base & { kind: 'question'; text: string; options: string[]; answer: string });

export type ExerciseKind = Exercise['kind'];

export type GrammarPoint = {
  key: string;
  rule_key: string;
  category: ErrorCategory;
  title_vi: string;
  /** 1–2 câu, dùng cho sổ lỗi. */
  explanation_vi: string;
};

export type GrammarSection = {
  /** Định dạng hạn chế: đoạn văn, **đậm**, danh sách `- `. */
  text_vi: string;
  /** Bảng: các dòng `a | b | c`, dòng đầu là tiêu đề. */
  table?: string;
  examples: [de: string, vi: string][];
  exercises: Exercise[];
};

export type DialogueLine = { speaker: 'A' | 'B'; de: string; vi: string };

export type Lesson = {
  id: string;
  stage_id: string;
  title_vi: string;
  goal_vi: string;
  /** Khóa mục trong gói: `german` của mục. */
  items: string[];
  grammar: { point: string; sections: GrammarSection[]; mixed: Exercise[] };
  dialogue: {
    title_de: string;
    lines: DialogueLine[];
    gloss: Record<string, string>;
    questions: Exercise[];
    /** Chỉ số dòng để chép chính tả. */
    dictation: number[];
  };
  writing_prompt_vi: string;
};

export type StageTestPool = {
  /** Câu ngữ pháp theo điểm ngữ pháp (key → bài tập). */
  grammar: Record<string, Exercise[]>;
  reading: { title_de: string; text_de: string; gloss: Record<string, string>; questions: Exercise[] };
};

export type StageLessons = {
  stage_id: string;
  points: GrammarPoint[];
  lessons: Lesson[];
  test: StageTestPool;
};

/** Các bước của một bài (SPEC F11), theo thứ tự; `lesson_progress.step` là chỉ số trong mảng này. */
export const LESSON_STEPS = ['goal', 'words', 'grammar', 'dialogue', 'writing', 'summary'] as const;
export type LessonStep = (typeof LESSON_STEPS)[number];
export const SUMMARY_STEP = LESSON_STEPS.indexOf('summary');

export const STEP_VI: Record<LessonStep, string> = {
  goal: 'Mục tiêu',
  words: 'Từ mới',
  grammar: 'Ngữ pháp',
  dialogue: 'Hội thoại',
  writing: 'Vận dụng',
  summary: 'Tổng kết',
};

export const KIND_VI: Record<ExerciseKind, string> = {
  fill: 'Điền chỗ trống',
  order: 'Sắp xếp câu',
  choose: 'Chọn đáp án',
  transform: 'Biến đổi câu',
  translate: 'Dịch sang tiếng Đức',
  listen: 'Nghe và chép',
  question: 'Hiểu bài',
};
