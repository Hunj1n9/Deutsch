// B2 · 04 Kinh tế và tiêu dùng. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Wirtschaft|die|-en|nền kinh tế|Die {Wirtschaft} wächst langsam.|Kinh tế tăng trưởng chậm.|
n|Wirtschaftswachstum|das||tăng trưởng kinh tế|Das {Wirtschaftswachstum} liegt bei zwei Prozent.|Tăng trưởng kinh tế ở mức hai phần trăm.|
n|Konjunktur|die|-en|tình hình kinh tế|Die {Konjunktur} hat sich abgeschwächt.|Tình hình kinh tế đã chững lại.|
n|Inflation|die|-en|lạm phát|Die {Inflation} ist gestiegen.|Lạm phát đã tăng.|
n|Rezession|die|-en|suy thoái|Viele Experten erwarten eine {Rezession}.|Nhiều chuyên gia dự báo suy thoái.|
n|Krise|die|-n|khủng hoảng|Die Firma steckt in einer {Krise}.|Công ty đang gặp khủng hoảng.|
n|Nachfrage|die|-n|nhu cầu|Die {Nachfrage} nach Elektroautos steigt.|Nhu cầu ô tô điện tăng.|
p|Angebot und Nachfrage|||cung và cầu|{Angebot und Nachfrage} bestimmen den Preis.|Cung và cầu quyết định giá cả.|
n|Wettbewerb|der|-e|cạnh tranh|Der {Wettbewerb} ist hart.|Sự cạnh tranh khốc liệt.|
n|Konkurrenz|die||đối thủ cạnh tranh; sự cạnh tranh|Die {Konkurrenz} ist günstiger.|Đối thủ rẻ hơn.|
n|Umsatz|der|¨-e|doanh thu|Der {Umsatz} ist um zehn Prozent gestiegen.|Doanh thu tăng mười phần trăm.|
n|Gewinn|der|-e|lợi nhuận|Das Unternehmen macht hohe {Gewinne}.|Công ty thu lợi nhuận cao.|
n|Verlust|der|-e|thua lỗ|Im letzten Jahr gab es einen {Verlust}.|Năm ngoái công ty bị lỗ.|
n|Zielgruppe|die|-n|nhóm khách hàng mục tiêu|Die {Zielgruppe} sind junge Leute.|Nhóm mục tiêu là người trẻ.|
n|Marke|die|-n|thương hiệu|Diese {Marke} ist sehr beliebt.|Thương hiệu này rất được ưa chuộng.|
n|Produkt|das|-e|sản phẩm|Das neue {Produkt} kommt im Mai auf den Markt.|Sản phẩm mới ra thị trường vào tháng Năm.|
n|Dienstleistung|die|-en|dịch vụ|Die Firma bietet {Dienstleistungen} an.|Công ty cung cấp dịch vụ.|
n|Herstellung|die||việc sản xuất|Die {Herstellung} ist teuer.|Việc sản xuất tốn kém.|
n|Lieferkette|die|-n|chuỗi cung ứng|Die {Lieferketten} sind unterbrochen.|Chuỗi cung ứng bị gián đoạn.|
n|Export|der|-e|xuất khẩu|Der {Export} nach Asien wächst.|Xuất khẩu sang châu Á tăng.|
n|Import|der|-e|nhập khẩu|Der {Import} von Öl ist teuer.|Nhập khẩu dầu đắt đỏ.|
n|Handel|der||thương mại|Der {Handel} zwischen beiden Ländern nimmt zu.|Thương mại giữa hai nước tăng.|
n|Aktie|die|-n|cổ phiếu|Er hat {Aktien} gekauft.|Anh ấy đã mua cổ phiếu.|
n|Investition|die|-en|khoản đầu tư|Die {Investition} hat sich gelohnt.|Khoản đầu tư đã sinh lời.|
n|Kaufkraft|die||sức mua|Die {Kaufkraft} sinkt.|Sức mua giảm.|
n|Lebenshaltungskosten|die||chi phí sinh hoạt|Die {Lebenshaltungskosten} in München sind hoch.|Chi phí sinh hoạt ở München cao.|
n|Konsumverhalten|das||hành vi tiêu dùng|Das {Konsumverhalten} hat sich verändert.|Hành vi tiêu dùng đã thay đổi.|
n|Verbraucherschutz|der||bảo vệ người tiêu dùng|Der {Verbraucherschutz} ist in der EU stark.|Bảo vệ người tiêu dùng ở EU rất mạnh.|
n|Globalisierung|die||toàn cầu hóa|Die {Globalisierung} hat Vor- und Nachteile.|Toàn cầu hóa có lợi và hại.|
n|Standort|der|-e|địa điểm (kinh doanh)|Deutschland ist ein attraktiver {Standort}.|Đức là địa điểm kinh doanh hấp dẫn.|
n|Unternehmer|der|-|doanh nhân (nam)|Der {Unternehmer} hat drei Firmen gegründet.|Doanh nhân đã thành lập ba công ty.|Nữ: die Unternehmerin.
n|Startup|das|-s|công ty khởi nghiệp|Sie arbeitet in einem {Startup}.|Cô ấy làm ở một công ty khởi nghiệp.|
v|investieren|||đầu tư|Die Firma {investiert} in neue Maschinen.|Công ty đầu tư vào máy móc mới.|er investiert, hat investiert
v|produzieren|||sản xuất|Das Werk {produziert} Autoteile.|Nhà máy sản xuất linh kiện ô tô.|er produziert, hat produziert
v|exportieren|||xuất khẩu|Vietnam {exportiert} viel Kaffee.|Việt Nam xuất khẩu nhiều cà phê.|er exportiert, hat exportiert
v|importieren|||nhập khẩu|Deutschland {importiert} Rohstoffe.|Đức nhập khẩu nguyên liệu thô.|er importiert, hat importiert
v|steigern|||nâng cao, tăng|Die Firma will den Umsatz {steigern}.|Công ty muốn tăng doanh thu.|er steigert, hat gesteigert
v|zurückgehen|||giảm sút|Die Verkaufszahlen {gehen} zurück.|Doanh số giảm.|Động từ tách: es geht zurück, ging zurück, ist zurückgegangen
v|sich auswirken|||tác động|Die Krise {wirkt} sich auf die Preise aus.|Khủng hoảng tác động đến giá cả.|Động từ tách: es wirkt sich aus, hat sich ausgewirkt; auf + Akk
v|erzielen|||đạt được|Die Firma hat einen Rekordgewinn {erzielt}.|Công ty đạt lợi nhuận kỷ lục.|er erzielt, hat erzielt
v|konkurrieren|||cạnh tranh|Viele Firmen {konkurrieren} um Kunden.|Nhiều công ty cạnh tranh giành khách hàng.|er konkurriert, hat konkurriert
v|werben|||quảng cáo|Die Firma {wirbt} im Fernsehen.|Công ty quảng cáo trên TV.|du wirbst, er wirbt, warb, hat geworben; für + Akk
v|vermarkten|||tiếp thị|Das Produkt wird online {vermarktet}.|Sản phẩm được tiếp thị trực tuyến.|er vermarktet, hat vermarktet
v|schwanken|||dao động|Die Preise {schwanken} stark.|Giá dao động mạnh.|er schwankt, hat geschwankt
v|fusionieren|||sáp nhập|Die beiden Banken {fusionieren}.|Hai ngân hàng sáp nhập.|er fusioniert, hat fusioniert
adj|rentabel|||sinh lời|Das Geschäft ist {rentabel}.|Việc kinh doanh có lãi.|
adj|konkurrenzfähig|||có khả năng cạnh tranh|Die Firma ist international {konkurrenzfähig}.|Công ty có khả năng cạnh tranh quốc tế.|
adj|profitabel|||có lợi nhuận|Das Projekt ist sehr {profitabel}.|Dự án rất có lợi nhuận.|
adj|insolvent|||mất khả năng thanh toán|Die Firma ist {insolvent}.|Công ty mất khả năng thanh toán.|
adj|global|||toàn cầu|Das ist ein {globales} Problem.|Đây là một vấn đề toàn cầu.|
adj|stabil|||ổn định|Die Preise sind {stabil}.|Giá cả ổn định.|
adj|zahlungsfähig|||có khả năng thanh toán|Der Kunde ist nicht {zahlungsfähig}.|Khách hàng không có khả năng thanh toán.|
adj|steigend|||đang tăng|Wir haben {steigende} Kosten.|Chi phí đang tăng.|
adj|sinkend|||đang giảm|Die {sinkenden} Preise freuen die Kunden.|Giá giảm làm khách hàng vui.|
p|auf den Markt bringen|||tung ra thị trường|Die Firma {bringt} ein neues Handy auf den Markt.|Công ty tung ra một chiếc điện thoại mới.|
p|in die roten Zahlen geraten|||rơi vào thua lỗ|Das Unternehmen {geriet} in die roten Zahlen.|Công ty rơi vào thua lỗ.|
p|schwarze Zahlen schreiben|||có lãi|Seit zwei Jahren {schreibt} die Firma schwarze Zahlen.|Hai năm nay công ty có lãi.|
p|Gewinn machen|||thu lợi nhuận|Im ersten Jahr haben wir keinen {Gewinn} gemacht.|Năm đầu chúng tôi không có lãi.|
g|Phân từ mở rộng làm định ngữ|||cụm tính từ dài trước danh từ|Die {stark gestiegenen} Preise belasten die Kunden.|Giá tăng mạnh đè nặng lên khách hàng.|= Die Preise, die stark gestiegen sind, … (văn viết).
g|Câu quan hệ với wer|||ai mà …|Wer viel {arbeitet}, verdient mehr.|Ai làm nhiều thì kiếm nhiều hơn.|wer … , (der) …: câu chính thường không cần der khi cùng cách.
g|Câu quan hệ với was|||điều mà|Alles, was du {brauchst}, ist hier.|Mọi thứ bạn cần đều ở đây.|Sau alles, nichts, etwas, das, so sánh nhất: dùng was.
g|je nachdem|||tùy theo|Je nachdem, wie viel es {kostet}, kaufen wir es.|Tùy giá bao nhiêu, chúng tôi sẽ mua.|je nachdem + ob/wie/wann + câu phụ.
n|Wirtschaftskrise|die|-n|khủng hoảng kinh tế|In der {Wirtschaftskrise} verloren viele ihre Arbeit.|Trong khủng hoảng kinh tế nhiều người mất việc.|
n|Preissteigerung|die|-en|sự tăng giá|Die {Preissteigerungen} belasten die Haushalte.|Việc tăng giá đè nặng lên các hộ gia đình.|
n|Werbekampagne|die|-n|chiến dịch quảng cáo|Die {Werbekampagne} war sehr erfolgreich.|Chiến dịch quảng cáo rất thành công.|
n|Marktanteil|der|-e|thị phần|Die Firma hat ihren {Marktanteil} erhöht.|Công ty đã tăng thị phần.|
n|Kundenservice|der|-s|dịch vụ khách hàng|Der {Kundenservice} ist rund um die Uhr erreichbar.|Dịch vụ khách hàng hoạt động suốt ngày đêm.|
n|Zufriedenheit|die||sự hài lòng|Die {Zufriedenheit} der Kunden steht an erster Stelle.|Sự hài lòng của khách hàng là ưu tiên hàng đầu.|
n|Preis-Leistungs-Verhältnis|das|-se|tương quan giá – chất lượng|Das {Preis-Leistungs-Verhältnis} ist sehr gut.|Giá rất xứng với chất lượng.|
n|Konsumgesellschaft|die|-en|xã hội tiêu dùng|Wir leben in einer {Konsumgesellschaft}.|Chúng ta sống trong một xã hội tiêu dùng.|
p|fairer Handel|||thương mại công bằng|Ich kaufe Kaffee aus {fairem Handel}.|Tôi mua cà phê thương mại công bằng.|
n|Bilanz|die|-en|bảng cân đối; tổng kết|Die {Bilanz} des Jahres ist positiv.|Tổng kết năm là tích cực.|
n|Aktionär|der|-e|cổ đông|Die {Aktionäre} sind zufrieden.|Các cổ đông hài lòng.|
n|Börse|die|-n|sàn chứng khoán|Die Aktie wird an der {Börse} gehandelt.|Cổ phiếu được giao dịch trên sàn chứng khoán.|
n|Filiale|die|-n|chi nhánh|Die Bank schließt mehrere {Filialen}.|Ngân hàng đóng cửa nhiều chi nhánh.|
n|Zulieferer|der|-|nhà cung ứng|Die {Zulieferer} kommen aus Asien.|Các nhà cung ứng đến từ châu Á.|
n|Massenproduktion|die|-en|sản xuất hàng loạt|{Massenproduktion} senkt die Kosten.|Sản xuất hàng loạt giảm chi phí.|
n|Arbeitskraft|die|¨-e|sức lao động; lao động|Billige {Arbeitskräfte} sind gefragt.|Lao động giá rẻ được săn đón.|
n|Wohlstandsgesellschaft|die|-en|xã hội thịnh vượng|In der {Wohlstandsgesellschaft} wird viel weggeworfen.|Trong xã hội thịnh vượng người ta vứt bỏ nhiều.|
n|Schuldenkrise|die|-n|khủng hoảng nợ|Die {Schuldenkrise} betraf viele Länder.|Khủng hoảng nợ ảnh hưởng nhiều quốc gia.|
v|ankurbeln|||thúc đẩy (kinh tế)|Die Regierung will die Wirtschaft {ankurbeln}.|Chính phủ muốn thúc đẩy kinh tế.|Động từ tách: er kurbelt an, hat angekurbelt
v|auslagern|||thuê ngoài|Die Produktion wurde nach Asien {ausgelagert}.|Sản xuất đã được chuyển sang châu Á.|Động từ tách: er lagert aus, hat ausgelagert
v|handeln mit|||buôn bán|Die Firma {handelt} mit Elektronik.|Công ty kinh doanh đồ điện tử.|er handelt, hat gehandelt; mit + Dativ
v|kalkulieren|||tính toán|Wir müssen die Kosten genau {kalkulieren}.|Chúng ta phải tính toán chi phí chính xác.|er kalkuliert, hat kalkuliert
v|sanieren|||tái cơ cấu; cải tạo|Das Unternehmen muss {saniert} werden.|Công ty cần được tái cơ cấu.|er saniert, hat saniert
v|expandieren|||mở rộng|Die Firma {expandiert} nach Europa.|Công ty mở rộng sang châu Âu.|er expandiert, hat expandiert
v|aufsteigen|||thăng tiến; tăng|Die Firma ist zum Marktführer {aufgestiegen}.|Công ty đã vươn lên dẫn đầu thị trường.|Động từ tách: er steigt auf, stieg auf, ist aufgestiegen
v|anlocken|||thu hút|Rabatte {locken} viele Kunden an.|Giảm giá thu hút nhiều khách hàng.|Động từ tách: er lockt an, hat angelockt
v|zurückgreifen|||sử dụng đến (dự phòng)|Wir müssen auf unsere Ersparnisse {zurückgreifen}.|Chúng ta phải dùng đến tiền tiết kiệm.|Động từ tách: er greift zurück, griff zurück, hat zurückgegriffen; auf + Akk
adj|wirtschaftsstark|||mạnh về kinh tế|Bayern ist ein {wirtschaftsstarkes} Bundesland.|Bayern là bang mạnh về kinh tế.|
adj|marktführend|||dẫn đầu thị trường|Die Firma ist {marktführend} in Europa.|Công ty dẫn đầu thị trường châu Âu.|
adj|kostengünstig|||chi phí thấp|Wir suchen eine {kostengünstige} Lösung.|Chúng tôi tìm một giải pháp chi phí thấp.|
adj|preisbewusst|||có ý thức về giá|{Preisbewusste} Kunden vergleichen Angebote.|Khách hàng để ý giá so sánh các ưu đãi.|
adj|fair|||công bằng|Die Arbeiter bekommen einen {fairen} Lohn.|Công nhân được trả lương công bằng.|
adj|wettbewerbsfähig|||có sức cạnh tranh|Die Preise müssen {wettbewerbsfähig} sein.|Giá phải có sức cạnh tranh.|
adj|bankrott|||phá sản|Die Firma ist {bankrott}.|Công ty phá sản.|
adj|lukrativ|||sinh lợi cao|Das Geschäft ist sehr {lukrativ}.|Việc kinh doanh rất sinh lợi.|
adj|volkswirtschaftlich|||thuộc về kinh tế quốc dân|Das hat {volkswirtschaftliche} Folgen.|Điều đó có hậu quả đối với nền kinh tế quốc dân.|
p|unter dem Strich|||xét cho cùng|{Unter dem Strich} haben wir Gewinn gemacht.|Xét cho cùng chúng tôi đã có lãi.|
p|in die Höhe treiben|||đẩy giá lên|Die Nachfrage {treibt} die Preise in die Höhe.|Nhu cầu đẩy giá lên cao.|
p|Pleite gehen|||phá sản|Viele kleine Läden {gehen} Pleite.|Nhiều cửa hàng nhỏ phá sản.|
p|auf Kredit kaufen|||mua trả chậm|Viele {kaufen} ihr Auto auf Kredit.|Nhiều người mua ô tô trả chậm.|
n|Wirtschaftsstandort|der|-e|địa điểm kinh tế|Deutschland ist ein starker {Wirtschaftsstandort}.|Đức là một địa điểm kinh tế mạnh.|
n|Kundenbindung|die||sự gắn bó của khách hàng|Gute Qualität stärkt die {Kundenbindung}.|Chất lượng tốt củng cố sự gắn bó của khách hàng.|
n|Rendite|die|-n|lợi suất|Die {Rendite} liegt bei fünf Prozent.|Lợi suất ở mức năm phần trăm.|
adj|konjunkturell|||thuộc về chu kỳ kinh tế|Das ist eine {konjunkturelle} Schwäche.|Đó là sự suy yếu theo chu kỳ kinh tế.|
v|stagnieren|||trì trệ|Die Wirtschaft {stagniert}.|Kinh tế trì trệ.|es stagniert, hat stagniert
v|abwerten|||phá giá|Die Währung wurde {abgewertet}.|Đồng tiền bị phá giá.|Động từ tách: er wertet ab, hat abgewertet
p|auf Hochtouren laufen|||chạy hết công suất|Die Produktion {läuft} auf Hochtouren.|Sản xuất chạy hết công suất.|
p|in den Ruin treiben|||đẩy vào phá sản|Die Schulden {trieben} die Firma in den Ruin.|Nợ nần đã đẩy công ty vào phá sản.|
`;
export default pack;
