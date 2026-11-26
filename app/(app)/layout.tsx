import { Suspense } from 'react';
import { BottomNav } from '@/components/BottomNav';

export default function AppLayout({ children }: LayoutProps<'/'>) {
  return (
    <div className="lg:flex">
      {/* BottomNav đọc usePathname: route động (vd /items/[id]) chỉ biết đường dẫn lúc chạy. Trên máy tính nó là cột trái. */}
      <Suspense fallback={null}>
        <BottomNav />
      </Suspense>
      <main className="mx-auto min-h-dvh w-full min-w-0 max-w-md px-5 pb-36 pt-[max(env(safe-area-inset-top),12px)] lg:max-w-[640px] lg:px-8 lg:pb-16 lg:pt-8">
        {children}
      </main>
    </div>
  );
}
