import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { Icon } from '@/components/Icon';
import { LearnPath, type PathStage } from '@/components/learn/LearnPath';
import { GeoArt } from '@/components/art/GeoArt';
import { PageHeader } from '@/components/PageHeader';
import { ProgressBar } from '@/components/ProgressBar';
import { blockLabelClass, primaryClass } from '@/components/ui';
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

export default function Page({ searchParams }: PageProps<'/learn'>) {
  return (
    <>
      <PageHeader title="Học" subtitle="Khóa học A1 → B2" />
      <Suspense fallback={<div className="mb-3 h-44 animate-pulse rounded-block bg-pastel-sky" />}>
        <Course searchParams={searchParams} />
      </Suspense>
    </>
  );
}

const LEVELS: Stage['level'][] = ['A1', 'A2', 'B1', 'B2'];

/** Nền minh họa của thẻ cấp. */
const LEVEL_TINT: Record<Stage['level'], string> = {
  A1: 'bg-pastel-sage',
  A2: 'bg-pastel-sky',
  B1: 'bg-pastel-lilac',
  B2: 'bg-pastel-yellow',
};

const STATUS_VI: Record<StageStatus, string> = {
  new: 'chưa học',
  learning: 'đang học',
  lessons_done: 'còn kiểm tra',
  passed: 'đã qua',
};

async function Course({ searchParams }: { searchParams: PageProps<'/learn'>['searchParams'] }) {
  const session = await getPageSession();
  if (!session) return null;
  const [params, course, packProgress, levelTests] = await Promise.all([
    searchParams,
    loadCourseState(session),
    loadRoadmapProgress(session),
    loadLevelTests(session),
  ]);
  const next = coursePosition(STAGE_LESSONS, course.progress, course.passed);
  const nextLevel = STAGES.find((s) => s.id === next?.stage.stage_id)?.level ?? 'A1';
  // Một cấp mỗi lần (mặc định cấp của bài kế tiếp): 50 chặng bung hết thì trang dài hàng chục màn hình.
  const level = LEVELS.find((l) => l === params.level) ?? nextLevel;
  const stages = STAGES.filter((s) => s.level === level);

  const passedHere = stages.filter((s) => course.passed.has(s.id)).length;
  const path: PathStage[] = stages.map((s) =>
    pathStage(s, course, next?.stage.stage_id === s.id, packProgress.get(s.id) ? stagePercent(packProgress.get(s.id)) : null),
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="animate-fade-up">
        <NextBlock next={next} />
      </div>

      <nav aria-label="Chọn cấp" className="mt-2 grid grid-cols-4 gap-1 rounded-2xl bg-line/60 p-1">
        {LEVELS.map((l) => {
          const all = STAGES.filter((s) => s.level === l);
          const passed = all.filter((s) => course.passed.has(s.id)).length;
          const active = l === level;
          return (
            <Link
              key={l}
              href={`/learn?level=${l}`}
              aria-current={active ? 'page' : undefined}
              className={`flex h-13 flex-col items-center justify-center rounded-xl leading-none transition-colors ${
                active ? 'bg-surface text-ink shadow-[0_1px_3px_rgb(0_0_0/0.12)]' : 'text-muted hover:text-ink'
              }`}
            >
              <span className="text-[16px] font-extrabold">{l}</span>
              <span className="mt-1 text-[11px] font-semibold opacity-80">
                {passed}/{all.length}
              </span>
            </Link>
          );
        })}
      </nav>

      <section className="mt-2 overflow-hidden rounded-block bg-surface">
        <div className={`px-6 py-3 ${LEVEL_TINT[level]}`}>
          <GeoArt seed={`level-${level}`} className="mx-auto h-28 w-full max-w-xs" />
        </div>
        <div className="p-5">
          <p className="text-[13px] font-semibold text-muted">Cấp {level}</p>
          <p className="mt-0.5 text-[22px] font-extrabold leading-tight">
            {passedHere}/{stages.length} chặng đã qua
          </p>
          <ProgressBar value={passedHere} max={stages.length} className="mt-3" height="h-2.5" />
          <details className="group mt-3">
            <summary className="flex w-fit cursor-pointer list-none items-center gap-2 text-[14px] font-semibold text-blue [&::-webkit-details-marker]:hidden">
              <Icon name="book" size={16} strokeWidth={2.4} />
              Cách học theo chặng
            </summary>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">
            Mỗi chặng có 3–4 bài (từ mới, ngữ pháp, hội thoại, viết) và một <b>kiểm tra chặng</b> 20–23 câu, đạt khi đúng từ 80%. Từ
            học trong bài tự vào phiên ôn. Thứ tự chỉ là gợi ý: đã biết rồi thì làm kiểm tra để bỏ qua chặng.
            </p>
          </details>
        </div>
      </section>

      <LearnPath stages={path} />
      <LevelExamCard level={level} state={levelTests.get(level)} ready={stages.every((s) => course.passed.has(s.id))} />
    </div>
  );
}

