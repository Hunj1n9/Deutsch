import { z } from 'zod';
import type { Level } from '@/lib/items/types';
import { commonRules } from './rules';
import { runStructured, type AiResult, type CreateMessage } from './structured';

/** P5 — Báo cáo tuần (SPEC mục 6, F8). */
export type WeeklyStats = {
  week_start: string;
  hours: number;
  days: number;
  reviews: number;
  retention: number | null;
  new_errors: number;
  closed_errors: number;
  top_errors: { title_vi: string; occurrences: number }[];
};

export type P5Settings = {
  level: Level;
  daily_minutes_target: number;
  weekly_days_target: number;
  new_cards_per_day: number;
  desired_retention: number;
  next_exam_name: string | null;
  next_exam_date: string | null;
};

export const SUMMARY_MAX_WORDS = 120;

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export const p5Schema = z.object({
  summary_vi: z
    .string()
    .trim()
    .min(1)
    .refine((s) => countWords(s) <= SUMMARY_MAX_WORDS, `summary_vi tối đa ${SUMMARY_MAX_WORDS} từ`),
  adjustments: z.array(z.string().trim().min(5)).length(3),
});

export type P5Result = z.infer<typeof p5Schema>;

export function p5User(stats: WeeklyStats, settings: P5Settings, previous: string | null): string {
  return [
    `Số liệu tuần bắt đầu ${stats.week_start}:`,
    JSON.stringify(stats),
    `Cài đặt: ${JSON.stringify(settings)}`,
    `Báo cáo tuần trước: ${previous ?? '(chưa có)'}`,
  ].join('\n\n');
}

export async function weeklyReport(
  create: CreateMessage,
  model: string,
  input: { stats: WeeklyStats; settings: P5Settings; previous: string | null },
): Promise<AiResult<P5Result>> {
  return runStructured(create, {
    promptId: 'p5-weekly-report',
    model,
    system: [
      commonRules(input.settings.level),
      '',
      'Nhiệm vụ: viết báo cáo tuần cho người học. Luôn trả bằng công cụ weekly_report đúng một lần.',
      `- summary_vi: tóm tắt tiếng Việt tối đa ${SUMMARY_MAX_WORDS} từ: giờ học và số ngày so với mục tiêu, tỉ lệ nhớ, lỗi nổi bật; so với tuần trước nếu có.`,
      '- adjustments: đúng 3 điều chỉnh cụ thể, đo được cho tuần sau, mỗi điều nêu lý do bằng số liệu (vd "Giảm thẻ mới còn 10/ngày vì tỉ lệ nhớ 82% < 90%").',
      '- Chỉ dựa trên số liệu được cho, không bịa.',
    ].join('\n'),
    user: p5User(input.stats, input.settings, input.previous),
    tool: {
      name: 'weekly_report',
      description: 'Trả báo cáo tuần.',
      input_schema: {
        type: 'object',
        additionalProperties: false,
        required: ['summary_vi', 'adjustments'],
        properties: {
          summary_vi: { type: 'string' },
          adjustments: { type: 'array', items: { type: 'string' } },
        },
      },
    },
    schema: p5Schema,
    maxTokens: 1200,
  });
}
