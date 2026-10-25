import { checkAnswer, normalizeAnswer, suggestRating, type AnswerFlag } from '@/lib/answer-check';
import type { Exercise } from './types';

/**
 * Chấm bài tập của bài học (SPEC F11). Hàm thuần, chạy ở client để không phải chờ mạng.
 */
export type ExerciseResult = {
  correct: boolean;
  flags: AnswerFlag[];
  /** Đáp án để hiện lại sau khi trả lời. */
  expected: string;
  /** Không khớp đáp án soạn sẵn nhưng có thể vẫn đúng: hỏi AI (P6). */
  askAi: boolean;
};

const CLOZE_RE = /\{[^{}]+\}/;

/** Câu đầy đủ của bài tập (đáp án đầu tiên ghép vào), để hiện và để ghi sổ lỗi. */
export function fullSentence(ex: Exercise, answer?: string): string {
  switch (ex.kind) {
    case 'fill':
      return ex.text.replace(CLOZE_RE, answer ?? ex.answers[0]);
    case 'choose':
      return ex.text.replace('___', answer ?? ex.answer);
    case 'order':
    case 'transform':
    case 'translate':
    case 'listen':
      return answer ?? ex.answers[0];
    case 'question':
      return answer ?? ex.answer;
  }
}

export function expectedAnswer(ex: Exercise): string {
  switch (ex.kind) {
    case 'choose':
    case 'question':
      return ex.answer;
    default:
      return ex.answers[0];
  }
}

/** Bỏ dấu câu (giữ chữ, số, dấu nháy trong từ như geht's). */
export function stripPunctuation(text: string): string {
  return text.replace(/[.,!?;:…–—"„“”«»()]/g, ' ').replace(/s+/g, ' ').trim();
}

/** So câu ghép từ mảnh: bỏ khoảng trắng thừa và dấu câu cuối, phân biệt hoa thường. */
function sameSentence(a: string, b: string): boolean {
  return normalizeAnswer(a) === normalizeAnswer(b);
}

export function gradeExercise(ex: Exercise, given: string): ExerciseResult {
  const expected = expectedAnswer(ex);
  switch (ex.kind) {
    case 'choose':
    case 'question':
      return { correct: given === ex.answer, flags: [], expected, askAi: false };
    case 'order':
      return { correct: ex.answers.some((a) => sameSentence(given, a)), flags: [], expected, askAi: false };
    case 'fill': {
      const r = checkAnswer(given, ex.answers);
      return { correct: r.correct, flags: r.flags, expected, askAi: false };
    }
    case 'listen': {
      // Chép chính tả: chỉ chấm chữ, bỏ qua dấu câu ở giữa câu.
      const r = checkAnswer(stripPunctuation(given), ex.answers.map(stripPunctuation));
      return { correct: r.correct, flags: r.flags, expected, askAi: false };
    }
    case 'transform':
    case 'translate': {
      const r = checkAnswer(given, ex.answers);
      return { correct: r.correct, flags: r.flags, expected, askAi: !r.correct && normalizeAnswer(given).length > 0 };
    }
  }
}

/** Rating cho lần ôn đầu của thẻ vi_de từ lượt gợi nhớ ở bài học (luật đề xuất của F3, thẻ đang New). */
export function recallRating(input: { correct: boolean; flags: readonly AnswerFlag[]; responseMs: number; usedHint?: boolean }): 1 | 2 | 3 | 4 {
  return suggestRating({ ...input, usedHint: input.usedHint ?? false, state: 0 });
}

/** Thứ tự xáo trộn ổn định theo hạt giống (để test được và không đổi khi render lại). */
export function shuffled<T>(list: readonly T[], seed: number): T[] {
  const out = [...list];
  let s = seed >>> 0 || 1;
  for (let i = out.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const j = s % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Xáo mảnh câu sao cho không trùng thứ tự đúng (nếu có thể). */
export function shuffledChunks(chunks: readonly string[], seed: number): string[] {
  if (chunks.length < 2) return [...chunks];
  for (let k = 0; k < 10; k++) {
    const s = shuffled(chunks, seed + k);
    if (s.some((c, i) => c !== chunks[i])) return s;
  }
  return [...chunks].reverse();
}

/** Băm chuỗi thành số (hạt giống xáo trộn theo id bài tập). */
export function hashSeed(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return h >>> 0;
}
