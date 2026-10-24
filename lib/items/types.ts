// Kiểu dùng chung cho F2. Khớp enum trong supabase/migrations/20261024000000_init.sql.

export const ADDABLE_TYPES = ['word', 'phrase', 'grammar'] as const;
/** `error_fix` chỉ sinh từ sổ lỗi (M4), không thêm tay. */
export type AddableType = (typeof ADDABLE_TYPES)[number];

export const ARTICLES = ['der', 'die', 'das'] as const;
export type Article = (typeof ARTICLES)[number];

export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'] as const;
export type Level = (typeof LEVELS)[number];

export const POS = ['noun', 'verb', 'adjective', 'adverb', 'preposition', 'conjunction', 'pronoun', 'other'] as const;
/** Loại từ; lưu trong `items.tags` dạng `pos:noun` (DECISIONS.md). */
export type Pos = (typeof POS)[number];

export type CardKind = 'vi_de' | 'audio_de' | 'cloze' | 'error_fix';

/** Một mục đang soạn. Chuỗi rỗng nghĩa là chưa có. */
export type ItemDraft = {
  type: AddableType;
  german: string;
  article: Article | null;
  plural: string;
  vietnamese: string;
  example_de: string;
  example_vi: string;
  grammar_note_vi: string;
  pos: Pos | null;
};

export function emptyDraft(type: AddableType = 'word'): ItemDraft {
  return {
    type,
    german: '',
    article: null,
    plural: '',
    vietnamese: '',
    example_de: '',
    example_vi: '',
    grammar_note_vi: '',
    pos: null,
  };
}

export function isArticle(value: string): value is Article {
  return (ARTICLES as readonly string[]).includes(value);
}

export const TYPE_LABEL_VI: Record<AddableType, string> = {
  word: 'Từ',
  phrase: 'Cụm từ',
  grammar: 'Ngữ pháp',
};

export const POS_LABEL_VI: Record<Pos, string> = {
  noun: 'Danh từ',
  verb: 'Động từ',
  adjective: 'Tính từ',
  adverb: 'Trạng từ',
  preposition: 'Giới từ',
  conjunction: 'Liên từ',
  pronoun: 'Đại từ',
  other: 'Khác',
};

const POS_TAG_PREFIX = 'pos:';

export function posFromTags(tags: readonly string[] | null | undefined): Pos | null {
  const tag = tags?.find((t) => t.startsWith(POS_TAG_PREFIX));
  const value = tag?.slice(POS_TAG_PREFIX.length);
  return value && (POS as readonly string[]).includes(value) ? (value as Pos) : null;
}

/** Thay thẻ `pos:*` cũ bằng thẻ mới, giữ nguyên các tag khác. */
export function withPosTag(tags: readonly string[] | null | undefined, pos: Pos | null): string[] {
  const rest = (tags ?? []).filter((t) => !t.startsWith(POS_TAG_PREFIX));
  return pos ? [...rest, POS_TAG_PREFIX + pos] : rest;
}
