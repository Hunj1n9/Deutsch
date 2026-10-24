import 'server-only';
import type { TutorContext } from './ai/p3-tutor';
import { lessonTutorContext } from './course/tutor-context';
import { fullGerman } from './review-card';
import { loadSettings } from './supabase/queries';
import type { Session } from './supabase/session';

/** Ngữ cảnh gửi kèm mỗi lượt hỏi gia sư (SPEC F6). */
export async function loadTutorContext(
  session: Session,
  cardId: string | null,
  lessonRef: { lessonId: string; exerciseId: string | null } | null = null,
): Promise<TutorContext> {
  const settings = await loadSettings(session);
  const [sourceRes, errorsRes, cardRes] = await Promise.all([
    settings.current_source_id
      ? session.supabase.from('sources').select('title, chapter').eq('id', settings.current_source_id).maybeSingle()
      : Promise.resolve({ data: null }),
    session.supabase
      .from('errors')
      .select('title_vi')
      .eq('status', 'open')
      .order('occurrences', { ascending: false })
      .order('last_seen', { ascending: false })
      .limit(10),
    cardId
      ? session.supabase
          .from('cards')
          .select('kind, items!inner(type, german, article, plural, vietnamese, example_de, example_vi, grammar_note_vi, level, tags)')
          .eq('id', cardId)
          .maybeSingle()
      : Promise.resolve({ data: null }),
  ]);

  const source = sourceRes.data as { title: string; chapter: string | null } | null;
  const card = cardRes.data as unknown as {
    kind: string;
    items: Parameters<typeof fullGerman>[0] & { vietnamese: string; example_de: string | null };
  } | null;

  return {
    level: settings.current_level,
    source: source ? [source.title, source.chapter].filter(Boolean).join(' · ') : null,
    openErrors: ((errorsRes.data ?? []) as { title_vi: string }[]).map((e) => e.title_vi),
    lesson: lessonRef ? lessonTutorContext(lessonRef.lessonId, lessonRef.exerciseId) : null,
    card: card
      ? {
          kind: card.kind,
          german: fullGerman(card.items),
          vietnamese: card.items.vietnamese,
          example_de: card.items.example_de?.replace(/[{}]/g, '') ?? null,
        }
      : null,
  };
}
