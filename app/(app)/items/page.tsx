import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { ArticleChip } from '@/components/ArticleChip';
import { ItemFilters } from '@/components/items/ItemFilters';
import { PageHeader } from '@/components/PageHeader';
import { ADDABLE_TYPES, LEVELS, TYPE_LABEL_VI, isArticle, type AddableType } from '@/lib/items/types';
import { loadSources } from '@/lib/supabase/queries';
import { getPageSession } from '@/lib/supabase/session';

export const metadata: Metadata = { title: 'Danh sách mục' };

const PAGE_SIZE = 50;

export default function Page({ searchParams }: PageProps<'/items'>) {
  return (
    <>
      <PageHeader title="Danh sách mục" back={{ href: '/', label: 'Về Hôm nay' }} />
      <Suspense fallback={<p className="px-1 text-[15px] text-muted">Đang tải…</p>}>
        <ItemsContent searchParams={searchParams} />
      </Suspense>
    </>
  );
}

type ItemRow = {
  id: string;
  type: string;
  german: string;
  article: string | null;
  plural: string | null;
  vietnamese: string;
  level: string | null;
  cards: { id: string; suspended: boolean }[];
};

function one(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? value[0] : value) ?? '';
}

/** Bỏ ký tự có nghĩa đặc biệt trong bộ lọc PostgREST để chuỗi tìm không phá câu truy vấn. */
function cleanSearch(q: string): string {
  return q.replace(/[%*,()\\:."']/g, ' ').trim().slice(0, 100);
}

async function ItemsContent({ searchParams }: { searchParams: PageProps<'/items'>['searchParams'] }) {
  const session = await getPageSession();
  if (!session) return null;
  const params = await searchParams;
  const q = cleanSearch(one(params.q));
  const source = one(params.source);
  const level = one(params.level);
  const type = one(params.type);
  const page = Math.max(1, Number.parseInt(one(params.page), 10) || 1);

  let query = session.supabase
    .from('items')
    .select('id, type, german, article, plural, vietnamese, level, cards(id, suspended)', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);
  if (q) query = query.or(`german.ilike.*${q}*,vietnamese.ilike.*${q}*`);
  if (source === 'none') query = query.is('source_id', null);
  else if (source) query = query.eq('source_id', source);
  if ((LEVELS as readonly string[]).includes(level)) query = query.eq('level', level);
  if ((ADDABLE_TYPES as readonly string[]).includes(type) || type === 'error_fix') query = query.eq('type', type);

  const [{ data, count, error }, sources] = await Promise.all([query, loadSources(session)]);
  const items = (data ?? []) as ItemRow[];
  const total = count ?? 0;

  const pageHref = (p: number) => {
    const next = new URLSearchParams();
    for (const [k, v] of Object.entries({ q: one(params.q), source, level, type })) if (v) next.set(k, v);
    if (p > 1) next.set('page', String(p));
    return `/items${next.size ? `?${next}` : ''}`;
  };

  return (
    <>
      <ItemFilters sources={sources} />
      {error && <p className="rounded-[20px] bg-pastel-pink p-4 text-[15px]">Không tải được danh sách. Thử lại sau.</p>}
      <p className="mb-2 px-1 text-[13px] text-muted">{total} mục</p>
      {items.length === 0 ? (
        <div className="rounded-block bg-surface p-5 text-[15px] text-muted">
          Chưa có mục nào khớp.{' '}
          <Link href="/add" className="font-semibold text-ink underline">
            Thêm mục
          </Link>
        </div>
      ) : (
        <ul className="flex flex-col gap-2">
          {items.map((item) => {
            const suspended = item.cards.filter((c) => c.suspended).length;
            return (
              <li key={item.id}>
                <Link href={`/items/${item.id}`} className="block rounded-[20px] bg-surface p-4 active:opacity-70">
                  <p className="text-[18px] font-semibold leading-snug" lang="de">
                    {item.article && isArticle(item.article) && <ArticleChip article={item.article} />} {item.german}
                    {item.plural && <span className="text-[14px] font-normal text-muted">, {item.plural}</span>}
                  </p>
                  <p className="text-[15px]">{item.vietnamese}</p>
                  <p className="mt-1 text-[12px] text-muted">
                    {TYPE_LABEL_VI[item.type as AddableType] ?? 'Sửa lỗi'}
                    {item.level && ` · ${item.level}`} · {item.cards.length} thẻ
                    {suspended > 0 && ` · ${suspended} đang treo`}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {total > PAGE_SIZE && (
        <nav className="mt-4 flex justify-between gap-3" aria-label="Phân trang">
          {page > 1 ? (
            <Link href={pageHref(page - 1)} className="rounded-full bg-surface px-4 py-2.5 text-[15px] font-semibold">
              ← Trước
            </Link>
          ) : (
            <span />
          )}
          <span className="self-center text-[13px] text-muted">
            Trang {page}/{Math.ceil(total / PAGE_SIZE)}
          </span>
          {page * PAGE_SIZE < total ? (
            <Link href={pageHref(page + 1)} className="rounded-full bg-surface px-4 py-2.5 text-[15px] font-semibold">
              Sau →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </>
  );
}
