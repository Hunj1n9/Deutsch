'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from '@/app/login/actions';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { BOTTOM_NAV, MENU_ITEMS } from './nav-items';
import { SfxToggle } from './SfxToggle';

function isActive(pathname: string, href: string): boolean {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Điều hướng chính (đơn sắc kiểu Brilliant). Điện thoại: thanh tab dưới đáy. Máy tính (≥ 1024px): cột bên trái
 * có logo, 5 mục chính và các trang trong menu.
 */
export function BottomNav() {
  const pathname = usePathname();

  // Phiên ôn, làm bài và kiểm tra chặng ẩn thanh điều hướng để tập trung (DECISIONS.md).
  if (pathname.startsWith('/review') || pathname.startsWith('/learn/')) return null;

  return (
    <>
      <nav
        aria-label="Điều hướng chính"
        className="fixed inset-x-0 bottom-0 z-20 border-t-[1.5px] border-line bg-surface/95 pb-[max(env(safe-area-inset-bottom),6px)] backdrop-blur lg:hidden"
      >
        <ul className="mx-auto grid max-w-md grid-cols-5 px-2 pt-1.5">
          {BOTTOM_NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`group flex h-14 flex-col items-center justify-center gap-1 transition-colors ${active ? 'text-ink' : 'text-muted'}`}
                >
                  <span
                    className={`grid h-8 w-14 place-items-center rounded-full transition-[background-color,transform] duration-200 group-active:scale-90 ${
                      active ? 'bg-line' : ''
                    }`}
                  >
                    <Icon name={item.icon} size={22} strokeWidth={active ? 2.6 : 2} />
                  </span>
                  <span className={`text-[11px] leading-none ${active ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <aside
        aria-label="Điều hướng"
        className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col gap-1 overflow-y-auto border-r-[1.5px] border-line bg-surface px-4 py-6 lg:flex"
      >
        <Link href="/" className="mb-5 px-3">
          <Logo />
        </Link>
        <ul className="flex flex-col gap-0.5">
          {BOTTOM_NAV.map((item) => (
            <SideLink key={item.href} item={item} active={isActive(pathname, item.href)} big />
          ))}
        </ul>
        <p className="mb-1 mt-6 px-4 text-[12px] font-semibold text-muted">Khác</p>
        <ul className="flex flex-col gap-0.5">
          {MENU_ITEMS.map((item) => (
            <SideLink key={item.href} item={item} active={isActive(pathname, item.href)} />
          ))}
        </ul>
        <div className="mt-auto pt-4">
          <SfxToggle className="rounded-xl text-[14px] hover:bg-bg" />
          <form action={signOut}>
            <button type="submit" className="flex min-h-11 w-full items-center gap-3 rounded-xl px-4 text-[14px] font-semibold text-bad hover:bg-bg">
              <Icon name="logout" />
              Đăng xuất
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}

function SideLink({ item, active, big = false }: { item: (typeof BOTTOM_NAV)[number]; active: boolean; big?: boolean }) {
  return (
    <li>
      <Link
        href={item.href}
        aria-current={active ? 'page' : undefined}
        className={`flex items-center gap-3.5 rounded-xl px-4 transition-colors ${big ? 'h-12 text-[15px]' : 'h-10 text-[14px]'} ${
          active ? 'bg-line font-bold text-ink' : 'font-medium text-ink/75 hover:bg-bg hover:text-ink'
        }`}
      >
        <Icon name={item.icon} size={big ? 22 : 19} strokeWidth={active ? 2.6 : 2} />
        {item.label}
      </Link>
    </li>
  );
}
