// Khung xương, tư thế, chuyển động và hình vật phẩm của Bello (SPEC F17), chép nguyên số liệu từ
// design/bello/bello-lab.html. Sửa hình thì sửa phòng thử trước (skill .claude/skills/bello), rồi chép sang đây.
// Không phụ thuộc React: `createDog` dựng SVG một lần rồi chỉ đặt lại thuộc tính mỗi khung.
import { belloItem, type BelloItemId, type Outfit } from '@/lib/bello-items';

export type BelloState = 'stand' | 'happy' | 'energetic' | 'curious' | 'sad' | 'sleep';

export const STATE_VI: Record<BelloState, string> = {
  stand: 'đứng chờ',
  happy: 'vui',
  energetic: 'hăng hái',
  curious: 'tò mò',
  sad: 'buồn',
  sleep: 'ngủ',
};

/** Khung hình/giây hiển thị; chuyển động vẫn tính bằng đường cong mượt rồi lấy mẫu theo nhịp này. */
export const FPS = 8;
/** Thời gian chuyển tư thế khi đổi trạng thái (giây). */
export const TRANSITION = 0.6;
export const BOIL = 2.5;
export const VIEWBOX = '0 -16 260 196';

const C = { fur: '#E9A15B', dark: '#C67636', ink: '#1d1a17', red: '#E0373D', gold: '#FFC61A', tongue: '#FF7D8E' };
const D2R = Math.PI / 180;

/* ---------- hình học ---------- */
type P2 = [number, number];
/** Khớp: tâm x, y và bán kính. */
type J = [number, number, number];
type Seg = P2[];

const add = (a: P2, b: P2): P2 => [a[0] + b[0], a[1] + b[1]];
const sub = (a: P2 | J, b: P2 | J): P2 => [a[0] - b[0], a[1] - b[1]];
const mul = (a: P2, k: number): P2 => [a[0] * k, a[1] * k];
const norm = (a: P2): P2 => {
  const d = Math.hypot(a[0], a[1]) || 1;
  return [a[0] / d, a[1] / d];
};
const lerp2 = (a: P2, b: P2, t: number): P2 => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const poly = (pts: P2[]) => 'M' + pts.map((q) => q[0].toFixed(2) + ' ' + q[1].toFixed(2)).join('L') + 'Z';
function rnd(seed: number) {
  let s = seed % 2147483647 || 1;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}
function bez(p: Seg, t: number): P2 {
  const u = 1 - t;
  const at = (k: 0 | 1) => u * u * u * p[0][k] + 3 * u * u * t * p[1][k] + 3 * u * t * t * p[2][k] + t * t * t * p[3][k];
  return [at(0), at(1)];
}

// Hình viên nhộng nối hai vòng tròn [x,y,r]; mọi bộ phận thân/chân dựng từ đây nên khớp nhau ở khớp.
function capsule(a: J, b: J, n = 12): string {
  const [x1, y1, r1] = a;
  const [x2, y2, r2] = b;
  const d = Math.hypot(x2 - x1, y2 - y1);
  if (d <= Math.abs(r1 - r2) + 0.01) {
    const [x, y, r] = r1 > r2 ? a : b;
    return circle(x, y, r);
  }
  const phi = Math.atan2(y2 - y1, x2 - x1);
  const th = Math.acos((r1 - r2) / d);
  const pts: P2[] = [];
  for (let i = 0; i <= n; i++) {
    const t = phi + th - (2 * th * i) / n;
    pts.push([x2 + r2 * Math.cos(t), y2 + r2 * Math.sin(t)]);
  }
  for (let i = 0; i <= 2 * n; i++) {
    const t = phi - th - ((2 * Math.PI - 2 * th) * i) / (2 * n);
    pts.push([x1 + r1 * Math.cos(t), y1 + r1 * Math.sin(t)]);
  }
  return poly(pts);
}
function circle(x: number, y: number, r: number, n = 28): string {
  const pts: P2[] = [];
  for (let i = 0; i < n; i++) {
    const t = (-2 * Math.PI * i) / n;
    pts.push([x + r * Math.cos(t), y + r * Math.sin(t)]);
  }
  return poly(pts);
}

type Taper = 'both' | 'end' | 'none';
// Nét cọ dọc theo dãy điểm: dày giữa, thon hai đầu (hoặc thon về cuối).
function strokePts(pts: P2[], w: number, { taper = 'both', seed = 1 }: { taper?: Taper; seed?: number } = {}): string {
  const r = rnd(seed * 9973 + 7);
  const L: P2[] = [];
  const R: P2[] = [];
  const n = pts.length - 1;
  for (let i = 0; i <= n; i++) {
    const a = pts[Math.max(0, i - 1)];
    const b = pts[Math.min(n, i + 1)];
    const c = pts[i];
    const t = i / n;
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const d = Math.hypot(dx, dy) || 1;
    const prof = taper === 'both' ? Math.pow(Math.sin(Math.PI * t), 0.5) : taper === 'end' ? Math.pow(1 - t, 0.55) : 1;
    const hw = (w / 2) * (0.32 + 0.68 * prof) * (0.9 + 0.2 * r());
    L.push([c[0] - (dy / d) * hw, c[1] + (dx / d) * hw]);
    R.push([c[0] + (dy / d) * hw, c[1] - (dx / d) * hw]);
  }
  return poly([...L, ...R.reverse()]);
}
function bezPts(p: Seg, n = 24): P2[] {
  if (p.length === 2) p = [p[0], lerp2(p[0], p[1], 1 / 3), lerp2(p[0], p[1], 2 / 3), p[1]];
  const o: P2[] = [];
  for (let i = 0; i <= n; i++) o.push(bez(p, i / n));
  return o;
}
const brush = (p: Seg, w: number, o?: { taper?: Taper; seed?: number }) => strokePts(bezPts(p), w, o);
function resample(pts: P2[], step: number): P2[] {
  const out = [pts[0]];
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1];
    const b = pts[i];
    const n = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / step));
    for (let k = 1; k <= n; k++) out.push(lerp2(a, b, k / n));
  }
  return out;
}
function smooth(pts: P2[], pass = 3): P2[] {
  for (let p = 0; p < pass; p++) {
    const prev = pts;
    pts = prev.map((q, i) =>
      i === 0 || i === prev.length - 1 ? q : [(prev[i - 1][0] + 2 * q[0] + prev[i + 1][0]) / 4, (prev[i - 1][1] + 2 * q[1] + prev[i + 1][1]) / 4],
    );
  }
  return pts;
}

