// B1 · 04 Đi làm và ứng tuyển. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Stellenanzeige|die|-n|tin tuyển dụng|Ich habe eine interessante {Stellenanzeige} gefunden.|Tôi tìm thấy một tin tuyển dụng thú vị.|
n|Arbeitgeber|der|-|người sử dụng lao động|Mein {Arbeitgeber} zahlt pünktlich.|Chủ của tôi trả lương đúng hạn.|
n|Arbeitnehmer|der|-|người lao động|{Arbeitnehmer} haben Anspruch auf Urlaub.|Người lao động có quyền nghỉ phép.|
n|Bewerber|der|-|ứng viên (nam)|Es gibt viele {Bewerber} für die Stelle.|Có nhiều ứng viên cho vị trí này.|Nữ: die Bewerberin.
n|Anschreiben|das|-|thư xin việc|Das {Anschreiben} sollte nicht zu lang sein.|Thư xin việc không nên quá dài.|
n|Unterlagen|die||hồ sơ, giấy tờ|Bitte schicken Sie Ihre {Unterlagen} per E-Mail.|Vui lòng gửi hồ sơ qua email.|Chỉ dùng số nhiều.
n|Qualifikation|die|-en|trình độ chuyên môn|Welche {Qualifikationen} haben Sie?|Ông/bà có trình độ chuyên môn gì?|
n|Fähigkeit|die|-en|năng lực, khả năng|Teamfähigkeit ist eine wichtige {Fähigkeit}.|Khả năng làm việc nhóm là một năng lực quan trọng.|
n|Stärke|die|-n|điểm mạnh|Was sind Ihre {Stärken}?|Điểm mạnh của ông/bà là gì?|
n|Schwäche|die|-n|điểm yếu|Ungeduld ist meine größte {Schwäche}.|Thiếu kiên nhẫn là điểm yếu lớn nhất của tôi.|
n|Berufserfahrung|die|-en|kinh nghiệm làm việc|Ich habe drei Jahre {Berufserfahrung}.|Tôi có ba năm kinh nghiệm làm việc.|
n|Probezeit|die|-en|thời gian thử việc|Die {Probezeit} dauert sechs Monate.|Thời gian thử việc kéo dài sáu tháng.|
n|Vertrag|der|¨-e|hợp đồng|Ich unterschreibe den {Vertrag}.|Tôi ký hợp đồng.|
n|Kündigung|die|-en|thư thôi việc; sự sa thải|Er hat die {Kündigung} bekommen.|Anh ấy bị sa thải.|
n|Arbeitsplatz|der|¨-e|chỗ làm|Mein {Arbeitsplatz} ist modern.|Chỗ làm của tôi hiện đại.|
n|Arbeitslosigkeit|die||tình trạng thất nghiệp|Die {Arbeitslosigkeit} ist gesunken.|Tỷ lệ thất nghiệp đã giảm.|
n|Karriere|die|-n|sự nghiệp|Sie will {Karriere} machen.|Cô ấy muốn thăng tiến sự nghiệp.|
n|Beförderung|die|-en|sự thăng chức|Er hofft auf eine {Beförderung}.|Anh ấy hy vọng được thăng chức.|
n|Gehaltserhöhung|die|-en|sự tăng lương|Ich möchte um eine {Gehaltserhöhung} bitten.|Tôi muốn xin tăng lương.|
n|Team|das|-s|nhóm|Unser {Team} besteht aus acht Personen.|Nhóm chúng tôi có tám người.|
n|Personalabteilung|die|-en|phòng nhân sự|Die {Personalabteilung} meldet sich bei Ihnen.|Phòng nhân sự sẽ liên lạc với ông/bà.|
n|Branche|die|-n|ngành nghề|In welcher {Branche} arbeiten Sie?|Ông/bà làm trong ngành nào?|
n|Unternehmen|das|-|doanh nghiệp|Das {Unternehmen} hat Filialen in ganz Europa.|Doanh nghiệp có chi nhánh khắp châu Âu.|
n|Voraussetzung|die|-en|điều kiện tiên quyết|Gute Deutschkenntnisse sind eine {Voraussetzung}.|Tiếng Đức tốt là điều kiện tiên quyết.|
n|Zusage|die|-n|thư nhận (việc), sự đồng ý|Ich habe eine {Zusage} bekommen!|Tôi đã nhận được thư mời làm việc!|
n|Absage|die|-n|thư từ chối|Leider habe ich eine {Absage} bekommen.|Tiếc là tôi bị từ chối.|
n|Selbstständigkeit|die||sự tự lập; tự kinh doanh|Der Schritt in die {Selbstständigkeit} war schwer.|Bước ra tự kinh doanh rất khó khăn.|
v|unterschreiben|||ký tên|Bitte {unterschreiben} Sie hier.|Xin ký tên ở đây.|er unterschreibt, unterschrieb, hat unterschrieben
v|einreichen|||nộp (hồ sơ)|Ich habe meine Bewerbung online {eingereicht}.|Tôi đã nộp đơn trực tuyến.|Động từ tách: er reicht ein, hat eingereicht
v|überzeugen|||thuyết phục|Ihre Bewerbung hat uns {überzeugt}.|Hồ sơ của ông/bà đã thuyết phục chúng tôi.|er überzeugt, hat überzeugt
v|verhandeln|||đàm phán|Wir {verhandeln} über das Gehalt.|Chúng tôi đàm phán về lương.|er verhandelt, hat verhandelt
v|erwarten|||mong đợi|Was {erwarten} Sie von uns?|Ông/bà mong đợi gì ở chúng tôi?|er erwartet, hat erwartet
v|anbieten|||đề nghị, cung cấp|Wir {bieten} Ihnen einen sicheren Arbeitsplatz.|Chúng tôi cung cấp cho ông/bà chỗ làm ổn định.|Động từ tách: er bietet an, bot an, hat angeboten
v|zuständig sein|||chịu trách nhiệm|Wer {ist} für die Bewerbungen zuständig?|Ai phụ trách hồ sơ ứng tuyển?|zuständig für + Akk
v|sich weiterbilden|||học nâng cao|Ich möchte {mich} weiterbilden.|Tôi muốn học nâng cao.|Động từ tách: er bildet sich weiter, hat sich weitergebildet
v|zusammenarbeiten|||cộng tác|Wir {arbeiten} gut zusammen.|Chúng tôi cộng tác tốt.|Động từ tách: er arbeitet zusammen, hat zusammengearbeitet
v|präsentieren|||trình bày|Sie {präsentiert} das neue Projekt.|Cô ấy trình bày dự án mới.|er präsentiert, hat präsentiert
v|planen|||lập kế hoạch|Wir {planen} die Messe.|Chúng tôi lên kế hoạch cho hội chợ.|er plant, hat geplant
v|entlassen|||sa thải|Die Firma hat 50 Mitarbeiter {entlassen}.|Công ty đã sa thải 50 nhân viên.|du entlässt, er entlässt, entließ, hat entlassen
v|sich bemühen|||cố gắng|Ich {bemühe} mich um eine neue Stelle.|Tôi đang cố tìm việc mới.|er bemüht sich, hat sich bemüht; um + Akk
v|zögern|||chần chừ|{Zögern} Sie nicht, uns anzurufen.|Đừng ngần ngại gọi cho chúng tôi.|er zögert, hat gezögert
adj|teamfähig|||biết làm việc nhóm|Wir suchen {teamfähige} Mitarbeiter.|Chúng tôi tìm nhân viên biết làm việc nhóm.|
adj|belastbar|||chịu được áp lực|Sie sind {belastbar} und flexibel.|Bạn chịu được áp lực và linh hoạt.|
adj|qualifiziert|||đủ trình độ|Er ist für die Stelle gut {qualifiziert}.|Anh ấy đủ trình độ cho vị trí này.|
adj|unbefristet|||không thời hạn|Ich habe einen {unbefristeten} Vertrag.|Tôi có hợp đồng không thời hạn.|
adj|sicher|||an toàn; chắc chắn|Der Job ist {sicher}.|Công việc ổn định.|
adj|selbstbewusst|||tự tin|Sie trat sehr {selbstbewusst} auf.|Cô ấy tỏ ra rất tự tin.|
adj|engagiert|||tận tâm|Wir suchen {engagierte} Leute.|Chúng tôi tìm người tận tâm.|
adj|zuständig|||có trách nhiệm, phụ trách|Frau Lang ist für Bewerbungen {zuständig}.|Bà Lang phụ trách hồ sơ ứng tuyển.|
adj|kommunikativ|||giỏi giao tiếp|Sie ist offen und {kommunikativ}.|Cô ấy cởi mở và giỏi giao tiếp.|
adj|geeignet|||phù hợp|Ich halte ihn für {geeignet}.|Tôi cho rằng anh ấy phù hợp.|
adj|vielseitig|||đa năng|Die Tätigkeit ist sehr {vielseitig}.|Công việc rất đa dạng.|
adj|überzeugend|||thuyết phục|Ihre Präsentation war {überzeugend}.|Bài thuyết trình của cô ấy thuyết phục.|
adv|hiermit|||bằng (thư) này|{Hiermit} bewerbe ich mich um die Stelle.|Qua thư này tôi xin ứng tuyển vị trí.|Văn phong thư từ trang trọng.
conj|damit|||để (mục đích, chủ ngữ khác)|Ich spreche langsam, {damit} alle mich verstehen.|Tôi nói chậm để mọi người hiểu.|Câu phụ: động từ cuối.
p|Mit freundlichen Grüßen|||trân trọng (kết thư)|{Mit freundlichen Grüßen}, Lan Nguyen|Trân trọng, Lan Nguyễn|Kết thư trang trọng.
p|Sehr geehrte Damen und Herren|||kính gửi quý ông bà|{Sehr geehrte Damen und Herren}, ich bewerbe mich …|Kính gửi quý ông bà, tôi xin ứng tuyển …|Mở đầu thư khi không biết tên người nhận.
p|in Frage kommen|||có thể được xem xét|Sie {kommen} für die Stelle in Frage.|Ông/bà có thể được xem xét cho vị trí.|
p|zum Vorstellungsgespräch einladen|||mời phỏng vấn|Wir möchten Sie {zum Vorstellungsgespräch einladen}.|Chúng tôi muốn mời ông/bà phỏng vấn.|
p|Erfahrung sammeln|||tích lũy kinh nghiệm|Im Praktikum habe ich viel {Erfahrung gesammelt}.|Khi thực tập tôi tích lũy nhiều kinh nghiệm.|
g|Konjunktiv II lịch sự: würden Sie, könnten Sie|||đề nghị lịch sự|{Könnten} Sie mir bitte helfen?|Ông/bà có thể giúp tôi không?|Lịch sự hơn: Würden Sie …? Hätten Sie …? Wäre es möglich …?
g|Infinitiv mit zu|||động từ + zu + nguyên mẫu|Ich habe vor, mich {zu} bewerben.|Tôi dự định nộp đơn.|Động từ tách: anzurufen, mitzubringen (zu chen vào giữa).
g|um … zu: mục đích, cùng chủ ngữ|||để làm gì|Ich lerne Deutsch, um in Deutschland {zu} arbeiten.|Tôi học tiếng Đức để làm việc ở Đức.|Cùng chủ ngữ → um … zu; khác chủ ngữ → damit.
g|damit: mục đích, khác chủ ngữ|||để (ai đó) làm gì|Ich erkläre es dir, damit du es {verstehst}.|Tôi giải thích để bạn hiểu.|damit + câu phụ, động từ cuối.
n|Arbeitsmarkt|der|¨-e|thị trường lao động|Der {Arbeitsmarkt} für Pflegekräfte ist gut.|Thị trường lao động cho ngành điều dưỡng tốt.|
n|Fachkraft|die|¨-e|lao động lành nghề|Deutschland sucht {Fachkräfte}.|Đức tìm lao động lành nghề.|
n|Stellenangebot|das|-e|việc làm đang tuyển|Es gibt viele {Stellenangebote} im Internet.|Có nhiều tin tuyển dụng trên mạng.|
n|Tätigkeit|die|-en|công việc, hoạt động|Die {Tätigkeit} ist abwechslungsreich.|Công việc đa dạng.|
n|Arbeitsbedingung|die|-en|điều kiện làm việc|Die {Arbeitsbedingungen} sind gut.|Điều kiện làm việc tốt.|Thường dùng số nhiều.
n|Überstunde|die|-n|giờ làm thêm|Ich habe diese Woche zehn {Überstunden} gemacht.|Tuần này tôi làm thêm mười giờ.|
n|Arbeitszeugnis|das|-se|giấy nhận xét công việc|Mein Chef schreibt mir ein gutes {Arbeitszeugnis}.|Sếp viết cho tôi giấy nhận xét tốt.|
n|Gehaltsvorstellung|die|-en|mức lương mong muốn|Was ist Ihre {Gehaltsvorstellung}?|Mức lương mong muốn của ông/bà là bao nhiêu?|
n|Einarbeitung|die|-en|giai đoạn làm quen công việc|Die {Einarbeitung} dauert zwei Wochen.|Giai đoạn làm quen kéo dài hai tuần.|
v|sich einarbeiten|||làm quen với công việc|Ich muss mich erst {einarbeiten}.|Tôi phải làm quen với công việc trước.|Động từ tách: er arbeitet sich ein, hat sich eingearbeitet
v|befördern|||thăng chức|Sie wurde zur Abteilungsleiterin {befördert}.|Cô ấy được thăng chức trưởng phòng.|er befördert, hat befördert
v|vertreten|||thay thế, đại diện|Während meines Urlaubs {vertritt} mich ein Kollege.|Khi tôi đi nghỉ, một đồng nghiệp làm thay.|du vertrittst, er vertritt, vertrat, hat vertreten
v|sich auskennen|||thông thạo|Er {kennt} sich mit Computern gut aus.|Anh ấy rất thạo máy tính.|Động từ tách: er kennt sich aus, hat sich ausgekannt
v|motivieren|||tạo động lực|Ein gutes Team {motiviert} mich.|Một nhóm tốt tạo động lực cho tôi.|er motiviert, hat motiviert
adj|abwechslungsreich|||đa dạng|Die Arbeit ist {abwechslungsreich}.|Công việc đa dạng.|
adj|zielstrebig|||kiên định mục tiêu|Sie ist sehr {zielstrebig}.|Cô ấy rất kiên định với mục tiêu.|
adj|eigenständig|||độc lập|Wir erwarten {eigenständiges} Arbeiten.|Chúng tôi mong đợi khả năng làm việc độc lập.|
p|sich selbstständig machen|||tự lập nghiệp|Er möchte {sich selbstständig machen}.|Anh ấy muốn tự kinh doanh.|
`;
export default pack;
