// A1 · 08 Trong thành phố. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Straße|die|-n|con đường, con phố|Die {Straße} ist sehr lang.|Con phố rất dài.|
n|Platz|der|¨-e|quảng trường; chỗ|Der Markt ist auf dem {Platz}.|Chợ ở trên quảng trường.|
n|Kreuzung|die|-en|ngã tư|An der {Kreuzung} gehen Sie links.|Đến ngã tư thì ông/bà rẽ trái.|
n|Ampel|die|-n|đèn giao thông|Die {Ampel} ist rot.|Đèn đang đỏ.|
n|Ecke|die|-n|góc (phố)|Die Bank ist an der {Ecke}.|Ngân hàng ở góc phố.|
n|Bahnhof|der|¨-e|nhà ga|Wie komme ich zum {Bahnhof}?|Làm sao để tôi đến nhà ga?|
n|Haltestelle|die|-n|bến xe buýt|Die {Haltestelle} ist gegenüber.|Bến xe buýt ở phía đối diện.|
n|Post|die||bưu điện|Ich muss zur {Post}.|Tôi phải ra bưu điện.|
n|Bank|die|-en|ngân hàng|Die {Bank} öffnet um neun.|Ngân hàng mở cửa lúc chín giờ.|die Bank, ¨-e = cái ghế băng.
n|Apotheke|die|-n|hiệu thuốc|Gibt es hier eine {Apotheke}?|Ở đây có hiệu thuốc không?|
n|Krankenhaus|das|¨-er|bệnh viện|Das {Krankenhaus} ist in der Nähe.|Bệnh viện ở gần đây.|
n|Rathaus|das|¨-er|tòa thị chính|Das {Rathaus} ist sehr alt.|Tòa thị chính rất cổ.|
n|Kirche|die|-n|nhà thờ|Neben der {Kirche} ist ein Café.|Cạnh nhà thờ có một quán cà phê.|
n|Geschäft|das|-e|cửa hàng|Das {Geschäft} hat heute zu.|Hôm nay cửa hàng đóng cửa.|
n|Restaurant|das|-s|nhà hàng|Das {Restaurant} ist neben der Bank.|Nhà hàng ở cạnh ngân hàng.|
n|Café|das|-s|quán cà phê|Treffen wir uns im {Café}?|Mình gặp nhau ở quán cà phê nhé?|
n|Hotel|das|-s|khách sạn|Das {Hotel} liegt im Zentrum.|Khách sạn nằm ở trung tâm.|
n|Zentrum|das|Zentren|trung tâm|Ich wohne nicht im {Zentrum}.|Tôi không sống ở trung tâm.|
n|Brücke|die|-n|cây cầu|Gehen Sie über die {Brücke}.|Ông/bà đi qua cầu.|
n|Schule|die|-n|trường học|Die {Schule} ist um die Ecke.|Trường học ở ngay góc phố.|
n|Bibliothek|die|-en|thư viện|In der {Bibliothek} ist es ruhig.|Trong thư viện yên tĩnh.|
n|Polizei|die||cảnh sát|Rufen Sie die {Polizei}!|Hãy gọi cảnh sát!|
n|Weg|der|-e|con đường, lối đi|Ist das der richtige {Weg}?|Đây có phải đường đúng không?|
n|Stadtplan|der|¨-e|bản đồ thành phố|Hast du einen {Stadtplan}?|Bạn có bản đồ thành phố không?|
n|Nähe|die||khu vực gần|Gibt es hier in der {Nähe} einen Supermarkt?|Gần đây có siêu thị không?|
adv|links|||bên trái|Gehen Sie hier {links}.|Ông/bà rẽ trái ở đây.|
adv|rechts|||bên phải|Die Post ist {rechts}.|Bưu điện ở bên phải.|
adv|geradeaus|||thẳng|Gehen Sie immer {geradeaus}.|Ông/bà cứ đi thẳng.|
adv|weit|||xa|Ist es {weit}?|Có xa không?|
adv|gegenüber|||phía đối diện|Die Apotheke ist {gegenüber}.|Hiệu thuốc ở phía đối diện.|
adv|dort|||ở đó|{Dort} ist der Bahnhof.|Nhà ga ở đó.|
adv|da|||ở đó, đây|Ist Herr Klein {da}?|Ông Klein có ở đây không?|
prep|in|||trong, ở trong; vào|Wir sind {in} der Stadt.|Chúng tôi đang ở trong thành phố.|wo? + Dativ: in der/im; wohin? + Akkusativ: in die/ins.
prep|an|||ở cạnh, sát; tại|Wir warten {an} der Ampel.|Chúng tôi chờ ở đèn giao thông.|an dem = am.
prep|auf|||trên (bề mặt)|Das Buch liegt {auf} dem Tisch.|Cuốn sách nằm trên bàn.|
prep|neben|||bên cạnh|Die Bank ist {neben} der Post.|Ngân hàng ở cạnh bưu điện.|
prep|vor|||trước|Ich warte {vor} dem Kino.|Tôi chờ trước rạp phim.|
prep|hinter|||phía sau|Der Park ist {hinter} der Schule.|Công viên ở phía sau trường.|
prep|zwischen|||ở giữa|Das Café ist {zwischen} der Bank und dem Hotel.|Quán cà phê ở giữa ngân hàng và khách sạn.|
prep|zu|||đến (ai, nơi nào)|Ich gehe {zur} Apotheke.|Tôi đi đến hiệu thuốc.|zu + Dativ: zu dem = zum, zu der = zur.
prep|bis|||đến (tận)|Gehen Sie {bis} zur Kreuzung.|Ông/bà đi đến ngã tư.|
v|abbiegen|||rẽ|Biegen Sie an der Ampel rechts {ab}.|Ông/bà rẽ phải ở đèn giao thông.|Động từ tách: er biegt ab, ist abgebogen
v|liegen|||nằm|Das Hotel {liegt} im Zentrum.|Khách sạn nằm ở trung tâm.|er liegt, hat gelegen
v|zeigen|||chỉ, cho xem|Können Sie mir den Weg {zeigen}?|Ông/bà chỉ đường cho tôi được không?|er zeigt, hat gezeigt
v|fragen|||hỏi|Ich {frage} einen Polizisten.|Tôi hỏi một anh cảnh sát.|er fragt, hat gefragt
v|öffnen|||mở|Die Post {öffnet} um acht.|Bưu điện mở cửa lúc tám giờ.|er öffnet, hat geöffnet
adj|offen|||mở (cửa)|Ist die Bank noch {offen}?|Ngân hàng còn mở cửa không?|
adj|geschlossen|||đóng cửa|Am Sonntag ist alles {geschlossen}.|Chủ nhật mọi thứ đều đóng cửa.|
adj|nah|||gần|Der Park ist ganz {nah}.|Công viên rất gần.|so sánh: näher, am nächsten
p|Wie komme ich zu|||làm sao để đến|{Wie komme ich zum} Rathaus?|Làm sao để tôi đến tòa thị chính?|zu + dem = zum, zu + der = zur.
p|Entschuldigen Sie|||xin lỗi (lịch sự, để hỏi)|{Entschuldigen Sie}, wo ist die Post?|Xin lỗi, bưu điện ở đâu?|
p|in der Nähe|||ở gần đây|Gibt es {in der Nähe} ein Café?|Gần đây có quán cà phê không?|
g|Giới từ nơi chốn + Dativ (wo?)|||vị trí: in, an, auf, neben, vor, hinter, zwischen|Die Bank ist neben {der} Post.|Ngân hàng ở cạnh bưu điện.|Trả lời câu hỏi wo? → Dativ: der → dem, die → der, das → dem.
g|in dem = im, an dem = am|||viết rút gọn|Wir treffen uns {im} Café.|Chúng ta gặp nhau ở quán cà phê.|in + dem = im; an + dem = am; zu + dem = zum; zu + der = zur.
g|Mệnh lệnh cách với Sie|||chỉ dẫn lịch sự|{Gehen} Sie geradeaus.|Ông/bà đi thẳng.|Động từ nguyên mẫu đứng đầu + Sie.
g|Mệnh lệnh cách với du|||yêu cầu thân mật|{Komm} bitte mit!|Đi cùng nhé!|du kommst → Komm!; động từ tách: Ruf mich an!
n|Eingang|der|¨-e|lối vào|Wo ist der {Eingang}?|Lối vào ở đâu?|
n|Ausgang|der|¨-e|lối ra|Der {Ausgang} ist links.|Lối ra ở bên trái.|
n|Toilette|die|-n|nhà vệ sinh|Entschuldigung, wo ist die {Toilette}?|Xin lỗi, nhà vệ sinh ở đâu?|
n|Mitte|die||chính giữa|Der Tisch steht in der {Mitte}.|Cái bàn đặt ở giữa.|
v|schließen|||đóng (cửa)|Die Apotheke {schließt} um 18 Uhr.|Hiệu thuốc đóng cửa lúc 18 giờ.|er schließt, hat geschlossen
v|drücken|||ấn, đẩy|Hier müssen Sie {drücken}, nicht ziehen.|Ở đây phải đẩy, không phải kéo.|er drückt, hat gedrückt
n|Schild|das|-er|biển báo|Was steht auf dem {Schild}?|Trên biển báo ghi gì?|
n|Vorsicht|die||sự cẩn thận|{Vorsicht}, die Straße ist nass!|Cẩn thận, đường ướt!|
n|Norden|der||phía bắc|Hamburg liegt im {Norden}.|Hamburg nằm ở phía bắc.|
n|Süden|der||phía nam|München liegt im {Süden}.|München nằm ở phía nam.|
n|Osten|der||phía đông|Dresden liegt im {Osten}.|Dresden nằm ở phía đông.|
n|Westen|der||phía tây|Köln liegt im {Westen}.|Köln nằm ở phía tây.|
n|Auskunft|die|¨-e|quầy hỏi đáp, thông tin|Fragen Sie bitte an der {Auskunft}.|Xin hỏi ở quầy thông tin.|
n|Information|die|-en|thông tin|Wo bekomme ich {Informationen} über die Stadt?|Tôi lấy thông tin về thành phố ở đâu?|
n|Brief|der|-e|lá thư|Ich schreibe einen {Brief}.|Tôi viết một lá thư.|
n|Briefmarke|die|-n|tem thư|Ich brauche eine {Briefmarke}.|Tôi cần một con tem.|
n|Absender|der|-|người gửi|Der {Absender} steht oben links.|Người gửi ghi ở góc trên bên trái.|
n|Empfänger|der|-|người nhận|Wer ist der {Empfänger}?|Người nhận là ai?|
n|Postleitzahl|die|-en|mã bưu chính|Die {Postleitzahl} von Berlin-Mitte ist 10115.|Mã bưu chính của Berlin-Mitte là 10115.|
`;
export default pack;
