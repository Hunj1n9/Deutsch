import Link from 'next/link';
import { Suspense } from 'react';
import { DailyTasks, type DailyTask } from '@/components/home/DailyTasks';
import { Icon, type IconName } from '@/components/Icon';
import { GeoArt } from '@/components/art/GeoArt';
import { BelloWardrobe } from '@/components/mascot/Wardrobe';
import { PageHeader } from '@/components/PageHeader';
import { ProgressBar } from '@/components/ProgressBar';
import { blockLabelClass, primaryClass } from '@/components/ui';
import { dailyWritingPrompt } from '@/lib/ai/writing-prompt';
import { STAGE_LESSONS } from '@/data/lessons';
import { STAGES } from '@/data/roadmap';
import { findLesson } from '@/lib/course/catalog';
import { stageTestSize } from '@/lib/course/stage-test';
import { unlockedItems } from '@/lib/bello-items';
import { loadBelloProgress, loadCourseState } from '@/lib/course/db';
import { courseHref, coursePosition, lessonDone, stepLabel } from '@/lib/course/position';
import { goalMet, shortfall, shortfallText } from '@/lib/daily-goal';
import { loadTodayStatus } from '@/lib/daily-goal-db';
import { loadProgress } from '@/lib/progress';
import { loadReviewCounts } from '@/lib/review/load';
import { daysUntil } from '@/lib/stats';
import { loadSettings, type UserSettings } from '@/lib/supabase/queries';
import { getPageSession, type Session } from '@/lib/supabase/session';
import { addDays, APP_TIME_ZONE, localDate } from '@/lib/time';

export default function Page() {
  return (
    <>
      <PageHeader title="Hôm nay" />
      <Suspense fallback={<div className="mb-3 h-44 animate-pulse rounded-block bg-pastel-yellow" />}>
        <Today />
      </Suspense>
    </>
  );
}

/** Trang Hôm nay (SPEC F7): mở app thấy ngay việc cần làm, bắt đầu ôn bằng một chạm. */
async function Today() {
  const session = await getPageSession();
  if (!session) return null;
  const settings = await loadSettings(session);
  return (
    <div className="stagger">
      <Suspense fallback={<div className="mb-3 h-80 animate-pulse rounded-block bg-surface" />}>
        <GoalBlock session={session} settings={settings} />
      </Suspense>
      <ReviewBlocks session={session} settings={settings} />
      <Suspense fallback={<div className="mb-3 h-36 animate-pulse rounded-block bg-pastel-sky" />}>
        <LessonBlock session={session} settings={settings} />
      </Suspense>
      <Suspense fallback={<div className="mb-3 h-32 animate-pulse rounded-block bg-surface" />}>
        <TasksBlock session={session} />
      </Suspense>
      <Suspense fallback={<div className="mb-3 h-28 animate-pulse rounded-block bg-pastel-lilac" />}>
        <WritingBlock session={session} settings={settings} />
      </Suspense>
      <Suspense fallback={<div className="mb-3 h-36 animate-pulse rounded-block bg-pastel-sage" />}>
        <ProgressBlock session={session} settings={settings} />
      </Suspense>
    </div>
  );
}

const blockLabel = blockLabelClass;

/** Ô biểu tượng ở đầu khối (mỗi khối chức năng một màu, DESIGN.md). */
function BlockIcon({ name, tone }: { name: IconName; tone: string }) {
  return (
    <span aria-hidden className={`grid size-11 shrink-0 place-items-center rounded-xl ${tone}`}>
      <Icon name={name} size={22} strokeWidth={2.2} />
    </span>
  );
}

/** Lời chào tiếng Đức theo giờ Việt Nam. */
function greeting(): string {
  const hour = Number(new Intl.DateTimeFormat('en-US', { timeZone: APP_TIME_ZONE, hour: 'numeric', hourCycle: 'h23' }).format(new Date()));
  return hour < 11 ? 'Guten Morgen!' : hour < 18 ? 'Guten Tag!' : 'Guten Abend!';
}

