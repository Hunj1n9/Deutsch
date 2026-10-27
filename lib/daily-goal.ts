/**
 * Chỉ tiêu hôm nay theo ngày thi và lịch nhắc học (SPEC F16). Hàm thuần.
 */
import { daysUntil } from './stats';

export type ExamLevel = 'A1' | 'A2' | 'B1' | 'B2';
export const EXAM_LEVELS: readonly ExamLevel[] = ['A1', 'A2', 'B1', 'B2'];

/** Một chặng của khóa học: các bài và trạng thái (đã xong / đã qua kiểm tra). */
export type StageUnits = {
  stageId: string;
  level: ExamLevel;
  lessons: { id: string; done: boolean }[];
  passed: boolean;
};

/**
 * Phần còn lại tới hết cấp thi: mỗi bài chưa xong là một phần, mỗi kiểm tra chặng chưa qua là một phần.
 * Chặng đã qua kiểm tra thì coi như xong cả các bài của chặng.
 */
export function remainingUnits(stages: readonly StageUnits[], examLevel: ExamLevel): number {
  const maxIdx = EXAM_LEVELS.indexOf(examLevel);
  let n = 0;
  for (const s of stages) {
    if (EXAM_LEVELS.indexOf(s.level) > maxIdx || s.passed) continue;
    n += s.lessons.filter((l) => !l.done).length + 1;
  }
  return n;
}

/** Số ngày học còn lại từ hôm nay (tính cả hôm nay) tới trước ngày thi, theo số ngày học mỗi tuần. */
export function studyDaysLeft(today: string, examDate: string, weeklyDays: number): number {
  const days = daysUntil(examDate, today) ?? 0;
  if (days <= 0) return 0;
  return Math.max(1, Math.floor((days * Math.min(7, Math.max(1, weeklyDays))) / 7));
}

/** Trên ngần này phần mỗi ngày thì báo khó kịp (mỗi bài khoảng 30 phút). */
export const HEAVY_UNITS_PER_DAY = 4;

export type LessonGoal = {
  /** Số phần (bài + kiểm tra chặng) cần xong hôm nay. */
  target: number;
  doneToday: number;
  /** Phần còn lại tới hết cấp thi, chưa trừ phần đã xong hôm nay. */
  remaining: number;
  studyDays: number;
  heavy: boolean;
};

/**
 * Chỉ tiêu hôm nay = phần còn lại lúc đầu ngày ÷ số ngày học còn lại, làm tròn lên.
 * Cộng lại phần đã xong hôm nay để chỉ tiêu không giảm dần trong ngày khi người học làm xong từng bài.
 * Null khi chưa đặt ngày thi hoặc ngày thi đã qua.
 */
export function lessonGoal(
  remainingNow: number,
  doneToday: number,
  today: string,
  examDate: string | null,
  weeklyDays: number,
): LessonGoal | null {
  if (!examDate) return null;
  const studyDays = studyDaysLeft(today, examDate, weeklyDays);
  if (studyDays === 0) return null;
  const atStart = remainingNow + doneToday;
  const target = Math.ceil(atStart / studyDays);
  return { target, doneToday, remaining: remainingNow, studyDays, heavy: target > HEAVY_UNITS_PER_DAY };
}

export type TodayStatus = {
  lesson: LessonGoal | null;
  /** Thẻ đến hạn chưa ôn. */
  dueCards: number;
  minutesToday: number;
  minutesTarget: number;
};

export type Shortfall = { units: number; cards: number; minutes: number };

/** Phần còn thiếu hôm nay; tất cả bằng 0 là đã đạt. */
export function shortfall(s: TodayStatus): Shortfall {
  return {
    units: s.lesson ? Math.max(0, s.lesson.target - s.lesson.doneToday) : 0,
    cards: s.dueCards,
    minutes: Math.max(0, Math.round(s.minutesTarget - s.minutesToday)),
  };
}

export function goalMet(s: TodayStatus): boolean {
  const f = shortfall(s);
  return f.units === 0 && f.cards === 0 && f.minutes === 0;
}

/** "2 bài/kiểm tra · 35 thẻ · 80 phút" (bỏ phần đã đủ). */
export function shortfallText(f: Shortfall): string {
  const parts: string[] = [];
  if (f.units > 0) parts.push(`${f.units} bài mới`);
  if (f.cards > 0) parts.push(`${f.cards} thẻ đến hạn`);
  if (f.minutes > 0) parts.push(`${f.minutes} phút`);
  return parts.join(' · ');
}

/** Nội dung thông báo. `kind` reminder: nhắc đúng giờ; nag: nhắc lần hai khi chưa đạt. */
export function reminderMessage(kind: 'reminder' | 'nag', s: TodayStatus, examName: string | null, daysToExam: number | null): {
  title: string;
  body: string;
} {
  const left = shortfallText(shortfall(s));
  const exam = daysToExam !== null && daysToExam >= 0 ? `${examName ?? 'Kỳ thi'} còn ${daysToExam} ngày. ` : '';
  if (kind === 'nag') {
    return { title: 'Hôm nay chưa xong chỉ tiêu', body: `${exam}Còn thiếu: ${left}. Làm nốt trước khi ngủ nhé!` };
  }
  return {
    title: 'Đến giờ học tiếng Đức',
    body: left ? `${exam}Hôm nay cần: ${left}.` : `${exam}Hôm nay đã đạt chỉ tiêu, ôn thêm chút nếu còn sức.`,
  };
}

export type ReminderSettings = {
  enabled: boolean;
  /** 'HH:MM' hoặc 'HH:MM:SS' theo giờ của người học. */
  reminderTime: string;
  /** Giờ nhắc lần hai; null = tắt. */
  nagTime: string | null;
  lastReminderDate: string | null;
  lastNagDate: string | null;
};

/** Gửi trễ quá ngần này phút sau giờ đặt thì bỏ (vd mới bật nhắc lúc 23:00 với giờ nhắc 19:00). */
export const SEND_WINDOW_MIN = 60;

function minutesOf(time: string): number {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

function inWindow(nowMin: number, time: string): boolean {
  const d = nowMin - minutesOf(time);
  return d >= 0 && d < SEND_WINDOW_MIN;
}

/**
 * Lần chạy định kỳ (mỗi 15 phút) có cần gửi gì không. `nowTime` là 'HH:MM' theo giờ người học.
 * Nhắc lần hai chỉ gửi khi chưa đạt chỉ tiêu; đã gửi trong ngày thì không gửi lại.
 */
export function dueNotification(
  r: ReminderSettings,
  today: string,
  nowTime: string,
  met: boolean,
): 'reminder' | 'nag' | null {
  if (!r.enabled) return null;
  const now = minutesOf(nowTime);
  if (r.nagTime && r.lastNagDate !== today && inWindow(now, r.nagTime)) return met ? null : 'nag';
  if (r.lastReminderDate !== today && inWindow(now, r.reminderTime)) return 'reminder';
  return null;
}
