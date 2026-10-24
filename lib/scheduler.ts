import { fsrs, type Card, type FSRS, type Grade } from 'ts-fsrs';

/**
 * Bọc ts-fsrs (SPEC F3). Hàm thuần: nhận trạng thái thẻ dạng cột CSDL, trả trạng thái mới.
 * Giờ được truyền vào (`now`) để test và để server là nơi quyết định giờ thật.
 */
export type CardState = {
  due: string;
  stability: number;
  difficulty: number;
  elapsed_days: number;
  scheduled_days: number;
  learning_steps: number;
  reps: number;
  lapses: number;
  /** 0 New, 1 Learning, 2 Review, 3 Relearning */
  state: number;
  last_review: string | null;
};

export type Rating = 1 | 2 | 3 | 4;

export const RATING_VI: Record<Rating, string> = { 1: 'Lại', 2: 'Khó', 3: 'Được', 4: 'Dễ' };

const schedulers = new Map<string, FSRS>();

function scheduler(retention: number, fuzz: boolean): FSRS {
  const key = `${retention}|${fuzz}`;
  let f = schedulers.get(key);
  if (!f) {
    f = fsrs({ request_retention: retention, enable_fuzz: fuzz });
    schedulers.set(key, f);
  }
  return f;
}

function toCard(s: CardState): Card {
  return {
    due: new Date(s.due),
    stability: s.stability,
    difficulty: s.difficulty,
    elapsed_days: s.elapsed_days,
    scheduled_days: s.scheduled_days,
    learning_steps: s.learning_steps,
    reps: s.reps,
    lapses: s.lapses,
    state: s.state,
    last_review: s.last_review ? new Date(s.last_review) : undefined,
  };
}

function fromCard(c: Card): CardState {
  return {
    due: c.due.toISOString(),
    stability: c.stability,
    difficulty: c.difficulty,
    elapsed_days: c.elapsed_days,
    scheduled_days: c.scheduled_days,
    learning_steps: c.learning_steps,
    reps: c.reps,
    lapses: c.lapses,
    state: c.state,
    last_review: c.last_review ? c.last_review.toISOString() : null,
  };
}

export type ScheduleOptions = { retention: number; fuzz?: boolean };

export function scheduleCard(state: CardState, rating: Rating, now: Date, { retention, fuzz = true }: ScheduleOptions) {
  return fromCard(scheduler(retention, fuzz).next(toCard(state), now, rating as Grade).card);
}

/** Khoảng tới lần ôn kế tiếp (ms) cho từng rating, để hiện trên nút chấm. */
export function previewIntervals(state: CardState, now: Date, { retention }: ScheduleOptions): Record<Rating, number> {
  const preview = scheduler(retention, false).repeat(toCard(state), now);
  const out = {} as Record<Rating, number>;
  for (const r of [1, 2, 3, 4] as const) out[r] = preview[r as Grade].card.due.getTime() - now.getTime();
  return out;
}

export function formatInterval(ms: number): string {
  const minutes = Math.max(1, Math.round(ms / 60_000));
  if (minutes < 60) return `${minutes} phút`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} giờ`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days} ngày`;
  const months = Math.round(days / 30);
  if (months < 12) return `${months} tháng`;
  return `${Math.round((days / 365) * 10) / 10} năm`;
}

export function newCardState(now: Date): CardState {
  return {
    due: now.toISOString(),
    stability: 0,
    difficulty: 0,
    elapsed_days: 0,
    scheduled_days: 0,
    learning_steps: 0,
    reps: 0,
    lapses: 0,
    state: 0,
    last_review: null,
  };
}
