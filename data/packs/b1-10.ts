// B1 · 10 Xã hội và chính trị. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Gesellschaft|die|-en|xã hội|Die {Gesellschaft} wird immer älter.|Xã hội ngày càng già đi.|
n|Politik|die||chính trị|Ich interessiere mich nicht für {Politik}.|Tôi không quan tâm đến chính trị.|
n|Politiker|der|-|chính trị gia (nam)|Der {Politiker} hält eine Rede.|Chính trị gia đọc diễn văn.|Nữ: die Politikerin.
n|Partei|die|-en|đảng|Welche {Partei} wählst du?|Bạn bầu cho đảng nào?|
n|Wahl|die|-en|cuộc bầu cử; sự lựa chọn|Die {Wahl} findet im September statt.|Cuộc bầu cử diễn ra vào tháng Chín.|
n|Bürger|der|-|công dân (nam)|Alle {Bürger} dürfen wählen.|Mọi công dân đều được bầu cử.|Nữ: die Bürgerin.
n|Staat|der|-en|nhà nước, quốc gia|Der {Staat} finanziert die Schulen.|Nhà nước tài trợ cho các trường học.|
n|Demokratie|die|-n|nền dân chủ|Deutschland ist eine {Demokratie}.|Đức là một nước dân chủ.|
n|Verfassung|die|-en|hiến pháp|Die {Verfassung} schützt die Grundrechte.|Hiến pháp bảo vệ các quyền cơ bản.|
n|Bundestag|der||Quốc hội Liên bang Đức|Der {Bundestag} hat das Gesetz beschlossen.|Quốc hội đã thông qua luật.|
n|Bundeskanzler|der|-|thủ tướng Liên bang|Der {Bundeskanzler} besucht Vietnam.|Thủ tướng Đức thăm Việt Nam.|Nữ: die Bundeskanzlerin.
n|Bundesland|das|¨-er|bang (Đức)|Deutschland hat 16 {Bundesländer}.|Đức có 16 bang.|
n|Gemeinde|die|-n|xã, cộng đồng địa phương|Die {Gemeinde} baut einen neuen Spielplatz.|Chính quyền địa phương xây sân chơi mới.|
n|Behörde|die|-n|cơ quan công quyền|Für den Antrag muss ich zur {Behörde}.|Để nộp đơn tôi phải đến cơ quan nhà nước.|
n|Amt|das|¨-er|cơ quan, sở|Ich muss aufs {Amt}.|Tôi phải lên sở.|
n|Antrag|der|¨-e|đơn đề nghị|Ich stelle einen {Antrag} auf Kindergeld.|Tôi làm đơn xin trợ cấp con cái.|einen Antrag stellen
n|Formular|das|-e|mẫu đơn|Bitte füllen Sie das {Formular} aus.|Xin điền vào mẫu đơn.|
n|Aufenthaltserlaubnis|die|-se|giấy phép cư trú|Meine {Aufenthaltserlaubnis} läuft bald ab.|Giấy phép cư trú của tôi sắp hết hạn.|
n|Staatsangehörigkeit|die|-en|quốc tịch|Welche {Staatsangehörigkeit} haben Sie?|Ông/bà mang quốc tịch nào?|
n|Gleichberechtigung|die||bình đẳng|Die {Gleichberechtigung} von Mann und Frau ist wichtig.|Bình đẳng nam nữ là điều quan trọng.|
n|Armut|die||sự nghèo đói|Die {Armut} in der Welt ist gesunken.|Nghèo đói trên thế giới đã giảm.|
n|Reichtum|der|¨-er|sự giàu có|Der {Reichtum} ist ungleich verteilt.|Sự giàu có phân bổ không đều.|
n|Ehrenamt|das|¨-er|công việc tình nguyện|Sie arbeitet im {Ehrenamt} für Flüchtlinge.|Cô ấy làm tình nguyện cho người tị nạn.|
n|Meinung|die|-en|ý kiến|Was ist deine {Meinung}?|Ý kiến của bạn là gì?|
n|Mehrheit|die|-en|đa số|Die {Mehrheit} ist dafür.|Đa số ủng hộ.|
n|Minderheit|die|-en|thiểu số|Die {Minderheit} hat auch Rechte.|Thiểu số cũng có quyền.|
n|Streik|der|-s|cuộc đình công|Wegen des {Streiks} fahren keine Züge.|Vì đình công nên tàu không chạy.|
n|Gewerkschaft|die|-en|công đoàn|Die {Gewerkschaft} fordert mehr Lohn.|Công đoàn đòi tăng lương.|
n|Frieden|der||hòa bình|Alle wünschen sich {Frieden}.|Ai cũng mong hòa bình.|
n|Krieg|der|-e|chiến tranh|Der {Krieg} dauerte viele Jahre.|Chiến tranh kéo dài nhiều năm.|
v|abstimmen|||biểu quyết|Wir {stimmen} morgen über das Projekt ab.|Ngày mai chúng ta biểu quyết về dự án.|Động từ tách: er stimmt ab, hat abgestimmt; über + Akk
v|beschließen|||quyết định, thông qua|Das Parlament hat das Gesetz {beschlossen}.|Quốc hội đã thông qua luật.|er beschließt, beschloss, hat beschlossen
v|fordern|||đòi hỏi|Die Bürger {fordern} mehr Sicherheit.|Người dân đòi hỏi an ninh hơn.|er fordert, hat gefordert
v|regieren|||cai trị, điều hành|Die Partei {regiert} seit vier Jahren.|Đảng này cầm quyền bốn năm nay.|er regiert, hat regiert
v|ausfüllen|||điền (đơn)|{Füllen} Sie das Formular bitte aus.|Xin điền vào mẫu đơn.|Động từ tách: er füllt aus, hat ausgefüllt
v|verlängern|||gia hạn|Ich muss mein Visum {verlängern}.|Tôi phải gia hạn visa.|er verlängert, hat verlängert
v|streiken|||đình công|Die Piloten {streiken} heute.|Hôm nay phi công đình công.|er streikt, hat gestreikt
v|diskutieren|||thảo luận|Wir {diskutieren} über die Zukunft.|Chúng tôi thảo luận về tương lai.|er diskutiert, hat diskutiert
v|sich einsetzen|||đấu tranh vì, vận động cho|Sie {setzt} sich für Kinderrechte ein.|Cô ấy đấu tranh vì quyền trẻ em.|Động từ tách: er setzt sich ein, hat sich eingesetzt; für + Akk
v|versprechen|||hứa|Der Politiker {verspricht} niedrigere Steuern.|Chính trị gia hứa giảm thuế.|du versprichst, er verspricht, versprach, hat versprochen
v|gelten|||có hiệu lực; được coi là|Die Regel {gilt} für alle.|Quy định áp dụng cho tất cả.|es gilt, galt, hat gegolten
adj|gerecht|||công bằng|Das ist nicht {gerecht}.|Như thế không công bằng.|
adj|ungerecht|||bất công|Die Verteilung ist {ungerecht}.|Sự phân chia bất công.|
adj|sozial|||xã hội; có tính xã hội|Sie arbeitet in einem {sozialen} Beruf.|Cô ấy làm một nghề xã hội.|
adj|demokratisch|||dân chủ|Die Wahl war {demokratisch}.|Cuộc bầu cử dân chủ.|
adj|staatlich|||nhà nước|Das ist eine {staatliche} Schule.|Đây là trường của nhà nước.|
adj|gleichberechtigt|||bình đẳng|Männer und Frauen sind {gleichberechtigt}.|Nam và nữ bình đẳng.|
adj|umstritten|||gây tranh cãi|Das neue Gesetz ist {umstritten}.|Luật mới gây tranh cãi.|
adj|wahlberechtigt|||có quyền bầu cử|Ab 18 ist man {wahlberechtigt}.|Từ 18 tuổi có quyền bầu cử.|
adj|ehrenamtlich|||tình nguyện|Er arbeitet {ehrenamtlich} im Verein.|Anh ấy làm tình nguyện ở hội.|
adj|friedlich|||hòa bình|Die Demonstration war {friedlich}.|Cuộc biểu tình diễn ra hòa bình.|
p|zur Wahl gehen|||đi bầu cử|Am Sonntag {gehe} ich zur Wahl.|Chủ nhật tôi đi bầu cử.|
p|einen Antrag stellen|||nộp đơn|Ich habe {einen Antrag gestellt}.|Tôi đã nộp đơn.|
p|sowohl … als auch|||vừa … vừa|Das betrifft {sowohl} Kinder als auch Erwachsene.|Điều này liên quan cả trẻ em lẫn người lớn.|
p|weder … noch|||không … cũng không|Ich bin {weder} dafür noch dagegen.|Tôi không ủng hộ cũng không phản đối.|
p|entweder … oder|||hoặc … hoặc|{Entweder} wir handeln jetzt oder nie.|Hoặc chúng ta hành động bây giờ, hoặc không bao giờ.|
g|Konjunktiv II quá khứ: hätte/wäre + Partizip II|||điều đã không xảy ra|Wenn ich das gewusst hätte, {wäre} ich gekommen.|Nếu biết điều đó thì tôi đã đến.|hätte/wäre + Partizip II; diễn tả hối tiếc, giả định trong quá khứ.
g|sowohl … als auch|||cả … lẫn|Sowohl die Regierung {als} auch die Opposition sind dafür.|Cả chính phủ lẫn phe đối lập đều ủng hộ.|Chủ ngữ kép → động từ số nhiều.
g|weder … noch|||không … cũng không|Er hat weder Zeit {noch} Geld.|Anh ấy không có thời gian cũng không có tiền.|Bản thân đã mang nghĩa phủ định, không thêm nicht.
g|entweder … oder|||hoặc … hoặc|Entweder du hilfst mir, {oder} ich mache es allein.|Hoặc bạn giúp tôi, hoặc tôi tự làm.|Sau oder trật tự câu bình thường.
n|Wahlkampf|der|¨-e|chiến dịch tranh cử|Im {Wahlkampf} machen alle Parteien Versprechungen.|Trong chiến dịch tranh cử các đảng đều hứa hẹn.|
n|Kandidat|der|-en|ứng cử viên (nam)|Der {Kandidat} hält eine Rede.|Ứng cử viên đọc diễn văn.|n-Deklination. Nữ: die Kandidatin.
n|Opposition|die|-en|phe đối lập|Die {Opposition} kritisiert die Regierung.|Phe đối lập chỉ trích chính phủ.|
n|Grundrecht|das|-e|quyền cơ bản|Die Würde des Menschen ist ein {Grundrecht}.|Nhân phẩm là một quyền cơ bản.|
n|Integration|die|-en|sự hòa nhập|Sprache ist wichtig für die {Integration}.|Ngôn ngữ quan trọng cho sự hòa nhập.|
n|Sozialhilfe|die||trợ cấp xã hội|Er lebt von {Sozialhilfe}.|Anh ấy sống nhờ trợ cấp xã hội.|
n|Kindergeld|das||trợ cấp con cái|Eltern bekommen {Kindergeld}.|Cha mẹ nhận trợ cấp con cái.|
n|Bürokratie|die|-n|thủ tục hành chính|Die {Bürokratie} in Deutschland ist kompliziert.|Thủ tục hành chính ở Đức phức tạp.|
n|Einbürgerung|die|-en|sự nhập quốc tịch|Für die {Einbürgerung} braucht man einen Sprachtest.|Để nhập quốc tịch cần thi tiếng.|
n|Demonstration|die|-en|cuộc biểu tình|An der {Demonstration} nahmen 5000 Menschen teil.|5000 người tham gia biểu tình.|
v|protestieren|||phản đối|Die Studenten {protestieren} gegen die Gebühren.|Sinh viên phản đối học phí.|er protestiert, hat protestiert; gegen + Akk
v|einführen|||ban hành, đưa vào|Die Regierung will eine neue Steuer {einführen}.|Chính phủ muốn đưa ra một loại thuế mới.|Động từ tách: er führt ein, hat eingeführt
v|abschaffen|||bãi bỏ|Die Gebühr wurde {abgeschafft}.|Khoản phí đã bị bãi bỏ.|Động từ tách: er schafft ab, hat abgeschafft
v|sich beteiligen|||tham gia|Viele Bürger {beteiligen} sich an der Wahl.|Nhiều công dân tham gia bầu cử.|er beteiligt sich, hat sich beteiligt; an + Dativ
v|erhöhen|||tăng|Die Steuern werden {erhöht}.|Thuế sẽ tăng.|er erhöht, hat erhöht
v|senken|||giảm|Die Partei will die Steuern {senken}.|Đảng muốn giảm thuế.|er senkt, hat gesenkt
adj|konservativ|||bảo thủ|Er hat {konservative} Ansichten.|Ông ấy có quan điểm bảo thủ.|
adj|liberal|||tự do, phóng khoáng|Die Stadt ist sehr {liberal}.|Thành phố rất phóng khoáng.|
adj|bürokratisch|||quan liêu|Das Verfahren ist sehr {bürokratisch}.|Thủ tục rất quan liêu.|
p|eine Entscheidung treffen|||đưa ra quyết định|Die Regierung muss {eine Entscheidung treffen}.|Chính phủ phải đưa ra quyết định.|
p|in Kraft treten|||có hiệu lực|Das Gesetz {tritt} im Januar in Kraft.|Luật có hiệu lực vào tháng Một.|
`;
export default pack;
