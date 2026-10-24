import { describe, expect, it } from 'vitest';
import {
  errorSentences,
  fixOffset,
  genderRuleKey,
  normalizeRuleKey,
  openErrorsByWeek,
  rotateOccurrence,
  shouldResolve,
  splitSentences,
  statusAfterOccurrence,
} from '@/lib/errors';

const DAY = 86_400_000;
const now = new Date('2026-12-01T00:00:00Z');
const ago = (days: number) => new Date(now.getTime() - days * DAY).toISOString();
const ok = (days: number) => ({ correct: true, reviewed_at: ago(days) });
const bad = (days: number) => ({ correct: false, reviewed_at: ago(days) });

describe('normalizeRuleKey', () => {
  it('chữ thường, gạch nối, không dấu, tối đa 40 ký tự', () => {
    expect(normalizeRuleKey('Dativ nach MIT')).toBe('dativ-nach-mit');
    expect(normalizeRuleKey('  verb_position: Nebensatz ')).toBe('verb-position-nebensatz');
    expect(normalizeRuleKey('Đuôi tính từ Dativ')).toBe('duoi-tinh-tu-dativ');
    expect(normalizeRuleKey('a'.repeat(50)).length).toBe(40);
    expect(normalizeRuleKey('x'.repeat(39) + '-yy')).toBe('x'.repeat(39));
  });

  it('khóa giống của danh từ', () => {
    expect(genderRuleKey('Tisch')).toBe('gender-tisch');
    expect(genderRuleKey('Küche')).toBe('gender-kueche');
    expect(genderRuleKey('Straße')).toBe('gender-strasse');
  });
});

describe('fixOffset', () => {
  const text = 'Ich fahre mit den Bus. Dann sehe ich den Bus.';
  it('vị trí đúng thì giữ', () => {
    expect(fixOffset(text, { start: 14, end: 17, wrong: 'den' })).toEqual({ start: 14, end: 17 });
  });
  it('vị trí lệch thì tìm lại chỗ gần nhất', () => {
    expect(fixOffset(text, { start: 12, end: 15, wrong: 'den' })).toEqual({ start: 14, end: 17 });
    expect(fixOffset(text, { start: 40, end: 43, wrong: 'den' })).toEqual({ start: 37, end: 40 });
  });
  it('không có trong văn bản thì null', () => {
    expect(fixOffset(text, { start: 0, end: 3, wrong: 'dem' })).toBeNull();
  });
});

describe('splitSentences / errorSentences', () => {
  it('tách câu, giữ vị trí', () => {
    const text = 'Ich fahre mit den Bus.  Er kommt morgen!';
    expect(splitSentences(text).map((s) => text.slice(s.start, s.end))).toEqual([
      'Ich fahre mit den Bus.',
      'Er kommt morgen!',
    ]);
  });

  it('câu sai chỉ giữ đúng lỗi của nó; câu đúng sửa hết', () => {
    const text = 'Gestern ich habe mit den Bus gefahren. Es war gut.';
    const errors = [
      { start: 8, end: 16, wrong: 'ich habe', correct: 'habe ich' },
      { start: 21, end: 24, wrong: 'den', correct: 'dem' },
    ];
    expect(errorSentences(text, errors)).toEqual([
      { text_wrong: 'Gestern ich habe mit dem Bus gefahren.', text_correct: 'Gestern habe ich mit dem Bus gefahren.' },
      { text_wrong: 'Gestern habe ich mit den Bus gefahren.', text_correct: 'Gestern habe ich mit dem Bus gefahren.' },
    ]);
  });
});

describe('shouldResolve', () => {
  it('đủ ba điều kiện thì đóng', () => {
    expect(
      shouldResolve({ reviews: [bad(60), ok(50), ok(40), ok(1)], scheduledDaysAfterLast: 25, lastOccurrenceAt: ago(31), now }),
    ).toBe(true);
  });

  it('chưa đúng 3 lần liên tiếp thì chưa đóng', () => {
    expect(shouldResolve({ reviews: [ok(50), bad(40), ok(10), ok(1)], scheduledDaysAfterLast: 25, lastOccurrenceAt: ago(60), now })).toBe(false);
    expect(shouldResolve({ reviews: [ok(10), ok(1)], scheduledDaysAfterLast: 25, lastOccurrenceAt: ago(60), now })).toBe(false);
  });

  it('khoảng ôn sau lần đúng gần nhất dưới 21 ngày thì chưa đóng', () => {
    expect(shouldResolve({ reviews: [ok(30), ok(20), ok(1)], scheduledDaysAfterLast: 20, lastOccurrenceAt: ago(60), now })).toBe(false);
  });

  it('có lần mắc mới trong 30 ngày thì chưa đóng', () => {
    expect(shouldResolve({ reviews: [ok(30), ok(20), ok(1)], scheduledDaysAfterLast: 30, lastOccurrenceAt: ago(29), now })).toBe(false);
  });

  it('mắc lại lỗi đã đóng thì mở lại', () => {
    expect(statusAfterOccurrence('resolved')).toBe('open');
    expect(statusAfterOccurrence('open')).toBe('open');
  });
});

describe('openErrorsByWeek', () => {
  it('đếm lỗi đang mở ở cuối mỗi tuần', () => {
    const errors = [
      { first_seen: ago(20), resolved_at: null, status: 'open' as const },
      { first_seen: ago(20), resolved_at: ago(5), status: 'resolved' as const },
      { first_seen: ago(3), resolved_at: null, status: 'open' as const },
    ];
    expect(openErrorsByWeek(errors, [new Date(now.getTime() - 14 * DAY), new Date(now.getTime() - 7 * DAY), now])).toEqual([2, 2, 2]);
    expect(openErrorsByWeek(errors, [new Date(now.getTime() - 4 * DAY)])).toEqual([1]);
    expect(openErrorsByWeek(errors, [new Date(now.getTime() - 30 * DAY)])).toEqual([0]);
  });
});

describe('rotateOccurrence', () => {
  it('xoay vòng theo số lần ôn', () => {
    expect([0, 1, 2, 3].map((r) => rotateOccurrence(['a', 'b', 'c'], r))).toEqual(['a', 'b', 'c', 'a']);
    expect(rotateOccurrence([], 1)).toBeNull();
  });
});
