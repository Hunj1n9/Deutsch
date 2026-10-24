// B1 · 05 Tiền bạc và tiêu dùng. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Girokonto|das|-konten|tài khoản thanh toán|Für das Gehalt brauchen Sie ein {Girokonto}.|Để nhận lương ông/bà cần tài khoản thanh toán.|
n|Überweisung|die|-en|chuyển khoản|Die {Überweisung} dauert einen Tag.|Chuyển khoản mất một ngày.|
n|Geldautomat|der|-en|máy rút tiền|Wo ist der nächste {Geldautomat}?|Máy rút tiền gần nhất ở đâu?|n-Deklination.
n|Geheimzahl|die|-en|mã PIN|Ich habe meine {Geheimzahl} vergessen.|Tôi quên mã PIN.|
n|Gebühr|die|-en|phí|Das Konto kostet keine {Gebühren}.|Tài khoản không mất phí.|
n|Zins|der|-en|lãi suất|Die {Zinsen} sind gerade sehr niedrig.|Lãi suất hiện rất thấp.|Thường dùng số nhiều.
n|Kredit|der|-e|khoản vay|Wir brauchen einen {Kredit} für das Haus.|Chúng tôi cần vay tiền mua nhà.|
n|Schulden|die||nợ|Er hat viele {Schulden}.|Anh ấy nợ rất nhiều.|Chỉ dùng số nhiều.
n|Einkommen|das|-|thu nhập|Mein {Einkommen} reicht nicht.|Thu nhập của tôi không đủ.|
n|Ausgabe|die|-n|khoản chi|Die {Ausgaben} für Miete sind hoch.|Chi phí tiền nhà cao.|
n|Einnahme|die|-n|khoản thu|Die {Einnahmen} sind gestiegen.|Các khoản thu đã tăng.|
n|Haushaltsbuch|das|¨-er|sổ chi tiêu|Ich führe ein {Haushaltsbuch}.|Tôi ghi sổ chi tiêu.|
n|Budget|das|-s|ngân sách|Mein {Budget} für den Urlaub ist klein.|Ngân sách cho kỳ nghỉ của tôi ít.|
n|Konsum|der||tiêu dùng|Der {Konsum} hat Folgen für die Umwelt.|Tiêu dùng có hậu quả với môi trường.|
n|Verbraucher|der|-|người tiêu dùng|{Verbraucher} sollten Preise vergleichen.|Người tiêu dùng nên so sánh giá.|
n|Ware|die|-n|hàng hóa|Die {Ware} kommt morgen an.|Hàng sẽ đến vào ngày mai.|
n|Lieferung|die|-en|việc giao hàng|Die {Lieferung} ist kostenlos.|Giao hàng miễn phí.|
n|Bestellung|die|-en|đơn đặt hàng|Ihre {Bestellung} ist eingegangen.|Đơn hàng của ông/bà đã được nhận.|
n|Reklamation|die|-en|khiếu nại (hàng hóa)|Ich habe eine {Reklamation}.|Tôi có một khiếu nại.|
n|Garantie|die|-n|bảo hành|Das Gerät hat zwei Jahre {Garantie}.|Thiết bị bảo hành hai năm.|
n|Quittung|die|-en|biên nhận|Kann ich bitte eine {Quittung} haben?|Cho tôi xin biên nhận được không?|
n|Versicherung|die|-en|bảo hiểm|Die {Versicherung} bezahlt den Schaden.|Bảo hiểm chi trả thiệt hại.|
n|Steuer|die|-n|thuế|Wir zahlen viele {Steuern}.|Chúng tôi trả nhiều thuế.|das Steuer = vô lăng.
n|Werbeprospekt|der|-e|tờ quảng cáo|Im Briefkasten liegen viele {Werbeprospekte}.|Trong hộp thư có nhiều tờ quảng cáo.|
n|Schnäppchen|das|-|món hời|Die Jacke war ein echtes {Schnäppchen}.|Chiếc áo khoác là một món hời thực sự.|
n|Online-Shop|der|-s|cửa hàng trực tuyến|Ich bestelle oft im {Online-Shop}.|Tôi hay đặt hàng ở cửa hàng trực tuyến.|
n|Kaufentscheidung|die|-en|quyết định mua|Werbung beeinflusst unsere {Kaufentscheidungen}.|Quảng cáo ảnh hưởng đến quyết định mua của chúng ta.|
n|Wert|der|-e|giá trị|Das Haus hat einen hohen {Wert}.|Ngôi nhà có giá trị cao.|
n|Münze|die|-n|đồng xu|Ich habe nur {Münzen} dabei.|Tôi chỉ mang theo tiền xu.|
n|Schein|der|-e|tờ tiền giấy|Haben Sie den {Schein} kleiner?|Ông/bà có tiền lẻ hơn không?|
v|überweisen|||chuyển khoản|Ich {überweise} die Miete am Monatsanfang.|Tôi chuyển tiền thuê nhà vào đầu tháng.|er überweist, überwies, hat überwiesen
v|abheben|||rút (tiền)|Ich muss Geld {abheben}.|Tôi phải rút tiền.|Động từ tách: er hebt ab, hob ab, hat abgehoben
v|einzahlen|||nộp tiền vào|Ich {zahle} 200 Euro auf mein Konto ein.|Tôi nộp 200 euro vào tài khoản.|Động từ tách: er zahlt ein, hat eingezahlt
v|sich leisten|||có đủ tiền (mua)|Das kann ich mir nicht {leisten}.|Tôi không đủ tiền cho cái đó.|er leistet sich, hat sich geleistet (+ Dativ phản thân)
v|reklamieren|||khiếu nại|Ich möchte die Lieferung {reklamieren}.|Tôi muốn khiếu nại đơn hàng.|er reklamiert, hat reklamiert
v|liefern|||giao hàng|Wir {liefern} innerhalb von drei Tagen.|Chúng tôi giao trong vòng ba ngày.|er liefert, hat geliefert
v|erstatten|||hoàn trả|Wir {erstatten} Ihnen den Kaufpreis.|Chúng tôi hoàn trả tiền mua hàng.|er erstattet, hat erstattet
v|versichern|||bảo hiểm; cam đoan|Ist das Auto {versichert}?|Xe có bảo hiểm không?|er versichert, hat versichert
v|verschwenden|||lãng phí|Wir {verschwenden} zu viel Geld.|Chúng ta lãng phí quá nhiều tiền.|er verschwendet, hat verschwendet
v|beeinflussen|||ảnh hưởng|Werbung {beeinflusst} Kinder stark.|Quảng cáo ảnh hưởng mạnh đến trẻ em.|er beeinflusst, hat beeinflusst
v|sich lohnen|||đáng|Es {lohnt} sich, Preise zu vergleichen.|So sánh giá thì đáng.|es lohnt sich, hat sich gelohnt
v|festlegen|||ấn định|Wir müssen ein Budget {festlegen}.|Chúng ta phải đặt ra ngân sách.|Động từ tách: er legt fest, hat festgelegt
adj|bar|||bằng tiền mặt|Zahlen Sie {bar} oder mit Karte?|Ông/bà trả tiền mặt hay thẻ?|
adj|sparsam|||tiết kiệm|Meine Oma ist sehr {sparsam}.|Bà tôi rất tiết kiệm.|
adj|großzügig|||hào phóng|Mein Onkel ist {großzügig}.|Chú tôi hào phóng.|
adj|gebraucht|||đã qua sử dụng|Ich kaufe ein {gebrauchtes} Fahrrad.|Tôi mua một chiếc xe đạp cũ.|
adj|wertvoll|||quý giá|Der Ring ist sehr {wertvoll}.|Chiếc nhẫn rất quý giá.|
adj|monatlich|||hằng tháng|Die {monatlichen} Kosten sind hoch.|Chi phí hằng tháng cao.|
adj|insgesamt|||tổng cộng|{Insgesamt} kostet das 300 Euro.|Tổng cộng là 300 euro.|
adj|überflüssig|||thừa, không cần thiết|Viele Käufe sind {überflüssig}.|Nhiều món mua sắm là không cần thiết.|
adj|nachhaltig|||bền vững|Ich versuche, {nachhaltig} einzukaufen.|Tôi cố mua sắm một cách bền vững.|
adj|knapp|||eo hẹp, sít sao|Am Monatsende ist das Geld {knapp}.|Cuối tháng tiền eo hẹp.|
adj|pleite|||cháy túi|Ich bin total {pleite}.|Tôi cháy túi rồi.|Văn nói.
adj|kostenpflichtig|||mất phí|Die Lieferung ist {kostenpflichtig}.|Giao hàng có tính phí.|
p|in Raten zahlen|||trả góp|Ich zahle den Fernseher {in Raten}.|Tôi trả góp chiếc TV.|
p|Geld sparen|||tiết kiệm tiền|Ich will mehr {Geld sparen}.|Tôi muốn tiết kiệm nhiều tiền hơn.|
p|über seine Verhältnisse leben|||sống vượt khả năng tài chính|Viele junge Leute {leben} über ihre Verhältnisse.|Nhiều người trẻ sống vượt khả năng tài chính.|
p|im Sonderangebot|||đang giảm giá đặc biệt|Die Kaffeemaschine ist {im Sonderangebot}.|Máy pha cà phê đang giảm giá đặc biệt.|
g|Bị động Präsens: werden + Partizip II|||việc gì đó được làm|Die Ware {wird} morgen geliefert.|Hàng sẽ được giao vào ngày mai.|werden chia theo chủ ngữ; người thực hiện (nếu cần) với von + Dativ.
g|Bị động với động từ khuyết thiếu|||muss/kann + Partizip II + werden|Die Rechnung muss bis Freitag bezahlt {werden}.|Hóa đơn phải được thanh toán trước thứ Sáu.|Động từ khuyết thiếu ở vị trí 2, cuối câu: Partizip II + werden.
g|man thay cho bị động|||chủ ngữ chung chung|Hier {kann} man mit Karte zahlen.|Ở đây có thể trả bằng thẻ.|man + động từ chủ động = nghĩa bị động.
g|Đuôi tính từ: ôn tập ba loại|||xác định, không xác định, không mạo từ|Ich suche ein {günstiges} Angebot.|Tôi tìm một ưu đãi giá tốt.|Sau ein ở giống trung: -es; sau das: -e; không mạo từ: -es.
n|Kontoauszug|der|¨-e|sao kê tài khoản|Auf dem {Kontoauszug} sehe ich alle Ausgaben.|Trên sao kê tôi thấy mọi khoản chi.|
n|Lastschrift|die|-en|ghi nợ tự động|Die Miete wird per {Lastschrift} abgebucht.|Tiền thuê nhà được trừ tự động.|
n|Dauerauftrag|der|¨-e|lệnh chuyển khoản định kỳ|Ich richte einen {Dauerauftrag} ein.|Tôi lập lệnh chuyển khoản định kỳ.|
n|Ersparnis|die|-se|khoản tiết kiệm|Unsere {Ersparnisse} reichen für ein Auto.|Tiền tiết kiệm của chúng tôi đủ mua ô tô.|
n|Anschaffung|die|-en|việc mua sắm (món lớn)|Ein Kühlschrank ist eine teure {Anschaffung}.|Tủ lạnh là một món đồ đắt tiền.|
n|Kosten|die||chi phí|Die {Kosten} sind gestiegen.|Chi phí đã tăng.|Chỉ dùng số nhiều.
n|Kassenzettel|der|-|hóa đơn mua hàng|Wirf den {Kassenzettel} nicht weg.|Đừng vứt hóa đơn đi.|
n|Umtausch|der|-e|việc đổi hàng|Ein {Umtausch} ist nur mit Kassenbon möglich.|Chỉ đổi hàng được khi có biên lai.|
n|Verbraucherzentrale|die|-n|trung tâm bảo vệ người tiêu dùng|Die {Verbraucherzentrale} hilft bei Problemen.|Trung tâm bảo vệ người tiêu dùng giúp khi có vấn đề.|
n|Händler|der|-|người bán, nhà buôn|Der {Händler} gibt mir Rabatt.|Người bán giảm giá cho tôi.|
v|abbuchen|||trừ tiền (từ tài khoản)|Das Geld wird am Ersten {abgebucht}.|Tiền được trừ vào ngày mùng một.|Động từ tách: er bucht ab, hat abgebucht
v|sich verschulden|||mắc nợ|Viele junge Leute {verschulden} sich.|Nhiều người trẻ mắc nợ.|er verschuldet sich, hat sich verschuldet
v|feilschen|||mặc cả|Auf dem Markt kann man {feilschen}.|Ở chợ có thể mặc cả.|er feilscht, hat gefeilscht
v|verdoppeln|||tăng gấp đôi|Die Preise haben sich {verdoppelt}.|Giá đã tăng gấp đôi.|er verdoppelt, hat verdoppelt
v|anlegen|||đầu tư (tiền)|Er {legt} sein Geld in Aktien an.|Anh ấy đầu tư tiền vào cổ phiếu.|Động từ tách: er legt an, hat angelegt
adj|verschuldet|||mắc nợ|Die Familie ist hoch {verschuldet}.|Gia đình nợ nhiều.|
adj|verschwenderisch|||hoang phí|Er ist sehr {verschwenderisch}.|Anh ta rất hoang phí.|
adj|finanziell|||về tài chính|Wir haben {finanzielle} Probleme.|Chúng tôi gặp khó khăn tài chính.|
adj|unnötig|||không cần thiết|Das war ein {unnötiger} Kauf.|Đó là một món mua không cần thiết.|
p|Geld ausgeben für|||tiêu tiền vào|Wie viel Geld {gibst} du für Kleidung aus?|Bạn tiêu bao nhiêu tiền vào quần áo?|
`;
export default pack;
