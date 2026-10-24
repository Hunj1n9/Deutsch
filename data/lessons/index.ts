// Tự sinh bởi scripts/gen-lessons-index.mjs. Không sửa tay.
import type { StageLessons } from '@/lib/course/types';
import a1_01 from './a1-01';
import a1_02 from './a1-02';
import a1_03 from './a1-03';
import a1_04 from './a1-04';
import a1_05 from './a1-05';
import a1_06 from './a1-06';
import a1_07 from './a1-07';
import a1_08 from './a1-08';
import a1_09 from './a1-09';
import a1_10 from './a1-10';
import a1_11 from './a1-11';
import a1_12 from './a1-12';

/** Bài học theo chặng (F11), theo thứ tự lộ trình. Chặng chưa có bài thì không có ở đây. */
export const STAGE_LESSONS: readonly StageLessons[] = [a1_01, a1_02, a1_03, a1_04, a1_05, a1_06, a1_07, a1_08, a1_09, a1_10, a1_11, a1_12];

export const LESSONS_BY_STAGE: ReadonlyMap<string, StageLessons> = new Map(STAGE_LESSONS.map((s) => [s.stage_id, s]));
