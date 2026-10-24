import type { BetaMessage, MessageCreateParamsNonStreaming } from '@anthropic-ai/sdk/resources/beta/messages/messages';
import { describe, expect, it } from 'vitest';
import { P1_BATCH_LIMIT, fillItems, fillItemsInBatches, p1User, type FilledItem } from '@/lib/ai/p1-fill-item';
import { AI_ERROR_VI, MAX_SCHEMA_RETRIES, runStructured, type AiLogEntry } from '@/lib/ai/structured';
import { applyFill } from '@/lib/items/fill';
import { emptyDraft } from '@/lib/items/types';
import { z } from 'zod';

function tisch(index = 0): FilledItem {
  return {
    index,
    german: 'Tisch',
    type: 'word',
    pos: 'noun',
    article: 'der',
    plural: '-e',
    vietnamese: 'cái bàn',
    example_de: 'Der {Tisch} steht in der Küche.',
    example_vi: 'Cái bàn ở trong bếp.',
    grammar_note_vi: 'Giống đực, số nhiều: die Tische.',
    level_guess: 'A1',
  };
}

function toolMessage(input: unknown): BetaMessage {
  return {
    id: 'msg',
    type: 'message',
    role: 'assistant',
    model: 'test-model',
    stop_reason: 'tool_use',
    content: [{ type: 'tool_use', id: `tu_${Math.random()}`, name: 'fill_items', input }],
  } as unknown as BetaMessage;
}

function textMessage(text: string, stop_reason = 'end_turn'): BetaMessage {
  return {
    id: 'msg',
    type: 'message',
    role: 'assistant',
    model: 'test-model',
    stop_reason,
    content: [{ type: 'text', text }],
  } as unknown as BetaMessage;
}

/** Client giả: trả lần lượt các phản hồi, ghi lại mọi request. Không gọi API thật. */
function fakeClient(...responses: (BetaMessage | ((body: MessageCreateParamsNonStreaming) => BetaMessage))[]) {
  const calls: MessageCreateParamsNonStreaming[] = [];
  const create = async (body: MessageCreateParamsNonStreaming) => {
    calls.push(structuredClone(body));
    const next = responses[Math.min(calls.length - 1, responses.length - 1)];
    return typeof next === 'function' ? next(body) : next;
  };
  return { create, calls };
}

