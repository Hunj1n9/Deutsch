// B1 · 10 Xã hội và chính trị — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b1-10',
  points: [
    {
      key: 'konj-vergangenheit',
      rule_key: 'konjunktiv-ii-vergangenheit',
      category: 'conjugation',
      title_vi: 'Konjunktiv II quá khứ: hätte/wäre + Partizip II',
      explanation_vi: 'Điều đã không xảy ra, hối tiếc: Wenn ich das gewusst hätte, wäre ich gekommen. Chọn hätte/wäre như Perfekt. Hối tiếc: Hätte ich das doch gewusst!',
    },
    {
      key: 'sowohl-weder',
      rule_key: 'sowohl-als-auch-weder-noch',
      category: 'word_choice',
      title_vi: 'sowohl … als auch / weder … noch',
      explanation_vi: 'sowohl A als auch B = cả A lẫn B (chủ ngữ kép → động từ số nhiều). weder A noch B = không A cũng không B, không thêm nicht/kein.',
    },
    {
      key: 'entweder',
      rule_key: 'entweder-oder',
      category: 'word_choice',
      title_vi: 'entweder … oder',
      explanation_vi: 'entweder A oder B = hoặc A hoặc B (chỉ một). Sau oder trật tự câu bình thường. Phân biệt với sowohl … als auch (cả hai) và weder … noch (không cái nào).',
    },
  ],
  lessons: [
    {
      title_vi: 'Ở cơ quan hành chính',
      goal_vi: 'Làm thủ tục ở cơ quan nhà nước; nói hối tiếc và giả định quá khứ bằng Konjunktiv II.',
      items: [
        'Behörde', 'Amt', 'Antrag', 'Aufenthaltserlaubnis', 'Staatsangehörigkeit', 'Einbürgerung', 'Bürokratie',
        'Integration', 'Sozialhilfe', 'Kindergeld', 'Gemeinde', 'Bürger', 'Grundrecht', 'Gleichberechtigung',
        'verlängern', 'gelten', 'staatlich', 'gleichberechtigt', 'bürokratisch', 'einen Antrag stellen', 'in Kraft treten',
        'Konjunktiv II quá khứ: hätte/wäre + Partizip II',
      ],
      grammar: {
        point: 'konj-vergangenheit',
        sections: [
          {
            text_vi:
              '**Konjunktiv II quá khứ** nói điều **đã không xảy ra**: **hätte/wäre** + **Partizip II**. Chọn hätte hay wäre **như Perfekt**: Ich **hätte** den Antrag früher **gestellt**. Er **wäre** gekommen. Câu điều kiện: **Wenn** ich das **gewusst hätte**, **wäre** ich früher zum Amt **gegangen**.',
            table: 'Perfekt (thật) | Konjunktiv II quá khứ (không thật)\nich habe gewartet | ich hätte gewartet\nich bin gegangen | ich wäre gegangen\nwir haben verlängert | wir hätten verlängert',
            examples: [
              ['Wenn ich das gewusst hätte, wäre ich früher gekommen.', 'Nếu biết điều đó, tôi đã đến sớm hơn.'],
              ['Mit einem Termin hätten wir nicht so lange gewartet.', 'Nếu có hẹn trước, chúng tôi đã không phải đợi lâu như vậy.'],
            ],
            exercises: [
              fill('Wenn ich das gewusst {hätte}, wäre ich früher gekommen.', 'Nếu biết điều đó, tôi đã đến sớm hơn.'),
              choose('Ohne Wecker ___ ich den Termin verpasst.', ['hätte', 'wäre', 'würde'], 'hätte', { vi: 'Nếu không có đồng hồ báo thức, tôi đã lỡ cuộc hẹn.' }),
              choose('Wenn der Bus pünktlich gewesen wäre, ___ ich nicht zu spät gekommen.', ['wäre', 'hätte'], 'wäre', { vi: 'Nếu xe buýt đúng giờ, tôi đã không đến muộn.' }),
            ],
          },
          {
            text_vi:
              'Hối tiếc với **doch**: **Hätte** ich das doch **gewusst**! (Giá mà tôi biết!) **Wäre** ich doch früher **gekommen**! Giả định khác: **Ohne** deine Hilfe **hätte** ich das nicht **geschafft**. Trong câu wenn, hätte/wäre đứng **cuối cùng**, sau Partizip II.',
            examples: [['Hätte ich doch die Kopie mitgebracht!', 'Giá mà tôi mang theo bản sao!']],
            exercises: [
              transform('Viết câu điều kiện không thật trong quá khứ', 'Ich hatte keine Zeit. Ich bin nicht gekommen.', ['Wenn ich Zeit gehabt hätte, wäre ich gekommen.']),
              fill('Ohne deine Hilfe {hätte} ich das nicht geschafft.', 'Không có bạn giúp, tôi đã không làm được.'),
              order('Wäre / ich / doch / früher / gegangen!', 'Giá mà tôi đi sớm hơn!'),
            ],
          },
          {
            text_vi:
              'Ở **Behörde/Amt**: **einen Antrag stellen** (nộp đơn), **ein Formular ausfüllen** (điền mẫu), **die Aufenthaltserlaubnis verlängern** (gia hạn giấy phép cư trú). **Einbürgerung** = nhập quốc tịch. Luật **gilt** (có hiệu lực) hoặc **tritt in Kraft**. **Bürokratie** = thủ tục rườm rà.',
            examples: [['Das neue Gesetz tritt im Januar in Kraft.', 'Luật mới có hiệu lực vào tháng Một.']],
            exercises: [
              fill('Ich muss meine Aufenthaltserlaubnis {verlängern}.', 'Tôi phải gia hạn giấy phép cư trú.'),
              translate('Tôi phải điền mẫu đơn này.', ['Ich muss dieses Formular ausfüllen.']),
            ],
          },
        ],
        mixed: [
          transform('Viết câu điều kiện không thật trong quá khứ', 'Ich habe das Formular nicht gelesen. Ich habe einen Fehler gemacht.', [
            'Wenn ich das Formular gelesen hätte, hätte ich keinen Fehler gemacht.',
          ]),
          choose('___ ich doch früher einen Antrag gestellt!', ['Hätte', 'Wäre', 'Würde'], 'Hätte', { vi: 'Giá mà tôi nộp đơn sớm hơn!' }),
          fill('Wenn wir den Zug genommen hätten, {wären} wir schon da.', 'Nếu đi tàu thì chúng tôi đã đến rồi.'),
          choose('Ohne die Kopie ___ der Antrag nicht gültig gewesen.', ['wäre', 'hätte'], 'wäre', { vi: 'Không có bản sao, đơn sẽ không hợp lệ.' }),
          order('Wenn / ich / Zeit / gehabt / hätte, / wäre / ich / gekommen.', 'Nếu có thời gian, tôi đã đến.'),
        ],
      },
      dialogue: {
        title_de: 'Auf dem Amt',
        lines: [
          { speaker: 'A', de: 'Guten Tag, ich möchte meine Aufenthaltserlaubnis verlängern.', vi: 'Xin chào, tôi muốn gia hạn giấy phép cư trú.' },
          { speaker: 'B', de: 'Haben Sie einen Termin? Ohne Termin geht es leider nicht.', vi: 'Chị có hẹn trước không? Không có hẹn thì tiếc là không được.' },
          { speaker: 'A', de: 'Oh nein! Wenn ich das gewusst hätte, hätte ich online einen Termin gemacht.', vi: 'Ôi không! Nếu biết vậy, tôi đã đặt hẹn trên mạng.' },
          { speaker: 'B', de: 'Heute ist es ruhig. Ich mache eine Ausnahme. Haben Sie das Formular ausgefüllt?', vi: 'Hôm nay vắng. Tôi làm ngoại lệ. Chị đã điền mẫu đơn chưa?' },
          { speaker: 'A', de: 'Ja, aber bei Frage sieben war ich unsicher.', vi: 'Rồi, nhưng ở câu bảy tôi không chắc.' },
          { speaker: 'B', de: 'Hier fehlt Ihre Unterschrift. Und die Kopie Ihres Passes.', vi: 'Ở đây thiếu chữ ký của chị. Và bản sao hộ chiếu.' },
          { speaker: 'A', de: 'Die Kopie liegt zu Hause. Hätte ich sie doch mitgebracht!', vi: 'Bản sao để ở nhà. Giá mà tôi mang theo!' },
          { speaker: 'B', de: 'Kein Problem, ich mache hier eine Kopie. Die neue Erlaubnis gilt zwei Jahre.', vi: 'Không sao, tôi photo ở đây. Giấy phép mới có hiệu lực hai năm.' },
          { speaker: 'A', de: 'Vielen Dank! Ohne Ihre Hilfe hätte ich einen neuen Termin gebraucht.', vi: 'Cảm ơn nhiều! Không có anh giúp, tôi đã phải đặt hẹn mới.' },
        ],
        gloss: { Termin: 'cuộc hẹn', Ausnahme: 'ngoại lệ', unsicher: 'không chắc', fehlt: 'thiếu (fehlen)', Unterschrift: 'chữ ký', Kopie: 'bản sao', Passes: 'hộ chiếu (Genitiv)', mitgebracht: 'mang theo (mitbringen)', Erlaubnis: 'giấy phép' },
        questions: [
          mc('A muốn làm gì?', ['gia hạn giấy phép cư trú', 'xin quốc tịch', 'đăng ký kết hôn'], 'gia hạn giấy phép cư trú'),
          tf('A hatte einen Termin.', false, { explain: 'Wenn ich das gewusst hätte, hätte ich einen Termin gemacht.' }),
          mc('Trong hồ sơ còn thiếu gì?', ['chữ ký và bản sao hộ chiếu', 'ảnh', 'tiền phí'], 'chữ ký và bản sao hộ chiếu'),
          tf('Die neue Erlaubnis gilt zwei Jahre.', true),
        ],
        dictation: [2, 6],
      },
      writing_prompt_vi:
        'Kể về một việc bạn tiếc là đã không làm (hoặc đã làm) – 5 câu, dùng Konjunktiv II quá khứ (Wenn ich … hätte, wäre ich … / Hätte ich doch …!).',
    },
    {
      title_vi: 'Bầu cử và dân chủ',
      goal_vi: 'Nói về hệ thống chính trị và bầu cử; dùng sowohl … als auch, weder … noch.',
      items: [
        'Gesellschaft', 'Politik', 'Politiker', 'Partei', 'Wahl', 'Wahlkampf', 'Kandidat', 'Opposition', 'Staat', 'Demokratie',
        'Verfassung', 'Bundestag', 'Bundeskanzler', 'Bundesland', 'Mehrheit', 'Minderheit', 'abstimmen', 'beschließen',
        'regieren', 'versprechen', 'demokratisch', 'wahlberechtigt', 'konservativ', 'liberal', 'zur Wahl gehen',
        'eine Entscheidung treffen', 'sowohl … als auch', 'weder … noch', 'Liên từ hai vế: sowohl … als auch',
        'Liên từ hai vế: weder … noch',
      ],
      grammar: {
        point: 'sowohl-weder',
        sections: [
          {
            text_vi:
              '**sowohl … als auch** = cả … lẫn: **Sowohl** die Regierung **als auch** die Opposition sind dafür. Chủ ngữ kép → động từ **số nhiều**. **weder … noch** = không … cũng không, phủ định **cả hai**, **không** thêm nicht/kein: Er ist **weder** konservativ **noch** liberal.',
            examples: [
              ['Sowohl Frauen als auch Männer sind wahlberechtigt.', 'Cả phụ nữ lẫn nam giới đều có quyền bầu cử.'],
              ['Ich habe weder Zeit noch Lust.', 'Tôi không có thời gian cũng chẳng có hứng.'],
            ],
            exercises: [
              fill('Sowohl Frauen {als} auch Männer dürfen wählen.', 'Cả phụ nữ lẫn nam giới đều được bầu cử.'),
              choose('Ich habe ___ Zeit noch Geld.', ['weder', 'sowohl', 'nicht'], 'weder', { vi: 'Tôi không có thời gian cũng không có tiền.' }),
              order('Sie / spricht / sowohl / Deutsch / als auch / Englisch.', 'Cô ấy nói cả tiếng Đức lẫn tiếng Anh.'),
            ],
          },
          {
            text_vi:
              'Hai vế đứng ngay trước hai phần cần nối, không đổi vị trí động từ: Ich wähle **weder** diese Partei **noch** jene. Nối hai động từ: Er hat **weder** abgestimmt **noch** diskutiert. Lỗi hay gặp: "weder … noch nicht" (thừa phủ định).',
            examples: [['Der Kandidat hat weder zugehört noch geantwortet.', 'Ứng cử viên không lắng nghe cũng không trả lời.']],
            exercises: [
              transform('Nối bằng weder … noch', 'Ich mag den Kandidaten nicht. Ich mag die Partei nicht.', ['Ich mag weder den Kandidaten noch die Partei.']),
              transform('Nối bằng sowohl … als auch', 'Der Bundestag ist dafür. Die Länder sind auch dafür.', ['Sowohl der Bundestag als auch die Länder sind dafür.']),
              choose('Sowohl die Mehrheit als auch die Minderheit ___ zufrieden.', ['sind', 'ist'], 'sind', { vi: 'Cả đa số lẫn thiểu số đều hài lòng.' }),
            ],
          },
          {
            text_vi:
              '**Bundestag** (quốc hội) bầu **Bundeskanzler** (thủ tướng). Đức có 16 **Bundesländer**. Công dân từ 18 tuổi **wahlberechtigt**, **zur Wahl gehen** để chọn **Partei** hoặc **Kandidat**. Quốc hội **stimmt ab** (biểu quyết) và **beschließt** (thông qua) luật.',
            examples: [['Der Bundestag hat über das Gesetz abgestimmt.', 'Quốc hội đã biểu quyết về đạo luật.']],
            exercises: [
              fill('Am Sonntag gehe ich zur {Wahl}.', 'Chủ nhật tôi đi bầu cử.'),
              translate('Quốc hội đã thông qua luật mới.', ['Der Bundestag hat das neue Gesetz beschlossen.', 'Das Parlament hat das neue Gesetz beschlossen.']),
            ],
          },
        ],
        mixed: [
          choose('Er ist ___ Politiker noch Journalist.', ['weder', 'entweder', 'sowohl'], 'weder', { vi: 'Ông ấy không phải chính trị gia cũng không phải nhà báo.' }),
          fill('Wir brauchen sowohl gute Schulen als {auch} gute Krankenhäuser.', 'Chúng ta cần cả trường học tốt lẫn bệnh viện tốt.'),
          choose('Sowohl der Kanzler als auch die Ministerin ___ gekommen.', ['sind', 'ist'], 'sind', { vi: 'Cả thủ tướng lẫn nữ bộ trưởng đều đã đến.' }),
          transform('Nối bằng weder … noch', 'Sie liest keine Zeitungen. Sie liest keine Bücher.', ['Sie liest weder Zeitungen noch Bücher.']),
          order('Die Partei / ist / weder / konservativ / noch / liberal.', 'Đảng này không bảo thủ cũng không tự do.'),
        ],
      },
      dialogue: {
        title_de: 'Vor der Wahl',
        lines: [
          { speaker: 'A', de: 'Gehst du am Sonntag zur Wahl?', vi: 'Chủ nhật bạn có đi bầu không?' },
          { speaker: 'B', de: 'Ich weiß noch nicht. Mir gefallen weder die Konservativen noch die Liberalen.', vi: 'Mình chưa biết. Mình không thích phe bảo thủ cũng không thích phe tự do.' },
          { speaker: 'A', de: 'Aber du bist doch wahlberechtigt! In einer Demokratie ist jede Stimme wichtig.', vi: 'Nhưng bạn có quyền bầu cử mà! Trong nền dân chủ mỗi lá phiếu đều quan trọng.' },
          { speaker: 'B', de: 'Stimmt. Was versprechen die Parteien denn im Wahlkampf?', vi: 'Đúng. Thế các đảng hứa gì trong chiến dịch tranh cử?' },
          { speaker: 'A', de: 'Sowohl die Regierung als auch die Opposition versprechen mehr Geld für Schulen.', vi: 'Cả chính phủ lẫn phe đối lập đều hứa thêm tiền cho trường học.' },
          { speaker: 'B', de: 'Das sagen sie immer. Und wer hat die Mehrheit in den Umfragen?', vi: 'Họ luôn nói thế. Còn ai chiếm đa số trong các cuộc thăm dò?' },
          { speaker: 'A', de: 'Keine Partei hat eine klare Mehrheit. Deshalb ist die Wahl so spannend.', vi: 'Không đảng nào chiếm đa số rõ ràng. Vì thế cuộc bầu cử rất hấp dẫn.' },
          { speaker: 'B', de: 'Na gut, ich gehe hin. Ich will eine Entscheidung treffen und nicht nur meckern.', vi: 'Thôi được, mình sẽ đi. Mình muốn tự quyết định chứ không chỉ càu nhàu.' },
        ],
        gloss: { Konservativen: 'phe bảo thủ', Liberalen: 'phe tự do', Stimme: 'lá phiếu', denn: 'thế (nhấn mạnh câu hỏi)', klare: 'rõ ràng', spannend: 'hấp dẫn', meckern: 'càu nhàu', hin: 'đến đó' },
        questions: [
          tf('B mag die Konservativen.', false, { explain: 'Mir gefallen weder die Konservativen noch die Liberalen.' }),
          mc('Cả chính phủ lẫn phe đối lập hứa gì?', ['thêm tiền cho trường học', 'giảm thuế', 'xây thêm đường'], 'thêm tiền cho trường học'),
          tf('Eine Partei hat eine klare Mehrheit.', false, { explain: 'Keine Partei hat eine klare Mehrheit.' }),
          mc('Cuối cùng B quyết định thế nào?', ['đi bầu', 'không đi bầu', 'chưa quyết định'], 'đi bầu'),
        ],
        dictation: [2, 4],
      },
      writing_prompt_vi:
        'Mô tả hệ thống chính trị Việt Nam hoặc Đức (5 câu), dùng ít nhất một câu sowohl … als auch và một câu weder … noch.',
    },
    {
      title_vi: 'Công bằng xã hội',
      goal_vi: 'Thảo luận vấn đề xã hội, đình công, việc tình nguyện; dùng entweder … oder.',
      items: [
        'Armut', 'Reichtum', 'Ehrenamt', 'Streik', 'Gewerkschaft', 'Frieden', 'Krieg', 'Demonstration', 'fordern',
        'streiken', 'sich einsetzen', 'protestieren', 'einführen', 'abschaffen', 'sich beteiligen', 'erhöhen',
        'senken', 'gerecht', 'ungerecht', 'sozial', 'umstritten', 'ehrenamtlich', 'friedlich', 'entweder … oder',
        'Liên từ hai vế: entweder … oder',
      ],
      grammar: {
        point: 'entweder',
        sections: [
          {
            text_vi:
              '**entweder … oder** = hoặc … hoặc (chỉ **một** trong hai): **Entweder** wir streiken, **oder** die Firma erhöht die Löhne. Khi entweder đứng đầu câu, động từ có thể đứng ngay sau (Entweder **kommst** du mit, …) hoặc như thường. Sau **oder**: trật tự câu bình thường.',
            examples: [
              ['Entweder du hilfst mir, oder ich mache es allein.', 'Hoặc bạn giúp tôi, hoặc tôi tự làm.'],
              ['Wir fahren entweder mit dem Bus oder mit dem Fahrrad.', 'Chúng tôi đi hoặc xe buýt hoặc xe đạp.'],
            ],
            exercises: [
              fill('{Entweder} wir finden einen Kompromiss, oder wir streiken.', 'Hoặc chúng ta tìm được thỏa hiệp, hoặc chúng ta đình công.'),
              choose('Entweder du kommst mit, ___ du bleibst zu Hause.', ['oder', 'noch', 'als auch'], 'oder', { vi: 'Hoặc bạn đi cùng, hoặc bạn ở nhà.' }),
              order('Wir / fahren / entweder / mit dem Bus / oder / mit dem Fahrrad.', 'Chúng tôi đi hoặc xe buýt hoặc xe đạp.'),
            ],
          },
          {
            text_vi:
              'So sánh ba cặp: **sowohl … als auch** (cả hai), **weder … noch** (không cái nào), **entweder … oder** (chỉ một). Ich trinke **entweder** Tee **oder** Kaffee (một trong hai). Ich trinke **sowohl** Tee **als auch** Kaffee (cả hai). Ich trinke **weder** Tee **noch** Kaffee (không cái nào).',
            table: 'Cặp | Nghĩa | Ví dụ\nsowohl … als auch | cả hai | sowohl Tee als auch Kaffee\nweder … noch | không cái nào | weder Tee noch Kaffee\nentweder … oder | chỉ một | entweder Tee oder Kaffee',
            examples: [['Entweder senkt die Regierung die Steuern, oder sie erhöht die Sozialhilfe.', 'Chính phủ hoặc giảm thuế, hoặc tăng trợ cấp xã hội.']],
            exercises: [
              choose('Ich mag ___ Tee noch Kaffee.', ['weder', 'entweder', 'sowohl'], 'weder', { vi: 'Tôi không thích trà cũng không thích cà phê.' }),
              choose('Du kannst ___ heute oder morgen kommen.', ['entweder', 'weder', 'sowohl'], 'entweder', { vi: 'Bạn có thể đến hôm nay hoặc ngày mai.' }),
              transform('Nối bằng entweder … oder', 'Wir demonstrieren. Oder wir schreiben einen Brief an den Bürgermeister.', [
                'Entweder wir demonstrieren, oder wir schreiben einen Brief an den Bürgermeister.',
                'Entweder demonstrieren wir, oder wir schreiben einen Brief an den Bürgermeister.',
              ]),
            ],
          },
          {
            text_vi:
              '**Armut** ≠ **Reichtum**; xã hội **gerecht** (công bằng) hay **ungerecht**. **sich einsetzen für** + Akk = đấu tranh vì: sich für Frieden einsetzen. **Ehrenamt** = việc tình nguyện (**ehrenamtlich** arbeiten). **Gewerkschaft** (công đoàn) **fordert** tăng lương và có thể **streiken**.',
            examples: [['Die Gewerkschaft fordert höhere Löhne.', 'Công đoàn đòi tăng lương.']],
            exercises: [
              fill('Sie setzt sich {für} die Gleichberechtigung ein.', 'Cô ấy đấu tranh cho bình đẳng.'),
              translate('Tôi làm tình nguyện ở một trường học.', ['Ich arbeite ehrenamtlich in einer Schule.', 'Ich arbeite ehrenamtlich an einer Schule.']),
            ],
          },
        ],
        mixed: [
          choose('___ die Firma zahlt mehr, oder wir streiken.', ['Entweder', 'Weder', 'Sowohl'], 'Entweder', { vi: 'Hoặc công ty trả nhiều hơn, hoặc chúng tôi đình công.' }),
          fill('Wir können entweder diskutieren {oder} abstimmen.', 'Chúng ta có thể hoặc thảo luận hoặc biểu quyết.'),
          choose('Er spricht ___ Englisch noch Französisch.', ['weder', 'entweder'], 'weder', { vi: 'Anh ấy không nói tiếng Anh cũng không nói tiếng Pháp.' }),
          transform('Nối bằng entweder … oder', 'Die Regierung senkt die Steuern. Oder sie erhöht die Löhne.', [
            'Entweder senkt die Regierung die Steuern, oder sie erhöht die Löhne.',
            'Entweder die Regierung senkt die Steuern, oder sie erhöht die Löhne.',
          ]),
          order('Entweder / nehme / ich / ein Taxi, / oder / ich / gehe / zu Fuß.', 'Hoặc tôi đi taxi, hoặc tôi đi bộ.'),
        ],
      },
      dialogue: {
        title_de: 'Der Streik',
        lines: [
          { speaker: 'A', de: 'Warum fährt heute kein Bus?', vi: 'Sao hôm nay không có xe buýt?' },
          { speaker: 'B', de: 'Die Gewerkschaft streikt. Sie fordert höhere Löhne für die Fahrer.', vi: 'Công đoàn đình công. Họ đòi tăng lương cho tài xế.' },
          { speaker: 'A', de: 'Das finde ich gerecht. Die Fahrer verdienen wenig.', vi: 'Mình thấy thế là công bằng. Tài xế kiếm được ít.' },
          { speaker: 'B', de: 'Stimmt, aber der Streik ist umstritten. Viele Leute kommen heute entweder zu spät oder gar nicht zur Arbeit.', vi: 'Đúng, nhưng cuộc đình công gây tranh cãi. Hôm nay nhiều người hoặc đi làm muộn hoặc không đi được.' },
          { speaker: 'A', de: 'Und was machst du jetzt?', vi: 'Thế giờ bạn làm gì?' },
          { speaker: 'B', de: 'Entweder nehme ich ein Taxi, oder ich fahre mit dem Fahrrad.', vi: 'Hoặc mình đi taxi, hoặc mình đi xe đạp.' },
          { speaker: 'A', de: 'Ich setze mich auch für soziale Gerechtigkeit ein. Am Wochenende arbeite ich ehrenamtlich bei der Tafel.', vi: 'Mình cũng đấu tranh cho công bằng xã hội. Cuối tuần mình làm tình nguyện ở Tafel.' },
          { speaker: 'B', de: 'Was ist die Tafel?', vi: 'Tafel là gì?' },
          { speaker: 'A', de: 'Dort bekommen arme Menschen kostenlos Lebensmittel. Leider wächst die Armut auch in Deutschland.', vi: 'Ở đó người nghèo được nhận thực phẩm miễn phí. Tiếc là nghèo đói cũng đang tăng ở Đức.' },
        ],
        gloss: { Löhne: 'tiền lương (số nhiều)', Fahrer: 'tài xế', 'gar nicht': 'hoàn toàn không', Taxi: 'taxi', Gerechtigkeit: 'sự công bằng', Tafel: 'tổ chức phát thực phẩm', kostenlos: 'miễn phí' },
        questions: [
          mc('Công đoàn đòi gì?', ['tăng lương cho tài xế', 'giảm giờ làm', 'xe buýt mới'], 'tăng lương cho tài xế'),
          tf('Alle finden den Streik gut.', false, { explain: 'Der Streik ist umstritten.' }),
          mc('B sẽ đi làm bằng gì?', ['taxi hoặc xe đạp', 'tàu điện', 'xe buýt'], 'taxi hoặc xe đạp'),
          tf('A arbeitet am Wochenende ehrenamtlich.', true),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Nêu ý kiến của bạn về một vấn đề xã hội (5–6 câu), dùng ít nhất một câu entweder … oder và một câu sowohl … als auch hoặc weder … noch.',
    },
  ],
  test: {
    grammar: {
      'konj-vergangenheit': [
        fill('Wenn ich das gewusst {hätte}, wäre ich gekommen.', 'Nếu biết, tôi đã đến.'),
        choose('Wenn es nicht geregnet hätte, ___ wir gewandert.', ['wären', 'hätten'], 'wären'),
        choose('Ich ___ dir geholfen, wenn du gefragt hättest.', ['hätte', 'wäre'], 'hätte'),
        order('Hätte / ich / das / doch / gewusst!', 'Giá mà tôi biết điều đó!'),
        fill('Ohne Wecker {wäre} ich zu spät gekommen.', 'Không có đồng hồ báo thức, tôi đã đến muộn.'),
        choose('Wenn wir früher losgefahren ___, hätten wir den Zug erreicht.', ['wären', 'hätten'], 'wären'),
      ],
      'sowohl-weder': [
        fill('Sowohl Anna {als} auch Ben kommen.', 'Cả Anna lẫn Ben đều đến.'),
        choose('Er hat ___ Zeit noch Lust.', ['weder', 'entweder'], 'weder'),
        choose('Sowohl mein Bruder als auch meine Schwester ___ Lehrer.', ['sind', 'ist'], 'sind'),
        order('Ich / esse / weder / Fleisch / noch / Fisch.', 'Tôi không ăn thịt cũng không ăn cá.'),
        fill('Sie spricht weder Englisch {noch} Französisch.', 'Cô ấy không nói tiếng Anh cũng không nói tiếng Pháp.'),
        choose('Ich trinke ___ Tee als auch Kaffee.', ['sowohl', 'weder'], 'sowohl'),
      ],
      entweder: [
        fill('{Entweder} du kommst mit, oder du bleibst hier.', 'Hoặc bạn đi cùng, hoặc bạn ở lại.'),
        choose('Entweder heute ___ morgen.', ['oder', 'noch'], 'oder'),
        choose('Ich habe ___ Hunger noch Durst.', ['weder', 'entweder'], 'weder'),
        order('Wir / gehen / entweder / ins Kino / oder / ins Theater.', 'Chúng tôi đi hoặc xem phim hoặc xem kịch.'),
        choose('___ wir streiken, oder wir verhandeln.', ['Entweder', 'Sowohl'], 'Entweder'),
        fill('Entweder zahlst du bar, {oder} du zahlst mit Karte.', 'Hoặc bạn trả tiền mặt, hoặc trả bằng thẻ.'),
      ],
    },
    reading: {
      title_de: 'Ehrenamt in Deutschland',
      text_de:
        'In Deutschland arbeiten fast 30 Millionen Menschen ehrenamtlich. Sie helfen sowohl in Sportvereinen als auch in Schulen, Krankenhäusern und bei der Feuerwehr. Viele setzen sich für Menschen ein, die in Armut leben. Frau Weber ist Rentnerin und hilft jede Woche Flüchtlingen bei Anträgen und Formularen. Sie sagt: „Wenn mir damals jemand geholfen hätte, wäre mein Start in einer neuen Stadt viel leichter gewesen.“ Für ihre Arbeit bekommt sie weder Geld noch Geschenke. Trotzdem ist sie glücklich. Junge Leute können entweder ein Freiwilliges Soziales Jahr machen oder sich in ihrer Freizeit engagieren.',
      gloss: {
        Millionen: 'triệu',
        Sportvereinen: 'câu lạc bộ thể thao',
        Flüchtlingen: 'người tị nạn',
        damals: 'hồi đó',
        Start: 'sự khởi đầu',
        Geschenke: 'quà tặng',
        'Freiwilliges Soziales Jahr': 'năm tình nguyện xã hội',
      },
      questions: [
        mc('Ở Đức có khoảng bao nhiêu người làm tình nguyện?', ['gần 30 triệu', '3 triệu', '300.000'], 'gần 30 triệu'),
        tf('Frau Weber hilft Flüchtlingen bei Formularen.', true),
        tf('Frau Weber bekommt viel Geld für ihre Arbeit.', false, { explain: 'Sie bekommt weder Geld noch Geschenke.' }),
        mc('Người trẻ có thể làm gì?', ['năm tình nguyện xã hội hoặc tham gia lúc rảnh', 'chỉ đi học', 'làm ở bệnh viện'], 'năm tình nguyện xã hội hoặc tham gia lúc rảnh'),
      ],
    },
  },
});
