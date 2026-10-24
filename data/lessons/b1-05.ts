// B1 · 05 Tiền bạc và tiêu dùng — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b1-05',
  points: [
    {
      key: 'passiv',
      rule_key: 'passiv-praesens-man-von',
      category: 'tense',
      title_vi: 'Bị động Präsens: man → werden + Partizip II, von + Dativ',
      explanation_vi: 'Câu với man đổi được sang bị động: Man überweist das Geld → Das Geld wird überwiesen. Muốn nói ai làm: von + Dativ. Chủ ngữ số nhiều → werden.',
    },
    {
      key: 'passiv-modal',
      rule_key: 'passiv-modalverb',
      category: 'verb_position',
      title_vi: 'Bị động với động từ khuyết thiếu',
      explanation_vi: 'Modalverb (vị trí 2) + Partizip II + werden (cuối): Die Ware muss geliefert werden. Trong câu phụ, Modalverb đứng cuối cùng: …, weil sie repariert werden muss.',
    },
    {
      key: 'adj',
      rule_key: 'adj-endung-wiederholung',
      category: 'adjective_ending',
      title_vi: 'Đuôi tính từ: ôn tập ba loại',
      explanation_vi: 'Sau der/die/das: -e hoặc -en. Sau ein/kein/mein: tính từ mang đuôi khi mạo từ không có đuôi (ein neuer, ein neues). Không mạo từ: đuôi như mạo từ der (frisches Obst, mit frischem Obst).',
    },
  ],
  lessons: [
    {
      title_vi: 'Ở ngân hàng',
      goal_vi: 'Mở tài khoản, chuyển khoản, rút tiền; mô tả quy trình bằng câu bị động.',
      items: [
        'Girokonto', 'Überweisung', 'Geldautomat', 'Geheimzahl', 'Gebühr', 'Zins', 'Kredit', 'Schulden', 'Kontoauszug',
        'Lastschrift', 'Dauerauftrag', 'Steuer', 'Versicherung', 'Münze', 'Schein', 'überweisen', 'abheben', 'einzahlen',
        'abbuchen', 'versichern', 'festlegen', 'monatlich', 'kostenpflichtig', 'bar', 'Bị động Präsens: werden + Partizip II',
        'man thay cho bị động',
      ],
      grammar: {
        point: 'passiv',
        sections: [
          {
            text_vi:
              'Ôn: **bị động** = **werden** (vị trí 2) + **Partizip II** (cuối). Dùng khi **hành động** quan trọng hơn người làm: Die Miete **wird** jeden Monat **abgebucht**. Câu chủ động với **man** thường đổi được sang bị động: **Man** überweist das Geld. → Das Geld **wird überwiesen**.',
            table: 'Chủ động (man) | Bị động\nMan bucht die Miete ab. | Die Miete wird abgebucht.\nMan zahlt Zinsen. | Zinsen werden gezahlt.\nMan verlangt eine Gebühr. | Eine Gebühr wird verlangt.',
            examples: [
              ['Das Gehalt wird am Monatsende überwiesen.', 'Lương được chuyển khoản vào cuối tháng.'],
              ['Hier wird nur bar bezahlt.', 'Ở đây chỉ trả tiền mặt.'],
            ],
            exercises: [
              fill('Die Miete {wird} jeden Monat abgebucht.', 'Tiền nhà được trừ tự động mỗi tháng.'),
              choose('Die Rechnungen ___ automatisch bezahlt.', ['werden', 'wird'], 'werden', { vi: 'Các hóa đơn được thanh toán tự động.' }),
              transform('Chuyển sang bị động', 'Man zahlt hier nur bar.', ['Hier wird nur bar gezahlt.', 'Hier wird nur bar bezahlt.']),
            ],
          },
          {
            text_vi:
              'Muốn nói **ai** làm: **von** + Dativ: Der Kredit wird **von der Bank** geprüft. Chủ ngữ số nhiều → **werden**: Die Kontoauszüge **werden** monatlich verschickt. Câu hỏi có/không: **werden** đứng đầu: **Wird** hier Kartenzahlung **akzeptiert**?',
            examples: [['Die Steuern werden vom Gehalt abgezogen.', 'Thuế được trừ vào lương.']],
            exercises: [
              choose('Der Antrag wird ___ der Bank geprüft.', ['von', 'mit', 'bei'], 'von', { vi: 'Đơn được ngân hàng xem xét.' }),
              fill('{Wird} hier mit Karte bezahlt?', 'Ở đây có trả bằng thẻ không?'),
              order('Die Kontoauszüge / werden / jeden Monat / verschickt.', 'Sao kê tài khoản được gửi hằng tháng.'),
            ],
          },
          {
            text_vi:
              '**Geld abheben** (rút) am Geldautomaten mit der **Geheimzahl**; **einzahlen** (nộp vào); **überweisen** (chuyển khoản). **Dauerauftrag** = lệnh chuyển định kỳ (tiền nhà), **Lastschrift** = ghi nợ tự động. **Gebühr** = phí; **kostenpflichtig** = mất phí.',
            examples: [['Für die Überweisung wird keine Gebühr verlangt.', 'Chuyển khoản không mất phí.']],
            exercises: [
              fill('Ich muss noch Geld am Automaten {abheben}.', 'Tôi còn phải rút tiền ở máy.'),
              translate('Tôi trả tiền mặt.', ['Ich zahle bar.', 'Ich bezahle bar.']),
            ],
          },
        ],
        mixed: [
          transform('Chuyển sang bị động', 'Man überweist das Geld morgen.', ['Das Geld wird morgen überwiesen.']),
          choose('Die Zinsen ___ am Jahresende gezahlt.', ['werden', 'wird'], 'werden', { vi: 'Lãi được trả vào cuối năm.' }),
          fill('Die Karte wird {geschickt}. (schicken)', 'Thẻ sẽ được gửi đi.'),
          choose('Das Konto wird ___ meinem Vater bezahlt.', ['von', 'durch'], 'von', { vi: 'Tài khoản do bố tôi trả.' }),
          order('Hier / wird / eine Gebühr / verlangt.', 'Ở đây có thu phí.'),
        ],
      },
      dialogue: {
        title_de: 'Ein Konto eröffnen',
        lines: [
          { speaker: 'A', de: 'Guten Tag! Was kann ich für Sie tun?', vi: 'Xin chào! Tôi có thể giúp gì cho anh?' },
          { speaker: 'B', de: 'Ich möchte ein Girokonto eröffnen. Ist das Konto kostenpflichtig?', vi: 'Tôi muốn mở tài khoản thanh toán. Tài khoản có mất phí không?' },
          { speaker: 'A', de: 'Normalerweise wird eine Gebühr von fünf Euro im Monat verlangt. Für Studenten ist es kostenlos.', vi: 'Thông thường phí năm euro mỗi tháng. Với sinh viên thì miễn phí.' },
          { speaker: 'B', de: 'Super, ich bin Student. Wie wird die Miete bezahlt?', vi: 'Tuyệt, tôi là sinh viên. Tiền nhà được trả thế nào?' },
          { speaker: 'A', de: 'Am besten mit einem Dauerauftrag. Dann wird das Geld jeden Monat automatisch überwiesen.', vi: 'Tốt nhất là lệnh chuyển định kỳ. Khi đó tiền được chuyển tự động mỗi tháng.' },
          { speaker: 'B', de: 'Und wann bekomme ich die Karte?', vi: 'Khi nào tôi nhận được thẻ?' },
          { speaker: 'A', de: 'Die Karte wird in einer Woche geschickt. Die Geheimzahl kommt in einem anderen Brief.', vi: 'Thẻ sẽ được gửi trong một tuần. Mã PIN đến trong một lá thư khác.' },
          { speaker: 'B', de: 'Kann ich überall Geld abheben?', vi: 'Tôi rút tiền ở đâu cũng được chứ?' },
          { speaker: 'A', de: 'An unseren Automaten ist es kostenlos. Bei anderen Banken wird eine Gebühr verlangt.', vi: 'Ở máy của chúng tôi thì miễn phí. Ở ngân hàng khác sẽ bị thu phí.' },
        ],
        gloss: { eröffnen: 'mở (tài khoản)', normalerweise: 'thông thường', verlangt: 'đòi, thu (verlangen)', kostenlos: 'miễn phí', automatisch: 'tự động', überall: 'mọi nơi', unseren: 'của chúng tôi' },
        questions: [
          mc('B muốn làm gì?', ['mở tài khoản thanh toán', 'vay tiền', 'đổi tiền'], 'mở tài khoản thanh toán'),
          tf('Für Studenten ist das Konto kostenpflichtig.', false, { explain: 'Für Studenten ist es kostenlos.' }),
          mc('Tiền nhà nên trả bằng cách nào?', ['lệnh chuyển định kỳ', 'tiền mặt', 'séc'], 'lệnh chuyển định kỳ'),
          tf('Bei anderen Banken wird eine Gebühr verlangt.', true),
        ],
        dictation: [4, 6],
      },
      writing_prompt_vi:
        'Mô tả cách bạn trả các khoản hằng tháng (tiền nhà, điện thoại, bảo hiểm) trong 5 câu, dùng ít nhất ba câu bị động.',
    },
    {
      title_vi: 'Mua sắm và khiếu nại',
      goal_vi: 'Đặt hàng, đổi trả, khiếu nại; dùng bị động với động từ khuyết thiếu.',
      items: [
        'Konsum', 'Verbraucher', 'Ware', 'Lieferung', 'Bestellung', 'Reklamation', 'Garantie', 'Quittung', 'Kassenzettel',
        'Umtausch', 'Verbraucherzentrale', 'Händler', 'Online-Shop', 'Werbeprospekt', 'Schnäppchen', 'Kaufentscheidung',
        'liefern', 'reklamieren', 'erstatten', 'feilschen', 'beeinflussen', 'insgesamt', 'im Sonderangebot',
        'Bị động với động từ khuyết thiếu',
      ],
      grammar: {
        point: 'passiv-modal',
        sections: [
          {
            text_vi:
              'Bị động với **động từ khuyết thiếu**: Modalverb (vị trí 2) + **Partizip II** + **werden** (cuối câu). Die Ware **muss** bis Freitag **geliefert werden**. Die Quittung **kann** online **gedruckt werden**. Câu chủ động tương ứng: Man muss die Ware liefern.',
            table: 'Chủ động | Bị động với Modalverb\nMan muss das Paket abholen. | Das Paket muss abgeholt werden.\nMan kann die Ware umtauschen. | Die Ware kann umgetauscht werden.\nMan darf hier nicht rauchen. | Hier darf nicht geraucht werden.',
            examples: [
              ['Die Bestellung muss bis Montag bezahlt werden.', 'Đơn hàng phải được thanh toán trước thứ Hai.'],
              ['Die Schuhe können umgetauscht werden.', 'Đôi giày có thể được đổi.'],
            ],
            exercises: [
              fill('Die Ware muss bis Freitag geliefert {werden}.', 'Hàng phải được giao trước thứ Sáu.'),
              choose('Die Jacke kann innerhalb von 14 Tagen ___ werden.', ['zurückgegeben', 'zurückgeben', 'zurückgibt'], 'zurückgegeben', { vi: 'Áo khoác có thể được trả lại trong 14 ngày.' }),
              order('Die Rechnung / muss / sofort / bezahlt / werden.', 'Hóa đơn phải được thanh toán ngay.'),
            ],
          },
          {
            text_vi:
              'Trong **câu phụ** (weil, dass, ob), Modalverb đứng **cuối cùng**: …, weil die Ware **umgetauscht werden muss**. Câu hỏi: **Kann** das Gerät **repariert werden**? Phủ định: Der Kassenzettel **darf nicht** vergessen **werden**.',
            examples: [['Ich weiß nicht, ob das Handy repariert werden kann.', 'Tôi không biết điện thoại có sửa được không.']],
            exercises: [
              transform('Chuyển sang bị động', 'Man kann die Ware online bestellen.', ['Die Ware kann online bestellt werden.']),
              choose('Er sagt, dass die Lieferung bezahlt werden ___.', ['muss', 'müssen', 'werden'], 'muss', { vi: 'Anh ấy nói rằng phải trả tiền giao hàng.' }),
              fill('{Kann} der Betrag erstattet werden?', 'Số tiền có thể được hoàn lại không?'),
            ],
          },
          {
            text_vi:
              '**reklamieren** = khiếu nại hàng lỗi; cần **Kassenzettel** hoặc **Quittung** (hóa đơn). Trong thời gian **Garantie**, hàng được sửa hoặc đổi (**Umtausch**), hoặc tiền được **erstattet** (hoàn lại). Gặp khó khăn: hỏi **Verbraucherzentrale**.',
            examples: [['Ohne Kassenzettel kann die Ware nicht umgetauscht werden.', 'Không có hóa đơn thì không đổi hàng được.']],
            exercises: [
              fill('Ich möchte diesen Toaster {reklamieren}.', 'Tôi muốn khiếu nại cái máy nướng bánh này.'),
              translate('Tiền sẽ được hoàn lại.', ['Das Geld wird erstattet.', 'Das Geld wird zurückerstattet.']),
            ],
          },
        ],
        mixed: [
          transform('Chuyển sang bị động', 'Man muss die Bestellung bestätigen.', ['Die Bestellung muss bestätigt werden.']),
          choose('Die Ware ___ heute noch geliefert werden.', ['soll', 'sollen', 'wird'], 'soll', { vi: 'Hàng sẽ được giao ngay hôm nay.' }),
          fill('Im Online-Shop kann mit Karte bezahlt {werden}.', 'Ở cửa hàng trực tuyến có thể trả bằng thẻ.'),
          choose('Hier darf nicht ___ werden.', ['gefeilscht', 'feilschen', 'feilscht'], 'gefeilscht', { vi: 'Ở đây không được mặc cả.' }),
          order('Ich / glaube, / dass / der Fernseher / repariert / werden / kann.', 'Tôi nghĩ cái tivi có thể sửa được.'),
        ],
      },
      dialogue: {
        title_de: 'Eine Reklamation',
        lines: [
          { speaker: 'A', de: 'Guten Tag, ich habe diesen Wasserkocher letzte Woche gekauft, aber er funktioniert nicht.', vi: 'Xin chào, tuần trước tôi mua cái ấm đun nước này nhưng nó không hoạt động.' },
          { speaker: 'B', de: 'Das tut mir leid. Haben Sie den Kassenzettel dabei?', vi: 'Rất tiếc. Anh có mang hóa đơn không?' },
          { speaker: 'A', de: 'Ja, hier. Kann der Wasserkocher umgetauscht werden?', vi: 'Có, đây. Cái ấm có thể đổi được không?' },
          { speaker: 'B', de: 'Leider haben wir dieses Modell nicht mehr. Er kann aber repariert werden.', vi: 'Tiếc là chúng tôi không còn mẫu này. Nhưng nó có thể được sửa.' },
          { speaker: 'A', de: 'Wie lange dauert das?', vi: 'Mất bao lâu?' },
          { speaker: 'B', de: 'Etwa zwei Wochen. Die Reparatur ist kostenlos, weil Sie noch Garantie haben.', vi: 'Khoảng hai tuần. Sửa miễn phí vì anh vẫn còn bảo hành.' },
          { speaker: 'A', de: 'Zwei Wochen sind zu lange. Kann das Geld nicht erstattet werden?', vi: 'Hai tuần thì lâu quá. Không thể hoàn tiền sao?' },
          { speaker: 'B', de: 'Doch, das ist auch möglich. Der Betrag wird auf Ihr Konto überwiesen.', vi: 'Có chứ, cũng được. Số tiền sẽ được chuyển vào tài khoản của anh.' },
          { speaker: 'A', de: 'Gut, dann machen wir das so. Vielen Dank!', vi: 'Tốt, vậy làm thế nhé. Cảm ơn nhiều!' },
        ],
        gloss: { Wasserkocher: 'ấm đun nước', funktioniert: 'hoạt động', dabei: 'mang theo', Modell: 'mẫu', Reparatur: 'việc sửa chữa', kostenlos: 'miễn phí', Betrag: 'số tiền', etwa: 'khoảng' },
        questions: [
          mc('Vấn đề của ấm đun nước là gì?', ['không hoạt động', 'bị vỡ', 'màu sai'], 'không hoạt động'),
          tf('Der Wasserkocher kann umgetauscht werden.', false, { explain: 'Leider haben wir dieses Modell nicht mehr.' }),
          mc('Sửa mất bao lâu?', ['khoảng hai tuần', 'một ngày', 'một tháng'], 'khoảng hai tuần'),
          tf('Am Ende wird das Geld erstattet.', true),
        ],
        dictation: [2, 7],
      },
      writing_prompt_vi:
        'Viết một email khiếu nại ngắn (5–6 câu) về món hàng bị lỗi, dùng ít nhất hai câu bị động với động từ khuyết thiếu (muss … werden, kann … werden).',
    },
    {
      title_vi: 'Tiết kiệm và chi tiêu',
      goal_vi: 'Nói về thu nhập, chi tiêu, tiết kiệm; dùng đúng đuôi tính từ.',
      items: [
        'Einkommen', 'Ausgabe', 'Einnahme', 'Haushaltsbuch', 'Budget', 'Wert', 'Ersparnis', 'Anschaffung', 'Kosten',
        'sich leisten', 'verschwenden', 'sich lohnen', 'sich verschulden', 'verdoppeln', 'anlegen', 'sparsam', 'großzügig',
        'gebraucht', 'wertvoll', 'überflüssig', 'nachhaltig', 'knapp', 'pleite', 'verschuldet', 'verschwenderisch', 'finanziell',
        'unnötig', 'in Raten zahlen', 'Geld sparen', 'über seine Verhältnisse leben', 'Geld ausgeben für',
        'Đuôi tính từ: ôn tập ba loại',
      ],
      grammar: {
        point: 'adj',
        sections: [
          {
            text_vi:
              'Ba loại đuôi tính từ. (1) Sau **der/die/das**: chỉ **-e** hoặc **-en** (der teur**e** Laptop, den teur**en** Laptop). (2) Sau **ein/kein/mein**: khi mạo từ không có đuôi, tính từ mang đuôi: ein teur**er** Laptop, ein teur**es** Handy. (3) **Không mạo từ**: tính từ nhận đuôi của der/das/dem: frisch**es** Obst, mit frisch**em** Obst.',
            table: 'Loại | Nom. giống đực | Nom. giống trung | Dativ giống đực\nder | der neue Laptop | das neue Handy | dem neuen Laptop\nein | ein neuer Laptop | ein neues Handy | einem neuen Laptop\nkhông mạo từ | neuer Wein | neues Geld | mit neuem Wein',
            examples: [
              ['Ich kaufe lieber einen gebrauchten Laptop.', 'Tôi thích mua laptop đã qua sử dụng hơn.'],
              ['Das ist ein sehr wertvolles Bild.', 'Đây là một bức tranh rất quý.'],
            ],
            exercises: [
              choose('Ich kaufe einen ___ Fernseher.', ['gebrauchten', 'gebrauchter', 'gebrauchte'], 'gebrauchten', { vi: 'Tôi mua một chiếc tivi cũ.' }),
              fill('Das ist ein {teures} Hobby. (teuer)', 'Đó là một sở thích tốn kém.'),
              choose('Wir trinken nur ___ Kaffee.', ['fairen', 'faire', 'fairer'], 'fairen', { vi: 'Chúng tôi chỉ uống cà phê thương mại công bằng.' }),
            ],
          },
          {
            text_vi:
              'Mẹo: xác định **giống và cách** của danh từ. Mạo từ đã **có đuôi rõ** (der, dem, den, einem, einen…) → tính từ chỉ **-e/-en**. Mạo từ **không đuôi** (ein, kein, mein ở Nom./Akk.) hoặc **không mạo từ** → tính từ tự mang đuôi (-er, -es, -em). Số nhiều sau die, keine, meine: luôn **-en**.',
            examples: [['Mit dem neuen Budget sparen wir viel Geld.', 'Với ngân sách mới chúng tôi tiết kiệm được nhiều tiền.']],
            exercises: [
              fill('Mit dem {neuen} Budget sparen wir mehr. (neu)', 'Với ngân sách mới, chúng tôi tiết kiệm nhiều hơn.'),
              choose('Sie hat keine ___ Ausgaben.', ['unnötigen', 'unnötige'], 'unnötigen', { vi: 'Cô ấy không có khoản chi không cần thiết nào.' }),
              choose('Er ist ein ___ Mensch.', ['sparsamer', 'sparsame', 'sparsamen'], 'sparsamer', { vi: 'Anh ấy là người tiết kiệm.' }),
            ],
          },
          {
            text_vi:
              '**sich etwas leisten** = có đủ tiền mua: Das kann ich mir nicht leisten. **Geld ausgeben für** + Akk = tiêu tiền vào. **in Raten zahlen** = trả góp. **über seine Verhältnisse leben** = sống vượt khả năng tài chính. **Es lohnt sich** = đáng (bỏ tiền, công sức).',
            examples: [['Ein gebrauchtes Fahrrad lohnt sich.', 'Một chiếc xe đạp cũ thì đáng mua.']],
            exercises: [
              fill('Ein neues Auto kann ich mir nicht {leisten}.', 'Tôi không đủ tiền mua ô tô mới.'),
              translate('Tôi tiêu quá nhiều tiền vào quần áo.', ['Ich gebe zu viel Geld für Kleidung aus.']),
            ],
          },
        ],
        mixed: [
          choose('Er wohnt in einer ___ Wohnung.', ['kleinen', 'kleine', 'kleiner'], 'kleinen', { vi: 'Anh ấy sống trong một căn hộ nhỏ.' }),
          fill('Wir kaufen nur {nachhaltige} Produkte. (nachhaltig)', 'Chúng tôi chỉ mua sản phẩm bền vững.'),
          choose('Das ___ Geld lege ich an.', ['gesparte', 'gesparten', 'gespartes'], 'gesparte', { vi: 'Số tiền tiết kiệm được tôi đem đầu tư.' }),
          fill('Ich trinke gern {kaltes} Wasser. (kalt)', 'Tôi thích uống nước lạnh.'),
          choose('Mit ___ Einkommen ist das Leben schwer.', ['knappem', 'knappen', 'knappes'], 'knappem', { vi: 'Với thu nhập eo hẹp, cuộc sống thật khó.' }),
        ],
      },
      dialogue: {
        title_de: 'Wohin geht das Geld?',
        lines: [
          { speaker: 'A', de: 'Am Monatsende bin ich immer pleite. Ich verstehe nicht, warum.', vi: 'Cuối tháng lúc nào mình cũng cháy túi. Mình không hiểu tại sao.' },
          { speaker: 'B', de: 'Schreibst du ein Haushaltsbuch? Dann siehst du alle Einnahmen und Ausgaben.', vi: 'Bạn có ghi sổ chi tiêu không? Khi đó bạn thấy hết các khoản thu chi.' },
          { speaker: 'A', de: 'Nein. Aber ich gebe viel Geld für teure Kleidung und neue Handys aus.', vi: 'Không. Nhưng mình tiêu nhiều tiền vào quần áo đắt và điện thoại mới.' },
          { speaker: 'B', de: 'Brauchst du wirklich jedes Jahr ein neues Handy? Ein gebrauchtes Handy ist viel günstiger.', vi: 'Bạn có thật cần mỗi năm một điện thoại mới không? Điện thoại cũ rẻ hơn nhiều.' },
          { speaker: 'A', de: 'Stimmt. Und ich bezahle ein teures Fitnessstudio, aber ich gehe nie hin.', vi: 'Đúng. Mình còn trả tiền phòng gym đắt mà chẳng bao giờ đi.' },
          { speaker: 'B', de: 'Das lohnt sich nicht! Das sind überflüssige Kosten.', vi: 'Thế thì không đáng! Đó là chi phí thừa.' },
          { speaker: 'A', de: 'Du bist so sparsam. Wie machst du das?', vi: 'Bạn tiết kiệm thật. Bạn làm thế nào?' },
          { speaker: 'B', de: 'Ich lege jeden Monat ein festes Budget fest. Mit dem gesparten Geld mache ich einmal im Jahr eine schöne Reise.', vi: 'Mỗi tháng mình đặt một ngân sách cố định. Với tiền tiết kiệm được, mỗi năm mình đi một chuyến du lịch đẹp.' },
        ],
        gloss: { Monatsende: 'cuối tháng', Fitnessstudio: 'phòng tập gym', festes: 'cố định', gesparten: 'đã tiết kiệm được', einmal: 'một lần' },
        questions: [
          tf('A hat am Monatsende immer viel Geld.', false, { explain: 'Am Monatsende bin ich immer pleite.' }),
          mc('A tiêu nhiều tiền vào gì?', ['quần áo đắt và điện thoại mới', 'sách', 'du lịch'], 'quần áo đắt và điện thoại mới'),
          tf('A geht oft ins Fitnessstudio.', false, { explain: 'Ich gehe nie hin.' }),
          mc('B dùng tiền tiết kiệm để làm gì?', ['đi du lịch mỗi năm một lần', 'mua điện thoại', 'trả nợ'], 'đi du lịch mỗi năm một lần'),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Viết 5–6 câu về thói quen chi tiêu của bạn: bạn tiêu tiền vào gì, tiết kiệm thế nào; chú ý đuôi tính từ (ein teures …, mit dem neuen …).',
    },
  ],
  test: {
    grammar: {
      passiv: [
        fill('Das Gehalt {wird} am Monatsende überwiesen.', 'Lương được chuyển vào cuối tháng.'),
        choose('Die Rechnungen ___ automatisch bezahlt.', ['werden', 'wird'], 'werden'),
        choose('Der Kredit wird ___ der Bank geprüft.', ['von', 'mit'], 'von'),
        order('Hier / wird / nur / bar / bezahlt.', 'Ở đây chỉ trả tiền mặt.'),
        fill('Die Miete wird jeden Monat {abgebucht}. (abbuchen)', 'Tiền nhà được trừ mỗi tháng.'),
        choose('___ hier Kartenzahlung akzeptiert?', ['Wird', 'Werden'], 'Wird'),
      ],
      'passiv-modal': [
        fill('Die Ware muss heute geliefert {werden}.', 'Hàng phải được giao hôm nay.'),
        choose('Das Handy kann repariert ___.', ['werden', 'wird'], 'werden'),
        choose('Die Rechnung muss bis Montag ___ werden.', ['bezahlt', 'bezahlen'], 'bezahlt'),
        order('Die Schuhe / können / umgetauscht / werden.', 'Đôi giày có thể được đổi.'),
        choose('Ich weiß, dass das Formular ausgefüllt werden ___.', ['muss', 'werden'], 'muss'),
        fill('Hier {darf} nicht geraucht werden.', 'Ở đây không được hút thuốc.'),
      ],
      adj: [
        choose('Ich kaufe einen ___ Laptop.', ['gebrauchten', 'gebrauchter'], 'gebrauchten'),
        choose('Das ist ein ___ Auto.', ['teures', 'teure'], 'teures'),
        fill('Mit dem {neuen} Handy bin ich zufrieden. (neu)', 'Tôi hài lòng với chiếc điện thoại mới.'),
        choose('Ich trinke gern ___ Tee.', ['grünen', 'grüne'], 'grünen'),
        choose('Sie hat keine ___ Schulden.', ['großen', 'große'], 'großen'),
        fill('Er ist ein sehr {großzügiger} Mann. (großzügig)', 'Ông ấy là một người rất hào phóng.'),
      ],
    },
    reading: {
      title_de: 'Sparen mit kleinem Einkommen',
      text_de:
        'Mai studiert in Köln und hat ein knappes Budget: Sie bekommt 900 Euro im Monat. Die Miete wird jeden Monat automatisch abgebucht, das sind schon 450 Euro. Deshalb muss jede Ausgabe gut geplant werden. Mai schreibt ein Haushaltsbuch und kauft fast nur gebrauchte Sachen. Ihre Möbel hat sie auf einem großen Flohmarkt gefunden. Kleidung wird im Second-Hand-Laden gekauft. Beim Essen spart sie auch: Sie kocht jeden Tag frisches Gemüse und nimmt das Mittagessen mit. Teure Restaurants kann sie sich nicht leisten. Trotzdem ist Mai zufrieden, denn am Ende des Monats hat sie oft noch 50 Euro übrig.',
      gloss: {
        Möbel: 'đồ nội thất',
        Flohmarkt: 'chợ đồ cũ',
        'Second-Hand-Laden': 'cửa hàng đồ cũ',
        Gemüse: 'rau',
        Mittagessen: 'bữa trưa',
        übrig: 'còn lại',
        zufrieden: 'hài lòng',
        denn: 'vì',
      },
      questions: [
        mc('Mỗi tháng Mai có bao nhiêu tiền?', ['900 euro', '450 euro', '1500 euro'], '900 euro'),
        tf('Die Miete wird bar bezahlt.', false, { explain: 'Die Miete wird automatisch abgebucht.' }),
        mc('Mai mua đồ nội thất ở đâu?', ['chợ đồ cũ', 'cửa hàng trực tuyến', 'siêu thị'], 'chợ đồ cũ'),
        tf('Am Monatsende hat Mai oft noch Geld übrig.', true),
      ],
    },
  },
});
