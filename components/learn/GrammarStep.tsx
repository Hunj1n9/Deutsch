'use client';

import { useMemo, useState } from 'react';
import { finishGrammarAction, lessonMistakeAction } from '@/app/(app)/learn/actions';
import type { Exercise, GrammarPoint, Lesson } from '@/lib/course/types';
import { canSpeak, speakGerman } from '../review/speech';
import { primaryClass } from '../ui';
import { ExerciseCard, type ExerciseOutcome } from './ExerciseCard';
import { RichText, SimpleTable } from './RichText';

type Entry =
  | { t: 'explain'; section: number }
  | { t: 'mixed-intro' }
  | { t: 'exercise'; ex: Exercise; retry: boolean; mixed: boolean };

/**
 * Bước Ngữ pháp (SPEC F11): mỗi đoạn giải thích ngắn rồi ngay bài tập về đúng đoạn đó; cuối bước là bài tập trộn.
 * Câu sai được đưa lại cuối bước một lần. Sai ở bài tập trộn thì ghi sổ lỗi.
 */
export function GrammarStep({
  lesson,
  point,
  onScore,
  onError,
  onDone,
}: {
  lesson: Lesson;
  point: GrammarPoint | null;
  onScore: (correct: boolean) => void;
  onError: () => void;
  onDone: () => void;
}) {
  const initial = useMemo<Entry[]>(() => {
    const list: Entry[] = [];
    lesson.grammar.sections.forEach((s, i) => {
      list.push({ t: 'explain', section: i });
      for (const ex of s.exercises) list.push({ t: 'exercise', ex, retry: false, mixed: false });
    });
    list.push({ t: 'mixed-intro' });
    for (const ex of lesson.grammar.mixed) list.push({ t: 'exercise', ex, retry: false, mixed: true });
    return list;
  }, [lesson]);
  const [queue, setQueue] = useState(initial);
  const [pos, setPos] = useState(0);
  const entry = queue[pos];
  const exercisesTotal = initial.filter((e) => e.t === 'exercise').length;
  const doneCount = queue.slice(0, pos).filter((e) => e.t === 'exercise' && !e.retry).length;

  function next() {
    if (pos + 1 < queue.length) {
      setPos(pos + 1);
      return;
    }
    void finishGrammarAction(lesson.id).catch(() => undefined);
    onDone();
  }

  function answered(e: Extract<Entry, { t: 'exercise' }>, o: ExerciseOutcome) {
    if (e.retry) return;
    onScore(o.correct && !o.usedHint);
    if (o.correct) return;
    setQueue((q) => [...q, { ...e, retry: true }]);
    if (e.mixed && !o.uncertain) {
      void lessonMistakeAction({ lessonId: lesson.id, exerciseId: e.ex.id, answer: o.answer })
        .then((r) => {
          if (r.ok && r.recorded) onError();
        })
        .catch(() => undefined);
    }
  }

  if (!entry) return null;
  const header = (
    <p className="px-1 text-[13px] font-semibold text-muted">
      {point?.title_vi} · {Math.min(doneCount, exercisesTotal)}/{exercisesTotal} bài tập
    </p>
  );

  if (entry.t === 'explain') {
    const s = lesson.grammar.sections[entry.section];
    return (
      <div className="flex flex-col gap-3">
        {header}
        <section className="scribble flex flex-col gap-3 rounded-block bg-pastel-lilac p-5">
          <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">
            Giải thích {entry.section + 1}/{lesson.grammar.sections.length}
          </p>
          <RichText text={s.text_vi} />
          {s.table && <SimpleTable table={s.table} />}
          {s.examples.length > 0 && (
            <ul className="flex flex-col gap-2">
              {s.examples.map(([de, vi]) => (
                <li key={de} className="rounded-[16px] bg-surface p-3">
                  <button
                    type="button"
                    onClick={() => speakGerman(de)}
                    disabled={!canSpeak()}
                    className="text-left text-[18px] font-semibold"
                    lang="de"
                  >
                    ▶ {de}
                  </button>
                  <p className="text-[14px] text-muted">{vi}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
        <button type="button" onClick={next} className={primaryClass}>
          Luyện ngay
        </button>
      </div>
    );
  }

  if (entry.t === 'mixed-intro') {
    return (
      <div className="flex flex-col gap-3">
        {header}
        <section className="scribble rounded-block bg-pastel-lilac p-5">
          <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">Luyện tổng hợp</p>
          <p className="mt-2 text-[17px] leading-relaxed">
            Các bài tập sau trộn cả bài, không có giải thích trước. Câu sai ở phần này được ghi vào sổ lỗi để ôn lại sau.
          </p>
        </section>
        <button type="button" onClick={next} className={primaryClass}>
          Bắt đầu
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {header}
      <ExerciseCard
        key={`${entry.ex.id}-${pos}`}
        exercise={entry.ex}
        lessonId={lesson.id}
        retry={entry.retry}
        onAnswered={(o) => answered(entry, o)}
        onNext={next}
      />
    </div>
  );
}
