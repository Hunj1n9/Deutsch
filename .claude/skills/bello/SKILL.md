---
name: bello
description: Tạo hoặc sửa trạng thái (tư thế, biểu cảm, chuyển động) và vật phẩm (mũ, khăn, kính, màu lông) cho Bello, chú chó Dackel linh vật của app Deutsch, theo đúng khung xương và phong cách nét cọ 8 khung/giây trong design/bello/bello-lab.html (SPEC F17). Dùng skill này mỗi khi người dùng nhắc tới Bello, linh vật/mascot, thêm trạng thái/tư thế/biểu cảm, thêm đồ/vật phẩm/phụ kiện/tủ đồ cho Bello, đổi màu lông, sửa nét đen/đuôi/tai của Bello, hoặc chuyển Bello sang React (mốc M21), kể cả khi họ không nói chữ "skill". Create or edit Bello mascot poses, animations and wearable items.
---

# Bello: thêm trạng thái và vật phẩm

Bello là chó Dackel vẽ bằng SVG tự viết, không thư viện (SPEC F17). Phong cách được chốt qua nhiều vòng góp ý của người dùng: thân tô phẳng, không viền ngoài, nét cọ đen thon hai đầu, nét rung nhẹ, chuyển động giật kiểu vẽ tay ở 8 khung/giây. Mọi thay đổi phải giữ đúng những thứ đó, vì người dùng đã thấy và đã sửa từng điểm một.

## File

| File | Vai trò |
| --- | --- |
| `design/bello/bello-lab.html` | **Bản chuẩn** và phòng thử: khung xương, 6 tư thế, chuyển động, vật phẩm, `BelloLab.grid()` để soi hình. Mọi thay đổi hình làm và soi ở đây trước, rồi chép sang `components/mascot/rig.ts`. |
| `SPEC.md` mục F17 | Trạng thái nào hiện ở đâu trong app, bảng vật phẩm và mốc mở khóa. Thêm trạng thái hay món mới có chỗ dùng trong app thì sửa bảng ở đây. |
| `lib/bello-items.ts` + `tests/bello-items.test.ts` | Danh sách món, chỗ mặc, luật mở khóa, `unlockedBy`, `wear`, `parseOutfit` (hàm thuần, có test). Thêm món thì thêm ở đây và thêm test. |
| `components/mascot/` | Bản trong app (M21): `rig.ts` (hình học, tư thế, `life`, hình vật phẩm `ITEM_ART`, chép từ phòng thử), `Bello.tsx` (component), `outfit-store.ts` (bộ đồ ở localStorage), `Wardrobe.tsx` (tủ đồ ở Hôm nay), `BelloHint.tsx` (ô gợi ý). |
| `references/rig.md` | Toạ độ, cấu trúc tư thế, các mốc trên đầu để vẽ vật phẩm. **Đọc trước khi chỉnh số.** |

Xem phòng thử: chạy cấu hình `mascot-sketch` trong `.claude/launch.json` của thư mục cha (máy chủ tĩnh cổng 3201, phục vụ `design/bello`), mở `http://localhost:3201/bello-lab.html`. Người dùng có thể đang mở trang đó, nên tự kiểm thì dùng một tab riêng.

## Luật phong cách (và lý do)

