// Sinh icon PWA từ một SVG gốc. Chạy lại khi đổi icon: node scripts/make-icons.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const scribble =
  '<path d="M60 400C190 250 300 160 480 70M100 470C260 330 380 240 520 160M230 500C360 400 450 340 520 300" ' +
  'fill="none" stroke="#fff" stroke-opacity=".65" stroke-width="44" stroke-linecap="round"/>';
const mark =
  '<circle cx="256" cy="256" r="118" fill="#0e0e10"/>' +
  '<path d="M206 306L306 206M216 206h90v90" fill="none" stroke="#fff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"/>';

const svg = (radius) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">` +
  `<defs><clipPath id="c"><rect width="512" height="512" rx="${radius}"/></clipPath></defs>` +
  `<g clip-path="url(#c)"><rect width="512" height="512" fill="#fce8a6"/>${scribble}</g>${mark}</svg>`;

mkdirSync('public/icons', { recursive: true });

const rounded = Buffer.from(svg(112));
const square = Buffer.from(svg(0)); // maskable và apple-icon: nền tràn, hệ điều hành tự bo góc

await sharp(rounded).resize(192).png().toFile('public/icons/icon-192.png');
await sharp(rounded).resize(512).png().toFile('public/icons/icon-512.png');
await sharp(square).resize(512).png().toFile('public/icons/maskable-512.png');
await sharp(square).resize(180).png().toFile('app/apple-icon.png');
writeFileSync('app/icon.svg', svg(112));

console.log('Đã tạo icon trong public/icons và app/');
