'use server';

import { z } from 'zod';
import { getAiClient } from '@/lib/ai/anthropic';
import { fillItems, fillItemsInBatches } from '@/lib/ai/p1-fill-item';
import { AI_ERROR_VI } from '@/lib/ai/structured';
import { cardKindsFor } from '@/lib/items/cards';
import {
  findDuplicates,
  isDuplicate,
  mergeFields,
  type DuplicateInfo,
  type ExistingItem,
} from '@/lib/items/dedupe';
import { applyFill } from '@/lib/items/fill';
import { draftSchema, levelSchema, uuidSchema } from '@/lib/items/input';
import { MAX_BULK_ROWS } from '@/lib/items/parse-bulk';
import { withPosTag, type ItemDraft, type Level } from '@/lib/items/types';
import { normalizeDraft, validateDraft, type DraftIssue } from '@/lib/items/validate';
import { getSession, SESSION_EXPIRED_VI, type Session } from '@/lib/supabase/session';

const SAVE_ERROR_VI = 'Không lưu được. Dữ liệu bạn nhập vẫn còn; thử lại sau.';
const BAD_INPUT_VI = 'Dữ liệu gửi lên không hợp lệ. Tải lại trang rồi thử lại.';

// ---------- AI điền giúp ----------

export type FillResponse = { ok: true; draft: ItemDraft } | { ok: false; error: string };

/** "Điền giúp" cho form một mục: chỉ điền ô còn trống. */
export async function fillDraftAction(input: { draft: ItemDraft; level: Level }): Promise<FillResponse> {
  const parsed = z.object({ draft: draftSchema, level: levelSchema }).safeParse(input);
  if (!parsed.success) return { ok: false, error: BAD_INPUT_VI };
  if (!(await getSession())) return { ok: false, error: SESSION_EXPIRED_VI };

  const ai = getAiClient();
  if (!ai) return { ok: false, error: AI_ERROR_VI.config };

  const draft = normalizeDraft(parsed.data.draft);
  if (!draft.german) return { ok: false, error: 'Gõ từ tiếng Đức trước rồi bấm Điền giúp.' };

  const result = await fillItems(ai.create, ai.model, parsed.data.level, [
    { german: draft.german, type: draft.type, vietnamese: draft.vietnamese || undefined },
  ]);
  if (!result.ok) return { ok: false, error: result.message };
  return { ok: true, draft: applyFill(draft, result.data[0], false) };
}

export type BulkFillResponse =
  | { ok: true; drafts: (ItemDraft | null)[]; error: string | null }
  | { ok: false; error: string };

/** Điền các dòng còn thiếu của bảng nhập hàng loạt, theo lô 20 dòng. */
export async function fillBulkAction(input: { drafts: ItemDraft[]; level: Level }): Promise<BulkFillResponse> {
  const parsed = z
    .object({ drafts: z.array(draftSchema).max(MAX_BULK_ROWS), level: levelSchema })
    .safeParse(input);
  if (!parsed.success) return { ok: false, error: BAD_INPUT_VI };
  if (!(await getSession())) return { ok: false, error: SESSION_EXPIRED_VI };

  const ai = getAiClient();
  if (!ai) return { ok: false, error: AI_ERROR_VI.config };

  const drafts = parsed.data.drafts.map(normalizeDraft);
  const result = await fillItemsInBatches(
    ai.create,
    ai.model,
    parsed.data.level,
    drafts.map((d) => ({ german: d.german, vietnamese: d.vietnamese || undefined })),
  );
  return {
    ok: true,
    drafts: drafts.map((d, i) => {
      const fill = result.items[i];
      return fill ? applyFill(d, fill, true) : null;
    }),
    error: result.error,
  };
}

// ---------- Chống trùng ----------


async function loadDuplicates(session: Session, drafts: ItemDraft[]): Promise<DuplicateInfo[]> {
  const keys = drafts.map((d) => ({ type: d.type, german: d.german, article: d.article }));
  const { data, error } = await session.supabase.rpc('find_item_duplicates', { p_keys: keys });
  if (error) throw error;
  return findDuplicates(keys, (data ?? []) as ExistingItem[]);
}

export type DuplicatesResponse = { ok: true; duplicates: DuplicateInfo[] } | { ok: false; error: string };

export async function checkDuplicatesAction(drafts: ItemDraft[]): Promise<DuplicatesResponse> {
  const parsed = z.array(draftSchema).max(MAX_BULK_ROWS).safeParse(drafts);
  if (!parsed.success) return { ok: false, error: BAD_INPUT_VI };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  try {
    return { ok: true, duplicates: await loadDuplicates(session, parsed.data.map(normalizeDraft)) };
  } catch (e) {
    console.error('[add] find_item_duplicates lỗi:', (e as { code?: string }).code);
    return { ok: false, error: 'Không kiểm được trùng lặp. Thử lại sau.' };
  }
}

// ---------- Lưu ----------

const entrySchema = z.object({
  draft: draftSchema,
  /** Chưa chọn (form một mục lần đầu bấm Lưu): server tự kiểm trùng và hỏi lại. */
  choice: z.enum(['merge', 'add', 'skip']).nullable(),
  mergeInto: uuidSchema.nullable(),
});

const saveSchema = z.object({
  entries: z.array(entrySchema).min(1).max(MAX_BULK_ROWS),
  level: levelSchema,
  sourceId: uuidSchema.nullable(),
});

