import type { ReactNode } from 'react';

type Span = { start: number; end: number };

/** Văn bản gốc, gạch chân các chỗ sai và đánh số theo thứ tự lỗi. */
export function AnnotatedText({ text, errors }: { text: string; errors: readonly Span[] }) {
  const ordered = errors.map((e, i) => ({ ...e, n: i + 1 })).sort((a, b) => a.start - b.start);
  const parts: ReactNode[] = [];
  let at = 0;
  for (const e of ordered) {
    if (e.start < at) continue; // bỏ chỗ chồng lấn
    if (e.start > at) parts.push(text.slice(at, e.start));
    parts.push(
      <mark key={`${e.start}-${e.n}`} className="rounded bg-transparent text-inherit underline decoration-bad decoration-wavy decoration-2 underline-offset-4">
        {text.slice(e.start, e.end)}
        <sup className="ml-0.5 text-[11px] font-bold text-bad">{e.n}</sup>
      </mark>,
    );
    at = e.end;
  }
  parts.push(text.slice(at));
  return (
    <p className="whitespace-pre-wrap text-[18px] leading-relaxed" lang="de">
      {parts}
    </p>
  );
}
