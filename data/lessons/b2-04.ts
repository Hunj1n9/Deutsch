// B2 · 04 Kinh tế và tiêu dùng — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b2-04',
  points: [
    {
      key: 'partizip-attribut',
      rule_key: 'partizipialattribut-erweitert',
      category: 'adjective_ending',
      title_vi: 'Phân từ mở rộng làm định ngữ',
      explanation_vi: 'Câu quan hệ có thể rút thành cụm đứng trước danh từ: die Preise, die stark gestiegen sind → die stark gestiegenen Preise. Partizip I (-end) = đang diễn ra, Partizip II = đã xong/bị động; phân từ mang đuôi tính từ.',
    },
    {
      key: 'relativ-wer-was',
      rule_key: 'relativsatz-wer-was-wo',
      category: 'word_choice',
      title_vi: 'Câu quan hệ với wer, was, wo',
      explanation_vi: 'wer = người nào mà (không có danh từ đi trước): Wer viel arbeitet, (der) verdient viel. was đi sau alles, nichts, etwas, das, so sánh nhất và cả một câu. wo thay cho giới từ + đại từ quan hệ khi nói nơi chốn.',
    },
    {
      key: 'je-nachdem',
      rule_key: 'je-nachdem-nebensatz',
      category: 'verb_position',
      title_vi: 'je nachdem (tùy theo)',
      explanation_vi: 'je nachdem + ob/wie/wann/was… mở câu phụ, động từ đứng cuối: Je nachdem, wie viel es kostet, kaufen wir es. Trả lời ngắn: Je nachdem. Dạng ngắn: je nach + Dativ (je nach Preis).',
    },
  ],
  lessons: [
    {
      title_vi: 'Thị trường và giá cả',
      goal_vi: 'Đọc hiểu tin kinh tế về giá cả, lạm phát và thương mại; hiểu và tạo cụm phân từ dài trước danh từ.',
      items: [
        'Wirtschaft', 'Wirtschaftswachstum', 'Konjunktur', 'Inflation', 'Rezession', 'Krise', 'Nachfrage',
        'Angebot und Nachfrage', 'Herstellung', 'Lieferkette', 'Export', 'Import', 'Handel', 'Kaufkraft', 'Lebenshaltungskosten',
        'Globalisierung', 'Standort', 'exportieren', 'importieren', 'steigern', 'zurückgehen', 'sich auswirken', 'schwanken',
        'stabil', 'steigend', 'sinkend', 'Phân từ mở rộng làm định ngữ', 'Wirtschaftskrise', 'Preissteigerung', 'Zulieferer',
        'Massenproduktion', 'Arbeitskraft', 'Schuldenkrise', 'ankurbeln', 'wirtschaftsstark', 'volkswirtschaftlich',
        'in die Höhe treiben', 'Wirtschaftsstandort', 'konjunkturell', 'stagnieren', 'abwerten',
      ],
      grammar: {
        point: 'partizip-attribut',
        sections: [
          {
            text_vi:
              'Phân từ dùng như **tính từ** trước danh từ và mang **đuôi tính từ**. **Partizip I** (gốc + **-end**) = việc **đang** diễn ra: die **steigenden** Preise (giá đang tăng). **Partizip II** = việc **đã** xảy ra hoặc **bị** làm: die **gestiegenen** Preise (giá đã tăng), das **importierte** Obst (trái cây được nhập khẩu).',
            table: 'Phân từ | Nghĩa | Ví dụ\nPartizip I (-end) | đang | die sinkende Nachfrage\nPartizip II (đã) | đã xong | die gestiegenen Kosten\nPartizip II (bị) | bị/được | die importierten Waren',
            examples: [
              ['Die steigenden Preise sind ein großes Problem.', 'Giá đang tăng là một vấn đề lớn.'],
              ['Die importierten Produkte sind oft billiger.', 'Các sản phẩm nhập khẩu thường rẻ hơn.'],
            ],
            exercises: [
              choose('Die ___ Nachfrage macht den Händlern Sorgen.', ['sinkende', 'gesunkene', 'sinken'], 'sinkende', { vi: 'Nhu cầu đang giảm làm các nhà buôn lo lắng.' }),
              fill('Die {exportierten} Autos gehen vor allem nach China. (exportieren)', 'Những chiếc xe được xuất khẩu chủ yếu sang Trung Quốc.'),
              choose('Wegen der ___ Kosten erhöhen wir die Preise.', ['gestiegenen', 'gestiegene', 'steigend'], 'gestiegenen', { vi: 'Vì chi phí đã tăng nên chúng tôi tăng giá.' }),
            ],
          },
          {
            text_vi:
              'Văn viết "nhồi" thêm thông tin **giữa mạo từ và danh từ**: die **im letzten Jahr stark gestiegenen** Preise. Đọc cụm này: tìm **mạo từ** (die) → nhảy tới **danh từ** (Preise) → đọc phần giữa như một câu quan hệ: die Preise, **die im letzten Jahr stark gestiegen sind**. Chiều ngược lại là cách viết văn phong trang trọng.',
            table: 'Câu quan hệ | Cụm phân từ mở rộng\ndie Preise, die stark gestiegen sind | die stark gestiegenen Preise\ndie Firma, die in Asien produziert | die in Asien produzierende Firma\ndie Waren, die aus China importiert werden | die aus China importierten Waren',
            examples: [['Die seit Monaten sinkende Kaufkraft trifft vor allem Familien.', 'Sức mua giảm nhiều tháng nay ảnh hưởng nhất đến các gia đình.']],
            exercises: [
              transform('Viết lại thành câu quan hệ', 'Die stark gestiegenen Mieten belasten Studierende.', [
                'Die Mieten, die stark gestiegen sind, belasten Studierende.',
              ]),
              transform('Viết thành cụm phân từ', 'die Waren, die aus Vietnam importiert werden', ['die aus Vietnam importierten Waren']),
              order('Die / seit Jahren / steigenden / Lebenshaltungskosten / sind / ein Problem.', 'Chi phí sinh hoạt tăng nhiều năm nay là một vấn đề.'),
            ],
          },
          {
            text_vi:
              'Từ vựng tin kinh tế: **Konjunktur** (tình hình kinh tế) có thể **stagnieren** (trì trệ) hay rơi vào **Rezession**. **Inflation** làm giảm **Kaufkraft**. **Angebot und Nachfrage** quyết định giá; nhu cầu cao **treibt die Preise in die Höhe**. Nhà nước muốn **die Wirtschaft ankurbeln** (thúc đẩy).',
            examples: [['Die hohe Nachfrage treibt die Preise in die Höhe.', 'Nhu cầu cao đẩy giá lên.']],
            exercises: [
              fill('Die Regierung will die Wirtschaft {ankurbeln}.', 'Chính phủ muốn thúc đẩy kinh tế.'),
              translate('Lạm phát làm giảm sức mua.', ['Die Inflation senkt die Kaufkraft.', 'Inflation senkt die Kaufkraft.', 'Die Inflation verringert die Kaufkraft.']),
            ],
          },
        ],
        mixed: [
          choose('Die ___ Arbeitslosigkeit ist ein gutes Zeichen.', ['sinkende', 'sinkenden', 'gesunken'], 'sinkende', { vi: 'Thất nghiệp đang giảm là dấu hiệu tốt.' }),
          fill('Die in Deutschland {hergestellten} Maschinen sind sehr gefragt. (herstellen)', 'Máy móc sản xuất tại Đức rất được ưa chuộng.'),
          transform('Viết thành cụm phân từ', 'die Kosten, die stark gestiegen sind', ['die stark gestiegenen Kosten']),
          choose('Viele Firmen leiden unter den ___ Lieferketten.', ['gestörten', 'störenden', 'gestört'], 'gestörten', { vi: 'Nhiều công ty chịu ảnh hưởng vì chuỗi cung ứng bị gián đoạn.' }),
          order('Die / im letzten Jahr / gesunkenen / Exporte / beunruhigen / die Industrie.', 'Xuất khẩu giảm năm ngoái khiến ngành công nghiệp lo ngại.'),
        ],
      },
      dialogue: {
        title_de: 'Alles wird teurer',
        lines: [
          { speaker: 'A', de: 'Hast du die Nachrichten gelesen? Die Inflation ist wieder gestiegen.', vi: 'Bạn đọc tin chưa? Lạm phát lại tăng rồi.' },
          { speaker: 'B', de: 'Das merke ich jeden Tag im Supermarkt. Die stark gestiegenen Preise sind für Studenten ein echtes Problem.', vi: 'Ngày nào đi siêu thị mình cũng thấy. Giá tăng mạnh là vấn đề thật sự với sinh viên.' },
          { speaker: 'A', de: 'Woran liegt das eigentlich?', vi: 'Thế nguyên nhân là gì nhỉ?' },
          { speaker: 'B', de: 'Teilweise an den Lieferketten. Viele Produkte werden in Asien hergestellt und kommen später an.', vi: 'Một phần do chuỗi cung ứng. Nhiều sản phẩm được sản xuất ở châu Á và về muộn.' },
          { speaker: 'A', de: 'Und die hohe Nachfrage treibt die Preise zusätzlich in die Höhe.', vi: 'Và nhu cầu cao còn đẩy giá lên thêm.' },
          { speaker: 'B', de: 'Genau, Angebot und Nachfrage. Gleichzeitig sinkt die Kaufkraft, weil die Löhne kaum steigen.', vi: 'Đúng, cung và cầu. Đồng thời sức mua giảm vì lương hầu như không tăng.' },
          { speaker: 'A', de: 'Meinst du, wir rutschen in eine Rezession?', vi: 'Bạn nghĩ chúng ta có rơi vào suy thoái không?' },
          { speaker: 'B', de: 'Die Experten sind unsicher. Die Konjunktur stagniert, aber der Export ist stabil.', vi: 'Các chuyên gia không chắc. Kinh tế đang trì trệ, nhưng xuất khẩu ổn định.' },
          { speaker: 'A', de: 'Hoffentlich bleibt es so. Ich muss jedenfalls mehr sparen.', vi: 'Mong là cứ như vậy. Dù sao mình cũng phải tiết kiệm hơn.' },
        ],
        gloss: { merke: 'nhận thấy (merken)', teilweise: 'một phần', zusätzlich: 'thêm vào đó', Löhne: 'tiền lương (Lohn)', rutschen: 'trượt, rơi vào', jedenfalls: 'dù sao' },
        questions: [
          mc('Tin gì A vừa đọc?', ['lạm phát lại tăng', 'lương tăng', 'giá giảm'], 'lạm phát lại tăng'),
          tf('Laut B werden viele Produkte in Asien hergestellt.', true),
          mc('Vì sao sức mua giảm?', ['lương hầu như không tăng', 'thuế giảm', 'xuất khẩu tăng'], 'lương hầu như không tăng'),
          tf('Die Experten sind sicher, dass eine Rezession kommt.', false, { explain: 'Die Experten sind unsicher.' }),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Viết một đoạn tin ngắn (5–7 câu) về giá cả ở thành phố của bạn: cái gì tăng, vì sao, ảnh hưởng tới ai; dùng ít nhất ba phân từ trước danh từ (die steigenden Mieten, die importierten Waren…).',
    },
    {
      title_vi: 'Doanh nghiệp',
      goal_vi: 'Nói về lãi lỗ, đầu tư và khởi nghiệp; dùng câu quan hệ với wer, was và wo.',
      items: [
        'Umsatz', 'Gewinn', 'Verlust', 'Aktie', 'Investition', 'Unternehmer', 'Startup', 'investieren', 'produzieren',
        'erzielen', 'fusionieren', 'rentabel', 'konkurrenzfähig', 'profitabel', 'insolvent', 'zahlungsfähig',
        'in die roten Zahlen geraten', 'schwarze Zahlen schreiben', 'Gewinn machen', 'Câu quan hệ với wer',
        'Câu quan hệ với was', 'Bilanz', 'Aktionär', 'Börse', 'Filiale', 'auslagern', 'sanieren', 'expandieren', 'zurückgreifen',
        'marktführend', 'wettbewerbsfähig', 'bankrott', 'lukrativ', 'unter dem Strich', 'pleitegehen', 'Rendite',
        'auf Hochtouren laufen', 'in den Ruin treiben',
      ],
      grammar: {
        point: 'relativ-wer-was',
        sections: [
          {
            text_vi:
              '**wer** = "người nào mà / ai mà", dùng khi **không có danh từ** đứng trước. Câu wer đứng **đầu**, động từ ở **cuối**; câu chính có thể bắt đầu bằng **der** (cùng cách thì bỏ được): **Wer** viel **investiert**, (**der**) trägt ein hohes Risiko. Khác cách thì phải giữ: **Wer** Hilfe braucht, **dem** helfen wir.',
            examples: [
              ['Wer ein Startup gründet, braucht viel Mut.', 'Ai lập công ty khởi nghiệp thì cần nhiều can đảm.'],
              ['Wer zu spät kommt, den bestraft das Leben.', 'Ai đến muộn thì cuộc đời sẽ trừng phạt.'],
            ],
            exercises: [
              choose('___ an der Börse spekuliert, kann viel Geld verlieren.', ['Wer', 'Der', 'Was'], 'Wer', { vi: 'Ai đầu cơ trên sàn chứng khoán có thể mất nhiều tiền.' }),
              fill('Wer keine Schulden {hat}, schläft ruhiger.', 'Ai không có nợ thì ngủ yên hơn.'),
              choose('Wer Fragen hat, ___ helfen wir gern.', ['dem', 'der', 'den'], 'dem', { vi: 'Ai có câu hỏi, chúng tôi sẵn lòng giúp người đó.' }),
            ],
          },
          {
            text_vi:
              '**was** là đại từ quan hệ sau **alles, nichts, etwas, vieles, das**, sau **so sánh nhất** (das Beste, **was** …) và sau **cả một câu**: Die Firma machte Gewinn, **was** alle überraschte. **wo** dùng cho **nơi chốn** thay cho "in dem/in der": die Stadt, **wo** die Firma ihren Sitz hat.',
            table: 'Đứng trước | Đại từ | Ví dụ\nalles, nichts, etwas | was | Alles, was wir verdienen, …\ndas Beste, das Einzige | was | Das Beste, was du tun kannst, …\ncả câu trước | was | …, was niemand erwartet hatte.\nnơi chốn | wo | die Stadt, wo ich arbeite',
            examples: [
              ['Das ist alles, was ich weiß.', 'Đó là tất cả những gì tôi biết.'],
              ['Die Firma ging pleite, was niemand erwartet hatte.', 'Công ty phá sản, điều mà không ai ngờ tới.'],
            ],
            exercises: [
              choose('Es gibt nichts, ___ er nicht verkaufen kann.', ['was', 'das', 'wer'], 'was', { vi: 'Không có gì anh ấy không bán được.' }),
              fill('Das Beste, {was} du tun kannst, ist sparen.', 'Điều tốt nhất bạn có thể làm là tiết kiệm.'),
              choose('Die Stadt, ___ die Firma ihren Sitz hat, ist klein.', ['wo', 'was', 'wer'], 'wo', { vi: 'Thành phố nơi công ty đặt trụ sở thì nhỏ.' }),
            ],
          },
        ],
        mixed: [
          choose('Der Umsatz stieg um 20 Prozent, ___ die Aktionäre freute.', ['was', 'das', 'der'], 'was', { vi: 'Doanh thu tăng 20%, điều làm các cổ đông vui mừng.' }),
          fill('Wer Gewinn machen {will}, muss investieren.', 'Ai muốn có lãi thì phải đầu tư.'),
          choose('Alles, ___ die Firma produziert, wird exportiert.', ['was', 'das', 'die'], 'was', { vi: 'Mọi thứ công ty sản xuất đều được xuất khẩu.' }),
          transform('Nối bằng "was"', 'Das Startup schreibt schwarze Zahlen. Das hat niemand erwartet.', [
            'Das Startup schreibt schwarze Zahlen, was niemand erwartet hat.',
            'Das Startup schreibt schwarze Zahlen, was niemand erwartet hatte.',
          ]),
          order('Wer / nicht / wettbewerbsfähig / ist, / geht / pleite.', 'Ai không đủ sức cạnh tranh thì phá sản.'),
        ],
      },
      dialogue: {
        title_de: 'Ein Startup gründen?',
        lines: [
          { speaker: 'A', de: 'Ich überlege, mit zwei Freunden ein Startup zu gründen. Was hältst du davon?', vi: 'Mình đang tính lập công ty khởi nghiệp với hai người bạn. Bạn nghĩ sao?' },
          { speaker: 'B', de: 'Spannend! Aber wer ein Unternehmen gründet, braucht einen guten Plan.', vi: 'Hấp dẫn đấy! Nhưng ai lập doanh nghiệp thì cần kế hoạch tốt.' },
          { speaker: 'A', de: 'Wir wollen eine App für Nachhilfe entwickeln. Alles, was wir brauchen, ist eine Investition von 50.000 Euro.', vi: 'Bọn mình muốn phát triển một ứng dụng học thêm. Tất cả những gì cần là khoản đầu tư 50.000 euro.' },
          { speaker: 'B', de: 'Und wann wollt ihr Gewinn machen?', vi: 'Thế khi nào các bạn định có lãi?' },
          { speaker: 'A', de: 'Im ersten Jahr schreiben wir sicher rote Zahlen. Ab dem dritten Jahr wollen wir profitabel sein.', vi: 'Năm đầu chắc chắn lỗ. Từ năm thứ ba bọn mình muốn có lợi nhuận.' },
          { speaker: 'B', de: 'Das ist realistisch. Gibt es schon Konkurrenz?', vi: 'Thế là thực tế. Đã có đối thủ cạnh tranh chưa?' },
          { speaker: 'A', de: 'Ja, ein marktführendes Unternehmen. Aber unsere App ist günstiger, was für Schüler wichtig ist.', vi: 'Có, một công ty dẫn đầu thị trường. Nhưng ứng dụng của bọn mình rẻ hơn, điều quan trọng với học sinh.' },
          { speaker: 'B', de: 'Dann viel Glück! Unter dem Strich ist das Risiko hoch, aber es kann sehr lukrativ sein.', vi: 'Vậy chúc may mắn! Xét cho cùng rủi ro cao, nhưng có thể sinh lời lớn.' },
          { speaker: 'A', de: 'Danke. Wer nichts riskiert, gewinnt auch nichts.', vi: 'Cảm ơn. Ai không dám liều thì cũng không được gì.' },
        ],
        gloss: { überlege: 'đang cân nhắc (überlegen)', gründen: 'thành lập', Nachhilfe: 'học thêm, phụ đạo', entwickeln: 'phát triển', realistisch: 'thực tế', Risiko: 'rủi ro', riskiert: 'liều, mạo hiểm (riskieren)' },
        questions: [
          mc('A muốn phát triển sản phẩm gì?', ['ứng dụng học thêm', 'quán cà phê', 'cửa hàng quần áo'], 'ứng dụng học thêm'),
          tf('A erwartet schon im ersten Jahr Gewinn.', false, { explain: 'Im ersten Jahr schreiben wir sicher rote Zahlen.' }),
          mc('Ưu điểm của ứng dụng so với đối thủ là gì?', ['rẻ hơn', 'đẹp hơn', 'có nhiều môn hơn'], 'rẻ hơn'),
          tf('B findet das Risiko hoch.', true),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Viết về một ý tưởng kinh doanh (6–8 câu): sản phẩm, khách hàng, chi phí, khi nào có lãi; dùng ít nhất hai câu với wer, một câu với alles/nichts, was và một câu với was nối cả câu trước.',
    },
    {
      title_vi: 'Tiêu dùng và quảng cáo',
      goal_vi: 'Nói về thói quen mua sắm, quảng cáo và thương hiệu; trả lời "tùy" bằng je nachdem.',
      items: [
        'Wettbewerb', 'Konkurrenz', 'Zielgruppe', 'Marke', 'Produkt', 'Dienstleistung', 'Konsumverhalten', 'Verbraucherschutz',
        'konkurrieren', 'werben', 'vermarkten', 'global', 'auf den Markt bringen', 'je nachdem', 'Werbekampagne', 'Marktanteil',
        'Kundenservice', 'Zufriedenheit', 'Preis-Leistungs-Verhältnis', 'Konsumgesellschaft', 'fairer Handel',
        'Wohlstandsgesellschaft', 'handeln mit', 'kalkulieren', 'aufsteigen', 'anlocken', 'kostengünstig', 'preisbewusst',
        'fair', 'auf Kredit kaufen', 'Kundenbindung',
      ],
      grammar: {
        point: 'je-nachdem',
        sections: [
          {
            text_vi:
              '**je nachdem** = "tùy theo", nói rằng kết quả **phụ thuộc** vào điều gì. Sau nó là **ob / wie / wann / wo / was / wie viel** và một **câu phụ** (động từ cuối). Thường đứng **đầu câu**, rồi vế chính bắt đầu bằng **động từ**: **Je nachdem, wie** das Wetter **ist**, **fahren** wir ans Meer.',
            examples: [
              ['Je nachdem, wie viel es kostet, kaufe ich das teure oder das billige Modell.', 'Tùy giá bao nhiêu, tôi sẽ mua mẫu đắt hoặc mẫu rẻ.'],
              ['Wir kommen, je nachdem, ob wir Zeit haben.', 'Chúng tôi sẽ đến, tùy xem có thời gian không.'],
            ],
            exercises: [
              choose('Je nachdem, wie der Kundenservice ___, kaufe ich wieder dort.', ['ist', 'sein', 'ist er'], 'ist', { vi: 'Tùy dịch vụ khách hàng thế nào, tôi sẽ mua lại ở đó.' }),
              choose('Je nachdem, ___ es regnet, gehen wir ins Kino.', ['ob', 'dass', 'wenn'], 'ob', { vi: 'Tùy xem trời có mưa không, chúng ta sẽ đi xem phim.' }),
              order('Je nachdem, / wann / du / kommst, / essen / wir / zusammen.', 'Tùy khi nào bạn đến, chúng ta sẽ ăn cùng nhau.'),
            ],
          },
          {
            text_vi:
              'Trả lời rất ngắn: "Kaufst du Bio-Produkte?" – "**Je nachdem.**" (Còn tùy). Dạng rút gọn: **je nach** + **Dativ** + danh từ: **je nach Preis**, **je nach Saison**, **je nach Zielgruppe**. Đừng nhầm với **je … desto** (càng … càng) đã học ở B1.',
            table: 'Cách nói | Ví dụ\nje nachdem + câu phụ | Je nachdem, wie teuer es ist, …\nJe nachdem. | (trả lời ngắn: còn tùy)\nje nach + Dativ | je nach Preis, je nach Wetter\nje … desto (khác!) | Je billiger, desto besser.',
            examples: [['Je nach Zielgruppe wirbt die Firma anders.', 'Tùy nhóm khách hàng mục tiêu, công ty quảng cáo khác nhau.']],
            exercises: [
              fill('Je {nach} Saison ändern sich die Preise.', 'Tùy mùa mà giá thay đổi.'),
              choose('Kaufst du lieber online? – ___', ['Je nachdem.', 'Je desto.', 'Nachdem.'], 'Je nachdem.', { vi: 'Bạn thích mua online hơn à? – Còn tùy.' }),
              translate('Tùy giá, tôi sẽ mua trả chậm.', ['Je nach Preis kaufe ich auf Kredit.', 'Je nachdem, wie viel es kostet, kaufe ich auf Kredit.']),
            ],
          },
        ],
        mixed: [
          fill('Je nachdem, was die Kunden {wollen}, ändern wir das Produkt.', 'Tùy khách hàng muốn gì, chúng tôi thay đổi sản phẩm.'),
          choose('Je ___ Region sind die Preise unterschiedlich.', ['nach', 'nachdem', 'desto'], 'nach', { vi: 'Tùy vùng mà giá khác nhau.' }),
          choose('Je nachdem, wie gut das Preis-Leistungs-Verhältnis ist, ___ ich die Marke.', ['wähle', 'ich wähle', 'wählen'], 'wähle', { vi: 'Tùy tương quan giá – chất lượng tốt đến đâu, tôi chọn thương hiệu.' }),
          transform('Viết lại với "je nach"', 'Je nachdem, wie das Wetter ist, gehen wir spazieren.', ['Je nach Wetter gehen wir spazieren.']),
          order('Die Werbekampagne / ist / je nach Zielgruppe / verschieden.', 'Chiến dịch quảng cáo khác nhau tùy nhóm khách hàng mục tiêu.'),
        ],
      },
      dialogue: {
        title_de: 'Markenprodukt oder No-Name?',
        lines: [
          { speaker: 'A', de: 'Kaufst du eigentlich Markenprodukte oder lieber die billigen?', vi: 'Mà bạn mua hàng có thương hiệu hay thích hàng rẻ?' },
          { speaker: 'B', de: 'Je nachdem. Bei Kaffee achte ich auf fairen Handel, auch wenn er teurer ist.', vi: 'Còn tùy. Với cà phê mình chú ý thương mại công bằng, dù có đắt hơn.' },
          { speaker: 'A', de: 'Und bei Kleidung?', vi: 'Còn quần áo thì sao?' },
          { speaker: 'B', de: 'Da bin ich preisbewusst. Je nachdem, wie gut die Qualität ist, kaufe ich auch No-Name-Produkte.', vi: 'Thì mình có ý thức về giá. Tùy chất lượng tốt đến đâu, mình cũng mua hàng không thương hiệu.' },
          { speaker: 'A', de: 'Ich lasse mich leider oft von Werbung anlocken. Die Kampagnen sind so gut gemacht.', vi: 'Mình thì tiếc là hay bị quảng cáo dụ. Các chiến dịch làm hay quá.' },
          { speaker: 'B', de: 'Die Firmen kennen ihre Zielgruppe genau. Sie werben je nach Alter ganz anders.', vi: 'Các công ty hiểu rõ khách hàng mục tiêu. Họ quảng cáo rất khác nhau tùy độ tuổi.' },
          { speaker: 'A', de: 'Stimmt. Und am Ende zählt doch das Preis-Leistungs-Verhältnis.', vi: 'Đúng vậy. Và cuối cùng cái quan trọng vẫn là tương quan giá – chất lượng.' },
          { speaker: 'B', de: 'Und der Kundenservice! Eine Marke, die guten Service bietet, behält ihre Kunden.', vi: 'Và dịch vụ khách hàng! Thương hiệu có dịch vụ tốt sẽ giữ được khách.' },
        ],
        gloss: { 'No-Name-Produkte': 'hàng không thương hiệu', 'No-Name': 'không thương hiệu', Markenprodukte: 'hàng có thương hiệu', Qualität: 'chất lượng', zählt: 'quan trọng, được tính (zählen)', behält: 'giữ (behalten)', bietet: 'cung cấp (bieten)', 'achte … auf': 'chú ý tới (achten auf)' },
        questions: [
          mc('B chú ý điều gì khi mua cà phê?', ['thương mại công bằng', 'giá rẻ nhất', 'bao bì đẹp'], 'thương mại công bằng'),
          tf('Bei Kleidung kauft B nur Markenprodukte.', false, { explain: 'Da bin ich preisbewusst … kaufe ich auch No-Name-Produkte.' }),
          mc('Theo B, các công ty quảng cáo khác nhau tùy theo gì?', ['độ tuổi', 'thời tiết', 'mùa'], 'độ tuổi'),
          tf('A lässt sich oft von Werbung beeinflussen.', true),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Viết về thói quen mua sắm của bạn (6–8 câu): bạn mua gì ở đâu, khi nào chọn hàng hiệu, quảng cáo ảnh hưởng thế nào; dùng ít nhất hai câu je nachdem và một cụm je nach.',
    },
  ],
  test: {
    grammar: {
      'partizip-attribut': [
        choose('Die ___ Preise ärgern die Kunden.', ['steigenden', 'steigende', 'gestiegen'], 'steigenden'),
        fill('Das {importierte} Obst kommt aus Spanien. (importieren)', 'Trái cây nhập khẩu đến từ Tây Ban Nha.'),
        choose('Die stark ___ Mieten belasten viele Familien.', ['gestiegenen', 'steigend', 'gestiegene'], 'gestiegenen'),
        fill('Die {sinkende} Nachfrage ist ein Problem. (sinken, đang)', 'Nhu cầu đang giảm là một vấn đề.'),
        order('Die / in China / produzierten / Waren / sind / billig.', 'Hàng sản xuất ở Trung Quốc thì rẻ.'),
        choose('Wir sprechen über die seit Jahren ___ Kosten.', ['steigenden', 'gestiegen', 'steigende'], 'steigenden'),
      ],
      'relativ-wer-was': [
        choose('___ viel arbeitet, verdient viel.', ['Wer', 'Der', 'Was'], 'Wer'),
        fill('Alles, {was} du sagst, ist richtig.', 'Mọi điều bạn nói đều đúng.'),
        choose('Das ist das Beste, ___ ich je gegessen habe.', ['was', 'das', 'wo'], 'was'),
        choose('Er hat die Prüfung bestanden, ___ alle überrascht hat.', ['was', 'das', 'der'], 'was'),
        fill('Die Stadt, {wo} ich wohne, ist schön.', 'Thành phố nơi tôi sống rất đẹp.'),
        choose('Wer mir hilft, ___ danke ich.', ['dem', 'der', 'den'], 'dem'),
      ],
      'je-nachdem': [
        choose('Je nachdem, wie das Wetter ___, fahren wir weg.', ['ist', 'sein', 'ist es'], 'ist'),
        fill('Je {nach} Preis kaufe ich das eine oder das andere.', 'Tùy giá mà tôi mua cái này hay cái kia.'),
        choose('Je nachdem, ___ du Zeit hast, treffen wir uns.', ['ob', 'dass', 'je'], 'ob'),
        choose('Gehst du mit? – ___', ['Je nachdem.', 'Je desto.', 'Nachdem.'], 'Je nachdem.'),
        order('Je nachdem, / was / es / kostet, / bestellen / wir / es.', 'Tùy giá bao nhiêu, chúng tôi sẽ đặt.'),
        fill('Je nachdem, wann der Zug {kommt}, sind wir um acht da.', 'Tùy tàu đến lúc nào, chúng tôi sẽ có mặt lúc tám giờ.'),
      ],
    },
    reading: {
      title_de: 'Second Hand liegt im Trend',
      text_de:
        'Immer mehr Menschen kaufen gebrauchte Kleidung. Der Second-Hand-Markt wächst seit Jahren schneller als der Handel mit neuer Mode. Wer gebraucht kauft, spart Geld und schont die Umwelt. Besonders junge Leute, die preisbewusst und umweltbewusst sind, nutzen Apps und Online-Plattformen. Alles, was nicht mehr gebraucht wird, kann dort verkauft werden. Je nachdem, wie gut der Zustand ist, bekommt man noch einen guten Preis. Große Marken reagieren auf diesen Trend: Einige bieten in ihren Filialen schon eigene Second-Hand-Bereiche an. Kritiker sagen allerdings, dass die Konsumgesellschaft dadurch nicht verschwindet. Man kauft nur anders.',
      gloss: {
        gebrauchte: 'đã qua sử dụng',
        wächst: 'tăng trưởng (wachsen)',
        schont: 'bảo vệ, giữ gìn (schonen)',
        umweltbewusst: 'có ý thức bảo vệ môi trường',
        Plattformen: 'nền tảng',
        Zustand: 'tình trạng',
        Bereiche: 'khu vực',
        verschwindet: 'biến mất (verschwinden)',
      },
      questions: [
        tf('Der Second-Hand-Markt wächst langsamer als der Handel mit neuer Mode.', false, { explain: 'Er wächst schneller.' }),
        mc('Người mua đồ cũ được lợi gì?', ['tiết kiệm tiền và bảo vệ môi trường', 'hàng luôn mới', 'được bảo hành dài'], 'tiết kiệm tiền và bảo vệ môi trường'),
        mc('Giá bán đồ cũ phụ thuộc vào gì?', ['tình trạng của món đồ', 'màu sắc', 'nơi mua'], 'tình trạng của món đồ'),
        tf('Einige große Marken haben eigene Second-Hand-Bereiche.', true),
      ],
    },
  },
});
