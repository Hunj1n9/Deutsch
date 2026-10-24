// B1 · 06 Sức khỏe và y tế. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Patient|der|-en|bệnh nhân (nam)|Der {Patient} wartet seit einer Stunde.|Bệnh nhân đã chờ một tiếng.|n-Deklination. Nữ: die Patientin.
n|Hausarzt|der|¨-e|bác sĩ gia đình|Gehen Sie zuerst zu Ihrem {Hausarzt}.|Trước hết hãy đến bác sĩ gia đình.|
n|Facharzt|der|¨-e|bác sĩ chuyên khoa|Er überweist mich zum {Facharzt}.|Ông ấy chuyển tôi sang bác sĩ chuyên khoa.|
n|Krankenkasse|die|-n|quỹ bảo hiểm y tế|Die {Krankenkasse} bezahlt die Behandlung.|Bảo hiểm y tế chi trả việc điều trị.|
n|Behandlung|die|-en|việc điều trị|Die {Behandlung} dauert drei Wochen.|Việc điều trị kéo dài ba tuần.|
n|Untersuchung|die|-en|sự khám bệnh|Die {Untersuchung} tut nicht weh.|Việc khám không đau.|
n|Diagnose|die|-n|chẩn đoán|Die {Diagnose} ist eindeutig.|Chẩn đoán rõ ràng.|
n|Symptom|das|-e|triệu chứng|Welche {Symptome} haben Sie?|Ông/bà có những triệu chứng gì?|
n|Krankheit|die|-en|bệnh tật|Diabetes ist eine häufige {Krankheit}.|Tiểu đường là một bệnh phổ biến.|
n|Grippe|die|-n|cúm|Ich habe die {Grippe}.|Tôi bị cúm.|
n|Infektion|die|-en|nhiễm trùng|Die {Infektion} wird mit Antibiotika behandelt.|Nhiễm trùng được điều trị bằng kháng sinh.|
n|Impfung|die|-en|tiêm phòng|Die {Impfung} ist kostenlos.|Tiêm phòng miễn phí.|
n|Operation|die|-en|ca phẫu thuật|Die {Operation} war erfolgreich.|Ca phẫu thuật thành công.|
n|Nebenwirkung|die|-en|tác dụng phụ|Das Medikament hat kaum {Nebenwirkungen}.|Thuốc hầu như không có tác dụng phụ.|
n|Apotheker|der|-|dược sĩ (nam)|Der {Apotheker} erklärt die Dosierung.|Dược sĩ giải thích liều dùng.|Nữ: die Apothekerin.
n|Notfall|der|¨-e|trường hợp khẩn cấp|Im {Notfall} rufen Sie 112 an.|Trường hợp khẩn cấp hãy gọi 112.|
n|Krankenwagen|der|-|xe cứu thương|Der {Krankenwagen} kommt gleich.|Xe cứu thương sắp đến.|
n|Blutdruck|der||huyết áp|Ihr {Blutdruck} ist zu hoch.|Huyết áp của ông/bà quá cao.|
n|Gesundheitssystem|das|-e|hệ thống y tế|Das {Gesundheitssystem} ist teuer.|Hệ thống y tế tốn kém.|
n|Vorsorge|die||sự phòng ngừa, khám định kỳ|{Vorsorge} ist besser als Heilung.|Phòng bệnh hơn chữa bệnh.|
n|Lebensstil|der|-e|lối sống|Ein gesunder {Lebensstil} ist wichtig.|Lối sống lành mạnh rất quan trọng.|
n|Übergewicht|das||thừa cân|{Übergewicht} kann krank machen.|Thừa cân có thể gây bệnh.|
n|Sucht|die|¨-e|chứng nghiện|Rauchen ist eine {Sucht}.|Hút thuốc là một chứng nghiện.|
n|Psyche|die|-n|tâm lý|Stress belastet die {Psyche}.|Căng thẳng ảnh hưởng đến tâm lý.|
n|Pflege|die||sự chăm sóc, điều dưỡng|Meine Oma braucht {Pflege}.|Bà tôi cần được chăm sóc.|
n|Heilung|die|-en|sự chữa khỏi|Die {Heilung} dauert lange.|Việc lành bệnh kéo dài.|
n|Gesundheitszustand|der|¨-e|tình trạng sức khỏe|Sein {Gesundheitszustand} ist stabil.|Tình trạng sức khỏe của anh ấy ổn định.|
v|behandeln|||điều trị; đối xử|Der Arzt {behandelt} den Patienten.|Bác sĩ điều trị cho bệnh nhân.|er behandelt, hat behandelt
v|verschreiben|||kê đơn|Die Ärztin {verschreibt} mir Tabletten.|Bác sĩ kê cho tôi thuốc viên.|er verschreibt, verschrieb, hat verschrieben
v|einnehmen|||uống (thuốc)|{Nehmen} Sie die Tabletten nach dem Essen ein.|Uống thuốc sau bữa ăn.|Động từ tách: er nimmt ein, nahm ein, hat eingenommen
v|operieren|||phẫu thuật|Er muss am Knie {operiert} werden.|Anh ấy phải phẫu thuật đầu gối.|er operiert, hat operiert
v|impfen|||tiêm phòng|Die Kinder werden gegen Masern {geimpft}.|Trẻ em được tiêm phòng sởi.|er impft, hat geimpft
v|heilen|||chữa lành|Die Wunde ist gut {geheilt}.|Vết thương đã lành tốt.|er heilt, hat/ist geheilt
v|sich anstecken|||bị lây|Ich habe {mich} bei meinem Sohn angesteckt.|Tôi bị lây từ con trai.|Động từ tách: er steckt sich an, hat sich angesteckt
v|vorbeugen|||phòng ngừa|Sport kann Krankheiten {vorbeugen}.|Thể thao có thể phòng ngừa bệnh tật.|Động từ tách: er beugt vor, hat vorgebeugt; + Dativ
v|leiden|||chịu đựng, mắc bệnh|Er {leidet} an Kopfschmerzen.|Anh ấy bị đau đầu.|er leidet, litt, hat gelitten; an + Dativ (bệnh)
v|pflegen|||chăm sóc|Sie {pflegt} ihren kranken Vater.|Cô ấy chăm sóc bố bị ốm.|er pflegt, hat gepflegt
v|messen|||đo|Die Krankenschwester {misst} den Blutdruck.|Y tá đo huyết áp.|du misst, er misst, maß, hat gemessen
v|atmen|||thở|Bitte tief {atmen}!|Xin hít thở sâu!|er atmet, hat geatmet
v|schwitzen|||đổ mồ hôi|Beim Sport {schwitze} ich viel.|Khi tập thể thao tôi đổ nhiều mồ hôi.|er schwitzt, hat geschwitzt
v|sich krankmelden|||báo ốm|Ich muss {mich} heute krankmelden.|Hôm nay tôi phải báo ốm.|Động từ tách: er meldet sich krank, hat sich krankgemeldet
adj|chronisch|||mãn tính|Sie hat eine {chronische} Krankheit.|Cô ấy mắc bệnh mãn tính.|
adj|ansteckend|||dễ lây|Die Grippe ist {ansteckend}.|Bệnh cúm dễ lây.|
adj|schmerzhaft|||gây đau|Die Behandlung war {schmerzhaft}.|Việc điều trị rất đau.|
adj|verschreibungspflichtig|||phải có đơn thuốc|Das Medikament ist {verschreibungspflichtig}.|Thuốc này phải có đơn bác sĩ.|
adj|ausgewogen|||cân bằng|Achten Sie auf eine {ausgewogene} Ernährung.|Hãy chú ý chế độ ăn cân bằng.|
adj|körperlich|||thuộc về thể chất|{Körperliche} Arbeit ist anstrengend.|Lao động chân tay rất mệt.|
adj|seelisch|||thuộc về tinh thần|Sie hat {seelische} Probleme.|Cô ấy có vấn đề về tinh thần.|
adj|erschöpft|||kiệt sức|Nach der Nachtschicht bin ich {erschöpft}.|Sau ca đêm tôi kiệt sức.|
adj|übergewichtig|||thừa cân|Viele Kinder sind {übergewichtig}.|Nhiều trẻ em bị thừa cân.|
adj|schwanger|||có thai|Meine Schwester ist {schwanger}.|Chị tôi đang mang thai.|
adj|blass|||xanh xao|Du siehst {blass} aus.|Trông bạn xanh xao.|
adj|bewusstlos|||bất tỉnh|Der Mann war kurz {bewusstlos}.|Người đàn ông bất tỉnh một lúc.|
adj|vorsichtig|||cẩn thận|Sei {vorsichtig}, der Boden ist nass.|Cẩn thận, sàn ướt đấy.|
p|zur Vorsorge gehen|||đi khám định kỳ|Ich {gehe} einmal im Jahr zur Vorsorge.|Mỗi năm tôi đi khám định kỳ một lần.|
p|krankgeschrieben sein|||được cho nghỉ ốm|Ich {bin} eine Woche krankgeschrieben.|Tôi được nghỉ ốm một tuần.|
p|auf nüchternen Magen|||lúc bụng đói|Nehmen Sie die Tablette {auf nüchternen Magen}.|Uống thuốc lúc bụng đói.|
p|wieder auf den Beinen sein|||khỏe lại|Nach einer Woche {war} ich wieder auf den Beinen.|Sau một tuần tôi đã khỏe lại.|
g|n-Deklination: thêm -n/-en|||danh từ giống đực đặc biệt|Ich spreche mit dem {Patienten}.|Tôi nói chuyện với bệnh nhân.|der Patient, den/dem/des Patienten; tương tự: Kollege, Student, Herr, Mensch.
g|je … desto|||càng … càng|Je mehr du schläfst, desto {besser} fühlst du dich.|Bạn càng ngủ nhiều càng thấy khỏe.|je + so sánh hơn … (động từ cuối), desto + so sánh hơn + động từ.
g|Phân từ I làm tính từ: -end|||đang (diễn ra)|Das ist eine {ansteckende} Krankheit.|Đây là một bệnh dễ lây.|Infinitiv + d + đuôi tính từ: lachend, weinend, steigend.
g|Phân từ II làm tính từ|||đã (bị) làm|Das {gebrochene} Bein heilt langsam.|Cái chân bị gãy lành chậm.|Partizip II + đuôi tính từ: die geschlossene Tür.
n|Sprechstunde|die|-n|giờ khám|Die {Sprechstunde} ist von acht bis zwölf.|Giờ khám từ tám đến mười hai giờ.|
n|Krankenschwester|die|-n|y tá (nữ)|Die {Krankenschwester} misst Fieber.|Cô y tá đo nhiệt độ.|Nam: der Krankenpfleger.
n|Station|die|-en|khoa (bệnh viện)|Er liegt auf der {Station} für Innere Medizin.|Anh ấy nằm ở khoa nội.|
n|Wunde|die|-n|vết thương|Die {Wunde} blutet stark.|Vết thương chảy máu nhiều.|
n|Knochen|der|-|xương|Der {Knochen} ist gebrochen.|Xương bị gãy.|
n|Knie|das|-|đầu gối|Mein {Knie} tut beim Laufen weh.|Tôi đau đầu gối khi chạy.|
n|Muskel|der|-n|cơ bắp|Beim Training wird jeder {Muskel} gestärkt.|Khi tập luyện mọi cơ bắp đều được tăng cường.|
n|Kreislauf|der|¨-e|tuần hoàn|Bei Hitze hat sie Probleme mit dem {Kreislauf}.|Khi trời nóng cô ấy bị vấn đề tuần hoàn.|
n|Schwindel|der||chóng mặt|Ich habe {Schwindel} und Kopfschmerzen.|Tôi chóng mặt và đau đầu.|
n|Übelkeit|die||buồn nôn|Das Medikament kann {Übelkeit} verursachen.|Thuốc có thể gây buồn nôn.|
n|Dosis|die|Dosen|liều lượng|Nehmen Sie nicht mehr als die angegebene {Dosis}.|Đừng dùng quá liều đã ghi.|
v|bluten|||chảy máu|Meine Nase {blutet}.|Mũi tôi chảy máu.|er blutet, hat geblutet
v|brechen|||làm gãy; nôn|Er hat sich das Bein {gebrochen}.|Anh ấy bị gãy chân.|du brichst, er bricht, brach, hat gebrochen
v|sich übergeben|||nôn|Das Kind hat {sich} übergeben.|Đứa trẻ bị nôn.|du übergibst dich, er übergibt sich, hat sich übergeben
v|verursachen|||gây ra|Rauchen {verursacht} Krebs.|Hút thuốc gây ung thư.|er verursacht, hat verursacht
adj|akut|||cấp tính|Er hat eine {akute} Entzündung.|Anh ấy bị viêm cấp tính.|
adj|harmlos|||vô hại|Die Erkältung ist {harmlos}.|Cảm lạnh thì không sao.|
adj|lebensgefährlich|||nguy hiểm đến tính mạng|Die Verletzung ist nicht {lebensgefährlich}.|Vết thương không nguy hiểm đến tính mạng.|
p|Muskelkater haben|||đau mỏi cơ|Nach dem Training {habe} ich Muskelkater.|Sau buổi tập tôi bị đau cơ.|
`;
export default pack;
