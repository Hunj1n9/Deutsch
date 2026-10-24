import { Suspense } from 'react';
import { BottomNav } from '@/components/BottomNav';

export default function AppLayout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <main className="mx-auto min-h-dvh max-w-md px-5 pb-36 pt-[max(env(safe-area-inset-top),12px)]">{children}</main>
      {/* BottomNav đọc usePathname: route động (vd /items/[id]) chỉ biết đường dẫn lúc chạy. */}
      <Suspense fallback={null}>
        <BottomNav />
      </Suspense>
    </>
  );
}
