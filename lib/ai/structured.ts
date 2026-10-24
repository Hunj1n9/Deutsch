import Anthropic from '@anthropic-ai/sdk';
import type {
  BetaMessage,
  BetaMessageParam,
  BetaToolUseBlock,
  MessageCreateParamsNonStreaming,
} from '@anthropic-ai/sdk/resources/beta/messages/messages';
import { z } from 'zod';

/**
 * Gọi AI lấy kết quả có cấu trúc: tool use + JSON schema, rồi zod.parse (CLAUDE.md).
 * Không phụ thuộc biến môi trường; client thật nằm ở `lib/ai/anthropic.ts`, test truyền client giả.
 */
export type CreateMessage = (body: MessageCreateParamsNonStreaming) => Promise<BetaMessage>;

export type AiErrorCode = 'schema' | 'refusal' | 'timeout' | 'rate_limit' | 'unavailable' | 'config';

export type AiResult<T> = { ok: true; data: T } | { ok: false; code: AiErrorCode; message: string };

export const AI_ERROR_VI: Record<AiErrorCode, string> = {
  schema: 'AI trả kết quả sai mẫu sau 3 lần thử. Chữ bạn đã gõ vẫn còn; thử lại hoặc tự điền.',
  refusal: 'AI không trả lời yêu cầu này. Bạn tự điền giúp nhé.',
  timeout: 'AI phản hồi quá 30 giây. Thử lại sau.',
  rate_limit: 'AI đang quá tải hoặc hết hạn mức. Thử lại sau ít phút.',
  unavailable: 'Không gọi được AI. Kiểm tra mạng rồi thử lại.',
  config: 'Chưa cấu hình AI (ANTHROPIC_API_KEY, ANTHROPIC_MODEL) hoặc khóa không hợp lệ.',
};

export type ToolDefinition = {
  name: string;
  description: string;
  /** JSON schema chế độ strict: mọi trường bắt buộc, `additionalProperties: false`. */
  input_schema: { type: 'object'; [key: string]: unknown };
};

export type StructuredRequest<T> = {
  promptId: string;
  model: string;
  system: string;
  user: string;
  tool: ToolDefinition;
  schema: z.ZodType<T>;
  maxTokens: number;
};

export const MAX_SCHEMA_RETRIES = 2;
/** Model chính từ chối thì máy chủ tự chuyển sang model dự phòng mặc định. */
export const FALLBACK_BETA = 'server-side-fallback-2026-07-01';

export type AiLogEntry = { ai: string; ms: number; attempts: number; ok: boolean; error?: string; detail?: string };

/** Chỉ ghi mã prompt, thời gian, lỗi; không ghi nội dung người dùng (SPEC mục 8). */
function defaultLog(entry: AiLogEntry) {
  if (entry.ok) console.info(JSON.stringify(entry));
  else console.warn(JSON.stringify(entry));
}

export async function runStructured<T>(
  create: CreateMessage,
  req: StructuredRequest<T>,
  log: (entry: AiLogEntry) => void = defaultLog,
): Promise<AiResult<T>> {
  const started = Date.now();
  const messages: BetaMessageParam[] = [{ role: 'user', content: req.user }];
  let attempts = 0;

  const finish = (result: AiResult<T>, detail?: string): AiResult<T> => {
    log({
      ai: req.promptId,
      ms: Date.now() - started,
      attempts,
      ok: result.ok,
      ...(result.ok ? {} : { error: result.code }),
      ...(detail ? { detail } : {}),
    });
    return result;
  };
  const fail = (code: AiErrorCode, detail?: string) => finish({ ok: false, code, message: AI_ERROR_VI[code] }, detail);

  try {
    while (attempts <= MAX_SCHEMA_RETRIES) {
      attempts += 1;
      // Model mới không nhận tool_choice any/tool và không nhận temperature:
      // dùng auto + strict + dặn trong prompt, effort thấp cho việc điền và chấm.
      const response = await create({
        model: req.model,
        max_tokens: req.maxTokens,
        system: req.system,
        messages,
        tools: [{ ...req.tool, strict: true }],
        tool_choice: { type: 'auto' },
        output_config: { effort: 'low' },
        betas: [FALLBACK_BETA],
        fallbacks: 'default',
      });

      if (response.stop_reason === 'refusal') return fail('refusal');

      const block = response.content.find(
        (b): b is BetaToolUseBlock => b.type === 'tool_use' && b.name === req.tool.name,
      );

      if (!block) {
        const text = response.content
          .flatMap((b) => (b.type === 'text' ? [b.text] : []))
          .join('\n')
          .trim();
        if (text) messages.push({ role: 'assistant', content: text });
        messages.push({ role: 'user', content: `Hãy trả kết quả bằng cách gọi công cụ ${req.tool.name}.` });
        continue;
      }

      const parsed = req.schema.safeParse(block.input);
      if (parsed.success) return finish({ ok: true, data: parsed.data });

      messages.push(
        { role: 'assistant', content: [{ type: 'tool_use', id: block.id, name: block.name, input: block.input }] },
        {
          role: 'user',
          content: [
            {
              type: 'tool_result',
              tool_use_id: block.id,
              is_error: true,
              content: `Kết quả chưa hợp lệ:\n${z.prettifyError(parsed.error)}\nGọi lại ${req.tool.name} với dữ liệu đã sửa.`,
            },
          ],
        },
      );
    }
    return fail('schema');
  } catch (error) {
    return fail(classifyError(error), error instanceof Error ? error.name : 'unknown');
  }
}

/** SDK đã tự thử lại có giãn cách với lỗi mạng, 408, 409, 429, 5xx; tới đây là hết lượt thử. */
export function classifyError(error: unknown): AiErrorCode {
  if (error instanceof Anthropic.APIConnectionTimeoutError) return 'timeout';
  if (error instanceof Anthropic.RateLimitError) return 'rate_limit';
  if (error instanceof Anthropic.APIError && error.status === 529) return 'rate_limit';
  if (
    error instanceof Anthropic.AuthenticationError ||
    error instanceof Anthropic.PermissionDeniedError ||
    error instanceof Anthropic.NotFoundError
  ) {
    return 'config';
  }
  return 'unavailable';
}
