import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ActivityTracker } from '@/components/ActivityTracker';
import { PageHeader } from '@/components/PageHeader';
import { TutorChat, type ChatMessage, type ThreadOption } from '@/components/tutor/TutorChat';
import { uuidSchema } from '@/lib/items/input';
import { getPageSession } from '@/lib/supabase/session';
import { findLesson } from '@/lib/course/catalog';

export const metadata: Metadata = { title: 'Gia sư' };

export default function Page({ searchParams }: PageProps<'/tutor'>) {
  return (
    <>
      <PageHeader title="Gia sư" />
      <ActivityTracker activity="tutor" />
      <Suspense fallback={<p className="px-1 text-[15px] text-muted">Đang tải…</p>}>
        <Chat searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function Chat({ searchParams }: { searchParams: PageProps<'/tutor'>['searchParams'] }) {
  const session = await getPageSession();
  if (!session) return null;
  const params = await searchParams;
  const threadParam = typeof params.thread === 'string' && uuidSchema.safeParse(params.thread).success ? params.thread : null;
  const cardId = typeof params.card === 'string' && uuidSchema.safeParse(params.card).success ? params.card : null;
  // Mở từ bài học (F11): ?lesson=<mã bài>&ex=<mã bài tập>.
  const lessonFound = typeof params.lesson === 'string' ? findLesson(params.lesson) : null;
  const lessonRef = lessonFound
    ? { lessonId: lessonFound.lesson.id, exerciseId: typeof params.ex === 'string' ? params.ex.slice(0, 80) : null }
    : null;

  const { data: threads } = await session.supabase
    .from('tutor_threads')
    .select('id, title, created_at')
    .order('created_at', { ascending: false })
    .limit(30);

  // Mở từ thẻ ôn thì bắt đầu luồng mới với ngữ cảnh thẻ; không thì mở luồng được chọn.
  const threadId = cardId || lessonRef ? null : threadParam;
  let messages: ChatMessage[] = [];
  let cardLabel: string | null = lessonFound ? `${lessonFound.lesson.id.toUpperCase()} ${lessonFound.lesson.title_vi}` : null;
  if (threadId) {
    const { data } = await session.supabase
      .from('tutor_messages')
      .select('id, role, content')
      .eq('thread_id', threadId)
      .order('created_at');
    messages = (data ?? []) as ChatMessage[];
  }
  if (cardId) {
    const { data } = await session.supabase.from('cards').select('items!inner(german, vietnamese)').eq('id', cardId).maybeSingle();
    const item = (data as unknown as { items: { german: string; vietnamese: string } } | null)?.items;
    if (item) cardLabel = `${item.german} — ${item.vietnamese}`;
  }

  return (
    <TutorChat
      key={threadId ?? `new-${cardId ?? lessonRef?.exerciseId ?? lessonRef?.lessonId ?? ''}`}
      threads={(threads ?? []) as ThreadOption[]}
      threadId={threadId}
      initialMessages={messages}
      cardId={cardId}
      cardLabel={cardLabel}
      lessonRef={lessonRef}
    />
  );
}
