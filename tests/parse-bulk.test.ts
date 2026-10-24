import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { cardKindsFor } from '@/lib/items/cards';
import { MAX_BULK_ROWS, parseBulk } from '@/lib/items/parse-bulk';

const fixture = readFileSync(join(__dirname, 'fixtures', 'bulk-30.txt'), 'utf8');

describe('parseBulk: dạng chữ', () => {
  it('đọc `der Tisch, -e = cái bàn`', () => {
    const { rows, errors } = parseBulk('der Tisch, -e = cái bàn');
    expect(errors).toEqual([]);
    expect(rows).toHaveLength(1);
    expect(rows[0]).toMatchObject({
      line: 1,
      needsAi: false,
      draft: { type: 'word', german: 'Tisch', article: 'der', plural: '-e', vietnamese: 'cái bàn', pos: 'noun' },
    });
  });

  it('số nhiều viết đầy đủ, không đổi, hoặc có umlaut', () => {
    const { rows } = parseBulk('der Tisch, die Tische = cái bàn\nder Lehrer, - = thầy giáo\ndas Buch, ¨-er = sách');
    expect(rows.map((r) => r.draft.plural)).toEqual(['Tische', '-', '¨-er']);
  });

  it('chỉ có từ thì cần AI điền', () => {
    const { rows } = parseBulk('Tisch\nlernen\nzum Beispiel');
    expect(rows.map((r) => [r.draft.type, r.draft.german, r.needsAi])).toEqual([
      ['word', 'Tisch', true],
      ['word', 'lernen', true],
      ['phrase', 'zum Beispiel', true],
    ]);
  });

  it('danh từ có nghĩa mà thiếu mạo từ vẫn cần AI điền mạo từ', () => {
    const { rows } = parseBulk('Freund, -e = bạn\nheute = hôm nay');
    expect(rows.map((r) => [r.draft.german, r.draft.plural, r.needsAi])).toEqual([
      ['Freund', '-e', true],
      ['heute', '', false],
    ]);
  });

  it('dấu phẩy trong cụm không phải số nhiều thì giữ nguyên', () => {
    const { rows } = parseBulk('Guten Morgen, Anna = chào buổi sáng, Anna');
    expect(rows[0].draft).toMatchObject({ german: 'Guten Morgen, Anna', plural: '', vietnamese: 'chào buổi sáng, Anna' });
  });

  it('cụm bắt đầu bằng das/der viết thường không bị tách mạo từ', () => {
    const { rows } = parseBulk('das heißt = nghĩa là');
    expect(rows[0].draft).toMatchObject({ type: 'phrase', german: 'das heißt', article: null });
  });

  it('bỏ dòng trống, đếm số dòng theo văn bản gốc, báo dòng thiếu từ', () => {
    const { rows, errors } = parseBulk('\nTisch\n\n= cái bàn\r\nStuhl\n');
    expect(rows.map((r) => r.line)).toEqual([2, 5]);
    expect(errors).toEqual([{ line: 4, message: 'Dòng 4: thiếu từ tiếng Đức.' }]);
  });

  it('giới hạn số dòng mỗi lần', () => {
    const { rows, errors } = parseBulk(Array.from({ length: MAX_BULK_ROWS + 1 }, (_, i) => `Wort${i}`).join('\n'));
    expect(rows).toEqual([]);
    expect(errors[0].message).toMatch(String(MAX_BULK_ROWS));
  });
});

describe('parseBulk: TSV', () => {
  it('đọc theo tên cột, thứ tự cột tùy ý', () => {
    const text = 'vietnamese\tgerman\tarticle\nnhà\tHaus\tdas';
    const { rows, errors } = parseBulk(text);
    expect(errors).toEqual([]);
    expect(rows[0]).toMatchObject({ line: 2, needsAi: false, draft: { german: 'Haus', article: 'das', vietnamese: 'nhà' } });
  });

  it('mạo từ sai thì báo lỗi dòng đó', () => {
    const { rows, errors } = parseBulk('german\tarticle\tvietnamese\nHaus\tdat\tnhà');
    expect(rows).toEqual([]);
    expect(errors[0].message).toMatch(/Dòng 2: mạo từ "dat"/);
  });
});

describe('parseBulk: 30 dòng hỗn hợp (TCHT F2)', () => {
  const { rows, errors } = parseBulk(fixture);

  it('đọc đủ 30 mục, không lỗi', () => {
    expect(errors).toEqual([]);
    expect(rows).toHaveLength(30);
  });

  it('dòng TSV và dòng có nghĩa không cần AI; dòng chỉ có từ thì cần', () => {
    expect(rows.filter((r) => r.needsAi).map((r) => r.draft.german)).toEqual([
      'Schlüssel',
      'Küche',
      'Geld',
      'lernen',
      'fahren',
      'müde',
      'zum Beispiel',
      'Wie spät ist es?',
      'Freund',
    ]);
  });

  it('mỗi mục đã đủ thông tin có thẻ đúng loại', () => {
    const byGerman = new Map(rows.map((r) => [r.draft.german, r.draft]));
    expect(cardKindsFor(byGerman.get('Fenster')!)).toEqual(['vi_de', 'audio_de', 'cloze']);
    expect(cardKindsFor(byGerman.get('Lampe')!)).toEqual(['vi_de', 'audio_de']);
    expect(cardKindsFor(byGerman.get('wohnen')!)).toEqual(['vi_de', 'audio_de']);
    expect(cardKindsFor(byGerman.get('Guten Morgen')!)).toEqual(['vi_de', 'audio_de', 'cloze']);
    expect(cardKindsFor(byGerman.get('Tisch')!)).toEqual(['vi_de', 'audio_de']);
  });
});
