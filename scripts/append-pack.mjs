// Nối thêm dòng vào cuối một gói: node scripts/append-pack.mjs <mã chặng> <file chứa các dòng>
// Bỏ qua dòng trống, dòng giữ chỗ và dòng có tiếng Đức đã có trong gói.
import { readFileSync, writeFileSync } from 'node:fs';

const [id, source] = process.argv.slice(2);
const packPath = new URL(`../data/packs/${id}.ts`, import.meta.url);
let pack = readFileSync(packPath, 'utf8');
const existing = new Set(
  pack
    .split('\n')
    .filter((l) => l.split('|').length === 8)
    .map((l) => l.split('|')[1].trim().toLowerCase()),
);
const lines = readFileSync(source, 'utf8')
  .split('\n')
  .map((l) => l.trim())
  .filter((l) => l && !/PLACE|placeholder/i.test(l) && l.split('|').length === 8)
  .filter((l) => !existing.has(l.split('|')[1].trim().toLowerCase()));
pack = pack.replace(/\n`;\nexport default pack;/, `\n${lines.join('\n')}\n\`;\nexport default pack;`);
writeFileSync(packPath, pack);
console.log(`${id}: +${lines.length}`);
