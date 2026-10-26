'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from './Icon';
import { BOTTOM_NAV } from './nav-items';

function isActive(pathname: string, href: string): boolean {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

export function BottomNav() {
  const pathname = usePathname();

  // Phiên ôn, làm bài và kiểm tra chặng ẩn thanh điều hướng để tập trung (DECISIONS.md).
  if (pathname.startsWith('/review') || pathname.startsWith('/learn/')) return null;

  return (
    <nav
      aria-label="Điều hướng chính"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-20 flex justify-center px-3 pb-[max(env(safe-area-inset-bottom),12px)]"
    >
      <ul className="pointer-events-auto grid w-full max-w-md grid-cols-5 gap-1 rounded-[26px] bg-surface p-1.5 shadow-[0_0_0_8px_color-mix(in_srgb,var(--bg)_70%,transparent)]">
        {BOTTOM_NAV.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`flex h-14 flex-col items-center justify-center gap-0.5 rounded-[20px] transition-colors ${
                  active ? 'bg-primary text-on-primary' : 'text-muted hover:text-ink'
                }`}
              >
                <Icon name={item.icon} />
                <span className="text-[11px] font-semibold leading-none">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
