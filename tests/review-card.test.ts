import { describe, expect, it } from 'vitest';
import { viewCard, viewErrorFix, type ReviewItem } from '@/lib/review-card';
import { addDays, localDate, startOfLocalDay, weekStart } from '@/lib/time';

const tisch: ReviewItem = {
  type: 'word',
  german: 'Tisch',
  article: 'der',
  plural: '-e',
  vietnamese: 'cái bàn',
  example_de: 'Der {Tisch} steht in der Küche.',
  example_vi: 'Cái bàn ở trong bếp.',
  grammar_note_vi: null,
  level: 'A1',
  tags: ['pos:noun'],
};

describe('viewCard', () => {
  it('vi_de: hiện nghĩa, cấp độ, loại từ; danh từ phải gõ kèm mạo từ', () => {
    expect(viewCard('vi_de', tisch)).toMatchObject({
      face: { kind: 'vi_de', vietnamese: 'cái bàn', level: 'A1', posLabel: 'Danh từ' },
      accepted: ['Tisch'],
      article: 'der',
      answer: 'der Tisch',
      example: 'Der Tisch steht in der Küche.',
    });
  });

  it('audio_de: đọc cả mạo từ', () => {
    expect(viewCard('audio_de', tisch)).toMatchObject({ face: { kind: 'audio_de', speak: 'der Tisch' }, article: 'der' });
  });

  it('cloze: câu có chỗ trống + bản dịch, đáp án đúng dạng trong câu', () => {
    const fahren = { ...tisch, german: 'fahren', article: null, tags: ['pos:verb'], example_de: 'Er {fährt} nach Berlin.' };
    expect(viewCard('cloze', fahren)).toMatchObject({
      face: { kind: 'cloze', before: 'Er ', after: ' nach Berlin.', translation: 'Cái bàn ở trong bếp.' },
      accepted: ['fährt'],
      article: null,
      speak: 'Er fährt nach Berlin.',
    });
  });

  it('cloze không còn chỗ trống → null', () => {
    expect(viewCard('cloze', { ...tisch, example_de: 'Das ist neu.' })).toBeNull();
  });

  it('cụm từ không có mạo từ', () => {
    const phrase = { ...tisch, type: 'phrase', german: 'zum Beispiel', article: null, tags: [] };
    expect(viewCard('vi_de', phrase)).toMatchObject({ article: null, answer: 'zum Beispiel' });
  });
});

describe('time', () => {
  it('ngày theo giờ Việt Nam', () => {
    expect(localDate(new Date('2026-10-25T16:59:00Z'))).toBe('2026-10-25');
    expect(localDate(new Date('2026-10-25T17:00:00Z'))).toBe('2026-10-26');
  });

  it('0 giờ ngày địa phương', () => {
    expect(startOfLocalDay('2026-10-26').toISOString()).toBe('2026-10-25T17:00:00.000Z');
    expect(startOfLocalDay('2026-03-29', 'Europe/Berlin').toISOString()).toBe('2026-03-28T23:00:00.000Z');
  });

  it('cộng ngày và đầu tuần (thứ Hai)', () => {
    expect(addDays('2026-10-31', 1)).toBe('2026-11-01');
    expect(weekStart('2026-10-25')).toBe('2026-10-19'); // Chủ nhật → thứ Hai trước đó
    expect(weekStart('2026-10-26')).toBe('2026-10-26');
  });
});

describe('viewErrorFix', () => {
  it('hiện câu sai, đáp án là các câu đúng đã lưu', () => {
    expect(
      viewErrorFix({ title_vi: 'mit + Dativ', wrong: 'Ich fahre mit den Bus.', accepted: ['Ich fahre mit dem Bus.'] }),
    ).toMatchObject({
      face: { kind: 'error_fix', wrong: 'Ich fahre mit den Bus.', title: 'mit + Dativ' },
      accepted: ['Ich fahre mit dem Bus.'],
      answer: 'Ich fahre mit dem Bus.',
    });
    expect(viewErrorFix({ title_vi: 't', wrong: 'x', accepted: [] })).toBeNull();
  });
});
