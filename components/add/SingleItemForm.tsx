'use client';

import { useState, useTransition } from 'react';
import { fillDraftAction, saveItemsAction } from '@/app/(app)/add/actions';
import type { DuplicateChoice, DuplicateInfo } from '@/lib/items/dedupe';
import { emptyDraft, type ItemDraft, type Level } from '@/lib/items/types';
import { normalizeDraft, validateDraft, type DraftIssue } from '@/lib/items/validate';
import { ItemFields } from '../ItemFields';
import { DuplicateNotice } from './DuplicateNotice';
import { LevelPicker, SourcePicker, type SourceOption } from '../SourcePicker';
import { errorBoxClass, noticeBoxClass, primaryClass, secondaryClass } from '../ui';

export function SingleItemForm({
  level: initialLevel,
  sources: initialSources,
  sourceId: initialSourceId,
  prefill,
}: {
  level: Level;
  sources: SourceOption[];
  sourceId: string | null;
  prefill?: ItemDraft;
}) {
  const [draft, setDraft] = useState<ItemDraft>(prefill ?? emptyDraft());
  const [level, setLevel] = useState<Level>(initialLevel);
  const [sources, setSources] = useState(initialSources);
  const [sourceId, setSourceId] = useState(initialSourceId);
  const [issues, setIssues] = useState<DraftIssue[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState<string | null>(null);
  const [duplicate, setDuplicate] = useState<DuplicateInfo | null>(null);
  const [filling, startFill] = useTransition();
  const [saving, startSave] = useTransition();
  const [formKey, setFormKey] = useState(0);

  function update(next: ItemDraft) {
    setDraft(next);
    setDuplicate(null);
    if (issues.length > 0) setIssues(validateDraft(normalizeDraft(next)));
  }

  function fill() {
    setError(null);
    setSaved(null);
    startFill(async () => {
      const result = await fillDraftAction({ draft, level });
      if (result.ok) setDraft(result.draft);
      else setError(result.error);
    });
  }

  function save(choice: DuplicateChoice | null = null) {
    setError(null);
    setSaved(null);
    const normalized = normalizeDraft(draft);
    const local = validateDraft(normalized);
    setIssues(local);
    if (local.length > 0) {
      setError(local.map((i) => i.message).join(' '));
      return;
    }

    startSave(async () => {
      const result = await saveItemsAction({
        entries: [{ draft, choice, mergeInto: choice === 'merge' ? (duplicate?.existing[0]?.id ?? null) : null }],
        level,
        sourceId,
      });
      if (!result.ok) {
        setError(result.error);
        if (result.issues) setIssues(result.issues[0]?.issues ?? []);
        if (result.duplicates) setDuplicate(result.duplicates[0]);
        return;
      }
      const label = [normalized.article, normalized.german].filter(Boolean).join(' ');
      setSaved(result.merged ? `Đã gộp vào mục cũ: ${label}` : `Đã lưu: ${label} — ${normalized.vietnamese}`);
      setDuplicate(null);
      setIssues([]);
      setDraft(emptyDraft(draft.type));
      setFormKey((k) => k + 1);
    });
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        save();
      }}
      noValidate
    >
      <ItemFields
        key={formKey}
        idPrefix="single"
        draft={draft}
        onChange={update}
        issues={issues}
        autoFocus={formKey > 0}
        onGermanEnter={fill}
        afterGerman={
          <button type="button" onClick={fill} disabled={filling || !draft.german.trim()} className={secondaryClass}>
            {filling ? 'AI đang điền…' : 'Điền giúp'}
          </button>
        }
      />

      <div className="flex flex-col gap-4">
        <SourcePicker
          idPrefix="single"
          sources={sources}
          value={sourceId}
          onChange={setSourceId}
          onCreated={(s) => setSources((list) => [s, ...list])}
        />
        <LevelPicker id="single-level" value={level} onChange={(l) => l && setLevel(l)} />
      </div>

      {duplicate && (
        <DuplicateNotice info={duplicate} choice={null} onChoose={(c) => save(c)} />
      )}

      {error && !duplicate && (
        <p role="alert" className={errorBoxClass}>
          {error}
        </p>
      )}
      {saved && (
        <p role="status" className={noticeBoxClass}>
          {saved}
        </p>
      )}

      <button type="submit" disabled={saving || filling} className={primaryClass}>
        {saving ? 'Đang lưu…' : 'Lưu mục'}
      </button>
    </form>
  );
}