/**
 * Chỉ tiêu hôm nay (SPEC F16): số bài cần xong để kịp ngày thi, thẻ đến hạn, phút học; giục phần còn thiếu.
 * Bello ở đầu khối (F17): hăng hái khi chưa học phút nào, vui khi đạt chỉ tiêu; chạm để mở tủ đồ.
 */
async function GoalBlock({ session, settings }: { session: Session; settings: UserSettings }) {
  const [status, belloProgress] = await Promise.all([loadTodayStatus(session, settings), loadBelloProgress(session)]);
  const today = localDate(new Date());
  const countdown = daysUntil(settings.next_exam_date, today);
  const left = shortfall(status);
  const met = goalMet(status);
  const minutes = Math.round(status.minutesToday);
  const bello = met ? 'happy' : status.minutesToday === 0 ? 'energetic' : 'stand';
  const row = (done: boolean, label: string, value: string, progress?: { value: number; max: number }) => (
    <li className="flex flex-col gap-1.5 py-2">
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className={`flex size-6 shrink-0 items-center justify-center rounded-full ${done ? 'animate-pop-in bg-green text-white' : 'border-[1.5px] border-line-strong'}`}
        >
          {done && <Icon name="check" size={14} strokeWidth={3.4} />}
        </span>
        <span className={`flex-1 text-[15px] font-medium ${done ? 'text-muted line-through' : ''}`}>{label}</span>
        <span className={`text-[15px] font-bold tabular-nums ${done ? 'text-ok' : ''}`}>{value}</span>
        <span className="sr-only">{done ? 'đã xong' : 'chưa xong'}</span>
      </div>
      {progress && <ProgressBar value={progress.value} max={progress.max} tone={done ? 'green' : 'gold'} height="h-2" className="ml-9" />}
    </li>
  );
  return (
    <>
      <section className="mb-3 overflow-hidden rounded-block bg-surface">
        <div className="relative bg-pastel-yellow px-4 pt-1">
          <BelloWardrobe state={bello} unlocked={[...unlockedItems(belloProgress)]} />
          {countdown !== null && countdown >= 0 && (
            <span className="absolute right-4 top-3 flex flex-col items-center rounded-xl bg-surface px-3 py-1.5 text-center leading-tight">
              <span className="text-[20px] font-extrabold tabular-nums">{countdown}</span>
              <span className="text-[11px] font-medium text-muted">ngày tới {settings.next_exam_name ?? 'thi'}</span>
            </span>
          )}
        </div>
        <div className="p-5">
        <div className="min-w-0">
          <p className="text-[14px] font-medium text-muted" lang="de">
            {met ? 'Super gemacht!' : greeting()}
          </p>
          <p className="mt-0.5 text-[21px] font-extrabold leading-snug">
            {met ? 'Đã đạt chỉ tiêu hôm nay. Giỏi lắm!' : `Hôm nay còn: ${shortfallText(left)}`}
          </p>
        </div>
        <p className={`${blockLabel} mt-4`}>Chỉ tiêu hôm nay</p>
        <ul className="mt-1 divide-y-[1.5px] divide-line">
          {status.lesson &&
            row(
              left.units === 0,
              `Bài mới / kiểm tra (tới hết ${settings.exam_level})`,
              `${Math.min(status.lesson.doneToday, status.lesson.target)}/${status.lesson.target}`,
            )}
          {row(left.cards === 0, 'Ôn hết thẻ đến hạn', left.cards === 0 ? 'xong' : `còn ${left.cards}`)}
          {row(left.minutes === 0, 'Phút học', `${minutes}/${status.minutesTarget}`, { value: minutes, max: status.minutesTarget })}
        </ul>
        {status.lesson?.heavy && (
          <p className="mt-2 rounded-xl bg-bad-soft p-3 text-[14px] leading-snug">
            Còn {status.lesson.remaining} phần trong {status.lesson.studyDays} ngày học: cần {status.lesson.target} phần mỗi ngày, rất khó
            kịp. Cân nhắc học thêm ngày trong tuần hoặc dời ngày thi.
          </p>
        )}
        {!status.lesson && (
          <Link href="/settings" className="mt-2 block text-[14px] font-semibold text-blue">
            {settings.next_exam_date ? 'Ngày thi đã qua: đặt kỳ thi mới' : 'Đặt ngày thi để biết mỗi ngày cần học mấy bài'} →
          </Link>
        )}
        </div>
      </section>
    </>
  );
}

