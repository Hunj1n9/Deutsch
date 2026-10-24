import type { Level } from '@/lib/items/types';

/** Quy tắc chung đưa vào mọi system prompt (SPEC mục 6). */
export function commonRules(level: Level): string {
  return [
    `Người học là người Việt, đang học tiếng Đức ở trình độ ${level}.`,
    'Giải thích bằng tiếng Việt, ngắn gọn, chính xác.',
    'Ví dụ tiếng Đức phải tự nhiên, đúng chuẩn, kèm bản dịch tiếng Việt.',
    'Khi hữu ích, đối chiếu với cấu trúc tiếng Việt.',
    'Không bịa quy tắc; nếu có ngoại lệ hoặc không chắc, nói rõ.',
  ].join(' ');
}
