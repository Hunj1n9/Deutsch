'use server';

import { z } from 'zod';
import { EXAM_LEVELS } from '@/lib/daily-goal';
import { LEVELS } from '@/lib/items/types';
import { sendPush, pushConfigured } from '@/lib/push';
import { getSession, SESSION_EXPIRED_VI } from '@/lib/supabase/session';

export type SettingsResponse = { ok: true } | { ok: false; error: string };

const settingsSchema = z.object({
  current_level: z.enum(LEVELS),
  current_source_id: z.uuid().nullable(),
  next_exam_name: z.string().trim().max(120),
  next_exam_date: z.iso.date().nullable(),
  exam_level: z.enum(EXAM_LEVELS),
  daily_minutes_target: z.number().int().min(5, 'Mục tiêu phút/ngày tối thiểu 5.').max(1440),
  weekly_days_target: z.number().int().min(1).max(7, 'Số ngày/tuần từ 1 đến 7.'),
  new_cards_per_day: z.number().int().min(0).max(200, 'Thẻ mới/ngày tối đa 200.'),
  desired_retention: z.number().min(0.7, 'Tỉ lệ nhớ mong muốn từ 70% đến 97%.').max(0.97, 'Tỉ lệ nhớ mong muốn từ 70% đến 97%.'),
  hours_offset: z.number().min(0).max(5000),
});

export type SettingsInput = z.infer<typeof settingsSchema>;

/** Sửa mọi trường trong settings (SPEC F8). */
export async function saveSettingsAction(input: SettingsInput): Promise<SettingsResponse> {
  const parsed = settingsSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? 'Giá trị không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const { error } = await session.supabase
    .from('settings')
    .upsert({ user_id: session.userId, ...parsed.data, next_exam_name: parsed.data.next_exam_name || null });
  if (error) return { ok: false, error: 'Không lưu được cài đặt.' };
  return { ok: true };
}

const sourceSchema = z.object({
  id: z.uuid(),
  kind: z.enum(['textbook', 'edeutsch', 'deutschvn', 'tutor', 'writing', 'other']),
  title: z.string().trim().min(1, 'Tên nguồn không được trống.').max(200),
  chapter: z.string().trim().max(200),
});

export async function updateSourceAction(input: z.input<typeof sourceSchema>): Promise<SettingsResponse> {
  const parsed = sourceSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? 'Không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const { id, chapter, ...rest } = parsed.data;
  const { error } = await session.supabase.from('sources').update({ ...rest, chapter: chapter || null }).eq('id', id);
  return error ? { ok: false, error: 'Không lưu được nguồn.' } : { ok: true };
}

/** Xóa nguồn: các mục của nguồn đó giữ nguyên, chỉ bỏ ghi nguồn (khóa ngoại on delete set null). */
export async function deleteSourceAction(id: string): Promise<SettingsResponse> {
  if (!z.uuid().safeParse(id).success) return { ok: false, error: 'Không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  await session.supabase.from('settings').update({ current_source_id: null }).eq('current_source_id', id);
  const { error } = await session.supabase.from('sources').delete().eq('id', id);
  return error ? { ok: false, error: 'Không xóa được nguồn.' } : { ok: true };
}

/** Nội dung đã báo sai (F13): đánh dấu đã sửa. */
export async function resolveReportAction(id: string): Promise<SettingsResponse> {
  if (!z.uuid().safeParse(id).success) return { ok: false, error: 'Không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const { error } = await session.supabase.from('content_reports').update({ resolved_at: new Date().toISOString() }).eq('id', id);
  return error ? { ok: false, error: 'Không cập nhật được.' } : { ok: true };
}

export async function deleteReportAction(id: string): Promise<SettingsResponse> {
  if (!z.uuid().safeParse(id).success) return { ok: false, error: 'Không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const { error } = await session.supabase.from('content_reports').delete().eq('id', id);
  return error ? { ok: false, error: 'Không xóa được.' } : { ok: true };
}

const timeSchema = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'Giờ không hợp lệ.');

const reminderSchema = z.object({
  reminder_enabled: z.boolean(),
  reminder_time: timeSchema,
  nag_time: timeSchema.nullable(),
});

/** Nhắc học (F16): bật/tắt, giờ nhắc, giờ nhắc lần hai. */
export async function saveReminderAction(input: z.input<typeof reminderSchema>): Promise<SettingsResponse> {
  const parsed = reminderSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? 'Không hợp lệ.' };
  const { reminder_time, nag_time } = parsed.data;
  if (nag_time && nag_time <= reminder_time) return { ok: false, error: 'Giờ nhắc lần hai phải sau giờ nhắc.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const { error } = await session.supabase.from('settings').upsert({ user_id: session.userId, ...parsed.data });
  return error ? { ok: false, error: 'Không lưu được giờ nhắc.' } : { ok: true };
}

const subscriptionSchema = z.object({
  endpoint: z.url().max(2000),
  keys: z.object({ p256dh: z.string().min(1).max(500), auth: z.string().min(1).max(500) }),
});

/** Lưu đăng ký nhận thông báo của trình duyệt này. */
export async function savePushSubscriptionAction(input: z.input<typeof subscriptionSchema>): Promise<SettingsResponse> {
  const parsed = subscriptionSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: 'Đăng ký thông báo không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const { endpoint, keys } = parsed.data;
  const { error } = await session.supabase
    .from('push_subscriptions')
    .upsert({ user_id: session.userId, endpoint, p256dh: keys.p256dh, auth: keys.auth }, { onConflict: 'endpoint' });
  return error ? { ok: false, error: 'Không lưu được đăng ký thông báo.' } : { ok: true };
}

export async function removePushSubscriptionAction(endpoint: string): Promise<SettingsResponse> {
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  const { error } = await session.supabase.from('push_subscriptions').delete().eq('endpoint', endpoint);
  return error ? { ok: false, error: 'Không gỡ được đăng ký.' } : { ok: true };
}

/** Gửi một thông báo thử tới mọi thiết bị đã bật. */
export async function testPushAction(): Promise<SettingsResponse> {
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  if (!pushConfigured()) return { ok: false, error: 'Server chưa có khóa VAPID (xem docs/nhac-hoc.md).' };
  try {
    const n = await sendPush(session.supabase, session.userId, {
      title: 'Thử thông báo',
      body: 'Nhắc học đã chạy. Bis morgen!',
      url: '/',
    });
    return n > 0 ? { ok: true } : { ok: false, error: 'Chưa có thiết bị nào nhận được. Bật nhắc trên máy này trước.' };
  } catch {
    return { ok: false, error: 'Không gửi được thông báo thử.' };
  }
}
