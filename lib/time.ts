/**
 * Ngày theo giờ của người học. App một người dùng ở Việt Nam nên cố định múi giờ (DECISIONS.md);
 * "hôm nay" dùng cho giới hạn thẻ mới, luật một item mỗi ngày, nhật ký học.
 */
export const APP_TIME_ZONE = 'Asia/Ho_Chi_Minh';

/** 'YYYY-MM-DD' của thời điểm `now` theo múi giờ `tz`. */
export function localDate(now: Date, tz: string = APP_TIME_ZONE): string {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' })
    .formatToParts(now)
    .reduce<Record<string, string>>((acc, p) => ({ ...acc, [p.type]: p.value }), {});
  return `${parts.year}-${parts.month}-${parts.day}`;
}

/** Độ lệch (phút) của múi giờ so với UTC tại thời điểm `at`. */
function offsetMinutes(at: Date, tz: string): number {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
    .formatToParts(at)
    .reduce<Record<string, number>>((acc, p) => (p.type === 'literal' ? acc : { ...acc, [p.type]: Number(p.value) }), {});
  const asUtc = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second);
  return Math.round((asUtc - at.getTime()) / 60_000);
}

/** Thời điểm 0 giờ của ngày `date` ('YYYY-MM-DD') theo múi giờ `tz`. */
export function startOfLocalDay(date: string, tz: string = APP_TIME_ZONE): Date {
  const [y, m, d] = date.split('-').map(Number);
  const guess = new Date(Date.UTC(y, m - 1, d));
  return new Date(guess.getTime() - offsetMinutes(guess, tz) * 60_000);
}

/** Cộng `days` ngày vào 'YYYY-MM-DD'. */
export function addDays(date: string, days: number): string {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}

/** Thứ Hai đầu tuần chứa ngày `date`. */
export function weekStart(date: string): string {
  const [y, m, d] = date.split('-').map(Number);
  const dow = new Date(Date.UTC(y, m - 1, d)).getUTCDay(); // 0 = Chủ nhật
  return addDays(date, dow === 0 ? -6 : 1 - dow);
}
