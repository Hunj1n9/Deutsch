'use client';

// Bộ đồ Bello đang mặc (SPEC F17): lưu ở localStorage của trình duyệt này, như công tắc âm thanh.
import { useMemo, useSyncExternalStore } from 'react';
import { parseOutfit, wear, type BelloItemId, type Outfit } from '@/lib/bello-items';

const KEY = 'deutsch:bello-outfit';
const listeners = new Set<() => void>();

/** Cho useSyncExternalStore: báo khi bộ đồ đổi (cả từ tab khác). */
function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  window.addEventListener('storage', fn);
  return () => {
    listeners.delete(fn);
    window.removeEventListener('storage', fn);
  };
}

function readRaw(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export function saveOutfit(outfit: Outfit) {
  try {
    localStorage.setItem(KEY, JSON.stringify(outfit));
  } catch {
    // Trình duyệt chặn bộ nhớ: Bello mặc đồ mặc định.
  }
  listeners.forEach((fn) => fn());
}

/** Mặc một món (không bỏ ra nếu đang mặc), dùng cho nút "Mặc thử". */
export function putOn(id: BelloItemId) {
  const cur = parseOutfit(readRaw());
  if (!Object.values(cur).includes(id)) saveOutfit(wear(cur, id));
}

/** Bộ đồ đang mặc; có `unlocked` thì bỏ món chưa mở. Lúc dựng ở server là bộ trống. */
export function useOutfit(unlocked?: ReadonlySet<string>): Outfit {
  const raw = useSyncExternalStore(subscribe, readRaw, () => null);
  return useMemo(() => parseOutfit(raw, unlocked), [raw, unlocked]);
}
