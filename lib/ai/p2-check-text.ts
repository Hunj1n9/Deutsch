import { z } from 'zod';
import { ERROR_CATEGORIES, normalizeRuleKey, RULE_KEY_MAX } from '@/lib/errors';
import type { Level } from '@/lib/items/types';
import { commonRules } from './rules';
import { runStructured, type AiResult, type CreateMessage, type ToolDefinition } from './structured';

/** P2 — Kiểm tra câu (SPEC mục 6, F5). */
export type P2Mode = 'check' | 'recheck';

export type P2Input = {
  text: string;
  prompt?: string;
  level: Level;
  /** Tối đa 200 khóa lỗi đã có, kèm tiêu đề, để AI dùng lại khóa cũ (SPEC F4). */
  existingRules: { rule_key: string; title_vi: string }[];
  mode: P2Mode;
  /** Chế độ recheck: các lỗi của lần kiểm trước. */
  previous?: { wrong: string; correct: string; rule_key: string }[];
};

const errorJson = {
  type: 'object',
  additionalProperties: false,
  required: ['wrong', 'correct', 'start', 'end', 'category', 'rule_key', 'title_vi', 'hint_vi', 'explanation_vi'],
  properties: {
    wrong: { type: 'string', description: 'Đoạn sai, chép nguyên văn từ văn bản.' },
    correct: { type: 'string', description: 'Đoạn thay thế đúng.' },
    start: { type: 'integer', description: 'Vị trí ký tự bắt đầu của wrong trong văn bản (tính từ 0).' },
    end: { type: 'integer', description: 'Vị trí ký tự kết thúc (không bao gồm).' },
    category: { type: 'string', enum: [...ERROR_CATEGORIES] },
    rule_key: { type: 'string', description: 'Khóa quy tắc: chữ thường, gạch nối, tối đa 40 ký tự.' },
    title_vi: { type: 'string' },
    hint_vi: { type: 'string', description: 'Gợi ý để tự sửa, không được lộ đáp án.' },
    explanation_vi: { type: 'string' },
  },
} as const;

export const P2_TOOL: ToolDefinition = {
  name: 'report_check',
  description: 'Trả kết quả kiểm tra văn bản tiếng Đức.',
  input_schema: {
    type: 'object',
    additionalProperties: false,
    required: ['corrected_text', 'errors', 'overall_vi', 'upgrade_suggestion_de', 'fixed', 'still_wrong'],
    properties: {
      corrected_text: { type: 'string' },
      errors: { type: 'array', items: errorJson },
      overall_vi: { type: 'string' },
      upgrade_suggestion_de: { anyOf: [{ type: 'string' }, { type: 'null' }] },
      fixed: { type: 'array', items: { type: 'string' }, description: 'Chỉ dùng ở chế độ recheck.' },
      still_wrong: { type: 'array', items: { type: 'string' }, description: 'Chỉ dùng ở chế độ recheck.' },
    },
  },
};

function containsWord(haystack: string, needle: string): boolean {
  const n = needle.trim();
  if (!n) return false;
  const escaped = n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
  return new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, 'iu').test(haystack);
}

const errorSchema = z
  .object({
    wrong: z.string().min(1),
    correct: z.string(),
    start: z.number().int().min(0),
    end: z.number().int().min(0),
    category: z.enum(ERROR_CATEGORIES),
    rule_key: z
      .string()
      .transform(normalizeRuleKey)
      .pipe(z.string().min(3).max(RULE_KEY_MAX)),
    title_vi: z.string().trim().min(1),
    hint_vi: z.string().trim().min(1),
    explanation_vi: z.string().trim().min(1),
  })
  .superRefine((e, ctx) => {
    if (containsWord(e.hint_vi, e.correct)) {
      ctx.addIssue({ code: 'custom', path: ['hint_vi'], message: `hint_vi không được chứa đáp án "${e.correct}"` });
    }
  });

