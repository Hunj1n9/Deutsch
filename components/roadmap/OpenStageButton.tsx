'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { openStageAction } from '@/app/(app)/roadmap/actions';

export function OpenStageButton({ stageId, primary }: { stageId: string; primary: boolean }) {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  return (
    <div className="flex flex-col items-end gap-1">
      <button
        type="button"
        disabled={pending}
        onClick={() =>
          startTransition(async () => {
            const res = await openStageAction(stageId);
            if (!res.ok) {
              setMessage(res.error);
              return;
            }
            setMessage(`Đã thêm ${res.added} mục${res.tagged ? `, ${res.tagged} mục đã có` : ''}.`);
            router.refresh();
          })
        }
        className={`h-10 shrink-0 whitespace-nowrap rounded-full px-4 text-[14px] font-semibold disabled:opacity-50 ${
          primary ? 'bg-primary text-on-primary' : 'bg-surface outline-1 outline-line'
        }`}
      >
        {pending ? 'Đang mở…' : 'Mở chặng'}
      </button>
      {message && <p className="text-right text-[12px] text-muted">{message}</p>}
    </div>
  );
}
