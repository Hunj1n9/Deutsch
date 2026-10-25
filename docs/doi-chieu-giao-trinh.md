# Đối chiếu ngữ pháp của khóa học với Netzwerk neu (A1–B1) và Aspekte neu (B2)

Ngày: 2026-10-25. Làm sau khi xong M15 (đủ 50 chặng, 150 bài), theo yêu cầu người dùng.

## Nguồn và cách làm

- **Netzwerk neu A1, A2, B1** (Klett, 2019–2021): mục lục Kursbuch do Thư viện Quốc gia Đức (DNB) quét và công khai: [A1 tập 1](https://d-nb.info/1186401486/04), [A1.2](https://d-nb.info/1183131631/04), [A2](https://d-nb.info/1207098051/04), [B1 tập 1](https://d-nb.info/1230489738/04), [B1.2](https://d-nb.info/1228099243/04).
- **Aspekte neu B2** (Klett): [mục lục Lehrbuch](https://www.klett-sprachen.de/downloads/5861/lehrbuch-inhaltsverzeichnis-aspekte-neu-b2/pdf) trên trang của nhà xuất bản.
- Chỉ dùng **tên chủ đề và tên điểm ngữ pháp** trong mục lục để so độ phủ. Không có nội dung sách (bài khóa, bài tập, danh sách từ) nào được đưa vào repo.
- Phía app: `data/roadmap.ts` (điểm ngữ pháp từng chặng) và tìm trong `data/lessons/*.ts` để biết một điểm có được dạy thật hay chỉ xuất hiện trong câu ví dụ.
- Bài này chỉ so **ngữ pháp**. Từ vựng đã so với danh sách Goethe ở `docs/doi-chieu-goethe.md`.

## Kết quả tổng

Mục lục liệt kê 46 điểm ngữ pháp ở Netzwerk neu A1, 30 ở A2, 34 ở B1 và 20 ở Aspekte neu B2 (một điểm có thể gồm vài dạng nhỏ). Đối chiếu từng điểm với bài của app:

- **Phần lớn khớp**: hầu hết điểm của giáo trình có bài ở cùng cấp hoặc sớm hơn trong app.
- **Chưa có bài**: 16 điểm, liệt kê ở bảng dưới (A1: 4, A2: 2, B1: 4, B2: 6). (Bản đầu ghi 17; điểm "werden làm động từ chính" thật ra đã có ở A2-12 và B1-09, xem `doi-chieu-ngu-phap.md`.)
- **Có nhưng dạy muộn hơn**: 7 điểm, phần lớn chênh một cấp.
- **App dạy thêm** vài điểm B2 mà Aspekte neu B2 không có (Futur II, động từ khuyết thiếu chủ quan, Gerundiv, sofern/insofern, câu điều kiện không có wenn); đây là các điểm Aspekte neu để sang C1, giữ lại có lợi cho TestDaF.

Đánh giá "khớp" là đối chiếu tay theo tên điểm ngữ pháp, không phải đếm tự động.

## Điểm app chưa có

| Cấp | Điểm ngữ pháp (giáo trình) | Tình trạng trong app | Mức ưu tiên |
|---|---|---|---|
| A1 | Giới từ đi Akkusativ: für, ohne, durch, gegen, um | Không có bài; chỉ gặp trong cụm động từ + giới từ ở A2-10 | Cao |
| A1 | Giới từ thời gian + Dativ: vor, nach, seit (vor einer Woche, seit zwei Jahren) | Không có điểm riêng (trùng phát hiện ở `doi-chieu-goethe.md`) | Cao |
| A1 | Từ để hỏi Wen? Wem? | Chỉ lướt ở A2-09 | Trung bình |
| A1 | man (người ta) | Chỉ dạy kỹ ở B2-08 | Trung bình |
| A2 | Was für ein(e)? | Không có | Trung bình |
| A2 | Possessivartikel im Dativ (mit meinem Bruder) | Chỉ luyện gián tiếp qua bài Dativ | Thấp |
| B1 | brauchen + zu + Infinitiv (Du brauchst nicht zu kommen) | Không có | Trung bình |
| B1 | Nebensatz mit da (vì, đứng đầu câu) | Không có | Thấp |
| B1 | So sánh hơn/nhất trước danh từ (der schnellste Zug, ein größeres Auto) | Chỉ có am schnellsten (A2-12) | Cao |
| B1 | irgendein / irgendwelche | Chỉ có trong từ vựng | Thấp |
| B2 | Trật tự trong câu (Mittelfeld: TeKaMoLo, đại từ trước danh từ) | Không có | Cao |
| B2 | Phủ định nâng cao (vị trí của nicht, tiền tố un-/miss-, hậu tố -los/-frei) | Chỉ có vị trí nicht ở A1-07 | Trung bình |
| B2 | Từ es (es làm chủ ngữ giả, es ở vị trí 1, es + câu dass) | Không có | Cao |
| B2 | Liên kết văn bản (từ chỉ quay lại: dies-, deren, darauf …) | Mới lướt ở B2-13 | Trung bình |
| B2 | Modalsätze mit dadurch, dass | Chỉ có indem (B2-03) | Thấp |
| B2 | Konnektoren (an)statt dass, ohne dass | Chỉ có dạng zu + Infinitiv (B1-11) | Thấp |

## Điểm app dạy muộn hơn giáo trình

Phần lớn là chênh một cấp; không sai, nhưng người học song song với Netzwerk neu sẽ gặp trong sách trước khi app dạy.

| Điểm | Netzwerk neu | App |
|---|---|---|
| Personalpronomen im Dativ (mir, dir) | A1 ch. 11 | A2-09 |
| Partizip II của động từ tách / không tách | A1 ch. 11 | A2-01 |
| Nebensatz mit als / wenn (quá khứ) | A2 ch. 10 | B1-01 |
| Genitiv với tên riêng (Annas Buch) | A2 ch. 1 | B1-08 |
| Indefinitpronomen (einer, keiner, jemand) | A2 ch. 12, B1 ch. 11 | B2-08 |
| Relativsatz mit was und wo | B1 ch. 11 | B2-04 |
| Wechselpräpositionen đầy đủ | A1 ch. 9 | A2-02 |

## Thứ tự và chủ đề

- Chủ đề các chặng của app (chào hỏi, gia đình, thành phố, ăn uống, công việc, sức khỏe, du lịch, môi trường…) phủ gần hết chủ đề chương của Netzwerk neu, dù thứ tự khác. Không có chủ đề lớn nào của giáo trình bị thiếu.
- Netzwerk neu dạy Perfekt ở A1 ch. 10, app ở A1-09: tương đương.
- Netzwerk neu đưa Konjunktiv II (könnte, sollte) vào A2 rải rác ở ba chương; app gom ở A2-11: tương đương.

## Đề xuất (cần duyệt trước khi làm)

Hiện mỗi chặng có đúng 3 điểm ngữ pháp, mỗi điểm một bài (SPEC F11). Có hai cách bù chỗ thiếu:

1. **Thêm một đoạn giải thích vào bài có sẵn** khi điểm thiếu gần với điểm của bài. Ví dụ: giới từ đi Akkusativ vào bài Akkusativ A1-05, so sánh trước danh từ vào bài đuôi tính từ B1-05, dadurch, dass vào bài indem B2-03. Cách này không đổi cấu trúc nhưng bài sẽ dài hơn, và đoạn đó dùng chung `rule_key` của bài.
2. **Thêm "bài bổ sung" thứ 4** ở một số chặng cho các điểm ưu tiên cao: giới từ Akkusativ, giới từ thời gian + Dativ, so sánh trước danh từ, trật tự Mittelfeld, từ es. Cách này phải sửa SPEC (F11: "mỗi điểm ngữ pháp của chặng một bài"; bộ kiểm "đúng 3 điểm") và `data/roadmap.ts`.

Khuyến nghị: cách 2 cho 5 điểm ưu tiên cao, cách 1 cho các điểm trung bình và thấp. Làm lần lượt A1 → B2, để người học đang ở A1 được lợi trước.
