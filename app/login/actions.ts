'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { isAllowedEmail, normalizeEmail, normalizeOtp } from '@/lib/auth';
import { CONFIG_ERROR_VI, readPublicEnv } from '@/lib/env';
import { completeSignIn } from '@/lib/supabase/sign-in';
import { createClient } from '@/lib/supabase/server';

export type LoginState = {
  step: 'email' | 'code';
  email: string;
  message?: string;
  error?: string;
};

const SENT_VI = 'Đã gửi email có link và mã đăng nhập (nếu email đúng). Kiểm tra cả thư rác.';
const BAD_CODE_VI = 'Mã không đúng hoặc đã hết hạn.';
const FORBIDDEN_VI = 'Email này không có quyền dùng app.';

/** Một action cho cả form: gửi email, nhập mã, hoặc quay lại đổi email. */
export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const intent = formData.get('intent');
  const email = normalizeEmail(String(formData.get('email') ?? ''));

  if (intent === 'back') return { step: 'email', email };
  if (!readPublicEnv()) return { step: 'email', email, error: CONFIG_ERROR_VI };
  if (intent === 'verify') return verifyCode(email, String(formData.get('code') ?? ''));
  return sendEmail(email);
}

async function sendEmail(email: string): Promise<LoginState> {
  if (!email.includes('@')) return { step: 'email', email, error: 'Nhập địa chỉ email.' };

  // Email không được phép: trả lời giống hệt để không lộ email nào dùng được app.
  if (!isAllowedEmail(email, process.env.ALLOWED_EMAIL)) {
    return { step: 'code', email, message: SENT_VI };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { shouldCreateUser: false, emailRedirectTo: `${await requestOrigin()}/auth/confirm` },
  });

  if (error) {
    if (error.status === 429) {
      return { step: 'email', email, error: 'Gửi quá nhiều lần. Đợi vài phút rồi thử lại.' };
    }
    console.error('[auth] signInWithOtp lỗi:', error.status, error.code);
    return { step: 'email', email, error: 'Không gửi được email. Thử lại sau ít phút.' };
  }

  return { step: 'code', email, message: SENT_VI };
}

async function verifyCode(email: string, rawCode: string): Promise<LoginState> {
  const token = normalizeOtp(rawCode);
  if (!token) return { step: 'code', email, error: 'Mã gồm 6 chữ số.' };
  if (!isAllowedEmail(email, process.env.ALLOWED_EMAIL)) return { step: 'code', email, error: BAD_CODE_VI };

  const supabase = await createClient();
  const { error } = await supabase.auth.verifyOtp({ email, token, type: 'email' });
  if (error) return { step: 'code', email, error: BAD_CODE_VI };

  const result = await completeSignIn(supabase);
  if (result === 'forbidden') return { step: 'email', email, error: FORBIDDEN_VI };
  if (result === 'error') return { step: 'code', email, error: 'Đăng nhập chưa xong. Thử lại.' };

  redirect('/');
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/login');
}

async function requestOrigin(): Promise<string> {
  const h = await headers();
  const origin = h.get('origin');
  if (origin) return origin;
  const host = h.get('x-forwarded-host') ?? h.get('host') ?? 'localhost:3000';
  const proto = h.get('x-forwarded-proto') ?? (host.startsWith('localhost') ? 'http' : 'https');
  return `${proto}://${host}`;
}
