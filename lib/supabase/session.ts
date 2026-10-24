import 'server-only';
import type { SupabaseClient } from '@supabase/supabase-js';
import { isAllowedEmail } from '@/lib/auth';
import { connection } from 'next/server';
import { readPublicEnv } from '@/lib/env';
import { createClient } from './server';

export type Session = { supabase: SupabaseClient; userId: string };

/**
 * Client Supabase của người dùng đã đăng nhập đúng ALLOWED_EMAIL, hoặc null.
 * Server action là endpoint công khai: kiểm lại ở đây chứ không chỉ dựa vào proxy, nhất là trước khi gọi AI tốn tiền.
 */
export async function getSession(): Promise<Session | null> {
  if (!readPublicEnv()) return null;
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;
  const email = typeof claims?.email === 'string' ? claims.email : null;
  if (!claims?.sub || !isAllowedEmail(email, process.env.ALLOWED_EMAIL)) return null;
  return { supabase, userId: claims.sub };
}

export const SESSION_EXPIRED_VI = 'Phiên đăng nhập đã hết. Tải lại trang để đăng nhập lại.';

/**
 * Dùng trong Server Component: `connection()` báo Next đây là phần chạy theo từng request,
 * nên không bị prerender (Supabase đọc giờ hiện tại khi kiểm token).
 */
export async function getPageSession(): Promise<Session | null> {
  await connection();
  return getSession();
}
