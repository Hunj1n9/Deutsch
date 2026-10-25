// B2 · 08 Di cư và văn hóa — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b2-08',
  points: [
    {
      key: 'waehrend-wohingegen',
      rule_key: 'waehrend-wohingegen-gegensatz',
      category: 'verb_position',
      title_vi: 'Đối lập với während, wohingegen',
      explanation_vi: 'während (trong khi) và wohingegen (còn, trái lại) mở câu phụ so sánh hai việc trái ngược, động từ cuối: Während Lan Tee trinkt, trinkt Minh Kaffee. wohingegen thường đứng sau câu chính. Phân biệt với während chỉ thời gian.',
    },
    {
      key: 'irrealer-vergleich',
      rule_key: 'irrealer-vergleich-vergangenheit',
      category: 'tense',
      title_vi: 'So sánh không thật: als, als ob (cả quá khứ)',
      explanation_vi: 'als + Konjunktiv II (động từ ngay sau als) hoặc als ob (động từ cuối). Hiện tại: als wäre er hier geboren. Quá khứ: als wäre er hier aufgewachsen / als hätte er nie Deutsch gelernt. Khác với so sánh thật: wie.',
    },
    {
      key: 'indefinitpronomen',
      rule_key: 'indefinitpronomen-jemand-einer',
      category: 'case',
      title_vi: 'Đại từ bất định: jemand, niemand, einer, keiner, welche',
      explanation_vi: 'jemand / niemand: Akk jemanden, Dat jemandem. einer/eine/eins, keiner/keine/keins thay cho danh từ đã nói và chia theo giống, cách (Hast du einen Stift? – Ja, ich habe einen). Số nhiều không mạo từ: welche.',
    },
  ],
  lessons: [
    {
      title_vi: 'Nhập cư: thủ tục và lịch sử',
      goal_vi: 'Nói về lịch sử nhập cư ở Đức và thủ tục giấy tờ; so sánh hai nhóm trái ngược bằng während, wohingegen.',
      items: [
        'Migration', 'Migrant', 'Zuwanderung', 'Einwanderungsland', 'Flüchtling', 'Asyl', 'Aufenthaltstitel', 'Arbeitserlaubnis',
        'Anerkennungsverfahren', 'Gastarbeiter', 'Vertragsarbeiter', 'Sprachkurs', 'einwandern', 'aufnehmen', 'abschieben',
        'ausländisch', 'einheimisch', 'wohingegen', 'während: đối lập', 'Auswanderer', 'Einbürgerungstest', 'Integrationskurs',
        'Landeskunde', 'Ausländerbehörde', 'Visumantrag', 'Doppelstaatsbürgerschaft', 'sich niederlassen', 'einbürgern',
        'aufenthaltsberechtigt', 'gebürtig',
      ],
      grammar: {
        point: 'waehrend-wohingegen',
        sections: [
          {
            text_vi:
              '**während** có hai nghĩa. Nghĩa thời gian "trong lúc" đã học ở B1. Nghĩa **đối lập** "trong khi (ngược lại)": so sánh hai người/việc **khác nhau**: **Während** im Westen Gastarbeiter **arbeiteten**, **kamen** in die DDR Vertragsarbeiter. Câu phụ, động từ **cuối**; đứng đầu thì câu chính bắt đầu bằng **động từ**.',
            examples: [
              ['Während meine Eltern kaum Deutsch sprechen, bin ich zweisprachig.', 'Trong khi bố mẹ tôi hầu như không nói tiếng Đức, tôi thì song ngữ.'],
              ['Während Lan schnell eine Arbeitserlaubnis bekam, musste Minh lange warten.', 'Trong khi Lan nhanh chóng có giấy phép lao động, Minh phải đợi lâu.'],
            ],
            exercises: [
              choose('Während Deutschland viele Fachkräfte braucht, ___ andere Länder Arbeitslosigkeit.', ['haben', 'sie haben', 'hat'], 'haben', { vi: 'Trong khi Đức cần nhiều lao động lành nghề, các nước khác lại có thất nghiệp.' }),
              fill('Während meine Schwester in Hanoi {lebt}, wohne ich in Leipzig.', 'Trong khi chị tôi sống ở Hà Nội, tôi sống ở Leipzig.'),
              order('Während / er / schon / eingebürgert / ist, / wartet / sie / noch / auf den Test.', 'Trong khi anh ấy đã nhập quốc tịch, cô ấy vẫn đang chờ bài thi.'),
            ],
          },
          {
            text_vi:
              '**wohingegen** chỉ có nghĩa **đối lập** (còn, trái lại), trang trọng hơn và thường đứng **sau câu chính**: Im Westen nannte man sie Gastarbeiter, **wohingegen** sie in der DDR Vertragsarbeiter **hießen**. Động từ cuối. Văn nói hay dùng **aber** hoặc **dagegen** (trạng từ, động từ ngay sau): Ich spreche Deutsch, mein Vater **dagegen** nicht.',
            table: 'Từ | Loại | Ví dụ\nwährend | liên từ, động từ cuối | Während A arbeitet, schläft B.\nwohingegen | liên từ, động từ cuối | A arbeitet, wohingegen B schläft.\ndagegen | trạng từ | A arbeitet. B dagegen schläft.',
            examples: [['Der Visumantrag dauerte drei Monate, wohingegen die Einbürgerung zwei Jahre dauerte.', 'Đơn xin thị thực mất ba tháng, còn nhập quốc tịch thì mất hai năm.']],
            exercises: [
              choose('Mein Bruder ist hier gebürtig, ___ ich erst mit zehn eingewandert bin.', ['wohingegen', 'dagegen', 'weil'], 'wohingegen', { vi: 'Anh tôi sinh ra ở đây, còn tôi mười tuổi mới nhập cư.' }),
              transform('Nối bằng "wohingegen"', 'Der Integrationskurs ist kostenlos. Der private Sprachkurs kostet viel.', [
                'Der Integrationskurs ist kostenlos, wohingegen der private Sprachkurs viel kostet.',
              ]),
              translate('Trong khi bố tôi là lao động hợp đồng, mẹ tôi đã đến Đức sau này.', [
                'Während mein Vater Vertragsarbeiter war, kam meine Mutter später nach Deutschland.',
                'Während mein Vater Vertragsarbeiter war, ist meine Mutter später nach Deutschland gekommen.',
              ]),
            ],
          },
        ],
        mixed: [
          choose('___ die Großeltern als Gastarbeiter kamen, sind die Enkel hier geboren.', ['Während', 'Wohingegen', 'Dagegen'], 'Während', { vi: 'Trong khi ông bà đến làm lao động khách, các cháu thì sinh ra ở đây.' }),
          fill('Ich habe den Einbürgerungstest bestanden, wohingegen mein Mann ihn wiederholen {muss}.', 'Tôi đã đỗ bài thi nhập quốc tịch, còn chồng tôi phải thi lại.'),
          choose('Während viele Länder Flüchtlinge aufnehmen, ___ andere ihre Grenzen.', ['schließen', 'sie schließen', 'schließt'], 'schließen', { vi: 'Trong khi nhiều nước tiếp nhận người tị nạn, các nước khác đóng cửa biên giới.' }),
          transform('Nối bằng "während" (đặt đầu câu)', 'Sie hat einen deutschen Pass. Ihr Bruder hat die Doppelstaatsbürgerschaft.', [
            'Während sie einen deutschen Pass hat, hat ihr Bruder die Doppelstaatsbürgerschaft.',
          ]),
          order('Er / spricht / perfekt Deutsch, / wohingegen / seine Eltern / kaum / Deutsch / sprechen.', 'Anh ấy nói tiếng Đức hoàn hảo, còn bố mẹ anh hầu như không nói được.'),
        ],
      },
      dialogue: {
        title_de: 'Zwei Wege nach Deutschland',
        lines: [
          { speaker: 'A', de: 'Wie sind deine Eltern eigentlich nach Deutschland gekommen?', vi: 'Mà bố mẹ bạn đến Đức bằng cách nào?' },
          { speaker: 'B', de: 'Mein Vater kam in den Achtzigern als Vertragsarbeiter in die DDR.', vi: 'Bố mình đến Đông Đức những năm tám mươi làm lao động hợp đồng.' },
          { speaker: 'A', de: 'Und deine Mutter?', vi: 'Còn mẹ bạn?' },
          { speaker: 'B', de: 'Während mein Vater schon hier lebte, war sie noch in Vietnam. Sie kam erst später mit einem Visum.', vi: 'Trong khi bố mình đã sống ở đây, mẹ vẫn còn ở Việt Nam. Mẹ sang sau bằng thị thực.' },
          { speaker: 'A', de: 'War es schwer, einen Aufenthaltstitel zu bekommen?', vi: 'Có khó để được giấy phép lưu trú không?' },
          { speaker: 'B', de: 'Sehr. Bei der Ausländerbehörde musste sie oft stundenlang warten.', vi: 'Rất khó. Ở sở ngoại kiều mẹ thường phải chờ hàng giờ.' },
          { speaker: 'A', de: 'Habt ihr inzwischen die deutsche Staatsbürgerschaft?', vi: 'Giờ nhà bạn đã có quốc tịch Đức chưa?' },
          { speaker: 'B', de: 'Ich wurde mit achtzehn eingebürgert, wohingegen meine Eltern ihren vietnamesischen Pass behalten wollten.', vi: 'Mình nhập quốc tịch năm mười tám tuổi, còn bố mẹ muốn giữ hộ chiếu Việt Nam.' },
          { speaker: 'A', de: 'Jetzt gibt es ja die Doppelstaatsbürgerschaft. Vielleicht ändern sie ihre Meinung.', vi: 'Giờ có hai quốc tịch rồi. Có khi bố mẹ bạn đổi ý.' },
        ],
        gloss: { Achtzigern: 'những năm tám mươi', DDR: 'Cộng hòa Dân chủ Đức (Đông Đức)', Visum: 'thị thực', stundenlang: 'hàng giờ liền', Staatsbürgerschaft: 'quốc tịch', Pass: 'hộ chiếu', behalten: 'giữ lại' },
        questions: [
          mc('Bố của B đến Đức với tư cách gì?', ['lao động hợp đồng ở Đông Đức', 'sinh viên', 'người tị nạn'], 'lao động hợp đồng ở Đông Đức'),
          tf('Die Mutter kam zur gleichen Zeit wie der Vater.', false, { explain: 'Sie kam erst später mit einem Visum.' }),
          mc('Mẹ của B gặp khó khăn gì?', ['phải chờ hàng giờ ở sở ngoại kiều', 'không tìm được nhà', 'thi trượt'], 'phải chờ hàng giờ ở sở ngoại kiều'),
          tf('B ist eingebürgert, die Eltern aber nicht.', true),
        ],
        dictation: [3, 7],
      },
      writing_prompt_vi:
        'So sánh hai con đường đến Đức (6–8 câu), ví dụ đi du học và đi làm: thủ tục, khó khăn, cơ hội; dùng ít nhất hai câu với während (đối lập) và hai câu với wohingegen.',
    },
    {
      title_vi: 'Bản sắc giữa hai nền văn hóa',
      goal_vi: 'Nói về tiếng mẹ đẻ, quê hương và cảm giác thuộc về; so sánh không thật ở hiện tại và quá khứ.',
      items: [
        'Identität', 'Muttersprache', 'Zweisprachigkeit', 'Zugehörigkeit', 'sich integrieren', 'sich fremd fühlen', 'Fuß fassen',
        'zwischen zwei Kulturen aufwachsen', 'einen Migrationshintergrund haben', 'Câu so sánh không thật: als ob / als',
        'Wurzel', 'Heimatland', 'Diaspora', 'Gastland', 'Mentalität', 'Akzent', 'Sprachniveau', 'sich einleben',
        'sich zuhause fühlen', 'integriert', 'heimatlos', 'mehrsprachig', 'Wurzeln schlagen', 'in zwei Welten leben',
        'Anpassungsfähigkeit', 'weitergeben', 'fremd im eigenen Land',
      ],
      grammar: {
        point: 'irrealer-vergleich',
        sections: [
          {
            text_vi:
              'Ôn: so sánh **không thật** dùng **als ob** (động từ cuối) hoặc **als** (động từ ngay sau) + **Konjunktiv II**: Sie spricht Deutsch, **als wäre** sie hier geboren. So sánh **thật** dùng **wie**: Sie spricht **wie** eine Muttersprachlerin. Câu chính hay có **so**: Er tut **so**, als ob …',
            table: 'Kiểu | Ví dụ\nso sánh thật (wie) | Er spricht wie ein Berliner.\nkhông thật, als ob | Er spricht, als ob er Berliner wäre.\nkhông thật, als | Er spricht, als wäre er Berliner.',
            examples: [
              ['Er spricht so gut Deutsch, als wäre es seine Muttersprache.', 'Anh ấy nói tiếng Đức giỏi như thể đó là tiếng mẹ đẻ.'],
              ['Ich fühle mich hier, als ob ich zu Hause wäre.', 'Tôi cảm thấy ở đây như thể đang ở nhà.'],
            ],
            exercises: [
              choose('Sie spricht ohne Akzent, als ___ sie in Wien aufgewachsen.', ['wäre', 'ob wäre', 'ist'], 'wäre', { vi: 'Cô ấy nói không có giọng lạ, như thể lớn lên ở Wien.' }),
              choose('Er kocht Phở genau ___ meine Großmutter.', ['wie', 'als ob', 'als'], 'wie', { vi: 'Anh ấy nấu phở y như bà tôi.' }),
              fill('Manchmal fühle ich mich, als ob ich nirgends hingehören {würde}.', 'Đôi khi tôi cảm thấy như thể mình không thuộc về đâu cả.'),
            ],
          },
          {
            text_vi:
              'So sánh không thật về **quá khứ**: **hätte / wäre + Partizip II**. Er kennt die Stadt, **als hätte** er immer hier **gelebt**. Sie sprach, **als ob** sie nie **weggewesen wäre**. haben hay sein theo Perfekt của động từ. Tiếng Việt: "như thể đã từng…".',
            table: 'Thời | als ob | als\nhiện tại | als ob er hier lebte / leben würde | als lebte er hier\nquá khứ (haben) | als ob er hier gelebt hätte | als hätte er hier gelebt\nquá khứ (sein) | als ob er hier aufgewachsen wäre | als wäre er hier aufgewachsen',
            examples: [['Meine Tochter spricht Vietnamesisch, als hätte sie nie in Deutschland gelebt.', 'Con gái tôi nói tiếng Việt như thể chưa bao giờ sống ở Đức.']],
            exercises: [
              fill('Er kennt alle Straßen, als hätte er sein ganzes Leben hier {gewohnt}.', 'Anh ấy biết mọi con đường như thể đã sống cả đời ở đây.'),
              choose('Sie tut so, als ob sie die Frage nicht ___ hätte.', ['verstanden', 'verstehen', 'versteht'], 'verstanden', { vi: 'Cô ấy làm như thể không hiểu câu hỏi.' }),
              transform('Viết lại với "als" (bỏ ob)', 'Er erzählt, als ob er selbst dabei gewesen wäre.', ['Er erzählt, als wäre er selbst dabei gewesen.']),
            ],
          },
        ],
        mixed: [
          choose('Nach zwei Jahren fühlte ich mich, als ___ ich schon immer hier gewohnt.', ['hätte', 'wäre', 'habe'], 'hätte', { vi: 'Sau hai năm tôi thấy như thể mình đã luôn sống ở đây.' }),
          fill('Er spricht Deutsch {wie} ein Muttersprachler.', 'Anh ấy nói tiếng Đức như người bản xứ.'),
          choose('Sie lebt so, als ob sie nie ausgewandert ___.', ['wäre', 'hätte', 'ist'], 'wäre', { vi: 'Cô ấy sống như thể chưa bao giờ di cư.' }),
          transform('Viết lại với "als ob"', 'Er tut so, als hätte er den Termin vergessen.', ['Er tut so, als ob er den Termin vergessen hätte.']),
          order('Manche / fühlen sich, / als ob / sie / fremd im eigenen Land / wären.', 'Có người cảm thấy như thể mình xa lạ ngay trên đất mình.'),
        ],
      },
      dialogue: {
        title_de: 'Wo ist meine Heimat?',
        lines: [
          { speaker: 'A', de: 'Du bist in Berlin geboren, aber deine Eltern kommen aus Vietnam. Wo fühlst du dich zuhause?', vi: 'Bạn sinh ra ở Berlin nhưng bố mẹ đến từ Việt Nam. Bạn thấy đâu là nhà?' },
          { speaker: 'B', de: 'Schwierige Frage. Ich bin zwischen zwei Kulturen aufgewachsen und lebe irgendwie in zwei Welten.', vi: 'Câu hỏi khó. Mình lớn lên giữa hai nền văn hóa và kiểu như sống giữa hai thế giới.' },
          { speaker: 'A', de: 'Wenn du in Vietnam bist, fühlst du dich dort fremd?', vi: 'Khi về Việt Nam, bạn có thấy xa lạ không?' },
          { speaker: 'B', de: 'Ein bisschen. Die Verwandten behandeln mich, als wäre ich eine Touristin.', vi: 'Một chút. Họ hàng đối xử với mình như thể mình là khách du lịch.' },
          { speaker: 'A', de: 'Und hier in Deutschland?', vi: 'Còn ở Đức thì sao?' },
          { speaker: 'B', de: 'Manche Leute loben mein Deutsch, als hätte ich es erst gestern gelernt. Dabei ist es meine Muttersprache!', vi: 'Có người khen tiếng Đức của mình như thể mình mới học hôm qua. Trong khi đó là tiếng mẹ đẻ của mình!' },
          { speaker: 'A', de: 'Das ist bestimmt frustrierend.', vi: 'Chắc bực mình lắm.' },
          { speaker: 'B', de: 'Ja. Aber ich habe gelernt, dass meine Identität aus beiden Teilen besteht. Das ist eine Stärke.', vi: 'Ừ. Nhưng mình đã học được rằng bản sắc của mình gồm cả hai phần. Đó là một thế mạnh.' },
          { speaker: 'A', de: 'Und deine Eltern?', vi: 'Còn bố mẹ bạn?' },
          { speaker: 'B', de: 'Sie haben hier Wurzeln geschlagen und geben uns trotzdem ihre Kultur weiter.', vi: 'Bố mẹ đã bén rễ ở đây và dù vậy vẫn truyền lại văn hóa cho bọn mình.' },
        ],
        gloss: { irgendwie: 'kiểu như, bằng cách nào đó', Verwandten: 'họ hàng', behandeln: 'đối xử', loben: 'khen', frustrierend: 'gây bực bội', besteht: 'gồm có (bestehen aus)', Stärke: 'thế mạnh' },
        questions: [
          mc('B sinh ra ở đâu?', ['Berlin', 'Hà Nội', 'Leipzig'], 'Berlin'),
          tf('In Vietnam behandeln die Verwandten B wie eine Einheimische.', false, { explain: '…als wäre ich eine Touristin.' }),
          mc('Điều gì làm B bực mình ở Đức?', ['người ta khen tiếng Đức của B như thể mới học', 'không tìm được việc', 'thời tiết'], 'người ta khen tiếng Đức của B như thể mới học'),
          tf('B sieht ihre doppelte Identität als Stärke.', true),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Viết về cảm giác "quê hương" của bạn hoặc một người bạn biết sống ở nước ngoài (6–8 câu); dùng ít nhất ba câu so sánh không thật với als / als ob, trong đó một câu ở quá khứ.',
    },
    {
      title_vi: 'Đa dạng và định kiến',
      goal_vi: 'Bàn về phân biệt đối xử, định kiến và xã hội đa văn hóa; dùng đúng jemand, niemand, einer, keiner, welche.',
      items: [
        'Vielfalt', 'Gemeinsamkeit', 'Diskriminierung', 'Rassismus', 'Chancengleichheit', 'Herausforderung',
        'Gesellschaftsschicht', 'anerkennen', 'benachteiligen', 'diskriminieren', 'bereichern', 'vermischen', 'überwinden',
        'multikulturell', 'fremdenfeindlich', 'weltoffen', 'vielfältig', 'gleichwertig', 'benachteiligt',
        'Đại từ bất định: man, jemand, niemand', 'einer, keiner, welche', 'Parallelgesellschaft', 'Willkommenskultur',
        'Stereotyp', 'Klischee', 'ausgrenzen', 'verallgemeinern', 'kulturübergreifend', 'vorurteilsfrei', 'interkulturell',
        'Brücken bauen', 'jemandem zur Seite stehen', 'Weltoffenheit', 'über den Tellerrand schauen',
      ],
      grammar: {
        point: 'indefinitpronomen',
        sections: [
          {
            text_vi:
              '**jemand** (ai đó) và **niemand** (không ai) chia cách: Nom **jemand**, Akk **jemanden**, Dat **jemandem**. Hat **jemand** Zeit? Ich kenne **niemanden** hier. Er hilft **jemandem**. **man** (người ta) chỉ có Nom; Akk là **einen**, Dat là **einem**: Das kann **einen** traurig machen.',
            table: 'Cách | jemand | niemand | man\nNominativ | jemand | niemand | man\nAkkusativ | jemanden | niemanden | einen\nDativ | jemandem | niemandem | einem',
            examples: [
              ['In der neuen Stadt kannte ich am Anfang niemanden.', 'Ở thành phố mới lúc đầu tôi không quen ai.'],
              ['Diskriminierung kann einen sehr verletzen.', 'Sự phân biệt đối xử có thể làm người ta rất tổn thương.'],
            ],
            exercises: [
              choose('Kennst du ___, der Vietnamesisch spricht?', ['jemanden', 'jemand', 'jemandem'], 'jemanden', { vi: 'Bạn có biết ai nói tiếng Việt không?' }),
              fill('Man darf {niemanden} wegen seiner Herkunft benachteiligen.', 'Không được đối xử bất công với ai vì nguồn gốc.'),
              choose('Sie hat ___ geholfen, eine Wohnung zu finden.', ['jemandem', 'jemanden', 'jemand'], 'jemandem', { vi: 'Cô ấy đã giúp một người tìm nhà.' }),
            ],
          },
          {
            text_vi:
              '**einer / eine / eins** (một cái/người) và **keiner / keine / keins** thay cho danh từ đã nói, đuôi theo **giống và cách** như mạo từ đứng một mình: Hast du **einen** Stift? – Ja, ich habe **einen**. / Nein, ich habe **keinen**. Giống trung: **eins / keins**. **Số nhiều** không có "một": dùng **welche**: Hast du Fragen? – Ja, ich habe **welche**.',
            table: 'Giống | Nom | Akk\nđực | einer / keiner | einen / keinen\ncái | eine / keine | eine / keine\ntrung | eins / keins | eins / keins\nsố nhiều | welche / keine | welche / keine',
            examples: [['Gibt es hier einen Integrationskurs? – Ja, in der Volkshochschule gibt es einen.', 'Ở đây có khóa hòa nhập không? – Có, ở trường đại học nhân dân có một khóa.']],
            exercises: [
              choose('Brauchst du ein Wörterbuch? – Nein, ich habe ___.', ['eins', 'einen', 'eine'], 'eins', { vi: 'Bạn cần từ điển không? – Không, tôi có một cuốn rồi.' }),
              fill('Hast du noch Fragen? – Ja, ich habe noch {welche}.', 'Bạn còn câu hỏi không? – Có, tôi còn vài câu.'),
              choose('Das ist ein Klischee, aber ___, das viele glauben.', ['eins', 'einer', 'welches'], 'eins', { vi: 'Đó là một định kiến, nhưng là cái mà nhiều người tin.' }),
            ],
          },
        ],
        mixed: [
          choose('Hier fühlt sich ___ ausgegrenzt.', ['niemand', 'niemanden', 'niemandem'], 'niemand', { vi: 'Ở đây không ai cảm thấy bị gạt ra ngoài.' }),
          fill('Kann mir {jemand} helfen?', 'Ai đó có thể giúp tôi không?'),
          choose('Ich suche einen Sprachpartner. Kennst du ___?', ['einen', 'einer', 'eins'], 'einen', { vi: 'Tôi tìm bạn luyện nói. Bạn có biết ai không?' }),
          choose('Gibt es noch freie Plätze? – Nein, es gibt ___ mehr.', ['keine', 'keinen', 'welche'], 'keine', { vi: 'Còn chỗ trống không? – Không, không còn chỗ nào.' }),
          order('Man / sollte / niemanden / wegen seines Akzents / verurteilen.', 'Không nên phán xét ai vì giọng nói.'),
        ],
      },
      dialogue: {
        title_de: 'Vorurteile im Alltag',
        lines: [
          { speaker: 'A', de: 'Hat dich schon einmal jemand wegen deiner Herkunft diskriminiert?', vi: 'Đã có ai phân biệt đối xử với bạn vì nguồn gốc chưa?' },
          { speaker: 'B', de: 'Ja, leider. Bei der Wohnungssuche hat mir niemand geantwortet, solange ich meinen echten Namen benutzt habe.', vi: 'Có, tiếc là vậy. Khi tìm nhà, chẳng ai trả lời mình chừng nào mình dùng tên thật.' },
          { speaker: 'A', de: 'Das ist ja schrecklich! So etwas sollte niemandem passieren.', vi: 'Thật kinh khủng! Chuyện như vậy không nên xảy ra với ai cả.' },
          { speaker: 'B', de: 'Viele Leute verallgemeinern. Sie haben ein Klischee im Kopf und denken nicht weiter.', vi: 'Nhiều người khái quát hóa. Họ có một định kiến trong đầu và không nghĩ xa hơn.' },
          { speaker: 'A', de: 'Gibt es bei dir in der Firma Programme gegen Rassismus?', vi: 'Ở công ty bạn có chương trình chống phân biệt chủng tộc không?' },
          { speaker: 'B', de: 'Ja, es gibt welche. Zum Beispiel ein interkulturelles Training für alle Mitarbeiter.', vi: 'Có vài chương trình. Ví dụ một khóa huấn luyện liên văn hóa cho mọi nhân viên.' },
          { speaker: 'A', de: 'Das finde ich gut. Vielfalt bereichert ein Team.', vi: 'Mình thấy vậy là tốt. Sự đa dạng làm phong phú một nhóm.' },
          { speaker: 'B', de: 'Genau. Und wenn jemand Probleme hat, gibt es eine Ansprechperson, die einem zur Seite steht.', vi: 'Đúng vậy. Và nếu ai gặp vấn đề, có một người phụ trách sẵn sàng giúp đỡ.' },
          { speaker: 'A', de: 'So kann man Brücken bauen, statt Menschen auszugrenzen.', vi: 'Như vậy có thể xây cầu nối thay vì gạt người khác ra ngoài.' },
        ],
        gloss: { Herkunft: 'nguồn gốc', Wohnungssuche: 'việc tìm nhà', solange: 'chừng nào', schrecklich: 'kinh khủng', 'im Kopf': 'trong đầu', Training: 'khóa huấn luyện', Ansprechperson: 'người phụ trách, đầu mối' },
        questions: [
          mc('B bị phân biệt đối xử khi nào?', ['khi tìm nhà', 'ở trường', 'ở siêu thị'], 'khi tìm nhà'),
          tf('Bei der Wohnungssuche haben viele B sofort geantwortet.', false, { explain: 'Niemand hat geantwortet.' }),
          mc('Công ty của B có chương trình gì?', ['huấn luyện liên văn hóa', 'khóa học nấu ăn', 'du lịch công ty'], 'huấn luyện liên văn hóa'),
          tf('In der Firma gibt es eine Ansprechperson für Probleme.', true),
        ],
        dictation: [2, 6],
      },
      writing_prompt_vi:
        'Viết một bài ý kiến (6–8 câu): xã hội đa văn hóa mang lại gì và thách thức là gì? Dùng ít nhất bốn đại từ bất định (jemand, niemand, man/einen, einer, welche…).',
    },
  ],
  test: {
    grammar: {
      'waehrend-wohingegen': [
        choose('Während ich gern Tee trinke, ___ mein Mann Kaffee.', ['trinkt', 'er trinkt', 'trinken'], 'trinkt'),
        fill('Sie ist in Berlin geboren, wohingegen ihre Eltern aus Vietnam {kommen}.', 'Cô ấy sinh ra ở Berlin, còn bố mẹ cô đến từ Việt Nam.'),
        choose('Er arbeitet viel, ___ sein Bruder kaum arbeitet.', ['wohingegen', 'dagegen', 'trotzdem'], 'wohingegen'),
        order('Während / Lan / Medizin / studiert, / studiert / Minh / Jura.', 'Trong khi Lan học y, Minh học luật.'),
        fill('{Während} die Stadt wächst, werden die Dörfer leer.', 'Trong khi thành phố phát triển, các làng trở nên vắng vẻ.'),
        choose('Mein Vater spricht kaum Deutsch. Meine Mutter ___ spricht fließend.', ['dagegen', 'wohingegen', 'während'], 'dagegen'),
      ],
      'irrealer-vergleich': [
        choose('Er spricht, als ___ er hier geboren.', ['wäre', 'ist', 'hätte'], 'wäre'),
        fill('Sie tut so, als ob sie mich nicht {kennen} würde.', 'Cô ấy làm như thể không quen tôi.'),
        choose('Er kennt die Stadt, als hätte er immer hier ___.', ['gelebt', 'leben', 'gelebt hat'], 'gelebt'),
        choose('Sie kocht genau ___ ihre Mutter.', ['wie', 'als', 'als ob'], 'wie'),
        order('Er / tut / so, / als / hätte / er / nichts / gehört.', 'Anh ấy làm như thể không nghe thấy gì.'),
        fill('Sie erzählt, als ob sie selbst dabei gewesen {wäre}.', 'Cô ấy kể như thể chính mình đã có mặt ở đó.'),
      ],
      indefinitpronomen: [
        choose('Ich habe ___ gesehen.', ['niemanden', 'niemand', 'niemandem'], 'niemanden'),
        fill('Hat {jemand} meine Tasche gesehen?', 'Có ai thấy túi của tôi không?'),
        choose('Hast du einen Kuli? – Ja, ich habe ___.', ['einen', 'einer', 'eins'], 'einen'),
        choose('Brauchst du Briefmarken? – Ja, hast du ___?', ['welche', 'eine', 'keins'], 'welche'),
        fill('Er hat {jemandem} ein Geschenk gemacht.', 'Anh ấy đã tặng quà cho một người.'),
        order('Das / kann / einen / sehr / traurig / machen.', 'Điều đó có thể làm người ta rất buồn.'),
      ],
    },
    reading: {
      title_de: 'Vietnamesen in Deutschland',
      text_de:
        'In Deutschland leben heute etwa 200.000 Menschen mit vietnamesischen Wurzeln. Ihre Geschichte ist zweigeteilt: Während der Westen ab 1978 Bootsflüchtlinge aufnahm, kamen in den Achtzigerjahren vor allem Vertragsarbeiter in die DDR. Nach der Wende mussten viele von ihnen neu anfangen, wohingegen die Flüchtlinge im Westen schon Fuß gefasst hatten. Die zweite Generation gilt oft als sehr erfolgreich in der Schule. Dieses positive Klischee kann aber auch Druck erzeugen. Viele junge Deutsch-Vietnamesen erzählen, dass sie in zwei Welten leben. Sie sprechen Deutsch, als wäre es ihre einzige Sprache, und lernen trotzdem die Kultur ihrer Eltern kennen.',
      gloss: {
        zweigeteilt: 'chia làm hai',
        Achtzigerjahren: 'những năm tám mươi',
        Bootsflüchtlinge: 'thuyền nhân',
        Wende: 'sự kiện thống nhất nước Đức (1989/90)',
        Generation: 'thế hệ',
        erzeugen: 'tạo ra',
        einzige: 'duy nhất',
      },
      questions: [
        mc('Từ năm 1978, Tây Đức đã tiếp nhận ai?', ['thuyền nhân', 'lao động hợp đồng', 'sinh viên'], 'thuyền nhân'),
        tf('Nach der Wende mussten viele Vertragsarbeiter neu anfangen.', true),
        mc('Định kiến tích cực về thế hệ thứ hai có thể gây ra gì?', ['áp lực', 'tiền bạc', 'xung đột với hàng xóm'], 'áp lực'),
        tf('Die jungen Deutsch-Vietnamesen interessieren sich nicht für die Kultur ihrer Eltern.', false, { explain: '…und lernen trotzdem die Kultur ihrer Eltern kennen.' }),
      ],
    },
  },
});
