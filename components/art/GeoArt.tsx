// Minh họa hình học kiểu ảnh bìa khóa học Brilliant: khối cầu, khối vuông, kim tự tháp có đổ bóng, chọn theo `seed`
// nên mỗi chặng/bài luôn có cùng một hình. Thuần SVG + CSS, dùng được cả ở Server Component.

const PALETTES = [
  ['#ffc61a', '#2b7cff', '#8b5cf6'],
  ['#12b76a', '#ffc61a', '#ff5fa2'],
  ['#2b7cff', '#ff7a1a', '#8b5cf6'],
  ['#ff5fa2', '#12b76a', '#2b7cff'],
  ['#ff7a1a', '#8b5cf6', '#ffc61a'],
  ['#8b5cf6', '#12b76a', '#ff7a1a'],
] as const;

/** Bố cục vị trí cho 3 khối (cầu, khối vuông, kim tự tháp) và các chấm nhỏ. */
const LAYOUTS = [
  { sphere: [136, 64, 32], cube: [58, 66, 46, -12], pyramid: [100, 34, 30], dots: [[178, 30], [30, 30], [168, 100]] },
  { sphere: [70, 58, 30], cube: [138, 70, 44, 10], pyramid: [112, 30, 26], dots: [[26, 94], [180, 28], [96, 104]] },
  { sphere: [104, 66, 34], cube: [44, 44, 34, -18], pyramid: [160, 52, 32], dots: [[24, 98], [176, 104], [150, 18]] },
] as const;

function hash(s: string): number {
  let h = 2166136261;
  for (const ch of s) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return h >>> 0;
}

function shade(hex: string, amount: number): string {
  const n = Number.parseInt(hex.slice(1), 16);
  const f = (c: number) => Math.max(0, Math.min(255, Math.round(c + (amount > 0 ? (255 - c) * amount : c * amount))));
  return `#${[f(n >> 16), f((n >> 8) & 255), f(n & 255)].map((c) => c.toString(16).padStart(2, '0')).join('')}`;
}

export function GeoArt({
  seed,
  className = '',
  animated = true,
  label,
}: {
  seed: string;
  className?: string;
  animated?: boolean;
  /** Có `label` thì hình được đọc như ảnh; không thì chỉ để trang trí. */
  label?: string;
}) {
  const h = hash(seed);
  const [c1, c2, c3] = PALETTES[h % PALETTES.length];
  const L = LAYOUTS[(h >>> 4) % LAYOUTS.length];
  const id = `geo-${h.toString(36)}`;
  const [sx, sy, sr] = L.sphere;
  const [cx, cy, cs, crot] = L.cube;
  const [px, py, ps] = L.pyramid;
  const float = (i: number) => (animated ? { animation: `float ${3 + i * 0.6}s ease-in-out ${i * 0.4}s infinite` } : undefined);

  return (
    <svg
      viewBox="0 0 200 124"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <defs>
        <radialGradient id={`${id}-s`} cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor={shade(c1, 0.45)} />
          <stop offset="0.6" stopColor={c1} />
          <stop offset="1" stopColor={shade(c1, -0.25)} />
        </radialGradient>
        <radialGradient id={`${id}-sh`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#000" stopOpacity="0.16" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={sx} cy={sy + sr + 8} rx={sr * 0.9} ry={5} fill={`url(#${id}-sh)`} />
      <ellipse cx={cx} cy={cy + cs * 0.62} rx={cs * 0.7} ry={4.5} fill={`url(#${id}-sh)`} />

      <g style={float(0)}>
        {/* Khối vuông: mặt trên sáng, mặt bên tối để có chiều sâu. */}
        <g transform={`translate(${cx} ${cy}) rotate(${crot})`}>
          <path d={`M${-cs / 2} ${-cs / 2 + 8} L${-cs / 2 + 10} ${-cs / 2} L${cs / 2 + 10} ${-cs / 2} L${cs / 2} ${-cs / 2 + 8} Z`} fill={shade(c2, 0.35)} />
          <path d={`M${cs / 2} ${-cs / 2 + 8} L${cs / 2 + 10} ${-cs / 2} L${cs / 2 + 10} ${cs / 2 - 8} L${cs / 2} ${cs / 2} Z`} fill={shade(c2, -0.3)} />
          <rect x={-cs / 2} y={-cs / 2 + 8} width={cs} height={cs - 8} rx="3" fill={c2} />
        </g>
      </g>

      <g style={float(1)}>
        {/* Kim tự tháp hai mặt. */}
        <path d={`M${px} ${py - ps / 2} L${px - ps / 2} ${py + ps / 2} L${px} ${py + ps / 2 + 4} Z`} fill={c3} />
        <path d={`M${px} ${py - ps / 2} L${px} ${py + ps / 2 + 4} L${px + ps / 2} ${py + ps / 2} Z`} fill={shade(c3, -0.28)} />
      </g>

      <g style={float(2)}>
        <circle cx={sx} cy={sy} r={sr} fill={`url(#${id}-s)`} />
        <ellipse cx={sx - sr * 0.35} cy={sy - sr * 0.4} rx={sr * 0.22} ry={sr * 0.13} fill="#fff" opacity="0.55" transform={`rotate(-30 ${sx - sr * 0.35} ${sy - sr * 0.4})`} />
      </g>

      {L.dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 ? 5 : 3.5} fill={[c1, c2, c3][i % 3]} opacity="0.85" style={float(i + 3)} />
      ))}
    </svg>
  );
}
