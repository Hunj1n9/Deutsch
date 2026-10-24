'use server';

import { z } from 'zod';
import { cardKindsFor } from '@/lib/items/cards';
import { draftSchema, levelSchema, uuidSchema } from '@/lib/items/input';
import { withPosTag, type ItemDraft, type Level } from '@/lib/items/types';
import { normalizeDraft, validateDraft, type DraftIssue } from '@/lib/items/validate';
import { getSession, SESSION_EXPIRED_VI } from '@/lib/supabase/session';

const BAD_INPUT_VI = 'Dữ liệu gửi lên không hợp lệ. Tải lại trang rồi thử lại.';

export type UpdateItemResponse = { ok: true } | { ok: false; error: string; issues?: DraftIssue[] };

/** Sửa một mục. Thẻ cũ và lịch ôn giữ nguyên; nếu sửa xong có thêm loại thẻ mới (vd câu ví dụ có chỗ trống) thì thêm thẻ đó. */
export async function updateItemAction(input: {
  id: string;
  draft: ItemDraft;
  level: Level | null;
  sourceId: string | null;
}): Promise<UpdateItemResponse> {
  const parsed = z
    .object({ id: uuidSchema, draft: draftSchema, level: levelSchema.nullable(), sourceId: uuidSchema.nullable() })
    .safeParse(input);
  if (!parsed.success) return { ok: false, error: BAD_INPUT_VI };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };

  const draft = normalizeDraft(parsed.data.draft);
  const issues = validateDraft(draft);
  if (issues.length > 0) return { ok: false, error: 'Sửa các ô được đánh dấu rồi lưu lại.', issues };

  const { data: current, error: readError } = await session.supabase
    .from('items')
    .select('tags')
    .eq('id', parsed.data.id)
    .single();
  if (readError || !current) return { ok: false, error: 'Không tìm thấy mục này.' };

  const { error } = await session.supabase
    .from('items')
    .update({
      type: draft.type,
      german: draft.german,
      article: draft.article,
      plural: draft.plural || null,
      vietnamese: draft.vietnamese,
      example_de: draft.example_de || null,
      example_vi: draft.example_vi || null,
      grammar_note_vi: draft.grammar_note_vi || null,
      level: parsed.data.level,
      source_id: parsed.data.sourceId,
      tags: withPosTag((current as { tags: string[] | null }).tags, draft.pos),
    })
    .eq('id', parsed.data.id);
  if (error) {
    console.error('[items] sửa lỗi:', error.code);
    return { ok: false, error: 'Không lưu được. Thử lại sau.' };
  }

  const kinds = cardKindsFor(draft);
  if (kinds.length > 0) {
    const { error: cardError } = await session.supabase
      .from('cards')
      .upsert(
        kinds.map((kind) => ({ user_id: session.userId, item_id: parsed.data.id, kind })),
        { onConflict: 'item_id,kind', ignoreDuplicates: true },
      );
    if (cardError) console.error('[items] thêm thẻ lỗi:', cardError.code);
  }
  return { ok: true };
}

export type SuspendResponse = { ok: true } | { ok: false; error: string };

/** Treo hoặc bỏ treo một thẻ: thẻ treo không xuất hiện trong phiên ôn. */
export async function setCardSuspendedAction(input: { cardId: string; suspended: boolean }): Promise<SuspendResponse> {
  const parsed = z.object({ cardId: uuidSchema, suspended: z.boolean() }).safeParse(input);
  if (!parsed.success) return { ok: false, error: BAD_INPUT_VI };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };

  const { error } = await session.supabase
    .from('cards')
    .update({ suspended: parsed.data.suspended })
    .eq('id', parsed.data.cardId);
  if (error) return { ok: false, error: 'Không đổi được trạng thái thẻ. Thử lại sau.' };
  return { ok: true };
}
