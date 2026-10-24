// A1 · 03 Số, giờ và ngày tháng. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
num|eins|||một|Ich habe nur {eins}.|Tôi chỉ có một cái.|Khi đếm: eins; trước danh từ: ein/eine.
num|zwei|||hai|Wir haben {zwei} Kinder.|Chúng tôi có hai con.|
num|drei|||ba|Der Kurs dauert {drei} Monate.|Khóa học kéo dài ba tháng.|
num|vier|||bốn|Das Zimmer hat {vier} Fenster.|Căn phòng có bốn cửa sổ.|
num|fünf|||năm (số 5)|Ich arbeite {fünf} Tage pro Woche.|Tôi làm năm ngày mỗi tuần.|
num|sechs|||sáu|Er steht um {sechs} auf.|Anh ấy dậy lúc sáu giờ.|
num|sieben|||bảy|Die Woche hat {sieben} Tage.|Một tuần có bảy ngày.|
num|acht|||tám|Der Unterricht beginnt um {acht}.|Giờ học bắt đầu lúc tám giờ.|
num|neun|||chín|Mein Sohn ist {neun}.|Con trai tôi chín tuổi.|
num|zehn|||mười|Das kostet {zehn} Euro.|Cái đó giá mười euro.|
num|elf|||mười một|Um {elf} habe ich Pause.|Lúc mười một giờ tôi được nghỉ.|
num|zwölf|||mười hai|Ein Jahr hat {zwölf} Monate.|Một năm có mười hai tháng.|
num|zwanzig|||hai mươi|Ich bin {zwanzig} Jahre alt.|Tôi hai mươi tuổi.|21 = einundzwanzig (đơn vị đứng trước).
num|hundert|||một trăm|Das Buch hat {hundert} Seiten.|Cuốn sách có một trăm trang.|
num|tausend|||một nghìn|Das Fahrrad kostet {tausend} Euro.|Chiếc xe đạp giá một nghìn euro.|
n|Zahl|die|-en|con số|Schreiben Sie die {Zahl}.|Hãy viết con số.|
n|Uhr|die|-en|đồng hồ; giờ|Es ist acht {Uhr}.|Bây giờ là tám giờ.|Wie viel Uhr ist es? = Mấy giờ rồi?
n|Stunde|die|-n|giờ (khoảng thời gian), tiếng|Der Film dauert zwei {Stunden}.|Bộ phim dài hai tiếng.|
n|Minute|die|-n|phút|Ich komme in fünf {Minuten}.|Năm phút nữa tôi đến.|
n|Viertel|das|-|một phần tư; 15 phút|Es ist {Viertel} nach drei.|Bây giờ là ba giờ mười lăm.|Viertel vor drei = 2 giờ 45.
p|halb|||rưỡi (trước giờ kế tiếp)|Es ist {halb} acht.|Bây giờ là bảy giờ rưỡi.|halb acht = 7:30 (nửa giờ trước 8 giờ).
n|Tag|der|-e|ngày|Wir lernen jeden {Tag}.|Chúng tôi học mỗi ngày.|
n|Woche|die|-n|tuần|Nächste {Woche} habe ich Urlaub.|Tuần sau tôi được nghỉ phép.|
n|Monat|der|-e|tháng|Der {Monat} hat dreißig Tage.|Tháng này có ba mươi ngày.|
n|Wochenende|das|-n|cuối tuần|Am {Wochenende} schlafe ich lange.|Cuối tuần tôi ngủ dậy muộn.|
n|Montag|der|-e|thứ Hai|Am {Montag} beginnt der Kurs.|Thứ Hai khóa học bắt đầu.|Các thứ đều giống đực; am + thứ.
n|Dienstag|der|-e|thứ Ba|Am {Dienstag} gehe ich schwimmen.|Thứ Ba tôi đi bơi.|
n|Mittwoch|der|-e|thứ Tư|Am {Mittwoch} habe ich frei.|Thứ Tư tôi rảnh.|
n|Donnerstag|der|-e|thứ Năm|Am {Donnerstag} kommt meine Mutter.|Thứ Năm mẹ tôi đến.|
n|Freitag|der|-e|thứ Sáu|Am {Freitag} gehen wir ins Kino.|Thứ Sáu chúng tôi đi xem phim.|
n|Samstag|der|-e|thứ Bảy|Am {Samstag} arbeite ich nicht.|Thứ Bảy tôi không làm việc.|
n|Sonntag|der|-e|Chủ nhật|Am {Sonntag} besuche ich Freunde.|Chủ nhật tôi thăm bạn bè.|
n|Januar|der|-e|tháng Một|Im {Januar} ist es kalt.|Tháng Một trời lạnh.|Các tháng đều giống đực; im + tháng.
n|Februar|der|-e|tháng Hai|Im {Februar} feiern wir Tet.|Tháng Hai chúng tôi ăn Tết.|
n|Mai|der|-e|tháng Năm|Im {Mai} ist das Wetter schön.|Tháng Năm thời tiết đẹp.|
n|Juli|der|-s|tháng Bảy|Im {Juli} fahre ich nach Deutschland.|Tháng Bảy tôi sang Đức.|
n|Dezember|der|-|tháng Mười hai|Im {Dezember} ist Weihnachten.|Tháng Mười hai có Giáng sinh.|
n|Geburtstag|der|-e|sinh nhật|Wann hast du {Geburtstag}?|Sinh nhật bạn khi nào?|
n|Datum|das|Daten|ngày tháng (cụ thể)|Welches {Datum} ist heute?|Hôm nay là ngày bao nhiêu?|
n|Termin|der|-e|cuộc hẹn|Ich habe um zehn einen {Termin}.|Tôi có hẹn lúc mười giờ.|
n|Morgen|der|-|buổi sáng|Am {Morgen} trinke ich Kaffee.|Buổi sáng tôi uống cà phê.|
n|Mittag|der|-e|buổi trưa|Am {Mittag} esse ich in der Kantine.|Buổi trưa tôi ăn ở căng tin.|
n|Nachmittag|der|-e|buổi chiều|Am {Nachmittag} lerne ich.|Buổi chiều tôi học.|
n|Abend|der|-e|buổi tối|Am {Abend} sehe ich fern.|Buổi tối tôi xem TV.|
n|Nacht|die|¨-e|ban đêm|In der {Nacht} schlafe ich.|Ban đêm tôi ngủ.|in der Nacht (không dùng am).
adv|heute|||hôm nay|{Heute} ist Montag.|Hôm nay là thứ Hai.|
adv|morgen|||ngày mai|{Morgen} habe ich keine Zeit.|Ngày mai tôi không có thời gian.|Viết thường = ngày mai; der Morgen = buổi sáng.
adv|gestern|||hôm qua|{Gestern} war ich müde.|Hôm qua tôi mệt.|
adv|jetzt|||bây giờ|Ich habe {jetzt} Zeit.|Bây giờ tôi có thời gian.|
adv|wann|||khi nào|{Wann} beginnt der Film?|Khi nào phim bắt đầu?|
p|wie viel|||bao nhiêu|{Wie viel} kostet das?|Cái này giá bao nhiêu?|wie viele + danh từ số nhiều: Wie viele Kinder?
n|Zeit|die|-en|thời gian|Hast du heute {Zeit}?|Hôm nay bạn có thời gian không?|
v|dauern|||kéo dài|Der Kurs {dauert} sechs Wochen.|Khóa học kéo dài sáu tuần.|es dauert, hat gedauert
v|beginnen|||bắt đầu|Der Unterricht {beginnt} um neun.|Buổi học bắt đầu lúc chín giờ.|er beginnt, hat begonnen
v|zählen|||đếm|Kannst du bis hundert {zählen}?|Bạn đếm được đến một trăm không?|er zählt, hat gezählt
prep|um|||lúc (giờ)|Ich komme {um} sieben.|Tôi đến lúc bảy giờ.|um + giờ; am + ngày/buổi; im + tháng/mùa.
g|am / um / im|||giới từ thời gian|Wir treffen uns {am} Freitag.|Chúng ta gặp nhau vào thứ Sáu.|am + thứ, buổi (am Abend); um + giờ; im + tháng, mùa (im Mai, im Winter).
g|Hỏi giờ: Wie spät ist es?|||hỏi bây giờ là mấy giờ|Wie spät {ist} es? – Es ist zehn Uhr.|Mấy giờ rồi? – Mười giờ.|Cách khác: Wie viel Uhr ist es?
g|Số 21–99: đơn vị trước, chục sau|||đọc số hai chữ số|Mein Vater ist {dreiundfünfzig}.|Bố tôi năm mươi ba tuổi.|53 = drei-und-fünfzig; viết liền thành một từ.
n|Sekunde|die|-n|giây|Eine Minute hat 60 {Sekunden}.|Một phút có 60 giây.|
n|Vormittag|der|-e|buổi sáng (trước trưa)|Am {Vormittag} arbeite ich.|Buổi sáng tôi làm việc.|
prep|gegen|||khoảng (giờ); chống lại|Ich komme {gegen} acht Uhr.|Tôi đến khoảng tám giờ.|gegen + Akkusativ
n|Wochentag|der|-e|ngày trong tuần|Montag ist der erste {Wochentag}.|Thứ Hai là ngày đầu tuần.|
n|März|der|-e|tháng Ba|Im {März} wird es warm.|Tháng Ba trời ấm lên.|Các tháng đều giống đực; im + tháng.
n|April|der|-e|tháng Tư|Mein Geburtstag ist im {April}.|Sinh nhật tôi vào tháng Tư.|Các tháng đều giống đực; im + tháng.
n|Juni|der|-s|tháng Sáu|Im {Juni} sind Ferien.|Tháng Sáu là kỳ nghỉ.|Các tháng đều giống đực; im + tháng.
n|August|der|-e|tháng Tám|Im {August} ist es heiß.|Tháng Tám trời nóng.|Các tháng đều giống đực; im + tháng.
n|September|der|-|tháng Chín|Die Schule beginnt im {September}.|Trường học bắt đầu vào tháng Chín.|Các tháng đều giống đực; im + tháng.
n|Oktober|der|-|tháng Mười|Im {Oktober} fahre ich nach Hause.|Tháng Mười tôi về nhà.|Các tháng đều giống đực; im + tháng.
n|November|der|-|tháng Mười một|Im {November} regnet es viel.|Tháng Mười một mưa nhiều.|Các tháng đều giống đực; im + tháng.
n|Ende|das|-n|cuối, kết thúc|Am {Ende} der Woche habe ich Zeit.|Cuối tuần tôi có thời gian.|
adv|zurzeit|||hiện tại, dạo này|{Zurzeit} lerne ich Deutsch.|Dạo này tôi học tiếng Đức.|
adv|später|||lát nữa, sau|Ich rufe dich {später} an.|Tôi gọi lại cho bạn sau.|
v|enden|||kết thúc|Der Kurs {endet} im Juli.|Khóa học kết thúc vào tháng Bảy.|er endet, hat geendet
`;
export default pack;
