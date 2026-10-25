# Đối chiếu ngữ pháp với các sách ngữ pháp chuẩn và soát lỗi nội dung

Ngày: 2026-10-25. Bổ sung cho `docs/doi-chieu-giao-trinh.md` (so với Netzwerk neu, Aspekte neu).

## Nguồn và cách làm

- **Không tải bản PDF lậu.** Sách ngữ pháp còn bản quyền, kể cả khi dùng cá nhân. Thay vào đó dùng **mục lục** công khai (bản quét của Thư viện Quốc gia Đức – DNB, hoặc trang của nhà xuất bản) để so độ phủ:
  - Dreyer/Schmitt, *Lehr- und Übungsbuch der deutschen Grammatik* (Hueber) – [mục lục DNB](https://d-nb.info/99175087X/04)
  - Clamer/Heilmann, *Übungsgrammatik für die Mittelstufe* (Liebaug-Dartmann) – [mục lục DNB](https://d-nb.info/993952305/04)
  - *Grammatik aktiv A1–B1* (Cornelsen)
  - *Klipp und Klar* A1–B1 và B2–C1 (Klett)
  - *Grammatik – ganz klar!* (Hueber)
  - Helbig/Buscha, *Deutsche Grammatik* (Langenscheidt)
  - *Profile deutsch* (Langenscheidt/Goethe-Institut), phần ngữ pháp theo cấp
- Chỉ dùng **tên điểm ngữ pháp** trong mục lục. Không có nội dung sách nào được đưa vào repo.
- **Soát lỗi**: đọc toàn bộ 150 bài (giải thích, bảng, ví dụ, bài tập, đáp án, hội thoại, bài đọc, câu hỏi) của 50 chặng, đối chiếu với quy tắc chuẩn (Duden, *Duden – Richtiges und gutes Deutsch* cho các chỗ "cả hai cách đều đúng"). Phần đối chiếu quy tắc dựa trên hiểu biết về các sách chuẩn này, không dựa trên văn bản tải về.

## 1. Độ phủ so với sách ngữ pháp

### Đính chính bảng cũ

Bảng "điểm app chưa có" trong `doi-chieu-giao-trinh.md` ghi *werden làm động từ chính* là chưa có. Thực ra app đã dạy: A2-12 bài 1 (Es wird sonnig, werden = trở nên) và B1-09 bài 1 (ba cách dùng werden: động từ chính, Futur, bị động). Đã bỏ dòng đó; bảng cũ còn **16** điểm. Soát lại thì thêm hai điểm đã có sẵn: so sánh trước danh từ (A2-04, A2-12) và (an)statt dass, ohne dass (B1-11). 14 điểm còn lại đã bổ sung (bảng ở `doi-chieu-giao-trinh.md`).

### Điểm sách ngữ pháp có mà app chưa dạy (ngoài 16 điểm cũ) và chỗ đã bổ sung

| Cấp | Điểm ngữ pháp | Có trong mục lục | Đã bổ sung ở |
|---|---|---|---|
| B1 | sobald, solange (câu phụ thời gian) | Dreyer, Mittelstufe, Klipp und Klar A1–B1 | B1-12 bài 2: điểm seit/bis mở rộng thành seit, bis, sobald, solange (đoạn, bài tập, kho kiểm tra) |
| B1 | sonst (nếu không thì) | Grammatik aktiv, Mittelstufe | Đoạn trong B1-03 bài 2 |
| B2 | es sei denn / außer wenn (trừ khi) | Mittelstufe | Đoạn mới trong B2-10 bài 2 |
| B2 | haben + zu + Infinitiv | Dreyer, Mittelstufe | Đoạn mới trong B2-06 bài 3 |
| B1 | Infinitiv không zu sau sehen, hören, gehen, bleiben | Grammatik aktiv, Klipp und Klar | Đoạn trong B1-09 bài 2 |
| B2 | derjenige, derselbe | Dreyer | Đoạn mới trong B2-04 bài 2 |
| C1 | zumal (nhất là vì) | Dreyer | Chưa thêm: thuộc C1, ngoài phạm vi A1–B2 |

Các điểm khác trong mục lục bảy cuốn trên (thì, cách, mạo từ, đuôi tính từ, bị động các thì, Konjunktiv I/II, câu quan hệ các cách, liên từ hai vế, giới từ Genitiv, Nominalstil, phân từ mở rộng, Modalpartikeln…) đều có bài ở cùng cấp hoặc sớm hơn.

### Cách bổ sung (2026-10-25)

- **Bài thứ 4** cho 4 điểm lớn, ưu tiên cao: giới từ Akkusativ (A1-07), giới từ thời gian + Dativ (A1-12), từ es (B2-09), Mittelfeld và vị trí nicht (B2-11). Mỗi bài đủ các bước như bài thường: từ mới (thêm vào gói của chặng), ngữ pháp 3 đoạn, hội thoại, viết, và kho kiểm tra riêng. Kiểm tra của các chặng này có 23 câu (12 câu ngữ pháp), đạt từ 19.
- **Gộp vào bài có sẵn** cho các điểm nhỏ: thêm câu giải thích và 1 bài tập vào đoạn gần nhất (A1–B1), hoặc thêm đoạn thứ ba với 2–3 bài tập (B2). Mọi bài vẫn trong giới hạn 3 đoạn, 2–4 bài tập mỗi đoạn, 8–14 bài tập mỗi bài.
- Tổng: 154 bài. Lý do chọn cách này ghi ở `DECISIONS.md`.

## 2. Kết quả soát lỗi nội dung (đã sửa)

Không có chỗ nào dạy sai một quy tắc chính. Nặng nhất là các bài tập có hai đáp án đúng (người học bị chấm sai oan) và hai câu sai ngữ pháp ở B2-05, B2-06. Tổng cộng 31 chỗ đã sửa, chia ba nhóm.

### Giải thích ngữ pháp chưa chính xác

| Chặng | Chỗ sai | Đã sửa thành |
|---|---|---|
| A1-12 | Coi **wieder-** là tiền tố không tách (sai với wiederkommen → wiedergekommen) | Chỉ *wiederholen* (ôn lại) không tách; wiederkommen tách |
| A2-07 | *als* = "một lần duy nhất", nhưng ví dụ *Als ich Kind war* là một giai đoạn | als = một lần **hoặc một giai đoạn** trong quá khứ (khớp với bài B1-01) |
| B1-08 | Genitiv: "einer, meiner (giống cái, số nhiều)": *ein* không có số nhiều | einer, meiner (giống cái); số nhiều chỉ có meiner, keiner |
| B1-12 | "bis sau phủ định = trước khi" (*Du darfst nicht spielen, bis du fertig bist*): cách nói vùng miền, không chuẩn | bis sau warten/bleiben; "không được … trước khi" nói bằng *erst wenn* |
| B2-03 | Ví dụ "thêm -s ở Genitiv" có *des Campus*, nhưng Campus không thêm -s | Thay ví dụ, ghi chú ngoại lệ từ mượn |
| B2-05 | Hội thoại dùng *die Länder hätten* mà bài chưa giải thích | Thêm quy tắc: Konj. I trùng Präsens thì dùng Konj. II |
| B2-09 | "Động từ chia theo danh từ phân số" nói như luật cứng | Ghi rõ: số ít là chuẩn, nhưng số nhiều theo nghĩa cũng được chấp nhận |
| B2-12 | Bảng: *zur Kenntnis nehmen* ≈ *wahrnehmen* (wahrnehmen = nhận thấy) | ≈ *registrieren* |

### Bài tập có hai đáp án đúng hoặc câu sai ngữ pháp

| Chặng | Câu | Vấn đề | Đã sửa |
|---|---|---|---|
| A1-09 | Um zehn Uhr ist der Bus fast ___ (leer/voll) | Cả hai đều hợp lý | Thêm ngữ cảnh "Um acht Uhr ist der Bus voll." |
| A1-10 | Sie haben Fieber. Sie ___ nicht arbeiten (dürfen/müssen) | *müssen nicht* cũng hợp nghĩa | Thêm "Die Ärztin sagt: … das ist verboten" |
| A2-08 | (7.) siebte / **siebente** / siebenste | *siebente* là biến thể đúng (Duden) | Đổi phương án nhiễu thành *siebene*, *siebenste* (2 câu) |
| A2-10 | ___ ärgerst du dich? (Worüber/**Über was**) | *Über was* là khẩu ngữ phổ biến | Đổi nhiễu thành *Woran* |
| B1-05 | Das **Konto** wird von meinem Vater bezahlt | Vô nghĩa | *Die Miete* wird … |
| B1-06 | desto ___ Übergewicht (mehr riskiert man) | Câu ghép ra sai trật tự | desto ___ (höher ist das Risiko) |
| B1-11 | ohne **den Preis** zu fragen | Phải là *fragen nach* | ohne nach dem Preis zu fragen |
| B1-12 | ___ Montag funktioniert das Internet nicht (Seit/Bis) | *Bis Montag* cũng đúng | Das Internet funktioniert **schon** ___ Montag nicht |
| B1-12 | Du darfst nicht gehen, ___ das Programm installiert ist | Theo cách dùng không chuẩn ở trên | Du musst warten, ___ … |
| B2-05 | der Gletscher werde in 30 Jahren **verschwunden** | Thiếu *sein* | … verschwinden |
| B2-06 | Die Patienten werden schon **geschlafen haben** (đèn đã tắt) | Sai nghĩa (= đã ngủ xong) | … schon eingeschlafen sein |
| B2-09 | Ein Drittel der Befragten ___ (ist/**sind**), Die Hälfte der Teilnehmer ___ (war/**waren**), Ein Viertel der Befragten ___ | Số nhiều cũng được Duden chấp nhận | Đổi sang danh từ số ít (der Fläche, des Geldes); câu dịch chấp nhận thêm *fahren* |
| B2-11 | So ist das Leben ___ (eben/mal/**doch**) | *doch* cũng dùng được | Đổi nhiễu thành *denn* |

### Câu tự nhiên hơn, chính tả, sự kiện

| Chặng | Trước | Sau |
|---|---|---|
| A2-01 | Ich war spät und bin schnell gefahren. | Ich war **spät dran** … (thêm chú giải) |
| B1-02 | eine Prüfung, **auf** die ich lernen musste | … **für** die … |
| B2-02 | Ist **der Betriebsrat** heute geöffnet? | Ist **das Büro des Betriebsrats** … |
| B2-03 | Teil den Stoff auf, **sodass** … (ý mục đích) | Teil den Stoff **so** auf, **dass** … |
| B2-04 | ging/geht **Pleite**, Pleite gehen | pleite, pleitegehen (cả gói từ) |
| B2-04 | Je nachdem, wie viel es kostet, kaufe ich das teure Modell. | … das teure **oder das billige** Modell. |
| B2-08 | "Những năm 70 Tây Đức nhận thuyền nhân, còn DDR nhận lao động hợp đồng" | Thuyền nhân từ 1978; lao động hợp đồng chủ yếu thập niên 80 |
| B2-09 | Hội thoại: **Aufgrund** dieser Methode könnte man … heilen | **Mithilfe** … (aufgrund nêu nguyên nhân, không nêu phương tiện) |
| B2-09 | Bài đọc thiếu dấu cách "weiblich.Bei" | Đã thêm |
| B2-10 | Die Opposition … **Sie fordern** | Sie **fordert** |

### Các chặng không có lỗi

A1-01 … A1-08, A1-11; A2-02 … A2-06, A2-09, A2-11, A2-12; B1-01, B1-03, B1-04, B1-07, B1-09, B1-10, B1-13; B2-01, B2-07, B2-13.

## Kiểm tra sau khi sửa

`npm test` (gồm bộ kiểm cấu trúc bài học: số bài tập, tỉ lệ từ đã học trong hội thoại ≥ 90 %, độ dài bài đọc…) xanh, cùng typecheck, lint, build.
