// A1 · 06 Một ngày của tôi — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a1-06',
  points: [
    {
      key: 'trennbar',
      rule_key: 'trennbare-verben',
      category: 'separable_verb',
      title_vi: 'Động từ tách: tiền tố về cuối câu',
      explanation_vi: 'aufstehen → Ich stehe um sechs auf. Động từ chia ở vị trí 2, tiền tố ở cuối câu; với động từ khuyết thiếu thì viết liền ở cuối.',
    },
    {
      key: 'satzklammer',
      rule_key: 'verb-position-2-inversion',
      category: 'verb_position',
      title_vi: 'Động từ ở vị trí 2, đảo ngữ và khung câu',
      explanation_vi: 'Động từ chia luôn ở vị trí 2; từ khác đứng đầu thì chủ ngữ đứng sau động từ. Phần động từ thứ hai đứng cuối câu.',
    },
    {
      key: 'haeufigkeit',
      rule_key: 'adverb-haeufigkeit',
      category: 'other',
      title_vi: 'Trạng từ tần suất và zu Hause / nach Hause',
      explanation_vi: 'immer, meistens, oft, manchmal, selten, nie đứng sau động từ chia; nie không đi với nicht. zu Hause = ở nhà, nach Hause = về nhà.',
    },
  ],
  lessons: [
    {
      title_vi: 'Buổi sáng của tôi',
      goal_vi: 'Kể việc buổi sáng và buổi tối bằng động từ tách (aufstehen, anrufen, fernsehen…).',
      items: [
        'aufstehen', 'frühstücken', 'duschen', 'anziehen', 'einkaufen', 'anrufen', 'fernsehen', 'aufräumen', 'anfangen',
        'aufhören', 'abholen', 'mitkommen', 'zurückkommen', 'Wecker', 'Zahn', 'putzen',
        'Động từ tách: tiền tố về cuối câu',
        'baden',
      ],
      grammar: {
        point: 'trennbar',
        sections: [
          {
            text_vi:
              '**Động từ tách** gồm tiền tố + động từ: **auf**stehen, **an**rufen, **ein**kaufen, **fern**sehen. Trong câu, phần động từ chia đứng **vị trí 2**, tiền tố tách ra **về cuối câu**: Ich **stehe** um sechs **auf**. Nguyên mẫu viết liền (aufstehen). Khi nghe, phải chờ hết câu mới biết nghĩa!',
            table: 'Nguyên mẫu | Trong câu\naufstehen | Ich stehe um sechs auf.\nanrufen | Ich rufe meine Mutter an.\neinkaufen | Am Samstag kaufe ich ein.\nfernsehen | Am Abend sehe ich fern.',
            examples: [
              ['Ich stehe jeden Tag um sieben auf.', 'Ngày nào tôi cũng dậy lúc bảy giờ.'],
              ['Er ruft seine Freundin an.', 'Anh ấy gọi điện cho bạn gái.'],
            ],
            exercises: [
              order('Ich / stehe / um sechs Uhr / auf.', 'Tôi dậy lúc sáu giờ.'),
              fill('Wir {kaufen} am Samstag ein.', 'Thứ Bảy chúng tôi đi mua sắm.'),
              fill('Am Abend sehe ich {fern}.', 'Buổi tối tôi xem TV.'),
            ],
          },
          {
            text_vi:
              'Tiền tố tách được hay gặp: **an, auf, aus, ein, mit, zurück, ab, fern**. Trọng âm rơi vào tiền tố: **AUF**stehen. Động từ không tách (frühstücken, duschen) chia bình thường. Một số động từ tách đổi nguyên âm: anfangen → er **fängt** an; fernsehen → er **sieht** fern.',
            examples: [
              ['Die Arbeit fängt um acht an.', 'Công việc bắt đầu lúc tám giờ.'],
              ['Kommst du mit?', 'Bạn đi cùng không?'],
            ],
            exercises: [
              choose('Der Film ___ um acht an.', ['fängt', 'fangt', 'anfängt'], 'fängt', { vi: 'Phim bắt đầu lúc tám giờ.' }),
              fill('Ich {hole} die Kinder um vier ab.', 'Tôi đón bọn trẻ lúc bốn giờ.'),
              choose('Er ___ am Abend fern.', ['sieht', 'seht', 'fernsieht'], 'sieht', { vi: 'Buổi tối anh ấy xem TV.' }),
            ],
          },
          {
            text_vi:
              'Đi cùng động từ khuyết thiếu (möchten, können…) thì động từ tách **viết liền** ở cuối câu: Ich möchte heute **einkaufen**. Câu hỏi có/không: động từ chia lên đầu, tiền tố vẫn ở cuối: **Rufst** du mich **an**?',
            examples: [
              ['Ich möchte früh aufstehen.', 'Tôi muốn dậy sớm.'],
              ['Räumst du dein Zimmer auf?', 'Bạn có dọn phòng không?'],
            ],
            exercises: [
              order('Ich / möchte / heute / einkaufen.', 'Hôm nay tôi muốn đi mua sắm.'),
              transform('Đổi thành câu hỏi có/không', 'Du rufst deine Mutter an.', ['Rufst du deine Mutter an?']),
            ],
          },
        ],
        mixed: [
          transform('Viết câu với chủ ngữ ich', 'aufstehen / um sieben', ['Ich stehe um sieben auf.', 'Ich stehe um sieben Uhr auf.']),
          translate('Tôi gọi điện cho mẹ tôi.', ['Ich rufe meine Mutter an.']),
          fill('Wann {kommst} du zurück?', 'Khi nào bạn quay về?'),
          choose('Ich ___ mein Zimmer auf.', ['räume', 'aufräume', 'räumen'], 'räume', { vi: 'Tôi dọn phòng của mình.' }),
          order('Wir / ziehen / eine Jacke / an.', 'Chúng tôi mặc áo khoác.'),
        ],
      },
      dialogue: {
        title_de: 'Mein Morgen',
        lines: [
          { speaker: 'A', de: 'Wann stehst du auf?', vi: 'Bạn dậy lúc mấy giờ?' },
          { speaker: 'B', de: 'Ich stehe um halb sieben auf. Der Wecker klingelt um sechs, aber ich bin noch müde.', vi: 'Mình dậy lúc sáu rưỡi. Báo thức reo lúc sáu giờ nhưng mình vẫn buồn ngủ.' },
          { speaker: 'A', de: 'Und dann?', vi: 'Rồi sao nữa?' },
          { speaker: 'B', de: 'Dann dusche ich und putze mir die Zähne.', vi: 'Rồi mình tắm và đánh răng.' },
          { speaker: 'A', de: 'Frühstückst du zu Hause?', vi: 'Bạn có ăn sáng ở nhà không?' },
          { speaker: 'B', de: 'Nein, ich trinke nur einen Kaffee. Um acht fängt die Arbeit an.', vi: 'Không, mình chỉ uống một ly cà phê. Tám giờ là bắt đầu làm việc.' },
          { speaker: 'A', de: 'Und am Abend?', vi: 'Còn buổi tối?' },
          { speaker: 'B', de: 'Ich kaufe ein, rufe meine Eltern an und sehe ein bisschen fern.', vi: 'Mình đi chợ, gọi điện cho bố mẹ và xem TV một chút.' },
        ],
        gloss: { müde: 'mệt, buồn ngủ', 'zu Hause': 'ở nhà', nur: 'chỉ' },
        questions: [
          mc('B dậy lúc mấy giờ?', ['6:30', '6:00', '7:30'], '6:30'),
          tf('B frühstückt zu Hause.', false, { explain: 'Nein, ich trinke nur einen Kaffee.' }),
          tf('Am Abend ruft B die Eltern an.', true),
          mc('Đồng hồ báo thức reo lúc mấy giờ?', ['6:00', '6:30', '8:00'], '6:00'),
        ],
        dictation: [0, 3],
      },
      writing_prompt_vi:
        'Viết 5 câu về buổi sáng và buổi tối của bạn, dùng ít nhất 3 động từ tách (aufstehen, anrufen, einkaufen, fernsehen…).',
    },
    {
      title_vi: 'Một ngày làm việc',
      goal_vi: 'Kể một ngày theo trình tự (zuerst, dann, danach), đúng vị trí động từ.',
      items: [
        'schlafen', 'gehen', 'machen', 'warten', 'Arbeit', 'Pause', 'Feierabend', 'Hausaufgabe', 'früh', 'spät', 'zuerst',
        'dann', 'danach', 'müde', 'wach', 'fertig', 'pünktlich', 'stressig',
        'Khung câu (Satzklammer)', 'Đảo ngữ: trạng từ đứng đầu',
        'Telefon', 'Kugelschreiber', 'Bleistift', 'holen', 'bringen', 'Vorwahl', 'auf Wiederhören',
      ],
      grammar: {
        point: 'satzklammer',
        sections: [
          {
            text_vi:
              'Quy tắc quan trọng nhất của câu tiếng Đức: **động từ chia luôn ở vị trí 2**. Vị trí 1 có thể là chủ ngữ, hoặc thời gian, nơi chốn…; khi đó **chủ ngữ đứng ngay sau động từ** (đảo ngữ): Am Morgen **trinke ich** Kaffee. Tiếng Việt không đảo ("Buổi sáng tôi uống"), nên người Việt hay viết sai thành "Am Morgen ich trinke".',
            table: 'Vị trí 1 | Vị trí 2 | Phần còn lại\nIch | trinke | am Morgen Kaffee.\nAm Morgen | trinke | ich Kaffee.\nDann | gehe | ich zur Arbeit.',
            examples: [
              ['Um acht gehe ich zur Arbeit.', 'Tám giờ tôi đi làm.'],
              ['Danach mache ich eine Pause.', 'Sau đó tôi nghỉ giải lao.'],
            ],
            exercises: [
              order('Am Morgen / trinke / ich / Kaffee.', 'Buổi sáng tôi uống cà phê.'),
              choose('Dann ___ zur Arbeit.', ['ich gehe', 'gehe ich'], 'gehe ich', { vi: 'Rồi tôi đi làm.' }),
              transform('Viết lại, bắt đầu bằng „Um fünf“', 'Ich habe um fünf Feierabend.', ['Um fünf habe ich Feierabend.']),
            ],
          },
          {
            text_vi:
              '**Khung câu (Satzklammer)**: khi câu có hai phần động từ, phần chia đứng **vị trí 2**, phần còn lại đứng **cuối câu**, mọi thứ khác nằm giữa như trong một cái khung. Gặp với động từ tách (Ich **rufe** dich morgen **an**) và với möchten (Ich **möchte** heute früh **schlafen**).',
            table: 'Vị trí 2 | Giữa | Cuối câu\nrufe | dich morgen | an\nmöchte | heute früh | schlafen\nfängt | um acht | an',
            examples: [
              ['Ich rufe dich morgen an.', 'Mai tôi gọi cho bạn.'],
              ['Wir möchten am Sonntag lange schlafen.', 'Chủ nhật chúng tôi muốn ngủ thật lâu.'],
            ],
            exercises: [
              order('Ich / rufe / dich / morgen / an.', 'Mai tôi gọi cho bạn.'),
              fill('Die Arbeit fängt um acht {an}.', 'Công việc bắt đầu lúc tám giờ.'),
              choose('Ich möchte heute früh ___.', ['schlafen', 'schlafe', 'schläft'], 'schlafen', { vi: 'Hôm nay tôi muốn ngủ sớm.' }),
            ],
          },
          {
            text_vi:
              'Kể trình tự: **zuerst** (trước tiên), **dann** (rồi), **danach** (sau đó). Chúng đứng vị trí 1, nên động từ theo ngay sau: **Zuerst dusche ich, dann frühstücke ich, danach gehe ich** zur Arbeit.',
            examples: [['Zuerst mache ich Hausaufgaben, dann sehe ich fern.', 'Trước tiên tôi làm bài tập, rồi tôi xem TV.']],
            exercises: [
              fill('Zuerst trinke ich Kaffee, dann {gehe} ich zur Arbeit.', 'Trước tiên tôi uống cà phê, rồi đi làm.'),
              order('Danach / mache / ich / eine Pause.', 'Sau đó tôi nghỉ giải lao.'),
            ],
          },
        ],
        mixed: [
          translate('Buổi tối tôi mệt.', ['Am Abend bin ich müde.', 'Ich bin am Abend müde.']),
          transform('Viết lại, bắt đầu bằng „Dann“', 'Ich gehe nach Hause.', ['Dann gehe ich nach Hause.']),
          choose('Heute ___ sehr lange.', ['ich arbeite', 'arbeite ich'], 'arbeite ich', { vi: 'Hôm nay tôi làm việc rất lâu.' }),
          order('Um fünf / habe / ich / Feierabend.', 'Năm giờ tôi tan làm.'),
          fill('Bist du {fertig}?', 'Bạn xong chưa?'),
        ],
      },
      dialogue: {
        title_de: 'Ein stressiger Tag',
        lines: [
          { speaker: 'A', de: 'Wie ist dein Tag heute?', vi: 'Hôm nay ngày của bạn thế nào?' },
          { speaker: 'B', de: 'Sehr stressig! Zuerst bringe ich die Kinder zur Schule.', vi: 'Bận lắm! Trước tiên mình đưa bọn trẻ đến trường.' },
          { speaker: 'A', de: 'Und dann?', vi: 'Rồi sao?' },
          { speaker: 'B', de: 'Dann gehe ich zur Arbeit. Um neun fängt die Arbeit an.', vi: 'Rồi mình đi làm. Chín giờ bắt đầu làm việc.' },
          { speaker: 'A', de: 'Machst du eine Pause?', vi: 'Bạn có nghỉ giải lao không?' },
          { speaker: 'B', de: 'Ja, um zwölf mache ich eine Pause. Danach arbeite ich bis fünf.', vi: 'Có, mười hai giờ mình nghỉ. Sau đó làm đến năm giờ.' },
          { speaker: 'A', de: 'Und nach der Arbeit?', vi: 'Còn sau giờ làm?' },
          { speaker: 'B', de: 'Ich warte auf den Bus und um sechs bin ich zu Hause. Am Abend bin ich immer müde.', vi: 'Mình chờ xe buýt và sáu giờ về đến nhà. Buổi tối lúc nào mình cũng mệt.' },
        ],
        gloss: { bringe: 'đưa (đi)', Schule: 'trường học', 'zu Hause': 'ở nhà', immer: 'luôn luôn' },
        questions: [
          mc('Trước tiên B làm gì?', ['đưa con đến trường', 'đi làm', 'uống cà phê'], 'đưa con đến trường'),
          mc('B làm việc đến mấy giờ?', ['5 giờ', '6 giờ', '12 giờ'], '5 giờ'),
          tf('B macht keine Pause.', false, { explain: 'Um zwölf mache ich eine Pause.' }),
          tf('Am Abend ist B müde.', true),
        ],
        dictation: [3, 5],
      },
      writing_prompt_vi:
        'Viết 5 câu kể một ngày làm việc hoặc đi học của bạn theo trình tự: zuerst, dann, danach, um … Uhr. Chú ý động từ ở vị trí 2.',
    },
    {
      title_vi: 'Bao lâu một lần?',
      goal_vi: 'Nói mình làm việc gì thường xuyên hay hiếm khi; phân biệt zu Hause và nach Hause.',
      items: [
        'spülen', 'waschen', 'Alltag', 'Haushalt', 'immer', 'meistens', 'oft', 'manchmal', 'selten', 'nie', 'schon', 'noch',
        'zu Hause', 'nach Hause', 'jeden Tag', 'am Wochenende',
      ],
      grammar: {
        point: 'haeufigkeit',
        sections: [
          {
            text_vi:
              'Trạng từ tần suất, từ nhiều đến ít: **immer** – **meistens** – **oft** – **manchmal** – **selten** – **nie**. Chúng thường đứng **ngay sau động từ chia**: Ich trinke **immer** Kaffee. Đứng đầu câu thì đảo ngữ: **Manchmal koche ich** am Abend.',
            table: 'Từ | Nghĩa\nimmer | luôn luôn\nmeistens | thường thì\noft | thường xuyên\nmanchmal | thỉnh thoảng\nselten | hiếm khi\nnie | không bao giờ',
            examples: [
              ['Ich komme nie zu spät.', 'Tôi không bao giờ đến muộn.'],
              ['Meistens esse ich zu Hause.', 'Thường thì tôi ăn ở nhà.'],
            ],
            exercises: [
              choose('Jeden Tag! Ich trinke ___ Kaffee am Morgen.', ['immer', 'nie', 'selten'], 'immer', { vi: 'Ngày nào cũng vậy! Sáng nào tôi cũng uống cà phê.' }),
              order('Manchmal / koche / ich / am Abend.', 'Thỉnh thoảng buổi tối tôi nấu ăn.'),
              fill('Ich sehe {selten} fern, nur zweimal im Monat.', 'Tôi hiếm khi xem TV, chỉ hai lần một tháng.'),
            ],
          },
          {
            text_vi:
              'Hỏi tần suất: **Wie oft …?** (Bao lâu một lần?) – **jeden Tag** (mỗi ngày), **am Wochenende**, **zweimal pro Woche**. **nie** đã là phủ định, không thêm nicht: Ich komme **nie** zu spät.',
            examples: [
              ['Wie oft gehst du einkaufen? – Zweimal pro Woche.', 'Bạn đi chợ bao lâu một lần? – Hai lần một tuần.'],
              ['Am Wochenende putze ich die Wohnung.', 'Cuối tuần tôi lau dọn căn hộ.'],
            ],
            exercises: [
              fill('Wie {oft} spülst du? – Jeden Tag.', 'Bạn rửa bát bao lâu một lần? – Mỗi ngày.'),
              choose('Ich esse ___ Fleisch. Ich bin Vegetarier.', ['nie', 'nicht nie'], 'nie', { vi: 'Tôi không bao giờ ăn thịt. Tôi ăn chay.' }),
              translate('Tôi học tiếng Đức mỗi ngày.', ['Ich lerne jeden Tag Deutsch.', 'Jeden Tag lerne ich Deutsch.']),
            ],
          },
          {
            text_vi:
              '**zu Hause** = ở nhà (vị trí); **nach Hause** = về nhà (hướng đi). Ich bin **zu Hause**. Ich gehe **nach Hause**. **schon** = đã, rồi; **noch** = vẫn, còn: Bist du **schon** wach? – Nein, ich schlafe **noch**.',
            examples: [
              ['Am Sonntag bleibe ich zu Hause.', 'Chủ nhật tôi ở nhà.'],
              ['Um sechs gehe ich nach Hause.', 'Sáu giờ tôi về nhà.'],
            ],
            exercises: [
              choose('Um sechs gehe ich ___.', ['zu Hause', 'nach Hause'], 'nach Hause', { vi: 'Sáu giờ tôi về nhà.' }),
              choose('Bist du schon wach? – Nein, ich schlafe ___.', ['noch', 'schon'], 'noch', { vi: 'Bạn dậy chưa? – Chưa, mình vẫn ngủ.' }),
            ],
          },
        ],
        mixed: [
          transform('Thêm „oft“ vào câu', 'Ich gehe spazieren.', ['Ich gehe oft spazieren.']),
          translate('Thỉnh thoảng tôi nấu ăn.', ['Manchmal koche ich.', 'Ich koche manchmal.']),
          fill('Wer macht bei euch den {Haushalt}?', 'Ở nhà bạn ai làm việc nhà?'),
          choose('Am Wochenende bin ich meistens ___.', ['zu Hause', 'nach Hause'], 'zu Hause', { vi: 'Cuối tuần thường thì tôi ở nhà.' }),
          order('Ich / wasche / am Samstag / meine Kleidung.', 'Thứ Bảy tôi giặt quần áo.'),
        ],
      },
      dialogue: {
        title_de: 'Wer macht den Haushalt?',
        lines: [
          { speaker: 'A', de: 'Wer macht bei euch den Haushalt?', vi: 'Ở nhà bạn ai làm việc nhà?' },
          { speaker: 'B', de: 'Meistens ich. Ich koche jeden Tag und spüle immer nach dem Essen.', vi: 'Thường là mình. Ngày nào mình cũng nấu ăn và luôn rửa bát sau bữa ăn.' },
          { speaker: 'A', de: 'Und dein Mann?', vi: 'Còn chồng bạn?' },
          { speaker: 'B', de: 'Er räumt manchmal auf und am Wochenende wäscht er die Kleidung.', vi: 'Thỉnh thoảng anh ấy dọn dẹp, cuối tuần thì giặt quần áo.' },
          { speaker: 'A', de: 'Putzt er auch?', vi: 'Anh ấy có lau nhà không?' },
          { speaker: 'B', de: 'Selten! Und er kocht nie.', vi: 'Hiếm lắm! Và anh ấy không bao giờ nấu ăn.' },
          { speaker: 'A', de: 'Bei uns ist es anders. Mein Mann kocht oft und ich putze.', vi: 'Nhà mình thì khác. Chồng mình hay nấu ăn, còn mình lau nhà.' },
          { speaker: 'B', de: 'Das ist gut. Das möchte ich auch!', vi: 'Hay đấy. Mình cũng muốn vậy!' },
        ],
        gloss: { wäscht: 'giặt (ngôi er)', uns: 'chúng tôi (bei uns = ở nhà tôi)', anders: 'khác' },
        questions: [
          mc('Ở nhà B, ai thường làm việc nhà?', ['B', 'chồng của B', 'cả hai như nhau'], 'B'),
          tf('Der Mann von B kocht oft.', false, { explain: 'Er kocht nie.' }),
          mc('Chồng B giặt quần áo khi nào?', ['cuối tuần', 'mỗi ngày', 'không bao giờ'], 'cuối tuần'),
          tf('Bei A kocht der Mann oft.', true),
        ],
        dictation: [4, 5],
      },
      writing_prompt_vi:
        'Viết 5 câu: bạn làm việc nhà nào, bao lâu một lần (immer, oft, manchmal, selten, nie, jeden Tag).',
    },
  ],
  test: {
    grammar: {
      trennbar: [
        fill('Ich {stehe} um sieben auf.', 'Tôi dậy lúc bảy giờ.'),
        order('Er / ruft / seine Mutter / an.', 'Anh ấy gọi điện cho mẹ.'),
        choose('Wir ___ am Samstag ein.', ['kaufen', 'einkaufen'], 'kaufen'),
        fill('Am Abend sehe ich {fern}.', 'Buổi tối tôi xem TV.'),
        choose('Der Kurs ___ um neun an.', ['fängt', 'anfängt', 'fangt'], 'fängt'),
        order('Ich / möchte / morgen / einkaufen.', 'Ngày mai tôi muốn đi mua sắm.'),
      ],
      satzklammer: [
        order('Am Abend / sehe / ich / fern.', 'Buổi tối tôi xem TV.'),
        choose('Um acht ___ zur Arbeit.', ['ich gehe', 'gehe ich'], 'gehe ich'),
        fill('Dann {frühstücke} ich.', 'Rồi tôi ăn sáng.'),
        order('Ich / rufe / dich / heute / an.', 'Hôm nay tôi gọi cho bạn.'),
        choose('Heute Abend ___ Freunde.', ['ich treffe', 'treffe ich'], 'treffe ich'),
        fill('Danach {mache} ich eine Pause.', 'Sau đó tôi nghỉ giải lao.'),
      ],
      haeufigkeit: [
        choose('Jeden Tag! Ich bin ___ pünktlich.', ['immer', 'nie'], 'immer'),
        choose('Ich gehe jetzt ___.', ['nach Hause', 'zu Hause'], 'nach Hause'),
        fill('Ich esse {meistens} zu Hause.', 'Thường thì tôi ăn ở nhà.'),
        order('Manchmal / gehe / ich / spazieren.', 'Thỉnh thoảng tôi đi dạo.'),
        choose('Er ist immer pünktlich. Er kommt ___ zu spät.', ['nie', 'oft'], 'nie'),
        fill('Ich schlafe {noch}.', 'Tôi vẫn đang ngủ.'),
      ],
    },
    reading: {
      title_de: 'Der Alltag von Familie Weber',
      text_de:
        'Herr und Frau Weber arbeiten beide. Der Wecker klingelt jeden Tag um sechs Uhr. Zuerst steht Herr Weber auf und macht das Frühstück. Dann weckt er die Kinder. Frau Weber duscht und zieht sich an. Um halb acht bringt Herr Weber die Kinder zur Schule. Frau Weber fängt um acht an und hat um vier Feierabend. Danach holt sie die Kinder ab. Am Abend kochen sie meistens zusammen und die Kinder machen ihre Hausaufgaben. Fernsehen gibt es nur am Wochenende. Am Samstag kaufen sie ein und am Sonntag bleiben alle lange im Bett.',
      gloss: {
        beide: 'cả hai',
        weckt: 'đánh thức',
        'zieht sich an': 'mặc quần áo',
        bringt: 'đưa',
        Schule: 'trường học',
        bleiben: 'ở lại',
        alle: 'tất cả mọi người',
      },
      questions: [
        mc('Ai làm bữa sáng?', ['ông Weber', 'bà Weber', 'bọn trẻ'], 'ông Weber'),
        tf('Frau Weber hat um vier Feierabend.', true),
        tf('Die Kinder sehen jeden Tag fern.', false, { explain: 'Fernsehen gibt es nur am Wochenende.' }),
        mc('Thứ Bảy gia đình làm gì?', ['đi mua sắm', 'ngủ nướng', 'dọn nhà'], 'đi mua sắm'),
      ],
    },
  },
});
