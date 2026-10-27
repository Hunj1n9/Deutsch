import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { BackupPanel } from '@/components/settings/BackupPanel';
import { ReminderPanel } from '@/components/settings/ReminderPanel';
import { ReportList, type ReportItem } from '@/components/settings/ReportList';
import { SettingsForm } from '@/components/settings/SettingsForm';
import { SourceManager } from '@/components/settings/SourceManager';
import { EXAM_LEVELS, type ExamLevel } from '@/lib/daily-goal';
import { loadSettings, loadSources } from '@/lib/supabase/queries';
import { getPageSession } from '@/lib/supabase/session';

export const metadata: Metadata = { title: 'Cài đặt' };

export default function Page() {
  return (
    <>
      <PageHeader title="Cài đặt" back={{ href: '/', label: 'Về Hôm nay' }} />
      <Suspense fallback={<p className="px-1 text-[15px] text-muted">Đang tải…</p>}>
        <Settings />
      </Suspense>
    </>
  );
}

async function Settings() {
  const session = await getPageSession();
  if (!session) return null;
  const [settings, sources, openReports, resolved] = await Promise.all([
    loadSettings(session),
    loadSources(session),
    session.supabase
      .from('content_reports')
      .select('id, target, excerpt, note, created_at')
      .is('resolved_at', null)
      .order('created_at', { ascending: false }),
    session.supabase.from('content_reports').select('id', { count: 'exact', head: true }).not('resolved_at', 'is', null),
  ]);
  return (
    <div className="flex flex-col gap-3">
      <SettingsForm
        sources={sources}
        initial={{
          current_level: settings.current_level,
          current_source_id: settings.current_source_id,
          next_exam_name: settings.next_exam_name ?? '',
          next_exam_date: settings.next_exam_date,
          exam_level: (EXAM_LEVELS as readonly string[]).includes(settings.exam_level) ? (settings.exam_level as ExamLevel) : 'B2',
          daily_minutes_target: settings.daily_minutes_target,
          weekly_days_target: settings.weekly_days_target,
          new_cards_per_day: settings.new_cards_per_day,
          desired_retention: settings.desired_retention,
          hours_offset: Number(settings.hours_offset),
        }}
      />
      <ReminderPanel
        initial={{
          reminder_enabled: settings.reminder_enabled,
          reminder_time: settings.reminder_time.slice(0, 5),
          nag_time: settings.nag_time ? settings.nag_time.slice(0, 5) : null,
        }}
        vapidKey={process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? null}
      />
      <SourceManager sources={sources} />
      <ReportList open={(openReports.data ?? []) as ReportItem[]} resolvedCount={resolved.count ?? 0} />
      <BackupPanel />
    </div>
  );
}
