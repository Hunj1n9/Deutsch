// B2 · 01 Tính cách và quan hệ. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Persönlichkeit|die|-en|tính cách, nhân cách|Sie hat eine starke {Persönlichkeit}.|Cô ấy có cá tính mạnh.|
n|Charakter|der|-e|tính cách|Er hat einen schwierigen {Charakter}.|Anh ấy có tính cách khó.|
n|Eigenschaft|die|-en|đặc điểm|Ehrlichkeit ist eine wichtige {Eigenschaft}.|Trung thực là một đức tính quan trọng.|
n|Temperament|das|-e|khí chất, tính khí|Sie hat ein feuriges {Temperament}.|Cô ấy có tính khí nóng nảy.|
n|Selbstbewusstsein|das||sự tự tin|Ihr {Selbstbewusstsein} ist gewachsen.|Sự tự tin của cô ấy đã tăng lên.|
n|Selbstwertgefühl|das||lòng tự trọng|Lob stärkt das {Selbstwertgefühl}.|Lời khen củng cố lòng tự trọng.|
n|Einfühlungsvermögen|das||khả năng thấu cảm|Ärzte brauchen viel {Einfühlungsvermögen}.|Bác sĩ cần nhiều khả năng thấu cảm.|
n|Zuverlässigkeit|die||sự đáng tin cậy|{Zuverlässigkeit} ist ihm sehr wichtig.|Sự đáng tin cậy rất quan trọng với anh ấy.|
n|Ehrgeiz|der||tham vọng|Sein {Ehrgeiz} kennt keine Grenzen.|Tham vọng của anh ấy không có giới hạn.|
n|Neugier|die||sự tò mò|Die {Neugier} der Kinder ist groß.|Trẻ em rất tò mò.|
n|Geduld|die||sự kiên nhẫn|Beim Sprachenlernen braucht man {Geduld}.|Học ngoại ngữ cần kiên nhẫn.|
n|Humor|der||khiếu hài hước|Er hat einen trockenen {Humor}.|Anh ấy có kiểu hài hước tỉnh bơ.|
n|Vorbild|das|-er|tấm gương|Meine Mutter ist mein {Vorbild}.|Mẹ là tấm gương của tôi.|
n|Bezugsperson|die|-en|người thân thiết (gắn bó)|Für Kinder ist eine feste {Bezugsperson} wichtig.|Với trẻ em, một người gắn bó cố định là quan trọng.|
n|Bekanntschaft|die|-en|người quen; sự quen biết|Auf der Reise habe ich viele {Bekanntschaften} gemacht.|Trong chuyến đi tôi làm quen được nhiều người.|
n|Partnerschaft|die|-en|quan hệ đối tác; quan hệ bạn đời|Eine {Partnerschaft} braucht Vertrauen.|Một mối quan hệ cần sự tin tưởng.|
n|Zuneigung|die|-en|tình cảm, sự quý mến|Er zeigt seine {Zuneigung} nicht offen.|Anh ấy không thể hiện tình cảm công khai.|
n|Abneigung|die|-en|sự ác cảm|Sie hat eine {Abneigung} gegen Lügen.|Cô ấy ghét sự dối trá.|
n|Eifersucht|die||sự ghen tuông|{Eifersucht} kann eine Beziehung zerstören.|Ghen tuông có thể phá hủy một mối quan hệ.|
n|Konfliktfähigkeit|die||khả năng xử lý xung đột|{Konfliktfähigkeit} ist im Team wichtig.|Khả năng xử lý xung đột quan trọng trong nhóm.|
n|Verhalten|das||cách cư xử|Sein {Verhalten} war unhöflich.|Cách cư xử của anh ấy bất lịch sự.|
n|Anerkennung|die|-en|sự công nhận|Jeder Mensch braucht {Anerkennung}.|Ai cũng cần được công nhận.|
n|Enttäuschung|die|-en|sự thất vọng|Die {Enttäuschung} war groß.|Nỗi thất vọng rất lớn.|
n|Erwartung|die|-en|kỳ vọng|Die {Erwartungen} waren zu hoch.|Kỳ vọng quá cao.|
n|Rücksichtnahme|die||sự ý tứ, quan tâm người khác|{Rücksichtnahme} macht das Zusammenleben leichter.|Sự ý tứ làm cuộc sống chung dễ dàng hơn.|
v|sich verlassen|||tin cậy vào|Auf sie kann man {sich} immer verlassen.|Luôn có thể tin cậy vào cô ấy.|du verlässt dich, er verlässt sich, hat sich verlassen; auf + Akk
v|sich anvertrauen|||tâm sự, giãi bày|Sie hat {sich} ihrer Freundin anvertraut.|Cô ấy tâm sự với bạn mình.|Động từ tách: er vertraut sich an, hat sich anvertraut; + Dativ
v|schätzen|||quý trọng; ước lượng|Ich {schätze} deine Ehrlichkeit.|Tôi quý sự thẳng thắn của bạn.|er schätzt, hat geschätzt
v|bewundern|||ngưỡng mộ|Ich {bewundere} ihren Mut.|Tôi ngưỡng mộ lòng dũng cảm của cô ấy.|er bewundert, hat bewundert
v|verachten|||khinh thường|Er {verachtet} Unehrlichkeit.|Anh ấy khinh thường sự giả dối.|er verachtet, hat verachtet
v|beeindrucken|||gây ấn tượng|Ihre Rede hat mich {beeindruckt}.|Bài phát biểu của cô ấy làm tôi ấn tượng.|er beeindruckt, hat beeindruckt
v|enttäuschen|||làm thất vọng|Du hast mich {enttäuscht}.|Bạn đã làm tôi thất vọng.|er enttäuscht, hat enttäuscht
v|sich auseinandersetzen|||đối mặt, giải quyết|Wir müssen {uns} mit dem Problem auseinandersetzen.|Chúng ta phải đối mặt với vấn đề.|Động từ tách: er setzt sich auseinander, hat sich auseinandergesetzt; mit + Dativ
v|sich zurückziehen|||rút lui, thu mình|Nach dem Streit {zog} er sich zurück.|Sau cuộc cãi vã anh ấy thu mình lại.|Động từ tách: er zieht sich zurück, zog sich zurück, hat sich zurückgezogen
v|übernehmen|||đảm nhận|Sie {übernimmt} gern Verantwortung.|Cô ấy sẵn sàng nhận trách nhiệm.|du übernimmst, er übernimmt, übernahm, hat übernommen
v|neigen|||có xu hướng|Er {neigt} zu Übertreibungen.|Anh ấy có xu hướng phóng đại.|er neigt, hat geneigt; zu + Dativ
v|sich verhalten|||cư xử|Er hat {sich} sehr seltsam verhalten.|Anh ấy cư xử rất lạ.|du verhältst dich, er verhält sich, verhielt sich, hat sich verhalten
adj|zurückhaltend|||dè dặt|Sie ist eher {zurückhaltend}.|Cô ấy khá dè dặt.|
adj|aufgeschlossen|||cởi mở|Er ist neuen Ideen gegenüber {aufgeschlossen}.|Anh ấy cởi mở với ý tưởng mới.|
adj|ehrgeizig|||đầy tham vọng|Die Studentin ist sehr {ehrgeizig}.|Cô sinh viên rất có tham vọng.|
adj|empfindlich|||nhạy cảm, dễ tổn thương|Er ist sehr {empfindlich} bei Kritik.|Anh ấy rất nhạy cảm với lời phê bình.|
adj|gelassen|||điềm tĩnh|Sie blieb ganz {gelassen}.|Cô ấy vẫn rất điềm tĩnh.|
adj|launisch|||thất thường|Mein Chef ist ziemlich {launisch}.|Sếp tôi khá thất thường.|
adj|neugierig|||tò mò|Kinder sind von Natur aus {neugierig}.|Trẻ em vốn tò mò.|
adj|stur|||bướng bỉnh|Mein Bruder kann sehr {stur} sein.|Anh tôi có thể rất bướng.|
adj|verlässlich|||đáng tin cậy|Er ist ein {verlässlicher} Freund.|Anh ấy là một người bạn đáng tin cậy.|
adj|kontaktfreudig|||thích giao tiếp|Sie ist sehr {kontaktfreudig}.|Cô ấy rất thích giao tiếp.|
adj|schüchtern|||nhút nhát|Als Kind war ich sehr {schüchtern}.|Hồi nhỏ tôi rất nhút nhát.|
adj|oberflächlich|||hời hợt|Das Gespräch blieb {oberflächlich}.|Cuộc trò chuyện vẫn hời hợt.|
adj|tiefgründig|||sâu sắc|Sie führt gern {tiefgründige} Gespräche.|Cô ấy thích những cuộc trò chuyện sâu sắc.|
adj|vertrauenswürdig|||đáng tin|Er wirkt {vertrauenswürdig}.|Anh ấy trông đáng tin.|
p|Verantwortung übernehmen|||nhận trách nhiệm|Er {übernimmt} Verantwortung für seine Fehler.|Anh ấy nhận trách nhiệm cho lỗi của mình.|Nomen-Verb-Verbindung.
p|Rücksicht nehmen|||ý tứ, quan tâm|Bitte {nehmt} Rücksicht auf die anderen.|Hãy ý tứ với người khác.|
p|Kritik üben|||phê bình|Sie {übte} scharfe Kritik an dem Plan.|Bà ấy phê bình gay gắt kế hoạch.|Kritik üben an + Dativ.
p|einen Eindruck machen|||tạo ấn tượng|Er hat einen guten {Eindruck} gemacht.|Anh ấy đã tạo ấn tượng tốt.|
p|in Kontakt bleiben|||giữ liên lạc|Lass uns {in Kontakt bleiben}!|Mình giữ liên lạc nhé!|
p|jemandem auf die Nerven gehen|||làm ai phát bực|Sein Lärm {geht} mir auf die Nerven.|Tiếng ồn của anh ta làm tôi phát bực.|
p|unter vier Augen|||nói riêng|Können wir {unter vier Augen} sprechen?|Chúng ta nói chuyện riêng được không?|
g|Nomen-Verb-Verbindungen|||danh từ + động từ mang nghĩa như một động từ|Wir müssen eine Entscheidung {treffen}.|Chúng ta phải đưa ra quyết định.|eine Entscheidung treffen = entscheiden; in Frage stellen, zur Verfügung stehen, Bescheid geben…
g|Tính từ đi với giới từ|||stolz auf, zufrieden mit, abhängig von|Ich bin stolz {auf} meine Tochter.|Tôi tự hào về con gái.|Học cả cụm: interessiert an + Dat, verliebt in + Akk, eifersüchtig auf + Akk.
g|Đuôi tính từ sau đại từ bất định|||einige, mehrere, viele + đuôi mạnh|Er hat viele {gute} Freunde.|Anh ấy có nhiều bạn tốt.|Sau einige, viele, mehrere, wenige: đuôi như không mạo từ (gute, guten …).
g|Đuôi tính từ sau alle, keine (số nhiều)|||đuôi yếu -en|Alle {neuen} Kollegen sind nett.|Tất cả đồng nghiệp mới đều dễ mến.|Sau alle, beide, keine, meine (số nhiều): -en.
n|Gewissen|das||lương tâm|Er hat ein schlechtes {Gewissen}.|Anh ấy cắn rứt lương tâm.|
n|Verlegenheit|die|-en|sự bối rối|In seiner {Verlegenheit} sagte er nichts.|Vì bối rối anh ấy không nói gì.|
n|Gelassenheit|die||sự điềm tĩnh|Mit {Gelassenheit} löst man Probleme besser.|Điềm tĩnh thì giải quyết vấn đề tốt hơn.|
n|Hilfsbereitschaft|die||sự sẵn lòng giúp đỡ|Ihre {Hilfsbereitschaft} ist bewundernswert.|Sự sẵn lòng giúp đỡ của cô ấy thật đáng ngưỡng mộ.|
n|Ehrlichkeit|die||sự trung thực|{Ehrlichkeit} ist mir das Wichtigste.|Trung thực là điều quan trọng nhất với tôi.|
n|Höflichkeit|die||sự lịch sự|Aus {Höflichkeit} hat sie nichts gesagt.|Vì lịch sự cô ấy không nói gì.|
n|Unsicherheit|die|-en|sự thiếu tự tin, bất an|Seine {Unsicherheit} war deutlich zu spüren.|Sự bất an của anh ấy thấy rõ.|
n|Vorliebe|die|-n|sở thích đặc biệt|Sie hat eine {Vorliebe} für alte Filme.|Cô ấy đặc biệt thích phim cũ.|
n|Gesprächsbereitschaft|die||thiện chí đối thoại|Beide Seiten zeigen {Gesprächsbereitschaft}.|Cả hai bên đều tỏ thiện chí đối thoại.|
n|Mitgefühl|das||lòng trắc ẩn|Er zeigt viel {Mitgefühl}.|Anh ấy rất biết cảm thông.|
n|Freundeskreis|der|-e|nhóm bạn|Mein {Freundeskreis} ist klein, aber fein.|Nhóm bạn của tôi nhỏ nhưng thân.|
n|Clique|die|-n|nhóm bạn thân (nhóm nhỏ)|In der Schule hatte ich eine feste {Clique}.|Hồi đi học tôi có một nhóm bạn cố định.|
n|Lebenspartner|der|-|bạn đời (nam)|Ihr {Lebenspartner} ist Architekt.|Bạn đời của cô ấy là kiến trúc sư.|Nữ: die Lebenspartnerin.
n|Trennung|die|-en|sự chia tay|Nach der {Trennung} zog sie nach Köln.|Sau khi chia tay cô ấy chuyển đến Köln.|
n|Scheidung|die|-en|sự ly hôn|Die {Scheidung} war schwer für die Kinder.|Việc ly hôn khó khăn cho bọn trẻ.|
n|Vorwurf|der|¨-e|lời trách móc|Mach dir keine {Vorwürfe}!|Đừng tự trách mình!|
n|Kränkung|die|-en|sự xúc phạm|Das war eine schwere {Kränkung}.|Đó là một sự xúc phạm nặng nề.|
v|beleidigen|||xúc phạm|Er hat mich {beleidigt}.|Anh ta đã xúc phạm tôi.|er beleidigt, hat beleidigt
v|kränken|||làm tổn thương|Deine Worte haben sie {gekränkt}.|Lời của bạn đã làm cô ấy tổn thương.|er kränkt, hat gekränkt
v|verzeihen|||tha thứ|Ich kann ihm nicht {verzeihen}.|Tôi không thể tha thứ cho anh ta.|er verzeiht, verzieh, hat verziehen; + Dativ
v|vorwerfen|||trách móc|Sie {wirft} ihm Egoismus vor.|Cô ấy trách anh ích kỷ.|Động từ tách: du wirfst vor, er wirft vor, warf vor, hat vorgeworfen
v|sich einfühlen|||thấu cảm|Sie kann sich gut in andere {einfühlen}.|Cô ấy dễ thấu cảm với người khác.|Động từ tách: er fühlt sich ein, hat sich eingefühlt
v|wertschätzen|||trân trọng|Ich {wertschätze} deine Arbeit sehr.|Tôi rất trân trọng công việc của bạn.|er wertschätzt, hat wertgeschätzt
v|sich öffnen|||mở lòng|Es fällt ihm schwer, sich zu {öffnen}.|Anh ấy khó mở lòng.|er öffnet sich, hat sich geöffnet
v|zurechtkommen|||hòa hợp, xoay xở|Mit meinem Chef {komme} ich gut zurecht.|Tôi hòa hợp tốt với sếp.|Động từ tách: er kommt zurecht, kam zurecht, ist zurechtgekommen; mit + Dativ
v|auskommen|||sống hòa hợp|Die Nachbarn {kommen} gut miteinander aus.|Hàng xóm sống hòa hợp với nhau.|Động từ tách: er kommt aus, kam aus, ist ausgekommen
v|sich angegriffen fühlen|||cảm thấy bị công kích|Er {fühlt} sich schnell angegriffen.|Anh ấy dễ cảm thấy bị công kích.|er fühlt sich angegriffen, hat sich angegriffen gefühlt
v|ausgleichen|||cân bằng, bù đắp|Sie {gleicht} seine Schwächen aus.|Cô ấy bù đắp những điểm yếu của anh.|Động từ tách: er gleicht aus, glich aus, hat ausgeglichen
adj|ausgeglichen|||điềm đạm, cân bằng|Sie ist ein sehr {ausgeglichener} Mensch.|Cô ấy là người rất điềm đạm.|
adj|temperamentvoll|||sôi nổi|Er ist sehr {temperamentvoll}.|Anh ấy rất sôi nổi.|
adj|nachtragend|||hay để bụng|Sie ist überhaupt nicht {nachtragend}.|Cô ấy không hề để bụng.|
adj|verständnisvoll|||thấu hiểu|Meine Eltern sind sehr {verständnisvoll}.|Bố mẹ tôi rất thấu hiểu.|
adj|rücksichtslos|||vô tâm, bất chấp|Sein Verhalten war {rücksichtslos}.|Cách cư xử của anh ta thật vô tâm.|
adj|zuvorkommend|||ân cần|Das Personal war sehr {zuvorkommend}.|Nhân viên rất ân cần.|
adj|unzuverlässig|||không đáng tin cậy|Er ist leider sehr {unzuverlässig}.|Tiếc là anh ấy không đáng tin cậy.|
adj|selbstkritisch|||tự phê bình|Sie ist sehr {selbstkritisch}.|Cô ấy rất biết tự phê bình.|
adj|harmoniebedürftig|||cần sự hòa thuận|Er ist sehr {harmoniebedürftig} und meidet Streit.|Anh ấy rất cần hòa thuận và tránh cãi vã.|
adj|gutmütig|||tốt bụng, hiền lành|Mein Opa ist sehr {gutmütig}.|Ông tôi rất hiền lành.|
p|auf einer Wellenlänge sein|||hợp gu, cùng tần số|Wir {sind} auf einer Wellenlänge.|Chúng tôi rất hợp nhau.|
p|jemanden im Stich lassen|||bỏ rơi ai|Er hat mich nie {im Stich gelassen}.|Anh ấy chưa bao giờ bỏ rơi tôi.|
p|sich Zeit nehmen|||dành thời gian|Sie {nimmt} sich Zeit für ihre Kinder.|Cô ấy dành thời gian cho con cái.|
p|ein offenes Ohr haben|||sẵn lòng lắng nghe|Meine Freundin {hat} immer ein offenes Ohr für mich.|Bạn tôi luôn sẵn lòng lắng nghe tôi.|
p|Vertrauen fassen|||bắt đầu tin tưởng|Langsam {fasste} sie Vertrauen zu ihm.|Dần dần cô ấy bắt đầu tin tưởng anh.|
n|Charakterzug|der|¨-e|nét tính cách|Geduld ist ein schöner {Charakterzug}.|Kiên nhẫn là một nét tính cách đẹp.|
n|Freundschaftsdienst|der|-e|việc giúp đỡ vì tình bạn|Das mache ich als {Freundschaftsdienst}.|Tôi làm việc này vì tình bạn.|
adj|unberechenbar|||khó đoán|Er ist völlig {unberechenbar}.|Anh ta hoàn toàn khó đoán.|
adj|bodenständig|||chân chất, thực tế|Meine Familie ist sehr {bodenständig}.|Gia đình tôi rất chân chất.|
v|sich anfreunden|||kết bạn|Im Kurs habe ich mich mit Anna {angefreundet}.|Trong lớp tôi đã kết bạn với Anna.|Động từ tách: er freundet sich an, hat sich angefreundet; mit + Dativ
v|sich entfremden|||trở nên xa cách|Die Geschwister haben sich {entfremdet}.|Anh chị em đã trở nên xa cách.|er entfremdet sich, hat sich entfremdet
p|die Nase voll haben|||chán ngấy|Ich {habe} die Nase voll von seinen Ausreden.|Tôi chán ngấy những lời bào chữa của anh ta.|
p|ein Herz und eine Seele sein|||thân thiết như một|Die beiden {sind} ein Herz und eine Seele.|Hai người thân thiết như một.|
p|jemandem den Rücken stärken|||ủng hộ ai|Meine Eltern {stärken} mir den Rücken.|Bố mẹ luôn ủng hộ tôi.|
`;
export default pack;
