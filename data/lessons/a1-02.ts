// A1 · 02 Gia đình và bạn bè — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a1-02',
  points: [
    {
      key: 'possessiv',
      rule_key: 'possessiv-nominativ',
      category: 'gender',
      title_vi: 'Mạo từ sở hữu: mein/meine theo giống của danh từ',
      explanation_vi: 'Trước danh từ der/das: mein, dein, sein, ihr, unser; trước danh từ die và số nhiều thêm -e: meine, deine, seine, ihre, unsere.',
    },
    {
      key: 'haben',
      rule_key: 'haben-praesens',
      category: 'conjugation',
      title_vi: 'Chia haben ở hiện tại',
      explanation_vi: 'haben bất quy tắc ở du và er/sie/es: ich habe, du hast, er hat, wir haben, ihr habt, sie haben.',
    },
    {
      key: 'verb-endung',
      rule_key: 'verb-endung-praesens',
      category: 'conjugation',
      title_vi: 'Đuôi động từ có quy tắc ở hiện tại',
      explanation_vi: 'Gốc + -e, -st, -t, -en, -t, -en. Gốc tận cùng -t/-d thì chèn e: du arbeitest, er arbeitet.',
    },
  ],
  lessons: [
    {
      title_vi: 'Gia đình tôi',
      goal_vi: 'Giới thiệu các thành viên trong gia đình với mein/meine, dein/deine, sein/ihr, unser.',
      items: [
        'Familie', 'Mutter', 'Vater', 'Eltern', 'Kind', 'Sohn', 'Tochter', 'Bruder', 'Schwester', 'Geschwister',
        'Großmutter', 'Großvater', 'Großeltern', 'Baby', 'mein', 'dein', 'unser', 'und',
        'mein / meine', 'sein / ihr: sở hữu ngôi thứ ba',
      ],
      grammar: {
        point: 'possessiv',
        sections: [
          {
            text_vi:
              'Tiếng Việt nói "mẹ **của tôi**", từ sở hữu đứng sau. Tiếng Đức đặt **mạo từ sở hữu** trước danh từ và nó **đổi theo giống**: **mein** trước danh từ der và das, **meine** trước danh từ die và số nhiều. Vì vậy luôn học danh từ kèm mạo từ!',
            table: 'Giống | Dạng | Ví dụ\nder | mein | mein Vater\ndas | mein | mein Kind\ndie | meine | meine Mutter\nsố nhiều | meine | meine Eltern',
            examples: [
              ['Das ist mein Bruder.', 'Đây là anh trai tôi.'],
              ['Das ist meine Schwester.', 'Đây là chị gái tôi.'],
              ['Meine Eltern wohnen in Hue.', 'Bố mẹ tôi sống ở Huế.'],
            ],
            exercises: [
              choose('Das ist ___ Vater.', ['mein', 'meine'], 'mein', { vi: 'Đây là bố tôi.', explain: 'der Vater → mein Vater.' }),
              choose('Das sind ___ Großeltern.', ['mein', 'meine'], 'meine', { vi: 'Đây là ông bà tôi.', explain: 'Số nhiều → meine.' }),
              fill('{Meine} Tochter heißt Mai.', 'Con gái tôi tên là Mai.'),
              fill('Das ist {mein} Baby.', 'Đây là em bé của tôi.', { hint: 'das Baby' }),
            ],
          },
          {
            text_vi:
              'Các ngôi khác đổi y như mein: **dein** (của bạn), **sein** (của anh ấy), **ihr** (của cô ấy, của họ), **unser** (của chúng tôi). Trước danh từ die và số nhiều thêm **-e**: deine Mutter, seine Schwester, ihre Eltern, unsere Familie. Chọn sein hay ihr theo **người sở hữu**, không theo danh từ.',
            table: 'Ngôi | der/das | die/số nhiều\nich | mein | meine\ndu | dein | deine\ner | sein | seine\nsie | ihr | ihre\nwir | unser | unsere',
            examples: [
              ['Ist das dein Bruder?', 'Đó là anh trai bạn à?'],
              ['Tom und seine Schwester', 'Tom và chị gái của anh ấy'],
              ['Anna und ihr Sohn', 'Anna và con trai của cô ấy'],
            ],
            exercises: [
              choose('Paul und ___ Mutter wohnen in Hamburg.', ['sein', 'seine', 'ihre'], 'seine', {
                vi: 'Paul và mẹ anh ấy sống ở Hamburg.',
                explain: 'Người sở hữu là Paul (er) → sein-; die Mutter → seine.',
              }),
              choose('Frau Weber und ___ Sohn kommen aus Berlin.', ['ihr', 'ihre', 'sein'], 'ihr', {
                vi: 'Bà Weber và con trai bà ấy đến từ Berlin.',
                explain: 'Người sở hữu là bà Weber (sie) → ihr-; der Sohn → ihr.',
              }),
              fill('Ist das {deine} Familie?', 'Đây là gia đình bạn à?'),
              fill('{Unsere} Familie wohnt in Da Nang.', 'Gia đình chúng tôi sống ở Đà Nẵng.'),
            ],
          },
        ],
        mixed: [
          translate('Đây là mẹ tôi.', ['Das ist meine Mutter.']),
          transform('Đổi sang "của bạn" (du)', 'Das ist meine Schwester.', ['Das ist deine Schwester.']),
          choose('Minh und ___ Geschwister besuchen die Großeltern.', ['sein', 'seine', 'ihr'], 'seine', {
            vi: 'Minh và các anh chị em của anh ấy đi thăm ông bà.',
          }),
          order('Mein Bruder / und / meine Schwester / wohnen / in Hanoi.', 'Anh trai và chị gái tôi sống ở Hà Nội.'),
          fill('Lan, ist das {dein} Vater?', 'Lan, đó là bố bạn à?'),
        ],
      },
      dialogue: {
        title_de: 'Das Familienfoto',
        lines: [
          { speaker: 'A', de: 'Lan, wer ist das?', vi: 'Lan, đây là ai?' },
          { speaker: 'B', de: 'Das ist meine Familie. Das sind meine Eltern.', vi: 'Đây là gia đình mình. Đây là bố mẹ mình.' },
          { speaker: 'A', de: 'Und wer ist das? Dein Bruder?', vi: 'Còn đây là ai? Anh trai bạn à?' },
          { speaker: 'B', de: 'Ja, das ist mein Bruder Nam. Er wohnt in Hue.', vi: 'Ừ, đây là anh trai mình, Nam. Anh ấy sống ở Huế.' },
          { speaker: 'A', de: 'Und die Frau hier? Ist das deine Schwester?', vi: 'Còn người phụ nữ này? Chị gái bạn à?' },
          { speaker: 'B', de: 'Nein, das ist meine Großmutter! Sie ist 70.', vi: 'Không, đây là bà mình! Bà 70 tuổi rồi.' },
          { speaker: 'A', de: 'Wirklich? Und das Baby?', vi: 'Thật à? Còn em bé?' },
          { speaker: 'B', de: 'Das ist unser Baby, Mai. Sie ist die Tochter von Nam.', vi: 'Đây là em bé nhà mình, Mai. Bé là con gái của Nam.' },
          { speaker: 'A', de: 'Deine Familie ist toll!', vi: 'Gia đình bạn tuyệt quá!' },
        ],
        gloss: { wirklich: 'thật à', von: 'của', toll: 'tuyệt' },
        questions: [
          mc('Nam là ai?', ['anh trai của Lan', 'bố của Lan', 'ông của Lan'], 'anh trai của Lan'),
          tf('Die Frau auf dem Foto ist die Schwester von Lan.', false, { explain: 'Đó là bà của Lan: das ist meine Großmutter.' }),
          tf('Nam wohnt in Hue.', true),
          mc('Mai là ai?', ['con gái của Nam', 'chị gái của Lan', 'mẹ của Lan'], 'con gái của Nam'),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi:
        'Viết 4–5 câu giới thiệu gia đình bạn (hoặc một gia đình tưởng tượng): Das ist mein…/meine…, tên và nơi sống. Dùng cả mein và meine.',
    },
    {
      title_vi: 'Bạn có anh chị em không?',
      goal_vi: 'Nói mình có ai, có gì (haben); nói tình trạng hôn nhân; giới thiệu bạn bè và họ hàng.',
      items: [
        'haben', 'Mann', 'Ehefrau', 'Partner', 'Freund', 'Freundin', 'Onkel', 'Tante', 'Cousin', 'Hund', 'Katze', 'Foto',
        'verheiratet', 'ledig', 'geschieden', 'sehr', 'nett',
        'haben: ich habe, du hast, er hat',
      ],
      grammar: {
        point: 'haben',
        sections: [
          {
            text_vi:
              '**haben** (có) là động từ thứ hai cần thuộc lòng. Nó bất quy tắc ở **du hast** và **er/sie/es hat** (mất chữ b). Các ngôi khác chia như động từ thường.',
            table: 'Đại từ | haben\nich | habe\ndu | hast\ner/sie/es | hat\nwir | haben\nihr | habt\nsie/Sie | haben',
            examples: [
              ['Ich habe eine Schwester.', 'Tôi có một chị gái.'],
              ['Hast du Geschwister?', 'Bạn có anh chị em không?'],
              ['Er hat zwei Kinder.', 'Anh ấy có hai con.'],
            ],
            exercises: [
              fill('Ich {habe} zwei Brüder.', 'Tôi có hai anh trai.'),
              fill('Er {hat} eine Katze.', 'Anh ấy có một con mèo.'),
              choose('___ du einen Hund?', ['Hast', 'Hat', 'Habt'], 'Hast', { vi: 'Bạn có chó không?' }),
              choose('Ihr ___ ein Baby, oder?', ['habt', 'hat', 'haben'], 'habt', { vi: 'Các bạn có em bé rồi phải không?' }),
            ],
          },
          {
            text_vi:
              'Sau **haben**, mạo từ không xác định trước danh từ **giống đực** đổi **ein → einen**: Ich habe **einen** Bruder. Giống cái và giống trung giữ nguyên: Ich habe **eine** Schwester, **ein** Kind. Đây là cách Akkusativ, sẽ học kỹ ở chặng 5; bây giờ chỉ cần nhớ mẫu này.',
            table: 'Danh từ | Sau haben\nder Hund | einen Hund\ndie Katze | eine Katze\ndas Baby | ein Baby',
            examples: [
              ['Wir haben einen Hund.', 'Chúng tôi có một con chó.'],
              ['Anna hat eine Tante in Berlin.', 'Anna có một bà dì ở Berlin.'],
            ],
            exercises: [
              choose('Ich habe ___ Cousin.', ['ein', 'eine', 'einen'], 'einen', { vi: 'Tôi có một anh họ.', explain: 'der Cousin, sau haben → einen.' }),
              choose('Hast du ___ Freundin?', ['einen', 'eine', 'ein'], 'eine', { vi: 'Bạn có bạn gái không?' }),
              fill('Minh hat {einen} Onkel in Saigon.', 'Minh có một ông chú ở Sài Gòn.', { hint: 'der Onkel' }),
            ],
          },
          {
            text_vi:
              'Nói tình trạng hôn nhân dùng **sein**, không dùng haben: Ich **bin** verheiratet / ledig / geschieden. **mein Mann** là chồng tôi; **meine Frau** hoặc **meine Ehefrau** là vợ tôi. Chú ý: **mein Freund** thường hiểu là bạn trai; muốn nói "một người bạn" thì dùng **ein Freund von mir**.',
            examples: [
              ['Ich bin verheiratet. Mein Mann heißt Tuan.', 'Tôi đã kết hôn. Chồng tôi tên là Tuấn.'],
              ['Mein Bruder ist ledig.', 'Anh trai tôi còn độc thân.'],
            ],
            exercises: [
              choose('Meine Tante ___ geschieden.', ['hat', 'ist', 'habt'], 'ist', { vi: 'Dì tôi đã ly hôn.' }),
              choose('Ich bin verheiratet. ___ Mann heißt Tuan.', ['Mein', 'Meine'], 'Mein', { vi: 'Tôi đã kết hôn. Chồng tôi tên là Tuấn.' }),
            ],
          },
        ],
        mixed: [
          translate('Bạn có anh chị em không?', ['Hast du Geschwister?']),
          transform('Đổi chủ ngữ thành er', 'Ich habe eine Katze.', ['Er hat eine Katze.']),
          order('Meine Schwester / hat / einen Hund.', 'Chị gái tôi có một con chó.'),
          fill('Habt ihr ein Foto? – Ja, wir {haben} ein Foto.', 'Các bạn có ảnh không? – Có, chúng tôi có một tấm ảnh.'),
          choose('Paul ___ ledig.', ['ist', 'hat'], 'ist', { vi: 'Paul còn độc thân.' }),
        ],
      },
      dialogue: {
        title_de: 'Hast du Geschwister?',
        lines: [
          { speaker: 'A', de: 'Hast du Geschwister, Paul?', vi: 'Paul có anh chị em không?' },
          { speaker: 'B', de: 'Ja, ich habe einen Bruder und eine Schwester. Und du?', vi: 'Có, mình có một anh trai và một chị gái. Còn bạn?' },
          { speaker: 'A', de: 'Ich habe einen Bruder. Er ist verheiratet und hat zwei Kinder.', vi: 'Mình có một anh trai. Anh ấy đã kết hôn và có hai con.' },
          { speaker: 'B', de: 'Hast du einen Hund oder eine Katze?', vi: 'Bạn có chó hay mèo không?' },
          { speaker: 'A', de: 'Wir haben eine Katze. Sie heißt Mimi.', vi: 'Nhà mình có một con mèo. Nó tên là Mimi.' },
          { speaker: 'B', de: 'Meine Freundin hat auch eine Katze!', vi: 'Bạn gái mình cũng có một con mèo!' },
          { speaker: 'A', de: 'Deine Freundin? Wie heißt sie?', vi: 'Bạn gái bạn à? Cô ấy tên gì?' },
          { speaker: 'B', de: 'Sie heißt Julia. Sie ist sehr nett.', vi: 'Cô ấy tên là Julia. Cô ấy rất dễ mến.' },
        ],
        gloss: { oder: 'hay, hoặc', Mimi: 'tên con mèo', Julia: 'tên người' },
        questions: [
          mc('Paul có mấy anh chị em?', ['hai', 'một', 'không có'], 'hai'),
          tf('Der Bruder von A ist ledig.', false, { explain: 'Er ist verheiratet und hat zwei Kinder.' }),
          tf('Julia hat eine Katze.', true),
          mc('Con mèo tên là gì?', ['Mimi', 'Julia', 'Paul'], 'Mimi'),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Viết 4–5 câu: bạn có anh chị em, thú cưng, họ hàng nào (haben + einen/eine/ein); ai đã kết hôn, ai còn độc thân.',
    },
    {
      title_vi: 'Tuổi và nghề nghiệp',
      goal_vi: 'Hỏi tuổi, nói ai làm gì và sống ở đâu; chia động từ có quy tắc ở mọi ngôi.',
      items: [
        'leben', 'arbeiten', 'studieren', 'besuchen', 'lieben', 'heiraten', 'Jahr', 'Alter', 'Beruf',
        'alt', 'jung', 'groß', 'klein', 'zusammen', 'Wie alt ...?',
      ],
      grammar: {
        point: 'verb-endung',
        sections: [
          {
            text_vi:
              'Động từ **có quy tắc**: lấy gốc (bỏ -en) rồi thêm đuôi theo ngôi: **-e, -st, -t, -en, -t, -en**. Tiếng Việt không chia động từ (tôi học, anh ấy học), nên người Việt hay quên đuôi: luôn nhìn chủ ngữ rồi mới chọn đuôi.',
            table: 'Đại từ | leben | studieren\nich | lebe | studiere\ndu | lebst | studierst\ner/sie/es | lebt | studiert\nwir | leben | studieren\nihr | lebt | studiert\nsie/Sie | leben | studieren',
            examples: [
              ['Meine Schwester studiert in Hue.', 'Chị tôi học đại học ở Huế.'],
              ['Wir besuchen oft die Großeltern.', 'Chúng tôi hay đi thăm ông bà.'],
            ],
            exercises: [
              fill('Du {studierst} Medizin, oder?', 'Bạn học y phải không?'),
              fill('Meine Eltern {leben} in Da Nang.', 'Bố mẹ tôi sống ở Đà Nẵng.'),
              choose('Ihr ___ die Großeltern.', ['besucht', 'besuchst', 'besuchen'], 'besucht', { vi: 'Các bạn đi thăm ông bà.' }),
            ],
          },
          {
            text_vi:
              'Gốc tận cùng bằng **-t** hoặc **-d** thì chèn thêm **e** ở du, er/sie/es và ihr để dễ đọc: arbeiten → du **arbeitest**, er **arbeitet**, ihr **arbeitet**. Không có e thì "er arbeitt" không đọc được.',
            table: 'Đại từ | arbeiten\nich | arbeite\ndu | arbeitest\ner/sie/es | arbeitet\nwir | arbeiten\nihr | arbeitet\nsie/Sie | arbeiten',
            examples: [
              ['Mein Vater arbeitet in einer Bank.', 'Bố tôi làm việc ở ngân hàng.'],
              ['Arbeitest du viel?', 'Bạn làm việc nhiều không?'],
            ],
            exercises: [
              fill('Mein Onkel {arbeitet} in Berlin.', 'Chú tôi làm việc ở Berlin.'),
              fill('Wo {arbeitest} du?', 'Bạn làm việc ở đâu?'),
            ],
          },
          {
            text_vi:
              'Hỏi tuổi: **Wie alt bist du?** / **Wie alt sind Sie?** Trả lời: **Ich bin 25 (Jahre alt).** Tiếng Đức dùng **sein** để nói tuổi, không dùng haben ("có 25 tuổi"). Hỏi nghề: **Was sind Sie von Beruf?** – **Ich bin Lehrerin.** Trước tên nghề không cần mạo từ.',
            examples: [
              ['Wie alt ist dein Bruder? – Er ist 20.', 'Anh trai bạn bao nhiêu tuổi? – Anh ấy 20.'],
              ['Mein Vater ist 55 Jahre alt.', 'Bố tôi 55 tuổi.'],
            ],
            exercises: [
              choose('Wie alt ___ Sie?', ['sind', 'haben', 'ist'], 'sind', { vi: 'Ông/bà bao nhiêu tuổi?' }),
              translate('Tôi 25 tuổi.', ['Ich bin 25.', 'Ich bin 25 Jahre alt.']),
            ],
          },
        ],
        mixed: [
          transform('Đổi chủ ngữ thành er', 'Ich arbeite in Hanoi.', ['Er arbeitet in Hanoi.']),
          fill('Sie {heiraten} im Mai.', 'Họ kết hôn vào tháng Năm.'),
          order('Wie alt / ist / deine Mutter?', 'Mẹ bạn bao nhiêu tuổi?'),
          choose('Wir ___ zusammen in Berlin.', ['lebt', 'leben', 'lebst'], 'leben', { vi: 'Chúng tôi sống cùng nhau ở Berlin.' }),
          translate('Anh ấy làm việc ở Berlin.', ['Er arbeitet in Berlin.']),
        ],
      },
      dialogue: {
        title_de: 'Was ist er von Beruf?',
        lines: [
          { speaker: 'A', de: 'Wie alt ist dein Bruder?', vi: 'Anh trai bạn bao nhiêu tuổi?' },
          { speaker: 'B', de: 'Er ist 30. Er ist verheiratet und lebt in Hamburg.', vi: 'Anh ấy 30. Anh ấy đã kết hôn và sống ở Hamburg.' },
          { speaker: 'A', de: 'Was ist er von Beruf?', vi: 'Anh ấy làm nghề gì?' },
          { speaker: 'B', de: 'Er ist Lehrer. Und seine Frau arbeitet in einer Bank.', vi: 'Anh ấy là giáo viên. Còn vợ anh ấy làm ở ngân hàng.' },
          { speaker: 'A', de: 'Und deine Schwester? Arbeitet sie auch?', vi: 'Còn chị gái bạn? Chị ấy cũng đi làm à?' },
          { speaker: 'B', de: 'Nein, sie ist noch jung. Sie studiert Medizin in Berlin.', vi: 'Không, chị ấy còn trẻ. Chị ấy học y ở Berlin.' },
          { speaker: 'A', de: 'Besuchst du sie oft?', vi: 'Bạn có hay thăm chị ấy không?' },
          { speaker: 'B', de: 'Ja, wir sind oft zusammen. Ich liebe meine Familie!', vi: 'Có, bọn mình hay ở cùng nhau. Mình yêu gia đình mình!' },
        ],
        gloss: { Lehrer: 'giáo viên (nam)' },
        questions: [
          mc('Anh trai bao nhiêu tuổi?', ['30', '20', '55'], '30'),
          tf('Der Bruder lebt in Hamburg.', true),
          mc('Chị gái làm gì?', ['học y ở Berlin', 'làm ở ngân hàng', 'là giáo viên'], 'học y ở Berlin'),
          tf('Die Schwester arbeitet in einer Bank.', false, { explain: 'Người làm ở ngân hàng là vợ của anh trai.' }),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Viết 5 câu về các thành viên gia đình: tuổi, nghề, sống và làm việc ở đâu. Chú ý đuôi động từ theo chủ ngữ.',
    },
  ],
  test: {
    grammar: {
      possessiv: [
        choose('Das ist ___ Mutter.', ['mein', 'meine'], 'meine', { vi: 'Đây là mẹ tôi.' }),
        choose('Ist das ___ Hund, Paul?', ['dein', 'deine'], 'dein', { vi: 'Đây là con chó của bạn à, Paul?' }),
        choose('Anna und ___ Bruder wohnen zusammen.', ['ihr', 'ihre', 'sein'], 'ihr', { vi: 'Anna và anh trai cô ấy sống cùng nhau.' }),
        fill('Minh liebt {seine} Familie.', 'Minh yêu gia đình của anh ấy.'),
        choose('Wir besuchen ___ Großeltern.', ['unser', 'unsere'], 'unsere', { vi: 'Chúng tôi đi thăm ông bà của chúng tôi.' }),
        order('Das / ist / mein Sohn.', 'Đây là con trai tôi.'),
      ],
      haben: [
        fill('Du {hast} eine Katze, oder?', 'Bạn có một con mèo phải không?'),
        choose('Meine Tante ___ zwei Kinder.', ['hat', 'habt', 'hast'], 'hat', { vi: 'Dì tôi có hai con.' }),
        choose('Ich habe ___ Bruder.', ['ein', 'eine', 'einen'], 'einen', { vi: 'Tôi có một anh trai.' }),
        fill('Wir {haben} einen Hund.', 'Chúng tôi có một con chó.'),
        choose('Mein Bruder ___ verheiratet.', ['hat', 'ist'], 'ist', { vi: 'Anh trai tôi đã kết hôn.' }),
        order('Hast / du / Geschwister?', 'Bạn có anh chị em không?'),
      ],
      'verb-endung': [
        fill('Meine Schwester {studiert} in Hue.', 'Chị tôi học đại học ở Huế.'),
        fill('Du {arbeitest} viel.', 'Bạn làm việc nhiều.'),
        choose('Er ___ in einer Bank.', ['arbeitet', 'arbeitt', 'arbeiten'], 'arbeitet', { vi: 'Anh ấy làm việc ở ngân hàng.' }),
        choose('Wie alt ___ du?', ['bist', 'hast', 'ist'], 'bist', { vi: 'Bạn bao nhiêu tuổi?' }),
        choose('Ihr ___ die Großeltern oft.', ['besucht', 'besuchen', 'besuchst'], 'besucht', { vi: 'Các bạn hay thăm ông bà.' }),
        order('Mein Vater / arbeitet / in Hanoi.', 'Bố tôi làm việc ở Hà Nội.'),
      ],
    },
    reading: {
      title_de: 'Thu und ihre Familie',
      text_de:
        'Ich heiße Thu und ich bin 28 Jahre alt. Ich komme aus Vietnam, aber ich lebe jetzt in München. Ich bin verheiratet. Mein Mann heißt Jonas, er ist Deutscher. Er arbeitet in einer Bank. Ich studiere Informatik. Wir haben noch keine Kinder, aber wir haben eine Katze. Sie heißt Pho! Meine Familie lebt in Vietnam. Meine Eltern wohnen in Can Tho. Mein Vater ist 60 und meine Mutter ist 57. Ich habe zwei Geschwister: Mein Bruder Long ist 25 und noch ledig. Meine Schwester Lan ist 31, sie ist Lehrerin und hat zwei Kinder. Im Sommer besuchen wir meine Familie. Ich liebe meine Familie sehr!',
      gloss: {
        aber: 'nhưng',
        jetzt: 'bây giờ',
        Deutscher: 'người Đức (nam)',
        Informatik: 'tin học',
        'noch keine': 'chưa có',
        'im Sommer': 'vào mùa hè',
      },
      questions: [
        tf('Thu ist ledig.', false, { explain: 'Ich bin verheiratet.' }),
        mc('Jonas làm việc ở đâu?', ['ở ngân hàng', 'ở trường học', 'ở Việt Nam'], 'ở ngân hàng'),
        tf('Thu hat zwei Geschwister.', true),
        mc('Con mèo tên là gì?', ['Pho', 'Lan', 'Long'], 'Pho'),
        tf('Der Bruder von Thu ist verheiratet.', false, { explain: 'Long ist noch ledig.' }),
      ],
    },
  },
});
