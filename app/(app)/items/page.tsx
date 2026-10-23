import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Placeholder } from '@/components/Placeholder';

export const metadata: Metadata = { title: 'Danh sách mục' };

export default function Page() {
  return (
    <>
      <PageHeader title="Danh sách mục" />
      <Placeholder label="Mục đã lưu" milestone="M2" tone="white">
        Tìm, lọc theo nguồn, cấp độ, loại; sửa mục; treo thẻ.
      </Placeholder>
    </>
  );
}
