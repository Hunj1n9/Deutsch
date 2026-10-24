// A2 · 01 Kể chuyện đã qua — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a2-01',
  points: [
    {
      key: 'perfekt-unreg',
      rule_key: 'perfekt-partizip-stark-gemischt',
      category: 'tense',
      title_vi: 'Partizip II của động từ mạnh và động từ hỗn hợp',
      explanation_vi: 'Động từ mạnh: ge- … -en, thường đổi nguyên âm (gefunden, geholfen, geschrieben). Hỗn hợp: đổi nguyên âm nhưng đuôi -t (gedacht, gebracht, gewusst).',
    },
    {
      key: 'perfekt-trennbar',
      rule_key: 'perfekt-trennbar-ge',
      category: 'separable_verb',
      title_vi: 'Perfekt của động từ tách và không tách',
      explanation_vi: 'Động từ tách: -ge- chen giữa (aufgestanden, kennengelernt). Tiền tố be-/ver-/er- không có ge- (vergessen, verloren, bekommen).',
    },
    {
      key: 'zeitadverb',
      rule_key: 'zeitadverb-erzaehlen',
      category: 'other',
      title_vi: 'Trạng từ thời gian khi kể chuyện',
      explanation_vi: 'früher, damals, letztes Jahr, plötzlich, endlich, zuletzt… đứng đầu câu thì động từ vẫn ở vị trí 2: Damals gab es kein Internet.',
    },
  ],
  lessons: [
    {
      title_vi: 'Tuổi thơ',
      goal_vi: 'Kể về tuổi thơ: sinh ra và lớn lên ở đâu, đã làm gì, nhớ gì.',
      items: [
        'Kindheit', 'Jugend', 'Ferien', 'Dorf', 'Spielzeug', 'Erinnerung', 'Geschichte', 'erzählen', 'sich erinnern',
        'aufwachsen', 'denken', 'bringen', 'sehen', 'geboren werden', 'Als Kind', 'Weißt du noch?',
        'Perfekt: Partizip II của động từ bất quy tắc', 'Perfekt của động từ hỗn hợp',
      ],
      grammar: {
        point: 'perfekt-unreg',
        sections: [
          {
            text_vi:
              'Động từ **mạnh** có Partizip II đuôi **-en**, nguyên âm thường đổi theo nhóm: **i → u** (finden → gefunden, trinken → getrunken), **e → o** (helfen → geholfen, sprechen → gesprochen), **ei → ie** (schreiben → geschrieben, bleiben → geblieben). Học theo nhóm dễ nhớ hơn học từng từ.',
            table: 'Nhóm | Ví dụ\ni → u | finden → gefunden\ne → o | helfen → geholfen\nei → ie | schreiben → geschrieben\nkhông đổi | sehen → gesehen',
            examples: [
              ['Als Kind habe ich viele Bücher gelesen.', 'Hồi nhỏ tôi đã đọc nhiều sách.'],
              ['Oma hat uns Geschichten erzählt.', 'Bà đã kể chuyện cho chúng tôi.'],
            ],
            exercises: [
              fill('Ich habe das Buch {gelesen}.', 'Tôi đã đọc quyển sách.'),
              choose('Hast du den Schlüssel ___?', ['gefunden', 'gefinden', 'gefundet'], 'gefunden', { vi: 'Bạn tìm thấy chìa khóa chưa?' }),
              fill('Wir haben viel Wasser {getrunken}.', 'Chúng tôi đã uống nhiều nước.'),
            ],
          },
          {
            text_vi:
              'Động từ **hỗn hợp** đổi nguyên âm như động từ mạnh nhưng có đuôi **-t** như động từ yếu: denken → **gedacht**, bringen → **gebracht**, kennen → **gekannt**, wissen → **gewusst**. Nhóm này rất ít, hãy thuộc lòng.',
            table: 'Nguyên mẫu | Partizip II\ndenken | gedacht\nbringen | gebracht\nkennen | gekannt\nwissen | gewusst',
            examples: [
              ['Ich habe oft an dich gedacht.', 'Tôi đã hay nghĩ đến bạn.'],
              ['Er hat Blumen gebracht.', 'Anh ấy đã mang hoa đến.'],
            ],
            exercises: [
              choose('Ich habe an meine Kindheit ___.', ['gedacht', 'gedenkt', 'gedachten'], 'gedacht', { vi: 'Tôi đã nghĩ về tuổi thơ.' }),
              fill('Hast du das {gewusst}?', 'Bạn có biết chuyện đó không?'),
              choose('Er hat einen Kuchen ___.', ['gebracht', 'gebringt'], 'gebracht', { vi: 'Anh ấy đã mang một cái bánh đến.' }),
            ],
          },
          {
            text_vi:
              'Kể tuổi thơ: **Ich bin 2001 geboren.** (người còn sống dùng bin + geboren). **Ich bin in Da Lat aufgewachsen.** (lớn lên: dùng sein). **sich erinnern an** + Akkusativ: Ich **erinnere mich an** meine Oma. **Weißt du noch?** = Bạn còn nhớ không?',
            examples: [
              ['Ich erinnere mich gut an unser Dorf.', 'Tôi nhớ rõ ngôi làng của chúng tôi.'],
              ['Wo bist du aufgewachsen?', 'Bạn lớn lên ở đâu?'],
            ],
            exercises: [
              fill('Ich {bin} 1998 geboren.', 'Tôi sinh năm 1998.'),
              order('Ich / erinnere / mich / an / die Ferien.', 'Tôi nhớ những kỳ nghỉ.'),
            ],
          },
        ],
        mixed: [
          transform('Chuyển sang Perfekt', 'Oma erzählt eine Geschichte.', ['Oma hat eine Geschichte erzählt.']),
          transform('Chuyển sang Perfekt', 'Ich sehe den Film.', ['Ich habe den Film gesehen.']),
          translate('Tôi lớn lên ở một ngôi làng.', ['Ich bin in einem Dorf aufgewachsen.']),
          choose('Wir haben als Kinder viel ___.', ['gesungen', 'gesingt', 'gesangen'], 'gesungen', { vi: 'Hồi nhỏ chúng tôi đã hát rất nhiều.' }),
          fill('Was hast du {geschrieben}?', 'Bạn đã viết gì?'),
        ],
      },
      dialogue: {
        title_de: 'Weißt du noch?',
        lines: [
          { speaker: 'A', de: 'Weißt du noch, unser Dorf in der Kindheit?', vi: 'Bạn còn nhớ ngôi làng hồi nhỏ của chúng mình không?' },
          { speaker: 'B', de: 'Natürlich! Ich erinnere mich gut. Wir haben jeden Tag draußen gespielt.', vi: 'Tất nhiên! Mình nhớ rõ lắm. Ngày nào bọn mình cũng chơi ngoài trời.' },
          { speaker: 'A', de: 'Und Oma hat uns am Abend Geschichten erzählt.', vi: 'Còn bà thì tối nào cũng kể chuyện cho bọn mình.' },
          { speaker: 'B', de: 'Ja! Ich habe oft an diese Geschichten gedacht.', vi: 'Ừ! Mình hay nghĩ về những câu chuyện đó.' },
          { speaker: 'A', de: 'Hast du noch dein altes Spielzeug?', vi: 'Bạn còn giữ đồ chơi cũ không?' },
          { speaker: 'B', de: 'Nein, ich habe es meinem Sohn gegeben.', vi: 'Không, mình cho con trai rồi.' },
          { speaker: 'A', de: 'In den Ferien sind wir immer an den Fluss gegangen.', vi: 'Kỳ nghỉ nào bọn mình cũng ra sông.' },
          { speaker: 'B', de: 'Das war eine schöne Zeit. Wir waren glücklich.', vi: 'Thời đó đẹp thật. Bọn mình đã hạnh phúc.' },
        ],
        gloss: { altes: 'cũ', gegeben: 'đã cho', Fluss: 'con sông', glücklich: 'hạnh phúc' },
        questions: [
          tf('Die Kinder haben jeden Tag draußen gespielt.', true),
          mc('Ai kể chuyện vào buổi tối?', ['bà', 'mẹ', 'thầy giáo'], 'bà'),
          tf('B hat sein Spielzeug noch.', false, { explain: 'Ich habe es meinem Sohn gegeben.' }),
          mc('Kỳ nghỉ họ đi đâu?', ['ra sông', 'ra biển', 'lên núi'], 'ra sông'),
        ],
        dictation: [1, 2],
      },
      writing_prompt_vi:
        'Viết 5–6 câu về tuổi thơ của bạn: bạn sinh ra và lớn lên ở đâu, đã làm gì, nhớ gì (Perfekt với động từ bất quy tắc).',
    },
    {
      title_vi: 'Chuyện gì đã xảy ra?',
      goal_vi: 'Kể một chuyện bất ngờ hay rủi ro; dùng đúng Perfekt của động từ tách và không tách.',
      items: [
        'Unfall', 'Überraschung', 'Moment', 'Umzug', 'Lehre', 'passieren', 'vergessen', 'verlieren', 'bekommen', 'laufen',
        'fallen', 'rennen', 'umziehen', 'kennenlernen', 'sterben', 'Perfekt của động từ tách',
        'Perfekt với sein: chuyển động và thay đổi',
      ],
      grammar: {
        point: 'perfekt-trennbar',
        sections: [
          {
            text_vi:
              'Động từ tách ở Perfekt: **-ge-** chen giữa tiền tố và gốc, viết liền: auf**ge**standen, ein**ge**kauft, um**ge**zogen, kennen**ge**lernt. Tiền tố không tách (be-, ver-, er-) thì **không có ge-**: vergessen → **vergessen**, verlieren → **verloren**, bekommen → **bekommen**.',
            table: 'Nguyên mẫu | Partizip II\naufstehen | aufgestanden\nkennenlernen | kennengelernt\nvergessen | vergessen\nbekommen | bekommen',
            examples: [
              ['Wo habt ihr euch kennengelernt?', 'Các bạn quen nhau ở đâu?'],
              ['Ich habe meinen Schlüssel vergessen.', 'Tôi để quên chìa khóa.'],
            ],
            exercises: [
              fill('Er ist um sechs {aufgestanden}.', 'Anh ấy đã dậy lúc sáu giờ.'),
              choose('Ich habe mein Handy ___.', ['verloren', 'geverloren', 'verlort'], 'verloren', { vi: 'Tôi đã làm mất điện thoại.' }),
              fill('Wir haben uns im Kurs {kennengelernt}.', 'Chúng tôi đã quen nhau ở lớp học.'),
            ],
          },
          {
            text_vi:
              'Nhắc lại: động từ **di chuyển** hoặc **thay đổi trạng thái** dùng **sein**: Ich **bin** umgezogen, gelaufen, gefallen, gerannt. **passieren** (xảy ra) và **sterben** (qua đời) cũng dùng sein: Was **ist** passiert? Mein Opa **ist** gestorben.',
            examples: [
              ['Was ist passiert? – Ich bin vom Fahrrad gefallen.', 'Chuyện gì vậy? – Tôi bị ngã xe đạp.'],
              ['Wir sind zum Bus gerannt.', 'Chúng tôi đã chạy đến xe buýt.'],
            ],
            exercises: [
              choose('Was ___ passiert?', ['ist', 'hat'], 'ist', { vi: 'Chuyện gì đã xảy ra?' }),
              choose('Wir ___ 2015 nach Hanoi umgezogen.', ['sind', 'haben'], 'sind', { vi: 'Năm 2015 chúng tôi đã chuyển đến Hà Nội.' }),
              fill('Das Kind {ist} schnell gelaufen.', 'Đứa trẻ đã chạy nhanh.'),
            ],
          },
          {
            text_vi:
              '**bekommen** = nhận được, **không phải** "trở thành" (dễ nhầm với become trong tiếng Anh): Ich habe ein Geschenk **bekommen**. "Trở thành" là **werden**.',
            examples: [['Ich habe eine E-Mail bekommen.', 'Tôi đã nhận được một email.']],
            exercises: [
              choose('Ich habe zum Geburtstag ein Fahrrad ___.', ['bekommen', 'geworden'], 'bekommen', { vi: 'Sinh nhật tôi được tặng một chiếc xe đạp.' }),
              translate('Tôi đã quên chìa khóa.', ['Ich habe den Schlüssel vergessen.', 'Ich habe meinen Schlüssel vergessen.']),
            ],
          },
        ],
        mixed: [
          transform('Chuyển sang Perfekt', 'Ich ziehe nach Berlin um.', ['Ich bin nach Berlin umgezogen.']),
          transform('Chuyển sang Perfekt', 'Wir lernen uns kennen.', ['Wir haben uns kennengelernt.']),
          choose('Er ___ vom Stuhl gefallen.', ['ist', 'hat'], 'ist', { vi: 'Anh ấy bị ngã khỏi ghế.' }),
          translate('Chuyện gì đã xảy ra?', ['Was ist passiert?']),
          order('Gestern / hatte / ich / einen Unfall.', 'Hôm qua tôi bị tai nạn.'),
        ],
      },
      dialogue: {
        title_de: 'Was ist passiert?',
        lines: [
          { speaker: 'A', de: 'Was ist passiert? Dein Arm!', vi: 'Có chuyện gì vậy? Tay bạn kìa!' },
          { speaker: 'B', de: 'Ich hatte gestern einen Unfall. Ich bin vom Fahrrad gefallen.', vi: 'Hôm qua mình bị tai nạn. Mình ngã xe đạp.' },
          { speaker: 'A', de: 'Oh nein! Wie ist das passiert?', vi: 'Ôi không! Sao lại thế?' },
          { speaker: 'B', de: 'Ich war spät und bin schnell gefahren. Plötzlich ist eine Katze über die Straße gelaufen.', vi: 'Mình bị muộn nên đi nhanh. Đột nhiên một con mèo chạy qua đường.' },
          { speaker: 'A', de: 'Und dann?', vi: 'Rồi sao?' },
          { speaker: 'B', de: 'Ich habe gebremst und bin gefallen. Mein Handy habe ich auch verloren.', vi: 'Mình phanh lại rồi ngã. Mình còn làm mất điện thoại nữa.' },
          { speaker: 'A', de: 'Hast du es gefunden?', vi: 'Bạn tìm thấy chưa?' },
          { speaker: 'B', de: 'Nein. Aber ein Mann hat mir geholfen und mich nach Hause gebracht.', vi: 'Chưa. Nhưng có một người đàn ông đã giúp và đưa mình về nhà.' },
        ],
        gloss: { plötzlich: 'đột nhiên', gebremst: 'đã phanh', Handy: 'điện thoại di động' },
        questions: [
          mc('Hôm qua B bị gì?', ['ngã xe đạp', 'ốm', 'mất việc'], 'ngã xe đạp'),
          tf('Ein Hund ist über die Straße gelaufen.', false, { explain: 'Eine Katze ist über die Straße gelaufen.' }),
          tf('B hat sein Handy verloren.', true),
          mc('Ai đã giúp B?', ['một người đàn ông', 'một người bạn', 'cảnh sát'], 'một người đàn ông'),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Kể một chuyện bất ngờ hoặc rủi ro đã xảy ra với bạn (5–6 câu): chuyện gì, khi nào, bạn đã làm gì. Dùng Perfekt, chú ý haben/sein và động từ tách.',
    },
    {
      title_vi: 'Ngày xưa và bây giờ',
      goal_vi: 'Kể chuyện có trình tự thời gian và cảm xúc: früher, damals, plötzlich, endlich…',
      items: [
        'Vergangenheit', 'Erlebnis', 'feiern', 'früher', 'damals', 'letztes Jahr', 'vor kurzem', 'plötzlich', 'endlich',
        'zuletzt', 'einmal', 'vorgestern', 'traurig', 'glücklich', 'schrecklich', 'wunderbar', 'aufgeregt', 'anstrengend',
        'Es war einmal',
      ],
      grammar: {
        point: 'zeitadverb',
        sections: [
          {
            text_vi:
              'Kể chuyện cần trạng từ thời gian: **früher** (ngày trước), **damals** (hồi đó), **letztes Jahr** (năm ngoái), **vorgestern** (hôm kia), **vor kurzem** (cách đây không lâu). Đứng đầu câu thì động từ vẫn ở vị trí 2: **Damals gab** es kein Internet. **Früher hatte** ich lange Haare.',
            examples: [
              ['Früher habe ich in einem Dorf gewohnt.', 'Ngày trước tôi sống ở một ngôi làng.'],
              ['Vor kurzem bin ich umgezogen.', 'Cách đây không lâu tôi đã chuyển nhà.'],
            ],
            exercises: [
              order('Damals / gab / es / kein Internet.', 'Hồi đó không có Internet.'),
              choose('___ habe ich in Hue gewohnt, jetzt wohne ich in Hanoi.', ['Früher', 'Morgen', 'Endlich'], 'Früher', { vi: 'Ngày trước tôi sống ở Huế, giờ tôi sống ở Hà Nội.' }),
              fill('{Letztes} Jahr war ich in Deutschland.', 'Năm ngoái tôi ở Đức.'),
            ],
          },
          {
            text_vi:
              'Dẫn dắt câu chuyện: **zuerst** – **dann** – **plötzlich** (đột nhiên) – **endlich** (cuối cùng, sau khi chờ lâu) – **zuletzt** (sau chót). **einmal** = có một lần: Ich war **einmal** in Berlin. Truyện cổ tích mở đầu bằng **Es war einmal …** (Ngày xửa ngày xưa…).',
            examples: [
              ['Plötzlich hat das Telefon geklingelt.', 'Đột nhiên điện thoại reo.'],
              ['Endlich bist du da!', 'Cuối cùng bạn cũng đến!'],
            ],
            exercises: [
              choose('Wir haben zwei Stunden gewartet. ___ ist der Bus gekommen.', ['Endlich', 'Plötzlich', 'Früher'], 'Endlich', { vi: 'Chúng tôi chờ hai tiếng. Cuối cùng xe buýt cũng đến.' }),
              choose('Alles war ruhig. ___ hat das Telefon geklingelt.', ['Plötzlich', 'Endlich', 'Zuletzt'], 'Plötzlich', { vi: 'Mọi thứ yên lặng. Đột nhiên điện thoại reo.' }),
              fill('Ich war {einmal} in Paris.', 'Tôi đã từng đến Paris một lần.'),
            ],
          },
          {
            text_vi:
              'Cảm xúc khi kể: **traurig** (buồn), **glücklich** (hạnh phúc), **aufgeregt** (hồi hộp), **schrecklich** (khủng khiếp), **wunderbar** (tuyệt vời), **anstrengend** (vất vả). Sau war, tính từ không đổi đuôi: Der Tag **war** anstrengend.',
            examples: [['Vor der Prüfung war ich sehr aufgeregt.', 'Trước kỳ thi tôi rất hồi hộp.']],
            exercises: [
              fill('Der Umzug war sehr {anstrengend}.', 'Chuyến chuyển nhà rất vất vả.'),
              translate('Hồi đó chúng tôi rất hạnh phúc.', ['Damals waren wir sehr glücklich.', 'Wir waren damals sehr glücklich.']),
            ],
          },
        ],
        mixed: [
          transform('Viết lại, bắt đầu bằng „Früher“', 'Ich habe viel Fußball gespielt.', ['Früher habe ich viel Fußball gespielt.']),
          choose('Zuerst haben wir getanzt, ___ haben wir Kuchen gegessen.', ['zuletzt', 'früher', 'damals'], 'zuletzt', { vi: 'Đầu tiên chúng tôi nhảy, cuối cùng chúng tôi ăn bánh.' }),
          translate('Hôm kia tôi đã đi xem phim.', ['Vorgestern war ich im Kino.', 'Vorgestern bin ich ins Kino gegangen.', 'Ich war vorgestern im Kino.']),
          fill('Wir haben bis Mitternacht {gefeiert}.', 'Chúng tôi đã tiệc tùng đến nửa đêm.'),
          order('Vor kurzem / habe / ich / geheiratet.', 'Cách đây không lâu tôi đã kết hôn.'),
        ],
      },
      dialogue: {
        title_de: 'Früher und heute',
        lines: [
          { speaker: 'A', de: 'Opa, wie war dein Leben früher?', vi: 'Ông ơi, ngày xưa cuộc sống của ông thế nào?' },
          { speaker: 'B', de: 'Damals war alles anders. Es gab kein Internet und kein Handy.', vi: 'Hồi đó mọi thứ khác lắm. Không có Internet, không có điện thoại di động.' },
          { speaker: 'A', de: 'Wirklich? Was habt ihr am Abend gemacht?', vi: 'Thật ạ? Buổi tối ông bà làm gì?' },
          { speaker: 'B', de: 'Wir haben zusammen gesungen und Geschichten erzählt. Das war wunderbar.', vi: 'Cả nhà hát cùng nhau và kể chuyện. Tuyệt lắm.' },
          { speaker: 'A', de: 'Und wann bist du nach Deutschland gekommen?', vi: 'Thế ông sang Đức khi nào?' },
          { speaker: 'B', de: 'Im Jahr 1990. Die Reise war lang und anstrengend. Ich war sehr aufgeregt.', vi: 'Năm 1990. Chuyến đi dài và vất vả. Ông hồi hộp lắm.' },
          { speaker: 'A', de: 'Warst du glücklich hier?', vi: 'Ông có vui ở đây không?' },
          { speaker: 'B', de: 'Zuerst war ich oft traurig. Aber dann habe ich deine Oma kennengelernt!', vi: 'Lúc đầu ông hay buồn. Nhưng rồi ông gặp bà cháu!' },
        ],
        gloss: { Opa: 'ông', Leben: 'cuộc sống', gab: 'đã có (es gab)', Handy: 'điện thoại di động', Oma: 'bà' },
        questions: [
          mc('Hồi đó không có gì?', ['Internet và điện thoại di động', 'sách', 'tàu hỏa'], 'Internet và điện thoại di động'),
          tf('Opa ist 1990 nach Deutschland gekommen.', true),
          tf('Die Reise war kurz und einfach.', false, { explain: 'Die Reise war lang und anstrengend.' }),
          mc('Điều gì làm ông vui lên?', ['gặp bà', 'tìm được việc', 'có Internet'], 'gặp bà'),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi:
        'So sánh ngày xưa và bây giờ của bạn (5–6 câu): früher, damals, jetzt; kể cả cảm xúc (glücklich, traurig, aufgeregt…).',
    },
  ],
  test: {
    grammar: {
      'perfekt-unreg': [
        fill('Ich habe den Brief {geschrieben}.', 'Tôi đã viết lá thư.'),
        choose('Hast du das ___?', ['gewusst', 'gewisst', 'gewissen'], 'gewusst'),
        choose('Er hat mir ___.', ['geholfen', 'gehelft'], 'geholfen'),
        fill('Wir haben an dich {gedacht}.', 'Chúng tôi đã nghĩ đến bạn.'),
        order('Oma / hat / eine Geschichte / erzählt.', 'Bà đã kể một câu chuyện.'),
        choose('Ich habe den Film schon ___.', ['gesehen', 'gesieht'], 'gesehen'),
      ],
      'perfekt-trennbar': [
        fill('Ich bin um sieben {aufgestanden}.', 'Tôi đã dậy lúc bảy giờ.'),
        choose('Wo habt ihr euch ___?', ['kennengelernt', 'gekennenlernt'], 'kennengelernt'),
        choose('Ich habe meinen Pass ___.', ['vergessen', 'gevergessen'], 'vergessen'),
        choose('Was ___ passiert?', ['ist', 'hat'], 'ist'),
        fill('Wir sind nach Köln {umgezogen}.', 'Chúng tôi đã chuyển đến Köln.'),
        order('Ich / habe / ein Geschenk / bekommen.', 'Tôi đã nhận được một món quà.'),
      ],
      zeitadverb: [
        choose('___ gab es kein Handy.', ['Damals', 'Morgen'], 'Damals'),
        order('Früher / hatte / ich / lange Haare.', 'Ngày trước tôi để tóc dài.'),
        choose('Wir haben lange gewartet. ___ ist er gekommen!', ['Endlich', 'Plötzlich'], 'Endlich'),
        fill('{Letztes} Jahr bin ich umgezogen.', 'Năm ngoái tôi đã chuyển nhà.'),
        choose('Ich war nur ___ in Wien.', ['einmal', 'damals'], 'einmal'),
        order('Plötzlich / hat / das Telefon / geklingelt.', 'Đột nhiên điện thoại reo.'),
      ],
    },
    reading: {
      title_de: 'Die Geschichte meiner Oma',
      text_de:
        'Meine Oma Hoa ist 1950 in einem kleinen Dorf in der Nähe von Hue geboren. Sie ist mit sechs Geschwistern aufgewachsen. Damals war das Leben schwer: Die Familie hatte wenig Geld und die Kinder mussten früh arbeiten. Trotzdem erinnert sich Oma gern an ihre Kindheit. Am Abend haben alle zusammen gegessen und der Vater hat Geschichten erzählt. Mit achtzehn ist sie nach Hue umgezogen und hat eine Lehre als Schneiderin gemacht. Dort hat sie meinen Opa kennengelernt. Letztes Jahr ist Opa leider gestorben. Oma war sehr traurig, aber jetzt wohnt sie bei uns und ist wieder glücklich.',
      gloss: { mussten: 'đã phải', trotzdem: 'dù vậy', Schneiderin: 'thợ may (nữ)', 'bei uns': 'ở nhà chúng tôi' },
      questions: [
        tf('Oma ist in Hue geboren.', false, { explain: 'Sie ist in einem Dorf in der Nähe von Hue geboren.' }),
        mc('Bà có mấy anh chị em?', ['6', '5', '7'], '6'),
        mc('Bà đã học nghề gì?', ['thợ may', 'giáo viên', 'y tá'], 'thợ may'),
        tf('Oma wohnt jetzt allein.', false, { explain: 'Jetzt wohnt sie bei uns.' }),
        tf('Oma erinnert sich gern an ihre Kindheit.', true),
      ],
    },
  },
});
