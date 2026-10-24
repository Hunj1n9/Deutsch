# Đối chiếu từ vựng và ngữ pháp A1–B1 với danh sách Goethe

Ngày 2026-10-25. Chỉ đối chiếu, chưa sửa nội dung app.

## Nguồn và cách làm

- Ba danh sách từ chính thức của Goethe-Institut (tải từ goethe.de, không lưu vào repo):
  - `A1_SD1_Wortliste_02.pdf` (Start Deutsch 1)
  - `Goethe-Zertifikat_A2_Wortliste.pdf`
  - `Goethe-Zertifikat_B1_Wortliste.pdf`
- Headword (từ gốc) được tách tự động từ PDF: cả phần danh sách theo chủ đề (số, ngày, màu, quốc gia…) lẫn phần xếp theo chữ cái. Còn sót khoảng 2–5% rác (mảnh từ bị ngắt dòng, dạng chia động từ), nên các con số là **ước lượng**.
- **"Có mục"** nghĩa là từ đó là một mục trong gói từ của app (được đưa vào ôn FSRS) ở cấp đó hoặc thấp hơn. Từ chỉ xuất hiện trong câu ví dụ, hội thoại thì **không** tính là có mục.
- Danh sách Goethe là **cộng dồn**: danh sách B1 gồm cả từ A1, A2. Danh sách cũng có từ riêng của Áo và Thụy Sĩ (Paradeiser, Velo…), mấy từ này ít quan trọng với người học tiếng Đức chuẩn của Đức.

## Kết quả tổng

| Cấp | Từ Goethe | Có mục ở cấp đó hoặc thấp hơn | Chỉ có mục ở cấp sau | Không có mục nào | Trong số đó: không xuất hiện ở đâu trong app |
|---|---|---|---|---|---|
| A1 | ~734 | 402 (55%) | 155 | 177 | 80 |
| A2 | ~1155 | 696 (60%) | 123 | 336 | 176 |
| B1 | ~2760 | 1331 (48%) | 137 | 1292 | 975 |

Chiều ngược lại (mục từ của app so với Goethe):

| Cấp app | Số mục từ (không tính cụm) | Goethe xếp ở cấp cao hơn | Không có trong cả 3 danh sách |
|---|---|---|---|
| A1 | 566 | 166 | 28 |
| A2 | 552 | 161 | 140 |
| B1 | 932 | — | 541 |

**Đọc kết quả:**

- Danh sách Goethe A1 rất tối thiểu: Fenster, kalt, Onkel, nett chỉ có trong câu ví dụ, không phải headword. Nên việc app dạy sớm 166 từ ở A1 **không phải lỗi**; đó là những từ giáo trình A1 nào cũng dạy.
- Vấn đề thật là chiều kia: **khoảng một nửa từ Goethe yêu cầu chưa thành mục để ôn** ở đúng cấp.
- Ở B1, app có 541 mục ngoài danh sách Goethe (Erderwärmung, Treibhausgas, Wegwerfgesellschaft…). Các từ này hữu ích cho chủ đề B1 và TestDaF, nhưng chiếm chỗ của nhiều từ đời thường mà Goethe coi là bắt buộc.

## Phát hiện chính

### 1. A1 thiếu nhóm từ "giấy tờ, nơi công cộng"

Bài thi Goethe A1 có phần điền mẫu đơn và nghe thông báo, nhưng app không có các từ sau ở đâu cả:

- **Điền đơn:** Familienname, Familienstand, Geburtsort, Geburtsjahr, männlich, weiblich, Anrede, Absender, Empfänger, Postleitzahl, Vorwahl, Buchstabe
- **Nhà ga, sân bay, tòa nhà:** Ausgang, Eingang, Auskunft, Ansage, Durchsage, Anschluss, Bahnsteig, Schalter, S-Bahn, Autobahn, Abflug, abfliegen, besetzt, Toilette, drücken, Eintritt, Vorsicht, Schild
- **Đồ vật, ăn uống:** Briefmarke, Bleistift, Kugelschreiber, Birne, Schinken, Pommes, Kiosk, Zigarette
- **Thời gian, phương hướng:** Sekunde, Vormittag, Wochentag, Norden
- **Khác:** baden, holen, riechen, enden, vermieten, eilig, breit, tot, Ehemann, Gruß, Mitte, Ordnung, (auf) Wiederhören, zurzeit

