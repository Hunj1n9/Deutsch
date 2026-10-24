'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { createWeeklyReportAction } from '@/app/(app)/progress/actions';
import { errorBoxClass, primaryClass } from '../ui';

export function ReportButton({ suggest }: { suggest: boolean }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  return (
    <div className="flex flex-col gap-2">
      {suggest && <p className="text-[14px]">Hôm nay Chủ nhật: tạo báo cáo cho tuần này nhé.</p>}
      <button
        type="button"
        disabled={pending}
        onClick={() =>
          startTransition(async () => {
            setError(null);
            const res = await createWeeklyReportAction();
            if (res.ok) router.refresh();
            else setError(res.error);
          })
        }
        className={primaryClass}
      >
        {pending ? 'AI đang viết báo cáo…' : 'Tạo báo cáo tuần'}
      </button>
      {error && (
        <p role="alert" className={errorBoxClass}>
          {error}
        </p>
      )}
    </div>
  );
}