async function ReviewBlocks({ session, settings }: { session: Session; settings: UserSettings }) {
  const counts = await loadReviewCounts(session, settings.new_cards_per_day);
  const total = counts.due + counts.fresh;
  return (
    <>
      <section className="scribble mb-3 rounded-block bg-pastel-yellow p-5">
        <div className="flex items-center gap-3">
          <BlockIcon name="cards" tone="bg-gold text-ink" />
          <div className="min-w-0 flex-1">
            <p className={blockLabel}>Ôn thẻ</p>
            <p className="text-[15px] font-medium text-muted">
              {counts.due} đến hạn · {counts.fresh} thẻ mới
            </p>
          </div>
          <p className="text-[38px] font-extrabold leading-none tabular-nums">{total}</p>
        </div>
        {counts.reviewedToday > 0 && <p className="mt-2 text-[14px] text-muted">Đã ôn {counts.reviewedToday} lần hôm nay</p>}
        <Link href="/review" className={`${primaryClass} mt-4`}>
          {total > 0 ? 'Bắt đầu ôn' : 'Mở phiên ôn'}
        </Link>
      </section>
      {/* Sổ lỗi (F7 mục 2): thẻ sửa lỗi đã nằm trong phiên ôn, nên chỉ là một hàng gọn để nhấn mạnh, không chiếm cả khối. */}
      <Link href="/errors" className="card mb-3 flex min-h-16 items-center gap-3 rounded-2xl px-4 py-3 active:translate-y-0.5">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-pastel-pink text-[18px] font-extrabold text-bad">
          {counts.errorFixDue}
        </span>
        <span className="min-w-0 flex-1 text-[14px] leading-snug text-muted">
          <b className="block text-[15px] font-bold text-ink">Sổ lỗi</b>
          thẻ sửa lỗi đến hạn, nằm trong phiên ôn
        </span>
        <Icon name="back" strokeWidth={2.4} className="rotate-180 text-muted" />
      </Link>
    </>
  );
}

/** Khối Bài học (SPEC F11): bài hoặc kiểm tra kế tiếp, một chạm; nhắc ôn trước khi còn nhiều thẻ đến hạn. */
async function LessonBlock({ session, settings }: { session: Session; settings: UserSettings }) {
  const [course, counts] = await Promise.all([loadCourseState(session), loadReviewCounts(session, settings.new_cards_per_day)]);
  const next = coursePosition(STAGE_LESSONS, course.progress, course.passed);
  if (!next) return null;
  const resuming = next.kind === 'lesson' && next.state && !lessonDone(next.state);
  const step = next.kind === 'lesson' ? stepLabel(next.state) : null;
  return (
    <section className="mb-3 overflow-hidden rounded-block bg-surface">
      <div className="bg-pastel-sky px-6 py-3">
        <GeoArt seed={next.stage.stage_id} className="mx-auto h-32 w-full max-w-xs" />
      </div>
      <div className="p-5">
        <p className={blockLabel}>
          {next.kind === 'lesson' ? 'Học tiếp' : 'Kiểm tra chặng'} · {next.stage.stage_id.toUpperCase()}
        </p>
        <p className="mt-0.5 text-[22px] font-extrabold leading-tight">
          {next.kind === 'lesson' ? next.lesson.title_vi : STAGES.find((s) => s.id === next.stage.stage_id)?.title_vi}
        </p>
        <p className="mt-1 text-[14px] text-muted">
          {next.kind === 'lesson' ? `~30 phút${step ? ` · đang ở ${step}` : ''}` : `${stageTestSize(next.stage.points.length).total} câu · đạt từ ${stageTestSize(next.stage.points.length).pass} câu`}
        </p>
        {counts.due > REVIEW_FIRST && (
          <p className="mt-2 text-[14px] font-semibold">Còn {counts.due} thẻ đến hạn: ôn trước sẽ nhớ bài mới tốt hơn.</p>
        )}
        <Link href={courseHref(next)} className={`${primaryClass} mt-4`}>
          {next.kind === 'test' ? 'Làm kiểm tra' : resuming ? 'Học tiếp' : 'Bắt đầu bài'}
        </Link>
      </div>
    </section>
  );
}

