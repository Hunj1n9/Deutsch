import { describe, expect, it } from 'vitest';
import { formatInterval, newCardState, previewIntervals, scheduleCard } from '@/lib/scheduler';

const now = new Date('2026-10-25T08:00:00Z');
const DAY = 86_400_000;
const opts = { retention: 0.9 };

describe('scheduleCard', () => {
  it('Good một thẻ New → rời trạng thái New, reps +1', () => {
    const next = scheduleCard(newCardState(now), 3, now, opts);
    expect(next.state).not.toBe(0);
    expect(next.reps).toBe(1);
    expect(next.last_review).toBe(now.toISOString());
  });

  it('Again một thẻ Review → lapses +1 và due trong vòng 1 ngày', () => {
    // Đưa thẻ lên Review: Easy lần đầu.
    const review = scheduleCard(newCardState(now), 4, now, opts);
    expect(review.state).toBe(2);
    const later = new Date(review.due);
    const lapsed = scheduleCard(review, 1, later, opts);
    expect(lapsed.lapses).toBe(review.lapses + 1);
    expect(new Date(lapsed.due).getTime() - later.getTime()).toBeLessThanOrEqual(DAY);
    expect(lapsed.state).toBe(3);
  });

  it('bước học được lưu: Good hai lần liên tiếp ở Learning thì lên Review', () => {
    const learning = scheduleCard(newCardState(now), 3, now, opts);
    expect(learning).toMatchObject({ state: 1, learning_steps: 1 });
    const review = scheduleCard(learning, 3, new Date(learning.due), opts);
    expect(review.state).toBe(2);
  });

  it('khoảng ôn tăng dần theo rating', () => {
    const p = previewIntervals(newCardState(now), now, opts);
    expect(p[1]).toBeLessThan(p[2]);
    expect(p[2]).toBeLessThan(p[3]);
    expect(p[3]).toBeLessThan(p[4]);
  });
});

describe('formatInterval', () => {
  it('đổi ra phút, giờ, ngày, tháng', () => {
    expect(formatInterval(60_000)).toBe('1 phút');
    expect(formatInterval(10 * 60_000)).toBe('10 phút');
    expect(formatInterval(3 * 3_600_000)).toBe('3 giờ');
    expect(formatInterval(4 * DAY)).toBe('4 ngày');
    expect(formatInterval(65 * DAY)).toBe('2 tháng');
  });
});
