// A2 · 08 Du lịch và kỳ nghỉ — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a2-08',
  points: [
    {
      key: 'wo-wohin',
      rule_key: 'wo-wohin-woher',
      category: 'other',
      title_vi: 'wo? wohin? woher? và aus, durch, um … herum',
      explanation_vi: 'wo = ở đâu (vị trí), wohin = đi đâu (hướng), woher = từ đâu. aus + Dativ (từ trong ra), durch + Akk (xuyên qua), um … herum + Akk (vòng quanh).',
    },
    {
      key: 'richtung',
      rule_key: 'richtung-nach-in-zu',
      category: 'preposition',
      title_vi: 'Đi đâu: nach, in, zu',
      explanation_vi: 'nach + thành phố/nước không mạo từ, nach Hause; in + nước có mạo từ, nơi khép kín (in die Schweiz, ins Kino); zu + người, cơ quan (zum Arzt).',
    },
    {
      key: 'ordinal',
      rule_key: 'ordinalzahl-datum',
      category: 'other',
      title_vi: 'Số thứ tự và ngày tháng',
      explanation_vi: '1.–19. thêm -te (zweite), từ 20. thêm -ste (zwanzigste); erste, dritte, siebte bất quy tắc. am + -en: am zehnten Juli; vom … bis zum …',
    },
  ],
  lessons: [
    {
      title_vi: 'Đi chơi ở đâu?',
      goal_vi: 'Hỏi và nói nơi chốn, hướng đi (wo, wohin, woher); kể một chuyến đi chơi ngắn.',
      items: [
        'Insel', 'See', 'Fluss', 'Wald', 'Küste', 'Landschaft', 'Ausflug', 'Wanderung', 'Sehenswürdigkeit', 'Altstadt',
        'Schloss', 'hin', 'zurück', 'aus', 'durch', 'um … herum', 'besichtigen', 'berühmt', 'historisch',
        'Woher? Wohin? Wo?',
      ],
      grammar: {
        point: 'wo-wohin',
        sections: [
          {
            text_vi:
              'Ba từ hỏi nơi chốn: **wo?** (ở đâu – vị trí), **wohin?** (đi đâu – hướng tới), **woher?** (từ đâu đến). Wo bist du? – **In** Hanoi. Wohin fährst du? – **Nach** Hue. Woher kommst du? – **Aus** Da Nang. Tiếng Việt dùng chung chữ "đâu", tiếng Đức chọn từ hỏi theo hướng.',
            table: 'Hỏi | Nghĩa | Trả lời\nwo? | ở đâu | in Berlin, am See\nwohin? | đi đâu | nach Berlin, an den See\nwoher? | từ đâu | aus Berlin, vom See',
            examples: [
              ['Wohin fahrt ihr im Sommer? – An die Küste.', 'Mùa hè các bạn đi đâu? – Ra bờ biển.'],
              ['Woher kommst du gerade? – Aus der Altstadt.', 'Bạn vừa ở đâu về? – Từ phố cổ.'],
            ],
            exercises: [
              choose('___ fahrt ihr im Sommer? – Nach Spanien.', ['Wohin', 'Wo', 'Woher'], 'Wohin', { vi: 'Mùa hè các bạn đi đâu? – Đi Tây Ban Nha.' }),
              choose('___ seid ihr jetzt? – Am See.', ['Wo', 'Wohin', 'Woher'], 'Wo', { vi: 'Giờ các bạn ở đâu? – Ở hồ.' }),
              choose('___ kommt ihr? – Aus dem Wald.', ['Woher', 'Wohin', 'Wo'], 'Woher', { vi: 'Các bạn từ đâu về? – Từ rừng.' }),
            ],
          },
          {
            text_vi:
              'Giới từ chỉ đường đi: **aus** + Dativ (từ trong ra): aus dem Haus; **durch** + Akk (xuyên qua): **durch den** Wald; **um … herum** + Akk (vòng quanh): **um den** See **herum**. **hin** = tới đó (xa người nói), **zurück** = trở lại: Wie kommen wir **hin**? Wann bist du **zurück**?',
            examples: [
              ['Wir wandern durch den Wald.', 'Chúng tôi đi bộ xuyên rừng.'],
              ['Wir laufen um den See herum.', 'Chúng tôi đi bộ quanh hồ.'],
            ],
            exercises: [
              choose('Wir fahren durch ___ Schweiz.', ['die', 'der'], 'die', { vi: 'Chúng tôi đi xuyên qua Thụy Sĩ.' }),
              fill('Er kommt gerade aus {dem} Urlaub.', 'Anh ấy vừa đi nghỉ về.'),
              order('Wir / laufen / um den See / herum.', 'Chúng tôi đi vòng quanh hồ.'),
            ],
          },
          {
            text_vi:
              'Tham quan: **besichtigen** (tham quan một nơi): Wir **besichtigen** das Schloss. **berühmt** (nổi tiếng), **historisch** (lịch sử): die **historische** Altstadt. **einen Ausflug machen** = đi chơi ngắn ngày.',
            examples: [['Die Altstadt von Hoi An ist sehr berühmt.', 'Phố cổ Hội An rất nổi tiếng.']],
            exercises: [
              fill('Morgen {besichtigen} wir das Schloss.', 'Ngày mai chúng tôi tham quan lâu đài.'),
              translate('Chủ nhật chúng tôi đi chơi một chuyến.', ['Am Sonntag machen wir einen Ausflug.']),
            ],
          },
        ],
        mixed: [
          choose('___ wohnst du? – In Köln.', ['Wo', 'Wohin'], 'Wo', { vi: 'Bạn sống ở đâu? – Ở Köln.' }),
          choose('___ gehst du? – Ins Museum.', ['Wohin', 'Wo'], 'Wohin', { vi: 'Bạn đi đâu? – Đến bảo tàng.' }),
          fill('Wir wandern durch {den} Wald.', 'Chúng tôi đi bộ xuyên rừng.'),
          translate('Bạn từ đâu đến?', ['Woher kommst du?', 'Woher kommen Sie?']),
          order('Wohin / fahrt / ihr / am Wochenende?', 'Cuối tuần các bạn đi đâu?'),
        ],
      },
      dialogue: {
        title_de: 'Ein Ausflug',
        lines: [
          { speaker: 'A', de: 'Wohin fahrt ihr am Wochenende?', vi: 'Cuối tuần các bạn đi đâu?' },
          { speaker: 'B', de: 'An einen See in den Bergen. Wir wollen um den See herum wandern.', vi: 'Đến một cái hồ trên núi. Bọn mình muốn đi bộ vòng quanh hồ.' },
          { speaker: 'A', de: 'Toll! Wie kommt ihr hin?', vi: 'Hay quá! Các bạn đến đó bằng gì?' },
          { speaker: 'B', de: 'Mit dem Zug. Danach laufen wir zwei Stunden durch den Wald.', vi: 'Bằng tàu. Sau đó đi bộ hai tiếng xuyên rừng.' },
          { speaker: 'A', de: 'Gibt es dort auch Sehenswürdigkeiten?', vi: 'Ở đó có danh lam gì không?' },
          { speaker: 'B', de: 'Ja, ein berühmtes Schloss. Es ist über 500 Jahre alt.', vi: 'Có, một lâu đài nổi tiếng. Nó đã hơn 500 năm tuổi.' },
          { speaker: 'A', de: 'Und wann seid ihr zurück?', vi: 'Thế khi nào các bạn về?' },
          { speaker: 'B', de: 'Am Sonntagabend. Wir übernachten in einer Jugendherberge.', vi: 'Tối Chủ nhật. Bọn mình ngủ ở nhà nghỉ thanh niên.' },
        ],
        gloss: { Bergen: 'núi (Dativ số nhiều)', Sonntagabend: 'tối Chủ nhật', übernachten: 'ngủ qua đêm', Jugendherberge: 'nhà nghỉ thanh niên' },
        questions: [
          mc('Họ đi đâu?', ['một cái hồ trên núi', 'biển', 'thành phố'], 'một cái hồ trên núi'),
          tf('Sie fahren mit dem Auto.', false, { explain: 'Mit dem Zug.' }),
          mc('Ở đó có danh lam gì?', ['một lâu đài nổi tiếng', 'một nhà thờ', 'một bảo tàng'], 'một lâu đài nổi tiếng'),
          tf('Sie sind am Sonntagabend zurück.', true),
        ],
        dictation: [2, 4],
      },
      writing_prompt_vi:
        'Viết 5 câu về một chuyến đi chơi ngắn: đi đâu (wohin), ở đâu (wo), đi qua đâu (durch), về khi nào (zurück).',
    },
    {
      title_vi: 'Ra nước ngoài',
      goal_vi: 'Nói đi đâu với nach, in, zu; kể chuyện trên đường đi.',
      items: [
        'Grenze', 'Visum', 'Reisebüro', 'Rucksack', 'Reiseführer', 'Hafen', 'Schiff', 'Tourist', 'Stadtführung', 'ins Ausland',
        'losfahren', 'tanken', 'verpassen', 'sich verlaufen', 'fremd', 'abenteuerlich', 'eine Reise machen',
        'Wir haben Glück gehabt', 'nach / in / zu: đi đâu',
      ],
      grammar: {
        point: 'richtung',
        sections: [
          {
            text_vi:
              'Đi **đâu**: chọn giới từ theo **loại nơi**. **nach** + thành phố, nước **không mạo từ** (nach Berlin, nach Vietnam) và **nach Hause**. **in** + nước **có mạo từ** hoặc nơi khép kín (in die Schweiz, in die USA, ins Kino). **zu** + người, cửa hàng, cơ quan (zum Arzt, zu meiner Oma).',
            table: 'Giới từ | Dùng với | Ví dụ\nnach | thành phố, nước không mạo từ | nach Hamburg\nin | nước có mạo từ, nơi khép kín | in die Türkei, ins Kino\nzu | người, cơ quan, cửa hàng | zum Arzt, zu Freunden',
            examples: [
              ['Wir fahren in die Schweiz.', 'Chúng tôi đi Thụy Sĩ.'],
              ['Morgen fliege ich nach Frankreich.', 'Mai tôi bay sang Pháp.'],
            ],
            exercises: [
              choose('Wir fahren ___ die Türkei.', ['in', 'nach', 'zu'], 'in', { vi: 'Chúng tôi đi Thổ Nhĩ Kỳ.' }),
              choose('Ich fliege ___ Italien.', ['nach', 'in', 'zu'], 'nach', { vi: 'Tôi bay sang Ý.' }),
              choose('Ich gehe ___ meiner Freundin.', ['zu', 'nach', 'in'], 'zu', { vi: 'Tôi đến nhà bạn gái.' }),
            ],
          },
          {
            text_vi:
              'Nhớ theo cặp hướng – vị trí: **nach** Berlin (đi) ↔ **in** Berlin (ở); **in die** Schweiz ↔ **in der** Schweiz; **zum** Arzt ↔ **beim** Arzt; **nach Hause** ↔ **zu Hause**; **ins Ausland** (ra nước ngoài) ↔ **im Ausland** (ở nước ngoài).',
            table: 'Đi đến (wohin?) | Ở (wo?)\nnach Berlin | in Berlin\nin die Schweiz | in der Schweiz\nzum Arzt | beim Arzt\nins Ausland | im Ausland',
            examples: [['Sie geht für ein Jahr ins Ausland.', 'Cô ấy ra nước ngoài một năm.']],
            exercises: [
              choose('Ich war gestern ___ Arzt.', ['beim', 'zum'], 'beim', { vi: 'Hôm qua tôi ở chỗ bác sĩ.' }),
              fill('Sie arbeitet seit zwei Jahren {im} Ausland.', 'Cô ấy làm việc ở nước ngoài hai năm nay.'),
              choose('Wann fliegst du ___ Vietnam?', ['nach', 'in'], 'nach', { vi: 'Khi nào bạn bay về Việt Nam?' }),
            ],
          },
          {
            text_vi:
              'Chuyện trên đường: **losfahren** (khởi hành), **tanken** (đổ xăng), **den Zug verpassen** (lỡ tàu), **sich verlaufen** (lạc đường khi đi bộ): Wir haben **uns** in der Altstadt **verlaufen**. Kết thúc tốt đẹp: **Wir haben Glück gehabt!** (Chúng tôi gặp may!)',
            examples: [['Wir haben den Zug verpasst, aber wir haben Glück gehabt: Der nächste kam sofort.', 'Chúng tôi lỡ tàu, nhưng may: chuyến sau đến ngay.']],
            exercises: [
              order('Wann / fahren / wir / los?', 'Khi nào mình khởi hành?'),
              translate('Tôi đã lỡ tàu.', ['Ich habe den Zug verpasst.']),
            ],
          },
        ],
        mixed: [
          choose('Wir fahren im Sommer ___ Österreich.', ['nach', 'in', 'zu'], 'nach', { vi: 'Mùa hè chúng tôi đi Áo.' }),
          choose('Er fährt ___ die Niederlande.', ['in', 'nach'], 'in', { vi: 'Anh ấy đi Hà Lan.' }),
          fill('Ich gehe heute {zum} Reisebüro.', 'Hôm nay tôi đến văn phòng du lịch.'),
          translate('Năm sau tôi ra nước ngoài.', ['Nächstes Jahr gehe ich ins Ausland.', 'Ich gehe nächstes Jahr ins Ausland.']),
          choose('Wir haben ___ in der Stadt verlaufen.', ['uns', 'sich'], 'uns', { vi: 'Chúng tôi bị lạc trong thành phố.' }),
        ],
      },
      dialogue: {
        title_de: 'Reisepläne',
        lines: [
          { speaker: 'A', de: 'Wohin fährst du in den Ferien?', vi: 'Kỳ nghỉ bạn đi đâu?' },
          { speaker: 'B', de: 'Ich mache eine Reise nach Europa. Zuerst fliege ich nach Deutschland, dann fahre ich in die Schweiz.', vi: 'Mình đi du lịch châu Âu. Đầu tiên bay sang Đức, rồi đi Thụy Sĩ.' },
          { speaker: 'A', de: 'Brauchst du ein Visum?', vi: 'Bạn có cần thị thực không?' },
          { speaker: 'B', de: 'Ja, ich habe es schon im Reisebüro beantragt.', vi: 'Có, mình đã xin ở văn phòng du lịch rồi.' },
          { speaker: 'A', de: 'Und danach?', vi: 'Rồi sau đó?' },
          { speaker: 'B', de: 'Danach fahre ich mit dem Schiff von Italien nach Griechenland.', vi: 'Sau đó mình đi tàu thủy từ Ý sang Hy Lạp.' },
          { speaker: 'A', de: 'Das klingt abenteuerlich!', vi: 'Nghe phiêu lưu quá!' },
          { speaker: 'B', de: 'Ja! Ich nehme nur einen Rucksack mit und einen guten Reiseführer.', vi: 'Ừ! Mình chỉ mang một cái ba lô và một cuốn sách hướng dẫn tốt.' },
        ],
        gloss: { Europa: 'châu Âu', beantragt: 'đã nộp đơn xin', Italien: 'Ý', Griechenland: 'Hy Lạp', klingt: 'nghe có vẻ' },
        questions: [
          mc('Đầu tiên B bay đến đâu?', ['Đức', 'Thụy Sĩ', 'Ý'], 'Đức'),
          tf('B braucht kein Visum.', false),
          mc('B đi từ Ý sang Hy Lạp bằng gì?', ['tàu thủy', 'máy bay', 'tàu hỏa'], 'tàu thủy'),
          tf('B nimmt einen Rucksack mit.', true),
        ],
        dictation: [2, 6],
      },
      writing_prompt_vi:
        'Lập kế hoạch một chuyến du lịch (5–6 câu): đi nước nào, thành phố nào, đến thăm ai (nach, in, zu), mang theo gì.',
    },
    {
      title_vi: 'Đặt phòng',
      goal_vi: 'Nói ngày tháng bằng số thứ tự, đặt phòng từ ngày … đến ngày …',
      items: [
        'Unterkunft', 'Jugendherberge', 'Ferienwohnung', 'Zelt', 'Doppelzimmer', 'Rezeption', 'Aufenthalt', 'Postkarte',
        'Andenken', 'Wetterbericht', 'übernachten', 'erleben', 'sich erholen', 'zelten', 'ausgebucht', 'preisgünstig',
        'Số thứ tự: der erste, zweite, dritte', 'am + ngày tháng',
      ],
      grammar: {
        point: 'ordinal',
        sections: [
          {
            text_vi:
              '**Số thứ tự**: 1–19 thêm **-te**: der zwei**te**, der vier**te**; từ 20 thêm **-ste**: der zwanzig**ste**. Bất quy tắc: der **erste**, der **dritte**, der **siebte**. Khi viết: der 3. Mai (có dấu chấm). Hỏi: **Der Wievielte ist heute?** – **Heute ist der dritte Mai.**',
            table: 'Số | Thứ tự\n1. | erste\n2. | zweite\n3. | dritte\n7. | siebte\n20. | zwanzigste\n31. | einunddreißigste',
            examples: [
              ['Heute ist der erste Juli.', 'Hôm nay là mùng một tháng Bảy.'],
              ['Unser Zimmer ist im dritten Stock.', 'Phòng của chúng tôi ở tầng ba.'],
            ],
            exercises: [
              fill('Heute ist der {dritte} Mai. (3.)', 'Hôm nay là ngày 3 tháng Năm.'),
              choose('Heute ist der ___ Juni. (7.)', ['siebte', 'siebente', 'siebenste'], 'siebte', { vi: 'Hôm nay là ngày 7 tháng Sáu.' }),
              fill('Morgen ist der {zwanzigste} März. (20.)', 'Ngày mai là ngày 20 tháng Ba.'),
            ],
          },
          {
            text_vi:
              'Nói **vào ngày** nào: **am** + số thứ tự có đuôi **-en** (Dativ): Ich fliege **am zehnten** Juli. Từ ngày … đến ngày …: **vom** ersten **bis zum** fünften August. Đặt phòng: Ich möchte ein Doppelzimmer **vom** 3. **bis zum** 7. Mai reservieren.',
            examples: [['Wir kommen am zweiten August an.', 'Chúng tôi đến vào ngày 2 tháng Tám.']],
            exercises: [
              fill('Ich fliege am {zehnten} Juli. (10.)', 'Tôi bay ngày 10 tháng Bảy.'),
              choose('Wir bleiben vom ersten ___ zum fünften Mai.', ['bis', 'am', 'um'], 'bis', { vi: 'Chúng tôi ở từ ngày 1 đến ngày 5 tháng Năm.' }),
              choose('Mein Geburtstag ist am ___ Januar. (1.)', ['ersten', 'erste', 'einsten'], 'ersten', { vi: 'Sinh nhật tôi vào ngày 1 tháng Một.' }),
            ],
          },
          {
            text_vi:
              'Chỗ ở: **Hotel**, **Jugendherberge** (nhà nghỉ thanh niên), **Ferienwohnung** (căn hộ nghỉ dưỡng), **Zelt** (lều). **übernachten** (ngủ qua đêm), **zelten** (cắm trại). Kín phòng: **Das Hotel ist ausgebucht.** Ở quầy lễ tân (**Rezeption**): Wir wünschen Ihnen einen schönen **Aufenthalt**!',
            examples: [['Wir übernachten in einer preisgünstigen Jugendherberge.', 'Chúng tôi ngủ ở một nhà nghỉ thanh niên giá rẻ.']],
            exercises: [
              order('Ich möchte / ein Doppelzimmer / reservieren.', 'Tôi muốn đặt một phòng đôi.'),
              translate('Khách sạn kín phòng rồi.', ['Das Hotel ist ausgebucht.']),
            ],
          },
        ],
        mixed: [
          transform('Viết ngày bằng chữ', 'Heute ist der 2. Oktober.', ['Heute ist der zweite Oktober.']),
          fill('Wir kommen am {dritten} April an. (3.)', 'Chúng tôi đến ngày 3 tháng Tư.'),
          choose('Wir wohnen im ___ Stock. (4.)', ['vierten', 'vierte', 'viersten'], 'vierten', { vi: 'Chúng tôi ở tầng bốn.' }),
          translate('Hôm nay là ngày mấy?', ['Der Wievielte ist heute?', 'Welches Datum ist heute?', 'Den Wievielten haben wir heute?']),
          order('Wir bleiben / vom fünften / bis zum zehnten / Mai.', 'Chúng tôi ở từ ngày 5 đến ngày 10 tháng Năm.'),
        ],
      },
      dialogue: {
        title_de: 'Ein Zimmer reservieren',
        lines: [
          { speaker: 'A', de: 'Hotel Seeblick, guten Tag!', vi: 'Khách sạn Seeblick, xin chào!' },
          { speaker: 'B', de: 'Guten Tag. Ich möchte ein Doppelzimmer reservieren, vom ersten bis zum vierten August.', vi: 'Xin chào. Tôi muốn đặt một phòng đôi từ ngày 1 đến ngày 4 tháng Tám.' },
          { speaker: 'A', de: 'Einen Moment, bitte. Oh, im August sind wir leider fast ausgebucht.', vi: 'Xin chờ một chút. Ôi, tiếc là tháng Tám chúng tôi gần kín phòng.' },
          { speaker: 'B', de: 'Schade! Haben Sie noch etwas frei?', vi: 'Tiếc quá! Còn phòng nào trống không?' },
          { speaker: 'A', de: 'Ja, ein Zimmer im dritten Stock, aber nur bis zum dritten August.', vi: 'Còn, một phòng ở tầng ba, nhưng chỉ đến ngày 3 tháng Tám.' },
          { speaker: 'B', de: 'Das ist okay. Am dritten können wir in eine Ferienwohnung gehen.', vi: 'Được. Ngày 3 chúng tôi có thể chuyển sang một căn hộ nghỉ dưỡng.' },
          { speaker: 'A', de: 'Gut. Ihr Name, bitte?', vi: 'Được. Xin cho biết tên?' },
          { speaker: 'B', de: 'Tran, T-R-A-N. Wir kommen am ersten August am Nachmittag an.', vi: 'Trần, T-R-A-N. Chúng tôi đến chiều ngày 1 tháng Tám.' },
        ],
        gloss: { Seeblick: 'tên khách sạn (nhìn ra hồ)', fast: 'gần như', 'T-R-A-N': 'đánh vần tên Tran', okay: 'được' },
        questions: [
          mc('B đặt loại phòng gì?', ['phòng đôi', 'phòng đơn', 'căn hộ'], 'phòng đôi'),
          tf('Im August ist das Hotel fast ausgebucht.', true),
          mc('Phòng còn trống ở tầng mấy?', ['tầng ba', 'tầng một', 'tầng bốn'], 'tầng ba'),
          tf('B kommt am ersten August am Abend an.', false, { explain: 'Am Nachmittag.' }),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Viết email đặt phòng (4–5 câu): loại phòng, từ ngày nào đến ngày nào (vom … bis zum …), ngày và giờ đến.',
    },
  ],
  test: {
    grammar: {
      'wo-wohin': [
        choose('___ fährst du? – Nach Rom.', ['Wohin', 'Wo'], 'Wohin'),
        choose('___ wohnst du? – In Wien.', ['Wo', 'Wohin'], 'Wo'),
        choose('___ kommst du? – Aus Spanien.', ['Woher', 'Wohin'], 'Woher'),
        fill('Wir laufen um {den} See herum.', 'Chúng tôi đi vòng quanh hồ.'),
        order('Wir / wandern / durch / den Wald.', 'Chúng tôi đi bộ xuyên rừng.'),
        fill('Er kommt aus {dem} Haus.', 'Anh ấy đi ra khỏi nhà.'),
      ],
      richtung: [
        choose('Ich fahre ___ die Schweiz.', ['in', 'nach'], 'in'),
        choose('Ich fliege ___ Japan.', ['nach', 'in'], 'nach'),
        choose('Ich gehe ___ Arzt.', ['zum', 'nach'], 'zum'),
        choose('Ich war ___ Arzt.', ['beim', 'zum'], 'beim'),
        fill('Sie lebt {im} Ausland.', 'Cô ấy sống ở nước ngoài.'),
        fill('Wir gehen jetzt {nach} Hause.', 'Bây giờ chúng tôi về nhà.'),
      ],
      ordinal: [
        fill('Heute ist der {erste} Mai. (1.)', 'Hôm nay là ngày 1 tháng Năm.'),
        choose('Ich komme am ___ Juni. (2.)', ['zweiten', 'zweite'], 'zweiten'),
        fill('Wir wohnen im {dritten} Stock. (3.)', 'Chúng tôi ở tầng ba.'),
        choose('Der ___ Tag war schön. (7.)', ['siebte', 'siebente'], 'siebte'),
        fill('Mein Geburtstag ist am {zwanzigsten} Mai. (20.)', 'Sinh nhật tôi vào ngày 20 tháng Năm.'),
        order('Ich / fliege / am zehnten / Juli.', 'Tôi bay ngày 10 tháng Bảy.'),
      ],
    },
    reading: {
      title_de: 'Grüße von der Insel',
      text_de:
        'Liebe Oma, viele Grüße von der Insel Rügen! Wir sind am dritten August angekommen und bleiben bis zum zehnten. Wir übernachten in einer kleinen Ferienwohnung direkt an der Küste. Die Landschaft ist wunderschön: Es gibt Wälder, Seen und lange Strände. Gestern haben wir einen Ausflug gemacht. Wir sind mit dem Fahrrad durch den Wald zu einem alten Schloss gefahren. Auf dem Rückweg haben wir uns verlaufen, aber ein freundlicher Tourist hat uns geholfen. Wir haben Glück gehabt! Morgen fahren wir mit dem Schiff zu einer kleinen Insel. Am elften August sind wir wieder zu Hause. Viele Küsse, Linh',
      gloss: { Rügen: 'đảo Rügen', wunderschön: 'tuyệt đẹp', Strände: 'bãi biển (số nhiều)', Rückweg: 'đường về', Küsse: 'những nụ hôn' },
      questions: [
        mc('Họ đến Rügen ngày nào?', ['3 tháng Tám', '10 tháng Tám', '11 tháng Tám'], '3 tháng Tám'),
        tf('Sie übernachten in einem Hotel.', false, { explain: 'In einer kleinen Ferienwohnung.' }),
        mc('Hôm qua họ đạp xe đến đâu?', ['một lâu đài cũ', 'bãi biển', 'một hòn đảo'], 'một lâu đài cũ'),
        tf('Ein Tourist hat ihnen geholfen.', true),
        tf('Am zehnten August sind sie wieder zu Hause.', false, { explain: 'Am elften August.' }),
      ],
    },
  },
});