export const p2Schema = z.object({
  corrected_text: z.string(),
  errors: z.array(errorSchema).max(30),
  overall_vi: z.string().trim().min(1),
  upgrade_suggestion_de: z.string().trim().min(1).nullable(),
  fixed: z.array(z.string().transform(normalizeRuleKey)),
  still_wrong: z.array(z.string().transform(normalizeRuleKey)),
});

export type P2Result = z.infer<typeof p2Schema>;
export type P2Error = P2Result['errors'][number];

export function p2System(level: Level): string {
  return [
    commonRules(level),
    '',
    'Nhiệm vụ: kiểm tra văn bản tiếng Đức của người học. Luôn trả kết quả bằng cách gọi công cụ report_check đúng một lần.',
    '- Chỉ đánh dấu lỗi thật (ngữ pháp, chính tả, chọn từ sai nghĩa). Không sửa văn phong khi câu đã đúng và tự nhiên.',
    '- Mỗi lỗi một phần tử. wrong chép nguyên văn đoạn sai ngắn nhất; start, end là vị trí ký tự của wrong trong văn bản được kiểm (đếm từ 0, end không bao gồm).',
    '- rule_key: tên quy tắc tiếng Anh/Đức, chữ thường, gạch nối, tối đa 40 ký tự, vd dativ-nach-mit, verb-position-nebensatz, adj-ending-dativ-definite, gender-tisch. Nếu lỗi cùng quy tắc với một khóa trong danh sách khóa đã có thì PHẢI dùng lại đúng khóa đó.',
    '- title_vi: tên quy tắc ngắn bằng tiếng Việt (vd "mit luôn đi với Dativ").',
    '- hint_vi: câu hỏi gợi ý để người học tự sửa; tuyệt đối không chứa đoạn đúng (correct).',
    '- explanation_vi: giải thích ngắn vì sao sai và cách đúng.',
    '- corrected_text: toàn bộ văn bản đã sửa mọi lỗi, giữ nguyên phần đúng.',
    '- overall_vi: nhận xét chung 1–2 câu. Văn bản đúng hoàn toàn thì khen ngắn gọn.',
    '- upgrade_suggestion_de: một cách viết hay hơn hoặc nâng cấp trình độ (tùy chọn), null nếu không cần.',
    '- Chế độ check: fixed và still_wrong để mảng rỗng.',
    '- Chế độ recheck: văn bản là bản người học đã tự sửa. errors là các lỗi còn lại trong bản sửa (vị trí theo bản sửa). fixed: rule_key các lỗi cũ đã sửa đúng; still_wrong: rule_key các lỗi cũ vẫn sai.',
  ].join('\n');
}

export function p2User(input: P2Input): string {
  const rules = input.existingRules.slice(0, 200).map((r) => `${r.rule_key} — ${r.title_vi}`);
  const parts = [
    `Chế độ: ${input.mode}`,
    input.prompt ? `Đề bài: ${input.prompt}` : null,
    `Khóa lỗi đã có (${rules.length}):\n${rules.join('\n') || '(chưa có)'}`,
  ];
  if (input.mode === 'recheck' && input.previous) {
    parts.push(
      `Lỗi của lần kiểm trước:\n${input.previous.map((p) => `- ${p.rule_key}: "${p.wrong}" → "${p.correct}"`).join('\n')}`,
    );
  }
  parts.push(`Văn bản cần kiểm:\n<<<\n${input.text}\n>>>`);
  return parts.filter(Boolean).join('\n\n');
}

export async function checkText(create: CreateMessage, model: string, input: P2Input): Promise<AiResult<P2Result>> {
  return runStructured(create, {
    promptId: input.mode === 'recheck' ? 'p2-recheck' : 'p2-check',
    model,
    system: p2System(input.level),
    user: p2User(input),
    tool: P2_TOOL,
    schema: p2Schema,
    maxTokens: 4096,
  });
}
