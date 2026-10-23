import { describe, expect, it } from 'vitest';
import { insertAt } from '@/lib/text';

describe('insertAt', () => {
  it('chèn tại con trỏ', () => {
    expect(insertAt('Mdchen', 1, 1, 'ä')).toEqual({ value: 'Mädchen', caret: 2 });
  });

  it('thay thế đoạn đang chọn', () => {
    expect(insertAt('Strasse', 4, 6, 'ß')).toEqual({ value: 'Straße', caret: 5 });
  });

  it('kẹp vị trí ngoài phạm vi', () => {
    expect(insertAt('Tur', 99, 99, 'ü')).toEqual({ value: 'Turü', caret: 4 });
    expect(insertAt('ber', -3, 0, 'Ü')).toEqual({ value: 'Über', caret: 1 });
  });
});
