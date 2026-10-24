import { isNoun, normalizeDraft } from './validate';
import { emptyDraft, isArticle, type Article, type ItemDraft } from './types';

/**
 * Nhập hàng loạt (SPEC F2). Mỗi dòng một mục, nhận 3 dạng:
 * - `der Tisch, -e = cái bàn`
 * - `Tisch` (chỉ từ, để AI điền)
 * - TSV có dòng tiêu đề: `german	article	plural	vietnamese	example_de	example_vi`
 */
export type BulkRow = {
  /** Số dòng trong văn bản dán vào, đếm từ 1. */
  line: number;
  draft: ItemDraft;
  /** Thiếu nghĩa, hoặc là danh từ mà thiếu mạo từ: cần AI điền. */
  needsAi: boolean;
};

export type BulkError = { line: number; message: string };

export type BulkParseResult = { rows: BulkRow[]; errors: BulkError[] };

export const MAX_BULK_ROWS = 200;

export const TSV_COLUMNS = ['german', 'article', 'plural', 'vietnamese', 'example_de', 'example_vi'] as const;
type TsvColumn = (typeof TSV_COLUMNS)[number];

export function parseBulk(text: string): BulkParseResult {
  const lines = text.replace(/\r\n?/g, '\n').split('\n');
  const firstIndex = lines.findIndex((l) => l.trim() !== '');
  if (firstIndex === -1) return { rows: [], errors: [] };

  const header = readTsvHeader(lines[firstIndex]);
  const rows: BulkRow[] = [];
  const errors: BulkError[] = [];

  lines.forEach((raw, i) => {
    if (raw.trim() === '' || (header && i === firstIndex)) return;
    const line = i + 1;
    // Có tiêu đề TSV vẫn nhận dòng dạng chữ (không có tab) xen giữa, để dán hỗn hợp được.
    const parsed = header && raw.includes('\t') ? parseTsvLine(raw, header) : parseTextLine(raw);
    if (typeof parsed === 'string') {
      errors.push({ line, message: `Dòng ${line}: ${parsed}` });
      return;
    }
    const draft = normalizeDraft(parsed);
    rows.push({ line, draft, needsAi: needsAi(draft) });
  });

  if (rows.length > MAX_BULK_ROWS) {
    return {
      rows: [],
      errors: [{ line: 0, message: `Mỗi lần nhập tối đa ${MAX_BULK_ROWS} dòng; bạn đang dán ${rows.length} dòng.` }],
    };
  }
  return { rows, errors };
}

export function needsAi(draft: ItemDraft): boolean {
  return !draft.vietnamese || (isNoun(draft) && !draft.article);
}

/** Một từ đơn là `word`, nhiều từ là `phrase`. */
export function guessType(german: string): 'word' | 'phrase' {
  return /\s/.test(german.trim()) ? 'phrase' : 'word';
}

function readTsvHeader(line: string): Map<TsvColumn, number> | null {
  if (!line.includes('\t')) return null;
  const names = line.split('\t').map((c) => c.trim().toLowerCase());
  if (!names.includes('german')) return null;
  const header = new Map<TsvColumn, number>();
  names.forEach((name, index) => {
    if ((TSV_COLUMNS as readonly string[]).includes(name)) header.set(name as TsvColumn, index);
  });
  return header;
}

function parseTsvLine(raw: string, header: Map<TsvColumn, number>): ItemDraft | string {
  const cells = raw.split('\t');
  const cell = (name: TsvColumn) => (header.has(name) ? (cells[header.get(name)!] ?? '').trim() : '');

  const given = readArticle(cell('article'));
  if (given === undefined) return `mạo từ "${cell('article')}" không hợp lệ (chỉ der, die, das).`;
  const lead = splitLeadingArticle(cell('german'));
  const german = lead.rest;
  if (!german) return 'thiếu cột german.';
  const article = given ?? lead.article;

  return {
    ...emptyDraft(guessType(german)),
    german,
    article,
    plural: cleanPlural(cell('plural')),
    vietnamese: cell('vietnamese'),
    example_de: cell('example_de'),
    example_vi: cell('example_vi'),
  };
}

function parseTextLine(raw: string): ItemDraft | string {
  const eq = raw.indexOf('=');
  const left = (eq === -1 ? raw : raw.slice(0, eq)).trim();
  const vietnamese = eq === -1 ? '' : raw.slice(eq + 1).trim();

  const { article, rest } = splitLeadingArticle(left);

  let german = rest;
  let plural = '';
  const comma = rest.indexOf(',');
  if (comma !== -1) {
    const tail = rest.slice(comma + 1).trim();
    // Phần sau dấu phẩy là số nhiều khi có mạo từ, hoặc khi nó trông như đuôi số nhiều (-e, ¨-er, –).
    if (article || /^[-–¨"]/.test(tail) || tail === '') {
      german = rest.slice(0, comma).trim();
      plural = cleanPlural(tail);
    }
  }

  if (!german) return 'thiếu từ tiếng Đức.';
  return { ...emptyDraft(guessType(german)), german, article, plural, vietnamese };
}

/**
 * `der Tisch, -e` → mạo từ `der` + `Tisch, -e`. Chỉ tách khi sau mạo từ là một danh từ viết hoa,
 * để cụm như `das heißt` giữ nguyên.
 */
function splitLeadingArticle(text: string): { article: Article | null; rest: string } {
  const lead = /^([Dd]er|[Dd]ie|[Dd]as)\s+([A-ZÄÖÜ][^\s,]*(?:\s*,.*)?)$/u.exec(text.trim());
  return lead ? { article: lead[1].toLowerCase() as Article, rest: lead[2].trim() } : { article: null, rest: text.trim() };
}

/** '' → null, mạo từ hợp lệ → mạo từ, còn lại → undefined (lỗi). */
function readArticle(value: string): Article | null | undefined {
  const v = value.trim().toLowerCase();
  if (!v) return null;
  return isArticle(v) ? v : undefined;
}

/** `die Tische` → `Tische`; `–` → `-`. */
function cleanPlural(value: string): string {
  return value
    .trim()
    .replace(/^die\s+/i, '')
    .replace(/^–/, '-');
}
