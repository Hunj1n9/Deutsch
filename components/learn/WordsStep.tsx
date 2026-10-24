'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { learnWordsAction } from '@/app/(app)/learn/actions';
import { checkAnswer, type AnswerFlag, type CheckResult } from '@/lib/answer-check';
import { hashSeed, shuffled } from '@/lib/course/grade';
import type { Article } from '@/lib/items/types';
import { ArticleChip } from '../ArticleChip';
import { canSpeak, speakGerman } from '../review/speech';
import { UmlautBar } from '../UmlautBar';
import { primaryClass, secondaryClass } from '../ui';
import { answerInputClass, FLAG_VI } from './ExerciseCard';

/** Một mục từ mới, đã chuẩn bị ở server. */
export type WordView = {
  key: string;
  german: string;
  article: Article | null;
  plural: string | null;
  vietnamese: string;
  example: string | null;
  exampleVi: string | null;
  note: string | null;
  posLabel: string | null;
};

export const GROUP_SIZE = 5;
const MAX_TRIES = 3;

function full(w: WordView) {
  return w.article ? `${w.article} ${w.german}` : w.german;
}

type Result = { key: string; correct: boolean; flags: AnswerFlag[]; responseMs: number; answer: string };

/**
 * Bước Từ mới (SPEC F11): nhóm 5 mục, thẻ giới thiệu từng mục, rồi lượt gợi nhớ ngay (gõ Việt → Đức).
 * Xong mỗi nhóm thì lưu: nhập mục vào kho, lần gõ đầu là lần ôn đầu của thẻ vi_de.
 */
