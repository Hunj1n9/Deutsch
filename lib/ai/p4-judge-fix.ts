import { z } from 'zod';
import type { Level } from '@/lib/items/types';
import { commonRules } from './rules';
import { runStructured, type AiResult, type CreateMessage, type ToolDefinition } from './structured';

/** P4 — Phán câu sửa lỗi ở thẻ error_fix (SPEC mục 6). */
export type P4Input = {
  wrong: string;
  accepted: string[];
  answer: string;
  ruleTitle: string;
  level: Level;
};

export const P4_TOOL: ToolDefinition = {
  name: 'judge_fix',
  description: 'Phán câu người học sửa có đúng không.',
  input_schema: {
    type: 'object',
    additionalProperties: false,
    required: ['correct', 'fixes_target_error', 'other_errors', 'note_vi'],
    properties: {
      correct: { type: 'boolean', description: 'Câu trả lời đúng ngữ pháp và tự nhiên, giữ nghĩa câu gốc.' },
      fixes_target_error: { type: 'boolean', description: 'Đã sửa đúng lỗi của quy tắc được nêu.' },
      other_errors: { type: 'array', items: { type: 'string' }, description: 'Lỗi khác còn trong câu, mô tả ngắn tiếng Việt.' },
      note_vi: { type: 'string' },
    },
  },
};

export const p4Schema = z.object({
  correct: z.boolean(),
  fixes_target_error: z.boolean(),
  other_errors: z.array(z.string()),
  note_vi: z.string().trim().min(1),
});

export type P4Result = z.infer<typeof p4Schema>;

/** Chỉ tính đúng khi cả `correct` và `fixes_target_error` đều true (SPEC P4). */
export function isAcceptedFix(r: P4Result): boolean {
  return r.correct && r.fixes_target_error;
}

export async function judgeFix(create: CreateMessage, model: string, input: P4Input): Promise<AiResult<P4Result>> {
  return runStructured(create, {
    promptId: 'p4-judge-fix',
    model,
    system: [
      commonRules(input.level),
      '',
      'Nhiệm vụ: người học sửa một câu sai. Phán câu họ viết có đúng không. Luôn trả kết quả bằng cách gọi công cụ judge_fix đúng một lần.',
      '- correct = true khi câu đúng ngữ pháp, tự nhiên và giữ nghĩa câu gốc (cách viết khác đáp án vẫn được).',
      '- fixes_target_error = true khi đã sửa đúng lỗi thuộc quy tắc được nêu.',
      '- note_vi: một câu nhận xét ngắn bằng tiếng Việt.',
    ].join('\n'),
    user: [
      `Quy tắc: ${input.ruleTitle}`,
      `Câu sai: ${input.wrong}`,
      `Đáp án đã biết:\n${input.accepted.map((a) => `- ${a}`).join('\n')}`,
      `Câu người học viết: ${input.answer}`,
    ].join('\n'),
    tool: P4_TOOL,
    schema: p4Schema,
    maxTokens: 800,
  });
}
