import { z } from 'zod';
import { clozeMarkerError, hasClozeMarker } from '@/lib/items/cloze';
import { ADDABLE_TYPES, ARTICLES, LEVELS, POS, type AddableType, type Level } from '@/lib/items/types';
import { commonRules } from './rules';
import { runStructured, type AiResult, type CreateMessage, type ToolDefinition } from './structured';

/** P1 — Điền mục từ (SPEC mục 6). Một lần gọi điền tối đa 20 mục (SPEC F2). */
export const P1_BATCH_LIMIT = 20;

export type P1Input = {
  german: string;
  /** Loại người học đã chọn; bỏ trống để AI tự đoán. */
  type?: AddableType;
  /** Nghĩa người học đã ghi (nếu có), giúp AI chọn đúng nghĩa của từ nhiều nghĩa. */
  vietnamese?: string;
};

const nullable = (schema: Record<string, unknown>) => ({ anyOf: [schema, { type: 'null' }] });

const itemJsonSchema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'index',
    'german',
    'type',
    'pos',
    'article',
    'plural',
    'vietnamese',
    'example_de',
    'example_vi',
    'grammar_note_vi',
    'level_guess',
  ],
  properties: {
    index: { type: 'integer', description: 'Số thứ tự của mục trong đầu vào.' },
    german: { type: 'string', description: 'Dạng từ điển, danh từ không kèm mạo từ.' },
    type: { type: 'string', enum: [...ADDABLE_TYPES] },
    pos: nullable({ type: 'string', enum: [...POS] }),
    article: nullable({ type: 'string', enum: [...ARTICLES] }),
    plural: nullable({ type: 'string' }),
    vietnamese: { type: 'string' },
    example_de: { type: 'string', description: 'Câu ví dụ, phần cần học đặt trong {ngoặc nhọn} đúng một lần.' },
    example_vi: { type: 'string' },
    grammar_note_vi: nullable({ type: 'string' }),
    level_guess: { type: 'string', enum: [...LEVELS] },
  },
} as const;

export const P1_TOOL: ToolDefinition = {
  name: 'fill_items',
  description: 'Trả thông tin đã điền cho từng mục từ tiếng Đức, mỗi mục đầu vào đúng một phần tử.',
  input_schema: {
    type: 'object',
    additionalProperties: false,
    required: ['items'],
    properties: { items: { type: 'array', items: itemJsonSchema } },
  },
};

const filledItemSchema = z
  .object({
    index: z.number().int(),
    german: z.string().trim().min(1),
    type: z.enum(ADDABLE_TYPES),
    pos: z.enum(POS).nullable(),
    article: z.enum(ARTICLES).nullable(),
    plural: z.string().trim().nullable(),
    vietnamese: z.string().trim().min(1),
    example_de: z.string().trim().min(1),
    example_vi: z.string().trim().min(1),
    grammar_note_vi: z.string().trim().nullable(),
    level_guess: z.enum(LEVELS),
  })
  .superRefine((item, ctx) => {
    if (item.pos === 'noun' && !item.article) {
      ctx.addIssue({ code: 'custom', path: ['article'], message: 'article bắt buộc khi pos = noun' });
    }
    if (item.article && item.pos !== 'noun') {
      ctx.addIssue({ code: 'custom', path: ['article'], message: 'chỉ danh từ (pos = noun) mới có article' });
    }
    const markerError = clozeMarkerError(item.example_de);
    if (markerError || !hasClozeMarker(item.example_de)) {
      ctx.addIssue({
        code: 'custom',
        path: ['example_de'],
        message: 'example_de phải đánh dấu đúng một chỗ {…} quanh phần cần học',
      });
    }
    if (/[{}]/.test(item.example_vi)) {
      ctx.addIssue({ code: 'custom', path: ['example_vi'], message: 'example_vi không có ngoặc nhọn' });
    }
  });

export type FilledItem = z.infer<typeof filledItemSchema>;

/** Kết quả phải có đúng một phần tử cho mỗi index 0..count-1; trả về theo thứ tự đầu vào. */
function batchSchema(count: number) {
  return z
    .object({ items: z.array(filledItemSchema) })
    .superRefine(({ items }, ctx) => {
      const seen = new Set(items.map((i) => i.index));
      const missing = Array.from({ length: count }, (_, i) => i).filter((i) => !seen.has(i));
      if (missing.length > 0 || items.length !== count) {
        ctx.addIssue({
          code: 'custom',
          path: ['items'],
          message: `cần đúng ${count} phần tử, index 0..${count - 1}; thiếu: ${missing.join(', ') || 'không'}`,
        });
      }
    })
    .transform(({ items }) => [...items].sort((a, b) => a.index - b.index));
}

