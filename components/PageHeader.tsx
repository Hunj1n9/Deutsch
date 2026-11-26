import Link from 'next/link';
import { AppMenu } from './AppMenu';
import { Icon } from './Icon';

/**
 * Tiêu đề trang. Trang vào từ menu (không có trên thanh dưới) truyền `back` để có nút quay lại,
 * nên luôn biết đường về mà không phải mở menu. `aside` là vùng nhỏ bên phải (vd. chỉ số).
 */
export function PageHeader({
  title,
  subtitle,
  back,
  aside,
}: {
  title: string;
  subtitle?: string;
  back?: { href: string; label: string };
  aside?: React.ReactNode;
}) {
  return (
    <header className="mb-5 mt-2 flex animate-fade-up items-center gap-3">
      {back && (
        <Link href={back.href} aria-label={back.label} className="grid size-11 shrink-0 place-items-center rounded-full bg-surface outline-[1.5px] outline-line">
          <Icon name="back" strokeWidth={2.4} />
        </Link>
      )}
      <div className="min-w-0 flex-1">
        {subtitle && <p className="text-[13px] font-medium text-muted">{subtitle}</p>}
        <h1 className="truncate text-[30px] font-extrabold leading-tight">{title}</h1>
      </div>
      {aside}
      <AppMenu />
    </header>
  );
}
