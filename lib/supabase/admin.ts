import 'server-only';
import { createClient } from '@supabase/supabase-js';
import { getPublicEnv } from '@/lib/env';

/**
 * Client service role, bỏ qua RLS. Chỉ dùng ở lần chạy nhắc học định kỳ (không có phiên đăng nhập);
 * mọi truy vấn phải tự lọc theo user_id.
 */
export function createAdminClient() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) throw new Error('Thiếu SUPABASE_SERVICE_ROLE_KEY');
  return createClient(getPublicEnv().url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}
