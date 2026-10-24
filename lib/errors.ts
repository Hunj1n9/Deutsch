/**
 * Sổ lỗi (SPEC F4): khóa lỗi, câu sai/câu đúng cho thẻ sửa lỗi, quy tắc đóng và mở lại lỗi. Hàm thuần.
 */

export const ERROR_CATEGORIES = [
  'gender',
  'case',
  'adjective_ending',
  'verb_position',
  'conjugation',
  'preposition',
  'separable_verb',
  'plural',
  'spelling',
  'word_choice',
  'tense',
  'other',
] as const;
export type ErrorCategory = (typeof ERROR_CATEGORIES)[number];

export const CATEGORY_VI: Record<ErrorCategory, string> = {
  gender: 'Giống (mạo từ)',
  case: 'Cách (Kasus)',
  adjective_ending: 'Đuôi tính từ',
  verb_position: 'Vị trí động từ',
  conjugation: 'Chia động từ',
  preposition: 'Giới từ',
  separable_verb: 'Động từ tách',
  plural: 'Số nhiều',
  spelling: 'Chính tả',
  word_choice: 'Chọn từ',
  tense: 'Thì',
  other: 'Khác',
};

export const RULE_KEY_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const RULE_KEY_MAX = 40;

/** Chuẩn hóa về dạng khóa: chữ thường không dấu, gạch nối, tối đa 40 ký tự (`dativ-nach-mit`). */
export function normalizeRuleKey(raw: string): string {
  const ascii = raw
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/đ/g, 'd')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
  return ascii
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, RULE_KEY_MAX)
    .replace(/-+$/g, '');
}

/** Khóa lỗi giống của một danh từ: `gender-tisch`. */
export function genderRuleKey(noun: string): string {
  return normalizeRuleKey(`gender-${noun}`);
}

export type TextError = { start: number; end: number; wrong: string; correct: string };

type Sentence = { start: number; end: number };

/** Tách câu theo dấu . ! ? (giữ vị trí ký tự trong văn bản gốc). */
export function splitSentences(text: string): Sentence[] {
  const out: Sentence[] = [];
  const re = /[^.!?]+(?:[.!?]+|$)/g;
  for (const m of text.matchAll(re)) {
    const raw = m[0];
    const lead = raw.length - raw.trimStart().length;
    const body = raw.trim();
    if (!body) continue;
    const start = (m.index ?? 0) + lead;
    out.push({ start, end: start + body.length });
  }
  return out;
}

function applyFixes(text: string, offset: number, fixes: readonly TextError[]): string {
  let out = text;
  for (const f of [...fixes].sort((a, b) => b.start - a.start)) {
    out = out.slice(0, f.start - offset) + f.correct + out.slice(f.end - offset);
  }
  return out;
}

/**
 * Với mỗi lỗi: câu sai chỉ còn đúng lỗi đó (các lỗi khác cùng câu đã sửa) và câu đúng hoàn toàn.
 * Dùng làm câu cho thẻ sửa lỗi, để người học chỉ phải sửa đúng một quy tắc.
 */
export function errorSentences(text: string, errors: readonly TextError[]): { text_wrong: string; text_correct: string }[] {
  const sentences = splitSentences(text);
  return errors.map((err) => {
    const s = sentences.find((x) => err.start >= x.start && err.start < x.end) ?? { start: 0, end: text.length };
    const end = Math.max(s.end, err.end);
    const inside = errors.filter((e) => e.start >= s.start && e.end <= end);
    const sentence = text.slice(s.start, end);
    return {
      text_wrong: applyFixes(sentence, s.start, inside.filter((e) => e !== err)),
      text_correct: applyFixes(sentence, s.start, inside),
    };
  });
}

/**
 * AI trả vị trí `start`/`end`; nếu `text.slice(start, end) !== wrong` thì tìm lại `wrong` gần vị trí cũ nhất (SPEC P2).
 * Không tìm thấy thì bỏ lỗi đó khỏi phần gạch chân (trả null).
 */
export function fixOffset(text: string, err: { start: number; end: number; wrong: string }): { start: number; end: number } | null {
  if (err.wrong && text.slice(err.start, err.end) === err.wrong) return { start: err.start, end: err.end };
  if (!err.wrong) return null;
  let best: number | null = null;
  for (let i = text.indexOf(err.wrong); i !== -1; i = text.indexOf(err.wrong, i + 1)) {
    if (best === null || Math.abs(i - err.start) < Math.abs(best - err.start)) best = i;
  }
  return best === null ? null : { start: best, end: best + err.wrong.length };
}

export type ErrorFixReview = { correct: boolean; reviewed_at: string };

/**
 * Đóng lỗi khi đủ cả ba (SPEC F4):
 * 1. Thẻ error_fix đúng 3 lần liên tiếp gần nhất.
 * 2. Lần đúng gần nhất có scheduled_days ≥ 21 (khoảng ôn sau lần đó).
 * 3. Không có lần mắc mới trong 30 ngày.
 */
export function shouldResolve({
  reviews,
  scheduledDaysAfterLast,
  lastOccurrenceAt,
  now,
}: {
  /** Các lần ôn thẻ error_fix, cũ → mới. */
  reviews: readonly ErrorFixReview[];
  scheduledDaysAfterLast: number;
  lastOccurrenceAt: string;
  now: Date;
}): boolean {
  const last3 = reviews.slice(-3);
  if (last3.length < 3 || !last3.every((r) => r.correct)) return false;
  if (scheduledDaysAfterLast < 21) return false;
  const daysSince = (now.getTime() - new Date(lastOccurrenceAt).getTime()) / 86_400_000;
  return daysSince >= 30;
}

/** Lỗi đã đóng mà mắc lại thì mở lại (SPEC F4). */
export function statusAfterOccurrence(status: 'open' | 'resolved'): 'open' {
  void status;
  return 'open';
}

export type ErrorSpan = { first_seen: string; resolved_at: string | null; status: 'open' | 'resolved' };

/**
 * Số lỗi đang mở ở cuối mỗi tuần (biểu đồ 8 tuần ở màn Sổ lỗi). `weekEnds` là các mốc thời gian cuối tuần.
 * Lỗi mở lại sau khi đóng được tính theo trạng thái hiện tại (không có lịch sử chuyển trạng thái).
 */
export function openErrorsByWeek(errors: readonly ErrorSpan[], weekEnds: readonly Date[]): number[] {
  return weekEnds.map((end) => {
    const t = end.getTime();
    return errors.filter((e) => {
      if (new Date(e.first_seen).getTime() > t) return false;
      if (e.status === 'resolved' && e.resolved_at) return new Date(e.resolved_at).getTime() > t;
      return true;
    }).length;
  });
}

/** Chọn câu sai cho lượt này của thẻ error_fix: xoay vòng theo số lần đã ôn. */
export function rotateOccurrence<T>(occurrences: readonly T[], reps: number): T | null {
  if (occurrences.length === 0) return null;
  return occurrences[reps % occurrences.length];
}
