'use client';

import { useEffect, useMemo, useState } from 'react';
import { BELLO_ITEMS, BELLO_SLOTS, SLOT_LABEL_VI, unlockText, wear, type BelloItemId } from '@/lib/bello-items';
import { Icon } from '../Icon';
import { Bello, type BelloState } from './Bello';
import { STATE_VI } from './rig';
import { saveOutfit, useOutfit } from './outfit-store';

/**
 * Bello ở trang Hôm nay (SPEC F17): chạm để mở bảng trượt "Tủ đồ của Bello". Món đã mở chạm để mặc hoặc bỏ;
 * món chưa mở mờ đi kèm điều kiện mở và không chọn được.
 */
export function BelloWardrobe({ state, unlocked }: { state: BelloState; unlocked: readonly BelloItemId[] }) {
  const [open, setOpen] = useState(false);
  const unlockedSet = useMemo(() => new Set<string>(unlocked), [unlocked]);
  const outfit = useOutfit(unlockedSet);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label={`Bello đang ${STATE_VI[state]}. Mở tủ đồ của Bello`}
        className="relative block w-full text-left active:translate-y-0.5"
      >
        <Bello state={state} outfit={outfit} className="h-36 w-auto max-w-[70%]" />
        <span className="absolute bottom-2 right-0 flex items-center gap-1 rounded-full bg-surface/90 px-3 py-1 text-[12px] font-bold text-muted">
          Tủ đồ
          <Icon name="back" size={14} strokeWidth={2.8} className="rotate-180" />
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-30" role="dialog" aria-modal="true" aria-label="Tủ đồ của Bello">
          <button
            type="button"
            aria-label="Đóng tủ đồ"
            onClick={() => setOpen(false)}
            className="absolute inset-0 animate-[fade-up_200ms_ease-out_both] bg-black/40"
          />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-h-[92dvh] max-w-md animate-slide-up overflow-y-auto rounded-t-[28px] bg-bg p-5 pb-[max(env(safe-area-inset-bottom),20px)]">
            <div aria-hidden className="mx-auto -mt-2 mb-3 h-1.5 w-12 rounded-full bg-line-strong" />
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-[19px] font-extrabold">Tủ đồ của Bello</h2>
              <button
                type="button"
                autoFocus
                onClick={() => setOpen(false)}
                aria-label="Đóng"
                className="grid size-11 place-items-center rounded-full bg-surface outline-[1.5px] outline-line"
              >
                <Icon name="x" />
              </button>
            </div>
            <div className="rounded-block bg-pastel-yellow px-4 pt-2">
              <Bello state="stand" outfit={outfit} label="Bello mặc bộ đồ đang chọn" className="mx-auto h-44 w-auto max-w-full" />
            </div>
            {BELLO_SLOTS.map((slot) => (
              <section key={slot} className="mt-4">
                <h3 className="ml-1 text-[13px] font-semibold text-muted">{SLOT_LABEL_VI[slot]}</h3>
                <ul className="mt-1.5 grid grid-cols-2 gap-2">
                  {BELLO_ITEMS.filter((i) => i.slot === slot).map((item) => {
                    const has = unlockedSet.has(item.id);
                    const on = outfit[slot] === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          disabled={!has}
                          aria-pressed={has ? on : undefined}
                          onClick={() => saveOutfit(wear(outfit, item.id))}
                          className={`flex min-h-16 w-full flex-col items-start justify-center rounded-2xl px-3 py-2 text-left ${
                            on
                              ? 'bg-surface outline-2 outline-green'
                              : has
                                ? 'btn-3d bg-surface outline-[1.5px] outline-line'
                                : 'bg-surface/60 outline-[1.5px] outline-dashed outline-line-strong'
                          }`}
                        >
                          <span className={`text-[15px] font-bold leading-tight ${has ? '' : 'text-muted'}`}>{item.label_vi}</span>
                          <span className={`mt-0.5 flex items-center gap-1 text-[12px] font-semibold leading-snug ${on ? 'text-ok' : 'text-muted'}`}>
                            {on ? (
                              <>
                                <Icon name="check" size={13} strokeWidth={3.2} />
                                Đang mặc
                              </>
                            ) : has ? (
                              'Chạm để mặc'
                            ) : (
                              <>
                                <Icon name="lock" size={13} strokeWidth={2.6} className="shrink-0" />
                                {unlockText(item.id)}
                              </>
                            )}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
            <p className="mt-4 text-[13px] leading-snug text-muted">Đồ mới mở khi bạn đạt mốc học. Bộ đồ chỉ lưu trên trình duyệt này.</p>
          </div>
        </div>
      )}
    </>
  );
}