// Nét viền chân: ôm đầu khớp (đùi/vai) rồi chạy dọc mép chân; sau đó bị cắt theo thân nên chỉ hiện chỗ chân chồng lên thân.
function contour(chain: J[], side: 'front' | 'back', sweep: number, seed: number): string {
  const [p0, p1, p2] = chain;
  const d0 = norm(sub(p1, p0));
  const d1 = norm(sub(p2, p1));
  const side0: P2 = side === 'front' ? [d0[1], -d0[0]] : [-d0[1], d0[0]];
  const side1: P2 = side === 'front' ? [d1[1], -d1[0]] : [-d1[1], d1[0]];
  const back = mul(d0, -1);
  const s = Math.sign(side0[0] * back[1] - side0[1] * back[0]) || 1;
  const a0 = Math.atan2(side0[1], side0[0]);
  const pts: P2[] = [];
  for (let k = sweep; k >= 0; k -= 8) {
    const a = a0 + s * k * D2R;
    pts.push([p0[0] + p0[2] * Math.cos(a), p0[1] + p0[2] * Math.sin(a)]);
  }
  pts.push(add([p1[0], p1[1]], mul(norm(add(side0, side1)), p1[2])));
  pts.push(add([p2[0], p2[1]], mul(side1, p2[2])));
  return strokePts(smooth(resample(pts, 2.5)), 2.5, { seed });
}

/* ---------- tư thế ---------- */
type Leg = 'hn' | 'hf' | 'fn' | 'ff';
const LEGS: Leg[] = ['hn', 'hf', 'fn', 'ff'];
type Eyes = 'open' | 'wide' | 'half' | 'halfsad' | 'closed' | 'happy';
type Mouth = 'smile' | 'open' | 'frown' | 'o';
type Brows = 'none' | 'curious' | 'sad';

export type Pose = {
  name: BelloState;
  torso: [J, J, J];
  neck: [J, J];
  head: [number, number, number];
  ears: [number, number];
  /** gốc x, y, góc, dài, cong */
  tail: [number, number, number, number, number];
  hn: [J, J, J];
  hf: [J, J, J];
  fn: [J, J, J];
  ff: [J, J, J];
  /** [dx, dy, rx, ry]; rx = 0: không có bàn chân chạm đất */
  feet: Record<Leg, [number, number, number, number]>;
  face: { eyes: Eyes; mouth: Mouth; brows: Brows };
  contours: [Leg, 'front' | 'back', number][];
  prop: 'none' | 'q' | 'z';
  upperLegs: boolean;
  blink?: number;
  propT?: number;
};

const POSES: Record<BelloState, Pose> = {
  stand: {
    name: 'stand',
    torso: [[80, 118, 23], [126, 121, 24], [170, 116, 26]], neck: [[182, 106, 19], [196, 90, 17]], head: [196, 60, 0], ears: [0, 0],
    tail: [66, 104, 232, 42, 9],
    hn: [[86, 128, 16], [85, 144, 10], [86, 154, 8.5]], hf: [[100, 128, 14], [100, 144, 9.5], [102, 154, 8]],
    fn: [[174, 128, 14], [177, 144, 10], [179, 154, 8.5]], ff: [[160, 128, 13], [162, 144, 9.5], [164, 154, 8]],
    feet: { hn: [5, 3.5, 10.5, 5], hf: [5, 3.5, 10, 4.8], fn: [5, 3.5, 10.5, 5], ff: [5, 3.5, 10, 4.8] },
    face: { eyes: 'open', mouth: 'smile', brows: 'none' }, contours: [['hn', 'front', 115], ['fn', 'back', 105]], prop: 'none', upperLegs: false,
  },
  happy: {
    name: 'happy',
    torso: [[110, 138, 24], [114, 114, 21], [119, 90, 21]], neck: [[123, 82, 17], [128, 70, 15]], head: [130, 42, -6], ears: [8, -8],
    tail: [92, 150, 190, 34, 6],
    hn: [[118, 146, 17], [126, 156, 8], [138, 156, 7.5]], hf: [[106, 148, 14], [112, 157, 7], [124, 157, 7]],
    fn: [[127, 96, 10], [146, 100, 8], [149, 111, 7.5]], ff: [[116, 97, 9], [134, 102, 7.5], [137, 113, 7]],
    feet: { hn: [4, 1.5, 9, 4.5], hf: [4, 1, 8, 4], fn: [0, 0, 0, 0], ff: [0, 0, 0, 0] },
    face: { eyes: 'happy', mouth: 'open', brows: 'none' }, contours: [['hn', 'front', 150], ['fn', 'front', 90]], prop: 'none', upperLegs: true,
  },
  energetic: {
    name: 'energetic',
    torso: [[82, 104, 23], [122, 118, 23], [160, 134, 23]], neck: [[172, 130, 17], [190, 130, 15]], head: [196, 104, 8], ears: [6, -6],
    tail: [72, 88, 255, 42, 8],
    hn: [[86, 116, 16], [88, 138, 10], [90, 154, 8.5]], hf: [[100, 116, 14], [102, 138, 9.5], [104, 154, 8]],
    fn: [[166, 146, 11], [184, 152, 9], [202, 155, 8]], ff: [[154, 146, 10], [170, 153, 8.5], [188, 156, 7.5]],
    feet: { hn: [5, 3.5, 10.5, 5], hf: [5, 3.5, 10, 4.8], fn: [4, 2, 9, 5], ff: [4, 1.5, 8.5, 4.5] },
    face: { eyes: 'wide', mouth: 'open', brows: 'none' }, contours: [['hn', 'front', 120], ['fn', 'front', 40]], prop: 'none', upperLegs: false,
  },
  curious: {
    name: 'curious',
    torso: [[96, 138, 24], [114, 119, 22], [134, 100, 22]], neck: [[140, 90, 17], [148, 78, 15]], head: [154, 52, 12], ears: [30, 4],
    tail: [79, 149, 185, 36, -6],
    hn: [[102, 140, 19], [86, 156, 7], [108, 157, 7]], hf: [[114, 142, 15], [102, 156, 6.5], [122, 157, 6.5]],
    fn: [[140, 114, 11], [142, 136, 9], [144, 154, 8]], ff: [[128, 114, 10], [130, 136, 8.5], [132, 154, 7.5]],
    feet: { hn: [4, 1, 9, 4.5], hf: [4, 1, 8, 4], fn: [4, 3.5, 10, 5], ff: [4, 3.5, 9, 4.6] },
    face: { eyes: 'wide', mouth: 'o', brows: 'curious' }, contours: [['hn', 'front', 160], ['fn', 'back', 110]], prop: 'q', upperLegs: false,
  },
  sad: {
    name: 'sad',
    torso: [[96, 138, 24], [117, 124, 22], [139, 113, 22]], neck: [[150, 110, 17], [162, 108, 15]], head: [162, 82, -5], ears: [-5, 5],
    tail: [79, 149, 178, 36, 0],
    hn: [[102, 140, 19], [86, 156, 7], [108, 157, 7]], hf: [[114, 142, 15], [102, 156, 6.5], [122, 157, 6.5]],
    fn: [[145, 126, 11], [147, 141, 9], [148, 154, 8]], ff: [[133, 126, 10], [135, 141, 8.5], [136, 154, 7.5]],
    feet: { hn: [4, 1, 9, 4.5], hf: [4, 1, 8, 4], fn: [4, 3.5, 10, 5], ff: [4, 3.5, 9, 4.6] },
    face: { eyes: 'halfsad', mouth: 'frown', brows: 'sad' }, contours: [['hn', 'front', 160], ['fn', 'back', 110]], prop: 'none', upperLegs: false,
  },
  sleep: {
    name: 'sleep',
    torso: [[78, 142, 20], [118, 144, 19], [158, 142, 20]], neck: [[168, 140, 15], [184, 140, 14]], head: [190, 124, 0], ears: [24, -24],
    tail: [60, 146, 178, 32, 6],
    hn: [[86, 148, 16], [98, 157, 6.5], [112, 157, 6]], hf: [[96, 148, 13], [106, 157, 6], [120, 157, 6]],
    fn: [[164, 150, 10], [188, 156, 7.5], [212, 156, 7]], ff: [[154, 150, 9], [176, 157, 7], [200, 157, 6.5]],
    feet: { hn: [3, 1, 7, 4], hf: [3, 1, 7, 4], fn: [3, 1.5, 8, 4.5], ff: [3, 1, 7, 4] },
    face: { eyes: 'closed', mouth: 'smile', brows: 'none' }, contours: [['hn', 'front', 140]], prop: 'z', upperLegs: false,
  },
};

