import { describe, expect, it } from 'vitest';
import { cardKindsFor } from '@/lib/items/cards';

describe('cardKindsFor', () => {
  it('từ không có câu ví dụ: Việt→Đức và nghe', () => {
    expect(cardKindsFor({ type: 'word', german: 'Tisch', example_de: '' })).toEqual(['vi_de', 'audio_de']);
  });

  it('từ có trong câu ví dụ: thêm cloze', () => {
    expect(cardKindsFor({ type: 'word', german: 'Tisch', example_de: 'Der Tisch steht in der Küche.' })).toEqual([
      'vi_de',
      'audio_de',
      'cloze',
    ]);
  });

  it('từ không xuất hiện trong câu (dạng chia khác): không cloze', () => {
    expect(cardKindsFor({ type: 'word', german: 'fahren', example_de: 'Er fährt nach Hause.' })).toEqual([
      'vi_de',
      'audio_de',
    ]);
  });

  it('chỗ trống đánh dấu tay cũng tạo cloze', () => {
    expect(cardKindsFor({ type: 'word', german: 'fahren', example_de: 'Er {fährt} nach Hause.' })).toEqual([
      'vi_de',
      'audio_de',
      'cloze',
    ]);
  });

  it('cụm từ theo cùng quy tắc với từ', () => {
    expect(
      cardKindsFor({ type: 'phrase', german: 'zum Beispiel', example_de: 'Ich mag Obst, zum Beispiel Äpfel.' }),
    ).toEqual(['vi_de', 'audio_de', 'cloze']);
  });

  it('ngữ pháp chỉ có cloze', () => {
    expect(
      cardKindsFor({ type: 'grammar', german: 'mit + Dativ', example_de: 'Ich fahre mit {dem} Bus.' }),
    ).toEqual(['cloze']);
  });
});
