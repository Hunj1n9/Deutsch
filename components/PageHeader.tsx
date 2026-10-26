import Link from 'next/link';
import { AppMenu } from './AppMenu';
import { Icon } from './Icon';

/**
 * Tiêu đề trang. Trang vào từ menu (không có trên thanh dưới) truyền `back` để có nút quay lại,
 * nên luôn biết đường về mà không phải mở menu.
 */
export function PageHeader({ title, subtitle, back }: { title: string; subtitle?: string; back?: { href: string; label: string } }) {
  return (
    <header className="mb-5 mt-2 flex items-center gap-3">
      {back && (
        <Link href={back.href} aria-label={back.label} className="grid size-11 shrink-0 place-items-center rounded-full bg-surface">
          <Icon name="back" />
        </Link>
      )}
      <div className="min-w-0 flex-1">
        {subtitle && <p className="text-[13px] text-muted">{subtitle}</p>}
        <h1 className="truncate text-[28px] font-bold leading-tight tracking-[-0.02em]">{title}</h1>
      </div>
      <AppMenu />
    </header>
  );
}
