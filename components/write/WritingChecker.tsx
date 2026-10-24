'use client';

import Link from 'next/link';
import { useState, useTransition } from 'react';
import { checkWritingAction, recheckWritingAction, type CheckFeedback } from '@/app/(app)/write/actions';
import { CATEGORY_VI } from '@/lib/errors';
import { splitSentences } from '@/lib/errors';
import { GermanField } from '../GermanField';
import { errorBoxClass, fieldClass, labelClass, primaryClass, secondaryClass } from '../ui';
import { AnnotatedText } from './AnnotatedText';

export function WritingChecker({ initialPrompt }: { initialPrompt: string }) {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [text, setText] = useState('');
  const [writingId, setWritingId] = useState<string | null>(null);
  const [checked, setChecked] = useState<{ text: string; feedback: CheckFeedback } | null>(null);
  const [revised, setRevised] = useState('');
  const [recheck, setRecheck] = useState<{ text: string; feedback: CheckFeedback } | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function check() {
    setError(null);
    startTransition(async () => {
      const res = await checkWritingAction({ text, prompt });
      if (!res.ok) {
        setError(res.error);
        return;
      }
      setWritingId(res.writingId);
      setChecked({ text: text.trim(), feedback: res.feedback });
      setRevised(text.trim());
      setRecheck(null);
      setShowAnswer(false);
    });
  }

  function runRecheck() {
    if (!writingId) return;
    setError(null);
    startTransition(async () => {
      const res = await recheckWritingAction({ writingId, revised });
      if (!res.ok) {
        setError(res.error);
        return;
      }
      setRecheck({ text: revised.trim(), feedback: res.feedback });
    });
  }

  function reset() {
    setText('');
    setWritingId(null);
    setChecked(null);
    setRecheck(null);
    setShowAnswer(false);
    setError(null);
  }

  if (!checked) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="write-prompt" className={labelClass}>
            Đề bài (không bắt buộc)
          </label>
          <input
            id="write-prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Viết 5 câu về buổi sáng của bạn"
            className={fieldClass}
          />
        </div>
        <GermanField
          id="write-text"
          label="Bài viết (1–10 câu tiếng Đức)"
          value={text}
          onChange={setText}
          multiline
          alwaysShowBar
          placeholder="Ich stehe um sieben Uhr auf…"
        />
        {error && (
          <p role="alert" className={errorBoxClass}>
            {error}
          </p>
        )}
        <button type="button" onClick={check} disabled={pending || !text.trim()} className={primaryClass}>
          {pending ? 'AI đang kiểm…' : 'Kiểm tra'}
        </button>
        <Link href="/write/history" className="text-center text-[14px] font-semibold text-muted underline">
          Lịch sử bài viết
        </Link>
      </div>
    );
  }

  const { feedback } = checked;
  const titleOf = (key: string) => feedback.errors.find((e) => e.rule_key === key)?.title_vi ?? key;

  if (feedback.errors.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <section className="scribble rounded-block bg-pastel-lilac p-5">
          <p className="text-[22px] font-bold">Không có lỗi 🎉</p>
          <AnnotatedText text={checked.text} errors={[]} />
          <p className="mt-2 text-[15px]">{feedback.overall_vi}</p>
          {feedback.upgrade_suggestion_de && (
            <p className="mt-2 text-[15px]">
              Nâng cấp: <span lang="de" className="font-semibold">{feedback.upgrade_suggestion_de}</span>
            </p>
          )}
        </section>
        <MakeCards text={checked.text} />
        <button type="button" onClick={reset} className={primaryClass}>
          Viết bài mới
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <section className="rounded-block bg-pastel-lilac p-5">
        <p className="mb-2 text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">
          {feedback.errors.length} chỗ cần sửa
        </p>
        <AnnotatedText text={checked.text} errors={feedback.errors} />
        <p className="mt-2 text-[15px]">{feedback.overall_vi}</p>
      </section>

      <ol className="flex flex-col gap-2">
        {feedback.errors.map((e, i) => (
          <li key={i} className="rounded-[20px] bg-surface p-4">
            <p className="text-[13px] font-semibold text-muted">
              {i + 1} · {CATEGORY_VI[e.category]}
            </p>
            <p className="text-[16px]">{e.hint_vi}</p>
            {showAnswer && (
              <div className="mt-2 border-t border-line pt-2">
                <p className="text-[15px]" lang="de">
                  <span className="line-through opacity-60">{e.wrong}</span> → <span className="font-semibold">{e.correct}</span>
                </p>
                <p className="text-[14px] font-semibold">{e.title_vi}</p>
                <p className="text-[14px] text-muted">{e.explanation_vi}</p>
              </div>
            )}
          </li>
        ))}
      </ol>

      <GermanField id="write-revised" label="Tự sửa bài ở đây" value={revised} onChange={setRevised} multiline alwaysShowBar />

      {recheck && (
        <section className="rounded-[20px] bg-surface p-4">
          <p className="mb-1 text-[15px] font-bold">Kết quả kiểm lại</p>
          {recheck.feedback.fixed.map((k) => (
            <p key={`f-${k}`} className="text-[15px] text-ok">
              ✓ Đã sửa: {titleOf(k)}
            </p>
          ))}
          {recheck.feedback.still_wrong.map((k) => (
            <p key={`s-${k}`} className="text-[15px] text-bad">
              ✗ Còn sai: {titleOf(k)}
            </p>
          ))}
          {recheck.feedback.errors.length > 0 ? (
            <>
              <div className="mt-2">
                <AnnotatedText text={recheck.text} errors={recheck.feedback.errors} />
              </div>
              <ul className="mt-1 text-[14px]">
                {recheck.feedback.errors.map((e, i) => (
                  <li key={i}>
                    {i + 1}. {e.hint_vi}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="mt-1 text-[15px] font-semibold text-ok">Bản sửa không còn lỗi.</p>
          )}
        </section>
      )}

      {error && (
        <p role="alert" className={errorBoxClass}>
          {error}
        </p>
      )}

      <div className="flex gap-2">
        <button type="button" onClick={() => setShowAnswer(true)} disabled={showAnswer} className={`${secondaryClass} h-13 flex-1`}>
          Xem đáp án
        </button>
        <button type="button" onClick={runRecheck} disabled={pending || !revised.trim()} className={`${primaryClass} flex-[1.4]`}>
          {pending ? 'Đang kiểm…' : 'Kiểm tra lại'}
        </button>
      </div>

      {showAnswer && (
        <section className="rounded-block bg-surface p-5">
          <p className="mb-1 text-[13px] font-semibold uppercase tracking-[.06em] text-muted">Đáp án</p>
          <p className="whitespace-pre-wrap text-[18px] leading-relaxed" lang="de">
            {feedback.corrected_text}
          </p>
          {feedback.upgrade_suggestion_de && (
            <p className="mt-2 text-[15px]">
              Nâng cấp: <span lang="de">{feedback.upgrade_suggestion_de}</span>
            </p>
          )}
          <div className="mt-3">
            <MakeCards text={feedback.corrected_text} />
          </div>
        </section>
      )}

      <button type="button" onClick={reset} className="h-11 text-[14px] font-semibold text-muted">
        Viết bài mới
      </button>
    </div>
  );
}

/** "Tạo thẻ từ câu này": mở form Thêm với câu đúng điền sẵn (loại cụm từ). */
function MakeCards({ text }: { text: string }) {
  const sentences = splitSentences(text).map((s) => text.slice(s.start, s.end));
  return (
    <ul className="flex flex-col gap-1.5">
      {sentences.map((s, i) => (
        <li key={i} className="flex items-center justify-between gap-2 rounded-[16px] bg-bg px-3 py-2">
          <span className="text-[14px]" lang="de">
            {s}
          </span>
          <Link
            href={`/add?type=phrase&german=${encodeURIComponent(s)}`}
            className="shrink-0 rounded-full bg-primary px-3 py-1.5 text-[12px] font-semibold text-on-primary"
          >
            Tạo thẻ
          </Link>
        </li>
      ))}
    </ul>
  );
}
