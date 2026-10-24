// A2 · 01 Kể chuyện đã qua. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Erinnerung|die|-en|ký ức, kỷ niệm|Ich habe schöne {Erinnerungen} an Hue.|Tôi có những kỷ niệm đẹp về Huế.|
n|Kindheit|die||thời thơ ấu|In meiner {Kindheit} habe ich auf dem Land gewohnt.|Thời thơ ấu tôi sống ở nông thôn.|
n|Jugend|die||tuổi trẻ, thời niên thiếu|In der {Jugend} habe ich viel Sport gemacht.|Thời trẻ tôi chơi thể thao nhiều.|
n|Vergangenheit|die||quá khứ|Wir sprechen über die {Vergangenheit}.|Chúng tôi nói về quá khứ.|
n|Erlebnis|das|-se|trải nghiệm|Die Reise war ein tolles {Erlebnis}.|Chuyến đi là một trải nghiệm tuyệt vời.|
n|Geschichte|die|-n|câu chuyện; lịch sử|Erzähl mir eine {Geschichte}!|Kể cho tôi một câu chuyện đi!|
n|Ferien|die||kỳ nghỉ (học sinh)|In den {Ferien} war ich bei meiner Oma.|Kỳ nghỉ tôi ở nhà bà.|Chỉ dùng số nhiều.
n|Dorf|das|¨-er|ngôi làng|Ich komme aus einem kleinen {Dorf}.|Tôi đến từ một ngôi làng nhỏ.|
n|Spielzeug|das|-e|đồ chơi|Das {Spielzeug} liegt auf dem Boden.|Đồ chơi nằm trên sàn.|
n|Unfall|der|¨-e|tai nạn|Gestern hatte ich einen {Unfall}.|Hôm qua tôi bị tai nạn.|
n|Überraschung|die|-en|bất ngờ|Das war eine schöne {Überraschung}!|Đó là một bất ngờ thú vị!|
n|Moment|der|-e|khoảnh khắc|Einen {Moment}, bitte!|Xin đợi một chút!|
n|Lehre|die|-n|học nghề|Nach der Schule habe ich eine {Lehre} gemacht.|Sau khi tốt nghiệp tôi đã đi học nghề.|
n|Umzug|der|¨-e|chuyến chuyển nhà|Der {Umzug} war anstrengend.|Chuyển nhà rất mệt.|
v|erzählen|||kể|Oma {erzählt} von früher.|Bà kể về ngày xưa.|er erzählt, hat erzählt
v|passieren|||xảy ra|Was ist {passiert}?|Chuyện gì đã xảy ra?|es passiert, ist passiert
v|vergessen|||quên|Ich habe meinen Schlüssel {vergessen}.|Tôi quên chìa khóa.|du vergisst, er vergisst, hat vergessen
v|sich erinnern|||nhớ lại|Ich {erinnere} mich gut an den Tag.|Tôi nhớ rõ ngày hôm đó.|er erinnert sich, hat sich erinnert; sich erinnern an + Akk
v|aufwachsen|||lớn lên|Ich bin in Da Lat {aufgewachsen}.|Tôi lớn lên ở Đà Lạt.|Động từ tách: er wächst auf, ist aufgewachsen
v|umziehen|||chuyển nhà|Wir sind 2015 nach Hanoi {umgezogen}.|Năm 2015 chúng tôi chuyển đến Hà Nội.|Động từ tách: er zieht um, ist umgezogen
v|sterben|||chết, qua đời|Mein Opa ist letztes Jahr {gestorben}.|Ông tôi mất năm ngoái.|du stirbst, er stirbt, ist gestorben
v|geboren werden|||được sinh ra|Ich bin 2001 {geboren}.|Tôi sinh năm 2001.|Ich bin … geboren (thường dùng sein + geboren).
v|verlieren|||đánh mất; thua|Ich habe mein Handy {verloren}.|Tôi đánh mất điện thoại.|er verliert, hat verloren
v|bekommen|||nhận được|Ich habe ein Geschenk {bekommen}.|Tôi đã nhận được một món quà.|er bekommt, hat bekommen (không phải "trở thành")
v|bringen|||mang đến|Er hat Blumen {gebracht}.|Anh ấy mang hoa đến.|er bringt, hat gebracht
v|denken|||nghĩ|Ich {denke} oft an meine Kindheit.|Tôi hay nghĩ về thời thơ ấu.|er denkt, hat gedacht; denken an + Akk
v|laufen|||chạy; đi bộ|Das Kind ist schnell {gelaufen}.|Đứa trẻ chạy nhanh.|du läufst, er läuft, ist gelaufen
v|fallen|||ngã, rơi|Ich bin vom Fahrrad {gefallen}.|Tôi bị ngã xe đạp.|du fällst, er fällt, ist gefallen
v|sehen|||nhìn thấy|Hast du den Film {gesehen}?|Bạn đã xem bộ phim chưa?|du siehst, er sieht, hat gesehen
v|rennen|||chạy (nhanh)|Wir sind zum Bus {gerannt}.|Chúng tôi chạy ra xe buýt.|er rennt, ist gerannt
v|feiern|||ăn mừng, tổ chức|Wir haben bis Mitternacht {gefeiert}.|Chúng tôi tiệc tùng đến nửa đêm.|er feiert, hat gefeiert
v|kennenlernen|||làm quen|Wo habt ihr euch {kennengelernt}?|Các bạn quen nhau ở đâu?|Động từ tách: er lernt kennen, hat kennengelernt
adv|früher|||ngày xưa, trước đây|{Früher} hatte ich lange Haare.|Ngày xưa tôi để tóc dài.|
adv|damals|||hồi đó|{Damals} gab es kein Internet.|Hồi đó chưa có Internet.|
adv|letztes Jahr|||năm ngoái|{Letztes Jahr} war ich in Deutschland.|Năm ngoái tôi ở Đức.|
adv|vor kurzem|||cách đây không lâu|Ich habe {vor kurzem} geheiratet.|Tôi mới cưới cách đây không lâu.|
adv|plötzlich|||đột nhiên|{Plötzlich} hat das Telefon geklingelt.|Đột nhiên điện thoại reo.|
adv|endlich|||cuối cùng (sau khi chờ)|{Endlich} bist du da!|Cuối cùng bạn cũng đến!|
adv|zuletzt|||cuối cùng, lần cuối|{Zuletzt} haben wir Kuchen gegessen.|Cuối cùng chúng tôi ăn bánh.|
adv|einmal|||một lần; có lần|Ich war {einmal} in Berlin.|Tôi đã từng đến Berlin một lần.|
adv|vorgestern|||hôm kia|{Vorgestern} war ich im Kino.|Hôm kia tôi đi xem phim.|
adj|traurig|||buồn|Ich war sehr {traurig}.|Tôi đã rất buồn.|
adj|glücklich|||hạnh phúc|Wir waren {glücklich}.|Chúng tôi đã hạnh phúc.|
adj|schrecklich|||khủng khiếp|Das Wetter war {schrecklich}.|Thời tiết thật kinh khủng.|
adj|wunderbar|||tuyệt vời|Es war ein {wunderbarer} Tag.|Đó là một ngày tuyệt vời.|
adj|aufgeregt|||hồi hộp|Vor der Prüfung war ich sehr {aufgeregt}.|Trước kỳ thi tôi rất hồi hộp.|
adj|anstrengend|||mệt nhọc, vất vả|Der Tag war {anstrengend}.|Ngày hôm đó thật mệt.|
p|Weißt du noch?|||bạn còn nhớ không?|{Weißt du noch}, wie wir in Da Nang waren?|Bạn còn nhớ hồi chúng mình ở Đà Nẵng không?|
p|Als Kind|||hồi còn nhỏ|{Als Kind} habe ich viel gespielt.|Hồi nhỏ tôi chơi rất nhiều.|
p|Es war einmal|||ngày xửa ngày xưa|{Es war einmal} ein König.|Ngày xửa ngày xưa có một ông vua.|Câu mở đầu truyện cổ tích.
g|Perfekt: Partizip II của động từ bất quy tắc|||ge- … -en, có thể đổi nguyên âm|Ich habe das Buch {gelesen}.|Tôi đã đọc cuốn sách.|finden → gefunden, trinken → getrunken, helfen → geholfen.
g|Perfekt của động từ tách|||-ge- chen giữa tiền tố và gốc|Er ist um sechs {aufgestanden}.|Anh ấy dậy lúc sáu giờ.|aufstehen → aufgestanden, einkaufen → eingekauft.
g|Perfekt với sein: chuyển động và thay đổi|||sein + Partizip II|Ich {bin} nach Hause gegangen.|Tôi đã về nhà.|Đi từ A đến B hoặc đổi trạng thái (aufwachen, sterben, werden) dùng sein.
g|Perfekt của động từ hỗn hợp|||đổi nguyên âm nhưng đuôi -t|Ich habe an dich {gedacht}.|Tôi đã nghĩ về bạn.|denken → gedacht, bringen → gebracht, kennen → gekannt, wissen → gewusst.
`;
export default pack;
