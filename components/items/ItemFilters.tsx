'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ADDABLE_TYPES, LEVELS, TYPE_LABEL_VI } from '@/lib/items/types';
import { GermanField } from '../GermanField';
import { sourceLabel, type SourceOption } from '../SourcePicker';
import { fieldClass } from '../ui';

/** Bộ lọc nằm trên URL nên quay lại trang vẫn giữ (SPEC mục 7: tìm, lọc theo nguồn/cấp/loại). */
export function ItemFilters({ sources }: { sources: SourceOption[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [q, setQ] = useState(params.get('q') ?? '');

  function apply(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    next.delete('page');
    router.replace(`${pathname}${next.size ? `?${next}` : ''}`, { scroll: false });
  }

  // Tìm sau khi ngừng gõ 300 ms.
  useEffect(() => {
    if (q === (params.get('q') ?? '')) return;
    const t = setTimeout(() => apply('q', q.trim()), 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  const selectClass = `${fieldClass} h-11 min-w-0 px-3 text-[15px]`;

  return (
    <div className="mb-3 flex flex-col gap-2">
      <GermanField id="items-q" label="Tìm tiếng Đức hoặc tiếng Việt" value={q} onChange={setQ} placeholder="Tisch, cái bàn…" />
      <div className="grid grid-cols-3 gap-2">
        <select aria-label="Nguồn" value={params.get('source') ?? ''} onChange={(e) => apply('source', e.target.value)} className={selectClass}>
          <option value="">Nguồn</option>
          <option value="none">Không nguồn</option>
          {sources.map((s) => (
            <option key={s.id} value={s.id}>
              {sourceLabel(s)}
            </option>
          ))}
        </select>
        <select aria-label="Cấp độ" value={params.get('level') ?? ''} onChange={(e) => apply('level', e.target.value)} className={selectClass}>
          <option value="">Cấp</option>
          {LEVELS.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        <select aria-label="Loại" value={params.get('type') ?? ''} onChange={(e) => apply('type', e.target.value)} className={selectClass}>
          <option value="">Loại</option>
          {ADDABLE_TYPES.map((t) => (
            <option key={t} value={t}>
              {TYPE_LABEL_VI[t]}
            </option>
          ))}
          <option value="error_fix">Sửa lỗi</option>
        </select>
      </div>
    </div>
  );
}
