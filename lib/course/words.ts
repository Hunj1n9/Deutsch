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

/** Các kiểu luyện giữa xem lại nhóm và lượt gõ, xếp từ dễ đến khó. */
export type DrillKind = 'listen' | 'meaning' | 'article' | 'choose' | 'spell';
export type DrillTask = { kind: DrillKind; key: string };

type DrillWord = { key: string; german: string; article: string | null };

const MAX_SPELL = 12;

/** Xếp chữ cái chỉ hợp với từ ngắn (đếm ký tự không phải khoảng trắng). */
export function spellable(german: string): boolean {
  const n = german.replace(/\s/g, '').length;
  return n >= 2 && n <= MAX_SPELL;
}

/** Các mảnh chữ để xếp: mọi ký tự không phải khoảng trắng, xáo theo `seed`, tránh trùng thứ tự đúng nếu được. */
export function spellTiles(german: string, seed: number): string[] {
  const chars = [...german.replace(/\s/g, '')];
  for (let k = 0; k < 10; k++) {
    const out = shuffled(chars, seed + k);
    if (out.join('') !== chars.join('')) return out;
  }
  return chars;
}

/** Ghép các chữ đã chọn vào khuôn của từ (giữ khoảng trắng), chỗ chưa có thành `_`. */
export function spellPreview(german: string, picked: readonly string[]): string {
  let i = 0;
  return [...german].map((ch) => (/\s/.test(ch) ? ' ' : (picked[i++] ?? '_'))).join('');
}

/** Chữ cần chạm tiếp theo (null khi đã xếp xong). */
export function spellNext(german: string, picked: readonly string[]): string | null {
  return [...german.replace(/\s/g, '')][picked.length] ?? null;
}

/**
 * Lượt luyện của một nhóm: (1) nhận ra nghĩa (nghe nếu trình duyệt đọc được, không thì nhìn chữ),
 * (2) chọn mạo từ (chỉ danh từ), (3) Việt → chọn từ Đức, (4) xếp chữ cái (từ ngắn).
 * Mỗi vòng xáo thứ tự riêng để các từ xen nhau.
 */
export function buildDrill(group: readonly DrillWord[], seed: number, { listen }: { listen: boolean }): DrillTask[] {
  const rounds: DrillTask[][] = [
    group.map((w) => ({ kind: listen ? 'listen' : 'meaning', key: w.key })),
    group.filter((w) => w.article).map((w) => ({ kind: 'article', key: w.key })),
    group.map((w) => ({ kind: 'choose', key: w.key })),
    group.filter((w) => spellable(w.german)).map((w) => ({ kind: 'spell', key: w.key })),
  ];
  return rounds.flatMap((round, i) => shuffled(round, seed + i));
}
