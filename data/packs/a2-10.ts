// A2 · 10 Truyền thông và công nghệ. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Handy|das|-s|điện thoại di động|Mein {Handy} ist kaputt.|Điện thoại của tôi hỏng rồi.|
n|Nachricht|die|-en|tin nhắn; tin tức|Ich schicke dir eine {Nachricht}.|Tôi gửi bạn một tin nhắn.|
n|Internet|das||Internet|Ich suche das im {Internet}.|Tôi tìm cái đó trên mạng.|
n|Webseite|die|-n|trang web|Die Informationen stehen auf der {Webseite}.|Thông tin có trên trang web.|
n|Passwort|das|¨-er|mật khẩu|Ich habe mein {Passwort} vergessen.|Tôi quên mật khẩu.|
n|Bildschirm|der|-e|màn hình|Der {Bildschirm} ist zu dunkel.|Màn hình tối quá.|
n|Tastatur|die|-en|bàn phím|Die {Tastatur} hat keine Umlaute.|Bàn phím không có chữ umlaut.|
n|Drucker|der|-|máy in|Der {Drucker} hat kein Papier mehr.|Máy in hết giấy.|
n|Datei|die|-en|tệp tin|Ich schicke dir die {Datei}.|Tôi gửi bạn tệp tin.|
n|Anhang|der|¨-e|tệp đính kèm|Der Lebenslauf ist im {Anhang}.|Sơ yếu lý lịch ở tệp đính kèm.|
n|Zeitung|die|-en|tờ báo|Ich lese jeden Morgen die {Zeitung}.|Sáng nào tôi cũng đọc báo.|
n|Zeitschrift|die|-en|tạp chí|Die {Zeitschrift} erscheint jeden Monat.|Tạp chí ra hằng tháng.|
n|Sendung|die|-en|chương trình (TV, radio)|Die {Sendung} beginnt um 20 Uhr.|Chương trình bắt đầu lúc 20 giờ.|
n|Radio|das|-s|radio, đài|Im Auto höre ich {Radio}.|Trên xe tôi nghe radio.|
n|Fernseher|der|-|cái TV|Der {Fernseher} ist sehr groß.|Chiếc TV rất to.|
n|Werbung|die|-en|quảng cáo|Im Fernsehen gibt es zu viel {Werbung}.|Trên TV có quá nhiều quảng cáo.|
n|Video|das|-s|video|Hast du das {Video} gesehen?|Bạn xem video đó chưa?|
n|App|die|-s|ứng dụng|Mit dieser {App} lerne ich Vokabeln.|Tôi học từ vựng bằng ứng dụng này.|
n|Akku|der|-s|pin|Mein {Akku} ist leer.|Pin của tôi hết rồi.|
n|Ladegerät|das|-e|cục sạc|Hast du ein {Ladegerät}?|Bạn có cục sạc không?|
n|Kamera|die|-s|máy ảnh|Die {Kamera} macht gute Fotos.|Máy ảnh chụp ảnh đẹp.|
n|Netz|das|-e|mạng; sóng điện thoại|Hier habe ich kein {Netz}.|Ở đây tôi không có sóng.|
n|Medien|die||truyền thông|Junge Leute nutzen andere {Medien}.|Giới trẻ dùng các phương tiện truyền thông khác.|Số nhiều của das Medium.
v|schicken|||gửi|Ich {schicke} dir das Foto.|Tôi gửi bạn bức ảnh.|er schickt, hat geschickt
v|herunterladen|||tải xuống|Ich {lade} die App herunter.|Tôi tải ứng dụng xuống.|Động từ tách: du lädst herunter, er lädt herunter, hat heruntergeladen
v|speichern|||lưu|Vergiss nicht, die Datei zu {speichern}.|Đừng quên lưu tệp.|er speichert, hat gespeichert
v|löschen|||xóa|Ich habe die Nachricht {gelöscht}.|Tôi đã xóa tin nhắn.|er löscht, hat gelöscht
v|drucken|||in|Kannst du das Dokument {drucken}?|Bạn in tài liệu được không?|er druckt, hat gedruckt
v|anklicken|||nhấp chuột vào|Bitte {klicken} Sie den Link an.|Hãy nhấp vào đường dẫn.|klicken auf + Akk; anklicken: er klickt an, hat angeklickt
v|einschalten|||bật|{Schalte} bitte den Fernseher ein.|Bật TV lên đi.|Động từ tách: er schaltet ein, hat eingeschaltet
v|ausschalten|||tắt|Bitte {schalten} Sie das Handy aus.|Xin tắt điện thoại.|Động từ tách: er schaltet aus, hat ausgeschaltet
v|aufladen|||sạc|Ich muss mein Handy {aufladen}.|Tôi phải sạc điện thoại.|Động từ tách: er lädt auf, hat aufgeladen
v|benutzen|||sử dụng|Ich {benutze} das Handy jeden Tag.|Tôi dùng điện thoại mỗi ngày.|er benutzt, hat benutzt
v|surfen|||lướt web|Er {surft} stundenlang im Internet.|Anh ấy lướt mạng hàng giờ.|er surft, hat gesurft
v|chatten|||nhắn tin trò chuyện|Ich {chatte} mit meinen Freunden.|Tôi nhắn tin với bạn bè.|er chattet, hat gechattet
v|erreichen|||liên lạc được|Ich kann dich nicht {erreichen}.|Tôi không liên lạc được với bạn.|er erreicht, hat erreicht
v|sich interessieren|||quan tâm|Er {interessiert} sich für Computer.|Anh ấy quan tâm đến máy tính.|er interessiert sich, hat sich interessiert; für + Akk
v|sich ärgern|||bực mình|Ich {ärgere} mich über den langsamen Computer.|Tôi bực vì máy tính chậm.|er ärgert sich, hat sich geärgert; über + Akk
v|warten auf|||chờ đợi (ai/cái gì)|Ich warte {auf} deine Antwort.|Tôi chờ câu trả lời của bạn.|warten auf + Akk
adj|online|||trực tuyến|Bist du gerade {online}?|Bạn đang trực tuyến à?|
adj|digital|||kỹ thuật số|Die Welt wird immer {digitaler}.|Thế giới ngày càng số hóa.|
adj|langsam|||chậm|Das Internet ist heute {langsam}.|Hôm nay mạng chậm.|
adj|schnell|||nhanh|Antworte bitte {schnell}.|Làm ơn trả lời nhanh.|
adj|aktuell|||cập nhật, thời sự|Hier finden Sie {aktuelle} Nachrichten.|Ở đây có tin tức thời sự.|
adj|kostenlos|||miễn phí|Die App ist {kostenlos}.|Ứng dụng miễn phí.|
adj|süchtig|||nghiện|Er ist {süchtig} nach Computerspielen.|Anh ấy nghiện game máy tính.|
p|Ich melde mich|||tôi sẽ liên lạc lại|{Ich melde mich} morgen bei dir.|Ngày mai tôi sẽ liên lạc với bạn.|
g|Động từ đi với giới từ|||warten auf, denken an, sich interessieren für|Ich denke oft {an} dich.|Tôi hay nghĩ về bạn.|Giới từ là một phần của động từ, học cả cụm: sich freuen auf/über, sprechen über, Angst haben vor.
g|Hỏi về vật: wo(r) + giới từ|||worauf, woran, wofür|{Worauf} wartest du?|Bạn đang chờ gì?|Hỏi về người: Auf wen wartest du?; về vật: Worauf? (thêm r trước nguyên âm).
g|Thay vật bằng da(r) + giới từ|||darauf, daran, dafür|Ich warte {darauf}.|Tôi đang chờ điều đó.|Chỉ dùng cho vật, sự việc; với người dùng giới từ + đại từ: auf ihn.
g|zu + Infinitiv|||sau một số động từ, cụm từ|Es ist wichtig, die Datei zu {speichern}.|Lưu tệp là quan trọng.|Sau: vergessen, versuchen, anfangen, Lust haben, es ist wichtig … dùng zu + Infinitiv.
`;
export default pack;
