import 'server-only';
import type { Level } from '@/lib/items/types';
import type { Session } from './session';

export type SourceOption = { id: string; kind: string; title: string; chapter: string | null };

export type UserSettings = {
  current_level: Level;
  current_source_id: string | null;
  new_cards_per_day: number;
  desired_retention: number;
  daily_minutes_target: number;
  weekly_days_target: number;
  next_exam_name: string | null;
  next_exam_date: string | null;
  hours_offset: number;
  exam_level: string;
  reminder_enabled: boolean;
  reminder_time: string;
  nag_time: string | null;
};

const DEFAULT_SETTINGS: UserSettings = {
  current_level: 'A1',
  current_source_id: null,
  new_cards_per_day: 15,
  desired_retention: 0.9,
  daily_minutes_target: 120,
  weekly_days_target: 6,
  next_exam_name: 'Goethe-Zertifikat B2',
  next_exam_date: null,
  hours_offset: 0,
  exam_level: 'B2',
  reminder_enabled: false,
  reminder_time: '19:00',
  nag_time: '21:30',
};

export async function loadSettings({ supabase, userId }: Session): Promise<UserSettings> {
  const { data } = await supabase.from('settings').select('*').eq('user_id', userId).maybeSingle();
  if (!data) return DEFAULT_SETTINGS;
  return { ...DEFAULT_SETTINGS, ...(data as Partial<UserSettings>), hours_offset: Number(data.hours_offset ?? 0) };
}

export async function loadSources({ supabase }: Session): Promise<SourceOption[]> {
  const { data } = await supabase
    .from('sources')
    .select('id, kind, title, chapter')
    .order('created_at', { ascending: false });
  return (data ?? []) as SourceOption[];
}

