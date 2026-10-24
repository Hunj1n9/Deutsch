// Tạo lại data/lessons/index.ts từ các file bài học hiện có: node scripts/gen-lessons-index.mjs
import { readdirSync, writeFileSync } from 'node:fs';

const dir = new URL('../data/lessons/', import.meta.url);
const files = readdirSync(dir)
  .filter((f) => /^[ab][12]-\d{2}\.ts$/.test(f))
  .sort();

const ident = (f) => f.replace('.ts', '').replace('-', '_');
const lines = [
  '// Tự sinh bởi scripts/gen-lessons-index.mjs. Không sửa tay.',
  "import type { StageLessons } from '@/lib/course/types';",
  ...files.map((f) => `import ${ident(f)} from './${f.replace('.ts', '')}';`),
  '',
  '/** Bài học theo chặng (F11), theo thứ tự lộ trình. Chặng chưa có bài thì không có ở đây. */',
  `export const STAGE_LESSONS: readonly StageLessons[] = [${files.map(ident).join(', ')}];`,
  '',
  'export const LESSONS_BY_STAGE: ReadonlyMap<string, StageLessons> = new Map(STAGE_LESSONS.map((s) => [s.stage_id, s]));',
  '',
];
writeFileSync(new URL('index.ts', dir), lines.join('\n'));
console.log(`${files.length} chặng có bài`);
