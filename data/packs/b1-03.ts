// B1 · 03 Trường học và học tập. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Bildung|die||giáo dục|{Bildung} ist der Schlüssel zum Erfolg.|Giáo dục là chìa khóa của thành công.|
n|Bildungssystem|das|-e|hệ thống giáo dục|Das deutsche {Bildungssystem} ist kompliziert.|Hệ thống giáo dục Đức phức tạp.|
n|Schulsystem|das|-e|hệ thống trường học|Im {Schulsystem} gibt es verschiedene Schularten.|Trong hệ thống trường học có nhiều loại trường.|
n|Gymnasium|das|Gymnasien|trường trung học (lên đại học)|Meine Tochter besucht das {Gymnasium}.|Con gái tôi học trường Gymnasium.|
n|Realschule|die|-n|trường trung học thực hành|Nach der {Realschule} machte er eine Ausbildung.|Học xong Realschule anh ấy đi học nghề.|
n|Hochschule|die|-n|trường cao đẳng/đại học|Sie studiert an einer {Hochschule} für Musik.|Cô ấy học ở một trường đại học âm nhạc.|
n|Studiengang|der|¨-e|ngành học|Welchen {Studiengang} hast du gewählt?|Bạn đã chọn ngành học nào?|
n|Studiengebühr|die|-en|học phí|In Deutschland gibt es kaum {Studiengebühren}.|Ở Đức hầu như không có học phí.|
n|Stipendium|das|Stipendien|học bổng|Sie hat ein {Stipendium} bekommen.|Cô ấy nhận được học bổng.|
n|Hörsaal|der|-säle|giảng đường|Der {Hörsaal} war voll.|Giảng đường chật kín.|
n|Seminar|das|-e|buổi seminar, lớp thảo luận|Im {Seminar} diskutieren wir viel.|Trong buổi seminar chúng tôi thảo luận nhiều.|
n|Referat|das|-e|bài thuyết trình (ở trường)|Morgen halte ich ein {Referat}.|Ngày mai tôi thuyết trình.|ein Referat halten
n|Hausarbeit|die|-en|bài tiểu luận|Die {Hausarbeit} muss 15 Seiten lang sein.|Bài tiểu luận phải dài 15 trang.|
n|Klausur|die|-en|bài thi viết (đại học)|Die {Klausur} dauert zwei Stunden.|Bài thi kéo dài hai tiếng.|
n|Professor|der|-en|giáo sư (nam)|Der {Professor} erklärt sehr gut.|Giáo sư giảng rất hay.|Nữ: die Professorin.
n|Dozent|der|-en|giảng viên (nam)|Unsere {Dozentin} kommt aus Wien.|Cô giảng viên của chúng tôi đến từ Wien.|n-Deklination. Nữ: die Dozentin.
n|Kommilitone|der|-n|bạn học đại học (nam)|Ich lerne mit meinen {Kommilitonen}.|Tôi học cùng các bạn học.|n-Deklination. Nữ: die Kommilitonin.
n|Bachelor|der|-s|bằng cử nhân|Nach dem {Bachelor} möchte ich den Master machen.|Sau cử nhân tôi muốn học thạc sĩ.|
n|Master|der|-s|bằng thạc sĩ|Ich mache meinen {Master} in Berlin.|Tôi học thạc sĩ ở Berlin.|
n|Weiterbildung|die|-en|đào tạo nâng cao|Die Firma bezahlt die {Weiterbildung}.|Công ty trả tiền khóa đào tạo nâng cao.|
n|Lernmethode|die|-n|phương pháp học|Jeder hat seine eigene {Lernmethode}.|Mỗi người có phương pháp học riêng.|
n|Lernerfolg|der|-e|kết quả học tập|Regelmäßiges Üben bringt {Lernerfolg}.|Luyện tập đều đặn mang lại kết quả.|
n|Leistung|die|-en|thành tích|Seine {Leistungen} in Mathe sind gut.|Thành tích môn toán của anh ấy tốt.|
n|Nachhilfe|die||học thêm, phụ đạo|Mein Sohn bekommt {Nachhilfe} in Englisch.|Con trai tôi học thêm tiếng Anh.|
n|Lehrplan|der|¨-e|chương trình giảng dạy|Das steht nicht im {Lehrplan}.|Cái đó không có trong chương trình.|
n|Pausenhof|der|¨-e|sân trường|Die Kinder spielen auf dem {Pausenhof}.|Bọn trẻ chơi ở sân trường.|
n|Bibliotheksausweis|der|-e|thẻ thư viện|Ohne {Bibliotheksausweis} kann man keine Bücher leihen.|Không có thẻ thư viện thì không mượn sách được.|
n|Anwesenheit|die||sự có mặt|Die {Anwesenheit} ist Pflicht.|Bắt buộc phải có mặt.|
n|Motivation|die||động lực|Mir fehlt heute die {Motivation}.|Hôm nay tôi thiếu động lực.|
n|Interesse|das|-n|sự quan tâm|Ich habe großes {Interesse} an Geschichte.|Tôi rất quan tâm đến lịch sử.|Interesse an + Dativ.
v|lehren|||giảng dạy|Sie {lehrt} Biologie an der Uni.|Bà ấy dạy sinh học ở trường đại học.|er lehrt, hat gelehrt
v|sich einschreiben|||ghi danh (nhập học)|Ich habe {mich} an der Uni eingeschrieben.|Tôi đã ghi danh vào trường đại học.|Động từ tách: er schreibt sich ein, hat sich eingeschrieben
v|abschließen|||hoàn thành (khóa học)|Sie hat ihr Studium {abgeschlossen}.|Cô ấy đã tốt nghiệp đại học.|Động từ tách: er schließt ab, hat abgeschlossen
v|auswendig lernen|||học thuộc lòng|Ich {lerne} das Gedicht auswendig.|Tôi học thuộc bài thơ.|er lernt auswendig, hat auswendig gelernt
v|zusammenfassen|||tóm tắt|{Fassen} Sie den Text kurz zusammen.|Hãy tóm tắt ngắn gọn bài đọc.|Động từ tách: er fasst zusammen, hat zusammengefasst
v|begründen|||nêu lý do|Bitte {begründen} Sie Ihre Meinung.|Hãy nêu lý do cho ý kiến của bạn.|er begründet, hat begründet
v|sich melden|||giơ tay phát biểu; liên lạc|Wer die Antwort weiß, {meldet} sich.|Ai biết câu trả lời thì giơ tay.|er meldet sich, hat sich gemeldet
v|loben|||khen ngợi|Die Lehrerin {lobt} die Schüler.|Cô giáo khen học sinh.|er lobt, hat gelobt
v|kritisieren|||phê bình|Er {kritisiert} das Schulsystem.|Anh ấy phê phán hệ thống trường học.|er kritisiert, hat kritisiert
v|schwänzen|||trốn học|Er hat heute die Schule {geschwänzt}.|Hôm nay cậu ấy trốn học.|er schwänzt, hat geschwänzt (văn nói)
v|sich verbessern|||tiến bộ|Dein Deutsch hat {sich} sehr verbessert.|Tiếng Đức của bạn tiến bộ nhiều.|er verbessert sich, hat sich verbessert
v|ausfallen|||bị hủy (buổi học)|Der Unterricht {fällt} heute aus.|Hôm nay buổi học bị hủy.|Động từ tách: er fällt aus, ist ausgefallen
v|beantragen|||nộp đơn xin|Ich {beantrage} ein Stipendium.|Tôi nộp đơn xin học bổng.|er beantragt, hat beantragt
v|sich beschäftigen|||bận rộn với, tìm hiểu|Ich {beschäftige} mich mit Geschichte.|Tôi tìm hiểu về lịch sử.|er beschäftigt sich, hat sich beschäftigt; mit + Dativ
v|nachdenken|||suy nghĩ kỹ|Ich muss darüber {nachdenken}.|Tôi phải suy nghĩ về điều đó.|Động từ tách: er denkt nach, dachte nach, hat nachgedacht; über + Akk
adj|begabt|||có năng khiếu|Sie ist sehr {begabt} für Sprachen.|Cô ấy rất có năng khiếu ngôn ngữ.|
adj|motiviert|||có động lực|Die Studenten sind sehr {motiviert}.|Sinh viên rất có động lực.|
adj|anspruchsvoll|||đòi hỏi cao|Das Studium ist sehr {anspruchsvoll}.|Chương trình học rất nặng.|
adj|verpflichtend|||bắt buộc|Der Kurs ist {verpflichtend}.|Khóa học là bắt buộc.|
adj|freiwillig|||tự nguyện|Die Teilnahme ist {freiwillig}.|Việc tham gia là tự nguyện.|
adj|öffentlich|||công lập, công cộng|Sie geht auf eine {öffentliche} Schule.|Cô ấy học trường công.|
adj|privat|||tư nhân, riêng tư|{Private} Schulen sind teuer.|Trường tư thì đắt.|
adj|theoretisch|||lý thuyết|Der Kurs ist sehr {theoretisch}.|Khóa học rất nặng lý thuyết.|
adj|praktisch orientiert|||thiên về thực hành|Die Ausbildung ist {praktisch orientiert}.|Chương trình đào tạo thiên về thực hành.|
adj|ausgezeichnet|||xuất sắc|Sie hat ein {ausgezeichnetes} Zeugnis.|Cô ấy có học bạ xuất sắc.|
adj|ungenügend|||không đạt|Die Note war leider {ungenügend}.|Tiếc là điểm không đạt.|
adj|gründlich|||kỹ lưỡng|Er lernt immer sehr {gründlich}.|Anh ấy luôn học rất kỹ.|
conj|obwohl|||mặc dù|{Obwohl} ich müde bin, lerne ich weiter.|Mặc dù mệt, tôi vẫn học tiếp.|Câu phụ: động từ cuối.
conj|sondern|||mà là|Er ist nicht faul, {sondern} müde.|Anh ấy không lười mà là mệt.|Sau phủ định nicht/kein.
p|nicht nur … sondern auch|||không chỉ … mà còn|Sie spricht {nicht nur} Deutsch, sondern auch Französisch.|Cô ấy không chỉ nói tiếng Đức mà còn tiếng Pháp.|
p|eine Prüfung wiederholen|||thi lại|Er muss {die Prüfung wiederholen}.|Anh ấy phải thi lại.|
p|in der Regel|||thông thường|{In der Regel} beginnt der Unterricht um acht.|Thông thường buổi học bắt đầu lúc tám giờ.|
p|sich Mühe geben|||cố gắng|Er {gibt} sich viel Mühe.|Anh ấy rất cố gắng.|
p|einen Kurs belegen|||đăng ký học một khóa|Dieses Semester {belege} ich drei Kurse.|Học kỳ này tôi đăng ký ba khóa.|
p|Fortschritte machen|||tiến bộ|Du {machst} große Fortschritte!|Bạn tiến bộ nhiều lắm!|
g|obwohl: nhượng bộ trong câu phụ|||mặc dù …|Obwohl es regnet, {gehen} wir spazieren.|Mặc dù trời mưa, chúng tôi vẫn đi dạo.|obwohl + động từ cuối; câu phụ đứng trước thì động từ câu chính đứng ngay sau.
g|trotzdem hay obwohl?|||cùng ý nhượng bộ, khác vị trí động từ|Es regnet, trotzdem {gehen} wir spazieren.|Trời mưa, dù vậy chúng tôi vẫn đi dạo.|trotzdem (trạng từ) → động từ ngay sau; obwohl (liên từ phụ) → động từ cuối.
g|Liên từ hai vế: nicht nur … sondern auch|||liên từ hai vế|Er lernt nicht nur Deutsch, sondern {auch} Englisch.|Anh ấy không chỉ học tiếng Đức mà còn học tiếng Anh.|Nhấn mạnh thêm thông tin.
g|Danh từ hóa động từ: das + Infinitiv|||das Lernen, das Lesen|Das {Lernen} macht mir Spaß.|Tôi thích việc học.|Động từ nguyên mẫu viết hoa, giống trung.
n|Lernziel|das|-e|mục tiêu học tập|Mein {Lernziel} ist das B1-Zertifikat.|Mục tiêu học của tôi là chứng chỉ B1.|
n|Lerngruppe|die|-n|nhóm học|Wir treffen uns in einer {Lerngruppe}.|Chúng tôi gặp nhau trong một nhóm học.|
n|Lehrkraft|die|¨-e|giáo viên (trang trọng)|Jede {Lehrkraft} hat ihre eigene Methode.|Mỗi giáo viên có phương pháp riêng.|
n|Unterrichtsstunde|die|-n|tiết học|Eine {Unterrichtsstunde} dauert 45 Minuten.|Một tiết học kéo dài 45 phút.|
n|Schulabschluss|der|¨-e|bằng tốt nghiệp phổ thông|Ohne {Schulabschluss} ist es schwer, Arbeit zu finden.|Không có bằng tốt nghiệp phổ thông thì khó tìm việc.|
n|Schulpflicht|die||nghĩa vụ đi học|In Deutschland gibt es eine {Schulpflicht}.|Ở Đức có nghĩa vụ đi học bắt buộc.|
n|Notendurchschnitt|der|-e|điểm trung bình|Ihr {Notendurchschnitt} ist 1,5.|Điểm trung bình của cô ấy là 1,5.|
n|Prüfungsangst|die|¨-e|nỗi sợ thi cử|Viele Schüler haben {Prüfungsangst}.|Nhiều học sinh sợ thi cử.|
n|Mitschrift|die|-en|bản ghi chép bài giảng|Kannst du mir deine {Mitschrift} schicken?|Bạn gửi tôi bản ghi chép được không?|
n|Fernstudium|das|-studien|học từ xa|Neben der Arbeit mache ich ein {Fernstudium}.|Bên cạnh công việc tôi học từ xa.|
v|abschreiben|||chép bài, quay cóp|Er hat bei der Prüfung {abgeschrieben}.|Anh ấy quay cóp trong lúc thi.|Động từ tách: er schreibt ab, schrieb ab, hat abgeschrieben
v|mitschreiben|||ghi chép theo|In der Vorlesung {schreibe} ich alles mit.|Trong giờ giảng tôi ghi chép mọi thứ.|Động từ tách: er schreibt mit, hat mitgeschrieben
v|vermitteln|||truyền đạt|Der Lehrer {vermittelt} Wissen anschaulich.|Thầy giáo truyền đạt kiến thức sinh động.|er vermittelt, hat vermittelt
v|sich anstrengen|||cố gắng, nỗ lực|Du musst dich mehr {anstrengen}.|Bạn phải cố gắng hơn.|Động từ tách: er strengt sich an, hat sich angestrengt
v|benoten|||chấm điểm|Die Arbeiten werden streng {benotet}.|Bài làm được chấm điểm nghiêm.|er benotet, hat benotet
adj|lernschwach|||học yếu|{Lernschwache} Schüler bekommen Hilfe.|Học sinh học yếu được giúp đỡ.|
adj|wissbegierig|||ham học hỏi|Kinder sind sehr {wissbegierig}.|Trẻ em rất ham học hỏi.|
adj|zweisprachig|||song ngữ|Sie ist {zweisprachig} aufgewachsen.|Cô ấy lớn lên song ngữ.|
p|auf dem Laufenden bleiben|||cập nhật thông tin|Ich lese viel, um {auf dem Laufenden zu bleiben}.|Tôi đọc nhiều để cập nhật thông tin.|
`;
export default pack;
