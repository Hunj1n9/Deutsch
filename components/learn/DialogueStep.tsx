'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Exercise, Lesson } from '@/lib/course/types';
import { canSpeak, speakDialogue, speakGerman, stopSpeaking } from '../review/speech';
import { primaryClass, secondaryClass } from '../ui';
import { ExerciseCard } from './ExerciseCard';

/**
 * Bước Hội thoại (SPEC F11): (a) nghe khi chưa hiện chữ rồi trả lời câu hỏi hiểu,
 * (b) hiện chữ, chạm dòng để nghe lại và xem dịch, (c) chép chính tả 2 dòng.
 */
export function DialogueStep({
  lesson,
  onScore,
  onDone,
}: {
  lesson: Lesson;
  onScore: (correct: boolean) => void;
  onDone: () => void;
}) {
  const d = lesson.dialogue;
  const dictation = useMemo<Exercise[]>(
    () => d.dictation.map((i) => ({ kind: 'listen', id: `${lesson.id}.d.${i}`, text: d.lines[i].de, answers: [d.lines[i].de] })),
    [d, lesson.id],
  );
  const [phase, setPhase] = useState<'listen' | 'read' | 'dictation'>('listen');
  const [index, setIndex] = useState(0);
  const [speaking, setSpeaking] = useState(-1);
  const [shown, setShown] = useState<Set<number>>(new Set());

  useEffect(() => stopSpeaking, []);

  function playAll() {
    speakDialogue(
      d.lines.map((l) => ({ text: l.de, speaker: l.speaker })),
      setSpeaking,
    );
  }

  const player = (
    <div className="flex gap-2">
      <button type="button" onClick={playAll} disabled={!canSpeak()} className={`${primaryClass} flex-[2]`}>
        {speaking >= 0 ? `Đang đọc dòng ${speaking + 1}/${d.lines.length}…` : '▶ Nghe hội thoại'}
      </button>
      {speaking >= 0 && (
        <button type="button" onClick={() => (stopSpeaking(), setSpeaking(-1))} className={`${secondaryClass} flex-1`}>
          Dừng
        </button>
      )}
    </div>
  );

  if (phase === 'listen') {
    const q = d.questions[index];
    return (
      <div className="flex flex-col gap-3">
        <p className="px-1 text-[13px] font-semibold text-muted">
          {d.title_de} · nghe, chưa xem chữ · câu hỏi {index + 1}/{d.questions.length}
        </p>
        {player}
        {!canSpeak() && <p className="text-[14px] text-muted">Trình duyệt không đọc được tiếng Đức; hãy xem chữ ở bước sau.</p>}
        <ExerciseCard
          key={q.id}
          exercise={q}
          lessonId={lesson.id}
          onAnswered={(o) => onScore(o.correct && !o.usedHint)}
          onNext={() => (index + 1 < d.questions.length ? setIndex(index + 1) : (stopSpeaking(), setPhase('read'), setIndex(0)))}
        />
      </div>
    );
  }

  if (phase === 'read') {
    return (
      <div className="flex flex-col gap-3">
        <p className="px-1 text-[13px] font-semibold text-muted">{d.title_de} · chạm một dòng để nghe và xem nghĩa</p>
        {player}
        <ul className="flex flex-col gap-2">
          {d.lines.map((l, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => {
                  speakGerman(l.de);
                  setShown((s) => new Set(s).add(i));
                }}
                className={`w-full rounded-[20px] p-3 text-left ${l.speaker === 'A' ? 'bg-surface' : 'bg-pastel-sky'} ${
                  speaking === i ? 'outline-2 outline-ink' : ''
                }`}
              >
                <span className="text-[12px] font-semibold text-muted">{l.speaker}</span>
                <span className="block text-[18px] font-semibold" lang="de">
                  {l.de}
                </span>
                {shown.has(i) && <span className="block text-[14px] text-muted">{l.vi}</span>}
              </button>
            </li>
          ))}
        </ul>
        {Object.keys(d.gloss).length > 0 && (
          <div className="rounded-[20px] bg-surface p-4 text-[14px]">
            <p className="mb-1 font-semibold text-muted">Chú thích</p>
            <ul>
              {Object.entries(d.gloss).map(([de, vi]) => (
                <li key={de}>
                  <b lang="de">{de}</b>: {vi}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button type="button" onClick={() => (stopSpeaking(), setPhase('dictation'))} className={primaryClass}>
          Chép chính tả
        </button>
      </div>
    );
  }

  const ex = dictation[index];
  return (
    <div className="flex flex-col gap-3">
      <p className="px-1 text-[13px] font-semibold text-muted">
        Chép chính tả {index + 1}/{dictation.length}
      </p>
      <ExerciseCard
        key={ex.id}
        exercise={ex}
        lessonId={lesson.id}
        onAnswered={(o) => onScore(o.correct)}
        onNext={() => (index + 1 < dictation.length ? setIndex(index + 1) : onDone())}
      />
    </div>
  );
}
