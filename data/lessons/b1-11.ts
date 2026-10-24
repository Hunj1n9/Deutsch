// B1 · 11 Nghệ thuật và giải trí — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b1-11',
  points: [
    {
      key: 'nominal',
      rule_key: 'nominalisierung-verb-adjektiv',
      category: 'spelling',
      title_vi: 'Danh từ hóa động từ và tính từ',
      explanation_vi: 'Động từ: viết hoa, giống trung (das Malen, beim Malen, zum Zeichnen). Tính từ: viết hoa + đuôi tính từ (das Schöne, etwas Neues, nichts Besonderes).',
    },
    {
      key: 'statt-ohne',
      rule_key: 'statt-ohne-zu',
      category: 'verb_position',
      title_vi: 'statt … zu / ohne … zu',
      explanation_vi: 'ohne … zu = mà không; statt … zu = thay vì; cùng chủ ngữ, zu + nguyên mẫu ở cuối (ohne anzurufen). Khác chủ ngữ: ohne dass / statt dass + câu phụ.',
    },
    {
      key: 'falls',
      rule_key: 'falls-bedingung',
      category: 'word_choice',
      title_vi: 'falls: nếu, phòng khi',
      explanation_vi: 'falls mở câu phụ điều kiện có thể xảy ra, động từ cuối: Falls es regnet, … Khác wenn: wenn còn nghĩa "khi" (chắc chắn xảy ra); điều kiện không thật dùng wenn.',
    },
  ],
  lessons: [
    {
      title_vi: 'Hội họa và triển lãm',
      goal_vi: 'Mô tả và đánh giá một tác phẩm nghệ thuật; dùng danh từ hóa động từ và tính từ.',
      items: [
        'Kunst', 'Künstler', 'Gemälde', 'Maler', 'Skulptur', 'Galerie', 'Kunstwerk', 'Fotografie', 'Kritik', 'Geschmackssache',
        'ausstellen', 'darstellen', 'zeichnen', 'bewerten', 'künstlerisch', 'abstrakt', 'originell', 'lebendig',
        'sehenswert', 'Geschmäcker sind verschieden', 'einen Blick werfen', 'Danh từ hóa: tính từ thành danh từ',
        'Câu so sánh: je … umso',
      ],
      grammar: {
        point: 'nominal',
        sections: [
          {
            text_vi:
              '**Danh từ hóa động từ**: nguyên mẫu viết **hoa**, giống **trung**: malen → **das Malen**, zeichnen → **das Zeichnen**. Hay đi với **beim** (= khi đang): **Beim Malen** höre ich Musik; và **zum** (= để, dùng cho): Papier **zum Zeichnen**.',
            examples: [
              ['Beim Malen vergesse ich die Zeit.', 'Khi vẽ tôi quên cả thời gian.'],
              ['Das Fotografieren ist im Museum verboten.', 'Chụp ảnh bị cấm trong bảo tàng.'],
            ],
            exercises: [
              fill('Beim {Zeichnen} höre ich gern Musik. (zeichnen)', 'Khi vẽ tôi thích nghe nhạc.'),
              choose('Ich brauche einen Stift zum ___.', ['Zeichnen', 'zeichnen', 'Zeichnung'], 'Zeichnen', { vi: 'Tôi cần một cây bút để vẽ.' }),
              order('Das / Fotografieren / ist / hier / verboten.', 'Ở đây cấm chụp ảnh.'),
            ],
          },
          {
            text_vi:
              '**Danh từ hóa tính từ**: viết **hoa** và giữ đuôi tính từ: **das Schöne** (cái đẹp), **etwas Neues** (điều gì đó mới), **nichts Besonderes** (không có gì đặc biệt), **viel Gutes**. Sau etwas, nichts, viel, wenig: đuôi **-es**. Chỉ người: **der/die Kranke**, **ein Bekannter**.',
            table: 'Cấu trúc | Ví dụ\ndas + tính từ + -e | das Schöne, das Neue\netwas/nichts + -es | etwas Neues, nichts Besonderes\nchỉ người | der Alte, eine Bekannte',
            examples: [['Das Schöne an diesem Bild sind die Farben.', 'Điều đẹp ở bức tranh này là màu sắc.']],
            exercises: [
              fill('Im Museum habe ich etwas {Interessantes} gesehen. (interessant)', 'Ở bảo tàng tôi đã thấy một thứ thú vị.'),
              choose('Das Bild zeigt nichts ___.', ['Besonderes', 'besonderes', 'Besondere'], 'Besonderes', { vi: 'Bức tranh không thể hiện điều gì đặc biệt.' }),
              choose('___ an diesem Gemälde ist das Licht.', ['Das Schöne', 'Das schöne', 'Der Schöne'], 'Das Schöne', { vi: 'Điều đẹp ở bức tranh này là ánh sáng.' }),
            ],
          },
          {
            text_vi:
              '**je … umso** = je … desto: Je länger ich das Bild anschaue, **umso** besser gefällt es mir. Tranh **stellt** eine Landschaft **dar** (thể hiện phong cảnh); có thể **abstrakt**, **lebendig**, **originell**. **Geschmäcker sind verschieden** / **Das ist Geschmackssache** = mỗi người một sở thích.',
            examples: [['Das Gemälde stellt einen Markt in Hanoi dar.', 'Bức tranh thể hiện một khu chợ ở Hà Nội.']],
            exercises: [
              fill('Je öfter ich ins Museum gehe, {umso} mehr verstehe ich die Kunst.', 'Tôi càng hay đi bảo tàng càng hiểu nghệ thuật hơn.'),
              translate('Bức tranh thể hiện một khu chợ.', ['Das Gemälde stellt einen Markt dar.', 'Das Bild stellt einen Markt dar.']),
            ],
          },
        ],
        mixed: [
          choose('Ich wünsche dir alles ___!', ['Gute', 'gute', 'Guten'], 'Gute', { vi: 'Chúc bạn mọi điều tốt đẹp!' }),
          fill('Das {Malen} macht mir großen Spaß. (malen)', 'Tôi rất thích vẽ tranh.'),
          choose('Gibt es etwas ___ in der Galerie?', ['Neues', 'Neue', 'neues'], 'Neues', { vi: 'Phòng tranh có gì mới không?' }),
          transform('Viết lại với beim + danh từ hóa', 'Wenn ich zeichne, höre ich Musik.', ['Beim Zeichnen höre ich Musik.']),
          order('Das Interessante / an der Ausstellung / sind / die Fotografien.', 'Điều thú vị ở triển lãm là những bức ảnh.'),
        ],
      },
      dialogue: {
        title_de: 'In der Galerie',
        lines: [
          { speaker: 'A', de: 'Was hältst du von diesem Gemälde?', vi: 'Bạn nghĩ gì về bức tranh này?' },
          { speaker: 'B', de: 'Hm, es ist sehr abstrakt. Ich sehe nur Farben und Linien.', vi: 'Hừm, nó rất trừu tượng. Mình chỉ thấy màu và đường nét.' },
          { speaker: 'A', de: 'Genau das finde ich schön. Je länger ich es anschaue, umso mehr entdecke ich.', vi: 'Chính điều đó mình thấy đẹp. Càng nhìn lâu, mình càng khám phá ra nhiều.' },
          { speaker: 'B', de: 'Was stellt es denn dar?', vi: 'Thế nó thể hiện gì?' },
          { speaker: 'A', de: 'Laut der Beschreibung stellt der Maler das Leben in der Großstadt dar.', vi: 'Theo phần mô tả, họa sĩ thể hiện cuộc sống ở thành phố lớn.' },
          { speaker: 'B', de: 'Für mich ist das nichts Besonderes. Ich mag lieber Fotografie.', vi: 'Với mình thì chẳng có gì đặc biệt. Mình thích nhiếp ảnh hơn.' },
          { speaker: 'A', de: 'Geschmäcker sind verschieden! Wirf mal einen Blick auf die Skulptur dort.', vi: 'Mỗi người một sở thích! Bạn xem qua tác phẩm điêu khắc đằng kia đi.' },
          { speaker: 'B', de: 'Oh, die ist originell! Das Lustige ist, dass sie aus altem Plastik gemacht ist.', vi: 'Ồ, cái này độc đáo! Điều buồn cười là nó làm từ nhựa cũ.' },
          { speaker: 'A', de: 'Siehst du, die Galerie hat doch etwas Interessantes für dich.', vi: 'Thấy chưa, phòng tranh cũng có thứ thú vị cho bạn mà.' },
        ],
        gloss: { 'hältst … von': 'nghĩ về (halten von)', Farben: 'màu sắc', Linien: 'đường nét', anschaue: 'ngắm nhìn (anschauen)', Beschreibung: 'phần mô tả', Großstadt: 'thành phố lớn', Lustige: 'điều buồn cười', wirf: 'ném (werfen)', denn: 'thế (nhấn mạnh câu hỏi)' },
        questions: [
          tf('B findet das Gemälde sehr schön.', false, { explain: 'Für mich ist das nichts Besonderes.' }),
          mc('Theo mô tả, bức tranh thể hiện gì?', ['cuộc sống ở thành phố lớn', 'một phong cảnh', 'một khu chợ'], 'cuộc sống ở thành phố lớn'),
          mc('B thích gì hơn?', ['nhiếp ảnh', 'âm nhạc', 'kịch'], 'nhiếp ảnh'),
          tf('Die Skulptur ist aus altem Plastik gemacht.', true),
        ],
        dictation: [2, 7],
      },
      writing_prompt_vi:
        'Mô tả một bức tranh hoặc bức ảnh bạn thích (5–6 câu), dùng ít nhất ba cách danh từ hóa (beim …, das Schöne, etwas Besonderes…).',
    },
    {
      title_vi: 'Một buổi tối ở nhà hát',
      goal_vi: 'Nói về kịch, nhạc, opera; dùng statt … zu và ohne … zu.',
      items: [
        'Theater', 'Theaterstück', 'Bühne', 'Schauspieler', 'Rolle', 'Publikum', 'Vorstellung', 'Eintrittskarte', 'Oper',
        'Orchester', 'Musiker', 'Sänger', 'Stimme', 'Regisseur', 'Komödie', 'aufführen', 'inszenieren', 'applaudieren',
        'komponieren', 'auftreten', 'klassisch', 'ausverkauft', 'berührend', 'enttäuschend', 'statt … zu', 'ohne … zu',
        'statt … zu / ohne … zu',
      ],
      grammar: {
        point: 'statt-ohne',
        sections: [
          {
            text_vi:
              '**ohne … zu** + nguyên mẫu = mà không: Er ging nach Hause, **ohne** sich **zu verabschieden**. **statt … zu** (hoặc anstatt) = thay vì: **Statt** ins Kino **zu gehen**, gehen wir ins Theater. Chỉ dùng khi **cùng chủ ngữ**; zu + nguyên mẫu ở **cuối**.',
            examples: [
              ['Er verließ das Theater, ohne zu applaudieren.', 'Anh ấy rời nhà hát mà không vỗ tay.'],
              ['Statt fernzusehen, gehen wir heute in die Oper.', 'Thay vì xem tivi, hôm nay chúng tôi đi xem opera.'],
            ],
            exercises: [
              fill('Er ging, ohne Tschüss {zu} sagen.', 'Anh ấy đi mà không chào.'),
              choose('___ zu Hause zu bleiben, gehen wir ins Konzert.', ['Statt', 'Ohne', 'Um'], 'Statt', { vi: 'Thay vì ở nhà, chúng tôi đi nghe hòa nhạc.' }),
              order('Sie / kaufte / die Karte, / ohne / den Preis / zu / kennen.', 'Cô ấy mua vé mà không biết giá.'),
            ],
          },
          {
            text_vi:
              'Động từ tách: zu chen vào giữa: ohne **anzurufen**, statt **mitzukommen**. Khác chủ ngữ: dùng **ohne dass** / **statt dass** + câu phụ: Er ging, **ohne dass** ich es merkte. So sánh: **um … zu** (để), **ohne … zu** (mà không), **statt … zu** (thay vì).',
            table: 'Cấu trúc | Nghĩa | Ví dụ\num … zu | để | um Karten zu kaufen\nohne … zu | mà không | ohne Karten zu kaufen\nstatt … zu | thay vì | statt Karten zu kaufen',
            examples: [['Sie ist ins Theater gegangen, ohne mich anzurufen.', 'Cô ấy đi xem kịch mà không gọi cho tôi.']],
            exercises: [
              transform('Nối bằng ohne … zu', 'Er ist gegangen. Er hat nicht applaudiert.', ['Er ist gegangen, ohne zu applaudieren.']),
              transform('Nối bằng statt … zu', 'Wir sehen keine Serie. Wir gehen ins Theater.', [
                'Statt eine Serie zu sehen, gehen wir ins Theater.',
                'Wir gehen ins Theater, statt eine Serie zu sehen.',
              ]),
              choose('Sie kam, ohne vorher ___.', ['anzurufen', 'zu anrufen', 'anrufen'], 'anzurufen', { vi: 'Cô ấy đến mà không gọi trước.' }),
            ],
          },
          {
            text_vi:
              'Nhà hát: **Theaterstück** do **Regisseur** **inszeniert** (dàn dựng); **Schauspieler** đóng **Rolle** trên **Bühne**; **Publikum** **applaudiert**. Vé (**Eintrittskarte**) có thể **ausverkauft**. Opera có **Orchester** và **Sänger**; nhạc **klassisch**.',
            examples: [['Die Vorstellung war schon nach zwei Tagen ausverkauft.', 'Chỉ sau hai ngày buổi diễn đã bán hết vé.']],
            exercises: [
              fill('Die Vorstellung ist leider {ausverkauft}.', 'Tiếc là buổi diễn đã bán hết vé.'),
              translate('Khán giả vỗ tay rất lâu.', ['Das Publikum applaudierte sehr lange.', 'Das Publikum hat sehr lange applaudiert.']),
            ],
          },
        ],
        mixed: [
          choose('Er spielte die Rolle, ___ den Text zu vergessen.', ['ohne', 'statt', 'um'], 'ohne', { vi: 'Anh ấy diễn vai mà không quên lời.' }),
          fill('Statt Musik {zu} hören, spielt sie selbst Klavier.', 'Thay vì nghe nhạc, cô ấy tự chơi piano.'),
          transform('Nối bằng statt … zu', 'Er schläft nicht. Er komponiert die ganze Nacht.', [
            'Statt zu schlafen, komponiert er die ganze Nacht.',
            'Er komponiert die ganze Nacht, statt zu schlafen.',
          ]),
          choose('Wir sind gegangen, ___ die Komödie zu Ende zu sehen.', ['ohne', 'um'], 'ohne', { vi: 'Chúng tôi đã về mà không xem hết vở hài kịch.' }),
          order('Statt / ins Kino / zu / gehen, / sehen / wir / ein Theaterstück.', 'Thay vì đi xem phim, chúng tôi xem một vở kịch.'),
        ],
      },
      dialogue: {
        title_de: 'Ein Abend in der Oper',
        lines: [
          { speaker: 'A', de: 'Wie war die Oper gestern?', vi: 'Buổi opera hôm qua thế nào?' },
          { speaker: 'B', de: 'Wunderbar! Statt wie immer eine Serie zu sehen, bin ich mal in die Oper gegangen.', vi: 'Tuyệt vời! Thay vì xem phim bộ như mọi khi, mình thử đi xem opera.' },
          { speaker: 'A', de: 'Hattest du eine Karte? Ich dachte, die Vorstellung war ausverkauft.', vi: 'Bạn có vé à? Mình tưởng buổi diễn hết vé rồi.' },
          { speaker: 'B', de: 'Ich habe an der Abendkasse gewartet und Glück gehabt.', vi: 'Mình đợi ở quầy vé buổi tối và gặp may.' },
          { speaker: 'A', de: 'Und die Sängerin?', vi: 'Còn nữ ca sĩ?' },
          { speaker: 'B', de: 'Ihre Stimme war unglaublich. Das Ende war sehr berührend, ich habe sogar geweint.', vi: 'Giọng cô ấy khó tin nổi. Đoạn kết rất cảm động, mình còn khóc.' },
          { speaker: 'A', de: 'Und das Orchester?', vi: 'Còn dàn nhạc?' },
          { speaker: 'B', de: 'Auch super. Nur ein Mann neben mir ist mitten in der Vorstellung gegangen, ohne etwas zu sagen.', vi: 'Cũng rất hay. Chỉ có một người đàn ông cạnh mình bỏ về giữa buổi mà không nói gì.' },
          { speaker: 'A', de: 'Vielleicht hat er sich gelangweilt. Klassische Musik ist nicht für jeden.', vi: 'Có lẽ ông ấy chán. Nhạc cổ điển không hợp với tất cả mọi người.' },
          { speaker: 'B', de: 'Stimmt. Aber das Publikum hat am Ende zehn Minuten applaudiert!', vi: 'Đúng. Nhưng cuối buổi khán giả vỗ tay mười phút!' },
        ],
        gloss: { wunderbar: 'tuyệt vời', Abendkasse: 'quầy vé buổi tối', Glück: 'may mắn', Sängerin: 'nữ ca sĩ', unglaublich: 'khó tin', Ende: 'đoạn kết', sogar: 'thậm chí', geweint: 'khóc (weinen)', mitten: 'giữa', jeden: 'mỗi người' },
        questions: [
          mc('Thường ngày B làm gì buổi tối?', ['xem phim bộ', 'đi xem opera', 'đọc sách'], 'xem phim bộ'),
          tf('B hat die Karte an der Abendkasse bekommen.', true),
          tf('Das Ende der Oper war enttäuschend.', false, { explain: 'Das Ende war sehr berührend.' }),
          mc('Người đàn ông cạnh B đã làm gì?', ['bỏ về giữa buổi', 'ngủ', 'hát theo'], 'bỏ về giữa buổi'),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Kể về một buổi biểu diễn bạn đã xem (5–6 câu), dùng ít nhất một câu statt … zu và một câu ohne … zu.',
    },
    {
      title_vi: 'Sách, phim và giải trí',
      goal_vi: 'Nói về sách, phim, sự kiện giải trí và lên kế hoạch; dùng falls.',
      items: [
        'Roman', 'Gedicht', 'Schriftsteller', 'Dichter', 'Handlung', 'Figur', 'Kapitel', 'Märchen', 'Krimi', 'Serie',
        'Unterhaltung', 'Veranstaltung', 'Festival', 'Freizeitangebot', 'sich amüsieren', 'sich langweilen', 'gewinnen',
        'übertragen', 'fesseln', 'unterhaltsam', 'kitschig', 'witzig', 'beliebt', 'ins Kino gehen', 'falls',
        'falls: điều kiện có thể xảy ra',
      ],
      grammar: {
        point: 'falls',
        sections: [
          {
            text_vi:
              '**falls** = nếu, phòng khi (điều kiện **có thể** xảy ra). Mở câu phụ, động từ **cuối**: **Falls** es regnet, gehen wir ins Kino. Nimm einen Schirm mit, **falls** es regnet. Câu falls đứng trước → câu chính bắt đầu bằng **động từ**.',
            examples: [
              ['Falls die Karten ausverkauft sind, sehen wir zu Hause eine Serie.', 'Nếu vé đã hết, chúng ta xem phim bộ ở nhà.'],
              ['Ruf mich an, falls du Lust auf Kino hast.', 'Gọi cho tôi nếu bạn muốn đi xem phim.'],
            ],
            exercises: [
              fill('{Falls} es regnet, bleiben wir zu Hause.', 'Nếu trời mưa, chúng ta ở nhà.'),
              choose('Ruf mich an, ___ du Zeit hast.', ['falls', 'ob', 'dass'], 'falls', { vi: 'Gọi cho tôi nếu bạn có thời gian.' }),
              order('Falls / du / Zeit / hast, / komm / zum Festival!', 'Nếu bạn có thời gian, hãy đến lễ hội!'),
            ],
          },
          {
            text_vi:
              '**wenn** có thể nghĩa "khi" (chắc chắn xảy ra) hoặc "nếu"; **falls** chỉ là "nếu, trong trường hợp". **Wenn** ich nach Hause komme, … (khi về – chắc chắn). **Falls** ich zu spät komme, … (nếu lỡ đến muộn). Điều kiện **không thật** (Konjunktiv II) dùng **wenn**, không dùng falls.',
            examples: [['Falls dir der Krimi gefällt, leihe ich dir den zweiten Teil.', 'Nếu bạn thích truyện trinh thám này, tôi cho mượn phần hai.']],
            exercises: [
              choose('___ ich morgen aufwache, trinke ich zuerst Kaffee.', ['Wenn', 'Falls'], 'Wenn', { vi: 'Sáng mai khi thức dậy, tôi uống cà phê trước.' }),
              transform('Nối bằng falls', 'Vielleicht gefällt dir das Buch. Dann schenke ich dir den zweiten Teil.', [
                'Falls dir das Buch gefällt, schenke ich dir den zweiten Teil.',
              ]),
              choose('Falls du dich ___, können wir gehen.', ['langweilst', 'langweilen', 'gelangweilt'], 'langweilst', { vi: 'Nếu bạn thấy chán, chúng ta có thể về.' }),
            ],
          },
          {
            text_vi:
              'Sách, phim: **Roman** (tiểu thuyết), **Krimi** (trinh thám), **Märchen** (cổ tích), **Gedicht** (thơ). **Handlung** = cốt truyện; **Figur** = nhân vật; **Kapitel** = chương. Hay thì **fesseln** (cuốn hút), **unterhaltsam**, **witzig**; dở thì **kitschig**. **sich amüsieren** ≠ **sich langweilen**.',
            examples: [['Der Roman hat mich von der ersten Seite an gefesselt.', 'Cuốn tiểu thuyết cuốn hút tôi ngay từ trang đầu.']],
            exercises: [
              fill('Der Krimi hat mich sehr {gefesselt}. (fesseln)', 'Truyện trinh thám rất cuốn hút tôi.'),
              translate('Tôi thấy chán.', ['Ich langweile mich.', 'Mir ist langweilig.']),
            ],
          },
        ],
        mixed: [
          transform('Nối bằng falls', 'Vielleicht regnet es. Dann gehen wir ins Kino.', ['Falls es regnet, gehen wir ins Kino.']),
          choose('Nimm eine Jacke mit, ___ es kalt wird.', ['falls', 'ob'], 'falls', { vi: 'Mang theo áo khoác phòng khi trời lạnh.' }),
          fill('Falls du den Film schon {kennst}, sehen wir einen anderen.', 'Nếu bạn đã biết phim này, chúng ta xem phim khác.'),
          choose('Falls das Konzert ausfällt, ___ wir das Geld zurück.', ['bekommen', 'wir bekommen'], 'bekommen', { vi: 'Nếu buổi hòa nhạc bị hủy, chúng ta được hoàn tiền.' }),
          order('Ich / komme / mit, / falls / du / mich / einlädst.', 'Tôi sẽ đi cùng nếu bạn mời tôi.'),
        ],
      },
      dialogue: {
        title_de: 'Pläne fürs Wochenende',
        lines: [
          { speaker: 'A', de: 'Hast du am Wochenende schon etwas vor?', vi: 'Cuối tuần bạn đã có kế hoạch gì chưa?' },
          { speaker: 'B', de: 'Noch nicht. Falls das Wetter gut ist, gehe ich zum Filmfestival im Park.', vi: 'Chưa. Nếu thời tiết đẹp, mình sẽ đi liên hoan phim ở công viên.' },
          { speaker: 'A', de: 'Klingt gut! Welche Filme laufen dort?', vi: 'Nghe hay đấy! Ở đó chiếu phim gì?' },
          { speaker: 'B', de: 'Am Samstag eine Komödie und am Sonntag ein Film nach einem bekannten Roman.', vi: 'Thứ Bảy một phim hài, Chủ nhật một phim dựa theo một tiểu thuyết nổi tiếng.' },
          { speaker: 'A', de: 'Den Roman habe ich gelesen. Die Handlung ist spannend, aber das Ende ist etwas kitschig.', vi: 'Mình đọc cuốn tiểu thuyết đó rồi. Cốt truyện hấp dẫn nhưng đoạn kết hơi sến.' },
          { speaker: 'B', de: 'Falls dir der Film nicht gefällt, können wir ja früher gehen.', vi: 'Nếu bạn không thích phim, chúng ta có thể về sớm.' },
          { speaker: 'A', de: 'Und falls es regnet?', vi: 'Còn nếu trời mưa?' },
          { speaker: 'B', de: 'Dann bleiben wir zu Hause und schauen eine Serie. Ich kenne eine sehr witzige.', vi: 'Thì ở nhà xem phim bộ. Mình biết một bộ rất vui.' },
          { speaker: 'A', de: 'Super, so langweilen wir uns sicher nicht!', vi: 'Tuyệt, thế thì chắc chắn không chán!' },
        ],
        gloss: { vor: 'dự định (vorhaben)', Filmfestival: 'liên hoan phim', klingt: 'nghe có vẻ', laufen: 'được chiếu', spannend: 'hấp dẫn', Ende: 'đoạn kết', schauen: 'xem' },
        questions: [
          mc('Nếu thời tiết đẹp, B sẽ làm gì?', ['đi liên hoan phim ở công viên', 'đi bơi', 'ở nhà'], 'đi liên hoan phim ở công viên'),
          tf('A hat den Roman gelesen.', true),
          mc('A nghĩ gì về đoạn kết của tiểu thuyết?', ['hơi sến', 'rất buồn', 'quá ngắn'], 'hơi sến'),
          tf('Falls es regnet, gehen sie trotzdem in den Park.', false, { explain: 'Dann bleiben wir zu Hause und schauen eine Serie.' }),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Lên kế hoạch cuối tuần với các phương án dự phòng (5 câu), dùng ít nhất ba câu falls.',
    },
  ],
  test: {
    grammar: {
      nominal: [
        fill('Beim {Lesen} trinke ich Tee. (lesen)', 'Khi đọc sách tôi uống trà.'),
        choose('Gibt es etwas ___?', ['Neues', 'neues'], 'Neues'),
        choose('Das war nichts ___.', ['Besonderes', 'Besondere'], 'Besonderes'),
        order('Das / Schwimmen / macht / mir / Spaß.', 'Tôi thích bơi.'),
        fill('Ich wünsche dir alles {Gute}.', 'Chúc bạn mọi điều tốt đẹp.'),
        choose('Wir brauchen Papier zum ___.', ['Malen', 'malen'], 'Malen'),
      ],
      'statt-ohne': [
        fill('Er ging, ohne Tschüss {zu} sagen.', 'Anh ấy đi mà không chào.'),
        choose('___ zu arbeiten, schläft er.', ['Statt', 'Ohne'], 'Statt'),
        choose('Sie kam, ohne ___.', ['anzurufen', 'zu anrufen'], 'anzurufen'),
        order('Statt / zu / lernen, / spielt / er.', 'Thay vì học, cậu ấy chơi.'),
        choose('Er kaufte das Bild, ___ den Preis zu fragen.', ['ohne', 'um'], 'ohne'),
        fill('Statt fernzusehen, {lese} ich ein Buch.', 'Thay vì xem tivi, tôi đọc sách.'),
      ],
      falls: [
        fill('{Falls} es regnet, bleiben wir hier.', 'Nếu trời mưa, chúng ta ở đây.'),
        choose('Ruf an, ___ du Hilfe brauchst.', ['falls', 'ob'], 'falls'),
        choose('Falls du Zeit hast, ___ vorbei!', ['komm', 'du kommst'], 'komm'),
        order('Falls / der Film / langweilig / ist, / gehen / wir.', 'Nếu phim chán, chúng ta về.'),
        choose('Falls er ___, sag ihm Bescheid.', ['kommt', 'kommen'], 'kommt'),
        fill('Nimm Geld mit, falls du Hunger {hast}.', 'Mang theo tiền phòng khi bạn đói.'),
      ],
    },
    reading: {
      title_de: 'Die Lange Nacht der Museen',
      text_de:
        'Einmal im Jahr gibt es in vielen deutschen Städten die „Lange Nacht der Museen“. Statt um 18 Uhr zu schließen, bleiben die Museen bis zwei Uhr nachts geöffnet. Mit einer Eintrittskarte kann man alle Ausstellungen besuchen. Es gibt nicht nur Gemälde und Skulpturen, sondern auch Konzerte, Theater und Führungen. Das Besondere ist die Atmosphäre: Überall sind Menschen, und viele Künstler treten live auf. Lena war letztes Jahr dabei. Sie sagt: „Ich habe sechs Museen besucht, ohne mich eine Minute zu langweilen.“ Falls ihr Lust habt: Die nächste Lange Nacht findet im August statt.',
      gloss: {
        schließen: 'đóng cửa',
        geöffnet: 'mở cửa',
        Führungen: 'chuyến tham quan có hướng dẫn',
        Atmosphäre: 'bầu không khí',
        überall: 'khắp nơi',
        live: 'trực tiếp',
        'findet … statt': 'diễn ra (stattfinden)',
      },
      questions: [
        mc('Trong đêm đó bảo tàng mở cửa đến mấy giờ?', ['hai giờ sáng', '18 giờ', 'nửa đêm'], 'hai giờ sáng'),
        tf('Man braucht für jedes Museum eine eigene Karte.', false, { explain: 'Mit einer Eintrittskarte kann man alle Ausstellungen besuchen.' }),
        tf('Lena hat sich nicht gelangweilt.', true),
        mc('Đêm bảo tàng tiếp theo diễn ra khi nào?', ['tháng Tám', 'tháng Mười hai', 'tháng Năm'], 'tháng Tám'),
      ],
    },
  },
});