### 2. Từ rất cơ bản chỉ thành mục ở cấp sau, hoặc không bao giờ

- **Động từ cơ bản không có mục A1** (chỉ gặp trong bài): geben, sehen, bringen, bekommen, stehen, sitzen, danken, bestellen, zahlen. Các từ này chỉ thành mục ở A2.
- **Tháng:** chỉ 5/12 tháng là mục từ (Januar, Februar, Mai, Juli, Dezember). Các tháng còn lại chỉ xuất hiện trong bài.
- **Không là mục ở cấp nào:** Telefon, Hunger, Durst, Mensch, Oma, Opa, Brief, Hilfe, Ende, Mädchen, Ausweis.
- **Goethe xếp A1 nhưng app dạy ở B1/B2:** Formular, ausfüllen, unterschreiben (B1), Unterschrift (B2), Konto, Information, Leute, leise, später, vielleicht, glauben, ohne (B1), Licht, schließen, gegen (B2).
- **Goethe xếp A2 nhưng app dạy ở B1/B2:** Meinung, meinen, einverstanden, Vorschlag, Bescheid, beschreiben, berichten, diskutieren, erlauben, verboten, Vertrag, Paket, Ruhe, stören, sicher, wählen (B1); Kontakt, prüfen, verschieben, vereinbaren, Unterschied, deutlich (B2).

### 3. A2 thiếu từ đời sống

- **Thời gian:** morgens, vormittags, nachmittags, montags … sonntags (chỉ một số xuất hiện trong bài), übermorgen
- **Sinh hoạt:** backen, baden, basteln, auspacken, einpacken, aufmachen, zumachen, wecken, träumen, Traum, renovieren, Garage, Geschirr, Handtuch, Seife, Schere, Zettel, Notiz, notieren
- **Tính từ, trạng từ:** blöd, blond, egal, komisch, furchtbar, romantisch, sportlich, mindestens, drüben, nirgends, wahr
- **Khác:** Ahnung, Ding, Sache, Situation, Menge, Rest, Witz, Lüge, Mannschaft, Fahrplan, Ermäßigung, Führerschein, Hauptstadt, Hamburger, Jeans, Pferd, Schwein, Rind, Rose

### 4. B1 chỉ phủ khoảng 48%

Các nhóm thiếu lớn:

- **Từ nối, trạng từ thường dùng:** jedoch, nämlich, sowieso, mittlerweile, neulich, eventuell, ungefähr, voraussichtlich, vorhin, wenigstens, zumindest, ebenfalls, solange, sobald, weshalb, wieso, meinetwegen, selbstverständlich
- **Động từ đời thường:** begleiten, begrüßen, behalten, beruhigen, besitzen, besorgen, empfangen, entfernen, erfüllen, erschrecken, geschehen, gelingen, genügen, schweigen, verhindern, verwechseln, verwenden, unterscheiden, umgehen, überreden, zubereiten
- **Danh từ:** Absicht, Änderung, Anleitung, Ausnahme, Auswahl, Bedeutung, Bereich, Chance, Detail, Einfluss, Empfehlung, Gelegenheit, Inhalt, Mitglied, Neuigkeit, Schwierigkeit, Unglück, Verwaltung, Wirklichkeit, Zweck
- **Ngôn ngữ đề thi Goethe:** Aussage, zuordnen, markieren, unterstreichen, Antwortbogen, Rückmeldung
- **Nhóm từ theo chủ đề:** con vật (Pferd, Maus, Schaf, Schwein…), màu (braun, lila, rosa, orange), phương hướng (Osten, Westen), quốc tịch và tính từ quốc gia
- **Biến thể Áo/Thụy Sĩ** (Paradeiser, Velo, Matura, Trottoir…): ưu tiên thấp

## Ngữ pháp

Các file Goethe ở trên **không có danh mục ngữ pháp**. Danh mục chính thức nằm trong *Profile deutsch* (sách trả phí, chưa đối chiếu được). Phần này so với tiến trình ngữ pháp theo CEFR thường gặp trong giáo trình, **dựa trên hiểu biết của Claude**, cần kiểm lại khi có nguồn chính thức.

