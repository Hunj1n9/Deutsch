// A2 · 09 Lễ hội và quà tặng — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a2-09',
  points: [
    {
      key: 'dativ-verben',
      rule_key: 'verben-mit-dativ',
      category: 'case',
      title_vi: 'Động từ đi với Dativ',
      explanation_vi: 'helfen, danken, gratulieren, gefallen, gehören, passen, schmecken cần Dativ: Ich danke Ihnen. Das gehört mir. Ich helfe dem Kind.',
    },
    {
      key: 'dat-akk',
      rule_key: 'dativ-akkusativ-reihenfolge',
      category: 'case',
      title_vi: 'Hai tân ngữ: Dativ (người) trước Akkusativ (vật)',
      explanation_vi: 'Ich schenke meiner Mutter Blumen. Nếu vật là đại từ thì nó đứng trước: Ich schenke sie ihr. Ich gebe es ihm.',
    },
    {
      key: 'pron-dat',
      rule_key: 'personalpronomen-dativ',
      category: 'case',
      title_vi: 'Đại từ nhân xưng Dativ: mir, dir, ihm, ihr…',
      explanation_vi: 'ich → mir, du → dir, er/es → ihm, sie → ihr, wir → uns, ihr → euch, sie → ihnen, Sie → Ihnen. ihm (Dativ) ≠ ihn (Akk).',
    },
  ],
  lessons: [
    {
      title_vi: 'Chúc mừng sinh nhật!',
      goal_vi: 'Chúc mừng, cảm ơn và nhận quà; dùng động từ đi với Dativ.',
      items: [
        'Glückwunsch', 'Torte', 'Kerze', 'Luftballon', 'Gutschein', 'gratulieren', 'danken', 'gehören', 'passen zu',
        'sich freuen', 'überrascht', 'Alles Gute', 'Viel Glück', 'Vielen Dank für', 'Das ist aber nett',
        'Động từ đi với Dativ',
      ],
      grammar: {
        point: 'dativ-verben',
        sections: [
          {
            text_vi:
              'Một số động từ đi với **Dativ** (không phải Akkusativ) cho người: **helfen, danken, gratulieren, gefallen, gehören, passen, schmecken**. Ich **gratuliere dir**! Das Buch **gehört mir**. Tiếng Việt nói "cảm ơn anh", "chúc mừng em" không đổi gì; tiếng Đức phải dùng Dativ: Ich danke **Ihnen** (không phải "Sie").',
            table: 'Động từ | Ví dụ\nhelfen | Ich helfe dir.\ndanken | Ich danke Ihnen.\ngratulieren | Wir gratulieren dir!\ngehören | Das gehört mir.\ngefallen | Das gefällt mir.',
            examples: [
              ['Ich gratuliere dir zum Geburtstag!', 'Chúc mừng sinh nhật bạn!'],
              ['Gehört die Torte dir?', 'Cái bánh kem là của bạn à?'],
            ],
            exercises: [
              choose('Ich danke ___ für die Hilfe.', ['Ihnen', 'Sie'], 'Ihnen', { vi: 'Tôi cảm ơn ông/bà đã giúp đỡ.' }),
              choose('Wir gratulieren ___ zum Geburtstag!', ['dir', 'dich'], 'dir', { vi: 'Chúng tôi chúc mừng sinh nhật bạn!' }),
              fill('Das Geschenk {gehört} mir.', 'Món quà là của tôi.'),
            ],
          },
          {
            text_vi:
              'Danh từ ở Dativ: mạo từ **dem** (der/das), **der** (die), **den** + **-n** (số nhiều): Ich helfe **dem** Kind. Wir danken **der** Gastgeberin. Ich gratuliere **den** Kinder**n**. **passen zu** + Dativ: Die Kette **passt zu dem** Kleid.',
            examples: [['Ich danke der Gastgeberin für die Einladung.', 'Tôi cảm ơn bà chủ nhà vì lời mời.']],
            exercises: [
              choose('Ich helfe ___ Mann.', ['dem', 'den'], 'dem', { vi: 'Tôi giúp người đàn ông.' }),
              fill('Wir gratulieren {der} Braut.', 'Chúng tôi chúc mừng cô dâu.'),
              choose('Die Kette passt gut zu ___ Kleid.', ['dem', 'das'], 'dem', { vi: 'Dây chuyền rất hợp với cái váy.' }),
            ],
          },
          {
            text_vi:
              'Chúc và cảm ơn: **Alles Gute zum Geburtstag!** **Herzlichen Glückwunsch!** **Viel Glück!** **Vielen Dank für** + Akk. Khi nhận quà: **Das ist aber nett!** **sich freuen über** + Akk (vui vì điều đã có): Ich **freue mich über** das Geschenk.',
            examples: [['Vielen Dank für die Blumen! Das ist aber nett!', 'Cảm ơn nhiều vì hoa! Chu đáo quá!']],
            exercises: [
              fill('Ich {freue} mich über das Geschenk.', 'Tôi vui vì món quà.'),
              translate('Chúc mừng sinh nhật!', ['Alles Gute zum Geburtstag!', 'Herzlichen Glückwunsch zum Geburtstag!']),
            ],
          },
        ],
        mixed: [
          choose('Gefällt ___ die Torte?', ['dir', 'dich'], 'dir', { vi: 'Bạn thích cái bánh kem không?' }),
          transform('Viết câu cảm ơn thầy giáo (der Lehrer)', 'Ich danke … für die Hilfe.', ['Ich danke dem Lehrer für die Hilfe.']),
          fill('Ich helfe {meiner} Mutter. (meine Mutter)', 'Tôi giúp mẹ.'),
          translate('Cái này là của tôi.', ['Das gehört mir.']),
          order('Wir / gratulieren / dir / zum Geburtstag!', 'Chúng tôi chúc mừng sinh nhật bạn!'),
        ],
      },
      dialogue: {
        title_de: 'Überraschung!',
        lines: [
          { speaker: 'A', de: 'Überraschung! Alles Gute zum Geburtstag, Lan!', vi: 'Bất ngờ chưa! Chúc mừng sinh nhật Lan!' },
          { speaker: 'B', de: 'Oh! Ich bin total überrascht! Danke!', vi: 'Ôi! Mình bất ngờ quá! Cảm ơn!' },
          { speaker: 'A', de: 'Wir gratulieren dir alle. Hier ist eine Torte mit 25 Kerzen!', vi: 'Tất cả bọn mình chúc mừng bạn. Đây là bánh kem với 25 ngọn nến!' },
          { speaker: 'B', de: 'Das ist aber nett! Wem gehören die Luftballons?', vi: 'Chu đáo quá! Mấy quả bóng bay là của ai vậy?' },
          { speaker: 'A', de: 'Die gehören dir! Und hier ist ein Gutschein von uns allen.', vi: 'Của bạn hết! Còn đây là phiếu quà tặng của cả nhóm.' },
          { speaker: 'B', de: 'Vielen Dank für alles! Ich freue mich sehr.', vi: 'Cảm ơn mọi người nhiều! Mình vui lắm.' },
          { speaker: 'A', de: 'Der Gutschein ist für das Kaufhaus. Die Kette dort passt bestimmt zu deinem Kleid.', vi: 'Phiếu này dùng ở cửa hàng bách hóa. Sợi dây chuyền ở đó chắc chắn hợp với váy của bạn.' },
          { speaker: 'B', de: 'Ihr seid die besten Freunde!', vi: 'Các bạn là những người bạn tuyệt nhất!' },
        ],
        gloss: { total: 'hoàn toàn', wem: 'của ai (wem gehört …?)', allen: 'tất cả (Dativ)', deinem: 'của bạn (Dativ)', besten: 'tốt nhất' },
        questions: [
          tf('Lan ist überrascht.', true),
          mc('Trên bánh có bao nhiêu ngọn nến?', ['25', '20', '30'], '25'),
          mc('Bạn bè tặng Lan gì?', ['phiếu quà tặng', 'dây chuyền', 'váy'], 'phiếu quà tặng'),
          tf('Die Luftballons gehören den Freunden.', false, { explain: 'Die gehören dir (Lan).' }),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Viết tin nhắn chúc mừng sinh nhật một người bạn (4–5 câu): Ich gratuliere dir…, Alles Gute…, và cảm ơn khi nhận quà (Vielen Dank für…).',
    },
    {
      title_vi: 'Tặng quà',
      goal_vi: 'Nói tặng ai cái gì (Dativ trước Akkusativ); nhận lời hoặc từ chối lời mời.',
      items: [
        'Geschenk', 'Blume', 'Einladung', 'Gastgeber', 'Gästeliste', 'schenken', 'geben', 'verpacken', 'überraschen',
        'zusagen', 'absagen', 'persönlich', 'herzlich', 'Herzlich willkommen', 'Hai tân ngữ: Dativ trước Akkusativ',
        'Mạo từ ở Dativ',
      ],
      grammar: {
        point: 'dat-akk',
        sections: [
          {
            text_vi:
              'Động từ như **geben, schenken, zeigen, bringen** có hai tân ngữ: **người nhận (Dativ)** và **vật (Akkusativ)**. Thứ tự thường: **Dativ trước Akkusativ**: Ich schenke **meiner Mutter Blumen**. Er gibt **dem Kind ein Geschenk**. Tiếng Việt nói "tặng hoa cho mẹ"; tiếng Đức không cần "cho" mà dùng Dativ.',
            table: 'Chủ ngữ | Động từ | Dativ (ai) | Akkusativ (gì)\nIch | schenke | meiner Mutter | Blumen.\nEr | gibt | dem Kind | ein Geschenk.',
            examples: [
              ['Ich schenke meinem Vater einen Gutschein.', 'Tôi tặng bố một phiếu quà tặng.'],
              ['Was schenkst du deiner Freundin?', 'Bạn tặng bạn gái gì?'],
            ],
            exercises: [
              order('Ich / schenke / meiner Schwester / ein Buch.', 'Tôi tặng chị gái một quyển sách.'),
              choose('Er gibt ___ Kind einen Luftballon.', ['dem', 'das', 'den'], 'dem', { vi: 'Anh ấy đưa cho đứa trẻ một quả bóng bay.' }),
              fill('Wir schenken {unserem} Lehrer Blumen. (unser Lehrer)', 'Chúng tôi tặng hoa cho thầy giáo.'),
            ],
          },
          {
            text_vi:
              'Nếu **vật là đại từ**, nó đứng **trước**: Ich schenke **sie ihr**. (Tôi tặng nó cho cô ấy.) Ví dụ: Ich gebe **dem Mann den Schlüssel**. → Ich gebe **ihn dem Mann**. → Ich gebe **ihn ihm**. Mẹo: đại từ Akkusativ luôn đứng sớm.',
            examples: [['Hast du deiner Mutter das Geschenk gegeben? – Ja, ich habe es ihr gegeben.', 'Bạn đưa quà cho mẹ chưa? – Rồi, mình đưa cho mẹ rồi.']],
            exercises: [
              choose('Die Blumen? Ich schenke ___ meiner Oma.', ['sie', 'ihr'], 'sie', { vi: 'Hoa à? Tôi tặng chúng cho bà.' }),
              transform('Thay vật bằng đại từ', 'Ich gebe dem Kind den Ball.', ['Ich gebe ihn dem Kind.']),
              choose('Das Buch? Ich gebe ___.', ['es ihm', 'ihm es'], 'es ihm', { vi: 'Quyển sách à? Tôi đưa nó cho anh ấy.' }),
            ],
          },
          {
            text_vi:
              'Tiệc tùng: **die Einladung** (lời mời), **zusagen** (nhận lời) – **absagen** (từ chối, hủy), đều là động từ tách: Ich **sage** leider **ab**. Chủ nhà (**Gastgeber**) chào: **Herzlich willkommen!** Gói quà: das Geschenk **verpacken**.',
            examples: [['Ich habe schon zugesagt.', 'Tôi đã nhận lời rồi.']],
            exercises: [
              fill('Ich muss die Party leider {absagen}.', 'Tiếc là tôi phải hủy buổi tiệc.'),
              translate('Cảm ơn vì lời mời!', ['Danke für die Einladung!', 'Vielen Dank für die Einladung!']),
            ],
          },
        ],
        mixed: [
          transform('Viết câu: mein Bruder / eine Uhr', 'Ich schenke …', ['Ich schenke meinem Bruder eine Uhr.']),
          choose('Zeigst du ___ das Foto?', ['mir', 'mich'], 'mir', { vi: 'Bạn cho mình xem ảnh không?' }),
          order('Er / bringt / der Gastgeberin / Blumen.', 'Anh ấy mang hoa đến cho bà chủ nhà.'),
          choose('Den Gutschein? Ich gebe ___ dir morgen.', ['ihn', 'ihm'], 'ihn', { vi: 'Phiếu quà à? Mai mình đưa cho bạn.' }),
          fill('Was schenkst du {deinen} Eltern? (deine Eltern)', 'Bạn tặng gì cho bố mẹ?'),
        ],
      },
      dialogue: {
        title_de: 'Was schenken wir?',
        lines: [
          { speaker: 'A', de: 'Was schenken wir Herrn Weber zum Jubiläum?', vi: 'Mình tặng ông Weber gì nhân dịp lễ kỷ niệm?' },
          { speaker: 'B', de: 'Vielleicht ein Buch? Er liest gern.', vi: 'Hay là một quyển sách? Ông ấy thích đọc.' },
          { speaker: 'A', de: 'Gute Idee. Und seiner Frau bringen wir Blumen.', vi: 'Ý hay. Còn vợ ông ấy thì mình mang hoa.' },
          { speaker: 'B', de: 'Hast du schon zugesagt? Die Einladung kam letzte Woche.', vi: 'Bạn nhận lời chưa? Thiệp mời đến từ tuần trước.' },
          { speaker: 'A', de: 'Ja. Ich habe dem Gastgeber gestern geschrieben.', vi: 'Rồi. Hôm qua mình đã viết cho chủ nhà.' },
          { speaker: 'B', de: 'Wer verpackt das Geschenk?', vi: 'Ai gói quà?' },
          { speaker: 'A', de: 'Ich verpacke es und du gibst es ihm.', vi: 'Mình gói, còn bạn đưa cho ông ấy.' },
          { speaker: 'B', de: 'Okay. Ich schreibe ihm auch eine Karte. Das ist persönlicher.', vi: 'Được. Mình viết thêm cho ông ấy một tấm thiệp. Như vậy thân tình hơn.' },
        ],
        gloss: { Herrn: 'ông (Dativ)', Jubiläum: 'lễ kỷ niệm', seiner: 'của ông ấy (Dativ)', kam: 'đã đến', Karte: 'tấm thiệp', persönlicher: 'thân tình hơn' },
        questions: [
          mc('Họ tặng ông Weber gì?', ['một quyển sách', 'hoa', 'phiếu quà tặng'], 'một quyển sách'),
          tf('Für die Frau gibt es Blumen.', true),
          tf('A hat noch nicht zugesagt.', false, { explain: 'Ich habe dem Gastgeber gestern geschrieben.' }),
          mc('Ai gói quà?', ['A', 'B', 'vợ ông Weber'], 'A'),
        ],
        dictation: [1, 6],
      },
      writing_prompt_vi:
        'Viết 5 câu: bạn tặng ai cái gì nhân dịp gì (Dativ trước Akkusativ), và một câu thay vật bằng đại từ (Ich schenke es ihm).',
    },
    {
      title_vi: 'Lễ hội trong năm',
      goal_vi: 'Kể về các ngày lễ, phong tục; dùng đại từ Dativ (mir, dir, ihm, ihr…).',
      items: [
        'Fest', 'Feiertag', 'Weihnachten', 'Ostern', 'Silvester', 'Neujahr', 'Hochzeit', 'Braut', 'Bräutigam', 'Feuerwerk',
        'Tradition', 'Brauch', 'Jubiläum', 'Mitternacht', 'Laterne', 'wünschen', 'schmücken', 'anstoßen', 'vorbereiten',
        'festlich', 'traditionell', 'froh', 'Frohes neues Jahr', 'Đại từ nhân xưng Dativ',
      ],
      grammar: {
        point: 'pron-dat',
        sections: [
          {
            text_vi:
              '**Đại từ nhân xưng Dativ**: ich → **mir**, du → **dir**, er/es → **ihm**, sie → **ihr**, wir → **uns**, ihr → **euch**, sie → **ihnen**, Sie → **Ihnen**. Dùng sau động từ Dativ và giới từ Dativ: Kannst du **ihm** helfen? Ich komme **mit dir**.',
            table: 'Nominativ | Akkusativ | Dativ\nich | mich | mir\ndu | dich | dir\ner | ihn | ihm\nsie | sie | ihr\nwir | uns | uns\nihr | euch | euch\nsie/Sie | sie/Sie | ihnen/Ihnen',
            examples: [
              ['Ich wünsche dir frohe Weihnachten!', 'Chúc bạn Giáng sinh vui vẻ!'],
              ['Wir feiern Tet mit ihnen.', 'Chúng tôi ăn Tết với họ.'],
            ],
            exercises: [
              choose('Kannst du ___ helfen? (er)', ['ihm', 'ihn'], 'ihm', { vi: 'Bạn giúp anh ấy được không?' }),
              choose('Ich wünsche ___ ein frohes neues Jahr. (ihr)', ['euch', 'ihr', 'sie'], 'euch', { vi: 'Chúc các bạn năm mới vui vẻ.' }),
              fill('Wir danken {Ihnen} für alles. (Sie)', 'Chúng tôi cảm ơn ông/bà vì tất cả.'),
            ],
          },
          {
            text_vi:
              '**ihr** có ba nghĩa: "các bạn" (Nominativ), "cô ấy" ở Dativ (Ich helfe **ihr**), "của cô ấy, của họ" (**ihr** Mann). Phân biệt **ihm** (Dativ) và **ihn** (Akkusativ): Ich **sehe ihn**. – Ich **helfe ihm**.',
            examples: [['Ich schenke ihr eine Laterne zum Mittherbstfest.', 'Tôi tặng cô ấy một cái đèn lồng dịp Trung thu.']],
            exercises: [
              choose('Ich sehe ___ jeden Tag. (er)', ['ihn', 'ihm'], 'ihn', { vi: 'Ngày nào tôi cũng gặp anh ấy.' }),
              choose('Ich gebe ___ das Geschenk. (sie, cô ấy)', ['ihr', 'sie'], 'ihr', { vi: 'Tôi đưa quà cho cô ấy.' }),
              fill('Wie geht es {dir}? (du)', 'Bạn khỏe không?'),
            ],
          },
          {
            text_vi:
              'Lễ hội: **Weihnachten** (Giáng sinh), **Ostern** (Phục sinh), **Silvester** (giao thừa dương lịch) với **Feuerwerk** (pháo hoa), **Neujahr**. Chúc: **Frohe Weihnachten!** **Frohes neues Jahr!** Nửa đêm người ta **anstoßen** (cụng ly). Ở Việt Nam, **Tet** là **Tradition** quan trọng nhất.',
            examples: [['Um Mitternacht stoßen wir auf das neue Jahr an.', 'Nửa đêm chúng tôi cụng ly mừng năm mới.']],
            exercises: [
              translate('Chúc mừng năm mới!', ['Frohes neues Jahr!']),
              order('Wir / schmücken / den Weihnachtsbaum.', 'Chúng tôi trang trí cây thông Noel.'),
            ],
          },
        ],
        mixed: [
          choose('Ich gratuliere ___ zur Hochzeit. (sie, họ)', ['ihnen', 'sie', 'ihr'], 'ihnen', { vi: 'Tôi chúc mừng đám cưới của họ.' }),
          transform('Thay danh từ bằng đại từ Dativ', 'Ich helfe meinem Bruder.', ['Ich helfe ihm.']),
          fill('Gefällt {euch} das Fest? (ihr)', 'Các bạn có thích lễ hội không?'),
          translate('Tôi chúc bạn may mắn.', ['Ich wünsche dir viel Glück.', 'Ich wünsche dir Glück.']),
          choose('Wir feiern Weihnachten bei ___. (họ)', ['ihnen', 'sie'], 'ihnen', { vi: 'Chúng tôi đón Giáng sinh ở nhà họ.' }),
        ],
      },
      dialogue: {
        title_de: 'Tet in Deutschland',
        lines: [
          { speaker: 'A', de: 'Wie feiert ihr Tet in Deutschland?', vi: 'Các bạn ăn Tết ở Đức thế nào?' },
          { speaker: 'B', de: 'Wir feiern mit anderen Vietnamesen. Wir bereiten zusammen traditionelles Essen vor.', vi: 'Bọn mình ăn Tết với những người Việt khác. Cùng nhau chuẩn bị món ăn truyền thống.' },
          { speaker: 'A', de: 'Gibt es auch ein Feuerwerk?', vi: 'Có pháo hoa không?' },
          { speaker: 'B', de: 'Nein, das gibt es hier nur an Silvester. Aber um Mitternacht stoßen wir an.', vi: 'Không, ở đây chỉ có vào đêm giao thừa dương lịch. Nhưng nửa đêm bọn mình cụng ly.' },
          { speaker: 'A', de: 'Und schenkt ihr euch etwas?', vi: 'Thế các bạn có tặng quà nhau không?' },
          { speaker: 'B', de: 'Ja, die Kinder bekommen rote Umschläge mit Geld. Wir wünschen ihnen Glück und Gesundheit.', vi: 'Có, trẻ em được nhận bao lì xì đỏ có tiền. Mình chúc chúng may mắn và mạnh khỏe.' },
          { speaker: 'A', de: 'Das ist ein schöner Brauch! Darf ich dieses Jahr mitkommen?', vi: 'Phong tục hay quá! Năm nay mình đi cùng được không?' },
          { speaker: 'B', de: 'Natürlich! Ich lade dich ein. Frohes neues Jahr schon jetzt!', vi: 'Tất nhiên! Mình mời bạn. Chúc mừng năm mới trước nhé!' },
        ],
        gloss: { anderen: 'khác', Vietnamesen: 'người Việt', Umschläge: 'phong bì', Glück: 'may mắn', schöner: 'đẹp, hay' },
        questions: [
          mc('Họ ăn Tết với ai?', ['những người Việt khác', 'gia đình người Đức', 'đồng nghiệp'], 'những người Việt khác'),
          tf('Zu Tet gibt es in Deutschland ein Feuerwerk.', false, { explain: 'Das gibt es hier nur an Silvester.' }),
          mc('Trẻ em nhận gì?', ['bao lì xì có tiền', 'đồ chơi', 'đèn lồng'], 'bao lì xì có tiền'),
          tf('A darf mitkommen.', true),
        ],
        dictation: [3, 5],
      },
      writing_prompt_vi:
        'Kể về một lễ hội quan trọng với bạn (5 câu): khi nào, làm gì, tặng ai cái gì, chúc gì (mir, dir, ihm, ihr…).',
    },
  ],
  test: {
    grammar: {
      'dativ-verben': [
        choose('Ich helfe ___.', ['dir', 'dich'], 'dir'),
        fill('Das Auto {gehört} meinem Vater.', 'Chiếc ô tô là của bố tôi.'),
        choose('Wir danken ___ Lehrerin.', ['der', 'die'], 'der'),
        choose('Das Kleid gefällt ___.', ['mir', 'mich'], 'mir'),
        fill('Ich gratuliere {dir} zum Geburtstag!', 'Mình chúc mừng sinh nhật bạn!'),
        order('Ich / danke / Ihnen / für die Hilfe.', 'Tôi cảm ơn ông/bà đã giúp đỡ.'),
      ],
      'dat-akk': [
        order('Ich / schenke / meiner Mutter / Blumen.', 'Tôi tặng hoa cho mẹ.'),
        choose('Er gibt ___ Kind ein Eis.', ['dem', 'das'], 'dem'),
        choose('Die Blumen? Ich schenke ___ ihr.', ['sie', 'ihr'], 'sie'),
        fill('Wir schenken {unserem} Vater eine Uhr. (unser Vater)', 'Chúng tôi tặng bố một chiếc đồng hồ.'),
        choose('Das Buch? Ich gebe ___ morgen.', ['es dir', 'dir es'], 'es dir'),
        fill('Zeig {mir} bitte das Foto!', 'Cho mình xem ảnh với!'),
      ],
      'pron-dat': [
        choose('Kannst du ___ helfen? (er)', ['ihm', 'ihn'], 'ihm'),
        choose('Ich sehe ___. (er)', ['ihn', 'ihm'], 'ihn'),
        fill('Ich wünsche {euch} frohe Weihnachten! (ihr)', 'Chúc các bạn Giáng sinh vui vẻ!'),
        choose('Ich gebe ___ das Buch. (sie, cô ấy)', ['ihr', 'sie'], 'ihr'),
        fill('Wir danken {Ihnen}! (Sie)', 'Chúng tôi cảm ơn ông/bà!'),
        choose('Ich feiere mit ___. (họ)', ['ihnen', 'sie'], 'ihnen'),
      ],
    },
    reading: {
      title_de: 'Eine Einladung zur Hochzeit',
      text_de:
        'Liebe Anna, vielen Dank für die Einladung zu eurer Hochzeit! Ich freue mich sehr für euch und gratuliere euch ganz herzlich. Natürlich sage ich zu. Ich komme am Samstag mit meinem Mann. Was wünscht ihr euch als Geschenk? Wir möchten euch etwas Persönliches schenken, vielleicht ein Fotoalbum oder einen Gutschein für eine Reise. Schreib mir bitte, was euch gefällt. Übrigens: Passt mein rotes Kleid zu der Hochzeit, oder sollen alle festliche Kleidung in Weiß tragen? Ich helfe euch auch gern bei den Vorbereitungen. Bis bald und herzliche Grüße, deine Linh',
      gloss: {
        eurer: 'của các bạn (Dativ)',
        'ganz herzlich': 'thật lòng',
        'wünscht ihr euch': 'các bạn mong muốn',
        'etwas Persönliches': 'một thứ mang tính cá nhân',
        Fotoalbum: 'album ảnh',
        übrigens: 'nhân tiện',
        Weiß: 'màu trắng',
        Vorbereitungen: 'việc chuẩn bị',
      },
      questions: [
        tf('Linh sagt die Einladung ab.', false, { explain: 'Natürlich sage ich zu.' }),
        mc('Linh đến cùng ai?', ['chồng', 'con', 'một mình'], 'chồng'),
        mc('Linh muốn tặng gì?', ['một món quà mang tính cá nhân', 'tiền mặt', 'hoa'], 'một món quà mang tính cá nhân'),
        tf('Linh will bei den Vorbereitungen helfen.', true),
      ],
    },
  },
});
