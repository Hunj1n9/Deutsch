// B2 · 06 Y học và sức khỏe. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Medizin|die||y học|Sie studiert {Medizin} in Hamburg.|Cô ấy học y ở Hamburg.|
n|Gesundheitswesen|das||ngành y tế|Im {Gesundheitswesen} fehlen Fachkräfte.|Ngành y tế thiếu nhân lực.|
n|Pflegekraft|die|¨-e|nhân viên điều dưỡng|{Pflegekräfte} leisten harte Arbeit.|Nhân viên điều dưỡng làm việc vất vả.|
n|Pflegeheim|das|-e|viện dưỡng lão|Meine Oma lebt in einem {Pflegeheim}.|Bà tôi sống ở viện dưỡng lão.|
n|Klinik|die|-en|bệnh viện, phòng khám chuyên khoa|Er wurde in die {Klinik} eingeliefert.|Anh ấy được đưa vào bệnh viện.|
n|Heilmittel|das|-|phương thuốc|Lachen ist das beste {Heilmittel}.|Tiếng cười là liều thuốc tốt nhất.|
n|Wirkstoff|der|-e|hoạt chất|Der {Wirkstoff} hilft gegen Schmerzen.|Hoạt chất này giúp giảm đau.|
n|Wirkung|die|-en|tác dụng|Die {Wirkung} tritt nach 30 Minuten ein.|Tác dụng bắt đầu sau 30 phút.|
n|Therapie|die|-n|liệu pháp|Die {Therapie} dauert mehrere Monate.|Liệu pháp kéo dài vài tháng.|
n|Vorbeugung|die||sự phòng ngừa|{Vorbeugung} ist besser als Heilung.|Phòng bệnh hơn chữa bệnh.|
n|Früherkennung|die||phát hiện sớm|Die {Früherkennung} rettet Leben.|Phát hiện sớm cứu sống nhiều người.|
n|Erkrankung|die|-en|bệnh, sự mắc bệnh|Herz-{Erkrankungen} sind häufig.|Các bệnh tim rất phổ biến.|
n|Volkskrankheit|die|-en|bệnh phổ biến trong dân|Diabetes ist eine {Volkskrankheit}.|Tiểu đường là bệnh phổ biến.|
n|Krebs|der||ung thư|{Krebs} kann heute oft geheilt werden.|Ngày nay ung thư thường có thể chữa được.|
n|Lebenserwartung|die||tuổi thọ trung bình|Die {Lebenserwartung} steigt.|Tuổi thọ trung bình tăng.|
n|Organspende|die|-n|hiến tạng|Sie hat einen Ausweis für {Organspende}.|Cô ấy có thẻ hiến tạng.|
n|Pandemie|die|-n|đại dịch|Die {Pandemie} hat vieles verändert.|Đại dịch đã thay đổi nhiều thứ.|
n|Erreger|der|-|mầm bệnh|Der {Erreger} wurde schnell identifiziert.|Mầm bệnh được xác định nhanh chóng.|
n|Abwehrkräfte|die||sức đề kháng|Vitamin C stärkt die {Abwehrkräfte}.|Vitamin C tăng sức đề kháng.|
n|Schlafmangel|der||thiếu ngủ|{Schlafmangel} schadet der Gesundheit.|Thiếu ngủ có hại cho sức khỏe.|
n|Depression|die|-en|trầm cảm|Er leidet an {Depressionen}.|Anh ấy bị trầm cảm.|
n|Achtsamkeit|die||chánh niệm|{Achtsamkeit} hilft gegen Stress.|Chánh niệm giúp chống căng thẳng.|
n|Rezeptpflicht|die||quy định phải có đơn thuốc|Für Antibiotika gilt {Rezeptpflicht}.|Kháng sinh bắt buộc phải có đơn.|
n|Zuzahlung|die|-en|khoản đồng chi trả|Für Medikamente gibt es eine {Zuzahlung}.|Mua thuốc phải đồng chi trả một phần.|
v|diagnostizieren|||chẩn đoán|Der Arzt {diagnostizierte} eine Grippe.|Bác sĩ chẩn đoán bệnh cúm.|er diagnostiziert, hat diagnostiziert
v|einliefern|||đưa vào (bệnh viện)|Sie wurde ins Krankenhaus {eingeliefert}.|Cô ấy được đưa vào bệnh viện.|Động từ tách: er liefert ein, hat eingeliefert
v|stärken|||tăng cường|Sport {stärkt} das Immunsystem.|Thể thao tăng cường hệ miễn dịch.|er stärkt, hat gestärkt
v|schwächen|||làm suy yếu|Stress {schwächt} den Körper.|Căng thẳng làm cơ thể suy yếu.|er schwächt, hat geschwächt
v|auslösen|||gây ra, kích hoạt|Pollen können Allergien {auslösen}.|Phấn hoa có thể gây dị ứng.|Động từ tách: er löst aus, hat ausgelöst
v|lindern|||làm dịu|Das Mittel {lindert} die Schmerzen.|Thuốc làm dịu cơn đau.|er lindert, hat gelindert
v|sich ausbreiten|||lây lan|Das Virus {breitet} sich schnell aus.|Vi-rút lây lan nhanh.|Động từ tách: es breitet sich aus, hat sich ausgebreitet
v|genesen|||bình phục|Er ist vollständig {genesen}.|Anh ấy đã hoàn toàn bình phục.|er genest, genas, ist genesen (trang trọng)
v|vorliegen|||có, hiện hữu|Eine Allergie {liegt} nicht vor.|Không có dị ứng.|Động từ tách: es liegt vor, lag vor, hat vorgelegen
v|sich unterziehen|||trải qua (phẫu thuật, kiểm tra)|Er muss sich einer Operation {unterziehen}.|Anh ấy phải trải qua một ca phẫu thuật.|er unterzieht sich, unterzog sich, hat sich unterzogen; + Dativ
v|überwachen|||theo dõi|Die Patienten werden ständig {überwacht}.|Bệnh nhân được theo dõi liên tục.|er überwacht, hat überwacht
adj|medizinisch|||y tế|Er braucht {medizinische} Hilfe.|Anh ấy cần trợ giúp y tế.|
adj|ärztlich|||của bác sĩ|Sie braucht eine {ärztliche} Bescheinigung.|Cô ấy cần giấy chứng nhận của bác sĩ.|
adj|wirksam|||có hiệu quả|Das Medikament ist sehr {wirksam}.|Thuốc rất hiệu quả.|
adj|unheilbar|||không chữa được|Die Krankheit ist leider {unheilbar}.|Tiếc là bệnh không chữa được.|
adj|psychisch|||thuộc về tâm thần, tâm lý|{Psychische} Erkrankungen nehmen zu.|Bệnh tâm lý ngày càng tăng.|
adj|vorbeugend|||phòng ngừa|{Vorbeugende} Maßnahmen sind wichtig.|Biện pháp phòng ngừa là quan trọng.|
adj|erblich|||di truyền|Die Krankheit ist {erblich}.|Căn bệnh có tính di truyền.|
adj|stationär|||nội trú|Er wird {stationär} behandelt.|Anh ấy được điều trị nội trú.|
adj|ambulant|||ngoại trú|Die Operation wird {ambulant} durchgeführt.|Ca phẫu thuật được thực hiện ngoại trú.|
adj|gesundheitsschädlich|||có hại cho sức khỏe|Rauchen ist {gesundheitsschädlich}.|Hút thuốc có hại cho sức khỏe.|
adj|vermutlich|||có lẽ|Er hat sich {vermutlich} angesteckt.|Có lẽ anh ấy đã bị lây.|
p|in Behandlung sein|||đang được điều trị|Sie {ist} seit Monaten in Behandlung.|Cô ấy đang được điều trị mấy tháng nay.|
p|zur Kur fahren|||đi an dưỡng|Mein Vater {fährt} im Herbst zur Kur.|Mùa thu bố tôi đi an dưỡng.|
p|einen Rückfall erleiden|||tái phát|Leider hat er {einen Rückfall erlitten}.|Tiếc là anh ấy bị tái phát.|
g|Động từ khuyết thiếu chủ quan: phỏng đoán|||müssen/können/dürfte|Er {muss} krank sein, er sieht blass aus.|Hẳn là anh ấy ốm, trông anh ấy xanh xao.|muss = chắc chắn; dürfte = có lẽ; kann = có thể; soll = nghe nói.
g|Futur II: phỏng đoán việc đã xảy ra|||werden + Partizip II + haben/sein|Er wird den Termin {vergessen} haben.|Chắc anh ấy đã quên lịch hẹn.|Dùng để phỏng đoán về quá khứ hoặc việc sẽ hoàn thành.
g|zu + Partizip I (Gerundiv)|||cái phải/cần được làm|Das ist ein nicht zu {unterschätzendes} Risiko.|Đó là một rủi ro không thể xem nhẹ.|= ein Risiko, das nicht unterschätzt werden darf (văn viết).
g|sollen: nghe nói|||truyền đạt tin chưa kiểm chứng|Das Medikament {soll} sehr gut wirken.|Nghe nói thuốc này rất hiệu quả.|sollen + Infinitiv = theo người khác nói.
n|Anamnese|die|-n|tiền sử bệnh|Der Arzt beginnt mit der {Anamnese}.|Bác sĩ bắt đầu bằng việc hỏi tiền sử bệnh.|
n|Befund|der|-e|kết quả khám|Der {Befund} ist unauffällig.|Kết quả khám bình thường.|
n|Ultraschall|der||siêu âm|Die Ärztin macht einen {Ultraschall}.|Bác sĩ siêu âm.|
n|Röntgenbild|das|-er|ảnh chụp X-quang|Auf dem {Röntgenbild} sieht man den Bruch.|Trên phim X-quang thấy chỗ gãy.|
n|Blutuntersuchung|die|-en|xét nghiệm máu|Die {Blutuntersuchung} zeigt nichts Auffälliges.|Xét nghiệm máu không cho thấy gì bất thường.|
n|Narkose|die|-n|gây mê|Die Operation erfolgt unter {Narkose}.|Ca mổ được thực hiện dưới gây mê.|
n|Intensivstation|die|-en|khoa hồi sức tích cực|Er liegt auf der {Intensivstation}.|Anh ấy nằm ở khoa hồi sức.|
n|Rehabilitation|die|-en|phục hồi chức năng|Nach der Operation folgt eine {Rehabilitation}.|Sau phẫu thuật là phục hồi chức năng.|
n|Hausmittel|das|-|mẹo chữa bệnh dân gian|Tee mit Honig ist ein gutes {Hausmittel}.|Trà mật ong là một mẹo chữa bệnh tốt.|
n|Schulmedizin|die||y học chính thống|Sie vertraut der {Schulmedizin}.|Cô ấy tin vào y học chính thống.|
n|Naturheilkunde|die||y học tự nhiên|Er interessiert sich für {Naturheilkunde}.|Anh ấy quan tâm đến y học tự nhiên.|
n|Akupunktur|die|-en|châm cứu|{Akupunktur} hilft gegen Rückenschmerzen.|Châm cứu giúp giảm đau lưng.|
n|Immunsystem|das|-e|hệ miễn dịch|Schlaf stärkt das {Immunsystem}.|Giấc ngủ tăng cường hệ miễn dịch.|
n|Ansteckung|die|-en|sự lây nhiễm|Masken schützen vor {Ansteckung}.|Khẩu trang chống lây nhiễm.|
n|Quarantäne|die|-n|cách ly|Er musste zwei Wochen in {Quarantäne}.|Anh ấy phải cách ly hai tuần.|
n|Impfstoff|der|-e|vắc-xin|Der {Impfstoff} wurde schnell entwickelt.|Vắc-xin được phát triển nhanh chóng.|
n|Pflegeversicherung|die|-en|bảo hiểm chăm sóc|Die {Pflegeversicherung} zahlt einen Teil.|Bảo hiểm chăm sóc chi trả một phần.|
n|Ärztemangel|der||thiếu bác sĩ|Auf dem Land gibt es einen {Ärztemangel}.|Ở nông thôn thiếu bác sĩ.|
n|Volksgesundheit|die||sức khỏe cộng đồng|Rauchen schadet der {Volksgesundheit}.|Hút thuốc gây hại sức khỏe cộng đồng.|
n|Bewegungsmangel|der||thiếu vận động|{Bewegungsmangel} führt zu Übergewicht.|Thiếu vận động dẫn đến thừa cân.|
v|verabreichen|||cho dùng (thuốc)|Die Pflegerin {verabreicht} das Medikament.|Y tá cho bệnh nhân dùng thuốc.|er verabreicht, hat verabreicht
v|röntgen|||chụp X-quang|Das Bein muss {geröntgt} werden.|Chân phải được chụp X-quang.|er röntgt, hat geröntgt
v|sich schonen|||giữ sức|Du solltest dich noch {schonen}.|Bạn nên giữ sức thêm.|er schont sich, hat sich geschont
v|abklingen|||giảm dần|Die Symptome {klingen} langsam ab.|Các triệu chứng giảm dần.|Động từ tách: es klingt ab, klang ab, ist abgeklungen
v|sich verschlechtern|||xấu đi|Sein Zustand hat sich {verschlechtert}.|Tình trạng của anh ấy đã xấu đi.|er verschlechtert sich, hat sich verschlechtert
v|sich bessern|||khá lên|Ihr Zustand hat sich {gebessert}.|Tình trạng của cô ấy đã khá hơn.|er bessert sich, hat sich gebessert
v|vorsorgen|||phòng ngừa|Wer früh {vorsorgt}, bleibt länger gesund.|Ai phòng ngừa sớm sẽ khỏe lâu hơn.|Động từ tách: er sorgt vor, hat vorgesorgt
v|abraten|||khuyên không nên|Der Arzt {rät} mir vom Rauchen ab.|Bác sĩ khuyên tôi không hút thuốc.|Động từ tách: du rätst ab, er rät ab, riet ab, hat abgeraten; von + Dativ
v|zuraten|||khuyên nên|Ich kann Ihnen nur {zuraten}.|Tôi chỉ có thể khuyên ông/bà nên làm.|Động từ tách: er rät zu, riet zu, hat zugeraten
adj|lebenswichtig|||sống còn|Wasser ist {lebenswichtig}.|Nước là sống còn.|
adj|behindert|||khuyết tật|Er ist seit seiner Geburt {behindert}.|Anh ấy khuyết tật từ khi sinh ra.|
adj|pflegebedürftig|||cần được chăm sóc|Meine Oma ist {pflegebedürftig}.|Bà tôi cần được chăm sóc.|
adj|rezeptfrei|||không cần đơn|Das Medikament ist {rezeptfrei}.|Thuốc này không cần đơn.|
adj|nüchtern|||bụng đói; tỉnh táo|Kommen Sie {nüchtern} zur Blutabnahme.|Hãy để bụng đói khi đến lấy máu.|
adj|unauffällig|||bình thường, không có gì lạ|Der Befund war {unauffällig}.|Kết quả khám bình thường.|
adj|gesundheitsbewusst|||có ý thức về sức khỏe|Sie lebt sehr {gesundheitsbewusst}.|Cô ấy sống rất có ý thức về sức khỏe.|
adj|vorbelastet|||có tiền sử (gia đình)|Er ist erblich {vorbelastet}.|Anh ấy có tiền sử bệnh gia đình.|
p|auf Herz und Nieren prüfen|||kiểm tra kỹ lưỡng|Der Arzt hat mich {auf Herz und Nieren geprüft}.|Bác sĩ đã kiểm tra tôi rất kỹ.|
p|sich in Behandlung begeben|||đi điều trị|Sie {begab} sich in ärztliche Behandlung.|Cô ấy đi điều trị.|
p|an die frische Luft gehen|||ra ngoài hít thở không khí|Du solltest mal {an die frische Luft gehen}.|Bạn nên ra ngoài hít thở không khí.|
n|Gesundheitsvorsorge|die||chăm sóc sức khỏe dự phòng|Die {Gesundheitsvorsorge} ist sehr wichtig.|Chăm sóc sức khỏe dự phòng rất quan trọng.|
n|Lebensqualität|die||chất lượng cuộc sống|Sport verbessert die {Lebensqualität}.|Thể thao cải thiện chất lượng cuộc sống.|
n|Wartezeit|die|-en|thời gian chờ|Die {Wartezeit} beim Facharzt ist lang.|Thời gian chờ khám chuyên khoa lâu.|
adj|psychosomatisch|||tâm thể|Die Beschwerden sind {psychosomatisch}.|Các triệu chứng có nguyên nhân tâm thể.|
v|auskurieren|||chữa khỏi hẳn|Du musst die Grippe richtig {auskurieren}.|Bạn phải chữa khỏi hẳn bệnh cúm.|Động từ tách: er kuriert aus, hat auskuriert
v|sich impfen lassen|||đi tiêm phòng|Ich habe mich gegen Grippe {impfen} lassen.|Tôi đã đi tiêm phòng cúm.|er lässt sich impfen, hat sich impfen lassen
p|sich etwas einfangen|||nhiễm bệnh (văn nói)|Im Urlaub habe ich mir eine Erkältung {eingefangen}.|Kỳ nghỉ tôi bị nhiễm cảm lạnh.|
p|auf dem Weg der Besserung|||đang hồi phục|Sie ist {auf dem Weg der Besserung}.|Cô ấy đang hồi phục.|
`;
export default pack;