export function p1System(level: Level): string {
  return [
    commonRules(level),
    '',
    'Nhiệm vụ: điền thông tin cho từng mục tiếng Đức người học đưa vào, để làm thẻ ôn.',
    'Luôn trả kết quả bằng cách gọi công cụ fill_items đúng một lần, mỗi mục đầu vào một phần tử, giữ nguyên index.',
    '- german: dạng từ điển (danh từ số ít không kèm mạo từ, động từ nguyên mẫu). Chỉ sửa khi người học gõ sai chính tả rõ ràng.',
    '- type: word cho một từ (kể cả động từ phản thân như "sich freuen"); phrase cho cụm từ hoặc câu cố định; grammar nếu đầu vào ghi [ngữ pháp].',
    '- pos: loại từ khi type = word; null với phrase và grammar.',
    '- article: bắt buộc der, die hoặc das khi pos = noun; null với mọi loại khác.',
    '- plural: chỉ cho danh từ, viết dạng đuôi như "-e", "¨-er", "-n", "-" (không đổi); null nếu không có số nhiều hoặc không phải danh từ.',
    '- vietnamese: nghĩa tiếng Việt ngắn gọn, phổ biến nhất; nếu người học đã ghi nghĩa thì theo nghĩa đó.',
    `- example_de: một câu tự nhiên, từ vựng và ngữ pháp không vượt trình độ ${level}. Đặt phần cần học trong ngoặc nhọn đúng một lần, ví dụ "Der {Tisch} steht in der Küche." hoặc "Er {fährt} nach Berlin." Với ngữ pháp, ngoặc nhọn bao phần thể hiện điểm ngữ pháp, ví dụ "Ich fahre mit {dem} Bus."`,
    '- example_vi: bản dịch tiếng Việt tự nhiên của câu ví dụ, không có ngoặc nhọn.',
    '- grammar_note_vi: ghi chú ngắn bằng tiếng Việt. Danh từ: giống và số nhiều đầy đủ (vd "Giống đực, số nhiều: die Tische."). Động từ: dạng Präsens ngôi 3 số ít và Perfekt (vd "er fährt, ist gefahren"), nói rõ nếu tách được hoặc bất quy tắc. Null nếu không có gì đáng ghi.',
    '- level_guess: trình độ CEFR thường gặp của mục.',
  ].join('\n');
}

const TYPE_HINT: Record<AddableType, string> = { word: '[từ]', phrase: '[cụm từ]', grammar: '[ngữ pháp]' };

export function p1User(items: readonly P1Input[]): string {
  const lines = items.map((item, index) => {
    const hint = item.type ? `${TYPE_HINT[item.type]} ` : '';
    const meaning = item.vietnamese ? ` (nghĩa người học ghi: ${item.vietnamese})` : '';
    return `${index}. ${hint}${item.german}${meaning}`;
  });
  return `Điền ${items.length} mục sau:\n${lines.join('\n')}`;
}

/** Điền một lô tối đa 20 mục bằng một lời gọi AI. */
export async function fillItems(
  create: CreateMessage,
  model: string,
  level: Level,
  items: readonly P1Input[],
): Promise<AiResult<FilledItem[]>> {
  if (items.length === 0) return { ok: true, data: [] };
  if (items.length > P1_BATCH_LIMIT) throw new Error(`fillItems nhận tối đa ${P1_BATCH_LIMIT} mục`);

  return runStructured(create, {
    promptId: 'p1-fill-item',
    model,
    system: p1System(level),
    user: p1User(items),
    tool: P1_TOOL,
    schema: batchSchema(items.length),
    maxTokens: 1024 + 400 * items.length,
  });
}

export type BatchFillResult = {
  /** Cùng thứ tự với đầu vào; null nếu lô chứa mục đó bị lỗi. */
  items: (FilledItem | null)[];
  /** Thông báo lỗi tiếng Việt của lô hỏng đầu tiên, nếu có. */
  error: string | null;
};

/** Chia thành các lô 20 mục, chạy song song tối đa 3 lô một lúc. Lô hỏng không làm mất kết quả lô khác. */
export async function fillItemsInBatches(
  create: CreateMessage,
  model: string,
  level: Level,
  items: readonly P1Input[],
  concurrency = 3,
): Promise<BatchFillResult> {
  const chunks: P1Input[][] = [];
  for (let i = 0; i < items.length; i += P1_BATCH_LIMIT) chunks.push(items.slice(i, i + P1_BATCH_LIMIT));

  const results: AiResult<FilledItem[]>[] = [];
  for (let i = 0; i < chunks.length; i += concurrency) {
    const group = chunks.slice(i, i + concurrency);
    results.push(...(await Promise.all(group.map((chunk) => fillItems(create, model, level, chunk)))));
  }

  const filled = results.flatMap((result, i) => (result.ok ? result.data : chunks[i].map(() => null)));
  const firstError = results.find((r) => !r.ok);
  return { items: filled, error: firstError && !firstError.ok ? firstError.message : null };
}
