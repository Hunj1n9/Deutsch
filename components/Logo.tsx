/** Logo chữ "deutsch" kèm dấu hình học ba màu cờ Đức. */
export function Logo({ size = 28 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2">
      <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
        <rect x="2" y="2" width="28" height="28" rx="9" fill="var(--ink)" />
        <circle cx="12" cy="13" r="5" fill="#ffcc00" />
        <path d="M17 24 L22.5 13 L28 24 Z" fill="#dd2d2d" />
        <rect x="6.5" y="20" width="9" height="4.5" rx="1.5" fill="var(--surface)" />
      </svg>
      <span className="text-[24px] font-extrabold leading-none tracking-[-0.04em]" style={{ fontSize: size * 0.86 }}>
        deutsch
      </span>
    </span>
  );
}
