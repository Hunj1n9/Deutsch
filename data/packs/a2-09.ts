// A2 · 09 Lễ hội và quà tặng. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Fest|das|-e|lễ hội|Das {Fest} beginnt am Abend.|Lễ hội bắt đầu vào buổi tối.|
n|Feiertag|der|-e|ngày lễ|Am {Feiertag} sind die Geschäfte zu.|Ngày lễ các cửa hàng đóng cửa.|
n|Weihnachten|das|-|lễ Giáng sinh|Zu {Weihnachten} besuchen wir die Familie.|Giáng sinh chúng tôi về thăm gia đình.|Thường không dùng mạo từ.
n|Ostern|das|-|lễ Phục sinh|An {Ostern} suchen Kinder Eier.|Lễ Phục sinh trẻ em đi tìm trứng.|
n|Silvester|das|-|đêm giao thừa (dương lịch)|An {Silvester} gibt es ein Feuerwerk.|Đêm giao thừa có pháo hoa.|
n|Neujahr|das||năm mới|Ich wünsche dir ein frohes {Neujahr}!|Chúc bạn năm mới vui vẻ!|
n|Hochzeit|die|-en|đám cưới|Die {Hochzeit} ist im Juni.|Đám cưới vào tháng Sáu.|
n|Einladung|die|-en|lời mời, thiệp mời|Danke für die {Einladung}!|Cảm ơn vì lời mời!|
n|Geschenk|das|-e|món quà|Das {Geschenk} ist für dich.|Món quà này dành cho bạn.|
n|Gastgeber|der|-|chủ nhà (bữa tiệc)|Der {Gastgeber} begrüßt die Gäste.|Chủ nhà chào đón khách.|Nữ: die Gastgeberin.
n|Blume|die|-n|bông hoa|Ich schenke ihr {Blumen}.|Tôi tặng cô ấy hoa.|
n|Kerze|die|-n|cây nến|Auf dem Kuchen sind 30 {Kerzen}.|Trên bánh có 30 cây nến.|
n|Feuerwerk|das|-e|pháo hoa|Das {Feuerwerk} war wunderschön.|Pháo hoa thật đẹp.|
n|Tradition|die|-en|truyền thống|Das ist eine alte {Tradition}.|Đó là một truyền thống lâu đời.|
n|Brauch|der|¨-e|phong tục|In Vietnam gibt es viele {Bräuche} zu Tet.|Ở Việt Nam có nhiều phong tục ngày Tết.|
n|Glückwunsch|der|¨-e|lời chúc mừng|Herzlichen {Glückwunsch} zum Geburtstag!|Chúc mừng sinh nhật!|
n|Jubiläum|das|Jubiläen|lễ kỷ niệm|Die Firma feiert ihr {Jubiläum}.|Công ty kỷ niệm ngày thành lập.|
n|Mitternacht|die||nửa đêm|Um {Mitternacht} stoßen wir an.|Lúc nửa đêm chúng tôi nâng ly.|
n|Laterne|die|-n|đèn lồng|Zum Mittherbstfest tragen Kinder {Laternen}.|Tết Trung thu trẻ em rước đèn lồng.|
n|Gutschein|der|-e|phiếu quà tặng|Ich schenke ihm einen {Gutschein}.|Tôi tặng anh ấy một phiếu quà tặng.|
v|schenken|||tặng|Was {schenkst} du deiner Mutter?|Bạn tặng mẹ cái gì?|er schenkt, hat geschenkt; schenken + Dativ (người) + Akk (vật)
v|gratulieren|||chúc mừng|Ich {gratuliere} dir zum Geburtstag!|Chúc mừng sinh nhật bạn!|er gratuliert, hat gratuliert; + Dativ
v|wünschen|||chúc; mong muốn|Ich {wünsche} dir viel Glück.|Chúc bạn nhiều may mắn.|er wünscht, hat gewünscht
v|danken|||cảm ơn|Ich {danke} Ihnen für die Hilfe.|Tôi cảm ơn ông/bà đã giúp đỡ.|er dankt, hat gedankt; + Dativ
v|gehören|||thuộc về|Das Buch {gehört} mir.|Cuốn sách là của tôi.|es gehört, hat gehört; + Dativ
v|geben|||đưa, cho|Kannst du mir das Salz {geben}?|Bạn đưa giúp tôi lọ muối được không?|du gibst, er gibt, hat gegeben
v|verpacken|||gói (quà)|Ich {verpacke} das Geschenk.|Tôi gói món quà.|er verpackt, hat verpackt
v|sich freuen|||vui mừng|Ich {freue} mich über das Geschenk.|Tôi vui vì món quà.|er freut sich, hat sich gefreut; über (đã có) / auf (sắp tới) + Akk
v|schmücken|||trang trí|Wir {schmücken} den Weihnachtsbaum.|Chúng tôi trang trí cây thông Noel.|er schmückt, hat geschmückt
v|anstoßen|||cụng ly|Lass uns auf das neue Jahr {anstoßen}!|Hãy cụng ly mừng năm mới!|Động từ tách: er stößt an, hat angestoßen
v|vorbereiten|||chuẩn bị|Wir {bereiten} das Fest vor.|Chúng tôi chuẩn bị lễ hội.|Động từ tách: er bereitet vor, hat vorbereitet
v|absagen|||hủy, từ chối|Ich muss die Party leider {absagen}.|Tiếc là tôi phải hủy buổi tiệc.|Động từ tách: er sagt ab, hat abgesagt
v|zusagen|||nhận lời|Hast du schon {zugesagt}?|Bạn đã nhận lời chưa?|Động từ tách: er sagt zu, hat zugesagt
v|passen zu|||hợp với|Die Kette {passt} gut zu dem Kleid.|Sợi dây chuyền hợp với chiếc váy.|es passt, hat gepasst; zu + Dativ
adj|herzlich|||chân thành, nồng nhiệt|{Herzliche} Grüße aus Hanoi!|Lời chào thân ái từ Hà Nội!|
adj|festlich|||trang trọng, lễ hội|Alle tragen {festliche} Kleidung.|Mọi người mặc đồ trang trọng.|
adj|traditionell|||theo truyền thống|Zu Tet essen wir {traditionelles} Essen.|Ngày Tết chúng tôi ăn món truyền thống.|
adj|froh|||vui|{Frohe} Weihnachten!|Giáng sinh vui vẻ!|
adj|überrascht|||ngạc nhiên|Sie war sehr {überrascht}.|Cô ấy rất ngạc nhiên.|
adj|persönlich|||cá nhân, riêng tư|Das ist ein sehr {persönliches} Geschenk.|Đây là một món quà rất riêng tư.|
p|Alles Gute|||chúc mọi điều tốt lành|{Alles Gute} zum Geburtstag!|Chúc mừng sinh nhật!|
p|Viel Glück|||chúc may mắn|{Viel Glück} bei der Prüfung!|Chúc thi may mắn!|
p|Frohes neues Jahr|||chúc mừng năm mới|{Frohes neues Jahr}!|Chúc mừng năm mới!|
p|Vielen Dank für|||cảm ơn nhiều vì|{Vielen Dank für} die Blumen!|Cảm ơn nhiều vì bó hoa!|
p|Das ist aber nett|||thật là chu đáo|Ein Geschenk für mich? {Das ist aber nett}!|Quà cho tôi à? Thật chu đáo quá!|
g|Động từ đi với Dativ|||helfen, danken, gefallen, gehören, gratulieren|Das Kleid gefällt {mir}.|Tôi thích chiếc váy.|Người nhận tác động ở Dativ: mir, dir, ihm, ihr, uns, euch, ihnen/Ihnen.
g|Hai tân ngữ: Dativ trước Akkusativ|||người nhận trước, vật sau|Ich schenke {meiner} Mutter Blumen.|Tôi tặng mẹ hoa.|Nếu vật là đại từ thì đứng trước: Ich schenke sie ihr.
g|Mạo từ ở Dativ|||dem, der, dem, den(-n)|Ich gebe {dem} Kind ein Geschenk.|Tôi đưa đứa trẻ một món quà.|der/das → dem; die → der; số nhiều → den + n.
g|Đại từ nhân xưng Dativ|||mir, dir, ihm, ihr|Kannst du {ihm} helfen?|Bạn giúp anh ấy được không?|ich → mir, du → dir, er/es → ihm, sie → ihr, wir → uns, ihr → euch, sie → ihnen.
n|Torte|die|-n|bánh kem|Zum Geburtstag gibt es eine {Torte}.|Sinh nhật có bánh kem.|
n|Gästeliste|die|-n|danh sách khách mời|Wer steht auf der {Gästeliste}?|Ai có trong danh sách khách mời?|
n|Braut|die|¨-e|cô dâu|Die {Braut} trägt ein weißes Kleid.|Cô dâu mặc váy trắng.|
n|Bräutigam|der|-e|chú rể|Der {Bräutigam} ist sehr nervös.|Chú rể rất hồi hộp.|
n|Luftballon|der|-s|bóng bay|Die Kinder spielen mit {Luftballons}.|Bọn trẻ chơi bóng bay.|
v|überraschen|||làm ngạc nhiên|Wir wollen sie {überraschen}.|Chúng tôi muốn tạo bất ngờ cho cô ấy.|er überrascht, hat überrascht
p|Herzlich willkommen|||nhiệt liệt chào mừng|{Herzlich willkommen} bei uns!|Nhiệt liệt chào mừng đến nhà chúng tôi!|
`;
export default pack;
