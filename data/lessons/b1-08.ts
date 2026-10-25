// B1 · 08 Báo chí và tin tức — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b1-08',
  points: [
    {
      key: 'passiv-vergangenheit',
      rule_key: 'passiv-praeteritum-perfekt',
      category: 'tense',
      title_vi: 'Bị động Präteritum và Perfekt',
      explanation_vi: 'Präteritum: wurde/wurden + Partizip II (Der Täter wurde festgenommen). Perfekt: sein + Partizip II + worden (Das Auto ist gestohlen worden). Người làm: von + Dativ.',
    },
    {
      key: 'genitiv',
      rule_key: 'genitiv-attribut',
      category: 'case',
      title_vi: 'Genitiv: sở hữu, "của"',
      explanation_vi: 'des + danh từ -s/-es (giống đực, trung), der (giống cái, số nhiều): die Rede des Ministers, die Meinung der Leser. Tên riêng thêm -s: Annas Artikel. Văn nói: von + Dativ.',
    },
    {
      key: 'indirekte-frage',
      rule_key: 'indirekte-frage-wiederholung',
      category: 'verb_position',
      title_vi: 'Câu hỏi gián tiếp (ôn tập)',
      explanation_vi: 'Có từ hỏi → giữ W-Wort; có/không → ob (không dùng wenn). Động từ chia đứng cuối: Ich weiß nicht, ob die Meldung stimmt.',
    },
  ],
  lessons: [
    {
      title_vi: 'Tin trong ngày',
      goal_vi: 'Hiểu và kể lại tin tai nạn, tội phạm; dùng bị động Präteritum và Perfekt.',
      items: [
        'Polizeibericht', 'Täter', 'Opfer', 'Verbrechen', 'Diebstahl', 'Feuerwehr', 'Brand', 'Erdbeben', 'Katastrophe', 'Zeuge',
        'Vorfall', 'Ermittlung', 'Urteil', 'festnehmen', 'stehlen', 'verletzen', 'zerstören', 'ereignen', 'ermitteln',
        'verurteilen', 'fliehen', 'aufklären', 'unschuldig', 'schuldig', 'tödlich', 'verdächtig',
        'Bị động Präteritum: wurde + Partizip II', 'Bị động Perfekt: ist … worden', 'von + Dativ: tác nhân trong câu bị động',
      ],
      grammar: {
        point: 'passiv-vergangenheit',
        sections: [
          {
            text_vi:
              'Bản tin dùng **bị động Präteritum**: **wurde/wurden** + Partizip II: Der Täter **wurde** gestern **festgenommen**. Zwei Personen **wurden verletzt**. Chia: ich wurde, du wurdest, er **wurde**, wir/sie **wurden**.',
            table: 'Thì | Bị động\nPräsens | Das Haus wird zerstört.\nPräteritum | Das Haus wurde zerstört.\nPerfekt | Das Haus ist zerstört worden.',
            examples: [
              ['Bei dem Erdbeben wurden viele Häuser zerstört.', 'Trong trận động đất nhiều ngôi nhà bị phá hủy.'],
              ['Der Dieb wurde am Bahnhof festgenommen.', 'Tên trộm bị bắt ở nhà ga.'],
            ],
            exercises: [
              fill('Der Dieb {wurde} gestern festgenommen.', 'Tên trộm bị bắt hôm qua.'),
              choose('Bei dem Unfall ___ drei Personen verletzt.', ['wurden', 'wurde', 'werden'], 'wurden', { vi: 'Trong vụ tai nạn ba người bị thương.' }),
              transform('Chuyển sang bị động Präteritum', 'Die Polizei nahm den Täter fest.', ['Der Täter wurde von der Polizei festgenommen.', 'Der Täter wurde festgenommen.']),
            ],
          },
          {
            text_vi:
              '**Bị động Perfekt**: **sein** + Partizip II + **worden** (không phải geworden!): Das Auto **ist gestohlen worden**. Trong câu phụ: …, dass das Auto gestohlen worden **ist**. Người làm: **von** + Dativ: Das Feuer wurde **von der Feuerwehr** gelöscht.',
            examples: [['Der Fall ist noch nicht aufgeklärt worden.', 'Vụ việc vẫn chưa được làm sáng tỏ.']],
            exercises: [
              fill('Mein Fahrrad ist gestohlen {worden}.', 'Xe đạp của tôi đã bị lấy trộm.'),
              choose('Der Täter ist zu drei Jahren ___ worden.', ['verurteilt', 'verurteilen', 'verurteilte'], 'verurteilt', { vi: 'Thủ phạm đã bị kết án ba năm.' }),
              order('Das Feuer / wurde / von der Feuerwehr / gelöscht.', 'Đám cháy được đội cứu hỏa dập tắt.'),
            ],
          },
          {
            text_vi:
              'Tin cảnh sát: **Täter** (thủ phạm) – **Opfer** (nạn nhân) – **Zeuge** (nhân chứng; n-Deklination: den Zeugen). **Diebstahl** (vụ trộm), **Brand** (đám cháy). Cảnh sát **ermittelt** (điều tra); tòa **verurteilt** (kết án). Người **verdächtig** (bị tình nghi) có thể **schuldig** hoặc **unschuldig**.',
            examples: [['Die Polizei sucht Zeugen des Vorfalls.', 'Cảnh sát tìm nhân chứng của vụ việc.']],
            exercises: [
              fill('Die Polizei sucht {Zeugen} für den Unfall.', 'Cảnh sát tìm nhân chứng vụ tai nạn.'),
              translate('Thủ phạm đã bỏ trốn.', ['Der Täter ist geflohen.', 'Der Täter floh.']),
            ],
          },
        ],
        mixed: [
          transform('Chuyển sang bị động Perfekt', 'Man hat das Geld gestohlen.', ['Das Geld ist gestohlen worden.']),
          choose('Das Museum ___ 1890 gebaut.', ['wurde', 'würde', 'wird worden'], 'wurde', { vi: 'Bảo tàng được xây năm 1890.' }),
          fill('Der Brand wurde {von} einem Nachbarn gemeldet.', 'Đám cháy được một người hàng xóm báo tin.'),
          choose('Ich habe gelesen, dass der Täter festgenommen worden ___.', ['ist', 'hat', 'wurde'], 'ist', { vi: 'Tôi đọc được rằng thủ phạm đã bị bắt.' }),
          order('Bei dem Sturm / wurden / viele Bäume / zerstört.', 'Trong cơn bão nhiều cây bị đổ.'),
        ],
      },
      dialogue: {
        title_de: 'Ein Brand in der Nachbarschaft',
        lines: [
          { speaker: 'A', de: 'Hast du gehört? Gestern Abend hat es in der Bahnhofstraße gebrannt.', vi: 'Bạn nghe chưa? Tối qua có cháy ở phố Bahnhofstraße.' },
          { speaker: 'B', de: 'Ja, ich habe den Polizeibericht gelesen. Der Brand wurde gegen 22 Uhr gemeldet.', vi: 'Có, mình đọc báo cáo cảnh sát rồi. Đám cháy được báo khoảng 22 giờ.' },
          { speaker: 'A', de: 'Wurde jemand verletzt?', vi: 'Có ai bị thương không?' },
          { speaker: 'B', de: 'Zwei Personen wurden leicht verletzt. Sie sind ins Krankenhaus gebracht worden.', vi: 'Hai người bị thương nhẹ. Họ đã được đưa vào bệnh viện.' },
          { speaker: 'A', de: 'Wie schrecklich! Weiß man schon, wie das Feuer entstanden ist?', vi: 'Kinh khủng quá! Đã biết đám cháy bắt đầu thế nào chưa?' },
          { speaker: 'B', de: 'Noch nicht. Die Polizei ermittelt. Ein Zeuge hat einen verdächtigen Mann gesehen.', vi: 'Chưa. Cảnh sát đang điều tra. Một nhân chứng đã thấy một người đàn ông đáng ngờ.' },
          { speaker: 'A', de: 'Ist er festgenommen worden?', vi: 'Ông ta đã bị bắt chưa?' },
          { speaker: 'B', de: 'Ja, heute Morgen. Aber vielleicht ist er unschuldig.', vi: 'Rồi, sáng nay. Nhưng có thể ông ấy vô tội.' },
          { speaker: 'A', de: 'Hoffentlich wird der Fall schnell aufgeklärt.', vi: 'Hy vọng vụ việc sớm được làm sáng tỏ.' },
        ],
        gloss: { gebrannt: 'cháy (brennen)', gegen: 'khoảng (giờ)', leicht: 'nhẹ', schrecklich: 'kinh khủng', Feuer: 'lửa, đám cháy', entstanden: 'phát sinh (entstehen)', hoffentlich: 'hy vọng là', Fall: 'vụ việc' },
        questions: [
          mc('Đám cháy được báo lúc mấy giờ?', ['khoảng 22 giờ', 'sáng nay', '18 giờ'], 'khoảng 22 giờ'),
          tf('Zwei Personen wurden schwer verletzt.', false, { explain: 'Zwei Personen wurden leicht verletzt.' }),
          mc('Nhân chứng đã thấy gì?', ['một người đàn ông đáng ngờ', 'một chiếc xe', 'không thấy gì'], 'một người đàn ông đáng ngờ'),
          tf('Der verdächtige Mann ist festgenommen worden.', true),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi:
        'Viết một bản tin ngắn (5–6 câu) về một tai nạn hoặc vụ trộm tưởng tượng, dùng ít nhất ba câu bị động Präteritum hoặc Perfekt.',
    },
    {
      title_vi: 'Báo chí',
      goal_vi: 'Nói về báo chí, chính trị; dùng Genitiv để chỉ sở hữu.',
      items: [
        'Presse', 'Bericht', 'Artikel', 'Schlagzeile', 'Überschrift', 'Journalist', 'Redaktion', 'Nachrichtenagentur', 'Auflage',
        'Leser', 'Leserbrief', 'Kommentar', 'Reportage', 'Regierung', 'Minister', 'Gesetz', 'Meinungsfreiheit', 'veröffentlichen',
        'erscheinen', 'politisch', 'wirtschaftlich', 'international', 'regional', 'unabhängig', 'Stellung nehmen',
        'in die Schlagzeilen geraten', 'Schlagzeilen machen', 'Genitiv của danh từ',
      ],
      grammar: {
        point: 'genitiv',
        sections: [
          {
            text_vi:
              '**Genitiv** chỉ sở hữu, quan hệ "của": das Auto **des Mannes**, die Rede **der Ministerin**, die Meinung **der Leser**. Giống đực, trung: **des** + danh từ thêm **-s/-es** (một âm tiết thường -es: des Gesetz**es**). Giống cái và số nhiều: **der**, danh từ không đổi.',
            table: 'Danh từ | Genitiv\nder Minister | des Ministers\ndas Land | des Landes\ndie Regierung | der Regierung\ndie Leser (số nhiều) | der Leser',
            examples: [
              ['Die Rede des Ministers war sehr lang.', 'Bài phát biểu của bộ trưởng rất dài.'],
              ['Die Meinungen der Leser sind unterschiedlich.', 'Ý kiến của độc giả rất khác nhau.'],
            ],
            exercises: [
              choose('Das ist die Meinung ___ Journalisten.', ['des', 'der', 'dem'], 'des', { vi: 'Đó là ý kiến của nhà báo.' }),
              fill('Die Rede {der} Ministerin war kurz.', 'Bài phát biểu của nữ bộ trưởng ngắn.'),
              choose('Die Überschrift des ___ ist reißerisch.', ['Artikels', 'Artikel'], 'Artikels', { vi: 'Tiêu đề bài báo rất giật gân.' }),
            ],
          },
          {
            text_vi:
              'Tên riêng: thêm **-s** và đứng **trước**: **Annas** Artikel, **Deutschlands** Regierung. Genitiv của ein/mein: **eines, meines** (giống đực, trung), **einer, meiner** (giống cái); số nhiều chỉ có **meiner, keiner** (ein không có số nhiều). Văn nói thường dùng **von** + Dativ: das Auto **von meinem Vater** = das Auto **meines Vaters**.',
            examples: [['Das ist der Kommentar eines bekannten Journalisten.', 'Đây là bình luận của một nhà báo nổi tiếng.']],
            exercises: [
              transform('Viết lại với Genitiv', 'das Auto von meinem Vater', ['das Auto meines Vaters']),
              choose('Hast du ___ Reportage gelesen?', ['Lenas', 'Lena', 'der Lena'], 'Lenas', { vi: 'Bạn đã đọc phóng sự của Lena chưa?' }),
              fill('Die Auflage {einer} großen Zeitung ist hoch.', 'Số lượng in của một tờ báo lớn rất cao.'),
            ],
          },
          {
            text_vi:
              'Báo: **Schlagzeile/Überschrift** (tiêu đề), **Artikel**, **Kommentar** (bình luận), **Reportage** (phóng sự), **Leserbrief** (thư bạn đọc). Báo được **veröffentlicht** và **erscheint** (phát hành): Die Zeitung erscheint täglich. **Stellung nehmen zu** = bày tỏ quan điểm về.',
            examples: [['Der Artikel ist gestern in einer regionalen Zeitung erschienen.', 'Bài báo đăng hôm qua trên một tờ báo địa phương.']],
            exercises: [
              fill('Die Zeitung {erscheint} jeden Morgen.', 'Tờ báo phát hành mỗi sáng.'),
              translate('Bộ trưởng bày tỏ quan điểm về luật mới.', [
                'Der Minister nimmt Stellung zum neuen Gesetz.',
                'Der Minister hat zum neuen Gesetz Stellung genommen.',
                'Die Ministerin nimmt Stellung zum neuen Gesetz.',
              ]),
            ],
          },
        ],
        mixed: [
          transform('Viết lại với Genitiv', 'die Meinung von der Regierung', ['die Meinung der Regierung']),
          choose('Das ist das Büro ___ Chefs.', ['unseres', 'unserer', 'unserem'], 'unseres', { vi: 'Đây là văn phòng của sếp chúng tôi.' }),
          fill('Der Name {des} Journalisten ist unbekannt.', 'Tên của nhà báo không được biết.'),
          choose('Die Kinder ___ Nachbarn sind laut.', ['der', 'den', 'die'], 'der', { vi: 'Con của những người hàng xóm rất ồn.' }),
          order('Die Schlagzeile / der Zeitung / war / sehr / reißerisch.', 'Tiêu đề của tờ báo rất giật gân.'),
        ],
      },
      dialogue: {
        title_de: 'In der Redaktion',
        lines: [
          { speaker: 'A', de: 'Hast du den Kommentar des Chefredakteurs gelesen?', vi: 'Bạn đã đọc bình luận của tổng biên tập chưa?' },
          { speaker: 'B', de: 'Ja, über das neue Gesetz der Regierung. Er ist sehr kritisch.', vi: 'Rồi, về luật mới của chính phủ. Ông ấy rất phê phán.' },
          { speaker: 'A', de: 'Viele Leser haben schon Leserbriefe geschrieben. Die Meinungen der Leser sind sehr unterschiedlich.', vi: 'Nhiều độc giả đã viết thư. Ý kiến của độc giả rất khác nhau.' },
          { speaker: 'B', de: 'Wir sollten eine Reportage machen. Wie leben die Familien unseres Viertels mit dem neuen Gesetz?', vi: 'Chúng ta nên làm một phóng sự. Các gia đình trong khu phố mình sống thế nào với luật mới?' },
          { speaker: 'A', de: 'Gute Idee! Aber die Überschrift darf nicht reißerisch sein.', vi: 'Ý hay! Nhưng tiêu đề không được giật gân.' },
          { speaker: 'B', de: 'Natürlich. Wir sind eine unabhängige Zeitung. Ich frage auch den Minister, ob er Stellung nimmt.', vi: 'Tất nhiên. Chúng ta là tờ báo độc lập. Tôi cũng hỏi bộ trưởng xem ông ấy có bày tỏ quan điểm không.' },
          { speaker: 'A', de: 'Wann soll der Artikel erscheinen?', vi: 'Khi nào bài báo được đăng?' },
          { speaker: 'B', de: 'Am Samstag. Da ist die Auflage am höchsten.', vi: 'Thứ Bảy. Hôm đó số lượng in cao nhất.' },
        ],
        gloss: { Chefredakteurs: 'tổng biên tập (Genitiv)', kritisch: 'phê phán', Viertels: 'khu phố (Genitiv)', unseres: 'của chúng ta', reißerisch: 'giật gân', höchsten: 'cao nhất' },
        questions: [
          mc('Bình luận của tổng biên tập nói về gì?', ['luật mới của chính phủ', 'một vụ cháy', 'thể thao'], 'luật mới của chính phủ'),
          tf('Alle Leser haben die gleiche Meinung.', false, { explain: 'Die Meinungen der Leser sind sehr unterschiedlich.' }),
          mc('Phóng sự sẽ nói về ai?', ['các gia đình trong khu phố', 'bộ trưởng', 'nhà báo'], 'các gia đình trong khu phố'),
          tf('Der Artikel erscheint am Samstag.', true),
        ],
        dictation: [2, 7],
      },
      writing_prompt_vi:
        'Viết một thư bạn đọc ngắn (5 câu) về một bài báo bạn đã đọc, dùng ít nhất ba cụm Genitiv (der Artikel des …, die Meinung der …).',
    },
    {
      title_vi: 'Tin thật hay tin giả?',
      goal_vi: 'Đánh giá nguồn tin, thống kê; dùng câu hỏi gián tiếp với ob và từ hỏi.',
      items: [
        'Interview', 'Quelle', 'Meldung', 'Umfrage', 'Statistik', 'Prozent', 'Nachrichtensendung', 'Falschmeldung',
        'melden', 'befragen', 'informieren', 'sich informieren', 'bestätigen', 'behaupten', 'vermuten', 'verbreiten', 'objektiv',
        'seriös', 'glaubwürdig', 'reißerisch', 'zahlreich', 'laut: theo (nguồn tin)', 'angeblich', 'offenbar',
      ],
      grammar: {
        point: 'indirekte-frage',
        sections: [
          {
            text_vi:
              '**Câu hỏi gián tiếp** sau Ich weiß nicht, Können Sie mir sagen, Es ist unklar… Có **từ hỏi** → giữ W-Wort; câu hỏi **có/không** → **ob**. Động từ chia đứng **cuối**: Wo ist der Täter? → Man weiß nicht, wo der Täter **ist**. Stimmt die Meldung? → Ich frage mich, **ob** die Meldung **stimmt**.',
            examples: [
              ['Ich weiß nicht, ob die Meldung stimmt.', 'Tôi không biết tin đó có đúng không.'],
              ['Können Sie mir sagen, wann die Nachrichtensendung beginnt?', 'Ông/bà có thể cho tôi biết khi nào chương trình thời sự bắt đầu không?'],
            ],
            exercises: [
              choose('Ich weiß nicht, ___ die Information stimmt.', ['ob', 'wenn', 'dass'], 'ob', { vi: 'Tôi không biết thông tin có đúng không.' }),
              fill('Können Sie mir sagen, wann das Interview {beginnt}?', 'Ông/bà cho tôi biết khi nào buổi phỏng vấn bắt đầu?'),
              transform('Viết thành câu hỏi gián tiếp', 'Wer hat das behauptet? Ich möchte wissen, …', ['Ich möchte wissen, wer das behauptet hat.']),
            ],
          },
          {
            text_vi:
              'Hay gặp trong tin tức: **Es ist noch unklar, ob** … / **Die Polizei prüft, wie** … Với động từ tách và thì Perfekt: động từ chia ở **cuối cùng**: …, ob er festgenommen worden **ist**; …, wann die Zeitung **erscheint**. Không dùng **wenn** cho câu hỏi có/không!',
            examples: [['Es ist noch unklar, wie viele Menschen verletzt wurden.', 'Vẫn chưa rõ bao nhiêu người bị thương.']],
            exercises: [
              choose('Es ist noch unklar, ___ viele Menschen betroffen sind.', ['wie', 'ob', 'was'], 'wie', { vi: 'Vẫn chưa rõ bao nhiêu người bị ảnh hưởng.' }),
              order('Die Journalistin / prüft, / ob / die Quelle / glaubwürdig / ist.', 'Nữ nhà báo kiểm tra xem nguồn có đáng tin không.'),
              choose('Weißt du, ___ der Artikel erscheint?', ['wann', 'wenn', 'ob wann'], 'wann', { vi: 'Bạn có biết khi nào bài báo được đăng không?' }),
            ],
          },
          {
            text_vi:
              '**laut** = theo: **laut** einer Umfrage (theo một cuộc thăm dò). **angeblich** = được cho là (chưa chắc). **behaupten** = khẳng định (chưa chứng minh); **bestätigen** = xác nhận. Tin **seriös**, **glaubwürdig**, **objektiv** khác tin **reißerisch**; **Falschmeldung** = tin giả.',
            examples: [['Laut einer Statistik lesen 60 Prozent der Menschen Nachrichten online.', 'Theo một thống kê, 60 phần trăm người dân đọc tin trên mạng.']],
            exercises: [
              fill('{Laut} einer Umfrage informieren sich viele junge Leute im Internet.', 'Theo một cuộc thăm dò, nhiều người trẻ tìm thông tin trên mạng.'),
              translate('Tin này chưa được xác nhận.', [
                'Die Meldung ist noch nicht bestätigt.',
                'Die Meldung wurde noch nicht bestätigt.',
                'Die Nachricht ist noch nicht bestätigt.',
                'Die Nachricht wurde noch nicht bestätigt.',
              ]),
            ],
          },
        ],
        mixed: [
          transform('Viết thành câu hỏi gián tiếp', 'Ist die Quelle seriös? Ich frage mich, …', ['Ich frage mich, ob die Quelle seriös ist.']),
          choose('Niemand weiß, ___ die Meldung verbreitet hat.', ['wer', 'ob', 'wen'], 'wer', { vi: 'Không ai biết ai đã lan truyền tin này.' }),
          fill('Der Reporter fragt, ob der Minister Stellung {nimmt}.', 'Phóng viên hỏi liệu bộ trưởng có bày tỏ quan điểm không.'),
          choose('Können Sie mir sagen, wo ich die Statistik ___?', ['finde', 'finde ich', 'ich finde'], 'finde', { vi: 'Ông/bà cho tôi biết tìm thống kê ở đâu?' }),
          order('Es ist / unklar, / warum / die Meldung / so schnell / verbreitet / wurde.', 'Không rõ vì sao tin này lan nhanh như vậy.'),
        ],
      },
      dialogue: {
        title_de: 'Ist das eine Falschmeldung?',
        lines: [
          { speaker: 'A', de: 'Hast du das gesehen? Angeblich wird die Schule ab Montag geschlossen!', vi: 'Bạn thấy chưa? Nghe nói trường sẽ đóng cửa từ thứ Hai!' },
          { speaker: 'B', de: 'Wo hast du das gelesen?', vi: 'Bạn đọc ở đâu?' },
          { speaker: 'A', de: 'In einer Gruppe im Internet. Ich weiß nicht, wer die Meldung verbreitet hat.', vi: 'Trong một nhóm trên mạng. Mình không biết ai đã lan truyền tin này.' },
          { speaker: 'B', de: 'Dann ist es vielleicht eine Falschmeldung. Wir sollten prüfen, ob die Information aus einer seriösen Quelle kommt.', vi: 'Thế thì có thể là tin giả. Chúng ta nên kiểm tra xem thông tin có từ nguồn đáng tin không.' },
          { speaker: 'A', de: 'Wie macht man das?', vi: 'Làm thế nào?' },
          { speaker: 'B', de: 'Man fragt sich: Wer hat das geschrieben? Wann wurde es veröffentlicht? Berichten auch andere Zeitungen darüber?', vi: 'Tự hỏi: Ai viết? Đăng khi nào? Các báo khác có đưa tin không?' },
          { speaker: 'A', de: 'Laut der Webseite der Schule ist alles normal.', vi: 'Theo trang web của trường thì mọi thứ bình thường.' },
          { speaker: 'B', de: 'Siehst du! Die Schule hat nichts bestätigt.', vi: 'Thấy chưa! Trường chẳng xác nhận gì cả.' },
          { speaker: 'A', de: 'Ich informiere mich in Zukunft besser.', vi: 'Sau này mình sẽ tìm hiểu thông tin kỹ hơn.' },
        ],
        gloss: { geschlossen: 'đóng cửa (schließen)', Gruppe: 'nhóm', prüfen: 'kiểm tra', darüber: 'về việc đó', Webseite: 'trang web', normal: 'bình thường', Zukunft: 'tương lai' },
        questions: [
          mc('A đọc tin ở đâu?', ['trong một nhóm trên mạng', 'trên báo giấy', 'trên tivi'], 'trong một nhóm trên mạng'),
          tf('A weiß, wer die Meldung verbreitet hat.', false, { explain: 'Ich weiß nicht, wer die Meldung verbreitet hat.' }),
          mc('Theo trang web của trường thì sao?', ['mọi thứ bình thường', 'trường đóng cửa', 'không có thông tin'], 'mọi thứ bình thường'),
          tf('Die Schule hat die Meldung bestätigt.', false, { explain: 'Die Schule hat nichts bestätigt.' }),
        ],
        dictation: [2, 3],
      },
      writing_prompt_vi:
        'Viết 5 câu hỏi gián tiếp bạn nên đặt ra khi đọc một tin trên mạng (Ich frage mich, ob … / Ich möchte wissen, wer …).',
    },
  ],
  test: {
    grammar: {
      'passiv-vergangenheit': [
        fill('Der Täter {wurde} gestern festgenommen.', 'Thủ phạm bị bắt hôm qua.'),
        choose('Zwei Personen ___ verletzt.', ['wurden', 'wurde'], 'wurden'),
        fill('Mein Auto ist gestohlen {worden}.', 'Ô tô của tôi đã bị lấy trộm.'),
        choose('Das Haus ist zerstört ___.', ['worden', 'geworden'], 'worden'),
        order('Das Feuer / wurde / schnell / gelöscht.', 'Đám cháy được dập tắt nhanh.'),
        choose('Der Brief wurde ___ meiner Mutter geschrieben.', ['von', 'mit'], 'von'),
      ],
      genitiv: [
        choose('Das ist das Auto ___ Lehrers.', ['des', 'der'], 'des'),
        fill('Die Meinung {der} Leser ist wichtig.', 'Ý kiến của độc giả rất quan trọng.'),
        choose('Der Titel des ___ ist lang.', ['Buches', 'Buch'], 'Buches'),
        choose('Das ist ___ Fahrrad.', ['Peters', 'Peter'], 'Peters'),
        order('Die Rede / des Ministers / war / interessant.', 'Bài phát biểu của bộ trưởng rất thú vị.'),
        fill('Das ist das Haus {meiner} Eltern.', 'Đây là nhà của bố mẹ tôi.'),
      ],
      'indirekte-frage': [
        choose('Ich weiß nicht, ___ er kommt.', ['ob', 'wenn'], 'ob'),
        fill('Weißt du, wo der Bahnhof {ist}?', 'Bạn có biết nhà ga ở đâu không?'),
        choose('Können Sie mir sagen, wann der Zug ___?', ['fährt', 'fährt er'], 'fährt'),
        order('Ich / frage / mich, / ob / das / stimmt.', 'Tôi tự hỏi điều đó có đúng không.'),
        choose('Es ist unklar, ___ das gemacht hat.', ['wer', 'ob'], 'wer'),
        fill('Sie fragt, {ob} wir morgen Zeit haben.', 'Cô ấy hỏi mai chúng tôi có rảnh không.'),
      ],
    },
    reading: {
      title_de: 'Diebstahl im Stadtmuseum',
      text_de:
        'In der Nacht zum Sonntag wurde im Stadtmuseum ein wertvolles Bild gestohlen. Laut Polizeibericht sind die Täter durch ein Fenster eingestiegen. Der Diebstahl wurde erst am Morgen von einer Mitarbeiterin des Museums bemerkt. Es ist noch unklar, wie viele Personen beteiligt waren. Ein Zeuge hat angeblich zwei Männer mit einem weißen Auto gesehen. Die Polizei ermittelt und bittet die Bürger um Hilfe. Der Direktor des Museums sagte in einem Interview, das Bild sei fast eine Million Euro wert. Ob das Museum am Dienstag wieder geöffnet wird, weiß man noch nicht.',
      gloss: {
        eingestiegen: 'trèo vào (einsteigen)',
        erst: 'mãi đến',
        Mitarbeiterin: 'nữ nhân viên',
        bemerkt: 'phát hiện (bemerken)',
        beteiligt: 'tham gia',
        Bürger: 'người dân',
        sei: 'là (lời dẫn gián tiếp)',
        geöffnet: 'mở cửa',
      },
      questions: [
        mc('Thứ gì bị lấy trộm?', ['một bức tranh quý', 'tiền', 'một chiếc ô tô'], 'một bức tranh quý'),
        tf('Der Diebstahl wurde von einer Mitarbeiterin bemerkt.', true),
        mc('Nhân chứng được cho là đã thấy gì?', ['hai người đàn ông với một chiếc ô tô trắng', 'một phụ nữ', 'không thấy gì'], 'hai người đàn ông với một chiếc ô tô trắng'),
        tf('Man weiß schon, dass das Museum am Dienstag öffnet.', false, { explain: 'Ob das Museum am Dienstag wieder geöffnet wird, weiß man noch nicht.' }),
      ],
    },
  },
});
