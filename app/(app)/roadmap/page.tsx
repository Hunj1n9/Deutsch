import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { OpenStageButton } from '@/components/roadmap/OpenStageButton';
import { PACKS } from '@/data/packs';
import { STAGES, stageHours, type Stage } from '@/data/roadmap';
import { LEARNED_THRESHOLD, roadmapPosition, stagePercent } from '@/lib/roadmap';
import { loadRoadmapProgress, stageItemCount } from '@/lib/roadmap-db';
import { getPageSession } from '@/lib/supabase/session';

export const metadata: Metadata = { title: 'Lộ trình' };

export default function Page() {
  return (
    <>
      <PageHeader title="Lộ trình" subtitle="A1 → B2" />
      <Suspense fallback={<p className="px-1 text-[15px] text-muted">Đang tải…</p>}>
        <Roadmap />
      </Suspense>
    </>
  );
}

const LEVELS: Stage['level'][] = ['A1', 'A2', 'B1', 'B2'];

async function Roadmap() {
  const session = await getPageSession();
  if (!session) return null;
  const progress = await loadRoadmapProgress(session);
  const available = STAGES.filter((s) => PACKS[s.id]);
  const { current, next } = roadmapPosition(available, progress);

  return (
    <div className="flex flex-col gap-4">
      <p className="rounded-[20px] bg-surface p-4 text-[14px] leading-relaxed text-muted">
        Mỗi chặng: học bài trong giáo trình/khóa học của bạn, rồi <b className="text-ink">mở chặng</b> để đưa gói từ vào ôn. Thẻ mới
        vào phiên ôn theo giới hạn thẻ mới mỗi ngày. Chặng tính là thuộc khi {Math.round(LEARNED_THRESHOLD * 100)}% thẻ đã lên mức Ôn.
      </p>

      {LEVELS.map((level) => {
        const stages = STAGES.filter((s) => s.level === level);
        const ready = stages.filter((s) => PACKS[s.id]);
        return (
          <section key={level} className="flex flex-col gap-2">
            <h2 className="px-1 text-[22px] font-bold">
              {level}{' '}
              <span className="text-[13px] font-semibold text-muted">
                {ready.length < stages.length ? `${ready.length}/${stages.length} chặng có gói` : `${stages.length} chặng`}
              </span>
            </h2>
            {stages.map((s) => {
              const p = progress.get(s.id);
              const pct = stagePercent(p);
              const isCurrent = current?.id === s.id;
              const hasPack = Boolean(PACKS[s.id]);
              return (
                <article
                  key={s.id}
                  id={s.id}
                  className={`rounded-[20px] p-4 ${isCurrent ? 'scribble bg-pastel-sky outline-2 outline-ink' : 'bg-surface'}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[12px] font-semibold text-muted">
                        {s.level} · {String(s.order).padStart(2, '0')}
                        {isCurrent && ' · đang học'}
                      </p>
                      <p className="text-[17px] font-bold leading-snug">{s.title_vi}</p>
                      <p className="text-[13px] text-muted" lang="de">
                        {s.title_de} · ~{stageHours(s)} giờ{hasPack && ` · ${stageItemCount(s)} mục`}
                      </p>
                    </div>
                    {hasPack && !p?.opened && <OpenStageButton stageId={s.id} primary={next?.id === s.id} />}
                    {p?.opened && (
                      <span className={`shrink-0 text-[15px] font-bold ${pct >= LEARNED_THRESHOLD ? 'text-ok' : ''}`}>
                        {Math.round(pct * 100)}%
                      </span>
                    )}
                    {!hasPack && <span className="shrink-0 text-[12px] text-muted">Chưa có gói</span>}
                  </div>
                  {p?.opened && (
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-bg" aria-label={`Đã thuộc ${Math.round(pct * 100)}%`}>
                      <div className="h-full rounded-full bg-ink" style={{ width: `${pct * 100}%` }} />
                    </div>
                  )}
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {s.grammar.map((g) => (
                      <li key={g} className="rounded-full bg-bg px-2.5 py-1 text-[12px]">
                        {g}
                      </li>
                    ))}
                  </ul>
                  {p?.opened && (
                    <Link href={`/items?q=&level=${s.level}`} className="mt-2 inline-block text-[13px] font-semibold text-muted underline">
                      Xem mục cấp {s.level}
                    </Link>
                  )}
                </article>
              );
            })}
          </section>
        );
      })}
    </div>
  );
}