1. **Không viền bóng ngoài.** Nét đen chỉ nằm ở chỗ một bộ phận đè lên bộ phận khác: đùi và khuỷu đè lên thân, chân gần đè lên chân xa, cằm đè lên cổ và ngực, thân đè lên gốc đuôi, tai hoặc khăn khi rủ lên thân. Nét là để báo bộ phận nào nằm trước, không phải để vẽ viền.
2. **Tai nằm trên mặt thì không có nét.** Người dùng đã bỏ rõ ràng. Tai chỉ có nét ở phần đè lên thân. Vật phẩm cũng vậy: không có nét trên mặt, chỉ có nét ở chỗ đè lên cổ hoặc thân.
3. **Bộ phận nối qua khớp.** Thân, cổ, chân là chuỗi hình viên nhộng `capsule([x,y,r],[x,y,r])` dùng chung khớp, nên đổi tư thế nào chúng cũng liền nhau. Đừng vẽ bộ phận thành hình rời rồi đặt cạnh nhau: rung nét sẽ làm lộ khe hoặc chỗ thắt.
4. **Đuôi phải cắm sâu vào mông.** Gốc đuôi cách tâm vòng mông ít nhất `r − 3`; khi vẽ, đuôi còn bắt đầu lùi vào trong thêm 12. Gốc đuôi nằm đúng mép mông sẽ làm lòi một vệt đen chạy dọc cạnh đuôi (lỗi đã gặp ở dáng hăng hái).
5. **Đầu nhìn chéo 3/4 có mõm Dackel; đồ đeo gắn vào đầu.** Người dùng chê đầu tròn nhìn thẳng trông như chó thường, rồi chọn "kết hợp nhìn ngang và thẳng": sọ tròn, mõm dài chìa sang phải, vẫn thấy hai mắt (`EYES_AT`), miệng dưới mũi ở mõm (`MOUTH_AT`), tai xa giấu sau sọ (`FAR_EAR_AT`). Mũ, khăn, kính vẽ trong toạ độ của đầu nên đi theo đầu khi đầu nghiêng hay nhún. Thân Dackel: dài, thấp, bụng gần sát đất, chân ngắn.
6. **Nét cọ:** dùng `brush(bezier, w)` (thon hai đầu) hoặc `strokePts(points, w)`, màu `C.ink`, độ dày 2,2–2,8 ở toạ độ thân. Không dùng `stroke` SVG thường cho nét nhìn thấy được, vì nét sẽ đều và trông "máy".
7. **Màu:** lông, tai và chân xa qua biến `--fur`, `--ear`, `--far` để món "màu lông" đổi được. Bộ lông có mảng (đen – nâu vàng) dùng thêm `--tan`, `--paw`, `--farpaw`, `--seam` (nét chỗ đè), `--lid` (nét mí, lông mày), `--glint`. **Tên biến không được trùng biến của trang:** từng đặt `--line` cho nét chỗ đè thì nét thành xám trắng, vì phòng thử và app đều có `--line` là màu viền giao diện; tránh cả `--ink`, `--bg`, `--muted`. Màu nhấn lấy từ `C` (đỏ `#E0373D`, vàng `#FFC61A`). Không tô mắt kính hay bất cứ thứ gì đè lên mắt, vì sẽ làm mắt xám đi.
8. **Chuyển động:** tính bằng hàm mượt theo thời gian rồi lấy mẫu ở `FPS` (mặc định 8). Mỗi trạng thái có chuyển động sống riêng (thở, vẫy đuôi, chớp mắt). Tai tự đi trễ đầu qua `lifeLag`. Đổi trạng thái thì chuyển trong 0,6 giây; các khóa rời rạc (mặt, nét viền, prop) đổi ở giữa chặng. Bật giảm chuyển động thì đứng yên, không rung nét.
9. **Phải đọc được ở cỡ nhỏ.** Bello còn hiện cỡ khoảng 130px trong dải phản hồi. Chi tiết nhỏ hơn khoảng 3 đơn vị đầu sẽ thành vệt, như kính lúc đầu.

## Thêm một trạng thái

1. **Chốt ý nghĩa trước.** Trạng thái hiện lúc nào trong app? Nếu là chỗ mới, thêm dòng vào bảng trạng thái ở SPEC F17. Thêm vào `STATES` trong phòng thử: `[mã, nhãn tiếng Việt, khi dùng]`.
2. **Dựng tư thế** trong `POSES`: chép tư thế gần nhất rồi dời khớp. Giữ bán kính bộ phận tương tự các tư thế khác để Bello không đổi vóc. Toạ độ và ràng buộc xem `references/rig.md`, nhất là:
   - Bàn chân chạm đất ở y ≈ 162.
   - Góc đuôi giữ trong dải liên tục với các tư thế khác (thường 175–265), để khi chuyển, đuôi đi đường ngắn chứ không quét xuyên qua thân.
   - Hai khớp liền nhau phải cách nhau hơn hiệu hai bán kính.
3. **Mặt:** chọn trong `EYE_SETS`, `MOUTHS`, `BROWS`. Cần biểu cảm mới thì thêm một bộ, vẽ trong toạ độ đầu bằng `brush`/`ink`, và giữ trong vùng mặt ở `rig.md`.
4. **Nét viền chân** (`contours`, tối đa 3): chọn chân gần nào đè lên thân, phía `front` hoặc `back`, và độ quét quanh khớp. Nét tự bị cắt theo thân và chân xa, nên chỉ cần chọn đúng mép.
5. **Chuyển động sống:** thêm một nhánh trong `life(state, T)`, dùng các trường `upper`, `rear`, `headRot`, `headDy`, `earL/earR`, `tail/tailBend`, `paw`, `breath`, `blink`, `prop`. Biên độ nhỏ: nhún 1–4, đầu 4–10°, đuôi 8–26°. Đuôi vẫy thì cho `tailBend` ngược pha để đuôi cong theo.
6. **Prop** nếu cần (như `?` hay `Z`): thêm nhóm trong `createDog` và vị trí theo đầu trong `render`.
7. **Soi** theo mục "Kiểm hình" bên dưới, rồi gửi người dùng xem trước khi coi là xong.

