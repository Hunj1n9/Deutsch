'use server';

import { getAiClient } from '@/lib/ai/anthropic';
import { weeklyReport, type WeeklyStats } from '@/lib/ai/p5-weekly-report';
import { AI_ERROR_VI } from '@/lib/ai/structured';
import { loadProgress } from '@/lib/progress';
import { retentionRate, type ReviewRow } from '@/lib/stats';
import { loadSettings } from '@/lib/supabase/queries';
import { getSession, SESSION_EXPIRED_VI } from '@/lib/supabase/session';
import { addDays, startOfLocalDay } from '@/lib/time';

export type ReportResponse = { ok: true } | { ok: false; error: string };

/** "Tạo báo cáo tuần" (SPEC F8): server tính số liệu tuần hiện tại, AI (P5) viết tóm tắt + 3 điều chỉnh, lưu weekly_reports. */
export async function createWeeklyReportAction(): Promise<ReportResponse> {
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const ai = getAiClient();
  if (!ai) return { ok: false, error: AI_ERROR_VI.config };

  const settings = await loadSettings(session);
  const progress = await loadProgress(session, settings, 1);
  const week = progress.thisWeek;
  const from = startOfLocalDay(week.week).toISOString();
  const to = startOfLocalDay(addDays(week.week, 7)).toISOString();

  const [logs, newErrors, closedErrors, topErrors, previous] = await Promise.all([
    session.supabase.from('review_logs').select('reviewed_at, state_before, correct').gte('reviewed_at', from).lt('reviewed_at', to),
    session.supabase.from('errors').select('id', { count: 'exact', head: true }).gte('first_seen', from).lt('first_seen', to),
    session.supabase.from('errors').select('id', { count: 'exact', head: true }).gte('resolved_at', from).lt('resolved_at', to),
    session.supabase.from('errors').select('title_vi, occurrences').eq('status', 'open').order('occurrences', { ascending: false }).limit(3),
    session.supabase.from('weekly_reports').select('summary_vi').lt('week_start', week.week).order('week_start', { ascending: false }).limit(1).maybeSingle(),
  ]);
  const reviews = (logs.data ?? []) as ReviewRow[];

  const stats: WeeklyStats = {
    week_start: week.week,
    hours: Math.round(week.hours * 10) / 10,
    days: week.days,
    reviews: reviews.length,
    retention: retentionRate(reviews),
    new_errors: newErrors.count ?? 0,
    closed_errors: closedErrors.count ?? 0,
    top_errors: (topErrors.data ?? []) as { title_vi: string; occurrences: number }[],
  };

  const result = await weeklyReport(ai.create, ai.model, {
    stats,
    settings: {
      level: settings.current_level,
      daily_minutes_target: settings.daily_minutes_target,
      weekly_days_target: settings.weekly_days_target,
      new_cards_per_day: settings.new_cards_per_day,
      desired_retention: settings.desired_retention,
      next_exam_name: settings.next_exam_name,
      next_exam_date: settings.next_exam_date,
    },
    previous: (previous.data as { summary_vi: string } | null)?.summary_vi ?? null,
  });
  if (!result.ok) return { ok: false, error: result.message };

  // Bảng chỉ có cột summary_vi: 3 điều chỉnh lưu kèm trong stats (DECISIONS.md).
  const { error } = await session.supabase.from('weekly_reports').upsert(
    {
      user_id: session.userId,
      week_start: week.week,
      stats: { ...stats, adjustments: result.data.adjustments },
      summary_vi: result.data.summary_vi,
    },
    { onConflict: 'user_id,week_start' },
  );
  if (error) return { ok: false, error: 'Không lưu được báo cáo.' };
  return { ok: true };
}
