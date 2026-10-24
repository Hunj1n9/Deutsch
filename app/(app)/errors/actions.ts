'use server';

import { z } from 'zod';
import { ERROR_CATEGORIES, normalizeRuleKey } from '@/lib/errors';
import { recordErrors } from '@/lib/errors-db';
import { getSession, SESSION_EXPIRED_VI } from '@/lib/supabase/session';

const manualSchema = z.object({
  text_wrong: z.string().trim().min(1, 'Nhập câu sai.').max(500),
  text_correct: z.string().trim().min(1, 'Nhập câu đúng.').max(500),
  title_vi: z.string().trim().min(1, 'Nhập tên lỗi.').max(200),
  explanation_vi: z.string().trim().max(1000),
  category: z.enum(ERROR_CATEGORIES),
  rule_key: z.string().trim().max(80),
  source: z.enum(['textbook', 'edeutsch', 'deutschvn', 'tutor', 'writing', 'other']),
});

export type ManualErrorInput = z.input<typeof manualSchema>;
export type ManualErrorResponse = { ok: true; created: boolean; ruleKey: string } | { ok: false; error: string };

/** Thêm tay một lỗi (giáo viên hoặc eDeutsch chỉ ra), gom theo rule_key như mọi nguồn khác (SPEC F4). */
export async function addManualErrorAction(input: ManualErrorInput): Promise<ManualErrorResponse> {
  const parsed = manualSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? 'Dữ liệu không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };

  const d = parsed.data;
  const ruleKey = normalizeRuleKey(d.rule_key || d.title_vi);
  if (ruleKey.length < 3) return { ok: false, error: 'Khóa lỗi quá ngắn; đặt tên lỗi rõ hơn.' };
  try {
    const [r] = await recordErrors(session, [
      {
        rule_key: ruleKey,
        category: d.category,
        title_vi: d.title_vi,
        explanation_vi: d.explanation_vi || d.title_vi,
        source: d.source,
        text_wrong: d.text_wrong,
        text_correct: d.text_correct,
      },
    ]);
    return { ok: true, created: r?.created ?? false, ruleKey };
  } catch (e) {
    console.error('[errors] thêm tay lỗi:', (e as { code?: string }).code);
    return { ok: false, error: 'Không lưu được lỗi. Thử lại sau.' };
  }
}
