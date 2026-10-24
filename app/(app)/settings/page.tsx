import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { BackupPanel } from '@/components/settings/BackupPanel';
import { SettingsForm } from '@/components/settings/SettingsForm';
import { SourceManager } from '@/components/settings/SourceManager';
import { loadSettings, loadSources } from '@/lib/supabase/queries';
import { getPageSession } from '@/lib/supabase/session';

export const metadata: Metadata = { title: 'Cài đặt' };

export default function Page() {
  return (
    <>
      <PageHeader title="Cài đặt" />
      <Suspense fallback={<p className="px-1 text-[15px] text-muted">Đang tải…</p>}>
        <Settings />
      </Suspense>
    </>
  );
}

async function Settings() {
  const session = await getPageSession();
  if (!session) return null;
  const [settings, sources] = await Promise.all([loadSettings(session), loadSources(session)]);
  return (
    <div className="flex flex-col gap-3">
      <SettingsForm
        sources={sources}
        initial={{
          current_level: settings.current_level,
          current_source_id: settings.current_source_id,
          next_exam_name: settings.next_exam_name ?? '',
          next_exam_date: settings.next_exam_date,
          daily_minutes_target: settings.daily_minutes_target,
          weekly_days_target: settings.weekly_days_target,
          new_cards_per_day: settings.new_cards_per_day,
          desired_retention: settings.desired_retention,
          hours_offset: Number(settings.hours_offset),
        }}
      />
      <SourceManager sources={sources} />
      <BackupPanel />
    </div>
  );
}
