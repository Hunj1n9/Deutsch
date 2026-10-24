import { cacheLife } from 'next/cache';
import { z } from 'zod';
import type { Level } from '@/lib/items/types';
import { getAiClient } from './anthropic';
import { commonRules } from './rules';
import { runStructured } from './structured';

export const FALLBACK_WRITING_PROMPT = 'Viết 5 câu về một ngày của bạn, dùng từ vựng của chương đang học.';

/**
 * Đề "Viết 5 câu" theo chương đang học (SPEC F7): AI sinh, cache theo ngày.
 * Ngày nằm trong tham số nên mỗi ngày một đề; AI lỗi thì dùng đề mặc định.
 */
export async function dailyWritingPrompt(day: string, level: Level, source: string | null): Promise<string> {
  'use cache';
  cacheLife('days');
  void day;

  const ai = getAiClient();
  if (!ai) return FALLBACK_WRITING_PROMPT;
  const result = await runStructured(ai.create, {
    promptId: 'writing-prompt',
    model: ai.model,
    system: `${commonRules(level)}\nNhiệm vụ: ra một đề viết 5 câu tiếng Đức ngắn, đúng trình độ, gắn với chủ đề đang học. Trả bằng công cụ give_prompt.`,
    user: `Đang học: ${source ?? 'chưa ghi nguồn (chọn chủ đề đời sống hằng ngày)'}. Viết đề bằng tiếng Việt, một câu, có thể gợi ý cấu trúc ngữ pháp cần dùng.`,
    tool: {
      name: 'give_prompt',
      description: 'Trả đề viết.',
      input_schema: {
        type: 'object',
        additionalProperties: false,
        required: ['prompt_vi'],
        properties: { prompt_vi: { type: 'string' } },
      },
    },
    schema: z.object({ prompt_vi: z.string().trim().min(5).max(300) }),
    maxTokens: 400,
  });
  return result.ok ? result.data.prompt_vi : FALLBACK_WRITING_PROMPT;
}
