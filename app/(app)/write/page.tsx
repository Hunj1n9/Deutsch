import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Placeholder } from '@/components/Placeholder';

export const metadata: Metadata = { title: 'Viết' };

export default function Page() {
  return (
    <>
      <PageHeader title="Viết" />
      <Placeholder label="Kiểm tra câu" milestone="M4" tone="lilac">
        Viết 1–10 câu, tự sửa theo gợi ý, rồi mới xem đáp án.
      </Placeholder>
    </>
  );
}
