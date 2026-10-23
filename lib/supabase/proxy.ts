import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { isAllowedEmail, isPublicPath, SESSION_MAX_AGE_SECONDS } from '@/lib/auth';
import { readPublicEnv } from '@/lib/env';

/**
 * Chạy trước mọi request (trừ file tĩnh): làm mới phiên Supabase và chặn mọi route,
 * trừ trang công khai, nếu chưa đăng nhập hoặc email khác ALLOWED_EMAIL.
 */
export async function updateSession(request: NextRequest): Promise<NextResponse> {
  const path = request.nextUrl.pathname;
  let response = NextResponse.next({ request });

  const env = readPublicEnv();
  if (!env) {
    return isPublicPath(path) ? response : redirectTo(request, response, '/login?error=config');
  }

  const supabase = createServerClient(env.url, env.anonKey, {
    cookieOptions: { maxAge: SESSION_MAX_AGE_SECONDS },
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet, headers) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        Object.entries(headers).forEach(([key, value]) => response.headers.set(key, value));
      },
    },
  });

  // Không chèn code giữa createServerClient và getClaims: getClaims là bước làm mới token.
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;
  const email = typeof claims?.email === 'string' ? claims.email : null;
  const allowed = isAllowedEmail(email, process.env.ALLOWED_EMAIL);

  if (claims && !allowed) {
    await supabase.auth.signOut();
    return redirectTo(request, response, '/login?error=forbidden');
  }

  if (isPublicPath(path)) {
    return allowed && path === '/login' ? redirectTo(request, response, '/') : response;
  }

  return allowed ? response : redirectTo(request, response, '/login');
}

/** Chuyển hướng nhưng giữ cookie và header chống cache mà Supabase vừa ghi. */
function redirectTo(request: NextRequest, from: NextResponse, target: string): NextResponse {
  const redirect = NextResponse.redirect(new URL(target, request.url));
  from.cookies.getAll().forEach((cookie) => redirect.cookies.set(cookie));
  // Chỉ chép header chống cache; header nội bộ x-middleware-* của NextResponse.next() sẽ làm hỏng redirect.
  for (const key of ['cache-control', 'expires', 'pragma']) {
    const value = from.headers.get(key);
    if (value) redirect.headers.set(key, value);
  }
  return redirect;
}
