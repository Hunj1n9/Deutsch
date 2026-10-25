import type { Exercise } from './types';

/**
 * Báo nội dung sai (SPEC F13): mã chỗ bị báo và văn bản để chép. Hàm thuần.
 */
export const REPORT_KINDS = ['word', 'grammar', 'exercise', 'dialogue', 'test'] as const;
export type ReportKind = (typeof REPORT_KINDS)[number];

export const REPORT_NOTE_MAX = 500;
export const REPORT_EXCERPT_MAX = 1000;
export const REPORT_TARGET_MAX = 300;

/** `word:a1-01:Tisch`, `grammar:a1-01-1:0`, `exercise:a1-01-1.g0.2`, `dialogue:a1-01-1:3`, `test:a1-01.r.1`. */
export function reportTarget(kind: ReportKind, ...parts: (string | number)[]): string {
  return [kind, ...parts.map(String)].join(':');
}

export function parseReportTarget(target: string): { kind: ReportKind; parts: string[] } | null {
  const [kind, ...parts] = target.split(':');
  if (!(REPORT_KINDS as readonly string[]).includes(kind) || parts.length === 0 || parts.some((p) => !p)) return null;
  if (target.length > REPORT_TARGET_MAX) return null;
  return { kind: kind as ReportKind, parts };
}

const KIND_VI: Record<ReportKind, string> = {
  word: 'Từ',
  grammar: 'Giải thích ngữ pháp',
  exercise: 'Bài tập',
  dialogue: 'Hội thoại',
  test: 'Câu kiểm tra',
};

/** Nhãn ngắn cho người đọc: "Bài tập · A1-01-1.G0.2". */
export function reportLabel(target: string): string {
  const t = parseReportTarget(target);
  if (!t) return target;
  const [first, ...rest] = t.parts;
  if (t.kind === 'grammar') return `${KIND_VI.grammar} · bài ${first.toUpperCase()}, đoạn ${Number(rest[0]) + 1}`;
  if (t.kind === 'dialogue') return `${KIND_VI.dialogue} · bài ${first.toUpperCase()}, dòng ${Number(rest[0]) + 1}`;
  if (t.kind === 'word') return `${KIND_VI.word} · chặng ${first.toUpperCase()}`;
  return `${KIND_VI[t.kind]} · ${t.parts.join(':')}`;
}

/** Gộp khoảng trắng và cắt độ dài để lưu. */
export function cleanExcerpt(text: string): string {
  return text.replace(/\s+/g, ' ').trim().slice(0, REPORT_EXCERPT_MAX);
}

export type ContentReportRow = { target: string; excerpt: string; note: string | null; created_at: string };

/** Văn bản thuần để dán cho người sửa dữ liệu: mỗi chỗ một dòng `mã · nội dung · ghi chú`. */
export function reportsText(rows: readonly ContentReportRow[]): string {
  return rows
    .map((r) => [r.target, r.excerpt, r.note?.trim() ? `Ghi chú: ${r.note.trim().replace(/\s+/g, ' ')}` : null].filter(Boolean).join(' · '))
    .join('\n');
}

/** Nội dung của một bài tập để lưu kèm báo cáo: đề, đáp án, dịch. */
export function exerciseExcerpt(e: Exercise): string {
  const parts: (string | undefined)[] = (() => {
    switch (e.kind) {
      case 'fill':
        return [e.text, `Đáp án: ${e.answers.join(' / ')}`, e.vi];
      case 'order':
        return [e.answers.join(' / '), e.vi];
      case 'choose':
      case 'question':
        return [e.text, `Lựa chọn: ${e.options.join(' / ')}`, `Đáp án: ${e.answer}`, e.kind === 'choose' ? e.vi : undefined];
      case 'transform':
        return [e.instruction_vi, e.text, `Đáp án: ${e.answers.join(' / ')}`];
      case 'translate':
        return [e.vi, `Đáp án: ${e.answers.join(' / ')}`];
      case 'listen':
        return [e.answers.join(' / ')];
    }
  })();
  return cleanExcerpt(parts.filter(Boolean).join(' · '));
}