/** Trên ngần này thẻ đến hạn thì nhắc ôn trước khi học bài mới. */
const REVIEW_FIRST = 50;

async function TasksBlock({ session }: { session: Session }) {
  const today = localDate(new Date());
  const { data } = await session.supabase
    .from('daily_tasks')
    .select('id, title, minutes, done, task_date')
    .in('task_date', [addDays(today, -1), today])
    .order('id');
  const rows = (data ?? []) as (DailyTask & { task_date: string })[];
  const todays = rows.filter((r) => r.task_date === today);
  const titles = new Set(todays.map((r) => r.title));
  const yesterdayLeft = rows.filter((r) => r.task_date !== today && !r.done && !titles.has(r.title)).map((r) => r.title);

  return <DailyTasks tasks={todays} yesterdayLeft={yesterdayLeft} />;
}

async function WritingBlock({ session, settings }: { session: Session; settings: UserSettings }) {
  const { data: source } = settings.current_source_id
    ? await session.supabase.from('sources').select('title, chapter').eq('id', settings.current_source_id).maybeSingle()
    : { data: null };
  const label = source ? [source.title, source.chapter].filter(Boolean).join(' · ') : null;
  // Đề lấy theo bài vừa học gần nhất nếu có (SPEC F11), không thì AI sinh theo ngày.
  const { data: last } = await session.supabase
    .from('lesson_progress')
    .select('lesson_id')
    .not('completed_at', 'is', null)
    .order('completed_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  const lessonPrompt = last ? findLesson(last.lesson_id as string)?.lesson.writing_prompt_vi : undefined;
  const prompt = lessonPrompt ?? (await dailyWritingPrompt(localDate(new Date()), settings.current_level, label));
  return (
    <Link href={`/write?prompt=${encodeURIComponent(prompt)}`} className="scribble mb-3 flex items-start gap-3 rounded-block bg-pastel-lilac p-5">
      <BlockIcon name="pen" tone="bg-purple text-white" />
      <span className="min-w-0 flex-1">
        <span className={`${blockLabel} block`}>Viết 5 câu</span>
        <span className="mt-1 block text-[16px] font-semibold leading-snug">{prompt}</span>
        <span className="mt-2 block text-[14px] font-semibold text-purple">Chạm để viết →</span>
      </span>
    </Link>
  );
}

async function ProgressBlock({ session, settings }: { session: Session; settings: UserSettings }) {
  const p = await loadProgress(session, settings, 1);
  const minutes = Math.round(p.minutesToday);
  const countdown = daysUntil(settings.next_exam_date, p.today);
  return (
    <Link href="/progress" className="scribble mb-3 block rounded-block bg-pastel-sage p-5">
      <div className="flex items-center gap-3">
        <BlockIcon name="chart" tone="bg-green text-white" />
        <p className="min-w-0 flex-1">
          <span className={`${blockLabel} block`}>Tiến độ</span>
          <span className="text-[15px] font-medium">
            <span className="text-[24px] font-extrabold">{minutes}</span> / {settings.daily_minutes_target} phút hôm nay
          </span>
        </p>
      </div>
      <ProgressBar value={minutes} max={Math.max(1, settings.daily_minutes_target)} label="Phút học hôm nay" className="mt-3 bg-surface" />
      <p className="mt-2 text-[14px] text-muted">
        Tuần này: {p.thisWeek.days}/{settings.weekly_days_target} ngày học
        {countdown !== null && countdown >= 0 && ` · ${settings.next_exam_name ?? 'Kỳ thi'} còn ${countdown} ngày`}
      </p>
    </Link>
  );
}
