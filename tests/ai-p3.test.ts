import { describe, expect, it } from 'vitest';
import { parseTutorReply, threadTitle, tutorSystem } from '@/lib/ai/p3-tutor';

describe('tutorSystem', () => {
  it('đưa ngữ cảnh: cấp độ, nguồn, lỗi đang mở, thẻ hiện tại', () => {
    const s = tutorSystem({
      level: 'A2',
      source: 'Netzwerk neu A2 · Kapitel 3',
      openErrors: ['mit luôn đi với Dativ'],
      card: { kind: 'vi_de', german: 'der Tisch', vietnamese: 'cái bàn', example_de: 'Der Tisch ist rund.' },
    });
    expect(s).toMatch(/trình độ A2/);
    expect(s).toMatch(/Netzwerk neu A2 · Kapitel 3/);
    expect(s).toMatch(/mit luôn đi với Dativ/);
    expect(s).toMatch(/der Tisch = cái bàn/);
    expect(s).toMatch(/gợi ý một bước/);
    expect(s).toMatch(/dưới 200 từ/);
  });
});

describe('parseTutorReply', () => {
  it('tách câu ví dụ DE/VI khỏi đoạn chữ', () => {
    const reply = [
      '"dem" là Dativ vì Mann là người nhận.',
      '',
      'DE: Ich schenke meiner Mutter Blumen.',
      'VI: Tôi tặng hoa cho mẹ.',
      '- DE: **Er gibt dem Kind den Ball.**',
      '- VI: Anh ấy đưa quả bóng cho đứa trẻ.',
      'Nhớ: người nhận → Dativ.',
    ].join('\n');
    expect(parseTutorReply(reply)).toEqual([
      { type: 'text', text: '"dem" là Dativ vì Mann là người nhận.' },
      { type: 'example', de: 'Ich schenke meiner Mutter Blumen.', vi: 'Tôi tặng hoa cho mẹ.' },
      { type: 'example', de: 'Er gibt dem Kind den Ball.', vi: 'Anh ấy đưa quả bóng cho đứa trẻ.' },
      { type: 'text', text: 'Nhớ: người nhận → Dativ.' },
    ]);
  });

  it('câu ví dụ thiếu bản dịch vẫn tách được', () => {
    expect(parseTutorReply('DE: Guten Tag!')).toEqual([{ type: 'example', de: 'Guten Tag!', vi: null }]);
  });
});

describe('threadTitle', () => {
  it('gọn trong 60 ký tự', () => {
    expect(threadTitle('  Tại sao   dùng dem?  ')).toBe('Tại sao dùng dem?');
    expect(threadTitle('a'.repeat(80))).toHaveLength(58);
  });
});
