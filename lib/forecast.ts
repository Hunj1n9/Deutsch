/**
 * Dự báo mốc giờ học (SPEC F8). Hàm thuần.
 * Mốc giờ học tích lũy: trung điểm khoảng ước tính của Goethe.
 */
export const LEVEL_HOURS = { A1: 105, A2: 205, B1: 375, B2: 525, C1: 675 } as const;
export type Milestone = keyof typeof LEVEL_HOURS;

const WEEK_MS = 7 * 86_400_000;

/** Tốc độ = trung bình giờ/tuần của 4 tuần gần nhất (thiếu tuần thì tính 0 giờ cho tuần đó). */
export function weeklyRate(lastFourWeeksHours: readonly number[]): number {
  const weeks = lastFourWeeksHours.slice(-4);
  return weeks.reduce((a, b) => a + b, 0) / 4;
}

export type MilestoneForecast = {
  level: Milestone;
  target: number;
  /** Số tuần còn lại; 0 nếu đã đạt; null nếu tốc độ bằng 0. */
  weeks: number | null;
  date: Date | null;
  reached: boolean;
};

export function forecastMilestones(hoursDone: number, ratePerWeek: number, now: Date): MilestoneForecast[] {
  return (Object.entries(LEVEL_HOURS) as [Milestone, number][]).map(([level, target]) => {
    if (hoursDone >= target) return { level, target, weeks: 0, date: now, reached: true };
    if (ratePerWeek <= 0) return { level, target, weeks: null, date: null, reached: false };
    const weeks = (target - hoursDone) / ratePerWeek;
    return { level, target, weeks, date: new Date(now.getTime() + weeks * WEEK_MS), reached: false };
  });
}

export type ExamWarning = {
  /** Ngày dự kiến đạt B2 (null nếu tốc độ bằng 0). */
  b2Date: Date | null;
  /** Số giờ mỗi ngày cần học thêm so với tốc độ hiện tại để kịp kỳ thi. */
  extraHoursPerDay: number;
  /** Số giờ mỗi ngày cần đạt. */
  neededHoursPerDay: number;
};

/** Cảnh báo nếu ngày đạt B2 muộn hơn ngày thi; null nếu kịp hoặc không có ngày thi. */
export function examWarning(hoursDone: number, ratePerWeek: number, examDate: Date | null, now: Date): ExamWarning | null {
  if (!examDate) return null;
  const b2 = forecastMilestones(hoursDone, ratePerWeek, now).find((m) => m.level === 'B2')!;
  if (b2.reached) return null;
  if (b2.date && b2.date.getTime() <= examDate.getTime()) return null;
  const daysLeft = Math.max(1, (examDate.getTime() - now.getTime()) / 86_400_000);
  const neededHoursPerDay = (LEVEL_HOURS.B2 - hoursDone) / daysLeft;
  return {
    b2Date: b2.date,
    neededHoursPerDay,
    extraHoursPerDay: Math.max(0, neededHoursPerDay - ratePerWeek / 7),
  };
}
