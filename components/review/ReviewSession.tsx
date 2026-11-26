'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { judgeErrorFixAction, submitReviewAction, undoReviewAction, type SubmitInput } from '@/app/(app)/review/actions';
import { checkAnswer, suggestRating, type AnswerFlag, type CheckResult } from '@/lib/answer-check';
import type { SessionCard } from '@/lib/review/load';
import { viewCard, viewErrorFix, type CardView } from '@/lib/review-card';
import { formatInterval, previewIntervals, RATING_VI, type CardState, type Rating } from '@/lib/scheduler';
import { ArticleChip } from '../ArticleChip';
import { Celebration } from '../fx/Celebration';
import { Feedback } from '../fx/Feedback';
import { Icon } from '../Icon';
import { listenButtonClass } from '../learn/ExerciseCard';
import { Bello } from '../mascot/Bello';
import { BelloHint } from '../mascot/BelloHint';
import { ProgressBar } from '../ProgressBar';
import { UmlautBar } from '../UmlautBar';
import { blockLabelClass, errorBoxClass, primaryClass, secondaryClass } from '../ui';
import { canSpeak, speakGerman } from './speech';

const FLAG_VI: Record<AnswerFlag, string> = {
  umlaut_fallback: 'Viết ae/oe/ue thay cho ä/ö/ü',
  eszett_fallback: 'Viết ss thay cho ß',
  capitalization: 'Sai chữ hoa/thường',
  wrong_article: 'Sai mạo từ',
  missing_article: 'Thiếu mạo từ',
};

/** Màu chữ nút chấm: Lại đỏ, Khó cam, Được xanh lá, Dễ xanh dương; nút đề xuất nền đen. */
const RATE_TONE: Record<Rating, string> = {
  1: 'text-bad',
  2: 'text-orange-shade',
  3: 'text-ok',
  4: 'text-blue',
};

/** Thẻ trả lời sai quay lại sau ít nhất ngần này thẻ (SPEC F3: thẻ vừa sai được quay lại trong phiên). */
const REQUEUE_GAP = 3;
const MAX_RETURNS = 3;

type Answered = {
  result: CheckResult;
  given: string;
  responseMs: number;
  suggested: Rating;
  usedHint: boolean;
  /** Nhận xét của AI (thẻ error_fix khi câu khác đáp án đã lưu). */
  note?: string;
};

type UndoEntry = { card: SessionCard; logId: string; before: CardState; correct: boolean };

