import { emptyDraft, isArticle, type ItemDraft, type Pos } from '@/lib/items/types';

/**
 * Định dạng gói từ tự viết (F10). Mỗi dòng một mục, 8 cột ngăn bằng `|`:
 *   loại|tiếng Đức|mạo từ|số nhiều|nghĩa tiếng Việt|câu ví dụ có {chỗ trống}|dịch câu ví dụ|ghi chú
 * Loại: n danh từ · v động từ · adj · adv · prep · conj · pron · num · o khác · p cụm từ · g ngữ pháp.
 * Dòng trống và dòng bắt đầu bằng `#` được bỏ qua.
 */
const POS_CODE: Record<string, Pos> = {
  n: 'noun',
  v: 'verb',
  adj: 'adjective',
  adv: 'adverb',
  prep: 'preposition',
  conj: 'conjunction',
  pron: 'pronoun',
  num: 'other',
  o: 'other',
};

export type PackLineError = { line: number; message: string };

const GENDER_VI = { der: 'giống đực', die: 'giống cái', das: 'giống trung' } as const;

/** Ghi chú mặc định cho danh từ: giống và số nhiều. */
export function nounNote(article: 'der' | 'die' | 'das', plural: string): string {
  const pl = plural ? `số nhiều: ${plural}` : 'thường chỉ dùng số ít';
  return `Danh từ ${GENDER_VI[article]} (${article}), ${pl}.`;
}

export function parsePackLine(raw: string): ItemDraft | string {
  const cols = raw.split('|').map((c) => c.trim());
  if (cols.length !== 8) return `cần 8 cột, có ${cols.length}`;
  const [code, german, article, plural, vietnamese, example_de, example_vi, note] = cols;

  if (code === 'p' || code === 'g') {
    if (article || plural) return 'cụm từ/ngữ pháp không có mạo từ, số nhiều';
    return {
      ...emptyDraft(code === 'p' ? 'phrase' : 'grammar'),
      german,
      vietnamese,
      example_de,
      example_vi,
      grammar_note_vi: note,
    };
  }

  const pos = POS_CODE[code];
  if (!pos) return `loại "${code}" không hợp lệ`;
  if (pos === 'noun') {
    if (!isArticle(article)) return `danh từ cần mạo từ der/die/das, có "${article}"`;
    return {
      ...emptyDraft('word'),
      german,
      article,
      plural: plural === '0' ? '' : plural,
      pos,
      vietnamese,
      example_de,
      example_vi,
      grammar_note_vi: note || nounNote(article, plural === '0' ? '' : plural),
    };
  }
  if (article || plural) return 'chỉ danh từ mới có mạo từ, số nhiều';
  return { ...emptyDraft('word'), german, pos, vietnamese, example_de, example_vi, grammar_note_vi: note };
}

export function parsePack(text: string): { drafts: ItemDraft[]; errors: PackLineError[] } {
  const drafts: ItemDraft[] = [];
  const errors: PackLineError[] = [];
  text.split(/\r?\n/).forEach((raw, i) => {
    const line = raw.trim();
    if (!line || line.startsWith('#')) return;
    const parsed = parsePackLine(line);
    if (typeof parsed === 'string') errors.push({ line: i + 1, message: parsed });
    else drafts.push(parsed);
  });
  return { drafts, errors };
}
