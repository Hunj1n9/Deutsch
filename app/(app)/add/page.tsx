import type { Metadata } from 'next';
import { Suspense } from 'react';
import { AddTabs } from '@/components/add/AddTabs';
import { PageHeader } from '@/components/PageHeader';
import { emptyDraft } from '@/lib/items/types';
import { loadSettings, loadSources } from '@/lib/supabase/queries';
import { getPageSession } from '@/lib/supabase/session';

export const metadata: Metadata = { title: 'Thêm nội dung' };

export default function Page({ searchParams }: PageProps<'/add'>) {
  return (
    <>
      <PageHeader title="Thêm nội dung" back={{ href: '/', label: 'Về Hôm nay' }} />
      <Suspense fallback={<p className="px-1 text-[15px] text-muted">Đang tải…</p>}>
        <AddContent searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function AddContent({ searchParams }: { searchParams: PageProps<'/add'>['searchParams'] }) {
  const params = await searchParams;
  const session = await getPageSession();
  if (!session) return null;
  const [settings, sources] = await Promise.all([loadSettings(session), loadSources(session)]);
  const sourceId = sources.some((s) => s.id === settings.current_source_id) ? settings.current_source_id : null;
  // Điền sẵn khi mở từ Viết hoặc Gia sư ("Tạo thẻ từ câu này", "Lưu thành thẻ").
  const german = typeof params.german === 'string' ? params.german.slice(0, 300) : '';
  const type = params.type === 'phrase' || params.type === 'grammar' ? params.type : 'word';
  return (
    <AddTabs
      level={settings.current_level}
      sources={sources}
      sourceId={sourceId}
      prefill={german ? { ...emptyDraft(type), german } : undefined}
    />
  );
}
