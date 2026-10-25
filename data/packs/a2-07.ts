// A2 · 07 Học tập và đào tạo. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Ausbildung|die|-en|đào tạo nghề|Sie macht eine {Ausbildung} als Köchin.|Cô ấy học nghề đầu bếp.|
n|Studium|das|Studien|việc học đại học|Das {Studium} dauert vier Jahre.|Chương trình đại học kéo dài bốn năm.|
n|Fach|das|¨-er|môn học|Mein liebstes {Fach} ist Mathe.|Môn tôi thích nhất là toán.|
n|Note|die|-n|điểm số|Ich habe eine gute {Note} bekommen.|Tôi được điểm tốt.|Ở Đức: 1 là tốt nhất, 6 là kém nhất.
n|Zeugnis|das|-se|học bạ; giấy chứng nhận|Am Ende des Jahres gibt es {Zeugnisse}.|Cuối năm có học bạ.|
n|Abschluss|der|¨-e|bằng tốt nghiệp|Ich habe einen {Abschluss} in Informatik.|Tôi có bằng tin học.|
n|Abitur|das||bằng tú tài (Đức)|Nach dem {Abitur} will ich studieren.|Sau tú tài tôi muốn học đại học.|
n|Klasse|die|-n|lớp học|In meiner {Klasse} sind 25 Schüler.|Lớp tôi có 25 học sinh.|
n|Grundschule|die|-n|trường tiểu học|Meine Tochter geht in die {Grundschule}.|Con gái tôi học tiểu học.|
n|Kindergarten|der|¨|nhà trẻ, mẫu giáo|Der Kleine geht in den {Kindergarten}.|Thằng bé đi nhà trẻ.|
n|Stundenplan|der|¨-e|thời khóa biểu|Wo ist mein {Stundenplan}?|Thời khóa biểu của tôi đâu?|
n|Semester|das|-|học kỳ|Das {Semester} beginnt im Oktober.|Học kỳ bắt đầu vào tháng Mười.|
n|Vorlesung|die|-en|bài giảng (đại học)|Die {Vorlesung} ist sehr voll.|Giảng đường rất đông.|
n|Kenntnis|die|-se|kiến thức|Ich habe gute {Kenntnisse} in Deutsch.|Tôi có kiến thức tiếng Đức tốt.|Thường số nhiều.
n|Fehler|der|-|lỗi|Ich mache noch viele {Fehler}.|Tôi vẫn mắc nhiều lỗi.|
n|Grammatik|die|-en|ngữ pháp|Die deutsche {Grammatik} ist schwer.|Ngữ pháp tiếng Đức khó.|
n|Aussprache|die|-n|phát âm|Deine {Aussprache} ist sehr gut.|Phát âm của bạn rất tốt.|
n|Wortschatz|der||vốn từ|Ich lerne jeden Tag neuen {Wortschatz}.|Mỗi ngày tôi học từ mới.|
n|Text|der|-e|văn bản, bài đọc|Lesen Sie den {Text}.|Hãy đọc bài đọc.|
n|Übung|die|-en|bài luyện tập|Die {Übung} ist einfach.|Bài tập dễ.|
n|Zertifikat|das|-e|chứng chỉ|Für das Visum brauche ich ein {Zertifikat}.|Để xin visa tôi cần chứng chỉ.|
n|Wissen|das||kiến thức, hiểu biết|Ihr {Wissen} ist beeindruckend.|Kiến thức của cô ấy thật ấn tượng.|
n|Ziel|das|-e|mục tiêu|Mein {Ziel} ist die B2-Prüfung.|Mục tiêu của tôi là kỳ thi B2.|
v|bestehen|||thi đỗ|Ich habe die Prüfung {bestanden}!|Tôi đã thi đỗ!|er besteht, hat bestanden
v|durchfallen|||thi trượt|Er ist durch die Prüfung {durchgefallen}.|Anh ấy thi trượt.|Động từ tách: er fällt durch, ist durchgefallen
v|sich vorbereiten|||chuẩn bị|Ich {bereite} mich auf die Prüfung vor.|Tôi chuẩn bị cho kỳ thi.|Động từ tách, phản thân: er bereitet sich vor, hat sich vorbereitet; auf + Akk
v|sich anmelden|||đăng ký|Ich habe {mich} für den Kurs angemeldet.|Tôi đã đăng ký khóa học.|Động từ tách: er meldet sich an, hat sich angemeldet
v|unterrichten|||dạy học|Sie {unterrichtet} Deutsch an einer Schule.|Cô ấy dạy tiếng Đức ở một trường.|er unterrichtet, hat unterrichtet
v|korrigieren|||sửa (lỗi)|Die Lehrerin {korrigiert} die Tests.|Cô giáo chấm bài kiểm tra.|er korrigiert, hat korrigiert
v|ankreuzen|||đánh dấu (x)|{Kreuzen} Sie die richtige Antwort an.|Đánh dấu câu trả lời đúng.|Động từ tách: er kreuzt an, hat angekreuzt
v|übersetzen|||dịch|Kannst du den Satz {übersetzen}?|Bạn dịch câu này được không?|er übersetzt, hat übersetzt
v|nachschlagen|||tra cứu|Ich {schlage} das Wort im Wörterbuch nach.|Tôi tra từ đó trong từ điển.|Động từ tách: er schlägt nach, hat nachgeschlagen
v|sich konzentrieren|||tập trung|Ich kann {mich} nicht konzentrieren.|Tôi không tập trung được.|er konzentriert sich, hat sich konzentriert; auf + Akk
v|fehlen|||vắng mặt; thiếu|Wer {fehlt} heute?|Hôm nay ai vắng?|er fehlt, hat gefehlt
v|teilnehmen|||tham gia|Ich {nehme} an einem Sprachkurs teil.|Tôi tham gia một khóa học tiếng.|Động từ tách: er nimmt teil, hat teilgenommen; an + Dativ
v|merken|||nhận ra; ghi nhớ|Das kann ich mir nicht {merken}.|Tôi không nhớ nổi cái đó.|sich etwas merken = ghi nhớ
adj|schlau|||thông minh, lanh lợi|Das Kind ist sehr {schlau}.|Đứa trẻ rất lanh lợi.|
adj|intelligent|||thông minh|Sie ist sehr {intelligent}.|Cô ấy rất thông minh.|
adj|faul|||lười|Heute bin ich {faul}.|Hôm nay tôi lười.|
adj|streng|||nghiêm khắc|Der Lehrer ist {streng}.|Thầy giáo nghiêm khắc.|
adj|geduldig|||kiên nhẫn|Man muss beim Lernen {geduldig} sein.|Học phải kiên nhẫn.|
adj|mündlich|||vấn đáp, nói|Die {mündliche} Prüfung ist morgen.|Thi nói vào ngày mai.|
adj|schriftlich|||viết|Der {schriftliche} Test war leicht.|Bài kiểm tra viết dễ.|
adj|dumm|||ngốc|Es gibt keine {dummen} Fragen.|Không có câu hỏi nào ngốc cả.|
conj|wenn|||nếu; khi (lặp lại)|{Wenn} ich Zeit habe, lerne ich Vokabeln.|Khi có thời gian tôi học từ vựng.|Câu phụ: động từ cuối.
conj|ob|||liệu, có … không|Ich weiß nicht, {ob} ich die Prüfung bestehe.|Tôi không biết liệu tôi có thi đỗ không.|Câu hỏi gián tiếp có/không.
p|eine Prüfung ablegen|||dự thi|Im Juni {lege} ich die Prüfung ab.|Tháng Sáu tôi dự thi.|
g|Câu với wenn|||điều kiện, thời điểm lặp lại|Wenn du Fragen {hast}, frag mich.|Nếu bạn có câu hỏi thì hỏi tôi.|Câu phụ đứng trước → động từ câu chính đứng ngay sau dấu phẩy.
g|Câu hỏi gián tiếp với ob|||chuyển câu hỏi có/không|Weißt du, ob der Kurs morgen {stattfindet}?|Bạn có biết khóa học ngày mai có diễn ra không?|ob + … + động từ cuối.
g|Câu hỏi gián tiếp với từ để hỏi|||wann, wo, wie … trong câu phụ|Können Sie mir sagen, wann der Kurs {beginnt}?|Ông/bà cho tôi biết khi nào khóa học bắt đầu?|Từ để hỏi giữ nguyên, động từ chuyển ra cuối.
g|Động từ tách trong câu phụ|||viết liền ở cuối câu|Ich weiß nicht, wann der Zug {ankommt}.|Tôi không biết khi nào tàu đến.|Trong câu phụ, động từ tách viết liền: ankommt, aufsteht.
v|beschreiben|||miêu tả|{Beschreiben} Sie das Bild.|Hãy miêu tả bức tranh.|er beschreibt, hat beschrieben
v|diskutieren|||thảo luận|Wir {diskutieren} im Kurs über das Thema.|Chúng tôi thảo luận chủ đề này trong lớp.|er diskutiert, hat diskutiert
n|Meinung|die|-en|ý kiến|Was ist deine {Meinung}?|Ý kiến của bạn là gì?|
v|meinen|||cho rằng; ý muốn nói|Was {meinst} du dazu?|Bạn nghĩ sao về điều đó?|er meint, hat gemeint
n|Vorschlag|der|¨-e|đề xuất|Hast du einen besseren {Vorschlag}?|Bạn có đề xuất nào tốt hơn không?|
v|einverstanden sein|||đồng ý|Ich {bin} damit einverstanden.|Tôi đồng ý với điều đó.|einverstanden mit + Dativ
n|Unterschied|der|-e|sự khác biệt|Was ist der {Unterschied} zwischen „der“ und „den“?|"der" và "den" khác nhau thế nào?|
adj|deutlich|||rõ ràng|Sprechen Sie bitte {deutlich}!|Xin hãy nói rõ ràng!|
n|Mannschaft|die|-en|đội (thể thao)|Mein Sohn spielt in der {Mannschaft} der Schule.|Con trai tôi chơi trong đội của trường.|
`;
export default pack;