## Thêm một vật phẩm

1. **Chỗ mặc và mốc mở.** Chọn `neck`, `head`, `face` hoặc `coat`; mỗi chỗ một món. Mốc mở phải là mốc học thật đọc được từ `lesson_progress`, `stage_tests` hoặc `level_tests`, vì SPEC cấm thưởng cho việc mở app hay bấm nút. Thêm dòng vào bảng vật phẩm ở SPEC F17.
2. **Vẽ trong toạ độ đầu** (tâm đầu là 0,0, đầu được phóng 1,1 khi hiện). Các mốc xem `references/rig.md`: đỉnh đầu y = −28, cằm ≈ 33, mắt ±10,−3, gốc tai ±(15…21),−21. Đồ ở đầu không được cao quá y ≈ −52, để còn chỗ ở dáng Vui (đầu cao nhất).
   Đồ đội đầu vẽ thẳng, đối xứng quanh x = 0, không tự xoay thêm: đầu đã nghiêng tới khoảng ±20° ở dáng tò mò, mũ tự nghiêng sẵn thì cộng dồn và trông lệch (người dùng đã báo lỗi này).
3. **Nét viền đồ:** không có nét trên mặt. Mép nào có thể đè lên cổ hoặc thân thì vẽ nét `brush` theo mép đó, bọc trong `<g clip-path="url(#hb-${uid})">`; bỏ mép nằm dưới cằm. Khăn đỏ là mẫu: `BANDANA_LINE` bỏ mép trên.
4. **Đăng ký** trong `ITEMS` của phòng thử (sau khi soi xong thì làm thêm bước 6):
   - Món vẽ: `{ slot, label, unlock, hideIn?, draw: uid => '<svg markup>' }`.
   - Món màu lông: `{ slot:'coat', label, unlock, coat:{ fur, ear, far } }`.

   `hideIn` là danh sách tư thế phải ẩn món vì vướng, ví dụ đồ ở cổ khi ngủ (cằm đè xuống đất). Lớp vẽ theo chỗ mặc: `neck` sau nét cằm và trước tai; `head` sau tai; `face` sau mắt mũi miệng. Món cần lớp khác thì thêm lớp trong `createDog` và ghi lý do.
5. **Kiểm vị trí (bắt buộc, người dùng đã nhiều lần bắt lỗi lệch):** món phải nằm đúng chỗ một món đồ thật sẽ nằm, ở **mọi** trạng thái, không chỉ dáng đứng. Phóng to vùng đầu và ngực bằng `viewBox`, soi lần lượt:
   - **Đồ đội đầu chạm đỉnh sọ**, không hở khe (mũ tốt nghiệp từng lơ lửng vì mép dưới cong vồng lên trong khi đỉnh đầu tròn; sửa bằng mép dưới cong ôm theo đầu và đè lên đầu 2–3 đơn vị). Vẽ thẳng, đối xứng quanh x = 0, không tự xoay.
   - **Đồ ở cổ đặt như khăn đỏ:** giữa dưới cằm (x = 0), mép trên ở y ≈ 28 sát đường cằm, phần rủ xuống ngực. Khăn đỏ là chỗ chuẩn người dùng đã duyệt; từng thử dời cả món lùi về sau (x −7) thì bị chê lệch, cả khăn lẫn huy chương. Đặt món mới cạnh khăn đỏ rồi so.
   - **Phần treo rủ theo trọng lực:** bọc phần treo trong `hang(x, y, …)` (điểm treo) để `render` xoay ngược góc đầu, mề đay luôn thẳng đứng khi đầu ngẩng (Tự hào) hay nghiêng (Tò mò).
   - **Đồ ở mặt đúng chỗ mắt và mõm:** kính bọc `EYES_AT`; không đè lên mắt; không lấn ra ngoài đầu.
   - **Dáng đặc biệt:** Lăn ngửa lật đầu (`flip: -1`), Ngủ cằm chạm đất: món nào không còn chỗ hợp lý thì `hideIn`, đừng để nó treo ngược hay lọt xuống đất.
   - So ảnh tĩnh (`BelloLab.grid`) với lúc đang chạy: nếu ảnh tĩnh đúng mà lúc chạy lệch thì lỗi ở chuyển động hoặc biến đổi, không phải ở hình.
6. **Soi** món một mình, rồi soi cùng một món ở mỗi chỗ mặc khác, ở mọi trạng thái và ở cỡ nhỏ.
7. **Đưa vào app:** thêm món vào `BELLO_ITEMS` trong `lib/bello-items.ts` (mã, chỗ mặc, tên tiếng Việt, luật mở) kèm test; chép hình sang `ITEM_ART` trong `components/mascot/rig.ts` (TypeScript báo lỗi nếu có món chưa có hình); thêm dòng vào bảng vật phẩm ở SPEC F17.

