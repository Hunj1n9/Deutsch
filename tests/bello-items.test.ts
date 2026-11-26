import { describe, expect, it } from 'vitest';
import {
  BELLO_ITEMS,
  parseOutfit,
  unlockedBy,
  unlockedItems,
  unlockText,
  wear,
  type BelloProgress,
} from '@/lib/bello-items';

const none: BelloProgress = { lessons: [], stageTests: [], levelTests: [] };

describe('unlockedItems', () => {
  it('chưa học gì thì không mở món nào', () => {
    expect(unlockedItems(none).size).toBe(0);
  });

  it('bài skipped (bỏ qua chặng) không mở khăn đỏ; bài xong thật thì mở', () => {
    expect(unlockedItems({ ...none, lessons: [{ completed: false, skipped: true }] }).has('bandana')).toBe(false);
    expect(unlockedItems({ ...none, lessons: [{ completed: false, skipped: false }] }).has('bandana')).toBe(false);
    expect(unlockedItems({ ...none, lessons: [{ completed: true, skipped: false }] }).has('bandana')).toBe(true);
    // Bài đã bỏ qua rồi quay lại học hết: là xong thật.
    expect(unlockedItems({ ...none, lessons: [{ completed: true, skipped: true }] }).has('bandana')).toBe(true);
  });

  it('qua thi thử A1 mở mũ Tirol; trượt thì không; qua A1 không mở đồ của A2', () => {
    const a1 = unlockedItems({ ...none, levelTests: [{ level: 'A1', passed: true }] });
    expect([...a1]).toEqual(['tirol']);
    expect(unlockedItems({ ...none, levelTests: [{ level: 'A1', passed: false }] }).size).toBe(0);
  });

  it('kiểm tra chặng: chỉ lần đạt mới mở kính', () => {
    expect(unlockedItems({ ...none, stageTests: [{ passed: false }] }).has('glasses')).toBe(false);
    expect(unlockedItems({ ...none, stageTests: [{ passed: false }, { passed: true }] }).has('glasses')).toBe(true);
  });

  it('đủ mọi mốc thì mở cả 6 món', () => {
    const all = unlockedItems({
      lessons: [{ completed: true, skipped: false }],
      stageTests: [{ passed: true }],
      levelTests: (['A1', 'A2', 'B1', 'B2'] as const).map((level) => ({ level, passed: true })),
    });
    expect(all.size).toBe(BELLO_ITEMS.length);
  });
});

describe('unlockedBy', () => {
  it('bài xong đầu tiên mở khăn đỏ; bài xong thứ hai không mở gì', () => {
    expect(unlockedBy(none, { kind: 'lesson' })).toEqual(['bandana']);
    expect(unlockedBy({ ...none, lessons: [{ completed: true, skipped: false }] }, { kind: 'lesson' })).toEqual([]);
  });

  it('bài đầu tiên sau khi đã bỏ qua cả chặng vẫn mở khăn đỏ', () => {
    const skippedOnly: BelloProgress = { ...none, lessons: [{ completed: false, skipped: true }] };
    expect(unlockedBy(skippedOnly, { kind: 'lesson' })).toEqual(['bandana']);
  });

  it('kiểm tra chặng đạt lần đầu mở kính; trượt hoặc đạt lần sau thì không', () => {
    expect(unlockedBy(none, { kind: 'stage_test', passed: true })).toEqual(['glasses']);
    expect(unlockedBy(none, { kind: 'stage_test', passed: false })).toEqual([]);
    expect(unlockedBy({ ...none, stageTests: [{ passed: true }] }, { kind: 'stage_test', passed: true })).toEqual([]);
  });

  it('thi thử: đúng món của cấp vừa qua, một lần', () => {
    expect(unlockedBy(none, { kind: 'level_test', level: 'B1', passed: true })).toEqual(['scarf']);
    expect(unlockedBy(none, { kind: 'level_test', level: 'B1', passed: false })).toEqual([]);
    const passedA2: BelloProgress = { ...none, levelTests: [{ level: 'A2', passed: true }] };
    expect(unlockedBy(passedA2, { kind: 'level_test', level: 'A2', passed: true })).toEqual([]);
    expect(unlockedBy(passedA2, { kind: 'level_test', level: 'B2', passed: true })).toEqual(['gradcap']);
  });
});

describe('wear', () => {
  it('mặc món cùng chỗ thì thay món cũ; chỗ khác giữ nguyên', () => {
    const o1 = wear({}, 'bandana');
    expect(o1).toEqual({ neck: 'bandana' });
    const o2 = wear(wear(o1, 'tirol'), 'scarf');
    expect(o2).toEqual({ neck: 'scarf', head: 'tirol' });
  });

  it('chạm lại món đang mặc thì bỏ ra; không sửa bộ đồ cũ', () => {
    const o1 = { neck: 'bandana', face: 'glasses' } as const;
    const o2 = wear(o1, 'glasses');
    expect(o2).toEqual({ neck: 'bandana' });
    expect(o1).toEqual({ neck: 'bandana', face: 'glasses' });
  });
});

describe('parseOutfit', () => {
  it('đọc bộ đồ đã lưu, bỏ món lạ, món sai chỗ, dữ liệu hỏng', () => {
    expect(parseOutfit(JSON.stringify({ neck: 'scarf', head: 'gradcap' }))).toEqual({ neck: 'scarf', head: 'gradcap' });
    expect(parseOutfit(JSON.stringify({ neck: 'tirol', face: 'crown', coat: 'flag' }))).toEqual({ coat: 'flag' });
    expect(parseOutfit('{oops')).toEqual({});
    expect(parseOutfit(null)).toEqual({});
    expect(parseOutfit('[1,2]')).toEqual({});
  });

  it('có danh sách món đã mở thì bỏ món chưa mở', () => {
    const raw = JSON.stringify({ neck: 'bandana', head: 'tirol' });
    expect(parseOutfit(raw, new Set(['bandana']))).toEqual({ neck: 'bandana' });
  });
});

describe('unlockText', () => {
  it('nói điều kiện mở bằng tiếng Việt', () => {
    expect(unlockText('tirol')).toBe('Qua thi thử A1 để mở');
    expect(unlockText('bandana')).toBe('Xong bài học đầu tiên để mở');
    expect(unlockText('glasses')).toBe('Qua kiểm tra chặng đầu tiên để mở');
  });
});
