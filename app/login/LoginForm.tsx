'use client';

import { useSearchParams } from 'next/navigation';
import { useActionState } from 'react';
import { Icon } from '@/components/Icon';
import { CONFIG_ERROR_VI } from '@/lib/env';
import { loginAction, type LoginState } from './actions';

const URL_ERRORS: Record<string, string> = {
  link: 'Link đã hết hạn hoặc đã dùng rồi. Nhập mã trong email, hoặc gửi lại.',
  forbidden: 'Email này không có quyền dùng app.',
  config: CONFIG_ERROR_VI,
};

const fieldClass =
  'h-14 w-full rounded-[20px] bg-surface px-[18px] text-[18px] outline-2 outline-line focus:outline-ink';
const primaryClass =
  'flex h-13 w-full items-center justify-center gap-2 rounded-full bg-primary text-[16px] font-semibold text-on-primary disabled:opacity-50';

export function LoginForm() {
  const params = useSearchParams();
  const [state, formAction, pending] = useActionState<LoginState, FormData>(loginAction, {
    step: 'email',
    email: '',
  });

  const urlError = state.email === '' ? URL_ERRORS[params.get('error') ?? ''] : undefined;
  const error = state.error ?? urlError;

  return (
    <form action={formAction} className="flex flex-col gap-3" noValidate>
      {state.step === 'email' ? (
        <>
          <label htmlFor="email" className="ml-1 text-[13px] font-semibold text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
            required
            defaultValue={state.email}
            placeholder="ban@example.com"
            className={fieldClass}
          />
          <button type="submit" name="intent" value="send" disabled={pending} className={primaryClass}>
            <Icon name="mail" />
            {pending ? 'Đang gửi…' : 'Gửi link và mã đăng nhập'}
          </button>
        </>
      ) : (
        <>
          <input type="hidden" name="email" value={state.email} />
          {state.message && (
            <p className="rounded-[20px] bg-pastel-sage p-4 text-[15px] leading-relaxed">
              {state.message}
              <span className="mt-1 block font-semibold">{state.email}</span>
            </p>
          )}
          <p className="px-1 text-[14px] leading-relaxed text-muted">
            Bấm link trong email, hoặc nhập mã ở đây. Mở app từ màn hình chính thì dùng mã.
          </p>
          <label htmlFor="code" className="ml-1 text-[13px] font-semibold text-muted">
            Mã đăng nhập
          </label>
          <input
            id="code"
            name="code"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="[0-9 ]*"
            maxLength={12}
            required
            autoFocus
            placeholder="123456"
            className={`${fieldClass} text-center text-[26px] font-semibold tracking-[.3em]`}
          />
          <button type="submit" name="intent" value="verify" disabled={pending} className={primaryClass}>
            {pending ? 'Đang kiểm tra…' : 'Đăng nhập'}
          </button>
          <button
            type="submit"
            name="intent"
            value="back"
            formNoValidate
            disabled={pending}
            className="h-11 text-[14px] font-semibold text-muted"
          >
            Đổi email hoặc gửi lại
          </button>
        </>
      )}

      {error && (
        <p role="alert" className="rounded-[20px] bg-pastel-pink p-4 text-[15px] leading-relaxed">
          {error}
        </p>
      )}
    </form>
  );
}
