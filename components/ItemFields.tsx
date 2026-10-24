'use client';

import type { ReactNode } from 'react';
import { cardKindsFor } from '@/lib/items/cards';
import { ADDABLE_TYPES, POS, POS_LABEL_VI, TYPE_LABEL_VI, type CardKind, type ItemDraft, type Pos } from '@/lib/items/types';
import { isNoun, normalizeDraft, type DraftIssue } from '@/lib/items/validate';
import { ArticlePicker } from './ArticlePicker';
import { GermanField } from './GermanField';
import { chipClass, fieldClass, labelClass, textareaClass } from './ui';

export const CARD_LABEL_VI: Record<CardKind, string> = {
  vi_de: 'Việt → Đức',
  audio_de: 'Nghe',
  cloze: 'Điền chỗ trống',
  error_fix: 'Sửa lỗi',
};

/** Các ô của một mục, dùng chung cho form Thêm, bảng nhập hàng loạt và trang sửa. */
export function ItemFields({
  idPrefix,
  draft,
  onChange,
  issues = [],
  afterGerman,
  autoFocus,
  onGermanEnter,
}: {
  idPrefix: string;
  draft: ItemDraft;
  onChange: (draft: ItemDraft) => void;
  issues?: DraftIssue[];
  afterGerman?: ReactNode;
  autoFocus?: boolean;
  onGermanEnter?: () => void;
}) {
  const set = <K extends keyof ItemDraft>(key: K, value: ItemDraft[K]) => onChange({ ...draft, [key]: value });
  const errorOf = (field: keyof ItemDraft) => issues.find((i) => i.field === field)?.message;
  const normalized = normalizeDraft(draft);
  const showArticle = draft.type === 'word' && (isNoun(normalized) || draft.article !== null);
  const kinds = normalized.german ? cardKindsFor(normalized) : [];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2" role="radiogroup" aria-label="Loại mục">
        {ADDABLE_TYPES.map((t) => (
          <button
            key={t}
            type="button"
            role="radio"
            aria-checked={draft.type === t}
            onClick={() => onChange({ ...draft, type: t, ...(t === 'word' ? {} : { article: null, pos: null }) })}
            className={`${chipClass(draft.type === t)} flex-1`}
          >
            {TYPE_LABEL_VI[t]}
          </button>
        ))}
      </div>

      <GermanField
        id={`${idPrefix}-german`}
        label={draft.type === 'grammar' ? 'Điểm ngữ pháp (tiếng Đức)' : 'Tiếng Đức'}
        value={draft.german}
        onChange={(v) => set('german', v)}
        placeholder={draft.type === 'grammar' ? 'mit + Dativ' : draft.type === 'phrase' ? 'zum Beispiel' : 'Tisch'}
        error={errorOf('german')}
        autoFocus={autoFocus}
        onEnter={onGermanEnter}
      />
      {afterGerman}

      {draft.type === 'word' && (
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${idPrefix}-pos`} className={labelClass}>
            Loại từ
          </label>
          <select
            id={`${idPrefix}-pos`}
            value={draft.pos ?? ''}
            onChange={(e) => {
              const pos = (e.target.value || null) as Pos | null;
              onChange({ ...draft, pos, article: pos && pos !== 'noun' ? null : draft.article });
            }}
            className={fieldClass}
          >
            <option value="">Tự đoán</option>
            {POS.map((p) => (
              <option key={p} value={p}>
                {POS_LABEL_VI[p]}
              </option>
            ))}
          </select>
        </div>
      )}

      {showArticle && (
        <div className="flex flex-col gap-1.5">
          <span className={labelClass}>Mạo từ</span>
          <ArticlePicker
            value={draft.article}
            onChange={(a) => onChange({ ...draft, article: a, pos: a ? 'noun' : draft.pos })}
            invalid={Boolean(errorOf('article'))}
          />
          {errorOf('article') && (
            <p role="alert" className="px-1 text-[13px] font-semibold text-bad">
              {errorOf('article')}
            </p>
          )}
        </div>
      )}

      {showArticle && (
        <GermanField
          id={`${idPrefix}-plural`}
          label="Số nhiều"
          value={draft.plural}
          onChange={(v) => set('plural', v)}
          placeholder="-e, ¨-er, - (không đổi)"
        />
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${idPrefix}-vi`} className={labelClass}>
          Nghĩa tiếng Việt
        </label>
        <input
          id={`${idPrefix}-vi`}
          value={draft.vietnamese}
          onChange={(e) => set('vietnamese', e.target.value)}
          aria-invalid={errorOf('vietnamese') ? true : undefined}
          className={`${fieldClass} ${errorOf('vietnamese') ? 'outline-bad' : ''}`}
        />
        {errorOf('vietnamese') && <p className="px-1 text-[13px] font-semibold text-bad">{errorOf('vietnamese')}</p>}
      </div>

      <GermanField
        id={`${idPrefix}-example`}
        label={draft.type === 'grammar' ? 'Câu mẫu (đánh dấu chỗ trống)' : 'Câu ví dụ'}
        value={draft.example_de}
        onChange={(v) => set('example_de', v)}
        multiline
        placeholder={draft.type === 'grammar' ? 'Ich fahre mit {dem} Bus.' : 'Der {Tisch} steht in der Küche.'}
        hint="Đặt phần cần nhớ trong { } để làm thẻ điền chỗ trống."
        error={errorOf('example_de')}
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${idPrefix}-example-vi`} className={labelClass}>
          Dịch câu ví dụ
        </label>
        <input
          id={`${idPrefix}-example-vi`}
          value={draft.example_vi}
          onChange={(e) => set('example_vi', e.target.value)}
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${idPrefix}-note`} className={labelClass}>
          Ghi chú ngữ pháp
        </label>
        <textarea
          id={`${idPrefix}-note`}
          rows={2}
          value={draft.grammar_note_vi}
          onChange={(e) => set('grammar_note_vi', e.target.value)}
          className={textareaClass}
        />
      </div>

      {kinds.length > 0 && (
        <p className="px-1 text-[13px] text-muted">
          Sẽ có thẻ: <span className="font-semibold text-ink">{kinds.map((k) => CARD_LABEL_VI[k]).join(' · ')}</span>
        </p>
      )}
    </div>
  );
}
