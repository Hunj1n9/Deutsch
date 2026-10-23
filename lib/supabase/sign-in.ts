import 'server-only';
import type { SupabaseClient } from '@supabase/supabase-js';
import { isAllowedEmail } from '@/lib/auth';

export type SignInResult = 'ok' | 'forbidden' | 'error';

/**
 * Bước cuối sau khi xác thực link hoặc mã: kiểm lại email và tạo dòng settings
 * mặc định ở lần đăng nhập đầu (SPEC F1). Lỗi thì đăng xuất để không kẹt nửa vời.
 */
export async function completeSignIn(supabase: SupabaseClient): Promise<SignInResult> {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) return 'error';

  if (!isAllowedEmail(user.email, process.env.ALLOWED_EMAIL)) {
    await supabase.auth.signOut();
    return 'forbidden';
  }

  const { error: settingsError } = await supabase
    .from('settings')
    .upsert({ user_id: user.id }, { onConflict: 'user_id', ignoreDuplicates: true });

  if (settingsError) {
    console.error('[auth] không tạo được settings:', settingsError.code, settingsError.message);
    await supabase.auth.signOut();
    return 'error';
  }

  return 'ok';
}
