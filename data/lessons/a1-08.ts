// A1 · 08 Trong thành phố — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a1-08',
  points: [
    {
      key: 'dativ-ort',
      rule_key: 'dativ-ort-praepositionen',
      category: 'case',
      title_vi: 'Giới từ nơi chốn + Dativ (wo?)',
      explanation_vi: 'in, an, auf, neben, vor, hinter, zwischen trả lời wo? đi với Dativ: der/das → dem, die → der, số nhiều → den; in dem = im, an dem = am.',
    },
    {
      key: 'imperativ',
      rule_key: 'imperativ-du-ihr-sie',
      category: 'conjugation',
      title_vi: 'Mệnh lệnh cách với du, ihr, Sie',
      explanation_vi: 'Sie: Gehen Sie! du: bỏ -st và bỏ du (Komm! Geh!). ihr: dạng ihr bỏ ihr (Kommt!). Tiền tố tách về cuối.',
    },
    {
      key: 'weg',
      rule_key: 'zu-dativ-zum-zur',
      category: 'preposition',
      title_vi: 'Hỏi đường: zu + Dativ (zum, zur)',
      explanation_vi: 'zu luôn đi với Dativ: zum Bahnhof (der/das), zur Post (die); bis zum/bis zur = đến tận.',
    },
  ],
  lessons: [
    {
      title_vi: 'Ở đâu?',
      goal_vi: 'Nói một nơi ở đâu so với nơi khác (bên cạnh, trước, sau, giữa…).',
      items: [
        'in', 'an', 'auf', 'neben', 'vor', 'hinter', 'zwischen', 'Platz', 'Ecke', 'Bank', 'Post', 'Apotheke', 'Kirche',
        'Café', 'Restaurant', 'Hotel', 'Geschäft', 'Schule', 'Bibliothek', 'liegen',
        'Giới từ nơi chốn + Dativ (wo?)', 'in dem = im, an dem = am',
      ],
      grammar: {
        point: 'dativ-ort',
        sections: [
          {
            text_vi:
              'Hỏi vị trí: **Wo ist …?** Trả lời bằng giới từ nơi chốn + **Dativ**. Ở Dativ, mạo từ đổi: der → **dem**, das → **dem**, die → **der**, số nhiều → **den**. Rút gọn: in dem = **im**, an dem = **am**.',
            table: 'Giống | Nominativ | Dativ\nder | der Platz | auf dem Platz\ndas | das Café | im Café\ndie | die Post | neben der Post\nsố nhiều | die Geschäfte | in den Geschäften',
            examples: [
              ['Die Bank ist neben der Post.', 'Ngân hàng ở cạnh bưu điện.'],
              ['Wir treffen uns im Café.', 'Chúng ta gặp nhau ở quán cà phê.'],
            ],
            exercises: [
              choose('Die Apotheke ist neben ___ Bank.', ['der', 'die', 'dem'], 'der', {
                vi: 'Hiệu thuốc ở cạnh ngân hàng.',
                explain: 'die Bank → Dativ: der Bank.',
              }),
              choose('Ich warte vor ___ Kino.', ['das', 'dem', 'der'], 'dem', { vi: 'Tôi chờ trước rạp phim.' }),
              fill('Wir sind {im} Restaurant.', 'Chúng tôi đang ở nhà hàng.', { hint: 'in + dem' }),
            ],
          },
          {
            text_vi:
              'Nghĩa: **in** (trong), **an** (sát cạnh, tại: an der Ampel), **auf** (trên bề mặt: auf dem Tisch, auf dem Platz), **neben** (bên cạnh), **vor** (trước), **hinter** (sau), **zwischen** (giữa). Tiếng Việt chỉ đổi giới từ; tiếng Đức đổi cả **mạo từ** theo Dativ.',
            examples: [
              ['Das Buch liegt auf dem Tisch.', 'Quyển sách nằm trên bàn.'],
              ['Das Café ist zwischen der Bank und dem Hotel.', 'Quán cà phê ở giữa ngân hàng và khách sạn.'],
            ],
            exercises: [
              choose('Der Park ist ___ der Schule. (phía sau)', ['hinter', 'vor', 'neben'], 'hinter', { vi: 'Công viên ở phía sau trường học.' }),
              fill('Der Markt ist auf {dem} Platz.', 'Chợ ở trên quảng trường.'),
              choose('Die Kirche ist ___ dem Rathaus. (bên cạnh)', ['neben', 'zwischen', 'auf'], 'neben', { vi: 'Nhà thờ ở cạnh tòa thị chính.' }),
            ],
          },
          {
            text_vi:
              '**liegen** = nằm (vị trí của tòa nhà, thành phố): Das Hotel **liegt** im Zentrum. Hỏi: **Wo liegt …?** Câu hỏi vị trí dùng **wo?** và Dativ; ở A2 sẽ học **wohin?** (đi đâu) đi với Akkusativ.',
            examples: [['Wo liegt die Bibliothek? – Neben der Schule.', 'Thư viện nằm ở đâu? – Cạnh trường học.']],
            exercises: [
              fill('Das Hotel {liegt} im Zentrum.', 'Khách sạn nằm ở trung tâm.'),
              translate('Bưu điện ở cạnh ngân hàng.', ['Die Post ist neben der Bank.', 'Die Post liegt neben der Bank.']),
            ],
          },
        ],
        mixed: [
          choose('Das Geschäft ist an ___ Ecke.', ['der', 'dem', 'die'], 'der', { vi: 'Cửa hàng ở góc phố.' }),
          transform('Viết câu với „neben“: das Café / das Hotel', 'Das Café ist … (neben, das Hotel)', ['Das Café ist neben dem Hotel.']),
          fill('Ich lese {in} der Bibliothek.', 'Tôi đọc sách trong thư viện.'),
          choose('Wir treffen uns ___ Café.', ['im', 'am', 'in'], 'im', { vi: 'Chúng ta gặp nhau ở quán cà phê.' }),
          order('Die Schule / ist / hinter / der Kirche.', 'Trường học ở phía sau nhà thờ.'),
        ],
      },
      dialogue: {
        title_de: 'Wo ist hier eine Bank?',
        lines: [
          { speaker: 'A', de: 'Entschuldigung, wo ist hier eine Bank?', vi: 'Xin lỗi, ở đây ngân hàng ở đâu?' },
          { speaker: 'B', de: 'Die Bank ist neben der Post, am Platz.', vi: 'Ngân hàng ở cạnh bưu điện, ngay quảng trường.' },
          { speaker: 'A', de: 'Und wo ist die Post?', vi: 'Còn bưu điện ở đâu?' },
          { speaker: 'B', de: 'Die Post ist zwischen dem Hotel und der Kirche.', vi: 'Bưu điện ở giữa khách sạn và nhà thờ.' },
          { speaker: 'A', de: 'Gibt es hier auch eine Apotheke?', vi: 'Ở đây có hiệu thuốc không?' },
          { speaker: 'B', de: 'Ja, vor dem Café ist eine Apotheke.', vi: 'Có, trước quán cà phê có một hiệu thuốc.' },
          { speaker: 'A', de: 'Und ein Restaurant?', vi: 'Còn nhà hàng?' },
          { speaker: 'B', de: 'Hinter der Schule gibt es ein Restaurant. Es ist sehr gut.', vi: 'Sau trường học có một nhà hàng. Rất ngon.' },
        ],
        gloss: {},
        questions: [
          mc('Ngân hàng ở đâu?', ['cạnh bưu điện', 'sau trường học', 'trước quán cà phê'], 'cạnh bưu điện'),
          tf('Die Post ist zwischen dem Hotel und der Kirche.', true),
          mc('Hiệu thuốc ở đâu?', ['trước quán cà phê', 'cạnh ngân hàng', 'sau nhà thờ'], 'trước quán cà phê'),
          tf('Das Restaurant ist vor der Schule.', false, { explain: 'Hinter der Schule gibt es ein Restaurant.' }),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Viết 5 câu tả khu phố của bạn: cái gì ở đâu (neben, vor, hinter, zwischen, in, an + Dativ).',
    },
    {
      title_vi: 'Hãy đi thẳng!',
      goal_vi: 'Chỉ đường và đưa yêu cầu bằng mệnh lệnh cách (Sie, du, ihr).',
      items: [
        'links', 'rechts', 'geradeaus', 'Straße', 'Kreuzung', 'Ampel', 'Brücke', 'Polizei', 'abbiegen', 'zeigen', 'fragen',
        'Entschuldigen Sie', 'Mệnh lệnh cách với Sie', 'Mệnh lệnh cách với du',
      ],
      grammar: {
        point: 'imperativ',
        sections: [
          {
            text_vi:
              'Mệnh lệnh lịch sự với **Sie**: động từ nguyên mẫu đứng **đầu câu** + Sie: **Gehen Sie** geradeaus! **Biegen Sie** links **ab**! (tiền tố tách vẫn về cuối). Thêm **bitte** cho lịch sự: Gehen Sie **bitte** links. Đây là cách chỉ đường cho người lạ.',
            examples: [
              ['Gehen Sie hier links.', 'Ông/bà rẽ trái ở đây.'],
              ['Biegen Sie an der Ampel rechts ab.', 'Đến đèn giao thông thì ông/bà rẽ phải.'],
            ],
            exercises: [
              order('Gehen / Sie / immer / geradeaus.', 'Ông/bà cứ đi thẳng.'),
              fill('{Biegen} Sie an der Kreuzung links ab.', 'Đến ngã tư thì ông/bà rẽ trái.'),
              transform('Đổi thành mệnh lệnh với Sie', 'Sie fragen die Polizei.', ['Fragen Sie die Polizei.', 'Fragen Sie bitte die Polizei.']),
            ],
          },
          {
            text_vi:
              'Mệnh lệnh thân mật với **du**: lấy dạng du, **bỏ -st và bỏ chữ du**: du kommst → **Komm!**, du gehst → **Geh!**, du biegst ab → **Bieg ab!** Với **ihr**: dạng ihr, bỏ ihr: **Kommt!** **Geht!**',
            table: 'Dạng du | Mệnh lệnh du | Mệnh lệnh ihr\ndu kommst | Komm! | Kommt!\ndu gehst | Geh! | Geht!\ndu fragst | Frag! | Fragt!\ndu zeigst | Zeig! | Zeigt!',
            examples: [
              ['Komm bitte mit!', 'Đi cùng đi!'],
              ['Zeig mir den Weg!', 'Chỉ đường cho mình đi!'],
            ],
            exercises: [
              choose('___ bitte mit, Anna!', ['Komm', 'Kommst', 'Kommen'], 'Komm', { vi: 'Anna, đi cùng đi!' }),
              fill('Tom, {frag} doch die Polizei!', 'Tom, hỏi cảnh sát đi!'),
              choose('Kinder, ___ bitte nach Hause!', ['geht', 'geh', 'gehen'], 'geht', { vi: 'Các con, về nhà đi!' }),
            ],
          },
          {
            text_vi:
              'Chỉ hướng: **links** (trái), **rechts** (phải), **geradeaus** (thẳng), **über die Brücke** (qua cầu), **an der Ampel / an der Kreuzung** (ở đèn / ở ngã tư). **abbiegen** (rẽ) là động từ tách: Biegen Sie rechts **ab**.',
            examples: [['Gehen Sie über die Brücke und dann rechts.', 'Đi qua cầu rồi rẽ phải.']],
            exercises: [
              choose('Die Ampel ist rot. ___ Sie bitte!', ['Warten', 'Wartet', 'Wartest'], 'Warten', { vi: 'Đèn đỏ. Ông/bà chờ đã!' }),
              translate('Hãy rẽ trái! (Sie)', ['Biegen Sie links ab!', 'Biegen Sie bitte links ab!']),
            ],
          },
        ],
        mixed: [
          transform('Đổi sang mệnh lệnh với du', 'Gehen Sie geradeaus.', ['Geh geradeaus.']),
          transform('Đổi sang mệnh lệnh với Sie', 'Komm bitte mit.', ['Kommen Sie bitte mit.']),
          choose('Herr Klein, ___ Sie mir bitte den Weg!', ['zeigen', 'zeig', 'zeigt'], 'zeigen', { vi: 'Ông Klein, chỉ đường giúp tôi với!' }),
          order('Gehen / Sie / über / die Brücke.', 'Ông/bà đi qua cầu.'),
          fill('An der Ampel gehen Sie {rechts}.', 'Đến đèn giao thông thì ông/bà rẽ phải.'),
        ],
      },
      dialogue: {
        title_de: 'Entschuldigen Sie!',
        lines: [
          { speaker: 'A', de: 'Entschuldigen Sie, ich suche die Brückenstraße.', vi: 'Xin lỗi, tôi đang tìm phố Brücken.' },
          { speaker: 'B', de: 'Die Brückenstraße? Gehen Sie hier geradeaus bis zur Ampel.', vi: 'Phố Brücken à? Ông đi thẳng đến đèn giao thông.' },
          { speaker: 'A', de: 'Bis zur Ampel, okay. Und dann?', vi: 'Đến đèn, được. Rồi sao nữa?' },
          { speaker: 'B', de: 'An der Ampel biegen Sie links ab. Dann gehen Sie über die Brücke.', vi: 'Đến đèn thì rẽ trái. Rồi đi qua cầu.' },
          { speaker: 'A', de: 'Über die Brücke, und dann?', vi: 'Qua cầu, rồi sao?' },
          { speaker: 'B', de: 'Dann ist es die zweite Straße rechts.', vi: 'Rồi là con đường thứ hai bên phải.' },
          { speaker: 'A', de: 'Vielen Dank!', vi: 'Cảm ơn nhiều!' },
          { speaker: 'B', de: 'Bitte schön! Fragen Sie sonst die Polizei dort.', vi: 'Không có gì! Nếu không thì hỏi cảnh sát đằng kia.' },
        ],
        gloss: {
          Brückenstraße: 'phố Brücken',
          'bis zur': 'đến tận',
          okay: 'được',
          zweite: 'thứ hai',
          'Vielen Dank': 'cảm ơn nhiều',
          schön: 'bitte schön = không có gì',
          sonst: 'nếu không thì',
          dort: 'ở đằng kia',
        },
        questions: [
          mc('A tìm gì?', ['phố Brücken', 'bưu điện', 'cảnh sát'], 'phố Brücken'),
          mc('Đến đèn giao thông thì rẽ hướng nào?', ['trái', 'phải', 'đi thẳng'], 'trái'),
          tf('A geht über die Brücke.', true),
          tf('Die Brückenstraße ist die erste Straße links.', false, { explain: 'Es ist die zweite Straße rechts.' }),
        ],
        dictation: [3, 6],
      },
      writing_prompt_vi:
        'Viết chỉ đường từ nhà bạn đến siêu thị gần nhất (4–5 câu), dùng mệnh lệnh với Sie: Gehen Sie…, Biegen Sie … ab.',
    },
    {
      title_vi: 'Hỏi đường',
      goal_vi: 'Hỏi đường đến một nơi (zum/zur), hỏi xa hay gần và giờ mở cửa.',
      items: [
        'zu', 'bis', 'Bahnhof', 'Haltestelle', 'Krankenhaus', 'Rathaus', 'Zentrum', 'Weg', 'Stadtplan', 'Nähe', 'weit',
        'gegenüber', 'dort', 'da', 'öffnen', 'offen', 'geschlossen', 'nah', 'Wie komme ich zu', 'in der Nähe',
      ],
      grammar: {
        point: 'weg',
        sections: [
          {
            text_vi:
              'Hỏi đường: **Wie komme ich zum Bahnhof?** **zu** luôn đi với Dativ và thường rút gọn: zu dem → **zum** (der/das), zu der → **zur** (die): zum Bahnhof, zum Rathaus, **zur** Post, **zur** Haltestelle. Ngoại lệ: về nhà là **nach Hause**.',
            table: 'Danh từ | zu + Dativ\nder Bahnhof | zum Bahnhof\ndas Krankenhaus | zum Krankenhaus\ndie Haltestelle | zur Haltestelle',
            examples: [
              ['Wie komme ich zur Haltestelle?', 'Làm sao để đến bến xe buýt?'],
              ['Ich gehe zum Rathaus.', 'Tôi đi đến tòa thị chính.'],
            ],
            exercises: [
              choose('Wie komme ich ___ Bahnhof?', ['zum', 'zur'], 'zum', { vi: 'Làm sao để đến nhà ga?' }),
              choose('Ich gehe ___ Apotheke.', ['zum', 'zur'], 'zur', { vi: 'Tôi đi đến hiệu thuốc.' }),
              fill('Wie komme ich {zum} Krankenhaus?', 'Làm sao để đến bệnh viện?'),
            ],
          },
          {
            text_vi:
              '**bis zum / bis zur** = đến tận: Gehen Sie **bis zur** Kreuzung. Hỏi khoảng cách: **Ist es weit?** – **Nein, es ist ganz nah.** / **Es ist in der Nähe.** (ở gần đây). **gegenüber** = phía đối diện: Die Apotheke ist **gegenüber**.',
            examples: [
              ['Gibt es hier in der Nähe eine Bank?', 'Gần đây có ngân hàng không?'],
              ['Ist es weit? – Nein, nur fünf Minuten.', 'Có xa không? – Không, chỉ năm phút.'],
            ],
            exercises: [
              fill('Gehen Sie bis {zur} Kreuzung.', 'Ông/bà đi đến ngã tư.'),
              choose('Ist der Bahnhof ___? – Nein, er ist ganz nah.', ['weit', 'nah', 'offen'], 'weit', { vi: 'Nhà ga có xa không? – Không, rất gần.' }),
              order('Gibt es / hier in der Nähe / ein Café?', 'Gần đây có quán cà phê không?'),
            ],
          },
          {
            text_vi:
              'Giờ mở cửa: **offen** (đang mở), **geschlossen** (đã đóng). **öffnen** (mở cửa): Die Post **öffnet** um acht. Hỏi: **Ist die Bank noch offen?** / **Wann öffnet …?**',
            examples: [
              ['Die Bank öffnet um neun.', 'Ngân hàng mở cửa lúc chín giờ.'],
              ['Am Sonntag ist alles geschlossen.', 'Chủ nhật mọi thứ đều đóng cửa.'],
            ],
            exercises: [
              fill('Die Post {öffnet} um acht.', 'Bưu điện mở cửa lúc tám giờ.'),
              choose('Am Sonntag ist das Geschäft ___.', ['geschlossen', 'offen'], 'geschlossen', { vi: 'Chủ nhật cửa hàng đóng cửa.' }),
            ],
          },
        ],
        mixed: [
          translate('Làm sao để đến nhà ga?', ['Wie komme ich zum Bahnhof?']),
          choose('Ich gehe ___ Bibliothek.', ['zum', 'zur'], 'zur', { vi: 'Tôi đi đến thư viện.' }),
          transform('Hỏi đường đến tòa thị chính (das Rathaus)', 'Wie komme ich … ?', ['Wie komme ich zum Rathaus?']),
          fill('Die Haltestelle ist {gegenüber}.', 'Bến xe buýt ở phía đối diện.'),
          choose('Ist die Apotheke noch ___?', ['offen', 'weit'], 'offen', { vi: 'Hiệu thuốc còn mở cửa không?' }),
        ],
      },
      dialogue: {
        title_de: 'Wie komme ich zum Bahnhof?',
        lines: [
          { speaker: 'A', de: 'Entschuldigen Sie, wie komme ich zum Bahnhof?', vi: 'Xin lỗi, làm sao để đến nhà ga?' },
          { speaker: 'B', de: 'Zum Bahnhof? Das ist nicht weit. Gehen Sie hier geradeaus bis zum Rathaus.', vi: 'Đến nhà ga à? Không xa đâu. Chị đi thẳng đến tòa thị chính.' },
          { speaker: 'A', de: 'Bis zum Rathaus. Und dann?', vi: 'Đến tòa thị chính. Rồi sao?' },
          { speaker: 'B', de: 'Am Rathaus gehen Sie rechts. Der Bahnhof ist dann links, gegenüber dem Hotel.', vi: 'Đến tòa thị chính thì rẽ phải. Nhà ga ở bên trái, đối diện khách sạn.' },
          { speaker: 'A', de: 'Gibt es in der Nähe auch eine Haltestelle?', vi: 'Gần đó có bến xe buýt không?' },
          { speaker: 'B', de: 'Ja, die Haltestelle ist direkt vor dem Bahnhof.', vi: 'Có, bến xe ở ngay trước nhà ga.' },
          { speaker: 'A', de: 'Und ist die Apotheke am Bahnhof noch offen?', vi: 'Hiệu thuốc ở nhà ga còn mở cửa không?' },
          { speaker: 'B', de: 'Ich glaube, sie ist bis acht offen.', vi: 'Tôi nghĩ nó mở đến tám giờ.' },
        ],
        gloss: { direkt: 'ngay', glaube: 'nghĩ, tin (ich glaube)' },
        questions: [
          tf('Der Bahnhof ist weit.', false, { explain: 'Das ist nicht weit.' }),
          mc('Nhà ga đối diện cái gì?', ['khách sạn', 'tòa thị chính', 'hiệu thuốc'], 'khách sạn'),
          mc('Bến xe buýt ở đâu?', ['ngay trước nhà ga', 'cạnh tòa thị chính', 'sau khách sạn'], 'ngay trước nhà ga'),
          tf('Die Apotheke ist bis acht offen.', true),
        ],
        dictation: [2, 4],
      },
      writing_prompt_vi:
        'Một người hỏi bạn: „Wie komme ich zur Post?“ Viết câu trả lời 4–5 câu (zum/zur, bis zur, links/rechts, gegenüber).',
    },
  ],
  test: {
    grammar: {
      'dativ-ort': [
        choose('Das Buch liegt auf ___ Tisch.', ['dem', 'den', 'der'], 'dem'),
        choose('Die Bank ist neben ___ Post.', ['der', 'die', 'dem'], 'der'),
        fill('Ich bin {im} Café. (in + dem)', 'Tôi đang ở quán cà phê.'),
        choose('Wir warten vor ___ Kino.', ['dem', 'das'], 'dem'),
        fill('Das Café ist zwischen der Bank und {dem} Hotel.', 'Quán cà phê ở giữa ngân hàng và khách sạn.'),
        order('Der Park / ist / hinter / der Schule.', 'Công viên ở phía sau trường học.'),
      ],
      imperativ: [
        choose('___ Sie bitte geradeaus!', ['Gehen', 'Geh', 'Geht'], 'Gehen'),
        choose('Tom, ___ mit!', ['komm', 'kommst', 'kommen'], 'komm'),
        fill('{Biegen} Sie links ab.', 'Ông/bà rẽ trái.'),
        choose('Kinder, ___ bitte nach Hause!', ['geht', 'geh', 'gehen'], 'geht'),
        order('Fragen / Sie / die Polizei!', 'Ông/bà hỏi cảnh sát đi!'),
        fill('Anna, {zeig} mir bitte den Weg!', 'Anna, chỉ đường giúp mình với!'),
      ],
      weg: [
        choose('Wie komme ich ___ Post?', ['zur', 'zum'], 'zur'),
        choose('Wie komme ich ___ Rathaus?', ['zum', 'zur'], 'zum'),
        fill('Gehen Sie bis {zur} Ampel.', 'Ông/bà đi đến đèn giao thông.'),
        order('Wie / komme / ich / zum Bahnhof?', 'Làm sao để đến nhà ga?'),
        choose('Die Apotheke ist ___, auf der anderen Seite.', ['gegenüber', 'geradeaus'], 'gegenüber'),
        fill('Ich gehe {zur} Haltestelle.', 'Tôi đi đến bến xe buýt.'),
      ],
    },
    reading: {
      title_de: 'Willkommen in Freiburg!',
      text_de:
        'Hallo Sara, willkommen in Freiburg! Hier ist der Weg von der Haltestelle zu meiner Wohnung. Die Haltestelle heißt Rathaus. Steig dort aus und geh über den Platz. Neben dem Rathaus ist eine Kirche. Geh an der Kirche links und dann immer geradeaus bis zur Ampel. An der Ampel biegst du rechts ab. Das ist die Mozartstraße. Mein Haus ist das dritte Haus links, gegenüber einer Bäckerei. Die Bäckerei ist am Sonntag geschlossen, aber zwischen der Bäckerei und der Post gibt es ein Café, es ist immer offen. Es ist nicht weit, nur zehn Minuten. Bis bald! Lena',
      gloss: {
        willkommen: 'chào mừng',
        'Steig … aus': 'xuống xe',
        dritte: 'thứ ba',
        'einer Bäckerei': 'một tiệm bánh (Dativ)',
        Mozartstraße: 'phố Mozart',
      },
      questions: [
        mc('Sara phải xuống ở bến nào?', ['Rathaus', 'Mozartstraße', 'Kirche'], 'Rathaus'),
        tf('An der Kirche geht Sara rechts.', false, { explain: 'Geh an der Kirche links.' }),
        mc('Nhà của Lena đối diện cái gì?', ['tiệm bánh mì', 'bưu điện', 'nhà thờ'], 'tiệm bánh mì'),
        tf('Das Café ist am Sonntag offen.', true),
        tf('Der Weg ist sehr weit.', false),
      ],
    },
  },
});
