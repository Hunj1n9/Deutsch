import { shuffled } from './grade';

/**
 * Bước Từ mới (SPEC F11): hàm thuần cho các bậc luyện trước lượt gõ.
 */

type ChoiceWord = { key: string; vietnamese: string };

function sameMeaning(a: string, b: string): boolean {
  return a.trim().toLowerCase() === b.trim().toLowerCase();
}

/**
 * Các phương án cho câu "Việt → chọn từ tiếng Đức": đáp án đúng và tối đa `size - 1` từ nhiễu.
 * Nhiễu lấy trước trong nhóm đang học (để phân biệt các từ vừa gặp), thiếu thì lấy thêm từ khác của bài.
 * Bỏ từ trùng nghĩa với đáp án để câu hỏi không có hai đáp án đúng. Thứ tự ổn định theo `seed`.
 */
export function wordChoices<T extends ChoiceWord>(target: T, group: readonly T[], lesson: readonly T[], seed: number, size = 4): T[] {
  const used = new Set([target.key]);
  const pick = (list: readonly T[]) =>
    shuffled(list, seed).filter((w) => {
      if (used.has(w.key) || sameMeaning(w.vietnamese, target.vietnamese)) return false;
      used.add(w.key);
      return true;
    });
  const distractors = [...pick(group), ...pick(lesson)].slice(0, size - 1);
  return shuffled([target, ...distractors], seed + 1);
}

/** Gợi ý chữ đầu cho lượt gõ: giữ chữ đầu mỗi từ, các chữ còn lại thành `_`; không lộ mạo từ. */
export function letterHint(german: string): string {
  return german
    .split(' ')
    .map((word) => {
      let seen = false;
      return [...word]
        .map((ch) => {
          if (!/\p{L}/u.test(ch) || !seen) {
            seen ||= /\p{L}/u.test(ch);
            return ch;
          }
          return '_';
        })
        .join(' ');
    })
    .join('   ');
}
