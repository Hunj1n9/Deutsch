'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, useTransition } from 'react';
import { submitStageTestAction, type TestReview } from '@/app/(app)/learn/actions';
import type { TestOutcome, TestView } from '@/lib/course/stage-test';
import { speakGerman, useCanSpeak } from '../review/speech';
import { UmlautBar } from '../UmlautBar';
import { errorBoxClass, noticeBoxClass, primaryClass, secondaryClass } from '../ui';
import { AnswerInput, answerInputClass, ExercisePrompt } from './ExerciseCard';

type Reading = { title_de: string; text_de: string; gloss: Record<string, string> };

/**
 * Kiểm tra chặng (SPEC F12): 20 câu, không gợi ý, không hiện đáp án đến khi nộp. Server chấm lại.
 */
export function StageTest({
  stageId,
  questions,
  reading,
  points,
  lessonLinks,
  next,
}: {
  stageId: string;
  questions: TestView[];
  reading: Reading;
  points: { key: string; title_vi: string; lessonId: string | null }[];
  lessonLinks: { id: string; title_vi: string }[];
  next: { href: string; label: string } | null;
}) {
  const [index, setIndex] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ outcome: TestOutcome; review: TestReview[]; skipped: boolean } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function answer(id: string, value: string) {
    setAnswers((a) => ({ ...a, [id]: value }));
    setIndex((i) => i + 1);
    window.scrollTo({ top: 0 });
  }

  function submit() {
    setError(null);
    startTransition(async () => {
      const res = await submitStageTestAction({
        stageId,
        answers: questions.map((q) => ({ id: q.id, answer: answers[q.id] ?? '' })),
      });
      if (!res.ok) {
        setError(res.error);
        return;
      }
      setResult({ outcome: res.outcome, review: res.review, skipped: res.skipped });
      window.scrollTo({ top: 0 });
    });
  }

  if (index < 0) {
    return (
      <div className="flex flex-col gap-3">
        <section className="scribble rounded-block bg-pastel-yellow p-5">
          <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">Kiểm tra chặng</p>
          <p className="mt-2 text-[17px] leading-relaxed">
            {questions.length} câu: từ vựng, ngữ pháp và đọc hiểu. Không có gợi ý, đáp án hiện sau khi nộp. Đạt khi đúng từ{' '}
            {Math.ceil(questions.length * 0.8)} câu. Đề được rút ngẫu nhiên mỗi lần làm.
          </p>
        </section>
        <button type="button" onClick={() => setIndex(0)} className={primaryClass}>
          Bắt đầu
        </button>
      </div>
    );
  }

  if (result) {
    const { outcome, review, skipped } = result;
    const wrong = review.filter((r) => !r.correct);
    return (
      <div className="flex flex-col gap-3">
        <section className={`scribble rounded-block p-5 ${outcome.passed ? 'bg-pastel-sage' : 'bg-pastel-pink'}`} role="status">
          <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">{outcome.passed ? 'Đạt' : 'Chưa đạt'}</p>
          <p className="mt-1 text-[34px] font-bold leading-none">
            {outcome.score}/{outcome.total}
          </p>
          {skipped && <p className="mt-2 text-[15px]">Chặng được đánh dấu bỏ qua; từ của chặng đã vào kho để ôn.</p>}
        </section>
        {outcome.weakPoints.length > 0 && (
          <div className={noticeBoxClass}>
            <p className="font-semibold">Nên làm lại:</p>
            <ul className="mt-1 flex flex-col gap-1">
              {outcome.weakPoints.map((k) => {
                const p = points.find((x) => x.key === k);
                return (
                  <li key={k}>
                    {p?.lessonId ? (
                      <Link href={`/learn/${p.lessonId}`} className="underline">
                        {p.title_vi}
                      </Link>
                    ) : (
                      p?.title_vi
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {wrong.length > 0 && (
          <section className="flex flex-col gap-2">
            <h2 className="px-1 text-[17px] font-bold">Câu sai</h2>
            {wrong.map((r) => {
              const q = questions.find((x) => x.id === r.id);
              return (
                <div key={r.id} className="rounded-[20px] bg-surface p-4">
                  {q && <QuestionLabel q={q} />}
                  <p className="text-[15px] line-through opacity-70" lang="de">
                    {r.answer || '(bỏ trống)'}
                  </p>
                  <p className="text-[18px] font-semibold" lang="de">
                    {r.expected}
                  </p>
                </div>
              );
            })}
          </section>
        )}
        {outcome.passed && next && (
          <Link href={next.href} className={primaryClass}>
            {next.label}
          </Link>
        )}
        <div className="flex gap-2">
          {/* Tải lại hẳn trang để server rút đề mới. */}
          <a href={`/learn/test/${stageId}`} className={`${secondaryClass} flex-1`}>
            Làm đề khác
          </a>
          <Link href="/learn" className={`${secondaryClass} flex-1`}>
            Về trang Học
          </Link>
        </div>
        {!outcome.passed && lessonLinks.length > 0 && <p className="px-1 text-[13px] text-muted">Các câu ngữ pháp sai đã vào sổ lỗi.</p>}
      </div>
    );
  }

  if (index >= questions.length) {
    const blank = questions.filter((q) => !answers[q.id]?.trim()).length;
    return (
      <div className="flex flex-col gap-3">
        <p className="rounded-[20px] bg-surface p-4 text-[16px]">
          Đã trả lời {questions.length - blank}/{questions.length} câu.{blank > 0 && ` ${blank} câu bỏ trống tính là sai.`}
        </p>
        <button type="button" onClick={submit} disabled={pending} className={primaryClass}>
          {pending ? 'Đang chấm…' : 'Nộp bài'}
        </button>
        <button type="button" onClick={() => setIndex(0)} disabled={pending} className={secondaryClass}>
          Xem lại từ câu 1
        </button>
        {error && (
          <p role="alert" className={errorBoxClass}>
            {error}
          </p>
        )}
      </div>
    );
  }

  const q = questions[index];
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 px-1">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface" aria-hidden>
          <div className="h-full rounded-full bg-primary" style={{ width: `${(index / questions.length) * 100}%` }} />
        </div>
        <span className="text-[13px] font-semibold text-muted">
          {index + 1}/{questions.length}
        </span>
      </div>
      {q.section === 'reading' && <ReadingText reading={reading} />}
      <TestQuestionView key={q.id} q={q} initial={answers[q.id] ?? ''} onAnswer={(v) => answer(q.id, v)} />
      <button type="button" onClick={() => answer(q.id, answers[q.id] ?? '')} className={`${secondaryClass} self-center`}>
        Bỏ qua câu này
      </button>
    </div>
  );
}

function QuestionLabel({ q }: { q: TestView }) {
  if (q.section === 'vocab') {
    return <p className="text-[13px] text-muted">{q.mode === 'vi_de' ? `Việt → Đức: ${q.vietnamese}` : 'Nghe và chép'}</p>;
  }
  const e = q.exercise;
  const text = 'text' in e ? e.text.replace('{_}', '___') : 'vi' in e ? e.vi : '';
  return <p className="text-[13px] text-muted">{text}</p>;
}

function ReadingText({ reading }: { reading: Reading }) {
  const [open, setOpen] = useState(true);
  return (
    <section className="rounded-[20px] bg-surface p-4">
      <button type="button" onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left">
        <span className="text-[15px] font-bold" lang="de">
          {reading.title_de}
        </span>
        <span className="text-[13px] text-muted">{open ? 'Thu gọn' : 'Mở bài đọc'}</span>
      </button>
      {open && (
        <>
          <p className="mt-2 text-[17px] leading-relaxed" lang="de">
            {reading.text_de}
          </p>
          <ul className="mt-2 text-[13px] text-muted">
            {Object.entries(reading.gloss).map(([de, vi]) => (
              <li key={de}>
                <b lang="de">{de}</b>: {vi}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

function TestQuestionView({ q, initial, onAnswer }: { q: TestView; initial: string; onAnswer: (v: string) => void }) {
  const [text, setText] = useState(initial);
  const inputRef = useRef<HTMLInputElement>(null);
  const speakable = useCanSpeak();
  useEffect(() => {
    if (q.section === 'vocab' && q.mode === 'listen') speakGerman(q.speak);
    inputRef.current?.focus({ preventScroll: true });
  }, [q]);

  if (q.section !== 'vocab') {
    return (
      <>
        <section className="scribble rounded-block bg-pastel-yellow p-5">
          <ExercisePrompt exercise={q.exercise} />
        </section>
        <AnswerInput exercise={q.exercise} initial={initial} shuffle={false} submitLabel="Tiếp" onSubmit={onAnswer} />
      </>
    );
  }

  return (
    <>
      <section className="scribble rounded-block bg-pastel-yellow p-5">
        {q.mode === 'vi_de' ? (
          <>
            <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">Việt → Đức</p>
            <p className="mt-1 text-[28px] font-bold leading-tight">{q.vietnamese}</p>
            {q.needsArticle && <p className="text-[14px] opacity-80">gõ kèm mạo từ</p>}
          </>
        ) : (
          <>
            <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">Nghe và chép</p>
            <button
              type="button"
              onClick={() => speakGerman(q.speak, 0.8)}
              disabled={!speakable}
              className="mt-2 flex h-16 w-full items-center justify-center rounded-full bg-primary text-[18px] font-semibold text-on-primary"
            >
              ▶ Nghe lại
            </button>
          </>
        )}
      </section>
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          onAnswer(text);
        }}
      >
        <UmlautBar targetId={`t-${q.id}`} />
        <input
          id={`t-${q.id}`}
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          lang="de"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="next"
          aria-label="Đáp án tiếng Đức"
          className={answerInputClass}
        />
        <button type="submit" disabled={!text.trim()} className={primaryClass}>
          Tiếp
        </button>
      </form>
    </>
  );
}
