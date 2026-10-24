import { addDays, localDate, weekStart } from './time';

/**
 * Số liệu học tập (SPEC F7, F8). Hàm thuần: nhận dòng CSDL, trả số liệu theo ngày/tuần (giờ Việt Nam).
 */
export type SessionRow = { started_at: string; active_seconds: number };
export type TaskRow = { task_date: string; minutes: number | null; done: boolean };
export type ReviewRow = { reviewed_at: string; state_before: number | null; correct: boolean };

/** Số phút học theo ngày ('YYYY-MM-DD' → phút): giờ đo trong app + phút bài mới đã tick xong. */
export function minutesByDay(sessions: readonly SessionRow[], tasks: readonly TaskRow[]): Map<string, number> {
  const out = new Map<string, number>();
  const add = (day: string, minutes: number) => out.set(day, (out.get(day) ?? 0) + minutes);
  for (const s of sessions) add(localDate(new Date(s.started_at)), s.active_seconds / 60);
  for (const t of tasks) if (t.done && t.minutes) add(t.task_date, t.minutes);
  return out;
}

export type WeekStat = { week: string; hours: number; days: number };

/** `count` tuần gần nhất tính tới tuần chứa `today`, cũ → mới. Một ngày tính là "đã học" khi có ít nhất 1 phút. */
export function weeklyStats(byDay: ReadonlyMap<string, number>, today: string, count: number): WeekStat[] {
  const current = weekStart(today);
  return Array.from({ length: count }, (_, i) => {
    const week = addDays(current, (i - count + 1) * 7);
    let minutes = 0;
    let days = 0;
    for (let d = 0; d < 7; d++) {
      const m = byDay.get(addDays(week, d)) ?? 0;
      minutes += m;
      if (m >= 1) days += 1;
    }
    return { week, hours: minutes / 60, days };
  });
}

/** Tỉ lệ nhớ thực tế: tỉ lệ đúng ở các lần ôn thẻ đang ở trạng thái Review (state_before = 2). null nếu chưa có. */
export function retentionRate(reviews: readonly ReviewRow[]): number | null {
  const review = reviews.filter((r) => r.state_before === 2);
  if (review.length === 0) return null;
  return review.filter((r) => r.correct).length / review.length;
}

export function totalHours(byDay: ReadonlyMap<string, number>): number {
  let minutes = 0;
  for (const m of byDay.values()) minutes += m;
  return minutes / 60;
}

/** Số ngày còn tới ngày thi (theo ngày địa phương); null nếu chưa đặt. */
export function daysUntil(date: string | null, today: string): number | null {
  if (!date) return null;
  const [a, b] = [date, today].map((d) => Date.UTC(+d.slice(0, 4), +d.slice(5, 7) - 1, +d.slice(8, 10)));
  return Math.round((a - b) / 86_400_000);
}
