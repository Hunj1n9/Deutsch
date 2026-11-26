// Âm thanh hiệu ứng tổng hợp bằng Web Audio (không cần file âm thanh). Tắt/bật trong menu, lưu ở localStorage.

const KEY = 'deutsch:sfx';

let ctx: AudioContext | null = null;
const listeners = new Set<() => void>();

/** Cho useSyncExternalStore: báo khi bật/tắt đổi (cả từ tab khác). */
export function subscribeSfx(fn: () => void): () => void {
  listeners.add(fn);
  window.addEventListener('storage', fn);
  return () => {
    listeners.delete(fn);
    window.removeEventListener('storage', fn);
  };
}

export function sfxEnabled(): boolean {
  try {
    return localStorage.getItem(KEY) !== 'off';
  } catch {
    return true;
  }
}

export function setSfxEnabled(on: boolean) {
  try {
    localStorage.setItem(KEY, on ? 'on' : 'off');
  } catch {
    // Trình duyệt chặn bộ nhớ: bỏ qua, âm thanh giữ mặc định bật.
  }
  listeners.forEach((fn) => fn());
}

function audio(): AudioContext | null {
  if (typeof window === 'undefined' || !sfxEnabled()) return null;
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  ctx ??= new Ctor();
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

function tone(ac: AudioContext, freq: number, at: number, dur: number, type: OscillatorType, volume: number) {
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ac.currentTime + at);
  gain.gain.setValueAtTime(0.0001, ac.currentTime + at);
  gain.gain.exponentialRampToValueAtTime(volume, ac.currentTime + at + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + at + dur);
  osc.connect(gain).connect(ac.destination);
  osc.start(ac.currentTime + at);
  osc.stop(ac.currentTime + at + dur + 0.02);
}

/** Đúng: hai nốt đi lên. */
export function playCorrect() {
  const ac = audio();
  if (!ac) return;
  tone(ac, 784, 0, 0.12, 'triangle', 0.18);
  tone(ac, 1175, 0.09, 0.22, 'triangle', 0.18);
}

/** Sai: nốt trầm ngắn, rung nhẹ trên máy hỗ trợ. */
export function playWrong() {
  navigator.vibrate?.(40);
  const ac = audio();
  if (!ac) return;
  tone(ac, 220, 0, 0.16, 'sine', 0.2);
  tone(ac, 165, 0.1, 0.22, 'sine', 0.2);
}

/** Xong bài/phiên: hợp âm rải. */
export function playComplete() {
  const ac = audio();
  if (!ac) return;
  [523, 659, 784, 1047].forEach((f, i) => tone(ac, f, i * 0.09, 0.3, 'triangle', 0.16));
}
