import { findCloze, stripCloze } from './items/cloze';
import { POS_LABEL_VI, isArticle, posFromTags, type Article } from './items/types';

/**
 * Nội dung hiển thị và đáp án của từng kiểu thẻ (SPEC F3). Hàm thuần.
 */
export type ReviewItem = {
  type: string;
  german: string;
  article: string | null;
  plural: string | null;
  vietnamese: string;
  example_de: string | null;
  example_vi: string | null;
  grammar_note_vi: string | null;
  level: string | null;
  tags: string[] | null;
};

export type CardFace =
  | { kind: 'vi_de'; vietnamese: string; level: string | null; posLabel: string | null }
  | { kind: 'audio_de'; speak: string }
  | { kind: 'cloze'; before: string; after: string; translation: string | null }
  | { kind: 'error_fix'; wrong: string; title: string };

export type CardView = {
  face: CardFace;
  /** Đáp án chấp nhận (danh từ không kèm mạo từ; mạo từ kiểm riêng). */
  accepted: string[];
  /** Mạo từ bắt buộc gõ kèm, null nếu không cần. */
  article: Article | null;
  /** Đáp án đầy đủ để hiện sau khi trả lời. */
  answer: string;
  /** Câu đọc to khi bấm nghe sau khi trả lời. */
  speak: string;
  example: string | null;
  exampleVi: string | null;
};

export function nounArticle(item: ReviewItem): Article | null {
  return item.type === 'word' && item.article && isArticle(item.article) ? item.article : null;
}

export function fullGerman(item: ReviewItem): string {
  const article = nounArticle(item);
  return article ? `${article} ${item.german}` : item.german;
}

/** Trả null nếu thẻ không hiển thị được (vd cloze mà câu không còn chỗ trống); phiên sẽ bỏ qua thẻ đó. */
export function viewCard(kind: string, item: ReviewItem): CardView | null {
  const article = nounArticle(item);
  const full = fullGerman(item);
  const example = item.example_de ? stripCloze(item.example_de) : null;
  const common = { example, exampleVi: item.example_vi, speak: full };

  switch (kind) {
    case 'vi_de': {
      const pos = posFromTags(item.tags);
      return {
        ...common,
        face: { kind, vietnamese: item.vietnamese, level: item.level, posLabel: pos ? POS_LABEL_VI[pos] : null },
        accepted: [item.german],
        article,
        answer: full,
      };
    }
    case 'audio_de':
      return { ...common, face: { kind, speak: full }, accepted: [item.german], article, answer: full };
    case 'cloze': {
      const cloze = item.example_de ? findCloze(item.example_de, item.german) : null;
      if (!cloze) return null;
      return {
        ...common,
        speak: example ?? full,
        face: { kind, before: stripCloze(cloze.before), after: stripCloze(cloze.after), translation: item.example_vi },
        accepted: [cloze.answer],
        article: null,
        answer: cloze.answer,
      };
    }
    default:
      return null;
  }
}

/** Thẻ sửa lỗi: hiện một câu sai (xoay vòng), tiêu đề lỗi ẩn sau nút Gợi ý; gõ lại câu đúng. */
export function viewErrorFix(error: { title_vi: string; wrong: string; accepted: string[] }): CardView | null {
  if (!error.wrong || error.accepted.length === 0) return null;
  return {
    face: { kind: 'error_fix', wrong: error.wrong, title: error.title_vi },
    accepted: error.accepted,
    article: null,
    answer: error.accepted[0],
    speak: error.accepted[0],
    example: null,
    exampleVi: null,
  };
}
