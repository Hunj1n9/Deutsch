import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { ManualErrorForm } from '@/components/errors/ManualErrorForm';
import { PageHeader } from '@/components/PageHeader';
import { WeeklyBars } from '@/components/WeeklyBars';
import { CATEGORY_VI, ERROR_CATEGORIES, openErrorsByWeek, type ErrorCategory } from '@/lib/errors';
import { getPageSession } from '@/lib/supabase/session';
import { addDays, localDate, startOfLocalDay, weekStart } from '@/lib/time';

export const metadata: Metadata = { title: 'Sổ lỗi' };

export default function Page({ searchParams }: PageProps<'/errors'>) {
  return (
    <>
      <PageHeader title="Sổ lỗi" />
      <ManualErrorForm />
      <Suspense fallback={<p className="px-1 text-[15px] text-muted">Đang tải…</p>}>
        <ErrorList searchParams={searchParams} />
      </Suspense>
    </>
  );
}

type ErrorRow = {
  id: string;
  rule_key: string;
  category: ErrorCategory;
  title_vi: string;
  explanation_vi: string;
  occurrences: number;
  first_seen: string;
  last_seen: string;
  status: 'open' | 'resolved';
  resolved_at: string | null;
  error_occurrences: { text_wrong: string; text_correct: string; created_at: string }[];
};

const STATUS_VI = { open: 'Đang mở', resolved: 'Đã đóng' } as const;

function filterHref(current: Record<string, string>, key: string, value: string) {
  const next = new URLSearchParams(current);
  if (value) next.set(key, value);
  else next.delete(key);
  return `/errors${next.size ? `?${next}` : ''}`;
}

async function ErrorList({ searchParams }: { searchParams: PageProps<'/errors'>['searchParams'] }) {
  const session = await getPageSession();
  if (!session) return null;
  const params = await searchParams;
  const status = params.status === 'open' || params.status === 'resolved' ? params.status : '';
  const category = (ERROR_CATEGORIES as readonly string[]).includes(String(params.category)) ? String(params.category) : '';
  const current = Object.fromEntries(Object.entries({ status, category }).filter(([, v]) => v));

  const { data } = await session.supabase
    .from('errors')
    .select('id, rule_key, category, title_vi, explanation_vi, occurrences, first_seen, last_seen, status, resolved_at, error_occurrences(text_wrong, text_correct, created_at)')
    .order('occurrences', { ascending: false })
    .order('last_seen', { ascending: false });
  const all = (data ?? []) as ErrorRow[];
  const shown = all.filter((e) => (!status || e.status === status) && (!category || e.category === category));

  // Biểu đồ: số lỗi đang mở cuối mỗi tuần, 8 tuần gần nhất.
  const thisWeek = weekStart(localDate(new Date()));
  const weeks = Array.from({ length: 8 }, (_, i) => addDays(thisWeek, (i - 7) * 7));
  const ends = weeks.map((w, i) => (i === 7 ? new Date() : startOfLocalDay(addDays(w, 7))));
  const counts = openErrorsByWeek(all, ends);
  const chip = (active: boolean) =>
    `shrink-0 rounded-full px-3 py-2 text-[13px] font-semibold ${active ? 'bg-primary text-on-primary' : 'bg-surface text-muted'}`;

  return (
    <>
      <div className="mb-3">
        <WeeklyBars title="Số lỗi đang mở (8 tuần)" labels={weeks.map((w) => `${w.slice(8)}/${w.slice(5, 7)}`)} values={counts} />
      </div>

      <nav className="-mx-5 mb-2 flex gap-2 overflow-x-auto px-5 pb-1" aria-label="Lọc theo trạng thái">
        {(['', 'open', 'resolved'] as const).map((s) => (
          <Link key={s || 'all'} href={filterHref(current, 'status', s)} className={chip(status === s)}>
            {s ? STATUS_VI[s] : 'Tất cả'}
          </Link>
        ))}
      </nav>
      <nav className="-mx-5 mb-3 flex gap-2 overflow-x-auto px-5 pb-1" aria-label="Lọc theo loại lỗi">
        <Link href={filterHref(current, 'category', '')} className={chip(!category)}>
          Mọi loại
        </Link>
        {ERROR_CATEGORIES.filter((c) => all.some((e) => e.category === c)).map((c) => (
          <Link key={c} href={filterHref(current, 'category', c)} className={chip(category === c)}>
            {CATEGORY_VI[c]}
          </Link>
        ))}
      </nav>

      {shown.length === 0 ? (
        <p className="rounded-block bg-surface p-5 text-[15px] text-muted">
          {all.length === 0 ? 'Chưa có lỗi nào. Lỗi từ bài viết, phiên ôn và gia sư sẽ được ghi ở đây.' : 'Không có lỗi khớp bộ lọc.'}
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {shown.map((e) => {
            const seen = new Set<string>();
            const recent = [...e.error_occurrences]
              .sort((a, b) => b.created_at.localeCompare(a.created_at))
              .filter((o) => (seen.has(o.text_wrong) ? false : (seen.add(o.text_wrong), true)))
              .slice(0, 3);
            return (
              <li key={e.id} className={`rounded-block p-5 ${e.status === 'open' ? 'scribble bg-pastel-pink' : 'bg-surface'}`}>
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[18px] font-bold leading-snug">{e.title_vi}</p>
                  <span className="shrink-0 rounded-full bg-surface px-2.5 py-1 text-[12px] font-semibold">
                    {e.occurrences} lần
                  </span>
                </div>
                <p className="text-[12px] opacity-70">
                  {CATEGORY_VI[e.category]} · {STATUS_VI[e.status]} · {e.rule_key}
                </p>
                <p className="mt-2 text-[15px]">{e.explanation_vi}</p>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {recent.map((o, i) => (
                    <li key={i} className="rounded-[14px] bg-surface/70 px-3 py-2 text-[14px]" lang="de">
                      <span className="line-through opacity-60">{o.text_wrong}</span>
                      <br />
                      <span className="font-semibold">{o.text_correct}</span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
