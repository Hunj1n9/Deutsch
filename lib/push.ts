import 'server-only';
import type { SupabaseClient } from '@supabase/supabase-js';
import webpush from 'web-push';

export type PushPayload = { title: string; body: string; url?: string };

let configured = false;

/** Đọc khóa VAPID; thiếu thì trả false để nơi gọi báo lỗi rõ ràng. */
export function pushConfigured(): boolean {
  const pub = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const priv = process.env.VAPID_PRIVATE_KEY;
  if (!pub || !priv) return false;
  if (!configured) {
    webpush.setVapidDetails(process.env.VAPID_SUBJECT || 'mailto:admin@example.com', pub, priv);
    configured = true;
  }
  return true;
}

/**
 * Gửi thông báo tới mọi thiết bị đã bật của người dùng (SPEC F16). Đăng ký đã hết hạn (404/410) thì xóa.
 * Trả số thiết bị nhận được.
 */
export async function sendPush(supabase: SupabaseClient, userId: string, payload: PushPayload): Promise<number> {
  if (!pushConfigured()) throw new Error('Thiếu khóa VAPID');
  const { data } = await supabase.from('push_subscriptions').select('id, endpoint, p256dh, auth').eq('user_id', userId);
  const subs = (data ?? []) as { id: string; endpoint: string; p256dh: string; auth: string }[];
  const body = JSON.stringify(payload);
  const results = await Promise.all(
    subs.map(async (s) => {
      try {
        await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, body, { TTL: 3600 });
        return true;
      } catch (e) {
        const status = (e as { statusCode?: number }).statusCode;
        if (status === 404 || status === 410) await supabase.from('push_subscriptions').delete().eq('id', s.id);
        else console.error('[push] gửi lỗi:', status);
        return false;
      }
    }),
  );
  return results.filter(Boolean).length;
}
