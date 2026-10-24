/**
 * Chỗ trống của thẻ điền (cloze). Người dùng hoặc AI đánh dấu phần bỏ trống bằng ngoặc nhọn ngay trong câu ví dụ:
 * `Ich fahre mit {dem} Bus.` Không có dấu thì tự tìm từ cần học trong câu (DECISIONS.md).
 */
export type Cloze = { before: string; answer: string; after: string };

const MARKER = /\{([^{}]*)\}/g;

/** Báo lỗi dấu ngoặc nhọn viết sai; null nếu ổn (không có dấu hoặc đúng một chỗ trống). */
export function clozeMarkerError(sentence: string): string | null {
  const opens = (sentence.match(/\{/g) ?? []).length;
  const closes = (sentence.match(/\}/g) ?? []).length;
  if (opens === 0 && closes === 0) return null;
  const markers = [...sentence.matchAll(MARKER)];
  if (opens !== closes || markers.length !== opens) return 'Dấu { } bị lệch. Viết chỗ trống dạng: Ich fahre mit {dem} Bus.';
  if (markers.length > 1) return 'Chỉ đánh dấu một chỗ trống { } trong câu.';
  if (markers[0][1].trim() === '') return 'Chỗ trống { } không được rỗng.';
  return null;
}

export function hasClozeMarker(sentence: string): boolean {
  return /[{}]/.test(sentence);
}

/** Bỏ dấu ngoặc nhọn để hiển thị hoặc đọc to câu. */
export function stripCloze(sentence: string): string {
  return sentence.replace(/[{}]/g, '');
}

function parseMarked(sentence: string): Cloze | null {
  if (clozeMarkerError(sentence)) return null;
  const match = /\{([^{}]*)\}/.exec(sentence);
  if (!match) return null;
  return {
    before: sentence.slice(0, match.index),
    answer: match[1].trim(),
    after: sentence.slice(match.index + match[0].length),
  };
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Tìm chỗ trống trong câu: ưu tiên dấu `{…}`; không có thì tìm `german` như một từ trọn vẹn, không phân biệt hoa thường.
 * Trả null nếu không có chỗ trống hợp lệ (khi đó không tạo thẻ cloze).
 */
export function findCloze(sentence: string, german: string): Cloze | null {
  const text = sentence.trim();
  if (!text) return null;
  if (hasClozeMarker(text)) return parseMarked(text);

  const target = german.trim().replace(/\s+/g, ' ');
  if (!target) return null;
  const pattern = escapeRegExp(target).replace(/ /g, '\\s+');
  const match = new RegExp(`(?<![\\p{L}\\p{N}])${pattern}(?![\\p{L}\\p{N}])`, 'iu').exec(text);
  if (!match) return null;
  return {
    before: text.slice(0, match.index),
    answer: match[0],
    after: text.slice(match.index + match[0].length),
  };
}
