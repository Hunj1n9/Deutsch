# DECISIONS

- 2026-10-24 · Phong cách giao diện lấy từ ảnh tham khảo (pastel, bo tròn lớn, nút đen); bỏ avatar, chuông, Forum, onboarding hỏi tuổi vì ngoài SPEC. Chi tiết ở `design/DESIGN.md`.
- 2026-10-24 · Font Be Vietnam Pro thay cho font kiểu Urbanist trong ảnh, vì Urbanist không có bộ dấu tiếng Việt.
- 2026-10-24 · Mỗi khối chức năng một màu cố định (Ôn vàng, Sổ lỗi hồng, Viết tím, Thêm xanh trời, Gia sư/Tiến độ xanh lá nhạt) để nhận ra khối ở mọi màn hình.
- 2026-10-24 · Ẩn thanh điều hướng dưới trong phiên ôn để tập trung; thoát bằng nút X.
- 2026-10-24 · `/auth/confirm` công khai cùng `/login`: đây là đích của link trong email, phải mở được khi chưa đăng nhập.
- 2026-10-24 · `/auth/confirm` nhận cả `?code=` (mẫu email mặc định, PKCE: chỉ chạy trên đúng trình duyệt đã bấm gửi) và `?token_hash=` (mẫu riêng, chạy mọi trình duyệt). Gói miễn phí Supabase không cho sửa mẫu email khi dùng máy gửi mặc định, nên mẫu riêng `supabase/templates/magic_link.html` chỉ bật được khi có SMTP riêng.
- 2026-10-24 · Email đăng nhập kèm mã 6 số, nhập được ở `/login` (người dùng duyệt): app cài trên màn hình chính iOS không dùng chung cookie với Safari nên magic link không đăng nhập được vào app.
- 2026-10-24 · Email không được phép vẫn nhận thông báo "đã gửi" như email đúng, để không lộ email nào dùng được app; proxy và bước xác thực mới là chỗ chặn thật.
- 2026-10-24 · Màu chữ phụ `--muted` sáng đổi #8A8D97 → #6B6E77 để đạt tương phản 4.5:1 trên nền #F2F3F7.
- 2026-10-24 · Next 16 bật sẵn `cacheComponents`; giữ nguyên. Trang đọc request (cookie, searchParams) đặt trong `<Suspense>`.
- 2026-10-24 · Gửi mail đăng nhập qua SMTP Gmail của chính người dùng (mật khẩu ứng dụng, chỉ nhập trên dashboard Supabase, không khai trong `config.toml`). Nhờ có SMTP riêng, mẫu email có cả link `token_hash` và mã 6 số đã bật.
