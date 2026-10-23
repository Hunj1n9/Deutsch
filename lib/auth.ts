// Quy tắc truy cập một người dùng (SPEC F1). Hàm thuần, không phụ thuộc Next hay Supabase.

/** Trang mở được khi chưa đăng nhập. `/auth/confirm` là đích của link trong email. */
export const PUBLIC_PATHS: readonly string[] = ['/login', '/auth/confirm'];

/** Tuổi cookie phiên. TCHT F1 yêu cầu ≥ 30 ngày; refresh token Supabase tự gia hạn khi app được mở. */
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 400;

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/** Thiếu ALLOWED_EMAIL thì không ai vào được (đóng mặc định). */
export function isAllowedEmail(
  email: string | null | undefined,
  allowedEmail: string | null | undefined,
): boolean {
  if (!email || !allowedEmail) return false;
  const allowed = normalizeEmail(allowedEmail);
  return allowed !== '' && normalizeEmail(email) === allowed;
}

export function isPublicPath(pathname: string): boolean {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return PUBLIC_PATHS.includes(path);
}

/** Mã trong email: Supabase mặc định 6 số, cấu hình được tới 10. */
export function normalizeOtp(code: string): string | null {
  const digits = code.replace(/\s+/g, '');
  return /^\d{6,10}$/.test(digits) ? digits : null;
}
