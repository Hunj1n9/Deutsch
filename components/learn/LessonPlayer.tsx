'use client';

import Link from 'next/link';
import { useRef, useState, useTransition } from 'react';
import { restartLessonAction, saveStepAction } from '@/app/(app)/learn/actions';
import { LESSON_STEPS, STEP_VI, SUMMARY_STEP, type GrammarPoint, type Lesson } from '@/lib/course/types';
import type { BelloItemId } from '@/lib/bello-items';
import { Celebration } from '../fx/Celebration';
import { Icon } from '../Icon';
import { Bello } from '../mascot/Bello';
import { errorBoxClass, noticeBoxClass, primaryClass, secondaryClass } from '../ui';
import { WritingChecker } from '../write/WritingChecker';
import { DialogueStep } from './DialogueStep';
import { GrammarStep } from './GrammarStep';
import { WordsStep, type WordView } from './WordsStep';
import { learnHref } from '@/lib/course/position';

const REDO_BELOW = 0.7;

/**
 * Trình làm bài (SPEC F11): 6 bước, lưu bước đang làm để học tiếp; điểm = số bài tập đúng ngay lần đầu.
 */
export function LessonPlayer({
  lesson,
  point,
  words,
  itemCount,
  initial,
  next,
}: {
  lesson: Lesson;
  point: GrammarPoint | null;
  words: WordView[];
  itemCount: number;
  initial: { step: number; score: number; total: number; completed: boolean };
  next: { href: string; label: string } | null;
}) {
  const [step, setStep] = useState(initial.step);
  const [score, setScore] = useState({ right: initial.score, total: initial.total });
  const [errors, setErrors] = useState(0);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [newItems, setNewItems] = useState<BelloItemId[]>([]);
  const [pending, startTransition] = useTransition();
  // Điểm giữ ở ref để lưu được ngay khi chuyển bước; state chỉ để hiển thị.
  const scoreRef = useRef(score);

  function addScore(correct: boolean) {
    const s = scoreRef.current;
    scoreRef.current = { right: s.right + (correct ? 1 : 0), total: s.total + 1 };
    setScore(scoreRef.current);
  }

  function goTo(nextStep: number) {
    setStep(nextStep);
    window.scrollTo({ top: 0 });
    const s = scoreRef.current;
    void saveStepAction({ lessonId: lesson.id, step: nextStep, score: s.right, total: s.total })
      .then((r) => {
        setSaveError(r.ok ? null : r.error);
        if (r.ok && r.newItems.length) setNewItems(r.newItems);
      })
      .catch(() => setSaveError('Không lưu được tiến độ bài. Kiểm tra mạng.'));
  }

  function restart() {
    startTransition(async () => {
      await restartLessonAction(lesson.id);
      scoreRef.current = { right: 0, total: 0 };
      setScore(scoreRef.current);
      setErrors(0);
      setStep(0);
    });
  }

  const stepName = LESSON_STEPS[step];
  const good = score.total === 0 || score.right / score.total >= REDO_BELOW;

  return (
    <>
      <header className="mb-3 mt-2 flex items-center gap-3">
        <Link
          href={learnHref(lesson.id)}
          aria-label="Thoát bài (đã lưu bước đang làm)"
          className="grid size-11 shrink-0 place-items-center rounded-full bg-surface outline-[1.5px] outline-line"
        >
          <Icon name="x" strokeWidth={2.4} />
        </Link>
        <div className="min-w-0 flex-1">
          <p className="text-[12px] font-medium text-muted">
            {lesson.id.toUpperCase()} · {STEP_VI[stepName]}
          </p>
          <h1 className="truncate text-[19px] font-extrabold leading-tight">{lesson.title_vi}</h1>
        </div>
      </header>
      {/* Thanh bước chia đoạn như Brilliant: đoạn xong tô xanh, đoạn đang làm tô một nửa. */}
      <ol className="mb-1 flex gap-1.5" aria-label="Các bước của bài">
        {LESSON_STEPS.map((s, i) => (
          <li key={s} aria-current={i === step ? 'step' : undefined} className="h-2 flex-1 overflow-hidden rounded-full bg-line">
            <span
              className="block h-full rounded-full bg-green transition-[width] duration-700 ease-[var(--ease-out-soft)]"
              style={{ width: i < step ? '100%' : i === step ? '40%' : '0%' }}
            />
            <span className="sr-only">{STEP_VI[s]}</span>
          </li>
        ))}
      </ol>
      <p className="mb-4 text-[12px] font-medium text-muted">
        Bước {step + 1}/{LESSON_STEPS.length}: {STEP_VI[stepName]}
      </p>

      {stepName === 'goal' && (
        <div className="flex flex-col gap-3">
          <section className="overflow-hidden rounded-block bg-surface">
            <div className="bg-pastel-sky px-6 pt-2">
              <Bello state="energetic" className="mx-auto h-36 w-auto max-w-full" />
            </div>
            <div className="p-5">
              <p className="text-[13px] font-semibold text-muted" lang="de">
                Los geht&apos;s!
              </p>
              <p className="mt-1 text-[21px] font-extrabold leading-snug">Sau bài này bạn có thể: {lesson.goal_vi}</p>
            </div>
          </section>
          <section className="rounded-block bg-surface p-5">
            <p className="text-[13px] font-semibold text-muted">Trong bài này</p>
            <ul className="stagger mt-3 flex flex-col gap-3 text-[15px] font-medium">
              <GoalRow icon="cards" tone="bg-gold text-ink!">
                {words.length} từ và cụm từ mới
              </GoalRow>
              <GoalRow icon="book" tone="bg-blue">
                Ngữ pháp: {point?.title_vi}
              </GoalRow>
              <GoalRow icon="chat" tone="bg-green">
                Hội thoại „{lesson.dialogue.title_de}“, nghe, chép và nói theo
              </GoalRow>
              <GoalRow icon="pen" tone="bg-purple">
                Viết vài câu và được AI sửa
              </GoalRow>
            </ul>
            <p className="mt-4 text-[14px] font-semibold text-muted">Khoảng 25–40 phút. Thoát giữa chừng thì lần sau học tiếp từ đầu bước đang làm.</p>
          </section>
          <button type="button" onClick={() => goTo(1)} className={primaryClass}>
            Bắt đầu
          </button>
        </div>
      )}

      {stepName === 'words' && <WordsStep lessonId={lesson.id} words={words} onScore={addScore} onDone={() => goTo(2)} onSaveError={setSaveError} />}

      {stepName === 'grammar' && (
        <GrammarStep lesson={lesson} point={point} onScore={addScore} onError={() => setErrors((n) => n + 1)} onDone={() => goTo(3)} />
      )}

      {stepName === 'dialogue' && <DialogueStep lesson={lesson} onScore={addScore} onDone={() => goTo(4)} />}

      {stepName === 'writing' && (
        <div className="flex flex-col gap-4">
          <p className={noticeBoxClass}>
            <b>Vận dụng:</b> {lesson.writing_prompt_vi} AI gạch chân chỗ sai để bạn tự sửa trước; lỗi được ghi vào sổ lỗi.
          </p>
          <WritingChecker initialPrompt={lesson.writing_prompt_vi} />
          <div className="flex gap-2">
            <button type="button" onClick={() => goTo(SUMMARY_STEP)} className={`${secondaryClass} flex-1`}>
              Bỏ qua
            </button>
            <button type="button" onClick={() => goTo(SUMMARY_STEP)} className={`${primaryClass} flex-[1.5]`}>
              Xong, tổng kết
            </button>
          </div>
        </div>
      )}

      {stepName === 'summary' && (
        <div className="flex flex-col gap-3">
          <Celebration
            title={good ? 'Bài học hoàn thành!' : 'Xong bài rồi!'}
            party={good}
            newItems={newItems}
            subtitle={<span lang="de">{good ? 'Ausgezeichnet!' : 'Nicht aufgeben!'}</span>}
            stats={[
              { label: 'Đúng ngay', value: `${score.right}/${score.total}`, icon: 'check', tone: 'green' },
              { label: 'Chính xác', value: `${score.total ? Math.round((score.right / score.total) * 100) : 100}%`, icon: 'target', tone: 'gold' },
              { label: 'Mục mới', value: String(itemCount), icon: 'cards', tone: 'blue' },
            ]}
          />
          <section className="rounded-block bg-surface p-4">
            <ul className="flex flex-col gap-1 text-[14px] font-semibold">
              <li>• {itemCount} mục của bài đã vào kho; thẻ Việt→Đức đã vào lịch ôn, các thẻ nghe và điền chỗ trống vào dần theo giới hạn thẻ mới</li>
              {errors > 0 && <li>• {errors} lỗi mới vào sổ lỗi</li>}
            </ul>
          </section>
          {score.total > 0 && score.right / score.total < REDO_BELOW && (
            <p className={noticeBoxClass}>Điểm dưới 70%: nên làm lại bài này (hoặc ôn thẻ) trước khi sang bài mới.</p>
          )}
          {next && (
            <Link href={next.href} className={primaryClass}>
              {next.label}
              <Icon name="arrow" strokeWidth={2.8} />
            </Link>
          )}
          <div className="flex gap-2">
            <button type="button" onClick={restart} disabled={pending} className={`${secondaryClass} flex-1`}>
              Làm lại bài
            </button>
            <Link href="/review" className={`${secondaryClass} flex-1`}>
              Ôn thẻ
            </Link>
          </div>
        </div>
      )}

      {saveError && (
        <p role="alert" className={`${errorBoxClass} mt-3`}>
          {saveError}
        </p>
      )}
    </>
  );
}

function GoalRow({ icon, tone, children }: { icon: 'cards' | 'book' | 'chat' | 'pen'; tone: string; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3">
      <span aria-hidden className={`grid size-10 shrink-0 place-items-center rounded-xl text-white ${tone}`}>
        <Icon name={icon} size={20} strokeWidth={2.2} />
      </span>
      <span>{children}</span>
    </li>
  );
}
