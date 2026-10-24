// A2 · 04 Mua sắm và thời trang — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a2-04',
  points: [
    {
      key: 'adj-indef',
      rule_key: 'adj-ending-indefinite',
      category: 'adjective_ending',
      title_vi: 'Đuôi tính từ sau ein/kein/mein',
      explanation_vi: 'Sau ein/kein/mein tính từ mang dấu hiệu giống: ein schöner Mantel, eine schöne Bluse, ein schönes Kleid; Akk giống đực: einen warmen; Dativ, số nhiều: -en.',
    },
    {
      key: 'komparativ',
      rule_key: 'komparativ-er-umlaut',
      category: 'adjective_ending',
      title_vi: 'So sánh hơn: -er (thường thêm umlaut), bất quy tắc',
      explanation_vi: 'billig → billiger, alt → älter, groß → größer, teuer → teurer; gut → besser, viel → mehr, gern → lieber. Trước danh từ vẫn thêm đuôi: eine billigere Tasche.',
    },
    {
      key: 'als-wie',
      rule_key: 'vergleich-als-wie',
      category: 'word_choice',
      title_vi: 'So sánh: -er + als, so … wie',
      explanation_vi: 'Khác nhau: so sánh hơn + als (größer als). Bằng nhau: so/genauso + tính từ + wie; không bằng: nicht so … wie.',
    },
  ],
  lessons: [
    {
      title_vi: 'Ở cửa hàng',
      goal_vi: 'Tả trang phục và hỏi đồ ở cửa hàng; dùng đuôi tính từ sau ein/eine/einen.',
      items: [
        'Kaufhaus', 'Abteilung', 'Umkleidekabine', 'Mode', 'Stil', 'Anzug', 'Bluse', 'Gürtel', 'aussehen', 'anhaben',
        'elegant', 'hübsch', 'hässlich', 'altmodisch', 'gestreift', 'kariert', 'Kann ich Ihnen helfen?', 'Ich schaue nur',
        'Das steht dir gut', 'Đuôi tính từ sau ein/kein/mein (Nominativ)', 'Đuôi tính từ sau ein (Akkusativ)',
        'Jeans',
      ],
      grammar: {
        point: 'adj-indef',
        sections: [
          {
            text_vi:
              'Sau **ein/kein/mein**, mạo từ không cho biết giống (ein Mantel / ein Kleid trông giống nhau), nên **tính từ phải mang dấu hiệu giống**: ein schön**er** Mantel (der), eine schön**e** Bluse (die), ein schön**es** Kleid (das). Mẹo: đuôi mượn chữ cuối của der/das: de**r** → -er, da**s** → -es.',
            table: 'Giống | Nominativ\nder | ein schöner Mantel\ndie | eine schöne Bluse\ndas | ein schönes Kleid\nsố nhiều | meine schönen Kleider',
            examples: [
              ['Das ist ein eleganter Anzug.', 'Đây là một bộ vest thanh lịch.'],
              ['Er trägt ein gestreiftes Hemd.', 'Anh ấy mặc một cái áo sơ mi kẻ sọc.'],
            ],
            exercises: [
              choose('Das ist ein ___ Gürtel.', ['schöner', 'schöne', 'schönes'], 'schöner', { vi: 'Đây là một cái thắt lưng đẹp.' }),
              fill('Das ist ein {modernes} Kaufhaus. (modern)', 'Đây là một cửa hàng bách hóa hiện đại.'),
              choose('Das ist eine ___ Bluse.', ['hübsche', 'hübscher', 'hübsches'], 'hübsche', { vi: 'Đây là một cái áo cánh xinh xắn.' }),
            ],
          },
          {
            text_vi:
              'Ở **Akkusativ**, chỉ giống đực đổi: **einen** warm**en** Pullover. Giống cái và trung giữ như Nominativ: eine warm**e** Jacke, ein warm**es** Hemd. Ở Dativ và số nhiều sau mein/kein đuôi là **-en**: mit einem schön**en** Kleid, keine neu**en** Schuhe.',
            table: 'Giống | Akkusativ\nder | einen warmen Pullover\ndie | eine warme Jacke\ndas | ein warmes Hemd',
            examples: [['Ich suche einen eleganten Anzug.', 'Tôi tìm một bộ vest thanh lịch.']],
            exercises: [
              choose('Ich suche einen ___ Mantel.', ['warmen', 'warmer', 'warme'], 'warmen', { vi: 'Tôi tìm một cái áo măng tô ấm.' }),
              fill('Er kauft ein {kariertes} Hemd. (kariert)', 'Anh ấy mua một cái áo sơ mi kẻ ô.'),
              choose('Sie hat eine ___ Tasche.', ['neue', 'neuen', 'neuer'], 'neue', { vi: 'Cô ấy có một cái túi mới.' }),
            ],
          },
          {
            text_vi:
              'Ở cửa hàng, nhân viên hỏi **Kann ich Ihnen helfen?** – Trả lời **Danke, ich schaue nur.** (tôi chỉ xem thôi). Khen: **Das steht dir gut!** (hợp với bạn; stehen + Dativ). **aussehen** (trông): Du **siehst** toll **aus**! **anhaben** (đang mặc): Was **hast** du heute **an**?',
            examples: [['Der Anzug steht dir sehr gut.', 'Bộ vest rất hợp với bạn.']],
            exercises: [
              fill('Du {siehst} heute toll aus!', 'Hôm nay trông bạn tuyệt lắm!'),
              translate('Cảm ơn, tôi chỉ xem thôi.', ['Danke, ich schaue nur.']),
            ],
          },
        ],
        mixed: [
          transform('Thêm tính từ „neu“', 'Ich habe einen Gürtel.', ['Ich habe einen neuen Gürtel.']),
          choose('Das ist kein ___ Stil.', ['moderner', 'modernen', 'moderne'], 'moderner', { vi: 'Đây không phải phong cách hiện đại.' }),
          transform('Thêm tính từ „elegant“', 'Sie trägt ein Kleid.', ['Sie trägt ein elegantes Kleid.']),
          fill('Er sucht eine {gestreifte} Bluse für seine Frau. (gestreift)', 'Anh ấy tìm một cái áo cánh kẻ sọc cho vợ.'),
          choose('Mein ___ Mantel ist altmodisch.', ['alter', 'alte', 'altes'], 'alter', { vi: 'Cái áo măng tô cũ của tôi lỗi thời rồi.' }),
        ],
      },
      dialogue: {
        title_de: 'Im Kaufhaus',
        lines: [
          { speaker: 'A', de: 'Guten Tag! Kann ich Ihnen helfen?', vi: 'Xin chào! Tôi giúp gì được anh?' },
          { speaker: 'B', de: 'Ja, ich suche einen eleganten Anzug für eine Hochzeit.', vi: 'Vâng, tôi tìm một bộ vest thanh lịch để đi đám cưới.' },
          { speaker: 'A', de: 'Die Herrenabteilung ist im ersten Stock. Hier ist ein dunkler Anzug.', vi: 'Gian hàng nam ở tầng một. Đây là một bộ vest màu tối.' },
          { speaker: 'B', de: 'Hmm, der ist ein bisschen altmodisch. Haben Sie einen modernen Anzug?', vi: 'Hừm, bộ này hơi lỗi thời. Có bộ nào hiện đại không?' },
          { speaker: 'A', de: 'Ja, dieser hier ist modern. Und dazu ein weißes Hemd?', vi: 'Có, bộ này hiện đại. Thêm một cái áo sơ mi trắng nữa nhé?' },
          { speaker: 'B', de: 'Gute Idee. Wo ist die Umkleidekabine?', vi: 'Ý hay. Phòng thử đồ ở đâu?' },
          { speaker: 'A', de: 'Da hinten links. Oh, der Anzug steht Ihnen sehr gut!', vi: 'Ở phía sau bên trái. Ồ, bộ vest rất hợp với anh!' },
          { speaker: 'B', de: 'Wirklich? Dann nehme ich ihn.', vi: 'Thật à? Vậy tôi lấy bộ này.' },
        ],
        gloss: { Hochzeit: 'đám cưới', Herrenabteilung: 'gian hàng nam', ersten: 'thứ nhất', dunkler: 'tối màu', dazu: 'kèm theo', hinten: 'phía sau' },
        questions: [
          mc('B tìm gì?', ['bộ vest đi đám cưới', 'áo cánh', 'giày'], 'bộ vest đi đám cưới'),
          tf('Der erste Anzug ist modern.', false, { explain: 'Der ist ein bisschen altmodisch.' }),
          mc('Nhân viên gợi ý mặc kèm gì?', ['áo sơ mi trắng', 'thắt lưng', 'cà vạt'], 'áo sơ mi trắng'),
          tf('B kauft den Anzug.', true),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Tả trang phục bạn đang mặc hoặc muốn mua (5 câu), dùng ein/eine/einen + tính từ có đuôi (ein schöner…, eine warme…, einen neuen…).',
    },
    {
      title_vi: 'Đắt hơn, rẻ hơn',
      goal_vi: 'So sánh giá và chất lượng, hỏi giá, khuyến mãi và trả tiền.',
      items: [
        'Kasse', 'Angebot', 'Rabatt', 'Kassenbon', 'Kreditkarte', 'Bargeld', 'Qualität', 'Tasche', 'Brille', 'Schaufenster',
        'sparen', 'ausgeben', 'vergleichen', 'bedienen', 'preiswert', 'Was kostet …?', 'So sánh hơn: -er + als',
        'mindestens',
      ],
      grammar: {
        point: 'komparativ',
        sections: [
          {
            text_vi:
              'So sánh hơn: tính từ + **-er** + **als**: billig → billig**er** als. Tính từ ngắn một âm tiết thường **thêm umlaut**: alt → **ä**lter, groß → gr**ö**ßer, kurz → k**ü**rzer; teuer → teu**r**er (mất e). Bất quy tắc: gut → **besser**, viel → **mehr**, gern → **lieber**.',
            table: 'Tính từ | So sánh hơn\nbillig | billiger\nalt | älter\ngroß | größer\nteuer | teurer\ngut | besser\nviel | mehr',
            examples: [
              ['Die Tasche ist billiger als der Rucksack.', 'Cái túi rẻ hơn cái ba lô.'],
              ['Online ist es oft preiswerter.', 'Mua trên mạng thường rẻ hơn.'],
            ],
            exercises: [
              fill('Die Jacke ist {billiger} als der Mantel. (billig)', 'Áo khoác rẻ hơn áo măng tô.'),
              choose('Mein Bruder ist ___ als ich.', ['älter', 'alter', 'mehr alt'], 'älter', { vi: 'Anh trai tôi lớn tuổi hơn tôi.' }),
              choose('Diese Qualität ist ___.', ['besser', 'guter', 'mehr gut'], 'besser', { vi: 'Chất lượng này tốt hơn.' }),
            ],
          },
          {
            text_vi:
              'Đứng trước danh từ, dạng so sánh hơn vẫn phải thêm đuôi tính từ: eine billiger**e** Tasche, ein größer**es** Kaufhaus. Hỏi chọn: **Welche Tasche ist günstiger?** Tiếng Việt chỉ thêm chữ "hơn"; tiếng Đức đổi cả hình thức từ.',
            examples: [['Ich suche eine billigere Tasche.', 'Tôi tìm một cái túi rẻ hơn.']],
            exercises: [
              choose('Haben Sie eine ___ Brille?', ['billigere', 'billiger', 'billigeren'], 'billigere', { vi: 'Có cặp kính nào rẻ hơn không?' }),
              translate('Tôi tiết kiệm nhiều hơn anh trai tôi.', ['Ich spare mehr als mein Bruder.']),
            ],
          },
          {
            text_vi:
              'Mua hàng: **im Angebot** (đang khuyến mãi), **20 Prozent Rabatt**, trả tiền **an der Kasse** bằng **Kreditkarte** hoặc **bar** (tiền mặt). Giữ **Kassenbon** (biên lai) để đổi hàng. **vergleichen** (so sánh): Ich vergleiche die Preise.',
            examples: [['Die Schuhe sind im Angebot, sie sind 30 Prozent billiger.', 'Đôi giày đang khuyến mãi, rẻ hơn 30%.']],
            exercises: [
              fill('Ich {vergleiche} die Preise im Internet.', 'Tôi so sánh giá trên mạng.'),
              order('Kann / ich / mit Kreditkarte / zahlen?', 'Tôi trả bằng thẻ tín dụng được không?'),
            ],
          },
        ],
        mixed: [
          transform('Viết câu so sánh hơn với „als“ (teuer)', 'die Brille (100 €) – die Tasche (80 €)', ['Die Brille ist teurer als die Tasche.']),
          choose('Im Kaufhaus ist es ___ als im Internet.', ['teurer', 'teuerer', 'mehr teuer'], 'teurer', { vi: 'Ở cửa hàng bách hóa đắt hơn trên mạng.' }),
          fill('Ich kaufe {mehr} als du. (viel)', 'Tôi mua nhiều hơn bạn.'),
          translate('Cái này tốt hơn.', ['Das ist besser.', 'Das hier ist besser.']),
          choose('Er ist ___ als sein Vater.', ['größer', 'großer', 'groß'], 'größer', { vi: 'Anh ấy cao hơn bố.' }),
        ],
      },
      dialogue: {
        title_de: 'Welche Tasche?',
        lines: [
          { speaker: 'A', de: 'Diese Tasche ist schön, aber sie kostet 120 Euro.', vi: 'Cái túi này đẹp, nhưng giá 120 euro.' },
          { speaker: 'B', de: 'Das ist zu teuer. Schau mal, die Tasche im Schaufenster ist billiger.', vi: 'Đắt quá. Nhìn kìa, cái túi trong tủ kính rẻ hơn.' },
          { speaker: 'A', de: 'Ja, aber die Qualität ist schlechter.', vi: 'Ừ, nhưng chất lượng kém hơn.' },
          { speaker: 'B', de: 'Die braune hier ist im Angebot, 30 Prozent Rabatt!', vi: 'Cái màu nâu này đang khuyến mãi, giảm 30%!' },
          { speaker: 'A', de: 'Wirklich? Dann ist sie preiswerter als die erste.', vi: 'Thật à? Vậy nó rẻ hơn cái đầu tiên.' },
          { speaker: 'B', de: 'Und sie ist größer. Da passt mehr rein.', vi: 'Và nó to hơn. Đựng được nhiều hơn.' },
          { speaker: 'A', de: 'Gut, ich nehme sie. Kann ich mit Kreditkarte zahlen?', vi: 'Được, mình lấy nó. Trả bằng thẻ tín dụng được không nhỉ?' },
          { speaker: 'B', de: 'Klar, an der Kasse. Und heb den Kassenbon auf!', vi: 'Được chứ, ở quầy thu ngân. Nhớ giữ biên lai nhé!' },
        ],
        gloss: { 'schau mal': 'nhìn kìa', schlechter: 'kém hơn', braune: 'màu nâu', Prozent: 'phần trăm', erste: 'đầu tiên', rein: 'vào trong', klar: 'tất nhiên', 'heb … auf': 'giữ lại' },
        questions: [
          tf('Die erste Tasche kostet 120 Euro.', true),
          mc('Cái túi màu nâu có gì đặc biệt?', ['giảm giá 30%', 'chất lượng kém', 'nhỏ hơn'], 'giảm giá 30%'),
          tf('Die braune Tasche ist kleiner.', false, { explain: 'Sie ist größer.' }),
          mc('A trả tiền bằng gì?', ['thẻ tín dụng', 'tiền mặt', 'chuyển khoản'], 'thẻ tín dụng'),
        ],
        dictation: [2, 6],
      },
      writing_prompt_vi:
        'So sánh hai món đồ bạn muốn mua (5 câu): cái nào rẻ hơn, tốt hơn, lớn hơn… (-er + als, besser, mehr).',
    },
    {
      title_vi: 'Giống hay khác?',
      goal_vi: 'So sánh bằng và hơn (so … wie, -er als); đổi trả hàng.',
      items: [
        'Schmuck', 'Ring', 'Kette', 'Ohrring', 'Handschuh', 'Stoff', 'Baumwolle', 'Kleiderschrank', 'umtauschen',
        'zurückgeben', 'sich entscheiden', 'weich', 'hart', 'ähnlich', 'modisch', 'genauso', 'als', 'eine Nummer größer',
        'so … wie: so sánh bằng',
        'egal', 'blond', 'sportlich', 'romantisch',
      ],
      grammar: {
        point: 'als-wie',
        sections: [
          {
            text_vi:
              'Hai cách so sánh: **khác nhau** → so sánh hơn + **als**: Der Mantel ist teur**er als** die Jacke. **Bằng nhau** → **so** + tính từ nguyên mẫu + **wie**: Der Rock ist **so teuer wie** die Bluse. **genauso … wie** = giống hệt. Không bằng: **nicht so … wie**.',
            table: 'Ý | Cấu trúc | Ví dụ\nhơn | -er + als | größer als\nbằng | so … wie | so groß wie\nkhông bằng | nicht so … wie | nicht so groß wie',
            examples: [
              ['Die Kette ist genauso schön wie der Ring.', 'Dây chuyền đẹp y như chiếc nhẫn.'],
              ['Baumwolle ist nicht so warm wie Wolle.', 'Vải bông không ấm bằng len.'],
            ],
            exercises: [
              choose('Der Rock ist so teuer ___ die Bluse.', ['wie', 'als'], 'wie', { vi: 'Chân váy đắt bằng áo cánh.' }),
              choose('Der Mantel ist teurer ___ die Jacke.', ['als', 'wie'], 'als', { vi: 'Áo măng tô đắt hơn áo khoác.' }),
              fill('Die Handschuhe sind genauso warm {wie} die Mütze.', 'Găng tay ấm y như mũ len.'),
            ],
          },
          {
            text_vi:
              'Lỗi hay gặp: dùng wie sau so sánh hơn ("größer wie") hoặc als sau so ("so groß als"). Nhớ: **-er → als**, **so → wie**. **ähnlich** = giống, tương tự: Die zwei Ringe sind sehr **ähnlich**.',
            examples: [['Dieser Stoff ist weicher als der andere.', 'Vải này mềm hơn vải kia.']],
            exercises: [
              transform('Viết câu so sánh bằng (so … wie, schön)', 'die Kette – der Ring', ['Die Kette ist so schön wie der Ring.']),
              choose('Das Hemd ist nicht so weich ___ der Pullover.', ['wie', 'als'], 'wie', { vi: 'Áo sơ mi không mềm bằng áo len.' }),
            ],
          },
          {
            text_vi:
              'Đổi trả: **umtauschen** (đổi), **zurückgeben** (trả lại): **Kann ich die Hose umtauschen?** **Ich möchte die Jacke zurückgeben.** Xin cỡ khác: **Haben Sie das eine Nummer größer?** Quyết định: **sich entscheiden für** + Akk.',
            examples: [['Ich möchte die Schuhe umtauschen, sie sind zu klein.', 'Tôi muốn đổi đôi giày, nó nhỏ quá.']],
            exercises: [
              order('Haben / Sie / das / eine Nummer größer?', 'Có cỡ lớn hơn một số không?'),
              fill('Ich kann mich nicht {entscheiden}.', 'Tôi không quyết định được.'),
            ],
          },
        ],
        mixed: [
          choose('Dieser Ring ist schöner ___ der andere.', ['als', 'wie'], 'als', { vi: 'Chiếc nhẫn này đẹp hơn chiếc kia.' }),
          choose('Meine Tasche ist genauso groß ___ deine.', ['wie', 'als'], 'wie', { vi: 'Túi của tôi to y như của bạn.' }),
          translate('Áo khoác này ấm hơn cái kia.', ['Diese Jacke ist wärmer als die andere.', 'Die Jacke ist wärmer als die andere.']),
          fill('Mein Kleiderschrank ist nicht so groß {wie} deiner.', 'Tủ quần áo của tôi không to bằng của bạn.'),
          order('Ich / möchte / die Jacke / zurückgeben.', 'Tôi muốn trả lại cái áo khoác.'),
        ],
      },
      dialogue: {
        title_de: 'Umtauschen',
        lines: [
          { speaker: 'A', de: 'Guten Tag, ich möchte diese Handschuhe umtauschen.', vi: 'Xin chào, tôi muốn đổi đôi găng tay này.' },
          { speaker: 'B', de: 'Gern. Was ist das Problem?', vi: 'Vâng. Có vấn đề gì ạ?' },
          { speaker: 'A', de: 'Sie sind zu klein. Haben Sie sie eine Nummer größer?', vi: 'Nó nhỏ quá. Có cỡ lớn hơn một số không?' },
          { speaker: 'B', de: 'Leider nicht. Aber diese hier sind sehr ähnlich. Sie sind genauso weich, aber wärmer.', vi: 'Tiếc là không. Nhưng đôi này rất giống. Mềm y như vậy mà ấm hơn.' },
          { speaker: 'A', de: 'Sind sie auch so teuer wie die ersten?', vi: 'Có đắt bằng đôi kia không?' },
          { speaker: 'B', de: 'Nein, sie sind ein bisschen billiger. Haben Sie den Kassenbon?', vi: 'Không, rẻ hơn một chút. Chị có biên lai không?' },
          { speaker: 'A', de: 'Ja, hier. Und diesen Ring, kann ich den auch zurückgeben?', vi: 'Có, đây. Còn chiếc nhẫn này, tôi trả lại được không?' },
          { speaker: 'B', de: 'Natürlich. Sie bekommen das Geld zurück.', vi: 'Tất nhiên. Chị sẽ được hoàn tiền.' },
        ],
        gloss: { Problem: 'vấn đề', wärmer: 'ấm hơn', ersten: 'đầu tiên', zurück: 'trở lại' },
        questions: [
          mc('Vì sao A muốn đổi găng tay?', ['quá nhỏ', 'quá đắt', 'màu xấu'], 'quá nhỏ'),
          tf('Die neuen Handschuhe sind wärmer.', true),
          tf('Die neuen Handschuhe sind teurer.', false, { explain: 'Sie sind ein bisschen billiger.' }),
          mc('A còn muốn trả lại gì?', ['chiếc nhẫn', 'dây chuyền', 'khăn'], 'chiếc nhẫn'),
        ],
        dictation: [0, 7],
      },
      writing_prompt_vi:
        'Viết đoạn hội thoại đổi hàng (5–6 câu): lý do, xin cỡ khác, so sánh với món khác (als, so … wie).',
    },
  ],
  test: {
    grammar: {
      'adj-indef': [
        choose('Das ist ein ___ Anzug.', ['eleganter', 'elegante'], 'eleganter'),
        choose('Ich suche einen ___ Pullover.', ['warmen', 'warmer'], 'warmen'),
        fill('Sie trägt ein {schönes} Kleid. (schön)', 'Cô ấy mặc một cái váy đẹp.'),
        choose('Das ist eine ___ Brille.', ['neue', 'neuer'], 'neue'),
        fill('Er hat einen {neuen} Gürtel. (neu)', 'Anh ấy có một cái thắt lưng mới.'),
        choose('Das ist kein ___ Stil.', ['schöner', 'schönen'], 'schöner'),
      ],
      komparativ: [
        fill('Die Jacke ist {billiger} als der Mantel. (billig)', 'Áo khoác rẻ hơn áo măng tô.'),
        choose('Er ist ___ als ich.', ['älter', 'alter'], 'älter'),
        choose('Das ist ___ als das.', ['besser', 'guter'], 'besser'),
        fill('Ich brauche {mehr} Geld. (viel)', 'Tôi cần nhiều tiền hơn.'),
        choose('Der Mantel ist ___.', ['teurer', 'teuerer'], 'teurer'),
        order('Diese Tasche / ist / größer / als meine.', 'Cái túi này to hơn túi của tôi.'),
      ],
      'als-wie': [
        choose('Der Rock ist so teuer ___ die Bluse.', ['wie', 'als'], 'wie'),
        choose('Er ist größer ___ sein Bruder.', ['als', 'wie'], 'als'),
        fill('Die Kette ist genauso schön {wie} der Ring.', 'Dây chuyền đẹp y như chiếc nhẫn.'),
        choose('Das Hemd ist nicht so warm ___ der Pullover.', ['wie', 'als'], 'wie'),
        fill('Das Kleid ist schöner {als} der Rock.', 'Cái váy đẹp hơn cái chân váy.'),
        order('Mein Ring / ist / so teuer / wie deiner.', 'Nhẫn của tôi đắt bằng nhẫn của bạn.'),
      ],
    },
    reading: {
      title_de: 'Im Internet oder im Geschäft?',
      text_de:
        'Viele Leute kaufen heute ihre Kleidung im Internet. Dort sind die Preise oft niedriger als im Geschäft und man kann sie leicht vergleichen. Aber man kann die Sachen nicht anprobieren. Meine Freundin Mai bestellt jede Woche etwas. Oft passt die Kleidung nicht und sie muss sie zurückschicken. Ich gehe lieber ins Kaufhaus. Dort kann ich den Stoff fühlen und die Verkäuferin berät mich. Letzte Woche habe ich einen warmen Mantel gekauft. Er war nicht so billig wie im Internet, aber die Qualität ist besser und er steht mir sehr gut.',
      gloss: {
        Leute: 'mọi người',
        niedriger: 'thấp hơn',
        Sachen: 'đồ đạc, món hàng',
        etwas: 'cái gì đó',
        zurückschicken: 'gửi trả lại',
        fühlen: 'sờ, cảm nhận',
        berät: 'tư vấn',
      },
      questions: [
        tf('Im Internet sind die Preise oft niedriger.', true),
        mc('Vấn đề của Mai là gì?', ['quần áo thường không vừa', 'quá đắt', 'giao hàng chậm'], 'quần áo thường không vừa'),
        mc('Người viết thích mua ở đâu?', ['cửa hàng bách hóa', 'trên mạng', 'ở chợ'], 'cửa hàng bách hóa'),
        tf('Der Mantel war billiger als im Internet.', false, { explain: 'Er war nicht so billig wie im Internet.' }),
      ],
    },
  },
});