describe('fillItems (P1)', () => {
  it('trả kết quả đã kiểm Zod, request đúng cấu hình', async () => {
    const { create, calls } = fakeClient(toolMessage({ items: [tisch()] }));
    const result = await fillItems(create, 'model-from-env', 'A1', [{ german: 'Tisch' }]);
    expect(result).toEqual({ ok: true, data: [tisch()] });

    const body = calls[0];
    expect(body.model).toBe('model-from-env');
    expect(body).not.toHaveProperty('temperature');
    expect(body.tool_choice).toEqual({ type: 'auto' });
    expect(body.tools?.[0]).toMatchObject({ name: 'fill_items', strict: true });
    expect(body.system).toMatch(/trình độ A1/);
    expect(body.messages[0].content).toMatch(/0\. Tisch/);
  });

  it('danh từ thiếu mạo từ là sai schema → thử lại rồi nhận kết quả đúng', async () => {
    const bad = { ...tisch(), article: null };
    const { create, calls } = fakeClient(toolMessage({ items: [bad] }), toolMessage({ items: [tisch()] }));
    const result = await fillItems(create, 'm', 'A1', [{ german: 'Tisch' }]);
    expect(result.ok).toBe(true);
    expect(calls).toHaveLength(2);
    // Lần thử lại gửi kèm lỗi để AI sửa.
    const retry = JSON.stringify(calls[1].messages.at(-1));
    expect(retry).toMatch(/tool_result/);
    expect(retry).toMatch(/article bắt buộc/);
  });

  it('sai schema quá 2 lần thử lại thì báo lỗi tiếng Việt', async () => {
    const bad = { ...tisch(), example_de: 'Der Tisch steht in der Küche.' };
    const { create, calls } = fakeClient(toolMessage({ items: [bad] }));
    const logs: AiLogEntry[] = [];
    const result = await runStructured(
      create,
      {
        promptId: 'p1-fill-item',
        model: 'm',
        system: 's',
        user: 'u',
        tool: { name: 'fill_items', description: 'd', input_schema: { type: 'object' } },
        schema: z.object({ items: z.array(z.object({ example_de: z.string().regex(/\{/) })) }),
        maxTokens: 100,
      },
      (e) => logs.push(e),
    );
    expect(calls).toHaveLength(1 + MAX_SCHEMA_RETRIES);
    expect(result).toEqual({ ok: false, code: 'schema', message: AI_ERROR_VI.schema });
    expect(logs).toEqual([{ ai: 'p1-fill-item', ms: expect.any(Number), attempts: 3, ok: false, error: 'schema' }]);
  });

  it('không gọi công cụ thì nhắc lại', async () => {
    const { create, calls } = fakeClient(textMessage('Der Tisch ist ein Nomen.'), toolMessage({ items: [tisch()] }));
    const result = await fillItems(create, 'm', 'A1', [{ german: 'Tisch' }]);
    expect(result.ok).toBe(true);
    expect(calls[1].messages.at(-1)).toEqual({ role: 'user', content: 'Hãy trả kết quả bằng cách gọi công cụ fill_items.' });
  });

  it('thiếu mục trong lô là sai schema', async () => {
    const { create, calls } = fakeClient(
      toolMessage({ items: [tisch(0)] }),
      toolMessage({ items: [tisch(1), tisch(0)] }),
    );
    const result = await fillItems(create, 'm', 'A1', [{ german: 'Tisch' }, { german: 'Tisch' }]);
    expect(calls).toHaveLength(2);
    // Trả về theo thứ tự đầu vào dù AI xếp khác.
    expect(result.ok && result.data.map((i) => i.index)).toEqual([0, 1]);
  });

  it('AI từ chối thì dừng ngay, không thử lại', async () => {
    const { create, calls } = fakeClient(textMessage('', 'refusal'));
    const result = await fillItems(create, 'm', 'A1', [{ german: 'Tisch' }]);
    expect(calls).toHaveLength(1);
    expect(result).toMatchObject({ ok: false, code: 'refusal' });
  });

  it('lỗi mạng sau khi SDK hết lượt thử thì báo lỗi, không ném', async () => {
    const create = async () => {
      throw new Error('socket hang up');
    };
    const result = await fillItems(create, 'm', 'A1', [{ german: 'Tisch' }]);
    expect(result).toMatchObject({ ok: false, code: 'unavailable' });
  });

  it('không nhận quá 20 mục một lần gọi', async () => {
    const { create } = fakeClient(toolMessage({ items: [] }));
    const many = Array.from({ length: P1_BATCH_LIMIT + 1 }, () => ({ german: 'Tisch' }));
    await expect(fillItems(create, 'm', 'A1', many)).rejects.toThrow(/20/);
  });

  it('ghi gợi ý loại và nghĩa người học đã gõ vào prompt', () => {
    expect(p1User([{ german: 'Bank', vietnamese: 'ngân hàng' }, { german: 'mit + Dativ', type: 'grammar' }])).toBe(
      'Điền 2 mục sau:\n0. Bank (nghĩa người học ghi: ngân hàng)\n1. [ngữ pháp] mit + Dativ',
    );
  });
});

describe('fillItemsInBatches', () => {
  const echo = (body: MessageCreateParamsNonStreaming) => {
    const count = (String(body.messages[0].content).match(/^\d+\./gm) ?? []).length;
    return toolMessage({ items: Array.from({ length: count }, (_, i) => tisch(i)) });
  };

  it('30 mục → 2 lời gọi (20 + 10), kết quả đủ và đúng thứ tự', async () => {
    const { create, calls } = fakeClient(echo);
    const items = Array.from({ length: 30 }, (_, i) => ({ german: `Wort${i}` }));
    const result = await fillItemsInBatches(create, 'm', 'A1', items);
    expect(calls).toHaveLength(2);
    expect(calls.map((c) => (String(c.messages[0].content).match(/^\d+\./gm) ?? []).length)).toEqual([20, 10]);
    expect(result.items).toHaveLength(30);
    expect(result.items.every((i) => i !== null)).toBe(true);
    expect(result.error).toBeNull();
  });

  it('lô hỏng chỉ làm trống mục của lô đó', async () => {
    let n = 0;
    const create = async (body: MessageCreateParamsNonStreaming) => {
      n += 1;
      if (String(body.messages[0].content).startsWith('Điền 10')) throw new Error('down');
      return echo(body);
    };
    const items = Array.from({ length: 30 }, (_, i) => ({ german: `Wort${i}` }));
    const result = await fillItemsInBatches(create, 'm', 'A1', items);
    expect(n).toBe(2);
    expect(result.items.slice(0, 20).every((i) => i !== null)).toBe(true);
    expect(result.items.slice(20).every((i) => i === null)).toBe(true);
    expect(result.error).toBe(AI_ERROR_VI.unavailable);
  });
});

describe('applyFill', () => {
  it('chỉ điền ô trống, giữ chữ người học đã gõ', () => {
    const draft = { ...emptyDraft(), german: 'Tisch', vietnamese: 'bàn ăn' };
    const filled = applyFill(draft, tisch(), false);
    expect(filled).toMatchObject({
      german: 'Tisch',
      article: 'der',
      pos: 'noun',
      plural: '-e',
      vietnamese: 'bàn ăn',
      example_de: 'Der {Tisch} steht in der Küche.',
      example_vi: 'Cái bàn ở trong bếp.',
    });
  });

  it('người học đã có câu ví dụ thì không lấy bản dịch của câu AI', () => {
    const draft = { ...emptyDraft(), german: 'Tisch', example_de: 'Mein Tisch ist alt.' };
    expect(applyFill(draft, tisch(), false)).toMatchObject({ example_de: 'Mein Tisch ist alt.', example_vi: '' });
  });

  it('nhập hàng loạt thì nhận loại AI đoán', () => {
    const draft = { ...emptyDraft('phrase'), german: 'sich freuen' };
    expect(applyFill(draft, { ...tisch(), type: 'word', pos: 'verb', article: null }, true).type).toBe('word');
    expect(applyFill(draft, { ...tisch(), type: 'word' }, false).type).toBe('phrase');
  });
});
