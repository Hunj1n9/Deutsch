import 'server-only';
import { PACKS } from '@/data/packs';
import { STAGES, type Stage } from '@/data/roadmap';
import { cardKindsFor } from './items/cards';
import { findDuplicates, type ExistingItem } from './items/dedupe';
import { withPosTag } from './items/types';
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
 * Mở chặng (F10): nhập gói vào kho trong một giao dịch (`save_items`), gắn tag gói.
 * Mục đã có (cùng german + article + type) thì không thêm lại, chỉ gắn thêm tag gói.
 */
export async function openStage(session: Session, stageId: string): Promise<OpenResult> {
  const stage = STAGES.find((s) => s.id === stageId);
  const text = PACKS[stageId];
  if (!stage || !text) throw new Error('unknown stage');
  const tag = packTag(stageId);
  const drafts = parsePack(text).drafts.map(normalizeDraft);

  const keys = drafts.map((d) => ({ type: d.type, german: d.german, article: d.article }));
  const { data: existingRows, error: dupError } = await session.supabase.rpc('find_item_duplicates', { p_keys: keys });
  if (dupError) throw dupError;
  const existing = (existingRows ?? []) as (ExistingItem & { tags: string[] | null })[];
  const dups = findDuplicates(keys, existing);

  const sourceId = await levelSource(session, stage.level);
  const fresh = drafts.filter((_, i) => dups[i].existing.length === 0 && dups[i].batchIndex === null);
  if (fresh.length > 0) {
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
      tags: [...withPosTag([], d.pos), tag],
      card_kinds: cardKindsFor(d),
    }));
    const { error } = await session.supabase.rpc('save_items', { p_items: payload });
    if (error) throw error;
  }

  const untagged = existing.filter((item) => !item.tags?.includes(tag)).map((item) => item.id);
  let tagged = 0;
  if (untagged.length > 0) {
    const { data, error } = await session.supabase.rpc('add_item_tag', { p_ids: untagged, p_tag: tag });
    if (error) throw error;
    tagged = data as number;
  }
  return { added: fresh.length, tagged };
}
