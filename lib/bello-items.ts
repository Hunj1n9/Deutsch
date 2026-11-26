/**
 * Vật phẩm của Bello và luật mở khóa (SPEC F17). Hàm thuần.
 * Món đã mở luôn tính lại từ tiến độ học (bài xong, kiểm tra chặng, thi thử), không lưu riêng;
 * bộ đồ đang mặc nằm ở localStorage nên chỉ cần đọc an toàn.
 */
import type { ExamLevel } from './daily-goal';

export type BelloSlot = 'neck' | 'head' | 'face' | 'coat';
export const BELLO_SLOTS: readonly BelloSlot[] = ['neck', 'head', 'face', 'coat'];
export const SLOT_LABEL_VI: Record<BelloSlot, string> = { neck: 'Cổ', head: 'Đầu', face: 'Mặt', coat: 'Màu lông' };

/** Mốc học mở một món. */
export type UnlockRule = { kind: 'first_lesson' } | { kind: 'first_stage_test' } | { kind: 'level_test'; level: ExamLevel };

export const BELLO_ITEMS = [
  { id: 'bandana', slot: 'neck', label_vi: 'Khăn đỏ chấm bi', rule: { kind: 'first_lesson' } },
  { id: 'glasses', slot: 'face', label_vi: 'Kính tròn', rule: { kind: 'first_stage_test' } },
  { id: 'tirol', slot: 'head', label_vi: 'Mũ Tirol', rule: { kind: 'level_test', level: 'A1' } },
  { id: 'flag', slot: 'coat', label_vi: 'Lông đen – đỏ – vàng', rule: { kind: 'level_test', level: 'A2' } },
  { id: 'scarf', slot: 'neck', label_vi: 'Khăn len sọc', rule: { kind: 'level_test', level: 'B1' } },
  { id: 'gradcap', slot: 'head', label_vi: 'Mũ tốt nghiệp', rule: { kind: 'level_test', level: 'B2' } },
] as const satisfies readonly { id: string; slot: BelloSlot; label_vi: string; rule: UnlockRule }[];

export type BelloItem = (typeof BELLO_ITEMS)[number];
export type BelloItemId = BelloItem['id'];

const BY_ID = new Map<string, BelloItem>(BELLO_ITEMS.map((i) => [i.id, i]));

export function belloItem(id: string): BelloItem | undefined {
  return BY_ID.get(id);
}

/** Phần tiến độ cần để biết món nào đã mở (đọc từ `lesson_progress`, `stage_tests`, `level_tests`). */
export type BelloProgress = {
  /** `completed` = có `completed_at`. Bài chỉ bị bỏ qua cả chặng thì `completed` = false. */
  lessons: readonly { completed: boolean; skipped: boolean }[];
  stageTests: readonly { passed: boolean }[];
  levelTests: readonly { level: string; passed: boolean }[];
};

function ruleMet(rule: UnlockRule, p: BelloProgress): boolean {
  switch (rule.kind) {
    case 'first_lesson':
      // Bài bỏ qua mà chưa học không tính; đã quay lại học hết thì `completed` đã true.
      return p.lessons.some((l) => l.completed);
    case 'first_stage_test':
      return p.stageTests.some((t) => t.passed);
    case 'level_test':
      return p.levelTests.some((t) => t.passed && t.level === rule.level);
  }
}

export function unlockedItems(p: BelloProgress): Set<BelloItemId> {
  return new Set(BELLO_ITEMS.filter((i) => ruleMet(i.rule, p)).map((i) => i.id));
}

/** Một lần làm vừa ghi xong. `lesson` = một bài vừa xong lần đầu (không phải bỏ qua). */
export type BelloAttempt =
  | { kind: 'lesson' }
  | { kind: 'stage_test'; passed: boolean }
  | { kind: 'level_test'; level: ExamLevel; passed: boolean };

/** Món mở nhờ đúng lần làm này: có sau khi tính thêm lần làm vào `before`, chưa có trước đó. */
export function unlockedBy(before: BelloProgress, attempt: BelloAttempt): BelloItemId[] {
  const after: BelloProgress =
    attempt.kind === 'lesson'
      ? { ...before, lessons: [...before.lessons, { completed: true, skipped: false }] }
      : attempt.kind === 'stage_test'
        ? { ...before, stageTests: [...before.stageTests, { passed: attempt.passed }] }
        : { ...before, levelTests: [...before.levelTests, { level: attempt.level, passed: attempt.passed }] };
  const had = unlockedItems(before);
  return [...unlockedItems(after)].filter((id) => !had.has(id));
}

/** Câu điều kiện hiện dưới món chưa mở trong tủ đồ. */
export function unlockText(id: BelloItemId): string {
  const rule = BY_ID.get(id)!.rule;
  switch (rule.kind) {
    case 'first_lesson':
      return 'Xong bài học đầu tiên để mở';
    case 'first_stage_test':
      return 'Qua kiểm tra chặng đầu tiên để mở';
    case 'level_test':
      return `Qua thi thử ${rule.level} để mở`;
  }
}

/** Bộ đồ đang mặc: mỗi chỗ mặc tối đa một món. */
export type Outfit = Partial<Record<BelloSlot, BelloItemId>>;

/** Chạm một món: chưa mặc thì mặc (thay món cũ cùng chỗ), đang mặc thì bỏ ra. */
export function wear(outfit: Outfit, id: BelloItemId): Outfit {
  const { slot } = BY_ID.get(id)!;
  const next = { ...outfit };
  if (next[slot] === id) delete next[slot];
  else next[slot] = id;
  return next;
}

/** Đọc bộ đồ đã lưu; bỏ món lạ, món sai chỗ, và món chưa mở nếu có `unlocked`. */
export function parseOutfit(raw: string | null, unlocked?: ReadonlySet<string>): Outfit {
  let data: unknown;
  try {
    data = raw ? JSON.parse(raw) : null;
  } catch {
    return {};
  }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return {};
  const out: Outfit = {};
  for (const slot of BELLO_SLOTS) {
    const id = (data as Record<string, unknown>)[slot];
    const item = typeof id === 'string' ? BY_ID.get(id) : undefined;
    if (item && item.slot === slot && (!unlocked || unlocked.has(item.id))) out[slot] = item.id;
  }
  return out;
}
