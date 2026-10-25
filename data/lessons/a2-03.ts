// A2 · 03 Ở nhà hàng — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a2-03',
  points: [
    {
      key: 'adj-def',
      rule_key: 'adj-ending-definite',
      category: 'adjective_ending',
      title_vi: 'Đuôi tính từ sau mạo từ xác định',
      explanation_vi: 'Sau der/die/das: -e ở Nominativ số ít (der heiße Tee) và Akk giống cái/trung; còn lại -en (den grünen Salat, dem kleinen Tisch, die frischen Brötchen).',
    },
    {
      key: 'weil',
      rule_key: 'weil-verb-ende',
      category: 'verb_position',
      title_vi: 'Câu với weil: động từ chia đứng cuối',
      explanation_vi: 'weil mở câu phụ: động từ chia ở cuối (…, weil ich Durst habe). Khác denn: sau denn động từ vẫn ở vị trí 2.',
    },
    {
      key: 'nebensatz-vorn',
      rule_key: 'nebensatz-vorne-inversion',
      category: 'verb_position',
      title_vi: 'Câu phụ đứng trước: động từ câu chính đứng ngay sau dấu phẩy',
      explanation_vi: 'Câu phụ chiếm vị trí 1: Weil ich Hunger habe, bestelle ich Pizza. Hai động từ đứng sát hai bên dấu phẩy.',
    },
  ],
  lessons: [
    {
      title_vi: 'Ở nhà hàng',
      goal_vi: 'Đặt bàn, gọi món, hỏi gợi ý; dùng đuôi tính từ sau der/die/das.',
      items: [
        'Speisekarte', 'Getränk', 'Vorspeise', 'Hauptgericht', 'Nachtisch', 'Gericht', 'Kellner', 'Gast', 'Reservierung',
        'reservieren', 'empfehlen', 'Ist hier noch frei?', 'Ich hätte gern', 'typisch', 'vegetarisch',
        'Đuôi tính từ sau der/die/das (Nominativ)', 'Đuôi tính từ sau mạo từ xác định (Akk, Dativ)',
        'wählen',
        'Hamburger', 'Rind',
      ],
      grammar: {
        point: 'adj-def',
        sections: [
          {
            text_vi:
              'Tính từ **đứng trước danh từ** phải có đuôi. Sau **der/die/das** ở **Nominativ số ít**, đuôi luôn là **-e**: **der** heiß**e** Tee, **die** kalt**e** Suppe, **das** frisch**e** Brot. Mạo từ đã cho biết giống nên tính từ chỉ cần -e. Tiếng Việt không có đuôi tính từ, nên đây là lỗi rất hay gặp.',
            table: 'Giống | Nominativ\nder | der heiße Tee\ndie | die kalte Suppe\ndas | das frische Brot\nsố nhiều | die frischen Brötchen',
            examples: [
              ['Der grüne Salat ist lecker.', 'Món xà lách xanh rất ngon.'],
              ['Das typische Gericht heißt Pho.', 'Món đặc trưng tên là phở.'],
            ],
            exercises: [
              fill('Der {heiße} Tee schmeckt gut. (heiß)', 'Trà nóng uống ngon.'),
              choose('Die ___ Suppe ist sehr gut.', ['scharfe', 'scharfen', 'scharf'], 'scharfe', { vi: 'Món súp cay rất ngon.' }),
              fill('Das {kleine} Restaurant ist gemütlich. (klein)', 'Nhà hàng nhỏ này ấm cúng.'),
            ],
          },
          {
            text_vi:
              'Ở các vị trí khác (Akkusativ giống đực, Dativ, số nhiều) đuôi là **-en**: Ich nehme **den** grün**en** Salat. Wir sitzen an **dem** klein**en** Tisch. **Die** frisch**en** Brötchen sind lecker. Chỉ 5 chỗ dùng -e (Nominativ số ít ba giống, Akkusativ die và das); còn lại đều -en.',
            table: 'Giống | Akkusativ | Dativ\nder | den grünen Salat | dem grünen Salat\ndie | die kalte Suppe | der kalten Suppe\ndas | das frische Brot | dem frischen Brot\nsố nhiều | die frischen Brötchen | den frischen Brötchen',
            examples: [
              ['Ich nehme den vegetarischen Burger.', 'Tôi lấy món burger chay.'],
              ['Wir sitzen an dem großen Tisch.', 'Chúng tôi ngồi ở cái bàn lớn.'],
            ],
            exercises: [
              choose('Ich nehme den ___ Salat.', ['grünen', 'grüne'], 'grünen', { vi: 'Tôi lấy món xà lách xanh.' }),
              choose('Ich esse die ___ Suppe.', ['kalte', 'kalten'], 'kalte', {
                vi: 'Tôi ăn món súp lạnh.',
                explain: 'Akkusativ giống cái giữ -e như Nominativ.',
              }),
              fill('Mit dem {neuen} Kellner bin ich zufrieden. (neu)', 'Tôi hài lòng với người bồi bàn mới.'),
            ],
          },
          {
            text_vi:
              'Gọi món lịch sự: **Ich hätte gern** … / **Ich möchte** … Hỏi gợi ý: **Was können Sie empfehlen?** (empfehlen: du empfiehlst, er empfiehlt). Đặt bàn: **Ich möchte einen Tisch für zwei Personen reservieren.** Hỏi chỗ: **Ist hier noch frei?**',
            examples: [['Ich hätte gern das vegetarische Gericht.', 'Tôi muốn món chay.']],
            exercises: [
              order('Was / können / Sie / empfehlen?', 'Anh/chị gợi ý món gì?'),
              translate('Tôi muốn đặt một bàn.', ['Ich möchte einen Tisch reservieren.']),
            ],
          },
        ],
        mixed: [
          transform('Thêm tính từ „frisch“ trước danh từ', 'Das Brot ist lecker.', ['Das frische Brot ist lecker.']),
          choose('Der Kellner bringt den ___ Wein.', ['roten', 'rote'], 'roten', { vi: 'Người bồi bàn mang rượu vang đỏ đến.' }),
          choose('Die ___ Gäste sind zufrieden.', ['neuen', 'neue'], 'neuen', { vi: 'Những vị khách mới rất hài lòng.' }),
          fill('Ich hätte gern die {typische} Vorspeise. (typisch)', 'Tôi muốn món khai vị đặc trưng.'),
          translate('Bạn gợi ý món gì?', ['Was kannst du empfehlen?', 'Was empfiehlst du?', 'Was können Sie empfehlen?']),
        ],
      },
      dialogue: {
        title_de: 'Im Restaurant',
        lines: [
          { speaker: 'A', de: 'Guten Abend! Haben Sie reserviert?', vi: 'Chào chị! Chị đã đặt bàn chưa?' },
          { speaker: 'B', de: 'Ja, auf den Namen Tran, für zwei Personen.', vi: 'Rồi, tên Trần, hai người.' },
          { speaker: 'A', de: 'Bitte, hier ist Ihr Tisch. Und hier ist die Speisekarte.', vi: 'Mời chị, bàn của chị đây. Còn đây là thực đơn.' },
          { speaker: 'B', de: 'Danke. Was können Sie empfehlen?', vi: 'Cảm ơn. Anh gợi ý món gì?' },
          { speaker: 'A', de: 'Die frische Fischsuppe ist heute sehr gut. Und das typische Hauptgericht ist der gebratene Fisch.', vi: 'Hôm nay súp cá tươi rất ngon. Còn món chính đặc trưng là cá rán.' },
          { speaker: 'B', de: 'Ich hätte gern die Fischsuppe als Vorspeise. Haben Sie auch vegetarische Gerichte?', vi: 'Tôi lấy súp cá làm khai vị. Có món chay không anh?' },
          { speaker: 'A', de: 'Ja, der grüne Salat mit Käse ist vegetarisch.', vi: 'Có, xà lách xanh với phô mai là món chay.' },
          { speaker: 'B', de: 'Gut, dann nehme ich den grünen Salat. Und als Getränk ein Glas Wasser, bitte.', vi: 'Được, vậy tôi lấy xà lách xanh. Đồ uống thì một ly nước.' },
        ],
        gloss: { Namen: 'tên (auf den Namen = đứng tên)', Fischsuppe: 'súp cá', gebratene: 'rán', Glas: 'ly, cốc' },
        questions: [
          tf('B hat nicht reserviert.', false),
          mc('Món nào hôm nay rất ngon?', ['súp cá tươi', 'xà lách xanh', 'gà rán'], 'súp cá tươi'),
          mc('B gọi món chính gì?', ['xà lách xanh với phô mai', 'cá rán', 'súp cá'], 'xà lách xanh với phô mai'),
          tf('B trinkt Wein.', false, { explain: 'Als Getränk ein Glas Wasser.' }),
        ],
        dictation: [2, 6],
      },
      writing_prompt_vi:
        'Viết đoạn hội thoại gọi món (5–6 câu) ở nhà hàng, dùng ít nhất 3 tính từ có đuôi sau der/die/das (der scharfe…, den grünen…).',
    },
    {
      title_vi: 'Ăn gì, vì sao?',
      goal_vi: 'Nói vị món ăn và giải thích lý do bằng weil.',
      items: [
        'Vegetarier', 'Wein', 'Eis', 'Soße', 'Gewürz', 'Portion', 'Geschmack', 'salzig', 'sauer', 'bitter', 'fett',
        'hungrig', 'durstig', 'satt', 'weil', 'Guten Appetit', 'Câu với weil: động từ cuối câu',
        'backen', 'Menge',
      ],
      grammar: {
        point: 'weil',
        sections: [
          {
            text_vi:
              '**weil** (vì) mở đầu **câu phụ**: động từ chia đứng **cuối câu phụ**, trước weil có dấu phẩy: Ich bestelle Wasser, **weil** ich Durst **habe**. So sánh với **denn** (A1): …, denn ich **habe** Durst (động từ vẫn ở vị trí 2).',
            table: 'Liên từ | Trật tự\ndenn | …, denn ich habe Hunger.\nweil | …, weil ich Hunger habe.',
            examples: [
              ['Ich esse kein Fleisch, weil ich Vegetarier bin.', 'Tôi không ăn thịt vì tôi ăn chay.'],
              ['Er trinkt viel, weil er durstig ist.', 'Anh ấy uống nhiều vì khát.'],
            ],
            exercises: [
              order('Ich nehme Wasser, / weil / ich / Durst / habe.', 'Tôi lấy nước vì tôi khát.'),
              choose('Ich esse nichts, weil ich satt ___.', ['bin', 'habe', 'ist'], 'bin', { vi: 'Tôi không ăn gì vì tôi no rồi.' }),
              fill('Ich bestelle Pizza, weil ich Hunger {habe}.', 'Tôi gọi pizza vì tôi đói.'),
            ],
          },
          {
            text_vi:
              'Câu phụ có động từ khuyết thiếu hoặc Perfekt thì **phần chia** đứng **sau cùng**: …, weil ich morgen arbeiten **muss**. …, weil ich schon gegessen **habe**. Động từ tách viết liền ở cuối: …, weil der Zug um acht **abfährt**.',
            examples: [
              ['Ich gehe früh, weil ich morgen früh aufstehen muss.', 'Tôi về sớm vì mai phải dậy sớm.'],
              ['Ich bin satt, weil ich schon gegessen habe.', 'Tôi no vì tôi ăn rồi.'],
            ],
            exercises: [
              choose('Ich trinke keinen Wein, weil ich noch Auto fahren ___.', ['muss', 'muss ich'], 'muss', { vi: 'Tôi không uống rượu vì tôi còn phải lái xe.' }),
              order('Er ist satt, / weil / er / viel / gegessen / hat.', 'Anh ấy no vì đã ăn nhiều.'),
              transform('Nối hai câu bằng weil', 'Ich bestelle Tee. Mir ist kalt.', ['Ich bestelle Tee, weil mir kalt ist.']),
            ],
          },
          {
            text_vi:
              'Vị: **salzig** (mặn), **sauer** (chua; còn nghĩa là bực mình), **bitter** (đắng), **fett** (béo). Đói, khát, no: **hungrig** / Ich habe Hunger, **durstig** / Ich habe Durst, **satt**. Trước bữa ăn: **Guten Appetit!**',
            examples: [['Die Soße ist zu salzig.', 'Nước sốt mặn quá.']],
            exercises: [
              choose('Ich habe genug gegessen. Ich bin ___.', ['satt', 'hungrig', 'durstig'], 'satt', { vi: 'Tôi ăn đủ rồi. Tôi no.' }),
              translate('Tôi không ăn món này vì nó quá béo.', ['Ich esse das nicht, weil es zu fett ist.']),
            ],
          },
        ],
        mixed: [
          transform('Nối hai câu bằng weil', 'Ich esse kein Fleisch. Ich bin Vegetarierin.', ['Ich esse kein Fleisch, weil ich Vegetarierin bin.']),
          choose('Ich nehme ein Eis, weil es heute sehr heiß ___.', ['ist', 'sind'], 'ist', { vi: 'Tôi lấy kem vì hôm nay rất nóng.' }),
          transform('Đổi denn thành weil', 'Ich trinke Wasser, denn ich habe Durst.', ['Ich trinke Wasser, weil ich Durst habe.']),
          fill('Er bestellt noch eine Portion, weil er noch hungrig {ist}.', 'Anh ấy gọi thêm một suất vì vẫn còn đói.'),
          order('Ich mag den Kaffee nicht, / weil / er / zu bitter / ist.', 'Tôi không thích cà phê này vì nó đắng quá.'),
        ],
      },
      dialogue: {
        title_de: 'Schmeckt es dir?',
        lines: [
          { speaker: 'A', de: 'Guten Appetit! Wie schmeckt dein Essen?', vi: 'Chúc ngon miệng! Món của bạn thế nào?' },
          { speaker: 'B', de: 'Hmm, die Soße ist zu salzig.', vi: 'Hừm, nước sốt mặn quá.' },
          { speaker: 'A', de: 'Möchtest du lieber meine Nudeln probieren?', vi: 'Bạn muốn ăn thử mì của mình không?' },
          { speaker: 'B', de: 'Nein danke, ich esse keine Nudeln, weil ich keinen Weizen vertrage.', vi: 'Thôi, mình không ăn mì vì mình không ăn được lúa mì.' },
          { speaker: 'A', de: 'Ach so. Und warum trinkst du keinen Wein?', vi: 'À ra vậy. Thế sao bạn không uống rượu vang?' },
          { speaker: 'B', de: 'Weil ich heute noch Auto fahren muss.', vi: 'Vì hôm nay mình còn phải lái xe.' },
          { speaker: 'A', de: 'Nimmst du ein Eis zum Nachtisch?', vi: 'Bạn ăn kem tráng miệng không?' },
          { speaker: 'B', de: 'Nein, ich bin schon satt, weil die Portion so groß war.', vi: 'Không, mình no rồi vì suất ăn to quá.' },
        ],
        gloss: { hmm: 'hừm', probieren: 'nếm thử', Weizen: 'lúa mì', vertrage: 'chịu được (ăn được)', 'ach so': 'à ra vậy' },
        questions: [
          mc('B thấy món ăn thế nào?', ['nước sốt quá mặn', 'quá cay', 'rất ngon'], 'nước sốt quá mặn'),
          tf('B isst gern Nudeln.', false),
          mc('Vì sao B không uống rượu vang?', ['vì phải lái xe', 'vì không thích', 'vì quá đắt'], 'vì phải lái xe'),
          tf('B ist satt.', true),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi: 'Viết 5 câu nói bạn thích hay không thích món gì và vì sao, mỗi câu dùng weil (động từ ở cuối).',
    },
    {
      title_vi: 'Thanh toán',
      goal_vi: 'Gọi thanh toán, trả chung hay riêng, cho tiền boa; nói lý do với câu phụ đứng trước.',
      items: [
        'Rechnung', 'Trinkgeld', 'Teller', 'Glas', 'Tasse', 'Gabel', 'Messer', 'Löffel', 'Stäbchen', 'Imbiss', 'probieren',
        'aussuchen', 'braten', 'schneiden', 'sich beeilen', 'zufrieden', 'Zum Wohl', 'Stimmt so',
        'Câu phụ đứng trước: động từ chính đứng ngay sau',
        'prüfen',
        'Rest',
      ],
      grammar: {
        point: 'nebensatz-vorn',
        sections: [
          {
            text_vi:
              'Câu phụ có thể đứng **trước**. Khi đó cả câu phụ chiếm **vị trí 1**, nên động từ câu chính đứng **ngay sau dấu phẩy**: **Weil ich Hunger habe, bestelle ich Pizza.** Hai động từ đứng sát hai bên dấu phẩy (… habe, bestelle …) là dấu hiệu viết đúng.',
            table: 'Vị trí 1 (câu phụ) | Vị trí 2 | Phần còn lại\nWeil ich Hunger habe, | bestelle | ich Pizza.\nWeil das Essen gut war, | gebe | ich Trinkgeld.',
            examples: [['Weil der Service gut war, gebe ich Trinkgeld.', 'Vì phục vụ tốt nên tôi cho tiền boa.']],
            exercises: [
              order('Weil ich Durst habe, / bestelle / ich / Wasser.', 'Vì khát nên tôi gọi nước.'),
              choose('Weil das Essen kalt war, ___ es zurück.', ['schicke ich', 'ich schicke'], 'schicke ich', { vi: 'Vì đồ ăn nguội nên tôi trả lại.' }),
              transform('Đưa câu phụ lên trước', 'Ich nehme Stäbchen, weil ich gern vietnamesisch esse.', [
                'Weil ich gern vietnamesisch esse, nehme ich Stäbchen.',
              ]),
            ],
          },
          {
            text_vi:
              'Thanh toán: **Die Rechnung, bitte!** / **Wir möchten zahlen.** Bồi bàn hỏi: **Zusammen oder getrennt?** (trả chung hay riêng). Tiền boa (**Trinkgeld**) khoảng 5–10%: hóa đơn 18 euro, đưa 20 và nói **Stimmt so.** (khỏi thối lại).',
            examples: [
              ['Zusammen oder getrennt? – Getrennt, bitte.', 'Trả chung hay riêng? – Riêng ạ.'],
              ['Das macht 18 Euro. – Hier sind 20, stimmt so.', 'Tổng cộng 18 euro. – Đây 20, khỏi thối.'],
            ],
            exercises: [
              choose('Das macht 27 Euro. – Hier sind 30, ___.', ['stimmt so', 'zum Wohl', 'guten Appetit'], 'stimmt so', { vi: 'Tổng cộng 27 euro. – Đây 30, khỏi thối.' }),
              fill('Wir möchten {zahlen}, bitte.', 'Chúng tôi muốn thanh toán.'),
            ],
          },
          {
            text_vi:
              'Đồ dùng ăn uống: der **Teller**, das **Glas**, die **Tasse**, die **Gabel**, das **Messer**, der **Löffel**, die **Stäbchen**. Thiếu gì thì nói: **Mir fehlt eine Gabel.** / **Ich brauche einen Löffel.** Nâng ly: **Zum Wohl!** / **Prost!**',
            examples: [['Entschuldigung, mir fehlt ein Messer.', 'Xin lỗi, tôi thiếu một con dao.']],
            exercises: [
              choose('Ich brauche ___ Löffel.', ['einen', 'eine', 'ein'], 'einen', { vi: 'Tôi cần một cái thìa.' }),
              translate('Cho tôi hóa đơn!', ['Die Rechnung, bitte!', 'Die Rechnung bitte.', 'Wir möchten zahlen.', 'Ich möchte zahlen.']),
            ],
          },
        ],
        mixed: [
          transform('Đưa câu phụ lên trước', 'Ich gebe kein Trinkgeld, weil der Kellner unfreundlich war.', [
            'Weil der Kellner unfreundlich war, gebe ich kein Trinkgeld.',
          ]),
          choose('Weil wir uns beeilen müssen, ___ schnell.', ['zahlen wir', 'wir zahlen'], 'zahlen wir', { vi: 'Vì phải vội nên chúng tôi trả tiền nhanh.' }),
          fill('Weil die Suppe zu heiß ist, {warte} ich noch.', 'Vì súp nóng quá nên tôi đợi thêm.'),
          order('Weil ich satt bin, / nehme / ich / keinen Nachtisch.', 'Vì no rồi nên tôi không lấy tráng miệng.'),
          translate('Vì đói nên tôi gọi phở.', ['Weil ich Hunger habe, bestelle ich Pho.', 'Weil ich hungrig bin, bestelle ich Pho.', 'Ich bestelle Pho, weil ich Hunger habe.']),
        ],
      },
      dialogue: {
        title_de: 'Die Rechnung, bitte!',
        lines: [
          { speaker: 'A', de: 'Entschuldigung, wir möchten zahlen.', vi: 'Xin lỗi, chúng tôi muốn thanh toán.' },
          { speaker: 'B', de: 'Gern. Zusammen oder getrennt?', vi: 'Vâng. Trả chung hay riêng ạ?' },
          { speaker: 'A', de: 'Zusammen, bitte. Weil heute mein Geburtstag ist, lade ich meine Freundin ein.', vi: 'Chung ạ. Vì hôm nay sinh nhật tôi nên tôi mời bạn.' },
          { speaker: 'B', de: 'Herzlichen Glückwunsch! Das macht 46 Euro.', vi: 'Chúc mừng sinh nhật! Tổng cộng 46 euro.' },
          { speaker: 'A', de: 'Hier sind 50 Euro. Stimmt so.', vi: 'Đây 50 euro. Khỏi thối.' },
          { speaker: 'B', de: 'Vielen Dank! Waren Sie mit dem Essen zufrieden?', vi: 'Cảm ơn nhiều! Anh chị có hài lòng với bữa ăn không?' },
          { speaker: 'A', de: 'Ja, sehr! Weil der Fisch so gut war, kommen wir bestimmt wieder.', vi: 'Rất hài lòng! Vì cá ngon quá nên chắc chắn chúng tôi sẽ quay lại.' },
          { speaker: 'B', de: 'Das freut mich. Einen schönen Abend noch!', vi: 'Rất vui ạ. Chúc anh chị buổi tối vui vẻ!' },
        ],
        gloss: { 'Herzlichen Glückwunsch': 'chúc mừng', schönen: 'đẹp, vui (einen schönen Abend)' },
        questions: [
          tf('Sie zahlen getrennt.', false, { explain: 'Zusammen, bitte.' }),
          mc('Vì sao A mời bạn?', ['vì hôm nay là sinh nhật A', 'vì bạn không có tiền', 'vì món ăn rẻ'], 'vì hôm nay là sinh nhật A'),
          mc('A cho bao nhiêu tiền boa?', ['4 euro', '5 euro', 'không cho'], '4 euro'),
          tf('Sie waren mit dem Essen zufrieden.', true),
        ],
        dictation: [0, 4],
      },
      writing_prompt_vi:
        'Viết 5 câu kể một lần đi ăn nhà hàng: ăn gì, trả tiền thế nào, có cho tiền boa không và vì sao. Dùng ít nhất hai câu bắt đầu bằng „Weil …, …“.',
    },
  ],
  test: {
    grammar: {
      'adj-def': [
        choose('Der ___ Kaffee ist bitter.', ['schwarze', 'schwarzen'], 'schwarze'),
        choose('Ich nehme den ___ Salat.', ['grünen', 'grüne'], 'grünen'),
        fill('Die {kalte} Suppe schmeckt nicht. (kalt)', 'Món súp nguội không ngon.'),
        choose('Wir sitzen an dem ___ Tisch.', ['großen', 'große'], 'großen'),
        fill('Das {frische} Brot ist lecker. (frisch)', 'Bánh mì tươi rất ngon.'),
        choose('Die ___ Brötchen sind warm.', ['frischen', 'frische'], 'frischen'),
      ],
      weil: [
        order('Ich trinke Wasser, / weil / ich / Durst / habe.', 'Tôi uống nước vì tôi khát.'),
        choose('Ich esse kein Fleisch, weil ich Vegetarier ___.', ['bin', 'ist'], 'bin'),
        fill('Er geht nach Hause, weil er müde {ist}.', 'Anh ấy về nhà vì mệt.'),
        choose('Ich gehe jetzt, weil ich morgen früh arbeiten ___.', ['muss', 'müssen'], 'muss'),
        order('Ich bin satt, / weil / ich / schon / gegessen / habe.', 'Tôi no vì tôi đã ăn rồi.'),
        fill('Ich nehme ein Eis, weil es heiß {ist}.', 'Tôi lấy kem vì trời nóng.'),
      ],
      'nebensatz-vorn': [
        choose('Weil ich Hunger habe, ___ Pizza.', ['bestelle ich', 'ich bestelle'], 'bestelle ich'),
        order('Weil es spät ist, / gehen / wir / nach Hause.', 'Vì muộn rồi nên chúng tôi về nhà.'),
        fill('Weil das Essen gut war, {gebe} ich Trinkgeld.', 'Vì đồ ăn ngon nên tôi cho tiền boa.'),
        choose('Weil er müde ist, ___ früh.', ['schläft er', 'er schläft'], 'schläft er'),
        order('Weil ich krank bin, / bleibe / ich / zu Hause.', 'Vì ốm nên tôi ở nhà.'),
        fill('Weil wir keine Zeit haben, {essen} wir am Imbiss.', 'Vì không có thời gian nên chúng tôi ăn ở quầy ăn nhanh.'),
      ],
    },
    reading: {
      title_de: 'Ein Abend im Restaurant',
      text_de:
        'Letzten Freitag war ich mit meinen Kollegen im vietnamesischen Restaurant Saigon. Wir hatten einen Tisch für sechs Personen reserviert. Die freundliche Kellnerin hat uns die Speisekarte gebracht und das typische Hauptgericht empfohlen: Bun Cha. Als Vorspeise haben wir die frischen Frühlingsrollen bestellt. Mein Kollege Jan hat keine Suppe genommen, weil er scharfes Essen nicht mag. Weil alle mit Stäbchen essen wollten, hat die Kellnerin uns geholfen. Das Essen war sehr lecker, nur die Soße war ein bisschen zu salzig. Am Ende haben wir getrennt bezahlt und alle haben Trinkgeld gegeben, weil der Service so gut war.',
      gloss: {
        'letzten Freitag': 'thứ Sáu tuần trước',
        Kollegen: 'đồng nghiệp',
        freundliche: 'thân thiện',
        Frühlingsrollen: 'nem cuốn',
        wollten: 'đã muốn',
        'am Ende': 'cuối cùng',
        getrennt: 'riêng',
        Service: 'phục vụ',
      },
      questions: [
        mc('Người viết đi ăn với ai?', ['đồng nghiệp', 'gia đình', 'bạn học'], 'đồng nghiệp'),
        tf('Jan isst gern scharfes Essen.', false),
        mc('Món chính được gợi ý là gì?', ['bún chả', 'phở', 'nem cuốn'], 'bún chả'),
        tf('Sie haben zusammen bezahlt.', false, { explain: 'Wir haben getrennt bezahlt.' }),
        tf('Die Soße war ein bisschen zu salzig.', true),
      ],
    },
  },
});
