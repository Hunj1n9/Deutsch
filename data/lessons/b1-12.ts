// B1 · 12 Khoa học và kỹ thuật — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b1-12',
  points: [
    {
      key: 'verb-praep',
      rule_key: 'verb-praeposition-erweitert',
      category: 'preposition',
      title_vi: 'Động từ có giới từ (mở rộng) và wo(r)-',
      explanation_vi: 'abhängen von + D, bestehen aus + D, sich beschäftigen mit + D, forschen an + D, sich interessieren für + A. Hỏi về vật: wovon, woraus, womit, woran; về người: mit wem, für wen.',
    },
    {
      key: 'seit-bis',
      rule_key: 'seit-bis-nebensatz',
      category: 'verb_position',
      title_vi: 'seit / bis (liên từ thời gian)',
      explanation_vi: 'seit = từ khi (việc còn kéo dài, câu chính thường Präsens); bis = cho đến khi. Cả hai mở câu phụ, động từ cuối. Giới từ: seit + Dativ, bis Montag / bis zum Abend.',
    },
    {
      key: 'sodass',
      rule_key: 'sodass-folge',
      category: 'verb_position',
      title_vi: 'sodass / so … dass: kết quả',
      explanation_vi: 'sodass nêu kết quả, động từ cuối, đứng sau câu chính. so + tính từ … dass nhấn mạnh mức độ. Khác weil (nguyên nhân) và deshalb (động từ ngay sau).',
    },
  ],
  lessons: [
    {
      title_vi: 'Phát minh và nghiên cứu',
      goal_vi: 'Nói về phát minh, nghiên cứu khoa học; dùng động từ có giới từ và câu hỏi wo(r)-.',
      items: [
        'Erfindung', 'Erfinder', 'Entwicklung', 'Fortschritt', 'Forschung', 'Wissenschaftler', 'Experiment', 'Ergebnis', 'Labor',
        'Studie', 'Entdeckung', 'Zufall', 'Erfolgsgeschichte', 'Raumfahrt', 'Weltall', 'erfinden', 'entwickeln', 'forschen',
        'beweisen', 'abhängen', 'abhängig', 'wissenschaftlich', 'innovativ', 'Động từ + giới từ (mở rộng)',
        'Hỏi bằng wo(r)- với giới từ',
      ],
      grammar: {
        point: 'verb-praep',
        sections: [
          {
            text_vi:
              'Nhiều động từ đi với **giới từ cố định**, và giới từ quyết định **cách**: **abhängen von** + D (phụ thuộc vào), **bestehen aus** + D (gồm có), **sich beschäftigen mit** + D (tìm hiểu, bận với), **forschen an** + D, **sich interessieren für** + A. Hãy học **động từ + giới từ + cách** cùng nhau.',
            table: 'Động từ | Giới từ + cách | Ví dụ\nabhängen | von + D | Das hängt vom Wetter ab.\nbestehen | aus + D | Der Roboter besteht aus vielen Teilen.\nsich beschäftigen | mit + D | Sie beschäftigt sich mit Robotern.\nforschen | an + D | Er forscht an einem Impfstoff.\nsich interessieren | für + A | Ich interessiere mich für Technik.',
            examples: [
              ['Das Ergebnis hängt von vielen Faktoren ab.', 'Kết quả phụ thuộc vào nhiều yếu tố.'],
              ['Sie beschäftigt sich seit Jahren mit der Raumfahrt.', 'Cô ấy nghiên cứu về ngành vũ trụ đã nhiều năm.'],
            ],
            exercises: [
              fill('Der Erfolg hängt {von} der Forschung ab.', 'Thành công phụ thuộc vào nghiên cứu.'),
              choose('Das Gerät besteht ___ drei Teilen.', ['aus', 'von', 'mit'], 'aus', { vi: 'Thiết bị gồm ba bộ phận.' }),
              choose('Er interessiert sich sehr ___ das Weltall.', ['für', 'an', 'mit'], 'für', { vi: 'Anh ấy rất quan tâm đến vũ trụ.' }),
            ],
          },
          {
            text_vi:
              'Hỏi về **vật**: **wo(r)** + giới từ: **Wovon** hängt das ab? **Woraus** besteht das? **Womit** beschäftigst du dich? Thêm **-r-** khi giới từ bắt đầu bằng nguyên âm: wo**r**an, wo**r**aus. Hỏi về **người**: giới từ + **wen/wem**: **Mit wem** arbeitest du? Trả lời bằng **da(r)-**: **Davon** hängt alles ab.',
            examples: [['Woran forscht ihr gerade? – An einer neuen Batterie.', 'Các bạn đang nghiên cứu gì? – Một loại pin mới.']],
            exercises: [
              choose('___ besteht der Roboter? – Aus Metall und Plastik.', ['Woraus', 'Wovon', 'Womit'], 'Woraus', { vi: 'Rô-bốt làm bằng gì? – Kim loại và nhựa.' }),
              choose('___ forscht das Team? – An einem neuen Medikament.', ['Woran', 'Wovon', 'Wofür'], 'Woran', { vi: 'Nhóm nghiên cứu gì? – Một loại thuốc mới.' }),
              fill('{Mit} wem arbeitest du im Labor?', 'Bạn làm việc với ai trong phòng thí nghiệm?'),
            ],
          },
          {
            text_vi:
              '**Wissenschaftler** **forschen** trong **Labor**, làm **Experiment**, công bố **Ergebnis** trong một **Studie**. **Erfinder** **erfindet** (phát minh); **Entdeckung** đôi khi nhờ **Zufall** (tình cờ). **beweisen** = chứng minh; **Fortschritt** = sự tiến bộ.',
            examples: [['Viele wichtige Entdeckungen wurden durch Zufall gemacht.', 'Nhiều phát hiện quan trọng có được nhờ tình cờ.']],
            exercises: [
              fill('Penicillin wurde durch {Zufall} entdeckt.', 'Penicillin được phát hiện nhờ tình cờ.'),
              translate('Ai đã phát minh ra điện thoại?', ['Wer hat das Telefon erfunden?', 'Wer erfand das Telefon?']),
            ],
          },
        ],
        mixed: [
          choose('___ hängt der Preis ab? – Von der Qualität.', ['Wovon', 'Woraus', 'Womit'], 'Wovon', { vi: 'Giá phụ thuộc vào gì? – Vào chất lượng.' }),
          fill('Die Studie beschäftigt sich {mit} dem Klimawandel.', 'Nghiên cứu tìm hiểu về biến đổi khí hậu.'),
          choose('Wir sind stark ___ Technik abhängig.', ['von', 'an', 'aus'], 'von', { vi: 'Chúng ta phụ thuộc nhiều vào công nghệ.' }),
          choose('Sie arbeitet seit zwei Jahren ___ diesem Projekt.', ['an', 'mit', 'für'], 'an', { vi: 'Cô ấy làm dự án này đã hai năm.' }),
          order('Woran / arbeiten / die Wissenschaftler / im Moment?', 'Hiện các nhà khoa học đang làm gì?'),
        ],
      },
      dialogue: {
        title_de: 'Im Labor',
        lines: [
          { speaker: 'A', de: 'Woran arbeitest du gerade?', vi: 'Bạn đang làm gì vậy?' },
          { speaker: 'B', de: 'Ich forsche an einer neuen Batterie für Elektroautos.', vi: 'Mình đang nghiên cứu một loại pin mới cho ô tô điện.' },
          { speaker: 'A', de: 'Spannend! Woraus besteht die Batterie?', vi: 'Thú vị! Pin làm từ gì?' },
          { speaker: 'B', de: 'Hauptsächlich aus Salz. Sie ist billiger und sicherer.', vi: 'Chủ yếu từ muối. Nó rẻ hơn và an toàn hơn.' },
          { speaker: 'A', de: 'Funktioniert sie schon?', vi: 'Nó chạy được chưa?' },
          { speaker: 'B', de: 'Die ersten Experimente sind gut gelaufen. Aber das Ergebnis hängt noch von vielen Tests ab.', vi: 'Các thí nghiệm đầu tiên ổn. Nhưng kết quả còn phụ thuộc vào nhiều thử nghiệm.' },
          { speaker: 'A', de: 'Wie bist du auf die Idee gekommen?', vi: 'Sao bạn nảy ra ý tưởng đó?' },
          { speaker: 'B', de: 'Durch Zufall! Ich habe mich eigentlich mit etwas ganz anderem beschäftigt.', vi: 'Tình cờ thôi! Thật ra mình đang tìm hiểu một thứ hoàn toàn khác.' },
          { speaker: 'A', de: 'Viele große Entdeckungen sind so passiert. Ich drücke dir die Daumen!', vi: 'Nhiều phát hiện lớn đã xảy ra như vậy. Chúc bạn may mắn!' },
        ],
        gloss: { Batterie: 'pin', hauptsächlich: 'chủ yếu', Salz: 'muối', sicherer: 'an toàn hơn', Tests: 'thử nghiệm', gelaufen: 'diễn ra (laufen)', eigentlich: 'thật ra', anderem: 'cái khác', 'drücke … die Daumen': 'chúc may mắn', passiert: 'xảy ra' },
        questions: [
          mc('B đang nghiên cứu gì?', ['pin mới cho ô tô điện', 'một loại thuốc', 'rô-bốt'], 'pin mới cho ô tô điện'),
          tf('Die Batterie besteht hauptsächlich aus Salz.', true),
          tf('Das Ergebnis ist schon sicher.', false, { explain: 'Das Ergebnis hängt noch von vielen Tests ab.' }),
          mc('B nảy ra ý tưởng thế nào?', ['tình cờ', 'qua sách', 'từ giáo sư'], 'tình cờ'),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Giới thiệu một phát minh bạn thấy quan trọng (5–6 câu), dùng ít nhất ba động từ có giới từ (abhängen von, bestehen aus, sich beschäftigen mit…).',
    },
    {
      title_vi: 'Thiết bị trong nhà',
      goal_vi: 'Nói về cách dùng thiết bị, sự cố; dùng seit và bis.',
      items: [
        'Technik', 'Technologie', 'Gerät', 'Maschine', 'Roboter', 'Bedienungsanleitung', 'Funktion', 'Störung', 'Smartphone',
        'Speicher', 'herstellen', 'funktionieren', 'installieren', 'ersetzen', 'steuern', 'verbinden', 'technisch', 'automatisch',
        'elektrisch', 'kabellos', 'tragbar', 'kompliziert', 'veraltet', 'benutzerfreundlich', 'in Betrieb nehmen',
        'auf dem Bildschirm', 'seit / bis: thời gian',
      ],
      grammar: {
        point: 'seit-bis',
        sections: [
          {
            text_vi:
              '**seit** (từ khi) + câu phụ: việc bắt đầu trong quá khứ và **vẫn còn** → câu chính thường ở **Präsens**: **Seit** ich ein Smartphone **habe**, lese ich weniger. **bis** (cho đến khi): **Bis** das Gerät repariert **ist**, benutze ich das alte. Cả hai: động từ chia **cuối**.',
            examples: [
              ['Seit ich das neue Handy habe, mache ich mehr Fotos.', 'Từ khi có điện thoại mới, tôi chụp ảnh nhiều hơn.'],
              ['Warte bitte, bis die Software installiert ist.', 'Hãy đợi cho đến khi phần mềm được cài xong.'],
            ],
            exercises: [
              fill('{Seit} wir einen Roboter haben, putze ich weniger.', 'Từ khi có rô-bốt, tôi lau dọn ít hơn.'),
              choose('Warte, ___ das Update fertig ist.', ['bis', 'seit', 'bevor'], 'bis', { vi: 'Đợi đến khi bản cập nhật xong.' }),
              order('Seit / ich / im Homeoffice / arbeite, / spare / ich / viel Zeit.', 'Từ khi làm việc ở nhà, tôi tiết kiệm nhiều thời gian.'),
            ],
          },
          {
            text_vi:
              '**seit**, **bis** cũng là **giới từ**: **seit** + Dativ (seit einem Jahr), **bis** + thời điểm (bis Montag, bis zum Abend). Liên từ seit có thể thay bằng **seitdem**. **bis** sau câu phủ định nghĩa "trước khi": Du darfst nicht spielen, **bis** du fertig bist.',
            examples: [['Ich habe das Gerät seit einem Jahr, bis jetzt funktioniert es gut.', 'Tôi có thiết bị này một năm rồi, đến giờ vẫn chạy tốt.']],
            exercises: [
              choose('Ich habe den Laptop ___ einem Jahr.', ['seit', 'bis', 'vor'], 'seit', { vi: 'Tôi có laptop này được một năm.' }),
              transform('Nối bằng bis', 'Der Akku ist voll. Ich warte so lange.', ['Ich warte, bis der Akku voll ist.']),
              choose('Seit er die Bedienungsanleitung gelesen hat, ___ alles.', ['versteht er', 'er versteht'], 'versteht er', { vi: 'Từ khi đọc sách hướng dẫn, anh ấy hiểu hết.' }),
            ],
          },
          {
            text_vi:
              'Đọc **Bedienungsanleitung** để biết các **Funktionen** của **Gerät**. **installieren** (cài), **funktionieren** (hoạt động). Gặp **Störung** (sự cố)? Thiết bị **veraltet** (lỗi thời) thì **ersetzen** (thay). **kabellos** = không dây; **tragbar** = xách tay; **benutzerfreundlich** = dễ dùng.',
            examples: [['Das alte Gerät ist veraltet, wir müssen es ersetzen.', 'Thiết bị cũ đã lỗi thời, chúng ta phải thay.']],
            exercises: [
              fill('Mein Drucker {funktioniert} nicht mehr.', 'Máy in của tôi không chạy nữa.'),
              translate('Thiết bị này quá phức tạp.', ['Das Gerät ist zu kompliziert.', 'Dieses Gerät ist zu kompliziert.']),
            ],
          },
        ],
        mixed: [
          transform('Nối bằng seit', 'Ich habe einen kabellosen Kopfhörer. Seitdem höre ich mehr Musik.', [
            'Seit ich einen kabellosen Kopfhörer habe, höre ich mehr Musik.',
          ]),
          choose('Du darfst nicht gehen, ___ das Programm installiert ist.', ['bis', 'seit'], 'bis', { vi: 'Bạn không được đi cho đến khi chương trình cài xong.' }),
          fill('Wir warten, bis der Techniker {kommt}.', 'Chúng tôi đợi đến khi kỹ thuật viên đến.'),
          choose('___ Montag funktioniert das Internet nicht.', ['Seit', 'Bis'], 'Seit', { vi: 'Từ thứ Hai mạng không chạy.' }),
          order('Bis / das Gerät / repariert / ist, / benutze / ich / das alte.', 'Cho đến khi thiết bị được sửa, tôi dùng cái cũ.'),
        ],
      },
      dialogue: {
        title_de: 'Der neue Saugroboter',
        lines: [
          { speaker: 'A', de: 'Seit wir den Saugroboter haben, ist die Wohnung immer sauber!', vi: 'Từ khi có rô-bốt hút bụi, nhà lúc nào cũng sạch!' },
          { speaker: 'B', de: 'Wirklich? Wie funktioniert er?', vi: 'Thật à? Nó hoạt động thế nào?' },
          { speaker: 'A', de: 'Ganz automatisch. Ich steuere ihn mit dem Smartphone, auch wenn ich nicht zu Hause bin.', vi: 'Hoàn toàn tự động. Mình điều khiển bằng điện thoại, kể cả khi không ở nhà.' },
          { speaker: 'B', de: 'War die Installation kompliziert?', vi: 'Cài đặt có phức tạp không?' },
          { speaker: 'A', de: 'Ein bisschen. Ich habe die Bedienungsanleitung gelesen, bis ich alles verstanden hatte.', vi: 'Một chút. Mình đọc sách hướng dẫn cho đến khi hiểu hết.' },
          { speaker: 'B', de: 'Und gibt es manchmal Störungen?', vi: 'Có khi nào bị trục trặc không?' },
          { speaker: 'A', de: 'Selten. Nur einmal ist er unter dem Sofa geblieben, bis der Akku leer war.', vi: 'Hiếm thôi. Chỉ một lần nó kẹt dưới ghế sofa cho đến khi hết pin.' },
          { speaker: 'B', de: 'Haha! Mein Staubsauger ist leider veraltet. Ich sollte ihn ersetzen.', vi: 'Haha! Máy hút bụi của mình tiếc là đã lỗi thời. Mình nên thay nó.' },
          { speaker: 'A', de: 'Warte bis zum Sonderangebot im November. Dann ist er billiger.', vi: 'Đợi đến đợt giảm giá tháng Mười một đi. Lúc đó rẻ hơn.' },
        ],
        gloss: { Saugroboter: 'rô-bốt hút bụi', sauber: 'sạch', 'auch wenn': 'kể cả khi', Installation: 'việc cài đặt', selten: 'hiếm khi', Sofa: 'ghế sofa', Akku: 'pin sạc', leer: 'hết, rỗng', Staubsauger: 'máy hút bụi' },
        questions: [
          tf('Seit sie den Saugroboter haben, ist die Wohnung sauber.', true),
          mc('A điều khiển rô-bốt bằng gì?', ['điện thoại thông minh', 'điều khiển từ xa', 'giọng nói'], 'điện thoại thông minh'),
          mc('Rô-bốt từng kẹt ở đâu?', ['dưới ghế sofa', 'trong bếp', 'ngoài ban công'], 'dưới ghế sofa'),
          tf('B hat einen neuen Staubsauger.', false, { explain: 'Mein Staubsauger ist leider veraltet.' }),
        ],
        dictation: [0, 4],
      },
      writing_prompt_vi:
        'Kể về một thiết bị đã thay đổi cuộc sống của bạn (5 câu), dùng ít nhất hai câu seit và một câu bis.',
    },
    {
      title_vi: 'Thế giới số',
      goal_vi: 'Thảo luận về số hóa, dữ liệu, AI; nêu kết quả bằng sodass và so … dass.',
      items: [
        'Software', 'Daten', 'Datenschutz', 'Künstliche Intelligenz', 'Vorteil', 'Nachteil', 'Netzwerk', 'Digitalisierung',
        'Benutzer', 'Sicherheit', 'Virus', 'Anwendung', 'aktualisieren', 'vereinfachen', 'programmieren', 'hochladen', 'einloggen',
        'ausloggen', 'vernetzen', 'nützlich', 'virtuell', 'zukunftsorientiert', 'sodass', 'auf dem neuesten Stand',
        'Vor- und Nachteile', 'mit der Zeit gehen', 'sodass: kết quả',
      ],
      grammar: {
        point: 'sodass',
        sections: [
          {
            text_vi:
              '**sodass** nêu **kết quả**: Das Programm war veraltet, **sodass** wir es aktualisieren mussten. Mở câu phụ, động từ **cuối**; câu sodass luôn đứng **sau** câu chính. Dạng tách **so** + tính từ … **dass** nhấn mạnh mức độ: Die App ist **so** einfach, **dass** jeder sie benutzen kann.',
            examples: [
              ['Der Akku war leer, sodass ich nicht anrufen konnte.', 'Pin hết nên tôi không gọi được.'],
              ['Die Software ist so kompliziert, dass niemand sie versteht.', 'Phần mềm phức tạp đến mức không ai hiểu.'],
            ],
            exercises: [
              fill('Das Internet war langsam, {sodass} ich nichts hochladen konnte.', 'Mạng chậm nên tôi không tải lên được gì.'),
              choose('Die App ist ___ nützlich, dass ich sie jeden Tag benutze.', ['so', 'sodass', 'zu'], 'so', { vi: 'Ứng dụng hữu ích đến mức ngày nào tôi cũng dùng.' }),
              order('Es gab / eine Störung, / sodass / niemand / sich / einloggen / konnte.', 'Có sự cố nên không ai đăng nhập được.'),
            ],
          },
          {
            text_vi:
              '**weil** nêu **nguyên nhân**, **sodass** nêu **kết quả**; **deshalb** (trạng từ) cũng nêu kết quả nhưng động từ **ngay sau**. Es gab einen Virus, **sodass** der Computer **abstürzte**. = Es gab einen Virus, **deshalb stürzte** der Computer ab. = Der Computer stürzte ab, **weil** es einen Virus **gab**.',
            examples: [['Ich habe die Daten gesichert, sodass nichts verloren geht.', 'Tôi đã sao lưu dữ liệu nên không mất gì.']],
            exercises: [
              transform('Viết lại với sodass', 'Das Passwort war falsch, deshalb konnte ich mich nicht einloggen.', [
                'Das Passwort war falsch, sodass ich mich nicht einloggen konnte.',
              ]),
              choose('Ich habe das Programm aktualisiert, ___ es jetzt schneller läuft.', ['sodass', 'weil'], 'sodass', { vi: 'Tôi đã cập nhật chương trình nên giờ nó chạy nhanh hơn.' }),
              fill('Die App ist so benutzerfreundlich, {dass} auch meine Oma sie benutzt.', 'Ứng dụng dễ dùng đến mức bà tôi cũng dùng.'),
            ],
          },
          {
            text_vi:
              '**Digitalisierung**: **Daten** được **hochladen** (tải lên); **einloggen / ausloggen** (đăng nhập / đăng xuất). **Datenschutz** và **Sicherheit** rất quan trọng (cẩn thận **Virus**). **Künstliche Intelligenz** có **Vor- und Nachteile**. **mit der Zeit gehen** = theo kịp thời đại; **auf dem neuesten Stand** = cập nhật mới nhất.',
            examples: [['Meine Software ist immer auf dem neuesten Stand.', 'Phần mềm của tôi luôn được cập nhật mới nhất.']],
            exercises: [
              fill('Vergiss nicht, dich {auszuloggen}! (ausloggen)', 'Đừng quên đăng xuất!'),
              translate('Trí tuệ nhân tạo có ưu và nhược điểm.', ['Künstliche Intelligenz hat Vor- und Nachteile.', 'Die Künstliche Intelligenz hat Vor- und Nachteile.']),
            ],
          },
        ],
        mixed: [
          transform('Viết lại với sodass', 'Der Computer hatte einen Virus, deshalb war er sehr langsam.', ['Der Computer hatte einen Virus, sodass er sehr langsam war.']),
          choose('Er hat so viel programmiert, ___ er Kopfschmerzen bekam.', ['dass', 'sodass', 'weil'], 'dass', { vi: 'Anh ấy lập trình nhiều đến mức bị đau đầu.' }),
          fill('Die KI vereinfacht die Arbeit, sodass wir mehr Zeit {haben}.', 'AI làm công việc đơn giản hơn nên chúng ta có nhiều thời gian hơn.'),
          choose('Ich habe mein Passwort vergessen, ___ ich mich nicht einloggen kann.', ['sodass', 'weil', 'obwohl'], 'sodass', { vi: 'Tôi quên mật khẩu nên không đăng nhập được.' }),
          order('Das Netzwerk / war / so / langsam, / dass / ich / aufgegeben / habe.', 'Mạng chậm đến mức tôi bỏ cuộc.'),
        ],
      },
      dialogue: {
        title_de: 'Künstliche Intelligenz im Alltag',
        lines: [
          { speaker: 'A', de: 'Benutzt du Künstliche Intelligenz?', vi: 'Bạn có dùng trí tuệ nhân tạo không?' },
          { speaker: 'B', de: 'Ja, jeden Tag. Sie vereinfacht meine Arbeit, sodass ich mehr Zeit für andere Dinge habe.', vi: 'Có, mỗi ngày. Nó làm công việc của mình đơn giản hơn nên mình có nhiều thời gian cho việc khác.' },
          { speaker: 'A', de: 'Und der Datenschutz? Ich lade nicht gern persönliche Daten hoch.', vi: 'Còn bảo vệ dữ liệu? Mình không thích tải dữ liệu cá nhân lên.' },
          { speaker: 'B', de: 'Das stimmt. Deshalb benutze ich nur sichere Anwendungen.', vi: 'Đúng vậy. Vì thế mình chỉ dùng các ứng dụng an toàn.' },
          { speaker: 'A', de: 'Mein Vater sagt, Maschinen werden bald alle Menschen ersetzen.', vi: 'Bố mình nói máy móc sẽ sớm thay thế tất cả con người.' },
          { speaker: 'B', de: 'Das glaube ich nicht. Aber man muss mit der Zeit gehen. Ich lerne ständig weiter, sodass ich auf dem neuesten Stand bleibe.', vi: 'Mình không tin thế. Nhưng phải theo kịp thời đại. Mình liên tục học thêm để luôn cập nhật.' },
          { speaker: 'A', de: 'Gestern hatte mein Laptop einen Virus, sodass ich zwei Tage nicht arbeiten konnte.', vi: 'Hôm qua laptop của mình bị vi-rút nên hai ngày không làm việc được.' },
          { speaker: 'B', de: 'Oh nein! Hast du die Software nicht aktualisiert?', vi: 'Ôi không! Bạn không cập nhật phần mềm à?' },
          { speaker: 'A', de: 'Nein, das war das Problem. Jetzt passiert das automatisch.', vi: 'Không, đó chính là vấn đề. Giờ việc đó tự động rồi.' },
        ],
        gloss: { persönliche: 'cá nhân', sichere: 'an toàn', ständig: 'liên tục', Laptop: 'máy tính xách tay', passiert: 'xảy ra' },
        questions: [
          tf('B benutzt jeden Tag Künstliche Intelligenz.', true),
          mc('A lo ngại điều gì?', ['bảo vệ dữ liệu', 'giá tiền', 'tốc độ mạng'], 'bảo vệ dữ liệu'),
          tf('B glaubt, dass Maschinen alle Menschen ersetzen werden.', false, { explain: 'Das glaube ich nicht.' }),
          mc('Vì sao laptop của A bị vi-rút?', ['A không cập nhật phần mềm', 'A tải trò chơi', 'laptop quá cũ'], 'A không cập nhật phần mềm'),
        ],
        dictation: [1, 6],
      },
      writing_prompt_vi:
        'Nêu ưu và nhược điểm của điện thoại thông minh (5–6 câu), dùng ít nhất hai câu sodass và một câu so … dass.',
    },
  ],
  test: {
    grammar: {
      'verb-praep': [
        fill('Das hängt {vom} Wetter ab.', 'Điều đó phụ thuộc vào thời tiết.'),
        choose('Der Tisch besteht ___ Holz.', ['aus', 'von'], 'aus'),
        choose('Ich interessiere mich ___ Technik.', ['für', 'an'], 'für'),
        choose('___ beschäftigst du dich? – Mit Robotern.', ['Womit', 'Woraus'], 'Womit'),
        order('Sie / forscht / an / einem / neuen Medikament.', 'Cô ấy nghiên cứu một loại thuốc mới.'),
        fill('{Woran} denkst du? – An die Prüfung.', 'Bạn đang nghĩ về gì? – Về kỳ thi.'),
      ],
      'seit-bis': [
        fill('{Seit} ich in Berlin wohne, fahre ich Fahrrad.', 'Từ khi sống ở Berlin, tôi đi xe đạp.'),
        choose('Warte, ___ ich zurück bin.', ['bis', 'seit'], 'bis'),
        choose('Ich lerne Deutsch ___ einem Jahr.', ['seit', 'bis'], 'seit'),
        order('Seit / sie / ein Auto / hat, / fährt / sie / nicht / mehr / Bus.', 'Từ khi có ô tô, cô ấy không đi xe buýt nữa.'),
        choose('Bis der Bus kommt, ___ wir.', ['warten', 'wir warten'], 'warten'),
        fill('Ich bleibe hier, bis du {kommst}.', 'Tôi ở đây cho đến khi bạn đến.'),
      ],
      sodass: [
        fill('Es regnete, {sodass} wir zu Hause blieben.', 'Trời mưa nên chúng tôi ở nhà.'),
        choose('Er war ___ müde, dass er sofort einschlief.', ['so', 'sodass'], 'so'),
        choose('Der Akku war leer, sodass ich nicht anrufen ___.', ['konnte', 'kann ich'], 'konnte'),
        order('Ich / habe / verschlafen, / sodass / ich / zu spät / kam.', 'Tôi ngủ quên nên đến muộn.'),
        choose('Das Essen war so scharf, ___ ich weinen musste.', ['dass', 'weil'], 'dass'),
        fill('Die App ist so einfach, {dass} jeder sie benutzen kann.', 'Ứng dụng đơn giản đến mức ai cũng dùng được.'),
      ],
    },
    reading: {
      title_de: 'Eine Erfindung aus der Küche',
      text_de:
        'Im Jahr 1908 ärgerte sich die Hausfrau Melitta Bentz aus Dresden über ihren Kaffee. Er war oft bitter, und im Kaffee schwammen Kaffeekrümel. Sie beschäftigte sich lange mit dem Problem, bis sie eine einfache Lösung fand: Sie nahm Löschpapier aus dem Schulheft ihres Sohnes und legte es in einen alten Topf mit Löchern. So entstand der erste Kaffeefilter. Die Idee war so gut, dass sie noch im selben Jahr eine Firma gründete. Seit dieser Zeit benutzen Menschen auf der ganzen Welt Kaffeefilter. Der Erfolg hing nicht von teurer Technik ab, sondern von einer guten Idee.',
      gloss: {
        Hausfrau: 'bà nội trợ',
        bitter: 'đắng',
        schwammen: 'nổi (schwimmen)',
        Kaffeekrümel: 'bã cà phê',
        Löschpapier: 'giấy thấm',
        Schulheft: 'vở học sinh',
        Löchern: 'lỗ (số nhiều)',
        entstand: 'ra đời (entstehen)',
        Kaffeefilter: 'giấy lọc cà phê',
        selben: 'cùng',
      },
      questions: [
        mc('Melitta Bentz không hài lòng điều gì?', ['cà phê đắng và có bã', 'cà phê quá đắt', 'cà phê nguội'], 'cà phê đắng và có bã'),
        tf('Sie hat Papier aus dem Heft ihres Sohnes benutzt.', true),
        mc('Bà thành lập công ty khi nào?', ['cùng năm 1908', 'mười năm sau', 'năm 1950'], 'cùng năm 1908'),
        tf('Für die Erfindung brauchte sie teure Technik.', false, { explain: 'Der Erfolg hing nicht von teurer Technik ab, sondern von einer guten Idee.' }),
      ],
    },
  },
});
