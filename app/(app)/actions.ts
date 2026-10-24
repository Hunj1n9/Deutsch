'use server';

import { z } from 'zod';
import { planBeat } from '@/lib/heartbeat';
import { getSession, SESSION_EXPIRED_VI } from '@/lib/supabase/session';
import { addDays, localDate } from '@/lib/time';

const activitySchema = z.enum(['review', 'writing', 'tutor']);

/**
 * Nhịp đo giờ học (SPEC F8): nối vào phiên đang chạy của hoạt động đó (cộng tối đa 30 giây) hoặc mở phiên mới.
 * Lỗi thì bỏ qua: mất một nhịp không đáng làm phiền người học.
 */
export async function heartbeatAction(activity: 'review' | 'writing' | 'tutor'): Promise<void> {
  const parsed = activitySchema.safeParse(activity);
  if (!parsed.success) return;
  const session = await getSession();
  if (!session) return;
  const now = new Date();

  const { data: last } = await session.supabase
    .from('study_sessions')
    .select('id, ended_at, active_seconds')
    .eq('activity', parsed.data)
    .order('started_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  const plan = planBeat(last?.ended_at ? new Date(last.ended_at) : null, now);
  if (plan.kind === 'extend' && last) {
    await session.supabase
      .from('study_sessions')
      .update({ active_seconds: last.active_seconds + plan.addSeconds, ended_at: now.toISOString() })
      .eq('id', last.id);
  } else {
    await session.supabase.from('study_sessions').insert({
      user_id: session.userId,
      activity: parsed.data,
      started_at: now.toISOString(),
      ended_at: now.toISOString(),
      active_seconds: 0,
    });
  }
}

// ---------- Bài mới hôm nay (SPEC F7) ----------

export type TaskResponse = { ok: true } | { ok: false; error: string };

const taskIdSchema = z.uuid();

export async function addTaskAction(input: { title: string }): Promise<TaskResponse> {
  const parsed = z.object({ title: z.string().trim().min(1, 'Nhập tên việc.').max(200) }).safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? 'Không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const { error } = await session.supabase
    .from('daily_tasks')
    .insert({ user_id: session.userId, task_date: localDate(new Date()), title: parsed.data.title });
  return error ? { ok: false, error: 'Không thêm được việc.' } : { ok: true };
}

/** Tick xong kèm số phút đã học (phút này cộng vào giờ học), hoặc bỏ tick. */
export async function setTaskDoneAction(input: { id: string; done: boolean; minutes: number | null }): Promise<TaskResponse> {
  const parsed = z
    .object({ id: taskIdSchema, done: z.boolean(), minutes: z.number().int().min(0).max(1440).nullable() })
    .safeParse(input);
  if (!parsed.success) return { ok: false, error: 'Số phút không hợp lệ (0–1440).' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const { error } = await session.supabase
    .from('daily_tasks')
    .update({ done: parsed.data.done, minutes: parsed.data.done ? parsed.data.minutes : null })
    .eq('id', parsed.data.id);
  return error ? { ok: false, error: 'Không lưu được.' } : { ok: true };
}

export async function deleteTaskAction(id: string): Promise<TaskResponse> {
  if (!taskIdSchema.safeParse(id).success) return { ok: false, error: 'Không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const { error } = await session.supabase.from('daily_tasks').delete().eq('id', id);
  return error ? { ok: false, error: 'Không xóa được.' } : { ok: true };
}

/** Chép các việc chưa xong của hôm qua sang hôm nay (bỏ qua việc trùng tên đã có hôm nay). */
export async function copyYesterdayAction(): Promise<TaskResponse> {
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const today = localDate(new Date());
  const { data } = await session.supabase
    .from('daily_tasks')
    .select('title, task_date, done')
    .in('task_date', [addDays(today, -1), today]);
  const rows = (data ?? []) as { title: string; task_date: string; done: boolean }[];
  const existing = new Set(rows.filter((r) => r.task_date === today).map((r) => r.title));
  const copy = rows.filter((r) => r.task_date !== today && !r.done && !existing.has(r.title));
  if (copy.length === 0) return { ok: true };
  const { error } = await session.supabase
    .from('daily_tasks')
    .insert(copy.map((r) => ({ user_id: session.userId, task_date: today, title: r.title })));
  return error ? { ok: false, error: 'Không chép được.' } : { ok: true };
}
