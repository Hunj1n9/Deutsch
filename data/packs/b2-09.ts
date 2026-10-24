// B2 · 09 Khoa học và phát minh. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Forschungsergebnis|das|-se|kết quả nghiên cứu|Die {Forschungsergebnisse} wurden veröffentlicht.|Kết quả nghiên cứu đã được công bố.|
n|Durchbruch|der|¨-e|bước đột phá|Das war ein wissenschaftlicher {Durchbruch}.|Đó là một bước đột phá khoa học.|
n|Theorie|die|-n|lý thuyết|Die {Theorie} wurde widerlegt.|Lý thuyết đã bị bác bỏ.|
n|Beobachtung|die|-en|sự quan sát|Die {Beobachtung} dauerte zehn Jahre.|Việc quan sát kéo dài mười năm.|
n|Messung|die|-en|phép đo|Die {Messungen} sind sehr genau.|Các phép đo rất chính xác.|
n|Versuch|der|-e|thử nghiệm; sự cố gắng|Der erste {Versuch} ist gescheitert.|Lần thử đầu tiên đã thất bại.|
n|Probe|die|-n|mẫu thử|Die {Proben} werden im Labor untersucht.|Các mẫu được kiểm tra trong phòng thí nghiệm.|
n|Forscher|der|-|nhà nghiên cứu (nam)|Die {Forscher} haben eine neue Art entdeckt.|Các nhà nghiên cứu đã phát hiện một loài mới.|Nữ: die Forscherin.
n|Fachzeitschrift|die|-en|tạp chí chuyên ngành|Der Artikel erschien in einer {Fachzeitschrift}.|Bài báo đăng trên một tạp chí chuyên ngành.|
n|Patent|das|-e|bằng sáng chế|Die Firma hat ein {Patent} angemeldet.|Công ty đã đăng ký bằng sáng chế.|
n|Nobelpreis|der|-e|giải Nobel|Sie hat den {Nobelpreis} für Chemie erhalten.|Bà ấy nhận giải Nobel hóa học.|
n|Raumstation|die|-en|trạm vũ trụ|Die Astronauten leben auf der {Raumstation}.|Các phi hành gia sống trên trạm vũ trụ.|
n|Gentechnik|die||công nghệ gen|Die {Gentechnik} ist umstritten.|Công nghệ gen gây tranh cãi.|
n|Ethik|die||đạo đức học|Die {Ethik} spielt in der Forschung eine Rolle.|Đạo đức đóng vai trò trong nghiên cứu.|
n|Zusammenhang|der|¨-e|mối liên hệ|Es gibt einen {Zusammenhang} zwischen Schlaf und Gesundheit.|Có mối liên hệ giữa giấc ngủ và sức khỏe.|
n|Ursache|die|-n|nguyên nhân|Die {Ursache} ist noch unbekannt.|Nguyên nhân vẫn chưa rõ.|
n|Auswirkung|die|-en|tác động|Die {Auswirkungen} auf die Umwelt sind groß.|Tác động đến môi trường là lớn.|
n|Anstieg|der|-e|sự gia tăng|Die Grafik zeigt einen deutlichen {Anstieg}.|Biểu đồ cho thấy sự gia tăng rõ rệt.|
n|Rückgang|der|¨-e|sự sụt giảm|Es gab einen {Rückgang} um zehn Prozent.|Đã có sự sụt giảm mười phần trăm.|
n|Grafik|die|-en|biểu đồ, đồ họa|Die {Grafik} zeigt die Entwicklung seit 2000.|Biểu đồ cho thấy sự phát triển từ năm 2000.|
n|Diagramm|das|-e|sơ đồ, biểu đồ|Das {Diagramm} vergleicht drei Länder.|Biểu đồ so sánh ba quốc gia.|
n|Anteil|der|-e|tỷ lệ, phần|Der {Anteil} der Frauen ist gestiegen.|Tỷ lệ phụ nữ đã tăng.|
n|Hälfte|die|-n|một nửa|Die {Hälfte} der Befragten ist dafür.|Một nửa số người được hỏi ủng hộ.|
n|Drittel|das|-|một phần ba|Ein {Drittel} der Schüler lernt Deutsch.|Một phần ba học sinh học tiếng Đức.|
n|Durchschnitt|der|-e|mức trung bình|Im {Durchschnitt} schlafen Deutsche sieben Stunden.|Trung bình người Đức ngủ bảy tiếng.|
v|erforschen|||nghiên cứu, khảo cứu|Wissenschaftler {erforschen} das Weltall.|Các nhà khoa học nghiên cứu vũ trụ.|er erforscht, hat erforscht
v|nachweisen|||chứng minh|Die Wirkung konnte nicht {nachgewiesen} werden.|Không chứng minh được tác dụng.|Động từ tách: er weist nach, wies nach, hat nachgewiesen
v|durchführen|||tiến hành|Wir {führen} eine Umfrage durch.|Chúng tôi tiến hành một cuộc khảo sát.|Động từ tách: er führt durch, hat durchgeführt
v|ermöglichen|||làm cho có thể|Die Technik {ermöglicht} neue Behandlungen.|Công nghệ giúp có những phương pháp điều trị mới.|er ermöglicht, hat ermöglicht
v|betragen|||lên tới, là (số liệu)|Der Anteil {beträgt} 30 Prozent.|Tỷ lệ là 30 phần trăm.|es beträgt, betrug, hat betragen
v|hervorgehen|||rút ra, cho thấy|Aus der Studie {geht} hervor, dass …|Từ nghiên cứu cho thấy rằng …|Động từ tách: es geht hervor, ging hervor, ist hervorgegangen; aus + Dativ
v|veranschaulichen|||minh họa|Die Grafik {veranschaulicht} die Daten.|Biểu đồ minh họa dữ liệu.|er veranschaulicht, hat veranschaulicht
adj|bahnbrechend|||mang tính đột phá|Die Erfindung war {bahnbrechend}.|Phát minh mang tính đột phá.|
adj|messbar|||đo được|Der Erfolg ist {messbar}.|Thành công có thể đo được.|
adj|nachweisbar|||chứng minh được|Der Effekt ist nicht {nachweisbar}.|Hiệu ứng không chứng minh được.|
adj|erheblich|||đáng kể|Die Kosten sind {erheblich} höher.|Chi phí cao hơn đáng kể.|
adj|geringfügig|||không đáng kể|Die Preise sind nur {geringfügig} gestiegen.|Giá chỉ tăng không đáng kể.|
adj|kontinuierlich|||liên tục|Die Zahl steigt {kontinuierlich}.|Con số tăng liên tục.|
adj|vergleichbar|||có thể so sánh|Die Ergebnisse sind nicht {vergleichbar}.|Kết quả không thể so sánh.|
p|im Vergleich zu|||so với|{Im Vergleich zu} 2010 ist die Zahl gestiegen.|So với năm 2010, con số đã tăng.|im Vergleich zu + Dativ.
p|an erster Stelle stehen|||đứng đầu|Deutschland {steht} an erster Stelle.|Đức đứng đầu.|
p|um … Prozent steigen|||tăng … phần trăm|Die Preise sind {um} fünf Prozent gestiegen.|Giá đã tăng năm phần trăm.|
g|aufgrund / infolge / angesichts + Genitiv|||do, vì, trước tình hình|Aufgrund {des} schlechten Wetters wurde der Start verschoben.|Do thời tiết xấu, việc phóng bị hoãn.|Văn viết; trong văn nói thường dùng wegen.
g|Bị động thay bằng man|||văn nói tự nhiên hơn|Man {führte} die Studie in zehn Ländern durch.|Nghiên cứu được tiến hành ở mười quốc gia.|= Die Studie wurde in zehn Ländern durchgeführt.
g|Mô tả biểu đồ: steigen um / auf|||um = mức thay đổi, auf = mức đạt tới|Die Zahl stieg {auf} 500.|Con số tăng lên 500.|steigen um 10 % (thêm 10 %); steigen auf 500 (lên tới 500).
g|Phân số và phần trăm|||die Hälfte, ein Drittel, ein Viertel|Ein {Viertel} der Befragten ist dagegen.|Một phần tư số người được hỏi phản đối.|Động từ chia theo danh từ phân số (số ít).
n|Grundlagenforschung|die||nghiên cứu cơ bản|Die {Grundlagenforschung} braucht Zeit.|Nghiên cứu cơ bản cần thời gian.|
n|Naturwissenschaft|die|-en|khoa học tự nhiên|Physik und Chemie sind {Naturwissenschaften}.|Vật lý và hóa học là khoa học tự nhiên.|
n|Geisteswissenschaft|die|-en|khoa học nhân văn|Sie studiert {Geisteswissenschaften}.|Cô ấy học các ngành khoa học nhân văn.|
n|Teilchen|das|-|hạt (vật lý)|Die {Teilchen} sind unsichtbar klein.|Các hạt nhỏ đến mức không nhìn thấy.|
n|Molekül|das|-e|phân tử|Wasser besteht aus {Molekülen}.|Nước gồm các phân tử.|
n|Zelle|die|-n|tế bào|Der Körper besteht aus Milliarden {Zellen}.|Cơ thể gồm hàng tỷ tế bào.|
n|Gen|das|-e|gen|Die {Gene} bestimmen viele Eigenschaften.|Gen quyết định nhiều đặc điểm.|
n|Evolution|die||sự tiến hóa|Darwin entwickelte die Theorie der {Evolution}.|Darwin phát triển thuyết tiến hóa.|
n|Klimaforschung|die||nghiên cứu khí hậu|Die {Klimaforschung} liefert klare Daten.|Nghiên cứu khí hậu cung cấp dữ liệu rõ ràng.|
n|Satellit|der|-en|vệ tinh|Der {Satellit} umkreist die Erde.|Vệ tinh bay quanh trái đất.|n-Deklination.
n|Weltraumforschung|die||nghiên cứu vũ trụ|Die {Weltraumforschung} ist teuer.|Nghiên cứu vũ trụ rất tốn kém.|
n|Prototyp|der|-en|nguyên mẫu|Der {Prototyp} wird getestet.|Nguyên mẫu đang được thử nghiệm.|
n|Innovation|die|-en|sự đổi mới|{Innovationen} sichern die Zukunft.|Đổi mới đảm bảo tương lai.|
n|Fördermittel|das|-|kinh phí tài trợ|Das Projekt bekommt {Fördermittel}.|Dự án nhận được kinh phí tài trợ.|
n|Tierversuch|der|-e|thí nghiệm trên động vật|{Tierversuche} sind umstritten.|Thí nghiệm trên động vật gây tranh cãi.|
n|Fehlerquelle|die|-n|nguồn sai số|Es gibt mehrere {Fehlerquellen}.|Có nhiều nguồn sai số.|
n|Stichprobe|die|-n|mẫu (thống kê)|Die {Stichprobe} umfasst 2000 Personen.|Mẫu khảo sát gồm 2000 người.|
n|Prognose|die|-n|dự báo|Die {Prognose} für 2030 ist positiv.|Dự báo cho năm 2030 là tích cực.|
v|entschlüsseln|||giải mã|Forscher haben das Genom {entschlüsselt}.|Các nhà nghiên cứu đã giải mã bộ gen.|er entschlüsselt, hat entschlüsselt
v|simulieren|||mô phỏng|Der Computer {simuliert} das Wetter.|Máy tính mô phỏng thời tiết.|er simuliert, hat simuliert
v|testen|||thử nghiệm|Das Medikament wird noch {getestet}.|Thuốc vẫn đang được thử nghiệm.|er testet, hat getestet
v|sich herausstellen|||hóa ra|Es {stellte} sich heraus, dass die Theorie falsch war.|Hóa ra lý thuyết đã sai.|Động từ tách: es stellt sich heraus, hat sich herausgestellt
v|vorhersagen|||dự đoán|Man kann Erdbeben nicht {vorhersagen}.|Không thể dự đoán động đất.|Động từ tách: er sagt vorher, hat vorhergesagt
v|beitragen|||đóng góp|Die Studie {trägt} zum Verständnis bei.|Nghiên cứu góp phần vào sự hiểu biết.|Động từ tách: du trägst bei, er trägt bei, trug bei, hat beigetragen; zu + Dativ
v|revolutionieren|||cách mạng hóa|Das Internet hat die Kommunikation {revolutioniert}.|Internet đã cách mạng hóa giao tiếp.|er revolutioniert, hat revolutioniert
adj|naturwissenschaftlich|||thuộc khoa học tự nhiên|Sie hat ein {naturwissenschaftliches} Studium.|Cô ấy học ngành khoa học tự nhiên.|
adj|experimentell|||mang tính thực nghiệm|Die Methode ist noch {experimentell}.|Phương pháp vẫn còn mang tính thực nghiệm.|
adj|präzise|||chính xác|Die Messung ist sehr {präzise}.|Phép đo rất chính xác.|
adj|statistisch|||thống kê|Der Unterschied ist {statistisch} signifikant.|Sự khác biệt có ý nghĩa thống kê.|
adj|ethisch|||về mặt đạo đức|Das ist {ethisch} fragwürdig.|Điều đó đáng ngờ về mặt đạo đức.|
adj|fortschrittlich|||tiến bộ|Das Land ist technisch sehr {fortschrittlich}.|Đất nước rất tiến bộ về kỹ thuật.|
adj|wegweisend|||mang tính định hướng|Die Erfindung war {wegweisend}.|Phát minh mang tính định hướng.|
p|zu dem Schluss kommen|||đi đến kết luận|Die Forscher {kamen} zu dem Schluss, dass …|Các nhà nghiên cứu đi đến kết luận rằng …|
p|in Frage stellen|||đặt dấu hỏi|Die Studie {stellt} alte Annahmen in Frage.|Nghiên cứu đặt dấu hỏi cho các giả định cũ.|
p|Fortschritte erzielen|||đạt được tiến bộ|In der Krebsforschung wurden große {Fortschritte} erzielt.|Nghiên cứu ung thư đã đạt được tiến bộ lớn.|
p|auf dem Prüfstand stehen|||đang được kiểm định|Die Methode {steht} auf dem Prüfstand.|Phương pháp đang được kiểm định.|
n|Forschungsgruppe|die|-n|nhóm nghiên cứu|Die {Forschungsgruppe} besteht aus zehn Personen.|Nhóm nghiên cứu gồm mười người.|
n|Laborergebnis|das|-se|kết quả xét nghiệm phòng lab|Die {Laborergebnisse} liegen morgen vor.|Kết quả xét nghiệm có vào ngày mai.|
n|Wahrscheinlichkeit|die|-en|xác suất|Die {Wahrscheinlichkeit} ist sehr gering.|Xác suất rất thấp.|
adj|signifikant|||đáng kể (thống kê)|Der Effekt ist {signifikant}.|Hiệu ứng có ý nghĩa thống kê.|
v|erproben|||thử nghiệm|Die neue Methode wird gerade {erprobt}.|Phương pháp mới đang được thử nghiệm.|er erprobt, hat erprobt
v|quantifizieren|||định lượng|Der Nutzen lässt sich schwer {quantifizieren}.|Lợi ích khó định lượng.|er quantifiziert, hat quantifiziert
p|Licht ins Dunkel bringen|||làm sáng tỏ|Die Studie {bringt} Licht ins Dunkel.|Nghiên cứu làm sáng tỏ vấn đề.|
p|auf der Hand liegen|||hiển nhiên|Die Vorteile {liegen} auf der Hand.|Lợi ích là hiển nhiên.|
`;
export default pack;
