import Link from 'next/link';
import { Suspense } from 'react';
import { DailyTasks, type DailyTask } from '@/components/home/DailyTasks';
import { Icon } from '@/components/Icon';
import { PageHeader } from '@/components/PageHeader';
import { dailyWritingPrompt } from '@/lib/ai/writing-prompt';
import { PACKS } from '@/data/packs';
import { STAGES } from '@/data/roadmap';
import { loadProgress } from '@/lib/progress';
import { roadmapPosition, stagePercent } from '@/lib/roadmap';
import { loadRoadmapProgress } from '@/lib/roadmap-db';
import { loadReviewCounts } from '@/lib/review/load';
import { daysUntil } from '@/lib/stats';
import { loadSettings, type UserSettings } from '@/lib/supabase/queries';
import { getPageSession, type Session } from '@/lib/supabase/session';
import { addDays, localDate } from '@/lib/time';

export default function Page() {
  return (
    <>
      <PageHeader title="Hôm nay" />
      <Suspense fallback={<div className="mb-3 h-44 rounded-block bg-pastel-yellow" />}>
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
    <>
      <ReviewBlocks session={session} settings={settings} />
      <Suspense fallback={<div className="mb-3 h-32 rounded-block bg-surface" />}>
        <TasksBlock session={session} />
      </Suspense>
      <Suspense fallback={<div className="mb-3 h-28 rounded-block bg-pastel-lilac" />}>
        <WritingBlock session={session} settings={settings} />
      </Suspense>
      <Suspense fallback={<div className="mb-3 h-36 rounded-block bg-pastel-sage" />}>
        <ProgressBlock session={session} settings={settings} />
      </Suspense>
    </>
  );
}

const blockLabel = 'text-[13px] font-semibold uppercase tracking-[.06em] opacity-70';

async function ReviewBlocks({ session, settings }: { session: Session; settings: UserSettings }) {
  const counts = await loadReviewCounts(session, settings.new_cards_per_day);
  const total = counts.due + counts.fresh;
  return (
    <>
      <section className="scribble mb-3 rounded-block bg-pastel-yellow p-5">
        <p className={blockLabel}>Ôn thẻ</p>
        <p className="mt-1 text-[34px] font-bold leading-none">{total}</p>
        <p className="mt-1 text-[15px] opacity-80">
          {counts.due} đến hạn · {counts.fresh} thẻ mới
          {counts.reviewedToday > 0 && ` · đã ôn ${counts.reviewedToday} lần hôm nay`}
        </p>
        <Link
          href="/review"
          className="mt-4 flex h-13 items-center justify-center gap-2 rounded-full bg-primary text-[16px] font-semibold text-on-primary"
        >
          {total > 0 ? 'Bắt đầu ôn' : 'Mở phiên ôn'}
          <Icon name="arrow" />
        </Link>
      </section>
      <Link href="/errors" className="scribble mb-3 block rounded-block bg-pastel-pink p-5">
        <p className={blockLabel}>Sổ lỗi</p>
        <p className="mt-1 text-[15px]">
          <span className="text-[22px] font-bold">{counts.errorFixDue}</span> thẻ sửa lỗi đến hạn (nằm trong phiên ôn)
        </p>
      </Link>
    </>
  );
}

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

  const progress = await loadRoadmapProgress(session);
  const { current } = roadmapPosition(STAGES.filter((s) => PACKS[s.id]), progress);
  const p = current ? progress.get(current.id) : undefined;
  const roadmap = current
    ? {
        label: `${current.level} · ${current.title_vi}${p?.opened ? ` · thuộc ${Math.round(stagePercent(p) * 100)}%` : ''}`,
        href: `/roadmap#${current.id}`,
        action: p?.opened ? 'Xem' : 'Mở chặng',
      }
    : null;
  return <DailyTasks tasks={todays} yesterdayLeft={yesterdayLeft} roadmap={roadmap} />;
}

async function WritingBlock({ session, settings }: { session: Session; settings: UserSettings }) {
  const { data: source } = settings.current_source_id
    ? await session.supabase.from('sources').select('title, chapter').eq('id', settings.current_source_id).maybeSingle()
    : { data: null };
  const label = source ? [source.title, source.chapter].filter(Boolean).join(' · ') : null;
  const prompt = await dailyWritingPrompt(localDate(new Date()), settings.current_level, label);
  return (
    <Link href={`/write?prompt=${encodeURIComponent(prompt)}`} className="scribble mb-3 block rounded-block bg-pastel-lilac p-5">
      <p className={blockLabel}>Viết 5 câu</p>
      <p className="mt-1 text-[16px] font-semibold leading-snug">{prompt}</p>
      <p className="mt-2 text-[14px] opacity-80">Chạm để viết →</p>
    </Link>
  );
}

async function ProgressBlock({ session, settings }: { session: Session; settings: UserSettings }) {
  const p = await loadProgress(session, settings, 1);
  const minutes = Math.round(p.minutesToday);
  const pct = Math.min(100, (minutes / Math.max(1, settings.daily_minutes_target)) * 100);
  const countdown = daysUntil(settings.next_exam_date, p.today);
  return (
    <Link href="/progress" className="scribble mb-3 block rounded-block bg-pastel-sage p-5">
      <p className={blockLabel}>Tiến độ</p>
      <p className="mt-1 text-[15px]">
        <span className="text-[22px] font-bold">{minutes}</span> / {settings.daily_minutes_target} phút hôm nay
      </p>
      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-surface" role="progressbar" aria-valuenow={minutes} aria-valuemax={settings.daily_minutes_target} aria-label="Phút học hôm nay">
        <div className="h-full rounded-full bg-ink" style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-2 text-[14px]">
        Tuần này: {p.thisWeek.days}/{settings.weekly_days_target} ngày học
        {countdown !== null && countdown >= 0 && ` · ${settings.next_exam_name ?? 'Kỳ thi'} còn ${countdown} ngày`}
      </p>
    </Link>
  );
}
