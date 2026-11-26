'use client';

import { useEffect, useRef } from 'react';

const COLORS = ['#1f1f1f', '#dd2d2d', '#ffcc00', '#61c91f', '#1cb0f6', '#b46cf6'];
const DURATION_MS = 2600;

type Piece = { x: number; y: number; vx: number; vy: number; r: number; spin: number; w: number; h: number; color: string };

/**
 * Pháo giấy màu cờ Đức + màu app, vẽ trên canvas phủ màn hình rồi tự tắt. Không dùng thư viện để nhẹ.
 * Đổi `burst` (vd. tăng số) để bắn thêm một đợt. Tắt hẳn khi người dùng bật giảm chuyển động.
 */
export function Confetti({ burst = 1 }: { burst?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!burst) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const pieces: Piece[] = Array.from({ length: 150 }, (_, i) => {
      const fromLeft = i % 2 === 0;
      const angle = (fromLeft ? -60 : -120) * (Math.PI / 180) + (Math.random() - 0.5) * 0.9;
      const speed = 9 + Math.random() * 9;
      return {
        x: fromLeft ? W * 0.1 : W * 0.9,
        y: H * 0.72,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.4,
        w: 6 + Math.random() * 6,
        h: 8 + Math.random() * 8,
        color: COLORS[i % COLORS.length],
      };
    });

    const start = performance.now();
    let frame = 0;
    function tick(now: number) {
      const t = now - start;
      ctx!.clearRect(0, 0, W, H);
      const fade = t > DURATION_MS - 600 ? Math.max(0, (DURATION_MS - t) / 600) : 1;
      for (const p of pieces) {
        p.vy += 0.32;
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.x += p.vx;
        p.y += p.vy;
        p.r += p.spin;
        ctx!.save();
        ctx!.globalAlpha = fade;
        ctx!.translate(p.x, p.y);
        ctx!.rotate(p.r);
        ctx!.scale(1, Math.cos(p.r * 2));
        ctx!.fillStyle = p.color;
        ctx!.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx!.restore();
      }
      if (t < DURATION_MS) frame = requestAnimationFrame(tick);
      else ctx!.clearRect(0, 0, W, H);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [burst]);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 size-full" />;
}