/* ---------- chuyển động sống ---------- */
const ss = (x: number) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));
const wave = (T: number, p: number, ph = 0) => Math.sin(2 * Math.PI * (T / p + ph));
const mod = (a: number, n: number) => ((a % n) + n) % n;
function env(T: number, period: number, start: number, dur: number, fade = 0.25) {
  const t = mod(T, period) - start;
  return t < 0 || t > dur ? 0 : ss(Math.min(t / fade, (dur - t) / fade, 1));
}
function blinkAt(T: number, period: number, off = 0) {
  const f = Math.floor(mod(T + off, period) * FPS);
  return f === 0 ? 2 : f === 1 ? 1 : 0;
}

type Life = { upper: number; rear: number; headRot: number; headDy: number; earL: number; earR: number; tail: number; tailBend: number; paw: number; breath: number; blink: number; prop: number };

function life(state: BelloState, T: number): Life {
  const L: Life = { upper: 0, rear: 0, headRot: 0, headDy: 0, earL: 0, earR: 0, tail: 0, tailBend: 0, paw: 0, breath: 0, blink: 0, prop: 0 };
  if (state === 'stand') {
    L.upper = -0.9 * wave(T, 2.6);
    L.breath = 0.5 * wave(T, 2.6);
    const w = env(T, 5, 0.4, 1.6);
    L.tail = 18 * w * Math.sin(2 * Math.PI * 3 * T);
    L.tailBend = -7 * w * Math.cos(2 * Math.PI * 3 * T);
    L.headRot = 9 * env(T, 7, 3.2, 2.2, 0.5);
    L.blink = blinkAt(T, 3.7);
  } else if (state === 'happy') {
    L.upper = -4 * Math.abs(Math.sin(Math.PI * 1.8 * T));
    L.paw = -2.5 * Math.sin(2 * Math.PI * 1.8 * T + 1);
    L.tail = 20 * Math.sin(2 * Math.PI * 3.6 * T);
    L.tailBend = -8 * Math.cos(2 * Math.PI * 3.6 * T);
    L.headRot = 5 * Math.sin(2 * Math.PI * 0.9 * T);
    L.earL = 9 * Math.sin(2 * Math.PI * 1.8 * T - 0.8);
    L.earR = -L.earL;
  } else if (state === 'energetic') {
    L.rear = -3.5 * Math.abs(Math.sin(Math.PI * 2.4 * T));
    L.upper = -0.8 * wave(T, 1.3);
    L.tail = 26 * Math.sin(2 * Math.PI * 4 * T);
    L.tailBend = -10 * Math.cos(2 * Math.PI * 4 * T);
    L.headRot = 4 * Math.sin(2 * Math.PI * 1.2 * T);
    L.blink = blinkAt(T, 3.1, 0.7);
  } else if (state === 'curious') {
    const c = mod(T, 4.4);
    const tilt = c < 2.2 ? ss(c / 0.5) : 1 - ss((c - 2.2) / 0.5);
    L.headRot = -22 * tilt;
    L.upper = -0.6 * wave(T, 2.6);
    L.tail = 8 * Math.sin(2 * Math.PI * 0.6 * T);
    L.prop = -2.5 * Math.sin(2 * Math.PI * 1.2 * T);
    L.blink = blinkAt(T, 3.3, 1.1);
  } else if (state === 'sad') {
    const s = env(T, 5.5, 2.6, 1.6, 0.5);
    L.upper = -0.6 * wave(T, 3.4) + 1.5 * s;
    L.headDy = 3.5 * s;
    L.earL = -3 * s;
    L.earR = 3 * s;
    L.blink = blinkAt(T, 4.2, 0.3);
  } else if (state === 'sleep') {
    const b = wave(T, 3) * 0.5 + 0.5;
    L.breath = 1.3 * b;
    L.upper = -1.2 * b;
    L.earR = -12 * env(T, 6.5, 4.2, 0.35, 0.05);
    L.prop = T;
  }
  return L;
}
// Tai đi trễ đầu một chút (overlap) cho đỡ cứng.
function lifeLag(state: BelloState, T: number): Life {
  const a = life(state, T);
  const dv = a.headRot - life(state, T - 0.17).headRot;
  a.earL -= dv * 0.9;
  a.earR -= dv * 0.9;
  return a;
}
function applyLife(p: Pose, L: Life): Pose {
  const q = structuredClone(p);
  q.torso[2][1] += L.upper;
  q.torso[1][1] += L.upper * 0.5;
  q.torso[1][2] += L.breath;
  q.torso[2][2] += L.breath * 0.6;
  q.neck[0][1] += L.upper;
  q.neck[1][1] += L.upper + L.headDy * 0.7;
  q.head[1] += L.upper + L.headDy;
  q.head[2] += L.headRot;
  for (const k of ['fn', 'ff'] as const) {
    if (p.upperLegs)
      q[k].forEach((pt) => {
        pt[1] += L.upper + L.paw;
      });
    else {
      q[k][0][1] += L.upper;
      q[k][1][1] += L.upper * 0.5;
    }
  }
  q.torso[0][1] += L.rear;
  q.torso[1][1] += L.rear * 0.5;
  for (const k of ['hn', 'hf'] as const) {
    q[k][0][1] += L.rear;
    q[k][1][1] += L.rear * 0.5;
  }
  q.tail[1] += L.rear;
  q.tail[2] += L.tail;
  q.tail[4] += L.tailBend;
  q.ears[0] += L.earL;
  q.ears[1] += L.earR;
  q.blink = L.blink;
  q.propT = L.prop;
  return q;
}
const DISCRETE = new Set(['name', 'face', 'contours', 'prop', 'upperLegs', 'blink']);
function mixAny(a: unknown, b: unknown, e: number, key?: string): unknown {
  if (key && DISCRETE.has(key)) return e < 0.5 ? a : b;
  if (typeof a === 'number' && typeof b === 'number') return a + (b - a) * e;
  if (Array.isArray(a) && Array.isArray(b)) return a.map((v, i) => mixAny(v, b[i], e));
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const o: Record<string, unknown> = {};
    for (const k in b) o[k] = k in a ? mixAny((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k], e, k) : (b as Record<string, unknown>)[k];
    return o;
  }
  return e < 0.5 ? a : b;
}
const easeIO = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/** Tư thế ở thời điểm `T` (giây) của chuyển động sống. */
export function poseAt(state: BelloState, T: number): Pose {
  return applyLife(POSES[state], lifeLag(state, T));
}

