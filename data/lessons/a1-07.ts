// A1 · 07 Thời gian rảnh và sở thích — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a1-07',
  points: [
    {
      key: 'gern',
      rule_key: 'gern-lieber-am-liebsten',
      category: 'other',
      title_vi: 'gern – lieber – am liebsten và mögen',
      explanation_vi: 'Động từ + gern = thích làm gì; so sánh: gern → lieber → am liebsten. mögen (ich mag) đi với danh từ.',
    },
    {
      key: 'modal',
      rule_key: 'modalverb-infinitiv-ende',
      category: 'verb_position',
      title_vi: 'können, wollen + động từ nguyên mẫu cuối câu',
      explanation_vi: 'Động từ khuyết thiếu chia ở vị trí 2 (ich kann, er will), động từ chính ở nguyên mẫu cuối câu.',
    },
    {
      key: 'nicht',
      rule_key: 'nicht-position',
      category: 'other',
      title_vi: 'Vị trí của nicht; nicht hay kein',
      explanation_vi: 'nicht phủ định cả câu đứng cuối câu hoặc trước phần động từ cuối; đứng trước tính từ, nơi chốn. Danh từ không mạo từ/có ein dùng kein.',
    },
    {
      key: 'praep-akk',
      rule_key: 'praep-akkusativ',
      category: 'case',
      title_vi: 'Giới từ đi với Akkusativ: für, ohne, durch, gegen, um',
      explanation_vi: 'Sau für, ohne, durch, gegen, um luôn là Akkusativ: für den Vater, ohne einen Hund, durch den Park, um das Haus.',
    },
  ],
  lessons: [
    {
      title_vi: 'Sở thích',
      goal_vi: 'Nói mình thích làm gì, thích gì hơn và thích nhất điều gì.',
      items: [
        'Freizeit', 'Hobby', 'Sport', 'Fußball', 'Musik', 'Lied', 'Gitarre', 'Klavier', 'Buch', 'spielen', 'lesen', 'hören',
        'tanzen', 'singen', 'malen', 'fotografieren', 'mögen', 'lieber', 'am liebsten', 'gern – lieber – am liebsten',
      ],
      grammar: {
        point: 'gern',
        sections: [
          {
            text_vi:
              'Nói sở thích: động từ + **gern**: Ich lese **gern**. (Tôi thích đọc.) Phủ định: Ich tanze **nicht gern**. So sánh: **gern → lieber → am liebsten** (thích → thích hơn → thích nhất). Không nói "mehr gern" hay "gerner".',
            table: 'Mức độ | Ví dụ\ngern | Ich spiele gern Fußball.\nlieber | Ich spiele lieber Gitarre.\nam liebsten | Am liebsten lese ich.',
            examples: [
              ['Ich höre gern Musik, aber ich lese lieber.', 'Tôi thích nghe nhạc, nhưng thích đọc sách hơn.'],
              ['Was machst du am liebsten?', 'Bạn thích làm gì nhất?'],
            ],
            exercises: [
              choose('Ich trinke gern Kaffee, aber ___ Tee.', ['lieber', 'am liebsten', 'gern'], 'lieber', { vi: 'Tôi thích cà phê nhưng thích trà hơn.' }),
              fill('{Am liebsten} spiele ich Gitarre.', 'Tôi thích chơi ghi-ta nhất.'),
              order('Ich / tanze / nicht / gern.', 'Tôi không thích nhảy.'),
            ],
          },
          {
            text_vi:
              '**mögen** = thích, đi với **danh từ**: Ich **mag** Jazz. Chia bất quy tắc: ich **mag**, du **magst**, er **mag**, wir **mögen**, ihr **mögt**. Phân biệt: **gern** đi với động từ (Ich lese gern), **mögen** đi với danh từ (Ich mag Bücher).',
            table: 'Đại từ | mögen\nich | mag\ndu | magst\ner/sie/es | mag\nwir | mögen\nihr | mögt\nsie/Sie | mögen',
            examples: [['Magst du Musik? – Ja, ich mag Rock.', 'Bạn thích nhạc không? – Có, tôi thích nhạc rock.']],
            exercises: [
              fill('Ich {mag} das Lied.', 'Tôi thích bài hát này.'),
              choose('___ du Fußball?', ['Magst', 'Mag', 'Mögt'], 'Magst', { vi: 'Bạn thích bóng đá không?' }),
              choose('Ich ___ gern Bücher.', ['lese', 'mag'], 'lese', { vi: 'Tôi thích đọc sách.', explain: 'gern đi với động từ: Ich lese gern.' }),
            ],
          },
          {
            text_vi:
              '**spielen** dùng cho thể thao và nhạc cụ: Fußball spielen, Gitarre spielen, Klavier spielen. **lesen** đổi nguyên âm: du **liest**, er **liest**. Hỏi sở thích: **Was ist dein Hobby?** / **Was machst du in der Freizeit?**',
            examples: [
              ['Mein Bruder spielt Klavier.', 'Anh trai tôi chơi piano.'],
              ['Was machst du in der Freizeit? – Ich lese.', 'Lúc rảnh bạn làm gì? – Tôi đọc sách.'],
            ],
            exercises: [
              fill('Sie {liest} gern Romane.', 'Cô ấy thích đọc tiểu thuyết.'),
              translate('Bạn làm gì lúc rảnh?', ['Was machst du in der Freizeit?']),
            ],
          },
        ],
        mixed: [
          transform('Thay gern bằng lieber', 'Ich höre gern Musik.', ['Ich höre lieber Musik.']),
          translate('Tôi thích chơi bóng đá.', ['Ich spiele gern Fußball.']),
          choose('Was machst du ___? – Malen!', ['am liebsten', 'am lieber'], 'am liebsten', { vi: 'Bạn thích làm gì nhất? – Vẽ!' }),
          fill('Er {mag} keinen Sport.', 'Anh ấy không thích thể thao.'),
          order('Am liebsten / singe / ich.', 'Tôi thích hát nhất.'),
        ],
      },
      dialogue: {
        title_de: 'Hobbys',
        lines: [
          { speaker: 'A', de: 'Was machst du gern in der Freizeit?', vi: 'Lúc rảnh bạn thích làm gì?' },
          { speaker: 'B', de: 'Ich lese gern und ich höre viel Musik.', vi: 'Mình thích đọc sách và nghe nhạc nhiều.' },
          { speaker: 'A', de: 'Spielst du ein Instrument?', vi: 'Bạn có chơi nhạc cụ không?' },
          { speaker: 'B', de: 'Ja, ich spiele Gitarre. Und du?', vi: 'Có, mình chơi ghi-ta. Còn bạn?' },
          { speaker: 'A', de: 'Ich spiele Klavier, aber am liebsten male ich.', vi: 'Mình chơi piano, nhưng thích vẽ nhất.' },
          { speaker: 'B', de: 'Und Sport? Magst du Fußball?', vi: 'Còn thể thao? Bạn thích bóng đá không?' },
          { speaker: 'A', de: 'Nein, Fußball mag ich nicht. Ich tanze lieber.', vi: 'Không, mình không thích bóng đá. Mình thích nhảy hơn.' },
          { speaker: 'B', de: 'Ich tanze nicht gern, aber ich singe gern!', vi: 'Mình không thích nhảy, nhưng thích hát!' },
        ],
        gloss: { Instrument: 'nhạc cụ' },
        questions: [
          mc('B chơi nhạc cụ gì?', ['ghi-ta', 'piano', 'không chơi'], 'ghi-ta'),
          mc('A thích làm gì nhất?', ['vẽ', 'chơi piano', 'nhảy'], 'vẽ'),
          tf('A mag Fußball.', false),
          tf('B singt gern.', true),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi: 'Viết 5 câu về sở thích của bạn: gern, lieber, am liebsten, và mögen + danh từ.',
    },
    {
      title_vi: 'Bạn biết làm gì?',
      goal_vi: 'Nói mình biết làm gì (können) và muốn làm gì (wollen) vào cuối tuần.',
      items: [
        'schwimmen', 'wandern', 'joggen', 'Fahrrad', 'Schwimmbad', 'Park', 'Verein', 'draußen', 'zweimal', 'können',
        'wollen', 'spazieren gehen', 'zusammen mit', 'Động từ khuyết thiếu + động từ nguyên mẫu cuối câu',
      ],
      grammar: {
        point: 'modal',
        sections: [
          {
            text_vi:
              '**können** (có thể; biết làm) và **wollen** (muốn, mạnh hơn möchten) là **động từ khuyết thiếu**. Ngôi ich và er/sie/es giống nhau và không có đuôi: ich **kann**, er **kann**; ich **will**, er **will**.',
            table: 'Đại từ | können | wollen\nich | kann | will\ndu | kannst | willst\ner/sie/es | kann | will\nwir | können | wollen\nihr | könnt | wollt\nsie/Sie | können | wollen',
            examples: [
              ['Ich kann gut schwimmen.', 'Tôi bơi giỏi.'],
              ['Wir wollen am Samstag wandern.', 'Thứ Bảy chúng tôi muốn đi bộ đường dài.'],
            ],
            exercises: [
              fill('Er {kann} nicht schwimmen.', 'Anh ấy không biết bơi.'),
              choose('___ du Fahrrad fahren?', ['Kannst', 'Kann', 'Könnt'], 'Kannst', { vi: 'Bạn biết đi xe đạp không?' }),
              fill('Wir {wollen} heute joggen.', 'Hôm nay chúng tôi muốn chạy bộ.'),
            ],
          },
          {
            text_vi:
              'Động từ chính **luôn ở cuối câu**, dạng nguyên mẫu: Ich kann gut **schwimmen**. Câu hỏi: **Kannst** du Gitarre **spielen**? Tiếng Việt nói thẳng "Tôi có thể bơi", tiếng Đức đẩy "bơi" xuống cuối câu (khung câu).',
            examples: [
              ['Kannst du am Sonntag mitkommen?', 'Chủ nhật bạn đi cùng được không?'],
              ['Ich will im Sommer im Park joggen.', 'Mùa hè tôi muốn chạy bộ trong công viên.'],
            ],
            exercises: [
              order('Ich / kann / gut / schwimmen.', 'Tôi bơi giỏi.'),
              order('Willst / du / im Park / joggen?', 'Bạn muốn chạy bộ trong công viên không?'),
              choose('Wir wollen am Wochenende ___.', ['wandern', 'wandern wir', 'wandert'], 'wandern', { vi: 'Cuối tuần chúng tôi muốn đi bộ đường dài.' }),
            ],
          },
          {
            text_vi:
              'Số lần: einmal, **zweimal**, dreimal **pro Woche / im Monat**. **draußen** = ngoài trời. **zusammen mit** = cùng với: zusammen mit **meiner** Schwester, zusammen mit **meinem** Bruder (đuôi -er/-em là Dativ, sẽ học ở chặng 8).',
            examples: [
              ['Ich schwimme zweimal pro Woche.', 'Tôi bơi hai lần một tuần.'],
              ['Heute spielen die Kinder draußen.', 'Hôm nay bọn trẻ chơi ngoài trời.'],
            ],
            exercises: [
              fill('Ich jogge {zweimal} pro Woche.', 'Tôi chạy bộ hai lần một tuần.'),
              translate('Tôi biết chơi ghi-ta.', ['Ich kann Gitarre spielen.']),
            ],
          },
        ],
        mixed: [
          transform('Thêm „können“', 'Ich schwimme gut.', ['Ich kann gut schwimmen.']),
          transform('Thêm „wollen“', 'Wir wandern am Samstag.', ['Wir wollen am Samstag wandern.']),
          choose('Mein Sohn ___ schon Fahrrad fahren.', ['kann', 'kannst', 'können'], 'kann', { vi: 'Con trai tôi đã biết đi xe đạp.' }),
          translate('Chúng tôi muốn đi dạo.', ['Wir wollen spazieren gehen.']),
          fill('Ich spiele in einem {Verein}.', 'Tôi chơi trong một câu lạc bộ.'),
        ],
      },
      dialogue: {
        title_de: 'Kannst du schwimmen?',
        lines: [
          { speaker: 'A', de: 'Kannst du schwimmen?', vi: 'Bạn biết bơi không?' },
          { speaker: 'B', de: 'Ja, ich kann gut schwimmen. Ich gehe zweimal pro Woche ins Schwimmbad.', vi: 'Có, mình bơi giỏi. Mỗi tuần mình đi bể bơi hai lần.' },
          { speaker: 'A', de: 'Toll! Ich kann nicht gut schwimmen.', vi: 'Tuyệt! Mình bơi không giỏi.' },
          { speaker: 'B', de: 'Willst du am Samstag mitkommen?', vi: 'Thứ Bảy bạn muốn đi cùng không?' },
          { speaker: 'A', de: 'Am Samstag will ich wandern, zusammen mit meinem Bruder.', vi: 'Thứ Bảy mình muốn đi bộ đường dài cùng anh trai.' },
          { speaker: 'B', de: 'Und am Sonntag? Wir können im Park joggen.', vi: 'Còn Chủ nhật? Mình có thể chạy bộ ở công viên.' },
          { speaker: 'A', de: 'Gute Idee! Das Wetter soll schön sein.', vi: 'Ý hay đấy! Nghe nói thời tiết sẽ đẹp.' },
          { speaker: 'B', de: 'Super, dann joggen wir draußen!', vi: 'Tuyệt, vậy mình chạy bộ ngoài trời!' },
        ],
        gloss: { 'Gute Idee': 'ý hay', Wetter: 'thời tiết', soll: 'nghe nói sẽ', super: 'tuyệt' },
        questions: [
          mc('B đi bơi bao lâu một lần?', ['2 lần một tuần', 'mỗi ngày', '1 lần một tháng'], '2 lần một tuần'),
          tf('A kann gut schwimmen.', false, { explain: 'Ich kann nicht gut schwimmen.' }),
          mc('Thứ Bảy A làm gì?', ['đi bộ đường dài với anh trai', 'đi bơi', 'chạy bộ'], 'đi bộ đường dài với anh trai'),
          tf('Am Sonntag joggen sie im Park.', true),
        ],
        dictation: [2, 4],
      },
      writing_prompt_vi:
        'Viết 5 câu: bạn biết làm gì và không biết làm gì (können), cuối tuần này bạn muốn làm gì (wollen). Động từ chính ở cuối câu.',
    },
    {
      title_vi: 'Rủ nhau đi chơi',
      goal_vi: 'Rủ ai đó đi chơi, nhận lời hoặc từ chối; đặt nicht đúng chỗ.',
      items: [
        'Film', 'Kino', 'Konzert', 'Museum', 'Party', 'Spiel', 'Spaß', 'Lust', 'treffen', 'einladen', 'langweilig',
        'interessant', 'spannend', 'toll', 'lustig', 'Keine Zeit', 'Wie wäre es mit', 'Gute Idee', 'Leider nicht',
        'nicht: vị trí trong câu',
        'sehen', 'vielleicht', 'glauben', 'Eintritt', 'ohne',
      ],
      grammar: {
        point: 'nicht',
        sections: [
          {
            text_vi:
              'Vị trí của **nicht**: phủ định cả câu thì nicht đứng **cuối câu**, hoặc **trước phần động từ ở cuối**: Ich komme **nicht**. Ich kann heute **nicht** kommen. Phủ định một phần thì nicht đứng **ngay trước** phần đó: trước tính từ (Der Film ist **nicht** spannend), trước nơi chốn (Ich gehe **nicht** ins Kino).',
            table: 'Câu | nicht đứng\nIch komme nicht. | cuối câu\nIch kann heute nicht kommen. | trước động từ cuối\nDer Film ist nicht lustig. | trước tính từ\nIch gehe nicht ins Kino. | trước nơi chốn',
            examples: [
              ['Ich kann heute nicht kommen.', 'Hôm nay tôi không đến được.'],
              ['Das Museum ist nicht interessant.', 'Bảo tàng không thú vị.'],
            ],
            exercises: [
              order('Ich / kann / morgen / nicht / kommen.', 'Ngày mai tôi không đến được.'),
              choose('Der Film ist ___ spannend.', ['nicht', 'kein'], 'nicht', { vi: 'Bộ phim không hấp dẫn.' }),
              transform('Phủ định câu bằng nicht', 'Ich komme zur Party.', ['Ich komme nicht zur Party.']),
            ],
          },
          {
            text_vi:
              'Nhắc lại: **kein** cho danh từ không mạo từ hoặc có ein: Ich habe **keine** Zeit. Ich habe **keine Lust**. (Không nói "nicht Zeit".) **nicht** cho động từ, tính từ và danh từ có der/die/das.',
            examples: [
              ['Heute habe ich keine Zeit.', 'Hôm nay tôi không có thời gian.'],
              ['Ich habe keine Lust auf Kino.', 'Tôi không hứng đi xem phim.'],
            ],
            exercises: [
              choose('Ich habe heute ___ Zeit.', ['nicht', 'keine'], 'keine', { vi: 'Hôm nay tôi không có thời gian.' }),
              choose('Ich finde das Spiel ___ toll.', ['nicht', 'kein'], 'nicht', { vi: 'Tôi thấy trận đấu không hay.' }),
              fill('Hast du {keine} Lust?', 'Bạn không hứng à?'),
            ],
          },
          {
            text_vi:
              'Rủ rê: **Hast du Lust auf …?** / **Wie wäre es mit Kino?** (Đi xem phim thì sao?) / **Ich lade dich ein.** (Tôi mời bạn.) Nhận lời: **Gute Idee!** **Gern!** Từ chối: **Leider nicht.** **Ich habe keine Zeit.** Khen: **Tanzen macht Spaß!** (Nhảy vui lắm!)',
            examples: [
              ['Wie wäre es mit Kino? – Gute Idee!', 'Đi xem phim thì sao? – Ý hay đấy!'],
              ['Kommst du zu meiner Party? – Leider nicht.', 'Bạn đến tiệc của mình không? – Tiếc là không.'],
            ],
            exercises: [
              choose('Hast du ___ auf ein Konzert?', ['Lust', 'Spaß', 'Zeit'], 'Lust', { vi: 'Bạn có hứng đi nghe hòa nhạc không?' }),
              fill('Wie wäre es {mit} Kino?', 'Đi xem phim thì sao?'),
            ],
          },
        ],
        mixed: [
          translate('Hôm nay tôi không có thời gian.', ['Heute habe ich keine Zeit.', 'Ich habe heute keine Zeit.']),
          transform('Phủ định câu', 'Der Film ist lustig.', ['Der Film ist nicht lustig.']),
          choose('Ich ___ dich zum Essen ein.', ['lade', 'einlade', 'lädt'], 'lade', { vi: 'Tôi mời bạn đi ăn.' }),
          order('Ich / kann / heute / nicht / mitkommen.', 'Hôm nay tôi không đi cùng được.'),
          fill('Tanzen macht {Spaß}!', 'Nhảy vui lắm!'),
        ],
      },
      dialogue: {
        title_de: 'Gehen wir ins Kino?',
        lines: [
          { speaker: 'A', de: 'Hast du heute Abend Zeit? Wie wäre es mit Kino?', vi: 'Tối nay bạn rảnh không? Đi xem phim nhé?' },
          { speaker: 'B', de: 'Leider nicht. Heute Abend kann ich nicht.', vi: 'Tiếc là không. Tối nay mình không đi được.' },
          { speaker: 'A', de: 'Schade! Und morgen? Es gibt ein Konzert im Park.', vi: 'Tiếc quá! Còn ngày mai? Có buổi hòa nhạc trong công viên.' },
          { speaker: 'B', de: 'Ein Konzert? Ich habe keine Lust auf Konzerte.', vi: 'Hòa nhạc à? Mình không hứng đi hòa nhạc.' },
          { speaker: 'A', de: 'Dann gehen wir ins Museum. Es ist sehr interessant.', vi: 'Vậy mình đi bảo tàng. Thú vị lắm.' },
          { speaker: 'B', de: 'Museen finde ich langweilig. Aber ich gehe gern ins Kino!', vi: 'Mình thấy bảo tàng chán. Nhưng mình thích đi xem phim!' },
          { speaker: 'A', de: 'Gut, dann morgen Kino. Der neue Film ist sehr lustig.', vi: 'Được, vậy mai đi xem phim. Phim mới vui lắm.' },
          { speaker: 'B', de: 'Gute Idee! Ich lade dich ein.', vi: 'Ý hay! Mình mời bạn.' },
        ],
        gloss: { schade: 'tiếc quá', Konzerte: 'các buổi hòa nhạc', Museen: 'các bảo tàng' },
        questions: [
          tf('B hat heute Abend Zeit.', false),
          mc('B thấy bảo tàng thế nào?', ['chán', 'thú vị', 'vui'], 'chán'),
          mc('Cuối cùng họ quyết định gì?', ['ngày mai đi xem phim', 'hôm nay đi hòa nhạc', 'đi bảo tàng'], 'ngày mai đi xem phim'),
          tf('B lädt A ein.', true),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Viết một tin nhắn rủ bạn đi chơi cuối tuần (Hast du Lust…?, Wie wäre es mit…?) và một tin nhắn từ chối lịch sự (Leider nicht, ich kann nicht…).',
    },
    {
      title_vi: 'Một ngày Chủ nhật ở công viên',
      goal_vi: 'Kể về một buổi đi chơi và chơi thể thao; dùng für, ohne, durch, gegen, um với Akkusativ.',
      items: [
        'für', 'durch', 'Picknick', 'Decke', 'Spaziergang', 'Stadion', 'Spieler', 'Training', 'trainieren', 'Sonnenbrille',
        'für, ohne, durch, gegen, um + Akkusativ',
      ],
      grammar: {
        point: 'praep-akk',
        sections: [
          {
            text_vi:
              'Năm giới từ **für** (cho, dành cho), **ohne** (không có), **durch** (xuyên qua), **gegen** (đấu với, chống lại), **um** (quanh) **luôn đi với Akkusativ**. Như bài Akkusativ (A1-05), chỉ **giống đực** đổi: für **den** Vater, ohne **einen** Hund. Giống cái, giống trung và số nhiều giữ nguyên: für **die** Mutter, für **das** Kind. Mẹo nhớ năm chữ đầu: **F-O-D-G-U**.',
            table: 'Giới từ | Nghĩa | Ví dụ\nfür | cho, dành cho | für den Freund\nohne | không có | ohne den Hund\ndurch | xuyên qua | durch den Park\ngegen | đấu với | gegen die Kinder\num | quanh | um das Haus',
            examples: [
              ['Der Kuchen ist für meinen Bruder.', 'Bánh này dành cho anh trai tôi.'],
              ['Wir gehen durch den Park.', 'Chúng tôi đi xuyên qua công viên.'],
            ],
            exercises: [
              choose('Der Kaffee ist für ___ Vater.', ['meinen', 'meinem', 'mein'], 'meinen', { vi: 'Cà phê này cho bố tôi.' }),
              choose('Wir gehen durch ___ Park.', ['den', 'dem', 'der'], 'den', { vi: 'Chúng tôi đi xuyên qua công viên.' }),
              fill('Ich komme ohne {meinen} Hund. (mein Hund)', 'Tôi đến mà không dẫn chó theo.'),
            ],
          },
          {
            text_vi:
              'Đại từ sau các giới từ này cũng ở Akkusativ: für **mich**, für **dich**, ohne **ihn** (học kỹ ở A1-11). **gegen** còn nghĩa là **khoảng** (giờ): Wir kommen **gegen** acht Uhr. So sánh: **um** acht Uhr = đúng tám giờ (A1-03). Trong thể thao: Wir spielen **gegen** einen Verein aus Köln.',
            examples: [
              ['Ist das Eis für mich? – Ja, für dich!', 'Kem này cho mình à? – Ừ, cho bạn!'],
              ['Das Training beginnt gegen sechs Uhr.', 'Buổi tập bắt đầu khoảng sáu giờ.'],
            ],
            exercises: [
              choose('Ist der Saft für ___? – Ja, für dich!', ['mich', 'ich', 'mir'], 'mich', { vi: 'Nước ép cho mình à? – Ừ, cho bạn!' }),
              choose('Wir kommen ___ acht Uhr, vielleicht etwas später.', ['gegen', 'um'], 'gegen', { vi: 'Chúng tôi đến khoảng tám giờ, có thể muộn hơn chút.' }),
              fill('Wir laufen einmal {um} das Haus.', 'Chúng tôi chạy một vòng quanh nhà.'),
            ],
          },
          {
            text_vi:
              'Đi chơi cuối tuần: **einen Spaziergang machen** (đi dạo), **ein Picknick machen** (đi picnic), mang theo **eine Decke** và **eine Sonnenbrille**. Thể thao: **trainieren** (tập luyện), **das Training** (buổi tập), **der Spieler** (cầu thủ), **ins Stadion gehen** (đến sân vận động).',
            examples: [
              ['Am Sonntag machen wir ein Picknick im Park.', 'Chủ nhật chúng tôi đi picnic ở công viên.'],
              ['Er trainiert zweimal pro Woche.', 'Anh ấy tập hai lần một tuần.'],
            ],
            exercises: [
              fill('Nach dem Essen machen wir einen {Spaziergang}.', 'Ăn xong chúng tôi đi dạo.'),
              translate('Chúng tôi đi dạo xuyên qua công viên.', [
                'Wir machen einen Spaziergang durch den Park.',
                'Wir gehen durch den Park spazieren.',
              ]),
            ],
          },
        ],
        mixed: [
          choose('Mein Bruder spielt heute gegen ___ Freund.', ['seinen', 'seinem', 'sein'], 'seinen', { vi: 'Hôm nay anh tôi đấu với bạn của anh ấy.' }),
          fill('Die Blumen sind für {die} Oma.', 'Hoa này dành cho bà.'),
          translate('Bánh này dành cho bạn.', ['Der Kuchen ist für dich.', 'Dieser Kuchen ist für dich.']),
          order('Wir / gehen / ohne / den Hund / spazieren.', 'Chúng tôi đi dạo mà không dẫn chó theo.'),
          choose('Gehen wir durch ___ Stadt?', ['die', 'der', 'den'], 'die', { vi: 'Mình đi xuyên qua thành phố nhé?' }),
        ],
      },
      dialogue: {
        title_de: 'Ein Sonntag im Park',
        lines: [
          { speaker: 'A', de: 'Hast du am Sonntag Zeit? Wir machen ein Picknick im Park.', vi: 'Chủ nhật bạn rảnh không? Bọn mình đi picnic ở công viên.' },
          { speaker: 'B', de: 'Gute Idee! Was bringe ich mit?', vi: 'Ý hay! Mình mang gì theo?' },
          { speaker: 'A', de: 'Bring eine Decke mit. Und vielleicht Saft für die Kinder.', vi: 'Mang một tấm trải nhé. Và có lẽ nước ép cho bọn trẻ.' },
          { speaker: 'B', de: 'Kommt dein Hund auch?', vi: 'Chó của bạn cũng đi à?' },
          { speaker: 'A', de: 'Nein, wir kommen ohne den Hund. Er ist zu alt.', vi: 'Không, bọn mình đi không có chó. Nó già quá rồi.' },
          { speaker: 'B', de: 'Und nach dem Picknick?', vi: 'Còn sau buổi picnic?' },
          { speaker: 'A', de: 'Dann machen wir einen Spaziergang durch den Park.', vi: 'Sau đó bọn mình đi dạo qua công viên.' },
          { speaker: 'B', de: 'Super. Am Nachmittag spielt mein Bruder Fußball, gegen einen Verein aus Köln.', vi: 'Tuyệt. Buổi chiều anh mình đá bóng, đấu với một câu lạc bộ ở Köln.' },
          { speaker: 'A', de: 'Toll! Dann gehen wir alle zusammen ins Stadion!', vi: 'Hay quá! Vậy tất cả cùng đến sân vận động!' },
          { speaker: 'B', de: 'Gut, aber ohne mich! Fußball finde ich langweilig.', vi: 'Được, nhưng không có mình nhé! Mình thấy bóng đá chán.' },
        ],
        gloss: { bringe: 'mang', 'bring … mit': 'mang theo', Kinder: 'bọn trẻ', Köln: 'thành phố Köln' },
        questions: [
          mc('Chủ nhật họ làm gì?', ['đi picnic ở công viên', 'đi xem phim', 'ở nhà'], 'đi picnic ở công viên'),
          tf('Der Hund kommt mit.', false, { explain: 'Wir kommen ohne den Hund.' }),
          mc('Sau buổi picnic họ làm gì?', ['đi dạo qua công viên', 'đi bơi', 'đi mua sắm'], 'đi dạo qua công viên'),
          tf('B geht gern ins Stadion.', false, { explain: 'Gut, aber ohne mich! Fußball finde ich langweilig.' }),
        ],
        dictation: [4, 6],
      },
      writing_prompt_vi:
        'Viết 4–5 câu về một buổi đi chơi: bạn đi đâu, với ai, mang gì cho ai. Dùng für, ohne, durch, gegen hoặc um với Akkusativ.',
    },
  ],
  test: {
    grammar: {
      gern: [
        choose('Ich spiele gern Tennis, aber ___ Fußball.', ['lieber', 'am liebsten'], 'lieber'),
        fill('{Am liebsten} lese ich.', 'Tôi thích đọc sách nhất.'),
        choose('Ich ___ Jazz.', ['mag', 'gern'], 'mag'),
        fill('Er {liest} gern.', 'Anh ấy thích đọc.'),
        choose('Was machst du ___? – Tanzen!', ['am liebsten', 'lieber'], 'am liebsten'),
        order('Ich / höre / gern / Musik.', 'Tôi thích nghe nhạc.'),
      ],
      modal: [
        fill('Ich {kann} gut tanzen.', 'Tôi nhảy giỏi.'),
        choose('___ ihr mitkommen?', ['Könnt', 'Kannst', 'Kann'], 'Könnt'),
        order('Wir / wollen / heute / schwimmen.', 'Hôm nay chúng tôi muốn đi bơi.'),
        choose('Er ___ Klavier spielen.', ['kann', 'kannst'], 'kann'),
        fill('Du {willst} wandern?', 'Bạn muốn đi bộ đường dài à?'),
        order('Kannst / du / Gitarre / spielen?', 'Bạn biết chơi ghi-ta không?'),
      ],
      nicht: [
        choose('Ich habe heute ___ Zeit.', ['keine', 'nicht'], 'keine'),
        order('Ich / komme / heute / nicht.', 'Hôm nay tôi không đến.'),
        choose('Das Buch ist ___ spannend.', ['nicht', 'kein'], 'nicht'),
        order('Ich / kann / nicht / schwimmen.', 'Tôi không biết bơi.'),
        fill('Ich habe {keine} Lust.', 'Tôi không hứng.'),
        choose('Wir gehen heute ___ ins Kino.', ['nicht', 'kein'], 'nicht'),
      ],
      'praep-akk': [
        choose('Das ist für ___ Freund.', ['meinen', 'meinem'], 'meinen'),
        choose('Wir gehen durch ___ Park.', ['den', 'dem'], 'den'),
        fill('Ich trinke Kaffee {ohne} Milch.', 'Tôi uống cà phê không sữa.'),
        choose('Er spielt gegen ___ Vater.', ['seinen', 'seinem'], 'seinen'),
        order('Wir / laufen / um / das Haus.', 'Chúng tôi chạy quanh nhà.'),
        fill('Der Kuchen ist für {dich}.', 'Bánh này dành cho bạn.'),
      ],
    },
    reading: {
      title_de: 'Freizeit',
      text_de:
        'Mein Name ist Jonas. In meiner Freizeit mache ich viel Sport. Ich spiele zweimal pro Woche Fußball in einem Verein. Am Wochenende fahre ich gern Fahrrad oder ich gehe joggen. Meine Freundin Mai mag Sport nicht so gern. Sie liest lieber oder spielt Klavier. Am liebsten geht sie ins Konzert. Zusammen gehen wir oft ins Kino. Mai findet Actionfilme langweilig, sie sieht lieber lustige Filme. Am Samstag haben wir Lust auf etwas Neues: Wir wollen tanzen lernen! Ich kann leider nicht gut tanzen, aber Mai sagt: Das macht nichts, Tanzen macht Spaß!',
      gloss: {
        'nicht so gern': 'không thích lắm',
        Actionfilme: 'phim hành động',
        lustige: 'vui nhộn',
        'etwas Neues': 'điều gì mới',
        sagt: 'nói',
        'Das macht nichts': 'không sao đâu',
      },
      questions: [
        mc('Jonas chơi bóng đá bao lâu một lần?', ['2 lần một tuần', 'mỗi ngày', 'cuối tuần'], '2 lần một tuần'),
        tf('Mai mag Sport sehr.', false, { explain: 'Mai mag Sport nicht so gern.' }),
        mc('Mai thích nhất làm gì?', ['đi nghe hòa nhạc', 'đọc sách', 'chơi piano'], 'đi nghe hòa nhạc'),
        tf('Jonas kann gut tanzen.', false),
        tf('Sie wollen tanzen lernen.', true),
      ],
    },
  },
});
