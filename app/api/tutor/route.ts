import type { BetaMessageParam } from '@anthropic-ai/sdk/resources/beta/messages/messages';
import { z } from 'zod';
import { getAiSdk } from '@/lib/ai/anthropic';
import { threadTitle, tutorSystem } from '@/lib/ai/p3-tutor';
import { AI_ERROR_VI, classifyError, FALLBACK_BETA } from '@/lib/ai/structured';
import { getSession, SESSION_EXPIRED_VI } from '@/lib/supabase/session';
import { loadTutorContext } from '@/lib/tutor';

const bodySchema = z.object({
  threadId: z.uuid().nullable(),
  message: z.string().trim().min(1).max(4000),
  cardId: z.uuid().nullable(),
});

/** Số lượt gần nhất gửi lại cho AI làm lịch sử hội thoại. */
const HISTORY_LIMIT = 20;

function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

/**
 * Gia sư (SPEC F6): lưu câu hỏi, stream câu trả lời dạng chữ, lưu câu trả lời khi xong.
 * Mã luồng trả trong header `x-thread-id`.
 */
export async function POST(request: Request) {
  const parsed = bodySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return jsonError('Câu hỏi không hợp lệ.', 400);
  const session = await getSession();
  if (!session) return jsonError(SESSION_EXPIRED_VI, 401);
  const ai = getAiSdk();
  if (!ai) return jsonError(AI_ERROR_VI.config, 503);

  const { message, cardId } = parsed.data;
  let threadId = parsed.data.threadId;
  if (!threadId) {
    const { data, error } = await session.supabase
      .from('tutor_threads')
      .insert({ user_id: session.userId, title: threadTitle(message) })
      .select('id')
      .single();
    if (error || !data) return jsonError('Không tạo được cuộc trò chuyện.', 500);
    threadId = data.id as string;
  }

  const [{ data: history }, context] = await Promise.all([
    session.supabase
      .from('tutor_messages')
      .select('role, content')
      .eq('thread_id', threadId)
      .order('created_at', { ascending: false })
      .limit(HISTORY_LIMIT),
    loadTutorContext(session, cardId),
  ]);

  const { error: insertError } = await session.supabase
    .from('tutor_messages')
    .insert({ thread_id: threadId, role: 'user', content: message });
  if (insertError) return jsonError('Không lưu được câu hỏi.', 500);

  const messages: BetaMessageParam[] = [
    ...((history ?? []) as { role: 'user' | 'assistant'; content: string }[]).reverse(),
    { role: 'user', content: message },
  ];
  // API cần lượt đầu là user: bỏ lượt assistant mồ côi ở đầu nếu lịch sử bị cắt giữa chừng.
  while (messages.length > 1 && messages[0].role !== 'user') messages.shift();

  const started = Date.now();
  const stream = ai.sdk.beta.messages.stream({
    model: ai.model,
    max_tokens: 2000,
    system: tutorSystem(context),
    messages,
    output_config: { effort: 'medium' },
    betas: [FALLBACK_BETA],
    fallbacks: 'default',
  });

  const encoder = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      let text = '';
      try {
        stream.on('text', (delta) => {
          text += delta;
          controller.enqueue(encoder.encode(delta));
        });
        const final = await stream.finalMessage();
        if (final.stop_reason === 'refusal' && !text) {
          text = AI_ERROR_VI.refusal;
          controller.enqueue(encoder.encode(text));
        }
        console.info(JSON.stringify({ ai: 'p3-tutor', ms: Date.now() - started, ok: true }));
      } catch (error) {
        const code = classifyError(error);
        console.warn(JSON.stringify({ ai: 'p3-tutor', ms: Date.now() - started, ok: false, error: code }));
        const note = `${text ? '\n\n' : ''}(${AI_ERROR_VI[code]})`;
        controller.enqueue(encoder.encode(note));
      } finally {
        if (text.trim()) {
          await session.supabase.from('tutor_messages').insert({ thread_id: threadId, role: 'assistant', content: text });
        }
        controller.close();
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store', 'x-thread-id': threadId },
  });
}
