'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { hashSeed, shuffled } from '@/lib/course/grade';
import { spellNext, spellPreview, spellTiles, wordChoices, type DrillKind } from '@/lib/course/words';
import { ARTICLES, type Article } from '@/lib/items/types';
import { ArticleChip } from '../ArticleChip';
import { speakGerman } from '../review/speech';
import { primaryClass, secondaryClass } from '../ui';
import type { WordView } from './WordsStep';

/**
 * Các màn luyện của bước Từ mới (SPEC F11): chỉ để luyện, không tính điểm, không ghi lần ôn.
 */

export function full(w: WordView) {
  return w.article ? `${w.article} ${w.german}` : w.german;
}

const optionClass = 'min-h-14 w-full rounded-[20px] px-4 py-3 text-left outline-2 outline-line';

function optionBg(state: 'idle' | 'right' | 'wrong') {
  return state === 'right' ? 'bg-pastel-sage' : state === 'wrong' ? 'bg-pastel-pink' : 'bg-surface';
}

function Feedback({ correct, retry, onNext }: { correct: boolean; retry: boolean; onNext: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => ref.current?.focus({ preventScroll: true }), []);
  return (
    <>
      <p className="px-1 text-[15px]" role="status">
        {correct ? 'Đúng.' : retry ? 'Chưa đúng. Câu này sẽ được hỏi lại cuối lượt.' : 'Chưa đúng.'}
      </p>
      <button ref={ref} type="button" onClick={onNext} className={primaryClass}>
        Tiếp
      </button>
    </>
  );
}

