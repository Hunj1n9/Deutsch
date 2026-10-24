/**
 * Xếp hàng thẻ cho một phiên ôn (SPEC F3). Hàm thuần.
 * - Thẻ đến hạn + tối đa `newLimit` thẻ mới.
 * - Không hai thẻ của cùng một item trong một ngày (thẻ vừa sai được quay lại, xử lý ở phía phiên).
 * - Không quá 3 thẻ cùng kind liên tiếp nếu còn thẻ kind khác.
 */
export type QueueCard = { id: string; item_id: string; kind: string; due: string };

export type QueueInput<T extends QueueCard> = {
  /** Thẻ đến hạn (không phải thẻ mới), chưa sắp xếp. */
  due: readonly T[];
  /** Thẻ mới, theo thứ tự muốn học (thường là thứ tự thêm). */
  fresh: readonly T[];
  newLimit: number;
  /** item_id → các card_id đã ôn hôm nay. */
  reviewedToday: ReadonlyMap<string, ReadonlySet<string>>;
  maxRun?: number;
};

export function buildSessionQueue<T extends QueueCard>({
  due,
  fresh,
  newLimit,
  reviewedToday,
  maxRun = 3,
}: QueueInput<T>): T[] {
  const takenItems = new Set<string>();
  const allowed = (card: T) => {
    if (takenItems.has(card.item_id)) return false;
    const done = reviewedToday.get(card.item_id);
    // Item đã có thẻ khác ôn hôm nay thì để mai; chính thẻ đó đến hạn lại (bước học) thì vẫn ôn.
    return !done || [...done].every((id) => id === card.id);
  };

  const pickedDue: T[] = [];
  for (const card of [...due].sort((a, b) => a.due.localeCompare(b.due))) {
    if (!allowed(card)) continue;
    takenItems.add(card.item_id);
    pickedDue.push(card);
  }

  const pickedNew: T[] = [];
  for (const card of fresh) {
    if (pickedNew.length >= Math.max(0, newLimit)) break;
    if (!allowed(card)) continue;
    takenItems.add(card.item_id);
    pickedNew.push(card);
  }

  return interleaveKinds(spreadNew(pickedDue, pickedNew), maxRun);
}

/** Rải thẻ mới đều vào giữa thẻ ôn, để phiên không dồn hết thẻ mới ở cuối. */
export function spreadNew<T>(due: readonly T[], fresh: readonly T[]): T[] {
  if (fresh.length === 0) return [...due];
  if (due.length === 0) return [...fresh];
  const out: T[] = [];
  const step = (due.length + fresh.length) / fresh.length;
  let nextNewAt = step / 2;
  let d = 0;
  let n = 0;
  for (let i = 0; i < due.length + fresh.length; i++) {
    if (n < fresh.length && (i >= nextNewAt || d >= due.length)) {
      out.push(fresh[n++]);
      nextNewAt += step;
    } else {
      out.push(due[d++]);
    }
  }
  return out;
}

/** Giữ thứ tự gần nhất có thể nhưng không để quá `maxRun` thẻ cùng kind liền nhau khi còn kind khác. */
export function interleaveKinds<T extends { kind: string }>(cards: readonly T[], maxRun = 3): T[] {
  const rest = [...cards];
  const out: T[] = [];
  while (rest.length > 0) {
    const tail = out.slice(-maxRun);
    const blocked = tail.length === maxRun && tail.every((c) => c.kind === tail[0].kind) ? tail[0].kind : null;
    const index = blocked === null ? 0 : rest.findIndex((c) => c.kind !== blocked);
    out.push(rest.splice(index === -1 ? 0 : index, 1)[0]);
  }
  return out;
}

/** Số kind giống nhau liền nhau dài nhất (dùng trong test và kiểm tra nhanh). */
export function longestRun(cards: readonly { kind: string }[]): number {
  let best = 0;
  let run = 0;
  cards.forEach((c, i) => {
    run = i > 0 && cards[i - 1].kind === c.kind ? run + 1 : 1;
    best = Math.max(best, run);
  });
  return best;
}
