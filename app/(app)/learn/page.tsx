import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { Icon } from '@/components/Icon';
import { PageHeader } from '@/components/PageHeader';
import { OpenStageButton } from '@/components/roadmap/OpenStageButton';
import { LESSONS_BY_STAGE, STAGE_LESSONS } from '@/data/lessons';
import { PACKS } from '@/data/packs';
import { STAGES, stageHours, type Stage } from '@/data/roadmap';
import { loadCourseState, loadLevelTests, type CourseState, type LevelBest } from '@/lib/course/db';
import { LEVEL_PASS_RATIO, LEVEL_TOTAL } from '@/lib/course/level-test';
import { courseHref, coursePosition, lessonDone, stageStatus, stepLabel, type CourseNext, type StageStatus } from '@/lib/course/position';
import { stageTestSize } from '@/lib/course/stage-test';
import { stagePercent } from '@/lib/roadmap';
import { loadRoadmapProgress, stageItemCount } from '@/lib/roadmap-db';
import { getPageSession } from '@/lib/supabase/session';

export const metadata: Metadata = { title: 'Học' };

export default function Page() {
  return (
    <>
      <PageHeader title="Học" subtitle="Khóa học A1 → B2" />
      <Suspense fallback={<div className="mb-3 h-44 rounded-block bg-pastel-sky" />}>
        <Course />
      </Suspense>
    </>
  );
}

const LEVELS: Stage['level'][] = ['A1', 'A2', 'B1', 'B2'];

const STATUS_VI: Record<StageStatus, string> = {
  new: 'chưa học',
  learning: 'đang học',
  lessons_done: 'đã xong bài · còn kiểm tra',
  passed: 'đã qua',
};

async function Course() {
  const session = await getPageSession();
  if (!session) return null;
  const [course, packProgress, levelTests] = await Promise.all([loadCourseState(session), loadRoadmapProgress(session), loadLevelTests(session)]);
  const next = coursePosition(STAGE_LESSONS, course.progress, course.passed);

  return (
    <div className="flex flex-col gap-4">
      <NextBlock next={next} />
      <p className="rounded-[20px] bg-surface p-4 text-[14px] leading-relaxed text-muted">
        Mỗi chặng có 3–4 bài (từ mới, ngữ pháp, hội thoại, viết) và một <b className="text-ink">kiểm tra chặng</b> 20–23 câu, đạt khi đúng từ 80%.
        Từ học trong bài tự vào phiên ôn. Thứ tự chỉ là gợi ý: đã biết rồi thì làm kiểm tra để bỏ qua chặng.
      </p>
      {LEVELS.map((level) => (
        <section key={level} className="flex flex-col gap-2">
          <h2 className="px-1 text-[22px] font-bold">{level}</h2>
          {STAGES.filter((s) => s.level === level).map((s) => (
            <StageCard
              key={s.id}
              stage={s}
              course={course}
              current={next?.stage.stage_id === s.id}
              packPercent={packProgress.get(s.id) ? stagePercent(packProgress.get(s.id)) : null}
            />
          ))}
          <LevelExamCard
            level={level}
            state={levelTests.get(level)}
            ready={STAGES.filter((s) => s.level === level).every((s) => course.passed.has(s.id))}
          />
        </section>
      ))}
    </div>
  );
}

/** Thi thử cuối cấp (F14): gợi ý khi đã qua mọi chặng của cấp nhưng không khóa. */
function LevelExamCard({ level, state, ready }: { level: string; state: LevelBest | undefined; ready: boolean }) {
  return (
    <Link
      href={`/learn/exam/${level}`}
      className={`flex min-h-14 items-center justify-between gap-3 rounded-[20px] p-4 ${ready && !state?.passed ? 'scribble bg-pastel-yellow outline-2 outline-ink' : 'bg-surface'}`}
    >
      <span>
        <span className="block text-[17px] font-bold">Thi thử {level}</span>
        <span className="block text-[13px] text-muted">
          {LEVEL_TOTAL} câu trộn cả cấp, đạt từ {Math.ceil(LEVEL_TOTAL * LEVEL_PASS_RATIO)} câu
          {ready && !state ? ' · nên làm ngay' : ''}
        </span>
      </span>
      <span className="shrink-0 text-[13px] font-semibold text-muted">
        {state ? (state.passed ? `✓ đã đạt · cao nhất ${state.score}/${state.total}` : `cao nhất ${state.score}/${state.total}`) : 'chưa làm'}
      </span>
    </Link>
  );
}

