// A1 · 05 Ăn uống và mua sắm — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a1-05',
  points: [
    {
      key: 'akkusativ',
      rule_key: 'akkusativ-maskulin',
      category: 'case',
      title_vi: 'Akkusativ: der → den, ein → einen',
      explanation_vi: 'Tân ngữ trực tiếp ở cách Akkusativ: chỉ giống đực đổi (den, einen, keinen); giống cái, trung, số nhiều giữ nguyên.',
    },
    {
      key: 'moechten',
      rule_key: 'moechten-konjugation',
      category: 'conjugation',
      title_vi: 'möchten: chia động từ và động từ nguyên mẫu cuối câu',
      explanation_vi: 'ich möchte, du möchtest, er möchte (không có -t), wir möchten, ihr möchtet; động từ thứ hai đứng cuối câu.',
    },
    {
      key: 'ja-nein-doch',
      rule_key: 'antwort-doch-kein-nicht',
      category: 'other',
      title_vi: 'Trả lời ja / nein / doch; phủ định kein hay nicht',
      explanation_vi: 'Câu hỏi phủ định mà trả lời "có" thì dùng doch. kein cho danh từ không mạo từ/có ein; nicht cho động từ, tính từ, danh từ có der/die/das.',
    },
  ],
  lessons: [
    {
      title_vi: 'Bữa sáng',
      goal_vi: 'Nói mình ăn uống gì và thích gì; dùng đúng den/einen với danh từ giống đực.',
      items: [
        'Brot', 'Brötchen', 'Butter', 'Käse', 'Wurst', 'Ei', 'Obst', 'Apfel', 'Banane', 'Kaffee', 'Tee', 'Milch', 'Saft',
        'Wasser', 'Zucker', 'Frühstück', 'essen', 'trinken', 'gern', 'Akkusativ: den / einen',
      ],
      grammar: {
        point: 'akkusativ',
        sections: [
          {
            text_vi:
              'Danh từ làm **tân ngữ trực tiếp** (cái được ăn, uống, mua…) ở cách **Akkusativ**. Chỉ **giống đực** đổi mạo từ: **der → den**, **ein → einen**, **kein → keinen**. Giống cái, giống trung và số nhiều giữ nguyên. Tiếng Việt không đổi hình thức từ (Tôi ăn táo), nên phải tự kiểm: đây là chủ ngữ hay tân ngữ?',
            table: 'Giống | Nominativ | Akkusativ\nder | der/ein Apfel | den/einen Apfel\ndie | die/eine Banane | die/eine Banane\ndas | das/ein Ei | das/ein Ei\nsố nhiều | die Eier | die Eier',
            examples: [
              ['Der Kaffee ist heiß.', 'Cà phê nóng.'],
              ['Ich trinke einen Kaffee.', 'Tôi uống một ly cà phê.'],
            ],
            exercises: [
              choose('Ich esse ___ Apfel.', ['ein', 'einen', 'eine'], 'einen', { vi: 'Tôi ăn một quả táo.' }),
              choose('Er trinkt ___ Saft.', ['der', 'den', 'die'], 'den', { vi: 'Anh ấy uống nước ép đó.' }),
              fill('Ich esse {eine} Banane.', 'Tôi ăn một quả chuối.', { hint: 'die Banane: giống cái không đổi.' }),
            ],
          },
          {
            text_vi:
              'Phân biệt: **chủ ngữ** (Nominativ) làm hành động, **tân ngữ** (Akkusativ) chịu hành động. **Der** Käse ist lecker. (Käse là chủ ngữ) – Ich esse **den** Käse. (Käse là tân ngữ). Mẹo: hỏi **wer/was** cho chủ ngữ, **wen/was** cho tân ngữ.',
            examples: [['Der Tee ist kalt. – Ich trinke den Tee nicht.', 'Trà nguội rồi. – Tôi không uống trà đó.']],
            exercises: [
              choose('___ Käse kommt aus Frankreich.', ['Der', 'Den'], 'Der', {
                vi: 'Phô mai này đến từ Pháp.',
                explain: 'Käse là chủ ngữ → Nominativ der.',
              }),
              choose('Ich kaufe ___ Käse.', ['der', 'den'], 'den', { vi: 'Tôi mua phô mai đó.' }),
              fill('Isst du {den} Kuchen? (der Kuchen)', 'Bạn ăn cái bánh đó không?'),
            ],
          },
          {
            text_vi:
              '**essen** đổi nguyên âm **e → i** ở du và er/sie/es: du **isst**, er **isst**. **trinken** chia có quy tắc. **gern** + động từ = thích làm gì: Ich trinke **gern** Tee. (Tôi thích uống trà.) gern đứng sau động từ chia.',
            table: 'Đại từ | essen | trinken\nich | esse | trinke\ndu | isst | trinkst\ner/sie/es | isst | trinkt\nwir | essen | trinken',
            examples: [
              ['Was isst du zum Frühstück?', 'Bữa sáng bạn ăn gì?'],
              ['Ich esse gern Brot mit Käse.', 'Tôi thích ăn bánh mì với phô mai.'],
            ],
            exercises: [
              fill('Was {isst} du gern?', 'Bạn thích ăn gì?'),
              order('Ich / trinke / gern / Tee.', 'Tôi thích uống trà.'),
            ],
          },
        ],
        mixed: [
          translate('Tôi uống một ly nước ép.', ['Ich trinke einen Saft.']),
          choose('Zum Frühstück esse ich ___ Brötchen.', ['ein', 'einen'], 'ein', {
            vi: 'Bữa sáng tôi ăn một cái bánh mì nhỏ.',
            explain: 'das Brötchen: giống trung không đổi.',
          }),
          transform('Thay einen bằng mạo từ xác định', 'Ich kaufe einen Apfel.', ['Ich kaufe den Apfel.']),
          fill('Er {isst} ein Ei.', 'Anh ấy ăn một quả trứng.'),
          choose('Möchtest du ___ Tee?', ['ein', 'einen', 'eine'], 'einen', { vi: 'Bạn muốn một tách trà không?' }),
        ],
      },
      dialogue: {
        title_de: 'Frühstück',
        lines: [
          { speaker: 'A', de: 'Guten Morgen! Was isst du zum Frühstück?', vi: 'Chào buổi sáng! Bữa sáng bạn ăn gì?' },
          { speaker: 'B', de: 'Ich esse ein Brötchen mit Butter und Käse.', vi: 'Mình ăn một cái bánh mì với bơ và phô mai.' },
          { speaker: 'A', de: 'Und was trinkst du? Kaffee oder Tee?', vi: 'Còn uống gì? Cà phê hay trà?' },
          { speaker: 'B', de: 'Einen Kaffee, bitte. Mit Milch, ohne Zucker.', vi: 'Một ly cà phê. Có sữa, không đường.' },
          { speaker: 'A', de: 'Ich trinke lieber einen Tee.', vi: 'Mình thích uống trà hơn.' },
          { speaker: 'B', de: 'Gibt es auch Obst?', vi: 'Có trái cây không?' },
          { speaker: 'A', de: 'Ja, es gibt Äpfel und Bananen. Möchtest du einen Apfel?', vi: 'Có, có táo và chuối. Bạn muốn một quả táo không?' },
          { speaker: 'B', de: 'Ja, gern! Der Apfel ist lecker.', vi: 'Có, cảm ơn! Táo ngon quá.' },
        ],
        gloss: { ohne: 'không có', lieber: 'thích hơn', Äpfel: 'những quả táo', Bananen: 'những quả chuối', lecker: 'ngon' },
        questions: [
          mc('B ăn gì?', ['bánh mì nhỏ với bơ và phô mai', 'trứng', 'xúc xích'], 'bánh mì nhỏ với bơ và phô mai'),
          tf('B trinkt Kaffee mit Zucker.', false, { explain: 'Mit Milch, ohne Zucker.' }),
          tf('A trinkt lieber Tee.', true),
          mc('Có trái cây gì?', ['táo và chuối', 'cà chua', 'chỉ có táo'], 'táo và chuối'),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi:
        'Viết 4–5 câu về bữa sáng của bạn: ăn gì, uống gì, thích gì (gern). Chú ý einen/den với danh từ giống đực.',
    },
    {
      title_vi: 'Đi chợ, đi siêu thị',
      goal_vi: 'Mua hàng: nói muốn mua gì, bao nhiêu, hỏi giá và trả tiền.',
      items: [
        'Reis', 'Nudel', 'Gemüse', 'Tomate', 'Kartoffel', 'Supermarkt', 'Markt', 'Bäckerei', 'Kilo', 'Gramm', 'Liter',
        'Flasche', 'Packung', 'Euro', 'Preis', 'Einkaufsliste', 'kaufen', 'möchten', 'nehmen', 'bezahlen',
        'Was darf es sein?', 'Das macht', 'möchten + Akkusativ',
      ],
      grammar: {
        point: 'moechten',
        sections: [
          {
            text_vi:
              '**möchten** (muốn, lịch sự) dùng khi gọi món, mua hàng. Chia: ich **möchte**, du **möchtest**, er/sie/es **möchte** (không có -t!), wir **möchten**, ihr **möchtet**, sie/Sie **möchten**. Sau möchten là tân ngữ Akkusativ: Ich möchte **einen** Kaffee.',
            table: 'Đại từ | möchten\nich | möchte\ndu | möchtest\ner/sie/es | möchte\nwir | möchten\nihr | möchtet\nsie/Sie | möchten',
            examples: [
              ['Ich möchte ein Kilo Tomaten.', 'Tôi muốn một ký cà chua.'],
              ['Was möchten Sie?', 'Ông/bà muốn gì?'],
            ],
            exercises: [
              fill('Er {möchte} eine Flasche Wasser.', 'Anh ấy muốn một chai nước.', { hint: 'er/sie/es: không có -t.' }),
              choose('___ du einen Kaffee?', ['Möchte', 'Möchtest', 'Möchtet'], 'Möchtest', { vi: 'Bạn muốn một ly cà phê không?' }),
              fill('Wir {möchten} bezahlen.', 'Chúng tôi muốn thanh toán.'),
            ],
          },
          {
            text_vi:
              'möchten + **động từ nguyên mẫu ở cuối câu**: Ich möchte Reis **kaufen**. (möchte ở vị trí 2, kaufen ở cuối: "khung câu".) Mua hàng: **Was darf es sein?** (Quý khách cần gì?) – **Ich möchte 200 Gramm Käse.** – **Das macht fünf Euro.** (Tổng cộng 5 euro.)',
            examples: [
              ['Ich möchte heute Fisch kochen.', 'Hôm nay tôi muốn nấu cá.'],
              ['Was darf es sein? – Ein Kilo Kartoffeln, bitte.', 'Quý khách cần gì? – Một ký khoai tây.'],
            ],
            exercises: [
              order('Ich / möchte / Gemüse / kaufen.', 'Tôi muốn mua rau.'),
              choose('Das ___ zwölf Euro, bitte.', ['macht', 'möchte', 'kauft'], 'macht', { vi: 'Tổng cộng mười hai euro.' }),
            ],
          },
          {
            text_vi:
              'Đơn vị và bao bì đứng **ngay trước** danh từ, không cần chữ "của": **ein Kilo** Äpfel, **200 Gramm** Käse, **eine Flasche** Wasser, **ein Liter** Milch, **eine Packung** Reis. Đơn vị đo (Kilo, Gramm, Liter, Euro) **không thêm số nhiều**: zwei Kilo, drei Euro.',
            examples: [
              ['Zwei Kilo Kartoffeln, bitte.', 'Cho hai ký khoai tây.'],
              ['Eine Packung Nudeln kostet einen Euro.', 'Một gói mì giá một euro.'],
            ],
            exercises: [
              choose('Ich nehme zwei ___ Tomaten.', ['Kilo', 'Kilos'], 'Kilo', { vi: 'Tôi lấy hai ký cà chua.' }),
              fill('Eine {Flasche} Wasser, bitte.', 'Cho một chai nước.'),
            ],
          },
        ],
        mixed: [
          translate('Tôi muốn một ly cà phê.', ['Ich möchte einen Kaffee.', 'Ich möchte einen Kaffee, bitte.']),
          transform('Nói lịch sự hơn bằng möchten', 'Ich nehme einen Saft.', ['Ich möchte einen Saft.']),
          choose('Meine Mutter ___ ein Kilo Reis.', ['möchte', 'möchtest', 'möchten'], 'möchte', { vi: 'Mẹ tôi muốn một ký gạo.' }),
          order('Was / darf / es / sein?', 'Quý khách cần gì?'),
          fill('Ich möchte {bezahlen}, bitte.', 'Tôi muốn thanh toán.'),
        ],
      },
      dialogue: {
        title_de: 'Auf dem Markt',
        lines: [
          { speaker: 'A', de: 'Guten Tag! Was darf es sein?', vi: 'Xin chào! Chị cần gì?' },
          { speaker: 'B', de: 'Ich möchte ein Kilo Kartoffeln und Tomaten.', vi: 'Tôi muốn một ký khoai tây và cà chua.' },
          { speaker: 'A', de: 'Wie viele Tomaten?', vi: 'Bao nhiêu cà chua?' },
          { speaker: 'B', de: 'Ein halbes Kilo, bitte. Sind die Tomaten frisch?', vi: 'Nửa ký. Cà chua có tươi không?' },
          { speaker: 'A', de: 'Ja, sehr frisch. Möchten Sie auch Gemüse? Der Salat ist heute billig.', vi: 'Có, rất tươi. Chị có muốn rau không? Hôm nay xà lách rẻ.' },
          { speaker: 'B', de: 'Nein, danke. Ich brauche noch eine Packung Reis.', vi: 'Không, cảm ơn. Tôi còn cần một gói gạo.' },
          { speaker: 'A', de: 'Reis haben wir leider nicht. Gehen Sie bitte in den Supermarkt.', vi: 'Tiếc là chúng tôi không có gạo. Chị ra siêu thị nhé.' },
          { speaker: 'B', de: 'Okay. Was macht das?', vi: 'Được. Hết bao nhiêu tiền?' },
          { speaker: 'A', de: 'Das macht vier Euro fünfzig.', vi: 'Tổng cộng bốn euro năm mươi.' },
        ],
        gloss: { halbes: 'nửa', frisch: 'tươi', Salat: 'xà lách', okay: 'được' },
        questions: [
          mc('B mua bao nhiêu khoai tây?', ['1 ký', 'nửa ký', '2 ký'], '1 ký'),
          tf('Die Tomaten sind nicht frisch.', false),
          tf('Auf dem Markt gibt es keinen Reis.', true),
          mc('Tổng cộng bao nhiêu tiền?', ['4,50 €', '5,40 €', '4 €'], '4,50 €'),
        ],
        dictation: [0, 8],
      },
      writing_prompt_vi:
        'Viết một đoạn hội thoại ngắn (4–6 câu) khi mua đồ ở chợ: chào, nói muốn mua gì (möchten), bao nhiêu (Kilo, Flasche…), hỏi giá và trả tiền.',
    },
    {
      title_vi: 'Ngon không?',
      goal_vi: 'Nói món ăn thế nào, mình ăn và không ăn gì; trả lời đúng với doch.',
      items: [
        'Salat', 'Suppe', 'Kuchen', 'Salz', 'Bier', 'Mittagessen', 'Abendessen', 'Fleisch', 'Fisch', 'Hähnchen', 'kochen',
        'schmecken', 'lecker', 'frisch', 'süß', 'scharf', 'viel', 'nicht hay kein?',
      ],
      grammar: {
        point: 'ja-nein-doch',
        sections: [
          {
            text_vi:
              'Câu hỏi có/không: động từ đứng đầu (Isst du Fisch?), trả lời **Ja** hoặc **Nein**. Nhưng nếu câu hỏi **phủ định** (Isst du **kein** Fleisch?) mà muốn trả lời "có", tiếng Đức dùng **Doch!** (Doch, ich esse Fleisch.). Tiếng Việt chỉ nói "có chứ", nên người Việt hay quên doch.',
            table: 'Câu hỏi | Trả lời có | Trả lời không\nIsst du Fisch? | Ja. | Nein.\nIsst du keinen Fisch? | Doch! | Nein.',
            examples: [
              ['Trinkst du keinen Kaffee? – Doch, gern!', 'Bạn không uống cà phê à? – Có chứ, thích lắm!'],
              ['Schmeckt die Suppe nicht? – Doch, sie ist lecker.', 'Súp không ngon à? – Ngon chứ.'],
            ],
            exercises: [
              choose('Isst du kein Fleisch? – ___, ich esse gern Fleisch.', ['Ja', 'Doch', 'Nein'], 'Doch', {
                vi: 'Bạn không ăn thịt à? – Có chứ, tôi thích ăn thịt.',
              }),
              choose('Kochst du heute? – ___, heute kocht mein Mann.', ['Doch', 'Nein', 'Ja'], 'Nein', {
                vi: 'Hôm nay bạn nấu à? – Không, hôm nay chồng tôi nấu.',
              }),
              choose('Ist die Suppe nicht scharf? – ___, sie ist sehr scharf.', ['Ja', 'Doch'], 'Doch', {
                vi: 'Súp không cay à? – Có chứ, cay lắm.',
              }),
            ],
          },
          {
            text_vi:
              'Phủ định: **kein/keine/keinen** cho danh từ không mạo từ hoặc có ein (Ich esse **kein** Fleisch. Ich trinke **keinen** Kaffee.). **nicht** cho động từ, tính từ, hoặc danh từ có der/die/das (Der Kuchen ist **nicht** süß. Ich esse **den** Fisch **nicht**.).',
            table: 'Phủ định | Dùng khi | Ví dụ\nkein | danh từ không mạo từ / có ein | Ich esse kein Fleisch.\nnicht | động từ, tính từ, der/die/das | Das schmeckt nicht.',
            examples: [
              ['Ich trinke keinen Alkohol.', 'Tôi không uống rượu bia.'],
              ['Die Suppe ist nicht heiß.', 'Súp không nóng.'],
            ],
            exercises: [
              choose('Ich esse ___ Fisch.', ['nicht', 'keinen'], 'keinen', { vi: 'Tôi không ăn cá.' }),
              choose('Der Kuchen ist ___ süß.', ['kein', 'nicht'], 'nicht', { vi: 'Bánh không ngọt.' }),
              fill('Wir haben {keine} Milch mehr.', 'Chúng tôi hết sữa rồi.'),
            ],
          },
          {
            text_vi:
              'Nói về hương vị: **schmecken** (có vị): Der Kuchen **schmeckt** gut. / **Schmeckt** es? Tính từ: **lecker** (ngon), **frisch** (tươi), **süß** (ngọt), **scharf** (cay). **zu** + tính từ = quá: zu scharf, zu süß.',
            examples: [
              ['Die Suppe schmeckt sehr gut.', 'Món súp rất ngon.'],
              ['Das Essen ist zu scharf für mich.', 'Món ăn quá cay với tôi.'],
            ],
            exercises: [
              fill('Der Kuchen {schmeckt} super.', 'Bánh ngon tuyệt.'),
              translate('Món súp quá cay.', ['Die Suppe ist zu scharf.']),
            ],
          },
        ],
        mixed: [
          transform('Phủ định câu', 'Ich trinke einen Kaffee.', ['Ich trinke keinen Kaffee.']),
          transform('Phủ định câu bằng nicht', 'Der Salat ist frisch.', ['Der Salat ist nicht frisch.']),
          choose('Trinkst du kein Bier? – ___, manchmal.', ['Ja', 'Doch'], 'Doch', { vi: 'Bạn không uống bia à? – Có chứ, thỉnh thoảng.' }),
          translate('Tôi không ăn thịt.', ['Ich esse kein Fleisch.']),
          order('Schmeckt / dir / der Fisch?', 'Bạn thấy cá có ngon không?'),
        ],
      },
      dialogue: {
        title_de: 'Das Abendessen',
        lines: [
          { speaker: 'A', de: 'Was kochen wir heute zum Abendessen?', vi: 'Tối nay mình nấu gì?' },
          { speaker: 'B', de: 'Vielleicht Hähnchen mit Reis?', vi: 'Hay là gà với cơm?' },
          { speaker: 'A', de: 'Hähnchen? Isst du kein Fleisch?', vi: 'Gà à? Bạn không ăn thịt mà?' },
          { speaker: 'B', de: 'Doch, ich esse gern Fleisch. Und eine Suppe?', vi: 'Có chứ, mình thích ăn thịt. Thêm món súp nhé?' },
          { speaker: 'A', de: 'Gut, aber nicht zu scharf, bitte.', vi: 'Được, nhưng đừng cay quá nhé.' },
          { speaker: 'B', de: 'Schmeckt dir die Suppe?', vi: 'Bạn thấy súp ngon không?' },
          { speaker: 'A', de: 'Ja, sie ist sehr lecker! Und das Hähnchen ist frisch.', vi: 'Có, ngon lắm! Gà cũng tươi.' },
          { speaker: 'B', de: 'Möchtest du noch Kuchen?', vi: 'Bạn ăn thêm bánh không?' },
          { speaker: 'A', de: 'Nein, danke. Ich esse keinen Kuchen. Er ist mir zu süß.', vi: 'Không, cảm ơn. Mình không ăn bánh. Nó ngọt quá với mình.' },
        ],
        gloss: { vielleicht: 'có lẽ, hay là' },
        questions: [
          tf('B isst kein Fleisch.', false, { explain: 'Doch, ich esse gern Fleisch.' }),
          mc('Họ nấu gì?', ['gà với cơm và súp', 'cá với cơm', 'mì và xà lách'], 'gà với cơm và súp'),
          tf('A möchte die Suppe nicht zu scharf.', true),
          mc('Vì sao A không ăn bánh?', ['quá ngọt', 'quá cay', 'đã no'], 'quá ngọt'),
        ],
        dictation: [3, 6],
      },
      writing_prompt_vi:
        'Viết 4–5 câu: bạn thích và không thích ăn uống gì. Dùng kein/keinen và nicht, và một câu trả lời bằng doch.',
    },
  ],
  test: {
    grammar: {
      akkusativ: [
        choose('Ich kaufe ___ Apfel.', ['ein', 'einen'], 'einen'),
        choose('Er isst ___ Käse.', ['der', 'den'], 'den'),
        fill('Wir trinken {einen} Saft.', 'Chúng tôi uống nước ép.'),
        choose('___ Kaffee ist heiß.', ['Der', 'Den'], 'Der'),
        fill('Ich nehme {den} Salat.', 'Tôi lấy món xà lách.'),
        choose('Ich esse ___ Banane.', ['eine', 'einen'], 'eine'),
      ],
      moechten: [
        fill('Ich {möchte} ein Wasser.', 'Tôi muốn một ly nước.'),
        choose('___ ihr Kuchen?', ['Möchtet', 'Möchtest', 'Möchte'], 'Möchtet'),
        choose('Mein Vater ___ einen Tee.', ['möchte', 'möchtet', 'möchtest'], 'möchte'),
        order('Ich / möchte / Reis / kaufen.', 'Tôi muốn mua gạo.'),
        fill('{Möchtest} du einen Kaffee?', 'Bạn muốn một ly cà phê không?'),
        choose('Das ___ zehn Euro.', ['macht', 'möchte'], 'macht'),
      ],
      'ja-nein-doch': [
        choose('Trinkst du keinen Tee? – ___, ich trinke gern Tee.', ['Ja', 'Doch', 'Nein'], 'Doch'),
        choose('Ich esse ___ Fleisch.', ['nicht', 'kein'], 'kein'),
        choose('Die Suppe ist ___ scharf.', ['kein', 'nicht'], 'nicht'),
        fill('Ich trinke {keinen} Kaffee.', 'Tôi không uống cà phê.'),
        order('Isst / du / gern / Fisch?', 'Bạn có thích ăn cá không?'),
        choose('Hast du keine Zeit? – ___, ich habe Zeit.', ['Doch', 'Ja'], 'Doch'),
      ],
    },
    reading: {
      title_de: 'Einkaufen am Samstag',
      text_de:
        'Am Samstag kaufe ich immer auf dem Markt ein. Dort ist das Obst und Gemüse frisch und nicht teuer. Heute brauche ich zwei Kilo Kartoffeln, ein Kilo Tomaten und einen Salat. In der Bäckerei kaufe ich sechs Brötchen und einen Kuchen. Meine Tochter isst keinen Fisch, aber sie isst gern Hähnchen. Deshalb kaufe ich ein Hähnchen. Im Supermarkt kaufe ich noch Milch, Butter und eine Packung Reis. Alles zusammen kostet fünfundzwanzig Euro. Am Abend kocht mein Mann. Er kocht sehr gern und sehr lecker, aber manchmal zu scharf! Die Kinder trinken Saft, wir trinken Wasser.',
      gloss: {
        immer: 'luôn luôn',
        'kaufe … ein': 'đi mua sắm',
        dort: 'ở đó',
        deshalb: 'vì vậy',
        alles: 'tất cả',
        manchmal: 'thỉnh thoảng',
      },
      questions: [
        mc('Người viết đi chợ khi nào?', ['thứ Bảy', 'Chủ nhật', 'thứ Hai'], 'thứ Bảy'),
        tf('Die Tochter isst gern Fisch.', false, { explain: 'Meine Tochter isst keinen Fisch.' }),
        mc('Ai nấu bữa tối?', ['người chồng', 'con gái', 'người viết'], 'người chồng'),
        tf('Auf dem Markt ist das Gemüse teuer.', false),
        tf('Die Kinder trinken Saft.', true),
      ],
    },
  },
});
