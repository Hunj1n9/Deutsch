// B2 · 07 Truyền thông số. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
p|soziale Netzwerke|||mạng xã hội|Viele Jugendliche verbringen Stunden in {sozialen Netzwerken}.|Nhiều thanh thiếu niên dành hàng giờ trên mạng xã hội.|
n|Plattform|die|-en|nền tảng|Die {Plattform} hat Millionen Nutzer.|Nền tảng có hàng triệu người dùng.|
n|Nutzer|der|-|người dùng (nam)|Die {Nutzer} beschweren sich über Werbung.|Người dùng phàn nàn về quảng cáo.|Nữ: die Nutzerin.
n|Beitrag|der|¨-e|bài đăng; khoản đóng góp|Ihr {Beitrag} wurde tausendmal geteilt.|Bài đăng của cô ấy được chia sẻ hàng nghìn lần.|
n|Follower|der|-|người theo dõi|Er hat viele {Follower}.|Anh ấy có nhiều người theo dõi.|
n|Influencer|der|-|người có ảnh hưởng trên mạng|{Influencer} verdienen mit Werbung Geld.|Người có ảnh hưởng kiếm tiền bằng quảng cáo.|
n|Algorithmus|der|Algorithmen|thuật toán|Der {Algorithmus} entscheidet, was wir sehen.|Thuật toán quyết định chúng ta thấy gì.|
n|Privatsphäre|die||quyền riêng tư|Wir müssen unsere {Privatsphäre} schützen.|Chúng ta phải bảo vệ quyền riêng tư.|
n|Cybermobbing|das||bắt nạt trên mạng|{Cybermobbing} ist ein großes Problem an Schulen.|Bắt nạt trên mạng là vấn đề lớn ở trường học.|
n|Hassrede|die|-n|ngôn từ thù hận|Gegen {Hassrede} im Netz muss man vorgehen.|Cần xử lý ngôn từ thù hận trên mạng.|
n|Desinformation|die|-en|thông tin sai lệch|{Desinformation} verbreitet sich schnell.|Thông tin sai lệch lan nhanh.|
n|Medienkompetenz|die|-en|năng lực truyền thông|Schulen sollten {Medienkompetenz} vermitteln.|Trường học nên dạy năng lực truyền thông.|
n|Bildschirmzeit|die||thời gian dùng màn hình|Kinder sollten ihre {Bildschirmzeit} begrenzen.|Trẻ em nên hạn chế thời gian dùng màn hình.|
n|Abhängigkeit|die|-en|sự phụ thuộc|Die {Abhängigkeit} vom Handy wächst.|Sự phụ thuộc vào điện thoại ngày càng tăng.|
n|Erreichbarkeit|die||khả năng liên lạc được|Ständige {Erreichbarkeit} stresst viele.|Luôn phải liên lạc được làm nhiều người căng thẳng.|
n|Datenmissbrauch|der||lạm dụng dữ liệu|{Datenmissbrauch} ist strafbar.|Lạm dụng dữ liệu là phạm pháp.|
n|Cloud|die|-s|đám mây (lưu trữ)|Die Fotos sind in der {Cloud} gespeichert.|Ảnh được lưu trên đám mây.|
n|Videokonferenz|die|-en|hội nghị trực tuyến|Wir haben jeden Morgen eine {Videokonferenz}.|Mỗi sáng chúng tôi họp trực tuyến.|
n|Streamingdienst|der|-e|dịch vụ phát trực tuyến|Ich habe zwei {Streamingdienste} abonniert.|Tôi đăng ký hai dịch vụ xem phim trực tuyến.|
n|Abonnement|das|-s|thuê bao, đăng ký|Ich habe mein {Abonnement} gekündigt.|Tôi đã hủy đăng ký.|
n|Hacker|der|-|tin tặc|{Hacker} haben die Daten gestohlen.|Tin tặc đã đánh cắp dữ liệu.|
n|Sicherheitslücke|die|-n|lỗ hổng bảo mật|Die {Sicherheitslücke} wurde geschlossen.|Lỗ hổng bảo mật đã được vá.|
n|Nachweis|der|-e|bằng chứng|Es gibt keinen {Nachweis} dafür.|Không có bằng chứng nào cho điều đó.|
v|posten|||đăng bài|Sie {postet} jeden Tag Fotos.|Cô ấy đăng ảnh mỗi ngày.|er postet, hat gepostet
v|liken|||thích (bấm like)|Viele haben das Foto {gelikt}.|Nhiều người đã thích bức ảnh.|er likt, hat gelikt
v|kommentieren|||bình luận|Er {kommentiert} jeden Beitrag.|Anh ấy bình luận mọi bài đăng.|er kommentiert, hat kommentiert
v|abonnieren|||đăng ký theo dõi|Ich habe den Kanal {abonniert}.|Tôi đã đăng ký kênh.|er abonniert, hat abonniert
v|blockieren|||chặn|Ich habe den Nutzer {blockiert}.|Tôi đã chặn người dùng đó.|er blockiert, hat blockiert
v|sperren|||khóa|Das Konto wurde {gesperrt}.|Tài khoản bị khóa.|er sperrt, hat gesperrt
v|überprüfen|||kiểm tra lại|Man sollte Quellen immer {überprüfen}.|Nên luôn kiểm tra lại nguồn tin.|er überprüft, hat überprüft
v|manipulieren|||thao túng|Bilder können leicht {manipuliert} werden.|Hình ảnh có thể dễ dàng bị chỉnh sửa.|er manipuliert, hat manipuliert
v|begrenzen|||giới hạn|Eltern {begrenzen} die Handyzeit.|Cha mẹ giới hạn thời gian dùng điện thoại.|er begrenzt, hat begrenzt
v|vernachlässigen|||bỏ bê|Er {vernachlässigt} seine Freunde.|Anh ấy bỏ bê bạn bè.|er vernachlässigt, hat vernachlässigt
v|sich austauschen|||trao đổi|Wir {tauschen} uns online aus.|Chúng tôi trao đổi trực tuyến.|Động từ tách: er tauscht sich aus, hat sich ausgetauscht
adj|öffentlich zugänglich|||công khai, ai cũng truy cập được|Die Daten sind {öffentlich zugänglich}.|Dữ liệu công khai cho mọi người.|
adj|vernetzt|||được kết nối|Wir leben in einer {vernetzten} Welt.|Chúng ta sống trong một thế giới kết nối.|
adj|ständig|||liên tục|Er schaut {ständig} aufs Handy.|Anh ấy liên tục nhìn điện thoại.|
adj|irreführend|||gây hiểu lầm|Die Überschrift ist {irreführend}.|Tiêu đề gây hiểu lầm.|
adj|strafbar|||có thể bị phạt|Beleidigungen im Netz sind {strafbar}.|Xúc phạm trên mạng có thể bị phạt.|
adj|kritisch|||phê phán|Wir sollten Informationen {kritisch} prüfen.|Chúng ta nên kiểm tra thông tin một cách phê phán.|
p|im Netz|||trên mạng|Das habe ich {im Netz} gelesen.|Tôi đã đọc điều đó trên mạng.|
p|viral gehen|||lan truyền chóng mặt|Das Video {ging} viral.|Video lan truyền chóng mặt.|
p|offline gehen|||ngắt kết nối|Am Wochenende {gehe} ich offline.|Cuối tuần tôi ngắt kết nối mạng.|
g|Giới từ Genitiv: mithilfe, anhand|||nhờ vào, dựa vào|Mithilfe {des} Internets kann man viel lernen.|Nhờ Internet có thể học được nhiều điều.|mithilfe/anhand/aufgrund/infolge + Genitiv.
g|als ob + Konjunktiv II|||như thể|Er tut so, als ob er alles {wüsste}.|Anh ta làm như thể mình biết hết mọi thứ.|als ob + Konjunktiv II, động từ cuối; cũng: als + Konjunktiv II (động từ ngay sau).
g|auch wenn: nhượng bộ|||cho dù|Auch wenn es schwer {ist}, gebe ich nicht auf.|Cho dù khó, tôi cũng không bỏ cuộc.|auch wenn + câu phụ; gần nghĩa obwohl.
g|Danh từ hóa động từ với -ung|||văn viết trang trọng|Die {Nutzung} sozialer Medien steigt.|Việc sử dụng mạng xã hội tăng.|nutzen → die Nutzung; entwickeln → die Entwicklung.
n|Digitalkompetenz|die|-en|năng lực số|{Digitalkompetenz} ist heute unverzichtbar.|Năng lực số ngày nay không thể thiếu.|
n|Endgerät|das|-e|thiết bị đầu cuối|Die App läuft auf allen {Endgeräten}.|Ứng dụng chạy trên mọi thiết bị.|
n|Nutzungsbedingung|die|-en|điều khoản sử dụng|Kaum jemand liest die {Nutzungsbedingungen}.|Hầu như không ai đọc điều khoản sử dụng.|
n|Benachrichtigung|die|-en|thông báo (app)|Ich habe die {Benachrichtigungen} ausgeschaltet.|Tôi đã tắt thông báo.|
n|Suchmaschine|die|-n|công cụ tìm kiếm|Ich suche das mit einer {Suchmaschine}.|Tôi tìm bằng công cụ tìm kiếm.|
n|Online-Handel|der||thương mại trực tuyến|Der {Online-Handel} wächst stark.|Thương mại trực tuyến tăng mạnh.|
n|Filterblase|die|-n|bong bóng lọc thông tin|In sozialen Medien lebt man oft in einer {Filterblase}.|Trên mạng xã hội người ta thường sống trong bong bóng thông tin.|
n|Echokammer|die|-n|buồng vang|{Echokammern} verstärken extreme Meinungen.|Buồng vang khuếch đại những ý kiến cực đoan.|
n|Shitstorm|der|-s|làn sóng chỉ trích trên mạng|Nach dem Post folgte ein {Shitstorm}.|Sau bài đăng là một làn sóng chỉ trích.|
n|Selbstdarstellung|die|-en|sự thể hiện bản thân|Instagram dient oft der {Selbstdarstellung}.|Instagram thường dùng để thể hiện bản thân.|
n|Schönheitsideal|das|-e|chuẩn mực cái đẹp|Soziale Medien prägen {Schönheitsideale}.|Mạng xã hội định hình chuẩn mực cái đẹp.|
n|Reichweite|die|-n|độ phủ, tầm ảnh hưởng|Der Kanal hat eine große {Reichweite}.|Kênh có tầm phủ sóng rộng.|
n|Urheberrecht|das|-e|bản quyền|Das Foto ist durch das {Urheberrecht} geschützt.|Bức ảnh được bảo vệ bởi luật bản quyền.|
n|Zugangsdaten|die||thông tin đăng nhập|Geben Sie nie Ihre {Zugangsdaten} weiter.|Đừng bao giờ đưa thông tin đăng nhập cho người khác.|
n|Zwei-Faktor-Authentifizierung|die|-en|xác thực hai yếu tố|Aktivieren Sie die {Zwei-Faktor-Authentifizierung}.|Hãy bật xác thực hai yếu tố.|
n|Online-Unterricht|der||học trực tuyến|Der {Online-Unterricht} war anstrengend.|Học trực tuyến rất mệt.|
n|Digital Detox|das||cai nghiện thiết bị số|Am Wochenende mache ich ein {Digital Detox}.|Cuối tuần tôi cai thiết bị số.|
n|Mediennutzung|die||việc sử dụng truyền thông|Die {Mediennutzung} von Kindern steigt.|Việc dùng truyền thông của trẻ em tăng.|
n|Netzgemeinde|die|-n|cộng đồng mạng|Die {Netzgemeinde} reagierte empört.|Cộng đồng mạng phản ứng phẫn nộ.|
v|streamen|||phát/xem trực tuyến|Ich {streame} Filme am Laptop.|Tôi xem phim trực tuyến trên laptop.|er streamt, hat gestreamt
v|scrollen|||cuộn (màn hình)|Er {scrollt} stundenlang durch Instagram.|Anh ấy lướt Instagram hàng giờ.|er scrollt, hat gescrollt
v|googeln|||tra Google|Ich habe das schnell {gegoogelt}.|Tôi đã tra Google nhanh.|er googelt, hat gegoogelt
v|verifizieren|||xác minh|Bitte {verifizieren} Sie Ihre E-Mail-Adresse.|Vui lòng xác minh địa chỉ email.|er verifiziert, hat verifiziert
v|sich abmelden|||đăng xuất, hủy đăng ký|Ich habe mich vom Newsletter {abgemeldet}.|Tôi đã hủy đăng ký bản tin.|Động từ tách: er meldet sich ab, hat sich abgemeldet
v|ausspionieren|||theo dõi lén|Apps können Nutzer {ausspionieren}.|Ứng dụng có thể theo dõi lén người dùng.|Động từ tách: er spioniert aus, hat ausspioniert
v|hetzen|||kích động|Im Netz wird gegen Minderheiten {gehetzt}.|Trên mạng có người kích động chống thiểu số.|er hetzt, hat gehetzt
v|sich vergleichen|||so sánh mình|Junge Leute {vergleichen} sich ständig mit anderen.|Người trẻ liên tục so sánh mình với người khác.|er vergleicht sich, verglich sich, hat sich verglichen
adj|internetfähig|||kết nối Internet được|Der Fernseher ist {internetfähig}.|TV có thể kết nối Internet.|
adj|datensparsam|||tiết kiệm dữ liệu cá nhân|Die App ist sehr {datensparsam}.|Ứng dụng thu thập rất ít dữ liệu.|
adj|werbefinanziert|||sống nhờ quảng cáo|Die Plattform ist {werbefinanziert}.|Nền tảng sống nhờ quảng cáo.|
adj|smart|||thông minh (thiết bị)|Wir haben einen {smarten} Kühlschrank.|Chúng tôi có tủ lạnh thông minh.|
adj|schnelllebig|||thay đổi chóng mặt|Die digitale Welt ist sehr {schnelllebig}.|Thế giới số thay đổi chóng mặt.|
adj|manipulativ|||mang tính thao túng|Die Werbung ist {manipulativ}.|Quảng cáo mang tính thao túng.|
adj|suchtgefährdet|||có nguy cơ nghiện|Jugendliche sind besonders {suchtgefährdet}.|Thanh thiếu niên đặc biệt có nguy cơ nghiện.|
p|im Internet surfen|||lướt mạng|Abends {surfe} ich im Internet.|Buổi tối tôi lướt mạng.|
p|einen Beitrag teilen|||chia sẻ bài đăng|Sie hat {einen Beitrag geteilt}.|Cô ấy đã chia sẻ một bài đăng.|
p|auf dem neuesten Stand bleiben|||luôn cập nhật|Mit Newslettern {bleibe} ich auf dem neuesten Stand.|Nhờ bản tin tôi luôn cập nhật.|
p|Spuren hinterlassen|||để lại dấu vết|Im Netz {hinterlässt} jeder Spuren.|Trên mạng ai cũng để lại dấu vết.|
n|Netiquette|die||phép lịch sự trên mạng|Bitte halten Sie sich an die {Netiquette}.|Vui lòng tuân thủ phép lịch sự trên mạng.|
n|Kommentarspalte|die|-n|phần bình luận|In der {Kommentarspalte} wird viel gestritten.|Trong phần bình luận có nhiều cãi vã.|
n|Datenleck|das|-s|rò rỉ dữ liệu|Nach dem {Datenleck} änderten alle ihre Passwörter.|Sau vụ rò rỉ dữ liệu mọi người đổi mật khẩu.|
adj|barrierefrei|||không rào cản (dễ tiếp cận)|Die Webseite ist {barrierefrei}.|Trang web dễ tiếp cận cho mọi người.|
v|digitalisieren|||số hóa|Die Behörden {digitalisieren} ihre Akten.|Các cơ quan số hóa hồ sơ.|er digitalisiert, hat digitalisiert
v|abschalten|||tắt; thư giãn|Am Wochenende kann ich endlich {abschalten}.|Cuối tuần cuối cùng tôi cũng được thư giãn.|Động từ tách: er schaltet ab, hat abgeschaltet
p|im Trend liegen|||hợp xu hướng|Podcasts {liegen} im Trend.|Podcast đang là xu hướng.|
p|sich einen Namen machen|||tạo dựng tên tuổi|Sie hat sich als Bloggerin {einen Namen gemacht}.|Cô ấy đã tạo dựng tên tuổi với vai trò blogger.|
`;
export default pack;
