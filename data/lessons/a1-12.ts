// A1 · 12 Công việc và học tập — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a1-12',
  points: [
    {
      key: 'praeteritum',
      rule_key: 'praeteritum-sein-haben',
      category: 'tense',
      title_vi: 'Präteritum của sein và haben: war, hatte',
      explanation_vi: 'Kể quá khứ của sein/haben dùng Präteritum: ich war, du warst, wir waren; ich hatte, du hattest, wir hatten (ich = er).',
    },
    {
      key: 'perfekt-wdh',
      rule_key: 'partizip-ii-unregelmaessig',
      category: 'tense',
      title_vi: 'Partizip II: bất quy tắc -en và không có ge-',
      explanation_vi: 'Động từ mạnh: geschrieben, gesprochen, geholfen. Không có ge-: -ieren (telefoniert), tiền tố không tách be-/er-/ver- (erklärt, verstanden) và wiederholen (wiederholt).',
    },
    {
      key: 'konjunktionen',
      rule_key: 'konjunktion-position-null',
      category: 'verb_position',
      title_vi: 'und, aber, oder, denn: vị trí 0, động từ vẫn ở vị trí 2',
      explanation_vi: 'Sau und/aber/oder/denn câu giữ trật tự bình thường: Ich bin müde, aber ich muss arbeiten. denn = vì, không đổi trật tự.',
    },
    {
      key: 'praep-zeit',
      rule_key: 'praep-zeit-dativ',
      category: 'case',
      title_vi: 'Giới từ thời gian + Dativ: vor, nach, seit, in',
      explanation_vi: 'vor (… trước), nach (sau …), seit (từ … đến nay), in (… nữa) đi với Dativ: vor einem Jahr, nach dem Kurs, seit zwei Monaten, in einer Woche. seit đi với Präsens.',
    },
  ],
  lessons: [
    {
      title_vi: 'Hồi trước ở trường',
      goal_vi: 'Kể chuyện học hành đã qua với war và hatte; dùng từ ngữ trong lớp học.',
      items: [
        'Lehrer', 'Schüler', 'Student', 'Universität', 'Unterricht', 'Prüfung', 'Wörterbuch', 'Wort', 'Satz', 'Frage',
        'Antwort', 'Aufgabe', 'Heft', 'Kuli', 'richtig', 'falsch', 'einfach', 'schwierig', 'fleißig', 'wichtig',
        'Präteritum: war, hatte',
      ],
      grammar: {
        point: 'praeteritum',
        sections: [
          {
            text_vi:
              'Kể quá khứ của **sein** và **haben**, người Đức hay dùng **Präteritum** hơn Perfekt: sein → **war**, haben → **hatte**. Ngôi ich và er/sie/es giống nhau: ich **war**, er **war**; ich **hatte**, er **hatte**.',
            table: 'Đại từ | sein | haben\nich | war | hatte\ndu | warst | hattest\ner/sie/es | war | hatte\nwir | waren | hatten\nihr | wart | hattet\nsie/Sie | waren | hatten',
            examples: [
              ['Gestern war ich krank.', 'Hôm qua tôi bị ốm.'],
              ['Wir hatten keine Zeit.', 'Chúng tôi không có thời gian.'],
            ],
            exercises: [
              fill('Gestern {war} ich müde.', 'Hôm qua tôi mệt.'),
              choose('Wir ___ eine Prüfung.', ['hatten', 'hatte', 'hattet'], 'hatten', { vi: 'Chúng tôi đã có một kỳ thi.' }),
              choose('___ du gestern im Unterricht?', ['Warst', 'War', 'Wart'], 'Warst', { vi: 'Hôm qua bạn có đi học không?' }),
            ],
          },
          {
            text_vi:
              'So sánh: Heute **ist** die Aufgabe einfach. – Gestern **war** sie schwierig. Ich **habe** heute Zeit. – Gestern **hatte** ich keine Zeit. Từ chỉ quá khứ: **gestern**, **letzte Woche**, **früher** (hồi trước), **vor zwei Jahren** (hai năm trước).',
            examples: [['Früher war ich Schülerin, jetzt bin ich Studentin.', 'Hồi trước tôi là học sinh, giờ tôi là sinh viên.']],
            exercises: [
              transform('Chuyển sang quá khứ (Präteritum)', 'Die Prüfung ist schwierig.', ['Die Prüfung war schwierig.']),
              transform('Chuyển sang quá khứ (Präteritum)', 'Ich habe eine Frage.', ['Ich hatte eine Frage.']),
              fill('Früher {hatte} er kein Wörterbuch.', 'Hồi trước anh ấy không có từ điển.'),
            ],
          },
          {
            text_vi:
              'Trong lớp học: **Ist das richtig oder falsch?** **Ich habe eine Frage.** **Wie schreibt man das Wort?** Nhận xét: Sie ist sehr **fleißig** (chăm chỉ). Die Prüfung ist **wichtig**. Die Aufgabe ist **einfach / schwierig**.',
            examples: [['Die Antwort war leider falsch.', 'Tiếc là câu trả lời sai.']],
            exercises: [
              choose('Die Antwort ist nicht falsch, sie ist ___.', ['richtig', 'schwierig', 'wichtig'], 'richtig', { vi: 'Câu trả lời không sai, nó đúng.' }),
              translate('Hôm qua tôi bị ốm.', ['Gestern war ich krank.', 'Ich war gestern krank.']),
            ],
          },
        ],
        mixed: [
          translate('Chúng tôi đã có một kỳ thi.', ['Wir hatten eine Prüfung.']),
          choose('Wo ___ ihr gestern?', ['wart', 'waren', 'war'], 'wart', { vi: 'Hôm qua các bạn ở đâu?' }),
          transform('Chuyển sang quá khứ (Präteritum)', 'Er ist Lehrer.', ['Er war Lehrer.']),
          fill('Die Studenten {waren} sehr fleißig.', 'Các sinh viên đã rất chăm chỉ.'),
          order('Letzte Woche / hatte / ich / keine Zeit.', 'Tuần trước tôi không có thời gian.'),
        ],
      },
      dialogue: {
        title_de: 'Die Prüfung',
        lines: [
          { speaker: 'A', de: 'Wie war die Prüfung gestern?', vi: 'Kỳ thi hôm qua thế nào?' },
          { speaker: 'B', de: 'Sie war schwierig! Ich hatte nicht genug Zeit.', vi: 'Khó lắm! Mình không đủ thời gian.' },
          { speaker: 'A', de: 'Waren die Fragen schwer?', vi: 'Câu hỏi có khó không?' },
          { speaker: 'B', de: 'Ja, besonders der Text. Ich hatte kein Wörterbuch.', vi: 'Có, nhất là bài đọc. Mình không có từ điển.' },
          { speaker: 'A', de: 'Und die Grammatik?', vi: 'Còn ngữ pháp?' },
          { speaker: 'B', de: 'Die war einfach. Ich glaube, meine Antworten waren richtig.', vi: 'Phần đó dễ. Mình nghĩ các câu trả lời của mình đúng.' },
          { speaker: 'A', de: 'Du warst auch sehr fleißig!', vi: 'Bạn cũng đã rất chăm chỉ mà!' },
          { speaker: 'B', de: 'Danke! Aber jetzt bin ich sehr müde.', vi: 'Cảm ơn! Nhưng giờ mình mệt lắm.' },
        ],
        gloss: { genug: 'đủ', besonders: 'nhất là', Text: 'bài đọc', Grammatik: 'ngữ pháp' },
        questions: [
          tf('Die Prüfung war einfach.', false, { explain: 'Sie war schwierig!' }),
          mc('B thiếu gì khi thi?', ['thời gian và từ điển', 'bút bi', 'vở'], 'thời gian và từ điển'),
          mc('Phần nào dễ?', ['ngữ pháp', 'bài đọc', 'tất cả'], 'ngữ pháp'),
          tf('B war sehr fleißig.', true),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Viết 5 câu về một ngày học hoặc một kỳ thi trước đây: thế nào, bạn có gì, không có gì (war, hatte).',
    },
    {
      title_vi: 'Hôm qua ở chỗ làm',
      goal_vi: 'Kể việc đã làm ở chỗ làm, ôn Partizip II bất quy tắc và không có ge-.',
      items: [
        'Firma', 'Büro', 'Chef', 'Kollege', 'Computer', 'E-Mail', 'Gespräch', 'Kunde', 'schreiben', 'sagen', 'erklären',
        'wiederholen', 'antworten', 'üben', 'telefonieren', 'Partizip II bất quy tắc: -en', 'Partizip II không có ge-',
        'Konto',
      ],
      grammar: {
        point: 'perfekt-wdh',
        sections: [
          {
            text_vi:
              'Ôn Perfekt: **haben/sein** (vị trí 2) + **Partizip II** (cuối câu). Động từ **mạnh** (bất quy tắc) có Partizip **-en**, thường đổi nguyên âm: schreiben → **geschrieben**, sprechen → **gesprochen**, helfen → **geholfen**. Động từ yếu: **ge- … -t**: sagen → **gesagt**, üben → **geübt**.',
            table: 'Nguyên mẫu | Partizip II\nschreiben | geschrieben\nsprechen | gesprochen\nsagen | gesagt\nüben | geübt',
            examples: [
              ['Ich habe eine E-Mail geschrieben.', 'Tôi đã viết một email.'],
              ['Hast du mit dem Chef gesprochen?', 'Bạn đã nói chuyện với sếp chưa?'],
            ],
            exercises: [
              fill('Ich habe einen Brief {geschrieben}.', 'Tôi đã viết một lá thư.'),
              choose('Was hat der Chef ___?', ['gesagt', 'gesagen', 'sagte'], 'gesagt', { vi: 'Sếp đã nói gì?' }),
              fill('Wir haben die Aussprache {geübt}.', 'Chúng tôi đã luyện phát âm.'),
            ],
          },
          {
            text_vi:
              '**Không có ge-**: động từ đuôi **-ieren** (telefonieren → **telefoniert**, studieren → studiert) và động từ có tiền tố không tách **be-, er-, ver-** (erklären → **erklärt**, verstehen → **verstanden**). Riêng **wiederholen** (ôn lại) không tách nên cũng không có ge-: **wiederholt**; còn wiederkommen thì tách: wiedergekommen.',
            table: 'Nguyên mẫu | Partizip II\ntelefonieren | telefoniert\nerklären | erklärt\nverstehen | verstanden\nwiederholen | wiederholt',
            examples: [
              ['Die Lehrerin hat die Grammatik erklärt.', 'Cô giáo đã giải thích ngữ pháp.'],
              ['Ich habe mit einem Kunden telefoniert.', 'Tôi đã nói chuyện điện thoại với một khách hàng.'],
            ],
            exercises: [
              choose('Er hat Medizin ___.', ['studiert', 'gestudiert'], 'studiert', { vi: 'Anh ấy đã học y.' }),
              fill('Ich habe die Aufgabe nicht {verstanden}.', 'Tôi đã không hiểu bài tập.'),
              choose('Hast du die Wörter ___?', ['wiederholt', 'gewiederholt'], 'wiederholt', { vi: 'Bạn đã ôn từ vựng chưa?' }),
            ],
          },
          {
            text_vi:
              '**antworten** (trả lời) có gốc tận cùng -t: du **antwortest**; Perfekt: hat **geantwortet**. Câu hỏi Perfekt: **Hast** du schon **geantwortet**? Chưa: Ich habe **noch nicht** geantwortet.',
            examples: [['Der Kunde hat noch nicht geantwortet.', 'Khách hàng vẫn chưa trả lời.']],
            exercises: [
              fill('Hast du schon {geantwortet}?', 'Bạn đã trả lời chưa?'),
              order('Ich / habe / noch nicht / telefoniert.', 'Tôi vẫn chưa gọi điện.'),
            ],
          },
        ],
        mixed: [
          transform('Chuyển sang Perfekt', 'Ich schreibe eine E-Mail.', ['Ich habe eine E-Mail geschrieben.']),
          transform('Chuyển sang Perfekt', 'Der Chef erklärt die Aufgabe.', ['Der Chef hat die Aufgabe erklärt.']),
          translate('Tôi đã gọi điện với một khách hàng.', ['Ich habe mit einem Kunden telefoniert.', 'Ich habe einen Kunden angerufen.']),
          choose('Mein Kollege hat mir ___.', ['geholfen', 'gehelft', 'helfen'], 'geholfen', { vi: 'Đồng nghiệp đã giúp tôi.' }),
          fill('Was hast du {gesagt}?', 'Bạn đã nói gì?'),
        ],
      },
      dialogue: {
        title_de: 'Im Büro',
        lines: [
          { speaker: 'A', de: 'Guten Morgen, Frau Lang! Was haben Sie gestern gemacht?', vi: 'Chào chị Lang! Hôm qua chị đã làm gì?' },
          { speaker: 'B', de: 'Ich habe viele E-Mails geschrieben und mit Kunden telefoniert.', vi: 'Tôi viết nhiều email và gọi điện cho khách hàng.' },
          { speaker: 'A', de: 'Hat der Kunde aus Hamburg schon geantwortet?', vi: 'Khách ở Hamburg đã trả lời chưa?' },
          { speaker: 'B', de: 'Nein, noch nicht. Aber ich habe mit seinem Kollegen gesprochen.', vi: 'Chưa ạ. Nhưng tôi đã nói chuyện với đồng nghiệp của ông ấy.' },
          { speaker: 'A', de: 'Gut. Haben Sie den neuen Computer schon bekommen?', vi: 'Tốt. Chị đã nhận máy tính mới chưa?' },
          { speaker: 'B', de: 'Ja, Herr Weber hat ihn mir gestern erklärt.', vi: 'Rồi, hôm qua anh Weber đã hướng dẫn tôi.' },
          { speaker: 'A', de: 'Und das Gespräch mit dem Chef?', vi: 'Còn buổi nói chuyện với sếp?' },
          { speaker: 'B', de: 'Das war gut. Er hat gesagt, ich arbeite sehr gut.', vi: 'Tốt ạ. Sếp nói tôi làm việc rất tốt.' },
        ],
        gloss: { Kunden: 'khách hàng (số nhiều/Dativ)', seinem: 'của ông ấy (Dativ)', Kollegen: 'đồng nghiệp (Dativ)', neuen: 'mới', bekommen: 'nhận được' },
        questions: [
          mc('Hôm qua chị Lang đã làm gì?', ['viết email và gọi điện cho khách', 'đi họp', 'nghỉ ốm'], 'viết email và gọi điện cho khách'),
          tf('Der Kunde aus Hamburg hat schon geantwortet.', false),
          tf('Herr Weber hat den Computer erklärt.', true),
          mc('Sếp nói gì?', ['chị làm việc rất tốt', 'chị phải làm nhiều hơn', 'chị nên nghỉ'], 'chị làm việc rất tốt'),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Viết 5 câu kể hôm qua bạn đã làm gì ở chỗ làm hoặc ở lớp (Perfekt: geschrieben, telefoniert, erklärt, verstanden…).',
    },
    {
      title_vi: 'Nghề nghiệp và ước mơ',
      goal_vi: 'Nói về nghề nghiệp, lý do và mong muốn; nối câu bằng und, aber, oder, denn.',
      items: [
        'Geld', 'Job', 'Ingenieur', 'Krankenpfleger', 'Koch', 'Verkäufer', 'wissen', 'kennen', 'verdienen', 'werden',
        'arbeitslos', 'aber', 'oder', 'denn', 'als … arbeiten', 'Liên từ und, aber, oder, denn: vị trí 0',
      ],
      grammar: {
        point: 'konjunktionen',
        sections: [
          {
            text_vi:
              'Nối hai câu chính bằng **und** (và), **aber** (nhưng), **oder** (hoặc), **denn** (vì). Các liên từ này đứng ở **vị trí 0**: không tính là một vị trí, nên câu sau **giữ trật tự bình thường**, động từ ở vị trí 2: Ich bin müde, **aber** ich **muss** arbeiten. Trước aber và denn có dấu phẩy.',
            table: 'Liên từ | Ví dụ\nund | Ich arbeite und er studiert.\naber | Der Job ist toll, aber ich verdiene wenig.\noder | Kommst du oder bleibst du?\ndenn | Ich lerne Deutsch, denn ich will in Deutschland arbeiten.',
            examples: [['Ich lerne Deutsch, denn ich will in Deutschland studieren.', 'Tôi học tiếng Đức vì tôi muốn du học Đức.']],
            exercises: [
              order('Ich bin müde, / aber / ich / muss / arbeiten.', 'Tôi mệt nhưng tôi phải làm việc.'),
              choose('Ich lerne viel, denn ___ eine Prüfung.', ['ich habe morgen', 'morgen habe ich', 'habe ich morgen'], 'ich habe morgen', {
                vi: 'Tôi học nhiều vì mai tôi có kỳ thi.',
                explain: 'Sau denn câu giữ trật tự bình thường: chủ ngữ + động từ.',
              }),
              fill('Trinkst du Kaffee {oder} Tee?', 'Bạn uống cà phê hay trà?'),
            ],
          },
          {
            text_vi:
              '**denn** = vì, nối hai câu chính, **không đổi trật tự từ** (ở A2 sẽ học **weil**, đẩy động từ xuống cuối). Chọn theo nghĩa: thêm ý → und; đối lập → aber; lựa chọn → oder; lý do → denn.',
            examples: [['Sie verdient gut, aber sie hat wenig Zeit.', 'Cô ấy kiếm khá nhưng ít thời gian.']],
            exercises: [
              choose('Ich gehe nicht zur Arbeit, ___ ich bin krank.', ['denn', 'aber', 'oder'], 'denn', { vi: 'Tôi không đi làm vì tôi bị ốm.' }),
              choose('Die Arbeit ist schwer, ___ sie ist interessant.', ['aber', 'denn', 'oder'], 'aber', { vi: 'Công việc vất vả nhưng thú vị.' }),
              fill('Ich bin Ingenieur {und} meine Frau ist Köchin.', 'Tôi là kỹ sư và vợ tôi là đầu bếp.'),
            ],
          },
          {
            text_vi:
              'Nói nghề: **Ich bin Ingenieur.** (không mạo từ) hoặc **Ich arbeite als Krankenpfleger.** Muốn trở thành: **Ich will Arzt werden.** **wissen** (biết thông tin): Ich **weiß** es nicht. **kennen** (biết người, nơi): **Kennst** du Berlin?',
            table: 'Đại từ | wissen\nich | weiß\ndu | weißt\ner/sie/es | weiß\nwir | wissen',
            examples: [
              ['Ich arbeite als Verkäuferin.', 'Tôi làm nhân viên bán hàng.'],
              ['Weißt du die Antwort?', 'Bạn biết câu trả lời không?'],
            ],
            exercises: [
              choose('___ du Herrn Weber?', ['Kennst', 'Weißt'], 'Kennst', { vi: 'Bạn có quen ông Weber không?' }),
              fill('Ich {weiß} es nicht.', 'Tôi không biết.'),
            ],
          },
        ],
        mixed: [
          transform('Nối hai câu bằng „aber“', 'Der Job ist toll. Ich verdiene wenig.', ['Der Job ist toll, aber ich verdiene wenig.']),
          transform('Nối hai câu bằng „denn“', 'Ich lerne Deutsch. Ich will in Deutschland arbeiten.', [
            'Ich lerne Deutsch, denn ich will in Deutschland arbeiten.',
          ]),
          translate('Tôi làm kỹ sư.', ['Ich bin Ingenieur.', 'Ich arbeite als Ingenieur.', 'Ich bin Ingenieurin.', 'Ich arbeite als Ingenieurin.']),
          choose('Ich bleibe zu Hause, denn ___ krank.', ['ich bin', 'bin ich'], 'ich bin', { vi: 'Tôi ở nhà vì tôi bị ốm.' }),
          order('Ich / will / Koch / werden.', 'Tôi muốn trở thành đầu bếp.'),
        ],
      },
      dialogue: {
        title_de: 'Was willst du werden?',
        lines: [
          { speaker: 'A', de: 'Was machst du beruflich, Linh?', vi: 'Linh làm nghề gì?' },
          { speaker: 'B', de: 'Ich arbeite als Verkäuferin, aber ich will Krankenpflegerin werden.', vi: 'Mình làm nhân viên bán hàng, nhưng mình muốn trở thành y tá.' },
          { speaker: 'A', de: 'Warum?', vi: 'Sao vậy?' },
          { speaker: 'B', de: 'Die Arbeit im Geschäft ist langweilig und ich verdiene nicht viel Geld.', vi: 'Làm ở cửa hàng chán, và mình kiếm không được nhiều tiền.' },
          { speaker: 'A', de: 'Und warum Krankenpflegerin?', vi: 'Còn sao lại là y tá?' },
          { speaker: 'B', de: 'Ich helfe gern Menschen, und in Deutschland sucht man Krankenpfleger.', vi: 'Mình thích giúp người, và ở Đức người ta đang cần y tá.' },
          { speaker: 'A', de: 'Das stimmt. Mein Bruder ist Krankenpfleger, denn er findet den Beruf wichtig.', vi: 'Đúng vậy. Anh mình là y tá, vì anh ấy thấy nghề này quan trọng.' },
          { speaker: 'B', de: 'Kennst du die Ausbildung? Wie lange dauert sie?', vi: 'Bạn biết về chương trình đào tạo không? Học bao lâu?' },
          { speaker: 'A', de: 'Drei Jahre, glaube ich.', vi: 'Ba năm, mình nghĩ vậy.' },
        ],
        gloss: {
          beruflich: 'về nghề nghiệp',
          Verkäuferin: 'nhân viên bán hàng (nữ)',
          Krankenpflegerin: 'y tá (nữ)',
          warum: 'tại sao',
          Menschen: 'con người',
          man: 'người ta',
          stimmt: 'đúng (das stimmt)',
          Ausbildung: 'chương trình đào tạo nghề',
        },
        questions: [
          mc('Linh làm nghề gì?', ['nhân viên bán hàng', 'y tá', 'đầu bếp'], 'nhân viên bán hàng'),
          mc('Linh muốn trở thành gì?', ['y tá', 'bác sĩ', 'kỹ sư'], 'y tá'),
          tf('Linh verdient viel Geld.', false),
          tf('Der Bruder von A ist Krankenpfleger.', true),
        ],
        dictation: [3, 8],
      },
      writing_prompt_vi:
        'Viết 5 câu về nghề của bạn hoặc người thân và nghề bạn muốn làm (Ich will … werden), dùng und, aber, oder, denn.',
    },
    {
      title_vi: 'Những mốc thời gian của tôi',
      goal_vi: 'Kể các mốc học tập và công việc: vor einem Jahr, seit zwei Monaten, nach dem Kurs, in einer Woche.',
      items: ['letzte Woche', 'nächstes Jahr', 'geboren', 'Plan', 'bald', 'Kollegin', 'Deutschkurs', 'Anfang', 'vor, nach, seit, in + Dativ (thời gian)'],
      grammar: {
        point: 'praep-zeit',
        sections: [
          {
            text_vi:
              'Giới từ **vor**, **nach**, **seit**, **in** chỉ thời gian đi với **Dativ**: **vor** einem Jahr (một năm trước), **nach** dem Kurs (sau khóa học), **seit** zwei Monaten (từ hai tháng nay), **in** einer Woche (một tuần nữa). Mạo từ Dativ: **dem** (der/das), **der** (die), **einem/einer**; số nhiều **den** và danh từ thêm **-n**: seit zwei Jahr**en**, vor drei Woche**n**.',
            table: 'Giới từ | Nghĩa | Ví dụ\nvor | … trước | vor einem Monat\nnach | sau … | nach der Arbeit\nseit | từ … đến nay | seit zwei Jahren\nin | … nữa | in einer Woche',
            examples: [
              ['Vor einem Jahr war ich in Hanoi.', 'Một năm trước tôi ở Hà Nội.'],
              ['Nach der Arbeit gehe ich nach Hause.', 'Sau giờ làm tôi về nhà.'],
            ],
            exercises: [
              choose('Ich war ___ einem Jahr in Berlin.', ['vor', 'seit', 'in'], 'vor', { vi: 'Một năm trước tôi ở Berlin.' }),
              fill('Ich lerne seit zwei {Monaten} Deutsch. (Monat)', 'Tôi học tiếng Đức được hai tháng rồi.'),
              choose('Nach ___ Kurs trinken wir einen Kaffee.', ['dem', 'den', 'der'], 'dem', { vi: 'Sau khóa học chúng ta uống cà phê.' }),
            ],
          },
          {
            text_vi:
              '**seit** + **Präsens**: việc bắt đầu trong quá khứ và **vẫn còn**: Ich **wohne seit** drei Jahren hier (không dùng Perfekt như tiếng Anh). **vor** + quá khứ: Ich **bin vor** drei Jahren nach Deutschland **gekommen**. **in** + tương lai, thường dùng Präsens: **In** zwei Wochen **habe** ich Urlaub. Tiếng Việt nói "ba năm trước", tiếng Đức đặt vor **trước**: vor drei Jahren.',
            examples: [
              ['Ich wohne seit drei Jahren in Leipzig.', 'Tôi sống ở Leipzig được ba năm rồi.'],
              ['In zwei Wochen habe ich Urlaub.', 'Hai tuần nữa tôi được nghỉ phép.'],
            ],
            exercises: [
              choose('Ich ___ seit zwei Jahren in dieser Firma.', ['arbeite', 'habe gearbeitet'], 'arbeite', { vi: 'Tôi làm ở công ty này được hai năm rồi.', explain: 'seit + việc vẫn còn → Präsens.' }),
              choose('___ einer Woche habe ich eine Prüfung. (một tuần nữa)', ['In', 'Vor', 'Seit'], 'In', { vi: 'Một tuần nữa tôi có bài thi.' }),
              translate('Tôi đã đến Đức hai năm trước.', ['Ich bin vor zwei Jahren nach Deutschland gekommen.', 'Vor zwei Jahren bin ich nach Deutschland gekommen.']),
            ],
          },
          {
            text_vi:
              'Không có giới từ thì cụm thời gian ở **Akkusativ**: **letzte Woche** (tuần trước), **letzten Monat**, **letztes Jahr**; **nächste Woche**, **nächstes Jahr** (năm sau). Năm sinh: Ich bin **1998 geboren** (không nói "in 1998"). **bald** = sắp, chẳng bao lâu nữa. **am Anfang** = lúc đầu.',
            examples: [
              ['Letztes Jahr war ich in Vietnam.', 'Năm ngoái tôi ở Việt Nam.'],
              ['Ich bin 1995 in Hue geboren.', 'Tôi sinh năm 1995 ở Huế.'],
            ],
            exercises: [
              choose('___ Woche hatte ich viel Arbeit.', ['Letzte', 'Letzten', 'Letztes'], 'Letzte', { vi: 'Tuần trước tôi có nhiều việc.' }),
              fill('Ich bin 2001 in Da Nang {geboren}.', 'Tôi sinh năm 2001 ở Đà Nẵng.'),
            ],
          },
        ],
        mixed: [
          choose('Seit ___ Woche lerne ich jeden Tag.', ['einer', 'einem', 'eine'], 'einer', { vi: 'Từ một tuần nay ngày nào tôi cũng học.' }),
          fill('Vor drei {Wochen} habe ich die Prüfung gemacht. (Woche)', 'Ba tuần trước tôi đã thi.'),
          translate('Tôi học tiếng Đức được sáu tháng rồi.', ['Ich lerne seit sechs Monaten Deutsch.', 'Seit sechs Monaten lerne ich Deutsch.']),
          order('Nach / dem / Kurs / möchte / ich / in Deutschland / arbeiten.', 'Sau khóa học tôi muốn làm việc ở Đức.'),
          choose('Ich habe ___ Jahr eine Reise gemacht.', ['letztes', 'letzte', 'letzten'], 'letztes', { vi: 'Năm ngoái tôi đã đi du lịch.' }),
        ],
      },
      dialogue: {
        title_de: 'Wie lange schon?',
        lines: [
          { speaker: 'A', de: 'Wie lange bist du schon in Deutschland?', vi: 'Bạn ở Đức được bao lâu rồi?' },
          { speaker: 'B', de: 'Ich bin vor einem Jahr nach Leipzig gekommen.', vi: 'Mình đến Leipzig một năm trước.' },
          { speaker: 'A', de: 'Und seit wann lernst du Deutsch?', vi: 'Còn bạn học tiếng Đức từ khi nào?' },
          { speaker: 'B', de: 'Seit zwei Jahren. Am Anfang hatte ich einen Deutschkurs in Hanoi.', vi: 'Được hai năm rồi. Lúc đầu mình học một khóa tiếng Đức ở Hà Nội.' },
          { speaker: 'A', de: 'Arbeitest du schon hier?', vi: 'Bạn đã đi làm ở đây chưa?' },
          { speaker: 'B', de: 'Ja, seit drei Monaten in einer Firma. Meine Kollegin hilft mir viel.', vi: 'Rồi, được ba tháng ở một công ty. Đồng nghiệp giúp mình nhiều.' },
          { speaker: 'A', de: 'Toll! Und was ist dein Plan?', vi: 'Tuyệt! Còn kế hoạch của bạn là gì?' },
          { speaker: 'B', de: 'In einem Monat habe ich eine Prüfung. Nach der Prüfung möchte ich an der Universität studieren.', vi: 'Một tháng nữa mình có bài thi. Sau bài thi mình muốn học đại học.' },
          { speaker: 'A', de: 'Viel Glück! Letzte Woche habe ich auch eine Prüfung gemacht.', vi: 'Chúc may mắn! Tuần trước mình cũng đi thi.' },
          { speaker: 'B', de: 'Und? Hast du bestanden?', vi: 'Thế nào? Bạn đỗ không?' },
          { speaker: 'A', de: 'Ja! Nächstes Jahr mache ich einen neuen Kurs.', vi: 'Đỗ! Năm sau mình học một khóa mới.' },
        ],
        gloss: { 'wie lange': 'bao lâu', 'seit wann': 'từ khi nào', bestanden: 'đã đỗ (bestehen)', 'viel Glück': 'chúc may mắn' },
        questions: [
          mc('B đến Leipzig khi nào?', ['một năm trước', 'hai năm trước', 'ba tháng trước'], 'một năm trước'),
          tf('B lernt seit zwei Jahren Deutsch.', true),
          mc('B làm ở công ty được bao lâu?', ['ba tháng', 'một năm', 'hai năm'], 'ba tháng'),
          tf('Die Prüfung von B ist in einer Woche.', false, { explain: 'In einem Monat habe ich eine Prüfung.' }),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Viết 5 câu về các mốc của bạn: bạn sinh năm nào, vor … bạn làm gì, seit … bạn học hoặc làm gì, in … bạn sẽ làm gì.',
    },
  ],
  test: {
    grammar: {
      praeteritum: [
        fill('Gestern {war} ich krank.', 'Hôm qua tôi bị ốm.'),
        choose('Wir ___ keine Zeit.', ['hatten', 'hatte'], 'hatten'),
        choose('Wo ___ du gestern?', ['warst', 'war', 'wart'], 'warst'),
        fill('Er {hatte} eine Prüfung.', 'Anh ấy đã có một kỳ thi.'),
        order('Letzte Woche / war / ich / in Berlin.', 'Tuần trước tôi ở Berlin.'),
        choose('Die Studenten ___ fleißig.', ['waren', 'war'], 'waren'),
      ],
      'perfekt-wdh': [
        choose('Ich habe einen Brief ___.', ['geschrieben', 'geschreibt'], 'geschrieben'),
        choose('Er hat Medizin ___.', ['studiert', 'gestudiert'], 'studiert'),
        fill('Was hast du {gesagt}?', 'Bạn đã nói gì?'),
        fill('Ich habe das nicht {verstanden}.', 'Tôi đã không hiểu cái đó.'),
        order('Wir / haben / mit dem Chef / gesprochen.', 'Chúng tôi đã nói chuyện với sếp.'),
        choose('Die Lehrerin hat die Grammatik ___.', ['erklärt', 'geerklärt'], 'erklärt'),
      ],
      konjunktionen: [
        choose('Ich bin müde, aber ___ arbeiten.', ['ich muss', 'muss ich'], 'ich muss'),
        choose('Ich lerne Deutsch, ___ ich will in Wien studieren.', ['denn', 'aber', 'oder'], 'denn'),
        fill('Kaffee {oder} Tee?', 'Cà phê hay trà?'),
        order('Er / ist / Koch / und / sie / ist / Lehrerin.', 'Anh ấy là đầu bếp và cô ấy là giáo viên.'),
        choose('Die Arbeit ist schwer, ___ ich mag sie.', ['aber', 'denn'], 'aber'),
        fill('Ich bleibe zu Hause, denn ich {bin} krank.', 'Tôi ở nhà vì tôi bị ốm.'),
      ],
      'praep-zeit': [
        choose('Ich wohne ___ drei Jahren hier.', ['seit', 'vor'], 'seit'),
        choose('___ einer Woche war ich krank.', ['Vor', 'Seit'], 'Vor'),
        fill('Nach {dem} Kurs gehen wir essen.', 'Sau khóa học chúng ta đi ăn.'),
        choose('In ___ Monat habe ich Urlaub.', ['einem', 'einen'], 'einem'),
        fill('Ich lerne seit zwei {Jahren} Deutsch. (Jahr)', 'Tôi học tiếng Đức được hai năm rồi.'),
        order('Vor / zwei / Wochen / war / ich / in Berlin.', 'Hai tuần trước tôi ở Berlin.'),
      ],
    },
    reading: {
      title_de: 'Mein Weg nach Deutschland',
      text_de:
        'Ich heiße Nam und bin 26 Jahre alt. Früher war ich Lehrer an einer Schule in Da Nang. Die Arbeit war schön, aber ich hatte nicht viel Geld. Vor zwei Jahren habe ich angefangen, Deutsch zu lernen, denn ich wollte in Deutschland arbeiten. Der Kurs war schwierig, aber ich war sehr fleißig. Ich habe jeden Tag Wörter wiederholt und viele Sätze geschrieben. Letztes Jahr habe ich die Prüfung gemacht und bestanden. Jetzt arbeite ich als Krankenpfleger in Leipzig. Meine Kollegen sind nett und mein Chef hat mir viel erklärt. Ich verdiene gut, aber manchmal vermisse ich meine Familie.',
      gloss: {
        'angefangen, … zu lernen': 'đã bắt đầu học',
        wollte: 'đã muốn',
        'letztes Jahr': 'năm ngoái',
        bestanden: 'đã thi đỗ',
        vermisse: 'nhớ (ai)',
      },
      questions: [
        mc('Hồi trước Nam làm nghề gì?', ['giáo viên', 'y tá', 'đầu bếp'], 'giáo viên'),
        tf('Früher hatte Nam viel Geld.', false, { explain: 'Ich hatte nicht viel Geld.' }),
        mc('Bây giờ Nam làm việc ở đâu?', ['Leipzig', 'Đà Nẵng', 'Berlin'], 'Leipzig'),
        tf('Nam hat die Prüfung bestanden.', true),
        tf('Nam vermisst manchmal seine Familie.', true),
      ],
    },
  },
});
