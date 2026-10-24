import { PACKS } from '@/data/packs';
import { LESSONS_BY_STAGE, STAGE_LESSONS } from '@/data/lessons';
import { STAGES, type Stage } from '@/data/roadmap';
import type { ItemDraft } from '@/lib/items/types';
import { parsePack } from '@/lib/packs/format';
import type { VocabEntry } from './stage-test';
import type { Exercise, GrammarPoint, Lesson, StageLessons } from './types';
import { itemKey } from './validate';

/**
 * Tra cứu dữ liệu khóa học tĩnh (bài, mục của gói, bài tập theo id).
 */
export function findLesson(lessonId: string): { stage: StageLessons; lesson: Lesson; index: number } | null {
  const stageId = lessonId.slice(0, 5);
  const stage = LESSONS_BY_STAGE.get(stageId);
  const index = stage?.lessons.findIndex((l) => l.id === lessonId) ?? -1;
  return stage && index >= 0 ? { stage, lesson: stage.lessons[index], index } : null;
}

export function roadmapStage(stageId: string): Stage | null {
  return STAGES.find((s) => s.id === stageId) ?? null;
}

export function grammarPoint(stage: StageLessons, key: string): GrammarPoint | null {
  return stage.points.find((p) => p.key === key) ?? null;
}

const draftCache = new Map<string, Map<string, ItemDraft>>();

/** Mục của gói chặng theo khóa (german). */
export function packDrafts(stageId: string): Map<string, ItemDraft> {
  let map = draftCache.get(stageId);
  if (!map) {
    map = new Map(parsePack(PACKS[stageId] ?? '').drafts.map((d) => [itemKey(d), d]));
    draftCache.set(stageId, map);
  }
  return map;
}

export function lessonDrafts(lesson: Lesson): ItemDraft[] {
  const drafts = packDrafts(lesson.stage_id);
  return lesson.items.flatMap((k) => {
    const d = drafts.get(k);
    return d ? [d] : [];
  });
}

/** Mục từ (không gồm mục ngữ pháp) để ra câu từ vựng ở kiểm tra chặng. */
export function vocabEntries(stageId: string): VocabEntry[] {
  return [...packDrafts(stageId).values()]
    .filter((d) => d.type !== 'grammar')
    .map((d) => ({ key: itemKey(d), german: d.german, article: d.article, vietnamese: d.vietnamese }));
}

/** Mọi bài tập của bài (đoạn giải thích, trộn, câu hỏi hiểu) theo id. */
export function lessonExercises(lesson: Lesson): Exercise[] {
  return [
    ...lesson.grammar.sections.flatMap((s) => s.exercises),
    ...lesson.grammar.mixed,
    ...lesson.dialogue.questions,
  ];
}

export function findLessonExercise(lesson: Lesson, exerciseId: string): Exercise | null {
  return lessonExercises(lesson).find((e) => e.id === exerciseId) ?? null;
}

/** Bài tập trộn cuối bước Ngữ pháp: sai ở đây thì ghi sổ lỗi (SPEC F11). */
export function isMixedExercise(lesson: Lesson, exerciseId: string): boolean {
  return lesson.grammar.mixed.some((e) => e.id === exerciseId);
}

/** rule_key của các điểm ngữ pháp thuộc những chặng có bài (gửi kèm P2 cho khóa lỗi nhất quán). */
export function allGrammarRules(): { rule_key: string; title_vi: string }[] {
  return STAGE_LESSONS.flatMap((s) => s.points.map((p) => ({ rule_key: p.rule_key, title_vi: p.title_vi })));
}
