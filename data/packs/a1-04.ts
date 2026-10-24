// A1 · 04 Nhà ở và đồ đạc. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Wohnung|die|-en|căn hộ|Meine {Wohnung} ist klein, aber hell.|Căn hộ của tôi nhỏ nhưng sáng sủa.|
n|Haus|das|¨-er|ngôi nhà|Das {Haus} hat einen Garten.|Ngôi nhà có một khu vườn.|
n|Zimmer|das|-|căn phòng|Die Wohnung hat drei {Zimmer}.|Căn hộ có ba phòng.|
n|Küche|die|-n|nhà bếp|Die {Küche} ist modern.|Nhà bếp hiện đại.|
n|Bad|das|¨-er|phòng tắm|Das {Bad} ist neben der Küche.|Phòng tắm ở cạnh nhà bếp.|
n|Schlafzimmer|das|-|phòng ngủ|Im {Schlafzimmer} steht ein Bett.|Trong phòng ngủ có một cái giường.|
n|Wohnzimmer|das|-|phòng khách|Wir sitzen im {Wohnzimmer}.|Chúng tôi ngồi trong phòng khách.|
n|Flur|der|-e|hành lang (trong nhà)|Die Schuhe stehen im {Flur}.|Giày để ở hành lang.|
n|Balkon|der|-e|ban công|Die Wohnung hat einen {Balkon}.|Căn hộ có ban công.|
n|Garten|der|¨|khu vườn|Die Kinder spielen im {Garten}.|Bọn trẻ chơi trong vườn.|
n|Tisch|der|-e|cái bàn|Der {Tisch} steht am Fenster.|Cái bàn đặt cạnh cửa sổ.|
n|Stuhl|der|¨-e|cái ghế|Wir brauchen noch einen {Stuhl}.|Chúng tôi cần thêm một cái ghế.|
n|Bett|das|-en|cái giường|Das {Bett} ist sehr bequem.|Cái giường rất êm.|
n|Schrank|der|¨-e|tủ|Die Kleidung ist im {Schrank}.|Quần áo ở trong tủ.|
n|Sofa|das|-s|ghế sô-pha|Das {Sofa} ist neu.|Ghế sô-pha mới.|
n|Lampe|die|-n|cái đèn|Die {Lampe} ist kaputt.|Cái đèn hỏng rồi.|
n|Regal|das|-e|kệ, giá sách|Die Bücher stehen im {Regal}.|Sách để trên kệ.|
n|Teppich|der|-e|tấm thảm|Der {Teppich} ist rot.|Tấm thảm màu đỏ.|
n|Fenster|das|-|cửa sổ|Bitte mach das {Fenster} zu.|Làm ơn đóng cửa sổ lại.|
n|Tür|die|-en|cửa ra vào|Die {Tür} ist offen.|Cửa đang mở.|
n|Wand|die|¨-e|bức tường|An der {Wand} hängt ein Bild.|Trên tường treo một bức tranh.|
n|Boden|der|¨|sàn nhà|Die Katze liegt auf dem {Boden}.|Con mèo nằm trên sàn.|
n|Bild|das|-er|bức tranh, bức ảnh|Das {Bild} gefällt mir.|Tôi thích bức tranh này.|
n|Kühlschrank|der|¨-e|tủ lạnh|Die Milch ist im {Kühlschrank}.|Sữa ở trong tủ lạnh.|
n|Herd|der|-e|bếp nấu|Der {Herd} ist noch heiß.|Bếp vẫn còn nóng.|
n|Waschmaschine|die|-n|máy giặt|Die {Waschmaschine} steht im Bad.|Máy giặt đặt trong phòng tắm.|
n|Dusche|die|-n|vòi sen|Die {Dusche} funktioniert nicht.|Vòi sen không hoạt động.|
n|Miete|die|-n|tiền thuê nhà|Die {Miete} ist 600 Euro.|Tiền thuê nhà là 600 euro.|
n|Stock|der||tầng (nhà)|Ich wohne im dritten {Stock}.|Tôi sống ở tầng ba.|Dùng với số thứ tự: im ersten Stock.
n|Möbel|die||đồ đạc, nội thất|Wir kaufen neue {Möbel}.|Chúng tôi mua đồ nội thất mới.|Thường dùng số nhiều.
n|Quadratmeter|der|-|mét vuông|Die Wohnung hat 50 {Quadratmeter}.|Căn hộ rộng 50 mét vuông.|Viết tắt: m².
n|Nachbar|der|-n|hàng xóm (nam)|Mein {Nachbar} ist sehr laut.|Hàng xóm của tôi rất ồn.|n-Deklination: den Nachbarn. Nữ: die Nachbarin.
adj|hell|||sáng sủa|Das Zimmer ist schön {hell}.|Căn phòng sáng sủa đẹp.|
adj|dunkel|||tối|Der Flur ist zu {dunkel}.|Hành lang tối quá.|
adj|teuer|||đắt|Die Wohnung ist zu {teuer}.|Căn hộ đắt quá.|
adj|billig|||rẻ|Das Sofa war sehr {billig}.|Ghế sô-pha rất rẻ.|Lịch sự hơn: günstig.
adj|günstig|||giá phải chăng|Die Miete ist {günstig}.|Tiền thuê phải chăng.|
adj|schön|||đẹp|Euer Garten ist {schön}.|Khu vườn của các bạn đẹp.|
adj|modern|||hiện đại|Das Bad ist ganz {modern}.|Phòng tắm rất hiện đại.|
adj|gemütlich|||ấm cúng|Das Wohnzimmer ist {gemütlich}.|Phòng khách ấm cúng.|
adj|ruhig|||yên tĩnh|Die Straße ist {ruhig}.|Con phố yên tĩnh.|
adj|laut|||ồn ào; to (tiếng)|Die Musik ist zu {laut}.|Nhạc to quá.|
adj|kaputt|||hỏng|Der Kühlschrank ist {kaputt}.|Tủ lạnh hỏng rồi.|
adj|bequem|||thoải mái, êm|Der Stuhl ist nicht {bequem}.|Cái ghế không thoải mái.|
adj|frei|||trống; rảnh|Ist das Zimmer noch {frei}?|Phòng còn trống không?|
v|suchen|||tìm|Wir {suchen} eine Wohnung.|Chúng tôi đang tìm căn hộ.|er sucht, hat gesucht
v|finden|||tìm thấy; thấy (cho rằng)|Ich {finde} die Küche schön.|Tôi thấy nhà bếp đẹp.|er findet, hat gefunden
v|brauchen|||cần|Wir {brauchen} einen Tisch.|Chúng tôi cần một cái bàn.|er braucht, hat gebraucht
v|kosten|||có giá|Das Bett {kostet} 300 Euro.|Cái giường giá 300 euro.|es kostet, hat gekostet
v|mieten|||thuê|Sie {mieten} eine Wohnung in Köln.|Họ thuê một căn hộ ở Köln.|er mietet, hat gemietet
p|es gibt|||có (tồn tại)|In der Küche {gibt es} einen Herd.|Trong bếp có một cái bếp nấu.|es gibt + Akkusativ: Es gibt einen Balkon.
g|der, die, das: mạo từ xác định|||ba giống của danh từ|{Das} Zimmer ist groß.|Căn phòng rộng.|Giống phải học cùng danh từ; số nhiều luôn là die.
g|ein / eine: mạo từ không xác định|||một (cái gì đó)|Das ist {eine} Lampe.|Đây là một cái đèn.|der/das → ein; die → eine; số nhiều không có mạo từ không xác định.
g|kein / keine: phủ định danh từ|||không có, không phải|Das ist {kein} Stuhl, das ist ein Sofa.|Đây không phải ghế, đây là sô-pha.|Phủ định danh từ đi với ein hoặc không mạo từ: kein/keine.
g|Số nhiều danh từ|||các đuôi số nhiều thường gặp|Die {Zimmer} sind hell.|Các căn phòng sáng sủa.|Đuôi: -e, ¨-e, -er, ¨-er, -n, -en, -s, hoặc không đổi. Học kèm mỗi danh từ.
`;
export default pack;
