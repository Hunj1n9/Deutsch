'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { judgeExerciseAction } from '@/app/(app)/learn/actions';
import type { AnswerFlag } from '@/lib/answer-check';
import { fullSentence, gradeExercise, hashSeed, shuffledChunks } from '@/lib/course/grade';
import { KIND_VI, type Exercise } from '@/lib/course/types';
import { speakGerman, useCanSpeak } from '../review/speech';
import { UmlautBar } from '../UmlautBar';
import { primaryClass, secondaryClass } from '../ui';

export const FLAG_VI: Record<AnswerFlag, string> = {
  umlaut_fallback: 'Viết ae/oe/ue thay cho ä/ö/ü',
  eszett_fallback: 'Viết ss thay cho ß',
  capitalization: 'Sai chữ hoa/thường',
  wrong_article: 'Sai mạo từ',
  missing_article: 'Thiếu mạo từ',
};

export const answerInputClass =
  'h-14 w-full rounded-[20px] bg-surface px-4 text-[20px] outline-2 outline-line focus:outline-ink';

/** Phần đề của bài tập (dùng cả ở bài học và kiểm tra chặng; không lộ đáp án). */
export function ExercisePrompt({ exercise }: { exercise: Exercise }) {
  const e = exercise;
  const speakable = useCanSpeak();
  const label = <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">{KIND_VI[e.kind]}</p>;
  switch (e.kind) {
    case 'fill': {
      const [before, after] = e.text.split(/\{[^{}]+\}/);
      return (
        <div className="flex flex-col gap-2">
          {label}
          <p className="text-[24px] font-semibold leading-snug" lang="de">
            {before}
            <span className="mx-1 inline-block min-w-14 border-b-4 border-ink align-baseline">&nbsp;</span>
            {after}
          </p>
          <p className="text-[15px] opacity-80">{e.vi}</p>
        </div>
      );
    }
    case 'choose':
    case 'question': {
      const [before, after] = e.text.split('___');
      return (
        <div className="flex flex-col gap-2">
          {e.kind === 'choose' ? label : <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">Câu hỏi</p>}
          <p className="text-[22px] font-semibold leading-snug" lang={e.kind === 'choose' ? 'de' : undefined}>
            {before}
            {after !== undefined && (
              <>
                <span className="mx-1 inline-block min-w-14 border-b-4 border-ink align-baseline">&nbsp;</span>
                {after}
              </>
            )}
          </p>
          {e.kind === 'choose' && e.vi && <p className="text-[15px] opacity-80">{e.vi}</p>}
        </div>
      );
    }
    case 'order':
      return (
        <div className="flex flex-col gap-2">
          {label}
          <p className="text-[22px] font-semibold leading-snug">{e.vi}</p>
        </div>
      );
    case 'transform':
      return (
        <div className="flex flex-col gap-2">
          {label}
          <p className="text-[15px] font-semibold">{e.instruction_vi}</p>
          <p className="text-[24px] font-semibold leading-snug" lang="de">
            {e.text}
          </p>
        </div>
      );
    case 'translate':
      return (
        <div className="flex flex-col gap-2">
          {label}
          <p className="text-[24px] font-semibold leading-snug">{e.vi}</p>
        </div>
      );
    case 'listen':
      return (
        <div className="flex flex-col gap-2">
          {label}
          <button
            type="button"
            onClick={() => speakGerman(e.answers[0], 0.8)}
            disabled={!speakable}
            className="flex h-16 items-center justify-center gap-2 rounded-full bg-primary text-[18px] font-semibold text-on-primary"
          >
            ▶ Nghe lại
          </button>
        </div>
      );
  }
}

/** Ô trả lời theo kiểu bài tập. `onSubmit` nhận chuỗi trả lời (lựa chọn, câu ghép, chữ gõ). */
export function AnswerInput({
  exercise,
  disabled,
  onSubmit,
  submitLabel = 'Kiểm tra',
  initial = '',
  onChange,
  shuffle = true,
}: {
  exercise: Exercise;
  disabled?: boolean;
  onSubmit: (answer: string) => void;
  submitLabel?: string;
  initial?: string;
  onChange?: (answer: string) => void;
  /** false khi mảnh câu đã được xáo sẵn ở server (kiểm tra chặng). */
  shuffle?: boolean;
}) {
  const e = exercise;
  const [text, setText] = useState(initial);
  const [picked, setPicked] = useState<number[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const chunks = useMemo(() => (e.kind !== 'order' ? [] : shuffle ? shuffledChunks(e.chunks, hashSeed(e.id)) : e.chunks), [e, shuffle]);
  const inputId = `ans-${e.id}`;

  useEffect(() => {
    if (e.kind === 'listen') speakGerman(e.answers[0], 0.8);
    inputRef.current?.focus({ preventScroll: true });
  }, [e]);

  if (e.kind === 'choose' || e.kind === 'question') {
    return (
      <div className="flex flex-col gap-2">
        {e.options.map((o) => (
          <button
            key={o}
            type="button"
            disabled={disabled}
            onClick={() => {
              onChange?.(o);
              onSubmit(o);
            }}
            className={`flex min-h-13 items-center rounded-[20px] px-4 py-3 text-left text-[18px] font-semibold outline-2 disabled:opacity-60 ${
              initial === o ? 'bg-primary text-on-primary outline-primary' : 'bg-surface outline-line'
            }`}
            lang={e.kind === 'choose' ? 'de' : undefined}
          >
            {o}
          </button>
        ))}
      </div>
    );
  }

  if (e.kind === 'order') {
    const sentence = picked.map((i) => chunks[i]).join(' ');
    return (
      <div className="flex flex-col gap-3">
        <div className="flex min-h-16 flex-wrap content-start gap-2 rounded-[20px] bg-surface p-3 outline-2 outline-line" aria-label="Câu đang ghép">
          {picked.length === 0 && <span className="text-[15px] text-muted">Chạm các mảnh theo đúng thứ tự</span>}
          {picked.map((i, pos) => (
            <button
              key={`${i}-${pos}`}
              type="button"
              disabled={disabled}
              onClick={() => {
                const next = picked.filter((_, p) => p !== pos);
                setPicked(next);
                onChange?.(next.map((k) => chunks[k]).join(' '));
              }}
              className="rounded-full bg-primary px-3 py-2 text-[17px] font-semibold text-on-primary"
              lang="de"
            >
              {chunks[i]}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {chunks.map((c, i) =>
            picked.includes(i) ? null : (
              <button
                key={i}
                type="button"
                disabled={disabled}
                onClick={() => {
                  const next = [...picked, i];
                  setPicked(next);
                  onChange?.(next.map((k) => chunks[k]).join(' '));
                }}
                className="rounded-full bg-surface px-3 py-2 text-[17px] font-semibold outline-2 outline-line"
                lang="de"
              >
                {c}
              </button>
            ),
          )}
        </div>
        <button
          type="button"
          disabled={disabled || picked.length !== chunks.length}
          onClick={() => onSubmit(sentence)}
          className={primaryClass}
        >
          {submitLabel}
        </button>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(ev) => {
        ev.preventDefault();
        if (text.trim()) onSubmit(text);
      }}
    >
      <UmlautBar targetId={inputId} />
      <input
        id={inputId}
        ref={inputRef}
        value={text}
        onChange={(ev) => {
          setText(ev.target.value);
          onChange?.(ev.target.value);
        }}
        lang="de"
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        enterKeyHint="done"
        aria-label="Đáp án tiếng Đức"
        placeholder={e.kind === 'fill' ? 'Từ còn thiếu' : 'Gõ câu tiếng Đức'}
        className={answerInputClass}
        disabled={disabled}
      />
      <button type="submit" disabled={disabled || !text.trim()} className={primaryClass}>
        {submitLabel}
      </button>
    </form>
  );
}

/** `uncertain`: AI không phán được nên tính sai tạm, không ghi sổ lỗi. */
export type ExerciseOutcome = { correct: boolean; usedHint: boolean; answer: string; uncertain: boolean };

/**
 * Một bài tập của bài học: làm, chấm ngay (AI P6 khi câu tự do khác đáp án), hiện đáp án và giải thích.
 * `onAnswered` gọi một lần khi có kết quả; `onNext` khi bấm Tiếp.
 */
export function ExerciseCard({
  exercise,
  lessonId,
  onAnswered,
  onNext,
  retry = false,
}: {
  exercise: Exercise;
  lessonId: string;
  onAnswered: (o: ExerciseOutcome) => void;
  onNext: () => void;
  retry?: boolean;
}) {
  const [hint, setHint] = useState(false);
  const [judging, setJudging] = useState(false);
  const [result, setResult] = useState<{ correct: boolean; flags: AnswerFlag[]; expected: string; answer: string; note?: string } | null>(
    null,
  );
  const nextRef = useRef<HTMLButtonElement>(null);
  const speakable = useCanSpeak();

  useEffect(() => {
    if (result) nextRef.current?.focus({ preventScroll: true });
  }, [result]);

  async function submit(answer: string) {
    if (result || judging) return;
    const r = gradeExercise(exercise, answer);
    let correct = r.correct;
    let note: string | undefined;
    let uncertain = false;
    if (r.askAi) {
      setJudging(true);
      const res = await judgeExerciseAction({ lessonId, exerciseId: exercise.id, answer });
      setJudging(false);
      if (res.ok) {
        correct = res.correct;
        note = res.note;
      } else {
        uncertain = true;
        note = `Chưa kiểm được bằng AI (${res.error}). Đối chiếu với đáp án mẫu; câu này không ghi vào sổ lỗi.`;
      }
    }
    setResult({ correct, flags: r.flags, expected: r.expected, answer, note });
    onAnswered({ correct, usedHint: hint, answer, uncertain });
  }

  const german = exercise.kind !== 'question';
  const full = fullSentence(exercise);

  return (
    <div className="flex flex-col gap-3">
      <section className="scribble rounded-block bg-pastel-sky p-5">
        {retry && <p className="mb-1 text-[13px] font-semibold">Làm lại câu sai</p>}
        <ExercisePrompt exercise={exercise} />
        {exercise.hint_vi && !result && (
          hint ? (
            <p className="mt-3 text-[15px] font-semibold">Gợi ý: {exercise.hint_vi}</p>
          ) : (
            <button type="button" onClick={() => setHint(true)} className="mt-3 rounded-full bg-surface px-4 py-2 text-[14px] font-semibold">
              Gợi ý
            </button>
          )
        )}
      </section>

      {!result ? (
        <AnswerInput exercise={exercise} disabled={judging} onSubmit={(a) => void submit(a)} submitLabel={judging ? 'AI đang phán…' : 'Kiểm tra'} />
      ) : (
        <div className="flex flex-col gap-3">
          <div className={`rounded-[20px] p-4 ${result.correct ? 'bg-pastel-sage' : 'bg-pastel-pink'}`} role="status">
            <p className="text-[15px] font-bold">{result.correct ? 'Đúng' : 'Chưa đúng'}</p>
            {!result.correct && (
              <p className="text-[16px] line-through opacity-70" lang={german ? 'de' : undefined}>
                {result.answer}
              </p>
            )}
            <p className="text-[22px] font-semibold leading-snug" lang={german ? 'de' : undefined}>
              {german ? full : result.expected}
            </p>
            {result.flags.length > 0 && (
              <ul className="mt-1 text-[14px]">
                {result.flags.map((f) => (
                  <li key={f}>• {FLAG_VI[f]}</li>
                ))}
              </ul>
            )}
            {result.note && <p className="mt-1 text-[14px]">{result.note}</p>}
            {exercise.explain_vi && <p className="mt-2 text-[15px]">{exercise.explain_vi}</p>}
          </div>
          <div className="flex gap-2">
            {german && speakable && (
              <button type="button" onClick={() => speakGerman(full)} className={`${secondaryClass} flex-1`}>
                ▶ Nghe
              </button>
            )}
            <Link href={`/tutor?lesson=${lessonId}&ex=${encodeURIComponent(exercise.id)}`} className={`${secondaryClass} flex-1`}>
              Hỏi gia sư
            </Link>
          </div>
          <button ref={nextRef} type="button" onClick={onNext} className={primaryClass}>
            Tiếp
          </button>
        </div>
      )}
    </div>
  );
}
