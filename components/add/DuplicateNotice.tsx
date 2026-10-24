'use client';

import type { DuplicateChoice, DuplicateInfo } from '@/lib/items/dedupe';
import { isArticle } from '@/lib/items/types';
import { ArticleChip } from '../ArticleChip';
import { chipClass } from '../ui';

const CHOICE_VI: Record<DuplicateChoice, string> = { merge: 'Gộp', add: 'Vẫn thêm', skip: 'Bỏ dòng' };

/** Cảnh báo trùng german + article + type, cho chọn gộp hoặc vẫn thêm (SPEC F2). */
export function DuplicateNotice({
  info,
  choice,
  onChoose,
  allowSkip = false,
}: {
  info: DuplicateInfo;
  choice: DuplicateChoice | null;
  onChoose: (choice: DuplicateChoice) => void;
  allowSkip?: boolean;
}) {
  const existing = info.existing[0];
  const options: DuplicateChoice[] = [
    ...(existing ? (['merge'] as const) : []),
    'add',
    ...(allowSkip || !existing ? (['skip'] as const) : []),
  ];

  return (
    <div className="rounded-[20px] bg-pastel-yellow p-3 text-[14px] leading-relaxed" role="status">
      {existing ? (
        <p>
          Đã có:{' '}
          {existing.article && isArticle(existing.article) && <ArticleChip article={existing.article} />}{' '}
          <span className="font-semibold" lang="de">
            {existing.german}
          </span>{' '}
          — {existing.vietnamese}
          {info.existing.length > 1 && ` (và ${info.existing.length - 1} mục nữa)`}
        </p>
      ) : (
        <p>Trùng với dòng {(info.batchIndex ?? 0) + 1} phía trên.</p>
      )}
      <p className="text-[13px] opacity-80">Gộp: điền ô mới vào mục cũ, giữ nguyên thẻ và lịch ôn.</p>
      <div className="mt-2 flex gap-2">
        {options.map((o) => (
          <button key={o} type="button" onClick={() => onChoose(o)} className={`${chipClass(choice === o)} flex-1`}>
            {CHOICE_VI[o]}
          </button>
        ))}
      </div>
    </div>
  );
}