export type SaveEntry = z.infer<typeof entrySchema>;

export type SaveResponse =
  | { ok: true; added: number; merged: number; skipped: number }
  | { ok: false; error: string; issues?: { index: number; issues: DraftIssue[] }[]; duplicates?: DuplicateInfo[] };

export async function saveItemsAction(input: {
  entries: SaveEntry[];
  level: Level;
  sourceId: string | null;
}): Promise<SaveResponse> {
  const parsed = saveSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: BAD_INPUT_VI };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };

  const { level, sourceId } = parsed.data;
  const entries = parsed.data.entries.map((e) => ({ ...e, draft: normalizeDraft(e.draft) }));

  const issues = entries
    .map((e, index) => ({ index, issues: e.choice === 'skip' ? [] : validateDraft(e.draft) }))
    .filter((r) => r.issues.length > 0);
  if (issues.length > 0) {
    return { ok: false, error: 'Còn mục chưa hợp lệ, sửa các ô được đánh dấu rồi lưu lại.', issues };
  }

  try {
    // Mục chưa chọn cách xử lý trùng: kiểm trùng, có trùng thì trả về để hỏi người dùng.
    const undecided = entries.filter((e) => e.choice === null);
    if (undecided.length > 0) {
      const duplicates = await loadDuplicates(session, entries.map((e) => e.draft));
      if (entries.some((e, i) => e.choice === null && isDuplicate(duplicates[i]))) {
        return { ok: false, error: 'Mục này đã có. Chọn gộp hoặc vẫn thêm.', duplicates };
      }
    }

    const mergeIds = entries.flatMap((e) => (e.choice === 'merge' && e.mergeInto ? [e.mergeInto] : []));
    const existing = new Map<string, ExistingItem>();
    if (mergeIds.length > 0) {
      const { data, error } = await session.supabase
        .from('items')
        .select('id, type, german, article, plural, vietnamese, example_de, example_vi, grammar_note_vi, tags')
        .in('id', mergeIds);
      if (error) throw error;
      for (const row of (data ?? []) as (ExistingItem & { tags: string[] | null })[]) existing.set(row.id, row);
    }

    let added = 0;
    let merged = 0;
    let skipped = 0;
    const payload = entries.flatMap((e): Record<string, unknown>[] => {
      const { draft } = e;
      if (e.choice === 'skip') {
        skipped += 1;
        return [];
      }
      const target = e.choice === 'merge' && e.mergeInto ? existing.get(e.mergeInto) : undefined;
      if (target) {
        merged += 1;
        const fields = mergeFields(target, draft);
        const tags = (target as ExistingItem & { tags: string[] | null }).tags;
        return [
          {
            id: target.id,
            ...fields,
            tags: draft.pos ? withPosTag(tags, draft.pos) : (tags ?? []),
            card_kinds: cardKindsFor({ type: draft.type, german: target.german, example_de: fields.example_de }),
          },
        ];
      }
      added += 1;
      return [
        {
          type: draft.type,
          german: draft.german,
          article: draft.article,
          plural: draft.plural,
          vietnamese: draft.vietnamese,
          example_de: draft.example_de,
          example_vi: draft.example_vi,
          grammar_note_vi: draft.grammar_note_vi,
          level,
          source_id: sourceId,
          tags: withPosTag([], draft.pos),
          card_kinds: cardKindsFor(draft),
        },
      ];
    });

    if (payload.length > 0) {
      const { error } = await session.supabase.rpc('save_items', { p_items: payload });
      if (error) throw error;
    }

    // Nhớ nguồn vừa dùng để lần sau chọn sẵn (DECISIONS.md).
    if (sourceId) {
      await session.supabase.from('settings').update({ current_source_id: sourceId }).eq('user_id', session.userId);
    }

    return { ok: true, added, merged, skipped };
  } catch (e) {
    console.error('[add] lưu lỗi:', (e as { code?: string }).code, (e as { message?: string }).message);
    return { ok: false, error: SAVE_ERROR_VI };
  }
}

// ---------- Nguồn ----------

export type SourceRow = { id: string; kind: string; title: string; chapter: string | null };

const sourceSchema = z.object({
  kind: z.enum(['textbook', 'edeutsch', 'deutschvn', 'tutor', 'writing', 'other']),
  title: z.string().trim().min(1).max(200),
  chapter: z.string().trim().max(200),
});

export type CreateSourceResponse = { ok: true; source: SourceRow } | { ok: false; error: string };

export async function createSourceAction(input: z.input<typeof sourceSchema>): Promise<CreateSourceResponse> {
  const parsed = sourceSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: 'Nhập tên nguồn (vd: Netzwerk neu A1).' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };

  const { data, error } = await session.supabase
    .from('sources')
    .insert({
      user_id: session.userId,
      kind: parsed.data.kind,
      title: parsed.data.title,
      chapter: parsed.data.chapter || null,
    })
    .select('id, kind, title, chapter')
    .single();
  if (error || !data) {
    console.error('[add] tạo nguồn lỗi:', error?.code);
    return { ok: false, error: 'Không tạo được nguồn. Thử lại sau.' };
  }
  await session.supabase.from('settings').update({ current_source_id: data.id }).eq('user_id', session.userId);
  return { ok: true, source: data as SourceRow };
}

