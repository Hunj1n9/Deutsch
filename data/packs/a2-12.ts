// A2 · 12 Môi trường và thời tiết. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Umwelt|die||môi trường|Wir müssen die {Umwelt} schützen.|Chúng ta phải bảo vệ môi trường.|
n|Natur|die||thiên nhiên|Am Wochenende bin ich gern in der {Natur}.|Cuối tuần tôi thích ở giữa thiên nhiên.|
n|Klima|das|-s|khí hậu|Das {Klima} in Hanoi ist feucht.|Khí hậu Hà Nội ẩm.|
n|Temperatur|die|-en|nhiệt độ|Die {Temperatur} steigt.|Nhiệt độ tăng.|
n|Gewitter|das|-|giông bão|Heute Abend gibt es ein {Gewitter}.|Tối nay có giông.|
n|Sturm|der|¨-e|cơn bão|Der {Sturm} war sehr stark.|Cơn bão rất mạnh.|
n|Nebel|der|-|sương mù|Am Morgen gibt es oft {Nebel}.|Buổi sáng thường có sương mù.|
n|Hitze|die||cái nóng|Bei dieser {Hitze} kann ich nicht schlafen.|Nóng thế này tôi không ngủ được.|
n|Kälte|die||cái lạnh|Ich mag die {Kälte} nicht.|Tôi không thích cái lạnh.|
n|Himmel|der|-|bầu trời|Der {Himmel} ist klar.|Bầu trời quang đãng.|
n|Luft|die|¨-e|không khí|Die {Luft} in der Stadt ist schlecht.|Không khí trong thành phố tệ.|
n|Energie|die|-n|năng lượng|Wir sollten {Energie} sparen.|Chúng ta nên tiết kiệm năng lượng.|
n|Strom|der||điện|Der {Strom} ist ausgefallen.|Mất điện rồi.|
n|Plastik|das||nhựa|Ich kaufe weniger {Plastik}.|Tôi mua ít đồ nhựa hơn.|
n|Abfall|der|¨-e|rác thải|Der {Abfall} kommt in die gelbe Tonne.|Rác này bỏ vào thùng vàng.|
n|Tier|das|-e|con vật|Im Zoo gibt es viele {Tiere}.|Ở sở thú có nhiều con vật.|
n|Vogel|der|¨|con chim|Der {Vogel} singt.|Con chim hót.|
n|Baum|der|¨-e|cái cây|Vor dem Haus steht ein großer {Baum}.|Trước nhà có một cái cây lớn.|
n|Blatt|das|¨-er|chiếc lá; tờ giấy|Im Herbst fallen die {Blätter}.|Mùa thu lá rụng.|
n|Gras|das|¨-er|cỏ|Die Kinder sitzen im {Gras}.|Bọn trẻ ngồi trên cỏ.|
n|Erde|die||trái đất; đất|Die {Erde} wird immer wärmer.|Trái đất ngày càng nóng lên.|
n|Welt|die|-en|thế giới|Ich möchte die {Welt} sehen.|Tôi muốn ngắm thế giới.|
n|Fahrradweg|der|-e|đường dành cho xe đạp|Die Stadt baut neue {Fahrradwege}.|Thành phố xây đường xe đạp mới.|
v|schützen|||bảo vệ|Wir {schützen} die Tiere.|Chúng tôi bảo vệ động vật.|er schützt, hat geschützt
v|trennen|||phân loại, tách|Ich {trenne} den Müll.|Tôi phân loại rác.|er trennt, hat getrennt
v|wegwerfen|||vứt đi|{Wirf} das nicht weg!|Đừng vứt cái đó đi!|Động từ tách: du wirfst weg, er wirft weg, hat weggeworfen
v|recyceln|||tái chế|Glas kann man gut {recyceln}.|Thủy tinh dễ tái chế.|er recycelt, hat recycelt
v|verschmutzen|||làm ô nhiễm|Autos {verschmutzen} die Luft.|Ô tô làm ô nhiễm không khí.|er verschmutzt, hat verschmutzt
v|steigen|||tăng; leo|Die Preise {steigen}.|Giá cả tăng.|er steigt, ist gestiegen
v|sinken|||giảm|Die Temperatur {sinkt} in der Nacht.|Nhiệt độ giảm vào ban đêm.|er sinkt, ist gesunken
v|wachsen|||lớn lên, mọc|Die Pflanzen {wachsen} schnell.|Cây cối lớn nhanh.|du wächst, er wächst, ist gewachsen
v|blühen|||nở hoa|Die Bäume {blühen} im Frühling.|Cây ra hoa vào mùa xuân.|er blüht, hat geblüht
v|verbrauchen|||tiêu thụ|Das Auto {verbraucht} viel Benzin.|Xe tiêu hao nhiều xăng.|er verbraucht, hat verbraucht
v|retten|||cứu|Wir können die Welt nicht allein {retten}.|Chúng ta không thể một mình cứu thế giới.|er rettet, hat gerettet
adj|feucht|||ẩm|Im Sommer ist es sehr {feucht}.|Mùa hè trời rất ẩm.|
adj|trocken|||khô|Die Luft ist {trocken}.|Không khí khô.|
adj|nass|||ướt|Meine Schuhe sind {nass}.|Giày của tôi bị ướt.|
adj|klar|||trong, quang; rõ ràng|Die Nacht ist {klar}.|Đêm quang đãng.|
adj|umweltfreundlich|||thân thiện với môi trường|Fahrradfahren ist {umweltfreundlich}.|Đi xe đạp thân thiện với môi trường.|
adj|gefährlich|||nguy hiểm|Der Sturm ist {gefährlich}.|Cơn bão nguy hiểm.|
adj|natürlich|||tự nhiên; tất nhiên|Das ist ganz {natürlich}.|Điều đó hoàn toàn tự nhiên.|
adv|weniger|||ít hơn|Wir sollten {weniger} Auto fahren.|Chúng ta nên đi ô tô ít hơn.|
adv|mehr|||nhiều hơn|Ich fahre jetzt {mehr} Fahrrad.|Giờ tôi đi xe đạp nhiều hơn.|
p|Es ist bewölkt|||trời nhiều mây|Heute {ist es bewölkt}.|Hôm nay trời nhiều mây.|
p|Wie wird das Wetter?|||thời tiết sẽ thế nào?|{Wie wird das Wetter} morgen?|Ngày mai thời tiết sẽ thế nào?|
g|So sánh nhất: am …sten|||mức cao nhất|Im August ist es {am heißesten}.|Tháng Tám nóng nhất.|am kältesten, am wärmsten; gut → am besten, viel → am meisten.
g|So sánh nhất trước danh từ: der …ste|||tính từ so sánh nhất làm định ngữ|Das ist der {höchste} Berg.|Đây là ngọn núi cao nhất.|hoch → höher → der höchste.
g|Bị động hiện tại: werden + Partizip II|||giới thiệu câu bị động|Hier {wird} Müll getrennt.|Ở đây rác được phân loại.|werden (vị trí 2) + Partizip II (cuối câu).
g|Mệnh đề quan hệ (giới thiệu)|||der, die, das nối câu|Das ist der Baum, {der} vor unserem Haus steht.|Đây là cái cây ở trước nhà chúng tôi.|Đại từ quan hệ theo giống của danh từ; động từ đứng cuối.
n|Regenschirm|der|-e|cái ô|Vergiss deinen {Regenschirm} nicht!|Đừng quên ô của bạn!|
n|Jahreszeit|die|-en|mùa|Welche {Jahreszeit} magst du am liebsten?|Bạn thích mùa nào nhất?|
n|Überschwemmung|die|-en|lũ lụt|Nach dem Regen gab es eine {Überschwemmung}.|Sau cơn mưa đã có lũ lụt.|
n|Solarenergie|die||năng lượng mặt trời|Das Haus nutzt {Solarenergie}.|Ngôi nhà dùng năng lượng mặt trời.|
n|Bio-Laden|der|¨|cửa hàng thực phẩm hữu cơ|Ich kaufe Gemüse im {Bio-Laden}.|Tôi mua rau ở cửa hàng hữu cơ.|
adj|wolkenlos|||không một gợn mây|Der Himmel ist {wolkenlos}.|Bầu trời không một gợn mây.|
adj|mild|||ôn hòa, dịu|Der Winter war dieses Jahr {mild}.|Mùa đông năm nay dịu.|
p|Es ist schwül|||trời oi bức|Heute {ist es schwül}.|Hôm nay trời oi bức.|
`;
export default pack;
