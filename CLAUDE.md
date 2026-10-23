# CLAUDE.md

App cá nhân giúp một người Việt tự học tiếng Đức từ số 0 đến TestDaF (C1). Đặc tả đầy đủ nằm ở `SPEC.md`. **Đọc `SPEC.md` trước khi làm bất cứ việc gì.**

## Cách làm việc
- Làm theo đúng thứ tự mốc ở `SPEC.md` mục 9 (M1 → M6). Mỗi lần chỉ làm một mốc.
- Trước khi code một mốc: liệt kê ngắn các file sẽ tạo/sửa và các TCHT sẽ kiểm. Xong mốc: chạy test, lint, build; báo cáo TCHT nào đạt, TCHT nào chưa.
- **Không thêm tính năng ngoài `SPEC.md`**, kể cả khi thấy hay. Có ý tưởng thì ghi vào `IDEAS.md`.
- Muốn đổi schema, thêm thư viện lớn hoặc đổi luồng người dùng: hỏi trước.
- Gặp chỗ đặc tả mơ hồ: chọn cách đơn giản nhất phù hợp mục 1 của `SPEC.md`, ghi lại quyết định vào `DECISIONS.md` (một dòng: ngày, quyết định, lý do).

## Công nghệ
Next.js (App Router) + TypeScript strict + Tailwind · Supabase (Postgres, Auth magic link, RLS) · `@anthropic-ai/sdk` · `ts-fsrs` · Zod · Vitest.

## Lệnh
```bash
npm run dev          # chạy local
npm run lint
npm run typecheck    # tsc --noEmit
npm test             # vitest
npm run build
npx supabase db push # áp migration (supabase/migrations)
```
Nếu script nào chưa có trong `package.json` thì thêm vào ở M1.

## Cấu trúc thư mục
```
app/                 # route theo SPEC mục 7
components/
lib/
  answer-check.ts    # chấm đáp án (hàm thuần)
  scheduler.ts       # bọc ts-fsrs (hàm thuần)
  errors.ts          # gom lỗi, quy tắc đóng/mở lỗi (hàm thuần)
  forecast.ts        # dự báo mốc giờ học (hàm thuần)
  ai/                # mỗi prompt P1–P5 một file, đầu ra kiểm bằng Zod
  supabase/          # client server/browser
supabase/migrations/
tests/               # unit test cho lib/*
```

## Quy ước
- Giao diện và thông báo: tiếng Việt. Tên biến, bảng, hàm: tiếng Anh. Nội dung học: tiếng Đức.
- Mọi lời gọi Anthropic và mọi dùng `SUPABASE_SERVICE_ROLE_KEY` chỉ ở server. Không bao giờ để lộ khóa xuống client.
- Model AI lấy từ `process.env.ANTHROPIC_MODEL`, không hard-code.
- Đầu ra có cấu trúc của AI: dùng tool use + JSON schema, rồi `zod.parse`. Sai schema thì thử lại tối đa 2 lần.
- Logic lõi (`lib/*.ts`) là hàm thuần, không phụ thuộc UI hay CSDL, và phải có test trước khi nối vào UI.
- Bật RLS cho mọi bảng mới; chính sách `user_id = auth.uid()`.
- Mobile-first: kiểm mọi màn hình ở chiều rộng 375px. Mọi ô gõ tiếng Đức có hàng nút `ä ö ü ß Ä Ö Ü`.
- Không lưu nội dung giáo trình có bản quyền vào repo (seed chỉ dùng ví dụ tự viết).

## Định nghĩa "xong"
- Typecheck, lint, test, build đều xanh.
- Mọi TCHT của mốc trong `SPEC.md` đạt.
- Đã thử luồng chính trên trình duyệt di động (hoặc giả lập 375px).
