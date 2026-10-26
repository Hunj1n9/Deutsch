import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { ActivityTracker } from '@/components/ActivityTracker';
import { Icon } from '@/components/Icon';
import { StageTest } from '@/components/learn/StageTest';
import { STAGE_LESSONS } from '@/data/lessons';
import { vocabEntries } from '@/lib/course/catalog';
import { drawLevelTest, isExamLevel, LEVEL_PASS_RATIO, levelPointKey, levelStages } from '@/lib/course/level-test';
import { randomSeed, testView } from '@/lib/course/stage-test';
import { getPageSession } from '@/lib/supabase/session';

export const metadata: Metadata = { title: 'Thi thử cuối cấp' };

export default function Page({ params }: PageProps<'/learn/exam/[level]'>) {
  return (
    <>
      <ActivityTracker activity="lesson" />
      <Suspense fallback={<p className="mt-4 px-1 text-[15px] text-muted">Đang rút đề…</p>}>
        <ExamContent params={params} />
      </Suspense>
    </>
  );
}

async function ExamContent({ params }: { params: PageProps<'/learn/exam/[level]'>['params'] }) {
  const { level } = await params;
  if (!isExamLevel(level)) notFound();
  const stages = levelStages(STAGE_LESSONS, level);
  if (stages.length === 0) notFound();
  const session = await getPageSession();
  if (!session) return null;

  // Rút đề mới mỗi lần mở trang.
  const seed = randomSeed();
  const vocab = new Map(stages.map((s) => [s.stage_id, vocabEntries(s.stage_id)]));
  const questions = drawLevelTest(stages, vocab, seed).map(testView);
  const nextLevel = STAGE_LESSONS.find((s) => s.stage_id > stages[stages.length - 1].stage_id);

  return (
    <>
      <header className="mb-4 mt-2 flex items-center gap-3">
        <Link href={`/learn?level=${level}`} aria-label="Thoát thi thử" className="grid size-11 shrink-0 place-items-center rounded-full bg-surface">
          <Icon name="x" />
        </Link>
        <div className="min-w-0">
          <p className="text-[12px] font-semibold text-muted">{level} · thi thử cuối cấp</p>
          <h1 className="truncate text-[20px] font-bold leading-tight">Ôn cả cấp {level}</h1>
        </div>
      </header>
      <StageTest
        key={seed}
        mode={{ kind: 'level', level }}
        title={`Thi thử ${level}`}
        passRatio={LEVEL_PASS_RATIO}
        questions={questions}
        readings={Object.fromEntries(
          stages.map((s) => [s.stage_id, { title_de: s.test.reading.title_de, text_de: s.test.reading.text_de, gloss: s.test.reading.gloss }]),
        )}
        points={stages.flatMap((s) =>
          s.points.map((p) => ({
            key: levelPointKey(s.stage_id, p.key),
            title_vi: `${s.stage_id.toUpperCase()} · ${p.title_vi}`,
            lessonId: s.lessons.find((l) => l.grammar.point === p.key)?.id ?? null,
          })),
        )}
        lessonLinks={stages.flatMap((s) => s.lessons.map((l) => ({ id: l.id, title_vi: l.title_vi })))}
        next={nextLevel ? { href: `/learn/${nextLevel.lessons[0].id}`, label: `Sang cấp ${nextLevel.stage_id.slice(0, 2).toUpperCase()}` } : null}
      />
    </>
  );
}
