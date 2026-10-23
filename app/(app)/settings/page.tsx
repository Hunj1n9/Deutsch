import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Placeholder } from '@/components/Placeholder';

export const metadata: Metadata = { title: 'Cài đặt' };

export default function Page() {
  return (
    <>
      <PageHeader title="Cài đặt" />
      <Placeholder label="Cài đặt" milestone="M6" tone="white">
        Cấp độ, nguồn đang học, kỳ thi, mục tiêu mỗi ngày, sao lưu dữ liệu.
      </Placeholder>
    </>
  );
}
