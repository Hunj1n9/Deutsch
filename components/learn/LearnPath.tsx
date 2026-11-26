'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { StageStatus } from '@/lib/course/position';
import { Icon, type IconName } from '../Icon';
import { OpenStageButton } from '../roadmap/OpenStageButton';

export type PathLesson = { id: string; title: string; right: string; done: boolean };

export type PathStage = {
  id: string;
  order: number;
  title_vi: string;
  title_de: string;
  status: StageStatus | null;
  current: boolean;
  statusText: string;
  meta: string;
  lessons: PathLesson[] | null;
  test: { href: string; right: string } | null;
  grammar: string[];
  canOpenPack: boolean;
};

/** Lệch ngang của từng nút theo hình sóng, như đường học của app học ngôn ngữ. */
const WAVE = [0, 52, 78, 52, 0, -52, -78, -52];

const NODE: Record<'passed' | 'active' | 'new', { face: string; shade: string; icon: IconName }> = {
  passed: { face: 'bg-green text-white', shade: 'var(--green-shade)', icon: 'check' },
  active: { face: 'bg-primary text-on-primary', shade: 'var(--primary-shade)', icon: 'learn' },
  new: { face: 'bg-surface text-muted border-[1.5px] border-line', shade: 'var(--line)', icon: 'star' },
};

function kindOf(s: PathStage): keyof typeof NODE {
  if (s.status === 'passed') return 'passed';
  if (s.current || s.status === 'learning' || s.status === 'lessons_done') return 'active';
  return 'new';
}

/**
 * Đường học của một cấp: mỗi chặng là một nút tròn 3D xếp lượn sóng. Chạm nút mở bảng bài học của chặng.
 * Thứ tự chỉ là gợi ý (DECISIONS.md) nên không khóa chặng nào.
 */
