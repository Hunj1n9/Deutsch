// B2 · 13 Thuyết trình và lập luận. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Präsentation|die|-en|bài thuyết trình|Meine {Präsentation} dauert zehn Minuten.|Bài thuyết trình của tôi kéo dài mười phút.|
n|Vortrag|der|¨-e|bài diễn thuyết|Der {Vortrag} war sehr informativ.|Bài diễn thuyết rất nhiều thông tin.|
n|Gliederung|die|-en|dàn ý|Zuerst zeige ich Ihnen die {Gliederung}.|Trước tiên tôi cho quý vị xem dàn ý.|
n|Einleitung|die|-en|phần mở đầu|In der {Einleitung} nenne ich das Thema.|Trong phần mở đầu tôi nêu chủ đề.|
n|Hauptteil|der|-e|phần thân|Im {Hauptteil} stelle ich drei Argumente vor.|Ở phần thân tôi trình bày ba lập luận.|
n|Fazit|das|-s|kết luận|Mein {Fazit} ist positiv.|Kết luận của tôi là tích cực.|
n|Folie|die|-n|trang chiếu (slide)|Auf der nächsten {Folie} sehen Sie eine Grafik.|Ở trang chiếu tiếp theo quý vị thấy một biểu đồ.|
n|Zuhörer|der|-|người nghe|Die {Zuhörer} stellten viele Fragen.|Người nghe đặt nhiều câu hỏi.|
n|Aufmerksamkeit|die||sự chú ý|Vielen Dank für Ihre {Aufmerksamkeit}.|Cảm ơn quý vị đã chú ý lắng nghe.|
n|Redemittel|das|-|mẫu câu diễn đạt|Diese {Redemittel} helfen bei der Präsentation.|Những mẫu câu này giúp ích khi thuyết trình.|
n|Stichpunkt|der|-e|ý chính (gạch đầu dòng)|Ich schreibe mir {Stichpunkte} auf.|Tôi ghi lại các ý chính.|
n|Aspekt|der|-e|khía cạnh|Ein wichtiger {Aspekt} ist die Finanzierung.|Một khía cạnh quan trọng là tài chính.|
n|Schwerpunkt|der|-e|trọng tâm|Der {Schwerpunkt} liegt auf der Praxis.|Trọng tâm là thực hành.|
n|Überblick|der|-e|cái nhìn tổng quan|Ich gebe Ihnen einen kurzen {Überblick}.|Tôi đưa quý vị cái nhìn tổng quan ngắn.|
n|Gegensatz|der|¨-e|sự đối lập|Im {Gegensatz} zu früher arbeiten viele im Homeoffice.|Khác với trước đây, nhiều người làm việc tại nhà.|
n|Stellungnahme|die|-n|bài bày tỏ quan điểm|Schreiben Sie eine {Stellungnahme} zum Thema.|Hãy viết một bài bày tỏ quan điểm về chủ đề.|
n|Erörterung|die|-en|bài nghị luận|In der {Erörterung} wägt man Argumente ab.|Trong bài nghị luận người ta cân nhắc các lập luận.|
n|Rückfrage|die|-n|câu hỏi lại|Gibt es noch {Rückfragen}?|Còn câu hỏi nào không?|
n|Diskussionsrunde|die|-n|vòng thảo luận|Nach dem Vortrag gibt es eine {Diskussionsrunde}.|Sau bài nói có một vòng thảo luận.|
v|erläutern|||giải thích rõ|Ich möchte das an einem Beispiel {erläutern}.|Tôi muốn giải thích điều đó bằng một ví dụ.|er erläutert, hat erläutert
v|hervorheben|||làm nổi bật|Ich möchte zwei Punkte {hervorheben}.|Tôi muốn làm nổi bật hai điểm.|Động từ tách: er hebt hervor, hob hervor, hat hervorgehoben
v|eingehen|||đi sâu vào|Auf diesen Punkt {gehe} ich später ein.|Tôi sẽ đi sâu vào điểm này sau.|Động từ tách: er geht ein, ging ein, ist eingegangen; auf + Akk
v|überleiten|||chuyển tiếp|Damit {leite} ich zum nächsten Punkt über.|Với điều đó tôi chuyển sang điểm tiếp theo.|Động từ tách: er leitet über, hat übergeleitet
v|verweisen|||dẫn chiếu|Ich {verweise} auf die Statistik.|Tôi dẫn chiếu đến số liệu thống kê.|er verweist, verwies, hat verwiesen; auf + Akk
v|aufgreifen|||nhắc lại, tiếp thu (ý)|Ich möchte Ihre Frage {aufgreifen}.|Tôi muốn trả lời câu hỏi của quý vị.|Động từ tách: er greift auf, griff auf, hat aufgegriffen
v|sich beziehen|||liên quan, dựa vào|Ich {beziehe} mich auf eine Studie aus 2020.|Tôi dựa vào một nghiên cứu năm 2020.|er bezieht sich, bezog sich, hat sich bezogen; auf + Akk
v|ableiten|||rút ra|Daraus lässt sich {ableiten}, dass …|Từ đó có thể rút ra rằng …|Động từ tách: er leitet ab, hat abgeleitet
adj|anschaulich|||sinh động, dễ hình dung|Sie hat das sehr {anschaulich} erklärt.|Cô ấy giải thích rất dễ hình dung.|
adj|verständlich|||dễ hiểu|Der Vortrag war gut {verständlich}.|Bài nói rất dễ hiểu.|
adj|strukturiert|||có cấu trúc|Die Präsentation ist gut {strukturiert}.|Bài thuyết trình có cấu trúc tốt.|
adj|prägnant|||súc tích|Fassen Sie sich {prägnant}.|Hãy nói súc tích.|
adj|ausführlich|||chi tiết|Er hat das Thema {ausführlich} behandelt.|Anh ấy đã trình bày chủ đề rất chi tiết.|
adj|abschließend|||sau cùng|{Abschließend} möchte ich mich bedanken.|Cuối cùng tôi muốn cảm ơn.|
adv|ferner|||hơn nữa|{Ferner} ist zu beachten, dass …|Hơn nữa cần lưu ý rằng …|
adv|zudem|||ngoài ra|{Zudem} sind die Kosten gestiegen.|Ngoài ra chi phí đã tăng.|
adv|darüber hinaus|||hơn thế nữa|{Darüber hinaus} gibt es weitere Vorteile.|Hơn thế nữa còn có những lợi ích khác.|
adv|letztlich|||rốt cuộc|{Letztlich} müssen Sie selbst entscheiden.|Rốt cuộc quý vị phải tự quyết định.|
p|Ich komme nun zu|||bây giờ tôi chuyển sang|{Ich komme nun zu} meinem zweiten Punkt.|Bây giờ tôi chuyển sang điểm thứ hai.|
p|Wie Sie sehen|||như quý vị thấy|{Wie Sie sehen}, ist die Zahl gestiegen.|Như quý vị thấy, con số đã tăng.|
p|Zusammenfassend lässt sich sagen|||tóm lại có thể nói|{Zusammenfassend lässt sich sagen}, dass das Projekt erfolgreich war.|Tóm lại có thể nói dự án đã thành công.|
p|Vielen Dank für Ihre Aufmerksamkeit|||cảm ơn quý vị đã lắng nghe|{Vielen Dank für Ihre Aufmerksamkeit}!|Cảm ơn quý vị đã lắng nghe!|
p|Ich möchte Ihnen … vorstellen|||tôi muốn giới thiệu với quý vị|Heute {möchte} ich Ihnen unser Projekt vorstellen.|Hôm nay tôi muốn giới thiệu với quý vị dự án của chúng tôi.|
g|Liên từ cấu trúc bài: zunächst, ferner, abschließend|||trình tự lập luận|Zunächst {möchte} ich das Problem beschreiben.|Trước hết tôi muốn mô tả vấn đề.|zunächst → anschließend/ferner → abschließend: động từ ngay sau.
g|Tóm tắt: der Text handelt von|||mẫu câu tóm tắt|Der Text {handelt} von den Folgen der Digitalisierung.|Bài viết nói về hậu quả của số hóa.|Tóm tắt dùng Präsens, ngôi thứ ba, không trích nguyên văn.
g|Trích dẫn gián tiếp: laut / nach Angaben von|||nêu nguồn khi trình bày|Nach Angaben {des} Statistischen Bundesamts ist die Zahl gestiegen.|Theo số liệu của Tổng cục Thống kê Liên bang, con số đã tăng.|nach Angaben + Genitiv / von + Dativ.
g|Câu hỏi tu từ khi thuyết trình|||thu hút người nghe|Was bedeutet {das} für uns?|Điều đó có ý nghĩa gì với chúng ta?|Đặt câu hỏi rồi tự trả lời giúp chuyển ý mượt mà.
n|Rednerin|die|-nen|nữ diễn giả|Die {Rednerin} sprach frei.|Nữ diễn giả nói không cần giấy.|Nam: der Redner.
n|Lampenfieber|das||hồi hộp trước khi lên sân khấu|Vor der Präsentation habe ich {Lampenfieber}.|Trước buổi thuyết trình tôi hồi hộp.|
n|Körpersprache|die||ngôn ngữ cơ thể|Achten Sie auf Ihre {Körpersprache}.|Hãy chú ý ngôn ngữ cơ thể.|
n|Blickkontakt|der|-e|giao tiếp bằng mắt|Halten Sie {Blickkontakt} mit dem Publikum.|Hãy giữ giao tiếp bằng mắt với khán giả.|
n|Handout|das|-s|tài liệu phát tay|Ich verteile ein {Handout}.|Tôi phát tài liệu.|
n|Beamer|der|-|máy chiếu|Der {Beamer} funktioniert nicht.|Máy chiếu không hoạt động.|
n|Moderation|die|-en|việc dẫn chương trình|Sie übernimmt die {Moderation}.|Cô ấy đảm nhận việc dẫn chương trình.|
n|Diskussionsleiter|der|-|người điều phối thảo luận|Der {Diskussionsleiter} erteilt das Wort.|Người điều phối trao lời.|
n|Wortmeldung|die|-en|lượt xin phát biểu|Gibt es weitere {Wortmeldungen}?|Còn ai xin phát biểu nữa không?|
n|Hauptargument|das|-e|lập luận chính|Mein {Hauptargument} ist die Sicherheit.|Lập luận chính của tôi là sự an toàn.|
n|Beleg|der|-e|bằng chứng, dẫn chứng|Haben Sie einen {Beleg} für diese These?|Ông/bà có dẫn chứng cho luận điểm này không?|
n|Leitfrage|die|-n|câu hỏi dẫn dắt|Die {Leitfrage} meines Vortrags lautet …|Câu hỏi dẫn dắt bài nói của tôi là …|
n|Ausblick|der|-e|triển vọng|Zum Schluss gebe ich einen {Ausblick}.|Cuối cùng tôi đưa ra triển vọng.|
n|Gedankengang|der|¨-e|mạch suy nghĩ|Können Sie meinem {Gedankengang} folgen?|Quý vị có theo kịp mạch suy nghĩ của tôi không?|
n|Rhetorik|die||thuật hùng biện|Er beherrscht die {Rhetorik}.|Anh ấy nắm vững thuật hùng biện.|
n|Überzeugungskraft|die||sức thuyết phục|Ihre Rede hatte große {Überzeugungskraft}.|Bài phát biểu của cô ấy rất có sức thuyết phục.|
v|moderieren|||dẫn chương trình|Wer {moderiert} die Diskussion?|Ai dẫn cuộc thảo luận?|er moderiert, hat moderiert
v|das Wort ergreifen|||lên tiếng phát biểu|Dann {ergriff} der Minister das Wort.|Sau đó bộ trưởng lên tiếng.|er ergreift das Wort, ergriff, hat ergriffen
v|einleiten|||mở đầu|Ich {leite} meinen Vortrag mit einer Frage ein.|Tôi mở đầu bài nói bằng một câu hỏi.|Động từ tách: er leitet ein, hat eingeleitet
v|aufzeigen|||chỉ ra|Ich möchte drei Lösungen {aufzeigen}.|Tôi muốn chỉ ra ba giải pháp.|Động từ tách: er zeigt auf, hat aufgezeigt
v|darlegen|||trình bày rõ|Er {legte} seine Gründe ausführlich dar.|Anh ấy trình bày lý do rất chi tiết.|Động từ tách: er legt dar, hat dargelegt
v|untermauern|||củng cố (lập luận)|Sie {untermauert} ihre These mit Zahlen.|Cô ấy củng cố luận điểm bằng số liệu.|er untermauert, hat untermauert
v|entkräften|||bác bỏ (lập luận)|Er konnte das Argument {entkräften}.|Anh ấy đã bác bỏ được lập luận.|er entkräftet, hat entkräftet
v|resümieren|||tóm lược|Zum Schluss {resümiere} ich die Ergebnisse.|Cuối cùng tôi tóm lược kết quả.|er resümiert, hat resümiert
adj|rhetorisch|||tu từ|Das war eine {rhetorische} Frage.|Đó là một câu hỏi tu từ.|
adj|souverän|||tự tin, vững vàng|Sie präsentierte sehr {souverän}.|Cô ấy thuyết trình rất vững vàng.|
adj|einleuchtend|||rõ ràng, dễ hiểu|Das Argument ist {einleuchtend}.|Lập luận rõ ràng dễ hiểu.|
adj|stichhaltig|||vững chắc (lập luận)|Ihre Argumente sind {stichhaltig}.|Lập luận của cô ấy vững chắc.|
adj|zielgruppengerecht|||phù hợp với người nghe|Der Vortrag war {zielgruppengerecht}.|Bài nói phù hợp với đối tượng người nghe.|
p|Ich fasse zusammen|||tôi xin tóm tắt|{Ich fasse zusammen}: Das Projekt ist sinnvoll.|Tôi xin tóm tắt: dự án là hợp lý.|
p|Lassen Sie mich mit … beginnen|||cho phép tôi bắt đầu bằng|{Lassen Sie mich mit} einem Beispiel beginnen.|Cho phép tôi bắt đầu bằng một ví dụ.|
p|Damit komme ich zum Schluss|||đến đây tôi xin kết thúc|{Damit komme ich zum Schluss}.|Đến đây tôi xin kết thúc.|
p|Gibt es noch Fragen?|||còn câu hỏi nào không?|Ich bin fertig. {Gibt es noch Fragen}?|Tôi đã trình bày xong. Còn câu hỏi nào không?|
p|den roten Faden verlieren|||lạc mạch|Ich habe kurz {den roten Faden verloren}.|Tôi bị lạc mạch một chút.|
p|auf den Punkt bringen|||nói thẳng vào vấn đề|Lassen Sie mich das {auf den Punkt bringen}.|Cho phép tôi nói thẳng vào vấn đề.|
n|Kernaussage|die|-n|thông điệp cốt lõi|Was ist die {Kernaussage} des Textes?|Thông điệp cốt lõi của văn bản là gì?|
n|Redezeit|die|-en|thời gian phát biểu|Jeder hat fünf Minuten {Redezeit}.|Mỗi người có năm phút phát biểu.|
n|Publikumsfrage|die|-n|câu hỏi từ khán giả|Ich beantworte gern {Publikumsfragen}.|Tôi sẵn lòng trả lời câu hỏi của khán giả.|
adj|eloquent|||hùng biện, lưu loát|Sie ist eine sehr {eloquente} Rednerin.|Cô ấy là một diễn giả rất lưu loát.|
v|paraphrasieren|||diễn đạt lại|Versuchen Sie, das Zitat zu {paraphrasieren}.|Hãy thử diễn đạt lại câu trích dẫn.|er paraphrasiert, hat paraphrasiert
v|gewichten|||đánh giá mức độ quan trọng|Wie {gewichten} Sie die Argumente?|Ông/bà đánh giá mức độ quan trọng của các lập luận thế nào?|er gewichtet, hat gewichtet
p|aus meiner Sicht|||theo góc nhìn của tôi|{Aus meiner Sicht} ist das die beste Lösung.|Theo góc nhìn của tôi đó là giải pháp tốt nhất.|
p|die Aufmerksamkeit lenken auf|||hướng sự chú ý vào|Ich möchte {die Aufmerksamkeit} auf einen Punkt lenken.|Tôi muốn hướng sự chú ý vào một điểm.|
`;
export default pack;
