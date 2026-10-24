import { z } from 'zod';
import type { Level } from '@/lib/items/types';
import { commonRules } from './rules';
import { runStructured, type AiResult, type CreateMessage, type ToolDefinition } from './structured';

/** P6 — Phán đáp án bài tập tự do của bài học (`transform`, `translate`) khi không khớp đáp án soạn sẵn (SPEC mục 6). */
export type P6Input = {
  instruction: string;
  prompt: string;
  accepted: string[];
  answer: string;
  grammarTitle: string;
  level: Level;
};

export const P6_TOOL: ToolDefinition = {
  name: 'judge_exercise',
  description: 'Phán câu trả lời của người học cho một bài tập có đáp án mẫu.',
  input_schema: {
    type: 'object',
    additionalProperties: false,
    required: ['correct', 'uses_target_grammar', 'note_vi'],
    properties: {
      correct: { type: 'boolean', description: 'Câu đúng ngữ pháp, tự nhiên và làm đúng yêu cầu bài tập (cùng nghĩa với đáp án mẫu).' },
      uses_target_grammar: { type: 'boolean', description: 'Câu dùng đúng điểm ngữ pháp mà bài tập luyện.' },
      note_vi: { type: 'string' },
    },
  },
};

export const p6Schema = z.object({
  correct: z.boolean(),
  uses_target_grammar: z.boolean(),
  note_vi: z.string().trim().min(1),
});

export type P6Result = z.infer<typeof p6Schema>;

/** Chỉ tính đúng khi cả hai là true (SPEC P6). */
export function isAcceptedAnswer(r: P6Result): boolean {
  return r.correct && r.uses_target_grammar;
}

export async function judgeExercise(create: CreateMessage, model: string, input: P6Input): Promise<AiResult<P6Result>> {
  return runStructured(create, {
    promptId: 'p6-judge-exercise',
    model,
    system: [
      commonRules(input.level),
      '',
      'Nhiệm vụ: người học làm một bài tập tiếng Đức có đáp án mẫu nhưng viết khác đáp án. Phán câu của họ. Luôn trả kết quả bằng cách gọi công cụ judge_exercise đúng một lần.',
      '- correct = true khi câu đúng ngữ pháp, chính tả, tự nhiên, cùng nghĩa với đáp án mẫu và làm đúng yêu cầu. Cách diễn đạt khác vẫn được.',
      '- Lỗi viết hoa hoặc thiếu dấu câu cuối không làm sai câu.',
      '- uses_target_grammar = true khi câu dùng đúng điểm ngữ pháp được nêu.',
      '- note_vi: một câu ngắn bằng tiếng Việt; nếu sai thì chỉ ra chỗ sai, không viết lại cả câu đúng.',
    ].join('\n'),
    user: [
      `Điểm ngữ pháp: ${input.grammarTitle}`,
      `Yêu cầu: ${input.instruction}`,
      `Đề: ${input.prompt}`,
      `Đáp án mẫu:\n${input.accepted.map((a) => `- ${a}`).join('\n')}`,
      `Câu người học viết: ${input.answer}`,
    ].join('\n'),
    tool: P6_TOOL,
    schema: p6Schema,
    maxTokens: 600,
  });
}
