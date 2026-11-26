# DESIGN — Hệ thống giao diện

Phong cách lấy theo app học **Brilliant** (từ 2026-11-26, thay bản pastel cũ): nền trắng ngà, chữ đen đậm, nút đen, thẻ viền mảnh có "đáy" bấm được, minh họa hình học nhiều màu, phản hồi đúng/sai bằng dải màu nhạt. Áp vào đúng các màn hình ở `SPEC.md` mục 7, không đổi route hay luồng. `design/mockup.html` là mockup của bản cũ, chỉ để tham khảo lịch sử.

Token nằm ở `app/globals.css`; lớp dùng chung ở `components/ui.ts`.

## Nguyên tắc
1. **Một việc chính mỗi màn.** Hôm nay: một chạm vào "Học tiếp"/"Bắt đầu ôn". Ôn: một ô nhập + một nút.
2. **Đen là hành động.** Nút chính nền đen (chế độ tối: nền trắng). Nút phụ nền trắng viền mảnh.
3. **Màu là nội dung, không phải khung.** Khung luôn trắng/xám trung tính; màu chỉ ở minh họa, biểu tượng khối, thanh tiến độ và phản hồi đúng/sai.
4. **Màu mạo từ luôn kèm chữ** (der/die/das), không bao giờ chỉ là chấm màu.
5. **Chữ thường câu**, không viết hoa toàn bộ nhãn hay nút.

## Token màu

| Token | Sáng | Tối | Dùng cho |
| --- | --- | --- | --- |
| `--bg` | `#F6F6F3` | `#0F0F10` | nền trang |
| `--surface` | `#FFFFFF` | `#1B1B1D` | thẻ, ô nhập, thanh điều hướng |
| `--ink` / `--muted` | `#151515` / `#6D6D72` | `#F3F3F1` / `#9C9CA2` | chữ chính / phụ |
| `--line` / `--line-strong` | `#E5E5E1` / `#D3D3CE` | `#2B2B2F` / `#3A3A3F` | viền, đáy thẻ |
| `--primary` / `--on-primary` | `#151515` / `#FFF` | `#F3F3F1` / `#121212` | nút chính |
| `--green --blue --gold --red --purple --orange --pink` | màu tươi | sáng hơn | minh họa, biểu tượng, tiến độ |
| `--yellow --pinkish --lilac --sage --sky` (lớp `bg-pastel-*`) | sắc rất nhạt | sắc tối | nền minh họa, khối nhấn |
| `--ok` / `--ok-soft` | `#0B8A4F` / `#E3F8EC` | | dải "đúng" |
| `--bad` / `--bad-soft` | `#D4351F` / `#FFF0EA` | | dải "chưa đúng" (cam nhạt) |
| `--der` / `--die` / `--das` | xanh dương / đỏ / xanh lá | sáng hơn | mạo từ |

Chế độ tối theo hệ thống (`prefers-color-scheme`).

## Chữ
- Font **Be Vietnam Pro** (hình học, đủ dấu tiếng Việt và ä ö ü ß), weight 400–800. Tiêu đề 800, chữ khít `-0.025em`.
- Tiêu đề trang 30px; tiêu đề thẻ 20–22px; thân 15–17px; nhãn 13px màu `--muted`.
- Chữ tiếng Đức trên thẻ ôn ≥ 26px; ô nhập tiếng Đức 20px (≥ 16px để iOS không tự phóng to).

## Hình khối
- Bo góc: khối lớn 20px (`rounded-block`), thẻ con 16px, nút 12px, chip/nút tròn 999px.
- Khối lớn: viền 1.5px, đáy 3px (trông bấm được). Khối `bg-pastel-*` có viền nhuộm nhẹ cùng màu.
- Nút trắng (`a/button.bg-surface`) có đáy xám, bấm thì lún xuống; nút đen phẳng, bấm thì thu nhỏ 2%.

