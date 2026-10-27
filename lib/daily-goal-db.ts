import 'server-only';
import { STAGE_LESSONS } from '@/data/lessons';
import { EXAM_LEVELS, lessonGoal, remainingUnits, type ExamLevel, type StageUnits, type TodayStatus } from './daily-goal';
import { minutesByDay, type SessionRow, type TaskRow } from './stats';
import type { Session } from './supabase/session';
import { localDate, startOfLocalDay } from './time';

export type GoalSettings = {
  exam_level: string;
  next_exam_date: string | null;
  weekly_days_target: number;
  daily_minutes_target: number;
};

/**
 * Chỉ tiêu và tình trạng hôm nay (SPEC F16). Mọi truy vấn lọc theo user_id để dùng được cả với
 * client service role ở lần chạy nhắc định kỳ (không có RLS).
 */
export async function loadTodayStatus({ supabase, userId }: Session, settings: GoalSettings, now = new Date()): Promise<TodayStatus> {
  const today = localDate(now);
  const since = startOfLocalDay(today).toISOString();
  const [lessons, tests, due, sessions, tasks] = await Promise.all([
    supabase.from('lesson_progress').select('lesson_id, completed_at, skipped').eq('user_id', userId),
    supabase.from('stage_tests').select('stage_id, passed, taken_at').eq('user_id', userId).eq('passed', true),
    supabase
      .from('cards')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', userId)
      .eq('suspended', false)
      .neq('state', 0)
      .lte('due', now.toISOString()),
    supabase.from('study_sessions').select('started_at, active_seconds').eq('user_id', userId).gte('started_at', since),
    supabase.from('daily_tasks').select('task_date, minutes, done').eq('user_id', userId).eq('task_date', today),
  ]);

  const lessonRows = (lessons.data ?? []) as { lesson_id: string; completed_at: string | null; skipped: boolean }[];
  const done = new Set(lessonRows.filter((r) => r.completed_at || r.skipped).map((r) => r.lesson_id));
  // Chặng qua lần đầu hôm nay thì kiểm tra đó là một phần đã xong hôm nay.
  const firstPass = new Map<string, string>();
  for (const t of (tests.data ?? []) as { stage_id: string; taken_at: string }[]) {
    const cur = firstPass.get(t.stage_id);
    if (!cur || t.taken_at < cur) firstPass.set(t.stage_id, t.taken_at);
  }

  const examLevel: ExamLevel = (EXAM_LEVELS as readonly string[]).includes(settings.exam_level) ? (settings.exam_level as ExamLevel) : 'B2';
  const maxIdx = EXAM_LEVELS.indexOf(examLevel);
  const stages: StageUnits[] = STAGE_LESSONS.map((s) => ({
    stageId: s.stage_id,
    level: s.stage_id.slice(0, 2).toUpperCase() as ExamLevel,
    lessons: s.lessons.map((l) => ({ id: l.id, done: done.has(l.id) })),
    passed: firstPass.has(s.stage_id),
  }));
  const inScope = new Set(stages.filter((s) => EXAM_LEVELS.indexOf(s.level) <= maxIdx).map((s) => s.stageId));
  const lessonsToday = lessonRows.filter(
    (r) => r.completed_at && r.completed_at >= since && inScope.has(r.lesson_id.slice(0, 5)),
  ).length;
  const testsToday = [...firstPass].filter(([stage, at]) => at >= since && inScope.has(stage)).length;

  const minutes = minutesByDay((sessions.data ?? []) as SessionRow[], (tasks.data ?? []) as TaskRow[]).get(today) ?? 0;
  return {
    lesson: lessonGoal(
      remainingUnits(stages, examLevel),
      lessonsToday + testsToday,
      today,
      settings.next_exam_date,
      settings.weekly_days_target,
    ),
    dueCards: due.count ?? 0,
    minutesToday: minutes,
    minutesTarget: settings.daily_minutes_target,
  };
}
