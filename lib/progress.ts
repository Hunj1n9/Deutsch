import 'server-only';
import { examWarning, forecastMilestones, weeklyRate } from './forecast';
import { minutesByDay, totalHours, weeklyStats, type SessionRow, type TaskRow } from './stats';
import type { UserSettings } from './supabase/queries';
import type { Session } from './supabase/session';
import { localDate } from './time';

/** PostgREST trả tối đa 1000 dòng mỗi lần: lấy hết theo từng trang. */
export async function fetchAll<T>(
  page: (from: number, to: number) => PromiseLike<{ data: unknown[] | null; error: unknown }>,
): Promise<T[]> {
  const size = 1000;
  const out: T[] = [];
  for (let from = 0; ; from += size) {
    const { data, error } = await page(from, from + size - 1);
    if (error) throw error;
    out.push(...((data ?? []) as T[]));
    if (!data || data.length < size) return out;
  }
}

/** Số phút học theo ngày từ toàn bộ nhật ký (giờ đo trong app + phút bài mới). */
export async function loadMinutesByDay({ supabase }: Session) {
  const [sessions, tasks] = await Promise.all([
    fetchAll<SessionRow>((a, b) => supabase.from('study_sessions').select('started_at, active_seconds').order('started_at').range(a, b)),
    fetchAll<TaskRow>((a, b) => supabase.from('daily_tasks').select('task_date, minutes, done').order('task_date').range(a, b)),
  ]);
  return minutesByDay(sessions, tasks);
}

/** Số liệu học + dự báo dùng chung cho trang Hôm nay, Tiến độ và báo cáo tuần. */
export async function loadProgress(session: Session, settings: UserSettings, weeks = 12) {
  const now = new Date();
  const today = localDate(now);
  const byDay = await loadMinutesByDay(session);
  const perWeek = weeklyStats(byDay, today, Math.max(weeks, 5));
  // Tốc độ: 4 tuần trọn gần nhất (không tính tuần đang dở).
  const rate = weeklyRate(perWeek.slice(-5, -1).map((w) => w.hours));
  const hoursDone = Number(settings.hours_offset) + totalHours(byDay);
  return {
    today,
    minutesToday: byDay.get(today) ?? 0,
    thisWeek: perWeek[perWeek.length - 1],
    weeks: perWeek.slice(-weeks),
    rate,
    hoursDone,
    milestones: forecastMilestones(hoursDone, rate, now),
    warning: examWarning(hoursDone, rate, settings.next_exam_date ? new Date(`${settings.next_exam_date}T00:00:00Z`) : null, now),
  };
}
