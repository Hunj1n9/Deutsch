import type { EmailOtpType } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import type { NextRequest } from 'next/server';
import { readPublicEnv } from '@/lib/env';
import { completeSignIn } from '@/lib/supabase/sign-in';
import { createClient } from '@/lib/supabase/server';

const LINK_TYPES: readonly EmailOtpType[] = ['email', 'magiclink'];

/**
 * Đích của link trong email. Nhận hai dạng:
 * - `?code=…`: mẫu email mặc định của Supabase (gói miễn phí). Chỉ chạy trên đúng trình duyệt đã bấm gửi.
 * - `?token_hash=…&type=email`: mẫu riêng `supabase/templates/magic_link.html` (cần SMTP riêng). Chạy trên mọi trình duyệt.
 */
export async function GET(request: NextRequest) {
  if (!readPublicEnv()) redirect('/login?error=config');

  const params = request.nextUrl.searchParams;
  const code = params.get('code');
  const tokenHash = params.get('token_hash');
  const type = params.get('type') as EmailOtpType | null;

  if (code || (tokenHash && type && LINK_TYPES.includes(type))) {
    const supabase = await createClient();
    const { error } = code
      ? await supabase.auth.exchangeCodeForSession(code)
      : await supabase.auth.verifyOtp({ type: type as EmailOtpType, token_hash: tokenHash as string });

    if (!error) {
      const result = await completeSignIn(supabase);
      if (result === 'ok') redirect('/');
      if (result === 'forbidden') redirect('/login?error=forbidden');
    }
  }

  redirect('/login?error=link');
}
