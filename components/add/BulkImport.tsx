'use client';

import { useState, useTransition } from 'react';
import { checkDuplicatesAction, fillBulkAction, saveItemsAction } from '@/app/(app)/add/actions';
import { cardKindsFor } from '@/lib/items/cards';
import { stripCloze } from '@/lib/items/cloze';
import { defaultChoice, isDuplicate, type DuplicateChoice, type DuplicateInfo } from '@/lib/items/dedupe';
import { MAX_BULK_ROWS, needsAi, parseBulk, type BulkError } from '@/lib/items/parse-bulk';
import { TYPE_LABEL_VI, type ItemDraft, type Level } from '@/lib/items/types';
import { normalizeDraft, validateDraft } from '@/lib/items/validate';
import { ArticleChip } from '../ArticleChip';
import { GermanField } from '../GermanField';
import { CARD_LABEL_VI, ItemFields } from '../ItemFields';
import { LevelPicker, SourcePicker, type SourceOption } from '../SourcePicker';
import { errorBoxClass, noticeBoxClass, primaryClass, secondaryClass } from '../ui';
import { DuplicateNotice } from './DuplicateNotice';

type Row = {
  key: number;
  line: number;
  draft: ItemDraft;
  aiFailed: boolean;
  dup: DuplicateInfo | null;
  choice: DuplicateChoice;
  editing: boolean;
};

const EXAMPLE = 'der Tisch, -e = cái bàn\nTisch\nzum Beispiel';

