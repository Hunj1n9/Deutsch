'use client';

import { useEffect, useId, useMemo, useRef } from 'react';
import type { Outfit } from '@/lib/bello-items';
import { useOutfit } from './outfit-store';
import { coatVars, createDog, dogMarkup, FPS, mixPose, poseAt, TRANSITION, VIEWBOX, type BelloState, type Dog, type Pose } from './rig';

export type { BelloState } from './rig';

// Một đồng hồ chung cho mọi Bello trên trang: một setInterval theo FPS, tắt khi không còn Bello nào chạy.
type Actor = (clock: number, tick: number) => void;
const actors = new Set<Actor>();
let timer: ReturnType<typeof setInterval> | null = null;
let clock = 0;
let tick = 0;

function step() {
  if (document.hidden) return;
  for (const a of actors) a(clock, tick);
  tick++;
  clock += 1 / FPS;
}

function join(a: Actor) {
  actors.add(a);
  timer ??= setInterval(step, 1000 / FPS);
}

function leave(a: Actor) {
  actors.delete(a);
  if (actors.size === 0 && timer) {
    clearInterval(timer);
    timer = null;
  }
}

/** Lệch nhịp theo từng Bello để hai Bello cùng trang không cử động y hệt nhau. */
function offsetOf(uid: string): number {
  let h = 0;
  for (const ch of uid) h = (h * 31 + ch.charCodeAt(0)) | 0;
  return (Math.abs(h) % 300) / 100;
}

/**
 * Bello (SPEC F17): SVG dựng một lần, mỗi khung chỉ đặt lại thuộc tính qua `createDog`, không render lại React.
 * Đổi `state` thì chuyển tư thế trong 0,6 giây. Bật giảm chuyển động thì đứng yên ở tư thế của trạng thái, không rung nét.
 */
export function Bello({
  state,
  from,
  outfit,
  label,
  className = '',
}: {
  state: BelloState;
  /** Tư thế lúc vừa hiện, rồi chuyển sang `state` (vd. từ đứng chờ sang vui trong dải phản hồi). */
  from?: BelloState;
  /** Bỏ trống thì mặc bộ đồ đang lưu. */
  outfit?: Outfit;
  /** Có `label` thì Bello được đọc như ảnh; không thì chỉ để trang trí. */
  label?: string;
  className?: string;
}) {
  const uid = `b${useId().replace(/[^\w-]/g, '')}`;
  const stored = useOutfit();
  const wearing = outfit ?? stored;
  const svgRef = useRef<SVGSVGElement>(null);
  const markup = useMemo(() => ({ __html: dogMarkup(uid) }), [uid]);
  const startFrom = useRef(from);
  // Trạng thái chuyển động giữ ở ref vì đổi mỗi khung.
  const live = useRef<{ dog: Dog | null; state: BelloState; from: Pose | null; t0: number; last: Pose | null; redraw: () => void }>({
    dog: null,
    state,
    from: null,
    t0: 0,
    last: null,
    redraw: () => {},
  });

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const L = live.current;
    const dog = createDog(svg, uid);
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const offset = offsetOf(uid);
    let visible = true;
    const draw = (c: number, t: number) => {
      const target = poseAt(L.state, still ? 0 : c + offset);
      let P = target;
      if (L.from) {
        const e = still ? 1 : (c - L.t0) / TRANSITION;
        P = mixPose(L.from, target, e);
        if (e >= 1) L.from = null;
      }
      L.last = P;
      dog.render(P, t);
    };
    L.dog = dog;
    L.redraw = () => draw(clock, tick);
    dog.setBoil(!still);
    if (startFrom.current && !still) {
      L.from = poseAt(startFrom.current, 0);
      L.t0 = clock;
    }
    draw(clock, tick);
    if (still) {
      return () => {
        L.dog = null;
        L.redraw = () => {};
      };
    }
    // Bello ra khỏi màn hình thì thôi vẽ.
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(svg);
    const actor: Actor = (c, t) => {
      if (visible) draw(c, t);
    };
    join(actor);
    return () => {
      leave(actor);
      io.disconnect();
      L.dog = null;
      L.redraw = () => {};
    };
  }, [uid]);

  useEffect(() => {
    const L = live.current;
    if (L.state === state) return;
    L.from = L.last;
    L.t0 = clock;
    L.state = state;
    L.redraw();
  }, [state]);

  useEffect(() => {
    live.current.dog?.setOutfit(wearing);
    live.current.redraw();
  }, [wearing]);

  return (
    <svg
      ref={svgRef}
      viewBox={VIEWBOX}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ aspectRatio: '260 / 196', ...coatVars(wearing) } as React.CSSProperties}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      dangerouslySetInnerHTML={markup}
    />
  );
}
