'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { submitReviewAction, undoReviewAction } from '@/app/(app)/review/actions';
import { checkAnswer, suggestRating, type AnswerFlag, type CheckResult } from '@/lib/answer-check';
import type { SessionCard } from '@/lib/review/load';
import { viewCard, type CardView } from '@/lib/review-card';
import { formatInterval, previewIntervals, RATING_VI, type CardState, type Rating } from '@/lib/scheduler';
import { ArticleChip } from '../ArticleChip';
import { UmlautBar } from '../UmlautBar';
import { errorBoxClass, primaryClass, secondaryClass } from '../ui';
import { canSpeak, speakGerman } from './speech';

const FLAG_VI: Record<AnswerFlag, string> = {
  umlaut_fallback: 'Viết ae/oe/ue thay cho ä/ö/ü',
  eszett_fallback: 'Viết ss thay cho ß',
  capitalization: 'Sai chữ hoa/thường',
  wrong_article: 'Sai mạo từ',
  missing_article: 'Thiếu mạo từ',
};

/** Thẻ trả lời sai quay lại sau ít nhất ngần này thẻ (SPEC F3: thẻ vừa sai được quay lại trong phiên). */
const REQUEUE_GAP = 3;
const MAX_RETURNS = 3;

type Answered = {
  result: CheckResult;
  given: string;
  responseMs: number;
  suggested: Rating;
};

type UndoEntry = { card: SessionCard; logId: string; before: CardState; correct: boolean };

