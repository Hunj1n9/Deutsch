'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { signOut } from '@/app/login/actions';
import { Icon } from './Icon';
import { MENU_ITEMS } from './nav-items';
import { SfxToggle } from './SfxToggle';

export function AppMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Mở menu"
        aria-expanded={open}
        className="grid size-11 shrink-0 place-items-center rounded-full bg-surface outline-[1.5px] outline-line lg:hidden"
      >
        <Icon name="menu" strokeWidth={2.4} />
      </button>

      {open && (
        <div className="fixed inset-0 z-30" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            type="button"
            aria-label="Đóng menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 animate-[fade-up_200ms_ease-out_both] bg-black/40"
          />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-md animate-slide-up rounded-t-[28px] bg-bg p-5 pb-[max(env(safe-area-inset-bottom),20px)]">
            <div aria-hidden className="mx-auto -mt-2 mb-3 h-1.5 w-12 rounded-full bg-line-strong" />
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[13px] font-extrabold text-muted">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Đóng"
                className="grid size-11 place-items-center rounded-full bg-surface outline-[1.5px] outline-line"
              >
                <Icon name="x" />
              </button>
            </div>
            <ul className="overflow-hidden rounded-2xl border-[1.5px] border-line bg-surface">
              {MENU_ITEMS.map((item) => (
                <li key={item.href} className="border-b-[1.5px] border-line last:border-0">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-13 items-center gap-3 px-4 text-[16px] font-medium active:bg-bg"
                  >
                    <Icon name={item.icon} className="text-muted" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 overflow-hidden rounded-2xl border-[1.5px] border-line bg-surface">
              <SfxToggle />
            </div>
            <form action={signOut} className="mt-3">
              <button
                type="submit"
                className="flex min-h-13 w-full items-center gap-3 rounded-2xl border-[1.5px] border-line bg-surface px-4 text-[16px] font-medium text-bad"
              >
                <Icon name="logout" />
                Đăng xuất
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
