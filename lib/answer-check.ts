/**
 * Chấm đáp án gõ tay (SPEC F3). Hàm thuần, không phụ thuộc UI hay CSDL.
 */
export type AnswerFlag =
  | 'umlaut_fallback'
  | 'eszett_fallback'
  | 'capitalization'
  | 'wrong_article'
  | 'missing_article';

export type CheckResult = {
  correct: boolean;
  flags: AnswerFlag[];
  /** Đáp án khớp nhất (để hiện lại); null nếu sai hẳn. */
  matched: string | null;
};

const ARTICLE_RE = /^(der|die|das)\s+/i;

/** Bỏ khoảng trắng thừa, chuẩn hóa dấu nháy, bỏ dấu chấm câu cuối. */
export function normalizeAnswer(text: string): string {
  return text
    .normalize('NFC')
    .replace(/[‘’‚‛`´]/g, "'")
    .replace(/[“”„‟«»]/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[\s.!?…,;:]+$/u, '')
    .trim();
}

function foldUmlauts(s: string): string {
  return s
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/Ä/g, 'Ae')
    .replace(/Ö/g, 'Oe')
    .replace(/Ü/g, 'Ue');
}

function foldEszett(s: string): string {
  return s.replace(/ß/g, 'ss').replace(/ẞ/g, 'SS');
}

/** So một chuỗi đã chuẩn hóa với một đáp án; null nếu không chấp nhận được. */
function compare(given: string, expected: string): AnswerFlag[] | null {
  if (given === expected) return [];
  const g = foldUmlauts(foldEszett(given));
  const e = foldUmlauts(foldEszett(expected));
  if (g.toLowerCase() !== e.toLowerCase()) return null;

  const flags: AnswerFlag[] = [];
  if (foldEszett(given).toLowerCase() !== foldEszett(expected).toLowerCase()) flags.push('umlaut_fallback');
  if (foldUmlauts(given).toLowerCase() !== foldUmlauts(expected).toLowerCase()) flags.push('eszett_fallback');
  if (g !== e) flags.push('capitalization');
  return flags;
}

function splitArticle(text: string): { article: string | null; rest: string } {
  const m = ARTICLE_RE.exec(text);
  return m ? { article: m[1].toLowerCase(), rest: text.slice(m[0].length) } : { article: null, rest: text };
}

/**
 * Chấm `given` với các đáp án chấp nhận được.
 * `article`: mạo từ đúng nếu đây là danh từ cần gõ kèm mạo từ (`der Tisch`); đáp án trong `accepted` là danh từ không kèm mạo từ.
 */
export function checkAnswer(given: string, accepted: readonly string[], article: string | null = null): CheckResult {
  const input = normalizeAnswer(given);
  if (!input) return { correct: false, flags: [], matched: null };

  if (article) {
    const { article: givenArticle, rest } = splitArticle(input);
    const nounMatch = best(rest, accepted);
    if (!nounMatch) return { correct: false, flags: [], matched: null };
    const full = `${article} ${nounMatch.answer}`;
    if (!givenArticle) return { correct: false, flags: ['missing_article', ...nounMatch.flags], matched: full };
    if (givenArticle !== article) return { correct: false, flags: ['wrong_article', ...nounMatch.flags], matched: full };
    return { correct: true, flags: nounMatch.flags, matched: full };
  }

  const match = best(input, accepted);
  return match ? { correct: true, flags: match.flags, matched: match.answer } : { correct: false, flags: [], matched: null };
}

function best(input: string, accepted: readonly string[]): { answer: string; flags: AnswerFlag[] } | null {
  let found: { answer: string; flags: AnswerFlag[] } | null = null;
  for (const raw of accepted) {
    const answer = normalizeAnswer(raw);
    const flags = compare(input, answer);
    if (flags && (!found || flags.length < found.flags.length)) found = { answer, flags };
    if (found && found.flags.length === 0) break;
  }
  return found;
}

export type RatingInput = {
  correct: boolean;
  flags: readonly AnswerFlag[];
  usedHint: boolean;
  responseMs: number;
  /** Trạng thái FSRS của thẻ trước khi trả lời: 0 New, 1 Learning, 2 Review, 3 Relearning. */
  state: number;
};

/** Đề xuất rating (SPEC F3): Sai → 1; đúng nhưng có gợi ý/cờ/quá 15 giây → 2; đúng → 3; đúng nhanh dưới 4 giây ở thẻ Review → 4. */
export function suggestRating({ correct, flags, usedHint, responseMs, state }: RatingInput): 1 | 2 | 3 | 4 {
  if (!correct) return 1;
  if (usedHint || flags.length > 0 || responseMs > 15_000) return 2;
  if (responseMs < 4_000 && state === 2) return 4;
  return 3;
}
