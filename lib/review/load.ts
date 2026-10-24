import 'server-only';
import { rotateOccurrence } from '@/lib/errors';
import { buildSessionQueue } from '@/lib/review-queue';
import { viewCard, type ReviewItem } from '@/lib/review-card';
import type { CardState } from '@/lib/scheduler';
import type { Session } from '@/lib/supabase/session';
import { localDate, startOfLocalDay } from '@/lib/time';

export type SessionCard = {
  id: string;
  item_id: string;
  kind: string;
  state: CardState;
  item: ReviewItem & { id: string };
  /** Lỗi gắn với thẻ error_fix (M4). */
  error?: { id: string; title_vi: string; wrong: string; accepted: string[] } | null;
};

const CARD_COLUMNS =
  'id, item_id, kind, due, stability, difficulty, elapsed_days, scheduled_days, learning_steps, reps, lapses, state, last_review, items!inner(id, type, german, article, plural, vietnamese, example_de, example_vi, grammar_note_vi, level, tags, error_id)';

type CardRow = {
  id: string;
  item_id: string;
  kind: string;
  due: string;
  stability: number;
  difficulty: number;
  elapsed_days: number;
  scheduled_days: number;
  learning_steps: number;
  reps: number;
  lapses: number;
  state: number;
  last_review: string | null;
  items: ReviewItem & { id: string; error_id: string | null };
};

export function toSessionCard(row: CardRow): SessionCard {
  return {
    id: row.id,
    item_id: row.item_id,
    kind: row.kind,
    item: row.items,
    state: {
      due: row.due,
      stability: row.stability,
      difficulty: row.difficulty,
      elapsed_days: row.elapsed_days,
      scheduled_days: row.scheduled_days,
      learning_steps: row.learning_steps,
      reps: row.reps,
      lapses: row.lapses,
      state: row.state,
      last_review: row.last_review,
    },
  };
}

/** Số thẻ mới còn được học hôm nay và các thẻ đã ôn hôm nay theo item. */
async function todayInfo({ supabase }: Session, newPerDay: number, now: Date) {
  const since = startOfLocalDay(localDate(now)).toISOString();
  const { data } = await supabase
    .from('review_logs')
    .select('card_id, state_before, flags, cards!inner(item_id)')
    .gte('reviewed_at', since);
  const rows = (data ?? []) as unknown as {
    card_id: string;
    state_before: number | null;
    flags: string[] | null;
    cards: { item_id: string };
  }[];
  // Lần ôn đầu ghi từ bài học (cờ lesson) không tính vào giới hạn thẻ mới (SPEC F11).
  const newToday = new Set(
    rows.filter((r) => r.state_before === 0 && !r.flags?.includes(LESSON_FLAG)).map((r) => r.card_id),
  ).size;
  const reviewedToday = new Map<string, Set<string>>();
  for (const r of rows) {
    const set = reviewedToday.get(r.cards.item_id) ?? new Set<string>();
    set.add(r.card_id);
    reviewedToday.set(r.cards.item_id, set);
  }
  return { newLeft: Math.max(0, newPerDay - newToday), reviewedToday, reviewedCount: rows.length };
}

export const SESSION_LIMIT = 200;

/** Cờ của lần ôn đầu ghi từ bài học. */
export const LESSON_FLAG = 'lesson';

function fromLesson(tags: readonly string[] | null): boolean {
  return Boolean(tags?.some((t) => t.startsWith('lesson:')));
}

/** Kiểu thẻ đưa vào phiên ôn. */
export const REVIEW_KINDS = ['vi_de', 'audio_de', 'cloze', 'error_fix'] as const;

