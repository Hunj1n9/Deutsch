import type { StageLessons } from '@/lib/course/types';
import a1_01 from './a1-01';
import a1_02 from './a1-02';

/** Bài học theo chặng (F11), theo thứ tự lộ trình. Chặng chưa có bài thì không có ở đây. */
export const STAGE_LESSONS: readonly StageLessons[] = [a1_01, a1_02];

export const LESSONS_BY_STAGE: ReadonlyMap<string, StageLessons> = new Map(STAGE_LESSONS.map((s) => [s.stage_id, s]));
