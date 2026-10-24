// A1 · 06 Một ngày của tôi. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
v|aufstehen|||thức dậy, đứng dậy|Ich {stehe} um sechs Uhr auf.|Tôi dậy lúc sáu giờ.|Động từ tách: er steht auf, ist aufgestanden
v|frühstücken|||ăn sáng|Wir {frühstücken} zusammen.|Chúng tôi ăn sáng cùng nhau.|er frühstückt, hat gefrühstückt
v|duschen|||tắm vòi sen|Ich {dusche} am Morgen.|Tôi tắm vào buổi sáng.|er duscht, hat geduscht
v|anziehen|||mặc (quần áo)|Ich {ziehe} eine Jacke an.|Tôi mặc áo khoác.|Động từ tách: er zieht an, hat angezogen
v|einkaufen|||đi mua sắm|Am Samstag {kaufe} ich ein.|Thứ Bảy tôi đi mua sắm.|Động từ tách: er kauft ein, hat eingekauft
v|anrufen|||gọi điện|Ich {rufe} meine Mutter an.|Tôi gọi điện cho mẹ.|Động từ tách: er ruft an, hat angerufen
v|fernsehen|||xem TV|Am Abend {sehe} ich fern.|Buổi tối tôi xem TV.|Động từ tách: du siehst fern, er sieht fern, hat ferngesehen
v|aufräumen|||dọn dẹp|Ich {räume} mein Zimmer auf.|Tôi dọn phòng.|Động từ tách: er räumt auf, hat aufgeräumt
v|anfangen|||bắt đầu|Die Arbeit {fängt} um acht an.|Công việc bắt đầu lúc tám giờ.|Động từ tách: du fängst an, er fängt an, hat angefangen
v|aufhören|||dừng, kết thúc|Ich {höre} um fünf auf.|Tôi nghỉ làm lúc năm giờ.|Động từ tách: er hört auf, hat aufgehört
v|schlafen|||ngủ|Das Baby {schläft} schon.|Em bé ngủ rồi.|du schläfst, er schläft, hat geschlafen
v|gehen|||đi (bộ)|Ich {gehe} zur Arbeit.|Tôi đi làm.|er geht, ist gegangen
v|machen|||làm|Was {machst} du heute?|Hôm nay bạn làm gì?|er macht, hat gemacht
v|spülen|||rửa (bát)|Nach dem Essen {spülen} wir.|Sau bữa ăn chúng tôi rửa bát.|er spült, hat gespült
v|waschen|||giặt; rửa|Ich {wasche} meine Kleidung.|Tôi giặt quần áo.|du wäschst, er wäscht, hat gewaschen
v|putzen|||lau chùi; đánh (răng)|Ich {putze} mir die Zähne.|Tôi đánh răng.|er putzt, hat geputzt
v|abholen|||đón (ai)|Ich {hole} die Kinder um vier ab.|Tôi đón bọn trẻ lúc bốn giờ.|Động từ tách: er holt ab, hat abgeholt
v|mitkommen|||đi cùng|{Kommst} du mit?|Bạn có đi cùng không?|Động từ tách: er kommt mit, ist mitgekommen
v|zurückkommen|||quay về|Ich {komme} um sieben zurück.|Tôi về lúc bảy giờ.|Động từ tách: er kommt zurück, ist zurückgekommen
v|warten|||chờ|Ich {warte} auf den Bus.|Tôi chờ xe buýt.|du wartest, er wartet, hat gewartet; warten auf + Akk
n|Arbeit|die|-en|công việc; chỗ làm|Nach der {Arbeit} gehe ich einkaufen.|Sau giờ làm tôi đi mua sắm.|
n|Pause|die|-n|giờ nghỉ|Wir machen eine {Pause}.|Chúng ta nghỉ giải lao.|
n|Feierabend|der|-e|giờ tan làm|Um fünf habe ich {Feierabend}.|Năm giờ tôi tan làm.|
n|Alltag|der||cuộc sống thường ngày|Mein {Alltag} ist sehr voll.|Cuộc sống hằng ngày của tôi rất bận.|
n|Wecker|der|-|đồng hồ báo thức|Der {Wecker} klingelt um sechs.|Đồng hồ báo thức reo lúc sáu giờ.|
n|Zahn|der|¨-e|răng|Mir tut ein {Zahn} weh.|Tôi đau một cái răng.|
n|Hausaufgabe|die|-n|bài tập về nhà|Ich mache meine {Hausaufgaben}.|Tôi làm bài tập về nhà.|Thường dùng số nhiều.
n|Haushalt|der|-e|việc nhà|Wer macht bei euch den {Haushalt}?|Ở nhà các bạn ai làm việc nhà?|
adv|immer|||luôn luôn|Ich trinke {immer} Kaffee am Morgen.|Buổi sáng tôi luôn uống cà phê.|
adv|meistens|||thường thì, phần lớn|{Meistens} esse ich zu Hause.|Tôi thường ăn ở nhà.|
adv|oft|||thường xuyên|Ich gehe {oft} spazieren.|Tôi thường đi dạo.|
adv|manchmal|||thỉnh thoảng|{Manchmal} koche ich am Abend.|Thỉnh thoảng tôi nấu ăn buổi tối.|
adv|selten|||hiếm khi|Ich sehe {selten} fern.|Tôi hiếm khi xem TV.|
adv|nie|||không bao giờ|Ich komme {nie} zu spät.|Tôi không bao giờ đến muộn.|
adv|früh|||sớm|Ich stehe {früh} auf.|Tôi dậy sớm.|
adv|spät|||muộn|Es ist schon {spät}.|Muộn rồi.|zu spät = quá muộn, trễ.
adv|dann|||sau đó|Ich dusche, {dann} frühstücke ich.|Tôi tắm, sau đó ăn sáng.|
adv|danach|||sau đó, sau việc đó|{Danach} gehe ich zur Arbeit.|Sau đó tôi đi làm.|
adv|zuerst|||trước tiên|{Zuerst} trinke ich Kaffee.|Trước tiên tôi uống cà phê.|
adv|schon|||đã, rồi|Bist du {schon} wach?|Bạn đã dậy chưa?|
adv|noch|||vẫn, còn|Ich schlafe {noch}.|Tôi vẫn đang ngủ.|
adv|zu Hause|||ở nhà|Am Sonntag bleibe ich {zu Hause}.|Chủ nhật tôi ở nhà.|nach Hause = về nhà (hướng).
adv|nach Hause|||về nhà|Um sechs gehe ich {nach Hause}.|Sáu giờ tôi về nhà.|
adj|müde|||mệt, buồn ngủ|Am Abend bin ich {müde}.|Buổi tối tôi mệt.|
adj|wach|||tỉnh táo, thức|Um fünf bin ich schon {wach}.|Năm giờ tôi đã thức.|
adj|fertig|||xong, sẵn sàng|Bist du {fertig}?|Bạn xong chưa?|
adj|pünktlich|||đúng giờ|Der Zug ist {pünktlich}.|Tàu đúng giờ.|
adj|stressig|||căng thẳng, bận rộn|Mein Tag ist {stressig}.|Ngày của tôi rất căng.|
p|jeden Tag|||mỗi ngày|Ich lerne {jeden Tag} Deutsch.|Tôi học tiếng Đức mỗi ngày.|
p|am Wochenende|||vào cuối tuần|{Am Wochenende} schlafe ich aus.|Cuối tuần tôi ngủ nướng.|
g|Động từ tách: tiền tố về cuối câu|||động từ tách trong câu|Ich {stehe} um sieben auf.|Tôi dậy lúc bảy giờ.|Phần chia ở vị trí 2, tiền tố (auf, an, ein…) đứng cuối câu.
g|Khung câu (Satzklammer)|||động từ chia ở vị trí 2, phần còn lại cuối câu|Ich rufe dich morgen {an}.|Ngày mai tôi gọi cho bạn.|Áp dụng cho động từ tách, động từ khuyết thiếu, Perfekt.
g|Đảo ngữ: trạng từ đứng đầu|||động từ vẫn ở vị trí 2|Am Morgen {trinke} ich Kaffee.|Buổi sáng tôi uống cà phê.|Thành phần nào đứng đầu, động từ vẫn đứng thứ hai, chủ ngữ ra sau động từ.
`;
export default pack;
