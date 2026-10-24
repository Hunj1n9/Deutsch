import 'server-only';
import Anthropic from '@anthropic-ai/sdk';
import type { CreateMessage } from './structured';

export type AiClient = { create: CreateMessage; model: string };

let client: Anthropic | null = null;

/**
 * Client Anthropic dùng chung, chỉ ở server. Model lấy từ ANTHROPIC_MODEL, không hard-code (CLAUDE.md).
 * Trả null nếu thiếu cấu hình để action báo lỗi rõ ràng thay vì sập.
 */
export function getAiClient(): AiClient | null {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const model = process.env.ANTHROPIC_MODEL;
  if (!apiKey || !model) return null;

  // SPEC mục 8: timeout 30 giây mỗi lời gọi, thử lại có giãn cách (SDK tự lùi dần với lỗi mạng, 429, 5xx).
  client ??= new Anthropic({ apiKey, timeout: 30_000, maxRetries: 2 });
  const sdk = client;
  return { model, create: (body) => sdk.beta.messages.create(body) };
}

/** SDK thô cho lời gọi stream (gia sư). Null nếu thiếu cấu hình. */
export function getAiSdk(): { sdk: Anthropic; model: string } | null {
  const ai = getAiClient();
  return ai && client ? { sdk: client, model: ai.model } : null;
}
