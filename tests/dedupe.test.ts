import { describe, expect, it } from 'vitest';
import { dedupeKey, defaultChoice, findDuplicates, mergeFields, type ExistingItem } from '@/lib/items/dedupe';
import { emptyDraft } from '@/lib/items/types';

const tisch: ExistingItem = {
  id: 'a',
  type: 'word',
  german: 'Tisch',
  article: 'der',
  plural: '-e',
  vietnamese: 'cái bàn',
  example_de: null,
  example_vi: null,
  grammar_note_vi: 'Giống đực.',
};

describe('dedupeKey', () => {
  it('bỏ qua hoa thường và khoảng trắng thừa', () => {
    expect(dedupeKey({ type: 'phrase', german: ' Zum  beispiel ', article: null })).toBe(
      dedupeKey({ type: 'phrase', german: 'zum Beispiel', article: null }),
    );
  });

  it('khác mạo từ hoặc khác loại là khác mục', () => {
    const see = dedupeKey({ type: 'word', german: 'See', article: 'der' });
    expect(dedupeKey({ type: 'word', german: 'See', article: 'die' })).not.toBe(see);
    expect(dedupeKey({ type: 'phrase', german: 'See', article: 'der' })).not.toBe(see);
  });
});

describe('findDuplicates', () => {
  it('phát hiện trùng với mục đã lưu và trùng trong lô', () => {
    const drafts = [
      { type: 'word', german: 'tisch', article: 'der' },
      { type: 'word', german: 'Stuhl', article: 'der' },
      { type: 'word', german: 'Stuhl', article: 'der' },
      { type: 'word', german: 'Tisch', article: 'die' },
    ];
    const result = findDuplicates(drafts, [tisch]);
    expect(result.map((r) => r.existing.map((e) => e.id))).toEqual([['a'], [], [], []]);
    expect(result.map((r) => r.batchIndex)).toEqual([null, null, 1, null]);
    expect(result.map(defaultChoice)).toEqual(['merge', 'add', 'skip', 'add']);
  });
});

describe('mergeFields', () => {
  it('ô mới có nội dung thì ghi đè, ô trống giữ giá trị cũ', () => {
    const draft = {
      ...emptyDraft(),
      german: 'Tisch',
      article: 'der' as const,
      vietnamese: 'cái bàn (đồ gỗ)',
      example_de: 'Der Tisch ist rund.',
    };
    expect(mergeFields(tisch, draft)).toEqual({
      plural: '-e',
      vietnamese: 'cái bàn (đồ gỗ)',
      example_de: 'Der Tisch ist rund.',
      example_vi: '',
      grammar_note_vi: 'Giống đực.',
    });
  });
});
