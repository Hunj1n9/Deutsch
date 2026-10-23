import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Placeholder } from '@/components/Placeholder';

export const metadata: Metadata = { title: 'Tiến độ' };

export default function Page() {
  return (
    <>
      <PageHeader title="Tiến độ" />
      <Placeholder label="Tiến độ" milestone="M6" tone="sage">
        Giờ học, tỉ lệ nhớ, dự báo ngày đạt từng mốc, báo cáo tuần.
      </Placeholder>
    </>
  );
}
