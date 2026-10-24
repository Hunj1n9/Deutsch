// A2 · 02 Nhà cửa và chuyển nhà — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a2-02',
  points: [
    {
      key: 'wechsel',
      rule_key: 'wechselpraeposition-wo-wohin',
      category: 'case',
      title_vi: 'Giới từ hai cách: wo? + Dativ, wohin? + Akkusativ',
      explanation_vi: 'in, an, auf, über, unter, vor, hinter, neben, zwischen: vị trí (wo?) dùng Dativ, hướng tới (wohin?) dùng Akkusativ. in das = ins, an das = ans.',
    },
    {
      key: 'legen-liegen',
      rule_key: 'legen-liegen-stellen-stehen',
      category: 'word_choice',
      title_vi: 'legen/liegen, stellen/stehen',
      explanation_vi: 'legen, stellen = hành động (wohin? + Akk); liegen, stehen = trạng thái (wo? + Dativ). Đồ dựng đứng: stellen/stehen; đồ nằm phẳng: legen/liegen.',
    },
    {
      key: 'haengen',
      rule_key: 'haengen-setzen-sitzen',
      category: 'word_choice',
      title_vi: 'hängen, setzen/sitzen, stecken',
      explanation_vi: 'hängen + Akk = treo (hat gehängt), hängen + Dativ = đang treo (hat gehangen); setzen (đặt ngồi, + Akk) ↔ sitzen (đang ngồi, + Dativ).',
    },
  ],
  lessons: [
    {
      title_vi: 'Tìm nhà mới',
      goal_vi: 'Hỏi về một căn hộ cho thuê và nói vị trí, hướng đi bằng giới từ hai cách.',
      items: [
        'Vermieter', 'Mieter', 'Erdgeschoss', 'Keller', 'Dach', 'Treppe', 'Aufzug', 'Heizung', 'Nebenkosten', 'Kaution',
        'Anzeige', 'Besichtigung', 'oben', 'unten', 'drinnen', 'zentral', 'möbliert', 'eigen',
        'Giới từ hai cách: wo? → Dativ', 'Giới từ hai cách: wohin? → Akkusativ', 'in das = ins, an das = ans',
      ],
      grammar: {
        point: 'wechsel',
        sections: [
          {
            text_vi:
              'Chín **giới từ hai cách**: in, an, auf, über, unter, vor, hinter, neben, zwischen. Trả lời **wo?** (ở đâu, đứng yên) → **Dativ**: Das Fahrrad steht **im** Keller. Trả lời **wohin?** (đi đâu, chuyển tới) → **Akkusativ**: Ich bringe das Fahrrad **in den** Keller. Tiếng Việt chỉ nói "ở trong / vào trong", tiếng Đức đổi mạo từ.',
            table: 'Câu hỏi | Cách | Ví dụ\nwo? | Dativ | Ich bin im Keller.\nwohin? | Akkusativ | Ich gehe in den Keller.',
            examples: [
              ['Die Wohnung ist im Erdgeschoss.', 'Căn hộ ở tầng trệt.'],
              ['Wir tragen die Kartons in den Keller.', 'Chúng tôi khuân các thùng xuống tầng hầm.'],
            ],
            exercises: [
              choose('Das Fahrrad steht ___ Keller. (wo?)', ['im', 'in den'], 'im', { vi: 'Xe đạp để ở tầng hầm.' }),
              choose('Ich bringe das Fahrrad ___ Keller. (wohin?)', ['in den', 'im'], 'in den', { vi: 'Tôi mang xe đạp xuống tầng hầm.' }),
              fill('Die Katze sitzt auf {dem} Dach.', 'Con mèo ngồi trên mái nhà.'),
            ],
          },
          {
            text_vi:
              'Đổi mạo từ: **wo?** der/das → **dem**, die → **der**; **wohin?** der → **den**, die → **die**, das → **das**. Rút gọn: in dem = **im**, an dem = **am** (Dativ); in das = **ins**, an das = **ans** (Akkusativ). Wir gehen **ins** Wohnzimmer. – Wir sitzen **im** Wohnzimmer.',
            table: 'Danh từ | wo? (Dativ) | wohin? (Akk)\nder Keller | im Keller | in den Keller\ndie Küche | in der Küche | in die Küche\ndas Bad | im Bad | ins Bad',
            examples: [
              ['Geh bitte ins Bad!', 'Vào phòng tắm đi!'],
              ['Ich bin in der Küche.', 'Tôi ở trong bếp.'],
            ],
            exercises: [
              choose('Wir gehen ___ Wohnzimmer.', ['ins', 'im'], 'ins', { vi: 'Chúng tôi đi vào phòng khách.' }),
              choose('Ich bin ___ Küche.', ['in der', 'in die'], 'in der', { vi: 'Tôi ở trong bếp.' }),
              fill('Wir fahren {ans} Meer. (an + das)', 'Chúng tôi đi biển.'),
            ],
          },
          {
            text_vi:
              'Tìm nhà: đọc **Anzeige** (tin rao), hẹn **Besichtigung** (xem nhà). Hỏi chủ nhà (**Vermieter**): **Wie hoch sind die Nebenkosten?** **Gibt es einen Aufzug?** **Ist die Wohnung möbliert?** **oben** = ở trên, **unten** = ở dưới.',
            examples: [['Die Kaution beträgt zwei Monatsmieten.', 'Tiền đặt cọc là hai tháng tiền nhà.']],
            exercises: [
              order('Wie hoch / sind / die Nebenkosten?', 'Chi phí phụ là bao nhiêu?'),
              translate('Căn hộ ở tầng trệt.', ['Die Wohnung ist im Erdgeschoss.', 'Die Wohnung liegt im Erdgeschoss.']),
            ],
          },
        ],
        mixed: [
          choose('Der Vermieter wohnt ___ Erdgeschoss.', ['im', 'ins'], 'im', { vi: 'Chủ nhà sống ở tầng trệt.' }),
          choose('Ich trage den Karton ___ Keller.', ['in den', 'im'], 'in den', { vi: 'Tôi khuân thùng xuống tầng hầm.' }),
          transform('Đổi sang câu chỉ hướng (Ich gehe …)', 'Ich bin im Garten.', ['Ich gehe in den Garten.']),
          translate('Tôi đi vào bếp.', ['Ich gehe in die Küche.']),
          fill('Das Bild hängt an {der} Wand.', 'Bức tranh treo trên tường.'),
        ],
      },
      dialogue: {
        title_de: 'Die Besichtigung',
        lines: [
          { speaker: 'A', de: 'Guten Tag! Sie kommen zur Besichtigung?', vi: 'Xin chào! Chị đến xem nhà phải không?' },
          { speaker: 'B', de: 'Ja, ich habe Ihre Anzeige im Internet gelesen.', vi: 'Vâng, tôi đọc tin rao của ông trên mạng.' },
          { speaker: 'A', de: 'Kommen Sie herein! Die Wohnung ist oben, im dritten Stock.', vi: 'Mời chị vào! Căn hộ ở trên, tầng ba.' },
          { speaker: 'B', de: 'Gibt es einen Aufzug?', vi: 'Có thang máy không ạ?' },
          { speaker: 'A', de: 'Nein, leider nicht. Aber die Treppe ist nicht steil.', vi: 'Tiếc là không. Nhưng cầu thang không dốc.' },
          { speaker: 'B', de: 'Ist die Wohnung möbliert?', vi: 'Căn hộ có sẵn đồ đạc không?' },
          { speaker: 'A', de: 'Nur die Küche. Die Miete ist 600 Euro, plus 150 Euro Nebenkosten.', vi: 'Chỉ có bếp. Tiền thuê 600 euro, cộng 150 euro chi phí phụ.' },
          { speaker: 'B', de: 'Und die Kaution?', vi: 'Còn tiền đặt cọc?' },
          { speaker: 'A', de: 'Zwei Monatsmieten.', vi: 'Hai tháng tiền nhà.' },
        ],
        gloss: { herein: 'vào trong', plus: 'cộng thêm' },
        questions: [
          mc('Căn hộ ở tầng mấy?', ['tầng ba', 'tầng trệt', 'tầng hai'], 'tầng ba'),
          tf('Das Haus hat einen Aufzug.', false),
          mc('Chi phí phụ là bao nhiêu?', ['150 euro', '600 euro', 'hai tháng tiền nhà'], '150 euro'),
          tf('Die ganze Wohnung ist möbliert.', false, { explain: 'Nur die Küche.' }),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi:
        'Bạn đọc một tin rao cho thuê nhà. Viết email ngắn (4–5 câu) hỏi chủ nhà: tầng mấy, có thang máy không, chi phí phụ, tiền cọc, hẹn xem nhà.',
    },
    {
      title_vi: 'Dọn vào nhà mới',
      goal_vi: 'Nói đặt đồ đạc ở đâu và đồ đạc đang ở đâu (legen/liegen, stellen/stehen).',
      items: [
        'Karton', 'Kissen', 'Pflanze', 'Steckdose', 'Spiegel', 'Vorhang', 'einziehen', 'ausziehen', 'legen', 'stellen',
        'stehen', 'mitnehmen', 'überall', 'praktisch', 'legen / liegen, stellen / stehen',
      ],
      grammar: {
        point: 'legen-liegen',
        sections: [
          {
            text_vi:
              'Hai cặp động từ dễ nhầm: **legen** (đặt nằm xuống, hành động, **wohin? + Akk**) ↔ **liegen** (đang nằm, trạng thái, **wo? + Dativ**); **stellen** (đặt đứng) ↔ **stehen** (đang đứng). Ich **lege** das Buch auf **den** Tisch. → Das Buch **liegt** auf **dem** Tisch.',
            table: 'Hành động (+ Akk) | Trạng thái (+ Dativ)\nIch lege das Handy auf den Tisch. | Das Handy liegt auf dem Tisch.\nIch stelle die Lampe neben das Bett. | Die Lampe steht neben dem Bett.',
            examples: [
              ['Wir stellen das Sofa an die Wand.', 'Chúng tôi kê sô-pha sát tường.'],
              ['Das Kissen liegt auf dem Sofa.', 'Cái gối nằm trên sô-pha.'],
            ],
            exercises: [
              choose('Ich ___ das Buch auf den Tisch.', ['lege', 'liege'], 'lege', { vi: 'Tôi đặt quyển sách lên bàn.' }),
              choose('Die Lampe ___ neben dem Bett.', ['steht', 'stellt'], 'steht', { vi: 'Cái đèn đặt cạnh giường.' }),
              fill('Wir {stellen} den Schrank ins Schlafzimmer.', 'Chúng tôi đặt tủ vào phòng ngủ.'),
            ],
          },
          {
            text_vi:
              'Mẹo: đồ có chân hoặc dựng đứng (Schrank, Lampe, Flasche) thì **stellen/stehen**; đồ nằm phẳng (Buch, Handy, Teppich, Kissen) thì **legen/liegen**. Động từ hành động có quy tắc (hat gelegt, hat gestellt); động từ trạng thái bất quy tắc (hat gelegen, hat gestanden).',
            examples: [['Wohin stellen wir die Pflanze? – Ans Fenster.', 'Mình đặt cây ở đâu? – Cạnh cửa sổ.']],
            exercises: [
              choose('Der Teppich ___ im Flur.', ['liegt', 'steht'], 'liegt', { vi: 'Tấm thảm trải ở hành lang.' }),
              choose('Die Flaschen ___ im Kühlschrank.', ['stehen', 'liegen'], 'stehen', { vi: 'Mấy cái chai đứng trong tủ lạnh.' }),
              fill('Ich {lege} das Kissen aufs Sofa.', 'Tôi đặt cái gối lên sô-pha.'),
            ],
          },
          {
            text_vi:
              'Dọn nhà: **einziehen** (dọn vào), **ausziehen** (dọn ra), **mitnehmen** (mang theo) đều là động từ tách: Wir **ziehen** am Samstag **ein**. Hỏi vị trí đồ đạc: **Wo steht …?** / **Wohin kommt …?**',
            examples: [['Wann ziehst du aus?', 'Khi nào bạn dọn ra?']],
            exercises: [
              order('Wir / ziehen / nächste Woche / ein.', 'Tuần sau chúng tôi dọn vào.'),
              translate('Cái gương ở đâu?', ['Wo hängt der Spiegel?', 'Wo ist der Spiegel?']),
            ],
          },
        ],
        mixed: [
          transform('Viết câu trạng thái (liegen/stehen)', 'Ich lege das Handy auf den Tisch.', ['Das Handy liegt auf dem Tisch.']),
          transform('Viết câu trạng thái (liegen/stehen)', 'Ich stelle die Pflanze ans Fenster.', ['Die Pflanze steht am Fenster.']),
          choose('Wohin ___ wir den Karton?', ['stellen', 'stehen'], 'stellen', { vi: 'Mình đặt cái thùng ở đâu?' }),
          choose('Das Buch liegt auf ___ Tisch.', ['dem', 'den'], 'dem', { vi: 'Quyển sách nằm trên bàn.' }),
          fill('Ich nehme die Lampe {mit}.', 'Tôi mang cái đèn theo.'),
        ],
      },
      dialogue: {
        title_de: 'Der Umzug',
        lines: [
          { speaker: 'A', de: 'Wohin stellen wir das Sofa?', vi: 'Mình kê sô-pha ở đâu?' },
          { speaker: 'B', de: 'Stell es an die Wand, neben die Tür.', vi: 'Kê sát tường, cạnh cửa.' },
          { speaker: 'A', de: 'Okay. Und der Spiegel?', vi: 'Được. Còn cái gương?' },
          { speaker: 'B', de: 'Der kommt ins Bad. Leg ihn erst mal auf das Bett.', vi: 'Gương để trong phòng tắm. Tạm đặt lên giường đã.' },
          { speaker: 'A', de: 'Wo sind die Kissen?', vi: 'Mấy cái gối đâu rồi?' },
          { speaker: 'B', de: 'Sie liegen schon auf dem Sofa. Und die Pflanzen stehen am Fenster.', vi: 'Để trên sô-pha rồi. Còn cây thì đặt cạnh cửa sổ.' },
          { speaker: 'A', de: 'Überall stehen noch Kartons!', vi: 'Thùng vẫn còn khắp nơi!' },
          { speaker: 'B', de: 'Ja, aber morgen räumen wir auf. Jetzt essen wir erst mal Pizza!', vi: 'Ừ, nhưng mai mình dọn. Giờ ăn pizza đã!' },
        ],
        gloss: { okay: 'được', 'erst mal': 'trước đã, tạm', Pizza: 'pizza' },
        questions: [
          mc('Sô-pha được kê ở đâu?', ['sát tường, cạnh cửa', 'giữa phòng', 'cạnh cửa sổ'], 'sát tường, cạnh cửa'),
          tf('Der Spiegel kommt ins Schlafzimmer.', false, { explain: 'Der kommt ins Bad.' }),
          tf('Die Pflanzen stehen am Fenster.', true),
          mc('Bây giờ họ làm gì?', ['ăn pizza', 'dọn thùng', 'treo gương'], 'ăn pizza'),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Bạn vừa chuyển nhà. Viết 5 câu: bạn đặt đồ ở đâu (stellen, legen + Akk) và bây giờ chúng ở đâu (stehen, liegen + Dativ).',
    },
    {
      title_vi: 'Nội quy và hàng xóm',
      goal_vi: 'Hiểu nội quy tòa nhà, nói đồ treo/ngồi ở đâu (hängen, setzen/sitzen) và phàn nàn lịch sự.',
      items: [
        'Hausordnung', 'Müll', 'Mülltonne', 'Hof', 'Schlüssel', 'hängen', 'setzen', 'sitzen', 'stecken', 'reparieren',
        'streichen', 'klingeln', 'sich beschweren', 'sauber', 'schmutzig', 'den Müll trennen',
      ],
      grammar: {
        point: 'haengen',
        sections: [
          {
            text_vi:
              '**hängen** có hai nghĩa: treo cái gì (hành động, **wohin? + Akk**, có quy tắc: hat gehängt) và đang treo (trạng thái, **wo? + Dativ**, bất quy tắc: hat gehangen). Ich **hänge** das Bild an **die** Wand. → Das Bild **hängt** an **der** Wand.',
            examples: [
              ['Ich hänge den Vorhang ans Fenster.', 'Tôi treo rèm lên cửa sổ.'],
              ['Der Spiegel hängt im Bad.', 'Cái gương treo trong phòng tắm.'],
            ],
            exercises: [
              choose('Ich hänge das Bild an ___ Wand.', ['die', 'der'], 'die', { vi: 'Tôi treo bức tranh lên tường.' }),
              choose('Das Bild hängt an ___ Wand.', ['der', 'die'], 'der', { vi: 'Bức tranh đang treo trên tường.' }),
              fill('Der Spiegel hängt {im} Bad.', 'Cái gương treo trong phòng tắm.'),
            ],
          },
          {
            text_vi:
              'Cặp thứ ba: **setzen** (đặt ai ngồi, + Akk) ↔ **sitzen** (đang ngồi, + Dativ): Sie **setzt** das Kind auf **den** Stuhl. – Das Kind **sitzt** auf **dem** Stuhl. **sich setzen** = ngồi xuống: Setzen Sie sich! **stecken** = cắm, nhét: Der Schlüssel **steckt** in der Tür.',
            table: 'Hành động + Akk | Trạng thái + Dativ\nlegen | liegen\nstellen | stehen\nsetzen | sitzen\nhängen (hat gehängt) | hängen (hat gehangen)',
            examples: [
              ['Wir sitzen im Hof.', 'Chúng tôi ngồi ngoài sân.'],
              ['Setzen Sie sich bitte!', 'Mời ông/bà ngồi!'],
            ],
            exercises: [
              choose('Das Kind ___ auf dem Stuhl.', ['sitzt', 'setzt'], 'sitzt', { vi: 'Đứa trẻ ngồi trên ghế.' }),
              choose('Sie ___ das Baby aufs Sofa.', ['setzt', 'sitzt'], 'setzt', { vi: 'Cô ấy đặt em bé ngồi lên sô-pha.' }),
              fill('Der Schlüssel {steckt} in der Tür.', 'Chìa khóa đang cắm trên cửa.'),
            ],
          },
          {
            text_vi:
              'Nội quy (**Hausordnung**): **den Müll trennen** (phân loại rác), giữ yên tĩnh. Phàn nàn: **sich beschweren über** + Akk: Die Nachbarn **beschweren sich über** den Lärm. Nhờ sửa: Der Hausmeister **repariert** die Heizung.',
            examples: [['In Deutschland muss man den Müll trennen.', 'Ở Đức phải phân loại rác.']],
            exercises: [
              translate('Ở Đức phải phân loại rác.', ['In Deutschland muss man den Müll trennen.', 'Man muss in Deutschland den Müll trennen.']),
              order('Die Nachbarn / beschweren / sich / über den Lärm.', 'Hàng xóm phàn nàn về tiếng ồn.'),
            ],
          },
        ],
        mixed: [
          transform('Viết câu trạng thái', 'Ich hänge den Spiegel ins Bad.', ['Der Spiegel hängt im Bad.']),
          choose('Wir ___ im Garten.', ['sitzen', 'setzen'], 'sitzen', { vi: 'Chúng tôi ngồi trong vườn.' }),
          choose('Die Mülltonne steht ___ Hof.', ['im', 'in den'], 'im', { vi: 'Thùng rác đặt ngoài sân.' }),
          translate('Mời ngồi! (Sie)', ['Setzen Sie sich!', 'Setzen Sie sich bitte!', 'Bitte setzen Sie sich!']),
          fill('Ich hänge die Uhr an {die} Wand.', 'Tôi treo đồng hồ lên tường.'),
        ],
      },
      dialogue: {
        title_de: 'Die neue Nachbarin',
        lines: [
          { speaker: 'A', de: 'Guten Tag, Herr Krause. Ich wohne jetzt unten, im Erdgeschoss.', vi: 'Chào ông Krause. Giờ cháu sống ở dưới, tầng trệt.' },
          { speaker: 'B', de: 'Ah, die neue Mieterin! Haben Sie die Hausordnung gelesen?', vi: 'À, người thuê mới! Cô đã đọc nội quy chưa?' },
          { speaker: 'A', de: 'Ja. Aber ich habe eine Frage: Wo steht die Mülltonne?', vi: 'Rồi ạ. Nhưng cháu có câu hỏi: thùng rác ở đâu ạ?' },
          { speaker: 'B', de: 'Im Hof. Und bitte trennen Sie den Müll! Papier kommt in die blaue Tonne.', vi: 'Ngoài sân. Và nhớ phân loại rác nhé! Giấy bỏ vào thùng màu xanh.' },
          { speaker: 'A', de: 'Natürlich. Und noch etwas: Meine Heizung funktioniert nicht.', vi: 'Vâng ạ. Còn một việc: lò sưởi nhà cháu không chạy.' },
          { speaker: 'B', de: 'Ich sage es dem Hausmeister. Er repariert sie morgen.', vi: 'Tôi sẽ báo người quản lý. Mai anh ấy sửa.' },
          { speaker: 'A', de: 'Danke! Wann darf ich Gäste haben?', vi: 'Cảm ơn ông! Cháu được mời khách khi nào ạ?' },
          { speaker: 'B', de: 'Immer, aber nach 22 Uhr muss es ruhig sein. Die Nachbarn beschweren sich schnell.', vi: 'Lúc nào cũng được, nhưng sau 22 giờ phải yên tĩnh. Hàng xóm hay phàn nàn lắm.' },
        ],
        gloss: { Papier: 'giấy', Tonne: 'thùng', 'noch etwas': 'thêm một việc', Gäste: 'khách' },
        questions: [
          tf('Die Mülltonne steht im Keller.', false, { explain: 'Im Hof.' }),
          mc('Giấy bỏ vào thùng màu gì?', ['xanh dương', 'vàng', 'đen'], 'xanh dương'),
          mc('Ai sẽ sửa lò sưởi?', ['người quản lý tòa nhà', 'ông Krause', 'người thuê mới'], 'người quản lý tòa nhà'),
          tf('Nach 22 Uhr muss es ruhig sein.', true),
        ],
        dictation: [2, 5],
      },
      writing_prompt_vi:
        'Viết 5 câu về nội quy nơi bạn ở (nhà, ký túc xá): phân loại rác, giờ yên tĩnh, đồ được để hoặc treo ở đâu (hängen, stehen, liegen).',
    },
  ],
  test: {
    grammar: {
      wechsel: [
        choose('Ich gehe ___ Küche.', ['in die', 'in der'], 'in die'),
        choose('Ich bin ___ Küche.', ['in der', 'in die'], 'in der'),
        fill('Wir gehen {ins} Kino. (in + das)', 'Chúng tôi đi xem phim.'),
        choose('Das Fahrrad steht ___ Keller.', ['im', 'in den'], 'im'),
        fill('Ich lege das Buch auf {den} Tisch.', 'Tôi đặt quyển sách lên bàn.'),
        order('Wir / tragen / die Kartons / in den Keller.', 'Chúng tôi khuân các thùng xuống tầng hầm.'),
      ],
      'legen-liegen': [
        choose('Das Handy ___ auf dem Tisch.', ['liegt', 'legt'], 'liegt'),
        choose('Ich ___ die Flasche in den Kühlschrank.', ['stelle', 'stehe'], 'stelle'),
        fill('Der Schrank {steht} im Flur.', 'Cái tủ đặt ở hành lang.'),
        choose('Wohin ___ du das Buch?', ['legst', 'liegst'], 'legst'),
        fill('Das Kissen {liegt} auf dem Sofa.', 'Cái gối nằm trên sô-pha.'),
        order('Ich / stelle / die Lampe / neben das Bett.', 'Tôi đặt cái đèn cạnh giường.'),
      ],
      haengen: [
        choose('Das Bild ___ an der Wand.', ['hängt', 'hängst'], 'hängt'),
        choose('Ich hänge das Bild an ___ Wand.', ['die', 'der'], 'die'),
        choose('Das Kind ___ auf dem Stuhl.', ['sitzt', 'setzt'], 'sitzt'),
        fill('Sie {setzt} das Kind auf den Stuhl.', 'Cô ấy đặt đứa trẻ ngồi lên ghế.'),
        fill('Der Schlüssel {steckt} in der Tür.', 'Chìa khóa cắm trên cửa.'),
        order('Der Spiegel / hängt / im Bad.', 'Cái gương treo trong phòng tắm.'),
      ],
    },
    reading: {
      title_de: 'Hausordnung',
      text_de:
        'Liebe Mieterinnen und Mieter, bitte beachten Sie unsere Hausordnung. Die Mülltonnen stehen im Hof. Bitte trennen Sie den Müll: Papier kommt in die blaue Tonne, Plastik in die gelbe Tonne. Fahrräder stellen Sie bitte in den Keller, nicht in den Flur. Kinderwagen dürfen unten neben der Treppe stehen. Hängen Sie bitte keine Wäsche auf den Balkon. Von 22 Uhr bis 7 Uhr ist Ruhezeit. Wenn die Heizung kaputt ist, klingeln Sie beim Hausmeister im Erdgeschoss. Er repariert sie schnell. Vielen Dank! Ihre Vermieterin, Frau Becker',
      gloss: {
        beachten: 'chú ý, tuân theo',
        Tonne: 'thùng',
        Plastik: 'nhựa',
        gelbe: 'vàng',
        Kinderwagen: 'xe đẩy em bé',
        Wäsche: 'quần áo giặt',
        Ruhezeit: 'giờ yên tĩnh',
        wenn: 'khi, nếu',
        beim: 'ở chỗ (bei dem)',
      },
      questions: [
        mc('Xe đạp phải để ở đâu?', ['tầng hầm', 'hành lang', 'ngoài sân'], 'tầng hầm'),
        tf('Man darf Wäsche auf den Balkon hängen.', false),
        mc('Người quản lý tòa nhà ở đâu?', ['tầng trệt', 'tầng hầm', 'tầng ba'], 'tầng trệt'),
        tf('Papier kommt in die blaue Tonne.', true),
      ],
    },
  },
});
