import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Placeholder } from '@/components/Placeholder';

export const metadata: Metadata = { title: 'Gia sư' };

export default function Page() {
  return (
    <>
      <PageHeader title="Gia sư" />
      <Placeholder label="Gia sư AI" milestone="M5" tone="sage">
        Hỏi ngữ pháp bằng tiếng Việt; lưu ví dụ thành thẻ, lưu lỗi vào sổ.
      </Placeholder>
    </>
  );
}
