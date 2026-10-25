// B2 · 03 Đại học và nghiên cứu — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b2-03',
  points: [
    {
      key: 'nominalstil',
      rule_key: 'nominalstil-verb-zu-nomen',
      category: 'word_choice',
      title_vi: 'Danh từ hóa (Nominalstil)',
      explanation_vi: 'Văn viết học thuật biến câu phụ thành cụm giới từ + danh từ: Nachdem man die Daten ausgewertet hatte → Nach der Auswertung der Daten. Tân ngữ của động từ thành Genitiv sau danh từ.',
    },
    {
      key: 'genitiv-schrift',
      rule_key: 'genitiv-praep-innerhalb-anhand',
      category: 'case',
      title_vi: 'Giới từ Genitiv trong văn viết: innerhalb, außerhalb, anhand',
      explanation_vi: 'innerhalb, außerhalb, anhand, mithilfe, bezüglich, hinsichtlich đi với Genitiv: innerhalb des Semesters, anhand eines Beispiels. Văn nói đôi khi dùng von + Dativ, văn viết thì không.',
    },
    {
      key: 'indem-sodass',
      rule_key: 'indem-sodass-nebensatz',
      category: 'verb_position',
      title_vi: 'Liên từ indem (bằng cách) và sodass (đến mức)',
      explanation_vi: 'indem nêu cách làm, sodass nêu kết quả; cả hai mở câu phụ, động từ chia đứng cuối: Man lernt, indem man übt. Es regnete stark, sodass der Kurs ausfiel. so + tính từ …, dass … nhấn mạnh mức độ.',
    },
  ],
  lessons: [
    {
      title_vi: 'Nghiên cứu và viết bài',
      goal_vi: 'Mô tả một nghiên cứu (câu hỏi, phương pháp, kết quả) bằng văn phong danh từ hóa.',
      items: [
        'Abschlussarbeit', 'Doktorarbeit', 'Betreuer', 'Literaturverzeichnis', 'Zitat', 'Fragestellung', 'Hypothese', 'Methode',
        'Erkenntnis', 'Wissenschaft', 'zitieren', 'recherchieren', 'auswerten', 'analysieren', 'belegen', 'widerlegen',
        'empirisch', 'aussagekräftig', 'repräsentativ', 'eine Arbeit schreiben', 'zu dem Ergebnis kommen',
        'Danh từ hóa (Nominalstil)', 'Forschungsprojekt', 'Fachliteratur', 'Quellenangabe', 'Plagiat', 'exzerpieren',
        'wissenschaftlich fundiert', 'eine These aufstellen', 'Bezug nehmen auf', 'Forschungsfrage',
        'wissenschaftlich anerkannt',
      ],
      grammar: {
        point: 'nominalstil',
        sections: [
          {
            text_vi:
              'Văn nói dùng **động từ** (Verbalstil), văn viết học thuật thích **danh từ** (Nominalstil). Nhiều động từ có danh từ tương ứng: auswerten → **die Auswertung**, analysieren → **die Analyse**, untersuchen → **die Untersuchung**, beginnen → **der Beginn**. Danh từ đuôi **-ung** luôn là giống cái (die).',
            table: 'Động từ | Danh từ\nauswerten | die Auswertung\nanalysieren | die Analyse\nuntersuchen | die Untersuchung\nrecherchieren | die Recherche\nveröffentlichen | die Veröffentlichung',
            examples: [
              ['Die Auswertung der Daten dauerte drei Monate.', 'Việc phân tích dữ liệu kéo dài ba tháng.'],
              ['Die Untersuchung zeigt einen klaren Zusammenhang.', 'Nghiên cứu cho thấy một mối liên hệ rõ ràng.'],
            ],
            exercises: [
              fill('Die {Auswertung} der Fragebögen war sehr zeitaufwendig. (auswerten)', 'Việc phân tích các bảng hỏi rất tốn thời gian.'),
              choose('Die ___ der Ergebnisse erfolgt im nächsten Jahr. (veröffentlichen)', ['Veröffentlichung', 'Veröffentlichen', 'Veröffentlicht'], 'Veröffentlichung', { vi: 'Việc công bố kết quả diễn ra vào năm sau.' }),
              choose('Für die Arbeit ist eine gründliche ___ nötig. (recherchieren)', ['Recherche', 'Recherchierung', 'Recherchieren'], 'Recherche', { vi: 'Cho bài viết cần tra cứu kỹ lưỡng.' }),
            ],
          },
          {
            text_vi:
              'Biến **câu phụ** thành **giới từ + danh từ**: **Nachdem** man die Daten ausgewertet hatte → **Nach der Auswertung** der Daten. **Bevor** man schreibt → **Vor dem Schreiben**. **Während** man forscht → **Während der Forschung**. **Weil** … → **Wegen** … Tân ngữ của động từ thành **Genitiv** đứng sau danh từ: die Daten auswerten → die Auswertung **der Daten**.',
            table: 'Câu phụ | Cụm danh từ\nnachdem … | nach + Dat\nbevor … | vor + Dat\nwährend … | während + Gen\nweil … | wegen + Gen\nwenn/falls … | bei + Dat',
            examples: [
              ['Nach der Analyse der Interviews formulierte sie eine Hypothese.', 'Sau khi phân tích các cuộc phỏng vấn, cô ấy đưa ra một giả thuyết.'],
              ['Vor der Abgabe sollte man die Arbeit überarbeiten.', 'Trước khi nộp nên chỉnh sửa lại bài.'],
            ],
            exercises: [
              choose('___ Auswertung der Daten schrieb er das Fazit.', ['Nach der', 'Nachdem', 'Nach die'], 'Nach der', { vi: 'Sau khi phân tích dữ liệu, anh ấy viết phần kết luận.' }),
              transform('Viết lại bằng Nominalstil (vor + danh từ)', 'Bevor man die Arbeit abgibt, sollte man sie korrigieren.', [
                'Vor der Abgabe der Arbeit sollte man sie korrigieren.',
                'Vor der Abgabe sollte man die Arbeit korrigieren.',
              ]),
              fill('Bei der Analyse {der} Interviews fiel uns etwas auf.', 'Khi phân tích các cuộc phỏng vấn chúng tôi nhận thấy một điều.'),
            ],
          },
          {
            text_vi:
              'Mẫu câu bài nghiên cứu: **eine These aufstellen** (đưa ra luận điểm), **Bezug nehmen auf** (dẫn chiếu), **zu dem Ergebnis kommen, dass** (đi đến kết quả). Mọi **Zitat** cần **Quellenangabe**, nếu không là **Plagiat** (đạo văn).',
            examples: [['Die Autorin kommt zu dem Ergebnis, dass die These widerlegt ist.', 'Tác giả đi đến kết quả rằng luận điểm đã bị bác bỏ.']],
            exercises: [
              fill('Die Forscher kamen zu dem {Ergebnis}, dass Schlaf das Lernen verbessert.', 'Các nhà nghiên cứu đi đến kết quả rằng giấc ngủ cải thiện việc học.'),
              translate('Mỗi trích dẫn cần ghi nguồn.', ['Jedes Zitat braucht eine Quellenangabe.', 'Jedes Zitat benötigt eine Quellenangabe.']),
            ],
          },
        ],
        mixed: [
          transform('Viết lại bằng Nominalstil (nach + danh từ)', 'Nachdem wir die Ergebnisse analysiert hatten, schrieben wir den Bericht.', [
            'Nach der Analyse der Ergebnisse schrieben wir den Bericht.',
          ]),
          choose('Während ___ Studiums hat sie zwei Praktika gemacht.', ['des', 'dem', 'der'], 'des', { vi: 'Trong thời gian học đại học cô ấy đã làm hai đợt thực tập.' }),
          fill('Die {Untersuchung} zeigt, dass viele Studierende gestresst sind. (untersuchen)', 'Nghiên cứu cho thấy nhiều sinh viên bị căng thẳng.'),
          choose('Wegen ___ Fehlers in der Methode musste die Studie wiederholt werden.', ['eines', 'einem', 'einen'], 'eines', { vi: 'Vì một lỗi trong phương pháp, nghiên cứu phải làm lại.' }),
          order('Die Autorin / nimmt / Bezug / auf / eine ältere Studie.', 'Tác giả dẫn chiếu tới một nghiên cứu cũ hơn.'),
        ],
      },
      dialogue: {
        title_de: 'In der Sprechstunde',
        lines: [
          { speaker: 'A', de: 'Guten Tag, Herr Professor. Ich möchte mit Ihnen über meine Abschlussarbeit sprechen.', vi: 'Chào giáo sư. Em muốn trao đổi với thầy về luận văn tốt nghiệp.' },
          { speaker: 'B', de: 'Gern. Wie lautet denn Ihre Forschungsfrage?', vi: 'Được. Câu hỏi nghiên cứu của em là gì?' },
          { speaker: 'A', de: 'Ich untersuche, wie Social Media das Lernverhalten von Studierenden beeinflusst.', vi: 'Em nghiên cứu mạng xã hội ảnh hưởng thế nào đến cách học của sinh viên.' },
          { speaker: 'B', de: 'Interessant. Welche Methode wollen Sie verwenden?', vi: 'Thú vị đấy. Em định dùng phương pháp nào?' },
          { speaker: 'A', de: 'Eine empirische Umfrage. Nach der Auswertung der Daten möchte ich Interviews führen.', vi: 'Một khảo sát thực nghiệm. Sau khi phân tích dữ liệu em muốn phỏng vấn thêm.' },
          { speaker: 'B', de: 'Achten Sie darauf, dass die Umfrage repräsentativ ist. Sonst sind die Ergebnisse nicht aussagekräftig.', vi: 'Em chú ý để khảo sát mang tính đại diện. Nếu không kết quả sẽ không có sức thuyết phục.' },
          { speaker: 'A', de: 'Und wie viel Fachliteratur brauche ich?', vi: 'Thế em cần bao nhiêu tài liệu chuyên ngành ạ?' },
          { speaker: 'B', de: 'Recherchieren Sie gründlich und zitieren Sie korrekt. Jedes Zitat braucht eine Quellenangabe.', vi: 'Em hãy tra cứu kỹ và trích dẫn đúng. Mỗi trích dẫn cần ghi nguồn.' },
          { speaker: 'A', de: 'Natürlich. Ein Plagiat wäre das Ende meines Studiums.', vi: 'Tất nhiên. Đạo văn thì coi như hết đường học.' },
          { speaker: 'B', de: 'Genau. Schicken Sie mir vor der Abgabe die Gliederung, dann bespreche ich sie mit Ihnen.', vi: 'Đúng vậy. Trước khi nộp em gửi thầy dàn ý, rồi thầy sẽ góp ý với em.' },
        ],
        gloss: { lautet: 'là, có nội dung (lauten)', 'Social Media': 'mạng xã hội', Lernverhalten: 'cách học, hành vi học tập', beeinflusst: 'ảnh hưởng (beeinflussen)', gründlich: 'kỹ lưỡng', Gliederung: 'dàn ý', 'achten Sie darauf': 'hãy chú ý' },
        questions: [
          mc('Sinh viên nghiên cứu đề tài gì?', ['ảnh hưởng của mạng xã hội đến cách học', 'nhà ở sinh viên', 'học phí đại học'], 'ảnh hưởng của mạng xã hội đến cách học'),
          mc('Sinh viên định dùng phương pháp nào trước?', ['khảo sát thực nghiệm', 'chỉ đọc tài liệu', 'thí nghiệm trong phòng lab'], 'khảo sát thực nghiệm'),
          tf('Der Professor sagt, dass Zitate keine Quellenangabe brauchen.', false, { explain: 'Jedes Zitat braucht eine Quellenangabe.' }),
          tf('Vor der Abgabe soll die Studentin die Gliederung schicken.', true),
        ],
        dictation: [4, 7],
      },
      writing_prompt_vi:
        'Mô tả ngắn một nghiên cứu bạn muốn làm (5–7 câu): câu hỏi nghiên cứu, phương pháp, kết quả mong đợi; dùng ít nhất ba cụm danh từ hóa như nach der Auswertung, bei der Analyse, vor der Abgabe.',
    },
    {
      title_vi: 'Học ở đại học',
      goal_vi: 'Nói về thủ tục nhập học, môn học và đời sống sinh viên; dùng đúng innerhalb, außerhalb, anhand + Genitiv.',
      items: [
        'Hochschulzugang', 'Studienplatz', 'Zulassung', 'Immatrikulation', 'Studienkolleg', 'Fakultät', 'Lehrstuhl',
        'Fachgebiet', 'Fachbegriff', 'Prüfungsordnung', 'Leistungspunkt', 'Auslandssemester', 'Mensa', 'Wohnheim', 'Nebenjob',
        'betreuen', 'promovieren', 'sich exmatrikulieren', 'akademisch', 'interdisziplinär', 'zulassungsbeschränkt',
        'Giới từ Genitiv trong văn viết', 'Studienordnung', 'Studienberatung', 'Pflichtfach', 'Wahlfach', 'Modul', 'Tutorium',
        'Sprechzeit', 'Erstsemester', 'Hochschulabschluss', 'zugelassen werden', 'ein Studium aufnehmen', 'Promotion',
        'Habilitation',
      ],
      grammar: {
        point: 'genitiv-schrift',
        sections: [
          {
            text_vi:
              'Văn bản đại học (quy chế, email, thông báo) hay dùng giới từ đi với **Genitiv**: **innerhalb** (trong vòng, bên trong), **außerhalb** (bên ngoài, ngoài), **anhand** (dựa vào), **bezüglich / hinsichtlich** (liên quan đến). Genitiv: **des/eines** + danh từ -(e)s (giống đực, trung), **der/einer** (giống cái, số nhiều).',
            table: 'Giới từ | Nghĩa | Ví dụ\ninnerhalb | trong vòng, bên trong | innerhalb einer Woche\naußerhalb | bên ngoài | außerhalb der Sprechzeiten\nanhand | dựa vào | anhand eines Beispiels\nbezüglich | liên quan đến | bezüglich Ihrer Bewerbung',
            examples: [
              ['Die Hausarbeit muss innerhalb des Semesters abgegeben werden.', 'Bài tiểu luận phải nộp trong học kỳ.'],
              ['Anhand eines Beispiels erklärt die Dozentin die Methode.', 'Giảng viên giải thích phương pháp dựa vào một ví dụ.'],
            ],
            exercises: [
              choose('Bitte melden Sie sich innerhalb ___ Woche an.', ['einer', 'einem', 'eine'], 'einer', { vi: 'Vui lòng đăng ký trong vòng một tuần.' }),
              fill('Außerhalb {der} Sprechzeiten ist das Büro geschlossen.', 'Ngoài giờ tiếp sinh viên văn phòng đóng cửa.'),
              choose('Anhand ___ Grafik erklärt er die Ergebnisse.', ['einer', 'eine', 'einem'], 'einer', { vi: 'Anh ấy giải thích kết quả dựa vào một biểu đồ.' }),
            ],
          },
          {
            text_vi:
              'Danh từ giống đực và trung ở Genitiv thêm **-s** hoặc **-es**: innerhalb **des Semesters**, anhand **des Textes**, außerhalb **des Landes**. Một số từ mượn không thêm -s: außerhalb **des Campus**. Văn nói hay dùng "innerhalb **von** zwei Wochen" (+ Dativ), nhất là khi không có mạo từ; trong văn viết nên dùng Genitiv khi có mạo từ. **bezüglich** thường đứng đầu thư: **Bezüglich** Ihrer Anfrage …',
            examples: [['Bezüglich Ihrer Zulassung haben wir noch eine Frage.', 'Liên quan đến giấy nhập học của bạn, chúng tôi còn một câu hỏi.']],
            exercises: [
              fill('Das Wohnheim liegt außerhalb {des} Campus.', 'Ký túc xá nằm ngoài khuôn viên trường.'),
              choose('Anhand des ___ zeigt die Dozentin die wichtigsten Begriffe.', ['Textes', 'Text', 'Texte'], 'Textes', { vi: 'Giảng viên chỉ ra các thuật ngữ quan trọng nhất dựa vào văn bản.' }),
              translate('Bạn phải nộp đơn trong vòng hai tuần.', ['Sie müssen den Antrag innerhalb von zwei Wochen stellen.', 'Du musst den Antrag innerhalb von zwei Wochen stellen.', 'Sie müssen den Antrag innerhalb von zwei Wochen einreichen.']),
            ],
          },
        ],
        mixed: [
          choose('Innerhalb ___ ersten Semesters muss man zwei Pflichtfächer belegen.', ['des', 'dem', 'den'], 'des', { vi: 'Trong học kỳ đầu phải đăng ký hai môn bắt buộc.' }),
          fill('Bezüglich {Ihrer} Bewerbung melden wir uns nächste Woche.', 'Liên quan đến hồ sơ của bạn, chúng tôi sẽ liên lạc tuần sau.'),
          choose('Die Mensa ist auch außerhalb ___ Vorlesungszeit geöffnet.', ['der', 'die', 'den'], 'der', { vi: 'Nhà ăn mở cả ngoài thời gian học.' }),
          order('Anhand / eines Beispiels / erklärt / der Tutor / die Aufgabe.', 'Người phụ đạo giải thích bài tập dựa vào một ví dụ.'),
          fill('Innerhalb {eines} Jahres hat sie Deutsch gelernt.', 'Trong vòng một năm cô ấy đã học tiếng Đức.'),
        ],
      },
      dialogue: {
        title_de: 'Bei der Studienberatung',
        lines: [
          { speaker: 'A', de: 'Hallo, ich bin Erstsemester und habe noch viele Fragen zum Studium.', vi: 'Chào chị, em là sinh viên năm nhất và còn nhiều câu hỏi về việc học.' },
          { speaker: 'B', de: 'Dafür sind wir da. Haben Sie die Immatrikulation schon erledigt?', vi: 'Chúng tôi ở đây là để giúp. Em đã làm thủ tục nhập học chưa?' },
          { speaker: 'A', de: 'Ja, ich habe die Zulassung bekommen. Aber ich verstehe die Studienordnung nicht ganz.', vi: 'Rồi ạ, em đã nhận giấy nhập học. Nhưng em chưa hiểu hết quy chế đào tạo.' },
          { speaker: 'B', de: 'Das geht vielen so. Innerhalb des ersten Jahres belegen Sie vor allem Pflichtfächer.', vi: 'Nhiều người cũng vậy. Trong năm đầu em chủ yếu học các môn bắt buộc.' },
          { speaker: 'A', de: 'Und wann kann ich Wahlfächer wählen?', vi: 'Thế khi nào em được chọn môn tự chọn?' },
          { speaker: 'B', de: 'Ab dem dritten Semester. Für jedes Modul bekommen Sie Leistungspunkte.', vi: 'Từ học kỳ ba. Mỗi học phần em sẽ được tín chỉ.' },
          { speaker: 'A', de: 'Ich möchte später ein Auslandssemester machen. Ist das möglich?', vi: 'Sau này em muốn đi học một kỳ ở nước ngoài. Có được không ạ?' },
          { speaker: 'B', de: 'Natürlich. Am besten fragen Sie innerhalb der nächsten Monate im International Office.', vi: 'Tất nhiên. Tốt nhất em hỏi văn phòng quốc tế trong mấy tháng tới.' },
          { speaker: 'A', de: 'Danke. Und wo finde ich ein günstiges Zimmer?', vi: 'Cảm ơn chị. Thế em tìm phòng rẻ ở đâu ạ?' },
          { speaker: 'B', de: 'Im Wohnheim. Es liegt zwar außerhalb des Zentrums, aber direkt neben der Mensa.', vi: 'Ở ký túc xá. Nó tuy nằm ngoài trung tâm nhưng ngay cạnh nhà ăn.' },
        ],
        gloss: { 'vor allem': 'chủ yếu', 'International Office': 'văn phòng quốc tế', günstiges: 'rẻ', Zentrums: 'trung tâm (Zentrum)' },
        questions: [
          tf('A hat die Zulassung noch nicht bekommen.', false, { explain: 'Ja, ich habe die Zulassung bekommen.' }),
          mc('Năm đầu sinh viên chủ yếu học gì?', ['môn bắt buộc', 'môn tự chọn', 'chỉ tiếng Đức'], 'môn bắt buộc'),
          mc('Từ học kỳ mấy được chọn môn tự chọn?', ['học kỳ ba', 'học kỳ một', 'học kỳ năm'], 'học kỳ ba'),
          tf('Das Wohnheim liegt neben der Mensa.', true),
        ],
        dictation: [3, 9],
      },
      writing_prompt_vi:
        'Viết email (5–7 câu) cho phòng tư vấn học tập hỏi về một học kỳ ở nước ngoài: bạn học ngành gì, muốn đi đâu, cần giấy tờ gì; dùng ít nhất ba giới từ đi Genitiv (innerhalb, außerhalb, bezüglich, anhand).',
    },
    {
      title_vi: 'Học tập hiệu quả',
      goal_vi: 'Nói về cách học, ôn thi và thuyết trình; nêu cách làm với indem và kết quả với sodass.',
      items: [
        'abgeben', 'fachlich', 'relevant', 'ein Referat halten', 'in Betracht ziehen', 'indem: bằng cách',
        'sodass / so … dass: kết quả', 'Abgabetermin', 'Exzellenz', 'Studienabbruch', 'Wissenschaftssprache', 'Lernstrategie',
        'Prüfungsvorbereitung', 'Leistungsnachweis', 'vertiefen', 'erwerben', 'gliedern', 'formulieren', 'überarbeiten',
        'abbrechen', 'sich orientieren', 'methodisch', 'sachkundig', 'zeitintensiv', 'lernintensiv', 'eigenverantwortlich',
        'auf dem Gebiet', 'praxisnah', 'referieren', 'nachholen', 'eine Hausarbeit verfassen', 'unter Beweis stellen',
      ],
      grammar: {
        point: 'indem-sodass',
        sections: [
          {
            text_vi:
              '**indem** = "bằng cách", trả lời câu hỏi **Wie?** (làm thế nào). Câu indem là câu phụ: **động từ chia đứng cuối**. Chủ ngữ hai vế thường giống nhau. Wie kann man Wörter lernen? – Man lernt Wörter, **indem** man sie regelmäßig **wiederholt**. Đặt câu indem lên đầu thì vế sau bắt đầu bằng động từ.',
            examples: [
              ['Ich verbessere mein Deutsch, indem ich jeden Tag Nachrichten höre.', 'Tôi cải thiện tiếng Đức bằng cách nghe tin tức mỗi ngày.'],
              ['Indem man Notizen macht, behält man mehr.', 'Bằng cách ghi chép, người ta nhớ được nhiều hơn.'],
            ],
            exercises: [
              fill('Sie bereitet sich vor, indem sie alte Prüfungen {löst}.', 'Cô ấy ôn thi bằng cách giải các đề thi cũ.'),
              choose('Man lernt Vokabeln am besten, ___ man sie oft wiederholt.', ['indem', 'sodass', 'damit'], 'indem', { vi: 'Cách học từ tốt nhất là lặp lại thường xuyên.' }),
              transform('Nối bằng "indem"', 'Er hat seine Note verbessert. Er hat jeden Tag geübt.', [
                'Er hat seine Note verbessert, indem er jeden Tag geübt hat.',
                'Er hat seine Note verbessert, indem er jeden Tag übte.',
              ]),
            ],
          },
          {
            text_vi:
              '**sodass** (hoặc **so dass**) nêu **kết quả**: Ich war krank, **sodass** ich die Prüfung nachholen **musste**. Muốn nhấn **mức độ**, tách ra: **so** + tính từ …, **dass**: Der Text war **so** schwer, **dass** ich ihn zweimal lesen musste. Phân biệt: **indem** = cách làm; **sodass** = kết quả; **damit** = mục đích.',
            table: 'Liên từ | Trả lời | Ví dụ\nindem | Wie? (cách) | …, indem er übt.\nsodass | Mit welcher Folge? (kết quả) | …, sodass er müde ist.\nso … dass | Wie sehr? (mức độ) | so müde, dass …\ndamit | Wozu? (mục đích) | …, damit er besteht.',
            examples: [['Das Referat war so gut gegliedert, dass alle es verstanden.', 'Bài thuyết trình có bố cục tốt đến mức ai cũng hiểu.']],
            exercises: [
              choose('Der Abgabetermin war sehr knapp, ___ wir nachts arbeiten mussten.', ['sodass', 'indem', 'damit'], 'sodass', { vi: 'Hạn nộp rất gấp nên chúng tôi phải làm đêm.' }),
              fill('Die Vorlesung war {so} langweilig, dass viele eingeschlafen sind.', 'Bài giảng chán đến mức nhiều người ngủ gật.'),
              fill('Er war krank, sodass er die Prüfung nachholen {musste}.', 'Anh ấy bị ốm nên phải thi bù.'),
            ],
          },
        ],
        mixed: [
          choose('Ich gliedere meine Hausarbeit, ___ ich zuerst Stichpunkte sammle.', ['indem', 'sodass', 'obwohl'], 'indem', { vi: 'Tôi lập dàn ý bài tiểu luận bằng cách thu thập ý chính trước.' }),
          transform('Nối bằng "sodass"', 'Ich habe zu spät angefangen. Ich konnte die Arbeit nicht rechtzeitig abgeben.', [
            'Ich habe zu spät angefangen, sodass ich die Arbeit nicht rechtzeitig abgeben konnte.',
            'Ich habe zu spät angefangen, so dass ich die Arbeit nicht rechtzeitig abgeben konnte.',
          ]),
          fill('Man vertieft sein Wissen, indem man Fachliteratur {liest}.', 'Người ta đào sâu kiến thức bằng cách đọc tài liệu chuyên ngành.'),
          choose('Das Studium war so lernintensiv, ___ sie keine Zeit für einen Nebenjob hatte.', ['dass', 'indem', 'damit'], 'dass', { vi: 'Việc học nặng đến mức cô ấy không có thời gian làm thêm.' }),
          order('Indem / man / regelmäßig / lernt, / vermeidet / man / Stress.', 'Bằng cách học đều đặn, người ta tránh được căng thẳng.'),
        ],
      },
      dialogue: {
        title_de: 'Lerntipps vor der Prüfung',
        lines: [
          { speaker: 'A', de: 'Die Prüfungsvorbereitung ist so zeitintensiv, dass ich kaum noch schlafe.', vi: 'Ôn thi tốn thời gian đến mức mình gần như không ngủ nữa.' },
          { speaker: 'B', de: 'Hast du schon einmal über deine Lernstrategie nachgedacht?', vi: 'Bạn đã bao giờ nghĩ về chiến lược học của mình chưa?' },
          { speaker: 'A', de: 'Nicht wirklich. Ich lese einfach alle Texte mehrmals.', vi: 'Không hẳn. Mình chỉ đọc đi đọc lại tất cả các bài.' },
          { speaker: 'B', de: 'Ich lerne effizienter, indem ich die wichtigsten Punkte exzerpiere und mir selbst Fragen stelle.', vi: 'Mình học hiệu quả hơn bằng cách tóm ý chính và tự đặt câu hỏi.' },
          { speaker: 'A', de: 'Das klingt methodisch. Und wie merkst du dir die Fachbegriffe?', vi: 'Nghe có phương pháp đấy. Thế bạn nhớ thuật ngữ chuyên ngành thế nào?' },
          { speaker: 'B', de: 'Indem ich sie in eigenen Sätzen formuliere. So verstehe ich sie wirklich.', vi: 'Bằng cách diễn đạt chúng bằng câu của chính mình. Như vậy mình mới thật sự hiểu.' },
          { speaker: 'A', de: 'Letztes Semester habe ich so spät angefangen, dass ich eine Prüfung nachholen musste.', vi: 'Học kỳ trước mình bắt đầu muộn đến mức phải thi lại một môn.' },
          { speaker: 'B', de: 'Dann mach dir einen Plan. Teil den Stoff so auf, dass du jeden Tag nur ein Thema lernst.', vi: 'Vậy hãy lập kế hoạch. Chia nhỏ nội dung để mỗi ngày chỉ học một chủ đề.' },
          { speaker: 'A', de: 'Gute Idee. Ich probiere es ab morgen.', vi: 'Ý hay đấy. Từ mai mình sẽ thử.' },
        ],
        gloss: { kaum: 'hầu như không', mehrmals: 'nhiều lần', 'merkst du dir': 'bạn ghi nhớ (sich merken)', eigenen: 'của chính mình', Stoff: 'nội dung học', 'teil … auf': 'chia ra (aufteilen)' },
        questions: [
          mc('A gặp vấn đề gì?', ['ôn thi tốn thời gian, gần như không ngủ', 'không có tài liệu', 'không hiểu giáo sư'], 'ôn thi tốn thời gian, gần như không ngủ'),
          tf('B lernt, indem er alle Texte mehrmals liest.', false, { explain: 'B exzerpiert die wichtigsten Punkte und stellt sich Fragen.' }),
          mc('B nhớ thuật ngữ bằng cách nào?', ['diễn đạt chúng bằng câu của mình', 'viết lên giấy nhớ', 'nghe nhạc'], 'diễn đạt chúng bằng câu của mình'),
          tf('Letztes Semester musste A eine Prüfung nachholen.', true),
        ],
        dictation: [3, 7],
      },
      writing_prompt_vi:
        'Viết lời khuyên cho một sinh viên năm nhất (6–8 câu) về cách học hiệu quả và chuẩn bị thuyết trình; dùng ít nhất hai câu với indem và hai câu với sodass hoặc so … dass.',
    },
  ],
  test: {
    grammar: {
      nominalstil: [
        choose('Nach ___ Auswertung der Daten schrieb sie das Fazit.', ['der', 'die', 'dem'], 'der'),
        fill('Die {Untersuchung} dauerte zwei Jahre. (untersuchen)', 'Cuộc nghiên cứu kéo dài hai năm.'),
        choose('___ dem Schreiben sollte man gut recherchieren.', ['Vor', 'Bevor', 'Nach'], 'Vor'),
        fill('Die Analyse {der} Interviews war schwierig.', 'Việc phân tích các cuộc phỏng vấn rất khó.'),
        order('Nach / der Abgabe / der Arbeit / fuhr / sie / in Urlaub.', 'Sau khi nộp bài cô ấy đi nghỉ.'),
        choose('Die ___ der Ergebnisse ist für Mai geplant. (veröffentlichen)', ['Veröffentlichung', 'Veröffentlichen', 'Veröffentlichte'], 'Veröffentlichung'),
      ],
      'genitiv-schrift': [
        choose('Bitte zahlen Sie innerhalb ___ Woche.', ['einer', 'einem', 'eine'], 'einer'),
        fill('Außerhalb {der} Sprechzeiten ist niemand da.', 'Ngoài giờ tiếp không có ai.'),
        choose('Anhand ___ Beispiels wird alles klar.', ['eines', 'einem', 'ein'], 'eines'),
        fill('Innerhalb {des} Semesters gibt es zwei Tests.', 'Trong học kỳ có hai bài kiểm tra.'),
        choose('Das Wohnheim liegt außerhalb ___ Stadt.', ['der', 'die', 'den'], 'der'),
        order('Bezüglich / Ihrer Anfrage / habe / ich / eine Frage.', 'Liên quan đến yêu cầu của ông/bà, tôi có một câu hỏi.'),
      ],
      'indem-sodass': [
        choose('Er lernt, ___ er Karteikarten schreibt.', ['indem', 'sodass', 'damit'], 'indem'),
        fill('Es regnete stark, sodass der Ausflug {ausfiel}.', 'Mưa to đến mức chuyến dã ngoại bị hủy.'),
        choose('Der Text war ___ schwer, dass ich ihn nicht verstand.', ['so', 'sodass', 'zu'], 'so'),
        fill('Man verbessert die Aussprache, indem man laut {liest}.', 'Người ta cải thiện phát âm bằng cách đọc to.'),
        order('Sie / spart / Zeit, / indem / sie / online / lernt.', 'Cô ấy tiết kiệm thời gian bằng cách học trực tuyến.'),
        choose('Ich habe verschlafen, ___ ich zu spät kam.', ['sodass', 'indem', 'obwohl'], 'sodass'),
      ],
    },
    reading: {
      title_de: 'Warum brechen Studierende ab?',
      text_de:
        'In Deutschland bricht fast jeder dritte Bachelorstudierende das Studium ab. Eine Untersuchung des Hochschulforschungsinstituts kommt zu dem Ergebnis, dass die Gründe sehr verschieden sind. Viele unterschätzen die fachlichen Anforderungen. Andere haben finanzielle Probleme, sodass sie neben dem Studium zu viel arbeiten müssen. Auch fehlende Motivation spielt eine Rolle. Nach Ansicht der Forscher können Hochschulen viel tun, indem sie Erstsemester besser betreuen und mehr Tutorien anbieten. Wichtig ist auch eine gute Studienberatung innerhalb des ersten Jahres. Ein Studienabbruch ist übrigens nicht immer ein Misserfolg: Viele finden danach eine Ausbildung, die besser zu ihnen passt.',
      gloss: {
        Bachelorstudierende: 'sinh viên cử nhân',
        Hochschulforschungsinstituts: 'viện nghiên cứu giáo dục đại học',
        unterschätzen: 'đánh giá thấp',
        Anforderungen: 'yêu cầu',
        fehlende: 'thiếu',
        anbieten: 'cung cấp',
        Misserfolg: 'thất bại',
      },
      questions: [
        mc('Khoảng bao nhiêu sinh viên cử nhân bỏ học?', ['gần một phần ba', 'một nửa', 'một phần mười'], 'gần một phần ba'),
        tf('Alle Studierenden brechen aus demselben Grund ab.', false, { explain: 'Die Gründe sind sehr verschieden.' }),
        mc('Các trường có thể làm gì theo các nhà nghiên cứu?', ['hướng dẫn sinh viên năm nhất tốt hơn và thêm buổi phụ đạo', 'giảm học phí', 'bỏ thi cử'], 'hướng dẫn sinh viên năm nhất tốt hơn và thêm buổi phụ đạo'),
        tf('Nach einem Studienabbruch finden viele eine passende Ausbildung.', true),
      ],
    },
  },
});
