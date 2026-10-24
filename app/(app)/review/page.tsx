import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { ActivityTracker } from '@/components/ActivityTracker';
import { Icon } from '@/components/Icon';
import { ReviewSession } from '@/components/review/ReviewSession';
import { loadReviewSession, REVIEW_KINDS } from '@/lib/review/load';
import { loadSettings } from '@/lib/supabase/queries';
import { getPageSession } from '@/lib/supabase/session';

export const metadata: Metadata = { title: 'Ôn tập' };

// Phiên ôn không có thanh điều hướng dưới; thoát bằng nút X.
export default function Page() {
  return (
    <>
      <header className="mb-4 mt-2 flex items-center gap-3">
        <Link href="/" aria-label="Thoát phiên ôn" className="grid size-11 place-items-center rounded-full bg-surface">
          <Icon name="x" />
        </Link>
        <h1 className="text-[22px] font-bold">Ôn tập</h1>
      </header>
      <ActivityTracker activity="review" />
      <Suspense fallback={<p className="px-1 text-[15px] text-muted">Đang lấy thẻ…</p>}>
        <SessionContent />
      </Suspense>
    </>
  );
}

async function SessionContent() {
  const session = await getPageSession();
  if (!session) return null;
  const settings = await loadSettings(session);
  const cards = await loadReviewSession(session, { newPerDay: settings.new_cards_per_day, kinds: REVIEW_KINDS });
  return <ReviewSession initialCards={cards} retention={settings.desired_retention} />;
}
