import type { BetaMessage } from '@anthropic-ai/sdk/resources/beta/messages/messages';
import { describe, expect, it } from 'vitest';
import { countWords, weeklyReport, type P5Settings, type WeeklyStats } from '@/lib/ai/p5-weekly-report';

const stats: WeeklyStats = {
  week_start: '2026-10-19',
  hours: 9.5,
  days: 5,
  reviews: 320,
  retention: 0.82,
  new_errors: 4,
  closed_errors: 1,
  top_errors: [{ title_vi: 'mit + Dativ', occurrences: 5 }],
};
const settings: P5Settings = {
  level: 'A1',
  daily_minutes_target: 120,
  weekly_days_target: 6,
  new_cards_per_day: 15,
  desired_retention: 0.9,
  next_exam_name: 'Goethe-Zertifikat B2',
  next_exam_date: null,
};

const message = (input: unknown) =>
  ({
    id: 'm',
    type: 'message',
    role: 'assistant',
    model: 'm',
    stop_reason: 'tool_use',
    content: [{ type: 'tool_use', id: `t${Math.random()}`, name: 'weekly_report', input }],
  }) as unknown as BetaMessage;

describe('weeklyReport (P5)', () => {
  it('tóm tắt quá 120 từ hoặc không đủ 3 điều chỉnh thì thử lại', async () => {
    const good = { summary_vi: 'Tuần này học 9,5 giờ trong 5 ngày.', adjustments: ['a: giảm thẻ mới', 'b: thêm 1 ngày', 'c: viết 5 câu'] };
    const responses = [
      message({ ...good, summary_vi: 'từ '.repeat(121) }),
      message({ ...good, adjustments: ['chỉ một điều chỉnh'] }),
      message(good),
    ];
    let n = 0;
    const result = await weeklyReport(async () => responses[n++], 'm', { stats, settings, previous: null });
    expect(n).toBe(3);
    expect(result).toEqual({ ok: true, data: good });
  });

  it('đếm từ', () => {
    expect(countWords('  Tuần này   học tốt. ')).toBe(4);
  });
});
