# DESIGN — Hệ thống giao diện

Phong cách lấy từ ảnh tham khảo (app học pastel, bo tròn lớn, nút đen), áp vào đúng các màn hình ở `SPEC.md` mục 7. Mockup chạy được: `design/mockup.html` (mở thẳng bằng trình duyệt).

Những gì trong ảnh tham khảo **không** đưa vào vì ngoài phạm vi SPEC: avatar/tên người dùng, chuông thông báo, tab Forum, màn hỏi tuổi khi onboarding, nút "yêu thích" (ngôi sao).

## Nguyên tắc
1. **Một việc chính mỗi màn.** Hôm nay: một chạm vào "Bắt đầu ôn". Ôn: một ô nhập + một nút.
2. **Màu pastel = loại khối, không phải trang trí.** Mỗi khối chức năng có một màu cố định, dùng lại ở mọi nơi khối đó xuất hiện.
3. **Đen là hành động.** Nút chính luôn nền đen (chế độ tối: nền trắng). Không có màu nhấn thứ hai.
4. **Màu mạo từ luôn kèm chữ** (der/die/das), không bao giờ chỉ là chấm màu.

## Token màu

| Token | Sáng | Tối | Dùng cho |
| --- | --- | --- | --- |
| `--bg` | `#F2F3F7` | `#111216` | nền trang |
| `--surface` | `#FFFFFF` | `#1C1D22` | thẻ trắng, ô nhập, thanh điều hướng |
| `--ink` | `#0E0E10` | `#F4F4F6` | chữ chính |
| `--muted` | `#6B6E77` | `#9A9CA6` | chữ phụ |
| `--line` | `#E6E7EC` | `#2C2D33` | viền |
| `--primary` / `--on-primary` | `#0E0E10` / `#FFF` | `#F4F4F6` / `#0E0E10` | nút chính |
| `--yellow` | `#FCE8A6` | `#4A4127` | **Ôn thẻ** (F3) |
| `--pink` | `#F8D2E2` | `#47293A` | **Sổ lỗi** (F4) |
| `--lilac` | `#DDD2EF` | `#362E47` | **Viết** (F5) |
| `--sage` | `#D5E6DF` | `#2A3B35` | **Tiến độ / Gia sư** (F6, F8) |
| `--sky` | `#DCE6FB` | `#26304A` | **Thêm nội dung** (F2) |
| `--der` | `#2F6FEB` | `#6E9BFF` | mạo từ der (xanh dương) |
| `--die` | `#E5484D` | `#FF7B7F` | mạo từ die (đỏ) |
| `--das` | `#2E9E5B` | `#5FCB8A` | mạo từ das (xanh lá) |
| `--ok` / `--bad` | `#2E9E5B` / `#E5484D` | như der/das | đúng / sai |

Chế độ tối theo hệ thống (`prefers-color-scheme`).

## Chữ
- Font: **Be Vietnam Pro** (có đủ bộ dấu tiếng Việt và ä ö ü ß). Next.js: `next/font/google`, subsets `latin`, `latin-ext`, `vietnamese`.
- Thang: 34 / 28 / 22 / 18 / 15 / 13 px. Đậm: 700 tiêu đề, 600 nhãn, 400 thân.
- Chữ tiếng Đức trên thẻ ôn: **≥ 28px** (SPEC yêu cầu ≥ 18px). Ô nhập tiếng Đức: 20px (≥ 16px để iOS không tự phóng to).

## Hình khối
- Bo góc: khối lớn 28px, thẻ con 20px, nút/chip tròn hẳn (999px).
- Khối pastel có **nét vẽ nguệch ngoạc** trắng mờ (SVG) làm nền, như ảnh tham khảo.
- **Nút mũi tên khoét góc:** vòng tròn đen 44px, viền 6px cùng màu nền trang → tạo cảm giác khối bị khoét.
- Không đổ bóng; tách lớp bằng màu nền.

## Thành phần
- **Thanh điều hướng dưới:** khối trắng bo 26px nổi, rộng gần hết màn, 5 ô biểu tượng + nhãn chữ 11px: Hôm nay · Học · Ôn · Viết · Gia sư. Ô đang chọn nền đen. Ẩn trong phiên ôn, bài học và kiểm tra để tập trung.
- **Tiêu đề trang:** trang vào từ menu (Thêm, Danh sách mục, Sổ lỗi, Tiến độ, Cài đặt, Lịch sử bài viết) có nút quay lại bên trái; nút menu luôn ở bên phải.
- **Danh sách dài:** chia bằng tab (vd. trang Học chia theo cấp A1–B2) và thu gọn từng mục, chỉ mở sẵn mục đang làm.
- **Tab dạng viên thuốc:** đang chọn nền đen chữ trắng, còn lại nền trắng chữ xám.
- **Hàng phím umlaut:** 7 phím `ä ö ü ß Ä Ö Ü` cao 40px ngay trên mọi ô gõ tiếng Đức; chạm chèn tại con trỏ, không làm mất focus.
- **Chip mạo từ:** chữ màu mạo từ + nền cùng màu độ mờ 12%.
- **Nút chấm điểm:** 4 nút Lại / Khó / Được / Dễ kèm khoảng ôn kế tiếp; nút được đề xuất nền đen, Enter = xác nhận.
- Vùng chạm tối thiểu 44×44px.

## Bố cục di động
- Thiết kế ở 375px, lề ngang 20px, khoảng giữa khối 12px.
- Ô nhập trong phiên ôn đặt ở nửa trên màn hình để bàn phím ảo không che.
