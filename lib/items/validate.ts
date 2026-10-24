import { clozeMarkerError, findCloze, hasClozeMarker } from './cloze';
import { isArticle, type ItemDraft } from './types';

export type DraftIssue = { field: keyof ItemDraft; message: string };

/** Cắt khoảng trắng; nếu ô tiếng Đức bắt đầu bằng mạo từ (`der Tisch`) thì tách mạo từ ra ô riêng. */
export function normalizeDraft(draft: ItemDraft): ItemDraft {
  let german = draft.german.trim().replace(/\s+/g, ' ');
  let article = draft.article;

  const lead = /^([Dd]er|[Dd]ie|[Dd]as)\s+([A-ZÄÖÜ]\S*)$/u.exec(german);
  if (lead && draft.type === 'word' && !article) {
    const candidate = lead[1].toLowerCase();
    if (isArticle(candidate)) {
      article = candidate;
      german = lead[2];
    }
  }

  return {
    ...draft,
    german,
    article,
    plural: draft.plural.trim(),
    vietnamese: draft.vietnamese.trim(),
    example_de: draft.example_de.trim(),
    example_vi: draft.example_vi.trim(),
    grammar_note_vi: draft.grammar_note_vi.trim(),
    pos: draft.pos ?? (article ? 'noun' : null),
  };
}

/**
 * Mục này có phải danh từ không. Ưu tiên loại từ đã biết; chưa biết thì coi một từ đơn viết hoa chữ đầu là danh từ
 * (tiếng Đức viết hoa mọi danh từ).
 */
export function isNoun(draft: ItemDraft): boolean {
  if (draft.type !== 'word') return false;
  if (draft.article) return true;
  if (draft.pos) return draft.pos === 'noun';
  return /^[A-ZÄÖÜ][^\s]*$/u.test(draft.german.trim());
}

export const NOUN_NEEDS_ARTICLE_VI = 'Danh từ phải có mạo từ der, die hoặc das.';
export const GRAMMAR_NEEDS_CLOZE_VI =
  'Ngữ pháp cần câu mẫu tiếng Đức có đánh dấu chỗ trống, ví dụ: Ich fahre mit {dem} Bus.';

/** Kiểm một mục (đã normalize) trước khi lưu. Mảng rỗng nghĩa là lưu được. */
export function validateDraft(draft: ItemDraft): DraftIssue[] {
  const issues: DraftIssue[] = [];

  if (!draft.german) issues.push({ field: 'german', message: 'Chưa nhập tiếng Đức.' });
  if (!draft.vietnamese) issues.push({ field: 'vietnamese', message: 'Chưa nhập nghĩa tiếng Việt.' });

  if (draft.article && draft.pos && draft.pos !== 'noun') {
    issues.push({ field: 'article', message: 'Chỉ danh từ mới có mạo từ.' });
  } else if (draft.german && isNoun(draft) && !draft.article) {
    issues.push({ field: 'article', message: NOUN_NEEDS_ARTICLE_VI });
  }

  const markerError = clozeMarkerError(draft.example_de);
  if (markerError) issues.push({ field: 'example_de', message: markerError });

  if (draft.type === 'grammar' && !markerError) {
    if (!draft.example_de || !hasClozeMarker(draft.example_de) || !findCloze(draft.example_de, draft.german)) {
      issues.push({ field: 'example_de', message: GRAMMAR_NEEDS_CLOZE_VI });
    }
  }

  if (draft.example_vi && !draft.example_de) {
    issues.push({ field: 'example_de', message: 'Có bản dịch thì cần câu ví dụ tiếng Đức.' });
  }

  return issues;
}
