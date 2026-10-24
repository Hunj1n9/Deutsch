// A2 · 04 Mua sắm và thời trang. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Kaufhaus|das|¨-er|cửa hàng bách hóa|Das {Kaufhaus} hat fünf Etagen.|Cửa hàng bách hóa có năm tầng.|
n|Abteilung|die|-en|gian hàng, bộ phận|Die {Abteilung} für Herrenmode ist im ersten Stock.|Gian thời trang nam ở tầng một.|
n|Kasse|die|-n|quầy thu ngân|Bitte zahlen Sie an der {Kasse}.|Vui lòng thanh toán ở quầy thu ngân.|
n|Umkleidekabine|die|-n|phòng thử đồ|Wo ist die {Umkleidekabine}?|Phòng thử đồ ở đâu?|
n|Angebot|das|-e|hàng khuyến mãi; lời đề nghị|Die Schuhe sind im {Angebot}.|Đôi giày đang khuyến mãi.|
n|Rabatt|der|-e|giảm giá|Heute gibt es 20 Prozent {Rabatt}.|Hôm nay giảm giá 20 phần trăm.|
n|Kassenbon|der|-s|biên lai|Haben Sie den {Kassenbon} noch?|Ông/bà còn giữ biên lai không?|
n|Kreditkarte|die|-n|thẻ tín dụng|Kann ich mit {Kreditkarte} zahlen?|Tôi trả bằng thẻ tín dụng được không?|
n|Bargeld|das||tiền mặt|Ich habe kein {Bargeld} dabei.|Tôi không mang tiền mặt.|
n|Mode|die|-n|thời trang|Sie interessiert sich für {Mode}.|Cô ấy quan tâm đến thời trang.|
n|Stil|der|-e|phong cách|Das ist nicht mein {Stil}.|Đó không phải phong cách của tôi.|
n|Anzug|der|¨-e|bộ vest|Für die Hochzeit kaufe ich einen {Anzug}.|Tôi mua một bộ vest cho đám cưới.|
n|Bluse|die|-n|áo cánh nữ|Die {Bluse} ist aus Seide.|Chiếc áo cánh làm bằng lụa.|
n|Gürtel|der|-|thắt lưng|Der {Gürtel} ist zu kurz.|Thắt lưng ngắn quá.|
n|Tasche|die|-n|cái túi|Die {Tasche} ist aus Leder.|Cái túi làm bằng da.|
n|Brille|die|-n|kính đeo mắt|Ich brauche eine neue {Brille}.|Tôi cần một cặp kính mới.|
n|Schmuck|der||trang sức|Sie trägt keinen {Schmuck}.|Cô ấy không đeo trang sức.|
n|Ring|der|-e|cái nhẫn|Der {Ring} ist aus Gold.|Chiếc nhẫn bằng vàng.|
n|Handschuh|der|-e|găng tay|Im Winter trage ich {Handschuhe}.|Mùa đông tôi đeo găng tay.|
n|Stoff|der|-e|vải|Der {Stoff} ist sehr weich.|Vải rất mềm.|
n|Baumwolle|die||vải bông|Das T-Shirt ist aus {Baumwolle}.|Áo phông làm bằng vải bông.|
n|Qualität|die|-en|chất lượng|Die {Qualität} ist sehr gut.|Chất lượng rất tốt.|
v|umtauschen|||đổi (hàng)|Kann ich die Hose {umtauschen}?|Tôi đổi cái quần này được không?|Động từ tách: er tauscht um, hat umgetauscht
v|zurückgeben|||trả lại|Ich möchte die Jacke {zurückgeben}.|Tôi muốn trả lại áo khoác.|Động từ tách: er gibt zurück, hat zurückgegeben
v|aussehen|||trông có vẻ|Du {siehst} toll aus!|Trông bạn tuyệt lắm!|Động từ tách: du siehst aus, er sieht aus, hat ausgesehen
p|Das steht dir gut|||cái này hợp với bạn|Die Farbe? {Das steht dir gut}!|Màu này à? Hợp với bạn lắm!|stehen + Dativ (người): Die Jacke steht ihm.
v|ausgeben|||tiêu (tiền)|Ich {gebe} zu viel Geld für Kleidung aus.|Tôi tiêu quá nhiều tiền cho quần áo.|Động từ tách: du gibst aus, er gibt aus, hat ausgegeben
v|sparen|||tiết kiệm|Ich {spare} für ein neues Handy.|Tôi tiết kiệm để mua điện thoại mới.|er spart, hat gespart
v|vergleichen|||so sánh|Ich {vergleiche} die Preise.|Tôi so sánh giá.|er vergleicht, hat verglichen
v|bedienen|||phục vụ|Werden Sie schon {bedient}?|Đã có ai phục vụ ông/bà chưa?|er bedient, hat bedient
v|sich entscheiden|||quyết định|Ich kann {mich} nicht entscheiden.|Tôi không quyết định được.|er entscheidet sich, hat sich entschieden; für + Akk
adj|elegant|||thanh lịch|Das Kleid ist sehr {elegant}.|Chiếc váy rất thanh lịch.|
adj|hübsch|||xinh xắn|Die Bluse ist {hübsch}.|Chiếc áo cánh xinh xắn.|
adj|hässlich|||xấu xí|Die Farbe finde ich {hässlich}.|Tôi thấy màu này xấu.|
adj|altmodisch|||lỗi thời|Der Mantel ist {altmodisch}.|Áo măng tô lỗi mốt rồi.|
adj|weich|||mềm|Der Pullover ist schön {weich}.|Áo len mềm mại.|
adj|hart|||cứng|Die Schuhe sind zu {hart}.|Đôi giày cứng quá.|
adj|gestreift|||kẻ sọc|Er trägt ein {gestreiftes} Hemd.|Anh ấy mặc áo sơ mi kẻ sọc.|
adj|kariert|||kẻ ô|Ich mag den {karierten} Rock.|Tôi thích chiếc chân váy kẻ ô.|
adj|preiswert|||đáng giá tiền, rẻ|Die Tasche ist {preiswert}.|Cái túi giá hời.|
adj|ähnlich|||giống, tương tự|Die beiden Hosen sind sehr {ähnlich}.|Hai chiếc quần rất giống nhau.|
adv|genauso|||giống hệt như|Die Jacke ist {genauso} teuer wie der Mantel.|Áo khoác đắt bằng áo măng tô.|
conj|als|||hơn (so sánh)|Der Mantel ist teurer {als} die Jacke.|Áo măng tô đắt hơn áo khoác.|So sánh hơn + als; bằng nhau: so … wie.
p|Kann ich Ihnen helfen?|||tôi giúp gì được ông/bà?|Guten Tag, {kann ich Ihnen helfen}?|Xin chào, tôi giúp gì được ạ?|
p|Ich schaue nur|||tôi chỉ xem thôi|Danke, {ich schaue nur}.|Cảm ơn, tôi chỉ xem thôi.|
p|eine Nummer größer|||lớn hơn một cỡ|Haben Sie das {eine Nummer größer}?|Có cỡ lớn hơn một số không?|
g|Đuôi tính từ sau ein/kein/mein (Nominativ)|||đuôi mang dấu hiệu giống|Das ist ein {schöner} Mantel.|Đây là một chiếc áo măng tô đẹp.|ein schöner Mantel (der), eine schöne Bluse (die), ein schönes Kleid (das).
g|Đuôi tính từ sau ein (Akkusativ)|||giống đực đổi thành -en|Ich suche einen {warmen} Pullover.|Tôi tìm một chiếc áo len ấm.|einen warmen Pullover, eine warme Jacke, ein warmes Hemd.
g|So sánh hơn: -er + als|||so sánh hai vật|Die Jacke ist {billiger} als der Mantel.|Áo khoác rẻ hơn áo măng tô.|Tính từ ngắn thường thêm umlaut: alt → älter, groß → größer; gut → besser, viel → mehr.
g|so … wie: so sánh bằng|||giống nhau về mức độ|Der Rock ist so teuer {wie} die Bluse.|Chân váy đắt bằng áo cánh.|Phủ định: nicht so … wie = không bằng.
n|Kette|die|-n|dây chuyền|Die {Kette} ist ein Geschenk von meiner Mutter.|Sợi dây chuyền là quà của mẹ tôi.|
n|Ohrring|der|-e|bông tai|Sie trägt goldene {Ohrringe}.|Cô ấy đeo bông tai vàng.|
n|Kleiderschrank|der|¨-e|tủ quần áo|Mein {Kleiderschrank} ist voll.|Tủ quần áo của tôi đầy rồi.|
n|Schaufenster|das|-|tủ kính bày hàng|Im {Schaufenster} sehe ich eine schöne Jacke.|Trong tủ kính tôi thấy một chiếc áo khoác đẹp.|
v|anhaben|||đang mặc|Was {hast} du heute an?|Hôm nay bạn mặc gì?|Động từ tách: er hat an, hat angehabt
adj|modisch|||hợp thời trang|Sie ist immer sehr {modisch} angezogen.|Cô ấy luôn ăn mặc hợp thời trang.|
p|Was kostet …?|||… giá bao nhiêu?|{Was kostet} die Tasche?|Cái túi giá bao nhiêu?|
`;
export default pack;
