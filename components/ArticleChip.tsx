import type { Article } from '@/lib/items/types';

const COLOR: Record<Article, string> = {
  der: 'text-der bg-der/12',
  die: 'text-die bg-die/12',
  das: 'text-das bg-das/12',
};

/** Nhãn mạo từ: chữ màu mạo từ trên nền cùng màu mờ 12%, luôn có chữ để không phụ thuộc màu (DESIGN.md). */
export function ArticleChip({ article, size = 'sm' }: { article: Article; size?: 'sm' | 'lg' }) {
  const sizing = size === 'lg' ? 'px-3 py-1 text-[18px]' : 'px-2 py-0.5 text-[13px]';
  return <span className={`inline-block rounded-full font-semibold ${sizing} ${COLOR[article]}`}>{article}</span>;
}

export const ARTICLE_TEXT: Record<Article, string> = { der: 'text-der', die: 'text-die', das: 'text-das' };
