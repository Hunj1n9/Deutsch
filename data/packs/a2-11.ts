// A2 · 11 Quan hệ và cảm xúc. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Gefühl|das|-e|cảm xúc|Ich habe ein gutes {Gefühl}.|Tôi có cảm giác tốt.|
n|Liebe|die||tình yêu|Die {Liebe} ist kompliziert.|Tình yêu thật phức tạp.|
n|Freundschaft|die|-en|tình bạn|Unsere {Freundschaft} ist mir wichtig.|Tình bạn của chúng ta quan trọng với tôi.|
n|Beziehung|die|-en|mối quan hệ|Sie sind seit zwei Jahren in einer {Beziehung}.|Họ đã quen nhau hai năm.|
n|Streit|der|-e|cuộc cãi nhau|Wir hatten einen {Streit}.|Chúng tôi đã cãi nhau.|
n|Angst|die|¨-e|nỗi sợ|Ich habe {Angst} vor Hunden.|Tôi sợ chó.|Angst haben vor + Dativ.
n|Sorge|die|-n|nỗi lo|Mach dir keine {Sorgen}!|Đừng lo!|
n|Freude|die|-n|niềm vui|Das macht mir große {Freude}.|Điều đó làm tôi rất vui.|
n|Glück|das||hạnh phúc; may mắn|Ich wünsche dir viel {Glück}.|Chúc bạn nhiều may mắn.|
n|Trauer|die||nỗi đau buồn|Die {Trauer} ist groß.|Nỗi đau buồn rất lớn.|
n|Wut|die||cơn giận|Er hat eine große {Wut}.|Anh ấy đang rất giận.|
n|Vertrauen|das||sự tin tưởng|{Vertrauen} ist wichtig in einer Beziehung.|Sự tin tưởng quan trọng trong một mối quan hệ.|
n|Rat|der|Ratschläge|lời khuyên|Kannst du mir einen {Rat} geben?|Bạn cho tôi lời khuyên được không?|Số nhiều: die Ratschläge.
n|Problem|das|-e|vấn đề|Ich habe ein {Problem}.|Tôi có một vấn đề.|
n|Paar|das|-e|cặp đôi|Sie sind ein schönes {Paar}.|Họ là một cặp đẹp đôi.|ein paar (viết thường) = vài.
n|Single|der|-s|người độc thân|Ich bin seit einem Jahr {Single}.|Tôi độc thân một năm rồi.|
n|Verabredung|die|-en|cuộc hẹn (gặp)|Ich habe heute eine {Verabredung}.|Hôm nay tôi có hẹn.|
n|Kompliment|das|-e|lời khen|Danke für das {Kompliment}!|Cảm ơn lời khen!|
v|sich verlieben|||phải lòng|Er hat {sich} in sie verliebt.|Anh ấy phải lòng cô ấy.|er verliebt sich, hat sich verliebt; in + Akk
v|sich trennen|||chia tay|Sie haben {sich} getrennt.|Họ đã chia tay.|er trennt sich, hat sich getrennt; von + Dativ
v|sich streiten|||cãi nhau|Die Kinder {streiten} sich oft.|Bọn trẻ hay cãi nhau.|er streitet sich, hat sich gestritten
v|sich versöhnen|||làm lành|Wir haben uns wieder {versöhnt}.|Chúng tôi đã làm lành.|er versöhnt sich, hat sich versöhnt
v|sich entschuldigen|||xin lỗi|Ich möchte {mich} entschuldigen.|Tôi muốn xin lỗi.|er entschuldigt sich, hat sich entschuldigt; bei + Dativ, für + Akk
v|sich verstehen|||hiểu nhau, hợp nhau|Wir {verstehen} uns sehr gut.|Chúng tôi rất hợp nhau.|er versteht sich, hat sich verstanden
v|vermissen|||nhớ (ai)|Ich {vermisse} meine Familie.|Tôi nhớ gia đình.|er vermisst, hat vermisst
v|vertrauen|||tin tưởng|Ich {vertraue} dir.|Tôi tin bạn.|er vertraut, hat vertraut; + Dativ
v|weinen|||khóc|Das Baby {weint}.|Em bé đang khóc.|er weint, hat geweint
v|lachen|||cười|Wir haben viel {gelacht}.|Chúng tôi đã cười rất nhiều.|er lacht, hat gelacht
v|lächeln|||mỉm cười|Sie {lächelt} immer.|Cô ấy luôn mỉm cười.|er lächelt, hat gelächelt
v|hoffen|||hy vọng|Ich {hoffe}, es geht dir gut.|Tôi hy vọng bạn khỏe.|er hofft, hat gehofft
v|raten|||khuyên; đoán|Ich {rate} dir, mit ihm zu sprechen.|Tôi khuyên bạn nói chuyện với anh ấy.|du rätst, er rät, hat geraten; + Dativ
v|trösten|||an ủi|Sie {tröstet} ihre Freundin.|Cô ấy an ủi bạn mình.|er tröstet, hat getröstet
v|küssen|||hôn|Er {küsst} seine Frau.|Anh ấy hôn vợ.|er küsst, hat geküsst
v|umarmen|||ôm|Sie {umarmt} ihre Mutter.|Cô ấy ôm mẹ.|er umarmt, hat umarmt
adj|verliebt|||đang yêu|Sie ist total {verliebt}.|Cô ấy đang yêu say đắm.|
adj|eifersüchtig|||ghen tuông|Er ist schnell {eifersüchtig}.|Anh ấy dễ ghen.|
adj|wütend|||giận dữ|Warum bist du so {wütend}?|Sao bạn giận thế?|
adj|enttäuscht|||thất vọng|Ich bin {enttäuscht} von dir.|Tôi thất vọng về bạn.|
adj|einsam|||cô đơn|Ohne Freunde fühlt er sich {einsam}.|Không có bạn bè anh ấy thấy cô đơn.|
adj|ehrlich|||thật thà|Sei bitte {ehrlich}.|Hãy thành thật.|
adj|höflich|||lịch sự|Sie ist immer {höflich}.|Cô ấy luôn lịch sự.|
adj|sympathisch|||dễ mến|Ich finde ihn {sympathisch}.|Tôi thấy anh ấy dễ mến.|
adj|böse|||giận; xấu (tính)|Bist du mir {böse}?|Bạn giận tôi à?|
p|Das tut mir leid|||tôi rất tiếc|{Das tut mir leid}, ich habe es vergessen.|Tôi rất tiếc, tôi quên mất.|
p|Ich vermisse dich|||anh/em nhớ bạn|{Ich vermisse dich} sehr.|Tôi rất nhớ bạn.|
adv|trotzdem|||mặc dù vậy|Es regnet, {trotzdem} gehen wir spazieren.|Trời mưa, dù vậy chúng tôi vẫn đi dạo.|trotzdem ở vị trí 1 → động từ ngay sau.
g|Konjunktiv II: würde + Infinitiv|||diễn đạt mong ước, giả định|Ich {würde} gern mehr reisen.|Tôi rất muốn đi du lịch nhiều hơn.|würde, würdest, würde, würden, würdet, würden + Infinitiv cuối câu.
g|Konjunktiv II: hätte, wäre|||dạng riêng của haben, sein|Wenn ich Zeit {hätte}, würde ich dich besuchen.|Nếu có thời gian, tôi sẽ thăm bạn.|haben → hätte, sein → wäre; können → könnte.
g|Lời khuyên với sollte|||bạn nên …|Du {solltest} mit ihr sprechen.|Bạn nên nói chuyện với cô ấy.|sollte = Konjunktiv II của sollen.
g|An deiner Stelle würde ich …|||nếu tôi là bạn|An deiner Stelle {würde} ich mich entschuldigen.|Nếu tôi là bạn, tôi sẽ xin lỗi.|Cách khuyên lịch sự.
adj|blöd|||ngốc; tệ (văn nói)|Das war eine {blöde} Idee.|Đó là một ý tưởng ngốc nghếch.|Văn nói, hơi suồng sã.
adj|furchtbar|||kinh khủng|Ich habe mich {furchtbar} geärgert.|Tôi đã bực kinh khủng.|Cũng dùng như trạng từ nhấn mạnh: furchtbar nett.
`;
export default pack;