/** Trộn tư thế khi chuyển trạng thái; `t` là tiến độ 0..1 (chưa làm mượt). */
export function mixPose(from: Pose, to: Pose, t: number): Pose {
  return mixAny(from, to, easeIO(Math.min(1, Math.max(0, t)))) as Pose;
}

/* ---------- dựng SVG ---------- */
const ink = (d: string, extra = '') => `<path d="${d}" fill="${C.ink}" stroke="${C.ink}" stroke-width=".5" stroke-linejoin="round" ${extra}/>`;
const mirror = (p: Seg): Seg => p.map(([x, y]) => [-x, y]);
const EYE_SETS: Record<Eyes, string> = {
  open: `<ellipse cx="-10" cy="-3" rx="3.3" ry="3.9" fill="${C.ink}"/><ellipse cx="10" cy="-3" rx="3.3" ry="3.9" fill="${C.ink}"/>`,
  wide: `<ellipse cx="-10" cy="-3" rx="3.8" ry="4.6" fill="${C.ink}"/><ellipse cx="10" cy="-3" rx="3.8" ry="4.6" fill="${C.ink}"/><circle cx="-8.8" cy="-4.8" r="1.1" fill="#fff"/><circle cx="11.2" cy="-4.8" r="1.1" fill="#fff"/>`,
  half:
    `<path d="M-13.4 -3A3.4 3.4 0 0 0 -6.6 -3Z M6.6 -3A3.4 3.4 0 0 0 13.4 -3Z" fill="${C.ink}"/>` +
    ink(brush([[-14.6, -3.3], [-11.5, -3.6], [-8.5, -3.6], [-5.4, -3.3]], 2.1, { taper: 'none', seed: 31 })) +
    ink(brush(mirror([[-14.6, -3.3], [-11.5, -3.6], [-8.5, -3.6], [-5.4, -3.3]]), 2.1, { taper: 'none', seed: 32 })),
  halfsad:
    `<path d="M-13.4 -2.6A3.4 3.4 0 0 0 -6.6 -3.4Z M6.6 -3.4A3.4 3.4 0 0 0 13.4 -2.6Z" fill="${C.ink}"/>` +
    ink(brush([[-14.6, -2.2], [-11.5, -3], [-8.5, -3.6], [-5.4, -4.2]], 2.1, { taper: 'none', seed: 33 })) +
    ink(brush(mirror([[-14.6, -2.2], [-11.5, -3], [-8.5, -3.6], [-5.4, -4.2]]), 2.1, { taper: 'none', seed: 34 })),
  closed:
    ink(brush([[-14, -4], [-12.5, -0.4], [-7.5, -0.4], [-6, -4]], 2.3, { seed: 35 })) +
    ink(brush(mirror([[-14, -4], [-12.5, -0.4], [-7.5, -0.4], [-6, -4]]), 2.3, { seed: 36 })),
  happy:
    ink(brush([[-14, -1], [-12.5, -6.4], [-7.5, -6.4], [-6, -1]], 2.4, { seed: 37 })) +
    ink(brush(mirror([[-14, -1], [-12.5, -6.4], [-7.5, -6.4], [-6, -1]]), 2.4, { seed: 38 })),
};
const NOSE = `<ellipse cx="0" cy="12" rx="6.6" ry="4.8" fill="${C.ink}"/>`;
const MOUTHS: Record<Mouth, string> = {
  smile:
    ink(brush([[0, 16], [0, 22]], 2.2, { taper: 'none', seed: 41 })) +
    ink(brush([[0, 21.5], [-2, 25.5], [-7, 26], [-10, 22.5]], 2.3, { seed: 42 })) +
    ink(brush(mirror([[0, 21.5], [-2, 25.5], [-7, 26], [-10, 22.5]]), 2.3, { seed: 43 })),
  open:
    ink(brush([[0, 15.5], [0, 20]], 2.2, { taper: 'none', seed: 44 })) +
    `<path d="M-8 20 Q0 22.5 8 20 Q8 31 0 32 Q-8 31 -8 20Z" fill="${C.ink}"/><path d="M-5 26 Q0 24 5 26 Q5.5 36 0 37 Q-5.5 36 -5 26Z" fill="${C.tongue}"/>`,
  frown: ink(brush([[0, 16], [0, 21]], 2.2, { taper: 'none', seed: 45 })) + ink(brush([[-8, 26.5], [-5, 21.5], [5, 21.5], [8, 26.5]], 2.3, { seed: 46 })),
  o: ink(brush([[0, 16], [0, 19]], 2.2, { taper: 'none', seed: 47 })) + `<ellipse cx="0" cy="23" rx="2.6" ry="3.2" fill="${C.ink}"/>`,
};
const BROWS: Record<Brows, string> = {
  none: '',
  curious:
    ink(brush([[-15, -12], [-12, -16.5], [-8, -16.5], [-5, -14]], 2.2, { seed: 51 })) +
    ink(brush([[5, -12], [8, -12.8], [12, -12.8], [15, -12]], 2.2, { seed: 52 })),
  sad:
    ink(brush([[-15, -10], [-12, -11], [-8, -12.6], [-5, -15]], 2.2, { seed: 53 })) +
    ink(brush(mirror([[-15, -10], [-12, -11], [-8, -12.6], [-5, -15]]), 2.2, { seed: 54 })),
};
const QMARK =
  ink(brush([[-6, -8], [-5, -17], [9, -17], [6, -6]], 2.8, { seed: 61 })) +
  ink(brush([[6, -6], [1, -2], [0, 0], [0, 5]], 2.8, { seed: 62 })) +
  `<circle cx="0" cy="11" r="2" fill="${C.ink}"/>`;
