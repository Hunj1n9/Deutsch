// B1 · 02 Sống chung. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Wohngemeinschaft|die|-en|nhà ở chung (WG)|Ich wohne in einer {Wohngemeinschaft}.|Tôi sống trong một căn hộ ở chung.|Viết tắt: WG.
n|Mitbewohner|der|-|bạn cùng nhà (nam)|Mein {Mitbewohner} kocht gern.|Bạn cùng nhà của tôi thích nấu ăn.|Nữ: die Mitbewohnerin.
n|Zusammenleben|das||cuộc sống chung|Das {Zusammenleben} braucht Regeln.|Sống chung cần có quy tắc.|
n|Regel|die|-n|quy tắc|In unserer WG gibt es klare {Regeln}.|Trong căn hộ chung của chúng tôi có quy tắc rõ ràng.|
n|Putzplan|der|¨-e|lịch dọn dẹp|Laut {Putzplan} bist du diese Woche dran.|Theo lịch dọn dẹp tuần này đến lượt bạn.|
n|Lärm|der||tiếng ồn|Der {Lärm} von der Baustelle stört mich.|Tiếng ồn từ công trường làm phiền tôi.|
n|Ruhe|die||sự yên tĩnh|Ab 22 Uhr ist {Ruhe}.|Từ 22 giờ phải giữ yên tĩnh.|
n|Rücksicht|die||sự quan tâm, ý tứ|Bitte nehmen Sie {Rücksicht} auf die Nachbarn.|Xin hãy ý tứ với hàng xóm.|Rücksicht nehmen auf + Akk.
n|Konflikt|der|-e|xung đột|Wir lösen den {Konflikt} durch ein Gespräch.|Chúng tôi giải quyết xung đột bằng một cuộc nói chuyện.|
n|Kompromiss|der|-e|sự thỏa hiệp|Wir haben einen {Kompromiss} gefunden.|Chúng tôi đã tìm ra một thỏa hiệp.|
n|Lösung|die|-en|giải pháp|Gibt es eine {Lösung} für das Problem?|Có giải pháp cho vấn đề này không?|
n|Missverständnis|das|-se|sự hiểu lầm|Das war nur ein {Missverständnis}.|Đó chỉ là một sự hiểu lầm.|
n|Vorurteil|das|-e|định kiến|Wir sollten keine {Vorurteile} haben.|Chúng ta không nên có định kiến.|
n|Toleranz|die||sự khoan dung|{Toleranz} ist wichtig im Alltag.|Sự khoan dung quan trọng trong cuộc sống hằng ngày.|
n|Respekt|der||sự tôn trọng|Er behandelt alle mit {Respekt}.|Anh ấy đối xử với mọi người bằng sự tôn trọng.|
n|Gemeinschaft|die|-en|cộng đồng|Die {Gemeinschaft} im Dorf ist stark.|Cộng đồng trong làng rất gắn kết.|
n|Nachbarschaft|die|-en|khu hàng xóm|In unserer {Nachbarschaft} kennen sich alle.|Trong khu nhà chúng tôi ai cũng quen nhau.|
n|Haustier|das|-e|vật nuôi|Sind {Haustiere} erlaubt?|Có được nuôi thú cưng không?|
n|Hausmeister|der|-|người quản lý tòa nhà|Der {Hausmeister} kümmert sich um die Heizung.|Người quản lý tòa nhà lo việc lò sưởi.|
n|Mehrfamilienhaus|das|¨-er|nhà nhiều hộ|Wir wohnen in einem {Mehrfamilienhaus}.|Chúng tôi sống trong một tòa nhà nhiều hộ.|
n|Gemeinschaftsraum|der|¨-e|phòng sinh hoạt chung|Der {Gemeinschaftsraum} ist im Keller.|Phòng sinh hoạt chung ở tầng hầm.|
n|Absprache|die|-n|sự thỏa thuận|Ohne {Absprache} geht es nicht.|Không thỏa thuận trước thì không được.|
n|Pflicht|die|-en|nghĩa vụ|Jeder hat {Pflichten} im Haushalt.|Ai cũng có nghĩa vụ trong việc nhà.|
n|Recht|das|-e|quyền|Mieter haben auch {Rechte}.|Người thuê nhà cũng có quyền.|
n|Generationenhaus|das|¨-er|nhà nhiều thế hệ|Im {Generationenhaus} wohnen Jung und Alt zusammen.|Trong ngôi nhà nhiều thế hệ, già trẻ sống cùng nhau.|
n|Single-Haushalt|der|-e|hộ độc thân|Immer mehr Menschen leben in {Single-Haushalten}.|Ngày càng nhiều người sống một mình.|
v|sich kümmern|||chăm lo|Wer {kümmert} sich um die Pflanzen?|Ai chăm cây?|er kümmert sich, hat sich gekümmert; um + Akk
v|teilen|||chia sẻ, chia|Wir {teilen} uns die Küche.|Chúng tôi dùng chung bếp.|er teilt, hat geteilt
v|sich einigen|||thống nhất|Wir haben {uns} auf einen Putzplan geeinigt.|Chúng tôi đã thống nhất lịch dọn dẹp.|er einigt sich, hat sich geeinigt; auf + Akk
v|ausmachen|||thỏa thuận; làm phiền; tắt|{Macht} es dir etwas aus, wenn ich das Fenster öffne?|Bạn có phiền không nếu tôi mở cửa sổ?|Động từ tách: es macht aus, hat ausgemacht
v|sich gewöhnen|||quen với|Ich habe {mich} an den Lärm gewöhnt.|Tôi đã quen với tiếng ồn.|er gewöhnt sich, hat sich gewöhnt; an + Akk
v|akzeptieren|||chấp nhận|Ich {akzeptiere} deine Meinung.|Tôi chấp nhận ý kiến của bạn.|er akzeptiert, hat akzeptiert
v|respektieren|||tôn trọng|Wir {respektieren} uns gegenseitig.|Chúng tôi tôn trọng lẫn nhau.|er respektiert, hat respektiert
v|erlauben|||cho phép|Der Vermieter {erlaubt} keine Haustiere.|Chủ nhà không cho nuôi thú cưng.|er erlaubt, hat erlaubt
v|verbieten|||cấm|Rauchen ist hier {verboten}.|Ở đây cấm hút thuốc.|er verbietet, verbot, hat verboten
v|ärgern|||chọc tức|Mein Bruder {ärgert} mich immer.|Anh tôi lúc nào cũng chọc tức tôi.|er ärgert, hat geärgert
v|sich aufregen|||nổi nóng, bực bội|Reg {dich} nicht so auf!|Đừng nổi nóng như vậy!|Động từ tách: er regt sich auf, hat sich aufgeregt; über + Akk
v|klären|||làm rõ, giải quyết|Lass uns das in Ruhe {klären}.|Hãy bình tĩnh giải quyết chuyện này.|er klärt, hat geklärt
v|vorschlagen|||đề xuất|Ich {schlage} vor, dass wir einen Putzplan machen.|Tôi đề xuất chúng ta lập lịch dọn dẹp.|Động từ tách: du schlägst vor, er schlägt vor, hat vorgeschlagen
v|zusammenwohnen|||sống chung|Wir {wohnen} seit zwei Jahren zusammen.|Chúng tôi sống chung đã hai năm.|Động từ tách: er wohnt zusammen, hat zusammengewohnt
v|unterstützen|||hỗ trợ|Nachbarn {unterstützen} sich gegenseitig.|Hàng xóm hỗ trợ lẫn nhau.|er unterstützt, hat unterstützt
v|leihen|||cho mượn; mượn|Kannst du mir deine Bohrmaschine {leihen}?|Bạn cho tôi mượn máy khoan được không?|er leiht, lieh, hat geliehen
v|zurückbringen|||mang trả lại|Ich {bringe} dir das Buch morgen zurück.|Mai tôi mang trả bạn cuốn sách.|Động từ tách: er bringt zurück, hat zurückgebracht
adj|rücksichtsvoll|||ý tứ, chu đáo|Unsere Nachbarn sind sehr {rücksichtsvoll}.|Hàng xóm của chúng tôi rất ý tứ.|
adj|ordentlich|||ngăn nắp|Mein Mitbewohner ist nicht sehr {ordentlich}.|Bạn cùng nhà của tôi không ngăn nắp lắm.|
adj|unordentlich|||bừa bộn|Die Küche ist total {unordentlich}.|Nhà bếp bừa bộn hết mức.|
adj|tolerant|||khoan dung|Man muss in einer WG {tolerant} sein.|Ở nhà chung phải biết khoan dung.|
adj|hilfsbereit|||sẵn lòng giúp đỡ|Die Nachbarin ist sehr {hilfsbereit}.|Bà hàng xóm rất sẵn lòng giúp đỡ.|
adj|gegenseitig|||lẫn nhau|Wir brauchen {gegenseitiges} Vertrauen.|Chúng ta cần tin tưởng lẫn nhau.|
adj|gemeinsam|||chung, cùng nhau|Wir kochen oft {gemeinsam}.|Chúng tôi thường nấu ăn cùng nhau.|
adj|erlaubt|||được phép|Grillen ist im Hof nicht {erlaubt}.|Không được nướng thịt ở sân.|
adj|verboten|||bị cấm|Parken ist hier {verboten}.|Đỗ xe ở đây bị cấm.|
adj|leise|||khẽ, nhỏ tiếng|Bitte sei {leise}, das Baby schläft.|Làm ơn nhỏ tiếng, em bé đang ngủ.|
adj|egoistisch|||ích kỷ|Das finde ich sehr {egoistisch}.|Tôi thấy như vậy rất ích kỷ.|
adj|unterschiedlich|||khác nhau|Wir haben {unterschiedliche} Gewohnheiten.|Chúng tôi có những thói quen khác nhau.|
adv|abwechselnd|||lần lượt, luân phiên|Wir putzen {abwechselnd}.|Chúng tôi dọn dẹp luân phiên.|
adv|einander|||lẫn nhau|Wir helfen {einander}.|Chúng tôi giúp đỡ lẫn nhau.|
adv|leider|||tiếc là|Ich kann {leider} nicht kommen.|Tiếc là tôi không đến được.|
p|an der Reihe sein|||đến lượt|Wer ist heute mit Putzen {an der Reihe}?|Hôm nay đến lượt ai dọn dẹp?|Văn nói: Wer ist dran?
p|Rücksicht nehmen auf|||ý tứ với|Wir {nehmen} Rücksicht auf die Nachbarn.|Chúng tôi ý tứ với hàng xóm.|
p|einen Streit schlichten|||hòa giải cuộc cãi vã|Der Hausmeister versucht, {einen Streit zu schlichten}.|Người quản lý tòa nhà cố hòa giải cuộc cãi vã.|
p|Bescheid sagen|||báo cho biết|Sag mir bitte {Bescheid}, wenn du später kommst.|Báo cho tôi biết nếu bạn đến muộn.|jemandem Bescheid sagen/geben.
p|im Großen und Ganzen|||nhìn chung|{Im Großen und Ganzen} verstehen wir uns gut.|Nhìn chung chúng tôi hợp nhau.|
g|Mệnh đề quan hệ Nominativ: der, die, das|||đại từ quan hệ làm chủ ngữ|Das ist der Nachbar, {der} immer laut ist.|Đây là người hàng xóm lúc nào cũng ồn.|Đại từ quan hệ theo giống, số của danh từ; cách theo vai trò trong mệnh đề.
g|Mệnh đề quan hệ Akkusativ: den|||đại từ quan hệ làm tân ngữ|Das ist der Mitbewohner, {den} ich gestern kennengelernt habe.|Đây là bạn cùng nhà mà hôm qua tôi mới quen.|Chỉ giống đực khác Nominativ: der → den.
g|Mệnh đề quan hệ Dativ: dem, der, denen|||đại từ quan hệ ở Dativ|Die Frau, {der} ich geholfen habe, wohnt oben.|Người phụ nữ mà tôi đã giúp sống ở tầng trên.|Số nhiều: denen. Ví dụ: die Leute, denen ich vertraue.
g|Mệnh đề quan hệ với giới từ|||giới từ đứng trước đại từ quan hệ|Das ist die WG, in {der} ich wohne.|Đây là căn hộ chung mà tôi đang ở.|Giới từ + đại từ quan hệ theo cách giới từ yêu cầu.
g|Mệnh đề quan hệ với wo|||thay cho in dem/in der khi nói về nơi chốn|Das ist die Stadt, {wo} ich aufgewachsen bin.|Đây là thành phố nơi tôi lớn lên.|wo dùng với địa điểm; trang trọng hơn: in der.
v|stören|||làm phiền|{Stört} es dich, wenn ich Musik höre?|Tôi nghe nhạc có làm phiền bạn không?|er stört, hat gestört
n|Lärmbelästigung|die|-en|sự quấy rầy bằng tiếng ồn|Die Nachbarn beschwerten sich über {Lärmbelästigung}.|Hàng xóm phàn nàn về tiếng ồn.|
n|Gemeinschaftsküche|die|-n|bếp chung|Die {Gemeinschaftsküche} ist oft unordentlich.|Bếp chung thường bừa bộn.|
n|Treppenhaus|das|¨-er|cầu thang chung|Im {Treppenhaus} darf man keine Fahrräder abstellen.|Không được để xe đạp ở cầu thang chung.|
n|Briefkasten|der|¨|hộp thư|Dein Paket liegt im {Briefkasten}.|Bưu kiện của bạn ở trong hộp thư.|
n|Paket|das|-e|bưu kiện|Kannst du mein {Paket} annehmen?|Bạn nhận giúp bưu kiện của tôi được không?|
n|Zusammenhalt|der||sự gắn kết|Der {Zusammenhalt} in der Familie ist stark.|Gia đình rất gắn kết.|
n|Gewohnheitsmensch|der|-en|người sống theo thói quen|Mein Vater ist ein {Gewohnheitsmensch}.|Bố tôi là người sống theo thói quen.|
v|annehmen|||nhận; giả định|Ich habe dein Paket {angenommen}.|Tôi đã nhận bưu kiện giúp bạn.|Động từ tách: er nimmt an, nahm an, hat angenommen
v|abstellen|||để, đỗ (đồ vật)|Wo kann ich mein Fahrrad {abstellen}?|Tôi để xe đạp ở đâu được?|Động từ tách: er stellt ab, hat abgestellt
v|sich vertragen|||hòa thuận|Die Geschwister {vertragen} sich gut.|Anh chị em hòa thuận với nhau.|du verträgst dich, er verträgt sich, hat sich vertragen
v|tolerieren|||dung thứ|Ich {toleriere} das nicht länger.|Tôi không chịu đựng điều đó thêm nữa.|er toleriert, hat toleriert
v|nerven|||làm phát cáu|Der Lärm {nervt} mich.|Tiếng ồn làm tôi phát cáu.|es nervt, hat genervt (văn nói)
v|ignorieren|||phớt lờ|Er {ignoriert} die Hausordnung.|Anh ta phớt lờ nội quy.|er ignoriert, hat ignoriert
v|sich entschließen|||quyết định|Wir haben {uns} entschlossen, zusammenzuziehen.|Chúng tôi quyết định dọn về sống chung.|er entschließt sich, entschloss sich, hat sich entschlossen
adj|harmonisch|||hòa hợp|Das Zusammenleben ist sehr {harmonisch}.|Cuộc sống chung rất hòa hợp.|
adj|chaotisch|||hỗn loạn|In der Küche ist es {chaotisch}.|Trong bếp lộn xộn.|
adj|anonym|||vô danh, xa lạ|In der Großstadt lebt man oft {anonym}.|Ở thành phố lớn người ta thường sống xa lạ với nhau.|
p|sich an die Regeln halten|||tuân theo quy tắc|Alle müssen {sich an die Regeln halten}.|Mọi người phải tuân theo quy tắc.|
p|unter einem Dach leben|||sống chung một mái nhà|Drei Generationen {leben} unter einem Dach.|Ba thế hệ sống chung một mái nhà.|
`;
export default pack;