export function LearnPath({ stages }: { stages: PathStage[] }) {
  const [open, setOpen] = useState<string | null>(() => stages.find((s) => s.current)?.id ?? null);
  const refs = useRef(new Map<string, HTMLLIElement>());

  // Thoát bài quay về /learn?level=..#a1-03: mở đúng chặng và cuộn tới.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id || !stages.some((s) => s.id === id)) return;
    const frame = requestAnimationFrame(() => {
      setOpen(id);
      refs.current.get(id)?.scrollIntoView({ block: 'center' });
    });
    return () => cancelAnimationFrame(frame);
  }, [stages]);

  return (
    <ol className="relative flex flex-col items-center gap-2 py-4">
      {stages.map((s, i) => {
        const k = kindOf(s);
        const node = NODE[k];
        const x = WAVE[i % WAVE.length];
        const isOpen = open === s.id;
        return (
          <li
            key={s.id}
            id={s.id}
            ref={(el) => {
              if (el) refs.current.set(s.id, el);
              else refs.current.delete(s.id);
            }}
            className={`flex w-full scroll-mt-24 flex-col items-center ${s.current ? 'pt-10' : ''}`}
          >
            <div className="relative flex flex-col items-center" style={{ transform: `translateX(${x}px)` }}>
              {s.current && !isOpen && (
                <span className="absolute -top-11 z-10 animate-hop whitespace-nowrap rounded-xl bg-primary px-3 py-1.5 text-[13px] font-bold text-on-primary">
                  {s.status === 'lessons_done' ? 'Kiểm tra' : s.status === 'learning' ? 'Học tiếp' : 'Bắt đầu'}
                  <span aria-hidden className="absolute -bottom-[5px] left-1/2 size-2.5 -translate-x-1/2 rotate-45 bg-primary" />
                </span>
              )}
              <span className="relative">
                {s.current && <span aria-hidden className="absolute inset-0 animate-pulse-ring rounded-[26px] bg-ink/25" />}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${s.id}-panel`}
                  aria-label={`Chặng ${s.order}: ${s.title_vi}, ${s.statusText}`}
                  onClick={() => setOpen(isOpen ? null : s.id)}
                  className={`btn-3d relative grid size-[72px] place-items-center rounded-[26px] ${node.face} ${isOpen ? 'ring-4 ring-blue/35' : ''}`}
                  style={{ boxShadow: `0 5px 0 ${node.shade}` }}
                >
                  <Icon name={k === 'new' ? 'star' : node.icon} size={30} strokeWidth={k === 'passed' ? 3.4 : 2.4} className={k === 'new' ? 'opacity-60' : ''} />
                  <span className="absolute -bottom-1.5 -right-1.5 grid h-6 min-w-6 place-items-center rounded-full border-2 border-bg bg-surface px-1 text-[11px] font-bold text-ink">
                    {String(s.order).padStart(2, '0')}
                  </span>
                </button>
              </span>
              <span className={`mt-3 max-w-[150px] text-center text-[13px] font-semibold leading-tight ${k === 'new' ? 'text-muted' : ''}`}>
                {s.title_vi}
              </span>
            </div>

            {isOpen && <StagePanel stage={s} kind={k} />}
          </li>
        );
      })}
    </ol>
  );
}

function StagePanel({ stage, kind }: { stage: PathStage; kind: keyof typeof NODE }) {
  const tone = kind === 'passed' ? 'bg-pastel-sage' : 'bg-surface';
  return (
    <div id={`${stage.id}-panel`} className={`scribble mt-3 w-full animate-pop-in rounded-block p-4 ${tone}`}>
      <p className="text-[12px] font-semibold text-muted">
        Chặng {stage.id.toUpperCase()} · {stage.statusText}
      </p>
      <p className="mt-0.5 text-[20px] font-extrabold leading-tight">{stage.title_vi}</p>
      <p className="mt-1 text-[13px] font-semibold text-muted" lang="de">
        {stage.title_de} · {stage.meta}
      </p>

      {stage.lessons ? (
        <ul className="mt-3 flex flex-col gap-2">
          {stage.lessons.map((l, i) => (
            <li key={l.id}>
              <Link href={`/learn/${l.id}`} className="flex min-h-12 items-center gap-3 rounded-xl bg-surface px-3 py-2 outline-[1.5px] outline-line">
                <span
                  aria-hidden
                  className={`grid size-8 shrink-0 place-items-center rounded-full text-[13px] font-bold ${l.done ? 'bg-green text-white' : 'bg-bg text-muted'}`}
                >
                  {l.done ? <Icon name="check" size={16} strokeWidth={3.4} /> : i + 1}
                </span>
                <span className="min-w-0 flex-1 text-[15px] font-semibold">{l.title}</span>
                <span className="shrink-0 text-[13px] font-medium text-muted">{l.right}</span>
              </Link>
            </li>
          ))}
          {stage.test && (
            <li>
              <Link href={stage.test.href} className="flex min-h-12 items-center gap-3 rounded-xl bg-surface px-3 py-2 outline-[1.5px] outline-line">
                <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full bg-gold text-ink">
                  <Icon name="trophy" size={17} strokeWidth={2.6} />
                </span>
                <span className="min-w-0 flex-1 text-[15px] font-semibold">Kiểm tra chặng</span>
                <span className="shrink-0 text-[13px] font-medium text-muted">{stage.test.right}</span>
              </Link>
            </li>
          )}
        </ul>
      ) : (
        <>
          <div className="mt-3 flex items-center justify-between gap-3">
            <ul className="flex flex-wrap gap-1.5">
              {stage.grammar.map((g) => (
                <li key={g} className="rounded-full bg-surface px-2.5 py-1 text-[12px] font-bold">
                  {g}
                </li>
              ))}
            </ul>
            {stage.canOpenPack && <OpenStageButton stageId={stage.id} primary={false} />}
          </div>
          <p className="mt-2 text-[12px] text-muted">Chưa có bài học; có thể mở gói từ để ôn trước.</p>
        </>
      )}
    </div>
  );
}
