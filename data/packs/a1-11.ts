// A1 · 11 Quần áo và thời tiết. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Kleidung|die||quần áo|Ich kaufe neue {Kleidung}.|Tôi mua quần áo mới.|Danh từ tập hợp, không đếm.
n|Hose|die|-n|quần dài|Die {Hose} ist zu lang.|Cái quần dài quá.|
n|Hemd|das|-en|áo sơ mi|Er trägt ein weißes {Hemd}.|Anh ấy mặc áo sơ mi trắng.|
n|T-Shirt|das|-s|áo phông|Das {T-Shirt} kostet zehn Euro.|Áo phông giá mười euro.|
n|Pullover|der|-|áo len|Der {Pullover} ist warm.|Áo len ấm.|
n|Jacke|die|-n|áo khoác|Nimm eine {Jacke} mit!|Mang theo áo khoác đi!|
n|Mantel|der|¨|áo măng tô|Im Winter trage ich einen {Mantel}.|Mùa đông tôi mặc áo măng tô.|
n|Kleid|das|-er|váy liền|Das {Kleid} ist sehr schön.|Chiếc váy rất đẹp.|
n|Rock|der|¨-e|chân váy|Sie trägt einen kurzen {Rock}.|Cô ấy mặc chân váy ngắn.|
n|Schuh|der|-e|giày|Die {Schuhe} sind bequem.|Đôi giày thoải mái.|
n|Stiefel|der|-|bốt, ủng|Im Winter brauche ich {Stiefel}.|Mùa đông tôi cần đôi bốt.|
n|Socke|die|-n|tất|Wo sind meine {Socken}?|Tất của tôi đâu?|
n|Mütze|die|-n|mũ len|Die {Mütze} ist warm.|Mũ len ấm.|
n|Schal|der|-s|khăn quàng|Der {Schal} ist aus Wolle.|Khăn quàng làm bằng len.|
n|Größe|die|-n|cỡ, kích thước|Welche {Größe} haben Sie?|Ông/bà mặc cỡ nào?|
n|Farbe|die|-n|màu sắc|Welche {Farbe} gefällt dir?|Bạn thích màu nào?|
n|Wetter|das||thời tiết|Wie ist das {Wetter} heute?|Hôm nay thời tiết thế nào?|
n|Sonne|die|-n|mặt trời|Die {Sonne} scheint.|Mặt trời chiếu sáng.|
n|Regen|der||mưa|Morgen gibt es {Regen}.|Ngày mai có mưa.|
n|Schnee|der||tuyết|Im Januar liegt {Schnee}.|Tháng Một có tuyết.|
n|Wind|der|-e|gió|Der {Wind} ist stark.|Gió mạnh.|
n|Wolke|die|-n|đám mây|Am Himmel sind viele {Wolken}.|Trên trời có nhiều mây.|
n|Grad|das|-|độ|Es sind 30 {Grad}.|Trời 30 độ.|
n|Frühling|der|-e|mùa xuân|Im {Frühling} blühen die Blumen.|Mùa xuân hoa nở.|
n|Sommer|der|-|mùa hè|Im {Sommer} ist es heiß.|Mùa hè trời nóng.|
n|Herbst|der|-e|mùa thu|Im {Herbst} ist es windig.|Mùa thu trời nhiều gió.|
n|Winter|der|-|mùa đông|Im {Winter} ist es kalt.|Mùa đông trời lạnh.|
v|tragen|||mặc; mang|Sie {trägt} heute ein Kleid.|Hôm nay cô ấy mặc váy.|du trägst, er trägt, hat getragen
v|anprobieren|||mặc thử|Kann ich die Hose {anprobieren}?|Tôi mặc thử quần được không?|Động từ tách: er probiert an, hat anprobiert
v|gefallen|||làm hài lòng, thích|Das Kleid {gefällt} mir.|Tôi thích chiếc váy này.|es gefällt, hat gefallen; gefallen + Dativ (người thích)
v|passen|||vừa (cỡ)|Die Schuhe {passen} gut.|Đôi giày vừa vặn.|es passt, hat gepasst
v|regnen|||mưa|Es {regnet} seit Stunden.|Trời mưa hàng giờ rồi.|es regnet, hat geregnet
v|scheinen|||chiếu sáng|Heute {scheint} die Sonne.|Hôm nay trời nắng.|es scheint, hat geschienen
v|schneien|||có tuyết rơi|Es {schneit}!|Tuyết rơi!|es schneit, hat geschneit
adj|warm|||ấm|Heute ist es {warm}.|Hôm nay trời ấm.|so sánh: wärmer
adj|kalt|||lạnh|Mir ist {kalt}.|Tôi thấy lạnh.|so sánh: kälter
adj|heiß|||nóng|Im Juli ist es sehr {heiß}.|Tháng Bảy trời rất nóng.|
adj|kühl|||mát|Am Abend wird es {kühl}.|Buổi tối trời mát.|
adj|sonnig|||nắng|Morgen wird es {sonnig}.|Ngày mai trời nắng.|
adj|windig|||có gió|Es ist sehr {windig}.|Trời rất nhiều gió.|
adj|bewölkt|||nhiều mây|Der Himmel ist {bewölkt}.|Trời nhiều mây.|
adj|lang|||dài|Das Kleid ist zu {lang}.|Chiếc váy dài quá.|
adj|kurz|||ngắn|Die Hose ist zu {kurz}.|Cái quần ngắn quá.|
adj|bunt|||sặc sỡ, nhiều màu|Sie trägt gern {bunte} Kleider.|Cô ấy thích mặc váy sặc sỡ.|
adj|eng|||chật|Die Jacke ist zu {eng}.|Áo khoác chật quá.|
adj|rot|||đỏ|Ich nehme die {rote} Jacke.|Tôi lấy cái áo khoác đỏ.|
adj|blau|||xanh dương|Der Himmel ist {blau}.|Bầu trời xanh.|
adj|grün|||xanh lá|Das Gras ist {grün}.|Cỏ xanh.|
adj|gelb|||vàng|Die Banane ist {gelb}.|Quả chuối màu vàng.|
adj|schwarz|||đen|Er trägt {schwarze} Schuhe.|Anh ấy đi giày đen.|
adj|weiß|||trắng|Der Schnee ist {weiß}.|Tuyết màu trắng.|
adj|grau|||xám|Heute ist der Himmel {grau}.|Hôm nay trời xám xịt.|
pron|welcher|||cái nào|{Welcher} Mantel gefällt dir?|Bạn thích cái áo măng tô nào?|welcher/welche/welches theo giống như der/die/das.
g|Tính từ làm vị ngữ: không đổi đuôi|||sau sein, werden, bleiben|Die Jacke ist {warm}.|Áo khoác ấm.|Tính từ đứng sau động từ thì giữ nguyên; đứng trước danh từ mới thêm đuôi.
g|Đại từ nhân xưng Akkusativ|||mich, dich, ihn, sie, es, uns, euch|Der Rock? Ich nehme {ihn}.|Chân váy à? Tôi lấy nó.|er → ihn ở Akkusativ; sie, es giữ nguyên.
g|dieser / diese / dieses|||cái này|{Dieser} Pullover ist billig.|Cái áo len này rẻ.|Đuôi giống mạo từ xác định: der → dieser, die → diese, das → dieses.
g|Es regnet: chủ ngữ es|||nói về thời tiết|{Es} schneit im Dezember.|Tháng Mười hai có tuyết.|Động từ thời tiết luôn đi với es.
`;
export default pack;
