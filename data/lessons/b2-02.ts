// B2 · 02 Thế giới việc làm — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b2-02',
  points: [
    {
      key: 'passiv-modal-vergangenheit',
      rule_key: 'passiv-modalverb-vergangenheit',
      category: 'tense',
      title_vi: 'Bị động với động từ khuyết thiếu ở quá khứ',
      explanation_vi: 'Präteritum: Modalverb chia ở vị trí 2, cuối câu là Partizip II + werden: Der Bericht musste bis Montag erstellt werden. Trong câu phụ, Modalverb đứng cuối: …, weil der Bericht erstellt werden musste.',
    },
    {
      key: 'zustandspassiv',
      rule_key: 'zustandspassiv-sein-partizip',
      category: 'tense',
      title_vi: 'Bị động trạng thái: sein + Partizip II',
      explanation_vi: 'werden + Partizip II diễn tả hành động đang diễn ra (Die Tür wird geschlossen); sein + Partizip II diễn tả trạng thái là kết quả của hành động (Die Tür ist geschlossen). Quá khứ: war geschlossen.',
    },
    {
      key: 'passiversatz',
      rule_key: 'passiversatz-lassen-bar',
      category: 'word_choice',
      title_vi: 'Thay thế bị động: sich lassen + Infinitiv, tính từ -bar',
      explanation_vi: 'Das Problem lässt sich lösen = Das Problem ist lösbar = Das Problem kann gelöst werden. sich lassen chia theo chủ ngữ, động từ chính ở dạng nguyên mẫu cuối câu; -bar gắn vào gốc động từ (machbar, erreichbar).',
    },
  ],
  lessons: [
    {
      title_vi: 'Áp lực và thời hạn',
      goal_vi: 'Kể lại những việc đã phải làm ở chỗ làm bằng câu bị động có động từ khuyết thiếu ở quá khứ.',
      items: [
        'Leistungsdruck', 'Burnout', 'Auftrag', 'Frist', 'Verantwortung', 'Belastung', 'delegieren', 'bewältigen', 'einhalten',
        'absprechen', 'erstellen', 'gestresst', 'überlastet', 'termingerecht', 'unter Druck stehen',
        'Bị động với động từ khuyết thiếu ở quá khứ', 'Arbeitsalltag', 'Effizienz', 'Produktivität', 'Arbeitsbelastung',
        'Geschäftsreise', 'Messe', 'Projektleitung', 'Zeitdruck', 'priorisieren', 'koordinieren', 'umsetzen', 'sich abgrenzen',
        'effizient', 'produktiv', 'zeitaufwendig', 'unter Zeitdruck stehen', 'Feierabend machen', 'auf dem Laufenden halten',
        'alle Hände voll zu tun haben',
      ],
      grammar: {
        point: 'passiv-modal-vergangenheit',
        sections: [
          {
            text_vi:
              'Ôn lại: bị động có động từ khuyết thiếu ở hiện tại là **Der Bericht muss erstellt werden.** Sang **Präteritum** chỉ đổi động từ khuyết thiếu: **musste, konnte, sollte, durfte**; cuối câu vẫn là **Partizip II + werden**. Ai làm thì thêm **von** + Dativ: Die Frist konnte **von** uns nicht eingehalten werden.',
            table: 'Thì | Ví dụ\nPräsens | Der Bericht muss erstellt werden.\nPräteritum | Der Bericht musste erstellt werden.\nPräteritum | Die Frist konnte nicht eingehalten werden.\nPräteritum | Die Aufgabe sollte delegiert werden.',
            examples: [
              ['Der Auftrag musste bis Freitag erledigt werden.', 'Đơn hàng phải được hoàn thành trước thứ Sáu.'],
              ['Leider konnte die Frist nicht eingehalten werden.', 'Tiếc là thời hạn đã không thể được tuân thủ.'],
            ],
            exercises: [
              choose('Der Bericht ___ bis Montag erstellt werden.', ['musste', 'wurde', 'hatte'], 'musste', { vi: 'Báo cáo phải được lập xong trước thứ Hai.' }),
              fill('Die Präsentation konnte nicht rechtzeitig fertiggestellt {werden}.', 'Bài thuyết trình đã không thể hoàn thành kịp.'),
              order('Die Aufgaben / sollten / im Team / verteilt / werden.', 'Các nhiệm vụ lẽ ra phải được chia trong nhóm.'),
            ],
          },
          {
            text_vi:
              'Trong **câu phụ** (weil, dass, obwohl…) động từ khuyết thiếu chia đứng **cuối cùng**: …, weil der Auftrag schnell **erledigt werden musste**. Thứ tự cuối câu: **Partizip II – werden – Modalverb**. Ở **Perfekt** có dạng "hai nguyên mẫu" (Der Bericht **hat** erstellt werden **müssen**), nhưng văn viết và văn nói thường dùng Präteritum.',
            examples: [['Wir hatten Stress, weil alles koordiniert werden musste.', 'Chúng tôi căng thẳng vì mọi thứ phải được điều phối.']],
            exercises: [
              choose('Ich war gestresst, weil der Auftrag schnell erledigt ___.', ['werden musste', 'musste werden', 'wurde müssen'], 'werden musste', { vi: 'Tôi căng thẳng vì đơn hàng phải được làm xong nhanh.' }),
              transform('Nối bằng "weil"', 'Wir blieben lange im Büro. Das Projekt musste abgeschlossen werden.', [
                'Wir blieben lange im Büro, weil das Projekt abgeschlossen werden musste.',
              ]),
              fill('Es war klar, dass die Frist nicht eingehalten werden {konnte}.', 'Rõ ràng là thời hạn không thể được tuân thủ.'),
            ],
          },
          {
            text_vi:
              'Từ vựng áp lực công việc: **unter (Zeit)druck stehen**, **alle Hände voll zu tun haben** (bận tối mắt), **überlastet** (quá tải). Để đỡ áp lực: **priorisieren** (ưu tiên), **delegieren** (giao việc), **sich abgrenzen** (giữ ranh giới), **pünktlich Feierabend machen**.',
            examples: [['Diese Woche habe ich alle Hände voll zu tun.', 'Tuần này tôi bận tối mắt.']],
            exercises: [
              fill('Seit Wochen {steht} das ganze Team unter Zeitdruck.', 'Mấy tuần nay cả nhóm chịu áp lực thời gian.'),
              translate('Hôm nay tôi tan làm đúng giờ.', ['Heute mache ich pünktlich Feierabend.', 'Ich mache heute pünktlich Feierabend.']),
            ],
          },
        ],
        mixed: [
          transform('Chuyển sang Präteritum', 'Die Daten müssen geprüft werden.', ['Die Daten mussten geprüft werden.']),
          choose('Die Messe ___ wegen des Streiks nicht eröffnet werden.', ['konnte', 'kann werden', 'wurde können'], 'konnte', { vi: 'Hội chợ đã không thể khai mạc vì cuộc đình công.' }),
          fill('Der Kunde wollte wissen, warum die Lieferung nicht termingerecht geschickt werden {konnte}.', 'Khách hàng muốn biết vì sao hàng không thể được gửi đúng hạn.'),
          order('Alle Mitarbeiter / mussten / über die Änderungen / informiert / werden.', 'Tất cả nhân viên phải được thông báo về những thay đổi.'),
          choose('Er ist völlig ___. Er arbeitet zwölf Stunden am Tag.', ['überlastet', 'termingerecht', 'effizient'], 'überlastet', { vi: 'Anh ấy hoàn toàn quá tải. Anh ấy làm 12 tiếng mỗi ngày.' }),
        ],
      },
      dialogue: {
        title_de: 'Eine stressige Woche',
        lines: [
          { speaker: 'A', de: 'Du siehst müde aus. War die Woche so anstrengend?', vi: 'Trông bạn mệt quá. Tuần này vất vả lắm à?' },
          { speaker: 'B', de: 'Ja, total. Wir hatten alle Hände voll zu tun, weil die Messe vorbereitet werden musste.', vi: 'Ừ, cực kỳ. Bọn mình bận tối mắt vì phải chuẩn bị cho hội chợ.' },
          { speaker: 'A', de: 'Konnte denn nichts delegiert werden?', vi: 'Thế không giao bớt việc được à?' },
          { speaker: 'B', de: 'Nein, zwei Kollegen waren auf Geschäftsreise. Deshalb musste alles von mir koordiniert werden.', vi: 'Không, hai đồng nghiệp đi công tác. Vì vậy mọi thứ phải do mình điều phối.' },
          { speaker: 'A', de: 'Und habt ihr die Frist eingehalten?', vi: 'Thế các bạn có kịp hạn không?' },
          { speaker: 'B', de: 'Fast. Nur die Broschüren konnten nicht termingerecht gedruckt werden.', vi: 'Gần như. Chỉ có tờ rơi là không in kịp hạn.' },
          { speaker: 'A', de: 'Du stehst ständig unter Druck. Pass auf, dass du keinen Burnout bekommst.', vi: 'Bạn lúc nào cũng chịu áp lực. Cẩn thận kẻo bị kiệt sức đấy.' },
          { speaker: 'B', de: 'Ich weiß. Ich muss lernen, Aufgaben zu priorisieren und mich besser abzugrenzen.', vi: 'Mình biết. Mình phải học cách ưu tiên công việc và giữ ranh giới tốt hơn.' },
          { speaker: 'A', de: 'Genau. Und heute machst du pünktlich Feierabend!', vi: 'Đúng thế. Và hôm nay bạn tan làm đúng giờ đi!' },
        ],
        gloss: { anstrengend: 'vất vả', ständig: 'liên tục, lúc nào cũng', Broschüren: 'tờ rơi, tài liệu quảng cáo', gedruckt: 'được in (drucken)', 'pass auf': 'cẩn thận' },
        questions: [
          mc('Vì sao B bận tối mắt?', ['phải chuẩn bị cho hội chợ', 'sếp bị ốm', 'chuyển văn phòng'], 'phải chuẩn bị cho hội chợ'),
          tf('Die Kollegen von B konnten viele Aufgaben übernehmen.', false, { explain: 'Zwei Kollegen waren auf Geschäftsreise.' }),
          mc('Cái gì đã không làm kịp hạn?', ['in tờ rơi', 'gửi hàng', 'báo cáo'], 'in tờ rơi'),
          tf('B will lernen, Aufgaben zu priorisieren.', true),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Viết email (5–7 câu) cho sếp giải thích vì sao một dự án bị chậm: điều gì đã phải làm, điều gì không thể làm kịp, bạn đề xuất gì; dùng ít nhất ba câu bị động với musste/konnte/sollte … werden.',
    },
    {
      title_vi: 'Hợp đồng và quyền lợi',
      goal_vi: 'Nói về giờ làm, hợp đồng và quyền lợi người lao động; phân biệt "wird geschlossen" và "ist geschlossen".',
      items: [
        'Homeoffice', 'Gleitzeit', 'Work-Life-Balance', 'Arbeitslosenquote', 'Mindestlohn', 'Tarifvertrag', 'Betriebsrat',
        'Kündigungsfrist', 'Elternzeit', 'abbauen', 'unbezahlt', 'ortsunabhängig', 'krisensicher', 'in Rente gehen',
        'Bị động trạng thái: sein + Partizip II', 'Teilzeitstelle', 'Arbeitsrecht', 'Urlaubsanspruch', 'Kündigungsschutz',
        'Fehlzeit', 'abmahnen', 'branchenüblich', 'arbeitsfähig', 'arbeitsunfähig', 'die Kündigung einreichen', 'Kurzarbeit',
        'Schichtarbeit', 'weisungsgebunden', 'freistellen', 'sich krank melden',
      ],
      grammar: {
        point: 'zustandspassiv',
        sections: [
          {
            text_vi:
              'Có hai loại bị động. **Vorgangspassiv** (werden + Partizip II) nói **hành động đang xảy ra**: Das Büro **wird** um 18 Uhr **geschlossen** (người ta đang/sẽ đóng). **Zustandspassiv** (**sein** + Partizip II) nói **trạng thái sau hành động**: Das Büro **ist geschlossen** (cửa đang đóng). Tiếng Việt chỉ nói "đóng cửa", nên phải hỏi: đang làm hay đã xong?',
            table: 'Loại | Cấu trúc | Ví dụ\nhành động | werden + P.II | Der Vertrag wird gerade unterschrieben.\ntrạng thái | sein + P.II | Der Vertrag ist unterschrieben.\ntrạng thái, quá khứ | war + P.II | Der Vertrag war schon unterschrieben.',
            examples: [
              ['Die Stelle ist leider schon besetzt.', 'Tiếc là vị trí này đã có người.'],
              ['Morgen wird der neue Tarifvertrag unterschrieben.', 'Ngày mai thỏa ước mới sẽ được ký.'],
            ],
            exercises: [
              choose('Sie können nicht rein. Die Tür ___ abgeschlossen.', ['ist', 'wird'], 'ist', { vi: 'Bạn không vào được. Cửa đã khóa.' }),
              choose('Jeden Abend um 20 Uhr ___ das Gebäude abgeschlossen.', ['wird', 'ist'], 'wird', { vi: 'Mỗi tối lúc 20 giờ tòa nhà được khóa lại.' }),
              fill('Der Vertrag {ist} schon unterschrieben, wir können anfangen.', 'Hợp đồng đã ký rồi, chúng ta có thể bắt đầu.'),
            ],
          },
          {
            text_vi:
              'Zustandspassiv ở quá khứ dùng **war** + Partizip II: Als ich ankam, **war** alles schon **vorbereitet**. Nhiều Partizip II như **geöffnet, geschlossen, verletzt, verheiratet, besetzt, krankgeschrieben** thường dùng với sein. Đừng nhầm với **Perfekt** của động từ đi với sein (Er **ist** gefahren): Zustandspassiv luôn có nghĩa bị động (cái gì **đã được** làm).',
            examples: [['Er ist seit Montag krankgeschrieben.', 'Anh ấy có giấy nghỉ ốm từ thứ Hai.']],
            exercises: [
              fill('Als wir ankamen, {war} der Raum schon vorbereitet.', 'Khi chúng tôi đến, phòng đã được chuẩn bị sẵn.'),
              transform('Viết câu trạng thái (sein + Partizip II)', 'Man hat die Kantine geschlossen.', ['Die Kantine ist geschlossen.']),
              choose('Der Mitarbeiter ___ seit einer Woche krankgeschrieben.', ['ist', 'wird', 'hat'], 'ist', { vi: 'Nhân viên đó nghỉ ốm có giấy từ một tuần nay.' }),
            ],
          },
          {
            text_vi:
              'Từ vựng hợp đồng: trong **Tarifvertrag** có **Mindestlohn**, **Urlaubsanspruch**, **Kündigungsfrist**. Người đang có **Kündigungsschutz** không dễ bị sa thải. Ốm thì **sich krank melden**, sau đó có thể **arbeitsunfähig** vài ngày. Nghỉ việc: **die Kündigung einreichen**.',
            examples: [['Die Kündigungsfrist beträgt drei Monate.', 'Thời hạn báo trước là ba tháng.']],
            exercises: [
              fill('Heute habe ich mich krank {gemeldet}.', 'Hôm nay tôi đã báo ốm.'),
              translate('Văn phòng hôm nay đóng cửa.', ['Das Büro ist heute geschlossen.', 'Heute ist das Büro geschlossen.']),
            ],
          },
        ],
        mixed: [
          choose('Gute Nachricht: Das Problem ___ gelöst!', ['ist', 'wird'], 'ist', { vi: 'Tin tốt: vấn đề đã được giải quyết!' }),
          fill('Im Moment {wird} das Büro renoviert, wir arbeiten im Homeoffice.', 'Hiện văn phòng đang được sửa, chúng tôi làm ở nhà.'),
          choose('Als der Chef kam, ___ der Bericht schon geschrieben.', ['war', 'wurde', 'hatte'], 'war', { vi: 'Khi sếp đến, báo cáo đã được viết xong.' }),
          transform('Viết câu trạng thái', 'Man hat die Stelle besetzt.', ['Die Stelle ist besetzt.']),
          order('Am Wochenende / ist / die Kantine / geschlossen.', 'Cuối tuần căng-tin đóng cửa.'),
        ],
      },
      dialogue: {
        title_de: 'Fragen an den Betriebsrat',
        lines: [
          { speaker: 'A', de: 'Guten Tag, ich habe ein paar Fragen zu meinem Vertrag. Ist das Büro des Betriebsrats heute geöffnet?', vi: 'Chào anh, tôi có vài câu hỏi về hợp đồng. Văn phòng hội đồng công nhân hôm nay có mở cửa không?' },
          { speaker: 'B', de: 'Ja, kommen Sie rein. Worum geht es?', vi: 'Có, mời chị vào. Chuyện gì vậy?' },
          { speaker: 'A', de: 'Ich möchte nach der Elternzeit in eine Teilzeitstelle wechseln. Ist das im Tarifvertrag geregelt?', vi: 'Tôi muốn chuyển sang làm bán thời gian sau thời gian nghỉ chăm con. Điều đó có được quy định trong thỏa ước không?' },
          { speaker: 'B', de: 'Ja, das ist klar geregelt. Sie haben ein Recht auf Teilzeit, wenn die Firma mehr als 15 Mitarbeiter hat.', vi: 'Có, điều đó được quy định rõ. Chị có quyền làm bán thời gian nếu công ty có hơn 15 nhân viên.' },
          { speaker: 'A', de: 'Und was passiert mit meinem Urlaubsanspruch?', vi: 'Thế quyền nghỉ phép của tôi thì sao?' },
          { speaker: 'B', de: 'Der wird angepasst. Bei drei Tagen pro Woche bekommen Sie weniger Urlaubstage.', vi: 'Sẽ được điều chỉnh. Làm ba ngày một tuần thì chị được ít ngày phép hơn.' },
          { speaker: 'A', de: 'Gibt es auch Gleitzeit oder Homeoffice?', vi: 'Có giờ làm linh hoạt hay làm ở nhà không?' },
          { speaker: 'B', de: 'Gleitzeit ja. Homeoffice wird gerade mit der Geschäftsführung besprochen. Noch ist nichts entschieden.', vi: 'Giờ linh hoạt thì có. Làm ở nhà đang được bàn với ban giám đốc. Chưa có gì được quyết định.' },
          { speaker: 'A', de: 'Gut. Dann reiche ich den Antrag ein, sobald alles entschieden ist.', vi: 'Được. Vậy tôi sẽ nộp đơn ngay khi mọi việc được quyết định.' },
        ],
        gloss: { geregelt: 'được quy định (regeln)', Recht: 'quyền', angepasst: 'được điều chỉnh (anpassen)', Geschäftsführung: 'ban giám đốc', entschieden: 'được quyết định (entscheiden)', Antrag: 'đơn đề nghị', sobald: 'ngay khi' },
        questions: [
          mc('A muốn gì sau thời gian nghỉ chăm con?', ['làm bán thời gian', 'nghỉ việc', 'làm thêm giờ'], 'làm bán thời gian'),
          tf('Im Tarifvertrag ist die Teilzeit nicht geregelt.', false, { explain: 'Ja, das ist klar geregelt.' }),
          mc('Điều gì đang được bàn với ban giám đốc?', ['làm việc ở nhà', 'giờ làm linh hoạt', 'lương tối thiểu'], 'làm việc ở nhà'),
          tf('Mit weniger Arbeitstagen bekommt A weniger Urlaubstage.', true),
        ],
        dictation: [3, 7],
      },
      writing_prompt_vi:
        'Viết một bài ngắn (6–8 câu) về điều kiện làm việc ở một nơi bạn biết: giờ làm, ngày phép, làm ở nhà; dùng ít nhất ba câu bị động trạng thái (ist geregelt, ist erlaubt, ist geschlossen…).',
    },
    {
      title_vi: 'Sự nghiệp và phát triển',
      goal_vi: 'Nói về thăng tiến, đào tạo, đổi việc; diễn đạt "có thể được làm" bằng sich lassen và tính từ -bar.',
      items: [
        'Arbeitswelt', 'Fachkräftemangel', 'Führungskraft', 'Mitarbeitergespräch', 'Zielvereinbarung', 'Aufstiegschance',
        'Fortbildung', 'Quereinsteiger', 'Arbeitsklima', 'Arbeitszufriedenheit', 'sich spezialisieren', 'leisten', 'ausbilden',
        'schaffen', 'sich durchsetzen', 'kompetent', 'leistungsfähig', 'zur Verfügung stehen', 'Bescheid geben',
        'einen Termin vereinbaren', 'Wert legen auf', 'sich lassen + Infinitiv', 'Tính từ đuôi -bar', 'Arbeitsweise',
        'Jobwechsel', 'Lebenslauflücke', 'Kollegium', 'Vorstellungsrunde', 'Weiterentwicklung', 'sich bewähren', 'einarbeiten',
        'überstehen', 'vorankommen', 'flexibel einsetzbar', 'eine Stelle antreten', 'Arbeitsvermittlung', 'anwerben',
        'Karriere machen',
      ],
      grammar: {
        point: 'passiversatz',
        sections: [
          {
            text_vi:
              '**sich lassen + Infinitiv** = "có thể được làm", thay cho **können + bị động**: Das Problem **lässt sich** leicht **lösen** = Das Problem kann leicht gelöst werden. **lassen** chia theo chủ ngữ (lässt / lassen), **sich** đi ngay sau, động từ chính ở **nguyên mẫu cuối câu**. Phủ định: Das **lässt sich nicht** ändern (không thay đổi được).',
            table: 'Bị động với können | sich lassen\nDas kann leicht erklärt werden. | Das lässt sich leicht erklären.\nDie Fehler können nicht vermieden werden. | Die Fehler lassen sich nicht vermeiden.\nDer Termin konnte verschoben werden. | Der Termin ließ sich verschieben.',
            examples: [
              ['Die Arbeitszeit lässt sich flexibel gestalten.', 'Thời gian làm việc có thể sắp xếp linh hoạt.'],
              ['Das lässt sich leider nicht ändern.', 'Tiếc là điều đó không thay đổi được.'],
            ],
            exercises: [
              choose('Die Aufgabe ___ sich in zwei Stunden erledigen.', ['lässt', 'lassen', 'wird'], 'lässt', { vi: 'Nhiệm vụ có thể làm xong trong hai tiếng.' }),
              fill('Die Fehler lassen sich leicht {korrigieren}.', 'Lỗi có thể sửa dễ dàng.'),
              transform('Viết lại với sich lassen', 'Das Problem kann nicht gelöst werden.', ['Das Problem lässt sich nicht lösen.']),
            ],
          },
          {
            text_vi:
              'Tính từ đuôi **-bar** gắn vào gốc động từ cũng có nghĩa "có thể … được": **machbar** (làm được), **erreichbar** (liên lạc được), **lösbar**, **lesbar**, **bezahlbar**, **einsetzbar**. Phủ định thường thêm **un-**: **unlösbar**, **unbezahlbar**. Ba cách nói cùng nghĩa: Die Aufgabe **ist machbar** = **lässt sich machen** = **kann gemacht werden**.',
            table: 'Động từ | Tính từ -bar | Nghĩa\nmachen | machbar | làm được\nerreichen | erreichbar | liên lạc/đến được\nbezahlen | bezahlbar | trả được (giá phải chăng)\neinsetzen | einsetzbar | bố trí được',
            examples: [['Ich bin morgen nur per E-Mail erreichbar.', 'Ngày mai tôi chỉ liên lạc được qua email.']],
            exercises: [
              fill('Das Projekt ist schwierig, aber {machbar}.', 'Dự án khó nhưng làm được.'),
              choose('Mieten in München sind kaum noch ___.', ['bezahlbar', 'bezahlt', 'bezahlend'], 'bezahlbar', { vi: 'Tiền thuê nhà ở München gần như không còn trả nổi.' }),
              transform('Viết lại với tính từ -bar', 'Der Chef kann heute nicht erreicht werden.', ['Der Chef ist heute nicht erreichbar.']),
            ],
          },
          {
            text_vi:
              'Tính từ mang nghĩa **phủ định** hay được tạo bằng tiền tố và hậu tố: **un-** (unklar, unzufrieden, unbezahlbar); **miss-** cho danh từ và động từ (das **Miss**verständnis, **miss**lingen = thất bại); **-los** = không có (arbeits**los**, erfolg**los**, kosten**los**); **-frei** = không chứa, miễn (alkohol**frei**, barriere**frei**, steuer**frei**). Gặp nhiều trong tin tuyển dụng và văn bản B2.',
            examples: [
              ['Die Weiterbildung ist für alle Mitarbeiter kostenlos.', 'Khóa nâng cao miễn phí cho mọi nhân viên.'],
              ['Nach dem Missverständnis war die Stimmung im Team schlecht.', 'Sau sự hiểu lầm, không khí trong nhóm tệ đi.'],
            ],
            exercises: [
              choose('Seit drei Monaten ist er ___ und sucht eine Stelle.', ['arbeitslos', 'unarbeitlich', 'arbeitsfrei'], 'arbeitslos', { vi: 'Ba tháng nay anh ấy thất nghiệp và đang tìm việc.' }),
              fill('Das Büro ist {barrierefrei}, es gibt einen Aufzug. (Barriere + -frei)', 'Văn phòng không có rào cản, có thang máy.'),
              choose('Leider war meine Bewerbung ___.', ['erfolglos', 'unerfolgreich', 'misserfolgt'], 'erfolglos', { vi: 'Tiếc là hồ sơ của tôi không thành công.' }),
            ],
          },
        ],
        mixed: [
          choose('Ein Jobwechsel ___ sich gut planen.', ['lässt', 'kann', 'wird'], 'lässt', { vi: 'Việc đổi việc có thể lên kế hoạch tốt.' }),
          fill('Die neuen Kollegen sind flexibel {einsetzbar}.', 'Các đồng nghiệp mới có thể bố trí linh hoạt.'),
          transform('Viết lại với sich lassen', 'Die Lücke im Lebenslauf kann gut erklärt werden.', ['Die Lücke im Lebenslauf lässt sich gut erklären.']),
          choose('Das Ziel ist realistisch und ___.', ['erreichbar', 'erreicht', 'erreichend'], 'erreichbar', { vi: 'Mục tiêu thực tế và có thể đạt được.' }),
          order('Der Termin / ließ / sich / leider / nicht / verschieben.', 'Tiếc là cuộc hẹn không dời được.'),
        ],
      },
      dialogue: {
        title_de: 'Das Mitarbeitergespräch',
        lines: [
          { speaker: 'A', de: 'Frau Nguyen, danke, dass Sie Zeit haben. Wie zufrieden sind Sie im Moment mit Ihrer Arbeit?', vi: 'Chị Nguyễn, cảm ơn chị đã dành thời gian. Hiện chị hài lòng với công việc đến đâu?' },
          { speaker: 'B', de: 'Sehr zufrieden. Das Arbeitsklima ist gut, und ich habe mich im Team bewährt.', vi: 'Rất hài lòng. Bầu không khí làm việc tốt, và tôi đã chứng tỏ được năng lực trong nhóm.' },
          { speaker: 'A', de: 'Das sehe ich auch so. Welche Ziele haben Sie für das nächste Jahr?', vi: 'Tôi cũng thấy vậy. Chị có mục tiêu gì cho năm tới?' },
          { speaker: 'B', de: 'Ich möchte mich auf Datenanalyse spezialisieren und später eine Führungskraft werden.', vi: 'Tôi muốn chuyên sâu về phân tích dữ liệu và sau này trở thành quản lý.' },
          { speaker: 'A', de: 'Das lässt sich machen. Wir legen großen Wert auf Weiterentwicklung.', vi: 'Điều đó làm được. Chúng tôi rất coi trọng sự phát triển.' },
          { speaker: 'B', de: 'Gibt es dafür eine passende Fortbildung?', vi: 'Có khóa bồi dưỡng nào phù hợp không ạ?' },
          { speaker: 'A', de: 'Ja, einen Kurs im Herbst. Die Kosten übernimmt die Firma, und die Zeiten lassen sich flexibel planen.', vi: 'Có, một khóa vào mùa thu. Công ty chịu chi phí, và giờ học có thể sắp xếp linh hoạt.' },
          { speaker: 'B', de: 'Wunderbar. Ist das neben der Arbeit machbar?', vi: 'Tuyệt quá. Vừa làm vừa học có được không ạ?' },
          { speaker: 'A', de: 'Bestimmt. Wir schreiben das in Ihre Zielvereinbarung. Geben Sie mir Bescheid, wenn Sie Fragen haben.', vi: 'Chắc chắn. Chúng ta ghi vào thỏa thuận mục tiêu của chị. Có câu hỏi gì thì báo tôi nhé.' },
        ],
        gloss: { Datenanalyse: 'phân tích dữ liệu', passende: 'phù hợp', Kosten: 'chi phí', neben: 'bên cạnh, song song với', bestimmt: 'chắc chắn' },
        questions: [
          tf('Frau Nguyen ist mit ihrer Arbeit unzufrieden.', false, { explain: 'Sehr zufrieden.' }),
          mc('Chị Nguyễn muốn chuyên sâu về lĩnh vực nào?', ['phân tích dữ liệu', 'tiếp thị', 'luật lao động'], 'phân tích dữ liệu'),
          mc('Ai trả chi phí khóa học?', ['công ty', 'chị Nguyễn', 'trung tâm việc làm'], 'công ty'),
          tf('Die Fortbildung wird in die Zielvereinbarung geschrieben.', true),
        ],
        dictation: [3, 6],
      },
      writing_prompt_vi:
        'Viết về kế hoạch nghề nghiệp của bạn trong 3 năm tới (6–8 câu): muốn học gì, muốn đạt vị trí nào, khó khăn gì; dùng ít nhất hai câu với sich lassen và hai tính từ -bar.',
    },
  ],
  test: {
    grammar: {
      'passiv-modal-vergangenheit': [
        choose('Der Bericht ___ bis gestern geschrieben werden.', ['musste', 'muss', 'wurde'], 'musste'),
        fill('Die Frist konnte leider nicht eingehalten {werden}.', 'Tiếc là thời hạn không thể được tuân thủ.'),
        choose('Wir blieben länger, weil alles geprüft ___.', ['werden musste', 'musste werden', 'wurde müssen'], 'werden musste'),
        order('Die Kunden / mussten / sofort / informiert / werden.', 'Khách hàng phải được thông báo ngay.'),
        fill('Das Paket {sollte} gestern abgeholt werden.', 'Gói hàng lẽ ra phải được lấy hôm qua.'),
        choose('Der Fehler konnte schnell ___ werden.', ['behoben', 'beheben', 'behebt'], 'behoben'),
      ],
      zustandspassiv: [
        choose('Die Tür ___ abgeschlossen, ich habe keinen Schlüssel.', ['ist', 'wird'], 'ist'),
        choose('Das Büro ___ jeden Abend um 19 Uhr geschlossen.', ['wird', 'ist'], 'wird'),
        fill('Als ich kam, {war} das Essen schon vorbereitet.', 'Khi tôi đến, đồ ăn đã được chuẩn bị.'),
        fill('Die Stelle ist leider schon {besetzt}.', 'Tiếc là vị trí đã có người.'),
        order('Der Vertrag / ist / schon / unterschrieben.', 'Hợp đồng đã được ký.'),
        choose('Gerade ___ der Vertrag unterschrieben.', ['wird', 'ist'], 'wird'),
      ],
      passiversatz: [
        choose('Das Problem ___ sich leicht lösen.', ['lässt', 'lassen', 'ist'], 'lässt'),
        fill('Die Aufgabe ist {machbar}.', 'Nhiệm vụ làm được.'),
        choose('Er ist nur per E-Mail ___.', ['erreichbar', 'erreicht', 'erreichen'], 'erreichbar'),
        fill('Das lässt sich nicht {ändern}.', 'Điều đó không thay đổi được.'),
        order('Die Fehler / lassen / sich / nicht / vermeiden.', 'Các lỗi không tránh được.'),
        choose('Die Wohnungen sind kaum ___.', ['bezahlbar', 'bezahlen', 'bezahlt'], 'bezahlbar'),
      ],
    },
    reading: {
      title_de: 'Fachkräftemangel in Deutschland',
      text_de:
        'In vielen Branchen fehlen Fachkräfte. Besonders in der Pflege, im Handwerk und in der IT können offene Stellen oft monatelang nicht besetzt werden. Im letzten Jahr mussten einige Betriebe sogar Aufträge ablehnen. Die Gründe sind bekannt: Viele Beschäftigte gehen bald in Rente, und zu wenige junge Menschen werden ausgebildet. Das Problem lässt sich nicht schnell lösen. Unternehmen versuchen deshalb, Quereinsteiger zu gewinnen und Fachkräfte im Ausland anzuwerben. Außerdem legen viele Bewerber heute großen Wert auf Gleitzeit und Homeoffice. Wer flexible Arbeitszeiten anbietet, ist für junge Leute attraktiver.',
      gloss: {
        Branchen: 'ngành nghề',
        Pflege: 'ngành điều dưỡng',
        Handwerk: 'nghề thủ công',
        monatelang: 'hàng tháng trời',
        ablehnen: 'từ chối',
        Beschäftigte: 'người lao động',
        gewinnen: 'thu hút được',
        anbietet: 'cung cấp (anbieten)',
      },
      questions: [
        mc('Ngành nào được nhắc đến là thiếu lao động?', ['điều dưỡng, thủ công, công nghệ thông tin', 'ngân hàng, bảo hiểm', 'du lịch, nhà hàng'], 'điều dưỡng, thủ công, công nghệ thông tin'),
        tf('Einige Betriebe mussten Aufträge ablehnen.', true),
        tf('Laut Text lässt sich das Problem schnell lösen.', false, { explain: 'Das Problem lässt sich nicht schnell lösen.' }),
        mc('Người xin việc ngày nay coi trọng điều gì?', ['giờ làm linh hoạt và làm ở nhà', 'xe công ty', 'văn phòng lớn'], 'giờ làm linh hoạt và làm ở nhà'),
      ],
    },
  },
});
