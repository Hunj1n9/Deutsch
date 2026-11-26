const TONES = {
  green: 'bg-green',
  blue: 'bg-blue',
  gold: 'bg-gold',
  purple: 'bg-purple',
  orange: 'bg-orange',
} as const;

/** Thanh tiến độ bo tròn; chiều rộng chạy mượt khi đổi giá trị. */
export function ProgressBar({
  value,
  max = 1,
  tone = 'green',
  label,
  className = '',
  height = 'h-3',
}: {
  value: number;
  max?: number;
  tone?: keyof typeof TONES;
  label?: string;
  className?: string;
  height?: string;
}) {
  const pct = Math.max(0, Math.min(100, (value / Math.max(max, 1e-9)) * 100));
  return (
    <div
      className={`${height} overflow-hidden rounded-full bg-line ${className}`}
      role={label ? 'progressbar' : undefined}
      aria-label={label}
      aria-valuenow={label ? Math.round(value) : undefined}
      aria-valuemax={label ? Math.round(max) : undefined}
      aria-hidden={label ? undefined : true}
    >
      <div
        className={`h-full rounded-full ${TONES[tone]} transition-[width] duration-700 ease-[var(--ease-out-soft)]`}
        style={{ width: `${pct}%`, minWidth: pct > 0 ? '0.5rem' : 0 }}
      />
    </div>
  );
}