/** Toàn bộ thẻ của một phiên, tải sẵn một lần để chuyển thẻ không phải chờ mạng (TCHT F3). */
export async function loadReviewSession(
  session: Session,
  { newPerDay, kinds }: { newPerDay: number; kinds: readonly string[] },
): Promise<SessionCard[]> {
  const now = new Date();
  const { newLeft, reviewedToday } = await todayInfo(session, newPerDay, now);

  const [dueRes, freshRes] = await Promise.all([
    session.supabase
      .from('cards')
      .select(CARD_COLUMNS)
      .eq('suspended', false)
      .neq('state', 0)
      .in('kind', kinds)
      .lte('due', now.toISOString())
      .order('due')
      .limit(SESSION_LIMIT),
    newLeft > 0
      ? session.supabase
          .from('cards')
          .select(CARD_COLUMNS)
          .eq('suspended', false)
          .eq('state', 0)
          .in('kind', kinds)
          .order('created_at')
          .order('kind')
          .limit(newLeft * 4)
      : Promise.resolve({ data: [] }),
  ]);

  const usable = (rows: unknown) =>
    ((rows ?? []) as CardRow[]).map(toSessionCard).filter((c) => c.kind === 'error_fix' || viewCard(c.kind, c.item));
  const due = usable(dueRes.data).map((c) => ({ ...c, due: c.state.due }));
  // Thẻ mới của mục đã học qua bài học được ưu tiên (SPEC F11).
  const fresh = usable(freshRes.data)
    .map((c) => ({ ...c, due: c.state.due }))
    .sort((a, b) => Number(fromLesson(b.item.tags)) - Number(fromLesson(a.item.tags)));

  const queue = buildSessionQueue({ due, fresh, newLimit: newLeft, reviewedToday }).map((c) => {
    const { due: _due, ...card } = c;
    void _due;
    return card;
  });
  return attachErrors(session, queue);
}

type ErrorRow = {
  id: string;
  title_vi: string;
  error_occurrences: { text_wrong: string; text_correct: string; created_at: string }[];
};

/** Thẻ error_fix: lấy câu sai theo vòng xoay và mọi câu đúng đã chấp nhận cho câu sai đó (SPEC F3, F4). */
async function attachErrors(session: Session, cards: SessionCard[]): Promise<SessionCard[]> {
  const errorIds = [
    ...new Set(
      cards.flatMap((c) => {
        const id = (c.item as { error_id?: string | null }).error_id;
        return c.kind === 'error_fix' && id ? [id] : [];
      }),
    ),
  ];
  if (errorIds.length === 0) return cards.filter((c) => c.kind !== 'error_fix');

  const { data } = await session.supabase
    .from('errors')
    .select('id, title_vi, error_occurrences(text_wrong, text_correct, created_at)')
    .in('id', errorIds);
  const byId = new Map(((data ?? []) as ErrorRow[]).map((e) => [e.id, e]));

  return cards.flatMap((c) => {
    if (c.kind !== 'error_fix') return [c];
    const err = byId.get((c.item as { error_id?: string | null }).error_id ?? '');
    if (!err) return [];
    const groups = new Map<string, Set<string>>();
    for (const o of [...err.error_occurrences].sort((a, b) => a.created_at.localeCompare(b.created_at))) {
      const set = groups.get(o.text_wrong) ?? new Set<string>();
      set.add(o.text_correct);
      groups.set(o.text_wrong, set);
    }
    const picked = rotateOccurrence([...groups.entries()], c.state.reps);
    if (!picked) return [];
    return [{ ...c, error: { id: err.id, title_vi: err.title_vi, wrong: picked[0], accepted: [...picked[1]] } }];
  });
}

export type ReviewCounts = { due: number; fresh: number; errorFixDue: number; reviewedToday: number };

/** Số liệu cho khối "Ôn thẻ" và "Sổ lỗi" ở trang Hôm nay (F7). */
export async function loadReviewCounts(session: Session, newPerDay: number): Promise<ReviewCounts> {
  const now = new Date();
  const { newLeft, reviewedCount } = await todayInfo(session, newPerDay, now);
  const base = () =>
    session.supabase.from('cards').select('id', { count: 'exact', head: true }).eq('suspended', false);
  const [due, fresh, errorFix] = await Promise.all([
    base().neq('state', 0).lte('due', now.toISOString()),
    base().eq('state', 0),
    base().eq('kind', 'error_fix').lte('due', now.toISOString()),
  ]);
  return {
    due: due.count ?? 0,
    fresh: Math.min(newLeft, fresh.count ?? 0),
    errorFixDue: errorFix.count ?? 0,
    reviewedToday: reviewedCount,
  };
}