const zPath = (s: number, seed: number) => strokePts(resample([[0, 0], [s, 0], [0, s], [s, s]], 1.2), 2.2, { taper: 'none', seed });
const GROUND = brush([[30, 161.5], [100, 160.2], [170, 162.6], [240, 161]], 2.6, { seed: 10 });

// Đầu và tai (toạ độ trong đầu): dùng chung cho phần tô và nét viền chỗ đè lên bộ phận khác.
const HEAD_SEGS: Seg[] = [
  [[0, -28], [18, -28], [30, -16], [30, 0]],
  [[30, 0], [30, 14], [22, 24], [14, 30]],
  [[14, 30], [9, 34], [-9, 34], [-14, 30]],
  [[-14, 30], [-22, 24], [-30, 14], [-30, 0]],
  [[-30, 0], [-30, -16], [-18, -28], [0, -28]],
];
const EAR_SEGS: Seg[] = [
  [[-21, -21], [-34, -17], [-40, 4], [-38, 22]],
  [[-38, 22], [-37, 32], [-28, 36], [-22, 30]],
  [[-22, 30], [-18, 22], [-16, 0], [-15, -14]],
  [[-15, -14], [-21, -21]],
];
const EAR_SEGS_R = EAR_SEGS.map(mirror);
const segsD = (segs: Seg[]) =>
  'M' + segs[0][0].join(' ') + segs.map((s) => (s.length === 4 ? 'C' + s.slice(1).map((p) => p.join(' ')).join(' ') : 'L' + s[1].join(' '))).join('') + 'Z';
const segsPts = (segs: Seg[]) => segs.flatMap((s, i) => bezPts(s, 18).slice(i ? 1 : 0));
const HEAD_D = segsD(HEAD_SEGS);
const EAR_L_D = segsD(EAR_SEGS);
const EAR_R_D = segsD(EAR_SEGS_R);
const HEAD_LINE = strokePts(segsPts(HEAD_SEGS), 2.3, { seed: 81 });
const EAR_LINE_L = strokePts(segsPts(EAR_SEGS), 2.3, { seed: 82 });
const EAR_LINE_R = strokePts(segsPts(EAR_SEGS_R), 2.3, { seed: 83 });
// Các bộ phận nằm sau đầu/tai: nét viền đầu và tai chỉ hiện trên vùng này (tai đè lên mặt thì không có nét).
const BEHIND = ['body', 'hn', 'hf', 'fn', 'ff'] as const;

/* ---------- vật phẩm (toạ độ trong đầu) ---------- */
const BANDANA_D = 'M-17 28 Q0 38 17 28 L16.5 34 C15 35 13.5 35.6 12 36 C8 42 4 49 0 55 C-4 49 -8 42 -12 36 C-13.5 35.6 -15 35 -16.5 34Z';
const BANDANA =
  `<path d="${BANDANA_D}" fill="${C.red}"/>` +
  ([[-11, 32.6], [-3, 35], [5, 34.4], [12, 31.6], [-4, 42], [4, 45], [0, 50.5]] as P2[]).map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.3" fill="#fff"/>`).join('');
