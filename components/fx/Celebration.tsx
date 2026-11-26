'use client';

import { useEffect } from 'react';
import { belloItem, type BelloItemId } from '@/lib/bello-items';
import { Icon, type IconName } from '../Icon';
import { Bello, type BelloState } from '../mascot/Bello';
import { putOn, useOutfit } from '../mascot/outfit-store';
import { secondaryClass } from '../ui';
import { Confetti } from './Confetti';
import { playComplete } from './sfx';

const TILE = {
  gold: { dot: 'bg-gold', text: 'text-ink' },
  green: { dot: 'bg-green', text: 'text-ink' },
  blue: { dot: 'bg-blue', text: 'text-ink' },
  purple: { dot: 'bg-purple', text: 'text-ink' },
  red: { dot: 'bg-red', text: 'text-ink' },
} as const;

export type CelebrationStat = { label: string; value: string; icon: IconName; tone: keyof typeof TILE };

/**
 * Màn chúc mừng cuối bài/phiên kiểu Brilliant: Bello (F17), tiêu đề lớn, các thẻ chỉ số; pháo giấy khi đạt.
 * `party` = false khi kết quả chưa tốt: không bắn pháo giấy, lời động viên.
 */
export function Celebration({
  title,
  subtitle,
  stats,
  party = true,
  bello = 'happy',
  newItems = [],
  children,
}: {
  title: string;
  subtitle?: React.ReactNode;
  stats: CelebrationStat[];
  party?: boolean;
  /** Trạng thái của Bello: vui khi xong bài hoặc đạt, buồn khi chưa đạt, ngủ khi hết thẻ ôn. */
  bello?: BelloState;
  /** Món đồ vừa mở nhờ đúng lần làm này. */
  newItems?: readonly BelloItemId[];
  children?: React.ReactNode;
}) {
  useEffect(() => {
    if (party) playComplete();
  }, [party]);

  return (
    <section className="flex flex-col items-center gap-3 text-center">
      {party && <Confetti />}
      <div className="w-full animate-pop-in overflow-hidden rounded-block bg-pastel-yellow px-6 pt-2">
        <Bello state={bello} from="stand" className="mx-auto h-40 w-auto max-w-full" />
      </div>
      {newItems.map((id) => (
        <NewItem key={id} id={id} />
      ))}
      <h2 className="mt-2 animate-fade-up text-[30px] font-extrabold leading-tight [animation-delay:120ms]">
        {title}
      </h2>
      {subtitle && <div className="animate-fade-up text-[15px] font-semibold text-muted [animation-delay:180ms]">{subtitle}</div>}
      <ul className="stagger mt-1 grid w-full gap-3" style={{ gridTemplateColumns: `repeat(${Math.min(stats.length, 3)}, minmax(0, 1fr))` }}>
        {stats.map((s) => {
          const t = TILE[s.tone];
          return (
            <li key={s.label} className="card rounded-2xl px-2 py-3">
              <p className="flex items-center justify-center gap-1.5 text-[12px] font-semibold text-muted">
                <span aria-hidden className={`size-2 rounded-full ${t.dot}`} />
                {s.label}
              </p>
              <p className={`mt-1 flex items-center justify-center gap-1.5 text-[22px] font-extrabold ${t.text}`}>
                <Icon name={s.icon} size={18} strokeWidth={2.6} className="text-muted" />
                <span className="tabular-nums">{s.value}</span>
              </p>
            </li>
          );
        })}
      </ul>
      {children && <div className="mt-2 flex w-full flex-col gap-3 text-left">{children}</div>}
    </section>
  );
}

/** "Bello có đồ mới" kèm nút mặc thử ngay. */
function NewItem({ id }: { id: BelloItemId }) {
  const outfit = useOutfit();
  const worn = Object.values(outfit).includes(id);
  return (
    <div role="status" className="flex w-full animate-pop-in items-center gap-3 rounded-2xl bg-surface p-3 text-left outline-2 outline-gold">
      <span aria-hidden className="grid size-10 shrink-0 place-items-center rounded-xl bg-gold text-ink">
        <Icon name="star" size={20} strokeWidth={2.6} />
      </span>
      <p className="min-w-0 flex-1 text-[15px] font-bold leading-snug">Bello có đồ mới: {belloItem(id)?.label_vi}</p>
      <button type="button" onClick={() => putOn(id)} disabled={worn} className={`${secondaryClass} shrink-0`}>
        {worn ? 'Đang mặc' : 'Mặc thử'}
      </button>
    </div>
  );
}
