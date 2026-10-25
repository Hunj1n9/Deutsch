// A2 · 05 Sức khỏe và lối sống. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Ernährung|die||chế độ ăn uống|Eine gesunde {Ernährung} ist wichtig.|Chế độ ăn lành mạnh rất quan trọng.|
n|Bewegung|die|-en|sự vận động|Du brauchst mehr {Bewegung}.|Bạn cần vận động nhiều hơn.|
n|Gewicht|das|-e|cân nặng|Er achtet auf sein {Gewicht}.|Anh ấy chú ý cân nặng.|
n|Diät|die|-en|chế độ ăn kiêng|Ich mache gerade eine {Diät}.|Tôi đang ăn kiêng.|
n|Vitamin|das|-e|vitamin|Obst hat viele {Vitamine}.|Trái cây có nhiều vitamin.|
n|Stress|der||căng thẳng|Ich habe im Moment viel {Stress}.|Hiện tại tôi rất căng thẳng.|
n|Schlaf|der||giấc ngủ|Ich brauche mehr {Schlaf}.|Tôi cần ngủ nhiều hơn.|
n|Fitnessstudio|das|-s|phòng tập gym|Ich gehe dreimal pro Woche ins {Fitnessstudio}.|Tôi đi tập gym ba lần một tuần.|
n|Gewohnheit|die|-en|thói quen|Rauchen ist eine schlechte {Gewohnheit}.|Hút thuốc là một thói quen xấu.|
n|Verletzung|die|-en|chấn thương|Die {Verletzung} ist nicht schlimm.|Vết thương không nghiêm trọng.|
n|Allergie|die|-n|dị ứng|Ich habe eine {Allergie} gegen Nüsse.|Tôi bị dị ứng với các loại hạt.|
n|Notaufnahme|die|-n|phòng cấp cứu|Wir fahren in die {Notaufnahme}.|Chúng tôi đến phòng cấp cứu.|
n|Zahnarzt|der|¨-e|nha sĩ (nam)|Ich habe morgen einen Termin beim {Zahnarzt}.|Ngày mai tôi có hẹn với nha sĩ.|Nữ: die Zahnärztin.
n|Wartezimmer|das|-|phòng chờ|Bitte nehmen Sie im {Wartezimmer} Platz.|Mời ông/bà ngồi ở phòng chờ.|
n|Pflaster|das|-|băng dán vết thương|Hast du ein {Pflaster}?|Bạn có băng dán không?|
n|Salbe|die|-n|thuốc mỡ|Die {Salbe} hilft gegen den Juckreiz.|Thuốc mỡ giúp giảm ngứa.|
n|Spritze|die|-n|mũi tiêm|Der Arzt gibt mir eine {Spritze}.|Bác sĩ tiêm cho tôi một mũi.|
n|Herz|das|-en|trái tim|Sein {Herz} schlägt schnell.|Tim anh ấy đập nhanh.|Dativ: dem Herzen.
n|Magen|der|¨|dạ dày|Mein {Magen} tut weh.|Tôi đau dạ dày.|
n|Haut|die|¨-e|da|Die Sonne ist schlecht für die {Haut}.|Nắng không tốt cho da.|
n|Blut|das||máu|Der Arzt nimmt {Blut} ab.|Bác sĩ lấy máu.|
n|Lunge|die|-n|phổi|Rauchen schadet der {Lunge}.|Hút thuốc hại phổi.|
v|sich bewegen|||vận động|Du solltest {dich} mehr bewegen.|Bạn nên vận động nhiều hơn.|er bewegt sich, hat sich bewegt
v|sich fühlen|||cảm thấy|Ich {fühle} mich heute nicht wohl.|Hôm nay tôi thấy không khỏe.|er fühlt sich, hat sich gefühlt
v|sich verletzen|||bị thương|Ich habe {mich} beim Fußball verletzt.|Tôi bị thương khi đá bóng.|er verletzt sich, hat sich verletzt
v|sich erkälten|||bị cảm lạnh|Ich habe {mich} erkältet.|Tôi bị cảm lạnh.|er erkältet sich, hat sich erkältet
v|sich entspannen|||thư giãn|Am Wochenende {entspanne} ich mich.|Cuối tuần tôi thư giãn.|er entspannt sich, hat sich entspannt
v|sich ernähren|||ăn uống (dinh dưỡng)|Sie {ernährt} sich sehr gesund.|Cô ấy ăn uống rất lành mạnh.|er ernährt sich, hat sich ernährt
v|abnehmen|||giảm cân|Ich möchte fünf Kilo {abnehmen}.|Tôi muốn giảm năm ký.|Động từ tách: er nimmt ab, hat abgenommen
v|zunehmen|||tăng cân|Im Urlaub habe ich {zugenommen}.|Kỳ nghỉ tôi tăng cân.|Động từ tách: er nimmt zu, hat zugenommen
v|husten|||ho|Das Kind {hustet} die ganze Nacht.|Đứa bé ho cả đêm.|er hustet, hat gehustet
v|untersuchen|||khám, kiểm tra|Die Ärztin {untersucht} den Patienten.|Bác sĩ khám cho bệnh nhân.|er untersucht, hat untersucht
v|achten auf|||chú ý đến|Ich {achte} auf meine Gesundheit.|Tôi chú ý đến sức khỏe.|er achtet, hat geachtet; achten auf + Akk
v|aufpassen|||cẩn thận, để ý|{Pass} auf, die Treppe ist glatt!|Cẩn thận, cầu thang trơn đấy!|Động từ tách: er passt auf, hat aufgepasst
v|schaden|||gây hại|Zu viel Zucker {schadet} den Zähnen.|Quá nhiều đường hại răng.|es schadet, hat geschadet; schaden + Dativ
adj|fit|||khỏe khoắn, sung sức|Ich fühle mich {fit}.|Tôi thấy khỏe khoắn.|
adj|schwach|||yếu|Nach der Grippe bin ich noch {schwach}.|Sau cúm tôi vẫn còn yếu.|
adj|dick|||mập, dày|Der Hund ist zu {dick}.|Con chó béo quá.|
adj|dünn|||gầy, mỏng|Sie ist sehr {dünn}.|Cô ấy rất gầy.|
adj|ungesund|||không lành mạnh|Fast Food ist {ungesund}.|Đồ ăn nhanh không tốt cho sức khỏe.|
adj|regelmäßig|||đều đặn|Ich mache {regelmäßig} Sport.|Tôi tập thể thao đều đặn.|
adj|nervös|||lo lắng, căng thẳng|Vor dem Termin bin ich {nervös}.|Trước buổi hẹn tôi lo lắng.|
adj|entspannt|||thư thái|Im Urlaub bin ich ganz {entspannt}.|Kỳ nghỉ tôi rất thư thái.|
adj|verletzt|||bị thương|Der Spieler ist {verletzt}.|Cầu thủ bị thương.|
adv|deshalb|||vì vậy|Ich bin krank, {deshalb} bleibe ich zu Hause.|Tôi ốm, vì vậy tôi ở nhà.|deshalb ở vị trí 1 → động từ ngay sau.
adv|genug|||đủ|Schläfst du {genug}?|Bạn ngủ có đủ không?|
adv|ziemlich|||khá|Ich bin {ziemlich} müde.|Tôi khá mệt.|
p|Ich fühle mich nicht wohl|||tôi thấy không khỏe|Ich gehe nach Hause, {ich fühle mich nicht wohl}.|Tôi về nhà, tôi thấy không khỏe.|
p|in Form bleiben|||giữ dáng|Wie bleibst du {in Form}?|Bạn giữ dáng bằng cách nào?|
g|Động từ phản thân: mich, dich, sich|||đại từ phản thân Akkusativ|Ich wasche {mich}.|Tôi tắm rửa.|mich, dich, sich, uns, euch, sich.
g|Đại từ phản thân Dativ: mir, dir|||khi đã có tân ngữ Akkusativ|Ich putze {mir} die Zähne.|Tôi đánh răng.|mir, dir, sich, uns, euch, sich.
g|deshalb: kết quả, động từ ngay sau|||nối hai câu chính|Ich habe Fieber, deshalb {bleibe} ich im Bett.|Tôi sốt, vì vậy tôi nằm trên giường.|deshalb/darum/deswegen chiếm vị trí 1.
g|weil hay deshalb?|||nguyên nhân và kết quả|Ich bleibe zu Hause, weil ich krank {bin}.|Tôi ở nhà vì tôi bị ốm.|weil (nguyên nhân) → động từ cuối; deshalb (kết quả) → động từ ngay sau.
n|Handtuch|das|Handtücher|khăn tắm, khăn lau|Nimm ein frisches {Handtuch} aus dem Schrank.|Lấy một chiếc khăn sạch trong tủ.|
n|Seife|die|-n|xà phòng|Wasch dir die Hände mit {Seife}!|Rửa tay bằng xà phòng đi!|
v|wecken|||đánh thức|Kannst du mich morgen um sechs {wecken}?|Mai bạn đánh thức mình lúc sáu giờ được không?|er weckt, hat geweckt
`;
export default pack;
