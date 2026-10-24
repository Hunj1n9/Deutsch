import 'server-only';
import { PACKS } from '@/data/packs';
import { STAGES, type Stage } from '@/data/roadmap';
import { cardKindsFor } from './items/cards';
import { findDuplicates, type ExistingItem } from './items/dedupe';
import { withPosTag, type ItemDraft } from './items/types';
import { normalizeDraft } from './items/validate';
import { parsePack } from './packs/format';
import { packTag, type StageProgress } from './roadmap';
import type { Session } from './supabase/session';

export async function loadRoadmapProgress({ supabase }: Session): Promise<Map<string, StageProgress>> {
  const { data } = await supabase.rpc('roadmap_progress');
  const rows = (data ?? []) as { pack: string; cards: number; learned: number }[];
  return new Map(rows.map((r) => [r.pack, { opened: true, cards: r.cards, learned: r.learned }]));
}

export function stageItemCount(stage: Stage): number {
  return PACKS[stage.id] ? parsePack(PACKS[stage.id]).drafts.length : 0;
}

/** Nguồn "Lộ trình <cấp>" cho các mục của gói; tạo nếu chưa có. */
async function levelSource({ supabase, userId }: Session, level: string): Promise<string | null> {
  const title = `Lộ trình ${level}`;
  const { data: found } = await supabase.from('sources').select('id').eq('title', title).limit(1).maybeSingle();
  if (found) return found.id as string;
  const { data } = await supabase.from('sources').insert({ user_id: userId, kind: 'other', title }).select('id').single();
  return (data?.id as string) ?? null;
}

export type OpenResult = { added: number; tagged: number };

/**
 * Nhập mục của gói vào kho trong một giao dịch (`save_items`), gắn các tag cho trước.
 * Mục đã có (cùng german + article + type) thì không thêm lại, chỉ gắn thêm tag còn thiếu.
 */
export async function importStageDrafts(
  session: Session,
  stage: Stage,
  drafts: ItemDraft[],
  tags: string[],
): Promise<OpenResult> {
  const normalized = drafts.map(normalizeDraft);
  const keys = normalized.map((d) => ({ type: d.type, german: d.german, article: d.article }));
  const { data: existingRows, error: dupError } = await session.supabase.rpc('find_item_duplicates', { p_keys: keys });
  if (dupError) throw dupError;
  const existing = (existingRows ?? []) as (ExistingItem & { tags: string[] | null })[];
  const dups = findDuplicates(keys, existing);

  const fresh = normalized.filter((_, i) => dups[i].existing.length === 0 && dups[i].batchIndex === null);
  if (fresh.length > 0) {
    const sourceId = await levelSource(session, stage.level);
    const payload = fresh.map((d) => ({
      type: d.type,
      german: d.german,
      article: d.article,
      plural: d.plural,
      vietnamese: d.vietnamese,
      example_de: d.example_de,
      example_vi: d.example_vi,
      grammar_note_vi: d.grammar_note_vi,
      level: stage.level,
      source_id: sourceId,
      tags: [...withPosTag([], d.pos), ...tags],
      card_kinds: cardKindsFor(d),
    }));
    const { error } = await session.supabase.rpc('save_items', { p_items: payload });
    if (error) throw error;
  }

  // Mục đã có: chỉ gắn tag còn thiếu (mục trùng nằm trong gói khác vẫn giữ tag cũ).
  const matched = existing.filter((item) => dups.some((d) => d.existing.some((e) => e.id === item.id)));
  let tagged = 0;
  for (const tag of tags) {
    const untagged = matched.filter((item) => !item.tags?.includes(tag)).map((item) => item.id);
    if (untagged.length === 0) continue;
    const { data, error } = await session.supabase.rpc('add_item_tag', { p_ids: untagged, p_tag: tag });
    if (error) throw error;
    tagged = Math.max(tagged, data as number);
  }
  return { added: fresh.length, tagged };
}

/** Mở chặng (F10): nhập cả gói, gắn tag gói. Từ M11 chỉ dùng cho chặng chưa có bài học. */
export async function openStage(session: Session, stageId: string): Promise<OpenResult> {
  const stage = STAGES.find((s) => s.id === stageId);
  const text = PACKS[stageId];
  if (!stage || !text) throw new Error('unknown stage');
  return importStageDrafts(session, stage, parsePack(text).drafts, [packTag(stageId)]);
}