## Minh họa
- `components/art/GeoArt.tsx`: khối cầu, khối vuông, kim tự tháp có đổ bóng, chọn theo `seed` (mã chặng/bài) nên mỗi chặng luôn một hình; trôi nhẹ.
- Dùng ở: thẻ "Học tiếp" (Hôm nay), thẻ cấp (Học), mở bài, màn chúc mừng, phiên ôn trống, đăng nhập.
- **Linh vật Bello (SPEC F17):** chó Dackel kiểu nét cọ, thân tô phẳng không viền, nét đen chỉ ở chỗ bộ phận đè lên nhau, rung nét, 8 khung/giây; 6 trạng thái và 6 vật phẩm mở theo mốc học. Bản chuẩn và phòng thử: `design/bello/bello-lab.html`. Thêm trạng thái hay vật phẩm theo skill `.claude/skills/bello/`. Trong app: `components/mascot/` (M21); Bello thay minh họa hình học ở dải phản hồi, ô gợi ý, màn chúc mừng, bước Mục tiêu, phiên ôn hết thẻ và đầu trang Hôm nay. `GeoArt` vẫn dùng cho ảnh chặng, `/learn` và trang đăng nhập.

## Chuyển động
- Chỉ animate `transform`/`opacity`. Đường cong `--ease-out-soft` (cubic-bezier(.23,1,.32,1)), 150–450ms.
- Khối xuất hiện lần lượt (`stagger`), thẻ câu hỏi bật vào (`animate-pop-in`), sai thì rung (`animate-shake`), dải phản hồi trượt lên (`animate-slide-up`).
- Xong bài/phiên đạt: pháo giấy (`components/fx/Confetti.tsx`, canvas, không thư viện).
- Âm thanh đúng/sai/xong bài tổng hợp bằng Web Audio (`components/fx/sfx.ts`), bật/tắt trong menu, lưu ở trình duyệt.
- Tôn trọng `prefers-reduced-motion`: tắt hết chuyển động và pháo giấy.

## Thành phần
- **Điều hướng:** điện thoại là thanh tab dưới đáy đơn sắc (mục đang chọn: biểu tượng đậm trong viên xám); máy tính (≥ 1024px) là cột trái 256px có logo, 5 mục chính, các trang trong menu, công tắc âm thanh, đăng xuất. Ẩn trong phiên ôn, bài học và kiểm tra để tập trung.
- **Tiêu đề trang:** trang vào từ menu có nút quay lại tròn bên trái; nút menu tròn bên phải (ẩn trên máy tính vì đã có cột trái).
- **Đường học (`/learn`):** chặng là nút vuông bo 26px xếp lượn sóng: đã qua xanh lá có dấu ✓, đang học đen có nhãn "Bắt đầu/Học tiếp" nhún nhẹ, chưa học trắng viền. Chạm nút mở bảng bài học ngay dưới.
- **Thanh bước bài học:** 6 đoạn, đoạn xong tô xanh, đoạn đang làm tô một phần.
- **Phản hồi:** dải xanh nhạt "Super!/Toll!…" (lời khen tiếng Đức) hoặc cam nhạt "Chưa đúng", đáp án đúng bên dưới, nút "Tiếp tục" đen.
- **Nút chấm điểm:** 4 nút Lại / Khó / Được / Dễ kèm khoảng ôn; nút đề xuất nền đen, còn lại chữ màu; Enter = xác nhận.
- **Màn chúc mừng:** minh họa, tiêu đề lớn, 2–3 thẻ chỉ số.
- **Hàng phím umlaut:** 7 phím `ä ö ü ß Ä Ö Ü` cao 40px ngay trên mọi ô gõ tiếng Đức; chạm chèn tại con trỏ, không làm mất focus.
- **Chip mạo từ:** chữ màu mạo từ + nền cùng màu độ mờ 12%.
- Vùng chạm tối thiểu 44×44px.

## Bố cục
- Điện thoại: thiết kế ở 375px, lề ngang 20px, khoảng giữa khối 12px.
- Máy tính: cột nội dung tối đa 640px, căn giữa phần còn lại bên phải cột điều hướng.
- Ô nhập trong phiên ôn đặt ở nửa trên màn hình để bàn phím ảo không che.
