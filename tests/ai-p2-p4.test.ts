import type { BetaMessage, MessageCreateParamsNonStreaming } from '@anthropic-ai/sdk/resources/beta/messages/messages';
import { describe, expect, it } from 'vitest';
import { checkText, p2User, type P2Result } from '@/lib/ai/p2-check-text';
import { isAcceptedFix, judgeFix } from '@/lib/ai/p4-judge-fix';

function toolMessage(name: string, input: unknown): BetaMessage {
  return {
    id: 'msg',
    type: 'message',
    role: 'assistant',
    model: 'm',
    stop_reason: 'tool_use',
    content: [{ type: 'tool_use', id: `tu_${Math.random()}`, name, input }],
  } as unknown as BetaMessage;
}

function fake(...responses: BetaMessage[]) {
  const calls: MessageCreateParamsNonStreaming[] = [];
  return {
    calls,
    create: async (body: MessageCreateParamsNonStreaming) => {
      calls.push(structuredClone(body));
      return responses[Math.min(calls.length - 1, responses.length - 1)];
    },
  };
}

const busError = {
  wrong: 'den Bus',
  correct: 'dem Bus',
  start: 14,
  end: 21,
  category: 'case',
  rule_key: 'Dativ nach mit',
  title_vi: 'mit luôn đi với Dativ',
  hint_vi: 'Giới từ mit đòi hỏi cách nào?',
  explanation_vi: 'mit + Dativ, nên der Bus → dem Bus.',
};

const result = (errors: unknown[]): Omit<P2Result, 'errors'> & { errors: unknown[] } => ({
  corrected_text: 'Ich fahre mit dem Bus.',
  errors,
  overall_vi: 'Câu đúng trật tự, chỉ sai cách sau mit.',
  upgrade_suggestion_de: null,
  fixed: [],
  still_wrong: [],
});

describe('checkText (P2)', () => {
  it('chuẩn hóa rule_key', async () => {
    const { create } = fake(toolMessage('report_check', result([busError])));
    const r = await checkText(create, 'm', { text: 'Ich fahre mit den Bus.', level: 'A1', existingRules: [], mode: 'check' });
    expect(r.ok && r.data.errors[0].rule_key).toBe('dativ-nach-mit');
  });

  it('gợi ý lộ đáp án là sai schema → thử lại', async () => {
    const leaky = { ...busError, hint_vi: 'Phải dùng dem Bus vì mit + Dativ.' };
    const { create, calls } = fake(toolMessage('report_check', result([leaky])), toolMessage('report_check', result([busError])));
    const r = await checkText(create, 'm', { text: 'Ich fahre mit den Bus.', level: 'A1', existingRules: [], mode: 'check' });
    expect(r.ok).toBe(true);
    expect(calls).toHaveLength(2);
    expect(JSON.stringify(calls[1].messages.at(-1))).toMatch(/hint_vi không được chứa đáp án/);
  });

  it('sai schema 3 lần → lỗi thân thiện', async () => {
    const { create, calls } = fake(toolMessage('report_check', { corrected_text: 'x' }));
    const r = await checkText(create, 'm', { text: 'x', level: 'A1', existingRules: [], mode: 'check' });
    expect(calls).toHaveLength(3);
    expect(r).toMatchObject({ ok: false, code: 'schema' });
  });

  it('gửi kèm khóa lỗi đã có và lỗi lần trước khi kiểm lại', () => {
    const text = p2User({
      text: 'Ich fahre mit dem Bus.',
      level: 'A1',
      existingRules: [{ rule_key: 'dativ-nach-mit', title_vi: 'mit + Dativ' }],
      mode: 'recheck',
      previous: [{ wrong: 'den Bus', correct: 'dem Bus', rule_key: 'dativ-nach-mit' }],
    });
    expect(text).toMatch(/dativ-nach-mit — mit \+ Dativ/);
    expect(text).toMatch(/Chế độ: recheck/);
    expect(text).toMatch(/"den Bus" → "dem Bus"/);
  });
});

describe('judgeFix (P4)', () => {
  it('chỉ tính đúng khi cả hai cờ đều true', async () => {
    const { create } = fake(
      toolMessage('judge_fix', { correct: true, fixes_target_error: false, other_errors: [], note_vi: 'Câu đúng nhưng chưa sửa lỗi.' }),
    );
    const r = await judgeFix(create, 'm', { wrong: 'a', accepted: ['b'], answer: 'c', ruleTitle: 't', level: 'A1' });
    expect(r.ok && isAcceptedFix(r.data)).toBe(false);
    expect(isAcceptedFix({ correct: true, fixes_target_error: true, other_errors: [], note_vi: 'ok' })).toBe(true);
  });
});
