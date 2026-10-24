import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { ReportButton } from '@/components/progress/ReportButton';
import { WeeklyBars } from '@/components/WeeklyBars';
import { loadProgress } from '@/lib/progress';
import { retentionRate, type ReviewRow } from '@/lib/stats';
import { loadSettings } from '@/lib/supabase/queries';
import { getPageSession } from '@/lib/supabase/session';

export const metadata: Metadata = { title: 'Tiến độ' };

export default function Page() {
  return (
    <>
      <PageHeader title="Tiến độ" />
      <Suspense fallback={<p className="px-1 text-[15px] text-muted">Đang tính…</p>}>
        <Progress />
      </Suspense>
    </>
  );
}

const STATE_VI = ['Mới', 'Đang học', 'Ôn', 'Học lại'];
const fmtDate = (d: Date) => d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
/** Mốc thời gian n ngày trước (tính theo từng request). */
function daysAgo(n: number): string {
  return new Date(Date.now() - n * 86_400_000).toISOString();
}

const fmt1 = (n: number) => n.toLocaleString('vi-VN', { maximumFractionDigits: 1 });

async function Progress() {
  const session = await getPageSession();
  if (!session) return null;
  const settings = await loadSettings(session);
  const since30 = daysAgo(30);

  const [p, logs, cardStates, openErrors, reports] = await Promise.all([
    loadProgress(session, settings, 12),
    session.supabase.from('review_logs').select('reviewed_at, state_before, correct').gte('reviewed_at', since30),
    Promise.all(
      [0, 1, 2, 3].map((s) =>
        session.supabase.from('cards').select('id', { count: 'exact', head: true }).eq('state', s).eq('suspended', false),
      ),
    ),
    session.supabase.from('errors').select('id', { count: 'exact', head: true }).eq('status', 'open'),
    session.supabase.from('weekly_reports').select('week_start, summary_vi, stats').order('week_start', { ascending: false }).limit(8),
  ]);
  const retention = retentionRate((logs.data ?? []) as ReviewRow[]);
  const labels = p.weeks.map((w) => `${w.week.slice(8)}/${w.week.slice(5, 7)}`);
  const isSunday = new Date(`${p.today}T00:00:00Z`).getUTCDay() === 0;

  return (
    <div className="flex flex-col gap-3">
      <section className="scribble rounded-block bg-pastel-sage p-5">
        <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">Dự báo</p>
        <p className="mt-1 text-[15px]">
          Đã học <b className="text-[22px]">{fmt1(p.hoursDone)}</b> giờ · tốc độ {fmt1(p.rate)} giờ/tuần (4 tuần gần nhất)
        </p>
        <ul className="mt-3 flex flex-col gap-1.5">
          {p.milestones.map((m) => (
            <li key={m.level} className="flex justify-between rounded-[14px] bg-surface/70 px-3 py-2 text-[15px]">
              <span>
                <b>{m.level}</b> · {m.target} giờ
              </span>
              <span className={m.reached ? 'font-semibold text-ok' : ''}>
                {m.reached ? 'Đã đạt' : m.date ? `${fmtDate(m.date)} (${Math.ceil(m.weeks ?? 0)} tuần)` : 'Chưa đủ số liệu'}
              </span>
            </li>
          ))}
        </ul>
        {p.warning && (
          <p role="alert" className="mt-3 rounded-[16px] bg-pastel-pink p-3 text-[14px]">
            ⚠ Theo tốc độ này, B2 đạt {p.warning.b2Date ? fmtDate(p.warning.b2Date) : 'chưa xác định'}, muộn hơn ngày thi{' '}
            {settings.next_exam_date}. Cần học khoảng {fmt1(p.warning.neededHoursPerDay)} giờ/ngày (tăng {fmt1(p.warning.extraHoursPerDay)}{' '}
            giờ/ngày).
          </p>
        )}
      </section>

      <WeeklyBars title="Giờ học mỗi tuần (12 tuần)" labels={labels} values={p.weeks.map((w) => w.hours)} unit=" giờ" format={fmt1} />
      <WeeklyBars title="Số ngày học mỗi tuần" labels={labels} values={p.weeks.map((w) => w.days)} unit=" ngày" />

      <section className="grid grid-cols-2 gap-3">
        <div className="rounded-[20px] bg-surface p-4">
          <p className="text-[13px] font-semibold text-muted">Tỉ lệ nhớ (30 ngày)</p>
          <p className="text-[28px] font-bold">{retention === null ? '—' : `${Math.round(retention * 100)}%`}</p>
          <p className="text-[12px] text-muted">Mục tiêu {Math.round(settings.desired_retention * 100)}%</p>
        </div>
        <div className="rounded-[20px] bg-surface p-4">
          <p className="text-[13px] font-semibold text-muted">Lỗi đang mở</p>
          <p className="text-[28px] font-bold">{openErrors.count ?? 0}</p>
        </div>
        <div className="col-span-2 rounded-[20px] bg-surface p-4">
          <p className="mb-1 text-[13px] font-semibold text-muted">Thẻ theo trạng thái</p>
          <div className="grid grid-cols-4 text-center">
            {cardStates.map((r, i) => (
              <div key={i}>
                <p className="text-[22px] font-bold">{r.count ?? 0}</p>
                <p className="text-[12px] text-muted">{STATE_VI[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-block bg-surface p-5">
        <p className="mb-2 text-[18px] font-bold">Báo cáo tuần</p>
        <ReportButton suggest={isSunday} />
        <ul className="mt-3 flex flex-col gap-3">
          {((reports.data ?? []) as { week_start: string; summary_vi: string; stats: { adjustments?: string[] } }[]).map((r) => (
            <li key={r.week_start} className="rounded-[16px] bg-bg p-3">
              <p className="text-[13px] font-semibold text-muted">Tuần từ {r.week_start.split('-').reverse().join('/')}</p>
              <p className="text-[15px]">{r.summary_vi}</p>
              {r.stats.adjustments && (
                <ol className="mt-1 list-decimal pl-5 text-[14px]">
                  {r.stats.adjustments.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
