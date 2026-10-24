'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { errorBoxClass, noticeBoxClass, primaryClass, secondaryClass } from '../ui';

type Parsed = { file: string; data: Record<string, unknown>; counts: Record<string, number> };

const LABEL: Record<string, string> = {
  items: 'mục',
  cards: 'thẻ',
  review_logs: 'lần ôn',
  errors: 'lỗi',
  writings: 'bài viết',
  tutor_messages: 'tin nhắn gia sư',
};

/** Sao lưu (SPEC F9): xuất file JSON; nhập lại vào CSDL trống, có xác nhận trước khi ghi. */
export function BackupPanel() {
  const router = useRouter();
  const [parsed, setParsed] = useState<Parsed | null>(null);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, setPending] = useState(false);

  async function pick(file: File | undefined) {
    setMessage(null);
    setParsed(null);
    if (!file) return;
    try {
      const data = JSON.parse(await file.text()) as Record<string, unknown>;
      if (data.app !== 'deutsch') throw new Error();
      const counts = Object.fromEntries(
        Object.entries(data).flatMap(([k, v]) => (Array.isArray(v) ? [[k, v.length]] : [])),
      ) as Record<string, number>;
      setParsed({ file: file.name, data, counts });
    } catch {
      setMessage({ ok: false, text: 'File không phải bản sao lưu của app này.' });
    }
  }

  async function restore() {
    if (!parsed) return;
    setPending(true);
    setMessage(null);
    try {
      const res = await fetch('/api/backup', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });
      const body = (await res.json()) as { error?: string; counts?: Record<string, number> };
      if (!res.ok) throw new Error(body.error ?? 'Không nhập được.');
      setMessage({ ok: true, text: `Đã nhập: ${body.counts?.items ?? 0} mục, ${body.counts?.cards ?? 0} thẻ, ${body.counts?.errors ?? 0} lỗi.` });
      setParsed(null);
      router.refresh();
    } catch (e) {
      setMessage({ ok: false, text: e instanceof Error ? e.message : 'Không nhập được.' });
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="flex flex-col gap-3 rounded-block bg-surface p-5">
      <h2 className="text-[18px] font-bold">Sao lưu</h2>
      <a href="/api/backup" download className={primaryClass}>
        Xuất dữ liệu (JSON)
      </a>
      <label className={`${secondaryClass} h-13 cursor-pointer`}>
        Chọn file để nhập dữ liệu
        <input type="file" accept="application/json,.json" className="sr-only" onChange={(e) => void pick(e.target.files?.[0])} />
      </label>
      <p className="text-[13px] text-muted">Chỉ nhập được khi tài khoản chưa có dữ liệu học.</p>

      {parsed && (
        <div className="rounded-[16px] bg-pastel-yellow p-4 text-[14px]">
          <p className="font-semibold">Nhập từ {parsed.file}?</p>
          <p>
            {Object.entries(LABEL)
              .map(([k, label]) => `${parsed.counts[k] ?? 0} ${label}`)
              .join(' · ')}
          </p>
          <div className="mt-3 flex gap-2">
            <button type="button" onClick={() => setParsed(null)} className="h-11 flex-1 rounded-full text-[14px] font-semibold">
              Hủy
            </button>
            <button type="button" disabled={pending} onClick={restore} className="h-11 flex-1 rounded-full bg-primary text-[14px] font-semibold text-on-primary">
              {pending ? 'Đang nhập…' : 'Xác nhận nhập'}
            </button>
          </div>
        </div>
      )}
      {message && <p className={message.ok ? noticeBoxClass : errorBoxClass}>{message.text}</p>}
    </section>
  );
}