export function ReviewSession({ initialCards, retention }: { initialCards: SessionCard[]; retention: number }) {
  const [queue, setQueue] = useState<SessionCard[]>(initialCards);
  const [states, setStates] = useState<Record<string, CardState>>(() =>
    Object.fromEntries(initialCards.map((c) => [c.id, c.state])),
  );
  const [answered, setAnswered] = useState<Answered | null>(null);
  const [input, setInput] = useState('');
  const [done, setDone] = useState({ count: 0, correct: 0 });
  const [undo, setUndo] = useState<UndoEntry | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(0);
  // Tăng mỗi lượt để thẻ sai quay lại ngay (cùng object) vẫn được đặt lại.
  const [turn, setTurn] = useState(0);
  const returns = useRef(new Map<string, number>());
  const shownAt = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const card = queue[0] ?? null;
  const view: CardView | null = useMemo(() => (card ? viewCard(card.kind, card.item) : null), [card]);
  const total = done.count + queue.length;

  // Mỗi thẻ hiện ra: bấm giờ, thẻ nghe thì tự phát lần đầu.
  useEffect(() => {
    if (!card) return;
    shownAt.current = performance.now();
    if (view?.face.kind === 'audio_de') speakGerman(view.face.speak);
    inputRef.current?.focus();
  }, [card, view, turn]);

  function check(giveUp = false) {
    if (!card || !view || answered) return;
    const responseMs = Math.round(performance.now() - shownAt.current);
    const result = giveUp
      ? { correct: false, flags: [], matched: null }
      : checkAnswer(input, view.accepted, view.article);
    const suggested = suggestRating({
      correct: result.correct,
      flags: result.flags,
      usedHint: false,
      responseMs,
      state: states[card.id]?.state ?? card.state.state,
    });
    setAnswered({ result, given: giveUp ? '' : input, responseMs, suggested });
  }

  const rate = useCallback(
    (rating: Rating) => {
      if (!card || !answered) return;
      const current = card;
      const { result, given, responseMs, suggested } = answered;

      // Chuyển thẻ ngay, lưu chạy nền để không có trễ giữa các thẻ.
      setQueue((q) => {
        const rest = q.slice(1);
        const count = returns.current.get(current.id) ?? 0;
        if (rating === 1 && count < MAX_RETURNS) {
          returns.current.set(current.id, count + 1);
          const at = Math.min(REQUEUE_GAP, rest.length);
          return [...rest.slice(0, at), current, ...rest.slice(at)];
        }
        return rest;
      });
      setDone((d) => ({ count: d.count + 1, correct: d.correct + (result.correct ? 1 : 0) }));
      setUndo(null);
      setTurn((t) => t + 1);
      setInput('');
      setAnswered(null);
      setSaving((n) => n + 1);

      submitReviewAction({
        cardId: current.id,
        rating,
        suggested,
        answer: given,
        correct: result.correct,
        flags: result.flags,
        responseMs,
      })
        .then((res) => {
          if (res.ok) {
            setStates((s) => ({ ...s, [current.id]: res.next }));
            setUndo({ card: current, logId: res.logId, before: res.before, correct: result.correct });
            setError(null);
          } else {
            setError(`${res.error} Thẻ được đưa lại vào phiên.`);
            setQueue((q) => (q.some((c) => c.id === current.id) ? q : [...q, current]));
            setDone((d) => ({ count: d.count - 1, correct: d.correct - (result.correct ? 1 : 0) }));
          }
        })
        .catch(() => {
          setError('Mất kết nối, chưa lưu được. Thẻ được đưa lại vào phiên.');
          setQueue((q) => (q.some((c) => c.id === current.id) ? q : [...q, current]));
          setDone((d) => ({ count: d.count - 1, correct: d.correct - (result.correct ? 1 : 0) }));
        })
        .finally(() => setSaving((n) => n - 1));
    },
    [card, answered],
  );

  async function undoLast() {
    if (!undo) return;
    const entry = undo;
    setUndo(null);
    const res = await undoReviewAction({ logId: entry.logId, before: entry.before });
    if (!res.ok) {
      setError(res.error);
      return;
    }
    setStates((s) => ({ ...s, [entry.card.id]: entry.before }));
    setTurn((t) => t + 1);
    setInput('');
    setAnswered(null);
    setQueue((q) => [entry.card, ...q.filter((c) => c.id !== entry.card.id)]);
    setDone((d) => ({ count: d.count - 1, correct: d.correct - (entry.correct ? 1 : 0) }));
    const count = returns.current.get(entry.card.id) ?? 0;
    if (count > 0) returns.current.set(entry.card.id, count - 1);
  }

  // Phím tắt ở bước chấm: Enter = rating đề xuất, 1–4 = chọn rating.
  useEffect(() => {
    if (!answered) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Enter') {
        e.preventDefault();
        rate(answered!.suggested);
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        rate(Number(e.key) as Rating);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [answered, rate]);

  if (!card || !view) {
    return (
      <SessionEnd
        done={done}
        saving={saving}
        error={error}
        onUndo={undo ? undoLast : null}
        empty={initialCards.length === 0}
      />
    );
  }

  const intervals = answered ? previewIntervals(states[card.id] ?? card.state, new Date(), { retention }) : null;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 px-1">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface" aria-hidden>
          <div className="h-full rounded-full bg-primary" style={{ width: `${total ? (done.count / total) * 100 : 0}%` }} />
        </div>
        <span className="text-[13px] font-semibold text-muted">
          {done.count}/{total}
        </span>
      </div>

      <section className="scribble rounded-block bg-pastel-yellow p-5">
        <CardFront view={view} isNew={(states[card.id] ?? card.state).state === 0} />
      </section>

      {!answered ? (
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            check();
          }}
        >
          <UmlautBar targetId="review-answer" />
          <input
            id="review-answer"
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
            placeholder={view.article ? 'der/die/das + từ' : 'Gõ đáp án'}
            className="h-14 w-full rounded-[20px] bg-surface px-4 text-[22px] outline-2 outline-line focus:outline-ink"
          />
          <div className="flex gap-2">
            <button type="button" onClick={() => check(true)} className={`${secondaryClass} flex-1`}>
              Không nhớ
            </button>
            <button type="submit" className={`${primaryClass} flex-[2]`}>
              Kiểm tra
            </button>
          </div>
        </form>
      ) : (
        <ResultPanel
          card={card}
          view={view}
          answered={answered}
          intervals={intervals!}
          onRate={rate}
        />
      )}

      {error && (
        <p role="alert" className={errorBoxClass}>
          {error}
        </p>
      )}
      {undo && !answered && (
        <button type="button" onClick={undoLast} className={`${secondaryClass} self-center`}>
          Hoàn tác lần chấm trước
        </button>
      )}
    </div>
  );
}

function CardFront({ view, isNew }: { view: CardView; isNew: boolean }) {
  const face = view.face;
  return (
    <div className="flex min-h-[132px] flex-col justify-center gap-2">
      <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">
        {face.kind === 'vi_de' ? 'Việt → Đức' : face.kind === 'audio_de' ? 'Nghe và viết' : 'Điền chỗ trống'}
        {isNew && ' · thẻ mới'}
      </p>
      {face.kind === 'vi_de' && (
        <>
          <p className="text-[28px] font-bold leading-tight">{face.vietnamese}</p>
          <p className="text-[14px] opacity-80">
            {[face.posLabel, face.level].filter(Boolean).join(' · ')}
            {view.article && ' · gõ kèm mạo từ'}
          </p>
        </>
      )}
      {face.kind === 'audio_de' && (
        <button
          type="button"
          onClick={() => speakGerman(face.speak)}
          disabled={!canSpeak()}
          className="flex h-16 items-center justify-center gap-2 rounded-full bg-primary text-[18px] font-semibold text-on-primary"
        >
          ▶ Nghe lại
        </button>
      )}
      {face.kind === 'cloze' && (
        <>
          <p className="text-[28px] font-semibold leading-snug" lang="de">
            {face.before}
            <span className="mx-1 inline-block min-w-16 border-b-4 border-ink align-baseline">&nbsp;</span>
            {face.after}
          </p>
          {face.translation && <p className="text-[15px] opacity-80">{face.translation}</p>}
        </>
      )}
    </div>
  );
}

