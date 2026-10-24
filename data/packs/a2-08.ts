// A2 · 08 Du lịch và kỳ nghỉ. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Unterkunft|die|¨-e|chỗ ở|Wir suchen eine günstige {Unterkunft}.|Chúng tôi tìm chỗ ở giá rẻ.|
n|Jugendherberge|die|-n|nhà nghỉ thanh niên|Die {Jugendherberge} ist billig.|Nhà nghỉ thanh niên rẻ.|
n|Ferienwohnung|die|-en|căn hộ nghỉ dưỡng|Wir mieten eine {Ferienwohnung} am Meer.|Chúng tôi thuê căn hộ nghỉ dưỡng gần biển.|
n|Zelt|das|-e|cái lều|Wir schlafen im {Zelt}.|Chúng tôi ngủ trong lều.|
n|Doppelzimmer|das|-|phòng đôi|Ich möchte ein {Doppelzimmer} reservieren.|Tôi muốn đặt một phòng đôi.|Einzelzimmer = phòng đơn.
n|Rezeption|die|-en|quầy lễ tân|Der Schlüssel ist an der {Rezeption}.|Chìa khóa ở quầy lễ tân.|
n|Aufenthalt|der|-e|thời gian lưu trú|Wir wünschen Ihnen einen schönen {Aufenthalt}.|Chúc quý khách có kỳ lưu trú vui vẻ.|
n|Sehenswürdigkeit|die|-en|danh lam thắng cảnh|Hanoi hat viele {Sehenswürdigkeiten}.|Hà Nội có nhiều danh lam thắng cảnh.|
n|Ausflug|der|¨-e|chuyến đi chơi ngắn|Am Sonntag machen wir einen {Ausflug}.|Chủ nhật chúng tôi đi chơi.|
n|Stadtführung|die|-en|tour tham quan thành phố|Die {Stadtführung} beginnt am Rathaus.|Tour thành phố bắt đầu ở tòa thị chính.|
n|Tourist|der|-en|khách du lịch (nam)|Im Sommer kommen viele {Touristen}.|Mùa hè có nhiều khách du lịch.|n-Deklination. Nữ: die Touristin.
n|Insel|die|-n|hòn đảo|Phu Quoc ist eine schöne {Insel}.|Phú Quốc là một hòn đảo đẹp.|
n|See|der|-n|hồ|Wir schwimmen im {See}.|Chúng tôi bơi trong hồ.|die See = biển.
n|Fluss|der|¨-e|con sông|Der {Fluss} heißt Rhein.|Con sông tên là sông Rhein.|
n|Wald|der|¨-er|khu rừng|Wir wandern durch den {Wald}.|Chúng tôi đi bộ xuyên rừng.|
n|Küste|die|-n|bờ biển|Wir fahren an die {Küste}.|Chúng tôi đi ra bờ biển.|
n|Landschaft|die|-en|phong cảnh|Die {Landschaft} ist wunderschön.|Phong cảnh tuyệt đẹp.|
n|Grenze|die|-n|biên giới|An der {Grenze} zeigen wir den Pass.|Ở biên giới chúng tôi trình hộ chiếu.|
n|Visum|das|Visa|thị thực|Für Deutschland brauche ich ein {Visum}.|Để sang Đức tôi cần visa.|
n|Reisebüro|das|-s|văn phòng du lịch|Wir buchen die Reise im {Reisebüro}.|Chúng tôi đặt chuyến đi ở văn phòng du lịch.|
n|Postkarte|die|-n|bưu thiếp|Ich schreibe eine {Postkarte} an meine Eltern.|Tôi viết bưu thiếp cho bố mẹ.|
n|Andenken|das|-|quà lưu niệm|Ich kaufe ein {Andenken}.|Tôi mua một món quà lưu niệm.|
n|Rucksack|der|¨-e|ba lô|Mein {Rucksack} ist sehr schwer.|Ba lô của tôi rất nặng.|
n|Wetterbericht|der|-e|bản tin thời tiết|Laut {Wetterbericht} regnet es morgen.|Theo dự báo thời tiết, mai trời mưa.|
v|übernachten|||ngủ qua đêm|Wir {übernachten} im Hotel.|Chúng tôi ngủ lại khách sạn.|er übernachtet, hat übernachtet
v|besichtigen|||tham quan|Wir {besichtigen} das Schloss.|Chúng tôi tham quan lâu đài.|er besichtigt, hat besichtigt
v|erleben|||trải nghiệm|Wir haben viel {erlebt}.|Chúng tôi đã trải qua nhiều điều.|er erlebt, hat erlebt
v|sich erholen|||nghỉ ngơi, hồi sức|Im Urlaub {erhole} ich mich gut.|Kỳ nghỉ tôi nghỉ ngơi rất tốt.|er erholt sich, hat sich erholt
v|sich verlaufen|||lạc đường (đi bộ)|Wir haben {uns} in der Altstadt verlaufen.|Chúng tôi lạc đường trong phố cổ.|du verläufst dich, er verläuft sich, hat sich verlaufen
v|verpassen|||lỡ (tàu, xe)|Ich habe den Zug {verpasst}.|Tôi đã lỡ chuyến tàu.|er verpasst, hat verpasst
v|zelten|||cắm trại|Im Sommer {zelten} wir am See.|Mùa hè chúng tôi cắm trại cạnh hồ.|er zeltet, hat gezeltet
v|losfahren|||khởi hành|Wann {fahren} wir los?|Khi nào chúng ta khởi hành?|Động từ tách: er fährt los, ist losgefahren
v|tanken|||đổ xăng|Wir müssen noch {tanken}.|Chúng ta còn phải đổ xăng.|er tankt, hat getankt
adj|berühmt|||nổi tiếng|Die Halong-Bucht ist sehr {berühmt}.|Vịnh Hạ Long rất nổi tiếng.|
adj|historisch|||lịch sử|Die Stadt hat einen {historischen} Kern.|Thành phố có khu trung tâm lịch sử.|
adj|ausgebucht|||kín chỗ|Das Hotel ist leider {ausgebucht}.|Tiếc là khách sạn đã kín phòng.|
adj|fremd|||lạ|Ich bin hier {fremd}.|Tôi không phải người ở đây.|
adj|abenteuerlich|||phiêu lưu, mạo hiểm|Die Reise war {abenteuerlich}.|Chuyến đi đầy phiêu lưu.|
adv|hin|||đến đó (hướng đi)|Wie kommen wir {hin}?|Làm sao chúng ta đến đó?|hin = hướng ra xa người nói.
adv|zurück|||trở lại|Wann bist du wieder {zurück}?|Khi nào bạn quay lại?|
adv|ins Ausland|||ra nước ngoài|Sie geht für ein Jahr {ins Ausland}.|Cô ấy ra nước ngoài một năm.|
prep|aus|||từ (bên trong ra)|Er kommt gerade {aus} dem Urlaub.|Anh ấy vừa đi nghỉ về.|aus + Dativ.
prep|durch|||xuyên qua|Wir fahren {durch} die Schweiz.|Chúng tôi đi xuyên qua Thụy Sĩ.|durch + Akkusativ.
prep|um … herum|||xung quanh|Wir laufen {um} den See herum.|Chúng tôi đi bộ quanh hồ.|um + Akkusativ.
p|Wir haben Glück gehabt|||chúng tôi gặp may|Das Wetter war super, {wir haben Glück gehabt}.|Thời tiết tuyệt vời, chúng tôi gặp may.|
g|Woher? Wohin? Wo?|||hỏi nơi chốn và hướng|{Wohin} fahrt ihr im Sommer?|Mùa hè các bạn đi đâu?|wo = ở đâu (vị trí); wohin = đi đâu (hướng); woher = từ đâu.
g|nach / in / zu: đi đâu|||chọn giới từ chỉ hướng|Wir fahren {in} die Schweiz.|Chúng tôi đi Thụy Sĩ.|nach + thành phố/nước không mạo từ; in + nước có mạo từ, nơi khép kín; zu + người, cơ quan.
g|Số thứ tự: der erste, zweite, dritte|||ngày tháng và thứ tự|Heute ist der {dritte} Mai.|Hôm nay là ngày mùng ba tháng Năm.|1.–19. thêm -te (der zweite), từ 20 thêm -ste (der zwanzigste); erste, dritte, siebte bất quy tắc.
g|am + ngày tháng|||vào ngày …|Ich fliege am {zehnten} Juli.|Tôi bay vào ngày mười tháng Bảy.|am zehnten (Dativ, thêm -n).
n|Reiseführer|der|-|sách hướng dẫn du lịch; hướng dẫn viên|Laut {Reiseführer} ist das Museum am Montag zu.|Theo sách hướng dẫn, bảo tàng đóng cửa thứ Hai.|
n|Hafen|der|¨|bến cảng|Das Schiff liegt im {Hafen}.|Con tàu đậu ở cảng.|
n|Schiff|das|-e|con tàu thủy|Wir fahren mit dem {Schiff} nach Cat Ba.|Chúng tôi đi tàu thủy ra Cát Bà.|
n|Schloss|das|¨-er|lâu đài|Das {Schloss} ist über 500 Jahre alt.|Lâu đài đã hơn 500 năm tuổi.|
n|Altstadt|die|¨-e|phố cổ|Die {Altstadt} von Hoi An ist bekannt.|Phố cổ Hội An nổi tiếng.|
n|Wanderung|die|-en|chuyến đi bộ đường dài|Die {Wanderung} dauert vier Stunden.|Chuyến đi bộ kéo dài bốn tiếng.|
adj|preisgünstig|||giá rẻ|Wir suchen ein {preisgünstiges} Hotel.|Chúng tôi tìm khách sạn giá rẻ.|
p|eine Reise machen|||đi du lịch|Nächstes Jahr {machen} wir eine Reise nach Europa.|Năm sau chúng tôi đi du lịch châu Âu.|
adj|sicher|||an toàn; chắc chắn|Ist das Land {sicher}?|Nước đó có an toàn không?|
`;
export default pack;
