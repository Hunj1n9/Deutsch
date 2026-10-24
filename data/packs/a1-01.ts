// A1 · 01 Chào hỏi và giới thiệu. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
p|Hallo|||xin chào|{Hallo}, ich bin Minh.|Xin chào, tôi là Minh.|Chào thân mật, dùng mọi lúc.
p|Guten Morgen|||chào buổi sáng|{Guten Morgen}, Frau Weber!|Chào buổi sáng, cô Weber!|Dùng đến khoảng 10–11 giờ sáng.
p|Guten Tag|||xin chào (ban ngày)|{Guten Tag}, Herr Schmidt.|Xin chào ông Schmidt.|Lịch sự, dùng ban ngày.
p|Guten Abend|||chào buổi tối|{Guten Abend}, wie geht es Ihnen?|Chào buổi tối, ông/bà khỏe không?|
p|Gute Nacht|||chúc ngủ ngon|{Gute Nacht}, bis morgen!|Chúc ngủ ngon, mai gặp lại!|Chỉ dùng khi chia tay buổi tối, đi ngủ.
p|Tschüss|||tạm biệt (thân mật)|{Tschüss}, bis später!|Tạm biệt, lát gặp lại!|
p|Auf Wiedersehen|||tạm biệt (lịch sự)|Danke und {auf Wiedersehen}!|Cảm ơn và tạm biệt!|
p|Bis bald|||hẹn sớm gặp lại|Schönes Wochenende und {bis bald}!|Cuối tuần vui vẻ và hẹn sớm gặp lại!|
p|Wie geht's?|||khỏe không? (thân mật)|Hallo Anna, {wie geht's}?|Chào Anna, khỏe không?|Dạng lịch sự: Wie geht es Ihnen?
p|Wie geht es Ihnen?|||ông/bà có khỏe không?|Guten Tag, Herr Lang, {wie geht es Ihnen}?|Xin chào ông Lang, ông có khỏe không?|Ihnen là dạng lịch sự (Dativ của Sie).
p|Mir geht es gut|||tôi khỏe|Danke, {mir geht es gut}.|Cảm ơn, tôi khỏe.|
p|Danke|||cảm ơn|{Danke} für die Hilfe!|Cảm ơn vì đã giúp!|Danke schön / vielen Dank: trang trọng hơn.
p|Bitte|||xin mời; không có gì; làm ơn|Ein Wasser, {bitte}.|Cho một cốc nước, làm ơn.|Đáp lại Danke cũng dùng Bitte.
p|Entschuldigung|||xin lỗi; xin phép|{Entschuldigung}, wo ist der Bahnhof?|Xin lỗi, nhà ga ở đâu?|
p|Freut mich|||rất vui được gặp|Ich bin Paul. – {Freut mich}!|Tôi là Paul. – Rất vui được gặp!|
p|Wie heißt du?|||bạn tên là gì?|Hallo, {wie heißt du}?|Chào bạn, bạn tên gì?|Lịch sự: Wie heißen Sie?
p|Woher kommst du?|||bạn đến từ đâu?|{Woher kommst du}? – Aus Vietnam.|Bạn đến từ đâu? – Từ Việt Nam.|
p|Ich komme aus|||tôi đến từ|{Ich komme aus} Vietnam.|Tôi đến từ Việt Nam.|aus + tên nước; một số nước có mạo từ: aus der Schweiz.
p|Ich wohne in|||tôi sống ở|{Ich wohne in} Hanoi.|Tôi sống ở Hà Nội.|
p|Ja|||vâng, có|{Ja}, ich bin Studentin.|Vâng, tôi là sinh viên.|
p|Nein|||không|{Nein}, ich komme aus Hue.|Không, tôi đến từ Huế.|
v|sein|||là, thì, ở|Ich {bin} Lan.|Tôi là Lan.|ich bin, du bist, er ist, wir sind, ihr seid, sie sind; Perfekt: ist gewesen
v|heißen|||tên là|Ich {heiße} Minh.|Tôi tên là Minh.|er heißt, hat geheißen
v|kommen|||đến|Wir {kommen} aus Vietnam.|Chúng tôi đến từ Việt Nam.|er kommt, ist gekommen
v|wohnen|||sống, cư trú|Sie {wohnt} in Berlin.|Cô ấy sống ở Berlin.|er wohnt, hat gewohnt
v|sprechen|||nói (ngôn ngữ)|Ich {spreche} Vietnamesisch und ein bisschen Deutsch.|Tôi nói tiếng Việt và một chút tiếng Đức.|du sprichst, er spricht, hat gesprochen
v|lernen|||học|Ich {lerne} Deutsch.|Tôi học tiếng Đức.|er lernt, hat gelernt
v|buchstabieren|||đánh vần|Können Sie das bitte {buchstabieren}?|Ông/bà đánh vần giúp được không?|er buchstabiert, hat buchstabiert
v|verstehen|||hiểu|Ich {verstehe} das nicht.|Tôi không hiểu cái đó.|er versteht, hat verstanden
pron|ich|||tôi|{Ich} bin Lan.|Tôi là Lan.|
pron|du|||bạn (thân mật)|Bist {du} neu hier?|Bạn mới đến đây à?|Dùng với bạn bè, gia đình, trẻ em.
pron|er|||anh ấy, ông ấy; nó (giống đực)|{Er} heißt Tom.|Anh ấy tên là Tom.|
pron|sie|||cô ấy, bà ấy; họ|{Sie} kommt aus Polen.|Cô ấy đến từ Ba Lan.|sie + động từ số ít = cô ấy; + số nhiều = họ.
p|Wie heißen Sie?|||ông/bà tên là gì?|Guten Tag, {wie heißen Sie}?|Xin chào, ông/bà tên là gì?|Sie (viết hoa) là cách xưng hô lịch sự; động từ chia như sie (họ).
pron|wir|||chúng tôi, chúng ta|{Wir} lernen zusammen.|Chúng tôi học cùng nhau.|
pron|ihr|||các bạn|Woher kommt {ihr}?|Các bạn đến từ đâu?|
pron|wer|||ai|{Wer} ist das?|Đó là ai?|
adv|wie|||như thế nào, thế nào|{Wie} heißen Sie?|Ông/bà tên gì?|
adv|woher|||từ đâu|{Woher} kommen Sie?|Ông/bà đến từ đâu?|
adv|wo|||ở đâu|{Wo} wohnst du?|Bạn sống ở đâu?|
adv|auch|||cũng|Ich komme {auch} aus Vietnam.|Tôi cũng đến từ Việt Nam.|
adv|hier|||ở đây|Ich bin neu {hier}.|Tôi mới đến đây.|
n|Name|der|-n|tên|Mein {Name} ist Lan.|Tên tôi là Lan.|
n|Vorname|der|-n|tên (riêng)|Mein {Vorname} ist Minh.|Tên riêng của tôi là Minh.|
n|Nachname|der|-n|họ|Wie ist Ihr {Nachname}?|Họ của ông/bà là gì?|
n|Land|das|¨-er|đất nước|Aus welchem {Land} kommst du?|Bạn đến từ nước nào?|
n|Stadt|die|¨-e|thành phố|Hanoi ist eine große {Stadt}.|Hà Nội là một thành phố lớn.|
n|Sprache|die|-n|ngôn ngữ|Welche {Sprachen} sprichst du?|Bạn nói những ngôn ngữ nào?|
n|Deutsch|das||tiếng Đức|{Deutsch} ist interessant.|Tiếng Đức thú vị.|Tên ngôn ngữ là danh từ giống trung, thường không dùng mạo từ.
n|Herr|der|-en|ông, ngài|Das ist {Herr} Müller.|Đây là ông Müller.|n-Deklination: den/dem Herrn.
n|Frau|die|-en|bà, cô; người phụ nữ; vợ|Guten Tag, {Frau} Nguyen!|Xin chào bà Nguyễn!|
n|Kurs|der|-e|khóa học, lớp|Der {Kurs} beginnt heute.|Khóa học bắt đầu hôm nay.|
n|Adresse|die|-n|địa chỉ|Wie ist Ihre {Adresse}?|Địa chỉ của ông/bà là gì?|
n|Telefonnummer|die|-n|số điện thoại|Meine {Telefonnummer} ist 0176 123456.|Số điện thoại của tôi là 0176 123456.|
adj|neu|||mới|Ich bin {neu} im Kurs.|Tôi mới vào lớp.|
g|sein: ich bin, du bist, er ist|||chia động từ sein ở hiện tại|Du {bist} Lan, oder?|Bạn là Lan phải không?|sein là động từ bất quy tắc: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.
g|Câu hỏi W: động từ đứng thứ hai|||câu hỏi bắt đầu bằng từ để hỏi|Woher {kommst} du?|Bạn đến từ đâu?|Từ để hỏi ở vị trí 1, động từ chia ở vị trí 2, rồi đến chủ ngữ.
g|Câu hỏi có/không: động từ đứng đầu|||câu hỏi trả lời ja/nein|{Sprichst} du Deutsch?|Bạn có nói tiếng Đức không?|Động từ chia đứng đầu câu, chủ ngữ đứng sau.
g|Đuôi động từ ở thì hiện tại|||chia động từ có quy tắc: -e, -st, -t, -en, -t, -en|Wir {wohnen} in Hanoi.|Chúng tôi sống ở Hà Nội.|ich wohn-e, du wohn-st, er wohn-t, wir wohn-en, ihr wohn-t, sie wohn-en.
`;
export default pack;
