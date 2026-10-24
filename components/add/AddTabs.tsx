'use client';

import { useState } from 'react';
import type { Level } from '@/lib/items/types';
import type { SourceOption } from '../SourcePicker';
import { chipClass } from '../ui';
import { BulkImport } from './BulkImport';
import { SingleItemForm } from './SingleItemForm';

export function AddTabs(props: { level: Level; sources: SourceOption[]; sourceId: string | null }) {
  const [tab, setTab] = useState<'single' | 'bulk'>('single');
  return (
    <>
      <div className="mb-4 flex gap-2 rounded-full bg-surface p-1" role="tablist">
        {(
          [
            ['single', 'Một mục'],
            ['bulk', 'Hàng loạt'],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            onClick={() => setTab(key)}
            className={`${chipClass(tab === key)} flex-1`}
          >
            {label}
          </button>
        ))}
      </div>
      {tab === 'single' ? <SingleItemForm {...props} /> : <BulkImport {...props} />}
    </>
  );
}
