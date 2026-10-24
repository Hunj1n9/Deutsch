import { describe, expect, it } from 'vitest';
import { emptyDraft, type ItemDraft } from '@/lib/items/types';
import {
  GRAMMAR_NEEDS_CLOZE_VI,
  NOUN_NEEDS_ARTICLE_VI,
  isNoun,
  normalizeDraft,
  validateDraft,
} from '@/lib/items/validate';

function draft(fields: Partial<ItemDraft>): ItemDraft {
  return normalizeDraft({ ...emptyDraft(), ...fields });
}

const messages = (d: ItemDraft) => validateDraft(d).map((i) => i.message);

describe('normalizeDraft', () => {
  it('cắt khoảng trắng và gộp khoảng trắng trong từ', () => {
    const d = draft({ german: '  zum   Beispiel ', type: 'phrase', vietnamese: ' ví dụ ' });
    expect(d.german).toBe('zum Beispiel');
    expect(d.vietnamese).toBe('ví dụ');
  });

  it('tách mạo từ gõ lẫn trong ô tiếng Đức và đánh dấu danh từ', () => {
    const d = draft({ german: 'der Tisch' });
    expect(d).toMatchObject({ german: 'Tisch', article: 'der', pos: 'noun' });
  });

  it('không tách khi sau mạo từ không phải danh từ', () => {
    expect(draft({ german: 'das heißt', type: 'phrase' })).toMatchObject({ german: 'das heißt', article: null });
  });
});

describe('isNoun', () => {
  it('đoán danh từ theo chữ hoa khi chưa biết loại từ', () => {
    expect(isNoun(draft({ german: 'Tisch' }))).toBe(true);
    expect(isNoun(draft({ german: 'lernen' }))).toBe(false);
    expect(isNoun(draft({ german: 'Guten Morgen', type: 'phrase' }))).toBe(false);
  });

  it('loại từ đã biết thắng phỏng đoán', () => {
    expect(isNoun(draft({ german: 'Berlin', pos: 'other' }))).toBe(false);
    expect(isNoun(draft({ german: 'lesen', pos: 'noun' }))).toBe(true);
  });
});

describe('validateDraft', () => {
  it('mục đầy đủ thì hợp lệ', () => {
    expect(validateDraft(draft({ german: 'Tisch', article: 'der', vietnamese: 'cái bàn' }))).toEqual([]);
    expect(validateDraft(draft({ german: 'lernen', vietnamese: 'học' }))).toEqual([]);
  });

  it('danh từ không có mạo từ thì không lưu được, báo lỗi rõ ràng', () => {
    const issues = validateDraft(draft({ german: 'Tisch', vietnamese: 'cái bàn' }));
    expect(issues).toEqual([{ field: 'article', message: NOUN_NEEDS_ARTICLE_VI }]);
    expect(messages(draft({ german: 'Haus', pos: 'noun', vietnamese: 'nhà' }))).toContain(NOUN_NEEDS_ARTICLE_VI);
  });

  it('thiếu tiếng Đức hoặc nghĩa tiếng Việt', () => {
    expect(validateDraft(draft({})).map((i) => i.field)).toEqual(['german', 'vietnamese']);
  });

  it('mạo từ trên từ không phải danh từ', () => {
    expect(messages(draft({ german: 'lernen', article: 'das', pos: 'verb', vietnamese: 'học' }))).toEqual([
      'Chỉ danh từ mới có mạo từ.',
    ]);
  });

  it('ngữ pháp bắt buộc câu mẫu có chỗ trống', () => {
    const base = { type: 'grammar' as const, german: 'mit + Dativ', vietnamese: 'mit đi với Dativ' };
    expect(messages(draft(base))).toEqual([GRAMMAR_NEEDS_CLOZE_VI]);
    expect(messages(draft({ ...base, example_de: 'Ich fahre mit dem Bus.' }))).toEqual([GRAMMAR_NEEDS_CLOZE_VI]);
    expect(validateDraft(draft({ ...base, example_de: 'Ich fahre mit {dem} Bus.' }))).toEqual([]);
  });

  it('dấu chỗ trống viết sai thì báo ở ô câu ví dụ', () => {
    const issues = validateDraft(
      draft({ german: 'fahren', vietnamese: 'đi xe', example_de: 'Ich {fahre mit dem Bus.' }),
    );
    expect(issues.map((i) => i.field)).toEqual(['example_de']);
  });

  it('có bản dịch mà thiếu câu ví dụ', () => {
    expect(messages(draft({ german: 'lernen', vietnamese: 'học', example_vi: 'Tôi học.' }))).toEqual([
      'Có bản dịch thì cần câu ví dụ tiếng Đức.',
    ]);
  });
});
