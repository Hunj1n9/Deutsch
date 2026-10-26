import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { ItemEditForm, type EditableCard } from '@/components/items/ItemEditForm';
import { ADDABLE_TYPES, isArticle, posFromTags, type AddableType, type ItemDraft, type Level } from '@/lib/items/types';
import { uuidSchema } from '@/lib/items/input';
import { loadSources } from '@/lib/supabase/queries';
import { getPageSession } from '@/lib/supabase/session';

export const metadata: Metadata = { title: 'Sửa mục' };

export default function Page({ params }: PageProps<'/items/[id]'>) {
  return (
    <>
      <PageHeader title="Sửa mục" back={{ href: '/items', label: 'Quay lại danh sách' }} />
      <Suspense fallback={<p className="px-1 text-[15px] text-muted">Đang tải…</p>}>
        <EditContent params={params} />
      </Suspense>
    </>
  );
}

type ItemRecord = {
  id: string;
  type: string;
  german: string;
  article: string | null;
  plural: string | null;
  vietnamese: string;
  example_de: string | null;
  example_vi: string | null;
  grammar_note_vi: string | null;
  level: Level | null;
  source_id: string | null;
  tags: string[] | null;
  cards: EditableCard[];
};

async function EditContent({ params }: { params: PageProps<'/items/[id]'>['params'] }) {
  const { id } = await params;
  if (!uuidSchema.safeParse(id).success) notFound();
  const session = await getPageSession();
  if (!session) return null;

  const [{ data }, sources] = await Promise.all([
    session.supabase
      .from('items')
      .select(
        'id, type, german, article, plural, vietnamese, example_de, example_vi, grammar_note_vi, level, source_id, tags, cards(id, kind, suspended, due, reps, state)',
      )
      .eq('id', id)
      .maybeSingle(),
    loadSources(session),
  ]);
  if (!data) notFound();
  const item = data as ItemRecord;

  const editable = (ADDABLE_TYPES as readonly string[]).includes(item.type);
  const draft: ItemDraft = {
    type: editable ? (item.type as AddableType) : 'phrase',
    german: item.german,
    article: item.article && isArticle(item.article) ? item.article : null,
    plural: item.plural ?? '',
    vietnamese: item.vietnamese,
    example_de: item.example_de ?? '',
    example_vi: item.example_vi ?? '',
    grammar_note_vi: item.grammar_note_vi ?? '',
    pos: posFromTags(item.tags),
  };

  return (
    <ItemEditForm
      id={item.id}
      initialDraft={draft}
      editable={editable}
      level={item.level}
      sourceId={item.source_id}
      sources={sources}
      cards={item.cards}
    />
  );
}
