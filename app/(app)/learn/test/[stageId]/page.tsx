import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { ActivityTracker } from '@/components/ActivityTracker';
import { Icon } from '@/components/Icon';
import { StageTest } from '@/components/learn/StageTest';
import { LESSONS_BY_STAGE, STAGE_LESSONS } from '@/data/lessons';
import { roadmapStage, vocabEntries } from '@/lib/course/catalog';
import { drawStageTest, randomSeed, testView } from '@/lib/course/stage-test';
import { getPageSession } from '@/lib/supabase/session';

export const metadata: Metadata = { title: 'Kiểm tra chặng' };

export default function Page({ params }: PageProps<'/learn/test/[stageId]'>) {
  return (
    <>
      <ActivityTracker activity="lesson" />
      <Suspense fallback={<p className="mt-4 px-1 text-[15px] text-muted">Đang rút đề…</p>}>
        <TestContent params={params} />
      </Suspense>
    </>
  );
}

async function TestContent({ params }: { params: PageProps<'/learn/test/[stageId]'>['params'] }) {
  const { stageId } = await params;
  const stage = LESSONS_BY_STAGE.get(stageId);
  const roadmap = roadmapStage(stageId);
  if (!stage || !roadmap) notFound();
  const session = await getPageSession();
  if (!session) return null;

  // Rút đề mới mỗi lần mở trang để làm lại không thuộc lòng đề.
  const seed = randomSeed();
  const questions = drawStageTest(stage, vocabEntries(stageId), seed).map(testView);
  const nextStage = STAGE_LESSONS[STAGE_LESSONS.indexOf(stage) + 1];

  return (
    <>
      <header className="mb-4 mt-2 flex items-center gap-3">
        <Link href="/learn" aria-label="Thoát kiểm tra" className="grid size-11 shrink-0 place-items-center rounded-full bg-surface">
          <Icon name="x" />
        </Link>
        <div className="min-w-0">
          <p className="text-[12px] font-semibold text-muted">{stageId.toUpperCase()} · kiểm tra chặng</p>
          <h1 className="truncate text-[20px] font-bold leading-tight">{roadmap.title_vi}</h1>
        </div>
      </header>
      <StageTest
        key={seed}
        stageId={stageId}
        questions={questions}
        reading={{ title_de: stage.test.reading.title_de, text_de: stage.test.reading.text_de, gloss: stage.test.reading.gloss }}
        points={stage.points.map((p) => ({
          key: p.key,
          title_vi: p.title_vi,
          lessonId: stage.lessons.find((l) => l.grammar.point === p.key)?.id ?? null,
        }))}
        lessonLinks={stage.lessons.map((l) => ({ id: l.id, title_vi: l.title_vi }))}
        next={nextStage ? { href: `/learn/${nextStage.lessons[0].id}`, label: `Sang chặng ${nextStage.stage_id.toUpperCase()}` } : null}
      />
    </>
  );
}
