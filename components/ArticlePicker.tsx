'use client';

import { ARTICLES, type Article } from '@/lib/items/types';

const ACTIVE: Record<Article, string> = {
  der: 'bg-der text-white',
  die: 'bg-die text-white',
  das: 'bg-das text-white',
};
const IDLE: Record<Article, string> = {
  der: 'bg-surface text-der',
  die: 'bg-surface text-die',
  das: 'bg-surface text-das',
};

/** Chọn mạo từ der/die/das; bấm lại để bỏ chọn. */
export function ArticlePicker({
  value,
  onChange,
  invalid,
}: {
  value: Article | null;
  onChange: (value: Article | null) => void;
  invalid?: boolean;
}) {
  return (
    <div
      className={`flex gap-2 rounded-full ${invalid ? 'outline-2 outline-bad outline-offset-2' : ''}`}
      role="radiogroup"
      aria-label="Mạo từ"
    >
      {ARTICLES.map((a) => (
        <button
          key={a}
          type="button"
          role="radio"
          aria-checked={value === a}
          onClick={() => onChange(value === a ? null : a)}
          className={`h-11 flex-1 rounded-full text-[17px] font-semibold outline-1 outline-line ${value === a ? ACTIVE[a] : IDLE[a]}`}
        >
          {a}
        </button>
      ))}
    </div>
  );
}
