import { describe, expect, it } from 'vitest';
import { checkAnswer, normalizeAnswer, suggestRating } from '@/lib/answer-check';

describe('normalizeAnswer', () => {
  it('bỏ khoảng trắng thừa, chuẩn hóa nháy, bỏ dấu câu cuối', () => {
    expect(normalizeAnswer('  Ich   gehe  nach Hause. ')).toBe('Ich gehe nach Hause');
    expect(normalizeAnswer('Wie geht’s?')).toBe("Wie geht's");
    expect(normalizeAnswer('„Hallo“!')).toBe('"Hallo"');
  });
});

describe('checkAnswer', () => {
  it('đúng chính xác', () => {
    expect(checkAnswer('lernen', ['lernen'])).toEqual({ correct: true, flags: [], matched: 'lernen' });
  });

  it('khoảng trắng thừa và dấu câu cuối không tính là sai', () => {
    expect(checkAnswer('  Guten   Morgen! ', ['Guten Morgen'])).toMatchObject({ correct: true, flags: [] });
    expect(checkAnswer('Wie spät ist es', ['Wie spät ist es?'])).toMatchObject({ correct: true, flags: [] });
  });

  it('mạo từ sai → sai, cờ wrong_article', () => {
    expect(checkAnswer('die Tisch', ['Tisch'], 'der')).toEqual({
      correct: false,
      flags: ['wrong_article'],
      matched: 'der Tisch',
    });
  });

  it('danh từ đúng mạo từ, mạo từ viết hoa đầu câu vẫn đúng', () => {
    expect(checkAnswer('der Tisch', ['Tisch'], 'der')).toMatchObject({ correct: true, flags: [] });
    expect(checkAnswer('Der Tisch', ['Tisch'], 'der')).toMatchObject({ correct: true, flags: [] });
  });

  it('danh từ thiếu mạo từ → sai', () => {
    expect(checkAnswer('Tisch', ['Tisch'], 'der')).toMatchObject({ correct: false, flags: ['missing_article'] });
  });

  it('ae/oe/ue thay ä/ö/ü → chấp nhận, cờ umlaut_fallback', () => {
    expect(checkAnswer('muede', ['müde'])).toEqual({ correct: true, flags: ['umlaut_fallback'], matched: 'müde' });
    expect(checkAnswer('die Kueche', ['Küche'], 'die')).toMatchObject({ correct: true, flags: ['umlaut_fallback'] });
    expect(checkAnswer('Oesterreich', ['Österreich'])).toMatchObject({ correct: true, flags: ['umlaut_fallback'] });
  });

  it('ss thay ß → chấp nhận, cờ eszett_fallback', () => {
    expect(checkAnswer('die Strasse', ['Straße'], 'die')).toMatchObject({ correct: true, flags: ['eszett_fallback'] });
  });

  it('sai viết hoa → chấp nhận, cờ capitalization', () => {
    expect(checkAnswer('der tisch', ['Tisch'], 'der')).toMatchObject({ correct: true, flags: ['capitalization'] });
    expect(checkAnswer('Lernen', ['lernen'])).toMatchObject({ correct: true, flags: ['capitalization'] });
  });

  it('gộp nhiều cờ', () => {
    expect(checkAnswer('strasse und kueche', ['Straße und Küche'])).toMatchObject({
      correct: true,
      flags: ['umlaut_fallback', 'eszett_fallback', 'capitalization'],
    });
  });

  it('sai chính tả thật → sai', () => {
    expect(checkAnswer('Tish', ['Tisch'])).toEqual({ correct: false, flags: [], matched: null });
    expect(checkAnswer('', ['Tisch'])).toMatchObject({ correct: false });
    expect(checkAnswer('mude', ['müde'])).toMatchObject({ correct: false });
  });

  it('nhiều đáp án: chọn đáp án khớp ít cờ nhất', () => {
    expect(checkAnswer('Ich fahre mit dem Bus', ['Ich fahre mit dem Auto', 'Ich fahre mit dem Bus'])).toMatchObject({
      correct: true,
      flags: [],
      matched: 'Ich fahre mit dem Bus',
    });
  });
});

describe('suggestRating', () => {
  const base = { correct: true, flags: [], usedHint: false, responseMs: 6000, state: 2 };
  it('sai → Again', () => expect(suggestRating({ ...base, correct: false })).toBe(1));
  it('có cờ, gợi ý hoặc chậm → Hard', () => {
    expect(suggestRating({ ...base, flags: ['umlaut_fallback'] })).toBe(2);
    expect(suggestRating({ ...base, usedHint: true })).toBe(2);
    expect(suggestRating({ ...base, responseMs: 16_000 })).toBe(2);
  });
  it('đúng → Good; nhanh ở thẻ Review → Easy; nhanh ở thẻ mới vẫn Good', () => {
    expect(suggestRating(base)).toBe(3);
    expect(suggestRating({ ...base, responseMs: 3000 })).toBe(4);
    expect(suggestRating({ ...base, responseMs: 3000, state: 0 })).toBe(3);
  });
});
