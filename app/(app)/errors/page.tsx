import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Placeholder } from '@/components/Placeholder';

export const metadata: Metadata = { title: 'Sổ lỗi' };

export default function Page() {
  return (
    <>
      <PageHeader title="Sổ lỗi" />
      <Placeholder label="Sổ lỗi" milestone="M4" tone="pink">
        Lỗi gom theo quy tắc, ôn bằng thẻ sửa lỗi đến khi hết mắc.
      </Placeholder>
    </>
  );
}
