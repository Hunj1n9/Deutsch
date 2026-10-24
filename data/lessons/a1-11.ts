// A1 · 11 Quần áo và thời tiết — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a1-11',
  points: [
    {
      key: 'praedikativ',
      rule_key: 'adjektiv-praedikativ-es-wetter',
      category: 'adjective_ending',
      title_vi: 'Tính từ làm vị ngữ không đổi đuôi; es với động từ thời tiết',
      explanation_vi: 'Sau sein/werden/bleiben tính từ giữ nguyên (Die Jacke ist warm). Thời tiết luôn có chủ ngữ es: Es regnet. Mir ist kalt.',
    },
    {
      key: 'pron-akk',
      rule_key: 'personalpronomen-akkusativ',
      category: 'case',
      title_vi: 'Đại từ nhân xưng Akkusativ: mich, dich, ihn, sie, es…',
      explanation_vi: 'ich → mich, du → dich, er → ihn, sie → sie, es → es, wir → uns, ihr → euch. der-danh từ được thay bằng ihn.',
    },
    {
      key: 'welch-dies',
      rule_key: 'welcher-dieser',
      category: 'gender',
      title_vi: 'welcher/welche/welches và dieser/diese/dieses; gefallen + Dativ',
      explanation_vi: 'Đuôi theo mạo từ xác định: -er (der), -e (die), -es (das); Akkusativ giống đực -en (diesen). Das Kleid gefällt mir.',
    },
  ],
  lessons: [
    {
      title_vi: 'Thời tiết hôm nay',
      goal_vi: 'Nói về thời tiết, nhiệt độ và các mùa.',
      items: [
        'Wetter', 'Sonne', 'Regen', 'Schnee', 'Wind', 'Wolke', 'Grad', 'Frühling', 'Sommer', 'Herbst', 'Winter', 'regnen',
        'scheinen', 'schneien', 'warm', 'kalt', 'heiß', 'kühl', 'sonnig', 'windig', 'bewölkt',
        'Tính từ làm vị ngữ: không đổi đuôi', 'Es regnet: chủ ngữ es',
      ],
      grammar: {
        point: 'praedikativ',
        sections: [
          {
            text_vi:
              'Tính từ đứng **sau** sein, werden, bleiben (làm vị ngữ) thì **giữ nguyên, không thêm đuôi**: Die Jacke ist **warm**. Der Tag ist **kalt**. Chỉ khi đứng **trước danh từ** mới thêm đuôi (eine warm**e** Jacke, học kỹ ở A2). Giống tiếng Việt: "trời lạnh" không đổi gì.',
            examples: [
              ['Heute ist es sehr warm.', 'Hôm nay trời rất ấm.'],
              ['Der Sommer in Vietnam ist heiß.', 'Mùa hè ở Việt Nam nóng.'],
            ],
            exercises: [
              choose('Der Winter ist ___.', ['kalt', 'kalte', 'kalter'], 'kalt', { vi: 'Mùa đông lạnh.' }),
              fill('Im Juli ist es sehr {heiß}.', 'Tháng Bảy trời rất nóng.'),
              choose('Der Himmel ist ___.', ['bewölkt', 'bewölkte'], 'bewölkt', { vi: 'Trời nhiều mây.' }),
            ],
          },
          {
            text_vi:
              'Nói thời tiết luôn dùng chủ ngữ giả **es**: **Es regnet.** (Trời mưa.) **Es schneit.** **Es ist kalt.** Tiếng Việt nói "trời mưa", tiếng Đức nói "nó mưa", không bỏ es được. Đảo ngữ: Heute **regnet es**. Hỏi: **Wie ist das Wetter?**',
            table: 'Câu | Nghĩa\nEs regnet. | Trời mưa.\nEs schneit. | Tuyết rơi.\nDie Sonne scheint. | Trời nắng.\nEs sind 30 Grad. | Trời 30 độ.',
            examples: [
              ['Wie ist das Wetter heute? – Es regnet.', 'Thời tiết hôm nay thế nào? – Trời mưa.'],
              ['Im Dezember schneit es oft.', 'Tháng Mười hai tuyết hay rơi.'],
            ],
            exercises: [
              fill('{Es} schneit im Januar.', 'Tháng Một có tuyết.'),
              order('Heute / regnet / es / den ganzen Tag.', 'Hôm nay mưa cả ngày.'),
              choose('Die Sonne ___.', ['scheint', 'regnet', 'schneit'], 'scheint', { vi: 'Trời nắng.' }),
            ],
          },
          {
            text_vi:
              'Bốn mùa đều giống đực và đi với **im**: **im** Frühling, **im** Sommer, **im** Herbst, **im** Winter. Nhiệt độ: Es sind 20 **Grad**. Cảm giác: **Mir ist kalt.** (Tôi thấy lạnh.) Không nói "Ich bin kalt".',
            examples: [
              ['Im Herbst ist es oft windig.', 'Mùa thu trời hay có gió.'],
              ['Mir ist kalt. Wo ist meine Jacke?', 'Tôi lạnh. Áo khoác của tôi đâu?'],
            ],
            exercises: [
              choose('___ Sommer fahren wir ans Meer.', ['Im', 'Am', 'Um'], 'Im', { vi: 'Mùa hè chúng tôi đi biển.' }),
              translate('Tôi thấy lạnh.', ['Mir ist kalt.']),
            ],
          },
        ],
        mixed: [
          translate('Hôm nay trời nắng.', ['Heute scheint die Sonne.', 'Die Sonne scheint heute.', 'Heute ist es sonnig.', 'Es ist heute sonnig.']),
          transform('Viết lại, bắt đầu bằng „Morgen“', 'Es regnet morgen.', ['Morgen regnet es.']),
          choose('Im Winter ist es oft ___.', ['kalt', 'heiß', 'sonnig'], 'kalt', { vi: 'Mùa đông trời thường lạnh.' }),
          fill('Wie ist das {Wetter} heute?', 'Thời tiết hôm nay thế nào?'),
          order('Im Frühling / ist / es / warm.', 'Mùa xuân trời ấm.'),
        ],
      },
      dialogue: {
        title_de: 'Wie ist das Wetter bei euch?',
        lines: [
          { speaker: 'A', de: 'Hallo Mama! Wie ist das Wetter in Hanoi?', vi: 'Mẹ ơi! Thời tiết ở Hà Nội thế nào?' },
          { speaker: 'B', de: 'Es ist sehr heiß, 35 Grad! Und die Sonne scheint jeden Tag.', vi: 'Nóng lắm, 35 độ! Ngày nào cũng nắng.' },
          { speaker: 'A', de: 'Hier in Berlin ist es kalt. Es sind nur fünf Grad.', vi: 'Ở Berlin lạnh lắm. Chỉ có năm độ.' },
          { speaker: 'B', de: 'Regnet es?', vi: 'Có mưa không?' },
          { speaker: 'A', de: 'Ja, es regnet seit Tagen und der Himmel ist immer grau.', vi: 'Có, mưa mấy ngày nay rồi, trời lúc nào cũng xám.' },
          { speaker: 'B', de: 'Oh! Und schneit es auch?', vi: 'Ôi! Có tuyết không?' },
          { speaker: 'A', de: 'Noch nicht. Aber im Dezember schneit es bestimmt.', vi: 'Chưa. Nhưng tháng Mười hai chắc chắn sẽ có tuyết.' },
          { speaker: 'B', de: 'Dann zieh dich warm an!', vi: 'Vậy con mặc ấm vào nhé!' },
        ],
        gloss: { Mama: 'mẹ', Himmel: 'bầu trời', grau: 'xám', 'zieh dich … an': 'mặc quần áo' },
        questions: [
          mc('Ở Hà Nội bao nhiêu độ?', ['35 độ', '5 độ', '25 độ'], '35 độ'),
          tf('In Berlin scheint die Sonne.', false, { explain: 'In Berlin regnet es seit Tagen.' }),
          mc('Thời tiết Berlin thế nào?', ['lạnh và mưa', 'nóng và nắng', 'có tuyết'], 'lạnh và mưa'),
          tf('In Berlin schneit es schon.', false, { explain: 'Noch nicht.' }),
        ],
        dictation: [2, 3],
      },
      writing_prompt_vi:
        'Viết 5 câu về thời tiết ở thành phố của bạn qua bốn mùa (im Sommer…, es regnet…, es ist heiß…).',
    },
    {
      title_vi: 'Mua quần áo',
      goal_vi: 'Mua quần áo: hỏi mặc thử, nói vừa hay không, dùng ihn/sie/es thay cho danh từ.',
      items: [
        'Kleidung', 'Hose', 'Hemd', 'T-Shirt', 'Pullover', 'Jacke', 'Mantel', 'Kleid', 'Rock', 'Schuh', 'Stiefel', 'Socke',
        'Mütze', 'Schal', 'tragen', 'anprobieren', 'passen', 'lang', 'kurz', 'eng', 'Đại từ nhân xưng Akkusativ',
      ],
      grammar: {
        point: 'pron-akk',
        sections: [
          {
            text_vi:
              'Đại từ làm **tân ngữ** (Akkusativ): ich → **mich**, du → **dich**, er → **ihn**, sie → **sie**, es → **es**, wir → **uns**, ihr → **euch**, Sie → **Sie**. Chỉ **er → ihn** đổi khác hẳn. Thay danh từ theo giống: der Rock → **ihn**, die Hose → **sie**, das Kleid → **es**.',
            table: 'Nominativ | Akkusativ\nich | mich\ndu | dich\ner | ihn\nsie | sie\nes | es\nwir | uns\nihr | euch',
            examples: [
              ['Der Rock ist schön. Ich nehme ihn.', 'Cái chân váy đẹp. Tôi lấy nó.'],
              ['Ich rufe dich morgen an.', 'Mai tôi gọi cho bạn.'],
            ],
            exercises: [
              choose('Der Pullover ist toll. Ich kaufe ___.', ['ihn', 'er', 'es'], 'ihn', { vi: 'Cái áo len đẹp quá. Tôi mua nó.' }),
              choose('Die Jacke? Ich nehme ___.', ['sie', 'ihn', 'es'], 'sie', { vi: 'Cái áo khoác à? Tôi lấy nó.' }),
              fill('Siehst du {mich}?', 'Bạn có thấy tôi không?'),
            ],
          },
          {
            text_vi:
              'Mua quần áo: **Kann ich die Hose anprobieren?** (mặc thử) – **Passt sie?** (vừa không?) – **Sie ist zu eng / zu lang / zu kurz.** **passen** = vừa cỡ; **tragen** = mặc, đang mặc: Er **trägt** ein Hemd (a → ä ở du, er).',
            examples: [
              ['Die Schuhe passen gut. Ich nehme sie.', 'Đôi giày vừa. Tôi lấy chúng.'],
              ['Sie trägt heute ein Kleid.', 'Hôm nay cô ấy mặc váy.'],
            ],
            exercises: [
              fill('Er {trägt} eine Jacke.', 'Anh ấy mặc áo khoác.'),
              choose('Die Hose ist zu lang. Sie ___ nicht.', ['passt', 'passen', 'trägt'], 'passt', { vi: 'Cái quần dài quá. Nó không vừa.' }),
              order('Kann / ich / das Kleid / anprobieren?', 'Tôi mặc thử váy này được không?'),
            ],
          },
          {
            text_vi:
              'Số nhiều thay bằng **sie**: Die Schuhe? Ich nehme **sie**. Đại từ Akkusativ đứng ngay sau động từ chia: Ich kaufe **ihn** heute. Với động từ tách: Ich probiere **ihn an**.',
            examples: [['Die Socken sind warm. Ich kaufe sie.', 'Đôi tất ấm. Tôi mua chúng.']],
            exercises: [
              transform('Thay danh từ bằng đại từ', 'Ich nehme den Mantel.', ['Ich nehme ihn.']),
              transform('Thay danh từ bằng đại từ', 'Ich probiere das T-Shirt an.', ['Ich probiere es an.']),
            ],
          },
        ],
        mixed: [
          choose('Wo ist mein Schal? Ich finde ___ nicht.', ['ihn', 'er', 'sie'], 'ihn', { vi: 'Khăn của tôi đâu? Tôi không tìm thấy nó.' }),
          translate('Tôi lấy nó. (die Mütze)', ['Ich nehme sie.']),
          choose('Wir besuchen ___ morgen. (ihr)', ['euch', 'ihr', 'uns'], 'euch', { vi: 'Mai chúng tôi đến thăm các bạn.' }),
          fill('Die Stiefel sind schön, aber ich brauche {sie} nicht.', 'Đôi bốt đẹp, nhưng tôi không cần chúng.'),
          order('Die Jacke / ist / zu / eng.', 'Áo khoác chật quá.'),
        ],
      },
      dialogue: {
        title_de: 'Im Geschäft',
        lines: [
          { speaker: 'A', de: 'Guten Tag! Kann ich Ihnen helfen?', vi: 'Xin chào! Tôi giúp gì được chị?' },
          { speaker: 'B', de: 'Ja, ich suche eine Jacke für den Winter.', vi: 'Vâng, tôi tìm một cái áo khoác mùa đông.' },
          { speaker: 'A', de: 'Wie finden Sie diese Jacke hier? Sie ist sehr warm.', vi: 'Chị thấy cái áo này thế nào? Nó rất ấm.' },
          { speaker: 'B', de: 'Die ist schön. Kann ich sie anprobieren?', vi: 'Đẹp đấy. Tôi mặc thử được không?' },
          { speaker: 'A', de: 'Natürlich. Und? Passt sie?', vi: 'Tất nhiên. Sao? Có vừa không?' },
          { speaker: 'B', de: 'Nein, sie ist zu eng. Haben Sie sie auch in Größe 40?', vi: 'Không, chật quá. Có cỡ 40 không chị?' },
          { speaker: 'A', de: 'Ja, hier ist sie in 40.', vi: 'Có, đây là cỡ 40.' },
          { speaker: 'B', de: 'Die passt gut. Ich nehme sie! Und den Schal hier kaufe ich auch.', vi: 'Cái này vừa. Tôi lấy nó! Và tôi mua cả cái khăn này nữa.' },
        ],
        gloss: { diese: 'này', Größe: 'cỡ' },
        questions: [
          mc('B tìm gì?', ['áo khoác mùa đông', 'váy', 'giày'], 'áo khoác mùa đông'),
          tf('Die erste Jacke ist zu eng.', true),
          mc('B mua những gì?', ['áo khoác và khăn quàng', 'chỉ áo khoác', 'áo len'], 'áo khoác và khăn quàng'),
          tf('B probiert die Jacke nicht an.', false),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Viết đoạn hội thoại 4–6 câu khi mua quần áo: hỏi mặc thử, nói vừa hay không (zu eng, zu lang…), quyết định mua. Dùng ihn/sie/es.',
    },
    {
      title_vi: 'Cái nào? Cái này!',
      goal_vi: 'Hỏi và chọn đồ (welcher/dieser), nói màu sắc và mình thích gì (gefallen).',
      items: [
        'Größe', 'Farbe', 'gefallen', 'bunt', 'rot', 'blau', 'grün', 'gelb', 'schwarz', 'weiß', 'grau', 'welcher',
        'dieser / diese / dieses',
      ],
      grammar: {
        point: 'welch-dies',
        sections: [
          {
            text_vi:
              'Hỏi **cái nào**: **welcher/welche/welches**, đuôi giống mạo từ xác định: der → **welcher**, die → **welche**, das → **welches**, số nhiều → **welche**. Trả lời **cái này**: **dieser/diese/dieses**: **Welcher** Mantel? – **Dieser** Mantel!',
            table: 'Giống | welch- | dies-\nder | welcher Mantel | dieser Mantel\ndie | welche Jacke | diese Jacke\ndas | welches Kleid | dieses Kleid\nsố nhiều | welche Schuhe | diese Schuhe',
            examples: [
              ['Welche Farbe gefällt dir? – Diese hier.', 'Bạn thích màu nào? – Màu này.'],
              ['Dieses Kleid ist sehr schön.', 'Cái váy này rất đẹp.'],
            ],
            exercises: [
              choose('___ Pullover ist billig.', ['Dieser', 'Diese', 'Dieses'], 'Dieser', { vi: 'Cái áo len này rẻ.' }),
              choose('___ Größe haben Sie?', ['Welcher', 'Welche', 'Welches'], 'Welche', { vi: 'Chị mặc cỡ nào?' }),
              fill('{Dieses} Hemd ist zu klein.', 'Cái áo sơ mi này nhỏ quá.'),
            ],
          },
          {
            text_vi:
              'Ở Akkusativ, như der → den, giống đực đổi thành **diesen**, **welchen**: Ich nehme **diesen** Rock. **Welchen** Mantel kaufst du? Giống cái, trung và số nhiều giữ nguyên.',
            examples: [['Ich nehme diesen Schal.', 'Tôi lấy cái khăn này.']],
            exercises: [
              choose('Ich kaufe ___ Mantel.', ['diesen', 'dieser'], 'diesen', { vi: 'Tôi mua cái áo măng tô này.' }),
              choose('___ Schuhe trägst du heute?', ['Welche', 'Welcher'], 'Welche', { vi: 'Hôm nay bạn đi đôi giày nào?' }),
            ],
          },
          {
            text_vi:
              '**gefallen** (làm ai thích): **người thích** ở Dativ, **cái được thích** là chủ ngữ: Das Kleid **gefällt mir**. (Tôi thích cái váy.) Số nhiều: Die Schuhe **gefallen mir**. Màu: rot, blau, grün, gelb, schwarz, weiß, grau, bunt. Hỏi: **Welche Farbe hat …?**',
            examples: [
              ['Die rote Jacke gefällt mir.', 'Tôi thích cái áo khoác đỏ.'],
              ['Gefällt dir dieses Hemd?', 'Bạn có thích cái áo sơ mi này không?'],
            ],
            exercises: [
              choose('Die Schuhe ___ mir.', ['gefallen', 'gefällt'], 'gefallen', { vi: 'Tôi thích đôi giày này.', explain: 'die Schuhe số nhiều là chủ ngữ → gefallen.' }),
              fill('Das Kleid {gefällt} mir.', 'Tôi thích cái váy này.'),
            ],
          },
        ],
        mixed: [
          translate('Tôi thích cái váy này.', ['Dieses Kleid gefällt mir.', 'Das Kleid gefällt mir.']),
          choose('___ Farbe hat dein Auto? – Rot.', ['Welche', 'Welcher'], 'Welche', { vi: 'Ô tô của bạn màu gì? – Đỏ.' }),
          transform('Thay „der“ bằng „dieser“', 'Der Rock ist zu kurz.', ['Dieser Rock ist zu kurz.']),
          fill('Der Schnee ist {weiß}.', 'Tuyết màu trắng.'),
          order('Welches / Hemd / gefällt / dir?', 'Bạn thích cái áo sơ mi nào?'),
        ],
      },
      dialogue: {
        title_de: 'Welche Farbe?',
        lines: [
          { speaker: 'A', de: 'Welches T-Shirt gefällt dir? Das rote oder das blaue?', vi: 'Bạn thích áo phông nào? Cái đỏ hay cái xanh?' },
          { speaker: 'B', de: 'Das blaue gefällt mir besser.', vi: 'Mình thích cái xanh hơn.' },
          { speaker: 'A', de: 'Und welche Hose nimmst du?', vi: 'Còn quần thì bạn lấy cái nào?' },
          { speaker: 'B', de: 'Diese schwarze Hose hier. Schwarz passt immer.', vi: 'Cái quần đen này. Màu đen lúc nào cũng hợp.' },
          { speaker: 'A', de: 'Und die Schuhe? Diese sind sehr bunt.', vi: 'Còn giày? Đôi này sặc sỡ quá.' },
          { speaker: 'B', de: 'Nein, bunte Schuhe gefallen mir nicht. Ich nehme diese grauen.', vi: 'Không, mình không thích giày sặc sỡ. Mình lấy đôi xám này.' },
          { speaker: 'A', de: 'Welche Größe hast du?', vi: 'Bạn đi cỡ nào?' },
          { speaker: 'B', de: 'Größe 39. Oh, sie passen!', vi: 'Cỡ 39. Ồ, vừa!' },
        ],
        gloss: { rote: 'đỏ', blaue: 'xanh dương', besser: 'hơn', schwarze: 'đen', bunte: 'sặc sỡ', grauen: 'xám' },
        questions: [
          mc('B thích áo phông màu nào?', ['xanh dương', 'đỏ', 'vàng'], 'xanh dương'),
          tf('B nimmt eine schwarze Hose.', true),
          tf('Bunte Schuhe gefallen B.', false),
          mc('B đi giày cỡ bao nhiêu?', ['39', '40', '38'], '39'),
        ],
        dictation: [3, 5],
      },
      writing_prompt_vi:
        'Viết 5 câu: bạn thích quần áo màu gì, cái nào bạn thích (… gefällt mir), và hỏi người bán „Welche Größe…?“, „Haben Sie diesen … auch in …?“',
    },
  ],
  test: {
    grammar: {
      praedikativ: [
        choose('Die Jacke ist ___.', ['warm', 'warme'], 'warm'),
        fill('{Es} regnet heute.', 'Hôm nay trời mưa.'),
        choose('Im Winter ___ es oft.', ['schneit', 'scheint'], 'schneit'),
        order('Morgen / regnet / es.', 'Ngày mai trời mưa.'),
        fill('Mir ist {kalt}.', 'Tôi thấy lạnh.'),
        choose('___ Frühling ist es warm.', ['Im', 'Am'], 'Im'),
      ],
      'pron-akk': [
        choose('Der Rock? Ich nehme ___.', ['ihn', 'er'], 'ihn'),
        choose('Die Schuhe? Ich kaufe ___.', ['sie', 'ihn'], 'sie'),
        fill('Ich rufe {dich} an.', 'Tôi gọi cho bạn.'),
        choose('Das Kleid ist schön. Ich probiere ___ an.', ['es', 'ihn', 'sie'], 'es'),
        fill('Besuchst du {uns}?', 'Bạn có đến thăm chúng tôi không?'),
        order('Ich / nehme / ihn.', 'Tôi lấy nó.'),
      ],
      'welch-dies': [
        choose('___ Kleid gefällt dir?', ['Welches', 'Welcher', 'Welche'], 'Welches'),
        choose('Ich nehme ___ Mantel.', ['diesen', 'dieser', 'dieses'], 'diesen'),
        fill('{Diese} Jacke ist zu teuer.', 'Cái áo khoác này đắt quá.'),
        choose('Die Schuhe ___ mir.', ['gefallen', 'gefällt'], 'gefallen'),
        fill('{Welche} Farbe magst du?', 'Bạn thích màu nào?'),
        order('Dieser Pullover / ist / sehr warm.', 'Cái áo len này rất ấm.'),
      ],
    },
    reading: {
      title_de: 'Wetter und Kleidung in Deutschland',
      text_de:
        'In Deutschland ist das Wetter oft anders als in Vietnam. Im Sommer ist es warm, manchmal heiß, aber am Abend wird es kühl. Im Herbst ist es windig und es regnet oft. Dann brauchst du eine Jacke und einen Regenschirm. Im Winter ist es sehr kalt. Manchmal sind es minus zehn Grad und es schneit. Du brauchst einen Mantel, eine Mütze, einen Schal und warme Stiefel. Im Frühling scheint die Sonne wieder und es wird wärmer. Mein Tipp: Kauf die Winterkleidung im Herbst, dann ist sie oft billiger. Und welche Farbe? Schwarz und grau passen immer!',
      gloss: {
        'anders als': 'khác với',
        wird: 'trở nên',
        Regenschirm: 'ô (dù)',
        minus: 'âm',
        warme: 'ấm',
        wärmer: 'ấm hơn',
        Tipp: 'lời khuyên',
        Winterkleidung: 'quần áo mùa đông',
        billiger: 'rẻ hơn',
      },
      questions: [
        mc('Mùa thu ở Đức thời tiết thế nào?', ['nhiều gió và mưa', 'rất nóng', 'có tuyết'], 'nhiều gió và mưa'),
        tf('Im Winter schneit es manchmal.', true),
        mc('Nên mua quần áo mùa đông khi nào?', ['mùa thu', 'mùa đông', 'mùa hè'], 'mùa thu'),
        tf('Im Sommer ist es am Abend heiß.', false, { explain: 'Am Abend wird es kühl.' }),
      ],
    },
  },
});
