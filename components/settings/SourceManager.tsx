'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { deleteSourceAction, updateSourceAction } from '@/app/(app)/settings/actions';
import { SOURCE_KIND_VI, sourceLabel, type SourceOption } from '../SourcePicker';
import { fieldClass } from '../ui';

/** Quản lý nguồn (SPEC F8): sửa tên/chương/loại, xóa. Thêm nguồn mới làm ở form Thêm. */
export function SourceManager({ sources }: { sources: SourceOption[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<SourceOption | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function run(fn: () => Promise<{ ok: boolean; error?: string }>) {
    setError(null);
    startTransition(async () => {
      const res = await fn();
      if (!res.ok) setError(res.error ?? 'Có lỗi.');
      else {
        setEditing(null);
        setConfirmDelete(null);
        router.refresh();
      }
    });
  }

  return (
    <section className="rounded-block bg-surface p-5">
      <h2 className="mb-2 text-[18px] font-bold">Nguồn học</h2>
      {sources.length === 0 && <p className="text-[14px] text-muted">Chưa có nguồn. Tạo nguồn trong form Thêm nội dung.</p>}
      <ul className="flex flex-col gap-2">
        {sources.map((s) =>
          editing?.id === s.id ? (
            <li key={s.id} className="flex flex-col gap-2 rounded-[16px] bg-bg p-3">
              <select aria-label="Loại nguồn" value={editing.kind} onChange={(e) => setEditing({ ...editing, kind: e.target.value })} className={fieldClass}>
                {Object.entries(SOURCE_KIND_VI).map(([k, label]) => (
                  <option key={k} value={k}>
                    {label}
                  </option>
                ))}
              </select>
              <input aria-label="Tên nguồn" value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} className={fieldClass} />
              <input aria-label="Chương" value={editing.chapter ?? ''} onChange={(e) => setEditing({ ...editing, chapter: e.target.value })} placeholder="Chương" className={fieldClass} />
              <div className="flex gap-2">
                <button type="button" onClick={() => setEditing(null)} className="h-11 flex-1 rounded-full text-[14px] font-semibold text-muted">
                  Hủy
                </button>
                <button
                  type="button"
                  disabled={pending}
                  onClick={() =>
                    run(() =>
                      updateSourceAction({
                        id: editing.id,
                        kind: editing.kind as 'textbook',
                        title: editing.title,
                        chapter: editing.chapter ?? '',
                      }),
                    )
                  }
                  className="h-11 flex-1 rounded-full bg-primary text-[14px] font-semibold text-on-primary"
                >
                  Lưu
                </button>
              </div>
            </li>
          ) : (
            <li key={s.id} className="flex items-center gap-2 rounded-[16px] bg-bg px-3 py-2">
              <div className="min-w-0 flex-1">
                <p className="truncate text-[15px] font-semibold">{sourceLabel(s)}</p>
                <p className="text-[12px] text-muted">{SOURCE_KIND_VI[s.kind] ?? s.kind}</p>
              </div>
              {confirmDelete === s.id ? (
                <>
                  <button type="button" onClick={() => setConfirmDelete(null)} className="h-9 rounded-full px-3 text-[13px] font-semibold text-muted">
                    Không
                  </button>
                  <button
                    type="button"
                    disabled={pending}
                    onClick={() => run(() => deleteSourceAction(s.id))}
                    className="h-9 rounded-full bg-bad px-3 text-[13px] font-semibold text-white"
                  >
                    Xóa nguồn
                  </button>
                </>
              ) : (
                <>
                  <button type="button" onClick={() => setEditing(s)} className="h-9 rounded-full px-3 text-[13px] font-semibold outline-1 outline-line">
                    Sửa
                  </button>
                  <button type="button" onClick={() => setConfirmDelete(s.id)} className="h-9 rounded-full px-3 text-[13px] font-semibold text-muted">
                    Xóa
                  </button>
                </>
              )}
            </li>
          ),
        )}
      </ul>
      {confirmDelete && <p className="mt-2 text-[13px] text-muted">Xóa nguồn không xóa mục; các mục chỉ mất thông tin nguồn.</p>}
      {error && <p className="mt-2 text-[13px] font-semibold text-bad">{error}</p>}
    </section>
  );
}
