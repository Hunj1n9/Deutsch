// B1 · 13 Thảo luận và ý kiến. Tự soạn. Định dạng: lib/packs/format.ts
const pack = String.raw`
n|Diskussion|die|-en|cuộc thảo luận|Die {Diskussion} war sehr lebhaft.|Cuộc thảo luận rất sôi nổi.|
n|Argument|das|-e|lập luận|Das ist ein gutes {Argument}.|Đó là một lập luận tốt.|
n|Standpunkt|der|-e|quan điểm|Ich verstehe deinen {Standpunkt}.|Tôi hiểu quan điểm của bạn.|
n|Ansicht|die|-en|quan điểm, cách nhìn|Ich bin anderer {Ansicht}.|Tôi có quan điểm khác.|
n|Beispiel|das|-e|ví dụ|Kannst du ein {Beispiel} nennen?|Bạn nêu một ví dụ được không?|
n|Grund|der|¨-e|lý do|Aus welchem {Grund} bist du dagegen?|Vì lý do gì bạn phản đối?|
n|These|die|-n|luận điểm|Die {These} ist interessant, aber falsch.|Luận điểm thú vị nhưng sai.|
n|Zustimmung|die||sự đồng ý|Der Vorschlag fand breite {Zustimmung}.|Đề xuất được đông đảo đồng tình.|
n|Ablehnung|die|-en|sự phản đối|Die {Ablehnung} war deutlich.|Sự phản đối rất rõ ràng.|
n|Vorschlag|der|¨-e|đề xuất|Hast du einen besseren {Vorschlag}?|Bạn có đề xuất nào tốt hơn không?|
n|Einwand|der|¨-e|ý kiến phản bác|Gibt es {Einwände}?|Có ai phản đối không?|
n|Zweifel|der|-|sự nghi ngờ|Ich habe {Zweifel} an dieser Lösung.|Tôi nghi ngờ giải pháp này.|
n|Überzeugung|die|-en|niềm tin, sự tin chắc|Das ist meine feste {Überzeugung}.|Đó là niềm tin chắc chắn của tôi.|
n|Kritikpunkt|der|-e|điểm cần phê bình|Ein wichtiger {Kritikpunkt} ist der Preis.|Một điểm đáng phê bình là giá cả.|
n|Gegenargument|das|-e|lập luận phản bác|Ich habe ein {Gegenargument}.|Tôi có một lập luận phản bác.|
n|Thema|das|Themen|chủ đề|Das {Thema} ist sehr kontrovers.|Chủ đề này gây nhiều tranh cãi.|
n|Gesichtspunkt|der|-e|khía cạnh|Von diesem {Gesichtspunkt} aus hast du recht.|Từ khía cạnh này thì bạn đúng.|
n|Tatsache|die|-n|sự thật|Das ist eine {Tatsache}.|Đó là một sự thật.|
n|Erfahrungsbericht|der|-e|bài chia sẻ kinh nghiệm|Ich habe einen {Erfahrungsbericht} gelesen.|Tôi đã đọc một bài chia sẻ kinh nghiệm.|
n|Zusammenfassung|die|-en|bản tóm tắt|Hier ist eine kurze {Zusammenfassung}.|Đây là bản tóm tắt ngắn.|
n|Schluss|der|¨-e|phần kết, kết luận|Zum {Schluss} möchte ich noch etwas sagen.|Cuối cùng tôi muốn nói thêm một điều.|
n|Kompromisslösung|die|-en|giải pháp thỏa hiệp|Wir brauchen eine {Kompromisslösung}.|Chúng ta cần một giải pháp thỏa hiệp.|
v|meinen|||cho rằng; ý muốn nói|Was {meinst} du dazu?|Bạn nghĩ sao về điều đó?|er meint, hat gemeint
v|glauben|||tin, nghĩ rằng|Ich {glaube}, du hast recht.|Tôi nghĩ bạn đúng.|er glaubt, hat geglaubt
v|zustimmen|||đồng ý|Ich {stimme} dir völlig zu.|Tôi hoàn toàn đồng ý với bạn.|Động từ tách: er stimmt zu, hat zugestimmt; + Dativ
v|widersprechen|||phản đối, cãi lại|Da muss ich dir {widersprechen}.|Điểm này tôi phải phản đối bạn.|du widersprichst, er widerspricht, hat widersprochen; + Dativ
v|ablehnen|||từ chối, bác bỏ|Ich {lehne} diesen Vorschlag ab.|Tôi bác bỏ đề xuất này.|Động từ tách: er lehnt ab, hat abgelehnt
v|argumentieren|||lập luận|Sie {argumentiert} sehr klar.|Cô ấy lập luận rất rõ ràng.|er argumentiert, hat argumentiert
v|betonen|||nhấn mạnh|Ich möchte {betonen}, dass das wichtig ist.|Tôi muốn nhấn mạnh rằng điều này quan trọng.|er betont, hat betont
v|zweifeln|||nghi ngờ|Ich {zweifle} daran.|Tôi nghi ngờ điều đó.|er zweifelt, hat gezweifelt; an + Dativ
v|recht haben|||đúng, có lý|Du {hast} recht.|Bạn đúng.|du hast recht, er hat recht, hat recht gehabt
v|sich irren|||nhầm lẫn|Da {irrst} du dich.|Chỗ đó bạn nhầm rồi.|er irrt sich, hat sich geirrt
v|einverstanden sein|||đồng ý|Ich {bin} damit einverstanden.|Tôi đồng ý với điều đó.|einverstanden mit + Dativ
v|unterbrechen|||ngắt lời|Darf ich kurz {unterbrechen}?|Tôi có thể ngắt lời một chút không?|du unterbrichst, er unterbricht, hat unterbrochen
v|ergänzen|||bổ sung|Ich möchte noch etwas {ergänzen}.|Tôi muốn bổ sung một điều.|er ergänzt, hat ergänzt
v|überlegen|||cân nhắc|Ich muss mir das noch {überlegen}.|Tôi phải cân nhắc thêm.|er überlegt, hat überlegt; sich etwas überlegen
v|einsehen|||nhận ra, thừa nhận|Ich {sehe} ein, dass ich falsch lag.|Tôi thừa nhận rằng tôi đã sai.|Động từ tách: er sieht ein, sah ein, hat eingesehen
adj|überzeugt|||tin chắc|Ich bin davon {überzeugt}.|Tôi tin chắc điều đó.|überzeugt von + Dativ
adj|sinnvoll|||có ý nghĩa, hợp lý|Das finde ich {sinnvoll}.|Tôi thấy điều đó hợp lý.|
adj|sinnlos|||vô nghĩa|Die Diskussion ist {sinnlos}.|Cuộc thảo luận vô nghĩa.|
adj|logisch|||hợp lý, logic|Das klingt {logisch}.|Nghe có vẻ hợp lý.|
adj|fraglich|||còn đáng ngờ|Es ist {fraglich}, ob das funktioniert.|Còn chưa chắc điều đó có hiệu quả không.|
adj|eindeutig|||rõ ràng|Die Antwort ist {eindeutig}.|Câu trả lời rõ ràng.|
adj|kontrovers|||gây tranh cãi|Das Thema ist sehr {kontrovers}.|Chủ đề gây nhiều tranh cãi.|
adj|berechtigt|||chính đáng|Deine Kritik ist {berechtigt}.|Lời phê bình của bạn chính đáng.|
adj|übertrieben|||cường điệu|Das finde ich {übertrieben}.|Tôi thấy như vậy là quá.|
adj|einseitig|||phiến diện|Der Artikel ist sehr {einseitig}.|Bài báo rất phiến diện.|
adj|unbedingt|||nhất định, bằng mọi giá|Das müssen wir {unbedingt} besprechen.|Chúng ta nhất định phải bàn chuyện này.|
adv|einerseits|||một mặt|{Einerseits} ist es teuer, andererseits praktisch.|Một mặt thì đắt, mặt khác thì tiện.|
adv|andererseits|||mặt khác|Einerseits ist es bequem, {andererseits} ungesund.|Một mặt thì tiện, mặt khác không lành mạnh.|
adv|außerdem|||ngoài ra|{Außerdem} ist es zu teuer.|Ngoài ra nó còn quá đắt.|
adv|allerdings|||tuy nhiên|Das ist richtig, {allerdings} gibt es Ausnahmen.|Điều đó đúng, tuy nhiên có ngoại lệ.|
adv|tatsächlich|||thực sự|Das stimmt {tatsächlich}.|Điều đó thực sự đúng.|
adv|wahrscheinlich|||có lẽ|Er hat {wahrscheinlich} recht.|Có lẽ anh ấy đúng.|
adv|vielleicht|||có thể, có lẽ|{Vielleicht} hast du recht.|Có thể bạn đúng.|
adv|zwar|||tuy rằng|Das ist {zwar} teuer, aber gut.|Tuy đắt nhưng tốt.|zwar … aber
p|meiner Meinung nach|||theo ý kiến tôi|{Meiner Meinung nach} ist das falsch.|Theo tôi thì điều đó sai.|
p|ich bin der Meinung, dass|||tôi cho rằng|{Ich bin der Meinung, dass} wir mehr tun müssen.|Tôi cho rằng chúng ta phải làm nhiều hơn.|
p|Da bin ich anderer Meinung|||tôi có ý kiến khác|{Da bin ich anderer Meinung}.|Về điểm này tôi có ý kiến khác.|
p|Das sehe ich genauso|||tôi cũng thấy như vậy|{Das sehe ich genauso}.|Tôi cũng thấy như vậy.|
p|Das stimmt nicht ganz|||điều đó không hoàn toàn đúng|{Das stimmt nicht ganz}, denn …|Điều đó không hoàn toàn đúng, vì …|
p|auf der einen Seite … auf der anderen Seite|||một mặt … mặt khác|{Auf der einen Seite} spart man Zeit, auf der anderen Seite Geld.|Một mặt tiết kiệm thời gian, mặt khác tiết kiệm tiền.|
p|Was halten Sie davon?|||ông/bà nghĩ gì về điều đó?|Wir könnten früher anfangen. {Was halten Sie davon}?|Chúng ta có thể bắt đầu sớm hơn. Ông/bà nghĩ sao?|
p|im Gegenteil|||ngược lại|Das ist nicht schlecht, {im Gegenteil}!|Không tệ đâu, ngược lại là đằng khác!|
g|meiner Meinung nach: động từ ngay sau|||mở đầu nêu ý kiến|Meiner Meinung nach {ist} das richtig.|Theo tôi điều đó đúng.|Cụm này chiếm vị trí 1 → động từ ở vị trí 2.
g|zwar … aber|||tuy … nhưng|Das Handy ist zwar teuer, {aber} sehr gut.|Điện thoại tuy đắt nhưng rất tốt.|zwar trong câu đầu, aber nối câu sau.
g|Mẫu câu đồng ý / phản đối|||Ich stimme dir zu / Da widerspreche ich|Ich {stimme} dir zu.|Tôi đồng ý với bạn.|Phản đối lịch sự: Ich sehe das etwas anders, weil …
g|einerseits … andererseits|||cân nhắc hai mặt|Einerseits ist es praktisch, andererseits {ist} es teuer.|Một mặt thì tiện, mặt khác thì đắt.|Mỗi trạng từ chiếm vị trí 1 → động từ ngay sau.
n|Debatte|die|-n|cuộc tranh luận|Die {Debatte} im Parlament war hitzig.|Cuộc tranh luận ở quốc hội rất gay gắt.|
p|Pro und Contra|||ủng hộ và phản đối|Wir sammeln {Pro und Contra}.|Chúng tôi thu thập lý lẽ ủng hộ và phản đối.|
n|Behauptung|die|-en|lời khẳng định|Das ist nur eine {Behauptung}.|Đó chỉ là một lời khẳng định.|
n|Beweis|der|-e|bằng chứng|Gibt es einen {Beweis} dafür?|Có bằng chứng cho điều đó không?|
n|Schlussfolgerung|die|-en|kết luận|Was ist deine {Schlussfolgerung}?|Kết luận của bạn là gì?|
n|Reaktion|die|-en|phản ứng|Seine {Reaktion} war überraschend.|Phản ứng của anh ấy thật bất ngờ.|
n|Gesprächspartner|der|-|người đối thoại|Hör deinem {Gesprächspartner} zu.|Hãy lắng nghe người đang nói chuyện với bạn.|
v|zuhören|||lắng nghe|Du musst besser {zuhören}.|Bạn phải lắng nghe tốt hơn.|Động từ tách: er hört zu, hat zugehört; + Dativ
v|äußern|||bày tỏ|Sie {äußert} ihre Meinung offen.|Cô ấy bày tỏ ý kiến cởi mở.|er äußert, hat geäußert
v|erwähnen|||đề cập|Er hat das Problem nicht {erwähnt}.|Anh ấy không đề cập đến vấn đề.|er erwähnt, hat erwähnt
v|verteidigen|||bảo vệ (ý kiến)|Sie {verteidigt} ihre Position.|Cô ấy bảo vệ lập trường của mình.|er verteidigt, hat verteidigt
v|nachgeben|||nhượng bộ|Am Ende hat er {nachgegeben}.|Cuối cùng anh ấy đã nhượng bộ.|Động từ tách: er gibt nach, gab nach, hat nachgegeben
adj|sachlich|||khách quan, thực tế|Bleib bitte {sachlich}.|Hãy giữ thái độ khách quan.|
adj|emotional|||cảm tính|Die Diskussion wurde sehr {emotional}.|Cuộc thảo luận trở nên rất cảm tính.|
adj|nachvollziehbar|||có thể hiểu được|Deine Meinung ist {nachvollziehbar}.|Ý kiến của bạn có thể hiểu được.|
adj|widersprüchlich|||mâu thuẫn|Seine Aussagen sind {widersprüchlich}.|Lời khai của anh ta mâu thuẫn.|
adv|grundsätzlich|||về cơ bản|{Grundsätzlich} bin ich einverstanden.|Về cơ bản tôi đồng ý.|
p|Ich gebe dir recht|||tôi đồng ý bạn đúng|{Ich gebe dir recht}, das ist ein Problem.|Bạn nói đúng, đó là một vấn đề.|
p|Das kommt darauf an|||còn tùy|Ist das gut? – {Das kommt darauf an}.|Cái đó tốt không? – Còn tùy.|
p|Ich bin dafür|||tôi ủng hộ|{Ich bin dafür}, dass wir früher anfangen.|Tôi ủng hộ việc chúng ta bắt đầu sớm hơn.|
p|Ich bin dagegen|||tôi phản đối|{Ich bin dagegen}, weil es zu teuer ist.|Tôi phản đối vì quá đắt.|
`;
export default pack;
