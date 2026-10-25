'use client';

import { useState, useTransition } from 'react';
import { reportContentAction } from '@/app/(app)/learn/actions';
import { REPORT_NOTE_MAX } from '@/lib/course/report';
import { textareaClass } from '../ui';

/**
 * Nút "Báo sai" (SPEC F13): chữ nhỏ, mở ô ghi chú; lưu chỗ bị báo kèm nội dung đang hiện.
 */
export function ContentReport({ target, excerpt, className = '' }: { target: string; excerpt: string; className?: string }) {
  const [state, setState] = useState<'idle' | 'open' | 'sent'>('idle');
  const [note, setNote] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  if (state === 'sent') {
    return <p className={`text-[13px] text-muted ${className}`}>Đã ghi lại chỗ này. Xem ở Cài đặt → Nội dung đã báo.</p>;
  }

  if (state === 'idle') {
    return (
      <button
        type="button"
        onClick={() => setState('open')}
        className={`self-start rounded-full px-2 py-1 text-[13px] font-semibold text-muted underline underline-offset-2 ${className}`}
      >
        Báo sai
      </button>
    );
  }

  function send() {
    setError(null);
    startTransition(async () => {
      const res = await reportContentAction({ target, excerpt, note }).catch(() => ({ ok: false as const, error: 'Không gửi được. Kiểm tra mạng.' }));
      if (res.ok) setState('sent');
      else setError(res.error);
    });
  }

  return (
    <div className={`flex flex-col gap-2 rounded-[20px] bg-surface p-3 ${className}`}>
      <label htmlFor={`report-${target}`} className="text-[13px] font-semibold text-muted">
        Sai ở đâu? (không bắt buộc)
      </label>
      <textarea
        id={`report-${target}`}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        maxLength={REPORT_NOTE_MAX}
        rows={2}
        placeholder="vd: nghĩa tiếng Việt chưa đúng, câu Đức nghe lạ…"
        className={`${textareaClass} bg-bg text-[16px]`}
      />
      <div className="flex gap-2">
        <button type="button" onClick={() => setState('idle')} className="h-10 flex-1 rounded-full text-[14px] font-semibold text-muted">
          Hủy
        </button>
        <button
          type="button"
          onClick={send}
          disabled={pending}
          className="h-10 flex-1 rounded-full bg-primary text-[14px] font-semibold text-on-primary disabled:opacity-50"
        >
          {pending ? 'Đang gửi…' : 'Gửi'}
        </button>
      </div>
      {error && <p className="text-[13px] font-semibold text-bad">{error}</p>}
    </div>
  );
}
