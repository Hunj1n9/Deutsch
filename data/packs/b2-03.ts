// B2 · 03 Đại học và nghiên cứu. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Hochschulzugang|der|¨-e|điều kiện vào đại học|Für den {Hochschulzugang} braucht man das Abitur.|Để vào đại học cần bằng tú tài.|
n|Studienplatz|der|¨-e|suất học đại học|Sie hat einen {Studienplatz} in Medizin bekommen.|Cô ấy được nhận vào ngành y.|
n|Zulassung|die|-en|giấy chấp thuận nhập học|Die {Zulassung} kam per Post.|Giấy báo nhập học đến qua bưu điện.|
n|Immatrikulation|die|-en|sự nhập học, ghi danh|Die {Immatrikulation} ist bis Ende September möglich.|Có thể ghi danh đến cuối tháng Chín.|
n|Studienkolleg|das|-s|dự bị đại học|Ausländische Studierende besuchen oft ein {Studienkolleg}.|Sinh viên nước ngoài thường học dự bị đại học.|
n|Fakultät|die|-en|khoa (đại học)|Die {Fakultät} für Informatik ist neu.|Khoa tin học mới thành lập.|
n|Lehrstuhl|der|¨-e|bộ môn (do giáo sư đứng đầu)|Er arbeitet am {Lehrstuhl} für Geschichte.|Anh ấy làm việc ở bộ môn lịch sử.|
n|Abschlussarbeit|die|-en|luận văn tốt nghiệp|Ich schreibe gerade meine {Abschlussarbeit}.|Tôi đang viết luận văn tốt nghiệp.|
n|Doktorarbeit|die|-en|luận án tiến sĩ|Seine {Doktorarbeit} hat 300 Seiten.|Luận án tiến sĩ của anh ấy dày 300 trang.|
n|Betreuer|der|-|người hướng dẫn|Mein {Betreuer} gibt mir gute Tipps.|Người hướng dẫn cho tôi những lời khuyên hay.|Nữ: die Betreuerin.
n|Literaturverzeichnis|das|-se|danh mục tài liệu tham khảo|Das {Literaturverzeichnis} steht am Ende.|Danh mục tài liệu tham khảo ở cuối.|
n|Zitat|das|-e|trích dẫn|Jedes {Zitat} braucht eine Quelle.|Mỗi trích dẫn cần có nguồn.|
n|Fragestellung|die|-en|câu hỏi nghiên cứu|Die {Fragestellung} muss klar sein.|Câu hỏi nghiên cứu phải rõ ràng.|
n|Hypothese|die|-n|giả thuyết|Die {Hypothese} wurde bestätigt.|Giả thuyết đã được xác nhận.|
n|Methode|die|-n|phương pháp|Welche {Methode} hast du verwendet?|Bạn đã dùng phương pháp nào?|
n|Erkenntnis|die|-se|nhận thức, phát hiện|Die Studie liefert neue {Erkenntnisse}.|Nghiên cứu mang lại những phát hiện mới.|
n|Fachgebiet|das|-e|lĩnh vực chuyên môn|Ihr {Fachgebiet} ist die Linguistik.|Lĩnh vực chuyên môn của bà ấy là ngôn ngữ học.|
n|Fachbegriff|der|-e|thuật ngữ chuyên ngành|Erklären Sie bitte die {Fachbegriffe}.|Xin giải thích các thuật ngữ chuyên ngành.|
n|Prüfungsordnung|die|-en|quy chế thi|Laut {Prüfungsordnung} darf man zweimal wiederholen.|Theo quy chế thi được thi lại hai lần.|
n|Leistungspunkt|der|-e|tín chỉ|Für das Seminar bekommt man fünf {Leistungspunkte}.|Seminar này được năm tín chỉ.|
n|Auslandssemester|das|-|học kỳ ở nước ngoài|Ich mache ein {Auslandssemester} in Wien.|Tôi học một học kỳ ở Wien.|
n|Mensa|die|Mensen|nhà ăn sinh viên|In der {Mensa} ist das Essen günstig.|Ở nhà ăn sinh viên đồ ăn rẻ.|
n|Wohnheim|das|-e|ký túc xá|Ich wohne im {Wohnheim}.|Tôi ở ký túc xá.|
n|Nebenjob|der|-s|việc làm thêm|Viele Studenten haben einen {Nebenjob}.|Nhiều sinh viên có việc làm thêm.|
n|Wissenschaft|die|-en|khoa học|Die {Wissenschaft} macht große Fortschritte.|Khoa học có nhiều tiến bộ lớn.|
v|zitieren|||trích dẫn|Man muss korrekt {zitieren}.|Phải trích dẫn chính xác.|er zitiert, hat zitiert
v|recherchieren|||tra cứu tài liệu|Ich {recherchiere} in der Bibliothek.|Tôi tra cứu tài liệu ở thư viện.|er recherchiert, hat recherchiert
v|auswerten|||phân tích, đánh giá (dữ liệu)|Wir {werten} die Daten aus.|Chúng tôi phân tích dữ liệu.|Động từ tách: er wertet aus, hat ausgewertet
v|analysieren|||phân tích|Sie {analysiert} die Ergebnisse.|Cô ấy phân tích kết quả.|er analysiert, hat analysiert
v|belegen|||chứng minh; đăng ký (môn)|Die Zahlen {belegen} die These.|Các con số chứng minh luận điểm.|er belegt, hat belegt
v|widerlegen|||bác bỏ|Die Studie {widerlegt} die alte Theorie.|Nghiên cứu bác bỏ lý thuyết cũ.|er widerlegt, hat widerlegt
v|abgeben|||nộp|Die Arbeit muss bis Juni {abgegeben} werden.|Bài phải được nộp trước tháng Sáu.|Động từ tách: du gibst ab, er gibt ab, hat abgegeben
v|betreuen|||hướng dẫn, chăm sóc|Die Professorin {betreut} meine Arbeit.|Giáo sư hướng dẫn luận văn của tôi.|er betreut, hat betreut
v|promovieren|||làm tiến sĩ|Er {promoviert} in Physik.|Anh ấy làm tiến sĩ vật lý.|er promoviert, hat promoviert
v|sich exmatrikulieren|||thôi học, rút tên|Nach dem Abschluss {exmatrikuliert} man sich.|Sau khi tốt nghiệp thì rút tên khỏi trường.|er exmatrikuliert sich, hat sich exmatrikuliert
adj|akademisch|||học thuật|Der Text ist sehr {akademisch}.|Văn bản rất học thuật.|
adj|empirisch|||thực nghiệm|Das ist eine {empirische} Studie.|Đây là một nghiên cứu thực nghiệm.|
adj|interdisziplinär|||liên ngành|Das Projekt ist {interdisziplinär}.|Dự án mang tính liên ngành.|
adj|zulassungsbeschränkt|||giới hạn chỉ tiêu|Medizin ist {zulassungsbeschränkt}.|Ngành y có giới hạn chỉ tiêu.|
adj|fachlich|||chuyên môn|Sie hat gute {fachliche} Kenntnisse.|Cô ấy có kiến thức chuyên môn tốt.|
adj|relevant|||liên quan, quan trọng|Diese Quelle ist sehr {relevant}.|Nguồn này rất liên quan.|
adj|aussagekräftig|||có sức thuyết phục|Die Ergebnisse sind nicht {aussagekräftig}.|Kết quả không có sức thuyết phục.|
adj|repräsentativ|||mang tính đại diện|Die Umfrage ist {repräsentativ}.|Cuộc khảo sát mang tính đại diện.|
p|eine Arbeit schreiben|||viết bài luận|Ich muss noch {eine Arbeit schreiben}.|Tôi còn phải viết một bài luận.|
p|ein Referat halten|||thuyết trình|Morgen {halte} ich ein Referat.|Ngày mai tôi thuyết trình.|
p|in Betracht ziehen|||xem xét|Wir müssen alle Faktoren {in Betracht ziehen}.|Chúng ta phải xem xét mọi yếu tố.|
p|zu dem Ergebnis kommen|||đi đến kết quả|Die Forscher {kamen} zu dem Ergebnis, dass …|Các nhà nghiên cứu đi đến kết luận rằng …|
g|Danh từ hóa (Nominalstil)|||chuyển động từ thành danh từ trong văn viết|Nach der {Auswertung} der Daten schrieb sie den Bericht.|Sau khi phân tích dữ liệu, cô ấy viết báo cáo.|Nachdem sie die Daten ausgewertet hatte → Nach der Auswertung der Daten.
g|Giới từ Genitiv trong văn viết|||innerhalb, außerhalb, anhand|Innerhalb {des} Semesters gibt es zwei Prüfungen.|Trong học kỳ có hai bài thi.|innerhalb/außerhalb/oberhalb/anhand + Genitiv.
g|indem: bằng cách|||phương thức|Man lernt am besten, indem man {übt}.|Học tốt nhất là bằng cách luyện tập.|indem + câu phụ, động từ cuối.
g|sodass / so … dass: kết quả|||đến mức|Der Text war so schwer, dass ich ihn zweimal lesen {musste}.|Bài khó đến mức tôi phải đọc hai lần.|so + tính từ … dass (câu phụ).
n|Studienordnung|die|-en|quy chế đào tạo|Die {Studienordnung} regelt den Ablauf des Studiums.|Quy chế đào tạo quy định tiến trình học.|
n|Studienberatung|die|-en|tư vấn học tập|Bei Fragen hilft die {Studienberatung}.|Khi có thắc mắc phòng tư vấn học tập sẽ giúp.|
n|Pflichtfach|das|¨-er|môn bắt buộc|Statistik ist ein {Pflichtfach}.|Thống kê là môn bắt buộc.|
n|Wahlfach|das|¨-er|môn tự chọn|Als {Wahlfach} nehme ich Spanisch.|Môn tự chọn tôi chọn tiếng Tây Ban Nha.|
n|Modul|das|-e|học phần|Das {Modul} besteht aus Vorlesung und Seminar.|Học phần gồm bài giảng và seminar.|
n|Tutorium|das|Tutorien|buổi phụ đạo|Im {Tutorium} wiederholen wir den Stoff.|Ở buổi phụ đạo chúng tôi ôn lại bài.|
n|Sprechzeit|die|-en|giờ tiếp sinh viên|Die Professorin hat dienstags {Sprechzeit}.|Giáo sư có giờ tiếp sinh viên vào thứ Ba.|
n|Forschungsprojekt|das|-e|dự án nghiên cứu|Sie arbeitet an einem {Forschungsprojekt}.|Cô ấy làm việc trong một dự án nghiên cứu.|
n|Fachliteratur|die||tài liệu chuyên ngành|Für die Arbeit lese ich viel {Fachliteratur}.|Để viết bài tôi đọc nhiều tài liệu chuyên ngành.|
n|Quellenangabe|die|-n|ghi nguồn|Jede {Quellenangabe} muss vollständig sein.|Mỗi lần ghi nguồn phải đầy đủ.|
n|Plagiat|das|-e|đạo văn|Ein {Plagiat} kann zur Exmatrikulation führen.|Đạo văn có thể dẫn đến bị đuổi học.|
n|Abgabetermin|der|-e|hạn nộp bài|Der {Abgabetermin} ist der 15. Juli.|Hạn nộp bài là ngày 15 tháng Bảy.|
n|Exzellenz|die||sự xuất sắc|Die Universität ist für ihre {Exzellenz} bekannt.|Trường đại học nổi tiếng vì sự xuất sắc.|
n|Studienabbruch|der|¨-e|việc bỏ học giữa chừng|Die Zahl der {Studienabbrüche} ist hoch.|Số người bỏ học giữa chừng cao.|
n|Erstsemester|das|-|sinh viên năm nhất|Für die {Erstsemester} gibt es eine Einführungswoche.|Có một tuần định hướng cho sinh viên năm nhất.|
n|Hochschulabschluss|der|¨-e|bằng đại học|Sie hat einen {Hochschulabschluss} in Chemie.|Cô ấy có bằng đại học hóa học.|
n|Wissenschaftssprache|die|-n|ngôn ngữ học thuật|Die {Wissenschaftssprache} ist oft kompliziert.|Ngôn ngữ học thuật thường phức tạp.|
n|Lernstrategie|die|-n|chiến lược học tập|Jeder braucht eine eigene {Lernstrategie}.|Mỗi người cần một chiến lược học riêng.|
n|Prüfungsvorbereitung|die|-en|việc ôn thi|Die {Prüfungsvorbereitung} dauert Wochen.|Việc ôn thi kéo dài nhiều tuần.|
n|Leistungsnachweis|der|-e|chứng nhận kết quả học tập|Für das Seminar braucht man einen {Leistungsnachweis}.|Môn seminar cần có chứng nhận kết quả.|
v|vertiefen|||đào sâu|Im Master {vertiefe} ich mein Wissen.|Ở bậc thạc sĩ tôi đào sâu kiến thức.|er vertieft, hat vertieft
v|erwerben|||đạt được, thu nhận|Im Studium {erwirbt} man viele Kompetenzen.|Khi học đại học người ta đạt được nhiều năng lực.|du erwirbst, er erwirbt, erwarb, hat erworben
v|exzerpieren|||trích lục (tóm ý chính)|Ich {exzerpiere} die wichtigsten Texte.|Tôi trích ý chính các văn bản quan trọng nhất.|er exzerpiert, hat exzerpiert
v|gliedern|||chia đề mục|Die Arbeit ist in vier Kapitel {gegliedert}.|Bài được chia thành bốn chương.|er gliedert, hat gegliedert
v|formulieren|||diễn đạt|Bitte {formulieren} Sie die Frage genauer.|Vui lòng diễn đạt câu hỏi chính xác hơn.|er formuliert, hat formuliert
v|überarbeiten|||chỉnh sửa lại|Ich muss die Einleitung {überarbeiten}.|Tôi phải chỉnh sửa lại phần mở đầu.|er überarbeitet, hat überarbeitet
v|abbrechen|||bỏ dở|Er hat sein Studium {abgebrochen}.|Anh ấy đã bỏ dở việc học.|Động từ tách: du brichst ab, er bricht ab, brach ab, hat abgebrochen
v|zugelassen werden|||được nhận vào|Sie wurde zum Studium {zugelassen}.|Cô ấy được nhận vào học.|er wird zugelassen, wurde zugelassen, ist zugelassen worden
v|sich orientieren|||định hướng|Am Anfang muss man sich erst {orientieren}.|Lúc đầu phải định hướng trước.|er orientiert sich, hat sich orientiert
adj|wissenschaftlich fundiert|||có cơ sở khoa học|Die These ist {wissenschaftlich fundiert}.|Luận điểm có cơ sở khoa học.|
adj|methodisch|||có phương pháp|Sie geht sehr {methodisch} vor.|Cô ấy làm việc rất có phương pháp.|
adj|sachkundig|||am hiểu|Der Betreuer ist sehr {sachkundig}.|Người hướng dẫn rất am hiểu.|
adj|zeitintensiv|||tốn nhiều thời gian|Das Studium ist sehr {zeitintensiv}.|Việc học rất tốn thời gian.|
adj|lernintensiv|||đòi hỏi học nhiều|Das erste Semester ist {lernintensiv}.|Học kỳ đầu đòi hỏi học nhiều.|
adj|eigenverantwortlich|||tự chịu trách nhiệm|Studierende lernen {eigenverantwortlich}.|Sinh viên tự chịu trách nhiệm việc học.|
p|ein Studium aufnehmen|||bắt đầu học đại học|Im Herbst {nehme} ich ein Studium auf.|Mùa thu tôi bắt đầu học đại học.|
p|eine These aufstellen|||đưa ra luận điểm|Der Autor {stellt} eine interessante These auf.|Tác giả đưa ra một luận điểm thú vị.|
p|auf dem Gebiet|||trong lĩnh vực|Sie ist Expertin {auf dem Gebiet} der Medizin.|Bà ấy là chuyên gia trong lĩnh vực y học.|
p|Bezug nehmen auf|||dẫn chiếu tới|Der Autor {nimmt} Bezug auf eine ältere Studie.|Tác giả dẫn chiếu tới một nghiên cứu cũ hơn.|
n|Promotion|die|-en|học vị tiến sĩ; quá trình làm tiến sĩ|Nach der {Promotion} ging sie in die Industrie.|Sau khi lấy bằng tiến sĩ cô ấy làm cho doanh nghiệp.|
n|Habilitation|die|-en|học hàm (chuẩn bị làm giáo sư)|Für die Professur braucht man oft eine {Habilitation}.|Để làm giáo sư thường cần có Habilitation.|
n|Forschungsfrage|die|-n|câu hỏi nghiên cứu|Meine {Forschungsfrage} ist noch zu allgemein.|Câu hỏi nghiên cứu của tôi còn quá chung chung.|
adj|praxisnah|||sát thực tế|Das Studium ist sehr {praxisnah}.|Chương trình học rất sát thực tế.|
adj|wissenschaftlich anerkannt|||được giới khoa học công nhận|Die Methode ist {wissenschaftlich anerkannt}.|Phương pháp được giới khoa học công nhận.|
v|referieren|||thuyết trình (học thuật)|Er {referiert} über Migration.|Anh ấy thuyết trình về di cư.|er referiert, hat referiert
v|nachholen|||học bù, làm bù|Ich muss das Abitur {nachholen}.|Tôi phải học bù bằng tú tài.|Động từ tách: er holt nach, hat nachgeholt
p|eine Hausarbeit verfassen|||viết bài tiểu luận|Bis Ende März muss ich {eine Hausarbeit verfassen}.|Đến cuối tháng Ba tôi phải viết một bài tiểu luận.|
p|unter Beweis stellen|||chứng minh (năng lực)|Sie hat ihr Können {unter Beweis gestellt}.|Cô ấy đã chứng minh năng lực của mình.|
`;
export default pack;