// Viền khăn bỏ mép trên (mép nằm dưới cằm), chỉ hiện chỗ khăn đè lên cổ/ngực.
const BANDANA_LINE = strokePts(
  segsPts([
    [[17, 28], [16.5, 34]],
    [[16.5, 34], [15, 35], [13.5, 35.6], [12, 36]],
    [[12, 36], [8, 42], [4, 49], [0, 55]],
    [[0, 55], [-4, 49], [-8, 42], [-12, 36]],
    [[-12, 36], [-13.5, 35.6], [-15, 35], [-16.5, 34]],
    [[-16.5, 34], [-17, 28]],
  ]),
  2.2,
  { seed: 85 },
);
const FEATHER: Seg = [[10, -31], [15, -39], [20, -46], [27, -53]];
const HAT = `<g>
  <path d="M-14.5 -27.5 C-15.5 -38 -11 -45 -4 -44.5 Q0 -41.5 4 -44.5 C11 -45 15.5 -38 14.5 -27.5Z" fill="#2F6B4E"/>
  <path d="M-15 -32 Q0 -30 15 -32 L14.8 -28 Q0 -26 -14.8 -28Z" fill="${C.red}"/>
  <path d="M-26 -26.5 Q-13 -29 0 -29 Q13 -29 26 -26.5 Q27 -23.5 24 -23 Q12 -25 0 -25 Q-12 -25 -24 -23 Q-27 -23.5 -26 -26.5Z" fill="#2F6B4E"/>
  <path d="${brush(FEATHER, 6, { seed: 91 })}" fill="${C.gold}"/>${ink(brush(FEATHER, 1.2, { taper: 'none', seed: 92 }))}
</g>`;
const GLASSES =
  `<circle cx="-10" cy="-3" r="7.6" fill="none" stroke="${C.ink}" stroke-width="2"/><circle cx="10" cy="-3" r="7.6" fill="none" stroke="${C.ink}" stroke-width="2"/>` +
  ink(brush([[-2.6, -4.5], [-1, -6.5], [1, -6.5], [2.6, -4.5]], 1.9, { taper: 'none', seed: 93 })) +
  ink(brush([[-17.5, -4], [-20, -5], [-23, -6], [-26, -6]], 1.9, { seed: 94 })) +
  ink(brush(mirror([[-17.5, -4], [-20, -5], [-23, -6], [-26, -6]]), 1.9, { seed: 95 }));
// Khăn len sọc: dải quấn dưới cằm + một đầu khăn rủ bên phải; nét viền bỏ mép trên (nằm dưới cằm).
const SCARF_C = { wool: '#2F5D8C', stripe: '#F3E9D2' };
const SCARF =
  `<path d="M5 37 Q11 39 16 36 L18 51 Q12 53 7 52Z" fill="${SCARF_C.wool}"/>` +
  `<path d="M5.8 42 Q11.5 44 16.7 41 L17.1 44.5 Q11.8 47 6.2 45.5Z" fill="${SCARF_C.stripe}"/>` +
  ([[8, 52.2], [11, 52.6], [14, 52.4], [17, 51.6]] as P2[])
    .map(([x, y], i) => `<path d="${brush([[x, y], [x + 0.3, y + 3.2]], 1.7, { taper: 'none', seed: 100 + i })}" fill="${SCARF_C.wool}"/>`)
    .join('') +
  `<path d="M-19 26 Q0 37 19 26 L18.5 35 Q0 46 -18.5 35Z" fill="${SCARF_C.wool}"/>` +
  `<path d="M-11.5 29.6 L-8.5 30.4 L-8.4 39.4 L-11.4 38.6Z M2.5 31.5 L5.5 31 L5.6 40 L2.6 40.4Z M12.5 29 L15.5 28 L15.6 37 L12.6 37.8Z" fill="${SCARF_C.stripe}"/>`;
const SCARF_LINE =
  ink(strokePts(segsPts([[[19, 26], [18.5, 35]], [[18.5, 35], [6.17, 42.33], [-6.17, 42.33], [-18.5, 35]], [[-18.5, 35], [-19, 26]]]), 2.2, { seed: 104 })) +
  ink(strokePts(segsPts([[[16, 36], [18, 51]], [[18, 51], [15, 52.5], [10, 52.6], [7, 52]], [[7, 52], [5, 37]]]), 2, { seed: 105 }));
// Mũ tốt nghiệp: chỏm mũ, tấm vuông nhìn chéo, núm và tua vàng rủ bên phải.
const CAP_C = { cloth: '#23262F', top: '#353A47' };
const GRADCAP = `<g transform="translate(0 3)">
  <path d="M-15.5 -25 Q0 -31 15.5 -25 L14.8 -36 Q0 -39 -14.8 -36Z" fill="${CAP_C.cloth}"/>
  <path d="M-27 -40 L0 -33 L27 -40 L27 -38 L0 -31 L-27 -38Z" fill="${CAP_C.cloth}"/>
  <path d="M0 -47 L27 -40 L0 -33 L-27 -40Z" fill="${CAP_C.top}"/>
  <circle cx="0" cy="-40" r="1.8" fill="${C.gold}"/>
  <path d="${brush([[1, -40], [9, -39.6], [16, -39.2], [20, -37.5]], 1.6, { taper: 'none', seed: 96 })}" fill="${C.gold}"/>
  <path d="${brush([[20, -37.5], [20.4, -33], [20.8, -29], [21, -26]], 1.6, { taper: 'none', seed: 97 })}" fill="${C.gold}"/>
  <path d="${brush([[21, -18], [21, -21], [21, -24], [21, -27]], 5.5, { taper: 'end', seed: 98 })}" fill="${C.gold}"/>
</g>`;

type Coat = { fur: string; ear: string; far: string };
const DEFAULT_COAT: Coat = { fur: C.fur, ear: C.dark, far: C.dark };

/**
 * Hình của từng món (luật mở nằm ở lib/bello-items.ts). neck/head/face vẽ trong toạ độ của đầu;
 * coat chỉ đổi màu. `hideIn`: trạng thái phải ẩn món (khăn bị cằm đè xuống đất khi ngủ).
 */
