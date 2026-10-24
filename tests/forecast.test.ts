import { describe, expect, it } from 'vitest';
import { examWarning, forecastMilestones, weeklyRate } from '@/lib/forecast';
import { BEAT_INTERVAL_MS, planBeat, shouldBeat } from '@/lib/heartbeat';

const now = new Date('2026-10-24T00:00:00Z');

describe('forecastMilestones', () => {
  it('tốc độ 10 giờ/tuần, đã học 205 giờ → mốc B1 sau 17 tuần (TCHT F8)', () => {
    const b1 = forecastMilestones(205, 10, now).find((m) => m.level === 'B1')!;
    expect(b1.weeks).toBe(17);
    expect(b1.date?.toISOString()).toBe(new Date(now.getTime() + 17 * 7 * 86_400_000).toISOString());
  });

  it('mốc đã qua thì đánh dấu đạt; tốc độ 0 thì không có ngày', () => {
    const m = forecastMilestones(205, 0, now);
    expect(m.find((x) => x.level === 'A2')).toMatchObject({ reached: true, weeks: 0 });
    expect(m.find((x) => x.level === 'B1')).toMatchObject({ reached: false, weeks: null, date: null });
  });

  it('tốc độ là trung bình 4 tuần gần nhất', () => {
    expect(weeklyRate([20, 8, 10, 12, 10])).toBe(10);
    expect(weeklyRate([12])).toBe(3);
  });
});

describe('examWarning', () => {
  it('kịp thi thì không cảnh báo', () => {
    expect(examWarning(205, 10, new Date('2027-12-01T00:00:00Z'), now)).toBeNull();
    expect(examWarning(205, 10, null, now)).toBeNull();
  });

  it('không kịp thì cảnh báo và tính số giờ/ngày cần tăng', () => {
    // Còn 320 giờ tới B2, thi sau 160 ngày → cần 2 giờ/ngày; đang học 10 giờ/tuần ≈ 1,43 giờ/ngày.
    const w = examWarning(205, 10, new Date(now.getTime() + 160 * 86_400_000), now)!;
    expect(w.neededHoursPerDay).toBeCloseTo(2, 5);
    expect(w.extraHoursPerDay).toBeCloseTo(2 - 10 / 7, 5);
  });
});

describe('heartbeat', () => {
  it('nhịp liền nhau cộng tối đa 30 giây; cách xa thì mở phiên mới', () => {
    expect(planBeat(null, now)).toEqual({ kind: 'start' });
    expect(planBeat(new Date(now.getTime() - 30_000), now)).toEqual({ kind: 'extend', addSeconds: 30 });
    expect(planBeat(new Date(now.getTime() - 40_000), now)).toEqual({ kind: 'extend', addSeconds: 30 });
    expect(planBeat(new Date(now.getTime() - 10 * 60_000), now)).toEqual({ kind: 'start' });
  });

  it('treo máy 5 phút giữa phiên ôn thì không bị cộng thêm quá 2 phút (TCHT F8)', () => {
    const lastInteraction = 0;
    let lastBeat: Date | null = new Date(lastInteraction);
    let added = 0;
    for (let t = BEAT_INTERVAL_MS; t <= 5 * 60_000; t += BEAT_INTERVAL_MS) {
      if (!shouldBeat(t, lastInteraction)) continue;
      const plan = planBeat(lastBeat, new Date(t));
      if (plan.kind === 'extend') added += plan.addSeconds;
      lastBeat = new Date(t);
    }
    expect(added).toBeLessThanOrEqual(120);
  });
});
