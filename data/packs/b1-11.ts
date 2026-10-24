// B1 · 11 Nghệ thuật và giải trí. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Kunst|die|¨-e|nghệ thuật|Ich interessiere mich für moderne {Kunst}.|Tôi quan tâm đến nghệ thuật hiện đại.|
n|Künstler|der|-|nghệ sĩ (nam)|Der {Künstler} stellt in Berlin aus.|Người nghệ sĩ triển lãm ở Berlin.|Nữ: die Künstlerin.
n|Gemälde|das|-|bức tranh (sơn dầu)|Das {Gemälde} ist sehr wertvoll.|Bức tranh rất có giá trị.|
n|Maler|der|-|họa sĩ (nam)|Der {Maler} lebte in Paris.|Người họa sĩ sống ở Paris.|Nữ: die Malerin.
n|Skulptur|die|-en|tác phẩm điêu khắc|Im Park steht eine große {Skulptur}.|Trong công viên có một bức tượng lớn.|
n|Theater|das|-|nhà hát, kịch|Wir gehen heute ins {Theater}.|Hôm nay chúng tôi đi xem kịch.|
n|Theaterstück|das|-e|vở kịch|Das {Theaterstück} war sehr lustig.|Vở kịch rất vui nhộn.|
n|Bühne|die|-n|sân khấu|Die Schauspieler stehen auf der {Bühne}.|Diễn viên đứng trên sân khấu.|
n|Schauspieler|der|-|diễn viên (nam)|Der {Schauspieler} ist sehr bekannt.|Nam diễn viên rất nổi tiếng.|Nữ: die Schauspielerin.
n|Rolle|die|-n|vai diễn; vai trò|Sie spielt die {Rolle} der Mutter.|Cô ấy đóng vai người mẹ.|
n|Publikum|das||khán giả|Das {Publikum} applaudierte lange.|Khán giả vỗ tay rất lâu.|
n|Vorstellung|die|-en|buổi biểu diễn|Die {Vorstellung} beginnt um 19:30 Uhr.|Buổi diễn bắt đầu lúc 19 giờ 30.|
n|Eintrittskarte|die|-n|vé vào cửa|Ich habe zwei {Eintrittskarten} für das Konzert.|Tôi có hai vé xem hòa nhạc.|
n|Oper|die|-n|nhạc kịch opera|In der {Oper} singen sie auf Italienisch.|Trong vở opera họ hát tiếng Ý.|
n|Orchester|das|-|dàn nhạc|Das {Orchester} spielt Beethoven.|Dàn nhạc chơi nhạc Beethoven.|
n|Musiker|der|-|nhạc công (nam)|Der {Musiker} spielt Geige.|Nhạc công chơi vĩ cầm.|Nữ: die Musikerin.
n|Sänger|der|-|ca sĩ (nam)|Der {Sänger} hat eine tolle Stimme.|Ca sĩ có giọng hát tuyệt vời.|Nữ: die Sängerin.
n|Stimme|die|-n|giọng; lá phiếu|Sie hat eine schöne {Stimme}.|Cô ấy có giọng hát hay.|
n|Roman|der|-e|tiểu thuyết|Der {Roman} hat 500 Seiten.|Cuốn tiểu thuyết dày 500 trang.|
n|Gedicht|das|-e|bài thơ|Er schreibt {Gedichte}.|Anh ấy làm thơ.|
n|Schriftsteller|der|-|nhà văn (nam)|Der {Schriftsteller} liest aus seinem neuen Buch.|Nhà văn đọc trích đoạn sách mới.|Nữ: die Schriftstellerin.
n|Handlung|die|-en|cốt truyện|Die {Handlung} ist spannend.|Cốt truyện hấp dẫn.|
n|Figur|die|-en|nhân vật|Die wichtigste {Figur} ist eine junge Ärztin.|Nhân vật quan trọng nhất là một nữ bác sĩ trẻ.|
n|Regisseur|der|-e|đạo diễn (nam)|Der {Regisseur} hat einen Preis gewonnen.|Đạo diễn đã đoạt giải.|Nữ: die Regisseurin.
n|Serie|die|-n|phim bộ|Ich schaue gerade eine spannende {Serie}.|Tôi đang xem một bộ phim hay.|
n|Unterhaltung|die|-en|giải trí; cuộc trò chuyện|Das Programm bietet gute {Unterhaltung}.|Chương trình mang lại sự giải trí tốt.|
n|Geschmackssache|die||chuyện khẩu vị riêng|Kunst ist {Geschmackssache}.|Nghệ thuật là chuyện sở thích riêng.|
n|Kritik|die|-en|lời phê bình|Der Film bekam gute {Kritiken}.|Bộ phim nhận được những lời khen.|
n|Veranstaltung|die|-en|sự kiện|Die {Veranstaltung} ist kostenlos.|Sự kiện miễn phí.|
v|ausstellen|||trưng bày|Das Museum {stellt} Bilder von Klimt aus.|Bảo tàng trưng bày tranh của Klimt.|Động từ tách: er stellt aus, hat ausgestellt
v|aufführen|||trình diễn|Das Stück wird zum ersten Mal {aufgeführt}.|Vở kịch được công diễn lần đầu.|Động từ tách: er führt auf, hat aufgeführt
v|applaudieren|||vỗ tay|Das Publikum {applaudiert}.|Khán giả vỗ tay.|er applaudiert, hat applaudiert
v|komponieren|||sáng tác (nhạc)|Mozart hat viele Opern {komponiert}.|Mozart đã sáng tác nhiều vở opera.|er komponiert, hat komponiert
v|darstellen|||miêu tả, thể hiện|Das Bild {stellt} eine Landschaft dar.|Bức tranh miêu tả một phong cảnh.|Động từ tách: er stellt dar, hat dargestellt
v|bewerten|||đánh giá|Wie {bewertest} du den Film?|Bạn đánh giá bộ phim thế nào?|er bewertet, hat bewertet
v|sich amüsieren|||vui chơi|Wir haben uns gut {amüsiert}.|Chúng tôi đã vui chơi thỏa thích.|er amüsiert sich, hat sich amüsiert
v|sich langweilen|||thấy chán|Im Film habe ich {mich} gelangweilt.|Tôi thấy chán khi xem phim.|er langweilt sich, hat sich gelangweilt
v|gewinnen|||thắng, giành được|Der Film hat einen Oscar {gewonnen}.|Bộ phim đoạt giải Oscar.|er gewinnt, gewann, hat gewonnen
v|übertragen|||truyền hình trực tiếp|Das Konzert wird live {übertragen}.|Buổi hòa nhạc được truyền hình trực tiếp.|er überträgt, übertrug, hat übertragen
adj|künstlerisch|||thuộc về nghệ thuật|Sie ist sehr {künstlerisch} begabt.|Cô ấy rất có năng khiếu nghệ thuật.|
adj|klassisch|||cổ điển|Ich höre gern {klassische} Musik.|Tôi thích nghe nhạc cổ điển.|
adj|unterhaltsam|||mang tính giải trí|Die Show war sehr {unterhaltsam}.|Chương trình rất giải trí.|
adj|ausverkauft|||bán hết vé|Das Konzert ist {ausverkauft}.|Buổi hòa nhạc đã bán hết vé.|
adj|berührend|||cảm động|Das Ende war sehr {berührend}.|Đoạn kết rất cảm động.|
adj|enttäuschend|||gây thất vọng|Der Film war {enttäuschend}.|Bộ phim thật đáng thất vọng.|
adj|kitschig|||sến|Die Geschichte ist etwas {kitschig}.|Câu chuyện hơi sến.|
adj|sehenswert|||đáng xem|Die Ausstellung ist sehr {sehenswert}.|Triển lãm rất đáng xem.|
adj|lebendig|||sống động|Die Musik ist sehr {lebendig}.|Âm nhạc rất sống động.|
adj|abstrakt|||trừu tượng|Ich verstehe {abstrakte} Kunst nicht.|Tôi không hiểu nghệ thuật trừu tượng.|
conj|falls|||phòng khi, nếu|{Falls} es regnet, gehen wir ins Museum.|Nếu trời mưa, chúng ta đi bảo tàng.|Câu phụ: động từ cuối.
p|statt … zu|||thay vì|{Statt} zu lesen, sieht er fern.|Thay vì đọc sách, anh ấy xem TV.|
p|ohne … zu|||mà không|Er ging, {ohne} sich zu verabschieden.|Anh ấy đi mà không chào tạm biệt.|
p|Geschmäcker sind verschieden|||mỗi người một sở thích|Mir gefällt das Bild nicht, aber {Geschmäcker sind verschieden}.|Tôi không thích bức tranh, nhưng mỗi người một sở thích.|
g|Danh từ hóa: tính từ thành danh từ|||das Gute, etwas Neues|Ich wünsche dir alles {Gute}.|Chúc bạn mọi điều tốt lành.|etwas/nichts/viel + tính từ viết hoa, đuôi -es: etwas Schönes.
g|statt … zu / ohne … zu|||thay vì / mà không|Ohne zu {fragen}, nahm er das Buch.|Anh ấy lấy cuốn sách mà không hỏi.|Cùng chủ ngữ; zu + Infinitiv ở cuối.
g|falls: điều kiện có thể xảy ra|||phòng khi|Falls du Zeit {hast}, komm doch mit.|Nếu bạn có thời gian thì đi cùng nhé.|Gần nghĩa với wenn nhưng nhấn mạnh khả năng.
g|Câu so sánh: je … umso|||càng … càng|Je länger der Film dauert, umso {müder} werde ich.|Phim càng dài tôi càng buồn ngủ.|umso dùng giống desto.
n|Galerie|die|-n|phòng tranh|Die {Galerie} zeigt junge Künstler.|Phòng tranh trưng bày nghệ sĩ trẻ.|
n|Kunstwerk|das|-e|tác phẩm nghệ thuật|Das {Kunstwerk} ist über 300 Jahre alt.|Tác phẩm nghệ thuật đã hơn 300 năm tuổi.|
n|Fotografie|die|-n|nhiếp ảnh; bức ảnh|Ich interessiere mich für {Fotografie}.|Tôi quan tâm đến nhiếp ảnh.|
n|Komödie|die|-n|hài kịch|Die {Komödie} war sehr witzig.|Vở hài kịch rất buồn cười.|
n|Krimi|der|-s|truyện/phim trinh thám|Am Sonntag schaue ich einen {Krimi}.|Chủ nhật tôi xem phim trinh thám.|
n|Märchen|das|-|truyện cổ tích|Oma erzählt den Kindern ein {Märchen}.|Bà kể cho bọn trẻ nghe truyện cổ tích.|
n|Dichter|der|-|nhà thơ (nam)|Goethe ist ein berühmter {Dichter}.|Goethe là một nhà thơ nổi tiếng.|Nữ: die Dichterin.
n|Kapitel|das|-|chương (sách)|Ich lese das letzte {Kapitel}.|Tôi đọc chương cuối.|
n|Festival|das|-s|lễ hội (nghệ thuật)|Im Sommer gibt es ein großes {Festival}.|Mùa hè có một lễ hội lớn.|
n|Freizeitangebot|das|-e|hoạt động giải trí|Die Stadt hat viele {Freizeitangebote}.|Thành phố có nhiều hoạt động giải trí.|
v|inszenieren|||dàn dựng|Der Regisseur hat das Stück neu {inszeniert}.|Đạo diễn đã dàn dựng lại vở kịch.|er inszeniert, hat inszeniert
v|fesseln|||cuốn hút|Das Buch hat mich {gefesselt}.|Cuốn sách đã cuốn hút tôi.|er fesselt, hat gefesselt
v|zeichnen|||vẽ (phác họa)|Sie {zeichnet} gern Tiere.|Cô ấy thích vẽ con vật.|er zeichnet, hat gezeichnet
v|auftreten|||biểu diễn, xuất hiện|Die Band {tritt} heute Abend auf.|Ban nhạc biểu diễn tối nay.|Động từ tách: er tritt auf, trat auf, ist aufgetreten
adj|witzig|||hóm hỉnh|Der Film ist sehr {witzig}.|Bộ phim rất hóm hỉnh.|
adj|beliebt|||được yêu thích|Die Serie ist sehr {beliebt}.|Bộ phim rất được yêu thích.|
adj|originell|||độc đáo|Die Idee ist sehr {originell}.|Ý tưởng rất độc đáo.|
p|ins Kino gehen|||đi xem phim|Wollen wir heute {ins Kino gehen}?|Hôm nay mình đi xem phim không?|
p|einen Blick werfen|||xem qua|Wirf mal {einen Blick} auf dieses Bild!|Nhìn qua bức tranh này đi!|einen Blick werfen auf + Akk
`;
export default pack;
