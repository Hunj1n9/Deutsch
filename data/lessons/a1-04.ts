// A1 · 04 Nhà ở và đồ đạc — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a1-04',
  points: [
    {
      key: 'artikel',
      rule_key: 'artikel-genus',
      category: 'gender',
      title_vi: 'Mạo từ xác định der/die/das theo giống',
      explanation_vi: 'Mỗi danh từ có giống riêng: der (đực), die (cái), das (trung). Từ ghép lấy giống của từ cuối; đại từ thay thế: er/sie/es.',
    },
    {
      key: 'ein-kein',
      rule_key: 'ein-kein',
      category: 'other',
      title_vi: 'ein/eine và kein/keine',
      explanation_vi: 'ein trước der/das, eine trước die; phủ định danh từ dùng kein/keine. Sau haben, es gibt: einen/keinen với giống đực.',
    },
    {
      key: 'plural',
      rule_key: 'plural-endungen',
      category: 'plural',
      title_vi: 'Số nhiều của danh từ',
      explanation_vi: 'Số nhiều luôn đi với die; đuôi phải học cùng từ: -e, -(e)n, -er, -s, không đổi; ¨ là thêm umlaut.',
    },
  ],
  lessons: [
    {
      title_vi: 'Nhà của tôi',
      goal_vi: 'Tả nhà, căn hộ và các phòng; dùng đúng der/die/das và er/sie/es.',
      items: [
        'Wohnung', 'Haus', 'Zimmer', 'Küche', 'Bad', 'Schlafzimmer', 'Wohnzimmer', 'Flur', 'Balkon', 'Garten',
        'Fenster', 'Tür', 'Wand', 'Boden', 'Stock', 'hell', 'dunkel', 'schön', 'modern', 'gemütlich', 'ruhig', 'laut',
        'der, die, das: mạo từ xác định',
      ],
      grammar: {
        point: 'artikel',
        sections: [
          {
            text_vi:
              'Mọi danh từ tiếng Đức có một **giống**: giống đực **der**, giống cái **die**, giống trung **das**. Giống thường không đoán được từ nghĩa (das Mädchen, "cô bé", lại là giống trung!), nên **luôn học danh từ kèm mạo từ**. Danh từ luôn viết hoa chữ cái đầu.',
            examples: [
              ['der Balkon, die Küche, das Bad', 'ban công, nhà bếp, phòng tắm'],
              ['Das Zimmer ist hell.', 'Căn phòng sáng sủa.'],
            ],
            exercises: [
              choose('___ Küche ist modern.', ['Der', 'Die', 'Das'], 'Die', { vi: 'Nhà bếp hiện đại.' }),
              choose('___ Garten ist schön.', ['Der', 'Die', 'Das'], 'Der', { vi: 'Khu vườn đẹp.' }),
              choose('___ Bad ist klein.', ['Der', 'Die', 'Das'], 'Das', { vi: 'Phòng tắm nhỏ.' }),
            ],
          },
          {
            text_vi:
              'Vài mẹo (có ngoại lệ): danh từ tận cùng **-ung, -heit, -keit, -ion** là **die** (die Wohnung). **Từ ghép lấy giống của từ cuối**: das Schlaf**zimmer**, das Wohn**zimmer** (vì das Zimmer). Ngày, tháng là **der** (der Montag, der Mai).',
            table: 'Mẹo | Giống | Ví dụ\n-ung | die | die Wohnung\ntừ ghép | theo từ cuối | das Schlafzimmer\nngày, tháng | der | der Montag',
            examples: [['Die Wohnung hat einen Balkon.', 'Căn hộ có ban công.']],
            exercises: [
              choose('___ Wohnzimmer ist gemütlich.', ['Der', 'Die', 'Das'], 'Das', {
                vi: 'Phòng khách ấm cúng.',
                explain: 'Từ ghép: Wohn + das Zimmer → das Wohnzimmer.',
              }),
              fill('{Die} Wohnung ist ruhig.', 'Căn hộ yên tĩnh.', { hint: 'Đuôi -ung' }),
              choose('Wo ist ___ Tür?', ['der', 'die', 'das'], 'die', { vi: 'Cửa ra vào ở đâu?' }),
            ],
          },
          {
            text_vi:
              'Đại từ thay danh từ **theo giống**, không theo người hay vật: der → **er**, die → **sie**, das → **es**. Der Flur ist dunkel. → **Er** ist dunkel. Tiếng Việt gọi đồ vật là "nó", tiếng Đức phải chọn theo giống.',
            examples: [
              ['Wie ist die Küche? – Sie ist modern.', 'Bếp thế nào? – Nó hiện đại.'],
              ['Der Balkon? Er ist klein.', 'Ban công à? Nó nhỏ.'],
            ],
            exercises: [
              choose('Das Fenster ist groß. ___ ist auch hell.', ['Er', 'Sie', 'Es'], 'Es', { vi: 'Cửa sổ lớn. Nó cũng sáng.' }),
              choose('Der Garten? ___ ist sehr schön.', ['Er', 'Sie', 'Es'], 'Er', { vi: 'Khu vườn à? Nó rất đẹp.' }),
            ],
          },
        ],
        mixed: [
          choose('___ Flur ist dunkel.', ['Der', 'Die', 'Das'], 'Der', { vi: 'Hành lang tối.' }),
          fill('Wie ist {die} Wand? – Sie ist weiß.', 'Bức tường thế nào? – Nó màu trắng.'),
          transform('Thay danh từ bằng đại từ', 'Die Küche ist modern.', ['Sie ist modern.']),
          translate('Phòng ngủ yên tĩnh.', ['Das Schlafzimmer ist ruhig.']),
          order('Ich wohne / im dritten / Stock.', 'Tôi sống ở tầng ba.'),
        ],
      },
      dialogue: {
        title_de: 'Meine neue Wohnung',
        lines: [
          { speaker: 'A', de: 'Hallo Lan! Wie ist deine neue Wohnung?', vi: 'Chào Lan! Căn hộ mới của bạn thế nào?' },
          { speaker: 'B', de: 'Sie ist toll! Sie ist nicht groß, aber sehr hell.', vi: 'Tuyệt lắm! Không lớn nhưng rất sáng.' },
          { speaker: 'A', de: 'Wie viele Zimmer hat sie?', vi: 'Có mấy phòng?' },
          { speaker: 'B', de: 'Zwei Zimmer, eine Küche und ein Bad. Und einen Balkon!', vi: 'Hai phòng, một bếp và một phòng tắm. Còn có ban công nữa!' },
          { speaker: 'A', de: 'Super! Ist die Straße laut?', vi: 'Tuyệt! Đường có ồn không?' },
          { speaker: 'B', de: 'Nein, sie ist ruhig. Die Wohnung ist im dritten Stock.', vi: 'Không, yên tĩnh lắm. Căn hộ ở tầng ba.' },
          { speaker: 'A', de: 'Und die Küche?', vi: 'Còn bếp?' },
          { speaker: 'B', de: 'Die Küche ist klein, aber modern. Das Wohnzimmer ist sehr gemütlich.', vi: 'Bếp nhỏ nhưng hiện đại. Phòng khách rất ấm cúng.' },
        ],
        gloss: { viele: 'nhiều (wie viele = bao nhiêu)', super: 'tuyệt', Straße: 'đường phố' },
        questions: [
          tf('Die Wohnung ist sehr groß.', false, { explain: 'Sie ist nicht groß, aber sehr hell.' }),
          mc('Căn hộ có những gì?', ['2 phòng, bếp, phòng tắm, ban công', '3 phòng và vườn', '1 phòng và bếp'], '2 phòng, bếp, phòng tắm, ban công'),
          tf('Die Straße ist ruhig.', true),
          mc('Phòng nào rất ấm cúng?', ['phòng khách', 'bếp', 'phòng tắm'], 'phòng khách'),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Viết 4–5 câu tả nhà hoặc căn hộ của bạn: có những phòng nào, phòng nào thế nào. Chú ý der/die/das và er/sie/es.',
    },
    {
      title_vi: 'Đồ đạc trong nhà',
      goal_vi: 'Nói trong nhà có gì, không có gì và cần mua gì.',
      items: [
        'Tisch', 'Stuhl', 'Bett', 'Schrank', 'Sofa', 'Lampe', 'Regal', 'Teppich', 'Bild', 'Kühlschrank', 'Herd',
        'Waschmaschine', 'Dusche', 'Möbel', 'kaputt', 'bequem', 'brauchen', 'es gibt',
        'ein / eine: mạo từ không xác định', 'kein / keine: phủ định danh từ',
        'stehen', 'sitzen', 'breit',
      ],
      grammar: {
        point: 'ein-kein',
        sections: [
          {
            text_vi:
              '**ein/eine** = một (cái nào đó, nhắc lần đầu): **ein** trước der và das, **eine** trước die. Nhắc lại lần sau thì dùng der/die/das: Da ist **ein** Stuhl. **Der** Stuhl ist bequem. Số nhiều không có ein: Da sind Stühle.',
            table: 'Giống | Xác định | Không xác định\nder | der Tisch | ein Tisch\ndie | die Lampe | eine Lampe\ndas | das Bett | ein Bett',
            examples: [['Das ist ein Sofa. Das Sofa ist neu.', 'Đây là một cái sô-pha. Cái sô-pha còn mới.']],
            exercises: [
              choose('Das ist ___ Lampe.', ['ein', 'eine'], 'eine', { vi: 'Đây là một cái đèn.' }),
              choose('Im Zimmer steht ___ Bett.', ['ein', 'eine'], 'ein', { vi: 'Trong phòng có một cái giường.' }),
              fill('Da ist ein Tisch. {Der} Tisch ist alt.', 'Kia là một cái bàn. Cái bàn cũ rồi.'),
            ],
          },
          {
            text_vi:
              'Phủ định danh từ đi với ein, hoặc danh từ không có mạo từ, dùng **kein/keine** (không có, không phải): ein → **kein**, eine → **keine**, số nhiều → **keine**. Das ist **kein** Stuhl, das ist ein Sofa. Không nói "nicht ein".',
            table: 'Khẳng định | Phủ định\nein Tisch | kein Tisch\neine Lampe | keine Lampe\nein Bett | kein Bett\nMöbel | keine Möbel',
            examples: [
              ['Das ist kein Schrank, das ist ein Regal.', 'Đây không phải cái tủ, đây là cái kệ.'],
              ['Wir haben keine Möbel.', 'Chúng tôi không có đồ đạc.'],
            ],
            exercises: [
              choose('Das ist ___ Teppich, das ist ein Bild.', ['kein', 'keine', 'nicht'], 'kein', { vi: 'Đây không phải tấm thảm, đây là bức tranh.' }),
              fill('Im Bad ist {keine} Dusche.', 'Trong phòng tắm không có vòi sen.'),
              choose('Wir haben ___ Möbel.', ['kein', 'keine'], 'keine', { vi: 'Chúng tôi không có đồ đạc.' }),
            ],
          },
          {
            text_vi:
              '**es gibt** = có (tồn tại ở đâu đó), luôn là "es gibt", dù danh từ số ít hay số nhiều. Sau es gibt (cũng như sau haben, brauchen), danh từ giống đực đổi **ein → einen**, **kein → keinen**: In der Küche gibt es **einen** Herd.',
            examples: [
              ['In der Küche gibt es einen Kühlschrank.', 'Trong bếp có một cái tủ lạnh.'],
              ['Gibt es hier eine Waschmaschine?', 'Ở đây có máy giặt không?'],
            ],
            exercises: [
              fill('In der Küche gibt es {einen} Herd.', 'Trong bếp có một cái bếp nấu.', { hint: 'der Herd, đứng sau es gibt' }),
              choose('Im Zimmer gibt es ___ Schrank.', ['kein', 'keinen', 'keine'], 'keinen', { vi: 'Trong phòng không có tủ.' }),
            ],
          },
        ],
        mixed: [
          translate('Đây không phải cái bàn.', ['Das ist kein Tisch.']),
          transform('Phủ định câu', 'Das ist eine Lampe.', ['Das ist keine Lampe.']),
          choose('Wir brauchen ___ Stuhl.', ['ein', 'einen', 'eine'], 'einen', { vi: 'Chúng tôi cần một cái ghế.' }),
          fill('Der Kühlschrank ist {kaputt}.', 'Tủ lạnh bị hỏng.'),
          order('Gibt es / hier / eine Waschmaschine?', 'Ở đây có máy giặt không?'),
        ],
      },
      dialogue: {
        title_de: 'Wir brauchen Möbel',
        lines: [
          { speaker: 'A', de: 'Unsere Wohnung ist schön, aber wir haben keine Möbel!', vi: 'Căn hộ của chúng mình đẹp, nhưng chẳng có đồ đạc gì!' },
          { speaker: 'B', de: 'Wir haben ein Bett und einen Tisch.', vi: 'Mình có một cái giường và một cái bàn.' },
          { speaker: 'A', de: 'Ja, aber es gibt keinen Stuhl und kein Sofa.', vi: 'Ừ, nhưng không có ghế, cũng không có sô-pha.' },
          { speaker: 'B', de: 'Und im Wohnzimmer gibt es keine Lampe. Es ist so dunkel!', vi: 'Phòng khách cũng không có đèn. Tối quá!' },
          { speaker: 'A', de: 'Brauchen wir auch einen Schrank?', vi: 'Mình có cần tủ không?' },
          { speaker: 'B', de: 'Ja, und ein Regal für die Bücher.', vi: 'Có, và một cái kệ để sách.' },
          { speaker: 'A', de: 'Der Kühlschrank ist auch kaputt.', vi: 'Tủ lạnh cũng hỏng rồi.' },
          { speaker: 'B', de: 'Oh nein! Dann brauchen wir viel Geld.', vi: 'Ôi không! Vậy thì cần nhiều tiền lắm.' },
        ],
        gloss: { so: 'quá, thật', für: 'cho, để', Bücher: 'những quyển sách', viel: 'nhiều', Geld: 'tiền' },
        questions: [
          tf('Sie haben ein Sofa.', false, { explain: 'Es gibt keinen Stuhl und kein Sofa.' }),
          mc('Họ đã có những gì?', ['giường và bàn', 'ghế và sô-pha', 'tủ và kệ'], 'giường và bàn'),
          tf('Im Wohnzimmer gibt es keine Lampe.', true),
          mc('Cái gì bị hỏng?', ['tủ lạnh', 'đèn', 'giường'], 'tủ lạnh'),
        ],
        dictation: [2, 6],
      },
      writing_prompt_vi:
        'Viết 5 câu về phòng của bạn: có gì (es gibt + einen/eine/ein), không có gì (kein/keine), cần mua gì (brauchen).',
    },
    {
      title_vi: 'Tìm nhà thuê',
      goal_vi: 'Hỏi về căn hộ cho thuê (giá, diện tích), nhận xét và dùng số nhiều của danh từ.',
      items: [
        'Miete', 'Quadratmeter', 'Nachbar', 'teuer', 'billig', 'günstig', 'frei', 'suchen', 'finden', 'kosten', 'mieten',
        'Số nhiều danh từ',
        'vermieten', 'Licht', 'leise', 'in Ordnung',
      ],
      grammar: {
        point: 'plural',
        sections: [
          {
            text_vi:
              'Số nhiều có nhiều đuôi, phải học cùng danh từ (từ điển ghi: der Tisch, **-e**). Mạo từ số nhiều **luôn là die**, dù danh từ giống gì. Đuôi hay gặp: **-e** (Tische), **-(e)n** (Wohnungen), **-er** (Bilder), **-s** (Sofas), không đổi (Zimmer). Dấu **¨** là thêm umlaut: Stuhl → Stühle, Haus → Häuser.',
            table: 'Số ít | Số nhiều | Đuôi\nder Tisch | die Tische | -e\ndie Wohnung | die Wohnungen | -en\ndas Bild | die Bilder | -er\ndas Sofa | die Sofas | -s\ndas Zimmer | die Zimmer | không đổi\nder Stuhl | die Stühle | ¨-e',
            examples: [
              ['Die Zimmer sind hell.', 'Các phòng sáng sủa.'],
              ['Wir brauchen vier Stühle.', 'Chúng tôi cần bốn cái ghế.'],
            ],
            exercises: [
              choose('Die Wohnung hat drei ___.', ['Zimmer', 'Zimmers', 'Zimmern'], 'Zimmer', { vi: 'Căn hộ có ba phòng.' }),
              fill('Wir brauchen zwei {Stühle}. (der Stuhl, ¨-e)', 'Chúng tôi cần hai cái ghế.'),
              choose('___ Lampen sind neu.', ['Der', 'Die', 'Das'], 'Die', { vi: 'Những cái đèn còn mới.', explain: 'Số nhiều luôn dùng die.' }),
            ],
          },
          {
            text_vi:
              'Vài mẹo: danh từ giống cái thường thêm **-(e)n** (die Lampe → Lampen, die Tür → Türen). Danh từ giống đực, trung tận cùng **-er, -el, -en** thường **không đổi** (das Fenster → die Fenster). Từ mượn tận cùng nguyên âm thường thêm **-s** (das Sofa → Sofas, das Foto → Fotos).',
            examples: [
              ['Die Türen sind offen.', 'Các cửa đang mở.'],
              ['Das Haus hat zehn Fenster.', 'Ngôi nhà có mười cửa sổ.'],
            ],
            exercises: [
              fill('In der Küche sind zwei {Lampen}.', 'Trong bếp có hai cái đèn.'),
              choose('Ich habe drei ___. (das Foto)', ['Fotos', 'Foten', 'Fotoe'], 'Fotos', { vi: 'Tôi có ba tấm ảnh.' }),
            ],
          },
          {
            text_vi:
              'Tìm nhà: **suchen** (tìm), **finden** (tìm thấy; cho rằng), **mieten** (thuê), **kosten** (có giá). Hỏi: **Wie viel kostet die Wohnung?** / **Wie hoch ist die Miete?** finden còn dùng để nhận xét: **Ich finde die Wohnung schön.** (Tôi thấy căn hộ đẹp.)',
            examples: [
              ['Wir suchen eine Wohnung mit zwei Zimmern.', 'Chúng tôi tìm căn hộ có hai phòng.'],
              ['Ich finde die Miete zu teuer.', 'Tôi thấy tiền thuê quá đắt.'],
            ],
            exercises: [
              fill('Die Wohnung {kostet} 700 Euro.', 'Căn hộ giá 700 euro.'),
              order('Ich / finde / die Küche / schön.', 'Tôi thấy căn bếp đẹp.'),
            ],
          },
        ],
        mixed: [
          transform('Chuyển sang số nhiều', 'Das Zimmer ist hell.', ['Die Zimmer sind hell.']),
          transform('Chuyển sang số nhiều', 'Der Tisch ist neu.', ['Die Tische sind neu.']),
          choose('Die ___ sind sehr laut. (der Nachbar, -n)', ['Nachbar', 'Nachbarn', 'Nachbare'], 'Nachbarn', { vi: 'Hàng xóm rất ồn.' }),
          translate('Chúng tôi tìm một căn hộ.', ['Wir suchen eine Wohnung.']),
          fill('Die Wohnung hat 50 {Quadratmeter}.', 'Căn hộ rộng 50 mét vuông.'),
        ],
      },
      dialogue: {
        title_de: 'Ist die Wohnung noch frei?',
        lines: [
          { speaker: 'A', de: 'Guten Tag, ich suche eine Wohnung. Ist die Wohnung in der Gartenstraße noch frei?', vi: 'Chào ông, tôi đang tìm căn hộ. Căn ở phố Garten còn trống không?' },
          { speaker: 'B', de: 'Ja, sie ist noch frei. Sie hat drei Zimmer und einen Balkon.', vi: 'Còn trống. Có ba phòng và một ban công.' },
          { speaker: 'A', de: 'Wie groß ist sie?', vi: 'Rộng bao nhiêu?' },
          { speaker: 'B', de: 'Siebzig Quadratmeter.', vi: 'Bảy mươi mét vuông.' },
          { speaker: 'A', de: 'Und wie hoch ist die Miete?', vi: 'Còn tiền thuê bao nhiêu?' },
          { speaker: 'B', de: 'Achthundert Euro.', vi: 'Tám trăm euro.' },
          { speaker: 'A', de: 'Das ist leider zu teuer für mich. Haben Sie auch kleine Wohnungen?', vi: 'Tiếc là quá đắt với tôi. Ông có căn nhỏ hơn không?' },
          { speaker: 'B', de: 'Ja, wir haben zwei kleine Wohnungen im Zentrum. Sie sind günstig.', vi: 'Có, chúng tôi có hai căn nhỏ ở trung tâm. Giá phải chăng.' },
        ],
        gloss: { hoch: 'cao (wie hoch = bao nhiêu)', achthundert: '800', mich: 'tôi (sau für)', kleine: 'nhỏ', Zentrum: 'trung tâm' },
        questions: [
          tf('Die Wohnung ist noch frei.', true),
          mc('Căn hộ rộng bao nhiêu?', ['70 m²', '80 m²', '50 m²'], '70 m²'),
          mc('Tiền thuê bao nhiêu?', ['800 euro', '700 euro', '70 euro'], '800 euro'),
          tf('A findet die Miete günstig.', false, { explain: 'Das ist leider zu teuer für mich.' }),
        ],
        dictation: [2, 4],
      },
      writing_prompt_vi:
        'Viết 4–5 câu: bạn tìm căn hộ thế nào (mấy phòng, bao nhiêu mét vuông, giá), và nhận xét một căn bằng „Ich finde …“. Dùng ít nhất hai danh từ số nhiều.',
    },
  ],
  test: {
    grammar: {
      artikel: [
        choose('___ Küche ist groß.', ['Der', 'Die', 'Das'], 'Die'),
        choose('___ Balkon ist klein.', ['Der', 'Die', 'Das'], 'Der'),
        choose('___ Schlafzimmer ist ruhig.', ['Der', 'Die', 'Das'], 'Das'),
        fill('{Die} Wohnung ist hell.', 'Căn hộ sáng sủa.'),
        choose('Der Garten ist schön. ___ ist groß.', ['Er', 'Sie', 'Es'], 'Er'),
        choose('___ Fenster ist offen.', ['Der', 'Die', 'Das'], 'Das'),
      ],
      'ein-kein': [
        choose('Das ist ___ Stuhl.', ['ein', 'eine'], 'ein'),
        choose('Das ist ___ Lampe, das ist ein Bild.', ['kein', 'keine', 'nicht'], 'keine'),
        fill('In der Küche gibt es {einen} Kühlschrank.', 'Trong bếp có một cái tủ lạnh.'),
        choose('Wir haben ___ Sofa.', ['kein', 'keine', 'keinen'], 'kein'),
        fill('Ich brauche {einen} Schrank.', 'Tôi cần một cái tủ.'),
        order('Das ist / kein Tisch, / das ist / ein Regal.', 'Đây không phải cái bàn, đây là cái kệ.'),
      ],
      plural: [
        choose('zwei ___ (der Tisch)', ['Tische', 'Tischen', 'Tischs'], 'Tische'),
        choose('drei ___ (die Wohnung)', ['Wohnungen', 'Wohnunge', 'Wohnungs'], 'Wohnungen'),
        fill('Die {Bilder} sind schön. (das Bild, -er)', 'Những bức tranh đẹp.'),
        choose('vier ___ (das Fenster)', ['Fenster', 'Fenstern', 'Fensters'], 'Fenster'),
        choose('___ Stühle sind bequem.', ['Der', 'Die', 'Das'], 'Die'),
        fill('Wir haben zwei {Sofas}. (das Sofa, -s)', 'Chúng tôi có hai cái sô-pha.'),
      ],
    },
    reading: {
      title_de: 'Ich suche eine Wohnung',
      text_de:
        'Ich heiße Minh und ich suche eine Wohnung in Köln. Jetzt wohne ich mit zwei Freunden in einem Haus. Das Haus ist groß, aber alt, und die Zimmer sind dunkel. Mein Zimmer hat kein Fenster zum Garten und es ist sehr laut, denn die Straße ist nah. Es gibt nur ein Bad für drei Personen. Die Miete ist billig, nur dreihundert Euro. Ich möchte eine kleine Wohnung mit einem Zimmer, einer Küche und einem Balkon. Sie soll hell und ruhig sein. Ich finde fünfhundert Euro Miete okay. Morgen habe ich einen Termin: Die Wohnung hat vierzig Quadratmeter und ist im Zentrum.',
      gloss: {
        'mit zwei Freunden': 'với hai người bạn',
        zum: 'nhìn ra (zum Garten = ra vườn)',
        denn: 'vì',
        nah: 'gần',
        nur: 'chỉ',
        Personen: 'người',
        möchte: 'muốn',
        soll: 'nên, cần phải',
        okay: 'được, ổn',
      },
      questions: [
        tf('Minh wohnt allein.', false, { explain: 'Ich wohne mit zwei Freunden in einem Haus.' }),
        mc('Nhà hiện tại có mấy phòng tắm?', ['1', '2', '3'], '1'),
        tf('Die Miete ist jetzt billig.', true),
        mc('Minh muốn căn hộ thế nào?', ['nhỏ, sáng, yên tĩnh, có ban công', 'to, có vườn', 'gần đường lớn'], 'nhỏ, sáng, yên tĩnh, có ban công'),
      ],
    },
  },
});