export function WordsStep({
  lessonId,
  words,
  onScore,
  onDone,
  onSaveError,
}: {
  lessonId: string;
  words: WordView[];
  onScore: (correct: boolean) => void;
  onDone: () => void;
  /** Lưu chạy nền; lỗi báo lên trình làm bài để không mất khi đã sang bước sau. */
  onSaveError: (message: string) => void;
}) {
  const groups = useMemo(() => {
    const out: WordView[][] = [];
    for (let i = 0; i < words.length; i += GROUP_SIZE) out.push(words.slice(i, i + GROUP_SIZE));
    return out;
  }, [words]);
  const [group, setGroup] = useState(0);
  const [phase, setPhase] = useState<'intro' | 'recall'>('intro');
  const [intro, setIntro] = useState(0);
  const [queue, setQueue] = useState<{ word: WordView; tries: number }[]>([]);
  const [input, setInput] = useState('');
  const [answered, setAnswered] = useState<{ result: CheckResult; given: string } | null>(null);
  const [pending, setPending] = useState(0);
  const results = useRef(new Map<string, Result>());
  const shownAt = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const current = groups[group] ?? [];
  const introWord = phase === 'intro' ? current[intro] : null;
  const recall = phase === 'recall' ? queue[0] : null;

  useEffect(() => {
    if (introWord) speakGerman(full(introWord));
  }, [introWord]);

  useEffect(() => {
    if (!recall) return;
    shownAt.current = performance.now();
    inputRef.current?.focus({ preventScroll: true });
  }, [recall]);

  useEffect(() => {
    if (answered) nextRef.current?.focus({ preventScroll: true });
  }, [answered]);

  if (words.length === 0) {
    return (
      <div className="flex flex-col gap-3">
        <p className="rounded-[20px] bg-surface p-4 text-[15px]">Bài này không có từ mới.</p>
        <button type="button" onClick={onDone} className={primaryClass}>
          Tiếp
        </button>
      </div>
    );
  }

  function startRecall() {
    setQueue(shuffled(current, hashSeed(`${lessonId}:${group}`)).map((word) => ({ word, tries: 0 })));
    setPhase('recall');
    setInput('');
    setAnswered(null);
  }

  function check(giveUp = false) {
    if (!recall || answered) return;
    const w = recall.word;
    const given = giveUp ? '' : input;
    const result = giveUp ? { correct: false, flags: [], matched: null } : checkAnswer(given, [w.german], w.article);
    if (recall.tries === 0) {
      results.current.set(w.key, {
        key: w.key,
        correct: result.correct,
        flags: result.flags,
        responseMs: Math.round(performance.now() - shownAt.current),
        answer: given,
      });
      onScore(result.correct && result.flags.length === 0);
    }
    setAnswered({ result, given });
    if (!result.correct || result.flags.length > 0) speakGerman(full(w));
  }

  function save(groupWords: WordView[]) {
    const batch = groupWords.flatMap((w) => {
      const r = results.current.get(w.key);
      return r ? [r] : [];
    });
    if (batch.length === 0) return;
    setPending((n) => n + 1);
    void learnWordsAction({ lessonId, results: batch })
      .then((res) => {
        if (!res.ok) onSaveError(res.error);
      })
      .catch(() => onSaveError('Không lưu được từ của bài vào kho. Kiểm tra mạng.'))
      .finally(() => setPending((n) => n - 1));
  }

  function next() {
    if (!recall || !answered) return;
    const rest = queue.slice(1);
    if (!answered.result.correct && recall.tries + 1 < MAX_TRIES) rest.push({ word: recall.word, tries: recall.tries + 1 });
    setAnswered(null);
    setInput('');
    if (rest.length > 0) {
      setQueue(rest);
      return;
    }
    save(current);
    if (group + 1 < groups.length) {
      setGroup(group + 1);
      setPhase('intro');
      setIntro(0);
      setQueue([]);
    } else {
      setQueue([]);
      onDone();
    }
  }

  const progress = (
    <p className="px-1 text-[13px] font-semibold text-muted">
      Nhóm {group + 1}/{groups.length} · {phase === 'intro' ? `từ ${intro + 1}/${current.length}` : 'gợi nhớ'}
      {pending > 0 && ' · đang lưu…'}
    </p>
  );

  if (introWord) {
    return (
      <div className="flex flex-col gap-3">
        {progress}
        <section className="scribble rounded-block bg-pastel-sky p-5">
          <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">
            Từ mới{introWord.posLabel && ` · ${introWord.posLabel}`}
          </p>
          <p className="mt-2 text-[30px] font-bold leading-tight" lang="de">
            {introWord.article && <ArticleChip article={introWord.article} size="lg" />} {introWord.german}
          </p>
          {introWord.plural && (
            <p className="text-[15px] opacity-80" lang="de">
              Số nhiều: {introWord.plural}
            </p>
          )}
          <p className="mt-2 text-[20px]">{introWord.vietnamese}</p>
          {introWord.example && (
            <p className="mt-3 text-[18px]" lang="de">
              {introWord.example}
            </p>
          )}
          {introWord.exampleVi && <p className="text-[15px] opacity-80">{introWord.exampleVi}</p>}
          {introWord.note && <p className="mt-2 text-[14px] opacity-80">{introWord.note}</p>}
        </section>
        <div className="flex gap-2">
          {canSpeak() && (
            <button type="button" onClick={() => speakGerman(full(introWord))} className={`${secondaryClass} flex-1`}>
              ▶ Từ
            </button>
          )}
          {canSpeak() && introWord.example && (
            <button type="button" onClick={() => speakGerman(introWord.example!)} className={`${secondaryClass} flex-1`}>
              ▶ Câu
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={() => (intro + 1 < current.length ? setIntro(intro + 1) : startRecall())}
          className={primaryClass}
        >
          {intro + 1 < current.length ? 'Từ tiếp' : 'Tự kiểm tra nhóm này'}
        </button>
      </div>
    );
  }

  if (!recall) return null;
  const w = recall.word;
  return (
    <div className="flex flex-col gap-3">
      {progress}
      <section className="scribble rounded-block bg-pastel-yellow p-5">
        <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">
          Việt → Đức{recall.tries > 0 && ' · làm lại'}
        </p>
        <p className="mt-1 text-[28px] font-bold leading-tight">{w.vietnamese}</p>
        <p className="text-[14px] opacity-80">
          {w.posLabel}
          {w.article && ' · gõ kèm mạo từ'}
        </p>
      </section>
      {!answered ? (
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            check();
          }}
        >
          <UmlautBar targetId="word-answer" />
          <input
            id="word-answer"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            lang="de"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="done"
            aria-label="Đáp án tiếng Đức"
            placeholder={w.article ? 'der/die/das + từ' : 'Gõ từ tiếng Đức'}
            className={answerInputClass}
          />
          <div className="flex gap-2">
            <button type="button" onClick={() => check(true)} className={`${secondaryClass} flex-1`}>
              Không nhớ
            </button>
            <button type="submit" disabled={!input.trim()} className={`${primaryClass} flex-[2]`}>
              Kiểm tra
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col gap-3">
          <div className={`rounded-[20px] p-4 ${answered.result.correct ? 'bg-pastel-sage' : 'bg-pastel-pink'}`} role="status">
            <p className="text-[15px] font-bold">{answered.result.correct ? 'Đúng' : 'Chưa đúng'}</p>
            {answered.given && !answered.result.correct && (
              <p className="text-[16px] line-through opacity-70" lang="de">
                {answered.given}
              </p>
            )}
            <p className="text-[26px] font-semibold leading-tight" lang="de">
              {w.article && <ArticleChip article={w.article} size="lg" />} {w.german}
            </p>
            {answered.result.flags.length > 0 && (
              <ul className="mt-1 text-[14px]">
                {answered.result.flags.map((f) => (
                  <li key={f}>• {FLAG_VI[f]}</li>
                ))}
              </ul>
            )}
            {!answered.result.correct && recall.tries + 1 < MAX_TRIES && (
              <p className="mt-1 text-[14px]">Từ này sẽ được hỏi lại cuối lượt.</p>
            )}
          </div>
          <button ref={nextRef} type="button" onClick={next} className={primaryClass}>
            Tiếp
          </button>
        </div>
      )}
    </div>
  );
}
