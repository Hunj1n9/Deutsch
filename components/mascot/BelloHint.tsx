import { Bello } from './Bello';

/** Ô gợi ý có Bello tò mò (SPEC F17: mở gợi ý trong bài tập). */
export function BelloHint({
  children,
  tone = 'bg-pastel-yellow',
  className = '',
}: {
  children: React.ReactNode;
  /** Màu nền ô; đổi khi ô nằm trên nền vàng sẵn. */
  tone?: string;
  className?: string;
}) {
  return (
    <div className={`flex animate-pop-in items-center gap-1 rounded-xl py-1 pl-1 pr-3 ${tone} ${className}`}>
      <Bello state="curious" from="stand" className="h-[72px] w-auto shrink-0" />
      <div className="min-w-0 text-[15px] font-medium">{children}</div>
    </div>
  );
}
