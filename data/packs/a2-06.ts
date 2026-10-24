// A2 · 06 Nghề nghiệp. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Stelle|die|-n|vị trí việc làm|Ich suche eine {Stelle} als Krankenpflegerin.|Tôi tìm việc làm y tá.|
n|Bewerbung|die|-en|đơn xin việc|Ich schreibe eine {Bewerbung}.|Tôi viết đơn xin việc.|
n|Lebenslauf|der|¨-e|sơ yếu lý lịch|Schicken Sie uns Ihren {Lebenslauf}.|Hãy gửi sơ yếu lý lịch cho chúng tôi.|
n|Vorstellungsgespräch|das|-e|buổi phỏng vấn|Morgen habe ich ein {Vorstellungsgespräch}.|Ngày mai tôi có buổi phỏng vấn.|
n|Erfahrung|die|-en|kinh nghiệm|Haben Sie {Erfahrung} im Verkauf?|Ông/bà có kinh nghiệm bán hàng không?|
n|Gehalt|das|¨-er|lương (tháng)|Das {Gehalt} ist gut.|Lương tốt.|
n|Arbeitszeit|die|-en|giờ làm việc|Die {Arbeitszeiten} sind flexibel.|Giờ làm việc linh hoạt.|
n|Teilzeit|die||bán thời gian|Sie arbeitet in {Teilzeit}.|Cô ấy làm bán thời gian.|Ngược lại: Vollzeit.
n|Vollzeit|die||toàn thời gian|Ich suche eine Stelle in {Vollzeit}.|Tôi tìm việc toàn thời gian.|
n|Schicht|die|-en|ca làm|Diese Woche arbeite ich in der späten {Schicht}.|Tuần này tôi làm ca muộn.|Frühschicht, Spätschicht, Nachtschicht.
n|Betrieb|der|-e|xí nghiệp, công ty|Der {Betrieb} hat 200 Mitarbeiter.|Công ty có 200 nhân viên.|
n|Mitarbeiter|der|-|nhân viên (nam)|Wir suchen neue {Mitarbeiter}.|Chúng tôi tuyển nhân viên mới.|Nữ: die Mitarbeiterin.
n|Abteilungsleiter|der|-|trưởng phòng (nam)|Der {Abteilungsleiter} hat eine Besprechung.|Trưởng phòng đang họp.|
n|Besprechung|die|-en|cuộc họp|Die {Besprechung} dauert eine Stunde.|Cuộc họp kéo dài một tiếng.|
n|Aufgabenbereich|der|-e|phạm vi công việc|Was gehört zu Ihrem {Aufgabenbereich}?|Phạm vi công việc của ông/bà gồm những gì?|
n|Werkstatt|die|¨-en|xưởng sửa chữa|Das Auto ist in der {Werkstatt}.|Xe ô tô đang ở xưởng sửa.|
n|Handwerker|der|-|thợ thủ công (nam)|Der {Handwerker} kommt am Montag.|Thợ sẽ đến vào thứ Hai.|
n|Polizist|der|-en|cảnh sát (nam)|Der {Polizist} hilft den Touristen.|Anh cảnh sát giúp khách du lịch.|n-Deklination. Nữ: die Polizistin.
n|Friseur|der|-e|thợ cắt tóc (nam)|Ich gehe heute zum {Friseur}.|Hôm nay tôi đi cắt tóc.|Nữ: die Friseurin.
n|Mechaniker|der|-|thợ máy (nam)|Der {Mechaniker} repariert das Auto.|Thợ máy sửa ô tô.|
n|Erzieher|der|-|giáo viên mầm non (nam)|Er arbeitet als {Erzieher} im Kindergarten.|Anh ấy làm giáo viên mầm non.|Nữ: die Erzieherin.
n|Programmierer|der|-|lập trình viên (nam)|Mein Bruder ist {Programmierer}.|Anh tôi là lập trình viên.|
n|Rente|die|-n|lương hưu; sự nghỉ hưu|Mein Vater geht nächstes Jahr in {Rente}.|Năm sau bố tôi nghỉ hưu.|
n|Urlaubstag|der|-e|ngày phép|Ich habe noch fünf {Urlaubstage}.|Tôi còn năm ngày phép.|
v|sich bewerben|||nộp đơn xin việc|Ich {bewerbe} mich um die Stelle.|Tôi ứng tuyển vị trí này.|du bewirbst dich, er bewirbt sich, hat sich beworben; um + Akk
v|einstellen|||tuyển dụng|Die Firma {stellt} zehn Leute ein.|Công ty tuyển mười người.|Động từ tách: er stellt ein, hat eingestellt
v|kündigen|||nghỉ việc; sa thải|Er hat letzten Monat {gekündigt}.|Tháng trước anh ấy đã nghỉ việc.|er kündigt, hat gekündigt
v|leiten|||điều hành|Sie {leitet} ein kleines Team.|Cô ấy điều hành một nhóm nhỏ.|er leitet, hat geleitet
v|organisieren|||tổ chức|Ich {organisiere} die Besprechung.|Tôi tổ chức cuộc họp.|er organisiert, hat organisiert
v|erledigen|||hoàn thành, giải quyết|Ich muss noch viel {erledigen}.|Tôi còn phải làm xong nhiều việc.|er erledigt, hat erledigt
v|verkaufen|||bán|Wir {verkaufen} Möbel.|Chúng tôi bán đồ nội thất.|er verkauft, hat verkauft
v|beraten|||tư vấn|Sie {berät} Kunden am Telefon.|Cô ấy tư vấn khách hàng qua điện thoại.|du berätst, er berät, hat beraten
v|sich vorstellen|||tự giới thiệu|Darf ich {mich} kurz vorstellen?|Tôi có thể tự giới thiệu ngắn gọn không?|Động từ tách, phản thân: er stellt sich vor, hat sich vorgestellt
adj|selbstständig|||tự lập; tự kinh doanh|Mein Onkel ist {selbstständig}.|Chú tôi tự kinh doanh.|
adj|zuverlässig|||đáng tin cậy|Sie ist sehr {zuverlässig}.|Cô ấy rất đáng tin cậy.|
adj|flexibel|||linh hoạt|Die Arbeitszeiten sind {flexibel}.|Giờ làm linh hoạt.|
adj|freundlich|||thân thiện|Die Kollegen sind {freundlich}.|Đồng nghiệp thân thiện.|
adj|kreativ|||sáng tạo|Der Job ist sehr {kreativ}.|Công việc rất sáng tạo.|
adj|beruflich|||thuộc về nghề nghiệp|Ich bin {beruflich} oft unterwegs.|Vì công việc tôi thường đi công tác.|
adj|erfahren|||giàu kinh nghiệm|Wir suchen einen {erfahrenen} Koch.|Chúng tôi tìm một đầu bếp giàu kinh nghiệm.|
adv|unterwegs|||đang trên đường, đi xa|Ich bin den ganzen Tag {unterwegs}.|Tôi ở bên ngoài cả ngày.|
p|Ich interessiere mich für|||tôi quan tâm đến|{Ich interessiere mich für} Technik.|Tôi quan tâm đến kỹ thuật.|sich interessieren für + Akk
p|Spaß machen|||vui, thích|Die Arbeit {macht} mir Spaß.|Tôi thích công việc này.|Etwas macht mir Spaß.
conj|dass|||rằng|Ich glaube, {dass} die Stelle gut ist.|Tôi nghĩ rằng vị trí này tốt.|Câu phụ: động từ đứng cuối.
g|Câu với dass|||mệnh đề rằng|Ich hoffe, dass ich die Stelle {bekomme}.|Tôi hy vọng rằng tôi nhận được việc.|Thường sau: glauben, denken, hoffen, wissen, finden, sagen.
g|Präteritum của động từ khuyết thiếu|||musste, konnte, wollte, durfte, sollte|Gestern {musste} ich lange arbeiten.|Hôm qua tôi phải làm việc lâu.|Không có umlaut: müssen → musste, können → konnte, dürfen → durfte.
g|Đuôi tính từ không có mạo từ|||tính từ tự mang dấu hiệu giống|Wir suchen {erfahrene} Mitarbeiter.|Chúng tôi tìm nhân viên giàu kinh nghiệm.|Đuôi giống mạo từ xác định: guter Wein, frische Milch, kaltes Wasser.
g|als + nghề nghiệp|||làm việc với tư cách|Sie arbeitet {als} Ingenieurin.|Cô ấy làm kỹ sư.|Không dùng mạo từ sau als.
n|Lohn|der|¨-e|tiền công|Der {Lohn} wird am Monatsende gezahlt.|Tiền công được trả vào cuối tháng.|
n|Praktikum|das|Praktika|kỳ thực tập|Ich mache ein {Praktikum} bei einer Bank.|Tôi thực tập ở một ngân hàng.|
n|Arbeitsvertrag|der|¨-e|hợp đồng lao động|Lesen Sie den {Arbeitsvertrag} genau.|Hãy đọc kỹ hợp đồng lao động.|
n|Kantine|die|-n|căng tin|Mittags essen wir in der {Kantine}.|Buổi trưa chúng tôi ăn ở căng tin.|
v|pendeln|||đi làm xa (đi về hằng ngày)|Ich {pendle} jeden Tag nach Köln.|Ngày nào tôi cũng đi làm ở Köln.|er pendelt, ist gependelt
adj|befristet|||có thời hạn|Der Vertrag ist {befristet}.|Hợp đồng có thời hạn.|
p|Überstunden machen|||làm thêm giờ|Diese Woche muss ich {Überstunden machen}.|Tuần này tôi phải làm thêm giờ.|
`;
export default pack;