export function ReviewSession({ initialCards, retention }: { initialCards: SessionCard[]; retention: number }) {
  const [queue, setQueue] = useState<SessionCard[]>(initialCards);
  const [states, setStates] = useState<Record<string, CardState>>(() =>
    Object.fromEntries(initialCards.map((c) => [c.id, c.state])),
  );
  const [answered, setAnswered] = useState<Answered | null>(null);
  // null = chưa gõ gì: thẻ sửa lỗi điền sẵn câu sai để người học sửa tại chỗ.
  const [input, setInput] = useState<string | null>(null);
  const [hintShown, setHintShown] = useState(false);
  const [judging, setJudging] = useState(false);
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
  const view: CardView | null = useMemo(() => {
    if (!card) return null;
    if (card.kind === 'error_fix') return card.error ? viewErrorFix(card.error) : null;
    return viewCard(card.kind, card.item);
  }, [card]);
  const value = input ?? (view?.face.kind === 'error_fix' ? view.face.wrong : '');
  const total = done.count + queue.length;

  // Mỗi thẻ hiện ra: bấm giờ, thẻ nghe thì tự phát lần đầu.
  useEffect(() => {
    if (!card) return;
    shownAt.current = performance.now();
    if (view?.face.kind === 'audio_de') speakGerman(view.face.speak);
    inputRef.current?.focus();
  }, [card, view, turn]);

  async function check(giveUp = false) {
    if (!card || !view || answered || judging) return;
    const responseMs = Math.round(performance.now() - shownAt.current);
    let result: CheckResult = giveUp
      ? { correct: false, flags: [], matched: null }
      : checkAnswer(value, view.accepted, view.article);
    let note: string | undefined;

    // Thẻ sửa lỗi: khác đáp án đã lưu thì nhờ AI phán (P4) trước khi tính sai.
    if (!giveUp && !result.correct && view.face.kind === 'error_fix' && card.error && value.trim()) {
      setJudging(true);
      try {
        const judged = await judgeErrorFixAction({ cardId: card.id, wrong: card.error.wrong, answer: value });
        if (judged.ok) {
          result = { correct: judged.correct, flags: [], matched: judged.correct ? value.trim() : null };
          note = [judged.note, ...judged.otherErrors].join(' ');
        } else {
          note = judged.error;
        }
      } catch {
        note = 'Không gọi được AI để phán câu này.';
      } finally {
        setJudging(false);
      }
    }

    const suggested = suggestRating({
      correct: result.correct,
      flags: result.flags,
      usedHint: hintShown,
      responseMs,
      state: states[card.id]?.state ?? card.state.state,
    });
    setAnswered({ result, given: giveUp ? '' : value, responseMs, suggested, usedHint: hintShown, note });
  }

  const rate = useCallback(
    (rating: Rating) => {
      if (!card || !answered) return;
      const current = card;
      const { result, given, responseMs, suggested, usedHint } = answered;
      const flags: SubmitInput['flags'] = usedHint ? [...result.flags, 'used_hint'] : [...result.flags];

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
      setInput(null);
      setHintShown(false);
      setAnswered(null);
      setSaving((n) => n + 1);

      submitReviewAction({
        cardId: current.id,
        rating,
        suggested,
        answer: given,
        correct: result.correct,
        flags,
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
    setInput(null);
    setHintShown(false);
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
        <ProgressBar value={done.count} max={total} className="flex-1" />
        <span className="text-[14px] font-extrabold tabular-nums text-muted">
          {done.count}/{total}
        </span>
      </div>

      <section
        key={`${card.id}-${turn}-${answered ? (answered.result.correct ? 'ok' : 'bad') : 'ask'}`}
        className={`rounded-block bg-surface p-5 ${answered && !answered.result.correct ? 'animate-shake' : 'animate-pop-in'}`}
      >
        <CardFront
          view={view}
          isNew={(states[card.id] ?? card.state).state === 0}
          hintShown={hintShown || Boolean(answered)}
          onHint={() => setHintShown(true)}
        />
      </section>

      {!answered ? (
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            void check();
          }}
        >
          <UmlautBar targetId="review-answer" />
          <input
            id="review-answer"
            ref={inputRef}
            value={value}
            onChange={(e) => setInput(e.target.value)}
            lang="de"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="done"
            aria-label="Đáp án tiếng Đức"
            placeholder={view.article ? 'der/die/das + từ' : view.face.kind === 'error_fix' ? 'Gõ câu đã sửa' : 'Gõ đáp án'}
            className="h-15 w-full rounded-xl bg-surface px-4 text-[22px] font-medium outline-[1.5px] outline-line transition-[outline-color] placeholder:font-normal placeholder:text-muted/80"
          />
          <div className="flex gap-2">
            <button type="button" onClick={() => void check(true)} disabled={judging} className={`${secondaryClass} flex-1`}>
              Không nhớ
            </button>
            <button type="submit" disabled={judging} className={`${primaryClass} flex-[1.5]`}>
              {judging ? 'AI đang phán…' : 'Kiểm tra'}
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

function CardFront({
  view,
  isNew,
  hintShown,
  onHint,
}: {
  view: CardView;
  isNew: boolean;
  hintShown: boolean;
  onHint: () => void;
}) {
  const face = view.face;
  return (
    <div className="flex min-h-[132px] flex-col justify-center gap-2">
      <p className={`${blockLabelClass} flex items-center gap-2`}>
        {{ vi_de: 'Việt → Đức', audio_de: 'Nghe và viết', cloze: 'Điền chỗ trống', error_fix: 'Sửa câu sai' }[face.kind]}
        {isNew && <span className="rounded-full bg-pastel-lilac px-2 py-0.5 text-[11px] font-semibold text-purple">Thẻ mới</span>}
      </p>
      {face.kind === 'vi_de' && (
        <>
          <p className="text-[30px] font-extrabold leading-tight">{face.vietnamese}</p>
          <p className="text-[14px] text-muted">
            {[face.posLabel, face.level].filter(Boolean).join(' · ')}
            {view.article && ' · gõ kèm mạo từ'}
          </p>
        </>
      )}
      {face.kind === 'audio_de' && (
        <button type="button" onClick={() => speakGerman(face.speak)} disabled={!canSpeak()} className={listenButtonClass}>
          <Icon name="speaker" size={26} strokeWidth={2.6} />
          Nghe lại
        </button>
      )}
      {face.kind === 'error_fix' && (
        <>
          <p className="text-[24px] font-semibold leading-snug" lang="de">
            {face.wrong}
          </p>
          {hintShown ? (
            <BelloHint>Lỗi: {face.title}</BelloHint>
          ) : (
            <button
              type="button"
              onClick={onHint}
              className="flex items-center gap-1.5 self-start rounded-full bg-surface px-4 py-2 text-[14px] font-semibold outline-[1.5px] outline-line"
            >
              <Icon name="bulb" size={18} strokeWidth={2.2} className="text-gold-shade" />
              Gợi ý
            </button>
          )}
        </>
      )}
      {face.kind === 'cloze' && (
        <>
          <p className="text-[28px] font-semibold leading-snug" lang="de">
            {face.before}
            <span className="mx-1 inline-block min-w-16 rounded-sm border-b-4 border-blue align-baseline">&nbsp;</span>
            {face.after}
          </p>
          {face.translation && <p className="text-[15px] text-muted">{face.translation}</p>}
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
  const { result, given, suggested, note } = answered;
  const isErrorFix = view.face.kind === 'error_fix';
  return (
    <div className="flex flex-col gap-3">
      <Feedback correct={result.correct} seed={card.id}>
        {given && !result.correct && (
          <p className="text-[16px] font-semibold line-through opacity-60" lang="de">
            {given}
          </p>
        )}
        <p className="text-[26px] font-bold leading-tight" lang="de">
          {view.article && <ArticleChip article={view.article} size="lg" />}{' '}
          {view.article ? view.answer.slice(view.article.length + 1) : view.answer}
        </p>
        {result.flags.length > 0 && (
          <ul className="text-[14px] font-medium">
            {result.flags.map((f) => (
              <li key={f}>• {FLAG_VI[f]}</li>
            ))}
          </ul>
        )}
        {note && <p className="text-[14px] font-medium">{note}</p>}
      </Feedback>

      <div className="rounded-block bg-surface p-4">
        {card.item.plural && view.article && (
          <p className="text-[14px] text-muted" lang="de">
            Số nhiều: {card.item.plural}
          </p>
        )}
        <p className="text-[15px]">{isErrorFix ? `Lỗi: ${card.item.vietnamese}` : card.item.vietnamese}</p>
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
              <Icon name="speaker" size={18} strokeWidth={2.6} />
              Nghe
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
            className={`flex h-16 flex-col items-center justify-center rounded-xl text-[15px] font-bold ${
              r === suggested ? 'bg-primary text-on-primary' : `bg-surface outline-[1.5px] outline-line ${RATE_TONE[r]}`
            }`}
          >
            {RATING_VI[r]}
            <span className="text-[11px] font-medium opacity-75">{formatInterval(intervals[r])}</span>
          </button>
        ))}
      </div>
      <p className="text-center text-[12px] text-muted">Enter để chọn mức đề xuất (nút màu đen)</p>
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
    <>
      {empty ? (
        <section className="flex flex-col items-center gap-3 pt-6 text-center">
          <div className="w-full rounded-block bg-pastel-sage px-6 pt-2">
            <Bello state="sleep" className="mx-auto h-36 w-auto max-w-full" />
          </div>
          <p className="text-[24px] font-extrabold">Không còn thẻ đến hạn</p>
          <p className="text-[15px] font-medium text-muted">Học bài mới để có thêm từ, hoặc quay lại sau.</p>
          <div className="mt-2 flex w-full flex-col gap-3">
            <Link href="/learn" className={primaryClass}>
              Học bài mới
            </Link>
            <Link href="/add" className={secondaryClass}>
              Thêm mục
            </Link>
          </div>
        </section>
      ) : (
        <Celebration
          title="Xong phiên ôn!"
          party={done.count > 0}
          bello="sleep"
          subtitle={<span lang="de">Weiter so!</span>}
          stats={[
            { label: 'Lần trả lời', value: String(done.count), icon: 'cards', tone: 'gold' },
            { label: 'Chính xác', value: `${done.count ? Math.round((done.correct / done.count) * 100) : 0}%`, icon: 'target', tone: 'green' },
          ]}
        >
          {saving > 0 && <p className="text-center text-[14px] font-semibold text-muted">Đang lưu {saving} lần chấm…</p>}
          {error && <p className={errorBoxClass}>{error}</p>}
          {onUndo && (
            <button type="button" onClick={onUndo} className={secondaryClass}>
              Hoàn tác lần chấm cuối
            </button>
          )}
          <Link href="/" className={primaryClass}>
            Về Hôm nay
          </Link>
        </Celebration>
      )}
    </>
  );
}
