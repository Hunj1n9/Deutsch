// B1 · 01 Tiểu sử và ký ức — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b1-01',
  points: [
    {
      key: 'praeteritum',
      rule_key: 'praeteritum-schwach-stark',
      category: 'tense',
      title_vi: 'Präteritum: động từ yếu (-te) và động từ mạnh',
      explanation_vi: 'Văn viết, tiểu sử dùng Präteritum. Động từ yếu: gốc + -te (lebte, arbeitete). Động từ mạnh đổi nguyên âm, ngôi ich/er không có đuôi: ging, kam, fand, blieb, begann, wurde.',
    },
    {
      key: 'als-wenn',
      rule_key: 'als-wenn-vergangenheit',
      category: 'word_choice',
      title_vi: 'als hay wenn?',
      explanation_vi: 'Một lần (hoặc một giai đoạn) trong quá khứ: als. Lặp lại nhiều lần trong quá khứ: (immer) wenn. Hiện tại, tương lai: wenn. Cả hai đẩy động từ xuống cuối câu.',
    },
    {
      key: 'nachdem',
      rule_key: 'nachdem-plusquamperfekt',
      category: 'tense',
      title_vi: 'nachdem + Plusquamperfekt',
      explanation_vi: 'Câu nachdem ở Plusquamperfekt (hatte/war + Partizip II, động từ cuối), câu chính ở Präteritum: Nachdem er das Studium abgeschlossen hatte, gründete er eine Firma.',
    },
  ],
  lessons: [
    {
      title_vi: 'Chuyện gia đình ngày xưa',
      goal_vi: 'Kể về gia đình và thế hệ trước bằng Präteritum.',
      items: [
        'Biografie', 'Herkunft', 'Generation', 'Vorfahre', 'Ereignis', 'Lebensabschnitt', 'Heimat', 'Enkel', 'die Verwandten',
        'Rentner', 'Gedächtnis', 'Tagebuch', 'Fotoalbum', 'Jahrzehnt', 'Jahrhundert', 'Alltagsleben', 'Geburt', 'Lebensjahr',
        'wurde', 'ging', 'kam', 'fand', 'blieb', 'begann', 'stammen', 'großziehen', 'damalig', 'arm', 'reich', 'bescheiden',
        'seinerzeit', 'Präteritum động từ yếu: -te', 'Präteritum động từ mạnh: đổi nguyên âm', 'Năm trong câu',
      ],
      grammar: {
        point: 'praeteritum',
        sections: [
          {
            text_vi:
              '**Präteritum** là thì quá khứ của văn viết: tiểu sử, truyện, báo. Động từ **yếu**: gốc + **-te** + đuôi: leben → ich leb**te**, wir leb**ten**. Gốc tận cùng -t, -d thêm **-ete**: arbeiten → arbeit**ete**. Ngôi **ich** và **er/sie/es** giống nhau, không có -t.',
            table: 'Ngôi | leben | arbeiten\nich | lebte | arbeitete\ndu | lebtest | arbeitetest\ner/sie/es | lebte | arbeitete\nwir | lebten | arbeiteten\nihr | lebtet | arbeitetet\nsie/Sie | lebten | arbeiteten',
            examples: [
              ['Meine Großeltern lebten auf dem Land.', 'Ông bà tôi sống ở nông thôn.'],
              ['Mein Vater arbeitete damals als Lehrer.', 'Hồi đó bố tôi làm giáo viên.'],
            ],
            exercises: [
              fill('Früher {wohnte} meine Familie in Hue. (wohnen)', 'Ngày trước gia đình tôi sống ở Huế.'),
              choose('Meine Oma ___ viele Jahre in einer Fabrik.', ['arbeitete', 'arbeitet', 'arbeitte'], 'arbeitete', { vi: 'Bà tôi làm việc nhiều năm trong một nhà máy.' }),
              fill('Als Kinder {spielten} wir oft im Garten. (spielen)', 'Hồi nhỏ chúng tôi hay chơi trong vườn.'),
            ],
          },
          {
            text_vi:
              'Động từ **mạnh** đổi nguyên âm và **không** thêm -te: gehen → **ging**, kommen → **kam**, finden → **fand**, bleiben → **blieb**, beginnen → **begann**, werden → **wurde**. Ngôi ich, er/sie/es **không có đuôi**; wir, sie thêm **-en**: wir gingen, sie kamen. Phải học thuộc từng động từ, như Partizip II.',
            table: 'Infinitiv | Präteritum | Perfekt\ngehen | ging | ist gegangen\nkommen | kam | ist gekommen\nfinden | fand | hat gefunden\nbleiben | blieb | ist geblieben\nbeginnen | begann | hat begonnen\nwerden | wurde | ist geworden',
            examples: [
              ['1975 kam mein Opa nach Saigon.', 'Năm 1975 ông tôi đến Sài Gòn.'],
              ['Sie blieben zehn Jahre in Deutschland.', 'Họ ở lại Đức mười năm.'],
            ],
            exercises: [
              choose('Mit 20 ___ er nach Hanoi.', ['ging', 'gehte', 'gang'], 'ging', { vi: 'Năm 20 tuổi anh ấy đi Hà Nội.' }),
              fill('Meine Eltern {kamen} 1990 nach Deutschland. (kommen)', 'Bố mẹ tôi đến Đức năm 1990.'),
              fill('Das Studium {begann} im Oktober. (beginnen)', 'Khóa học bắt đầu vào tháng Mười.'),
              choose('Später ___ sie Ärztin.', ['wurde', 'werdete', 'wurden'], 'wurde', { vi: 'Sau này cô ấy trở thành bác sĩ.' }),
            ],
          },
          {
            text_vi:
              'Nói **năm**: chỉ con số (**1998** kam er …) hoặc **im Jahr 1998**, không nói "in 1998". Đọc: 1998 = neunzehnhundertachtundneunzig, 2010 = zweitausendzehn. Khi **nói chuyện**, người Đức hay dùng Perfekt; Präteritum dùng nhiều cho **sein, haben, werden**, động từ khuyết thiếu và trong **văn viết**.',
            examples: [['Im Jahr 1945 endete der Krieg.', 'Năm 1945 chiến tranh kết thúc.']],
            exercises: [
              order('Meine Oma / wurde / 1950 / geboren.', 'Bà tôi sinh năm 1950.'),
              translate('Năm 2010 tôi bắt đầu học đại học.', [
                '2010 begann ich mein Studium.',
                'Im Jahr 2010 begann ich mein Studium.',
                '2010 begann ich zu studieren.',
                'Im Jahr 2010 begann ich zu studieren.',
              ]),
            ],
          },
        ],
        mixed: [
          transform('Chuyển sang Präteritum', 'Er ist in Hanoi geblieben.', ['Er blieb in Hanoi.']),
          transform('Chuyển sang Präteritum', 'Wir haben das Fotoalbum gefunden.', ['Wir fanden das Fotoalbum.']),
          choose('Als Kind ___ ich ein Tagebuch.', ['schrieb', 'schreibte', 'schrob'], 'schrieb', { vi: 'Hồi nhỏ tôi viết nhật ký.' }),
          fill('Mein Opa {erzählte} oft von früher. (erzählen)', 'Ông tôi hay kể chuyện ngày xưa.'),
          choose('Wann ___ ihr nach Deutschland?', ['kamt', 'kamen', 'kam'], 'kamt', { vi: 'Các bạn đến Đức khi nào?' }),
        ],
      },
      dialogue: {
        title_de: 'Das alte Fotoalbum',
        lines: [
          { speaker: 'A', de: 'Schau mal, das ist das alte Fotoalbum von meiner Oma.', vi: 'Nhìn này, đây là album ảnh cũ của bà mình.' },
          { speaker: 'B', de: 'Wer ist der Mann auf dem Foto?', vi: 'Người đàn ông trong ảnh là ai?' },
          { speaker: 'A', de: 'Das ist mein Urgroßvater. Er stammte aus einem kleinen Dorf bei Hue.', vi: 'Đó là ông cố của mình. Ông đến từ một làng nhỏ gần Huế.' },
          { speaker: 'B', de: 'Was machte er damals?', vi: 'Hồi đó ông làm gì?' },
          { speaker: 'A', de: 'Er war Bauer und die Familie war sehr arm. Seinerzeit lebten drei Generationen in einem Haus.', vi: 'Ông là nông dân và gia đình rất nghèo. Thời đó ba thế hệ sống trong một nhà.' },
          { speaker: 'B', de: 'Und deine Oma?', vi: 'Còn bà bạn?' },
          { speaker: 'A', de: 'Sie ging mit 18 nach Hanoi und wurde Lehrerin. Dort blieb sie bis zur Rente.', vi: 'Bà ra Hà Nội năm 18 tuổi và trở thành giáo viên. Bà ở đó đến khi nghỉ hưu.' },
          { speaker: 'B', de: 'Sie hat bestimmt ein gutes Gedächtnis.', vi: 'Chắc bà có trí nhớ tốt lắm.' },
          { speaker: 'A', de: 'Ja! Sie erzählt noch heute vom Alltagsleben damals.', vi: 'Đúng vậy! Đến giờ bà vẫn kể về đời sống hằng ngày hồi đó.' },
        ],
        gloss: { Urgroßvater: 'ông cố', Bauer: 'nông dân', Rente: 'lương hưu (bis zur Rente = đến khi nghỉ hưu)', bestimmt: 'chắc chắn', Dorf: 'làng' },
        questions: [
          mc('Ông cố của A đến từ đâu?', ['một làng nhỏ gần Huế', 'Hà Nội', 'Sài Gòn'], 'một làng nhỏ gần Huế'),
          tf('Die Familie des Urgroßvaters war reich.', false, { explain: 'Die Familie war sehr arm.' }),
          mc('Bà của A làm nghề gì?', ['giáo viên', 'bác sĩ', 'nông dân'], 'giáo viên'),
          tf('Die Oma hat ein gutes Gedächtnis.', true),
        ],
        dictation: [4, 6],
      },
      writing_prompt_vi:
        'Kể về một người lớn tuổi trong gia đình bạn (6 câu) bằng Präteritum: sinh năm nào, sống ở đâu, làm gì, điều gì xảy ra.',
    },
    {
      title_vi: 'Rời quê hương',
      goal_vi: 'Kể những bước ngoặt trong đời; phân biệt als và wenn.',
      items: [
        'Lebensweg', 'Wendepunkt', 'Entscheidung', 'Erfolg', 'Misserfolg', 'Schicksal', 'Kriegszeit', 'Flucht', 'Auswanderung',
        'Witwe', 'Ausreise', 'Einwanderer', 'Abschied', 'Tod', 'verließ', 'verlassen', 'auswandern', 'zurückkehren', 'überleben',
        'aufbrechen', 'sich trauen', 'wagen', 'mutig', 'stolz', 'dankbar', 'einzig', 'kaum', 'jemals', 'ums Leben kommen',
        'auf die Welt kommen', 'in jungen Jahren', 'als hay wenn?',
      ],
      grammar: {
        point: 'als-wenn',
        sections: [
          {
            text_vi:
              '**als** = khi, dùng cho **một lần** hoặc **một giai đoạn** trong quá khứ: **Als** ich 18 **war**, ging ich nach Hanoi. **Als** Kind wohnte ich auf dem Land. als mở câu phụ nên động từ chia đứng **cuối**; câu phụ đứng trước thì câu chính bắt đầu bằng **động từ**.',
            examples: [
              ['Als meine Eltern heirateten, waren sie sehr arm.', 'Khi bố mẹ tôi cưới nhau, họ rất nghèo.'],
              ['Ich war sehr stolz, als ich mein erstes Geld verdiente.', 'Tôi rất tự hào khi kiếm được đồng tiền đầu tiên.'],
            ],
            exercises: [
              fill('{Als} ich klein war, hatte ich einen Hund.', 'Khi tôi còn nhỏ, tôi có một con chó.'),
              order('Als / er / nach Deutschland / kam, / sprach / er / kaum / Deutsch.', 'Khi anh ấy đến Đức, anh ấy hầu như không nói được tiếng Đức.'),
              choose('Als sie 2015 nach Berlin ___, war sie 25.', ['zog', 'zieht', 'ziehte'], 'zog', { vi: 'Khi cô ấy chuyển đến Berlin năm 2015, cô 25 tuổi.' }),
            ],
          },
          {
            text_vi:
              '**wenn** dùng cho việc **lặp lại nhiều lần** trong quá khứ, thường kèm **immer** hoặc **jedes Mal**: **Immer wenn** wir Oma besuchten, kochte sie Pho. Ở hiện tại và tương lai luôn là **wenn**: Wenn ich Zeit habe, lese ich. Mẹo: quá khứ một lần → **als**; nhiều lần → **wenn**.',
            table: 'Thời điểm | Một lần | Nhiều lần\nQuá khứ | als | (immer) wenn\nHiện tại, tương lai | wenn | wenn',
            examples: [['Immer wenn ich traurig war, half mir meine Mutter.', 'Mỗi lần tôi buồn, mẹ đều giúp tôi.']],
            exercises: [
              choose('___ ich nach Hause kam, war das Essen immer fertig.', ['Wenn', 'Als'], 'Wenn', { vi: 'Mỗi lần tôi về nhà, cơm luôn sẵn sàng.' }),
              choose('___ der Krieg zu Ende war, kehrte er zurück.', ['Als', 'Wenn'], 'Als', { vi: 'Khi chiến tranh kết thúc, ông ấy trở về.' }),
              choose('___ ich Zeit habe, schreibe ich Tagebuch.', ['Wenn', 'Als'], 'Wenn', { vi: 'Khi có thời gian, tôi viết nhật ký.' }),
              fill('Jedes Mal, {wenn} wir uns sahen, lachten wir viel.', 'Mỗi lần gặp nhau, chúng tôi cười rất nhiều.'),
            ],
          },
          {
            text_vi:
              'Di cư: **auswandern** (ra nước ngoài sống) – **zurückkehren** (trở về), Perfekt với **sein**: Er **ist** nach Kanada **ausgewandert**. **verlassen** (rời) là động từ mạnh: verließ, hat verlassen, đi với **Akkusativ**: Er verließ **seine Heimat**. **ums Leben kommen** = thiệt mạng; **auf die Welt kommen** = chào đời.',
            examples: [['Als er 1980 seine Heimat verließ, war er erst 20.', 'Khi ông rời quê năm 1980, ông mới 20 tuổi.']],
            exercises: [
              fill('Mit 30 {verließ} sie ihr Dorf. (verlassen)', 'Năm 30 tuổi cô ấy rời làng.'),
              translate('Khi tôi chào đời, bố tôi 25 tuổi.', [
                'Als ich auf die Welt kam, war mein Vater 25.',
                'Als ich auf die Welt kam, war mein Vater 25 Jahre alt.',
              ]),
            ],
          },
        ],
        mixed: [
          choose('___ ich das erste Mal in Deutschland war, verstand ich kaum etwas.', ['Als', 'Wenn'], 'Als', { vi: 'Lần đầu ở Đức, tôi hầu như không hiểu gì.' }),
          transform('Nối hai câu bằng als', 'Ich war 18. Ich wanderte aus.', ['Als ich 18 war, wanderte ich aus.', 'Ich wanderte aus, als ich 18 war.']),
          choose('Immer ___ es regnete, blieben wir zu Hause.', ['wenn', 'als'], 'wenn', { vi: 'Mỗi khi trời mưa, chúng tôi ở nhà.' }),
          order('Als / sie / zurückkehrte, / war / alles / anders.', 'Khi cô ấy trở về, mọi thứ đã khác.'),
          fill('{Als} die Flucht begann, war meine Mutter noch ein Kind.', 'Khi cuộc chạy nạn bắt đầu, mẹ tôi còn là một đứa trẻ.'),
        ],
      },
      dialogue: {
        title_de: 'Die Geschichte von Herrn Nam',
        lines: [
          { speaker: 'A', de: 'Herr Nam, wann sind Sie nach Deutschland gekommen?', vi: 'Ông Nam, ông đến Đức khi nào?' },
          { speaker: 'B', de: 'Ich kam 1980. Als ich meine Heimat verließ, war ich erst 19.', vi: 'Tôi đến năm 1980. Khi rời quê, tôi mới 19 tuổi.' },
          { speaker: 'A', de: 'Das war bestimmt eine schwere Entscheidung.', vi: 'Đó hẳn là một quyết định khó khăn.' },
          { speaker: 'B', de: 'Ja. Die Flucht war gefährlich, und viele Menschen kamen ums Leben. Ich hatte großes Glück.', vi: 'Đúng. Cuộc chạy nạn rất nguy hiểm, nhiều người đã thiệt mạng. Tôi rất may mắn.' },
          { speaker: 'A', de: 'Wie war der Anfang in Deutschland?', vi: 'Thời gian đầu ở Đức thế nào?' },
          { speaker: 'B', de: 'Am Anfang sprach ich kaum Deutsch. Immer wenn ich einen Brief bekam, brauchte ich Hilfe.', vi: 'Lúc đầu tôi hầu như không nói được tiếng Đức. Mỗi lần nhận thư, tôi đều cần người giúp.' },
          { speaker: 'A', de: 'Wollten Sie jemals zurückkehren?', vi: 'Ông có bao giờ muốn trở về không?' },
          { speaker: 'B', de: 'Als meine Mutter starb, flog ich nach Vietnam. Aber hier bin ich zu Hause.', vi: 'Khi mẹ tôi mất, tôi bay về Việt Nam. Nhưng ở đây là nhà của tôi.' },
          { speaker: 'A', de: 'Sind Sie stolz auf Ihren Lebensweg?', vi: 'Ông có tự hào về con đường đời của mình không?' },
          { speaker: 'B', de: 'Ja, und ich bin sehr dankbar.', vi: 'Có, và tôi rất biết ơn.' },
        ],
        gloss: { erst: 'mới (chỉ)', bestimmt: 'chắc chắn', starb: 'mất (sterben)', flog: 'đã bay (fliegen)', bekam: 'nhận được (bekommen)', sprach: 'đã nói (sprechen)' },
        questions: [
          mc('Ông Nam rời quê năm bao nhiêu tuổi?', ['19', '25', '30'], '19'),
          tf('Die Flucht war ungefährlich.', false, { explain: 'Die Flucht war gefährlich.' }),
          tf('Am Anfang sprach Herr Nam gut Deutsch.', false, { explain: 'Am Anfang sprach er kaum Deutsch.' }),
          mc('Khi nào ông Nam bay về Việt Nam?', ['khi mẹ ông mất', 'mỗi năm', 'chưa bao giờ'], 'khi mẹ ông mất'),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Viết về một bước ngoặt trong đời bạn hoặc người thân (5–6 câu), dùng ít nhất một câu với als và một câu với (immer) wenn.',
    },
    {
      title_vi: 'Câu chuyện thành công',
      goal_vi: 'Kể các bước trong đời theo trình tự; dùng nachdem + Plusquamperfekt.',
      items: [
        'Lebensgeschichte', 'Ruhestand', 'Neuanfang', 'gründen', 'sich verändern', 'erinnern an', 'aufgeben', 'verbringen',
        'sich entwickeln', 'erben', 'bereuen', 'sich verabschieden', 'ehemalig', 'unvergesslich', 'erfolgreich', 'bekannt',
        'prägend', 'inzwischen', 'zunächst', 'schließlich', 'bereits', 'nachdem', 'seitdem', 'im Laufe der Zeit',
        'eine Familie gründen', 'Abschied nehmen', 'aus eigener Erfahrung', 'Plusquamperfekt: hatte/war + Partizip II',
      ],
      grammar: {
        point: 'nachdem',
        sections: [
          {
            text_vi:
              '**Plusquamperfekt** (quá khứ hoàn thành) nói việc xảy ra **trước** một việc khác trong quá khứ: **hatte/war** + **Partizip II** (cuối câu). Chọn hatte hay war **giống như Perfekt**: di chuyển, thay đổi trạng thái → **war** (er war gegangen); còn lại → **hatte** (sie hatte gegessen).',
            table: 'Perfekt | Plusquamperfekt\nich habe gearbeitet | ich hatte gearbeitet\ner ist gekommen | er war gekommen\nwir haben gegessen | wir hatten gegessen\nsie sind geblieben | sie waren geblieben',
            examples: [
              ['Sie war schon nach Hause gegangen.', 'Cô ấy đã về nhà rồi (trước đó).'],
              ['Wir hatten das Haus bereits verkauft.', 'Chúng tôi đã bán căn nhà từ trước.'],
            ],
            exercises: [
              choose('Ich ___ das Buch schon gelesen.', ['hatte', 'war'], 'hatte', { vi: 'Tôi đã đọc quyển sách đó rồi.' }),
              choose('Wir ___ schon abgefahren.', ['waren', 'hatten'], 'waren', { vi: 'Chúng tôi đã khởi hành rồi.' }),
              fill('Er {hatte} sein Studium bereits abgeschlossen.', 'Anh ấy đã học xong từ trước.'),
            ],
          },
          {
            text_vi:
              '**nachdem** (sau khi) mở câu phụ, động từ chia **cuối câu**. Quy tắc thì: câu **nachdem** ở **Plusquamperfekt**, câu chính ở **Präteritum** (hoặc Perfekt). **Nachdem** er das Studium **abgeschlossen hatte**, **gründete** er eine Firma. Câu phụ đứng đầu → câu chính bắt đầu bằng **động từ**.',
            examples: [['Nachdem meine Großeltern geheiratet hatten, zogen sie nach Saigon.', 'Sau khi cưới, ông bà tôi chuyển vào Sài Gòn.']],
            exercises: [
              fill('Nachdem sie gegessen {hatte}, ging sie spazieren.', 'Sau khi ăn xong, cô ấy đi dạo.'),
              order('Nachdem / er / angekommen / war, / rief / er / seine Mutter / an.', 'Sau khi đến nơi, anh ấy gọi cho mẹ.'),
              transform('Nối hai câu bằng nachdem', 'Ich beendete die Schule. Dann begann ich eine Ausbildung.', [
                'Nachdem ich die Schule beendet hatte, begann ich eine Ausbildung.',
                'Ich begann eine Ausbildung, nachdem ich die Schule beendet hatte.',
              ]),
            ],
          },
          {
            text_vi:
              'Kể theo trình tự: **zunächst** (trước hết) → **später**, danach → **schließlich** (cuối cùng). **inzwischen** = giờ đây; **bereits** = đã (trang trọng hơn schon). **seitdem** = kể từ đó (trạng từ, đứng vị trí 1 thì động từ theo sau): 2010 zog er nach Berlin. **Seitdem wohnt** er dort.',
            examples: [['Zunächst arbeitete er als Kellner, schließlich gründete er ein Restaurant.', 'Ban đầu anh ấy làm bồi bàn, cuối cùng anh mở một nhà hàng.']],
            exercises: [
              choose('Er zog 2010 nach Berlin. ___ wohnt er dort.', ['Seitdem', 'Nachdem', 'Zunächst'], 'Seitdem', { vi: 'Anh ấy chuyển đến Berlin năm 2010. Từ đó anh sống ở đó.' }),
              translate('Cuối cùng cô ấy trở thành bác sĩ.', ['Schließlich wurde sie Ärztin.']),
            ],
          },
        ],
        mixed: [
          transform('Nối hai câu bằng nachdem', 'Er verließ die Heimat. Dann gründete er eine Familie.', [
            'Nachdem er die Heimat verlassen hatte, gründete er eine Familie.',
            'Er gründete eine Familie, nachdem er die Heimat verlassen hatte.',
          ]),
          choose('Nachdem wir Abschied genommen ___, fuhr der Zug ab.', ['hatten', 'waren'], 'hatten', { vi: 'Sau khi chúng tôi từ biệt, tàu chạy.' }),
          choose('Nachdem sie nach Hause gekommen ___, schlief sie sofort ein.', ['war', 'hatte'], 'war', { vi: 'Sau khi về nhà, cô ấy ngủ ngay.' }),
          fill('Nachdem er den Job {aufgegeben} hatte, reiste er ein Jahr. (aufgeben)', 'Sau khi bỏ việc, anh ấy đi du lịch một năm.'),
          order('Nachdem / ich / den Brief / gelesen / hatte, / rief / ich / sie / an.', 'Sau khi đọc thư, tôi gọi cho cô ấy.'),
        ],
      },
      dialogue: {
        title_de: 'Ein Interview mit Frau Lan',
        lines: [
          { speaker: 'A', de: 'Frau Lan, Sie sind heute sehr erfolgreich. Wie hat alles begonnen?', vi: 'Bà Lan, hôm nay bà rất thành công. Mọi thứ bắt đầu thế nào?' },
          { speaker: 'B', de: 'Zunächst arbeitete ich in einem Restaurant. Nachdem ich genug Geld gespart hatte, gründete ich meine eigene Firma.', vi: 'Ban đầu tôi làm trong một nhà hàng. Sau khi dành dụm đủ tiền, tôi lập công ty riêng.' },
          { speaker: 'A', de: 'Wollten Sie jemals aufgeben?', vi: 'Bà có bao giờ muốn bỏ cuộc không?' },
          { speaker: 'B', de: 'Natürlich! Nachdem wir das erste Geschäft verloren hatten, war ich sehr traurig. Aber ich habe weitergemacht.', vi: 'Tất nhiên! Sau khi mất cửa hàng đầu tiên, tôi rất buồn. Nhưng tôi vẫn tiếp tục.' },
          { speaker: 'A', de: 'Was war für Sie prägend?', vi: 'Điều gì đã định hình con người bà?' },
          { speaker: 'B', de: 'Meine Kindheit. Meine Eltern waren arm, aber sie gaben nie auf.', vi: 'Tuổi thơ của tôi. Bố mẹ tôi nghèo, nhưng họ không bao giờ bỏ cuộc.' },
          { speaker: 'A', de: 'Bereuen Sie etwas?', vi: 'Bà có hối hận điều gì không?' },
          { speaker: 'B', de: 'Nein. Im Laufe der Zeit habe ich viel gelernt. Inzwischen arbeitet auch meine Tochter in der Firma.', vi: 'Không. Theo thời gian tôi đã học được nhiều. Giờ đây con gái tôi cũng làm trong công ty.' },
        ],
        gloss: { gespart: 'dành dụm (sparen)', weitergemacht: 'tiếp tục làm', Kindheit: 'tuổi thơ', gaben: 'đã (bỏ cuộc) – aufgeben', verloren: 'mất (verlieren)', Geschäft: 'cửa hàng' },
        questions: [
          mc('Ban đầu bà Lan làm việc ở đâu?', ['một nhà hàng', 'một ngân hàng', 'một trường học'], 'một nhà hàng'),
          tf('Frau Lan gründete die Firma, nachdem sie Geld gespart hatte.', true),
          tf('Frau Lan bereut viele Dinge.', false, { explain: 'Nein, sie bereut nichts.' }),
          mc('Ai giờ cũng làm trong công ty?', ['con gái bà', 'chồng bà', 'mẹ bà'], 'con gái bà'),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Kể câu chuyện cuộc đời một người bạn ngưỡng mộ (6 câu) theo trình tự zunächst – später – schließlich, dùng ít nhất hai câu nachdem + Plusquamperfekt.',
    },
  ],
  test: {
    grammar: {
      praeteritum: [
        fill('Meine Eltern {lebten} lange in Hue. (leben)', 'Bố mẹ tôi sống lâu năm ở Huế.'),
        choose('1990 ___ er nach Berlin.', ['kam', 'kommte', 'kamte'], 'kam'),
        choose('Sie ___ zehn Jahre in Kanada.', ['blieb', 'bleibte', 'blub'], 'blieb'),
        fill('Mit 25 {wurde} er Vater. (werden)', 'Năm 25 tuổi anh ấy làm bố.'),
        choose('Mein Opa ___ als Lehrer.', ['arbeitete', 'arbeitet', 'arbeite'], 'arbeitete'),
        fill('Der Krieg {begann} 1939. (beginnen)', 'Chiến tranh bắt đầu năm 1939.'),
      ],
      'als-wenn': [
        choose('___ ich 10 war, zogen wir um.', ['Als', 'Wenn'], 'Als'),
        choose('Immer ___ er kam, brachte er Blumen mit.', ['wenn', 'als'], 'wenn'),
        choose('___ du morgen Zeit hast, ruf mich an.', ['Wenn', 'Als'], 'Wenn'),
        fill('{Als} sie die Heimat verließ, weinte sie.', 'Khi rời quê, cô ấy đã khóc.'),
        order('Als / ich / jung / war, / wohnte / ich / in Hue.', 'Khi còn trẻ, tôi sống ở Huế.'),
        choose('Jedes Mal, ___ es schneite, spielten wir draußen.', ['wenn', 'als'], 'wenn'),
      ],
      nachdem: [
        choose('Nachdem er gegessen ___, schlief er.', ['hatte', 'war'], 'hatte'),
        choose('Nachdem sie angekommen ___, rief sie an.', ['war', 'hatte'], 'war'),
        fill('Nachdem ich die Prüfung {bestanden} hatte, feierten wir. (bestehen)', 'Sau khi tôi thi đỗ, chúng tôi ăn mừng.'),
        order('Nachdem / er / die Schule / beendet / hatte, / ging / er / nach Berlin.', 'Sau khi học xong phổ thông, anh ấy đi Berlin.'),
        fill('{Nachdem} wir Abschied genommen hatten, fuhr sie ab.', 'Sau khi chúng tôi từ biệt, cô ấy lên đường.'),
        choose('Nachdem sie geheiratet hatten, ___ sie eine Familie.', ['gründeten', 'gründen', 'gegründet'], 'gründeten'),
      ],
    },
    reading: {
      title_de: 'Die Geschichte meiner Großmutter',
      text_de:
        'Meine Großmutter kam 1948 in einem kleinen Dorf bei Nam Dinh auf die Welt. Ihre Familie war arm, aber sehr fleißig. Als sie zwölf Jahre alt war, starb ihr Vater. Danach musste sie ihrer Mutter auf dem Feld helfen. Trotzdem lernte sie jeden Abend. Nachdem sie die Schule abgeschlossen hatte, ging sie nach Hanoi und wurde Krankenschwester. Dort lernte sie meinen Großvater kennen. Immer wenn sie von dieser Zeit erzählt, lacht sie. Inzwischen ist sie im Ruhestand und hat sechs Enkel. Sie sagt: „Ich bereue nichts. Ich bin dankbar für mein Leben.“',
      gloss: {
        fleißig: 'chăm chỉ',
        starb: 'mất (sterben)',
        Feld: 'cánh đồng',
        Krankenschwester: 'y tá',
        'lernte … kennen': 'quen (kennenlernen)',
        dieser: 'này',
      },
      questions: [
        mc('Bà sinh năm nào?', ['1948', '1958', '1938'], '1948'),
        tf('Der Vater starb, als sie zwölf war.', true),
        mc('Sau khi học xong, bà làm nghề gì?', ['y tá', 'giáo viên', 'nông dân'], 'y tá'),
        tf('Die Großmutter bereut vieles.', false, { explain: 'Sie sagt: „Ich bereue nichts.“' }),
      ],
    },
  },
});
