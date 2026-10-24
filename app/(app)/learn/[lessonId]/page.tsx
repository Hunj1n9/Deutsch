import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { ActivityTracker } from '@/components/ActivityTracker';
import { Icon } from '@/components/Icon';
import { LessonPlayer } from '@/components/learn/LessonPlayer';
import type { WordView } from '@/components/learn/WordsStep';
import { primaryClass, secondaryClass } from '@/components/ui';
import { STAGE_LESSONS } from '@/data/lessons';
import { findLesson, grammarPoint, lessonDrafts } from '@/lib/course/catalog';
import { loadCourseState } from '@/lib/course/db';
import { unfinishedBefore } from '@/lib/course/position';
import { SUMMARY_STEP } from '@/lib/course/types';
import { stripCloze } from '@/lib/items/cloze';
import { POS_LABEL_VI, isArticle } from '@/lib/items/types';
import { getPageSession } from '@/lib/supabase/session';

export const metadata: Metadata = { title: 'Bài học' };

// Làm bài không có thanh điều hướng dưới (như phiên ôn); thoát bằng nút X.
export default function Page({ params, searchParams }: PageProps<'/learn/[lessonId]'>) {
  return (
    <>
      <ActivityTracker activity="lesson" />
      <Suspense fallback={<p className="mt-4 px-1 text-[15px] text-muted">Đang mở bài…</p>}>
        <LessonContent params={params} searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function LessonContent({
  params,
  searchParams,
}: {
  params: PageProps<'/learn/[lessonId]'>['params'];
  searchParams: PageProps<'/learn/[lessonId]'>['searchParams'];
}) {
  const [{ lessonId }, query] = await Promise.all([params, searchParams]);
  const found = findLesson(lessonId);
  if (!found) notFound();
  const session = await getPageSession();
  if (!session) return null;
  const { lesson, stage, index } = found;
  const course = await loadCourseState(session);

  const before = unfinishedBefore(STAGE_LESSONS, lesson.id, course.progress, course.passed);
  if (before && query.force !== '1' && !course.progress.has(lesson.id)) {
    return (
      <div className="mt-4 flex flex-col gap-3">
        <header className="flex items-center gap-3">
          <Link href="/learn" aria-label="Quay lại trang Học" className="grid size-11 place-items-center rounded-full bg-surface">
            <Icon name="back" />
          </Link>
          <h1 className="text-[22px] font-bold">{lesson.title_vi}</h1>
        </header>
        <p className="rounded-[20px] bg-pastel-yellow p-4 text-[15px] leading-relaxed">
          Bạn chưa xong bài <b>{before.title_vi}</b> ({before.id.toUpperCase()}). Học theo thứ tự sẽ dễ hơn, nhưng nếu đã học phần này ở
          giáo trình thì cứ học tiếp.
        </p>
        <Link href={`/learn/${before.id}`} className={primaryClass}>
          Học bài {before.id.toUpperCase()} trước
        </Link>
        <Link href={`/learn/${lesson.id}?force=1`} className={secondaryClass}>
          Vẫn học bài này
        </Link>
      </div>
    );
  }

  const state = course.progress.get(lesson.id);
  const words: WordView[] = lessonDrafts(lesson)
    .filter((d) => d.type !== 'grammar')
    .map((d) => ({
      key: d.german,
      german: d.german,
      article: d.article && isArticle(d.article) ? d.article : null,
      plural: d.plural || null,
      vietnamese: d.vietnamese,
      example: d.example_de ? stripCloze(d.example_de) : null,
      exampleVi: d.example_vi || null,
      note: d.grammar_note_vi || null,
      posLabel: d.pos ? POS_LABEL_VI[d.pos] : null,
    }));

  const nextLesson = stage.lessons[index + 1];
  const next = nextLesson
    ? { href: `/learn/${nextLesson.id}`, label: `Bài tiếp: ${nextLesson.title_vi}` }
    : { href: `/learn/test/${stage.stage_id}`, label: 'Làm kiểm tra chặng' };

  return (
    <LessonPlayer
      key={`${lesson.id}-${state?.step ?? 0}`}
      lesson={lesson}
      point={grammarPoint(stage, lesson.grammar.point)}
      words={words}
      itemCount={lesson.items.length}
      initial={{
        step: state?.skipped && !state.completed ? 0 : Math.min(state?.step ?? 0, SUMMARY_STEP),
        score: state?.score ?? 0,
        total: state?.total ?? 0,
        completed: Boolean(state?.completed),
      }}
      next={next}
    />
  );
}