## Kiểm hình

Mở phòng thử trong trình duyệt tích hợp. Gọi `BelloLab.grid(...)` qua `javascript_tool` rồi chụp màn hình. Lưới vẽ ảnh tĩnh không rung nét. Chạm vào lưới hoặc gọi `BelloLab.close()` để đóng.

```js
// chuyển động sống: một trạng thái ở nhiều thời điểm
BelloLab.grid({ states:['curious'], times:[0, .25, .5, .75, 1, 1.25], cols:6 })
// chuyển từ trạng thái khác sang (times là tiến độ 0..1): soi đuôi quét xuyên thân, chân bắt chéo
BelloLab.grid({ states:['curious'], from:'stand', times:[0, .2, .4, .6, .8, 1], cols:6 })
// phóng to gốc đuôi ở nhiều nhịp vẫy
BelloLab.grid({ states:['energetic'], times:[0, .06, .12, .18, .24, .3], viewBox:'40 40 90 90' })
// mọi trạng thái với một bộ đồ
BelloLab.grid({ outfit:{ neck:'bandana', head:'tirol', face:'glasses', coat:'flag' } })
// kiểm vị trí một món: phóng to đầu và ngực ở mọi trạng thái (viewBox theo vị trí đầu của từng dáng nếu cần)
BelloLab.grid({ states:Object.keys(POSES), times:[1.7], cols:3, outfit:{ neck:'medal' } })
BelloLab.grid({ states:['stand','proud','curious'], times:[1.7], cols:3, outfit:{ neck:'medal' }, viewBox:'140 40 110 110' })
```

Danh sách soi, và lỗi từng gặp ở mỗi mục:
- [ ] Không còn vệt đen lòi ra ở gốc đuôi; nét chỉ cắt ngang chỗ nối (lỗi "lòi tí đen").
- [ ] Không có nét lơ lửng hoặc chạy ra ngoài bóng; không có vết hình chữ Y. Vết Y sinh ra khi vẽ viền trực tiếp theo hình gộp từ nhiều viên nhộng: hãy dùng cách nét dày bị phần tô đè lên như `tailUnderBody`.
- [ ] Tai không có nét trên mặt.
- [ ] Đồ không bị cắt ở mép trên khung (dáng Vui) và không lọt xuống dưới đất (dáng Hăng hái, Ngủ).
- [ ] Vị trí hợp lý ở mọi trạng thái: mũ chạm đỉnh sọ, đồ cổ quanh cổ và giữa ngực (không dính hàm, không văng ra trước), mề đay rủ thẳng đứng, kính ở mắt (lỗi đã gặp: mũ nghiêng sẵn, mũ tốt nghiệp lơ lửng, huy chương văng ra trước ngực khi đầu ngẩng, rồi lệch khi dời cả món về sau cổ).
- [ ] Khi chuyển trạng thái, đuôi và chân không quét xuyên thân.
- [ ] Ở cỡ nhỏ (lưới trạng thái trong trang) vẫn đọc ra biểu cảm và món đồ.
- [ ] `read_console_messages` không có lỗi.

Xong thì gửi người dùng file phòng thử (SendUserFile, hiển thị trực tiếp) kèm mô tả ngắn đã đổi gì. Kể cả những chỗ còn yếu.

## Bello trong app (từ M21)

- `components/mascot/rig.ts` là bản chép của phòng thử, cùng số liệu. Sửa hình thì sửa phòng thử, soi bằng `BelloLab.grid`, rồi chép đúng đoạn đã đổi sang `rig.ts`. Hai bản lệch nhau thì phòng thử đúng.
- `Bello.tsx` dùng một `setInterval` chung cho mọi Bello trên trang, đặt thuộc tính SVG qua `createDog`, không render lại React mỗi khung; Bello ra khỏi màn hình thì thôi vẽ. Id của filter và clipPath lấy từ `useId`.
- `prefers-reduced-motion`: vẽ một lần ở tư thế của trạng thái, không rung nét, không chạy đồng hồ.
- Trạng thái mới cần chỗ hiện thì thêm vào kiểu `BelloState`, `STATE_VI`, `POSES`, `life` trong `rig.ts`, và bảng trạng thái ở SPEC F17.
- Đồ đang mặc lưu `localStorage` (khóa `deutsch:bello-outfit`), không vào CSDL. Món mới mở do lệnh nộp bài trả về (`newItems`), tính bằng `unlockedBy` trên tiến độ đọc trước khi ghi.
