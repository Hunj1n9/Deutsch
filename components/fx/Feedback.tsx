'use client';

import { useEffect } from 'react';
import { Icon } from '../Icon';
import { Bello } from '../mascot/Bello';
import { playCorrect, playWrong } from './sfx';

/** Lời khen tiếng Đức cho câu đúng; chọn theo `seed` để mỗi câu một lời mà không nhảy khi vẽ lại. */
const PRAISE = ['Super!', 'Toll!', 'Prima!', 'Sehr gut!', 'Klasse!', 'Wunderbar!', 'Genau!', 'Spitze!'];

function pick(seed: string): string {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) | 0;
  return PRAISE[Math.abs(h) % PRAISE.length];
}

/**
 * Dải phản hồi sau khi trả lời (kiểu Brilliant): nền xanh nhạt khi đúng, cam nhạt khi sai, kèm âm thanh; Bello vui hoặc buồn (F17).
 * `children` là đáp án và giải thích; `actions` là các nút ở cuối dải (vd. Tiếp).
 */
export function Feedback({
  correct,
  seed,
  title,
  children,
  actions,
}: {
  correct: boolean;
  seed: string;
  /** Ghi đè tiêu đề (mặc định: lời khen tiếng Đức hoặc "Chưa đúng"). */
  title?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  useEffect(() => {
    if (correct) playCorrect();
    else playWrong();
  }, [correct, seed]);

  return (
    <div
      role="status"
      className={`animate-slide-up rounded-block p-4 ${correct ? 'border-green/35 bg-ok-soft' : 'border-orange/35 bg-bad-soft'}`}
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className={`grid size-9 shrink-0 animate-pop-in place-items-center rounded-full text-white ${correct ? 'bg-green' : 'bg-orange'}`}
        >
          <Icon name={correct ? 'check' : 'x'} size={20} strokeWidth={3.4} />
        </span>
        <p className={`flex-1 text-[21px] font-extrabold leading-tight ${correct ? 'text-ok' : 'text-bad'}`}>
          <span lang={title ? undefined : correct ? 'de' : undefined}>{title ?? (correct ? pick(seed) : 'Chưa đúng')}</span>
          {!title && correct && <span className="sr-only"> Đúng.</span>}
        </p>
        <Bello state={correct ? 'happy' : 'sad'} from="stand" className="-my-3 -mr-1 h-[84px] w-auto shrink-0" />
      </div>
      {children && <div className="mt-2 flex flex-col gap-1">{children}</div>}
      {actions && <div className="mt-3 flex flex-col gap-2">{actions}</div>}
    </div>
  );
}
