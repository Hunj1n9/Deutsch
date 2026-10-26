'use client';

import Link from 'next/link';
import { useRef, useState, useTransition } from 'react';
import { restartLessonAction, saveStepAction } from '@/app/(app)/learn/actions';
import { LESSON_STEPS, STEP_VI, SUMMARY_STEP, type GrammarPoint, type Lesson } from '@/lib/course/types';
import { Icon } from '../Icon';
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
      .then((r) => setSaveError(r.ok ? null : r.error))
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

  return (
    <>
      <header className="mb-3 mt-2 flex items-center gap-3">
        <Link href={learnHref(lesson.id)} aria-label="Thoát bài (đã lưu bước đang làm)" className="grid size-11 shrink-0 place-items-center rounded-full bg-surface">
          <Icon name="x" />
        </Link>
        <div className="min-w-0">
          <p className="text-[12px] font-semibold text-muted">
            {lesson.id.toUpperCase()} · {STEP_VI[stepName]}
          </p>
          <h1 className="truncate text-[20px] font-bold leading-tight">{lesson.title_vi}</h1>
        </div>
      </header>
      <ol className="mb-4 flex gap-1" aria-label="Các bước của bài">
        {LESSON_STEPS.map((s, i) => (
          <li
            key={s}
            aria-current={i === step ? 'step' : undefined}
            title={STEP_VI[s]}
            className={`h-2 flex-1 rounded-full ${i < step ? 'bg-primary' : i === step ? 'bg-ink/60' : 'bg-surface'}`}
          />
        ))}
      </ol>

      {stepName === 'goal' && (
        <div className="flex flex-col gap-3">
          <section className="scribble rounded-block bg-pastel-sky p-5">
            <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">Mục tiêu</p>
            <p className="mt-2 text-[20px] font-semibold leading-snug">Sau bài này bạn có thể: {lesson.goal_vi}</p>
            <ul className="mt-3 flex flex-col gap-1 text-[15px]">
              <li>• {words.length} từ và cụm từ mới</li>
              <li>• Ngữ pháp: {point?.title_vi}</li>
              <li>• Hội thoại „{lesson.dialogue.title_de}“, nghe, chép và nói theo</li>
              <li>• Viết vài câu và được AI sửa</li>
            </ul>
            <p className="mt-3 text-[14px] opacity-80">Khoảng 25–40 phút. Thoát giữa chừng thì lần sau học tiếp từ đầu bước đang làm.</p>
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
            <button type="button" onClick={() => goTo(SUMMARY_STEP)} className={`${primaryClass} flex-[2]`}>
              Xong, tổng kết
            </button>
          </div>
        </div>
      )}

      {stepName === 'summary' && (
        <div className="flex flex-col gap-3">
          <section className="scribble rounded-block bg-pastel-sage p-5">
            <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">Tổng kết</p>
            <p className="mt-1 text-[34px] font-bold leading-none">
              {score.right}/{score.total}
            </p>
            <p className="mt-1 text-[15px]">bài tập đúng ngay lần đầu</p>
            <ul className="mt-3 flex flex-col gap-1 text-[15px]">
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
              <Icon name="arrow" />
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
