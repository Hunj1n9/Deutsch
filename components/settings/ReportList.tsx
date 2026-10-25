'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { deleteReportAction, resolveReportAction } from '@/app/(app)/settings/actions';
import { reportLabel, reportsText, type ContentReportRow } from '@/lib/course/report';
import { localDate } from '@/lib/time';

export type ReportItem = ContentReportRow & { id: string };

/** Nội dung đã báo sai (SPEC F13): danh sách đang mở, đánh dấu đã sửa, xóa, sao chép để gửi người sửa dữ liệu. */
export function ReportList({ open, resolvedCount }: { open: ReportItem[]; resolvedCount: number }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [pending, startTransition] = useTransition();

  function run(fn: () => Promise<{ ok: boolean; error?: string }>) {
    setError(null);
    startTransition(async () => {
      const res = await fn();
      if (!res.ok) setError(res.error ?? 'Có lỗi.');
      else router.refresh();
    });
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(reportsText(open));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError('Trình duyệt không cho chép. Chọn và chép tay.');
    }
  }

  return (
    <section className="rounded-block bg-surface p-5">
      <h2 className="text-[18px] font-bold">Nội dung đã báo</h2>
      <p className="mb-2 text-[13px] text-muted">
        {open.length} chỗ đang chờ sửa{resolvedCount > 0 && ` · ${resolvedCount} chỗ đã sửa`}. Bấm &quot;Báo sai&quot; trong bài học hoặc kết quả kiểm tra để thêm.
      </p>
      {open.length > 0 && (
        <button
          type="button"
          onClick={() => void copy()}
          className="mb-2 h-10 rounded-full px-4 text-[14px] font-semibold outline-1 outline-line"
        >
          {copied ? 'Đã chép' : 'Sao chép danh sách'}
        </button>
      )}
      <ul className="flex flex-col gap-2">
        {open.map((r) => (
          <li key={r.id} className="flex flex-col gap-1 rounded-[16px] bg-bg p-3">
            <p className="text-[12px] font-semibold text-muted">
              {reportLabel(r.target)} · {localDate(new Date(r.created_at))}
            </p>
            <p className="line-clamp-4 text-[15px]" lang="de">
              {r.excerpt}
            </p>
            {r.note && <p className="text-[14px]">Ghi chú: {r.note}</p>}
            <div className="flex gap-2">
              <button
                type="button"
                disabled={pending}
                onClick={() => run(() => resolveReportAction(r.id))}
                className="h-9 rounded-full px-3 text-[13px] font-semibold outline-1 outline-line"
              >
                Đã sửa
              </button>
              <button
                type="button"
                disabled={pending}
                onClick={() => run(() => deleteReportAction(r.id))}
                className="h-9 rounded-full px-3 text-[13px] font-semibold text-muted"
              >
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
      {error && <p className="mt-2 text-[13px] font-semibold text-bad">{error}</p>}
    </section>
  );
}
