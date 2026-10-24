'use client';

import { useState, useTransition } from 'react';
import { createSourceAction } from '@/app/(app)/add/actions';
import { LEVELS, type Level } from '@/lib/items/types';
import { fieldClass, labelClass, secondaryClass } from './ui';

import type { SourceOption } from '@/lib/supabase/queries';

export type { SourceOption };

export const SOURCE_KIND_VI: Record<string, string> = {
  textbook: 'Giáo trình',
  edeutsch: 'eDeutsch',
  deutschvn: 'DeutschVN',
  tutor: 'Gia sư AI',
  writing: 'Bài viết',
  other: 'Khác',
};

export function sourceLabel(s: Pick<SourceOption, 'title' | 'chapter'>) {
  return s.chapter ? `${s.title} · ${s.chapter}` : s.title;
}

/** Chọn nguồn và chương; tạo nguồn mới ngay tại chỗ (DECISIONS.md). */
export function SourcePicker({
  idPrefix,
  sources,
  value,
  onChange,
  onCreated,
}: {
  idPrefix: string;
  sources: SourceOption[];
  value: string | null;
  onChange: (id: string | null) => void;
  onCreated: (source: SourceOption) => void;
}) {
  const [creating, setCreating] = useState(false);
  const [kind, setKind] = useState('textbook');
  const [title, setTitle] = useState('');
  const [chapter, setChapter] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function create() {
    setError(null);
    startTransition(async () => {
      const result = await createSourceAction({ kind: kind as 'textbook', title, chapter });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      onCreated(result.source);
      onChange(result.source.id);
      setCreating(false);
      setTitle('');
      setChapter('');
    });
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={`${idPrefix}-source`} className={labelClass}>
        Nguồn và chương
      </label>
      {!creating ? (
        <div className="flex gap-2">
          <select
            id={`${idPrefix}-source`}
            value={value ?? ''}
            onChange={(e) => onChange(e.target.value || null)}
            className={`${fieldClass} min-w-0 flex-1`}
          >
            <option value="">Không ghi nguồn</option>
            {sources.map((s) => (
              <option key={s.id} value={s.id}>
                {sourceLabel(s)}
              </option>
            ))}
          </select>
          <button type="button" onClick={() => setCreating(true)} className={`${secondaryClass} h-13 shrink-0`}>
            Nguồn mới
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-2 rounded-[20px] bg-surface p-3 outline-1 outline-line">
          <select
            aria-label="Loại nguồn"
            value={kind}
            onChange={(e) => setKind(e.target.value)}
            className={fieldClass}
          >
            {Object.entries(SOURCE_KIND_VI).map(([k, label]) => (
              <option key={k} value={k}>
                {label}
              </option>
            ))}
          </select>
          <input
            aria-label="Tên nguồn"
            placeholder="Tên, vd: Netzwerk neu A1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={fieldClass}
          />
          <input
            aria-label="Chương"
            placeholder="Chương, vd: Kapitel 3 (không bắt buộc)"
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
            className={fieldClass}
          />
          {error && <p className="px-1 text-[13px] font-semibold text-bad">{error}</p>}
          <div className="flex gap-2">
            <button type="button" onClick={() => setCreating(false)} className={`${secondaryClass} flex-1`}>
              Hủy
            </button>
            <button
              type="button"
              disabled={pending || !title.trim()}
              onClick={create}
              className="flex h-11 flex-1 items-center justify-center rounded-full bg-primary text-[15px] font-semibold text-on-primary disabled:opacity-50"
            >
              {pending ? 'Đang tạo…' : 'Tạo nguồn'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function LevelPicker({
  id,
  value,
  onChange,
  allowEmpty = false,
}: {
  id: string;
  value: Level | null;
  onChange: (level: Level | null) => void;
  allowEmpty?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={labelClass}>
        Cấp độ
      </label>
      <select
        id={id}
        value={value ?? ''}
        onChange={(e) => onChange((e.target.value || null) as Level | null)}
        className={fieldClass}
      >
        {allowEmpty && <option value="">Không ghi</option>}
        {LEVELS.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>
    </div>
  );
}
