'use server';

import { z } from 'zod';
import { LEVELS } from '@/lib/items/types';
import { getSession, SESSION_EXPIRED_VI } from '@/lib/supabase/session';

export type SettingsResponse = { ok: true } | { ok: false; error: string };

const settingsSchema = z.object({
  current_level: z.enum(LEVELS),
  current_source_id: z.uuid().nullable(),
  next_exam_name: z.string().trim().max(120),
  next_exam_date: z.iso.date().nullable(),
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
