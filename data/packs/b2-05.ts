// B2 · 05 Môi trường và năng lượng. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Energiewende|die||chuyển đổi năng lượng|Die {Energiewende} kostet viel Geld.|Chuyển đổi năng lượng tốn nhiều tiền.|
n|Kernkraft|die||năng lượng hạt nhân|Deutschland ist aus der {Kernkraft} ausgestiegen.|Đức đã từ bỏ năng lượng hạt nhân.|
n|Kohle|die|-n|than|Der Strom wird noch aus {Kohle} erzeugt.|Điện vẫn được sản xuất từ than.|
n|Erdgas|das||khí đốt tự nhiên|Viele Häuser heizen mit {Erdgas}.|Nhiều nhà sưởi bằng khí đốt.|
n|Solaranlage|die|-n|hệ thống điện mặt trời|Auf dem Dach ist eine {Solaranlage}.|Trên mái nhà có hệ thống điện mặt trời.|
n|Windrad|das|¨-er|cối xay gió (phát điện)|An der Küste stehen viele {Windräder}.|Ven biển có nhiều cối xay gió.|
n|Stromverbrauch|der||mức tiêu thụ điện|Unser {Stromverbrauch} ist gesunken.|Lượng điện tiêu thụ của chúng tôi đã giảm.|
n|Energieeffizienz|die||hiệu quả năng lượng|Neue Geräte haben eine hohe {Energieeffizienz}.|Thiết bị mới có hiệu quả năng lượng cao.|
n|Emission|die|-en|khí thải|Die {Emissionen} müssen sinken.|Lượng khí thải phải giảm.|
n|Klimaschutz|der||bảo vệ khí hậu|Der {Klimaschutz} ist eine globale Aufgabe.|Bảo vệ khí hậu là nhiệm vụ toàn cầu.|
n|Klimaziel|das|-e|mục tiêu khí hậu|Die {Klimaziele} sind ehrgeizig.|Các mục tiêu khí hậu đầy tham vọng.|
n|Nachhaltigkeit|die||tính bền vững|{Nachhaltigkeit} ist ein wichtiges Thema.|Tính bền vững là một chủ đề quan trọng.|
n|Umweltbelastung|die|-en|gánh nặng môi trường|Der Flugverkehr verursacht eine hohe {Umweltbelastung}.|Giao thông hàng không gây gánh nặng môi trường lớn.|
n|Fußabdruck|der|¨-e|dấu chân (carbon)|Wie groß ist dein ökologischer {Fußabdruck}?|Dấu chân sinh thái của bạn lớn cỡ nào?|
n|Abfallvermeidung|die||giảm thiểu rác thải|{Abfallvermeidung} beginnt beim Einkauf.|Giảm thiểu rác bắt đầu từ việc mua sắm.|
n|Wasserknappheit|die||tình trạng khan hiếm nước|In vielen Regionen herrscht {Wasserknappheit}.|Nhiều vùng thiếu nước.|
n|Naturkatastrophe|die|-n|thiên tai|Die Zahl der {Naturkatastrophen} nimmt zu.|Số thiên tai ngày càng tăng.|
n|Ökosystem|das|-e|hệ sinh thái|Das {Ökosystem} ist empfindlich.|Hệ sinh thái rất nhạy cảm.|
n|Tierart|die|-en|loài động vật|Diese {Tierart} ist vom Aussterben bedroht.|Loài này đứng trước nguy cơ tuyệt chủng.|
n|Verursacher|der|-|bên gây ra|Die {Verursacher} sollen zahlen.|Bên gây ra phải trả tiền.|
n|Umweltaktivist|der|-en|nhà hoạt động môi trường|Die {Umweltaktivisten} demonstrieren vor dem Parlament.|Các nhà hoạt động môi trường biểu tình trước quốc hội.|n-Deklination.
n|Abkommen|das|-|hiệp định|Das {Abkommen} wurde von 190 Staaten unterzeichnet.|Hiệp định được 190 quốc gia ký.|
n|Verbot|das|-e|lệnh cấm|Es gibt ein {Verbot} für Plastiktüten.|Có lệnh cấm túi ni lông.|
n|Anreiz|der|-e|sự khuyến khích|Der Staat schafft {Anreize} für Elektroautos.|Nhà nước tạo ưu đãi cho ô tô điện.|
v|ausstoßen|||thải ra|Autos {stoßen} viel CO2 aus.|Ô tô thải ra nhiều CO2.|Động từ tách: du stößt aus, er stößt aus, stieß aus, hat ausgestoßen
v|eindämmen|||kiềm chế|Wir müssen den Klimawandel {eindämmen}.|Chúng ta phải kiềm chế biến đổi khí hậu.|Động từ tách: er dämmt ein, hat eingedämmt
v|verringern|||giảm bớt|Wir wollen den Verbrauch {verringern}.|Chúng tôi muốn giảm mức tiêu thụ.|er verringert, hat verringert
v|belasten|||gây gánh nặng|Abgase {belasten} die Umwelt.|Khí thải gây hại cho môi trường.|er belastet, hat belastet
v|bewahren|||gìn giữ|Wir müssen die Natur {bewahren}.|Chúng ta phải gìn giữ thiên nhiên.|er bewahrt, hat bewahrt
v|umrüsten|||chuyển đổi (thiết bị)|Die Heizung wird auf Wärmepumpe {umgerüstet}.|Lò sưởi được chuyển sang bơm nhiệt.|Động từ tách: er rüstet um, hat umgerüstet
v|subventionieren|||trợ giá|Der Staat {subventioniert} Solaranlagen.|Nhà nước trợ giá hệ thống điện mặt trời.|er subventioniert, hat subventioniert
v|warnen|||cảnh báo|Experten {warnen} vor den Folgen.|Các chuyên gia cảnh báo về hậu quả.|er warnt, hat gewarnt; vor + Dativ
v|appellieren|||kêu gọi|Die Regierung {appelliert} an die Bürger.|Chính phủ kêu gọi người dân.|er appelliert, hat appelliert; an + Akk
v|gefährden|||gây nguy hiểm|Die Abholzung {gefährdet} viele Arten.|Việc phá rừng gây nguy hiểm cho nhiều loài.|er gefährdet, hat gefährdet
v|ausbauen|||mở rộng|Die Windkraft soll {ausgebaut} werden.|Điện gió cần được mở rộng.|Động từ tách: er baut aus, hat ausgebaut
adj|klimaneutral|||trung hòa khí hậu|Die Stadt will bis 2040 {klimaneutral} sein.|Thành phố muốn trung hòa khí hậu vào năm 2040.|
adj|fossil|||hóa thạch|{Fossile} Brennstoffe schaden dem Klima.|Nhiên liệu hóa thạch gây hại cho khí hậu.|
adj|umweltschädlich|||gây hại môi trường|Plastik ist {umweltschädlich}.|Nhựa gây hại cho môi trường.|
adj|energiesparend|||tiết kiệm năng lượng|Wir kaufen {energiesparende} Lampen.|Chúng tôi mua đèn tiết kiệm năng lượng.|
adj|unumkehrbar|||không thể đảo ngược|Manche Schäden sind {unumkehrbar}.|Một số thiệt hại không thể đảo ngược.|
adj|verantwortlich|||chịu trách nhiệm|Wer ist dafür {verantwortlich}?|Ai chịu trách nhiệm cho việc đó?|verantwortlich für + Akk
adj|verbindlich|||có tính ràng buộc|Die Ziele sind nicht {verbindlich}.|Các mục tiêu không có tính ràng buộc.|
adj|drastisch|||quyết liệt|Wir brauchen {drastische} Maßnahmen.|Chúng ta cần các biện pháp quyết liệt.|
adv|dennoch|||tuy vậy|Es ist teuer, {dennoch} lohnt es sich.|Tuy đắt, nhưng vẫn đáng.|dennoch ở vị trí 1 → động từ ngay sau.
adv|folglich|||do đó|Der Verbrauch sinkt, {folglich} sinken die Kosten.|Mức tiêu thụ giảm, do đó chi phí giảm.|
adv|infolgedessen|||vì thế, kết quả là|Es regnete kaum, {infolgedessen} gab es eine Dürre.|Hầu như không mưa, kết quả là có hạn hán.|
p|einen Beitrag leisten|||đóng góp|Jeder kann {einen Beitrag leisten}.|Ai cũng có thể đóng góp.|
p|Maßnahmen ergreifen|||áp dụng biện pháp|Die Regierung muss {Maßnahmen ergreifen}.|Chính phủ phải áp dụng biện pháp.|
p|aus der Kohle aussteigen|||từ bỏ điện than|Deutschland will {aus der Kohle aussteigen}.|Đức muốn từ bỏ điện than.|
p|auf Kosten der Umwelt|||đánh đổi bằng môi trường|Billige Produkte entstehen oft {auf Kosten der Umwelt}.|Hàng rẻ thường được làm ra bằng cái giá của môi trường.|
g|Konjunktiv I: lời nói gián tiếp|||văn bản tin tức, báo cáo|Der Minister sagte, er {habe} keine Zeit.|Bộ trưởng nói rằng ông ấy không có thời gian.|Ngôi 3 số ít: er habe, sei, werde, könne; khi trùng Präsens thì dùng Konjunktiv II.
g|Konjunktiv I của sein|||sei, seien|Experten sagen, die Lage {sei} ernst.|Các chuyên gia nói tình hình nghiêm trọng.|ich sei, du sei(e)st, er sei, wir seien, sie seien.
g|dennoch / folglich: nối ý|||trạng từ nối ở vị trí 1|Die Kosten sind hoch, dennoch {investiert} die Stadt.|Chi phí cao, tuy vậy thành phố vẫn đầu tư.|Trạng từ nối chiếm vị trí 1, động từ đứng ngay sau.
g|Câu điều kiện không có wenn|||động từ đứng đầu|{Würden} alle mitmachen, wäre das Problem gelöst.|Nếu mọi người cùng tham gia thì vấn đề đã được giải quyết.|Bỏ wenn → động từ chia lên đầu câu phụ.
n|Erderhitzung|die||sự nóng lên của trái đất|Die {Erderhitzung} ist menschengemacht.|Sự nóng lên của trái đất do con người gây ra.|
n|Hitzewelle|die|-n|đợt nắng nóng|Die {Hitzewelle} dauerte zwei Wochen.|Đợt nắng nóng kéo dài hai tuần.|
n|Starkregen|der||mưa lớn|Nach dem {Starkregen} waren die Straßen überflutet.|Sau trận mưa lớn đường phố bị ngập.|
n|Waldbrand|der|¨-e|cháy rừng|Der {Waldbrand} zerstörte tausende Hektar.|Vụ cháy rừng thiêu rụi hàng nghìn héc-ta.|
n|Gletscher|der|-|sông băng|Die {Gletscher} in den Alpen schmelzen.|Các sông băng ở dãy Alps đang tan.|
n|Wärmepumpe|die|-n|bơm nhiệt|Wir heizen mit einer {Wärmepumpe}.|Chúng tôi sưởi bằng bơm nhiệt.|
n|Dämmung|die|-en|lớp cách nhiệt|Eine gute {Dämmung} spart Energie.|Lớp cách nhiệt tốt tiết kiệm năng lượng.|
n|Biomüll|der||rác hữu cơ|Kartoffelschalen gehören in den {Biomüll}.|Vỏ khoai tây bỏ vào thùng rác hữu cơ.|
n|Kreislaufwirtschaft|die||kinh tế tuần hoàn|Die {Kreislaufwirtschaft} vermeidet Abfall.|Kinh tế tuần hoàn tránh rác thải.|
n|Mikroplastik|das||vi nhựa|Im Meer findet man viel {Mikroplastik}.|Trong biển có nhiều vi nhựa.|
n|Einwegprodukt|das|-e|sản phẩm dùng một lần|{Einwegprodukte} aus Plastik sind verboten.|Sản phẩm nhựa dùng một lần bị cấm.|
n|Umweltzone|die|-n|vùng hạn chế khí thải|In der {Umweltzone} dürfen alte Autos nicht fahren.|Ô tô cũ không được đi vào vùng hạn chế khí thải.|
n|Tempolimit|das|-s|giới hạn tốc độ|Ein {Tempolimit} würde CO2 sparen.|Giới hạn tốc độ sẽ giảm CO2.|
n|Klimaanpassung|die||thích ứng với khí hậu|Städte investieren in {Klimaanpassung}.|Các thành phố đầu tư vào thích ứng khí hậu.|
n|Umweltbewegung|die|-en|phong trào môi trường|Die {Umweltbewegung} ist weltweit aktiv.|Phong trào môi trường hoạt động khắp thế giới.|
n|Verschwendung|die||sự lãng phí|Die {Verschwendung} von Lebensmitteln ist ein Skandal.|Lãng phí thực phẩm là một vụ bê bối.|
n|Lebensmittelverschwendung|die||lãng phí thực phẩm|Gegen {Lebensmittelverschwendung} kann jeder etwas tun.|Ai cũng có thể làm gì đó chống lãng phí thực phẩm.|
n|Energiequelle|die|-n|nguồn năng lượng|Sonne ist eine saubere {Energiequelle}.|Mặt trời là nguồn năng lượng sạch.|
n|Stromnetz|das|-e|lưới điện|Das {Stromnetz} muss ausgebaut werden.|Lưới điện cần được mở rộng.|
v|aufheizen|||làm nóng lên|Die Städte {heizen} sich im Sommer stark auf.|Các thành phố nóng lên mạnh vào mùa hè.|Động từ tách: er heizt auf, hat aufgeheizt
v|überfluten|||làm ngập|Der Fluss hat die Stadt {überflutet}.|Con sông đã làm ngập thành phố.|er überflutet, hat überflutet
v|vertrocknen|||khô héo|Die Pflanzen sind {vertrocknet}.|Cây cối đã khô héo.|er vertrocknet, ist vertrocknet
v|aufforsten|||trồng rừng|Nach dem Brand wird der Wald {aufgeforstet}.|Sau vụ cháy rừng được trồng lại.|Động từ tách: er forstet auf, hat aufgeforstet
v|einsparen|||tiết kiệm (cắt giảm)|Wir können viel Energie {einsparen}.|Chúng ta có thể tiết kiệm nhiều năng lượng.|Động từ tách: er spart ein, hat eingespart
v|dämmen|||cách nhiệt|Das Haus wurde neu {gedämmt}.|Ngôi nhà được làm lại cách nhiệt.|er dämmt, hat gedämmt
v|kompensieren|||bù đắp|Man kann den CO2-Ausstoß {kompensieren}.|Có thể bù đắp lượng CO2 thải ra.|er kompensiert, hat kompensiert
v|umdenken|||thay đổi tư duy|Wir müssen alle {umdenken}.|Tất cả chúng ta phải thay đổi tư duy.|Động từ tách: er denkt um, dachte um, hat umgedacht
adj|CO2-neutral|||trung hòa carbon|Die Firma produziert {CO2-neutral}.|Công ty sản xuất trung hòa carbon.|
adj|wiederverwertbar|||tái chế được|Die Verpackung ist {wiederverwertbar}.|Bao bì có thể tái chế.|
adj|biologisch abbaubar|||phân hủy sinh học|Die Tüte ist {biologisch abbaubar}.|Túi có thể phân hủy sinh học.|
adj|energieintensiv|||tiêu tốn nhiều năng lượng|Die Stahlproduktion ist sehr {energieintensiv}.|Sản xuất thép tiêu tốn nhiều năng lượng.|
adj|alarmierend|||đáng báo động|Die Zahlen sind {alarmierend}.|Các con số đáng báo động.|
adj|bedenklich|||đáng lo ngại|Die Entwicklung ist {bedenklich}.|Diễn biến này đáng lo ngại.|
adj|zukunftsfähig|||bền vững cho tương lai|Wir brauchen {zukunftsfähige} Lösungen.|Chúng ta cần giải pháp bền vững cho tương lai.|
adj|menschengemacht|||do con người gây ra|Der Klimawandel ist {menschengemacht}.|Biến đổi khí hậu do con người gây ra.|
p|mit gutem Beispiel vorangehen|||làm gương|Die Stadt {geht} mit gutem Beispiel voran.|Thành phố làm gương.|
p|auf erneuerbare Energien setzen|||đặt cược vào năng lượng tái tạo|Das Land {setzt} auf erneuerbare Energien.|Đất nước đặt cược vào năng lượng tái tạo.|
p|Verantwortung tragen|||chịu trách nhiệm|Die Industrieländer {tragen} eine große Verantwortung.|Các nước công nghiệp chịu trách nhiệm lớn.|
p|den Gürtel enger schnallen|||thắt lưng buộc bụng|In der Krise müssen alle {den Gürtel enger schnallen}.|Trong khủng hoảng mọi người phải thắt lưng buộc bụng.|
n|Klimakonferenz|die|-en|hội nghị khí hậu|Auf der {Klimakonferenz} wurden neue Ziele beschlossen.|Hội nghị khí hậu đã thông qua các mục tiêu mới.|
n|Treibhauseffekt|der||hiệu ứng nhà kính|Der {Treibhauseffekt} erwärmt die Erde.|Hiệu ứng nhà kính làm trái đất nóng lên.|
n|Ozonschicht|die||tầng ô-zôn|Die {Ozonschicht} schützt uns vor UV-Strahlen.|Tầng ô-zôn bảo vệ chúng ta khỏi tia UV.|
adj|ressourcenschonend|||tiết kiệm tài nguyên|Wir produzieren {ressourcenschonend}.|Chúng tôi sản xuất tiết kiệm tài nguyên.|
v|abmildern|||giảm nhẹ|Bäume können die Hitze {abmildern}.|Cây xanh có thể làm dịu cái nóng.|Động từ tách: er mildert ab, hat abgemildert
p|ins Gewicht fallen|||có trọng lượng, quan trọng|Jeder Beitrag {fällt} ins Gewicht.|Mỗi đóng góp đều có ý nghĩa.|
p|den Planeten retten|||cứu hành tinh|Gemeinsam können wir {den Planeten retten}.|Cùng nhau chúng ta có thể cứu hành tinh.|
`;
export default pack;
