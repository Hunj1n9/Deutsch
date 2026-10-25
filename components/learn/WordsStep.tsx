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
import { reportTarget } from '@/lib/course/report';
import { buildDrill, letterHint, type DrillTask } from '@/lib/course/words';
import { ContentReport } from './ContentReport';
import { answerInputClass, FLAG_VI } from './ExerciseCard';
import { ChoiceTask, full, MatchBoard, SpellTask } from './WordDrills';

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

type Result = { key: string; correct: boolean; flags: AnswerFlag[]; responseMs: number; answer: string; usedHint: boolean };
type Phase = 'intro' | 'overview' | 'match' | 'drill' | 'type';

const PHASE_VI: Record<Phase, string> = { intro: '', overview: 'xem lại', match: 'ghép cặp', drill: 'luyện', type: 'gõ từ' };

/**
 * Bước Từ mới (SPEC F11): nhóm 5 mục, thẻ giới thiệu từng mục, xem lại cả nhóm, ghép cặp, lượt luyện nhiều kiểu
 * (nghe chọn nghĩa, chọn mạo từ, chọn từ, xếp chữ), rồi mới gõ (Việt → Đức, có gợi ý chữ đầu).
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
  const [phase, setPhase] = useState<Phase>('intro');
  const [intro, setIntro] = useState(0);
  const [queue, setQueue] = useState<{ word: WordView; tries: number }[]>([]);
  const [input, setInput] = useState('');
  const [hinted, setHinted] = useState(false);
  const [answered, setAnswered] = useState<{ result: CheckResult; given: string } | null>(null);
  const [drill, setDrill] = useState<{ task: DrillTask; tries: number }[]>([]);
  const [drillDone, setDrillDone] = useState(0);
  const drillCorrect = useRef(false);
  const [pending, setPending] = useState(0);
  const results = useRef(new Map<string, Result>());
  const shownAt = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const current = useMemo(() => groups[group] ?? [], [groups, group]);
  const introWord = phase === 'intro' ? current[intro] : null;
  const task = phase === 'drill' ? drill[0] : null;
  const recall = phase === 'type' ? queue[0] : null;

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

  function startType() {
    setQueue(shuffled(current, hashSeed(`${lessonId}:${group}:type`)).map((word) => ({ word, tries: 0 })));
    setPhase('type');
    setInput('');
    setHinted(false);
    setAnswered(null);
  }

  function startDrill() {
    // Câu chọn nghĩa/chọn từ cần ít nhất 2 phương án.
    const tasks = buildDrill(current, hashSeed(`${lessonId}:${group}:drill`), { listen: canSpeak() }).filter(
      (t) => words.length > 1 || t.kind === 'article' || t.kind === 'spell',
    );
    if (tasks.length === 0) return startType();
    setDrill(tasks.map((t) => ({ task: t, tries: 0 })));
    setDrillDone(0);
    setPhase('drill');
  }

  /** Lượt luyện chỉ để luyện: không tính điểm, không ghi lần ôn. Sai thì hỏi lại cuối lượt. */
  function nextDrill() {
    if (!task) return;
    const rest = drill.slice(1);
    if (!drillCorrect.current && task.tries + 1 < MAX_TRIES) rest.push({ task: task.task, tries: task.tries + 1 });
    drillCorrect.current = false;
    setDrillDone((n) => n + 1);
    if (rest.length > 0) setDrill(rest);
    else {
      setDrill([]);
      startType();
    }
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
        usedHint: hinted,
      });
      onScore(result.correct && result.flags.length === 0 && !hinted);
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
    setHinted(false);
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
      Nhóm {group + 1}/{groups.length} ·{' '}
      {phase === 'intro' ? `từ ${intro + 1}/${current.length}` : phase === 'drill' ? `luyện ${drillDone + 1}/${drillDone + drill.length}` : PHASE_VI[phase]}
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
        <ContentReport
          key={introWord.key}
          target={reportTarget('word', lessonId.slice(0, 5), introWord.key)}
          excerpt={[full(introWord), introWord.plural, introWord.vietnamese, introWord.example, introWord.exampleVi, introWord.note]
            .filter(Boolean)
            .join(' · ')}
        />
        <div className="flex gap-2">
          {intro > 0 && (
            <button type="button" onClick={() => setIntro(intro - 1)} className={`${secondaryClass} flex-1`}>
              ← Từ trước
            </button>
          )}
          <button
            type="button"
            onClick={() => (intro + 1 < current.length ? setIntro(intro + 1) : setPhase('overview'))}
            className={`${primaryClass} flex-[2]`}
          >
            {intro + 1 < current.length ? 'Từ tiếp' : 'Xem lại cả nhóm'}
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'overview') {
    return (
      <div className="flex flex-col gap-3">
        {progress}
        <section className="scribble rounded-block bg-pastel-sky p-5">
          <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">Xem lại nhóm này</p>
          <p className="mt-1 text-[14px] opacity-80">Đọc lại một lượt, chạm một dòng để nghe. Sau đó luyện vài kiểu, rồi mới gõ.</p>
          <ul className="mt-3 flex flex-col gap-2">
            {current.map((w) => (
              <li key={w.key}>
                <button
                  type="button"
                  onClick={() => speakGerman(full(w))}
                  className="w-full rounded-[16px] bg-surface px-4 py-3 text-left"
                >
                  <span className="block text-[20px] font-semibold leading-tight" lang="de">
                    {w.article && <ArticleChip article={w.article} />} {w.german}
                  </span>
                  <span className="block text-[15px] opacity-80">{w.vietnamese}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              setIntro(0);
              setPhase('intro');
            }}
            className={`${secondaryClass} flex-1`}
          >
            Xem lại thẻ
          </button>
          <button type="button" onClick={() => (current.length > 1 ? setPhase('match') : startDrill())} className={`${primaryClass} flex-[2]`}>
            Luyện nhóm này
          </button>
        </div>
      </div>
    );
  }

  const skip = (
    <button type="button" onClick={startType} className="self-center px-2 py-1 text-[14px] font-semibold text-muted underline underline-offset-2">
      Đã nhớ nhóm này, sang gõ luôn
    </button>
  );

  if (phase === 'match') {
    return (
      <div className="flex flex-col gap-3">
        {progress}
        <MatchBoard words={current} seed={hashSeed(`${lessonId}:${group}:match`)} onDone={startDrill} />
        {skip}
      </div>
    );
  }

  if (task) {
    const word = current.find((x) => x.key === task.task.key)!;
    const props = {
      word,
      lessonId,
      tries: task.tries,
      retry: task.tries + 1 < MAX_TRIES,
      onAnswer: (correct: boolean) => {
        drillCorrect.current = correct;
      },
      onNext: nextDrill,
    };
    return (
      <div className="flex flex-col gap-3">
        {progress}
        {task.task.kind === 'spell' ? (
          <SpellTask key={drillDone} {...props} />
        ) : (
          <ChoiceTask key={drillDone} kind={task.task.kind} group={current} lesson={words} {...props} />
        )}
        {skip}
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
          Gõ tiếng Đức{recall.tries > 0 && ' · làm lại'}
        </p>
        <p className="mt-1 text-[28px] font-bold leading-tight">{w.vietnamese}</p>
        <p className="text-[14px] opacity-80">
          {w.posLabel}
          {w.article && ' · gõ kèm mạo từ'}
        </p>
        {hinted ? (
          <p className="mt-2 font-mono text-[20px] tracking-wide" lang="de" aria-label="Gợi ý chữ đầu">
            {letterHint(w.german)}
          </p>
        ) : (
          !answered && (
            <button
              type="button"
              onClick={() => {
                setHinted(true);
                inputRef.current?.focus({ preventScroll: true });
              }}
              className="mt-2 text-[14px] font-semibold underline underline-offset-2"
            >
              Gợi ý chữ đầu
            </button>
          )
        )}
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
