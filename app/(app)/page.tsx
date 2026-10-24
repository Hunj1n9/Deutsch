import Link from 'next/link';
import { Suspense } from 'react';
import { Icon } from '@/components/Icon';
import { PageHeader } from '@/components/PageHeader';
import { Placeholder } from '@/components/Placeholder';
import { loadReviewCounts } from '@/lib/review/load';
import { loadSettings } from '@/lib/supabase/queries';
import { getPageSession } from '@/lib/supabase/session';

export default function Page() {
  return (
    <>
      <PageHeader title="Hôm nay" />
      <Suspense fallback={<div className="mb-3 h-44 rounded-block bg-pastel-yellow" />}>
        <ReviewBlocks />
      </Suspense>
      <Placeholder label="Bài mới hôm nay" milestone="M6" tone="white">
        Danh sách việc học bài mới ngoài app, tick xong thì nhập số phút.
      </Placeholder>
      <Placeholder label="Viết 5 câu" milestone="M6" tone="lilac">
        Đề gợi ý theo chương đang học.
      </Placeholder>
      <Placeholder label="Tiến độ" milestone="M6" tone="sage">
        Phút học hôm nay, số ngày học tuần này, đếm ngược tới kỳ thi.
      </Placeholder>
    </>
  );
}

async function ReviewBlocks() {
  const session = await getPageSession();
  if (!session) return null;
  const settings = await loadSettings(session);
  const counts = await loadReviewCounts(session, settings.new_cards_per_day);
  const total = counts.due + counts.fresh;

  return (
    <>
      <section className="scribble relative mb-3 rounded-block bg-pastel-yellow p-5">
        <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">Ôn thẻ</p>
        <p className="mt-1 text-[34px] font-bold leading-none">{total}</p>
        <p className="mt-1 text-[15px] opacity-80">
          {counts.due} đến hạn · {counts.fresh} thẻ mới
          {counts.reviewedToday > 0 && ` · đã ôn ${counts.reviewedToday} lần hôm nay`}
        </p>
        <Link
          href="/review"
          className="mt-4 flex h-13 items-center justify-center gap-2 rounded-full bg-primary text-[16px] font-semibold text-on-primary"
        >
          {total > 0 ? 'Bắt đầu ôn' : 'Mở phiên ôn'}
          <Icon name="arrow" />
        </Link>
      </section>
      <section className="scribble mb-3 rounded-block bg-pastel-pink p-5">
        <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">Sổ lỗi</p>
        <p className="mt-1 text-[15px]">
          <span className="text-[22px] font-bold">{counts.errorFixDue}</span> thẻ sửa lỗi đến hạn (nằm trong phiên ôn)
        </p>
      </section>
    </>
  );
}
