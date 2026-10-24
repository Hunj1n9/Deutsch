import type { Lesson, StageLessons } from './types';
import { SUMMARY_STEP } from './types';

/**
 * Vị trí trong khóa học (SPEC F11, F12). Hàm thuần.
 */
export type LessonState = {
  step: number;
  completed: boolean;
  skipped: boolean;
  score: number | null;
  total: number | null;
};

export type StageStatus = 'new' | 'learning' | 'lessons_done' | 'passed';

export type CourseNext =
  | { kind: 'lesson'; stage: StageLessons; lesson: Lesson; state: LessonState | null }
  | { kind: 'test'; stage: StageLessons };

export function lessonDone(state: LessonState | null | undefined): boolean {
  return Boolean(state?.completed || state?.skipped);
}

export function stageStatus(
  stage: StageLessons,
  progress: ReadonlyMap<string, LessonState>,
  passed: ReadonlySet<string>,
): StageStatus {
  if (passed.has(stage.stage_id)) return 'passed';
  const states = stage.lessons.map((l) => progress.get(l.id));
  if (states.every(lessonDone)) return 'lessons_done';
  return states.some(Boolean) ? 'learning' : 'new';
}

/**
 * Chặng hiện tại: chặng đầu tiên chưa qua kiểm tra. Việc kế tiếp: bài đầu tiên chưa xong của chặng đó,
 * hoặc kiểm tra chặng nếu đã xong hết bài. Null khi mọi chặng có bài đều đã qua.
 */
export function coursePosition(
  stages: readonly StageLessons[],
  progress: ReadonlyMap<string, LessonState>,
  passed: ReadonlySet<string>,
): CourseNext | null {
  const stage = stages.find((s) => !passed.has(s.stage_id));
  if (!stage) return null;
  const lesson = stage.lessons.find((l) => !lessonDone(progress.get(l.id)));
  if (!lesson) return { kind: 'test', stage };
  return { kind: 'lesson', stage, lesson, state: progress.get(lesson.id) ?? null };
}

/** Bài trước chưa xong (để hỏi xác nhận khi mở bài không theo thứ tự). Null nếu đúng thứ tự. */
export function unfinishedBefore(
  stages: readonly StageLessons[],
  lessonId: string,
  progress: ReadonlyMap<string, LessonState>,
  passed: ReadonlySet<string>,
): Lesson | null {
  for (const stage of stages) {
    for (const lesson of stage.lessons) {
      if (lesson.id === lessonId) return null;
      if (!passed.has(stage.stage_id) && !lessonDone(progress.get(lesson.id))) return lesson;
    }
  }
  return null;
}

/** "Bước x/6" để hiện trên danh sách bài. */
export function stepLabel(state: LessonState | null | undefined): string | null {
  if (!state || lessonDone(state)) return null;
  return `bước ${Math.min(state.step, SUMMARY_STEP) + 1}/${SUMMARY_STEP + 1}`;
}

/** Đường dẫn của việc kế tiếp. */
export function courseHref(next: CourseNext): string {
  return next.kind === 'lesson' ? `/learn/${next.lesson.id}` : `/learn/test/${next.stage.stage_id}`;
}
