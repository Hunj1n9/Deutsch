// A2 · 03 Ở nhà hàng. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Speisekarte|die|-n|thực đơn|Können wir die {Speisekarte} haben?|Cho chúng tôi xem thực đơn được không?|
n|Getränk|das|-e|đồ uống|Was möchten Sie als {Getränk}?|Ông/bà muốn uống gì?|
n|Vorspeise|die|-n|món khai vị|Als {Vorspeise} nehme ich eine Suppe.|Món khai vị tôi gọi súp.|
n|Hauptgericht|das|-e|món chính|Das {Hauptgericht} war sehr lecker.|Món chính rất ngon.|
n|Nachtisch|der|-e|món tráng miệng|Zum {Nachtisch} gibt es Eis.|Tráng miệng có kem.|Cũng nói: das Dessert.
n|Gericht|das|-e|món ăn|Das {Gericht} ist typisch vietnamesisch.|Món này đặc trưng Việt Nam.|
n|Kellner|der|-|bồi bàn (nam)|Der {Kellner} bringt die Rechnung.|Bồi bàn mang hóa đơn đến.|Nữ: die Kellnerin.
n|Gast|der|¨-e|khách|Die {Gäste} sind zufrieden.|Khách hài lòng.|
n|Rechnung|die|-en|hóa đơn|Die {Rechnung}, bitte!|Cho xin hóa đơn!|
n|Trinkgeld|das|-er|tiền boa|In Deutschland gibt man etwa zehn Prozent {Trinkgeld}.|Ở Đức người ta boa khoảng mười phần trăm.|
n|Reservierung|die|-en|việc đặt chỗ|Ich habe eine {Reservierung} für zwei Personen.|Tôi đã đặt chỗ cho hai người.|
n|Teller|der|-|cái đĩa|Der {Teller} ist leer.|Cái đĩa trống.|
n|Glas|das|¨-er|cái cốc thủy tinh, ly|Ein {Glas} Wein, bitte.|Cho một ly rượu vang.|
n|Tasse|die|-n|cái tách|Eine {Tasse} Tee, bitte.|Cho một tách trà.|
n|Gabel|die|-n|cái nĩa|Mir fehlt eine {Gabel}.|Tôi thiếu một cái nĩa.|
n|Messer|das|-|con dao|Das {Messer} ist scharf.|Con dao sắc.|
n|Löffel|der|-|cái thìa|Ich brauche einen {Löffel}.|Tôi cần một cái thìa.|
n|Stäbchen|das|-|đũa|Wir essen mit {Stäbchen}.|Chúng tôi ăn bằng đũa.|Thường dùng số nhiều.
n|Wein|der|-e|rượu vang|Der {Wein} kommt aus Italien.|Rượu vang đến từ Ý.|
n|Eis|das||kem; nước đá|Ich nehme ein {Eis} mit Schokolade.|Tôi lấy một cây kem sô-cô-la.|
n|Soße|die|-n|nước sốt|Die {Soße} ist zu salzig.|Nước sốt mặn quá.|
n|Gewürz|das|-e|gia vị|Welche {Gewürze} sind im Essen?|Trong món ăn có gia vị gì?|
n|Vegetarier|der|-|người ăn chay (nam)|Ich bin {Vegetarier}.|Tôi ăn chay.|Nữ: die Vegetarierin.
n|Portion|die|-en|suất, phần|Die {Portion} ist sehr groß.|Suất ăn rất lớn.|
n|Geschmack|der|¨-e|vị; gu|Das ist nicht mein {Geschmack}.|Cái đó không hợp khẩu vị tôi.|
n|Imbiss|der|-e|quầy ăn nhanh|Am {Imbiss} kaufe ich eine Wurst.|Ở quầy ăn nhanh tôi mua xúc xích.|
v|empfehlen|||giới thiệu, gợi ý|Was können Sie {empfehlen}?|Ông/bà gợi ý món gì?|du empfiehlst, er empfiehlt, hat empfohlen
v|reservieren|||đặt trước|Ich möchte einen Tisch {reservieren}.|Tôi muốn đặt một bàn.|er reserviert, hat reserviert
v|probieren|||nếm thử|{Probier} mal die Suppe!|Nếm thử món súp đi!|er probiert, hat probiert
v|aussuchen|||chọn|Wir {suchen} uns einen Tisch am Fenster aus.|Chúng tôi chọn một bàn cạnh cửa sổ.|Động từ tách: er sucht aus, hat ausgesucht
v|braten|||rán, chiên|Der Koch {brät} das Fleisch.|Đầu bếp rán thịt.|du brätst, er brät, hat gebraten
v|schneiden|||cắt|Ich {schneide} das Gemüse.|Tôi cắt rau.|er schneidet, hat geschnitten
v|sich beeilen|||nhanh lên, vội|Wir müssen {uns} beeilen.|Chúng ta phải nhanh lên.|er beeilt sich, hat sich beeilt
adj|salzig|||mặn|Die Suppe ist zu {salzig}.|Súp mặn quá.|
adj|sauer|||chua|Die Zitrone ist {sauer}.|Quả chanh chua.|sauer còn nghĩa là bực mình.
adj|bitter|||đắng|Der Kaffee ist {bitter}.|Cà phê đắng.|
adj|fett|||béo, nhiều mỡ|Das Essen ist zu {fett}.|Món ăn nhiều dầu mỡ quá.|
adj|satt|||no|Ich bin {satt}, danke.|Tôi no rồi, cảm ơn.|
adj|hungrig|||đói|Die Kinder sind {hungrig}.|Bọn trẻ đói.|Cũng nói: Ich habe Hunger.
adj|durstig|||khát|Nach dem Sport bin ich {durstig}.|Sau khi tập thể thao tôi khát.|Cũng nói: Ich habe Durst.
adj|vegetarisch|||chay|Haben Sie {vegetarische} Gerichte?|Ở đây có món chay không?|
adj|zufrieden|||hài lòng|Sind Sie mit dem Essen {zufrieden}?|Ông/bà hài lòng với món ăn chứ?|zufrieden mit + Dativ
adj|typisch|||đặc trưng, điển hình|Pho ist ein {typisches} Gericht aus Vietnam.|Phở là món đặc trưng của Việt Nam.|
p|Guten Appetit|||chúc ngon miệng|{Guten Appetit}!|Chúc ngon miệng!|
p|Zum Wohl|||nâng ly, chúc sức khỏe|{Zum Wohl}! – Prost!|Nâng ly!|Thân mật: Prost!
p|Stimmt so|||khỏi thối lại|Das macht 18 Euro. – Hier sind 20, {stimmt so}.|Hết 18 euro. – Đây 20, khỏi thối.|Cách đưa tiền boa.
p|Ist hier noch frei?|||chỗ này còn trống không?|Entschuldigung, {ist hier noch frei}?|Xin lỗi, chỗ này còn trống không?|
p|Ich hätte gern|||tôi muốn (lịch sự)|{Ich hätte gern} eine Cola.|Tôi muốn một lon cola.|
conj|weil|||vì|Ich esse kein Fleisch, {weil} ich Vegetarier bin.|Tôi không ăn thịt vì tôi ăn chay.|Câu phụ: động từ chia đứng cuối.
g|Đuôi tính từ sau der/die/das (Nominativ)|||-e ở Nominativ số ít|Der {heiße} Tee schmeckt gut.|Trà nóng ngon.|der heiße Tee, die kalte Suppe, das frische Brot; số nhiều: die frischen Brötchen.
g|Đuôi tính từ sau mạo từ xác định (Akk, Dativ)|||-en ở hầu hết vị trí khác|Ich nehme den {grünen} Salat.|Tôi lấy món xa lát xanh.|Akk giống đực: den grünen; Dativ: dem/der grünen; số nhiều luôn -en.
g|Câu với weil: động từ cuối câu|||nêu lý do|Ich bestelle Wasser, weil ich Durst {habe}.|Tôi gọi nước vì tôi khát.|Câu phụ: động từ chia đứng cuối; trước weil có dấu phẩy.
g|Câu phụ đứng trước: động từ chính đứng ngay sau|||đảo vị trí|Weil ich Hunger habe, {bestelle} ich Pizza.|Vì đói nên tôi gọi pizza.|Câu phụ chiếm vị trí 1, động từ câu chính ở vị trí 2.
v|wählen|||chọn; bầu|Sie können zwischen drei Desserts {wählen}.|Ông/bà có thể chọn giữa ba món tráng miệng.|er wählt, hat gewählt
v|prüfen|||kiểm tra|Bitte {prüfen} Sie die Rechnung.|Xin kiểm tra hóa đơn.|er prüft, hat geprüft
n|Hamburger|der|-|bánh hamburger|Ich nehme einen {Hamburger} mit Pommes.|Tôi lấy một chiếc hamburger với khoai tây chiên.|
n|Rind|das|-er|bò; thịt bò|Ist das Gericht mit Schwein oder mit {Rind}?|Món này là thịt lợn hay thịt bò?|
v|backen|||nướng (bánh)|Meine Mutter {backt} jeden Sonntag einen Kuchen.|Mẹ tôi nướng bánh vào mỗi Chủ nhật.|er backt / bäckt, hat gebacken
n|Menge|die|-n|lượng; nhiều|Im Restaurant waren eine {Menge} Leute.|Trong nhà hàng có rất nhiều người.|eine Menge = rất nhiều
n|Rest|der|-e|phần còn lại|Können wir den {Rest} mitnehmen?|Chúng tôi mang phần còn lại về được không?|
`;
export default pack;
