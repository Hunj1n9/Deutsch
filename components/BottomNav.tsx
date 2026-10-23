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

  // Phiên ôn ẩn thanh điều hướng để tập trung (DECISIONS.md).
  if (pathname.startsWith('/review')) return null;

  return (
    <nav
      aria-label="Điều hướng chính"
      className="fixed inset-x-0 bottom-0 z-20 flex justify-center pb-[max(env(safe-area-inset-bottom),16px)] pointer-events-none"
    >
      <ul className="pointer-events-auto flex gap-1.5 rounded-full bg-surface p-1.5 shadow-[0_0_0_8px_color-mix(in_srgb,var(--bg)_70%,transparent)]">
        {BOTTOM_NAV.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
                className={`grid size-13 place-items-center rounded-full transition-colors ${
                  active ? 'bg-primary text-on-primary' : 'bg-bg text-muted hover:text-ink'
                }`}
              >
                <Icon name={item.icon} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
