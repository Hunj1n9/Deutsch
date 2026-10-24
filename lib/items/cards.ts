import { findCloze } from './cloze';
import type { CardKind, ItemDraft } from './types';

/**
 * Thẻ tự sinh khi lưu (SPEC F2):
 * - word, phrase → vi_de + audio_de; thêm cloze nếu câu ví dụ có chỗ trống (đánh dấu `{…}` hoặc chứa chính từ đó).
 * - grammar → chỉ cloze (validateDraft đã bắt buộc câu mẫu có chỗ trống).
 */
export function cardKindsFor(draft: Pick<ItemDraft, 'type' | 'german' | 'example_de'>): CardKind[] {
  const cloze = draft.example_de ? findCloze(draft.example_de, draft.german) : null;
  if (draft.type === 'grammar') return cloze ? ['cloze'] : [];
  return cloze ? ['vi_de', 'audio_de', 'cloze'] : ['vi_de', 'audio_de'];
}
