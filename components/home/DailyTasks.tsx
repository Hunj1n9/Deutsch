'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { addTaskAction, copyYesterdayAction, deleteTaskAction, setTaskDoneAction } from '@/app/(app)/actions';
import { fieldClass } from '../ui';

export type DailyTask = { id: string; title: string; minutes: number | null; done: boolean };

/** Khối "Bài mới hôm nay" (SPEC F7): checklist tự thêm; tick xong thì nhập số phút đã học. */
export function DailyTasks({
  tasks,
  yesterdayLeft,
  roadmap,
}: {
  tasks: DailyTask[];
  yesterdayLeft: string[];
  /** Gợi ý chặng lộ trình (F10). */
  roadmap: { label: string; href: string; action: string } | null;
}) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [finishing, setFinishing] = useState<string | null>(null);
  const [minutes, setMinutes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function run(fn: () => Promise<{ ok: boolean; error?: string }>, after?: () => void) {
    setError(null);
    startTransition(async () => {
      const res = await fn();
      if (!res.ok) {
        setError(res.error ?? 'Có lỗi.');
        return;
      }
      after?.();
      router.refresh();
    });
  }

  return (
    <section className="mb-3 rounded-block bg-surface p-5">
      <p className="mb-2 text-[13px] font-semibold uppercase tracking-[.06em] text-muted">Bài mới hôm nay</p>

      {roadmap && (
        <Link href={roadmap.href} className="mb-3 flex items-center justify-between gap-3 rounded-[16px] bg-pastel-sky p-3">
          <span className="text-[14px]">
            <span className="block text-[12px] font-semibold opacity-70">Lộ trình</span>
            <span className="font-semibold">{roadmap.label}</span>
          </span>
          <span className="shrink-0 rounded-full bg-primary px-3 py-1.5 text-[13px] font-semibold text-on-primary">{roadmap.action}</span>
        </Link>
      )}

      {yesterdayLeft.length > 0 && (
        <div className="mb-3 rounded-[16px] bg-bg p-3 text-[14px]">
          <p>Hôm qua còn {yesterdayLeft.length} việc chưa xong: {yesterdayLeft.join(', ')}</p>
          <button
            type="button"
            disabled={pending}
            onClick={() => run(copyYesterdayAction)}
            className="mt-2 rounded-full bg-primary px-3 py-1.5 text-[13px] font-semibold text-on-primary"
          >
            Chép sang hôm nay
          </button>
        </div>
      )}

      <ul className="flex flex-col gap-2">
        {tasks.map((t) => (
          <li key={t.id} className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <button
                type="button"
                role="checkbox"
                aria-checked={t.done}
                aria-label={t.done ? `Bỏ đánh dấu ${t.title}` : `Đánh dấu xong ${t.title}`}
                disabled={pending}
                onClick={() =>
                  t.done
                    ? run(() => setTaskDoneAction({ id: t.id, done: false, minutes: null }))
                    : (setFinishing(t.id), setMinutes(''))
                }
                className={`grid size-8 shrink-0 place-items-center rounded-full outline-2 ${t.done ? 'bg-primary text-on-primary outline-primary' : 'outline-line'}`}
              >
                {t.done ? '✓' : ''}
              </button>
              <span className={`flex-1 text-[16px] ${t.done ? 'text-muted line-through' : ''}`}>{t.title}</span>
              {t.done && t.minutes ? <span className="text-[13px] text-muted">{t.minutes} phút</span> : null}
              <button
                type="button"
                aria-label={`Xóa ${t.title}`}
                disabled={pending}
                onClick={() => run(() => deleteTaskAction(t.id))}
                className="size-8 text-[18px] text-muted"
              >
                ×
              </button>
            </div>
            {finishing === t.id && (
              <form
                className="ml-11 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const m = Number.parseInt(minutes, 10);
                  run(
                    () => setTaskDoneAction({ id: t.id, done: true, minutes: Number.isFinite(m) ? m : null }),
                    () => setFinishing(null),
                  );
                }}
              >
                <input
                  autoFocus
                  inputMode="numeric"
                  aria-label="Số phút đã học"
                  placeholder="Số phút đã học"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value.replace(/\D/g, ''))}
                  className={`${fieldClass} h-11 flex-1`}
                />
                <button type="submit" disabled={pending} className="h-11 rounded-full bg-primary px-4 text-[14px] font-semibold text-on-primary">
                  Xong
                </button>
              </form>
            )}
          </li>
        ))}
      </ul>

      <form
        className="mt-3 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          run(() => addTaskAction({ title }), () => setTitle(''));
        }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          aria-label="Thêm việc"
          placeholder="vd: eDeutsch A1 buổi 12"
          className={`${fieldClass} h-11 flex-1 text-[15px]`}
        />
        <button type="submit" disabled={pending || !title.trim()} className="h-11 rounded-full bg-primary px-4 text-[14px] font-semibold text-on-primary disabled:opacity-50">
          Thêm
        </button>
      </form>
      {error && <p className="mt-2 text-[13px] font-semibold text-bad">{error}</p>}
    </section>
  );
}
