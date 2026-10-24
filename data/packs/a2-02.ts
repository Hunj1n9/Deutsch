// A2 · 02 Nhà cửa và chuyển nhà. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Vermieter|der|-|chủ nhà cho thuê (nam)|Der {Vermieter} wohnt im Erdgeschoss.|Chủ nhà sống ở tầng trệt.|Nữ: die Vermieterin.
n|Mieter|der|-|người thuê nhà (nam)|Die {Mieter} müssen leise sein.|Người thuê nhà phải giữ yên tĩnh.|Nữ: die Mieterin.
n|Erdgeschoss|das|-e|tầng trệt|Die Wohnung ist im {Erdgeschoss}.|Căn hộ ở tầng trệt.|
n|Keller|der|-|tầng hầm|Das Fahrrad steht im {Keller}.|Xe đạp để dưới tầng hầm.|
n|Dach|das|¨-er|mái nhà|Auf dem {Dach} sitzt eine Katze.|Trên mái nhà có một con mèo.|
n|Treppe|die|-n|cầu thang|Die {Treppe} ist steil.|Cầu thang dốc.|
n|Aufzug|der|¨-e|thang máy|Das Haus hat keinen {Aufzug}.|Tòa nhà không có thang máy.|
n|Heizung|die|-en|hệ thống sưởi|Die {Heizung} funktioniert nicht.|Lò sưởi không hoạt động.|
n|Nebenkosten|die||chi phí phụ (điện, nước…)|Die {Nebenkosten} sind 150 Euro.|Chi phí phụ là 150 euro.|Chỉ dùng số nhiều.
n|Kaution|die|-en|tiền đặt cọc|Die {Kaution} beträgt zwei Monatsmieten.|Tiền cọc bằng hai tháng tiền nhà.|
n|Anzeige|die|-n|tin rao vặt|Ich habe eine {Anzeige} im Internet gelesen.|Tôi đã đọc một tin rao trên mạng.|
n|Besichtigung|die|-en|buổi xem nhà|Die {Besichtigung} ist am Samstag.|Buổi xem nhà vào thứ Bảy.|
n|Hausordnung|die|-en|nội quy tòa nhà|Lesen Sie bitte die {Hausordnung}.|Xin hãy đọc nội quy tòa nhà.|
n|Müll|der||rác|Wer bringt den {Müll} raus?|Ai đổ rác?|
n|Mülltonne|die|-n|thùng rác|Die {Mülltonne} steht im Hof.|Thùng rác đặt ở sân.|
n|Hof|der|¨-e|sân|Die Kinder spielen im {Hof}.|Bọn trẻ chơi trong sân.|
n|Schlüssel|der|-|chìa khóa|Wo ist mein {Schlüssel}?|Chìa khóa của tôi đâu?|
n|Steckdose|die|-n|ổ cắm điện|Neben dem Bett ist eine {Steckdose}.|Cạnh giường có ổ cắm.|
n|Spiegel|der|-|cái gương|Der {Spiegel} hängt im Bad.|Gương treo trong phòng tắm.|
n|Vorhang|der|¨-e|rèm cửa|Mach bitte den {Vorhang} zu.|Làm ơn kéo rèm lại.|
n|Kissen|das|-|cái gối, gối tựa|Das {Kissen} liegt auf dem Sofa.|Cái gối nằm trên sô-pha.|
n|Pflanze|die|-n|cây (trồng trong nhà)|Die {Pflanze} braucht Wasser.|Cây cần nước.|
n|Karton|der|-s|thùng các-tông|Wir packen alles in {Kartons}.|Chúng tôi cho mọi thứ vào thùng các-tông.|
v|einziehen|||dọn vào ở|Wir {ziehen} nächste Woche ein.|Tuần sau chúng tôi dọn vào.|Động từ tách: er zieht ein, ist eingezogen
v|ausziehen|||dọn ra; cởi (đồ)|Wann {ziehst} du aus?|Khi nào bạn dọn đi?|Động từ tách: er zieht aus, ist/hat ausgezogen
v|legen|||đặt (nằm)|Ich {lege} das Buch auf den Tisch.|Tôi đặt cuốn sách lên bàn.|er legt, hat gelegt; wohin? + Akk
v|stellen|||đặt (đứng)|Wir {stellen} das Sofa an die Wand.|Chúng tôi kê sô-pha sát tường.|er stellt, hat gestellt; wohin? + Akk
v|hängen|||treo|Ich {hänge} das Bild an die Wand.|Tôi treo bức tranh lên tường.|hängen (treo cái gì) + Akk; hängen (đang treo) + Dativ: hing, gehangen
v|setzen|||đặt ngồi|Sie {setzt} das Kind auf den Stuhl.|Cô ấy đặt đứa trẻ lên ghế.|er setzt, hat gesetzt; sich setzen = ngồi xuống
v|stecken|||cắm, nhét|Der Schlüssel {steckt} in der Tür.|Chìa khóa cắm ở cửa.|er steckt, hat gesteckt
v|reparieren|||sửa chữa|Der Hausmeister {repariert} die Heizung.|Người quản lý tòa nhà sửa lò sưởi.|er repariert, hat repariert
v|streichen|||sơn|Wir {streichen} die Wände weiß.|Chúng tôi sơn tường màu trắng.|er streicht, hat gestrichen
v|mitnehmen|||mang theo|Ich {nehme} die Lampe in die neue Wohnung mit.|Tôi mang cây đèn sang căn hộ mới.|Động từ tách: du nimmst mit, er nimmt mit, hat mitgenommen
v|klingeln|||bấm chuông; reo|Es {klingelt} an der Tür.|Có người bấm chuông cửa.|es klingelt, hat geklingelt
v|sich beschweren|||phàn nàn|Die Nachbarn {beschweren} sich über den Lärm.|Hàng xóm phàn nàn về tiếng ồn.|er beschwert sich, hat sich beschwert; über + Akk
adj|möbliert|||có sẵn đồ đạc|Ich suche ein {möbliertes} Zimmer.|Tôi tìm một phòng có sẵn đồ đạc.|
adj|zentral|||ở trung tâm|Die Wohnung liegt sehr {zentral}.|Căn hộ nằm ngay trung tâm.|
adj|sauber|||sạch|Die Küche ist {sauber}.|Nhà bếp sạch sẽ.|
adj|schmutzig|||bẩn|Der Boden ist {schmutzig}.|Sàn nhà bẩn.|
adj|eigen|||riêng|Ich möchte ein {eigenes} Zimmer.|Tôi muốn một phòng riêng.|
adj|praktisch|||tiện lợi, thực tế|Der Schrank ist sehr {praktisch}.|Cái tủ rất tiện.|
adv|oben|||ở trên|Das Bad ist {oben}.|Phòng tắm ở trên lầu.|
adv|unten|||ở dưới|Der Keller ist {unten}.|Tầng hầm ở dưới.|
adv|drinnen|||ở trong nhà|Bei Regen spielen wir {drinnen}.|Khi trời mưa chúng tôi chơi trong nhà.|
adv|überall|||khắp nơi|{Überall} stehen Kartons.|Thùng các-tông ở khắp nơi.|
p|den Müll trennen|||phân loại rác|In Deutschland muss man {den Müll trennen}.|Ở Đức phải phân loại rác.|
g|Giới từ hai cách: wo? → Dativ|||vị trí (đứng yên)|Das Bild hängt an {der} Wand.|Bức tranh treo trên tường.|in, an, auf, über, unter, vor, hinter, neben, zwischen + Dativ khi trả lời wo?
g|Giới từ hai cách: wohin? → Akkusativ|||hướng chuyển động|Ich hänge das Bild an {die} Wand.|Tôi treo bức tranh lên tường.|Cùng giới từ, trả lời wohin? thì dùng Akkusativ.
g|legen / liegen, stellen / stehen|||động từ chuyển động và vị trí|Ich lege das Handy auf den Tisch. Jetzt {liegt} es auf dem Tisch.|Tôi đặt điện thoại lên bàn. Giờ nó nằm trên bàn.|legen, stellen, setzen, hängen (+ Akk) → liegen, stehen, sitzen, hängen (+ Dativ).
g|in das = ins, an das = ans|||viết rút gọn ở Akkusativ|Wir gehen {ins} Wohnzimmer.|Chúng tôi vào phòng khách.|in + das = ins; an + das = ans; auf + das = aufs (văn nói).
n|Ruhe|die||sự yên tĩnh|Ab 22 Uhr ist {Ruhe}.|Từ 22 giờ phải giữ yên tĩnh.|
v|stören|||làm phiền|{Stört} es dich, wenn ich Musik höre?|Tôi nghe nhạc có làm phiền bạn không?|er stört, hat gestört
v|erlauben|||cho phép|Der Vermieter {erlaubt} keine Haustiere.|Chủ nhà không cho nuôi thú cưng.|er erlaubt, hat erlaubt
adj|verboten|||bị cấm|Parken ist hier {verboten}.|Đỗ xe ở đây bị cấm.|
n|Paket|das|-e|bưu kiện|Kannst du mein {Paket} annehmen?|Bạn nhận giúp bưu kiện của tôi được không?|
p|Bescheid sagen|||báo cho biết|Sag mir bitte {Bescheid}, wenn du später kommst.|Báo cho tôi biết nếu bạn đến muộn.|jemandem Bescheid sagen/geben.
`;
export default pack;