function ResultPanel({
  card,
  view,
  answered,
  intervals,
  onRate,
}: {
  card: SessionCard;
  view: CardView;
  answered: Answered;
  intervals: Record<Rating, number>;
  onRate: (rating: Rating) => void;
}) {
  const { result, given, suggested } = answered;
  return (
    <div className="flex flex-col gap-3">
      <div className={`rounded-[20px] p-4 ${result.correct ? 'bg-pastel-sage' : 'bg-pastel-pink'}`} role="status">
        <p className="text-[15px] font-bold">{result.correct ? 'Đúng' : 'Chưa đúng'}</p>
        {given && !result.correct && (
          <p className="text-[16px] line-through opacity-70" lang="de">
            {given}
          </p>
        )}
        <p className="text-[26px] font-semibold leading-tight" lang="de">
          {view.article && <ArticleChip article={view.article} size="lg" />}{' '}
          {view.article ? view.answer.slice(view.article.length + 1) : view.answer}
        </p>
        {result.flags.length > 0 && (
          <ul className="mt-1 text-[14px]">
            {result.flags.map((f) => (
              <li key={f}>• {FLAG_VI[f]}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="rounded-[20px] bg-surface p-4">
        {card.item.plural && view.article && (
          <p className="text-[14px] text-muted" lang="de">
            Số nhiều: {card.item.plural}
          </p>
        )}
        <p className="text-[15px]">{card.item.vietnamese}</p>
        {view.example && (
          <p className="mt-2 text-[17px]" lang="de">
            {view.example}
          </p>
        )}
        {view.exampleVi && <p className="text-[14px] text-muted">{view.exampleVi}</p>}
        {card.item.grammar_note_vi && <p className="mt-2 text-[14px] text-muted">{card.item.grammar_note_vi}</p>}
        <div className="mt-3 flex gap-2">
          {canSpeak() && (
            <button type="button" onClick={() => speakGerman(view.speak)} className={`${secondaryClass} flex-1`}>
              ▶ Nghe
            </button>
          )}
          <Link href={`/tutor?card=${card.id}`} className={`${secondaryClass} flex-1`}>
            Hỏi gia sư
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2" role="group" aria-label="Chấm mức nhớ">
        {([1, 2, 3, 4] as const).map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => onRate(r)}
            className={`flex h-16 flex-col items-center justify-center rounded-[20px] text-[15px] font-semibold ${
              r === suggested ? 'bg-primary text-on-primary' : 'bg-surface outline-1 outline-line'
            }`}
          >
            {RATING_VI[r]}
            <span className="text-[11px] font-normal opacity-80">{formatInterval(intervals[r])}</span>
          </button>
        ))}
      </div>
      <p className="text-center text-[12px] text-muted">Enter để chọn mức đề xuất</p>
    </div>
  );
}

function SessionEnd({
  done,
  saving,
  error,
  onUndo,
  empty,
}: {
  done: { count: number; correct: number };
  saving: number;
  error: string | null;
  onUndo: (() => void) | null;
  empty: boolean;
}) {
  return (
    <section className="scribble flex flex-col gap-3 rounded-block bg-pastel-yellow p-6">
      {empty ? (
        <>
          <p className="text-[22px] font-bold">Không còn thẻ đến hạn</p>
          <p className="text-[15px] opacity-80">Thêm mục mới hoặc quay lại sau.</p>
          <Link href="/add" className={primaryClass}>
            Thêm mục
          </Link>
        </>
      ) : (
        <>
          <p className="text-[22px] font-bold">Xong phiên ôn</p>
          <p className="text-[15px]">
            {done.count} lần trả lời · đúng {done.count ? Math.round((done.correct / done.count) * 100) : 0}%
          </p>
          {saving > 0 && <p className="text-[14px] opacity-80">Đang lưu {saving} lần chấm…</p>}
          {error && <p className={errorBoxClass}>{error}</p>}
          {onUndo && (
            <button type="button" onClick={onUndo} className={secondaryClass}>
              Hoàn tác lần chấm cuối
            </button>
          )}
          <Link href="/" className={primaryClass}>
            Về Hôm nay
          </Link>
        </>
      )}
    </section>
  );
}
