import type { BetaMessage, MessageCreateParamsNonStreaming } from '@anthropic-ai/sdk/resources/beta/messages/messages';
import { describe, expect, it } from 'vitest';
import { isAcceptedAnswer, judgeExercise } from '@/lib/ai/p6-judge-exercise';

function toolMessage(input: unknown): BetaMessage {
  return {
    id: 'msg',
    type: 'message',
    role: 'assistant',
    model: 'm',
    stop_reason: 'tool_use',
    content: [{ type: 'tool_use', id: `tu_${Math.random()}`, name: 'judge_exercise', input }],
  } as unknown as BetaMessage;
}

const input = {
  instruction: 'Dịch sang tiếng Đức',
  prompt: 'Tôi đến từ Việt Nam và sống ở Hà Nội.',
  accepted: ['Ich komme aus Vietnam und wohne in Hanoi.'],
  answer: 'Ich komme aus Vietnam, ich wohne in Hanoi.',
  grammarTitle: 'Chia sein ở hiện tại',
  level: 'A1' as const,
};

describe('judgeExercise (P6)', () => {
  it('gửi đề, đáp án mẫu, câu người học; chỉ tính đúng khi cả hai cờ true', async () => {
    const calls: MessageCreateParamsNonStreaming[] = [];
    const create = async (body: MessageCreateParamsNonStreaming) => {
      calls.push(body);
      return toolMessage({ correct: true, uses_target_grammar: true, note_vi: 'Đúng, cách viết khác.' });
    };
    const r = await judgeExercise(create, 'm', input);
    expect(r.ok && isAcceptedAnswer(r.data)).toBe(true);
    const user = JSON.stringify(calls[0].messages);
    expect(user).toContain('Ich komme aus Vietnam, ich wohne in Hanoi.');
    expect(user).toContain('Ich komme aus Vietnam und wohne in Hanoi.');
    expect(isAcceptedAnswer({ correct: true, uses_target_grammar: false, note_vi: 'x' })).toBe(false);
  });

  it('sai schema thì thử lại', async () => {
    let n = 0;
    const create = async () =>
      ++n === 1 ? toolMessage({ correct: 'yes' }) : toolMessage({ correct: false, uses_target_grammar: true, note_vi: 'Sai đuôi.' });
    const r = await judgeExercise(create, 'm', input);
    expect(r.ok && r.data.correct).toBe(false);
    expect(n).toBe(2);
  });
});