const ITEM_ART: Record<BelloItemId, { draw?: (uid: string) => string; coat?: Coat; hideIn?: BelloState[] }> = {
  bandana: { hideIn: ['sleep'], draw: (uid) => BANDANA + `<g clip-path="url(#hb-${uid})">${ink(BANDANA_LINE)}</g>` },
  glasses: { draw: () => GLASSES },
  tirol: { draw: () => HAT },
  flag: { coat: { fur: '#F2B33D', ear: '#2A2421', far: '#D9962A' } },
  scarf: { hideIn: ['sleep'], draw: (uid) => SCARF + `<g clip-path="url(#hb-${uid})">${SCARF_LINE}</g>` },
  gradcap: { draw: () => GRADCAP },
};

/** Màu lông theo bộ đồ, đặt thành biến CSS trên thẻ svg. */
export function coatVars(outfit: Outfit): Record<'--fur' | '--ear' | '--far', string> {
  const coat = (outfit.coat && ITEM_ART[outfit.coat].coat) || DEFAULT_COAT;
  return { '--fur': coat.fur, '--ear': coat.ear, '--far': coat.far };
}

/** Phần trong thẻ svg (dựng một lần; `render` chỉ đặt lại thuộc tính). `uid` chỉ gồm chữ, số, gạch. */
export function dogMarkup(uid: string): string {
  const sw = (set: Record<string, string>, name: string) =>
    Object.entries(set)
      .map(([k, v]) => `<g data-${name}="${k}" display="none">${v}</g>`)
      .join('');
  const behind = (tag: string) => BEHIND.map((k) => `<path data-${tag}="${k}"/>`).join('');
  const slotLayer = (slot: string) =>
    (Object.keys(ITEM_ART) as BelloItemId[])
      .filter((id) => belloItem(id)?.slot === slot && ITEM_ART[id].draw)
      .map((id) => `<g data-item="${id}" display="none">${ITEM_ART[id].draw!(uid)}</g>`)
      .join('');
  // Viền thân/chân sau vẽ dày rồi bị phần tô đè lên: chỉ còn nửa ngoài nằm trên đuôi, không lộ đường nối bên trong thân.
  const overLine = (cls: string) => `<path class="${cls}" fill="none" stroke="${C.ink}" stroke-width="5.2" stroke-linejoin="round"/>`;
  return `
  <defs>
    <filter id="f-${uid}" x="-6%" y="-6%" width="112%" height="112%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="1" seed="1" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="${BOIL}" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <clipPath id="c-${uid}"><path class="clip"/><path class="clipHf"/><path class="clipFf"/></clipPath>
    <clipPath id="t-${uid}"><path class="clipTail"/></clipPath>
    <clipPath id="hb-${uid}">${behind('hb')}</clipPath>
    <clipPath id="el-${uid}">${behind('el')}</clipPath>
    <clipPath id="er-${uid}">${behind('er')}</clipPath>
  </defs>
  <g class="root" visibility="hidden">
    <path class="tail" style="fill:var(--fur);stroke:var(--fur)" stroke-width=".5" stroke-linejoin="round"/>
    <g clip-path="url(#t-${uid})">${overLine('tailUnderBody')}${overLine('tailUnderLeg')}</g>
    <path class="hf" style="fill:var(--far)"/><ellipse class="hfFoot" style="fill:var(--far)"/>
    <path class="ff" style="fill:var(--far)"/><ellipse class="ffFoot" style="fill:var(--far)"/>
    <path class="torso" style="fill:var(--fur)"/>
    <path class="hn" style="fill:var(--fur)"/><ellipse class="hnFoot" style="fill:var(--fur)"/>
    <path class="fn" style="fill:var(--fur)"/><ellipse class="fnFoot" style="fill:var(--fur)"/>
    <g clip-path="url(#c-${uid})"><path class="c0" fill="${C.ink}"/><path class="c1" fill="${C.ink}"/><path class="c2" fill="${C.ink}"/></g>
    <g class="head">
      <path d="${HEAD_D}" style="fill:var(--fur)"/>
      <g clip-path="url(#hb-${uid})">${ink(HEAD_LINE)}</g>
      ${slotLayer('neck')}
      <g class="earL"><path d="${EAR_L_D}" style="fill:var(--ear)"/><g clip-path="url(#el-${uid})">${ink(EAR_LINE_L)}</g></g>
      <g class="earR"><path d="${EAR_R_D}" style="fill:var(--ear)"/><g clip-path="url(#er-${uid})">${ink(EAR_LINE_R)}</g></g>
      ${slotLayer('head')}
      ${sw(EYE_SETS, 'eyes')}${NOSE}${sw(MOUTHS, 'mouth')}${sw(BROWS, 'brows')}
      ${slotLayer('face')}
    </g>
    <g class="q" display="none">${QMARK}</g>
    <g class="z" display="none">${([[0, 0, 6], [10, -16, 8], [22, -32, 10]] as J[])
      .map(([x, y, s], i) => `<path data-z="${i}" transform="translate(${x} ${y})" d="${zPath(s, 70 + i)}" fill="${C.ink}"/>`)
      .join('')}</g>
    ${ink(GROUND)}
  </g>`;
}

export type Dog = {
  setOutfit(outfit: Outfit): void;
  setBoil(on: boolean): void;
  render(P: Pose, tick: number): void;
};

