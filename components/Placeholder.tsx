const tones = {
  yellow: 'bg-pastel-yellow',
  pink: 'bg-pastel-pink',
  lilac: 'bg-pastel-lilac',
  sage: 'bg-pastel-sage',
  sky: 'bg-pastel-sky',
  white: 'bg-surface',
} as const;

export type Tone = keyof typeof tones;

/** Khối giữ chỗ cho tính năng của mốc sau. Màu theo khối chức năng (DESIGN.md). */
export function Placeholder({
  label,
  milestone,
  children,
  tone = 'white',
}: {
  label: string;
  milestone: string;
  children: React.ReactNode;
  tone?: Tone;
}) {
  return (
    <section className={`scribble mb-3 rounded-block p-5 ${tones[tone]}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">{label}</span>
        <span className="rounded-full bg-surface px-3 py-1 text-[12px] font-semibold">Làm ở {milestone}</span>
      </div>
      <p className="mt-2 text-[15px] leading-relaxed opacity-80">{children}</p>
    </section>
  );
}
