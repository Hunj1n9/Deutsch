'use client';

import { useSyncExternalStore } from 'react';
import { playCorrect, setSfxEnabled, sfxEnabled, subscribeSfx } from './fx/sfx';

/** Bật/tắt âm thanh hiệu ứng (đúng, sai, xong bài). Lưu ở trình duyệt này. */
export function SfxToggle({ className = '' }: { className?: string }) {
  const on = useSyncExternalStore(subscribeSfx, sfxEnabled, () => true);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => {
        setSfxEnabled(!on);
        if (!on) playCorrect();
      }}
      className={`flex min-h-13 w-full items-center gap-3 px-4 text-left text-[16px] font-medium ${className}`}
    >
      <span aria-hidden className="text-[20px]">
        {on ? '🔊' : '🔇'}
      </span>
      <span className="flex-1">Âm thanh hiệu ứng</span>
      <span className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${on ? 'bg-green' : 'bg-line-strong'}`}>
        <span className={`absolute top-1 size-5 rounded-full bg-white shadow transition-[left] duration-200 ${on ? 'left-6' : 'left-1'}`} />
      </span>
    </button>
  );
}