/** Ghép cặp: chạm một từ Đức rồi chạm nghĩa của nó. Ghép sai thì bỏ chọn, ghép đủ thì sang tiếp. */
export function MatchBoard({ words, seed, onDone }: { words: WordView[]; seed: number; onDone: () => void }) {
  const left = useMemo(() => shuffled(words, seed), [words, seed]);
  const right = useMemo(() => shuffled(words, seed + 1), [words, seed]);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<string | null>(null);
  const [wrong, setWrong] = useState<string | null>(null);
  const done = matched.size === words.length;

  function tapRight(w: WordView) {
    if (!selected || matched.has(w.key)) return;
    if (selected === w.key) {
      setMatched(new Set(matched).add(w.key));
      setSelected(null);
      speakGerman(full(w));
    } else {
      setWrong(w.key);
      setSelected(null);
      setTimeout(() => setWrong(null), 600);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <section className="scribble rounded-block bg-pastel-yellow p-5">
        <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">Ghép cặp</p>
        <p className="mt-1 text-[15px]">Chạm một từ tiếng Đức, rồi chạm nghĩa của nó.</p>
      </section>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          {left.map((w) => {
            const isDone = matched.has(w.key);
            return (
              <button
                key={w.key}
                type="button"
                disabled={isDone}
                onClick={() => {
                  setSelected(w.key);
                  speakGerman(full(w));
                }}
                aria-pressed={selected === w.key}
                className={`min-h-14 rounded-[16px] px-3 py-2 text-left text-[17px] font-semibold outline-2 ${
                  isDone ? 'bg-pastel-sage opacity-60 outline-line' : selected === w.key ? 'bg-pastel-sky outline-ink' : 'bg-surface outline-line'
                }`}
                lang="de"
              >
                {w.article && <ArticleChip article={w.article} />} {w.german}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          {right.map((w) => {
            const isDone = matched.has(w.key);
            return (
              <button
                key={w.key}
                type="button"
                disabled={isDone}
                onClick={() => tapRight(w)}
                className={`min-h-14 rounded-[16px] px-3 py-2 text-left text-[16px] outline-2 outline-line ${
                  isDone ? 'bg-pastel-sage opacity-60' : wrong === w.key ? 'bg-pastel-pink' : 'bg-surface'
                }`}
              >
                {w.vietnamese}
              </button>
            );
          })}
        </div>
      </div>
      {done && (
        <button type="button" onClick={onDone} className={primaryClass}>
          Tiếp
        </button>
      )}
    </div>
  );
}

type ChoiceProps = {
  kind: Exclude<DrillKind, 'spell'>;
  word: WordView;
  group: WordView[];
  lesson: WordView[];
  lessonId: string;
  tries: number;
  retry: boolean;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
};

const CHOICE_TITLE: Record<ChoiceProps['kind'], string> = {
  listen: 'Nghe → chọn nghĩa',
  meaning: 'Chọn nghĩa',
  article: 'Chọn mạo từ',
  choose: 'Chọn từ tiếng Đức',
};

/** Câu chọn một: nghe/nhìn từ Đức chọn nghĩa, chọn mạo từ, hoặc nhìn nghĩa chọn từ Đức. */
export function ChoiceTask({ kind, word, group, lesson, lessonId, tries, retry, onAnswer, onNext }: ChoiceProps) {
  const [picked, setPicked] = useState<string | null>(null);
  const options = useMemo(() => {
    if (kind === 'article') return ARTICLES.map((a) => ({ id: a, article: a as Article | null, label: a }));
    const list = wordChoices(word, group, lesson, hashSeed(`${lessonId}:${kind}:${word.key}:${tries}`));
    return list.map((w) =>
      kind === 'choose' ? { id: w.key, article: w.article, label: w.german } : { id: w.key, article: null, label: w.vietnamese },
    );
  }, [kind, word, group, lesson, lessonId, tries]);
  const answer = kind === 'article' ? word.article! : word.key;

  useEffect(() => {
    if (kind === 'listen') speakGerman(full(word));
  }, [kind, word]);

  function pick(id: string) {
    if (picked) return;
    setPicked(id);
    onAnswer(id === answer);
    if (kind !== 'listen') speakGerman(full(word));
  }

  const revealed = picked !== null;
  return (
    <div className="flex flex-col gap-3">
      <section className="scribble rounded-block bg-pastel-yellow p-5">
        <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">
          {CHOICE_TITLE[kind]}
          {tries > 0 && ' · làm lại'}
        </p>
        {kind === 'listen' ? (
          <>
            <button type="button" onClick={() => speakGerman(full(word))} className={`${secondaryClass} mt-2 w-full`}>
              ▶ Nghe lại
            </button>
            {revealed && (
              <p className="mt-2 text-[24px] font-bold leading-tight" lang="de">
                {word.article && <ArticleChip article={word.article} />} {word.german}
              </p>
            )}
          </>
        ) : kind === 'choose' ? (
          <>
            <p className="mt-1 text-[28px] font-bold leading-tight">{word.vietnamese}</p>
            {word.posLabel && <p className="text-[14px] opacity-80">{word.posLabel}</p>}
          </>
        ) : (
          <>
            <p className="mt-1 text-[28px] font-bold leading-tight" lang="de">
              {kind === 'article' && (revealed ? <ArticleChip article={word.article!} size="lg" /> : '___')}{' '}
              {kind === 'meaning' && word.article && <ArticleChip article={word.article} size="lg" />} {word.german}
            </p>
            {kind === 'article' && <p className="text-[15px] opacity-80">{word.vietnamese}</p>}
          </>
        )}
      </section>
      <div className={kind === 'article' ? 'grid grid-cols-3 gap-2' : 'flex flex-col gap-2'} role="group" aria-label="Các phương án">
        {options.map((o) => {
          const state = !revealed ? 'idle' : o.id === answer ? 'right' : o.id === picked ? 'wrong' : 'idle';
          return (
            <button
              key={o.id}
              type="button"
              disabled={revealed}
              onClick={() => pick(o.id)}
              className={`${optionClass} ${optionBg(state)} ${kind === 'article' ? 'text-center text-[20px] font-semibold' : 'text-[19px]'} ${
                kind === 'choose' ? 'font-semibold' : ''
              }`}
              lang={kind === 'listen' || kind === 'meaning' ? 'vi' : 'de'}
            >
              {kind === 'choose' && o.article && <ArticleChip article={o.article} />} {o.label}
            </button>
          );
        })}
      </div>
      {revealed && <Feedback correct={picked === answer} retry={retry} onNext={onNext} />}
    </div>
  );
}

/** Xếp chữ cái: nhìn nghĩa, chạm các chữ theo thứ tự để ghép thành từ. Chạm sai chữ thì báo ngay và không nhận; đúng khi không chạm sai lần nào. */
export function SpellTask({
  word,
  lessonId,
  tries,
  retry,
  onAnswer,
  onNext,
}: {
  word: WordView;
  lessonId: string;
  tries: number;
  retry: boolean;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
}) {
  const tiles = useMemo(() => spellTiles(word.german, hashSeed(`${lessonId}:spell:${word.key}:${tries}`)), [word, lessonId, tries]);
  const [used, setUsed] = useState<number[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [wrongTile, setWrongTile] = useState<number | null>(null);
  const [result, setResult] = useState<boolean | null>(null);
  const picked = used.map((i) => tiles[i]);

  function finish(ok: boolean) {
    setResult(ok);
    onAnswer(ok);
    speakGerman(full(word));
  }

  function tap(i: number) {
    if (result !== null || used.includes(i)) return;
    if (tiles[i] !== spellNext(word.german, picked)) {
      setMistakes((n) => n + 1);
      setWrongTile(i);
      setTimeout(() => setWrongTile((t) => (t === i ? null : t)), 500);
      return;
    }
    const next = [...used, i];
    setUsed(next);
    if (next.length === tiles.length) finish(mistakes === 0);
  }

  return (
    <div className="flex flex-col gap-3">
      <section className="scribble rounded-block bg-pastel-yellow p-5">
        <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">
          Xếp chữ cái{tries > 0 && ' · làm lại'}
        </p>
        <p className="mt-1 text-[28px] font-bold leading-tight">{word.vietnamese}</p>
        <p
          className="mt-3 rounded-[16px] bg-surface px-3 py-2 font-mono text-[24px] tracking-[.12em] break-all"
          lang="de"
          aria-label="Chữ đã xếp"
        >
          {word.article && <ArticleChip article={word.article} />} {spellPreview(word.german, picked)}
        </p>
        {mistakes > 0 && result === null && <p className="mt-2 text-[14px]">Chạm sai {mistakes} lần.</p>}
      </section>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Các chữ cái">
        {tiles.map((ch, i) => (
          <button
            key={i}
            type="button"
            disabled={used.includes(i) || result !== null}
            onClick={() => tap(i)}
            className={`h-12 min-w-12 rounded-[14px] px-3 text-[22px] font-semibold outline-2 outline-line disabled:opacity-30 ${
              wrongTile === i ? 'bg-pastel-pink' : 'bg-surface'
            }`}
            lang="de"
          >
            {ch}
          </button>
        ))}
      </div>
      {result === null ? (
        <button type="button" onClick={() => finish(false)} className={secondaryClass}>
          Không nhớ, xem đáp án
        </button>
      ) : (
        <>
          {!result && (
            <p className="px-1 text-[20px] font-semibold" lang="de">
              Đáp án: {full(word)}
            </p>
          )}
          <Feedback correct={result} retry={retry} onNext={onNext} />
        </>
      )}
    </div>
  );
}
