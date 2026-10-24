// B2 · 12 Pháp luật và quyền. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Rechtsanwalt|der|¨-e|luật sư (nam)|Ich brauche einen {Rechtsanwalt}.|Tôi cần một luật sư.|Nữ: die Rechtsanwältin.
n|Richter|der|-|thẩm phán (nam)|Der {Richter} hat das Urteil verkündet.|Thẩm phán đã tuyên án.|Nữ: die Richterin.
n|Gerichtsverfahren|das|-|vụ kiện, tố tụng|Das {Gerichtsverfahren} dauerte zwei Jahre.|Vụ kiện kéo dài hai năm.|
n|Klage|die|-n|đơn kiện|Er hat {Klage} gegen die Firma erhoben.|Anh ấy đã kiện công ty.|
n|Anklage|die|-n|cáo trạng|Die {Anklage} lautet auf Betrug.|Cáo trạng là tội lừa đảo.|
n|Straftat|die|-en|hành vi phạm tội|Diebstahl ist eine {Straftat}.|Trộm cắp là hành vi phạm tội.|
n|Strafe|die|-n|hình phạt|Die {Strafe} war sehr hoch.|Hình phạt rất nặng.|
n|Geldstrafe|die|-n|tiền phạt|Er musste eine {Geldstrafe} zahlen.|Anh ta phải nộp phạt.|
n|Gefängnis|das|-se|nhà tù|Er sitzt seit drei Jahren im {Gefängnis}.|Anh ta ngồi tù đã ba năm.|
n|Betrug|der||lừa đảo|{Betrug} im Internet nimmt zu.|Lừa đảo trên mạng gia tăng.|
n|Vertragsbedingung|die|-en|điều khoản hợp đồng|Lesen Sie die {Vertragsbedingungen} genau.|Hãy đọc kỹ các điều khoản hợp đồng.|
n|Kleingedruckte|das||phần chữ nhỏ (điều khoản)|Achte auf das {Kleingedruckte}!|Chú ý phần chữ nhỏ!|
n|Widerruf|der|-e|sự rút lại, hủy hợp đồng|Der {Widerruf} muss schriftlich erfolgen.|Việc hủy hợp đồng phải bằng văn bản.|
n|Haftung|die|-en|trách nhiệm pháp lý|Der Vermieter übernimmt keine {Haftung}.|Chủ nhà không chịu trách nhiệm pháp lý.|
n|Schadensersatz|der||tiền bồi thường|Er verlangt {Schadensersatz}.|Anh ấy đòi bồi thường thiệt hại.|
n|Bescheid|der|-e|quyết định (hành chính)|Ich habe einen {Bescheid} vom Amt bekommen.|Tôi nhận được quyết định từ cơ quan.|
n|Widerspruch|der|¨-e|khiếu nại, sự phản đối|Ich lege {Widerspruch} gegen den Bescheid ein.|Tôi khiếu nại quyết định đó.|Widerspruch einlegen gegen + Akk.
n|Vorschrift|die|-en|quy định|Das ist gegen die {Vorschriften}.|Điều đó trái quy định.|
n|Datenschutzerklärung|die|-en|chính sách bảo mật dữ liệu|Bitte lesen Sie die {Datenschutzerklärung}.|Vui lòng đọc chính sách bảo mật.|
n|Verbraucherrecht|das|-e|quyền người tiêu dùng|Kennen Sie Ihre {Verbraucherrechte}?|Ông/bà biết quyền người tiêu dùng của mình không?|
n|Menschenrecht|das|-e|nhân quyền|Bildung ist ein {Menschenrecht}.|Giáo dục là một quyền con người.|
v|verklagen|||kiện|Er hat seinen Arbeitgeber {verklagt}.|Anh ấy kiện người chủ.|er verklagt, hat verklagt
v|anklagen|||buộc tội|Sie wurde wegen Betrugs {angeklagt}.|Cô ta bị buộc tội lừa đảo.|Động từ tách: er klagt an, hat angeklagt
v|bestrafen|||trừng phạt|Der Täter wurde hart {bestraft}.|Thủ phạm bị trừng phạt nặng.|er bestraft, hat bestraft
v|freisprechen|||tuyên vô tội|Der Angeklagte wurde {freigesprochen}.|Bị cáo được tuyên vô tội.|Động từ tách: er spricht frei, sprach frei, hat freigesprochen
v|haften|||chịu trách nhiệm pháp lý|Eltern {haften} für ihre Kinder.|Cha mẹ chịu trách nhiệm cho con cái.|er haftet, hat gehaftet; für + Akk
v|widerrufen|||hủy, rút lại|Sie können den Vertrag {widerrufen}.|Ông/bà có thể hủy hợp đồng.|er widerruft, widerrief, hat widerrufen
v|einlegen|||đệ trình (khiếu nại)|Er hat Einspruch {eingelegt}.|Anh ấy đã đệ đơn khiếu nại.|Động từ tách: er legt ein, hat eingelegt
v|verstoßen|||vi phạm|Das {verstößt} gegen das Gesetz.|Điều đó vi phạm pháp luật.|du verstößt, er verstößt, verstieß, hat verstoßen; gegen + Akk
v|zustehen|||thuộc quyền được hưởng|Ihnen {steht} eine Entschädigung zu.|Ông/bà được hưởng tiền bồi thường.|Động từ tách: es steht zu, stand zu, hat zugestanden; + Dativ
v|berechtigen|||trao quyền|Das Ticket {berechtigt} zur Fahrt mit allen Bussen.|Vé cho phép đi mọi tuyến xe buýt.|er berechtigt, hat berechtigt
v|verpflichten|||bắt buộc, ràng buộc|Der Vertrag {verpflichtet} Sie zur Zahlung.|Hợp đồng buộc ông/bà phải thanh toán.|er verpflichtet, hat verpflichtet
v|beglaubigen|||công chứng|Die Kopie muss {beglaubigt} werden.|Bản sao phải được công chứng.|er beglaubigt, hat beglaubigt
adj|gesetzlich|||theo luật định|Das ist {gesetzlich} vorgeschrieben.|Điều đó do luật quy định.|
adj|rechtswidrig|||trái pháp luật|Die Kündigung war {rechtswidrig}.|Việc sa thải là trái luật.|
adj|ungültig|||vô hiệu|Der Vertrag ist {ungültig}.|Hợp đồng vô hiệu.|
adj|verpflichtet|||có nghĩa vụ|Sie sind {verpflichtet}, Steuern zu zahlen.|Ông/bà có nghĩa vụ nộp thuế.|
adj|zulässig|||được phép (theo luật)|Diese Klausel ist nicht {zulässig}.|Điều khoản này không hợp lệ.|
adj|amtlich|||chính thức (của cơ quan)|Ich brauche eine {amtliche} Bescheinigung.|Tôi cần giấy xác nhận chính thức.|
p|vor Gericht gehen|||ra tòa|Wenn nötig, {gehe} ich vor Gericht.|Nếu cần tôi sẽ ra tòa.|
p|Anspruch haben auf|||có quyền hưởng|Sie {haben} Anspruch auf Urlaub.|Ông/bà có quyền được nghỉ phép.|
p|in Kraft sein|||đang có hiệu lực|Das Gesetz {ist} seit 2020 in Kraft.|Luật có hiệu lực từ năm 2020.|
p|zur Rechenschaft ziehen|||bắt chịu trách nhiệm|Die Verantwortlichen müssen {zur Rechenschaft gezogen} werden.|Những người chịu trách nhiệm phải bị xử lý.|
g|Văn phong hành chính: Nominalstil|||cụm danh từ thay động từ|Die {Abgabe} der Unterlagen erfolgt bis zum 1. Mai.|Việc nộp hồ sơ hạn chót ngày 1 tháng Năm.|erfolgen, durchführen, vornehmen + danh từ thay cho động từ thường.
g|Cụm danh từ – động từ: zur Verfügung stellen|||văn viết trang trọng|Wir stellen Ihnen die Unterlagen zur {Verfügung}.|Chúng tôi cung cấp hồ sơ cho ông/bà.|in Anspruch nehmen, zur Kenntnis nehmen, in Frage kommen…
g|dessen / deren: quan hệ Genitiv|||của người/vật đó|Der Mann, {dessen} Auto gestohlen wurde, ging zur Polizei.|Người đàn ông bị trộm ô tô đã đến cảnh sát.|der/das → dessen; die, số nhiều → deren.
g|Giới từ Genitiv: gemäß, laut, zufolge|||theo (văn bản)|Gemäß {den} Vorschriften ist das verboten.|Theo quy định điều đó bị cấm.|gemäß + Dativ (thường đứng trước); zufolge + Dativ (đứng sau).
n|Rechtsprechung|die||xét xử, án lệ|Die {Rechtsprechung} ist unabhängig.|Việc xét xử là độc lập.|
n|Strafrecht|das||luật hình sự|Das {Strafrecht} regelt Straftaten.|Luật hình sự quy định các tội phạm.|
n|Zivilrecht|das||luật dân sự|Mietstreitigkeiten gehören zum {Zivilrecht}.|Tranh chấp thuê nhà thuộc luật dân sự.|
n|Mietvertrag|der|¨-e|hợp đồng thuê nhà|Der {Mietvertrag} läuft drei Jahre.|Hợp đồng thuê nhà có thời hạn ba năm.|
n|Mietrecht|das||luật thuê nhà|Das {Mietrecht} schützt die Mieter.|Luật thuê nhà bảo vệ người thuê.|
n|Kaufvertrag|der|¨-e|hợp đồng mua bán|Wir unterschreiben den {Kaufvertrag} beim Notar.|Chúng tôi ký hợp đồng mua bán tại công chứng.|
n|Notar|der|-e|công chứng viên|Der {Notar} beglaubigt die Unterschrift.|Công chứng viên chứng thực chữ ký.|
n|Rechtsschutzversicherung|die|-en|bảo hiểm chi phí pháp lý|Die {Rechtsschutzversicherung} zahlt den Anwalt.|Bảo hiểm pháp lý chi trả luật sư.|
n|Gerichtskosten|die||án phí|Wer zahlt die {Gerichtskosten}?|Ai trả án phí?|Chỉ dùng số nhiều.
n|Zeugenaussage|die|-n|lời khai nhân chứng|Die {Zeugenaussage} war entscheidend.|Lời khai nhân chứng là quyết định.|
n|Beweismittel|das|-|chứng cứ|Das Video gilt als {Beweismittel}.|Video được coi là chứng cứ.|
n|Bewährung|die||án treo|Er bekam zwei Jahre auf {Bewährung}.|Anh ta bị hai năm án treo.|
n|Freispruch|der|¨-e|tuyên trắng án|Der {Freispruch} überraschte viele.|Việc tuyên trắng án làm nhiều người bất ngờ.|
n|Berufung|die|-en|kháng cáo|Der Anwalt legt {Berufung} ein.|Luật sư kháng cáo.|
n|Gutachten|das|-|báo cáo giám định|Das {Gutachten} bestätigt die Schuld.|Báo cáo giám định xác nhận có tội.|
n|Antragsteller|der|-|người nộp đơn|Der {Antragsteller} muss persönlich erscheinen.|Người nộp đơn phải có mặt trực tiếp.|
n|Bearbeitungszeit|die|-en|thời gian xử lý|Die {Bearbeitungszeit} beträgt sechs Wochen.|Thời gian xử lý là sáu tuần.|
n|Gleichbehandlung|die||đối xử bình đẳng|Das Gesetz garantiert {Gleichbehandlung}.|Luật đảm bảo đối xử bình đẳng.|
n|Datenschutzgrundverordnung|die||quy định chung về bảo vệ dữ liệu (GDPR)|Die {Datenschutzgrundverordnung} gilt in der ganzen EU.|Quy định bảo vệ dữ liệu áp dụng toàn EU.|Viết tắt: DSGVO.
v|genehmigen|||phê duyệt|Der Antrag wurde {genehmigt}.|Đơn đã được phê duyệt.|er genehmigt, hat genehmigt
v|bewilligen|||chấp thuận|Das Stipendium wurde {bewilligt}.|Học bổng đã được chấp thuận.|er bewilligt, hat bewilligt
v|vorlegen|||xuất trình|Bitte {legen} Sie Ihren Ausweis vor.|Vui lòng xuất trình giấy tờ tùy thân.|Động từ tách: er legt vor, hat vorgelegt
v|aussagen|||khai báo|Die Zeugin hat vor Gericht {ausgesagt}.|Nhân chứng đã khai trước tòa.|Động từ tách: er sagt aus, hat ausgesagt
v|anfechten|||khiếu nại, phản bác (quyết định)|Er will das Urteil {anfechten}.|Anh ấy muốn khiếu nại bản án.|Động từ tách: du fichtst an, er ficht an, focht an, hat angefochten
v|aufheben|||hủy bỏ|Das Urteil wurde {aufgehoben}.|Bản án đã bị hủy bỏ.|Động từ tách: er hebt auf, hob auf, hat aufgehoben
v|erlassen|||ban hành|Die Stadt hat eine neue Verordnung {erlassen}.|Thành phố đã ban hành quy định mới.|du erlässt, er erlässt, erließ, hat erlassen
adj|rechtskräftig|||có hiệu lực pháp luật|Das Urteil ist {rechtskräftig}.|Bản án có hiệu lực pháp luật.|
adj|vertraglich|||theo hợp đồng|Das ist {vertraglich} geregelt.|Điều đó được quy định trong hợp đồng.|
adj|befugt|||có thẩm quyền|Er ist nicht {befugt}, das zu entscheiden.|Anh ấy không có thẩm quyền quyết định việc đó.|
adj|haftbar|||chịu trách nhiệm pháp lý|Der Hersteller ist {haftbar}.|Nhà sản xuất phải chịu trách nhiệm.|
adj|unzulässig|||không hợp lệ|Die Klausel ist {unzulässig}.|Điều khoản không hợp lệ.|
adj|fristgerecht|||đúng hạn|Die Unterlagen wurden {fristgerecht} eingereicht.|Hồ sơ được nộp đúng hạn.|
adj|unbefugt|||không có thẩm quyền|{Unbefugten} ist der Zutritt verboten.|Người không phận sự cấm vào.|
p|gegen das Gesetz verstoßen|||vi phạm pháp luật|Er hat {gegen das Gesetz verstoßen}.|Anh ta đã vi phạm pháp luật.|
p|Einspruch erheben|||đệ đơn phản đối|Sie {erhob} Einspruch gegen den Bescheid.|Cô ấy đệ đơn phản đối quyết định.|
p|Recht bekommen|||được xử thắng|Am Ende {bekam} der Mieter Recht.|Cuối cùng người thuê nhà được xử thắng.|
p|zur Anzeige bringen|||tố giác|Der Diebstahl wurde {zur Anzeige gebracht}.|Vụ trộm đã được tố giác.|
n|Vollmacht|die|-en|giấy ủy quyền|Ich gebe meiner Schwester eine {Vollmacht}.|Tôi đưa giấy ủy quyền cho chị gái.|
n|Verjährung|die|-en|thời hiệu|Nach der {Verjährung} kann man nicht mehr klagen.|Hết thời hiệu thì không thể kiện nữa.|
n|Rechtsberatung|die|-en|tư vấn pháp lý|Die {Rechtsberatung} ist kostenlos.|Tư vấn pháp lý miễn phí.|
adj|rechtsverbindlich|||ràng buộc pháp lý|Die Unterschrift ist {rechtsverbindlich}.|Chữ ký có tính ràng buộc pháp lý.|
v|bevollmächtigen|||ủy quyền|Ich {bevollmächtige} meinen Anwalt.|Tôi ủy quyền cho luật sư của mình.|er bevollmächtigt, hat bevollmächtigt
v|schlichten|||hòa giải|Ein Mediator {schlichtet} den Streit.|Một người hòa giải giải quyết tranh chấp.|er schlichtet, hat geschlichtet
p|sich im Recht fühlen|||cho là mình đúng|Beide Seiten {fühlen} sich im Recht.|Cả hai bên đều cho là mình đúng.|
p|außergerichtlich einigen|||thỏa thuận ngoài tòa|Die Parteien haben sich {außergerichtlich} geeinigt.|Các bên đã thỏa thuận ngoài tòa.|
`;
export default pack;
