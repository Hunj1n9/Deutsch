import { describe, expect, it } from 'vitest';
import { buildSessionQueue, interleaveKinds, longestRun, spreadNew } from '@/lib/review-queue';

const card = (id: string, item: string, kind: string, due = '2026-10-25T00:00:00Z') => ({ id, item_id: item, kind, due });

describe('buildSessionQueue', () => {
  it('mỗi item chỉ một thẻ trong phiên, ưu tiên thẻ đến hạn sớm nhất', () => {
    const due = [card('a2', 'A', 'audio_de', '2026-10-24T00:00:00Z'), card('a1', 'A', 'vi_de', '2026-10-20T00:00:00Z')];
    const q = buildSessionQueue({ due, fresh: [], newLimit: 10, reviewedToday: new Map() });
    expect(q.map((c) => c.id)).toEqual(['a1']);
  });

  it('item đã có thẻ khác ôn hôm nay thì bỏ; chính thẻ đó đến hạn lại thì giữ', () => {
    const due = [card('a1', 'A', 'vi_de'), card('b1', 'B', 'vi_de')];
    const reviewedToday = new Map([
      ['A', new Set(['a2'])],
      ['B', new Set(['b1'])],
    ]);
    expect(buildSessionQueue({ due, fresh: [], newLimit: 0, reviewedToday }).map((c) => c.id)).toEqual(['b1']);
  });

  it('giới hạn thẻ mới và không lấy thẻ mới của item đã có trong phiên', () => {
    const due = [card('a1', 'A', 'vi_de')];
    const fresh = [card('a2', 'A', 'cloze'), card('c1', 'C', 'vi_de'), card('d1', 'D', 'vi_de'), card('e1', 'E', 'vi_de')];
    const q = buildSessionQueue({ due, fresh, newLimit: 2, reviewedToday: new Map() });
    expect(q.map((c) => c.id).sort()).toEqual(['a1', 'c1', 'd1']);
  });

  it('không quá 3 thẻ cùng kind liên tiếp khi còn kind khác', () => {
    const due = [
      ...Array.from({ length: 8 }, (_, i) => card(`v${i}`, `V${i}`, 'vi_de', `2026-10-2${i % 9}T00:00:00Z`)),
      card('x', 'X', 'cloze', '2026-10-29T00:00:00Z'),
      card('y', 'Y', 'audio_de', '2026-10-29T00:00:00Z'),
    ];
    const q = buildSessionQueue({ due, fresh: [], newLimit: 0, reviewedToday: new Map() });
    expect(q).toHaveLength(10);
    expect(longestRun(q.slice(0, 8))).toBeLessThanOrEqual(3);
  });
});

describe('interleaveKinds', () => {
  it('chỉ còn một kind thì cho phép chạy dài', () => {
    const cards = Array.from({ length: 5 }, () => ({ kind: 'vi_de' }));
    expect(interleaveKinds(cards)).toHaveLength(5);
  });

  it('chèn kind khác vào sau 3 thẻ giống nhau', () => {
    const kinds = ['a', 'a', 'a', 'a', 'a', 'b', 'c'].map((kind) => ({ kind }));
    expect(interleaveKinds(kinds).map((c) => c.kind).join('')).toBe('aaabaac');
  });
});

describe('spreadNew', () => {
  it('rải thẻ mới vào giữa thẻ ôn', () => {
    expect(spreadNew(['r1', 'r2', 'r3', 'r4'], ['n1', 'n2'])).toEqual(['r1', 'r2', 'n1', 'r3', 'r4', 'n2']);
    expect(spreadNew([], ['n1'])).toEqual(['n1']);
  });
});
