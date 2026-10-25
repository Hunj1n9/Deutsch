// B2 · 13 Thuyết trình và lập luận — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b2-13',
  points: [
    {
      key: 'praesentation',
      rule_key: 'praesentation-redemittel',
      category: 'word_choice',
      title_vi: 'Mẫu câu thuyết trình và câu hỏi tu từ',
      explanation_vi: 'Mở đầu: Ich möchte Ihnen … vorstellen / Lassen Sie mich mit … beginnen. Chuyển ý: Ich komme nun zu … Chỉ hình: Wie Sie sehen, … (động từ ngay sau dấu phẩy). Câu hỏi tu từ (Was bedeutet das für uns?) rồi tự trả lời để giữ sự chú ý.',
    },
    {
      key: 'zusammenfassen',
      rule_key: 'zusammenfassung-angaben-quelle',
      category: 'word_choice',
      title_vi: 'Tóm tắt và nêu nguồn',
      explanation_vi: 'Tóm tắt dùng Präsens, ngôi thứ ba, không chép nguyên văn: Der Text handelt von … / Der Autor vertritt die These, dass … Nêu nguồn: laut + Dat, nach Angaben + Gen (nach Angaben des Bundesamts), lời người khác dùng Konjunktiv I.',
    },
    {
      key: 'textstruktur',
      rule_key: 'textstruktur-zunaechst-ferner',
      category: 'verb_position',
      title_vi: 'Từ nối cấu trúc bài: zunächst, ferner, abschließend',
      explanation_vi: 'Zunächst / Erstens → Anschließend / Ferner / Zudem / Darüber hinaus → Abschließend / Zum Schluss. Đều là trạng từ: đứng vị trí 1 thì động từ ngay sau (Ferner ist zu beachten …), chủ ngữ đứng sau động từ.',
    },
  ],
  lessons: [
    {
      title_vi: 'Thuyết trình trước người nghe',
      goal_vi: 'Mở đầu, dẫn dắt và kết thúc một bài thuyết trình; giữ sự chú ý bằng câu hỏi tu từ và ngôn ngữ cơ thể.',
      items: [
        'Präsentation', 'Vortrag', 'Folie', 'Zuhörer', 'Aufmerksamkeit', 'Redemittel', 'Rückfrage', 'hervorheben', 'anschaulich',
        'verständlich', 'Ich komme nun zu', 'Wie Sie sehen', 'Vielen Dank für Ihre Aufmerksamkeit',
        'Ich möchte Ihnen … vorstellen', 'Câu hỏi tu từ khi thuyết trình', 'Rednerin', 'Lampenfieber', 'Körpersprache',
        'Blickkontakt', 'Handout', 'Beamer', 'Rhetorik', 'rhetorisch', 'souverän', 'zielgruppengerecht',
        'Lassen Sie mich mit … beginnen', 'Gibt es noch Fragen?', 'den roten Faden verlieren', 'Redezeit', 'Publikumsfrage',
        'eloquent', 'die Aufmerksamkeit lenken auf',
      ],
      grammar: {
        point: 'praesentation',
        sections: [
          {
            text_vi:
              'Bài thuyết trình B2 (và phần Nói của Goethe B2, TestDaF) cần **mẫu câu cố định**. Mở đầu: **Heute möchte ich Ihnen** unser Projekt **vorstellen.** / **Lassen Sie mich mit** einem Beispiel **beginnen.** Chuyển ý: **Ich komme nun zu** meinem zweiten Punkt. Chỉ hình: **Wie Sie sehen, ist** die Zahl gestiegen (sau "Wie Sie sehen," động từ đứng ngay).',
            table: 'Phần | Mẫu câu\nmở đầu | Heute möchte ich Ihnen … vorstellen.\nmở đầu | Lassen Sie mich mit … beginnen.\nchuyển ý | Ich komme nun zu …\nhình ảnh | Wie Sie auf dieser Folie sehen, …\nkết thúc | Vielen Dank für Ihre Aufmerksamkeit. Gibt es noch Fragen?',
            examples: [
              ['Heute möchte ich Ihnen die Ergebnisse unserer Umfrage vorstellen.', 'Hôm nay tôi muốn giới thiệu với quý vị kết quả khảo sát của chúng tôi.'],
              ['Wie Sie auf dieser Folie sehen, ist der Anteil deutlich gestiegen.', 'Như quý vị thấy trên trang chiếu này, tỷ lệ đã tăng rõ rệt.'],
            ],
            exercises: [
              choose('Wie Sie sehen, ___ die Kosten gesunken.', ['sind', 'die Kosten sind', 'seien'], 'sind', { vi: 'Như quý vị thấy, chi phí đã giảm.' }),
              fill('Ich komme nun {zu} meinem letzten Punkt.', 'Bây giờ tôi chuyển sang ý cuối cùng.'),
              order('Lassen / Sie / mich / mit / einer Frage / beginnen.', 'Cho phép tôi bắt đầu bằng một câu hỏi.'),
            ],
          },
          {
            text_vi:
              '**Câu hỏi tu từ** không cần người nghe trả lời: người nói **tự hỏi rồi tự trả lời**, giúp chuyển ý và giữ **Aufmerksamkeit**: **Was bedeutet das** für uns? **Warum ist das so wichtig?** Ngoài lời nói, **Körpersprache** và **Blickkontakt** quan trọng: nhìn người nghe, không đọc từ **Folie**. Lỡ **den roten Faden verlieren** thì nhìn **Stichpunkte**.',
            examples: [['Was bedeutet das konkret? Ganz einfach: Wir müssen jetzt handeln.', 'Điều đó cụ thể nghĩa là gì? Rất đơn giản: chúng ta phải hành động ngay.']],
            exercises: [
              choose('Was ___ das für unsere Stadt? Mehr Verkehr und weniger Parkplätze.', ['bedeutet', 'heißt es', 'meint'], 'bedeutet', { vi: 'Điều đó có nghĩa gì với thành phố chúng ta? Nhiều xe cộ hơn và ít chỗ đỗ hơn.' }),
              fill('Halten Sie {Blickkontakt} mit dem Publikum.', 'Hãy giữ giao tiếp bằng mắt với khán giả.'),
              translate('Cảm ơn quý vị đã lắng nghe. Còn câu hỏi nào không?', [
                'Vielen Dank für Ihre Aufmerksamkeit. Gibt es noch Fragen?',
                'Vielen Dank für Ihre Aufmerksamkeit! Gibt es noch Fragen?',
              ]),
            ],
          },
        ],
        mixed: [
          choose('Heute möchte ich Ihnen unser Projekt ___.', ['vorstellen', 'stellen vor', 'vorgestellt'], 'vorstellen', { vi: 'Hôm nay tôi muốn giới thiệu với quý vị dự án của chúng tôi.' }),
          fill('Wie Sie auf der Grafik {sehen}, ist der Umsatz gestiegen.', 'Như quý vị thấy trên biểu đồ, doanh thu đã tăng.'),
          choose('Ich möchte Ihre Aufmerksamkeit ___ einen wichtigen Punkt lenken.', ['auf', 'zu', 'an'], 'auf', { vi: 'Tôi muốn hướng sự chú ý của quý vị vào một điểm quan trọng.' }),
          transform('Viết thành câu hỏi tu từ để chuyển ý (Warum …?)', 'Dieses Thema ist wichtig, weil es alle betrifft.', [
            'Warum ist dieses Thema wichtig? Weil es alle betrifft.',
            'Warum ist das Thema so wichtig? Weil es alle betrifft.',
          ]),
          order('Damit / komme / ich / zum Schluss.', 'Đến đây tôi xin kết thúc.'),
        ],
      },
      dialogue: {
        title_de: 'Lampenfieber vor dem Referat',
        lines: [
          { speaker: 'A', de: 'Morgen muss ich meinen Vortrag halten, und ich habe schreckliches Lampenfieber.', vi: 'Mai mình phải thuyết trình, và mình hồi hộp kinh khủng.' },
          { speaker: 'B', de: 'Das ist normal. Hast du den Anfang gut vorbereitet?', vi: 'Bình thường mà. Bạn chuẩn bị phần mở đầu kỹ chưa?' },
          { speaker: 'A', de: 'Ich wollte sagen: "Heute möchte ich Ihnen mein Thema vorstellen." Ist das zu langweilig?', vi: 'Mình định nói: "Hôm nay tôi muốn giới thiệu chủ đề của mình." Có chán quá không?' },
          { speaker: 'B', de: 'Ein bisschen. Lass mich dir einen Tipp geben: Beginne mit einer rhetorischen Frage.', vi: 'Hơi chán. Để mình cho bạn một mẹo: bắt đầu bằng một câu hỏi tu từ.' },
          { speaker: 'A', de: 'Zum Beispiel: "Wie viele Stunden verbringen Sie täglich am Handy?"', vi: 'Ví dụ: "Mỗi ngày quý vị dành bao nhiêu giờ cho điện thoại?"' },
          { speaker: 'B', de: 'Perfekt! So lenkst du sofort die Aufmerksamkeit auf dein Thema.', vi: 'Hoàn hảo! Như vậy bạn hướng ngay sự chú ý vào chủ đề của mình.' },
          { speaker: 'A', de: 'Und wenn ich in der Mitte den roten Faden verliere?', vi: 'Thế nếu giữa chừng mình lạc mạch thì sao?' },
          { speaker: 'B', de: 'Dann schau auf deine Stichpunkte. Und lies nicht von den Folien ab, halte Blickkontakt.', vi: 'Thì nhìn các ý chính của bạn. Và đừng đọc từ trang chiếu, hãy giữ giao tiếp bằng mắt.' },
          { speaker: 'A', de: 'Danke. Ich übe heute Abend noch einmal vor dem Spiegel.', vi: 'Cảm ơn. Tối nay mình sẽ tập lại trước gương.' },
        ],
        gloss: { Referat: 'bài thuyết trình (ở trường)', schreckliches: 'kinh khủng', Anfang: 'phần mở đầu', verbringen: 'dành (thời gian)', Mitte: 'giữa', 'lies … ab': 'đọc theo (ablesen)', Spiegel: 'gương' },
        questions: [
          mc('A lo lắng điều gì?', ['hồi hộp trước bài thuyết trình', 'không có máy chiếu', 'quên chủ đề'], 'hồi hộp trước bài thuyết trình'),
          tf('B findet den geplanten Anfang sehr spannend.', false, { explain: 'Ein bisschen (langweilig).' }),
          mc('B khuyên bắt đầu thế nào?', ['bằng một câu hỏi tu từ', 'bằng một trò đùa', 'bằng cách đọc trang chiếu'], 'bằng một câu hỏi tu từ'),
          tf('B rät, Blickkontakt zu halten.', true),
        ],
        dictation: [3, 7],
      },
      writing_prompt_vi:
        'Viết phần mở đầu và kết thúc (6–8 câu) cho một bài thuyết trình về chủ đề bạn chọn (ví dụ: học tiếng Đức online); dùng một câu hỏi tu từ, Ich möchte Ihnen … vorstellen, Ich komme nun zu và lời cảm ơn.',
    },
    {
      title_vi: 'Tóm tắt và trích dẫn',
      goal_vi: 'Tóm tắt một văn bản, nêu ý chính và nguồn số liệu bằng ngôn ngữ của mình.',
      items: [
        'Fazit', 'Aspekt', 'Überblick', 'Stellungnahme', 'Erörterung', 'erläutern', 'verweisen', 'aufgreifen', 'sich beziehen',
        'ableiten', 'prägnant', 'ausführlich', 'Zusammenfassend lässt sich sagen', 'Tóm tắt: der Text handelt von',
        'Trích dẫn gián tiếp: laut / nach Angaben von', 'Beleg', 'aufzeigen', 'darlegen', 'resümieren', 'einleuchtend',
        'Ich fasse zusammen', 'auf den Punkt bringen', 'Kernaussage', 'paraphrasieren',
      ],
      grammar: {
        point: 'zusammenfassen',
        sections: [
          {
            text_vi:
              '**Tóm tắt** (Zusammenfassung) viết ở **Präsens**, ngôi thứ ba, ngắn và **không chép nguyên văn** (paraphrasieren). Mẫu câu: Der Text **handelt von** + Dat / **In** dem Text **geht es um** + Akk. Der Autor **vertritt die These, dass** … Er **zeigt auf**, wie … Kết: **Zusammenfassend lässt sich sagen, dass** … (động từ cuối).',
            table: 'Chức năng | Mẫu câu\nchủ đề | Der Artikel handelt von …\nluận điểm | Die Autorin vertritt die These, dass …\nlý lẽ | Sie begründet das damit, dass …\nkết luận | Zusammenfassend lässt sich sagen, dass …',
            examples: [
              ['Der Artikel handelt von den Folgen der Digitalisierung für die Arbeitswelt.', 'Bài báo nói về hậu quả của số hóa đối với thế giới việc làm.'],
              ['Die Autorin vertritt die These, dass Homeoffice produktiver macht.', 'Tác giả đưa ra luận điểm rằng làm việc ở nhà giúp năng suất hơn.'],
            ],
            exercises: [
              choose('Zusammenfassend lässt sich sagen, dass das Projekt erfolgreich ___.', ['war', 'war es', 'ist gewesen sein'], 'war', { vi: 'Tóm lại có thể nói rằng dự án đã thành công.' }),
              fill('Der Autor vertritt die {These}, dass Schulen mehr Sport brauchen.', 'Tác giả đưa ra luận điểm rằng trường học cần nhiều thể thao hơn.'),
              choose('In einer Zusammenfassung benutzt man meistens das ___.', ['Präsens', 'Präteritum', 'Futur II'], 'Präsens', { vi: 'Trong bản tóm tắt người ta thường dùng thì hiện tại.' }),
            ],
          },
          {
            text_vi:
              '**Nêu nguồn**: **laut** + Dativ (laut einer Studie), **nach Angaben** + Genitiv (nach Angaben **des** Statistischen Bundesamts) hoặc **nach Angaben von** + Dativ. **Lời của người khác** dùng **Konjunktiv I**: Die Autorin meint, Homeoffice **sei** produktiver. Dẫn chiếu: Der Text **bezieht sich auf** eine Studie / **verweist auf** neue Zahlen.',
            examples: [['Nach Angaben des Bundesamts leben 84 Millionen Menschen in Deutschland.', 'Theo số liệu của Cục Thống kê Liên bang, 84 triệu người sống ở Đức.']],
            exercises: [
              fill('Nach Angaben {des} Ministeriums ist die Zahl gestiegen.', 'Theo số liệu của bộ, con số đã tăng.'),
              choose('Der Autor meint, die Lösung ___ einfach.', ['sei', 'ist sein', 'wären'], 'sei', { vi: 'Tác giả cho rằng giải pháp đơn giản.' }),
              translate('Theo một nghiên cứu, người trẻ đọc ít hơn.', [
                'Laut einer Studie lesen junge Leute weniger.',
                'Laut einer Studie lesen junge Menschen weniger.',
                'Einer Studie zufolge lesen junge Leute weniger.',
              ]),
            ],
          },
        ],
        mixed: [
          choose('Der Text ___ von den Vorteilen des Fahrrads.', ['handelt', 'geht', 'spricht um'], 'handelt', { vi: 'Bài viết nói về lợi ích của xe đạp.' }),
          fill('Laut {einer} Umfrage ist die Mehrheit dafür.', 'Theo một cuộc khảo sát, đa số ủng hộ.'),
          transform('Viết lại thành tóm tắt (Präsens, Konjunktiv I cho lời tác giả)', 'Die Autorin sagt: „Die Mieten sind zu hoch.“', [
            'Die Autorin sagt, die Mieten seien zu hoch.',
            'Die Autorin meint, die Mieten seien zu hoch.',
          ]),
          choose('Der Artikel bezieht sich ___ eine Studie aus Kanada.', ['auf', 'an', 'von'], 'auf', { vi: 'Bài báo dựa vào một nghiên cứu từ Canada.' }),
          order('Zusammenfassend / lässt sich / sagen, / dass / die These / stichhaltig / ist.', 'Tóm lại có thể nói rằng luận điểm là vững chắc.'),
        ],
      },
      dialogue: {
        title_de: 'Eine Zusammenfassung schreiben',
        lines: [
          { speaker: 'A', de: 'Für den Kurs soll ich einen Zeitungsartikel zusammenfassen. Wie fange ich an?', vi: 'Cho khóa học mình phải tóm tắt một bài báo. Bắt đầu thế nào nhỉ?' },
          { speaker: 'B', de: 'Nenn zuerst Titel, Quelle und Thema: Der Artikel handelt von …', vi: 'Trước hết nêu tiêu đề, nguồn và chủ đề: Bài báo nói về …' },
          { speaker: 'A', de: 'Und dann schreibe ich einfach die wichtigsten Sätze ab?', vi: 'Rồi mình chỉ cần chép lại những câu quan trọng nhất à?' },
          { speaker: 'B', de: 'Nein, auf keinen Fall! Du musst paraphrasieren, also mit eigenen Worten schreiben.', vi: 'Không, tuyệt đối không! Bạn phải diễn đạt lại, tức là viết bằng lời của mình.' },
          { speaker: 'A', de: 'Und wenn der Autor Zahlen nennt?', vi: 'Thế nếu tác giả đưa ra số liệu?' },
          { speaker: 'B', de: 'Dann nennst du die Quelle: Laut einer Studie … oder: Nach Angaben des Bundesamts …', vi: 'Thì bạn nêu nguồn: Theo một nghiên cứu … hoặc: Theo số liệu của Cục …' },
          { speaker: 'A', de: 'In welcher Zeit schreibe ich?', vi: 'Mình viết ở thì nào?' },
          { speaker: 'B', de: 'Im Präsens. Und was der Autor meint, gibst du im Konjunktiv I wieder: Er meint, das sei wichtig.', vi: 'Thì hiện tại. Và điều tác giả nghĩ thì bạn thuật lại bằng Konjunktiv I: Ông ấy cho rằng điều đó quan trọng.' },
          { speaker: 'A', de: 'Und am Ende?', vi: 'Còn cuối bài?' },
          { speaker: 'B', de: 'Bring die Kernaussage auf den Punkt: Zusammenfassend lässt sich sagen, dass …', vi: 'Nói thẳng thông điệp cốt lõi: Tóm lại có thể nói rằng …' },
        ],
        gloss: { zusammenfassen: 'tóm tắt', Zeitungsartikel: 'bài báo', Titel: 'tiêu đề', Quelle: 'nguồn', 'schreibe … ab': 'chép lại (abschreiben)', 'auf keinen Fall': 'tuyệt đối không', 'gibst … wieder': 'thuật lại (wiedergeben)' },
        questions: [
          mc('Đầu bài tóm tắt cần nêu gì?', ['tiêu đề, nguồn và chủ đề', 'ý kiến riêng', 'kết luận'], 'tiêu đề, nguồn và chủ đề'),
          tf('Man soll die wichtigsten Sätze einfach abschreiben.', false, { explain: 'Du musst paraphrasieren.' }),
          mc('Tóm tắt viết ở thì nào?', ['hiện tại (Präsens)', 'quá khứ (Präteritum)', 'tương lai'], 'hiện tại (Präsens)'),
          tf('Die Meinung des Autors gibt man im Konjunktiv I wieder.', true),
        ],
        dictation: [3, 5],
      },
      writing_prompt_vi:
        'Tóm tắt một bài báo tiếng Đức ngắn bạn vừa đọc (6–8 câu): chủ đề, luận điểm, hai lý lẽ, một số liệu có nguồn, kết luận; dùng Präsens và Konjunktiv I cho lời tác giả.',
    },
    {
      title_vi: 'Cấu trúc bài và điều phối thảo luận',
      goal_vi: 'Sắp xếp ý theo trình tự rõ ràng với zunächst, ferner, abschließend; xin lời, điều phối và kết thúc một cuộc thảo luận.',
      items: [
        'Gliederung', 'Einleitung', 'Hauptteil', 'Stichpunkt', 'Schwerpunkt', 'Gegensatz', 'Diskussionsrunde', 'eingehen',
        'überleiten', 'strukturiert', 'abschließend', 'ferner', 'zudem', 'darüber hinaus', 'letztlich',
        'Liên từ cấu trúc bài: zunächst, ferner, abschließend', 'Moderation', 'Diskussionsleiter', 'Wortmeldung',
        'Hauptargument', 'Leitfrage', 'Ausblick', 'Gedankengang', 'Überzeugungskraft', 'moderieren', 'das Wort ergreifen',
        'einleiten', 'untermauern', 'entkräften', 'stichhaltig', 'Damit komme ich zum Schluss', 'gewichten', 'aus meiner Sicht',
      ],
      grammar: {
        point: 'textstruktur',
        sections: [
          {
            text_vi:
              'Bài viết và bài nói có **Einleitung – Hauptteil – Schluss**. Từ nối cho trình tự: **zunächst / erstens** (trước hết) → **anschließend / dann** (tiếp theo) → **ferner / zudem / darüber hinaus** (hơn nữa) → **abschließend / zum Schluss** (cuối cùng). Đây là **trạng từ**: đứng **vị trí 1** thì **động từ ngay sau**: **Zunächst möchte** ich das Problem beschreiben.',
            table: 'Phần | Từ nối | Ví dụ\nmở đầu | zunächst, erstens | Zunächst möchte ich …\nthêm ý | ferner, zudem, darüber hinaus | Ferner ist wichtig, dass …\nchuyển ý | anschließend | Anschließend gehe ich auf … ein.\nkết | abschließend, letztlich | Abschließend lässt sich sagen …',
            examples: [
              ['Zunächst möchte ich die Ausgangslage beschreiben.', 'Trước hết tôi muốn mô tả tình hình ban đầu.'],
              ['Darüber hinaus spricht vieles für eine Reform.', 'Hơn thế nữa, có nhiều điều ủng hộ một cuộc cải cách.'],
            ],
            exercises: [
              choose('Zunächst ___ ich die Fragestellung erläutern.', ['möchte', 'ich möchte', 'möchten'], 'möchte', { vi: 'Trước hết tôi muốn giải thích câu hỏi nghiên cứu.' }),
              fill('{Abschließend} möchte ich einen Ausblick geben.', 'Cuối cùng tôi muốn đưa ra triển vọng.'),
              order('Ferner / ist / zu beachten, / dass / die Kosten / steigen.', 'Hơn nữa cần lưu ý rằng chi phí đang tăng.'),
            ],
          },
          {
            text_vi:
              'Trong **thảo luận**: xin lời **Darf ich kurz etwas dazu sagen?** (**das Wort ergreifen**); đi sâu vào ý người khác: **Ich möchte auf** Ihr Argument **eingehen** (eingehen auf + Akk). Củng cố hay bác bỏ: ein Argument **untermauern** / **entkräften**. Người điều phối: **Kommen wir zum nächsten Punkt.** **Damit komme ich zum Schluss.**',
            examples: [['Ich möchte kurz auf Ihr Hauptargument eingehen.', 'Tôi muốn đi sâu một chút vào lập luận chính của ông/bà.']],
            exercises: [
              choose('Ich möchte gern ___ Ihre Frage eingehen.', ['auf', 'an', 'zu'], 'auf', { vi: 'Tôi muốn đi vào câu hỏi của ông/bà.' }),
              fill('Mit diesen Zahlen kann ich mein Argument {untermauern}.', 'Với những con số này tôi có thể củng cố lập luận của mình.'),
              translate('Tôi có thể nói một chút về điều đó không?', ['Darf ich kurz etwas dazu sagen?', 'Darf ich etwas dazu sagen?', 'Kann ich kurz etwas dazu sagen?']),
            ],
          },
          {
            text_vi:
              'Bài mạch lạc nhờ các từ **chỉ lại** điều đã nói, tránh lặp danh từ: **dies** (điều này): Die Mieten steigen. **Dies** belastet vor allem Familien. **darauf, damit, dafür** thay giới từ + vật đã nhắc. **Ersteres … Letzteres** (cái trước … cái sau). **Wie bereits erwähnt**, … (như đã nói) rồi động từ ngay sau dấu phẩy.',
            examples: [
              ['Viele Studierende arbeiten neben dem Studium. Dies wirkt sich auf die Noten aus.', 'Nhiều sinh viên làm thêm. Điều này ảnh hưởng đến điểm số.'],
              ['Man kann mit dem Zug oder mit dem Auto fahren. Ersteres ist umweltfreundlicher.', 'Có thể đi tàu hoặc ô tô. Cách thứ nhất thân thiện môi trường hơn.'],
            ],
            exercises: [
              choose('Die Kosten steigen. ___ ist besonders für Familien ein Problem.', ['Dies', 'Diese', 'Dieser'], 'Dies', { vi: 'Chi phí tăng. Điều này đặc biệt là vấn đề với các gia đình.' }),
              choose('Wie bereits ___, fehlt für das Projekt noch Geld.', ['erwähnt', 'erwähnen', 'erwähnte'], 'erwähnt', { vi: 'Như đã nói, dự án còn thiếu tiền.' }),
            ],
          },
        ],
        mixed: [
          choose('Zudem ___ die Lösung sehr teuer.', ['ist', 'sie ist', 'sei'], 'ist', { vi: 'Ngoài ra giải pháp rất đắt.' }),
          fill('Anschließend {gehe} ich auf die Vor- und Nachteile ein.', 'Tiếp theo tôi đi vào ưu và nhược điểm.'),
          choose('Erstens ist es billig, ___ ist es umweltfreundlich.', ['zweitens', 'zunächst', 'abschließend'], 'zweitens', { vi: 'Thứ nhất nó rẻ, thứ hai nó thân thiện với môi trường.' }),
          transform('Viết lại với "Darüber hinaus" ở đầu câu', 'Das Projekt schafft auch neue Arbeitsplätze.', ['Darüber hinaus schafft das Projekt neue Arbeitsplätze.']),
          order('Abschließend / lässt sich / sagen, / dass / die These / überzeugt.', 'Cuối cùng có thể nói rằng luận điểm có sức thuyết phục.'),
        ],
      },
      dialogue: {
        title_de: 'Eine Diskussionsrunde moderieren',
        lines: [
          { speaker: 'A', de: 'Herzlich willkommen zu unserer Diskussionsrunde. Unsere Leitfrage lautet: Sollte Deutsch an der Uni Pflicht sein?', vi: 'Chào mừng đến với buổi thảo luận. Câu hỏi dẫn dắt của chúng ta là: Có nên bắt buộc học tiếng Đức ở đại học không?' },
          { speaker: 'A', de: 'Zunächst bitte ich Frau Tran um ihre Meinung.', vi: 'Trước hết tôi xin mời chị Trần cho ý kiến.' },
          { speaker: 'B', de: 'Danke. Aus meiner Sicht ist Deutsch für den Alltag unverzichtbar. Zudem verbessert es die Chancen auf einen Job.', vi: 'Cảm ơn. Theo tôi tiếng Đức không thể thiếu trong cuộc sống hằng ngày. Ngoài ra nó tăng cơ hội tìm việc.' },
          { speaker: 'A', de: 'Darf ich kurz etwas einwenden? Viele Studiengänge laufen komplett auf Englisch.', vi: 'Cho tôi phản bác một chút được không? Nhiều chương trình học hoàn toàn bằng tiếng Anh.' },
          { speaker: 'B', de: 'Das stimmt, aber ich möchte auf diesen Punkt eingehen: Nach dem Studium arbeiten die meisten auf Deutsch.', vi: 'Đúng vậy, nhưng tôi muốn đi vào điểm này: Sau khi học xong phần lớn mọi người làm việc bằng tiếng Đức.' },
          { speaker: 'A', de: 'Ein stichhaltiges Argument. Kommen wir nun zum zweiten Schwerpunkt: den Kosten.', vi: 'Một lập luận vững chắc. Bây giờ chúng ta chuyển sang trọng tâm thứ hai: chi phí.' },
          { speaker: 'B', de: 'Ferner muss man bedenken, dass zusätzliche Kurse Zeit kosten. Trotzdem lohnt sich die Investition.', vi: 'Hơn nữa cần cân nhắc rằng các khóa học thêm tốn thời gian. Dù vậy khoản đầu tư này vẫn đáng.' },
          { speaker: 'A', de: 'Damit komme ich zum Schluss. Abschließend danke ich allen für die spannende Diskussion.', vi: 'Đến đây tôi xin kết thúc. Cuối cùng xin cảm ơn mọi người vì cuộc thảo luận thú vị.' },
        ],
        gloss: { 'Herzlich willkommen': 'chào mừng', Pflicht: 'bắt buộc', Studiengänge: 'chương trình học', komplett: 'hoàn toàn', bedenken: 'cân nhắc', zusätzliche: 'thêm, bổ sung' },
        questions: [
          mc('Câu hỏi dẫn dắt của buổi thảo luận là gì?', ['có nên bắt buộc học tiếng Đức ở đại học', 'học phí có nên tăng', 'có nên học online'], 'có nên bắt buộc học tiếng Đức ở đại học'),
          tf('Frau Tran hält Deutsch für unwichtig.', false, { explain: 'Aus meiner Sicht ist Deutsch für den Alltag unverzichtbar.' }),
          mc('Người điều phối nêu ý phản bác nào?', ['nhiều chương trình học hoàn toàn bằng tiếng Anh', 'tiếng Đức quá khó', 'không có giáo viên'], 'nhiều chương trình học hoàn toàn bằng tiếng Anh'),
          tf('Der zweite Schwerpunkt sind die Kosten.', true),
        ],
        dictation: [2, 6],
      },
      writing_prompt_vi:
        'Viết dàn ý chi tiết rồi viết thành bài nghị luận ngắn (8–10 câu) về một câu hỏi tự chọn, có mở bài, thân bài, kết luận; dùng zunächst, ferner/zudem, darüber hinaus và abschließend.',
    },
  ],
  test: {
    grammar: {
      praesentation: [
        choose('Wie Sie sehen, ___ die Zahl gestiegen.', ['ist', 'die Zahl ist', 'sei'], 'ist'),
        fill('Ich komme nun {zu} meinem zweiten Punkt.', 'Bây giờ tôi chuyển sang ý thứ hai.'),
        choose('Heute möchte ich Ihnen unser Projekt ___.', ['vorstellen', 'stellen vor', 'vorgestellt'], 'vorstellen'),
        order('Lassen / Sie / mich / mit / einem Beispiel / beginnen.', 'Cho phép tôi bắt đầu bằng một ví dụ.'),
        fill('Vielen Dank für Ihre {Aufmerksamkeit}!', 'Cảm ơn quý vị đã lắng nghe!'),
        choose('Ich möchte die Aufmerksamkeit ___ ein Problem lenken.', ['auf', 'zu', 'an'], 'auf'),
      ],
      zusammenfassen: [
        choose('Der Artikel ___ von der Energiewende.', ['handelt', 'geht', 'spricht um'], 'handelt'),
        fill('Nach Angaben {des} Bundesamts ist die Zahl gesunken.', 'Theo số liệu của Cục, con số đã giảm.'),
        choose('Der Autor meint, das Problem ___ lösbar.', ['sei', 'ist sein', 'wären'], 'sei'),
        fill('Laut {einer} Studie schlafen Jugendliche zu wenig.', 'Theo một nghiên cứu, thanh thiếu niên ngủ quá ít.'),
        order('Zusammenfassend / lässt sich / sagen, / dass / das Projekt / sinnvoll / ist.', 'Tóm lại có thể nói rằng dự án hợp lý.'),
        choose('Der Text bezieht sich ___ eine Umfrage.', ['auf', 'an', 'mit'], 'auf'),
      ],
      textstruktur: [
        choose('Zunächst ___ ich das Thema vorstellen.', ['möchte', 'ich möchte', 'möchten'], 'möchte'),
        fill('{Abschließend} danke ich Ihnen.', 'Cuối cùng tôi xin cảm ơn quý vị.'),
        choose('Ferner ___ die Lösung umweltfreundlich.', ['ist', 'sie ist', 'sei'], 'ist'),
        choose('Erstens ist es schnell, ___ ist es billig.', ['zweitens', 'zunächst', 'letztlich'], 'zweitens'),
        order('Darüber hinaus / gibt / es / ein weiteres Argument.', 'Hơn thế nữa còn có một lập luận khác.'),
        fill('Anschließend {gehe} ich auf die Kritik ein.', 'Tiếp theo tôi đi vào lời phê bình.'),
      ],
    },
    reading: {
      title_de: 'Gut präsentieren – aber wie?',
      text_de:
        'Viele Studierende haben Angst vor Referaten. Laut einer Umfrage unter 1.000 Studierenden leidet fast die Hälfte unter starkem Lampenfieber. Experten für Rhetorik geben einige einfache Tipps. Zunächst sollte man das Publikum kennen und die Präsentation zielgruppengerecht planen. Ferner helfen eine klare Gliederung und wenige Folien mit kurzen Stichpunkten. Wer seinen Text auswendig lernt, verliert leicht den roten Faden. Besser ist es, frei zu sprechen und Blickkontakt zu halten. Darüber hinaus wirkt eine rhetorische Frage am Anfang oft Wunder. Abschließend raten die Experten, die Präsentation mehrmals laut zu üben, am besten vor Freunden.',
      gloss: {
        leidet: 'chịu đựng (leiden unter)',
        auswendig: 'thuộc lòng',
        frei: 'tự do, không đọc',
        'wirkt … Wunder': 'tạo hiệu quả kỳ diệu',
        mehrmals: 'nhiều lần',
      },
      questions: [
        mc('Theo khảo sát, bao nhiêu sinh viên bị hồi hộp nặng?', ['gần một nửa', 'một phần mười', 'gần như tất cả'], 'gần một nửa'),
        tf('Die Experten empfehlen viele Folien mit langen Texten.', false, { explain: 'Wenige Folien mit kurzen Stichpunkten.' }),
        mc('Vì sao không nên học thuộc lòng bài?', ['dễ bị lạc mạch', 'mất thời gian', 'giáo viên không thích'], 'dễ bị lạc mạch'),
        tf('Man sollte die Präsentation mehrmals laut üben.', true),
      ],
    },
  },
});
