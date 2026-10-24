'use server';

import { z } from 'zod';
import { openStage } from '@/lib/roadmap-db';
import { getSession, SESSION_EXPIRED_VI } from '@/lib/supabase/session';

export type OpenStageResponse = { ok: true; added: number; tagged: number } | { ok: false; error: string };

export async function openStageAction(stageId: string): Promise<OpenStageResponse> {
  if (!z.string().regex(/^[ab][12]-\d{2}$/).safeParse(stageId).success) return { ok: false, error: 'Chặng không hợp lệ.' };
  const session = await getSession();
  if (!session) return { ok: false, error: SESSION_EXPIRED_VI };
  try {
    const r = await openStage(session, stageId);
    return { ok: true, ...r };
  } catch (e) {
    console.error('[roadmap] mở chặng lỗi:', (e as { code?: string }).code ?? (e as Error).message);
    return { ok: false, error: 'Không mở được chặng. Thử lại sau.' };
  }
}
