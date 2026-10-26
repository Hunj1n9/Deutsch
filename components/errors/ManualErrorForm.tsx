'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { addManualErrorAction, type ManualErrorInput } from '@/app/(app)/errors/actions';
import { CATEGORY_VI, ERROR_CATEGORIES, normalizeRuleKey } from '@/lib/errors';
import { GermanField } from '../GermanField';
import { SOURCE_KIND_VI } from '../SourcePicker';
import { Icon } from '../Icon';
import { errorBoxClass, fieldClass, labelClass, noticeBoxClass, primaryClass, secondaryClass, textareaClass } from '../ui';

const EMPTY: ManualErrorInput = {
  text_wrong: '',
  text_correct: '',
  title_vi: '',
  explanation_vi: '',
  category: 'other',
  rule_key: '',
  source: 'textbook',
};

export function ManualErrorForm() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<ManualErrorInput>(EMPTY);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, startTransition] = useTransition();
  const set = <K extends keyof ManualErrorInput>(k: K, v: ManualErrorInput[K]) => setForm((f) => ({ ...f, [k]: v }));

  function submit() {
    setMessage(null);
    startTransition(async () => {
      const res = await addManualErrorAction(form);
      if (!res.ok) {
        setMessage({ ok: false, text: res.error });
        return;
      }
      setMessage({ ok: true, text: res.created ? `Đã thêm lỗi mới (${res.ruleKey}).` : `Đã gộp vào lỗi có sẵn (${res.ruleKey}).` });
      setForm(EMPTY);
      router.refresh();
    });
  }

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className={`${secondaryClass} mb-4 w-full`}>
        <Icon name="plus" />
        Thêm lỗi tay
      </button>
    );
  }

  return (
    <form
      className="mb-4 flex flex-col gap-3 rounded-block bg-surface p-4"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <GermanField id="err-wrong" label="Câu sai" value={form.text_wrong} onChange={(v) => set('text_wrong', v)} />
      <GermanField id="err-correct" label="Câu đúng" value={form.text_correct} onChange={(v) => set('text_correct', v)} />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="err-title" className={labelClass}>
          Tên lỗi (tiếng Việt)
        </label>
        <input id="err-title" value={form.title_vi} onChange={(e) => set('title_vi', e.target.value)} placeholder="mit luôn đi với Dativ" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="err-explain" className={labelClass}>
          Giải thích
        </label>
        <textarea id="err-explain" rows={2} value={form.explanation_vi} onChange={(e) => set('explanation_vi', e.target.value)} className={textareaClass} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <select aria-label="Loại lỗi" value={form.category} onChange={(e) => set('category', e.target.value as ManualErrorInput['category'])} className={fieldClass}>
          {ERROR_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {CATEGORY_VI[c]}
            </option>
          ))}
        </select>
        <select aria-label="Ai chỉ ra" value={form.source} onChange={(e) => set('source', e.target.value as ManualErrorInput['source'])} className={fieldClass}>
          {Object.entries(SOURCE_KIND_VI).map(([k, label]) => (
            <option key={k} value={k}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="err-key" className={labelClass}>
          Khóa lỗi (để gộp lần sau; bỏ trống thì lấy theo tên)
        </label>
        <input
          id="err-key"
          value={form.rule_key}
          onChange={(e) => set('rule_key', e.target.value)}
          placeholder={normalizeRuleKey(form.title_vi) || 'dativ-nach-mit'}
          autoCapitalize="off"
          className={fieldClass}
        />
      </div>
      {message && <p className={message.ok ? noticeBoxClass : errorBoxClass}>{message.text}</p>}
      <div className="flex gap-2">
        <button type="button" onClick={() => setOpen(false)} className="h-13 flex-1 rounded-full text-[15px] font-semibold text-muted">
          Đóng
        </button>
        <button type="submit" disabled={pending} className={`${primaryClass} flex-[2]`}>
          {pending ? 'Đang lưu…' : 'Lưu lỗi'}
        </button>
      </div>
    </form>
  );
}
