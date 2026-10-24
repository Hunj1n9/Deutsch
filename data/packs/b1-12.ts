// B1 · 12 Khoa học và kỹ thuật. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Technik|die|-en|kỹ thuật, công nghệ|Ich interessiere mich für {Technik}.|Tôi quan tâm đến kỹ thuật.|
n|Technologie|die|-n|công nghệ|Neue {Technologien} verändern die Arbeit.|Công nghệ mới thay đổi cách làm việc.|
n|Erfindung|die|-en|phát minh|Das Telefon war eine wichtige {Erfindung}.|Điện thoại là một phát minh quan trọng.|
n|Erfinder|der|-|nhà phát minh (nam)|Der {Erfinder} wurde berühmt.|Nhà phát minh trở nên nổi tiếng.|Nữ: die Erfinderin.
n|Entwicklung|die|-en|sự phát triển|Die {Entwicklung} des Handys ging schnell.|Điện thoại phát triển rất nhanh.|
n|Fortschritt|der|-e|sự tiến bộ|Der technische {Fortschritt} hat Vor- und Nachteile.|Tiến bộ kỹ thuật có cả mặt lợi và hại.|
n|Forschung|die|-en|nghiên cứu|Die {Forschung} braucht viel Geld.|Nghiên cứu cần nhiều tiền.|
n|Wissenschaftler|der|-|nhà khoa học (nam)|Die {Wissenschaftler} haben ein neues Medikament entwickelt.|Các nhà khoa học đã phát triển một loại thuốc mới.|Nữ: die Wissenschaftlerin.
n|Experiment|das|-e|thí nghiệm|Das {Experiment} war erfolgreich.|Thí nghiệm thành công.|
n|Ergebnis|das|-se|kết quả|Die {Ergebnisse} werden nächste Woche veröffentlicht.|Kết quả sẽ được công bố tuần sau.|
n|Gerät|das|-e|thiết bị|Das {Gerät} ist leicht zu bedienen.|Thiết bị dễ sử dụng.|
n|Maschine|die|-n|máy móc|Die {Maschine} arbeitet Tag und Nacht.|Cỗ máy chạy cả ngày lẫn đêm.|
n|Roboter|der|-|rô-bốt|In der Fabrik arbeiten viele {Roboter}.|Trong nhà máy có nhiều rô-bốt làm việc.|
n|Software|die|-s|phần mềm|Die {Software} muss aktualisiert werden.|Phần mềm cần được cập nhật.|
n|Daten|die||dữ liệu|Wir müssen unsere {Daten} schützen.|Chúng ta phải bảo vệ dữ liệu của mình.|Số nhiều của Datum (dữ liệu).
n|Datenschutz|der||bảo vệ dữ liệu|Der {Datenschutz} ist in Deutschland streng.|Bảo vệ dữ liệu ở Đức rất nghiêm ngặt.|
n|Künstliche Intelligenz|die||trí tuệ nhân tạo|{Künstliche Intelligenz} wird immer wichtiger.|Trí tuệ nhân tạo ngày càng quan trọng.|Viết tắt: KI.
n|Bedienungsanleitung|die|-en|sách hướng dẫn sử dụng|Lies zuerst die {Bedienungsanleitung}.|Hãy đọc hướng dẫn sử dụng trước.|
n|Funktion|die|-en|chức năng|Welche {Funktionen} hat das Handy?|Điện thoại có những chức năng gì?|
n|Vorteil|der|-e|ưu điểm|Ein {Vorteil} ist der niedrige Preis.|Một ưu điểm là giá thấp.|
n|Nachteil|der|-e|nhược điểm|Der größte {Nachteil} ist das Gewicht.|Nhược điểm lớn nhất là trọng lượng.|
n|Raumfahrt|die||ngành hàng không vũ trụ|Die {Raumfahrt} ist sehr teuer.|Ngành vũ trụ rất tốn kém.|
n|Weltall|das||vũ trụ|Im {Weltall} gibt es keine Luft.|Trong vũ trụ không có không khí.|
n|Labor|das|-e|phòng thí nghiệm|Sie arbeitet in einem {Labor}.|Cô ấy làm việc trong phòng thí nghiệm.|
n|Studie|die|-n|nghiên cứu (công trình)|Laut einer {Studie} schlafen wir zu wenig.|Theo một nghiên cứu, chúng ta ngủ quá ít.|
n|Netzwerk|das|-e|mạng lưới|Das {Netzwerk} ist sehr schnell.|Mạng rất nhanh.|
n|Störung|die|-en|sự cố, trục trặc|Es gibt eine technische {Störung}.|Có một sự cố kỹ thuật.|
v|erfinden|||phát minh|Wer hat das Auto {erfunden}?|Ai đã phát minh ra ô tô?|er erfindet, erfand, hat erfunden
v|entwickeln|||phát triển|Die Firma {entwickelt} neue Software.|Công ty phát triển phần mềm mới.|er entwickelt, hat entwickelt
v|forschen|||nghiên cứu|Sie {forscht} über Krebs.|Bà ấy nghiên cứu về ung thư.|er forscht, hat geforscht
v|herstellen|||sản xuất|Die Fabrik {stellt} Autos her.|Nhà máy sản xuất ô tô.|Động từ tách: er stellt her, hat hergestellt
v|funktionieren|||hoạt động|Der Drucker {funktioniert} wieder.|Máy in hoạt động lại rồi.|es funktioniert, hat funktioniert
v|aktualisieren|||cập nhật|Bitte {aktualisieren} Sie die App.|Hãy cập nhật ứng dụng.|er aktualisiert, hat aktualisiert
v|installieren|||cài đặt|Ich {installiere} ein neues Programm.|Tôi cài một chương trình mới.|er installiert, hat installiert
v|ersetzen|||thay thế|Maschinen {ersetzen} manche Arbeiter.|Máy móc thay thế một số công nhân.|er ersetzt, hat ersetzt
v|steuern|||điều khiển|Man kann die Heizung mit dem Handy {steuern}.|Có thể điều khiển lò sưởi bằng điện thoại.|er steuert, hat gesteuert
v|beweisen|||chứng minh|Die Studie {beweist} das nicht.|Nghiên cứu không chứng minh được điều đó.|er beweist, bewies, hat bewiesen
v|vereinfachen|||đơn giản hóa|Die App {vereinfacht} den Alltag.|Ứng dụng làm cuộc sống hằng ngày đơn giản hơn.|er vereinfacht, hat vereinfacht
v|abhängen|||phụ thuộc|Das {hängt} vom Wetter ab.|Điều đó phụ thuộc vào thời tiết.|Động từ tách: es hängt ab, hing ab, hat abgehangen; von + Dativ
v|verbinden|||kết nối|Ich {verbinde} das Handy mit dem Fernseher.|Tôi kết nối điện thoại với TV.|er verbindet, verband, hat verbunden
adj|technisch|||thuộc về kỹ thuật|Er hat ein {technisches} Problem.|Anh ấy gặp vấn đề kỹ thuật.|
adj|wissenschaftlich|||khoa học|Das ist {wissenschaftlich} bewiesen.|Điều đó đã được khoa học chứng minh.|
adj|automatisch|||tự động|Die Tür öffnet sich {automatisch}.|Cửa tự động mở.|
adj|elektrisch|||chạy bằng điện|Das ist ein {elektrisches} Fahrrad.|Đây là xe đạp điện.|
adj|innovativ|||đổi mới|Die Firma ist sehr {innovativ}.|Công ty rất đổi mới.|
adj|nützlich|||hữu ích|Die App ist sehr {nützlich}.|Ứng dụng rất hữu ích.|
adj|benutzerfreundlich|||thân thiện với người dùng|Die Software ist {benutzerfreundlich}.|Phần mềm dễ dùng.|
adj|kompliziert|||phức tạp|Die Bedienung ist zu {kompliziert}.|Cách sử dụng quá phức tạp.|
adj|veraltet|||lỗi thời|Mein Computer ist {veraltet}.|Máy tính của tôi đã lỗi thời.|
adj|abhängig|||phụ thuộc|Viele sind vom Handy {abhängig}.|Nhiều người phụ thuộc vào điện thoại.|abhängig von + Dativ
adj|virtuell|||ảo|Wir treffen uns in einem {virtuellen} Raum.|Chúng tôi gặp nhau trong một không gian ảo.|
conj|sodass|||đến nỗi, nên|Es regnete stark, {sodass} das Spiel ausfiel.|Mưa to đến nỗi trận đấu bị hủy.|Câu phụ chỉ kết quả, động từ cuối.
p|auf dem neuesten Stand|||cập nhật mới nhất|Die Technik ist {auf dem neuesten Stand}.|Công nghệ ở mức mới nhất.|
p|Vor- und Nachteile|||ưu và nhược điểm|Das Internet hat {Vor- und Nachteile}.|Internet có ưu và nhược điểm.|
p|in Betrieb nehmen|||đưa vào vận hành|Die neue Anlage wird morgen {in Betrieb genommen}.|Hệ thống mới sẽ được vận hành vào ngày mai.|
g|seit / bis: thời gian|||từ khi / cho đến khi|Ich warte, bis der Computer {startet}.|Tôi chờ cho đến khi máy tính khởi động.|seit + Dativ (giới từ) hoặc câu phụ; bis + câu phụ hoặc giới từ (+ Akk).
g|sodass: kết quả|||nên, đến mức|Der Akku war leer, sodass ich nicht {anrufen} konnte.|Pin hết nên tôi không gọi được.|so + tính từ, dass …: Er war so müde, dass er einschlief.
g|Động từ + giới từ (mở rộng)|||abhängen von, bestehen aus, sich beschäftigen mit|Der Erfolg hängt {von} der Qualität ab.|Thành công phụ thuộc vào chất lượng.|Học động từ cùng giới từ và cách của nó.
g|Hỏi bằng wo(r)- với giới từ|||wovon, womit, woraus|{Woraus} besteht das Material?|Vật liệu này gồm những gì?|Câu trả lời cho vật: daraus, damit, davon.
n|Digitalisierung|die||số hóa|Die {Digitalisierung} verändert die Arbeitswelt.|Số hóa thay đổi thế giới việc làm.|
n|Smartphone|das|-s|điện thoại thông minh|Fast jeder hat ein {Smartphone}.|Hầu như ai cũng có điện thoại thông minh.|
n|Speicher|der|-|bộ nhớ|Der {Speicher} meines Handys ist voll.|Bộ nhớ điện thoại của tôi đầy rồi.|
n|Benutzer|der|-|người dùng|Die App hat Millionen {Benutzer}.|Ứng dụng có hàng triệu người dùng.|
n|Sicherheit|die|-en|sự an toàn, bảo mật|Die {Sicherheit} der Daten ist wichtig.|Bảo mật dữ liệu là quan trọng.|
n|Virus|das|Viren|vi-rút|Mein Computer hat einen {Virus}.|Máy tính của tôi bị nhiễm vi-rút.|
n|Erfolgsgeschichte|die|-n|câu chuyện thành công|Die Firma ist eine {Erfolgsgeschichte}.|Công ty là một câu chuyện thành công.|
n|Entdeckung|die|-en|sự phát hiện|Die {Entdeckung} des Penicillins war ein Zufall.|Việc phát hiện ra penicillin là một sự tình cờ.|
n|Zufall|der|¨-e|sự tình cờ|Das war reiner {Zufall}.|Đó hoàn toàn là tình cờ.|
n|Anwendung|die|-en|ứng dụng, sự áp dụng|Die {Anwendung} ist einfach.|Việc áp dụng rất đơn giản.|
v|programmieren|||lập trình|Er {programmiert} Apps.|Anh ấy lập trình ứng dụng.|er programmiert, hat programmiert
v|hochladen|||tải lên|Ich {lade} die Fotos hoch.|Tôi tải ảnh lên.|Động từ tách: du lädst hoch, er lädt hoch, hat hochgeladen
v|einloggen|||đăng nhập|Ich kann mich nicht {einloggen}.|Tôi không đăng nhập được.|Động từ tách: er loggt sich ein, hat sich eingeloggt
v|ausloggen|||đăng xuất|Vergiss nicht, dich {auszuloggen}.|Đừng quên đăng xuất.|Động từ tách: er loggt sich aus, hat sich ausgeloggt
v|vernetzen|||kết nối mạng|Alle Geräte sind {vernetzt}.|Mọi thiết bị đều được nối mạng.|er vernetzt, hat vernetzt
adj|kabellos|||không dây|Ich habe {kabellose} Kopfhörer.|Tôi có tai nghe không dây.|
adj|tragbar|||xách tay|Das Gerät ist leicht und {tragbar}.|Thiết bị nhẹ và xách tay được.|
adj|zukunftsorientiert|||hướng tới tương lai|Die Ausbildung ist {zukunftsorientiert}.|Chương trình đào tạo hướng tới tương lai.|
p|auf dem Bildschirm|||trên màn hình|Was siehst du {auf dem Bildschirm}?|Bạn thấy gì trên màn hình?|
p|mit der Zeit gehen|||theo kịp thời đại|Man muss {mit der Zeit gehen}.|Phải theo kịp thời đại.|
`;
export default pack;