/** Dữ liệu một nút trên đường học (chỉ giá trị thuần để gửi xuống client). */
function pathStage(stage: Stage, course: CourseState, current: boolean, packPercent: number | null): PathStage {
  const lessons = LESSONS_BY_STAGE.get(stage.id);
  const status = lessons ? stageStatus(lessons, course.progress, course.passed) : null;
  const best = course.best.get(stage.id);
  const doneCount = lessons?.lessons.filter((l) => course.progress.get(l.id)?.completed).length ?? 0;
  const meta = [
    `~${stageHours(stage)} giờ`,
    PACKS[stage.id] ? `${stageItemCount(stage)} mục` : null,
    packPercent !== null ? `thẻ đã thuộc ${Math.round(packPercent * 100)}%` : null,
  ]
    .filter(Boolean)
    .join(' · ');
  return {
    id: stage.id,
    order: stage.order,
    title_vi: stage.title_vi,
    title_de: stage.title_de,
    status,
    current,
    statusText: [
      status ? STATUS_VI[status] : 'chưa có bài',
      lessons ? `${doneCount}/${lessons.lessons.length} bài` : null,
      best ? `kiểm tra ${best.score}/${best.total}` : null,
    ]
      .filter(Boolean)
      .join(' · '),
    meta,
    lessons: lessons
      ? lessons.lessons.map((l) => {
          const st = course.progress.get(l.id);
          const right = st?.skipped && !st.completed ? 'bỏ qua' : st?.completed ? (st.total ? `✓ ${st.score}/${st.total}` : '✓') : (stepLabel(st) ?? '');
          return { id: l.id, title: l.title_vi, right, done: Boolean(st?.completed) };
        })
      : null,
    test: lessons
      ? { href: `/learn/test/${stage.id}`, right: best ? `cao nhất ${best.score}/${best.total}` : `${stageTestSize(lessons.points.length).total} câu` }
      : null,
    grammar: stage.grammar,
    canOpenPack: Boolean(PACKS[stage.id]) && packPercent === null,
  };
}

/** Thi thử cuối cấp (F14): gợi ý khi đã qua mọi chặng của cấp nhưng không khóa. */
function LevelExamCard({ level, state, ready }: { level: string; state: LevelBest | undefined; ready: boolean }) {
  return (
    <Link
      href={`/learn/exam/${level}`}
      className={`scribble flex min-h-20 items-center gap-3 rounded-block p-4 ${ready && !state?.passed ? 'bg-pastel-yellow' : state?.passed ? 'bg-pastel-sage' : 'bg-surface'}`}
    >
      <span
        aria-hidden
        className={`grid size-14 shrink-0 place-items-center rounded-2xl ${state?.passed || ready ? 'bg-gold text-ink' : 'bg-bg text-muted'}`}
      >
        <Icon name="trophy" size={30} strokeWidth={2.4} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[17px] font-extrabold">Thi thử {level}</span>
        <span className="block text-[13px] font-semibold text-muted">
          {LEVEL_TOTAL} câu trộn cả cấp, đạt từ {Math.ceil(LEVEL_TOTAL * LEVEL_PASS_RATIO)} câu
          {ready && !state ? ' · nên làm ngay' : ''}
        </span>
        <span className="mt-0.5 block text-[13px] font-extrabold">
          {state ? (state.passed ? `✓ đã đạt · cao nhất ${state.score}/${state.total}` : `cao nhất ${state.score}/${state.total}`) : 'chưa làm'}
        </span>
      </span>
    </Link>
  );
}

function NextBlock({ next }: { next: CourseNext | null }) {
  if (!next) {
    return (
      <section className="scribble flex items-center gap-3 rounded-block bg-pastel-sage p-5">
        <GeoArt seed="course-done" className="h-20 w-28 shrink-0" />
        <div>
          <p className={blockLabelClass}>Bài tiếp theo</p>
          <p className="mt-1 text-[17px] font-bold">Bạn đã qua cả 50 chặng A1 → B2. Làm thi thử cuối cấp để ôn lại, rồi chuyển sang luyện đề thi thật.</p>
        </div>
      </section>
    );
  }
  const label = next.kind === 'lesson' ? (next.state && !lessonDone(next.state) ? 'Học tiếp' : 'Bắt đầu') : 'Làm kiểm tra';
  return (
    <section className="scribble rounded-block bg-pastel-sky p-5">
      <p className={blockLabelClass}>
        {next.kind === 'lesson' ? 'Bài tiếp theo' : 'Kiểm tra chặng'} · {next.stage.stage_id.toUpperCase()}
      </p>
      <p className="mt-1 text-[22px] font-extrabold leading-tight">
        {next.kind === 'lesson' ? next.lesson.title_vi : STAGES.find((s) => s.id === next.stage.stage_id)?.title_vi}
      </p>
      {next.kind === 'lesson' && <p className="mt-1 text-[15px] font-semibold opacity-80">{next.lesson.goal_vi}</p>}
      {next.kind === 'lesson' && stepLabel(next.state) && <p className="mt-1 text-[14px] font-extrabold text-blue">Đang ở {stepLabel(next.state)}</p>}
      <Link href={courseHref(next)} className={`${primaryClass} mt-4`}>
        {label}
        <Icon name="arrow" strokeWidth={2.8} />
      </Link>
    </section>
  );
}
