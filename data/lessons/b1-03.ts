// B1 · 03 Trường học và học tập — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b1-03',
  points: [
    {
      key: 'obwohl',
      rule_key: 'obwohl-nebensatz',
      category: 'verb_position',
      title_vi: 'obwohl: mặc dù (động từ cuối câu)',
      explanation_vi: 'obwohl mở câu phụ nhượng bộ, động từ chia đứng cuối. Câu phụ đứng trước → câu chính bắt đầu bằng động từ. Không thêm aber như tiếng Việt "nhưng".',
    },
    {
      key: 'trotzdem-deshalb',
      rule_key: 'trotzdem-deshalb-weil-obwohl',
      category: 'verb_position',
      title_vi: 'trotzdem / deshalb so với obwohl / weil',
      explanation_vi: 'weil, obwohl: liên từ phụ → động từ cuối. deshalb, trotzdem: trạng từ → đứng đầu thì động từ ngay sau. Cùng ý nghĩa, khác vị trí động từ.',
    },
    {
      key: 'nicht-nur',
      rule_key: 'nicht-nur-sondern-auch',
      category: 'word_choice',
      title_vi: 'nicht nur … sondern auch; sondern hay aber',
      explanation_vi: 'nicht nur A, sondern auch B = không chỉ A mà còn B, hai vế cùng loại, có dấu phẩy. sondern sửa sau phủ định (không phải A mà là B); aber = nhưng.',
    },
  ],
  lessons: [
    {
      title_vi: 'Trường phổ thông',
      goal_vi: 'So sánh trường học ở Đức và Việt Nam; nói điều ngược mong đợi với obwohl.',
      items: [
        'Bildung', 'Bildungssystem', 'Schulsystem', 'Gymnasium', 'Bibliotheksausweis', 'Realschule', 'Schulabschluss', 'Schulpflicht', 'Lehrplan',
        'Pausenhof', 'Unterrichtsstunde', 'Lehrkraft', 'Leistung', 'Nachhilfe', 'Notendurchschnitt', 'Anwesenheit', 'lehren',
        'loben', 'kritisieren', 'schwänzen', 'ausfallen', 'abschreiben', 'benoten', 'begabt', 'lernschwach', 'verpflichtend',
        'freiwillig', 'öffentlich', 'privat', 'ausgezeichnet', 'ungenügend', 'obwohl', 'in der Regel',
        'obwohl: nhượng bộ trong câu phụ',
      ],
      grammar: {
        point: 'obwohl',
        sections: [
          {
            text_vi:
              '**obwohl** (mặc dù) mở câu phụ, động từ chia đứng **cuối**: Ich gehe zur Schule, **obwohl** ich krank **bin**. Câu phụ đứng trước → câu chính bắt đầu bằng **động từ**: **Obwohl** er wenig lernt, **hat** er gute Noten. Tiếng Việt nói "mặc dù … nhưng", tiếng Đức **không** thêm aber.',
            examples: [
              ['Obwohl die Nachhilfe teuer ist, gehen viele Schüler hin.', 'Mặc dù học thêm đắt, nhiều học sinh vẫn đi.'],
              ['Er wurde gelobt, obwohl er nicht alles richtig hatte.', 'Cậu ấy được khen dù không làm đúng hết.'],
            ],
            exercises: [
              fill('{Obwohl} sie krank ist, geht sie zur Schule.', 'Mặc dù bị ốm, cô bé vẫn đi học.'),
              choose('Er hat gute Noten, obwohl er wenig ___.', ['lernt', 'lernen', 'gelernt'], 'lernt', { vi: 'Cậu ấy được điểm tốt dù học ít.' }),
              order('Obwohl / ich / müde / war, / habe / ich / gelernt.', 'Mặc dù mệt, tôi vẫn học.'),
            ],
          },
          {
            text_vi:
              '**weil** nêu **lý do** (kết quả như mong đợi), **obwohl** nêu điều **ngược mong đợi**: Ich bestehe die Prüfung, **weil** ich viel lerne. Ich bestehe die Prüfung, **obwohl** ich wenig lerne. Cả hai đều là liên từ phụ: động từ chia đứng **cuối**.',
            examples: [['Sie ist sehr begabt, obwohl sie nie Nachhilfe hatte.', 'Cô ấy rất có năng khiếu dù chưa bao giờ học thêm.']],
            exercises: [
              choose('Er hat schlechte Noten, ___ er oft schwänzt.', ['weil', 'obwohl'], 'weil', { vi: 'Cậu ấy điểm kém vì hay trốn học.' }),
              choose('Sie hat eine Eins, ___ sie kaum gelernt hat.', ['obwohl', 'weil'], 'obwohl', { vi: 'Cô ấy được điểm 1 dù hầu như không học.' }),
              transform('Nối hai câu bằng obwohl', 'Der Kurs ist freiwillig. Alle kommen.', [
                'Obwohl der Kurs freiwillig ist, kommen alle.',
                'Alle kommen, obwohl der Kurs freiwillig ist.',
              ]),
            ],
          },
          {
            text_vi:
              'Ở Đức, sau tiểu học (**Grundschule**) học sinh vào **Gymnasium** (thi **Abitur** để vào đại học), **Realschule** hoặc trường khác. **Schulpflicht** = nghĩa vụ đi học. Thang điểm: **1** (sehr gut) đến **6** (**ungenügend**) – ngược với Việt Nam! **in der Regel** = thông thường.',
            examples: [['In der Regel dauert eine Unterrichtsstunde 45 Minuten.', 'Thông thường một tiết học kéo dài 45 phút.']],
            exercises: [
              fill('In der {Regel} beginnt die Schule um acht Uhr.', 'Thông thường trường học bắt đầu lúc tám giờ.'),
              translate('Ở Đức có nghĩa vụ đi học.', ['In Deutschland gibt es eine Schulpflicht.', 'In Deutschland gibt es Schulpflicht.']),
            ],
          },
        ],
        mixed: [
          transform('Nối hai câu bằng obwohl', 'Die Schule ist privat. Sie ist nicht teuer.', [
            'Obwohl die Schule privat ist, ist sie nicht teuer.',
            'Die Schule ist nicht teuer, obwohl sie privat ist.',
          ]),
          choose('___ der Unterricht ausgefallen ist, sind wir in der Schule geblieben.', ['Obwohl', 'Weil'], 'Obwohl', { vi: 'Mặc dù giờ học bị hủy, chúng tôi vẫn ở lại trường.' }),
          fill('Obwohl er begabt ist, {schreibt} er oft ab. (abschreiben)', 'Mặc dù có năng khiếu, cậu ấy vẫn hay chép bài.'),
          choose('Obwohl sie Prüfungsangst hatte, ___ sie eine Eins.', ['bekam', 'sie bekam'], 'bekam', { vi: 'Mặc dù sợ thi, cô ấy vẫn được điểm 1.' }),
          order('Ich / gehe / zur Schule, / obwohl / ich / krank / bin.', 'Tôi đi học dù đang ốm.'),
        ],
      },
      dialogue: {
        title_de: 'Schule in Vietnam und Deutschland',
        lines: [
          { speaker: 'A', de: 'Wie war die Schule in Vietnam?', vi: 'Trường học ở Việt Nam thế nào?' },
          { speaker: 'B', de: 'Sehr streng. Obwohl der Unterricht um sieben Uhr begann, gingen viele Schüler danach noch zur Nachhilfe.', vi: 'Rất nghiêm. Mặc dù giờ học bắt đầu lúc bảy giờ, sau đó nhiều học sinh vẫn đi học thêm.' },
          { speaker: 'A', de: 'Wirklich? Auch am Abend?', vi: 'Thật à? Cả buổi tối?' },
          { speaker: 'B', de: 'Ja. Meine Eltern bezahlten viel Geld dafür, obwohl wir nicht reich waren.', vi: 'Ừ. Bố mẹ mình trả nhiều tiền cho việc đó, dù nhà không giàu.' },
          { speaker: 'A', de: 'In Deutschland ist Nachhilfe in der Regel freiwillig. Ich war auf einem öffentlichen Gymnasium.', vi: 'Ở Đức học thêm thường là tự nguyện. Mình học ở một trường Gymnasium công lập.' },
          { speaker: 'B', de: 'Und die Noten? Bei uns ist zehn die beste Note.', vi: 'Còn điểm số? Ở chỗ mình mười là điểm cao nhất.' },
          { speaker: 'A', de: 'Bei uns ist eine Eins ausgezeichnet und eine Sechs ungenügend.', vi: 'Ở chỗ mình điểm 1 là xuất sắc, điểm 6 là không đạt.' },
          { speaker: 'B', de: 'Das ist ja genau umgekehrt! Hast du jemals geschwänzt?', vi: 'Ngược hẳn luôn! Bạn có bao giờ trốn học không?' },
          { speaker: 'A', de: 'Nur einmal! Obwohl ich nur eine Stunde gefehlt habe, hat mein Lehrer sofort meine Eltern angerufen.', vi: 'Chỉ một lần! Dù mình chỉ vắng một tiết, thầy đã gọi ngay cho bố mẹ mình.' },
        ],
        gloss: { streng: 'nghiêm khắc', umgekehrt: 'ngược lại', gefehlt: 'vắng mặt (fehlen)', Eins: 'điểm 1', Sechs: 'điểm 6', einmal: 'một lần', dafür: 'cho việc đó' },
        questions: [
          tf('In Vietnam begann der Unterricht um sieben Uhr.', true),
          mc('Ở Việt Nam, sau giờ học nhiều học sinh làm gì?', ['đi học thêm', 'đi làm thêm', 'chơi thể thao'], 'đi học thêm'),
          mc('Ở Đức điểm nào là xuất sắc?', ['1', '6', '10'], '1'),
          tf('A hat nie geschwänzt.', false, { explain: 'Nur einmal!' }),
        ],
        dictation: [1, 6],
      },
      writing_prompt_vi:
        'So sánh trường học ở Việt Nam và Đức (5–6 câu), dùng ít nhất hai câu với obwohl và một câu với weil.',
    },
    {
      title_vi: 'Học đại học',
      goal_vi: 'Nói về việc học đại học; chọn đúng trotzdem/deshalb hay obwohl/weil.',
      items: [
        'Hochschule', 'Studiengang', 'Studiengebühr', 'Stipendium', 'Hörsaal', 'Seminar', 'Referat', 'Hausarbeit', 'Klausur',
        'Professor', 'Dozent', 'Kommilitone', 'Bachelor', 'Master', 'Mitschrift', 'Prüfungsangst', 'sich einschreiben',
        'abschließen', 'beantragen', 'mitschreiben', 'zusammenfassen', 'begründen', 'sich melden', 'anspruchsvoll',
        'theoretisch', 'praktisch orientiert', 'eine Prüfung wiederholen', 'einen Kurs belegen', 'trotzdem hay obwohl?',
      ],
      grammar: {
        point: 'trotzdem-deshalb',
        sections: [
          {
            text_vi:
              'Hai cặp cùng nghĩa, khác vị trí động từ. **weil**, **obwohl** là liên từ phụ → động từ **cuối**. **deshalb**, **trotzdem** là trạng từ → đứng vị trí 1 thì động từ **ngay sau**: Ich habe Prüfungsangst, **deshalb lerne** ich viel. Die Klausur war schwer, **trotzdem habe** ich bestanden.',
            table: 'Ý nghĩa | Liên từ phụ (động từ cuối) | Trạng từ (động từ ngay sau)\nlý do → kết quả | weil es schwer ist | deshalb lerne ich\nngược mong đợi | obwohl es schwer ist | trotzdem lerne ich',
            examples: [
              ['Das Seminar ist anspruchsvoll, deshalb bereite ich mich gut vor.', 'Seminar khó, vì thế tôi chuẩn bị kỹ.'],
              ['Ich war krank, trotzdem habe ich das Referat gehalten.', 'Tôi bị ốm, dù vậy tôi vẫn thuyết trình.'],
            ],
            exercises: [
              choose('Die Klausur war schwer. ___ habe ich bestanden.', ['Trotzdem', 'Obwohl', 'Deshalb'], 'Trotzdem', { vi: 'Bài thi khó. Dù vậy tôi vẫn đỗ.' }),
              choose('Ich will im Ausland studieren, ___ beantrage ich ein Stipendium.', ['deshalb', 'trotzdem', 'weil'], 'deshalb', { vi: 'Tôi muốn du học, vì thế tôi xin học bổng.' }),
              fill('Er war krank, {trotzdem} ist er zum Seminar gekommen.', 'Anh ấy ốm, dù vậy vẫn đến seminar.'),
            ],
          },
          {
            text_vi:
              'Đổi qua lại: Obwohl ich müde **bin**, **lerne** ich. = Ich bin müde, **trotzdem lerne** ich. Weil das Seminar **ausfällt**, **gehe** ich nach Hause. = Das Seminar fällt aus, **deshalb gehe** ich nach Hause. trotzdem, deshalb cũng có thể đứng **sau động từ**: Ich lerne **trotzdem**.',
            examples: [['Er hat die Klausur nicht bestanden, deshalb muss er sie wiederholen.', 'Anh ấy trượt bài thi, vì thế phải thi lại.']],
            exercises: [
              transform('Viết lại với trotzdem', 'Obwohl die Studiengebühr hoch ist, studiert sie dort.', ['Die Studiengebühr ist hoch, trotzdem studiert sie dort.']),
              transform('Viết lại với deshalb', 'Weil der Professor krank ist, fällt die Vorlesung aus.', ['Der Professor ist krank, deshalb fällt die Vorlesung aus.']),
              order('Ich / habe / Prüfungsangst, / deshalb / lerne / ich / jeden Tag.', 'Tôi sợ thi, vì thế ngày nào tôi cũng học.'),
            ],
          },
          {
            text_vi:
              'Đại học: **sich einschreiben** (ghi danh) vào một **Studiengang**, nghe giảng ở **Hörsaal**, làm **Referat** (thuyết trình) trong **Seminar**, viết **Hausarbeit**, thi **Klausur**. **einen Kurs belegen** = đăng ký một môn. Thi trượt thì **die Prüfung wiederholen**.',
            examples: [['Im ersten Semester habe ich fünf Kurse belegt.', 'Học kỳ đầu tôi đăng ký năm môn.']],
            exercises: [
              fill('Ich habe mich für Informatik {eingeschrieben}.', 'Tôi đã ghi danh ngành tin học.'),
              translate('Tôi phải thuyết trình trong seminar.', ['Ich muss im Seminar ein Referat halten.', 'Ich muss ein Referat im Seminar halten.']),
            ],
          },
        ],
        mixed: [
          choose('Sie hat viel gelernt. ___ hat sie eine gute Note bekommen.', ['Deshalb', 'Trotzdem', 'Obwohl'], 'Deshalb', { vi: 'Cô ấy học nhiều. Vì thế được điểm tốt.' }),
          choose('Er hat kaum gelernt. ___ hat er bestanden.', ['Trotzdem', 'Deshalb', 'Weil'], 'Trotzdem', { vi: 'Anh ấy hầu như không học. Dù vậy vẫn đỗ.' }),
          choose('Ich schreibe alles mit, ___ der Dozent sehr schnell spricht.', ['weil', 'deshalb'], 'weil', { vi: 'Tôi ghi chép hết vì giảng viên nói rất nhanh.' }),
          transform('Viết lại với trotzdem', 'Obwohl das Studium theoretisch ist, gefällt es mir.', ['Das Studium ist theoretisch, trotzdem gefällt es mir.']),
          fill('Der Kurs ist praktisch orientiert, {deshalb} habe ich ihn belegt.', 'Khóa học thiên về thực hành, vì thế tôi đăng ký.'),
        ],
      },
      dialogue: {
        title_de: 'Das erste Semester',
        lines: [
          { speaker: 'A', de: 'Na, wie ist dein erstes Semester?', vi: 'Sao, học kỳ đầu thế nào?' },
          { speaker: 'B', de: 'Ganz schön anspruchsvoll! Die Vorlesungen sind sehr theoretisch, deshalb verstehe ich nicht alles.', vi: 'Khá là khó! Bài giảng rất lý thuyết, vì thế mình không hiểu hết.' },
          { speaker: 'A', de: 'Gehst du trotzdem in jede Vorlesung?', vi: 'Dù vậy bạn vẫn đi nghe mọi buổi giảng à?' },
          { speaker: 'B', de: 'Ja, und ich schreibe alles mit. Meine Mitschrift ist super, trotzdem habe ich Prüfungsangst.', vi: 'Ừ, và mình ghi chép hết. Vở ghi của mình rất tốt, dù vậy mình vẫn sợ thi.' },
          { speaker: 'A', de: 'Wann ist die erste Klausur?', vi: 'Khi nào thi bài đầu tiên?' },
          { speaker: 'B', de: 'In zwei Wochen. Außerdem muss ich nächste Woche ein Referat halten.', vi: 'Hai tuần nữa. Ngoài ra tuần sau mình phải thuyết trình.' },
          { speaker: 'A', de: 'Hast du schon ein Stipendium beantragt?', vi: 'Bạn đã xin học bổng chưa?' },
          { speaker: 'B', de: 'Ja, die Studiengebühren sind hoch, deshalb brauche ich Unterstützung.', vi: 'Rồi, học phí cao, vì thế mình cần hỗ trợ.' },
          { speaker: 'A', de: 'Viel Glück! Melde dich, wenn du Hilfe brauchst.', vi: 'Chúc may mắn! Cần giúp thì liên lạc mình nhé.' },
        ],
        gloss: { na: 'sao, thế nào', Semester: 'học kỳ', 'ganz schön': 'khá là', Vorlesungen: 'bài giảng', außerdem: 'ngoài ra', Unterstützung: 'sự hỗ trợ' },
        questions: [
          mc('Vì sao B không hiểu hết?', ['bài giảng rất lý thuyết', 'giảng viên nói tiếng Anh', 'B hay vắng mặt'], 'bài giảng rất lý thuyết'),
          tf('B geht nicht mehr in die Vorlesungen.', false, { explain: 'Ja, ich gehe in jede Vorlesung und schreibe alles mit.' }),
          mc('Tuần sau B phải làm gì?', ['thuyết trình', 'thi', 'viết tiểu luận'], 'thuyết trình'),
          tf('B hat ein Stipendium beantragt.', true),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Kể về việc học của bạn (ở trường hoặc đại học), 5–6 câu, dùng ít nhất một câu trotzdem và một câu deshalb.',
    },
    {
      title_vi: 'Phương pháp học',
      goal_vi: 'Nói về cách học hiệu quả; dùng nicht nur … sondern auch, sondern và aber.',
      items: [
        'Weiterbildung', 'Lernmethode', 'Lernerfolg', 'Lernziel', 'Lerngruppe', 'Fernstudium', 'Motivation', 'Interesse',
        'auswendig lernen', 'sich verbessern', 'sich beschäftigen', 'nachdenken', 'vermitteln', 'sich anstrengen', 'motiviert',
        'gründlich', 'wissbegierig', 'zweisprachig', 'sondern', 'nicht nur … sondern auch', 'sich Mühe geben',
        'Fortschritte machen', 'auf dem Laufenden bleiben', 'Liên từ hai vế: nicht nur … sondern auch',
        'Danh từ hóa động từ: das + Infinitiv',
      ],
      grammar: {
        point: 'nicht-nur',
        sections: [
          {
            text_vi:
              '**nicht nur … sondern auch** = không chỉ … mà còn. Hai vế **cùng loại** (hai danh từ, hai tính từ, hai động từ): Sie spricht **nicht nur** Deutsch, **sondern auch** Englisch. Er ist **nicht nur** begabt, **sondern auch** fleißig. Trước sondern có **dấu phẩy**.',
            examples: [
              ['Das Fernstudium ist nicht nur flexibel, sondern auch günstig.', 'Học từ xa không chỉ linh hoạt mà còn rẻ.'],
              ['Ich lerne nicht nur Wörter, sondern auch Grammatik.', 'Tôi không chỉ học từ mà còn học ngữ pháp.'],
            ],
            exercises: [
              fill('Sie lernt nicht nur Deutsch, {sondern} auch Japanisch.', 'Cô ấy không chỉ học tiếng Đức mà còn học tiếng Nhật.'),
              choose('Er ist nicht nur klug, ___ auch fleißig.', ['sondern', 'aber', 'und'], 'sondern', { vi: 'Anh ấy không chỉ thông minh mà còn chăm chỉ.' }),
              order('Ich / lese / nicht nur / Bücher, / sondern auch / Zeitungen.', 'Tôi không chỉ đọc sách mà còn đọc báo.'),
            ],
          },
          {
            text_vi:
              '**sondern** sửa lại sau một **phủ định**: không phải A **mà là** B: Das ist kein Seminar, **sondern** eine Vorlesung. **aber** = nhưng, thêm ý trái ngược: Der Kurs ist schwer, **aber** interessant. Danh từ hóa động từ: **das Lernen**, **das Lesen** (viết hoa, giống trung).',
            examples: [['Ich lerne nicht am Abend, sondern am Morgen.', 'Tôi không học buổi tối mà học buổi sáng.']],
            exercises: [
              choose('Ich lerne nicht Französisch, ___ Spanisch.', ['sondern', 'aber'], 'sondern', { vi: 'Tôi không học tiếng Pháp mà học tiếng Tây Ban Nha.' }),
              choose('Der Kurs ist teuer, ___ sehr gut.', ['aber', 'sondern'], 'aber', { vi: 'Khóa học đắt nhưng rất tốt.' }),
              fill('Das {Lernen} in der Gruppe macht mir Spaß. (lernen)', 'Tôi thích việc học theo nhóm.'),
            ],
          },
          {
            text_vi:
              'Học hiệu quả: **auswendig lernen** (học thuộc lòng), **Fortschritte machen** (tiến bộ), **sich Mühe geben** (cố gắng), **sich anstrengen** (nỗ lực), **auf dem Laufenden bleiben** (luôn cập nhật). Một **Lernziel** (mục tiêu) rõ ràng giúp giữ **Motivation**.',
            examples: [['Mit einem klaren Lernziel macht man schneller Fortschritte.', 'Có mục tiêu rõ ràng thì tiến bộ nhanh hơn.']],
            exercises: [
              fill('Du hast große {Fortschritte} gemacht!', 'Bạn đã tiến bộ rất nhiều!'),
              translate('Tôi cố gắng mỗi ngày.', ['Ich gebe mir jeden Tag Mühe.', 'Ich strenge mich jeden Tag an.', 'Jeden Tag gebe ich mir Mühe.']),
            ],
          },
        ],
        mixed: [
          transform('Nối bằng nicht nur … sondern auch', 'Sie spricht Englisch. Sie spricht auch Chinesisch.', ['Sie spricht nicht nur Englisch, sondern auch Chinesisch.']),
          choose('Das ist nicht mein Buch, ___ deins.', ['sondern', 'aber'], 'sondern', { vi: 'Đây không phải sách của tôi mà là của bạn.' }),
          fill('Er ist nicht nur motiviert, sondern {auch} sehr wissbegierig.', 'Anh ấy không chỉ có động lực mà còn rất ham học.'),
          choose('Die Prüfung war schwer, ___ ich habe bestanden.', ['aber', 'sondern'], 'aber', { vi: 'Bài thi khó nhưng tôi đã đỗ.' }),
          order('In der Lerngruppe / lerne / ich / nicht nur / Grammatik, / sondern auch / Wortschatz.', 'Trong nhóm học, tôi không chỉ học ngữ pháp mà còn học từ vựng.'),
        ],
      },
      dialogue: {
        title_de: 'Wie lernst du am besten?',
        lines: [
          { speaker: 'A', de: 'Du sprichst so gut Deutsch! Wie lernst du?', vi: 'Bạn nói tiếng Đức giỏi quá! Bạn học thế nào?' },
          { speaker: 'B', de: 'Ich lerne nicht nur mit Büchern, sondern auch mit Filmen und Podcasts.', vi: 'Mình không chỉ học bằng sách mà còn bằng phim và podcast.' },
          { speaker: 'A', de: 'Lernst du die Wörter auswendig?', vi: 'Bạn có học thuộc từ không?' },
          { speaker: 'B', de: 'Ja, jeden Tag zehn Minuten. Das Lernen mit Karten hilft mir sehr.', vi: 'Có, mỗi ngày mười phút. Học bằng thẻ giúp mình rất nhiều.' },
          { speaker: 'A', de: 'Ich mache leider kaum Fortschritte.', vi: 'Tiếc là mình hầu như không tiến bộ.' },
          { speaker: 'B', de: 'Hast du ein klares Lernziel? Das ist nicht nur wichtig für die Motivation, sondern auch für den Erfolg.', vi: 'Bạn có mục tiêu rõ ràng không? Điều đó không chỉ quan trọng cho động lực mà còn cho thành công.' },
          { speaker: 'A', de: 'Nein, ich lerne einfach, wenn ich Zeit habe.', vi: 'Không, mình cứ học khi có thời gian.' },
          { speaker: 'B', de: 'Komm doch in unsere Lerngruppe! Wir treffen uns nicht am Montag, sondern am Donnerstag.', vi: 'Vào nhóm học của bọn mình đi! Bọn mình gặp nhau không phải thứ Hai mà là thứ Năm.' },
          { speaker: 'A', de: 'Gern! Ich gebe mir Mühe.', vi: 'Được! Mình sẽ cố gắng.' },
        ],
        gloss: { Podcasts: 'podcast', Karten: 'thẻ (học từ)', klares: 'rõ ràng', 'treffen uns': 'gặp nhau', Filmen: 'phim (Dativ số nhiều)' },
        questions: [
          mc('B học tiếng Đức bằng gì?', ['sách, phim và podcast', 'chỉ bằng sách', 'chỉ với giáo viên'], 'sách, phim và podcast'),
          tf('B lernt jeden Tag zehn Minuten Wörter.', true),
          tf('A hat ein klares Lernziel.', false, { explain: 'Nein, ich lerne einfach, wenn ich Zeit habe.' }),
          mc('Nhóm học gặp nhau ngày nào?', ['thứ Năm', 'thứ Hai', 'Chủ nhật'], 'thứ Năm'),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Mô tả cách bạn học tiếng Đức (5–6 câu), dùng ít nhất hai câu nicht nur … sondern auch và một câu với sondern sau phủ định.',
    },
  ],
  test: {
    grammar: {
      obwohl: [
        fill('{Obwohl} es regnet, gehen wir spazieren.', 'Mặc dù trời mưa, chúng tôi vẫn đi dạo.'),
        choose('Obwohl er krank ist, ___ er zur Arbeit.', ['geht', 'er geht'], 'geht'),
        choose('Sie lernt viel, obwohl sie wenig Zeit ___.', ['hat', 'haben', 'hatte hat'], 'hat'),
        order('Obwohl / der Kurs / teuer / ist, / mache / ich / ihn.', 'Dù khóa học đắt, tôi vẫn học.'),
        choose('Er kommt, ___ er keine Lust hat.', ['obwohl', 'weil'], 'obwohl'),
        fill('Obwohl sie müde war, {hat} sie gelernt.', 'Dù mệt, cô ấy vẫn học.'),
      ],
      'trotzdem-deshalb': [
        choose('Es regnet. ___ gehen wir spazieren.', ['Trotzdem', 'Deshalb'], 'Trotzdem'),
        choose('Ich bin krank. ___ bleibe ich zu Hause.', ['Deshalb', 'Trotzdem'], 'Deshalb'),
        fill('Die Prüfung war schwer, trotzdem {habe} ich bestanden.', 'Bài thi khó, dù vậy tôi vẫn đỗ.'),
        order('Ich / habe / kein Geld, / deshalb / arbeite / ich.', 'Tôi không có tiền, vì thế tôi đi làm.'),
        choose('Er hat viel gelernt, ___ hat er bestanden.', ['deshalb', 'trotzdem'], 'deshalb'),
        choose('Sie ist müde, trotzdem ___.', ['lernt sie', 'sie lernt'], 'lernt sie'),
      ],
      'nicht-nur': [
        fill('Er spricht nicht nur Deutsch, {sondern} auch Englisch.', 'Anh ấy không chỉ nói tiếng Đức mà còn nói tiếng Anh.'),
        choose('Das ist nicht Tee, ___ Kaffee.', ['sondern', 'aber'], 'sondern'),
        choose('Das Essen ist billig, ___ gut.', ['aber', 'sondern'], 'aber'),
        order('Sie / ist / nicht nur / klug, / sondern auch / nett.', 'Cô ấy không chỉ thông minh mà còn tốt bụng.'),
        fill('Ich lerne nicht nur Wörter, sondern {auch} Grammatik.', 'Tôi không chỉ học từ mà còn học ngữ pháp.'),
        choose('Wir fahren nicht nach Berlin, ___ nach Hamburg.', ['sondern', 'aber'], 'sondern'),
      ],
    },
    reading: {
      title_de: 'Mit 50 noch einmal lernen',
      text_de:
        'Herr Becker ist 52 Jahre alt und arbeitet seit 30 Jahren als Mechaniker. Vor einem Jahr hat er ein Fernstudium in Informatik begonnen. Obwohl er tagsüber arbeitet, lernt er jeden Abend zwei Stunden. Am Anfang war es schwer, denn vieles war sehr theoretisch. Trotzdem hat er nicht aufgegeben. Er sagt: „Das Lernen hält mich jung. Ich lerne nicht nur Neues über Computer, sondern auch viel über mich selbst.“ Einmal pro Monat trifft er seine Lerngruppe. Seine Kinder sind stolz auf ihn, deshalb hilft ihm sein Sohn manchmal bei den Hausaufgaben.',
      gloss: {
        Mechaniker: 'thợ cơ khí',
        tagsüber: 'ban ngày',
        denn: 'vì',
        hält: 'giữ (halten)',
        'Neues': 'điều mới',
        selbst: 'chính (mình)',
        trifft: 'gặp (treffen)',
      },
      questions: [
        mc('Ông Becker học ngành gì?', ['tin học', 'cơ khí', 'tiếng Đức'], 'tin học'),
        tf('Herr Becker lernt am Wochenende, weil er abends arbeitet.', false, { explain: 'Obwohl er tagsüber arbeitet, lernt er jeden Abend.' }),
        tf('Am Anfang war das Studium schwer.', true),
        mc('Ai đôi khi giúp ông làm bài tập?', ['con trai ông', 'vợ ông', 'nhóm học'], 'con trai ông'),
      ],
    },
  },
});
