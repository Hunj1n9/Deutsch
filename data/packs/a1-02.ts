// A1 · 02 Gia đình và bạn bè. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Familie|die|-n|gia đình|Meine {Familie} wohnt in Da Nang.|Gia đình tôi sống ở Đà Nẵng.|
n|Mutter|die|¨|mẹ|Meine {Mutter} ist Lehrerin.|Mẹ tôi là giáo viên.|
n|Vater|der|¨|bố, cha|Mein {Vater} arbeitet viel.|Bố tôi làm việc nhiều.|
n|Eltern|die||bố mẹ|Meine {Eltern} sind 55 Jahre alt.|Bố mẹ tôi 55 tuổi.|Chỉ dùng số nhiều.
n|Kind|das|-er|đứa trẻ, con|Haben Sie {Kinder}?|Ông/bà có con không?|
n|Sohn|der|¨-e|con trai|Ihr {Sohn} heißt Nam.|Con trai cô ấy tên là Nam.|
n|Tochter|die|¨|con gái|Unsere {Tochter} ist drei.|Con gái chúng tôi lên ba.|
n|Bruder|der|¨|anh/em trai|Mein {Bruder} studiert in Hue.|Anh trai tôi học đại học ở Huế.|
n|Schwester|die|-n|chị/em gái|Hast du eine {Schwester}?|Bạn có chị/em gái không?|
n|Geschwister|die||anh chị em|Ich habe zwei {Geschwister}.|Tôi có hai anh chị em.|Chỉ dùng số nhiều.
n|Großmutter|die|¨|bà|Meine {Großmutter} kocht sehr gut.|Bà tôi nấu ăn rất ngon.|Thân mật: Oma.
n|Großvater|der|¨|ông|Mein {Großvater} ist 80.|Ông tôi 80 tuổi.|Thân mật: Opa.
n|Großeltern|die||ông bà|Am Sonntag besuchen wir die {Großeltern}.|Chủ nhật chúng tôi thăm ông bà.|Chỉ dùng số nhiều.
n|Mann|der|¨-er|người đàn ông; chồng|Das ist mein {Mann}, Tuan.|Đây là chồng tôi, Tuấn.|
n|Ehefrau|die|-en|vợ|Seine {Ehefrau} kommt aus Hanoi.|Vợ anh ấy đến từ Hà Nội.|Trong nói thường dùng meine Frau.
n|Partner|der|-|bạn đời, đối tác (nam)|Mein {Partner} heißt Jan.|Bạn đời của tôi tên là Jan.|Nữ: die Partnerin, -nen.
n|Freund|der|-e|bạn (nam); bạn trai|Das ist mein {Freund} Huy.|Đây là bạn tôi, Huy.|
n|Freundin|die|-nen|bạn (nữ); bạn gái|Meine {Freundin} spricht Englisch.|Bạn gái tôi nói tiếng Anh.|
n|Baby|das|-s|em bé|Das {Baby} schläft.|Em bé đang ngủ.|
n|Onkel|der|-|chú, bác, cậu|Mein {Onkel} wohnt in Saigon.|Chú tôi sống ở Sài Gòn.|
n|Tante|die|-n|cô, dì, thím|Meine {Tante} hat zwei Hunde.|Cô tôi có hai con chó.|
n|Cousin|der|-s|anh/em họ (nam)|Mein {Cousin} ist 20.|Anh họ tôi 20 tuổi.|Nữ: die Cousine, -n.
n|Jahr|das|-e|năm; tuổi|Ich bin 25 {Jahre} alt.|Tôi 25 tuổi.|
n|Alter|das||tuổi tác|Wie ist Ihr {Alter}?|Ông/bà bao nhiêu tuổi?|Thường hỏi: Wie alt sind Sie?
n|Beruf|der|-e|nghề nghiệp|Was sind Sie von {Beruf}?|Ông/bà làm nghề gì?|
n|Foto|das|-s|bức ảnh|Das ist ein {Foto} von meiner Familie.|Đây là ảnh gia đình tôi.|
n|Hund|der|-e|con chó|Wir haben einen {Hund}.|Chúng tôi có một con chó.|
n|Katze|die|-n|con mèo|Die {Katze} ist schwarz.|Con mèo màu đen.|
v|haben|||có|Ich {habe} einen Bruder.|Tôi có một anh trai.|du hast, er hat; Perfekt: hat gehabt
v|leben|||sống|Meine Großeltern {leben} auf dem Land.|Ông bà tôi sống ở nông thôn.|er lebt, hat gelebt
v|arbeiten|||làm việc|Mein Vater {arbeitet} in einer Bank.|Bố tôi làm việc ở ngân hàng.|du arbeitest, er arbeitet, hat gearbeitet
v|studieren|||học đại học|Meine Schwester {studiert} Medizin.|Chị tôi học y.|er studiert, hat studiert
v|besuchen|||thăm|Ich {besuche} meine Eltern.|Tôi thăm bố mẹ.|er besucht, hat besucht
v|lieben|||yêu|Ich {liebe} meine Familie.|Tôi yêu gia đình mình.|er liebt, hat geliebt
v|heiraten|||kết hôn|Sie {heiraten} im Mai.|Họ cưới vào tháng Năm.|er heiratet, hat geheiratet
adj|verheiratet|||đã kết hôn|Ich bin {verheiratet}.|Tôi đã kết hôn.|
adj|ledig|||độc thân|Mein Bruder ist noch {ledig}.|Anh tôi vẫn còn độc thân.|
adj|geschieden|||đã ly hôn|Meine Tante ist {geschieden}.|Cô tôi đã ly hôn.|
adj|alt|||già; cũ|Wie {alt} bist du?|Bạn bao nhiêu tuổi?|so sánh: älter, am ältesten
adj|jung|||trẻ|Meine Mutter ist noch {jung}.|Mẹ tôi còn trẻ.|so sánh: jünger, am jüngsten
adj|groß|||to, lớn; cao|Unsere Familie ist {groß}.|Gia đình chúng tôi đông.|so sánh: größer, am größten
adj|klein|||nhỏ; thấp|Mein Bruder ist noch {klein}.|Em trai tôi còn nhỏ.|
adj|nett|||dễ mến, tử tế|Deine Freundin ist sehr {nett}.|Bạn gái bạn rất dễ mến.|
pron|mein|||của tôi|Das ist {mein} Vater.|Đây là bố tôi.|meine trước danh từ giống cái và số nhiều.
pron|dein|||của bạn|Ist das {dein} Bruder?|Đó là anh trai bạn à?|
g|sein / ihr: sở hữu ngôi thứ ba|||của anh ấy / của cô ấy, của họ|{Sein} Sohn ist Arzt.|Con trai anh ấy là bác sĩ.|er → sein, sie → ihr, sie (họ) → ihr, Sie → Ihr. Thêm -e trước danh từ giống cái và số nhiều.
pron|unser|||của chúng tôi|{Unsere} Familie ist klein.|Gia đình chúng tôi nhỏ.|
adv|zusammen|||cùng nhau|Wir wohnen {zusammen}.|Chúng tôi sống cùng nhau.|
adv|sehr|||rất|Meine Oma ist {sehr} nett.|Bà tôi rất hiền.|
conj|und|||và|Ich habe einen Bruder {und} eine Schwester.|Tôi có một anh trai và một chị gái.|Không làm thay đổi vị trí động từ.
g|haben: ich habe, du hast, er hat|||chia động từ haben|Er {hat} zwei Kinder.|Anh ấy có hai con.|ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben.
g|mein / meine|||mạo từ sở hữu theo giống|Das ist {meine} Schwester.|Đây là chị gái tôi.|der/das → mein; die và số nhiều → meine (ở Nominativ).
g|Wie alt ...?|||hỏi tuổi|Wie {alt} ist dein Vater?|Bố bạn bao nhiêu tuổi?|Trả lời: Er ist 50 (Jahre alt).
n|Oma|die|-s|bà (cách gọi thân mật)|Meine {Oma} wohnt in Da Nang.|Bà tôi sống ở Đà Nẵng.|
n|Opa|der|-s|ông (cách gọi thân mật)|Mein {Opa} ist 80 Jahre alt.|Ông tôi 80 tuổi.|
n|Ehemann|der|¨-er|chồng|Das ist mein {Ehemann} Minh.|Đây là chồng tôi, Minh.|
n|Mädchen|das|-|cô bé, bé gái|Das {Mädchen} heißt Lan.|Cô bé tên là Lan.|
adj|tot|||đã mất, chết|Mein Großvater ist leider schon {tot}.|Tiếc là ông tôi đã mất.|
n|Mensch|der|-en|con người|Wie viele {Menschen} wohnen in Hanoi?|Có bao nhiêu người sống ở Hà Nội?|Danh từ giống đực (der), số nhiều: -en. n-Deklination: den Menschen.
p|die Leute|||mọi người, người ta|Die {Leute} hier sind sehr nett.|Mọi người ở đây rất dễ mến.|Chỉ dùng số nhiều.
n|Familienstand|der||tình trạng hôn nhân|Mein {Familienstand}: ledig.|Tình trạng hôn nhân của tôi: độc thân.|
n|Geburtsjahr|das|-e|năm sinh|Mein {Geburtsjahr} ist 1995.|Năm sinh của tôi là 1995.|
v|unterschreiben|||ký tên|Bitte {unterschreiben} Sie hier.|Xin ký tên ở đây.|er unterschreibt, hat unterschrieben
n|Unterschrift|die|-en|chữ ký|Hier fehlt noch Ihre {Unterschrift}.|Ở đây còn thiếu chữ ký của ông/bà.|
`;
export default pack;
