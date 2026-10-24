// B1 · 01 Tiểu sử và ký ức. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Biografie|die|-n|tiểu sử|Ich lese gerade die {Biografie} eines Malers.|Tôi đang đọc tiểu sử của một họa sĩ.|
n|Lebensweg|der|-e|con đường đời|Sein {Lebensweg} war nicht einfach.|Con đường đời của anh ấy không dễ dàng.|
n|Herkunft|die||nguồn gốc, xuất thân|Sie spricht offen über ihre {Herkunft}.|Cô ấy nói cởi mở về xuất thân của mình.|
n|Generation|die|-en|thế hệ|Drei {Generationen} leben in einem Haus.|Ba thế hệ sống trong một ngôi nhà.|
n|Vorfahre|der|-n|tổ tiên|Meine {Vorfahren} kamen aus China.|Tổ tiên tôi đến từ Trung Quốc.|n-Deklination.
n|Ereignis|das|-se|sự kiện|Das war ein wichtiges {Ereignis} in meinem Leben.|Đó là một sự kiện quan trọng trong đời tôi.|
n|Wendepunkt|der|-e|bước ngoặt|Das Studium im Ausland war ein {Wendepunkt}.|Du học là một bước ngoặt.|
n|Entscheidung|die|-en|quyết định|Das war die richtige {Entscheidung}.|Đó là quyết định đúng.|
n|Erfolg|der|-e|thành công|Sie hatte großen {Erfolg} im Beruf.|Cô ấy rất thành công trong nghề nghiệp.|
n|Misserfolg|der|-e|thất bại|Aus jedem {Misserfolg} kann man lernen.|Từ mỗi thất bại đều có thể học được điều gì đó.|
n|Schicksal|das|-e|số phận|Er glaubt an das {Schicksal}.|Anh ấy tin vào số phận.|
n|Lebensabschnitt|der|-e|giai đoạn cuộc đời|Ein neuer {Lebensabschnitt} beginnt.|Một giai đoạn mới của cuộc đời bắt đầu.|
n|Kriegszeit|die|-en|thời chiến|In der {Kriegszeit} war das Leben schwer.|Thời chiến cuộc sống rất khó khăn.|
n|Flucht|die|-en|cuộc chạy trốn, tị nạn|Die {Flucht} dauerte mehrere Monate.|Cuộc chạy nạn kéo dài nhiều tháng.|
n|Heimat|die|-en|quê hương|Ich vermisse meine {Heimat}.|Tôi nhớ quê hương.|
n|Auswanderung|die|-en|sự di cư ra nước ngoài|Die {Auswanderung} nach Kanada war ein großer Schritt.|Di cư sang Canada là một bước lớn.|
n|Witwe|die|-n|bà góa|Seit zehn Jahren ist sie {Witwe}.|Bà ấy góa chồng đã mười năm.|Nam: der Witwer.
n|Enkel|der|-|cháu (nội/ngoại, nam)|Meine Oma hat sechs {Enkel}.|Bà tôi có sáu đứa cháu.|Nữ: die Enkelin.
p|die Verwandten|||họ hàng|Am Wochenende kommen alle {Verwandten}.|Cuối tuần tất cả họ hàng đến.|der/die Verwandte là tính từ dùng như danh từ: ein Verwandter, eine Verwandte.
n|Rentner|der|-|người về hưu (nam)|Mein Großvater ist {Rentner}.|Ông tôi là người về hưu.|Nữ: die Rentnerin.
n|Gedächtnis|das|-se|trí nhớ|Mein Opa hat ein gutes {Gedächtnis}.|Ông tôi có trí nhớ tốt.|
n|Tagebuch|das|¨-er|nhật ký|Als Kind schrieb ich ein {Tagebuch}.|Hồi nhỏ tôi viết nhật ký.|
n|Fotoalbum|das|-alben|album ảnh|Wir schauen uns das alte {Fotoalbum} an.|Chúng tôi xem album ảnh cũ.|
n|Jahrzehnt|das|-e|thập kỷ|Vor zwei {Jahrzehnten} war alles anders.|Hai thập kỷ trước mọi thứ đều khác.|
n|Jahrhundert|das|-e|thế kỷ|Das Haus stammt aus dem 19. {Jahrhundert}.|Ngôi nhà có từ thế kỷ 19.|
n|Alltagsleben|das||đời sống hằng ngày|Das {Alltagsleben} damals war einfach.|Đời sống hằng ngày khi ấy giản dị.|
v|wurde|||đã trở thành (Präteritum của werden)|Mit 25 {wurde} sie Ärztin.|Năm 25 tuổi cô ấy trở thành bác sĩ.|werden → wurde, ist geworden
v|ging|||đã đi (Präteritum của gehen)|Danach {ging} er nach Berlin.|Sau đó anh ấy đi Berlin.|gehen → ging, ist gegangen
v|kam|||đã đến (Präteritum của kommen)|1990 {kam} meine Familie nach Deutschland.|Năm 1990 gia đình tôi sang Đức.|kommen → kam, ist gekommen
v|fand|||đã tìm thấy (Präteritum của finden)|Er {fand} schnell eine Arbeit.|Anh ấy nhanh chóng tìm được việc.|finden → fand, hat gefunden
v|blieb|||đã ở lại (Präteritum của bleiben)|Sie {blieb} zehn Jahre in Hamburg.|Cô ấy ở lại Hamburg mười năm.|bleiben → blieb, ist geblieben
v|begann|||đã bắt đầu (Präteritum của beginnen)|Der Krieg {begann} 1939.|Chiến tranh bắt đầu năm 1939.|beginnen → begann, hat begonnen
v|verließ|||đã rời (Präteritum của verlassen)|Mit 18 {verließ} er sein Dorf.|Năm 18 tuổi anh ấy rời làng.|verlassen → verließ, hat verlassen
v|verlassen|||rời bỏ, rời khỏi|Sie wollte ihre Heimat nicht {verlassen}.|Cô ấy không muốn rời quê hương.|du verlässt, er verlässt, verließ, hat verlassen
v|gründen|||thành lập|Mein Vater {gründete} 1995 eine Firma.|Bố tôi thành lập công ty năm 1995.|er gründet, gründete, hat gegründet
v|auswandern|||di cư ra nước ngoài|Viele junge Leute {wandern} aus.|Nhiều người trẻ di cư ra nước ngoài.|Động từ tách: er wandert aus, ist ausgewandert
v|zurückkehren|||trở về|Nach zehn Jahren {kehrte} er in die Heimat zurück.|Sau mười năm anh ấy trở về quê.|Động từ tách: er kehrt zurück, ist zurückgekehrt
v|sich verändern|||thay đổi|Die Stadt hat {sich} sehr verändert.|Thành phố đã thay đổi rất nhiều.|er verändert sich, hat sich verändert
v|erinnern an|||nhắc nhớ đến|Das Lied {erinnert} mich an meine Jugend.|Bài hát làm tôi nhớ thời trẻ.|erinnern + Akk (người) + an + Akk
v|aufgeben|||từ bỏ|Er hat nie {aufgegeben}.|Anh ấy không bao giờ bỏ cuộc.|Động từ tách: er gibt auf, gab auf, hat aufgegeben
v|überleben|||sống sót|Die Familie hat den Krieg {überlebt}.|Gia đình đã sống sót qua chiến tranh.|er überlebt, hat überlebt
v|stammen|||có nguồn gốc|Meine Mutter {stammt} aus Hue.|Mẹ tôi gốc Huế.|er stammt, hat gestammt; aus + Dativ
v|großziehen|||nuôi lớn|Sie hat vier Kinder allein {großgezogen}.|Bà ấy một mình nuôi lớn bốn đứa con.|Động từ tách: er zieht groß, hat großgezogen
v|verbringen|||trải qua (thời gian)|Ich {verbrachte} meine Kindheit am Meer.|Tôi trải qua thời thơ ấu bên biển.|er verbringt, verbrachte, hat verbracht
v|sich entwickeln|||phát triển|Das Kind hat {sich} gut entwickelt.|Đứa trẻ phát triển tốt.|er entwickelt sich, hat sich entwickelt
adj|ehemalig|||cũ, trước đây|Er ist ein {ehemaliger} Kollege von mir.|Anh ấy là đồng nghiệp cũ của tôi.|
adj|damalig|||thời đó|Die {damalige} Regierung war streng.|Chính phủ thời đó rất nghiêm khắc.|
adj|unvergesslich|||khó quên|Die Reise war {unvergesslich}.|Chuyến đi không thể nào quên.|
adj|arm|||nghèo|Die Familie war sehr {arm}.|Gia đình rất nghèo.|
adj|reich|||giàu|Später wurde er {reich}.|Về sau anh ấy trở nên giàu có.|
adj|mutig|||dũng cảm|Das war eine {mutige} Entscheidung.|Đó là một quyết định dũng cảm.|
adj|stolz|||tự hào|Ich bin {stolz} auf meine Eltern.|Tôi tự hào về bố mẹ.|stolz auf + Akk
adj|dankbar|||biết ơn|Ich bin meinen Lehrern sehr {dankbar}.|Tôi rất biết ơn các thầy cô.|dankbar + Dativ (người) / für + Akk
adj|erfolgreich|||thành công|Sie ist eine {erfolgreiche} Unternehmerin.|Bà ấy là một nữ doanh nhân thành công.|
adj|bekannt|||được biết đến, quen biết|Der Autor ist in Vietnam sehr {bekannt}.|Tác giả rất nổi tiếng ở Việt Nam.|
adv|inzwischen|||trong khi đó; giờ đây|{Inzwischen} lebe ich in München.|Giờ đây tôi sống ở München.|
adv|später|||sau này|{Später} wollte er Lehrer werden.|Sau này anh ấy muốn làm giáo viên.|
adv|zunächst|||trước hết, ban đầu|{Zunächst} arbeitete sie als Kellnerin.|Ban đầu cô ấy làm bồi bàn.|
adv|schließlich|||cuối cùng|{Schließlich} fand er eine Wohnung.|Cuối cùng anh ấy tìm được căn hộ.|
adv|bereits|||đã (trang trọng)|Sie war {bereits} verheiratet.|Cô ấy đã kết hôn rồi.|
adv|kaum|||hầu như không|Ich kann mich {kaum} daran erinnern.|Tôi hầu như không nhớ điều đó.|
adv|jemals|||đã từng bao giờ|Warst du {jemals} in Europa?|Bạn đã từng đến châu Âu bao giờ chưa?|
conj|nachdem|||sau khi|{Nachdem} er das Abitur gemacht hatte, studierte er.|Sau khi đỗ tú tài, anh ấy học đại học.|nachdem + Plusquamperfekt / Perfekt.
conj|seitdem|||kể từ khi|{Seitdem} ich hier wohne, bin ich glücklich.|Kể từ khi sống ở đây tôi hạnh phúc.|
p|ums Leben kommen|||thiệt mạng|Bei dem Unfall {kamen} zwei Menschen ums Leben.|Hai người thiệt mạng trong vụ tai nạn.|
p|auf die Welt kommen|||chào đời|Ich {kam} 1998 in Can Tho auf die Welt.|Tôi chào đời năm 1998 ở Cần Thơ.|
p|im Laufe der Zeit|||theo thời gian|{Im Laufe der Zeit} hat sich viel verändert.|Theo thời gian nhiều thứ đã thay đổi.|
p|in jungen Jahren|||khi còn trẻ|{In jungen Jahren} reiste er viel.|Hồi trẻ ông ấy đi du lịch nhiều.|
p|eine Familie gründen|||lập gia đình|Mit 30 wollte sie {eine Familie gründen}.|Năm 30 tuổi cô ấy muốn lập gia đình.|
p|Abschied nehmen|||từ biệt|Wir mussten {Abschied nehmen}.|Chúng tôi phải từ biệt.|Abschied nehmen von + Dativ.
g|Präteritum động từ yếu: -te|||thì quá khứ trong văn viết|Er {arbeitete} in einer Fabrik.|Ông ấy làm việc trong một nhà máy.|ich arbeitete, du arbeitetest, er arbeitete, wir arbeiteten.
g|Präteritum động từ mạnh: đổi nguyên âm|||không có đuôi ở ngôi 1 và 3|Sie {schrieb} viele Briefe.|Bà ấy viết nhiều thư.|schreiben → schrieb, fahren → fuhr, sehen → sah, gehen → ging.
g|als hay wenn?|||khi trong quá khứ|Immer {wenn} ich Oma besuchte, kochte sie Pho.|Mỗi lần tôi thăm bà, bà nấu phở.|als: một lần trong quá khứ; wenn: lặp lại (immer wenn) hoặc hiện tại/tương lai.
g|Plusquamperfekt: hatte/war + Partizip II|||việc xảy ra trước một việc khác trong quá khứ|Nachdem wir gegessen {hatten}, gingen wir spazieren.|Sau khi ăn xong, chúng tôi đi dạo.|hatte/war (Präteritum) + Partizip II.
g|Năm trong câu|||nói năm không dùng giới từ hoặc dùng im Jahr|{Im Jahr} 2010 kam ich nach Hanoi.|Năm 2010 tôi đến Hà Nội.|2010 kam ich … hoặc Im Jahr 2010 …; không nói "in 2010".
n|Lebensjahr|das|-e|năm tuổi (của đời)|Im ersten {Lebensjahr} lernen Babys sehr viel.|Trong năm đầu đời trẻ học rất nhiều.|
n|Geburt|die|-en|sự ra đời|Nach der {Geburt} ihrer Tochter arbeitete sie Teilzeit.|Sau khi sinh con gái, cô ấy làm bán thời gian.|
n|Tod|der|-e|cái chết|Der {Tod} seiner Mutter war ein Schock.|Cái chết của mẹ anh ấy là một cú sốc.|
n|Lebensgeschichte|die|-n|câu chuyện cuộc đời|Sie erzählte uns ihre {Lebensgeschichte}.|Bà ấy kể cho chúng tôi câu chuyện cuộc đời mình.|
n|Ruhestand|der||thời kỳ nghỉ hưu|Seit zwei Jahren ist er im {Ruhestand}.|Ông ấy nghỉ hưu đã hai năm.|
n|Ausreise|die|-n|sự xuất cảnh|Die {Ausreise} war damals schwierig.|Xuất cảnh thời đó rất khó.|
n|Einwanderer|der|-|người nhập cư (nam)|Viele {Einwanderer} arbeiten in der Pflege.|Nhiều người nhập cư làm trong ngành điều dưỡng.|Nữ: die Einwanderin.
n|Abschied|der|-e|sự chia tay|Der {Abschied} am Flughafen war traurig.|Cuộc chia tay ở sân bay thật buồn.|
n|Neuanfang|der|¨-e|sự khởi đầu mới|Der Umzug war ein {Neuanfang}.|Chuyển nhà là một khởi đầu mới.|
v|aufbrechen|||lên đường|Am frühen Morgen {brachen} wir auf.|Sáng sớm chúng tôi lên đường.|Động từ tách: er bricht auf, brach auf, ist aufgebrochen
v|erben|||thừa kế|Sie hat das Haus von ihrer Oma {geerbt}.|Cô ấy thừa kế ngôi nhà từ bà.|er erbt, hat geerbt
v|sich trauen|||dám|Damals {traute} ich mich nicht, ihn anzusprechen.|Hồi đó tôi không dám bắt chuyện với anh ấy.|er traut sich, hat sich getraut
v|bereuen|||hối hận|Ich {bereue} nichts.|Tôi không hối hận điều gì.|er bereut, hat bereut
v|wagen|||dám làm, liều|Er {wagte} den Schritt ins Ausland.|Anh ấy dám bước ra nước ngoài.|er wagt, hat gewagt
v|sich verabschieden|||chào từ biệt|Wir haben {uns} am Bahnhof verabschiedet.|Chúng tôi chào tạm biệt nhau ở nhà ga.|er verabschiedet sich, hat sich verabschiedet
adj|einzig|||duy nhất|Er ist das {einzige} Kind.|Anh ấy là con một.|
adj|bescheiden|||khiêm tốn, giản dị|Meine Großeltern lebten sehr {bescheiden}.|Ông bà tôi sống rất giản dị.|
adj|prägend|||có tính định hình|Die Zeit in Berlin war sehr {prägend}.|Thời gian ở Berlin đã định hình tôi rất nhiều.|
adv|seinerzeit|||vào thời đó|{Seinerzeit} gab es noch keine Handys.|Thời đó chưa có điện thoại di động.|
p|aus eigener Erfahrung|||từ kinh nghiệm bản thân|Das weiß ich {aus eigener Erfahrung}.|Tôi biết điều đó từ kinh nghiệm bản thân.|
`;
export default pack;
