'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { setCardSuspendedAction, updateItemAction } from '@/app/(app)/items/actions';
import type { CardKind, ItemDraft, Level } from '@/lib/items/types';
import { normalizeDraft, validateDraft, type DraftIssue } from '@/lib/items/validate';
import { CARD_LABEL_VI, ItemFields } from '../ItemFields';
import { LevelPicker, SourcePicker, type SourceOption } from '../SourcePicker';
import { errorBoxClass, noticeBoxClass, primaryClass } from '../ui';

export type EditableCard = { id: string; kind: CardKind; suspended: boolean; due: string; reps: number; state: number };

const STATE_VI = ['Mới', 'Đang học', 'Ôn', 'Học lại'];

export function ItemEditForm({
  id,
  initialDraft,
  editable,
  level: initialLevel,
  sourceId: initialSourceId,
  sources: initialSources,
  cards: initialCards,
}: {
  id: string;
  initialDraft: ItemDraft;
  editable: boolean;
  level: Level | null;
  sourceId: string | null;
  sources: SourceOption[];
  cards: EditableCard[];
}) {
  const router = useRouter();
  const [draft, setDraft] = useState(initialDraft);
  const [level, setLevel] = useState(initialLevel);
  const [sourceId, setSourceId] = useState(initialSourceId);
  const [sources, setSources] = useState(initialSources);
  const [cards, setCards] = useState(initialCards);
  const [issues, setIssues] = useState<DraftIssue[]>([]);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, startTransition] = useTransition();

  function save() {
    const local = validateDraft(normalizeDraft(draft));
    setIssues(local);
    setMessage(local.length > 0 ? { ok: false, text: local.map((i) => i.message).join(' ') } : null);
    if (local.length > 0) return;
    startTransition(async () => {
      const result = await updateItemAction({ id, draft, level, sourceId });
      if (result.ok) {
        setMessage({ ok: true, text: 'Đã lưu.' });
        router.refresh();
      } else {
        setIssues(result.issues ?? []);
        setMessage({ ok: false, text: result.error });
      }
    });
  }

  function toggle(card: EditableCard) {
    startTransition(async () => {
      const result = await setCardSuspendedAction({ cardId: card.id, suspended: !card.suspended });
      if (result.ok) setCards((list) => list.map((c) => (c.id === card.id ? { ...c, suspended: !c.suspended } : c)));
      else setMessage({ ok: false, text: result.error });
    });
  }

  return (
    <div className="flex flex-col gap-5">
      {editable ? (
        <form
          className="flex flex-col gap-4"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            save();
          }}
        >
          <ItemFields
            idPrefix="edit"
            draft={draft}
            onChange={(d) => {
              setDraft(d);
              if (issues.length) setIssues(validateDraft(normalizeDraft(d)));
            }}
            issues={issues}
          />
          <div className="flex flex-col gap-4">
            <SourcePicker
              idPrefix="edit"
              sources={sources}
              value={sourceId}
              onChange={setSourceId}
              onCreated={(s) => setSources((list) => [s, ...list])}
            />
            <LevelPicker id="edit-level" value={level} onChange={setLevel} allowEmpty />
          </div>
          <button type="submit" disabled={pending} className={primaryClass}>
            {pending ? 'Đang lưu…' : 'Lưu thay đổi'}
          </button>
        </form>
      ) : (
        <p className="rounded-[20px] bg-surface p-4 text-[15px] text-muted">Mục sửa lỗi được quản lý trong Sổ lỗi.</p>
      )}

      {message && (
        <p role={message.ok ? 'status' : 'alert'} className={message.ok ? noticeBoxClass : errorBoxClass}>
          {message.text}
        </p>
      )}

      <section className="rounded-block bg-pastel-yellow p-5">
        <h2 className="mb-1 text-[18px] font-bold">Thẻ ôn</h2>
        <p className="mb-3 text-[13px] opacity-80">Thẻ treo không xuất hiện trong phiên ôn.</p>
        <ul className="flex flex-col gap-2">
          {cards.map((card) => (
            <li key={card.id} className="flex items-center justify-between gap-3 rounded-[20px] bg-surface p-3">
              <div>
                <p className="text-[15px] font-semibold">{CARD_LABEL_VI[card.kind]}</p>
                <p className="text-[12px] text-muted">
                  {STATE_VI[card.state] ?? ''} · {card.reps} lần ôn
                  {card.reps > 0 && ` · hạn ${new Date(card.due).toLocaleDateString('vi-VN')}`}
                </p>
              </div>
              <button
                type="button"
                disabled={pending}
                onClick={() => toggle(card)}
                aria-pressed={card.suspended}
                className={`h-10 shrink-0 rounded-full px-4 text-[14px] font-semibold ${card.suspended ? 'bg-primary text-on-primary' : 'outline-1 outline-line'}`}
              >
                {card.suspended ? 'Bỏ treo' : 'Treo'}
              </button>
            </li>
          ))}
          {cards.length === 0 && <li className="text-[14px]">Mục này chưa có thẻ.</li>}
        </ul>
      </section>
    </div>
  );
}