function NextBlock({ next }: { next: CourseNext | null }) {
  if (!next) {
    return (
      <section className="scribble rounded-block bg-pastel-sage p-5">
        <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">Bài tiếp theo</p>
        <p className="mt-1 text-[18px] font-semibold">Bạn đã qua cả 50 chặng A1 → B2. Làm thi thử cuối cấp để ôn lại, rồi chuyển sang luyện đề thi thật.</p>
      </section>
    );
  }
  const label = next.kind === 'lesson' ? (next.state && !lessonDone(next.state) ? 'Học tiếp' : 'Bắt đầu') : 'Làm kiểm tra';
  return (
    <section className="scribble rounded-block bg-pastel-sky p-5">
      <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">
        {next.kind === 'lesson' ? 'Bài tiếp theo' : 'Kiểm tra chặng'} · {next.stage.stage_id.toUpperCase()}
      </p>
      <p className="mt-1 text-[22px] font-bold leading-tight">
        {next.kind === 'lesson' ? next.lesson.title_vi : STAGES.find((s) => s.id === next.stage.stage_id)?.title_vi}
      </p>
      {next.kind === 'lesson' && <p className="mt-1 text-[15px] opacity-80">{next.lesson.goal_vi}</p>}
      {next.kind === 'lesson' && stepLabel(next.state) && <p className="mt-1 text-[14px] font-semibold">Đang ở {stepLabel(next.state)}</p>}
      <Link href={courseHref(next)} className="mt-4 flex h-13 items-center justify-center gap-2 rounded-full bg-primary text-[16px] font-semibold text-on-primary">
        {label}
        <Icon name="arrow" />
      </Link>
    </section>
  );
}

function StageCard({
  stage,
  course,
  current,
  packPercent,
}: {
  stage: Stage;
  course: CourseState;
  current: boolean;
  packPercent: number | null;
}) {
  const lessons = LESSONS_BY_STAGE.get(stage.id);
  const status = lessons ? stageStatus(lessons, course.progress, course.passed) : null;
  const best = course.best.get(stage.id);
  return (
    <article id={stage.id} className={`rounded-[20px] p-4 ${current ? 'scribble bg-pastel-sky outline-2 outline-ink' : 'bg-surface'}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[12px] font-semibold text-muted">
            {stage.level} · {String(stage.order).padStart(2, '0')}
            {status && ` · ${STATUS_VI[status]}`}
          </p>
          <p className="text-[17px] font-bold leading-snug">{stage.title_vi}</p>
          <p className="text-[13px] text-muted" lang="de">
            {stage.title_de} · ~{stageHours(stage)} giờ{PACKS[stage.id] && ` · ${stageItemCount(stage)} mục`}
            {packPercent !== null && ` · thẻ đã thuộc ${Math.round(packPercent * 100)}%`}
          </p>
        </div>
        {status === 'passed' && <span className="shrink-0 text-[15px] font-bold text-ok">✓</span>}
      </div>

      {lessons ? (
        <ul className="mt-3 flex flex-col gap-1.5">
          {lessons.lessons.map((l, i) => {
            const st = course.progress.get(l.id);
            const right = st?.skipped && !st.completed
              ? 'bỏ qua'
              : st?.completed
                ? st.total
                  ? `✓ ${st.score}/${st.total}`
                  : '✓'
                : (stepLabel(st) ?? '');
            return (
              <li key={l.id}>
                <Link href={`/learn/${l.id}`} className="flex min-h-11 items-center justify-between gap-2 rounded-[14px] bg-bg px-3 py-2">
                  <span className="text-[15px] font-semibold">
                    {i + 1}. {l.title_vi}
                  </span>
                  <span className="shrink-0 text-[13px] text-muted">{right}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <Link href={`/learn/test/${stage.id}`} className="flex min-h-11 items-center justify-between gap-2 rounded-[14px] bg-bg px-3 py-2">
              <span className="text-[15px] font-semibold">Kiểm tra chặng</span>
              <span className="shrink-0 text-[13px] text-muted">
                {best ? `cao nhất ${best.score}/${best.total}` : `${stageTestSize(lessons.points.length).total} câu`}
              </span>
            </Link>
          </li>
        </ul>
      ) : (
        <div className="mt-2 flex items-center justify-between gap-3">
          <ul className="flex flex-wrap gap-1.5">
            {stage.grammar.map((g) => (
              <li key={g} className="rounded-full bg-bg px-2.5 py-1 text-[12px]">
                {g}
              </li>
            ))}
          </ul>
          {PACKS[stage.id] && packPercent === null && <OpenStageButton stageId={stage.id} primary={false} />}
        </div>
      )}
      {!lessons && <p className="mt-2 text-[12px] text-muted">Chưa có bài học; có thể mở gói từ để ôn trước.</p>}
    </article>
  );
}
