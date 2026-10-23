import { createBrowserClient } from '@supabase/ssr';
import { SESSION_MAX_AGE_SECONDS } from '@/lib/auth';
import { getPublicEnv } from '@/lib/env';

/** Client Supabase cho Client Component. Chỉ dùng khóa anon; mọi khóa bí mật ở server. */
export function createClient() {
  const { url, anonKey } = getPublicEnv();
  return createBrowserClient(url, anonKey, {
    cookieOptions: { maxAge: SESSION_MAX_AGE_SECONDS },
  });
}
