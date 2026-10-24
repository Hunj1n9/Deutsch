// Tạo lại data/packs/index.ts từ các file gói hiện có: node scripts/gen-packs-index.mjs
import { readdirSync, writeFileSync } from 'node:fs';

const dir = new URL('../data/packs/', import.meta.url);
const files = readdirSync(dir)
  .filter((f) => /^[ab][12]-\d{2}\.ts$/.test(f))
  .sort();

const ident = (f) => `p_${f.replace('.ts', '').replace('-', '_')}`;
const lines = [
  '// Tự sinh bởi scripts/gen-packs-index.mjs. Không sửa tay.',
  ...files.map((f) => `import ${ident(f)} from './${f.replace('.ts', '')}';`),
  '',
  '/** Mã chặng → nội dung gói (F10). */',
  'export const PACKS: Record<string, string> = {',
  ...files.map((f) => `  '${f.replace('.ts', '')}': ${ident(f)},`),
  '};',
  '',
];
writeFileSync(new URL('index.ts', dir), lines.join('\n'));
console.log(`${files.length} gói`);
