/**
 * Đo thời gian học thật (SPEC F8). Hàm thuần.
 * Client gửi nhịp mỗi 30 giây khi người dùng có thao tác trong 120 giây gần nhất.
 * Server cộng khoảng thời gian từ nhịp trước, tối đa 30 giây mỗi nhịp; cách nhịp trước quá 45 giây thì coi là phiên mới.
 */
export const BEAT_INTERVAL_MS = 30_000;
export const IDLE_LIMIT_MS = 120_000;
export const MAX_BEAT_SECONDS = 30;
export const SESSION_GAP_MS = 45_000;

/** Client: có gửi nhịp không (còn thao tác trong 120 giây gần nhất). */
export function shouldBeat(now: number, lastInteraction: number): boolean {
  return now - lastInteraction <= IDLE_LIMIT_MS;
}

export type BeatPlan = { kind: 'extend'; addSeconds: number } | { kind: 'start' };

/** Server: nhịp này nối tiếp phiên cũ (cộng giây) hay mở phiên mới. */
export function planBeat(lastBeatAt: Date | null, now: Date): BeatPlan {
  if (!lastBeatAt) return { kind: 'start' };
  const gap = now.getTime() - lastBeatAt.getTime();
  if (gap < 0 || gap > SESSION_GAP_MS) return { kind: 'start' };
  return { kind: 'extend', addSeconds: Math.min(MAX_BEAT_SECONDS, Math.round(gap / 1000)) };
}
