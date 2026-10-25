// B2 · 11 Văn học và nghệ thuật. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Literatur|die|-en|văn học|Sie studiert deutsche {Literatur}.|Cô ấy học văn học Đức.|
n|Werk|das|-e|tác phẩm|Das ist sein bekanntestes {Werk}.|Đây là tác phẩm nổi tiếng nhất của ông ấy.|
n|Erzählung|die|-en|truyện kể|Die {Erzählung} spielt im 19. Jahrhundert.|Câu chuyện diễn ra vào thế kỷ 19.|
n|Kurzgeschichte|die|-n|truyện ngắn|Wir lesen eine {Kurzgeschichte} von Borchert.|Chúng tôi đọc một truyện ngắn của Borchert.|
n|Novelle|die|-n|truyện vừa|Die {Novelle} hat nur 80 Seiten.|Truyện vừa chỉ có 80 trang.|
n|Hauptfigur|die|-en|nhân vật chính|Die {Hauptfigur} ist ein junger Arzt.|Nhân vật chính là một bác sĩ trẻ.|
n|Erzähler|der|-|người kể chuyện|Der {Erzähler} beschreibt alles aus seiner Sicht.|Người kể chuyện miêu tả mọi thứ từ góc nhìn của mình.|
n|Perspektive|die|-n|góc nhìn|Die Geschichte wird aus der {Perspektive} eines Kindes erzählt.|Câu chuyện được kể từ góc nhìn của một đứa trẻ.|
n|Motiv|das|-e|mô-típ; động cơ|Das {Motiv} der Reise kommt oft vor.|Mô-típ chuyến đi xuất hiện thường xuyên.|
n|Epoche|die|-n|thời kỳ|Goethe gehört zur {Epoche} der Klassik.|Goethe thuộc thời kỳ cổ điển.|
n|Gattung|die|-en|thể loại|Der Roman ist eine literarische {Gattung}.|Tiểu thuyết là một thể loại văn học.|
n|Verlag|der|-e|nhà xuất bản|Der {Verlag} veröffentlicht das Buch im Herbst.|Nhà xuất bản phát hành sách vào mùa thu.|
n|Übersetzung|die|-en|bản dịch|Die {Übersetzung} ist sehr gelungen.|Bản dịch rất thành công.|
n|Lesung|die|-en|buổi đọc sách|Die Autorin hält eine {Lesung} in der Bibliothek.|Nữ tác giả tổ chức buổi đọc sách ở thư viện.|
n|Bestseller|der|-|sách bán chạy|Das Buch wurde ein {Bestseller}.|Cuốn sách trở thành sách bán chạy.|
n|Rezension|die|-en|bài điểm sách|Die {Rezension} in der Zeitung war positiv.|Bài điểm sách trên báo rất tích cực.|
n|Leidenschaft|die|-en|niềm đam mê|Malen ist ihre große {Leidenschaft}.|Vẽ tranh là niềm đam mê lớn của cô ấy.|
n|Fantasie|die|-n|trí tưởng tượng|Kinder haben viel {Fantasie}.|Trẻ em có nhiều trí tưởng tượng.|
n|Inspiration|die|-en|nguồn cảm hứng|Die Natur ist ihre {Inspiration}.|Thiên nhiên là nguồn cảm hứng của cô ấy.|
n|Metapher|die|-n|ẩn dụ|Der Text enthält viele {Metaphern}.|Văn bản chứa nhiều ẩn dụ.|
n|Kunstrichtung|die|-en|trường phái nghệ thuật|Der Expressionismus ist eine {Kunstrichtung}.|Chủ nghĩa biểu hiện là một trường phái nghệ thuật.|
n|Meisterwerk|das|-e|kiệt tác|Das Bild ist ein {Meisterwerk}.|Bức tranh là một kiệt tác.|
n|Kulturerbe|das||di sản văn hóa|Die Altstadt gehört zum {Kulturerbe}.|Phố cổ thuộc về di sản văn hóa.|
v|verfassen|||soạn, viết (tác phẩm)|Er {verfasste} mehrere Romane.|Ông ấy đã viết nhiều tiểu thuyết.|er verfasst, hat verfasst
v|interpretieren|||diễn giải|Wie {interpretierst} du das Ende?|Bạn diễn giải đoạn kết thế nào?|er interpretiert, hat interpretiert
v|schildern|||mô tả, thuật lại|Der Autor {schildert} das Leben auf dem Land.|Tác giả mô tả cuộc sống ở nông thôn.|er schildert, hat geschildert
v|handeln|||nói về; hành động|Der Roman {handelt} von einer Familie.|Cuốn tiểu thuyết nói về một gia đình.|es handelt, hat gehandelt; von + Dativ
v|sich hineinversetzen|||đặt mình vào vị trí|Man kann sich gut in die Figur {hineinversetzen}.|Có thể dễ dàng đặt mình vào vị trí nhân vật.|Động từ tách: er versetzt sich hinein, hat sich hineinversetzt
v|inspirieren|||truyền cảm hứng|Die Reise hat ihn {inspiriert}.|Chuyến đi đã truyền cảm hứng cho anh ấy.|er inspiriert, hat inspiriert
v|wirken|||có vẻ; có tác dụng|Das Bild {wirkt} sehr traurig.|Bức tranh có vẻ rất buồn.|er wirkt, hat gewirkt
adj|literarisch|||văn học|Das ist ein {literarischer} Text.|Đây là một văn bản văn học.|
adj|fesselnd|||cuốn hút|Der Roman ist {fesselnd} geschrieben.|Tiểu thuyết được viết rất cuốn hút.|
adj|ausdrucksstark|||giàu sức biểu cảm|Die Bilder sind sehr {ausdrucksstark}.|Các bức tranh rất giàu sức biểu cảm.|
adj|zeitlos|||vượt thời gian|Die Geschichte ist {zeitlos}.|Câu chuyện mang tính vượt thời gian.|
adj|autobiografisch|||tự truyện|Der Roman ist {autobiografisch}.|Tiểu thuyết mang tính tự truyện.|
adj|fiktiv|||hư cấu|Die Figuren sind {fiktiv}.|Các nhân vật là hư cấu.|
adj|bedeutend|||quan trọng, lớn|Er ist ein {bedeutender} Autor.|Ông ấy là một tác giả lớn.|
adj|gelungen|||thành công, hay|Die Aufführung war sehr {gelungen}.|Buổi diễn rất thành công.|
adv|eben|||chính là, thì vậy (hạt từ)|So ist das {eben}.|Thì nó là như vậy đấy.|Hạt từ thể hiện sự chấp nhận.
adv|doch|||mà, đi mà (hạt từ)|Komm {doch} mit!|Đi cùng đi mà!|Hạt từ làm lời mời thân mật hơn.
adv|ja|||mà (nhấn điều đã biết)|Das ist {ja} interessant!|Thú vị thật đấy!|Hạt từ thể hiện ngạc nhiên hoặc điều ai cũng biết.
p|zum Ausdruck bringen|||thể hiện|Der Dichter {bringt} seine Trauer zum Ausdruck.|Nhà thơ thể hiện nỗi buồn của mình.|
p|in den Bann ziehen|||mê hoặc|Das Buch hat mich {in seinen Bann gezogen}.|Cuốn sách đã mê hoặc tôi.|
p|zwischen den Zeilen lesen|||đọc giữa các dòng chữ|Man muss {zwischen den Zeilen lesen}.|Phải hiểu ẩn ý giữa các dòng chữ.|
g|Präteritum trong văn kể|||thì kể chuyện chuẩn trong văn viết|Es {war} einmal ein armer Müller.|Ngày xưa có một người thợ xay nghèo.|Văn viết, truyện: Präteritum; văn nói: Perfekt.
g|Đảo ngữ nhấn mạnh|||đưa thành phần cần nhấn lên đầu câu|Diesen Roman {habe} ich dreimal gelesen.|Cuốn tiểu thuyết này tôi đã đọc ba lần.|Tân ngữ đứng đầu vẫn giữ động từ ở vị trí 2.
g|Hạt từ tình thái: doch, ja, eben, mal|||sắc thái trong văn nói|Ruf mich {mal} an!|Gọi cho tôi nhé!|mal làm lời yêu cầu nhẹ nhàng hơn.
g|handeln von / es geht um|||nói về nội dung|In dem Roman geht es {um} eine Familie.|Cuốn tiểu thuyết nói về một gia đình.|Der Roman handelt von + Dativ = In dem Roman geht es um + Akk.
n|Lyrik|die||thơ ca|Sie liest gern moderne {Lyrik}.|Cô ấy thích đọc thơ hiện đại.|
n|Drama|das|Dramen|kịch|Das {Drama} hat fünf Akte.|Vở kịch có năm hồi.|
n|Akt|der|-e|hồi (kịch)|Im dritten {Akt} stirbt der Held.|Ở hồi ba người anh hùng chết.|
n|Strophe|die|-n|khổ thơ|Das Gedicht hat vier {Strophen}.|Bài thơ có bốn khổ.|
n|Reim|der|-e|vần|Das Gedicht hat keinen {Reim}.|Bài thơ không có vần.|
n|Spannungsbogen|der|¨|mạch căng thẳng (cốt truyện)|Der {Spannungsbogen} ist gut aufgebaut.|Mạch căng thẳng được xây dựng tốt.|
n|Höhepunkt|der|-e|cao trào|Der {Höhepunkt} der Geschichte kommt am Ende.|Cao trào của câu chuyện đến ở cuối.|
n|Wendung|die|-en|bước ngoặt (cốt truyện)|Die Geschichte nimmt eine überraschende {Wendung}.|Câu chuyện có một bước ngoặt bất ngờ.|
n|Schauplatz|der|¨-e|bối cảnh, nơi xảy ra|Der {Schauplatz} der Geschichte ist Wien.|Bối cảnh câu chuyện là Wien.|
n|Gegenwartsliteratur|die||văn học đương đại|Sie forscht über {Gegenwartsliteratur}.|Bà ấy nghiên cứu văn học đương đại.|
n|Klassiker|der|-|tác phẩm kinh điển|Dieser Roman ist ein {Klassiker}.|Cuốn tiểu thuyết này là tác phẩm kinh điển.|
n|Kunstsammlung|die|-en|bộ sưu tập nghệ thuật|Das Museum besitzt eine große {Kunstsammlung}.|Bảo tàng sở hữu một bộ sưu tập nghệ thuật lớn.|
n|Bildhauer|der|-|nhà điêu khắc (nam)|Der {Bildhauer} arbeitet mit Marmor.|Nhà điêu khắc làm việc với đá cẩm thạch.|Nữ: die Bildhauerin.
n|Architektur|die|-en|kiến trúc|Ich bewundere die {Architektur} der Stadt.|Tôi ngưỡng mộ kiến trúc của thành phố.|
n|Kunstkritiker|der|-|nhà phê bình nghệ thuật|Der {Kunstkritiker} lobte die Ausstellung.|Nhà phê bình nghệ thuật khen ngợi triển lãm.|
n|Filmfestival|das|-s|liên hoan phim|Der Film wurde auf dem {Filmfestival} gezeigt.|Bộ phim được chiếu tại liên hoan phim.|
n|Uraufführung|die|-en|buổi công diễn đầu tiên|Die {Uraufführung} war ein großer Erfolg.|Buổi công diễn đầu tiên là một thành công lớn.|
n|Verfilmung|die|-en|bản chuyển thể thành phim|Die {Verfilmung} ist besser als das Buch.|Bản phim hay hơn cuốn sách.|
n|Bühnenbild|das|-er|thiết kế sân khấu|Das {Bühnenbild} war sehr modern.|Thiết kế sân khấu rất hiện đại.|
n|Kulturszene|die|-n|đời sống văn hóa nghệ thuật|Berlin hat eine lebendige {Kulturszene}.|Berlin có đời sống văn hóa sôi động.|
v|verfilmen|||chuyển thể thành phim|Der Roman wurde 2010 {verfilmt}.|Cuốn tiểu thuyết được chuyển thể thành phim năm 2010.|er verfilmt, hat verfilmt
v|vortragen|||trình bày, ngâm (thơ)|Sie {trägt} ein Gedicht vor.|Cô ấy ngâm một bài thơ.|Động từ tách: du trägst vor, er trägt vor, trug vor, hat vorgetragen
v|rezensieren|||viết bài điểm|Der Kritiker hat das Buch {rezensiert}.|Nhà phê bình đã viết bài điểm cuốn sách.|er rezensiert, hat rezensiert
v|ansprechen|||chạm đến, thu hút|Das Bild {spricht} mich sehr an.|Bức tranh rất thu hút tôi.|Động từ tách: du sprichst an, er spricht an, sprach an, hat angesprochen
v|thematisieren|||đưa thành chủ đề|Der Film {thematisiert} die Armut.|Bộ phim lấy nghèo đói làm chủ đề.|er thematisiert, hat thematisiert
v|verkörpern|||hiện thân, thủ vai|Die Figur {verkörpert} die Hoffnung.|Nhân vật là hiện thân của niềm hy vọng.|er verkörpert, hat verkörpert
v|gestalten|||tạo hình, thiết kế|Sie {gestaltet} die Bühne.|Cô ấy thiết kế sân khấu.|er gestaltet, hat gestaltet
v|sich widerspiegeln|||phản ánh|Im Roman {spiegelt} sich die Zeit wider.|Cuốn tiểu thuyết phản ánh thời đại.|Động từ tách: es spiegelt sich wider, hat sich widergespiegelt
adj|poetisch|||thơ mộng, giàu chất thơ|Die Sprache ist sehr {poetisch}.|Ngôn ngữ rất giàu chất thơ.|
adj|dramatisch|||kịch tính|Das Ende ist sehr {dramatisch}.|Đoạn kết rất kịch tính.|
adj|ironisch|||mỉa mai|Der Ton des Textes ist {ironisch}.|Giọng văn mang tính mỉa mai.|
adj|tiefsinnig|||sâu sắc|Das Gedicht ist sehr {tiefsinnig}.|Bài thơ rất sâu sắc.|
adj|vielschichtig|||nhiều tầng nghĩa|Die Figuren sind {vielschichtig}.|Các nhân vật có nhiều tầng lớp.|
adj|provokant|||khiêu khích|Die Ausstellung ist bewusst {provokant}.|Triển lãm cố ý mang tính khiêu khích.|
adj|zeitgenössisch|||đương đại|Sie sammelt {zeitgenössische} Kunst.|Bà ấy sưu tầm nghệ thuật đương đại.|
adj|stimmungsvoll|||giàu cảm xúc, có không khí|Die Musik ist sehr {stimmungsvoll}.|Âm nhạc rất có không khí.|
adj|unvergänglich|||bất hủ|Seine Werke sind {unvergänglich}.|Các tác phẩm của ông ấy là bất hủ.|
p|Beifall klatschen|||vỗ tay tán thưởng|Das Publikum {klatschte} lange Beifall.|Khán giả vỗ tay tán thưởng rất lâu.|
p|zu Tränen rühren|||làm cảm động rơi nước mắt|Der Film hat mich {zu Tränen gerührt}.|Bộ phim làm tôi cảm động rơi nước mắt.|
p|Geschmack treffen|||hợp gu|Das Buch {trifft} genau meinen Geschmack.|Cuốn sách rất hợp gu của tôi.|
n|Erzählperspektive|die|-n|ngôi kể|Die {Erzählperspektive} wechselt im Roman.|Ngôi kể thay đổi trong tiểu thuyết.|
n|Sprachbild|das|-er|hình ảnh ngôn ngữ|Der Dichter benutzt starke {Sprachbilder}.|Nhà thơ dùng những hình ảnh ngôn ngữ mạnh.|
n|Leseprobe|die|-n|đoạn đọc thử|Im Internet gibt es eine {Leseprobe}.|Trên mạng có một đoạn đọc thử.|
adj|anspielungsreich|||nhiều ẩn ý|Der Text ist {anspielungsreich}.|Văn bản nhiều ẩn ý.|
v|deuten|||giải nghĩa|Wie kann man das Ende {deuten}?|Có thể giải nghĩa đoạn kết thế nào?|er deutet, hat gedeutet
v|vertonen|||phổ nhạc|Das Gedicht wurde {vertont}.|Bài thơ đã được phổ nhạc.|er vertont, hat vertont
p|Bände sprechen|||nói lên rất nhiều|Ihr Blick {sprach} Bände.|Ánh mắt cô ấy nói lên rất nhiều.|
p|ein Buch verschlingen|||đọc ngấu nghiến|Ich habe {das Buch} in zwei Tagen verschlungen.|Tôi đã đọc ngấu nghiến cuốn sách trong hai ngày.|
n|Hauptdarsteller|der|-|nam diễn viên chính|Der {Hauptdarsteller} spielt sehr überzeugend.|Nam diễn viên chính diễn rất thuyết phục.|Nữ: die Hauptdarstellerin.
n|Drehbuch|das|¨-er|kịch bản phim|Das {Drehbuch} basiert auf einem Roman.|Kịch bản dựa trên một cuốn tiểu thuyết.|
n|Kritiker|der|-|nhà phê bình|Die {Kritiker} loben den Film.|Các nhà phê bình khen bộ phim.|Nữ: die Kritikerin.
v|verraten|||tiết lộ|Bitte {verrate} mir das Ende nicht!|Làm ơn đừng tiết lộ đoạn kết cho tôi!|du verrätst, er verrät, verriet, hat verraten
adj|hervorragend|||xuất sắc|Die Musik ist {hervorragend}.|Âm nhạc thật xuất sắc.|
n|Szene|die|-n|cảnh (phim, kịch)|Die letzte {Szene} hat mich berührt.|Cảnh cuối làm tôi xúc động.|
n|Fortsetzung|die|-en|phần tiếp theo|Gibt es eine {Fortsetzung}?|Có phần tiếp theo không?|
n|Spannung|die|-en|sự hồi hộp, kịch tính|Der Film hält die {Spannung} bis zum Ende.|Bộ phim giữ được kịch tính đến cuối.|
n|Begeisterung|die||sự hào hứng, say mê|Sie liest mit großer {Begeisterung}.|Cô ấy đọc với niềm say mê lớn.|
g|Trật tự Mittelfeld và vị trí nicht|||trật tự phần giữa câu|Ich habe den Film gestern {nicht} gesehen.|Hôm qua tôi đã không xem bộ phim.|Đại từ trước danh từ; Dativ trước Akkusativ (hai danh từ), Akkusativ trước Dativ (hai đại từ); te-ka-mo-lo; nicht cả câu đứng cuối Mittelfeld.
`;
export default pack;
