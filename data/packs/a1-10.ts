// A1 · 10 Cơ thể và sức khỏe. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Körper|der|-|cơ thể|Sport ist gut für den {Körper}.|Thể thao tốt cho cơ thể.|
n|Kopf|der|¨-e|cái đầu|Mein {Kopf} tut weh.|Tôi đau đầu.|
n|Haar|das|-e|tóc|Sie hat lange {Haare}.|Cô ấy có tóc dài.|Thường dùng số nhiều.
n|Auge|das|-n|con mắt|Er hat blaue {Augen}.|Anh ấy có mắt xanh.|
n|Ohr|das|-en|cái tai|Mein {Ohr} tut weh.|Tôi đau tai.|
n|Nase|die|-n|cái mũi|Meine {Nase} läuft.|Tôi bị sổ mũi.|
n|Mund|der|¨-er|cái miệng|Mach bitte den {Mund} auf.|Hãy há miệng ra.|
n|Hals|der|¨-e|cổ, họng|Mein {Hals} tut weh.|Tôi đau họng.|Halsschmerzen = đau họng.
n|Arm|der|-e|cánh tay|Mein {Arm} ist gebrochen.|Tay tôi bị gãy.|
n|Hand|die|¨-e|bàn tay|Wasch dir die {Hände}!|Rửa tay đi!|
n|Finger|der|-|ngón tay|Ich habe mich in den {Finger} geschnitten.|Tôi bị đứt tay.|
n|Bein|das|-e|cái chân|Mein {Bein} tut weh.|Tôi đau chân.|
n|Fuß|der|¨-e|bàn chân|Meine {Füße} sind kalt.|Chân tôi lạnh.|
n|Bauch|der|¨-e|bụng|Mein {Bauch} tut weh.|Tôi đau bụng.|Bauchschmerzen = đau bụng.
n|Rücken|der|-|lưng|Mein {Rücken} tut weh.|Tôi đau lưng.|
n|Arzt|der|¨-e|bác sĩ (nam)|Ich gehe heute zum {Arzt}.|Hôm nay tôi đi khám bác sĩ.|Nữ: die Ärztin, -nen.
n|Praxis|die|Praxen|phòng khám|Die {Praxis} öffnet um acht.|Phòng khám mở cửa lúc tám giờ.|
n|Medikament|das|-e|thuốc|Nehmen Sie das {Medikament} dreimal täglich.|Uống thuốc này ba lần mỗi ngày.|
n|Tablette|die|-n|viên thuốc|Ich nehme eine {Tablette}.|Tôi uống một viên thuốc.|
n|Fieber|das||sốt|Das Kind hat {Fieber}.|Đứa bé bị sốt.|
n|Schmerz|der|-en|cơn đau|Wo haben Sie {Schmerzen}?|Ông/bà đau ở đâu?|Thường dùng số nhiều.
n|Erkältung|die|-en|cảm lạnh|Ich habe eine {Erkältung}.|Tôi bị cảm lạnh.|
n|Husten|der||ho|Der {Husten} ist schlimm.|Ho rất nặng.|
n|Schnupfen|der||sổ mũi|Ich habe {Schnupfen}.|Tôi bị sổ mũi.|
n|Gesundheit|die||sức khỏe|{Gesundheit}!|Chúc sức khỏe! (khi ai đó hắt hơi)|
n|Krankmeldung|die|-en|giấy báo ốm|Ich brauche eine {Krankmeldung} für die Arbeit.|Tôi cần giấy báo ốm cho chỗ làm.|
n|Rezept|das|-e|đơn thuốc; công thức nấu ăn|Der Arzt schreibt ein {Rezept}.|Bác sĩ kê đơn thuốc.|
n|Versichertenkarte|die|-n|thẻ bảo hiểm y tế|Haben Sie Ihre {Versichertenkarte} dabei?|Ông/bà có mang thẻ bảo hiểm không?|
v|wehtun|||đau|Mein Kopf {tut} weh.|Tôi đau đầu.|Động từ tách: es tut weh, hat wehgetan
v|müssen|||phải|Du {musst} im Bett bleiben.|Bạn phải nằm nghỉ trên giường.|ich muss, du musst, er muss
v|dürfen|||được phép|Sie {dürfen} nicht rauchen.|Ông/bà không được hút thuốc.|ich darf, du darfst, er darf
v|sollen|||nên, phải (theo lời người khác)|Ich {soll} viel Wasser trinken.|Tôi nên uống nhiều nước.|ich soll, du sollst, er soll
v|helfen|||giúp đỡ|Können Sie mir {helfen}?|Ông/bà giúp tôi được không?|du hilfst, er hilft, hat geholfen; helfen + Dativ
v|rauchen|||hút thuốc|Er {raucht} nicht mehr.|Anh ấy không hút thuốc nữa.|er raucht, hat geraucht
v|liegen bleiben|||nằm nghỉ|Heute musst du im Bett {liegen bleiben}.|Hôm nay bạn phải nằm nghỉ trên giường.|er bleibt liegen, ist liegen geblieben
v|sich ausruhen|||nghỉ ngơi|Du musst {dich ausruhen}.|Bạn phải nghỉ ngơi.|Động từ tách, phản thân: er ruht sich aus, hat sich ausgeruht
adj|krank|||ốm|Ich bin seit gestern {krank}.|Tôi ốm từ hôm qua.|
adj|gesund|||khỏe mạnh; lành mạnh|Gemüse ist {gesund}.|Rau củ tốt cho sức khỏe.|
adj|schlecht|||tồi, xấu; khó chịu (người)|Mir ist {schlecht}.|Tôi thấy buồn nôn.|Mir ist schlecht = tôi buồn nôn.
adj|gut|||tốt|Das Medikament hilft {gut}.|Thuốc này rất hiệu quả.|so sánh: besser, am besten
adj|schlimm|||tệ, nghiêm trọng|Ist es {schlimm}?|Có nghiêm trọng không?|
adj|stark|||mạnh|Ich habe {starke} Kopfschmerzen.|Tôi đau đầu dữ dội.|
adv|täglich|||hằng ngày|Nehmen Sie die Tabletten zweimal {täglich}.|Uống thuốc hai lần mỗi ngày.|
adv|wieder|||lại, trở lại|Ich bin {wieder} gesund.|Tôi đã khỏe lại.|
adv|seit|||từ (khi), đã … (thời gian)|Ich habe {seit} drei Tagen Fieber.|Tôi bị sốt đã ba ngày.|seit + Dativ.
p|Gute Besserung|||chúc mau khỏe|{Gute Besserung}!|Chúc mau khỏe!|
p|Was fehlt Ihnen?|||ông/bà bị làm sao?|Guten Tag, {was fehlt Ihnen}?|Xin chào, ông/bà bị làm sao?|Câu bác sĩ hay hỏi.
p|Mir geht es nicht gut|||tôi không khỏe|Ich bleibe zu Hause, {mir geht es nicht gut}.|Tôi ở nhà, tôi không khỏe.|
g|müssen / dürfen / sollen|||động từ khuyết thiếu chỉ nghĩa vụ và cho phép|Du {musst} zum Arzt gehen.|Bạn phải đi khám bác sĩ.|Ngôi ich và er giống nhau, không có đuôi: ich muss, er muss.
g|nicht dürfen = không được phép|||cấm|Hier {darf} man nicht parken.|Ở đây không được đỗ xe.|nicht müssen = không cần phải (khác với không được phép).
g|Mệnh lệnh cách số nhiều ihr|||yêu cầu nhiều người thân quen|{Bleibt} bitte ruhig!|Các con giữ trật tự nhé!|ihr bleibt → Bleibt!
g|Mir tut … weh|||nói chỗ đau|Mir {tut} der Rücken weh.|Tôi đau lưng.|Số nhiều: Mir tun die Füße weh.
n|Hilfe|die|-n|sự giúp đỡ|Ich brauche {Hilfe}.|Tôi cần giúp đỡ.|
`;
export default pack;
