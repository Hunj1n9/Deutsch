import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { Placeholder } from '@/components/Placeholder';

export const metadata: Metadata = { title: 'Ôn tập' };

// Phiên ôn không có thanh điều hướng dưới; thoát bằng nút X.
export default function Page() {
  return (
    <>
      <header className="mb-5 mt-2 flex items-center gap-3">
        <Link href="/" aria-label="Thoát phiên ôn" className="grid size-11 place-items-center rounded-full bg-surface">
          <Icon name="x" />
        </Link>
        <h1 className="text-[22px] font-bold">Ôn tập</h1>
      </header>
      <Placeholder label="Phiên ôn" milestone="M3" tone="yellow">
        Ôn thẻ đến hạn bằng FSRS, 4 kiểu thẻ đều phải gõ đáp án, có hoàn tác.
      </Placeholder>
    </>
  );
}
