# Khung xương Bello (tra cứu)

Số liệu thật nằm trong `design/bello/bello-lab.html`. File này giải thích các con số đó nghĩa là gì và giới hạn ở đâu. Hai chỗ lệch nhau thì tin file phòng thử, rồi sửa lại file này.

## Hệ toạ độ thân (toạ độ chung)
- `viewBox="0 -16 260 196"`. Bello quay sang phải, đất ở y ≈ 161–162.
- Phần chừa trống phía trên (y từ −16 tới 0) là chỗ cho mũ khi đầu ở cao nhất (dáng Vui).
- Đáy bàn chân: `paw.y + feet.dy + feet.ry ≈ 162`.

## Cấu trúc một tư thế (`POSES.<mã>`)

| Trường | Dạng | Ý nghĩa |
| --- | --- | --- |
| `torso` | `[[x,y,r] mông, [x,y,r] giữa, [x,y,r] ngực]` | Thân là 2 viên nhộng nối 3 vòng. Bán kính thường 19–26. |
| `neck` | `[[x,y,r], [x,y,r]]` | Nối ngực tới dưới đầu. Khớp thứ hai nên ở khoảng tâm đầu + (0, 28) theo góc nghiêng của đầu, để cằm phủ lên cổ. |
| `head` | `[x, y, góc°]` | Tâm đầu. Đầu được phóng 1,1. Góc dương là nghiêng theo chiều kim đồng hồ. |
| `ears` | `[góc tai trái, góc tai phải]` | Tai trái dương thì văng ra ngoài; tai phải âm thì văng ra ngoài. Tai trái khoảng +30 là vểnh (dáng tò mò). |
| `tail` | `[gốc x, gốc y, góc°, dài, cong]` | Góc theo trục y hướng xuống: 180 là sang trái, 270 là thẳng lên. Gốc nằm trong vòng mông, cách tâm ≤ r − 3. Khi vẽ, đuôi bắt đầu lùi vào thêm 12 và dài thêm 12. |
| `hn hf fn ff` | `[[khớp], [gối/khuỷu], [bàn]]`, mỗi điểm `[x,y,r]` | Chân sau gần, sau xa, trước gần, trước xa. Chân xa tô màu `--far` và vẽ sau thân. |
| `feet` | `{ hn:[dx,dy,rx,ry], … }` | Bàn chân hình elip ở cuối chân. `rx = 0` là không có bàn chạm đất (chân giơ lên). |
| `face` | `{ eyes, mouth, brows }` | Mã bộ trong `EYE_SETS`, `MOUTHS`, `BROWS`. |
| `contours` | `[[chân, 'front' hoặc 'back', độ quét°], …]` | Nét viền chân gần, tối đa 3. Nét ôm khớp rồi chạy dọc mép, bị cắt theo thân và chân xa. |
| `prop` | `'none'`, `'q'`, `'z'` | Dấu hỏi (tò mò), chữ Z (ngủ). |
| `upperLegs` | `true`/`false` | Chân trước nhún theo thân trên, dùng khi chân giơ lên (dáng Vui). |

`name` được gán tự động bằng mã tư thế, dùng cho `hideIn` của vật phẩm. Khi chuyển tư thế, mọi số được nội suy; `name`, `face`, `contours`, `prop`, `upperLegs`, `blink` đổi ở 50% chặng.

**Ràng buộc viên nhộng:** hai vòng liền nhau phải cách nhau hơn `|r1 − r2|`. Nếu không, vòng nhỏ bị nuốt và khớp trông cụt.

## Vị trí đầu ở từng tư thế (để soi chỗ cho vật phẩm)

| Tư thế | Đầu (x, y, góc) | Lưu ý |
| --- | --- | --- |
| stand | 196, 60, 0 | |
| happy | 130, 42, −6 | Đầu cao nhất. Đỉnh đồ đội đầu = 42 + y_đầu × 1,1, phải ≥ −16, tức y_đầu ≥ −52. |
| energetic | 196, 104, 8 | Đầu thấp. Đồ ở cổ dài quá y_đầu ≈ 52 sẽ chạm đất. |
| curious | 154, 52, 12 (+ lắc −22) | Đầu lắc nhiều nhất. Đồ rộng sẽ quét ra xa. |
| sad | 162, 82, −5 | Tai và đồ ở cổ đè lên ngực, nên có nét. |
| sleep | 190, 124, 0 | Cằm chạm đất: ẩn đồ ở cổ (`hideIn:['sleep']`). |

## Toạ độ đầu (vẽ vật phẩm và biểu cảm)
Tâm đầu là (0, 0), trục y hướng xuống, chưa phóng 1,1.

| Mốc | Toạ độ |
| --- | --- |
| Đỉnh đầu | (0, −28) |
| Má rộng nhất | (±30, 0) |
| Cằm (đáy đầu) | y ≈ 33; mép dưới đi từ (±14, 30) qua (0, ~33) |
| Gốc tai, chốt xoay | trái (−17, −19), phải (17, −19); tai mọc từ (±21, −21) và (±15, −14) |
| Chóp tai | khoảng (±30, 33) |
| Mắt | (±10, −3), elip 3,3 × 3,9 (mắt to: 3,8 × 4,6) |
| Lông mày | y −10 … −16,5 |
| Mũi | (0, 12), elip 6,6 × 4,8 |
| Miệng | y 16 … 32; lưỡi tới 37 |
| Khăn đỏ (mẫu đồ ở cổ) | y 28 … 55 |
| Mũ Tirol (mẫu đồ đội đầu) | y −23 … −53, đội thẳng (mũ không tự nghiêng, chỉ nghiêng theo đầu) |
| Kính (mẫu đồ ở mặt) | vòng tròn r 7,6 quanh mắt; gọng ra tới x ±26 |

## Vùng cắt cho nét đen
- `c-<uid>`: thân và hai chân xa. Dùng cho nét viền chân gần.
- `t-<uid>`: đuôi. Dùng cho nét chỗ thân và chân sau đè lên gốc đuôi: viền dày 5,2 vẽ trước, rồi phần tô đè lên.
- `hb-<uid>`: các bộ phận phía sau đầu (thân, 4 chân), đưa về toạ độ đầu bằng phép biến đổi ngược. Dùng cho nét cằm và nét đồ ở cổ.
- `el-<uid>`, `er-<uid>`: như `hb` nhưng thêm phép xoay ngược của từng tai. Dùng cho nét tai đè lên thân.

Thêm bộ phận mới có thể đè lên thứ khác: tạo nét bằng `brush` theo mép của nó, rồi bọc trong vùng cắt của **những thứ nằm sau nó**, ở đúng hệ toạ độ của nhóm chứa nét.

## Trường chuyển động sống (`life`)

| Trường | Tác dụng |
| --- | --- |
| `upper` | Nhún thân trên: ngực, cổ, đầu, vai (và cả chân trước nếu `upperLegs`) |
| `rear` | Nhún mông, hông và gốc đuôi |
| `breath` | Phình bán kính thân giữa và ngực |
| `headRot`, `headDy` | Nghiêng và hạ đầu |
| `earL`, `earR` | Cộng thêm góc tai (ngoài phần trễ tự động của `lifeLag`) |
| `tail`, `tailBend` | Góc vẫy và độ cong theo |
| `paw` | Chân trước giơ lên (khi `upperLegs`) |
| `blink` | 0 mở, 1 lim dim, 2 nhắm; dùng `blinkAt(T, chu kỳ, lệch)` |
| `prop` | Tham số của prop: độ nhún của "?", thời gian của "Z" |