**Nhận xét chung:** 111 điểm ngữ pháp A1–B1 của app khớp tốt với tiến trình thông thường. Phần B1 đặc biệt đầy đủ: Plusquamperfekt, bị động các thì, mệnh đề quan hệ, liên từ hai vế, Konjunktiv II quá khứ, n-Deklination, Futur I, lassen…

**Điểm thiếu hoặc mỏng:**

| Điểm ngữ pháp | Thường học ở | Tình trạng trong app |
|---|---|---|
| Giới từ thời gian vor, nach, seit, ab, bis + Dativ | A1–A2 | Có mục từ, nhưng chưa có điểm ngữ pháp riêng |
| Đại từ bất định man, jemand, niemand, etwas, nichts, alle | A1–A2 | Chưa có điểm riêng; jemand/niemand chỉ xuất hiện từ B1 |
| werden làm động từ chính ("trở thành") | A2 | Chỉ nhắc lướt; dạy kỹ ở B1-09 |
| Könnten Sie …? / Dürfte ich …? để đề nghị lịch sự | A2 | könnte dạy ở A2-11 (giả định); cách dùng lịch sự đến B1-04 mới dạy |
| Mệnh đề quan hệ với was, wer (alles, was …; Wer …, der …) | B1 | Chưa có |
| Tiểu từ tình thái doch, mal, ja, eben | A2–B1 | Chỉ có trong hội thoại, không giải thích |
| Động từ đi với nguyên mẫu không zu (hören, sehen, gehen + Infinitiv) | B1 | Chỉ nhắc trong bài zu-Infinitiv |
| Genitiv với tên riêng (Annas Buch) | A2 | Dạy ở B1-08 |

## Đã xử lý (2026-10-25): phát hiện 1 và 2

Đã bổ sung **123 mục** vào gói A1–A2 và gán vào bài học có chủ đề phù hợp:

- **84 mục mới** (chưa có ở cấp nào), ví dụ:
  - giấy tờ (A1-01, A1-02);
  - bưu điện và phương hướng (A1-08);
  - nhà ga, sân bay (A1-09);
  - đủ 12 tháng (A1-03-3);
  - Telefon, Hunger, Durst, Mensch, Oma, Opa, Brief, Hilfe, Ausweis;
  - Kontakt, prüfen (A2).
- **39 mục chuyển** về cấp sớm hơn (gói không được trùng nên chuyển chứ không chép):
  - 9 động từ cơ bản từ A2 về A1 (geben, sehen, bringen…);
  - 25 mục từ B1 (Formular, Konto, Meinung, Ruhe…);
  - 5 mục từ B2 (Unterschrift, Unterschied, deutlich…).
- **Câu ví dụ** của mục chuyển từ B1/B2 được viết lại cho đúng cấp.
- **Không thêm vào bài A1-01-1**, vì người học đã qua bước từ vựng của bài này.
- **Số mục gói:** A1 665 → 766, A2 648 → 661, B1 1084 → 1059, B2 → 1276.

Chạy lại đối chiếu sau khi sửa:

| Cấp | Trước | Sau |
|---|---|---|
| A1 | 55% | 68% |
| A2 | 60% | 67% |
| B1 | 48% | 51% |

Từ A1 còn thiếu chủ yếu là số đếm, từ chức năng (bei, für, was…) và vài từ ít dùng (Fax, Disco, Prospekt).

## Đề xuất còn lại (cần duyệt trước khi làm)

1. ~~**Bổ sung mục từ cho A1–A2, ưu tiên phát hiện 1 và 2.**~~ Đã làm, xem mục trên. Phát hiện 3 (từ đời sống A2) chưa làm. Khoảng 150–250 mục: từ giấy tờ, nơi công cộng, động từ cơ bản, đủ 12 tháng. Đây là sửa dữ liệu gói và bài học, không phải tính năng mới, nhưng mỗi mục mới phải được gán vào một bài.
2. **Cân lại gói B1:** thêm các nhóm ở phát hiện 4, có thể bớt bớt từ chuyên đề. Làm sau khi xong M15.
3. **Thêm một số điểm ngữ pháp còn thiếu** trong bảng trên. Việc này thay đổi số điểm ngữ pháp mỗi chặng (hiện cố định 3), nên cần quyết định trong `SPEC.md`.
4. **Giữ script đối chiếu** để chạy lại sau mỗi lần sửa gói. Hiện script ở thư mục tạm, chưa đưa vào repo vì cần các file PDF.
