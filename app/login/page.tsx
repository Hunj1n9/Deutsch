import type { Metadata } from 'next';
import { Suspense } from 'react';
import { GeoArt } from '@/components/art/GeoArt';
import { Logo } from '@/components/Logo';
import { LoginForm } from './LoginForm';

export const metadata: Metadata = { title: 'Đăng nhập' };

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col px-5 pb-10 pt-[max(env(safe-area-inset-top),24px)]">
      <div className="mt-2 animate-fade-up">
        <Logo size={30} />
      </div>
      <section className="mb-6 mt-6 animate-pop-in overflow-hidden rounded-block bg-surface">
        <div className="bg-pastel-yellow px-6 py-4">
          <GeoArt seed="welcome" className="mx-auto h-40 w-full max-w-xs" />
        </div>
        <div className="p-6">
          <h1 className="text-[30px] font-extrabold leading-tight">Học tiếng Đức bằng cách làm, mỗi ngày một chút.</h1>
          <p className="mt-2 text-[16px] text-muted">Từ số 0 đến TestDaF, có gia sư AI giải thích bằng tiếng Việt.</p>
        </div>
      </section>
      <Suspense>
        <LoginForm />
      </Suspense>
    </main>
  );
}
