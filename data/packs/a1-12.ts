// A1 · 12 Công việc và học tập. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Lehrer|der|-|giáo viên (nam)|Unser {Lehrer} kommt aus Bonn.|Thầy giáo chúng tôi đến từ Bonn.|Nữ: die Lehrerin, -nen.
n|Schüler|der|-|học sinh (nam)|Der {Schüler} macht Hausaufgaben.|Cậu học sinh làm bài tập về nhà.|Nữ: die Schülerin, -nen.
n|Student|der|-en|sinh viên (nam)|Er ist {Student} in Leipzig.|Anh ấy là sinh viên ở Leipzig.|n-Deklination. Nữ: die Studentin.
n|Universität|die|-en|trường đại học|Die {Universität} ist sehr groß.|Trường đại học rất lớn.|Nói tắt: die Uni.
n|Unterricht|der||giờ học, buổi học|Der {Unterricht} beginnt um acht.|Buổi học bắt đầu lúc tám giờ.|
n|Prüfung|die|-en|kỳ thi|Morgen habe ich eine {Prüfung}.|Ngày mai tôi có bài thi.|
n|Wörterbuch|das|¨-er|từ điển|Ich brauche ein {Wörterbuch}.|Tôi cần một cuốn từ điển.|
n|Wort|das|¨-er|từ|Wie schreibt man das {Wort}?|Từ này viết thế nào?|
n|Satz|der|¨-e|câu|Schreiben Sie einen {Satz}.|Hãy viết một câu.|
n|Frage|die|-n|câu hỏi|Ich habe eine {Frage}.|Tôi có một câu hỏi.|
n|Antwort|die|-en|câu trả lời|Die {Antwort} ist richtig.|Câu trả lời đúng.|
n|Aufgabe|die|-n|bài tập; nhiệm vụ|Die {Aufgabe} ist schwer.|Bài tập khó.|
n|Heft|das|-e|quyển vở|Schreib das ins {Heft}.|Viết cái đó vào vở.|
n|Kuli|der|-s|bút bi|Hast du einen {Kuli}?|Bạn có bút bi không?|
n|Firma|die|Firmen|công ty|Ich arbeite bei einer {Firma} in Hanoi.|Tôi làm việc ở một công ty tại Hà Nội.|
n|Büro|das|-s|văn phòng|Das {Büro} ist im zweiten Stock.|Văn phòng ở tầng hai.|
n|Chef|der|-s|sếp (nam)|Mein {Chef} ist streng.|Sếp tôi nghiêm khắc.|Nữ: die Chefin.
n|Kollege|der|-n|đồng nghiệp (nam)|Mein {Kollege} hilft mir.|Đồng nghiệp giúp tôi.|n-Deklination. Nữ: die Kollegin.
n|Computer|der|-|máy tính|Mein {Computer} ist langsam.|Máy tính của tôi chậm.|
n|E-Mail|die|-s|thư điện tử|Ich schreibe eine {E-Mail}.|Tôi viết một email.|
n|Gespräch|das|-e|cuộc trò chuyện|Das {Gespräch} war gut.|Cuộc nói chuyện tốt đẹp.|
n|Kunde|der|-n|khách hàng (nam)|Der {Kunde} wartet.|Khách hàng đang đợi.|n-Deklination. Nữ: die Kundin.
n|Geld|das||tiền|Ich verdiene nicht viel {Geld}.|Tôi không kiếm được nhiều tiền.|
n|Job|der|-s|việc làm|Sie sucht einen neuen {Job}.|Cô ấy tìm việc mới.|
n|Ingenieur|der|-e|kỹ sư (nam)|Mein Vater ist {Ingenieur}.|Bố tôi là kỹ sư.|Nói nghề không dùng mạo từ: Ich bin Ingenieur.
n|Krankenpfleger|der|-|y tá (nam)|Er arbeitet als {Krankenpfleger}.|Anh ấy làm y tá.|Nữ: die Krankenpflegerin.
n|Koch|der|¨-e|đầu bếp (nam)|Der {Koch} kocht sehr gut.|Đầu bếp nấu rất ngon.|Nữ: die Köchin.
n|Verkäufer|der|-|người bán hàng (nam)|Der {Verkäufer} ist freundlich.|Người bán hàng thân thiện.|Nữ: die Verkäuferin.
v|schreiben|||viết|Ich {schreibe} einen Brief.|Tôi viết một lá thư.|er schreibt, hat geschrieben
v|sagen|||nói|Was {sagst} du?|Bạn nói gì?|er sagt, hat gesagt
v|erklären|||giải thích|Die Lehrerin {erklärt} die Grammatik.|Cô giáo giải thích ngữ pháp.|er erklärt, hat erklärt
v|wiederholen|||lặp lại, ôn lại|Können Sie das bitte {wiederholen}?|Ông/bà nhắc lại được không?|er wiederholt, hat wiederholt
v|antworten|||trả lời|Bitte {antworten} Sie schnell.|Xin hãy trả lời nhanh.|du antwortest, er antwortet, hat geantwortet
v|üben|||luyện tập|Wir {üben} die Aussprache.|Chúng tôi luyện phát âm.|er übt, hat geübt
v|wissen|||biết (thông tin)|Ich {weiß} es nicht.|Tôi không biết.|ich weiß, du weißt, er weiß, hat gewusst
v|kennen|||biết, quen (người, nơi)|{Kennst} du Berlin?|Bạn có biết Berlin không?|er kennt, hat gekannt
v|verdienen|||kiếm (tiền)|Er {verdient} gut.|Anh ấy kiếm tiền khá.|er verdient, hat verdient
v|telefonieren|||gọi điện thoại|Ich {telefoniere} mit einem Kunden.|Tôi đang nói chuyện điện thoại với một khách hàng.|er telefoniert, hat telefoniert
v|werden|||trở thành|Ich will Arzt {werden}.|Tôi muốn trở thành bác sĩ.|du wirst, er wird, ist geworden
adj|richtig|||đúng|Das ist {richtig}.|Cái đó đúng.|
adj|falsch|||sai|Die Antwort ist {falsch}.|Câu trả lời sai.|
adj|einfach|||đơn giản, dễ|Die Aufgabe ist {einfach}.|Bài tập dễ.|
adj|schwierig|||khó|Deutsch ist nicht so {schwierig}.|Tiếng Đức không khó đến thế.|
adj|fleißig|||chăm chỉ|Sie ist sehr {fleißig}.|Cô ấy rất chăm chỉ.|
adj|wichtig|||quan trọng|Die Prüfung ist {wichtig}.|Kỳ thi quan trọng.|
adj|arbeitslos|||thất nghiệp|Er ist seit einem Monat {arbeitslos}.|Anh ấy thất nghiệp một tháng rồi.|
conj|aber|||nhưng|Die Arbeit ist interessant, {aber} anstrengend.|Công việc thú vị nhưng mệt.|
conj|oder|||hoặc, hay|Kaffee {oder} Tee?|Cà phê hay trà?|
conj|denn|||vì (nối hai mệnh đề chính)|Ich lerne Deutsch, {denn} ich will in Deutschland studieren.|Tôi học tiếng Đức vì tôi muốn du học ở Đức.|denn không đổi vị trí động từ.
p|als … arbeiten|||làm nghề …|Ich {arbeite als} Lehrerin.|Tôi làm giáo viên.|
g|Präteritum: war, hatte|||quá khứ của sein và haben|Gestern {war} ich krank.|Hôm qua tôi bị ốm.|sein → war, warst, war, waren; haben → hatte, hattest, hatte, hatten.
g|Liên từ und, aber, oder, denn: vị trí 0|||nối hai câu chính|Ich bin müde, aber ich {muss} arbeiten.|Tôi mệt nhưng tôi phải làm việc.|Sau và/nhưng/hoặc/vì (denn) câu giữ trật tự bình thường, động từ vẫn ở vị trí 2.
g|Partizip II bất quy tắc: -en|||động từ mạnh tạo Partizip với -en|Ich habe einen Brief {geschrieben}.|Tôi đã viết một lá thư.|schreiben → geschrieben, lesen → gelesen, sprechen → gesprochen.
g|Partizip II không có ge-|||động từ đuôi -ieren và có tiền tố không tách|Er hat Medizin {studiert}.|Anh ấy đã học y.|studieren → studiert; besuchen → besucht; verstehen → verstanden.
`;
export default pack;
