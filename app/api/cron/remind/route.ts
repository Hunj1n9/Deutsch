import { timingSafeEqual } from 'node:crypto';
import { dueNotification, goalMet, reminderMessage } from '@/lib/daily-goal';
import { loadTodayStatus } from '@/lib/daily-goal-db';
import { sendPush } from '@/lib/push';
import { daysUntil } from '@/lib/stats';
import { createAdminClient } from '@/lib/supabase/admin';
import { localDate, localTime } from '@/lib/time';

function authorized(request: Request): boolean {
  const secret = process.env.CRON_SECRET;
  const got = request.headers.get('authorization') ?? '';
  if (!secret) return false;
  const want = Buffer.from(`Bearer ${secret}`);
  const have = Buffer.from(got);
  return want.length === have.length && timingSafeEqual(want, have);
}

type ReminderRow = {
  user_id: string;
  exam_level: string;
  next_exam_name: string | null;
  next_exam_date: string | null;
  weekly_days_target: number;
  daily_minutes_target: number;
  reminder_enabled: boolean;
  reminder_time: string;
  nag_time: string | null;
  last_reminder_date: string | null;
  last_nag_date: string | null;
};

/** Chạy mỗi 15 phút (pg_cron, SPEC F16): gửi nhắc đúng giờ và nhắc lần hai khi chưa đạt chỉ tiêu. */
export async function POST(request: Request) {
  if (!authorized(request)) return Response.json({ error: 'unauthorized' }, { status: 401 });
  const supabase = createAdminClient();
  const now = new Date();
  const today = localDate(now);
  const time = localTime(now);
  const { data, error } = await supabase
    .from('settings')
    .select(
      'user_id, exam_level, next_exam_name, next_exam_date, weekly_days_target, daily_minutes_target, reminder_enabled, reminder_time, nag_time, last_reminder_date, last_nag_date',
    )
    .eq('reminder_enabled', true);
  if (error) return Response.json({ error: 'settings' }, { status: 500 });

  const sent: string[] = [];
  for (const s of (data ?? []) as ReminderRow[]) {
    const remind = {
      enabled: s.reminder_enabled,
      reminderTime: s.reminder_time,
      nagTime: s.nag_time,
      lastReminderDate: s.last_reminder_date,
      lastNagDate: s.last_nag_date,
    };
    // Chỉ tính chỉ tiêu khi có thể phải gửi, để lần chạy thường không tốn truy vấn.
    if (!dueNotification(remind, today, time, false)) continue;
    const status = await loadTodayStatus({ supabase, userId: s.user_id }, s, now);
    const kind = dueNotification(remind, today, time, goalMet(status));
    if (!kind) {
      // Tới giờ nhắc lần hai nhưng đã đạt chỉ tiêu: đánh dấu để lần chạy sau không tính lại.
      await supabase.from('settings').update({ last_nag_date: today }).eq('user_id', s.user_id);
      continue;
    }
    const msg = reminderMessage(kind, status, s.next_exam_name, daysUntil(s.next_exam_date, today));
    await sendPush(supabase, s.user_id, { ...msg, url: '/' });
    await supabase
      .from('settings')
      .update(kind === 'reminder' ? { last_reminder_date: today } : { last_nag_date: today })
      .eq('user_id', s.user_id);
    sent.push(kind);
  }
  return Response.json({ ok: true, sent });
}
