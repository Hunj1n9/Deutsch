import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Placeholder } from '@/components/Placeholder';

export const metadata: Metadata = { title: 'Thêm nội dung' };

export default function Page() {
  return (
    <>
      <PageHeader title="Thêm nội dung" />
      <Placeholder label="Thêm mục" milestone="M2" tone="sky">
        Thêm từ, cụm từ, ngữ pháp; AI điền giúp; nhập hàng loạt; tự sinh thẻ.
      </Placeholder>
    </>
  );
}
