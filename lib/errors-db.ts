import 'server-only';
import type { ErrorCategory } from './errors';
import { shouldResolve } from './errors';
import type { Session } from './supabase/session';

export type ErrorEntry = {
  rule_key: string;
  category: ErrorCategory;
  title_vi: string;
  explanation_vi: string;
  source: 'textbook' | 'edeutsch' | 'deutschvn' | 'tutor' | 'writing' | 'other';
  text_wrong: string;
  text_correct: string;
};

/** Tối đa 200 khóa lỗi đã có (nhiều lần mắc trước) để AI dùng lại khóa cũ (SPEC F4). */
export async function loadRuleKeys({ supabase }: Session): Promise<{ rule_key: string; title_vi: string }[]> {
  const { data } = await supabase
    .from('errors')
    .select('rule_key, title_vi')
    .order('occurrences', { ascending: false })
    .order('last_seen', { ascending: false })
    .limit(200);
  return (data ?? []) as { rule_key: string; title_vi: string }[];
}

/** Ghi lỗi, gom theo rule_key, trong một giao dịch (hàm SQL record_errors). */
export async function recordErrors({ supabase }: Session, entries: ErrorEntry[]) {
  if (entries.length === 0) return [];
  const { data, error } = await supabase.rpc('record_errors', { p_errors: entries });
  if (error) throw error;
  return (data ?? []) as { error_id: string; rule_key: string; created: boolean }[];
}

/** Sau mỗi lần ôn thẻ error_fix: đủ điều kiện thì đóng lỗi (SPEC F4). */
export async function maybeResolveError({ supabase }: Session, errorId: string, cardId: string): Promise<boolean> {
  const [{ data: err }, { data: card }, { data: logs }] = await Promise.all([
    supabase.from('errors').select('status, last_seen').eq('id', errorId).single(),
    supabase.from('cards').select('scheduled_days').eq('id', cardId).single(),
    supabase.from('review_logs').select('correct, reviewed_at').eq('card_id', cardId).order('reviewed_at'),
  ]);
  if (!err || !card || err.status !== 'open') return false;
  const resolve = shouldResolve({
    reviews: (logs ?? []) as { correct: boolean; reviewed_at: string }[],
    scheduledDaysAfterLast: card.scheduled_days,
    lastOccurrenceAt: err.last_seen,
    now: new Date(),
  });
  if (!resolve) return false;
  await supabase.from('errors').update({ status: 'resolved', resolved_at: new Date().toISOString() }).eq('id', errorId);
  return true;
}

const GENDER_VI = { der: 'giống đực', die: 'giống cái', das: 'giống trung' } as const;

/** Lỗi sai mạo từ ở thẻ ôn (SPEC F3 bước 4): `rule_key = gender-<từ>`, `category = gender`. */
export function genderErrorEntry(
  noun: string,
  article: 'der' | 'die' | 'das',
  given: string,
  ruleKey: string,
): ErrorEntry {
  return {
    rule_key: ruleKey,
    category: 'gender',
    title_vi: `Giống của ${noun}: ${article} ${noun}`,
    explanation_vi: `${noun} là danh từ ${GENDER_VI[article]}, đi với mạo từ ${article}.`,
    source: 'other',
    text_wrong: given,
    text_correct: `${article} ${noun}`,
  };
}
