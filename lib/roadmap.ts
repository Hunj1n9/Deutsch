/**
 * Tiến độ lộ trình (F10). Hàm thuần.
 */
export type StageProgress = { opened: boolean; cards: number; learned: number };

/** Một chặng coi là đã thuộc khi ít nhất 80% thẻ đã lên trạng thái Review. */
export const LEARNED_THRESHOLD = 0.8;

export function stagePercent(p: StageProgress | undefined): number {
  if (!p || p.cards === 0) return 0;
  return p.learned / p.cards;
}

export const PACK_TAG_PREFIX = 'pack:';

export function packTag(stageId: string): string {
  return `${PACK_TAG_PREFIX}${stageId}`;
}

/**
 * Chặng hiện tại: chặng đã mở đầu tiên chưa thuộc; nếu mọi chặng đã mở đều thuộc thì là chặng chưa mở đầu tiên.
 * `next`: chặng chưa mở đầu tiên (gợi ý mở ở trang Hôm nay).
 */
export function roadmapPosition<T extends { id: string }>(
  stages: readonly T[],
  progress: ReadonlyMap<string, StageProgress>,
): { current: T | null; next: T | null } {
  const next = stages.find((s) => !progress.get(s.id)?.opened) ?? null;
  const learning = stages.find((s) => {
    const p = progress.get(s.id);
    return p?.opened && stagePercent(p) < LEARNED_THRESHOLD;
  });
  return { current: learning ?? next, next };
}
