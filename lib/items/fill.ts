import type { AddableType, Article, ItemDraft, Pos } from './types';

/** Phần kết quả P1 dùng để điền vào mục đang soạn. */
export type FillFields = {
  type: AddableType;
  pos: Pos | null;
  article: Article | null;
  plural: string | null;
  vietnamese: string;
  example_de: string;
  example_vi: string;
  grammar_note_vi: string | null;
};

/**
 * Đổ kết quả AI vào mục đang soạn: chỉ điền ô còn trống, không ghi đè chữ người học đã gõ.
 * `takeType`: nhận loại do AI đoán (nhập hàng loạt, nơi loại chỉ là phỏng đoán theo số từ).
 */
export function applyFill(draft: ItemDraft, fill: FillFields, takeType: boolean): ItemDraft {
  return {
    ...draft,
    type: takeType ? fill.type : draft.type,
    pos: draft.pos ?? fill.pos,
    article: draft.article ?? fill.article,
    plural: draft.plural || fill.plural || '',
    vietnamese: draft.vietnamese || fill.vietnamese,
    example_de: draft.example_de || fill.example_de,
    // Câu ví dụ do người học gõ thì bản dịch AI không khớp; chỉ lấy bản dịch khi lấy cả câu.
    example_vi: draft.example_vi || (draft.example_de ? '' : fill.example_vi),
    grammar_note_vi: draft.grammar_note_vi || fill.grammar_note_vi || '',
  };
}