export function BulkImport({
  level: initialLevel,
  sources: initialSources,
  sourceId: initialSourceId,
}: {
  level: Level;
  sources: SourceOption[];
  sourceId: string | null;
}) {
  const [text, setText] = useState('');
  const [rows, setRows] = useState<Row[] | null>(null);
  const [parseErrors, setParseErrors] = useState<BulkError[]>([]);
  const [level, setLevel] = useState<Level>(initialLevel);
  const [sources, setSources] = useState(initialSources);
  const [sourceId, setSourceId] = useState(initialSourceId);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  async function withDuplicates(list: Row[]): Promise<Row[]> {
    const result = await checkDuplicatesAction(list.map((r) => r.draft));
    if (!result.ok) {
      setError(result.error);
      return list;
    }
    return list.map((r, i) => {
      const info = result.duplicates[i];
      return isDuplicate(info) ? { ...r, dup: info, choice: defaultChoice(info) } : { ...r, dup: null, choice: 'add' };
    });
  }

  function preview() {
    setError(null);
    setDone(null);
    const parsed = parseBulk(text);
    setParseErrors(parsed.errors);
    if (parsed.rows.length === 0) {
      setRows(null);
      if (parsed.errors.length === 0) setError('Chưa có dòng nào. Dán mỗi dòng một mục.');
      return;
    }

    startTransition(async () => {
      let list: Row[] = parsed.rows.map((r, i) => ({
        key: i,
        line: r.line,
        draft: r.draft,
        aiFailed: false,
        dup: null,
        choice: 'add',
        editing: false,
      }));

      const missing = parsed.rows.flatMap((r, i) => (r.needsAi ? [i] : []));
      if (missing.length > 0) {
        setStatus(`AI đang điền ${missing.length} dòng còn thiếu…`);
        const filled = await fillBulkAction({ drafts: missing.map((i) => list[i].draft), level });
        if (!filled.ok) {
          setError(filled.error);
          list = list.map((r, i) => (missing.includes(i) ? { ...r, aiFailed: true } : r));
        } else {
          if (filled.error) setError(`${filled.error} Các dòng chưa điền được đánh dấu bên dưới; sửa tay hoặc thử lại.`);
          missing.forEach((rowIndex, j) => {
            const draft = filled.drafts[j];
            list[rowIndex] = draft ? { ...list[rowIndex], draft } : { ...list[rowIndex], aiFailed: true };
          });
        }
      }

      setStatus('Đang kiểm trùng…');
      setRows(await withDuplicates(list));
      setStatus(null);
    });
  }

  function updateRow(key: number, patch: Partial<Row>) {
    setRows((list) => list?.map((r) => (r.key === key ? { ...r, ...patch } : r)) ?? null);
  }

  function finishEdit(key: number) {
    if (!rows) return;
    const list = rows.map((r) => (r.key === key ? { ...r, editing: false, aiFailed: needsAi(normalizeDraft(r.draft)) && r.aiFailed } : r));
    setRows(list);
    startTransition(async () => setRows(await withDuplicates(list)));
  }

  const active = rows?.filter((r) => r.choice !== 'skip') ?? [];
  const invalidCount = active.filter((r) => validateDraft(normalizeDraft(r.draft)).length > 0).length;

  function save() {
    if (!rows) return;
    setError(null);
    startTransition(async () => {
      const result = await saveItemsAction({
        entries: rows.map((r) => ({
          draft: r.draft,
          choice: r.choice,
          mergeInto: r.choice === 'merge' ? (r.dup?.existing[0]?.id ?? null) : null,
        })),
        level,
        sourceId,
      });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      const parts = [`Đã lưu ${result.added} mục mới`];
      if (result.merged) parts.push(`gộp ${result.merged} mục`);
      if (result.skipped) parts.push(`bỏ ${result.skipped} dòng`);
      setDone(parts.join(', ') + '.');
      setRows(null);
      setText('');
    });
  }

  if (!rows) {
    return (
      <div className="flex flex-col gap-4">
        <GermanField
          id="bulk-text"
          label={`Dán danh sách, mỗi dòng một mục (tối đa ${MAX_BULK_ROWS})`}
          value={text}
          onChange={setText}
          multiline
          placeholder={EXAMPLE}
        />
        <div className="rounded-[20px] bg-surface p-4 text-[13px] leading-relaxed text-muted">
          <p className="font-semibold text-ink">Dạng nhận được</p>
          <p lang="de">der Tisch, -e = cái bàn</p>
          <p>
            <span lang="de">Tisch</span> (chỉ có từ, AI điền phần còn lại)
          </p>
          <p>
            Bảng TSV có dòng tiêu đề: <span lang="de">german article plural vietnamese example_de example_vi</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <SourcePicker
            idPrefix="bulk"
            sources={sources}
            value={sourceId}
            onChange={setSourceId}
            onCreated={(s) => setSources((list) => [s, ...list])}
          />
          <LevelPicker id="bulk-level" value={level} onChange={(l) => l && setLevel(l)} />
        </div>
        {parseErrors.length > 0 && (
          <div role="alert" className={errorBoxClass}>
            {parseErrors.map((e) => (
              <p key={e.line}>{e.message}</p>
            ))}
          </div>
        )}
        {error && (
          <p role="alert" className={errorBoxClass}>
            {error}
          </p>
        )}
        {done && (
          <p role="status" className={noticeBoxClass}>
            {done}
          </p>
        )}
        {status && <p className="px-1 text-[14px] text-muted">{status}</p>}
        <button type="button" onClick={preview} disabled={pending || !text.trim()} className={primaryClass}>
          {pending ? 'Đang xử lý…' : 'Xem trước'}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3 px-1">
        <p className="text-[15px] font-semibold">{rows.length} dòng</p>
        <button type="button" onClick={() => setRows(null)} className={secondaryClass}>
          Sửa văn bản
        </button>
      </div>
      {parseErrors.length > 0 && (
        <div role="alert" className={errorBoxClass}>
          {parseErrors.map((e) => (
            <p key={e.line}>{e.message} (dòng này bị bỏ qua)</p>
          ))}
        </div>
      )}
      {error && (
        <p role="alert" className={errorBoxClass}>
          {error}
        </p>
      )}

      <ol className="flex flex-col gap-2">
        {rows.map((row) => (
          <BulkRowCard
            key={row.key}
            row={row}
            onChange={(patch) => updateRow(row.key, patch)}
            onFinishEdit={() => finishEdit(row.key)}
          />
        ))}
      </ol>

      {status && <p className="px-1 text-[14px] text-muted">{status}</p>}
      {invalidCount > 0 && (
        <p className="px-1 text-[14px] font-semibold text-bad">
          Còn {invalidCount} dòng chưa hợp lệ: sửa hoặc bỏ dòng đó để lưu.
        </p>
      )}
      <div className="sticky bottom-28 z-10">
        <button type="button" onClick={save} disabled={pending || invalidCount > 0 || active.length === 0} className={primaryClass}>
          {pending ? 'Đang xử lý…' : `Lưu ${active.length} mục`}
        </button>
      </div>
    </div>
  );
}

function BulkRowCard({
  row,
  onChange,
  onFinishEdit,
}: {
  row: Row;
  onChange: (patch: Partial<Row>) => void;
  onFinishEdit: () => void;
}) {
  const normalized = normalizeDraft(row.draft);
  const issues = validateDraft(normalized);
  const skipped = row.choice === 'skip';
  const kinds = cardKindsFor(normalized);

  return (
    <li className={`rounded-[20px] bg-surface p-3 ${skipped ? 'opacity-50' : ''} ${issues.length && !skipped ? 'outline-2 outline-bad' : ''}`}>
      <div className="flex items-start gap-2">
        <span className="mt-0.5 w-7 shrink-0 text-[12px] text-muted">{row.line}</span>
        <div className="min-w-0 flex-1">
          <p className="text-[18px] font-semibold leading-snug" lang="de">
            {normalized.article && <ArticleChip article={normalized.article} />} {normalized.german}
            {normalized.plural && <span className="text-[14px] font-normal text-muted">, {normalized.plural}</span>}
          </p>
          <p className="text-[15px]">{normalized.vietnamese || <span className="text-muted">(chưa có nghĩa)</span>}</p>
          {normalized.example_de && (
            <p className="mt-1 text-[14px] text-muted" lang="de">
              {stripCloze(normalized.example_de)}
            </p>
          )}
          <p className="mt-1 text-[12px] text-muted">
            {TYPE_LABEL_VI[normalized.type]} · thẻ: {kinds.map((k) => CARD_LABEL_VI[k]).join(', ') || 'không'}
          </p>
          {row.aiFailed && <p className="mt-1 text-[13px] font-semibold text-bad">AI chưa điền được dòng này.</p>}
          {!skipped &&
            issues.map((i) => (
              <p key={i.field + i.message} className="mt-1 text-[13px] font-semibold text-bad">
                {i.message}
              </p>
            ))}
        </div>
        <div className="flex shrink-0 flex-col gap-1">
          <button
            type="button"
            onClick={() => (row.editing ? onFinishEdit() : onChange({ editing: true }))}
            className="h-9 rounded-full px-3 text-[13px] font-semibold outline-1 outline-line"
          >
            {row.editing ? 'Xong' : 'Sửa'}
          </button>
          <button
            type="button"
            onClick={() => onChange({ choice: skipped ? 'add' : 'skip' })}
            className="h-9 rounded-full px-3 text-[13px] font-semibold text-muted"
          >
            {skipped ? 'Lấy lại' : 'Bỏ'}
          </button>
        </div>
      </div>

      {row.dup && (
        <div className="mt-2">
          <DuplicateNotice info={row.dup} choice={row.choice} onChoose={(choice) => onChange({ choice })} allowSkip />
        </div>
      )}

      {row.editing && (
        <div className="mt-3 border-t border-line pt-3">
          <ItemFields idPrefix={`bulk-${row.key}`} draft={row.draft} onChange={(draft) => onChange({ draft })} issues={issues} />
        </div>
      )}
    </li>
  );
}
