import { AppMenu } from './AppMenu';

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="mb-5 mt-2 flex items-center justify-between gap-3">
      <div>
        {subtitle && <p className="text-[13px] text-muted">{subtitle}</p>}
        <h1 className="text-[28px] font-bold leading-tight tracking-[-0.02em]">{title}</h1>
      </div>
      <AppMenu />
    </header>
  );
}
