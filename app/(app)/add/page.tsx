import type { Metadata } from 'next';
import { Suspense } from 'react';
import { AddTabs } from '@/components/add/AddTabs';
import { PageHeader } from '@/components/PageHeader';
import { loadSettings, loadSources } from '@/lib/supabase/queries';
import { getPageSession } from '@/lib/supabase/session';

export const metadata: Metadata = { title: 'Thêm nội dung' };

export default function Page() {
  return (
    <>
      <PageHeader title="Thêm nội dung" />
      <Suspense fallback={<p className="px-1 text-[15px] text-muted">Đang tải…</p>}>
        <AddContent />
      </Suspense>
    </>
  );
}

async function AddContent() {
  const session = await getPageSession();
  if (!session) return null;
  const [settings, sources] = await Promise.all([loadSettings(session), loadSources(session)]);
  const sourceId = sources.some((s) => s.id === settings.current_source_id) ? settings.current_source_id : null;
  return <AddTabs level={settings.current_level} sources={sources} sourceId={sourceId} />;
}
