import type { Metadata } from 'next';
import { Suspense } from 'react';
import { LoginForm } from './LoginForm';

export const metadata: Metadata = { title: 'Đăng nhập' };

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col px-5 pb-10 pt-[max(env(safe-area-inset-top),24px)]">
      <section className="scribble mb-6 mt-6 rounded-block bg-pastel-yellow p-6 pt-16">
        <h1 className="text-[40px] font-bold leading-none tracking-[-0.03em]">Deutsch</h1>
        <p className="mt-2 text-[15px] opacity-75">Tự học tiếng Đức, từ số 0 đến TestDaF.</p>
      </section>
      <Suspense>
        <LoginForm />
      </Suspense>
    </main>
  );
}
