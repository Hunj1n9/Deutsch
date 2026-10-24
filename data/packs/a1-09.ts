// A1 · 09 Giao thông và du lịch. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Bus|der|-se|xe buýt|Ich fahre mit dem {Bus}.|Tôi đi bằng xe buýt.|
n|Zug|der|¨-e|tàu hỏa|Der {Zug} hat Verspätung.|Tàu bị trễ.|
n|U-Bahn|die|-en|tàu điện ngầm|Die {U-Bahn} fährt alle fünf Minuten.|Tàu điện ngầm năm phút có một chuyến.|
n|Straßenbahn|die|-en|tàu điện mặt đất|Wir nehmen die {Straßenbahn}.|Chúng tôi đi tàu điện.|
n|Auto|das|-s|ô tô|Mein {Auto} ist alt.|Xe ô tô của tôi cũ.|
n|Taxi|das|-s|taxi|Wir nehmen ein {Taxi}.|Chúng tôi đi taxi.|
n|Flugzeug|das|-e|máy bay|Das {Flugzeug} landet um zehn.|Máy bay hạ cánh lúc mười giờ.|
n|Flughafen|der|¨|sân bay|Der {Flughafen} ist weit weg.|Sân bay ở xa.|
n|Gleis|das|-e|đường ray, sân ga số|Der Zug fährt von {Gleis} drei.|Tàu chạy từ đường ray số ba.|
n|Fahrkarte|die|-n|vé (tàu, xe)|Ich kaufe eine {Fahrkarte}.|Tôi mua một vé.|
n|Ticket|das|-s|vé|Hast du das {Ticket}?|Bạn có vé chưa?|
n|Abfahrt|die|-en|giờ khởi hành|Die {Abfahrt} ist um 9:15 Uhr.|Giờ khởi hành là 9 giờ 15.|
n|Ankunft|die|¨-e|giờ đến|Die {Ankunft} ist um elf.|Giờ đến là mười một giờ.|
n|Verspätung|die|-en|sự chậm trễ|Der Bus hat zehn Minuten {Verspätung}.|Xe buýt trễ mười phút.|
n|Reise|die|-n|chuyến đi|Die {Reise} war schön.|Chuyến đi rất vui.|
n|Urlaub|der|-e|kỳ nghỉ (phép)|Im August mache ich {Urlaub}.|Tháng Tám tôi đi nghỉ.|
n|Koffer|der|-|va li|Mein {Koffer} ist schwer.|Va li của tôi nặng.|
n|Gepäck|das||hành lý|Wo ist Ihr {Gepäck}?|Hành lý của ông/bà đâu?|
n|Pass|der|¨-e|hộ chiếu|Ich brauche meinen {Pass}.|Tôi cần hộ chiếu.|
n|Meer|das|-e|biển|Wir fahren ans {Meer}.|Chúng tôi đi biển.|
n|Berg|der|-e|núi|Der {Berg} ist sehr hoch.|Ngọn núi rất cao.|
n|Strand|der|¨-e|bãi biển|Am {Strand} ist es heiß.|Trên bãi biển trời nóng.|
n|Ausland|das||nước ngoài|Sie arbeitet im {Ausland}.|Cô ấy làm việc ở nước ngoài.|
n|Fahrer|der|-|tài xế|Der {Fahrer} ist sehr nett.|Bác tài rất dễ mến.|Nữ: die Fahrerin.
v|fahren|||đi (bằng xe), lái|Ich {fahre} morgen nach Berlin.|Ngày mai tôi đi Berlin.|du fährst, er fährt, ist gefahren
v|fliegen|||bay|Wir {fliegen} nach Vietnam.|Chúng tôi bay về Việt Nam.|er fliegt, ist geflogen
v|ankommen|||đến nơi|Der Zug {kommt} um acht an.|Tàu đến lúc tám giờ.|Động từ tách: er kommt an, ist angekommen
v|abfahren|||khởi hành|Der Bus {fährt} gleich ab.|Xe buýt sắp chạy.|Động từ tách: er fährt ab, ist abgefahren
v|einsteigen|||lên (xe, tàu)|Bitte {steigen} Sie ein.|Mời ông/bà lên xe.|Động từ tách: er steigt ein, ist eingestiegen
v|aussteigen|||xuống (xe, tàu)|Wir {steigen} am Bahnhof aus.|Chúng tôi xuống ở nhà ga.|Động từ tách: er steigt aus, ist ausgestiegen
v|umsteigen|||chuyển (tàu, xe)|In Köln {steigen} Sie um.|Ở Köln ông/bà chuyển tàu.|Động từ tách: er steigt um, ist umgestiegen
v|bleiben|||ở lại|Wir {bleiben} eine Woche in Hamburg.|Chúng tôi ở lại Hamburg một tuần.|er bleibt, ist geblieben
v|reisen|||du lịch|Ich {reise} gern.|Tôi thích du lịch.|du reist, er reist, ist gereist
v|packen|||đóng gói, xếp đồ|Ich {packe} meinen Koffer.|Tôi xếp va li.|er packt, hat gepackt
v|buchen|||đặt (chỗ)|Wir {buchen} ein Hotel.|Chúng tôi đặt khách sạn.|er bucht, hat gebucht
v|landen|||hạ cánh|Das Flugzeug ist pünktlich {gelandet}.|Máy bay đã hạ cánh đúng giờ.|er landet, ist gelandet
adj|schwer|||nặng; khó|Die Tasche ist {schwer}.|Cái túi nặng.|
adj|leicht|||nhẹ; dễ|Der Koffer ist {leicht}.|Va li nhẹ.|
adj|direkt|||trực tiếp, thẳng|Gibt es einen {direkten} Zug?|Có tàu đi thẳng không?|
adj|voll|||đầy, đông|Der Bus ist {voll}.|Xe buýt đông người.|
adj|leer|||trống, rỗng|Die U-Bahn ist fast {leer}.|Tàu điện ngầm gần như trống.|
adv|zu Fuß|||đi bộ|Ich gehe {zu Fuß}.|Tôi đi bộ.|
adv|gleich|||ngay, sắp|Der Zug kommt {gleich}.|Tàu sắp đến.|
adv|weg|||đi khỏi; mất|Mein Pass ist {weg}!|Hộ chiếu của tôi mất rồi!|
prep|mit|||với; bằng (phương tiện)|Ich fahre {mit} der U-Bahn.|Tôi đi bằng tàu điện ngầm.|mit + Dativ.
prep|nach|||đến (thành phố, nước); sau|Wir fliegen {nach} Hanoi.|Chúng tôi bay về Hà Nội.|nach + tên thành phố/nước không mạo từ.
prep|von|||từ; của|Der Zug kommt {von} München.|Tàu đến từ München.|von + Dativ.
p|einfach oder hin und zurück|||vé một chiều hay khứ hồi|Einfach oder {hin und zurück}?|Một chiều hay khứ hồi?|
p|Gute Reise|||chúc thượng lộ bình an|{Gute Reise} und bis bald!|Chúc đi đường bình an và hẹn sớm gặp!|
g|mit + Dativ|||mit luôn đi với Dativ|Ich fahre mit {dem} Zug.|Tôi đi bằng tàu hỏa.|der/das → dem, die → der, số nhiều → den (+n).
g|Perfekt với haben|||thì quá khứ hoàn thành trong văn nói|Ich habe ein Hotel {gebucht}.|Tôi đã đặt khách sạn.|haben (vị trí 2) + Partizip II (cuối câu): ge- … -t.
g|Perfekt với sein|||động từ chỉ chuyển động, thay đổi trạng thái|Wir sind nach Berlin {gefahren}.|Chúng tôi đã đi Berlin.|fahren, gehen, kommen, fliegen, bleiben… dùng sein.
`;
export default pack;
