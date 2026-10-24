// A2 · 12 Môi trường và thời tiết — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a2-12',
  points: [
    {
      key: 'superlativ',
      rule_key: 'superlativ-am-sten',
      category: 'adjective_ending',
      title_vi: 'So sánh nhất: am …sten, der …ste',
      explanation_vi: 'am kältesten, am heißesten; gut → am besten, viel → am meisten, gern → am liebsten. Trước danh từ: der höchste Berg, die wärmste Jahreszeit.',
    },
    {
      key: 'passiv',
      rule_key: 'passiv-praesens-werden',
      category: 'other',
      title_vi: 'Bị động hiện tại: werden + Partizip II',
      explanation_vi: 'werden (vị trí 2) + Partizip II (cuối câu): Der Müll wird getrennt. Die Flaschen werden recycelt. Tân ngữ Akk của câu chủ động thành chủ ngữ.',
    },
    {
      key: 'relativ',
      rule_key: 'relativsatz-einfuehrung',
      category: 'other',
      title_vi: 'Mệnh đề quan hệ (Nominativ): der, die, das',
      explanation_vi: 'Đại từ quan hệ theo giống danh từ (der/die/das, số nhiều die), động từ cuối, có dấu phẩy: der Baum, der vor dem Haus steht.',
    },
  ],
  lessons: [
    {
      title_vi: 'Thời tiết các mùa',
      goal_vi: 'Nói thời tiết, dự báo; so sánh nhất (am …sten, der …ste).',
      items: [
        'Klima', 'Temperatur', 'Gewitter', 'Sturm', 'Nebel', 'Hitze', 'Kälte', 'Himmel', 'Jahreszeit', 'Regenschirm',
        'feucht', 'trocken', 'nass', 'klar', 'wolkenlos', 'mild', 'Es ist bewölkt', 'Wie wird das Wetter?', 'Es ist schwül',
        'So sánh nhất: am …sten', 'So sánh nhất trước danh từ: der …ste',
      ],
      grammar: {
        point: 'superlativ',
        sections: [
          {
            text_vi:
              '**So sánh nhất** sau động từ: **am** + tính từ + **-sten**: Im August ist es **am heißesten**. Tính từ ngắn thêm umlaut như so sánh hơn: kalt → am **kä**ltesten, warm → am **wä**rmsten. Tận cùng -t, -z, -ß thêm **-esten**: heiß → am heiß**esten**. Bất quy tắc: gut → **am besten**, viel → **am meisten**, gern → **am liebsten**.',
            table: 'Tính từ | So sánh hơn | So sánh nhất\nkalt | kälter | am kältesten\nwarm | wärmer | am wärmsten\nheiß | heißer | am heißesten\ngut | besser | am besten\nviel | mehr | am meisten',
            examples: [
              ['Im Januar ist es am kältesten.', 'Tháng Một lạnh nhất.'],
              ['Welche Jahreszeit magst du am liebsten?', 'Bạn thích mùa nào nhất?'],
            ],
            exercises: [
              fill('Im Juli ist es {am} heißesten.', 'Tháng Bảy nóng nhất.'),
              choose('Im Winter ist es am ___.', ['kältesten', 'kaltesten', 'kälter'], 'kältesten', { vi: 'Mùa đông lạnh nhất.' }),
              choose('Der Herbst gefällt mir am ___.', ['besten', 'gutesten', 'bessersten'], 'besten', { vi: 'Tôi thích mùa thu nhất.' }),
            ],
          },
          {
            text_vi:
              'So sánh nhất **trước danh từ**: **der/die/das** + tính từ + **-st-** + đuôi tính từ: der **höchste** Berg, die **wärmste** Jahreszeit, der **kälteste** Tag. Bất quy tắc: hoch → höher → der **höchste**; nah → der **nächste**.',
            examples: [
              ['Das ist der heißeste Tag des Jahres.', 'Đây là ngày nóng nhất trong năm.'],
              ['Der Sommer ist die wärmste Jahreszeit.', 'Mùa hè là mùa ấm nhất.'],
            ],
            exercises: [
              fill('Das ist der {höchste} Berg in Vietnam. (hoch)', 'Đây là ngọn núi cao nhất Việt Nam.'),
              choose('Der Winter ist die ___ Jahreszeit.', ['kälteste', 'kältesten', 'kaltste'], 'kälteste', { vi: 'Mùa đông là mùa lạnh nhất.' }),
            ],
          },
          {
            text_vi:
              'Dự báo: **Wie wird das Wetter?** (Thời tiết sẽ thế nào?) – **Es wird sonnig.** (werden = trở nên). **Es ist bewölkt / schwül** (nhiều mây / oi bức). **Gewitter** (giông), **Sturm** (bão), **Nebel** (sương mù). Khí hậu Hà Nội: mùa hè **feucht** und heiß.',
            examples: [['Laut Wetterbericht wird es morgen sonnig und mild.', 'Theo dự báo, mai trời nắng và dịu.']],
            exercises: [
              order('Wie / wird / das Wetter / morgen?', 'Ngày mai thời tiết thế nào?'),
              translate('Hôm nay trời oi bức.', ['Heute ist es schwül.', 'Es ist heute schwül.']),
            ],
          },
        ],
        mixed: [
          transform('Viết câu so sánh nhất (heiß)', 'Im Juni ist es heiß, im Juli heißer, im August …', ['Im August ist es am heißesten.']),
          choose('Was machst du am ___? – Lesen!', ['liebsten', 'gernsten'], 'liebsten', { vi: 'Bạn thích làm gì nhất? – Đọc sách!' }),
          fill('Das ist der {kälteste} Winter seit Jahren. (kalt)', 'Đây là mùa đông lạnh nhất trong nhiều năm.'),
          choose('Wer verdient am ___?', ['meisten', 'mehrsten', 'vielsten'], 'meisten', { vi: 'Ai kiếm nhiều tiền nhất?' }),
          translate('Mùa xuân là mùa đẹp nhất.', ['Der Frühling ist die schönste Jahreszeit.', 'Der Frühling ist am schönsten.']),
        ],
      },
      dialogue: {
        title_de: 'Das Wetter in Hanoi und Berlin',
        lines: [
          { speaker: 'A', de: 'Welche Jahreszeit ist in Hanoi am schönsten?', vi: 'Ở Hà Nội mùa nào đẹp nhất?' },
          { speaker: 'B', de: 'Der Herbst! Dann ist es mild und der Himmel ist oft klar.', vi: 'Mùa thu! Lúc đó trời dịu và bầu trời hay trong xanh.' },
          { speaker: 'A', de: 'Und wann ist es am heißesten?', vi: 'Thế khi nào nóng nhất?' },
          { speaker: 'B', de: 'Im Juni und Juli. Es ist sehr feucht und schwül, manchmal 40 Grad.', vi: 'Tháng Sáu và tháng Bảy. Rất ẩm và oi, có khi 40 độ.' },
          { speaker: 'A', de: 'In Berlin ist der Januar am kältesten. Letzte Woche war der kälteste Tag des Jahres.', vi: 'Ở Berlin tháng Một lạnh nhất. Tuần trước là ngày lạnh nhất trong năm.' },
          { speaker: 'B', de: 'Gab es Schnee?', vi: 'Có tuyết không?' },
          { speaker: 'A', de: 'Nein, nur Nebel und Sturm. Wie wird das Wetter morgen in Hanoi?', vi: 'Không, chỉ có sương mù và bão. Mai thời tiết Hà Nội thế nào?' },
          { speaker: 'B', de: 'Es gibt ein Gewitter. Ich brauche meinen Regenschirm!', vi: 'Có giông. Mình cần ô!' },
        ],
        gloss: { des: 'của (des Jahres = trong năm)', gab: 'đã có (es gab)' },
        questions: [
          mc('Mùa đẹp nhất ở Hà Nội là mùa nào?', ['mùa thu', 'mùa hè', 'mùa đông'], 'mùa thu'),
          tf('Im Juli ist es in Hanoi sehr trocken.', false, { explain: 'Es ist sehr feucht und schwül.' }),
          mc('Ở Berlin tháng nào lạnh nhất?', ['tháng Một', 'tháng Mười hai', 'tháng Hai'], 'tháng Một'),
          tf('Morgen gibt es in Hanoi ein Gewitter.', true),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi:
        'So sánh thời tiết ở thành phố của bạn qua các mùa (5 câu): mùa nào nóng nhất, lạnh nhất, đẹp nhất (am …sten, der …ste).',
    },
    {
      title_vi: 'Bảo vệ môi trường',
      goal_vi: 'Nói những việc được làm để bảo vệ môi trường bằng câu bị động.',
      items: [
        'Umwelt', 'Energie', 'Strom', 'Plastik', 'Abfall', 'Solarenergie', 'Bio-Laden', 'Fahrradweg', 'schützen', 'trennen',
        'wegwerfen', 'recyceln', 'verschmutzen', 'verbrauchen', 'retten', 'umweltfreundlich', 'weniger', 'mehr',
        'Bị động hiện tại: werden + Partizip II',
      ],
      grammar: {
        point: 'passiv',
        sections: [
          {
            text_vi:
              '**Câu bị động** (Passiv) nhấn vào **việc được làm**, không quan trọng ai làm: **werden** (chia, vị trí 2) + **Partizip II** (cuối câu): Hier **wird** Müll **getrennt**. (Ở đây rác được phân loại.) Số nhiều: Die Flaschen **werden recycelt**. Tiếng Việt dùng "được / bị"; tiếng Đức dùng werden.',
            table: 'Chủ động | Bị động\nMan trennt den Müll. | Der Müll wird getrennt.\nMan recycelt Glas. | Glas wird recycelt.\nMan baut Fahrradwege. | Fahrradwege werden gebaut.',
            examples: [
              ['In Deutschland wird der Müll getrennt.', 'Ở Đức rác được phân loại.'],
              ['Hier werden neue Fahrradwege gebaut.', 'Ở đây đang xây đường xe đạp mới.'],
            ],
            exercises: [
              fill('Der Müll {wird} getrennt.', 'Rác được phân loại.'),
              choose('Die Flaschen ___ recycelt.', ['werden', 'wird'], 'werden', { vi: 'Các chai được tái chế.' }),
              fill('Hier wird viel Energie {gespart}.', 'Ở đây nhiều năng lượng được tiết kiệm.'),
            ],
          },
          {
            text_vi:
              'Chuyển chủ động → bị động: tân ngữ Akkusativ thành **chủ ngữ**, động từ thành **werden + Partizip II**: Man **schützt die Tiere**. → **Die Tiere werden geschützt**. Chia werden: ich werde, du wirst, er **wird**, wir/sie **werden**. Muốn nói ai làm: **von** + Dativ.',
            examples: [['Die Luft wird von Autos verschmutzt.', 'Không khí bị ô tô làm ô nhiễm.']],
            exercises: [
              transform('Chuyển sang bị động', 'Man trennt den Abfall.', ['Der Abfall wird getrennt.']),
              choose('Das Plastik ___ nicht weggeworfen.', ['wird', 'werden'], 'wird', { vi: 'Đồ nhựa không bị vứt đi.' }),
              order('Viel Strom / wird / verbraucht.', 'Nhiều điện bị tiêu thụ.'),
            ],
          },
          {
            text_vi:
              'Bảo vệ môi trường: **die Umwelt schützen**, **Energie sparen**, **Müll trennen**, **recyceln**, mua **weniger** Plastik, đi xe đạp **mehr**. Sống **umweltfreundlich** (thân thiện môi trường): mua ở **Bio-Laden**, dùng **Solarenergie**.',
            examples: [['Wir sollten weniger Auto fahren und mehr Fahrrad.', 'Chúng ta nên ít đi ô tô và đi xe đạp nhiều hơn.']],
            exercises: [
              fill('Wir müssen die Umwelt {schützen}.', 'Chúng ta phải bảo vệ môi trường.'),
              translate('Tôi mua ít đồ nhựa hơn.', ['Ich kaufe weniger Plastik.']),
            ],
          },
        ],
        mixed: [
          transform('Chuyển sang bị động', 'Man recycelt Papier.', ['Papier wird recycelt.']),
          transform('Chuyển sang bị động', 'Man baut neue Fahrradwege.', ['Neue Fahrradwege werden gebaut.']),
          choose('In der Schule ___ Energie gespart.', ['wird', 'werden'], 'wird', { vi: 'Ở trường, năng lượng được tiết kiệm.' }),
          fill('Die Tiere werden {geschützt}.', 'Các loài vật được bảo vệ.'),
          order('Hier / wird / kein Plastik / benutzt.', 'Ở đây không dùng đồ nhựa.'),
        ],
      },
      dialogue: {
        title_de: 'Umweltfreundlich leben',
        lines: [
          { speaker: 'A', de: 'Wie lebst du umweltfreundlich?', vi: 'Bạn sống thân thiện với môi trường thế nào?' },
          { speaker: 'B', de: 'Bei uns wird der Müll immer getrennt. Papier, Glas und Plastik werden recycelt.', vi: 'Nhà mình luôn phân loại rác. Giấy, thủy tinh và nhựa được tái chế.' },
          { speaker: 'A', de: 'Und was machst du noch?', vi: 'Còn làm gì nữa?' },
          { speaker: 'B', de: 'Ich fahre weniger Auto und mehr Fahrrad. In unserer Stadt werden neue Fahrradwege gebaut.', vi: 'Mình ít đi ô tô, đi xe đạp nhiều hơn. Thành phố mình đang xây đường xe đạp mới.' },
          { speaker: 'A', de: 'Kaufst du im Bio-Laden?', vi: 'Bạn có mua ở cửa hàng hữu cơ không?' },
          { speaker: 'B', de: 'Ja, dort wird kein Plastik benutzt. Und unser Haus nutzt Solarenergie.', vi: 'Có, ở đó không dùng đồ nhựa. Và nhà mình dùng năng lượng mặt trời.' },
          { speaker: 'A', de: 'Toll! Ich werfe leider noch zu viel weg.', vi: 'Tuyệt! Tiếc là mình vẫn vứt đi quá nhiều.' },
          { speaker: 'B', de: 'Jeder kann etwas tun. Allein können wir die Welt nicht retten, aber zusammen schon!', vi: 'Ai cũng làm được gì đó. Một mình thì không cứu được thế giới, nhưng cùng nhau thì được!' },
        ],
        gloss: { Glas: 'thủy tinh', unserer: 'của chúng tôi (Dativ)', nutzt: 'sử dụng', 'werfe … weg': 'vứt đi', jeder: 'mỗi người', tun: 'làm', Welt: 'thế giới' },
        questions: [
          tf('Bei B wird der Müll getrennt.', true),
          mc('B làm gì để bảo vệ môi trường?', ['đi xe đạp nhiều hơn', 'đi ô tô nhiều hơn', 'không làm gì'], 'đi xe đạp nhiều hơn'),
          mc('Nhà của B dùng gì?', ['năng lượng mặt trời', 'điện than', 'ga'], 'năng lượng mặt trời'),
          tf('A wirft nichts weg.', false, { explain: 'Ich werfe leider noch zu viel weg.' }),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi:
        'Viết 5 câu về việc bảo vệ môi trường ở nơi bạn sống, dùng ít nhất 3 câu bị động (… wird getrennt / … werden recycelt).',
    },
    {
      title_vi: 'Thiên nhiên quanh ta',
      goal_vi: 'Tả thiên nhiên và sự thay đổi; nối câu bằng mệnh đề quan hệ.',
      items: [
        'Natur', 'Tier', 'Vogel', 'Baum', 'Blatt', 'Gras', 'Erde', 'Welt', 'Luft', 'Überschwemmung', 'steigen', 'sinken',
        'wachsen', 'blühen', 'gefährlich', 'natürlich', 'Mệnh đề quan hệ (giới thiệu)',
        'Pferd', 'Schwein',
      ],
      grammar: {
        point: 'relativ',
        sections: [
          {
            text_vi:
              '**Mệnh đề quan hệ** bổ sung thông tin cho danh từ, giống chữ "mà" trong tiếng Việt: der Baum, **der** vor unserem Haus **steht** (cái cây mà đứng trước nhà). Đại từ quan hệ **theo giống** của danh từ: der → **der**, die → **die**, das → **das**, số nhiều → **die**. **Động từ đứng cuối**, trước có dấu phẩy.',
            table: 'Danh từ | Mệnh đề quan hệ\nder Baum | , der vor dem Haus steht\ndie Blume | , die im Garten blüht\ndas Tier | , das im Wald lebt\ndie Vögel | , die singen',
            examples: [
              ['Das ist der Baum, der vor unserem Haus steht.', 'Đây là cái cây đứng trước nhà chúng tôi.'],
              ['Ich mag Tiere, die im Wasser leben.', 'Tôi thích những con vật sống dưới nước.'],
            ],
            exercises: [
              choose('Das ist der Vogel, ___ jeden Morgen singt.', ['der', 'die', 'das'], 'der', { vi: 'Đây là con chim sáng nào cũng hót.' }),
              choose('Ich kenne eine Insel, ___ sehr schön ist.', ['die', 'der', 'das'], 'die', { vi: 'Tôi biết một hòn đảo rất đẹp.' }),
              fill('Das Tier, das im Wald {lebt}, ist gefährlich.', 'Con vật sống trong rừng đó nguy hiểm.'),
            ],
          },
          {
            text_vi:
              'Ở A2 chỉ cần mệnh đề quan hệ mà đại từ làm **chủ ngữ** (Nominativ). Mẹo: tách thành hai câu rồi ghép: Der Baum ist alt. **Der** Baum steht vor dem Haus. → Der Baum, **der** vor dem Haus **steht**, ist alt. Mệnh đề quan hệ đứng ngay sau danh từ, có dấu phẩy hai bên.',
            examples: [['Die Blumen, die im Frühling blühen, sind wunderschön.', 'Những bông hoa nở vào mùa xuân thật đẹp.']],
            exercises: [
              transform('Nối hai câu bằng mệnh đề quan hệ', 'Das ist das Gras. Das Gras wächst schnell.', ['Das ist das Gras, das schnell wächst.']),
              order('Der Fluss, / der / durch die Stadt / fließt, / ist sauber.', 'Con sông chảy qua thành phố thì sạch.'),
            ],
          },
          {
            text_vi:
              'Thay đổi trong tự nhiên: **steigen** (tăng) – **sinken** (giảm), Perfekt với **sein**: Die Temperatur **ist gestiegen**. **wachsen** (mọc, lớn; du wächst), **blühen** (nở hoa). Thiên tai: **Überschwemmung** (lũ lụt), **gefährlich** (nguy hiểm).',
            examples: [['Die Temperatur auf der Erde steigt.', 'Nhiệt độ trên trái đất đang tăng.']],
            exercises: [
              fill('In der Nacht {sinkt} die Temperatur.', 'Ban đêm nhiệt độ giảm.'),
              translate('Cây trong vườn mọc nhanh.', ['Die Pflanzen im Garten wachsen schnell.', 'Die Bäume im Garten wachsen schnell.']),
            ],
          },
        ],
        mixed: [
          choose('Wo ist das Buch, ___ auf dem Tisch lag?', ['das', 'der', 'die'], 'das', { vi: 'Quyển sách nằm trên bàn đâu rồi?' }),
          transform('Nối hai câu bằng mệnh đề quan hệ', 'Ich habe einen Freund. Der Freund liebt Tiere.', ['Ich habe einen Freund, der Tiere liebt.']),
          choose('Die Bäume, die im Park ___, sind sehr alt.', ['stehen', 'steht'], 'stehen', { vi: 'Những cái cây trong công viên rất già.' }),
          fill('Ein Sturm, der sehr stark ist, {ist} gefährlich.', 'Một cơn bão rất mạnh thì nguy hiểm.'),
          order('Das ist ein Vogel, / der / im Winter / nach Süden / fliegt.', 'Đây là loài chim bay về phương nam vào mùa đông.'),
        ],
      },
      dialogue: {
        title_de: 'Im Park',
        lines: [
          { speaker: 'A', de: 'Schau mal, der Baum, der dort steht, ist über 200 Jahre alt!', vi: 'Nhìn kìa, cái cây đứng đằng kia đã hơn 200 năm tuổi!' },
          { speaker: 'B', de: 'Wow! Und die Blumen, die daneben blühen, sind so schön.', vi: 'Ồ! Còn những bông hoa nở bên cạnh đẹp quá.' },
          { speaker: 'A', de: 'Im Frühling ist der Park am schönsten. Hörst du die Vögel, die singen?', vi: 'Mùa xuân công viên đẹp nhất. Bạn có nghe tiếng chim hót không?' },
          { speaker: 'B', de: 'Ja! Aber leider gibt es jedes Jahr weniger Vögel.', vi: 'Có! Nhưng tiếc là mỗi năm chim lại ít đi.' },
          { speaker: 'A', de: 'Warum?', vi: 'Tại sao vậy?' },
          { speaker: 'B', de: 'Weil die Temperatur steigt und es weniger Bäume gibt. Das ist für die Tiere gefährlich.', vi: 'Vì nhiệt độ tăng và cây ít đi. Điều đó nguy hiểm cho động vật.' },
          { speaker: 'A', de: 'Dann sollten wir mehr Bäume pflanzen!', vi: 'Vậy chúng ta nên trồng thêm cây!' },
          { speaker: 'B', de: 'Genau. Jeder Baum, der wächst, hilft der Natur.', vi: 'Đúng vậy. Mỗi cái cây lớn lên đều giúp thiên nhiên.' },
        ],
        gloss: { wow: 'ồ', daneben: 'bên cạnh', jedes: 'mỗi', pflanzen: 'trồng', Bäume: 'cây (số nhiều)', jeder: 'mỗi' },
        questions: [
          mc('Cái cây bao nhiêu tuổi?', ['hơn 200 năm', '100 năm', '50 năm'], 'hơn 200 năm'),
          tf('Es gibt jedes Jahr mehr Vögel.', false, { explain: 'Es gibt jedes Jahr weniger Vögel.' }),
          mc('Vì sao chim ít đi?', ['nhiệt độ tăng và ít cây hơn', 'có nhiều mèo', 'ồn ào'], 'nhiệt độ tăng và ít cây hơn'),
          tf('A will mehr Bäume pflanzen.', true),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Tả một nơi thiên nhiên bạn thích (5 câu), dùng ít nhất hai mệnh đề quan hệ (der/die/das + động từ cuối câu).',
    },
  ],
  test: {
    grammar: {
      superlativ: [
        fill('Im August ist es {am} heißesten.', 'Tháng Tám nóng nhất.'),
        choose('Er läuft am ___.', ['schnellsten', 'schneller'], 'schnellsten'),
        choose('Das ist der ___ Berg.', ['höchste', 'hochste'], 'höchste'),
        fill('Ich mag den Herbst am {liebsten}.', 'Tôi thích mùa thu nhất.'),
        choose('Wer hat am ___ Geld?', ['meisten', 'vielsten'], 'meisten'),
        choose('Die ___ Jahreszeit ist der Winter.', ['kälteste', 'kältesten'], 'kälteste'),
      ],
      passiv: [
        fill('Hier {wird} Müll getrennt.', 'Ở đây rác được phân loại.'),
        choose('Die Flaschen ___ recycelt.', ['werden', 'wird'], 'werden'),
        fill('Die Umwelt wird {geschützt}.', 'Môi trường được bảo vệ.'),
        order('Papier / wird / recycelt.', 'Giấy được tái chế.'),
        choose('Neue Wege ___ gebaut.', ['werden', 'wird'], 'werden'),
        fill('Viel Plastik wird {weggeworfen}.', 'Nhiều đồ nhựa bị vứt đi.'),
      ],
      relativ: [
        choose('Das ist der Mann, ___ hier wohnt.', ['der', 'die'], 'der'),
        choose('Das ist die Frau, ___ Deutsch lernt.', ['die', 'der'], 'die'),
        choose('Das ist das Kind, ___ singt.', ['das', 'der'], 'das'),
        fill('Ich kenne Leute, die in Berlin {wohnen}.', 'Tôi biết những người sống ở Berlin.'),
        order('Der Baum, / der / vor dem Haus / steht, / ist alt.', 'Cái cây trước nhà đã già.'),
        fill('Das ist ein Tier, {das} im Wasser lebt.', 'Đây là một con vật sống dưới nước.'),
      ],
    },
    reading: {
      title_de: 'Umweltschutz in Freiburg',
      text_de:
        'Ich wohne in Freiburg. Das ist eine Stadt, die als sehr umweltfreundlich bekannt ist. Hier werden viele Fahrradwege gebaut und die meisten Menschen fahren mit dem Fahrrad oder der Straßenbahn. Viele Häuser nutzen Solarenergie. Der Müll wird genau getrennt: Papier, Glas, Plastik und Bio-Abfall. In den Supermärkten wird weniger Plastik benutzt. Am schönsten finde ich den großen Park, der mitten in der Stadt liegt. Dort gibt es alte Bäume und viele Vögel. Im Sommer ist es hier manchmal sehr heiß, aber im Park ist es am kühlsten.',
      gloss: {
        bekannt: 'nổi tiếng',
        'die meisten': 'phần lớn',
        nutzen: 'sử dụng',
        genau: 'kỹ lưỡng',
        'Bio-Abfall': 'rác hữu cơ',
        Supermärkten: 'siêu thị (Dativ số nhiều)',
        mitten: 'ở giữa',
        kühlsten: 'mát nhất',
      },
      questions: [
        tf('Freiburg ist als umweltfreundlich bekannt.', true),
        mc('Phần lớn người dân đi lại bằng gì?', ['xe đạp hoặc tàu điện', 'ô tô', 'xe buýt'], 'xe đạp hoặc tàu điện'),
        mc('Người viết thích nhất điều gì?', ['công viên lớn giữa thành phố', 'siêu thị', 'bãi biển'], 'công viên lớn giữa thành phố'),
        tf('Im Park ist es im Sommer am heißesten.', false, { explain: 'Im Park ist es am kühlsten.' }),
      ],
    },
  },
});
