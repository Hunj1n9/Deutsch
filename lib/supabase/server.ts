import 'server-only';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { SESSION_MAX_AGE_SECONDS } from '@/lib/auth';
import { getPublicEnv } from '@/lib/env';

/** Client Supabase cho Server Component, Server Action và Route Handler. Tạo mới cho mỗi request. */
export async function createClient() {
  const { url, anonKey } = getPublicEnv();
  const cookieStore = await cookies();

  return createServerClient(url, anonKey, {
    cookieOptions: { maxAge: SESSION_MAX_AGE_SECONDS },
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Gọi từ Server Component thì không ghi được cookie; proxy đã làm mới phiên rồi.
        }
      },
    },
  });
}
