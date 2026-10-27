'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { saveSettingsAction, type SettingsInput } from '@/app/(app)/settings/actions';
import { EXAM_LEVELS } from '@/lib/daily-goal';
import { LEVELS, type Level } from '@/lib/items/types';
import { sourceLabel, type SourceOption } from '../SourcePicker';
import { errorBoxClass, fieldClass, labelClass, noticeBoxClass, primaryClass } from '../ui';

export function SettingsForm({ initial, sources }: { initial: SettingsInput; sources: SourceOption[] }) {
  const router = useRouter();
  const [form, setForm] = useState({
    ...initial,
    next_exam_date: initial.next_exam_date ?? '',
    retention_pct: String(Math.round(initial.desired_retention * 100)),
  });
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, startTransition] = useTransition();
  const set = (k: string, v: string | number | null) => setForm((f) => ({ ...f, [k]: v }));
  const num = (v: string) => (v === '' ? NaN : Number(v));

  function save() {
    setMessage(null);
    startTransition(async () => {
      const res = await saveSettingsAction({
        current_level: form.current_level,
        current_source_id: form.current_source_id || null,
        next_exam_name: form.next_exam_name,
        next_exam_date: form.next_exam_date || null,
        exam_level: form.exam_level,
        daily_minutes_target: num(String(form.daily_minutes_target)),
        weekly_days_target: num(String(form.weekly_days_target)),
        new_cards_per_day: num(String(form.new_cards_per_day)),
        desired_retention: num(form.retention_pct) / 100,
        hours_offset: num(String(form.hours_offset)),
      });
      setMessage(res.ok ? { ok: true, text: 'Đã lưu cài đặt.' } : { ok: false, text: res.error });
      if (res.ok) router.refresh();
    });
  }

  const field = (key: string, label: string, props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={`set-${key}`} className={labelClass}>
        {label}
      </label>
      <input
        id={`set-${key}`}
        value={String((form as Record<string, unknown>)[key] ?? '')}
        onChange={(e) => set(key, e.target.value)}
        className={fieldClass}
        {...props}
      />
    </div>
  );

  return (
    <form
      className="flex flex-col gap-4 rounded-block bg-surface p-5"
      onSubmit={(e) => {
        e.preventDefault();
        save();
      }}
    >
      <h2 className="text-[18px] font-bold">Học tập</h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="set-level" className={labelClass}>
            Trình độ hiện tại
          </label>
          <select id="set-level" value={form.current_level} onChange={(e) => set('current_level', e.target.value as Level)} className={fieldClass}>
            {LEVELS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
        {field('new_cards_per_day', 'Thẻ mới mỗi ngày', { inputMode: 'numeric' })}
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="set-source" className={labelClass}>
          Nguồn đang học
        </label>
        <select id="set-source" value={form.current_source_id ?? ''} onChange={(e) => set('current_source_id', e.target.value || null)} className={fieldClass}>
          <option value="">Chưa chọn</option>
          {sources.map((s) => (
            <option key={s.id} value={s.id}>
              {sourceLabel(s)}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {field('daily_minutes_target', 'Mục tiêu phút/ngày', { inputMode: 'numeric' })}
        {field('weekly_days_target', 'Số ngày học/tuần', { inputMode: 'numeric' })}
        {field('retention_pct', 'Tỉ lệ nhớ (%)', { inputMode: 'numeric' })}
        {field('hours_offset', 'Giờ học trước app', { inputMode: 'decimal' })}
      </div>
      <h2 className="mt-2 text-[18px] font-bold">Kỳ thi kế tiếp</h2>
      {field('next_exam_name', 'Tên kỳ thi', {})}
      <div className="grid grid-cols-2 gap-3">
        {field('next_exam_date', 'Ngày thi', { type: 'date' })}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="set-exam-level" className={labelClass}>
            Học xong tới cấp
          </label>
          <select id="set-exam-level" value={form.exam_level} onChange={(e) => set('exam_level', e.target.value)} className={fieldClass}>
            {EXAM_LEVELS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>
      <p className="ml-1 text-[13px] leading-snug text-muted">
        Trang Hôm nay chia số bài và kiểm tra chặng còn lại tới hết cấp này cho số ngày học trước ngày thi.
      </p>
      {message && <p className={message.ok ? noticeBoxClass : errorBoxClass}>{message.text}</p>}
      <button type="submit" disabled={pending} className={primaryClass}>
        {pending ? 'Đang lưu…' : 'Lưu cài đặt'}
      </button>
    </form>
  );
}
