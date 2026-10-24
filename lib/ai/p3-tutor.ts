import type { Level } from '@/lib/items/types';
import { commonRules } from './rules';

/** P3 — Gia sư (SPEC mục 6, F6): trả lời dạng stream, không ép JSON. */
export type TutorContext = {
  level: Level;
  source: string | null;
  openErrors: string[];
  card: { kind: string; german: string; vietnamese: string; example_de: string | null } | null;
  /** Mở từ bài học (F11): tên bài, điểm ngữ pháp, bài tập đang hỏi. */
  lesson?: { title: string; grammar: string; exercise: string | null } | null;
};

export const EXAMPLE_DE = 'DE:';
export const EXAMPLE_VI = 'VI:';

export function tutorSystem(ctx: TutorContext): string {
  const lines = [
    commonRules(ctx.level),
    '',
    'Bạn là gia sư tiếng Đức của người học này. Trả lời bằng tiếng Việt, mặc định dưới 200 từ; chỉ dài hơn khi người học xin giải thích chi tiết.',
    'Nếu người học hỏi đáp án của một bài tập, trước hết gợi ý một bước để họ tự nghĩ; chỉ đưa đáp án khi họ xin lần nữa.',
    'Khi người học gửi câu tiếng Đức nhờ sửa: chỉ ra từng lỗi, nói quy tắc, rồi đưa câu đúng.',
    `Mỗi câu ví dụ tiếng Đức đặt trên một dòng riêng bắt đầu bằng "${EXAMPLE_DE} ", và dòng ngay sau là bản dịch bắt đầu bằng "${EXAMPLE_VI} ". Không dùng định dạng này cho thứ khác.`,
    'Không dùng bảng hay tiêu đề markdown; có thể dùng gạch đầu dòng và **in đậm** ngắn.',
    '',
    'Ngữ cảnh người học:',
    `- Trình độ: ${ctx.level}`,
    `- Đang học: ${ctx.source ?? 'chưa ghi nguồn'}`,
    `- Lỗi đang mở nhiều nhất: ${ctx.openErrors.length ? ctx.openErrors.join('; ') : 'chưa có'}`,
  ];
  if (ctx.card) {
    lines.push(
      `- Đang hỏi về thẻ ôn (${ctx.card.kind}): ${ctx.card.german} = ${ctx.card.vietnamese}` +
        (ctx.card.example_de ? `; ví dụ: ${ctx.card.example_de}` : ''),
    );
  }
  if (ctx.lesson) {
    lines.push(
      `- Đang học bài: ${ctx.lesson.title} (ngữ pháp: ${ctx.lesson.grammar})` +
        (ctx.lesson.exercise ? `; bài tập đang hỏi: ${ctx.lesson.exercise}` : ''),
    );
  }
  return lines.join('\n');
}

export type TutorSegment = { type: 'text'; text: string } | { type: 'example'; de: string; vi: string | null };

/** Tách câu trả lời thành đoạn chữ và câu ví dụ (dòng `DE:` + `VI:`) để gắn nút "Lưu thành thẻ". */
export function parseTutorReply(reply: string): TutorSegment[] {
  const out: TutorSegment[] = [];
  const lines = reply.split('\n');
  let buffer: string[] = [];
  const flush = () => {
    const text = buffer.join('\n').trim();
    if (text) out.push({ type: 'text', text });
    buffer = [];
  };
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim().replace(/^[-*•]\s*/, '');
    if (line.startsWith(EXAMPLE_DE)) {
      flush();
      const de = line.slice(EXAMPLE_DE.length).trim().replace(/^\*\*(.*)\*\*$/, '$1');
      const next = lines[i + 1]?.trim().replace(/^[-*•]\s*/, '') ?? '';
      const vi = next.startsWith(EXAMPLE_VI) ? next.slice(EXAMPLE_VI.length).trim() : null;
      if (vi !== null) i += 1;
      if (de) out.push({ type: 'example', de, vi });
    } else {
      buffer.push(lines[i]);
    }
  }
  flush();
  return out;
}

/** Tiêu đề luồng: câu hỏi đầu tiên, cắt gọn. */
export function threadTitle(message: string): string {
  const one = message.replace(/\s+/g, ' ').trim();
  return one.length > 60 ? `${one.slice(0, 57)}…` : one;
}
