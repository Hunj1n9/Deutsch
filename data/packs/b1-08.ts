// B1 · 08 Báo chí và tin tức. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Presse|die||báo chí|Die {Presse} berichtet über den Unfall.|Báo chí đưa tin về vụ tai nạn.|
n|Bericht|der|-e|bản tin, báo cáo|Ich habe einen {Bericht} über Vietnam gelesen.|Tôi đã đọc một bài viết về Việt Nam.|
n|Artikel|der|-|bài báo; mạo từ|Der {Artikel} ist sehr informativ.|Bài báo rất nhiều thông tin.|
n|Schlagzeile|die|-n|tiêu đề báo|Die {Schlagzeile} ist sehr reißerisch.|Tiêu đề rất giật gân.|
n|Journalist|der|-en|nhà báo (nam)|Der {Journalist} interviewt den Minister.|Nhà báo phỏng vấn bộ trưởng.|n-Deklination. Nữ: die Journalistin.
n|Interview|das|-s|cuộc phỏng vấn|Das {Interview} erscheint morgen.|Bài phỏng vấn sẽ đăng ngày mai.|
n|Quelle|die|-n|nguồn (tin)|Die {Quelle} ist zuverlässig.|Nguồn tin đáng tin cậy.|
n|Meldung|die|-en|tin ngắn, thông báo|Laut einer {Meldung} gab es ein Erdbeben.|Theo một bản tin đã có động đất.|
n|Zeuge|der|-n|nhân chứng (nam)|Der {Zeuge} hat alles gesehen.|Nhân chứng đã thấy mọi chuyện.|n-Deklination. Nữ: die Zeugin.
n|Polizeibericht|der|-e|báo cáo của cảnh sát|Im {Polizeibericht} steht nichts davon.|Báo cáo của cảnh sát không ghi điều đó.|
n|Täter|der|-|thủ phạm|Der {Täter} ist geflohen.|Thủ phạm đã bỏ trốn.|
n|Opfer|das|-|nạn nhân|Die {Opfer} wurden ins Krankenhaus gebracht.|Các nạn nhân được đưa vào bệnh viện.|
n|Verbrechen|das|-|tội ác|Das {Verbrechen} wurde schnell aufgeklärt.|Vụ án được làm sáng tỏ nhanh chóng.|
n|Diebstahl|der|¨-e|vụ trộm|Der {Diebstahl} passierte am Bahnhof.|Vụ trộm xảy ra ở nhà ga.|
n|Feuerwehr|die|-en|đội cứu hỏa|Die {Feuerwehr} löschte das Feuer.|Lính cứu hỏa dập tắt đám cháy.|
n|Brand|der|¨-e|đám cháy|Bei dem {Brand} wurde niemand verletzt.|Không ai bị thương trong vụ cháy.|
n|Erdbeben|das|-|động đất|Das {Erdbeben} war sehr stark.|Trận động đất rất mạnh.|
n|Katastrophe|die|-n|thảm họa|Die Flut war eine {Katastrophe}.|Trận lũ là một thảm họa.|
n|Regierung|die|-en|chính phủ|Die {Regierung} plant neue Gesetze.|Chính phủ dự định luật mới.|
n|Minister|der|-|bộ trưởng (nam)|Der {Minister} hielt eine Rede.|Bộ trưởng có bài phát biểu.|Nữ: die Ministerin.
n|Gesetz|das|-e|luật|Das neue {Gesetz} gilt ab Januar.|Luật mới có hiệu lực từ tháng Một.|
n|Umfrage|die|-n|cuộc thăm dò|Laut {Umfrage} sind viele unzufrieden.|Theo khảo sát, nhiều người không hài lòng.|
n|Statistik|die|-en|thống kê|Die {Statistik} zeigt einen Anstieg.|Thống kê cho thấy sự gia tăng.|
n|Prozent|das|-e|phần trăm|30 {Prozent} der Befragten sind dagegen.|30 phần trăm người được hỏi phản đối.|Sau số giữ nguyên: 30 Prozent.
n|Leser|der|-|độc giả|Die {Leser} schreiben viele Briefe.|Độc giả viết nhiều thư.|
n|Nachrichtensendung|die|-en|chương trình thời sự|Um 20 Uhr kommt die {Nachrichtensendung}.|20 giờ có chương trình thời sự.|
n|Falschmeldung|die|-en|tin giả|Im Internet gibt es viele {Falschmeldungen}.|Trên mạng có nhiều tin giả.|Cũng nói: Fake News.
n|Meinungsfreiheit|die||tự do ngôn luận|{Meinungsfreiheit} ist ein Grundrecht.|Tự do ngôn luận là quyền cơ bản.|
v|veröffentlichen|||công bố, xuất bản|Die Studie wurde gestern {veröffentlicht}.|Nghiên cứu được công bố hôm qua.|er veröffentlicht, hat veröffentlicht
v|erscheinen|||xuất hiện; được phát hành|Die Zeitschrift {erscheint} monatlich.|Tạp chí ra hằng tháng.|er erscheint, erschien, ist erschienen
v|melden|||báo, thông báo|Die Polizei {meldete} einen Unfall.|Cảnh sát thông báo một vụ tai nạn.|er meldet, hat gemeldet
v|festnehmen|||bắt giữ|Der Täter wurde {festgenommen}.|Thủ phạm đã bị bắt.|Động từ tách: er nimmt fest, nahm fest, hat festgenommen
v|stehlen|||ăn trộm|Mir wurde das Fahrrad {gestohlen}.|Xe đạp của tôi bị trộm.|du stiehlst, er stiehlt, stahl, hat gestohlen
v|verletzen|||làm bị thương|Bei dem Unfall wurden zwei Personen {verletzt}.|Hai người bị thương trong vụ tai nạn.|er verletzt, hat verletzt
v|zerstören|||phá hủy|Der Sturm {zerstörte} viele Häuser.|Cơn bão phá hủy nhiều ngôi nhà.|er zerstört, hat zerstört
v|ereignen|||xảy ra (trang trọng)|Der Unfall {ereignete} sich gegen 8 Uhr.|Vụ tai nạn xảy ra khoảng 8 giờ.|es ereignet sich, hat sich ereignet
v|befragen|||phỏng vấn, hỏi ý kiến|1000 Personen wurden {befragt}.|1000 người đã được hỏi ý kiến.|er befragt, hat befragt
v|informieren|||thông báo, cung cấp thông tin|Wir {informieren} Sie über alle Änderungen.|Chúng tôi sẽ thông báo mọi thay đổi.|er informiert, hat informiert
v|sich informieren|||tìm hiểu thông tin|Ich {informiere} mich im Internet.|Tôi tìm hiểu thông tin trên mạng.|er informiert sich, hat sich informiert; über + Akk
v|bestätigen|||xác nhận|Die Polizei hat die Meldung {bestätigt}.|Cảnh sát đã xác nhận tin này.|er bestätigt, hat bestätigt
v|behaupten|||khẳng định (chưa chứng minh)|Er {behauptet}, dass er unschuldig ist.|Anh ta khẳng định mình vô tội.|er behauptet, hat behauptet
v|vermuten|||phỏng đoán|Die Polizei {vermutet} Brandstiftung.|Cảnh sát nghi là phóng hỏa.|er vermutet, hat vermutet
adj|politisch|||thuộc về chính trị|Die {politische} Lage ist ruhig.|Tình hình chính trị ổn định.|
adj|wirtschaftlich|||thuộc về kinh tế|Die {wirtschaftliche} Lage verbessert sich.|Tình hình kinh tế đang cải thiện.|
adj|international|||quốc tế|Das ist eine {internationale} Zeitung.|Đây là một tờ báo quốc tế.|
adj|regional|||khu vực, địa phương|Ich lese die {regionale} Zeitung.|Tôi đọc báo địa phương.|
adj|objektiv|||khách quan|Ein Journalist sollte {objektiv} berichten.|Nhà báo nên đưa tin khách quan.|
adj|seriös|||nghiêm túc, đáng tin|Das ist eine {seriöse} Quelle.|Đây là một nguồn đáng tin.|
adj|glaubwürdig|||đáng tin|Die Nachricht ist nicht {glaubwürdig}.|Tin này không đáng tin.|
adj|unschuldig|||vô tội|Der Mann ist {unschuldig}.|Người đàn ông vô tội.|
adj|schuldig|||có tội|Das Gericht hielt ihn für {schuldig}.|Tòa án cho rằng anh ta có tội.|
adj|zahlreich|||nhiều, đông đảo|{Zahlreiche} Leser haben reagiert.|Rất nhiều độc giả đã phản hồi.|
adj|tödlich|||chết người|Der Unfall war {tödlich}.|Vụ tai nạn gây chết người.|
g|laut: theo (nguồn tin)|||theo …|{Laut} Polizei gab es keine Verletzten.|Theo cảnh sát không có người bị thương.|laut + Dativ (văn viết cũng dùng Genitiv), thường không có mạo từ: laut Polizei, laut Umfrage.
adv|angeblich|||được cho là|Er war {angeblich} zu Hause.|Anh ta được cho là ở nhà.|
adv|offenbar|||rõ ràng là, hình như|Der Täter kannte das Opfer {offenbar}.|Hình như thủ phạm quen nạn nhân.|
p|Stellung nehmen|||bày tỏ quan điểm|Der Minister {nahm} Stellung zu den Vorwürfen.|Bộ trưởng lên tiếng về các cáo buộc.|Stellung nehmen zu + Dativ.
p|in die Schlagzeilen geraten|||lên trang nhất|Der Politiker {geriet} in die Schlagzeilen.|Chính trị gia đó lên trang nhất.|
g|Bị động Präteritum: wurde + Partizip II|||văn phong bản tin|Das Haus {wurde} 1890 gebaut.|Ngôi nhà được xây năm 1890.|wurde, wurdest, wurde, wurden + Partizip II.
g|Bị động Perfekt: ist … worden|||đã được làm|Der Täter ist gestern {festgenommen} worden.|Thủ phạm đã bị bắt hôm qua.|sein + Partizip II + worden (không có ge-).
g|von + Dativ: tác nhân trong câu bị động|||bởi ai|Der Brief wurde {von} der Chefin geschrieben.|Lá thư do bà giám đốc viết.|Nguyên nhân/phương tiện dùng durch + Akk.
g|Genitiv của danh từ|||sở hữu: des Mannes, der Frau|Das Auto {des} Nachbarn wurde gestohlen.|Xe của người hàng xóm bị trộm.|der/das → des (+ -s/-es); die, số nhiều → der.
n|Nachrichtenagentur|die|-en|hãng thông tấn|Die {Nachrichtenagentur} meldet einen Unfall.|Hãng thông tấn đưa tin về một vụ tai nạn.|
n|Redaktion|die|-en|ban biên tập|Die {Redaktion} hat den Artikel geprüft.|Ban biên tập đã kiểm tra bài báo.|
n|Leserbrief|der|-e|thư bạn đọc|Ich habe einen {Leserbrief} geschrieben.|Tôi đã viết một lá thư bạn đọc.|
n|Kommentar|der|-e|bình luận|Der {Kommentar} ist sehr kritisch.|Bài bình luận rất gay gắt.|
n|Reportage|die|-n|phóng sự|Die {Reportage} zeigt das Leben auf dem Land.|Phóng sự cho thấy cuộc sống nông thôn.|
n|Überschrift|die|-en|tiêu đề|Lies zuerst die {Überschrift}.|Hãy đọc tiêu đề trước.|
n|Auflage|die|-n|số lượng in (báo)|Die Zeitung hat eine hohe {Auflage}.|Tờ báo có số lượng phát hành lớn.|
n|Vorfall|der|¨-e|sự việc, sự cố|Die Polizei untersucht den {Vorfall}.|Cảnh sát điều tra sự việc.|
n|Ermittlung|die|-en|cuộc điều tra|Die {Ermittlungen} dauern noch an.|Cuộc điều tra vẫn đang tiếp diễn.|
n|Urteil|das|-e|bản án; sự phán xét|Das {Urteil} wurde gestern gesprochen.|Bản án được tuyên hôm qua.|
v|ermitteln|||điều tra|Die Polizei {ermittelt} gegen den Mann.|Cảnh sát điều tra người đàn ông.|er ermittelt, hat ermittelt
v|verurteilen|||kết án; lên án|Er wurde zu zwei Jahren {verurteilt}.|Anh ta bị kết án hai năm.|er verurteilt, hat verurteilt
v|fliehen|||chạy trốn|Der Täter {floh} mit dem Auto.|Thủ phạm bỏ trốn bằng ô tô.|er flieht, floh, ist geflohen
v|aufklären|||làm sáng tỏ|Der Fall wurde schnell {aufgeklärt}.|Vụ việc được làm sáng tỏ nhanh chóng.|Động từ tách: er klärt auf, hat aufgeklärt
v|verbreiten|||lan truyền|Falsche Nachrichten {verbreiten} sich schnell.|Tin giả lan truyền nhanh.|er verbreitet, hat verbreitet
adj|unabhängig|||độc lập|Wir brauchen {unabhängige} Medien.|Chúng ta cần truyền thông độc lập.|
adj|reißerisch|||giật gân|Die Überschrift ist sehr {reißerisch}.|Tiêu đề rất giật gân.|
adj|verdächtig|||đáng ngờ|Der Mann ist {verdächtig}.|Người đàn ông đáng ngờ.|
p|Schlagzeilen machen|||lên báo|Der Fall {machte} Schlagzeilen.|Vụ việc lên báo.|
`;
export default pack;
