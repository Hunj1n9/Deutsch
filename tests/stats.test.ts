import { describe, expect, it } from 'vitest';
import { daysUntil, minutesByDay, retentionRate, totalHours, weeklyStats } from '@/lib/stats';

describe('minutesByDay', () => {
  it('cộng giờ đo trong app theo ngày Việt Nam và phút bài mới đã xong', () => {
    const byDay = minutesByDay(
      [
        { started_at: '2026-10-23T16:30:00Z', active_seconds: 600 }, // 23:30 ngày 23
        { started_at: '2026-10-23T17:30:00Z', active_seconds: 1200 }, // 00:30 ngày 24
      ],
      [
        { task_date: '2026-10-24', minutes: 40, done: true },
        { task_date: '2026-10-24', minutes: 90, done: false },
      ],
    );
    expect(Object.fromEntries(byDay)).toEqual({ '2026-10-23': 10, '2026-10-24': 60 });
    expect(totalHours(byDay)).toBeCloseTo(70 / 60);
  });
});

describe('weeklyStats', () => {
  it('giờ và số ngày học mỗi tuần, cũ → mới', () => {
    const byDay = new Map([
      ['2026-10-12', 60],
      ['2026-10-19', 30],
      ['2026-10-20', 90],
      ['2026-10-21', 0.5],
    ]);
    expect(weeklyStats(byDay, '2026-10-24', 3)).toEqual([
      { week: '2026-10-05', hours: 0, days: 0 },
      { week: '2026-10-12', hours: 1, days: 1 },
      { week: '2026-10-19', hours: 120.5 / 60, days: 2 },
    ]);
  });
});

describe('retentionRate', () => {
  it('chỉ tính lần ôn thẻ trạng thái Review', () => {
    expect(
      retentionRate([
        { reviewed_at: '', state_before: 2, correct: true },
        { reviewed_at: '', state_before: 2, correct: false },
        { reviewed_at: '', state_before: 0, correct: false },
        { reviewed_at: '', state_before: 2, correct: true },
        { reviewed_at: '', state_before: 2, correct: true },
      ]),
    ).toBe(0.75);
    expect(retentionRate([])).toBeNull();
  });
});

describe('daysUntil', () => {
  it('đếm ngược theo ngày', () => {
    expect(daysUntil('2026-12-24', '2026-10-24')).toBe(61);
    expect(daysUntil(null, '2026-10-24')).toBeNull();
  });
});
