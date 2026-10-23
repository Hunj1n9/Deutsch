import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Placeholder } from '@/components/Placeholder';

export const metadata: Metadata = { title: 'Lịch sử bài viết' };

export default function Page() {
  return (
    <>
      <PageHeader title="Lịch sử bài viết" />
      <Placeholder label="Bài đã viết" milestone="M4" tone="lilac">
        Các bài đã kiểm tra, kèm bản sửa và nhận xét.
      </Placeholder>
    </>
  );
}
