// A1 · 05 Ăn uống và mua sắm. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Brot|das|-e|bánh mì|Ich kaufe ein {Brot}.|Tôi mua một ổ bánh mì.|
n|Brötchen|das|-|bánh mì nhỏ|Zum Frühstück esse ich zwei {Brötchen}.|Bữa sáng tôi ăn hai cái bánh mì nhỏ.|
n|Butter|die||bơ|Ich esse Brot mit {Butter}.|Tôi ăn bánh mì với bơ.|
n|Käse|der|-|phô mai|Der {Käse} kommt aus Frankreich.|Phô mai đến từ Pháp.|
n|Wurst|die|¨-e|xúc xích|Möchtest du {Wurst}?|Bạn có muốn ăn xúc xích không?|
n|Fleisch|das||thịt|Ich esse kein {Fleisch}.|Tôi không ăn thịt.|
n|Fisch|der|-e|cá|Heute gibt es {Fisch}.|Hôm nay có món cá.|
n|Hähnchen|das|-|gà (thịt gà)|Das {Hähnchen} ist lecker.|Gà rất ngon.|
n|Reis|der||gạo, cơm|In Vietnam isst man viel {Reis}.|Ở Việt Nam người ta ăn nhiều cơm.|
n|Nudel|die|-n|mì, sợi mì|Die Kinder essen gern {Nudeln}.|Bọn trẻ thích ăn mì.|Thường dùng số nhiều.
n|Ei|das|-er|quả trứng|Ich brauche sechs {Eier}.|Tôi cần sáu quả trứng.|
n|Obst|das||trái cây|{Obst} ist gesund.|Trái cây tốt cho sức khỏe.|Danh từ không đếm được.
n|Gemüse|das||rau củ|Auf dem Markt kaufe ich {Gemüse}.|Ở chợ tôi mua rau củ.|
n|Apfel|der|¨|quả táo|Der {Apfel} ist rot.|Quả táo màu đỏ.|
n|Banane|die|-n|quả chuối|Eine {Banane}, bitte.|Cho một quả chuối.|
n|Tomate|die|-n|cà chua|Die {Tomaten} sind frisch.|Cà chua tươi.|
n|Kartoffel|die|-n|khoai tây|Wir kochen {Kartoffeln}.|Chúng tôi luộc khoai tây.|
n|Salat|der|-e|xa lát; rau diếp|Ich nehme einen {Salat}.|Tôi lấy một đĩa xa lát.|
n|Suppe|die|-n|súp, canh|Die {Suppe} ist heiß.|Súp còn nóng.|
n|Kuchen|der|-|bánh ngọt|Der {Kuchen} schmeckt gut.|Bánh ngọt ngon.|
n|Zucker|der||đường|Kaffee ohne {Zucker}, bitte.|Cà phê không đường, làm ơn.|
n|Salz|das||muối|Die Suppe braucht mehr {Salz}.|Súp cần thêm muối.|
n|Wasser|das||nước|Ich trinke viel {Wasser}.|Tôi uống nhiều nước.|
n|Kaffee|der|-s|cà phê|Einen {Kaffee}, bitte.|Cho một ly cà phê.|
n|Tee|der|-s|trà|Trinkst du lieber {Tee}?|Bạn thích uống trà hơn à?|
n|Milch|die||sữa|Die {Milch} ist alle.|Sữa hết rồi.|
n|Saft|der|¨-e|nước ép|Ich möchte einen {Saft}.|Tôi muốn một ly nước ép.|
n|Bier|das|-e|bia|Ein {Bier} kostet vier Euro.|Một cốc bia giá bốn euro.|
n|Frühstück|das|-e|bữa sáng|Das {Frühstück} ist fertig.|Bữa sáng đã xong.|
n|Mittagessen|das|-|bữa trưa|Was gibt es zum {Mittagessen}?|Bữa trưa có gì?|
n|Abendessen|das|-|bữa tối|Wir kochen das {Abendessen}.|Chúng tôi nấu bữa tối.|
n|Supermarkt|der|¨-e|siêu thị|Der {Supermarkt} ist bis 22 Uhr offen.|Siêu thị mở cửa đến 22 giờ.|
n|Markt|der|¨-e|chợ|Am Samstag gehe ich auf den {Markt}.|Thứ Bảy tôi đi chợ.|
n|Bäckerei|die|-en|tiệm bánh mì|Die {Bäckerei} öffnet um sechs.|Tiệm bánh mở cửa lúc sáu giờ.|
n|Kilo|das|-s|ki-lô-gam|Ein {Kilo} Äpfel, bitte.|Cho một ký táo.|Sau số: zwei Kilo (không thêm -s).
n|Gramm|das|-|gam|Ich nehme 200 {Gramm} Käse.|Tôi lấy 200 gam phô mai.|
n|Liter|der|-|lít|Ein {Liter} Milch kostet einen Euro.|Một lít sữa giá một euro.|
n|Flasche|die|-n|cái chai|Eine {Flasche} Wasser, bitte.|Cho một chai nước.|
n|Packung|die|-en|gói, hộp|Ich brauche eine {Packung} Reis.|Tôi cần một gói gạo.|
n|Euro|der|-s|đồng euro|Das kostet drei {Euro}.|Cái đó giá ba euro.|Sau số giữ nguyên: drei Euro.
n|Preis|der|-e|giá|Der {Preis} ist gut.|Giá tốt.|
n|Einkaufsliste|die|-n|danh sách đi chợ|Schreib bitte eine {Einkaufsliste}.|Làm ơn viết danh sách đi chợ.|
v|essen|||ăn|Was {isst} du gern?|Bạn thích ăn gì?|du isst, er isst, hat gegessen
v|trinken|||uống|Ich {trinke} Kaffee mit Milch.|Tôi uống cà phê sữa.|er trinkt, hat getrunken
v|kaufen|||mua|Wir {kaufen} Obst.|Chúng tôi mua trái cây.|er kauft, hat gekauft
v|kochen|||nấu ăn; đun sôi|Mein Mann {kocht} heute.|Hôm nay chồng tôi nấu ăn.|er kocht, hat gekocht
v|nehmen|||lấy, dùng (món)|Ich {nehme} die Suppe.|Tôi gọi món súp.|du nimmst, er nimmt, hat genommen
v|möchten|||muốn (lịch sự)|Ich {möchte} ein Wasser.|Tôi muốn một cốc nước.|ich möchte, du möchtest, er möchte (không có -t ở ngôi 3).
v|schmecken|||có vị, ngon|Der Kuchen {schmeckt} super.|Bánh ngon tuyệt.|es schmeckt, hat geschmeckt
v|bezahlen|||trả tiền|Ich möchte {bezahlen}, bitte.|Tôi muốn thanh toán.|er bezahlt, hat bezahlt
adj|lecker|||ngon|Das Essen ist sehr {lecker}.|Món ăn rất ngon.|
adj|frisch|||tươi|Das Brot ist {frisch}.|Bánh mì còn tươi.|
adj|süß|||ngọt|Der Kuchen ist zu {süß}.|Bánh quá ngọt.|
adj|scharf|||cay|Die Suppe ist sehr {scharf}.|Súp rất cay.|
adv|gern|||thích (làm gì)|Ich esse {gern} Fisch.|Tôi thích ăn cá.|gern đứng sau động từ: Ich trinke gern Tee.
adv|viel|||nhiều|Er isst {viel} Gemüse.|Anh ấy ăn nhiều rau.|
p|Was darf es sein?|||quý khách cần gì?|Guten Tag, {was darf es sein}?|Xin chào, quý khách cần gì ạ?|Câu người bán hàng hay dùng.
p|Das macht|||tổng cộng là|{Das macht} zwölf Euro, bitte.|Tổng cộng mười hai euro.|
g|Akkusativ: den / einen|||tân ngữ trực tiếp giống đực|Ich kaufe {einen} Apfel.|Tôi mua một quả táo.|Chỉ giống đực đổi ở Akkusativ: der → den, ein → einen, kein → keinen.
g|möchten + Akkusativ|||diễn đạt mong muốn lịch sự|Ich möchte {einen} Kaffee.|Tôi muốn một ly cà phê.|Đồ uống, món ăn giống đực đổi thành einen.
g|nicht hay kein?|||phủ định|Ich trinke {keinen} Alkohol.|Tôi không uống rượu bia.|Danh từ không mạo từ/với ein → kein; còn lại (động từ, tính từ, danh từ xác định) → nicht.
n|Hunger|der||cơn đói|Ich habe {Hunger}.|Tôi đói.|
n|Durst|der||cơn khát|Hast du {Durst}?|Bạn có khát không?|
n|Schinken|der|-|giăm bông|Ich esse ein Brot mit {Schinken}.|Tôi ăn bánh mì với giăm bông.|
n|Birne|die|-n|quả lê|Die {Birne} ist süß.|Quả lê ngọt.|
v|geben|||đưa, cho|{Geben} Sie mir bitte ein Kilo Äpfel.|Cho tôi một ký táo.|du gibst, er gibt, hat gegeben
v|bekommen|||nhận được; (ở quầy) dùng|Was {bekommen} Sie? – Zwei Brötchen, bitte.|Ông/bà dùng gì ạ? – Hai bánh mì nhỏ.|er bekommt, hat bekommen (không phải "trở thành")
n|Kiosk|der|-e|ki-ốt, quầy báo|Am {Kiosk} kaufe ich eine Zeitung.|Tôi mua báo ở ki-ốt.|
n|Zigarette|die|-n|điếu thuốc lá|Er raucht zehn {Zigaretten} am Tag.|Anh ấy hút mười điếu thuốc mỗi ngày.|
v|zahlen|||trả tiền|Wir möchten {zahlen}, bitte.|Chúng tôi muốn thanh toán.|er zahlt, hat gezahlt
n|Pommes|die||khoai tây chiên|Ich möchte {Pommes} mit Ketchup.|Tôi muốn khoai tây chiên với tương cà.|Danh từ chỉ dùng số nhiều (die Pommes).
v|riechen|||ngửi; có mùi|Die Suppe {riecht} gut!|Món súp thơm quá!|er riecht, hat gerochen
v|bestellen|||gọi món, đặt hàng|Wir möchten {bestellen}.|Chúng tôi muốn gọi món.|er bestellt, hat bestellt
`;
export default pack;
