import { PageHeader } from '@/components/PageHeader';
import { Placeholder } from '@/components/Placeholder';

export default function Page() {
  return (
    <>
      <PageHeader title="Hôm nay" />
      <Placeholder label="Ôn thẻ" milestone="M3" tone="yellow">
        Số thẻ đến hạn và thẻ mới, bắt đầu ôn bằng một chạm.
      </Placeholder>
      <Placeholder label="Sổ lỗi" milestone="M4" tone="pink">
        Số thẻ sửa lỗi đến hạn.
      </Placeholder>
      <Placeholder label="Bài mới hôm nay" milestone="M6" tone="white">
        Danh sách việc học bài mới ngoài app, tick xong thì nhập số phút.
      </Placeholder>
      <Placeholder label="Viết 5 câu" milestone="M6" tone="lilac">
        Đề gợi ý theo chương đang học.
      </Placeholder>
      <Placeholder label="Tiến độ" milestone="M6" tone="sage">
        Phút học hôm nay, số ngày học tuần này, đếm ngược tới kỳ thi.
      </Placeholder>
    </>
  );
}
