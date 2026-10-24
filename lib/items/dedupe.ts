import type { ItemDraft } from './types';

type KeyFields = { type: string; german: string; article: string | null };

/** Mục đã có trong CSDL, đủ trường để báo trùng và gộp. */
export type ExistingItem = KeyFields & {
  id: string;
  plural: string | null;
  vietnamese: string;
  example_de: string | null;
  example_vi: string | null;
  grammar_note_vi: string | null;
};

/** Khóa chống trùng: `german` + `article` + `type` (SPEC F2), bỏ qua hoa thường và khoảng trắng thừa. */
export function dedupeKey({ type, german, article }: KeyFields): string {
  return [type, german.normalize('NFC').trim().replace(/\s+/g, ' ').toLowerCase(), article ?? ''].join('|');
}

export type DuplicateInfo = {
  /** Vị trí dòng đầu tiên cùng khóa ở phía trên trong lô; null nếu không trùng trong lô. */
  batchIndex: number | null;
  /** Các mục đã lưu cùng khóa. */
  existing: ExistingItem[];
};

export function findDuplicates(drafts: readonly KeyFields[], existing: readonly ExistingItem[]): DuplicateInfo[] {
  const byKey = new Map<string, ExistingItem[]>();
  for (const item of existing) {
    const key = dedupeKey(item);
    byKey.set(key, [...(byKey.get(key) ?? []), item]);
  }

  const firstIndex = new Map<string, number>();
  return drafts.map((draft, index) => {
    const key = dedupeKey(draft);
    const earlier = firstIndex.get(key);
    if (earlier === undefined) firstIndex.set(key, index);
    return { batchIndex: earlier ?? null, existing: byKey.get(key) ?? [] };
  });
}

export function isDuplicate(info: DuplicateInfo): boolean {
  return info.batchIndex !== null || info.existing.length > 0;
}

/** Cách xử lý một dòng trùng: gộp vào mục cũ, vẫn thêm mục mới, hoặc bỏ dòng. */
export type DuplicateChoice = 'merge' | 'add' | 'skip';

/** Mặc định: trùng mục đã lưu thì gộp (không mất gì), trùng dòng phía trên trong lô thì bỏ dòng. */
export function defaultChoice(info: DuplicateInfo): DuplicateChoice {
  if (info.existing.length > 0) return 'merge';
  if (info.batchIndex !== null) return 'skip';
  return 'add';
}

const MERGE_FIELDS = ['plural', 'vietnamese', 'example_de', 'example_vi', 'grammar_note_vi'] as const;
type MergeField = (typeof MERGE_FIELDS)[number];

/**
 * Gộp: ô nào của mục mới có nội dung thì ghi đè lên mục cũ, ô trống giữ giá trị cũ.
 * Thẻ và lịch ôn của mục cũ giữ nguyên (DECISIONS.md).
 */
export function mergeFields(existing: ExistingItem, draft: ItemDraft): Record<MergeField, string> {
  const merged = {} as Record<MergeField, string>;
  for (const field of MERGE_FIELDS) {
    merged[field] = draft[field] || existing[field] || '';
  }
  return merged;
}
