import { describe, expect, it } from 'vitest';
import { clozeMarkerError, findCloze, stripCloze } from '@/lib/items/cloze';

describe('clozeMarkerError', () => {
  it('chấp nhận câu không có dấu hoặc đúng một chỗ trống', () => {
    expect(clozeMarkerError('Ich fahre mit dem Bus.')).toBeNull();
    expect(clozeMarkerError('Ich fahre mit {dem} Bus.')).toBeNull();
  });

  it('báo lỗi dấu lệch, nhiều chỗ trống, chỗ trống rỗng', () => {
    expect(clozeMarkerError('Ich fahre mit {dem Bus.')).toMatch(/lệch/);
    expect(clozeMarkerError('Ich fahre mit dem} Bus.')).toMatch(/lệch/);
    expect(clozeMarkerError('{Ich {fahre}} mit dem Bus.')).toMatch(/lệch/);
    expect(clozeMarkerError('{Ich} fahre mit {dem} Bus.')).toMatch(/một chỗ trống/);
    expect(clozeMarkerError('Ich fahre mit { } Bus.')).toMatch(/rỗng/);
  });
});

describe('stripCloze', () => {
  it('bỏ dấu ngoặc nhọn', () => {
    expect(stripCloze('Ich fahre mit {dem} Bus.')).toBe('Ich fahre mit dem Bus.');
  });
});

describe('findCloze', () => {
  it('ưu tiên chỗ trống đã đánh dấu', () => {
    expect(findCloze('Ich fahre mit {dem} Bus.', 'mit')).toEqual({
      before: 'Ich fahre mit ',
      answer: 'dem',
      after: ' Bus.',
    });
  });

  it('dấu sai thì không có chỗ trống', () => {
    expect(findCloze('Ich {fahre mit dem Bus.', 'fahre')).toBeNull();
  });

  it('tự tìm từ trọn vẹn, không phân biệt hoa thường, giữ nguyên chữ trong câu', () => {
    expect(findCloze('Der Tisch steht in der Küche.', 'tisch')).toEqual({
      before: 'Der ',
      answer: 'Tisch',
      after: ' steht in der Küche.',
    });
  });

  it('không khớp một phần của từ khác', () => {
    expect(findCloze('Der Schreibtisch ist neu.', 'Tisch')).toBeNull();
    expect(findCloze('Die Tische sind neu.', 'Tisch')).toBeNull();
  });

  it('khớp từ có umlaut và ß ở ranh giới từ', () => {
    expect(findCloze('Ich gehe über die Straße.', 'Straße')?.answer).toBe('Straße');
    expect(findCloze('Er ist müde.', 'müde')?.after).toBe('.');
  });

  it('khớp cụm từ dù khoảng trắng khác nhau', () => {
    expect(findCloze('Das ist zum  Beispiel gut.', 'zum Beispiel')?.answer).toBe('zum  Beispiel');
  });

  it('câu rỗng hoặc không chứa từ thì trả null', () => {
    expect(findCloze('', 'Tisch')).toBeNull();
    expect(findCloze('Er fährt nach Hause.', 'fahren')).toBeNull();
  });
});
