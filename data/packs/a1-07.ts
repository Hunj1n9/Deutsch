// A1 · 07 Thời gian rảnh và sở thích. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Freizeit|die||thời gian rảnh|In der {Freizeit} lese ich gern.|Lúc rảnh tôi thích đọc sách.|
n|Hobby|das|-s|sở thích|Mein {Hobby} ist Fotografieren.|Sở thích của tôi là chụp ảnh.|
n|Sport|der||thể thao|Ich mache jeden Tag {Sport}.|Tôi chơi thể thao mỗi ngày.|
n|Fußball|der||bóng đá|Am Sonntag spielen wir {Fußball}.|Chủ nhật chúng tôi đá bóng.|
n|Musik|die||âm nhạc|Ich höre gern {Musik}.|Tôi thích nghe nhạc.|
n|Lied|das|-er|bài hát|Das {Lied} ist schön.|Bài hát hay.|
n|Gitarre|die|-n|đàn ghi-ta|Mein Bruder spielt {Gitarre}.|Anh tôi chơi ghi-ta.|
n|Klavier|das|-e|đàn piano|Sie spielt seit zehn Jahren {Klavier}.|Cô ấy chơi piano đã mười năm.|
n|Buch|das|¨-er|quyển sách|Das {Buch} ist spannend.|Cuốn sách hấp dẫn.|
n|Film|der|-e|bộ phim|Der {Film} beginnt um acht.|Bộ phim bắt đầu lúc tám giờ.|
n|Kino|das|-s|rạp chiếu phim|Gehen wir heute ins {Kino}?|Hôm nay mình đi xem phim nhé?|
n|Konzert|das|-e|buổi hòa nhạc|Das {Konzert} war toll.|Buổi hòa nhạc thật tuyệt.|
n|Museum|das|Museen|bảo tàng|Am Sonntag ist das {Museum} kostenlos.|Chủ nhật bảo tàng miễn phí.|
n|Party|die|-s|bữa tiệc|Kommst du zu meiner {Party}?|Bạn đến bữa tiệc của tôi không?|
n|Spiel|das|-e|trò chơi; trận đấu|Das {Spiel} beginnt um drei.|Trận đấu bắt đầu lúc ba giờ.|
n|Fahrrad|das|¨-er|xe đạp|Ich fahre gern {Fahrrad}.|Tôi thích đạp xe.|
n|Schwimmbad|das|¨-er|bể bơi|Das {Schwimmbad} ist im Sommer voll.|Mùa hè bể bơi đông người.|
n|Park|der|-s|công viên|Wir gehen in den {Park}.|Chúng tôi đi công viên.|
n|Spaß|der||niềm vui|Tanzen macht {Spaß}!|Nhảy rất vui!|Das macht Spaß = cái đó vui.
n|Lust|die||hứng thú, muốn|Hast du {Lust} auf Kino?|Bạn có hứng đi xem phim không?|Lust haben auf + Akk / zu + Infinitiv.
n|Verein|der|-e|câu lạc bộ, hội|Ich spiele in einem {Verein}.|Tôi chơi trong một câu lạc bộ.|
v|spielen|||chơi|Die Kinder {spielen} draußen.|Bọn trẻ chơi ngoài trời.|er spielt, hat gespielt
v|lesen|||đọc|Ich {lese} gern Romane.|Tôi thích đọc tiểu thuyết.|du liest, er liest, hat gelesen
v|hören|||nghe|Wir {hören} Radio.|Chúng tôi nghe đài.|er hört, hat gehört
v|tanzen|||nhảy, khiêu vũ|Sie {tanzt} sehr gut.|Cô ấy nhảy rất giỏi.|du tanzt, er tanzt, hat getanzt
v|singen|||hát|Er {singt} im Chor.|Anh ấy hát trong dàn hợp xướng.|er singt, hat gesungen
v|schwimmen|||bơi|Ich {schwimme} zweimal pro Woche.|Tôi bơi hai lần mỗi tuần.|er schwimmt, ist/hat geschwommen
v|wandern|||đi bộ đường dài|Im Sommer {wandern} wir in den Bergen.|Mùa hè chúng tôi đi bộ đường dài trên núi.|er wandert, ist gewandert
v|joggen|||chạy bộ|Ich {jogge} jeden Morgen.|Sáng nào tôi cũng chạy bộ.|er joggt, ist gejoggt
v|fotografieren|||chụp ảnh|Er {fotografiert} gern Blumen.|Anh ấy thích chụp ảnh hoa.|er fotografiert, hat fotografiert
v|malen|||vẽ tranh|Meine Tochter {malt} gern.|Con gái tôi thích vẽ.|er malt, hat gemalt
v|treffen|||gặp|Ich {treffe} heute Freunde.|Hôm nay tôi gặp bạn bè.|du triffst, er trifft, hat getroffen
v|spazieren gehen|||đi dạo|Wir {gehen} am Abend spazieren.|Buổi tối chúng tôi đi dạo.|er geht spazieren, ist spazieren gegangen
v|können|||có thể; biết (làm gì)|Ich {kann} gut schwimmen.|Tôi bơi giỏi.|ich kann, du kannst, er kann (ngôi 1 và 3 giống nhau)
v|wollen|||muốn|Wir {wollen} am Samstag wandern.|Chúng tôi muốn đi bộ đường dài thứ Bảy.|ich will, du willst, er will
v|mögen|||thích|Ich {mag} Jazz.|Tôi thích nhạc jazz.|ich mag, du magst, er mag; mögen + danh từ
v|einladen|||mời|Ich {lade} dich zum Essen ein.|Tôi mời bạn đi ăn.|Động từ tách: du lädst ein, er lädt ein, hat eingeladen
adj|langweilig|||nhàm chán|Der Film ist {langweilig}.|Bộ phim chán.|
adj|interessant|||thú vị|Das Museum ist sehr {interessant}.|Bảo tàng rất thú vị.|
adj|spannend|||hấp dẫn, gay cấn|Das Spiel war {spannend}.|Trận đấu rất gay cấn.|
adj|toll|||tuyệt|Die Party war {toll}!|Bữa tiệc thật tuyệt!|
adj|lustig|||vui nhộn, buồn cười|Der Film ist {lustig}.|Bộ phim vui nhộn.|
adv|lieber|||thích hơn|Ich trinke {lieber} Tee.|Tôi thích uống trà hơn.|gern → lieber → am liebsten
adv|am liebsten|||thích nhất|{Am liebsten} spiele ich Tennis.|Tôi thích chơi tennis nhất.|
adv|zusammen mit|||cùng với|Ich koche {zusammen mit} meiner Schwester.|Tôi nấu ăn cùng chị gái.|
adv|draußen|||ở ngoài trời|Heute essen wir {draußen}.|Hôm nay chúng tôi ăn ngoài trời.|
adv|zweimal|||hai lần|Ich gehe {zweimal} pro Woche ins Fitnessstudio.|Tôi đi tập gym hai lần một tuần.|einmal, dreimal, …
p|Keine Zeit|||không có thời gian|Heute habe ich {keine Zeit}.|Hôm nay tôi không có thời gian.|
p|Wie wäre es mit|||… thì sao?|{Wie wäre es mit} Kino?|Đi xem phim thì sao?|Gợi ý lịch sự.
p|Gute Idee|||ý hay đấy|Kino? {Gute Idee}!|Xem phim à? Ý hay đấy!|
p|Leider nicht|||tiếc là không|Kannst du morgen? – {Leider nicht}.|Mai bạn rảnh không? – Tiếc là không.|
g|gern – lieber – am liebsten|||mức độ yêu thích|Ich trinke gern Kaffee, aber {lieber} Tee.|Tôi thích cà phê, nhưng thích trà hơn.|gern đứng sau động từ chia.
g|Động từ khuyết thiếu + động từ nguyên mẫu cuối câu|||können, wollen + Infinitiv|Ich kann gut {schwimmen}.|Tôi bơi giỏi.|Động từ khuyết thiếu chia ở vị trí 2, động từ chính để nguyên mẫu ở cuối câu.
g|nicht: vị trí trong câu|||phủ định động từ, tính từ|Ich tanze {nicht} gern.|Tôi không thích nhảy.|nicht đứng trước thành phần bị phủ định; phủ định cả câu thì nicht gần cuối câu.
v|sehen|||nhìn thấy, xem|Wollen wir einen Film {sehen}?|Mình xem phim nhé?|du siehst, er sieht, hat gesehen
adv|vielleicht|||có lẽ|{Vielleicht} komme ich mit.|Có lẽ tôi đi cùng.|
v|glauben|||tin, nghĩ rằng|Ich {glaube}, das Konzert ist gut.|Tôi nghĩ buổi hòa nhạc hay.|er glaubt, hat geglaubt
n|Eintritt|der|-e|vé vào cửa|Der {Eintritt} kostet zehn Euro.|Vé vào cửa giá mười euro.|
prep|ohne|||không có, không cùng|Wir gehen {ohne} Peter ins Kino.|Chúng tôi đi xem phim không có Peter.|ohne + Akkusativ
prep|für|||cho, dành cho|Der Kuchen ist {für} dich.|Bánh này dành cho bạn.|für + Akkusativ.
prep|durch|||xuyên qua|Wir gehen {durch} den Park.|Chúng tôi đi xuyên qua công viên.|durch + Akkusativ.
n|Picknick|das|-s|bữa picnic|Am Sonntag machen wir ein {Picknick}.|Chủ nhật chúng tôi đi picnic.|
n|Decke|die|-n|tấm chăn, tấm trải|Wir sitzen auf einer {Decke}.|Chúng tôi ngồi trên tấm trải.|
n|Spaziergang|der|¨-e|cuộc đi dạo|Wir machen einen {Spaziergang}.|Chúng tôi đi dạo.|
n|Stadion|das|Stadien|sân vận động|Am Samstag gehen wir ins {Stadion}.|Thứ Bảy chúng tôi đến sân vận động.|
n|Spieler|der|-|cầu thủ, người chơi|Der {Spieler} ist sehr schnell.|Cầu thủ đó rất nhanh.|
n|Training|das|-s|buổi tập|Das {Training} beginnt um sechs.|Buổi tập bắt đầu lúc sáu giờ.|
v|trainieren|||tập luyện|Wir {trainieren} zweimal pro Woche.|Chúng tôi tập hai lần một tuần.|er trainiert, hat trainiert
n|Sonnenbrille|die|-n|kính râm|Ich brauche eine {Sonnenbrille}.|Tôi cần một cái kính râm.|
g|für, ohne, durch, gegen, um + Akkusativ|||giới từ đi với Akkusativ|Der Kuchen ist für {meinen} Vater.|Bánh này cho bố tôi.|Sau für, ohne, durch, gegen, um luôn là Akkusativ: den, einen, meinen (chỉ giống đực đổi).
`;
export default pack;