/** Gắn vào thẻ svg đã có `dogMarkup(uid)`. */
export function createDog(svg: SVGSVGElement, uid: string): Dog {
  const q = <T extends Element = SVGElement>(s: string) => svg.querySelector<T>(s)!;
  const qa = (s: string) => [...svg.querySelectorAll<SVGElement>(s)];
  const R = {
    root: q('.root'),
    turb: q('feTurbulence'),
    tail: q('.tail'),
    torso: q('.torso'),
    clip: q('.clip'),
    clipHf: q('.clipHf'),
    clipFf: q('.clipFf'),
    clipTail: q('.clipTail'),
    tailUnderBody: q('.tailUnderBody'),
    tailUnderLeg: q('.tailUnderLeg'),
    head: q('.head'),
    earL: q('.earL'),
    earR: q('.earR'),
    items: qa('[data-item]'),
    behind: { hb: qa('[data-hb]'), el: qa('[data-el]'), er: qa('[data-er]') },
    q: q('.q'),
    z: q('.z'),
    zs: qa('[data-z]'),
    cont: [q('.c0'), q('.c1'), q('.c2')],
    legs: Object.fromEntries(LEGS.map((k) => [k, q('.' + k)])) as Record<Leg, SVGElement>,
    feet: Object.fromEntries(LEGS.map((k) => [k, q('.' + k + 'Foot')])) as Record<Leg, SVGElement>,
  };
  const show = (attr: string, val: string) =>
    svg.querySelectorAll<SVGElement>(`[data-${attr}]`).forEach((el) => el.setAttribute('display', el.dataset[attr] === val ? 'inline' : 'none'));
  const set = (el: Element, name: string, v: string | number) => el.setAttribute(name, String(v));
  const f2 = (n: number) => n.toFixed(2);
  let lastFace = '';
  let worn: BelloItemId[] = [];

  return {
    // Màu lông đặt qua `coatVars` ở thẻ svg; ở đây chỉ nhớ món nào đang mặc.
    setOutfit(outfit) {
      worn = Object.values(outfit).filter((v): v is BelloItemId => Boolean(v));
    },
    setBoil(on) {
      set(R.root, 'filter', on ? `url(#f-${uid})` : 'none');
    },
    render(P, tick) {
      const parts: Record<(typeof BEHIND)[number], string> = {
        body: capsule(P.torso[0], P.torso[1]) + capsule(P.torso[1], P.torso[2]) + capsule(P.torso[2], P.neck[0]) + capsule(P.neck[0], P.neck[1]),
        hn: '',
        hf: '',
        fn: '',
        ff: '',
      };
      for (const k of LEGS) {
        const c = P[k];
        const f = P.feet[k];
        const foot = R.feet[k];
        parts[k] = capsule(c[0], c[1]) + capsule(c[1], c[2]);
        set(R.legs[k], 'd', parts[k]);
        if (f[2] < 0.5) set(foot, 'display', 'none');
        else {
          set(foot, 'display', 'inline');
          set(foot, 'cx', c[2][0] + f[0]);
          set(foot, 'cy', c[2][1] + f[1]);
          set(foot, 'rx', f[2]);
          set(foot, 'ry', f[3]);
        }
      }
      set(R.torso, 'd', parts.body);
      set(R.clip, 'd', parts.body);
      set(R.clipHf, 'd', parts.hf);
      set(R.clipFf, 'd', parts.ff);

      // Đuôi bắt đầu sâu trong mông để nối liền; thân và chân sau đè lên gốc đuôi thì có nét viền.
      const [bx, by, ang, len, bend] = P.tail;
      const dir: P2 = [Math.cos(ang * D2R), Math.sin(ang * D2R)];
      const perp: P2 = [-dir[1], dir[0]];
      const s0 = sub([bx, by], mul(dir, 12));
      const L2 = len + 12;
      const tail = brush(
        [s0, add(add(s0, mul(dir, L2 * 0.35)), mul(perp, bend)), add(add(s0, mul(dir, L2 * 0.7)), mul(perp, bend * 1.2)), add(s0, mul(dir, L2))],
        13,
        { taper: 'end', seed: 3 },
      );
      set(R.tail, 'd', tail);
      set(R.clipTail, 'd', tail);
      set(R.tailUnderBody, 'd', parts.body);
      set(R.tailUnderLeg, 'd', parts.hn);

      R.cont.forEach((el, i) => {
        const c = P.contours[i];
        set(el, 'd', c ? contour(P[c[0]], c[1], c[2], 20 + i) : '');
      });

      const [hx, hy, hr] = P.head;
      const [eL, eR] = P.ears;
      set(R.head, 'transform', `translate(${f2(hx)} ${f2(hy)}) rotate(${f2(hr)}) scale(1.1)`);
      set(R.earL, 'transform', `rotate(${f2(eL)} -17 -19)`);
      set(R.earR, 'transform', `rotate(${f2(eR)} 17 -19)`);
      // Vùng cắt tính trong toạ độ của đầu/tai: đưa thân (toạ độ thật) về đó bằng phép biến đổi ngược.
      const inv = `scale(${(1 / 1.1).toFixed(5)}) rotate(${f2(-hr)}) translate(${f2(-hx)} ${f2(-hy)})`;
      const pre = { hb: '', el: `rotate(${f2(-eL)} -17 -19) `, er: `rotate(${f2(-eR)} 17 -19) ` };
      for (const tag of ['hb', 'el', 'er'] as const) {
        R.behind[tag].forEach((el) => {
          set(el, 'd', parts[el.dataset[tag] as (typeof BEHIND)[number]]);
          set(el, 'transform', pre[tag] + inv);
        });
      }

      let eyes = P.face.eyes;
      if (P.blink && (eyes === 'open' || eyes === 'wide')) eyes = P.blink === 2 ? 'closed' : 'half';
      else if (P.blink && eyes === 'halfsad') eyes = 'closed';
      const face = eyes + P.face.mouth + P.face.brows;
      if (face !== lastFace) {
        show('eyes', eyes);
        show('mouth', P.face.mouth);
        show('brows', P.face.brows);
        lastFace = face;
      }
      const propT = P.propT ?? 0;
      set(R.q, 'display', P.prop === 'q' ? 'inline' : 'none');
      if (P.prop === 'q') set(R.q, 'transform', `translate(${f2(hx + 44)} ${f2(hy - 28 + propT)})`);
      set(R.z, 'display', P.prop === 'z' ? 'inline' : 'none');
      if (P.prop === 'z') {
        const ph = mod(propT, 2.4) / 2.4;
        set(R.z, 'transform', `translate(${f2(hx + 34)} ${f2(hy - 30 - 5 * ph)})`);
        R.zs.forEach((el, i) => set(el, 'display', ph > i * 0.22 ? 'inline' : 'none'));
      }
      R.items.forEach((el) => {
        const id = el.dataset.item as BelloItemId;
        set(el, 'display', worn.includes(id) && !(ITEM_ART[id].hideIn ?? []).includes(P.name) ? 'inline' : 'none');
      });
      set(R.turb, 'seed', 1 + (tick % 4) * 5);
      R.root.removeAttribute('visibility');
    },
  };
}
