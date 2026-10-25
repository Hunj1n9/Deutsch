// B1 · 02 Sống chung — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b1-02',
  points: [
    {
      key: 'relativ-akk',
      rule_key: 'relativsatz-nominativ-akkusativ',
      category: 'case',
      title_vi: 'Mệnh đề quan hệ: Nominativ và Akkusativ',
      explanation_vi: 'Giống, số theo danh từ phía trước; cách theo vai trò trong câu phụ. Akkusativ chỉ giống đực đổi: den. Der Mitbewohner, den ich kenne, …',
    },
    {
      key: 'relativ-dat',
      rule_key: 'relativsatz-dativ',
      category: 'case',
      title_vi: 'Mệnh đề quan hệ: Dativ (dem, der, denen)',
      explanation_vi: 'Đại từ quan hệ ở Dativ khi động từ câu phụ cần Dativ (helfen, gehören, danken…): dem (m/n), der (f), denen (số nhiều).',
    },
    {
      key: 'relativ-praep',
      rule_key: 'relativsatz-praeposition',
      category: 'preposition',
      title_vi: 'Mệnh đề quan hệ với giới từ và wo',
      explanation_vi: 'Giới từ đứng trước đại từ quan hệ, đại từ theo cách của giới từ: mit dem, über die. Nơi chốn có thể dùng wo (= in dem/in der).',
    },
  ],
  lessons: [
    {
      title_vi: 'Ở nhà chung (WG)',
      goal_vi: 'Nói về quy tắc nhà chung; mô tả người và vật bằng mệnh đề quan hệ Nominativ/Akkusativ.',
      items: [
        'Wohngemeinschaft', 'Mitbewohner', 'Zusammenleben', 'Regel', 'Putzplan', 'Pflicht', 'Absprache', 'Gemeinschaftsküche',
        'Gemeinschaftsraum', 'Gewohnheitsmensch', 'teilen', 'sich einigen', 'ausmachen', 'leihen', 'zurückbringen', 'abstellen',
        'ordentlich', 'unordentlich', 'gemeinsam', 'chaotisch', 'abwechselnd', 'an der Reihe sein',
        'sich an die Regeln halten', 'unter einem Dach leben', 'Mệnh đề quan hệ Nominativ: der, die, das',
        'Mệnh đề quan hệ Akkusativ: den',
      ],
      grammar: {
        point: 'relativ-akk',
        sections: [
          {
            text_vi:
              'Đại từ quan hệ lấy **giống và số** từ danh từ phía trước, nhưng **cách** theo vai trò của nó **trong câu phụ**. Làm chủ ngữ → **Nominativ**: der, die, das, die. Làm tân ngữ trực tiếp → **Akkusativ**: chỉ giống đực đổi thành **den**. Der Mitbewohner, **den** ich gestern kennengelernt habe, ist nett.',
            table: 'Giống | Nominativ | Akkusativ\nder (m) | der | den\ndie (f) | die | die\ndas (n) | das | das\ndie (số nhiều) | die | die',
            examples: [
              ['Der Kuchen, den du gebacken hast, schmeckt super.', 'Cái bánh bạn nướng ngon tuyệt.'],
              ['Das ist eine Regel, die alle kennen.', 'Đó là quy tắc mà ai cũng biết.'],
            ],
            exercises: [
              choose('Der Stuhl, ___ ich gekauft habe, ist bequem.', ['den', 'der', 'das'], 'den', { vi: 'Cái ghế tôi mua rất thoải mái.' }),
              choose('Das ist die Mitbewohnerin, ___ immer kocht.', ['die', 'den', 'der'], 'die', { vi: 'Đây là cô bạn cùng nhà lúc nào cũng nấu ăn.' }),
              fill('Der Mitbewohner, {den} ich gestern getroffen habe, heißt Jonas.', 'Bạn cùng nhà mà tôi gặp hôm qua tên là Jonas.'),
            ],
          },
          {
            text_vi:
              'Cách làm: tách thành hai câu. Der Putzplan hängt in der Küche. Wir haben **den Putzplan** gemacht. → Der Putzplan, **den** wir gemacht haben, hängt in der Küche. Mệnh đề quan hệ đứng **ngay sau** danh từ, **dấu phẩy** hai bên, động từ chia đứng **cuối**.',
            examples: [['Die Küche, die wir teilen, ist klein.', 'Căn bếp chúng tôi dùng chung thì nhỏ.']],
            exercises: [
              transform('Nối hai câu bằng mệnh đề quan hệ', 'Das ist der Schrank. Ich habe den Schrank gekauft.', ['Das ist der Schrank, den ich gekauft habe.']),
              order('Die Regeln, / die / wir / gemacht / haben, / sind / einfach.', 'Những quy tắc chúng tôi đặt ra rất đơn giản.'),
              choose('Der Mann, ___ dort steht, ist unser Nachbar.', ['der', 'den'], 'der', { vi: 'Người đàn ông đứng đằng kia là hàng xóm của chúng tôi.' }),
            ],
          },
          {
            text_vi:
              '**an der Reihe sein** = đến lượt: Wer ist heute an der Reihe? **abwechselnd** = luân phiên. **Bescheid sagen** = báo cho biết: Sag mir bitte Bescheid! **sich einigen** (auf + Akk) = thống nhất. **leihen** = cho mượn hoặc mượn: Kannst du mir dein Fahrrad leihen?',
            examples: [['Wir putzen abwechselnd, heute bin ich an der Reihe.', 'Chúng tôi dọn luân phiên, hôm nay đến lượt tôi.']],
            exercises: [
              fill('Wer ist heute mit dem Putzen an der {Reihe}?', 'Hôm nay đến lượt ai dọn dẹp?'),
              translate('Làm ơn báo cho tôi biết nhé!', ['Sag mir bitte Bescheid!', 'Sagen Sie mir bitte Bescheid!', 'Bitte sag mir Bescheid!', 'Bitte sagen Sie mir Bescheid!']),
            ],
          },
        ],
        mixed: [
          choose('Der Film, ___ wir gestern gesehen haben, war langweilig.', ['den', 'der', 'die'], 'den', { vi: 'Bộ phim hôm qua chúng tôi xem thật chán.' }),
          transform('Nối hai câu bằng mệnh đề quan hệ', 'Ich suche das Buch. Du hast das Buch geliehen.', ['Ich suche das Buch, das du geliehen hast.']),
          choose('Die Schuhe, ___ im Flur stehen, gehören Jonas.', ['die', 'den'], 'die', { vi: 'Đôi giày để ngoài hành lang là của Jonas.' }),
          fill('Wo ist der Schlüssel, {den} ich dir gegeben habe?', 'Chìa khóa tôi đưa bạn đâu rồi?'),
          order('Das ist / ein Mitbewohner, / den / alle / mögen.', 'Đó là một người bạn cùng nhà mà ai cũng quý.'),
        ],
      },
      dialogue: {
        title_de: 'Die neue Mitbewohnerin',
        lines: [
          { speaker: 'A', de: 'Hallo, du bist Mia, oder? Ich bin Tuan. Willkommen in unserer WG!', vi: 'Chào, bạn là Mia phải không? Mình là Tuấn. Chào mừng đến nhà chung của bọn mình!' },
          { speaker: 'B', de: 'Danke! Die Wohnung, die ihr habt, ist wirklich schön.', vi: 'Cảm ơn! Căn hộ của các bạn đẹp thật.' },
          { speaker: 'A', de: 'Hier ist der Putzplan, den wir zusammen gemacht haben. Wir putzen abwechselnd.', vi: 'Đây là lịch dọn dẹp bọn mình cùng làm. Bọn mình dọn luân phiên.' },
          { speaker: 'B', de: 'Und wer ist diese Woche an der Reihe?', vi: 'Thế tuần này đến lượt ai?' },
          { speaker: 'A', de: 'Jonas. Er ist der Mitbewohner, den du gestern am Telefon gehört hast.', vi: 'Jonas. Cậu ấy là người bạn cùng nhà mà hôm qua bạn nghe qua điện thoại.' },
          { speaker: 'B', de: 'Ah, okay. Gibt es noch andere Regeln?', vi: 'À, được. Còn quy tắc nào khác không?' },
          { speaker: 'A', de: 'Wir teilen die Küche. Die Lebensmittel, die links im Kühlschrank stehen, sind für alle.', vi: 'Bọn mình dùng chung bếp. Đồ ăn để bên trái tủ lạnh là của chung.' },
          { speaker: 'B', de: 'Gut zu wissen. Kann ich auch Freunde einladen?', vi: 'Tốt quá. Mình có thể mời bạn bè đến không?' },
          { speaker: 'A', de: 'Klar, aber sag uns vorher Bescheid.', vi: 'Tất nhiên, nhưng báo trước cho bọn mình nhé.' },
        ],
        gloss: { WG: 'nhà ở chung', vorher: 'trước', links: 'bên trái', willkommen: 'chào mừng' },
        questions: [
          mc('Các bạn trong WG dọn dẹp thế nào?', ['luân phiên', 'mỗi người một phòng', 'thuê người dọn'], 'luân phiên'),
          tf('Diese Woche ist Mia an der Reihe.', false, { explain: 'Jonas ist an der Reihe.' }),
          mc('Đồ ăn ở đâu là của chung?', ['bên trái tủ lạnh', 'bên phải tủ lạnh', 'trong phòng Tuấn'], 'bên trái tủ lạnh'),
          tf('Mia soll vorher Bescheid sagen, wenn Freunde kommen.', true),
        ],
        dictation: [2, 6],
      },
      writing_prompt_vi:
        'Viết 5 quy tắc cho một nhà ở chung và giới thiệu hai bạn cùng nhà, dùng ít nhất ba mệnh đề quan hệ (der/die/das/den).',
    },
    {
      title_vi: 'Hàng xóm láng giềng',
      goal_vi: 'Nói chuyện với hàng xóm về tiếng ồn, giúp đỡ; dùng mệnh đề quan hệ Dativ.',
      items: [
        'Nachbarschaft', 'Haustier', 'Hausmeister', 'Mehrfamilienhaus', 'Treppenhaus', 'Briefkasten', 'Lärmbelästigung',
        'Lärm', 'Rücksicht', 'Gemeinschaft', 'Zusammenhalt', 'sich kümmern', 'unterstützen',
        'verbieten', 'annehmen', 'erlaubt', 'hilfsbereit', 'rücksichtsvoll', 'anonym', 'Rücksicht nehmen auf',
        'Mệnh đề quan hệ Dativ: dem, der, denen',
      ],
      grammar: {
        point: 'relativ-dat',
        sections: [
          {
            text_vi:
              'Khi đại từ quan hệ là **tân ngữ Dativ** trong câu phụ, dùng Dativ: **dem** (der, das), **der** (die), **denen** (số nhiều – khác mạo từ den!). Die Nachbarin, **der** ich oft helfe, ist 80. Die Kinder, **denen** der Hund gehört, wohnen oben.',
            table: 'Giống | Nom | Akk | Dativ\nder (m) | der | den | dem\ndie (f) | die | die | der\ndas (n) | das | das | dem\ndie (số nhiều) | die | die | denen',
            examples: [
              ['Der Nachbar, dem ich geholfen habe, war sehr dankbar.', 'Người hàng xóm tôi đã giúp rất biết ơn.'],
              ['Das sind die Leute, denen das Haus gehört.', 'Đó là những người sở hữu ngôi nhà.'],
            ],
            exercises: [
              choose('Der Mann, ___ ich das Paket gegeben habe, wohnt oben.', ['dem', 'den', 'der'], 'dem', { vi: 'Người đàn ông tôi đưa bưu kiện sống ở tầng trên.' }),
              choose('Die Kinder, ___ der Hund gehört, sind sehr laut.', ['denen', 'den', 'die'], 'denen', { vi: 'Bọn trẻ có con chó rất ồn ào.' }),
              fill('Die Frau, {der} ich oft helfe, ist 80 Jahre alt.', 'Người phụ nữ tôi hay giúp đã 80 tuổi.'),
            ],
          },
          {
            text_vi:
              'Động từ đi với Dativ hay gặp: **helfen, danken, gehören, gefallen, antworten, gratulieren**; và **geben, schenken, zeigen** + người (Dativ). Cách kiểm tra: đặt danh từ vào câu đơn. Ich helfe **dem Nachbarn** → der Nachbar, **dem** ich helfe. Das Haus gehört **den Leuten** → die Leute, **denen** das Haus gehört.',
            examples: [['Das ist die Kollegin, der ich zum Geburtstag gratuliert habe.', 'Đây là đồng nghiệp tôi đã chúc mừng sinh nhật.']],
            exercises: [
              transform('Nối hai câu bằng mệnh đề quan hệ', 'Das ist der Hausmeister. Ich habe dem Hausmeister den Schlüssel gegeben.', [
                'Das ist der Hausmeister, dem ich den Schlüssel gegeben habe.',
              ]),
              choose('Die Nachbarn, ___ ich vertraue, haben meinen Schlüssel.', ['denen', 'die', 'den'], 'denen', { vi: 'Những hàng xóm tôi tin tưởng giữ chìa khóa của tôi.' }),
              order('Das Kind, / dem / das Fahrrad / gehört, / ist / sieben.', 'Đứa trẻ có chiếc xe đạp này bảy tuổi.'),
            ],
          },
          {
            text_vi:
              '**Rücksicht nehmen auf** + Akk = ý tứ với: Bitte nehmt Rücksicht auf die Nachbarn! **stören** + Akk = làm phiền: Der Lärm stört mich. **erlaubt** ≠ **verboten**: Haustiere sind hier erlaubt. Ở nhà nhiều hộ tại Đức, từ 22 giờ là giờ **Ruhe**: phải **leise**.',
            examples: [['Nach 22 Uhr müssen alle leise sein.', 'Sau 22 giờ mọi người phải giữ yên lặng.']],
            exercises: [
              fill('Der Lärm {stört} mich beim Lernen.', 'Tiếng ồn làm phiền tôi khi học.'),
              translate('Ở đây cấm hút thuốc.', ['Rauchen ist hier verboten.', 'Hier ist Rauchen verboten.', 'Hier ist das Rauchen verboten.']),
            ],
          },
        ],
        mixed: [
          choose('Die Nachbarin, ___ ich Blumen geschenkt habe, hat sich sehr gefreut.', ['der', 'die', 'dem'], 'der', { vi: 'Bà hàng xóm tôi tặng hoa rất vui.' }),
          choose('Das Mädchen, ___ die Katze gehört, wohnt nebenan.', ['dem', 'der', 'das'], 'dem', { vi: 'Cô bé có con mèo sống ở nhà bên.' }),
          transform('Nối hai câu bằng mệnh đề quan hệ', 'Ich kenne die Leute. Der Garten gehört den Leuten.', ['Ich kenne die Leute, denen der Garten gehört.']),
          fill('Der Freund, {dem} ich geantwortet habe, wohnt in Köln.', 'Người bạn mà tôi đã trả lời sống ở Köln.'),
          order('Die Nachbarn, / denen / wir / geholfen / haben, / sind / sehr nett.', 'Những người hàng xóm chúng tôi đã giúp rất dễ mến.'),
        ],
      },
      dialogue: {
        title_de: 'Im Treppenhaus',
        lines: [
          { speaker: 'A', de: 'Guten Tag, Frau Weber! Kann ich Ihnen helfen? Die Tasche sieht schwer aus.', vi: 'Chào bà Weber! Cháu giúp bà nhé? Cái túi trông nặng quá.' },
          { speaker: 'B', de: 'Oh, danke! Sie sind doch der junge Mann, dem ich letzte Woche das Paket gegeben habe.', vi: 'Ồ, cảm ơn! Cậu chính là chàng trai tuần trước tôi đưa bưu kiện cho.' },
          { speaker: 'A', de: 'Genau. Danke noch mal dafür!', vi: 'Đúng ạ. Cảm ơn bà lần nữa!' },
          { speaker: 'B', de: 'Kennen Sie die Kinder im dritten Stock, denen der kleine Hund gehört?', vi: 'Cậu có biết bọn trẻ ở tầng ba, chủ của con chó nhỏ không?' },
          { speaker: 'A', de: 'Ja, die sind sehr nett. Warum?', vi: 'Có ạ, chúng rất dễ thương. Sao vậy bà?' },
          { speaker: 'B', de: 'Der Hund bellt oft nachts. Das stört mich ein bisschen.', vi: 'Con chó hay sủa ban đêm. Điều đó làm tôi hơi phiền.' },
          { speaker: 'A', de: 'Sprechen Sie doch mit dem Hausmeister. Er ist ein Mann, dem alle vertrauen.', vi: 'Bà nói chuyện với người quản lý tòa nhà xem. Ông ấy là người ai cũng tin.' },
          { speaker: 'B', de: 'Gute Idee. Ich möchte keinen Streit. Wir sollten alle Rücksicht nehmen.', vi: 'Ý hay đấy. Tôi không muốn cãi nhau. Tất cả chúng ta nên ý tứ với nhau.' },
          { speaker: 'A', de: 'Das finde ich auch. Eine gute Nachbarschaft ist wichtig.', vi: 'Cháu cũng nghĩ vậy. Tình hàng xóm tốt rất quan trọng.' },
        ],
        gloss: { bellt: 'sủa', nachts: 'ban đêm', vertrauen: 'tin tưởng', Stock: 'tầng', dritten: 'thứ ba', dafür: 'về việc đó' },
        questions: [
          tf('A hat Frau Weber letzte Woche ein Paket gegeben.', false, { explain: 'Frau Weber hat ihm das Paket gegeben.' }),
          mc('Con chó nhỏ là của ai?', ['bọn trẻ ở tầng ba', 'người quản lý', 'bà Weber'], 'bọn trẻ ở tầng ba'),
          mc('Điều gì làm bà Weber phiền?', ['con chó sủa ban đêm', 'tiếng nhạc', 'bưu kiện'], 'con chó sủa ban đêm'),
          tf('Alle vertrauen dem Hausmeister.', true),
        ],
        dictation: [5, 8],
      },
      writing_prompt_vi:
        'Viết một tin nhắn lịch sự cho hàng xóm về vấn đề tiếng ồn (5 câu), dùng ít nhất hai mệnh đề quan hệ Dativ (dem/der/denen).',
    },
    {
      title_vi: 'Hiểu lầm và thỏa hiệp',
      goal_vi: 'Giải quyết xung đột khi sống chung; dùng mệnh đề quan hệ có giới từ và wo.',
      items: [
        'Konflikt', 'Kompromiss', 'Lösung', 'Missverständnis', 'Vorurteil', 'Toleranz', 'Respekt', 'Recht', 'Generationenhaus',
        'Single-Haushalt', 'sich gewöhnen', 'akzeptieren', 'respektieren', 'ärgern', 'sich aufregen', 'klären', 'vorschlagen',
        'zusammenwohnen', 'sich vertragen', 'tolerieren', 'nerven', 'ignorieren', 'sich entschließen', 'tolerant', 'gegenseitig',
        'egoistisch', 'unterschiedlich', 'harmonisch', 'einander', 'leider', 'einen Streit schlichten', 'im Großen und Ganzen',
        'Mệnh đề quan hệ với giới từ', 'Mệnh đề quan hệ với wo',
      ],
      grammar: {
        point: 'relativ-praep',
        sections: [
          {
            text_vi:
              'Khi động từ trong câu phụ cần **giới từ**, giới từ đứng **trước** đại từ quan hệ, và đại từ theo **cách của giới từ**: mit + Dativ → mit **dem** / mit **der** / mit **denen**; über + Akk → über **den** / über **die** / über **das**. Die Freundin, **mit der** ich zusammenwohne, …',
            table: 'Động từ | Mệnh đề quan hệ\nsprechen über + Akk | das Problem, über das wir sprechen\nwohnen mit + Dat | der Freund, mit dem ich wohne\nwarten auf + Akk | die Antwort, auf die ich warte\nsich ärgern über + Akk | die Leute, über die ich mich ärgere',
            examples: [
              ['Das ist die Freundin, mit der ich zusammenwohne.', 'Đây là cô bạn tôi ở cùng.'],
              ['Das Problem, über das wir gesprochen haben, ist gelöst.', 'Vấn đề chúng ta đã bàn đã được giải quyết.'],
            ],
            exercises: [
              choose('Das ist der Kollege, mit ___ ich arbeite.', ['dem', 'den', 'der'], 'dem', { vi: 'Đây là đồng nghiệp tôi làm việc cùng.' }),
              choose('Die Regel, über ___ wir diskutiert haben, ist wichtig.', ['die', 'der', 'den'], 'die', { vi: 'Quy tắc chúng ta đã thảo luận rất quan trọng.' }),
              fill('Die Leute, mit {denen} ich zusammenwohne, sind sehr tolerant.', 'Những người tôi sống cùng rất khoan dung.'),
            ],
          },
          {
            text_vi:
              'Nói về **nơi chốn**, có thể dùng **wo** thay cho in dem / in der: Die Stadt, **wo** (= in der) ich wohne, ist ruhig. Với **tên** thành phố, quốc gia: luôn dùng **wo**: Hanoi, **wo** ich geboren bin, … Động từ có giới từ hay gặp: sprechen über, sich ärgern über, sich gewöhnen an, sich kümmern um, warten auf.',
            examples: [['Ich vermisse Hue, wo ich meine Kindheit verbracht habe.', 'Tôi nhớ Huế, nơi tôi đã trải qua tuổi thơ.']],
            exercises: [
              choose('Hanoi ist die Stadt, ___ ich aufgewachsen bin.', ['wo', 'die', 'der'], 'wo', { vi: 'Hà Nội là thành phố nơi tôi lớn lên.' }),
              order('Das ist das Haus, / in dem / ich / früher / gewohnt / habe.', 'Đây là ngôi nhà tôi từng sống.'),
              transform('Nối hai câu bằng mệnh đề quan hệ', 'Das ist der Nachbar. Ich ärgere mich oft über den Nachbarn.', [
                'Das ist der Nachbar, über den ich mich oft ärgere.',
              ]),
            ],
          },
          {
            text_vi:
              'Giải quyết xung đột: **ein Missverständnis klären** (làm rõ hiểu lầm), **einen Kompromiss finden**, **einen Streit schlichten** (hòa giải). **sich gewöhnen an** + Akk = quen với: Ich habe mich an den Lärm gewöhnt. **sich vertragen** = hòa thuận: Wir vertragen uns gut.',
            examples: [['Wir haben das Missverständnis schnell geklärt.', 'Chúng tôi nhanh chóng làm rõ sự hiểu lầm.']],
            exercises: [
              fill('Ich habe mich an das Leben in der WG {gewöhnt}.', 'Tôi đã quen với cuộc sống ở nhà chung.'),
              translate('Chúng ta phải tìm một sự thỏa hiệp.', ['Wir müssen einen Kompromiss finden.']),
            ],
          },
        ],
        mixed: [
          choose('Der Freund, auf ___ ich warte, kommt immer zu spät.', ['den', 'dem', 'der'], 'den', { vi: 'Người bạn tôi đang đợi lúc nào cũng đến muộn.' }),
          choose('Die Nachbarin, mit ___ ich oft spreche, ist sehr hilfsbereit.', ['der', 'die', 'dem'], 'der', { vi: 'Bà hàng xóm tôi hay nói chuyện rất sẵn lòng giúp đỡ.' }),
          transform('Nối hai câu bằng mệnh đề quan hệ', 'Das ist die Lösung. Wir haben lange auf die Lösung gewartet.', ['Das ist die Lösung, auf die wir lange gewartet haben.']),
          fill('Berlin ist eine Stadt, {wo} viele Kulturen zusammenleben.', 'Berlin là thành phố nơi nhiều nền văn hóa chung sống.', { alt: ['in der'] }),
          order('Die Mitbewohner, / mit denen / ich / wohne, / sind / ordentlich.', 'Những người bạn tôi ở cùng rất ngăn nắp.'),
        ],
      },
      dialogue: {
        title_de: 'Streit in der WG',
        lines: [
          { speaker: 'A', de: 'Lena, hast du kurz Zeit? Es gibt ein Problem, über das wir reden müssen.', vi: 'Lena, bạn rảnh chút không? Có một vấn đề chúng ta cần nói.' },
          { speaker: 'B', de: 'Klar. Was ist los?', vi: 'Được chứ. Có chuyện gì vậy?' },
          { speaker: 'A', de: 'Die Töpfe, mit denen du gestern gekocht hast, stehen noch in der Küche. Das nervt mich ein bisschen.', vi: 'Mấy cái nồi bạn nấu hôm qua vẫn để trong bếp. Mình hơi bực.' },
          { speaker: 'B', de: 'Oh, das tut mir leid. Ich hatte heute eine Prüfung, für die ich lernen musste.', vi: 'Ôi, xin lỗi nhé. Hôm nay mình có bài thi phải ôn.' },
          { speaker: 'A', de: 'Ich verstehe. Ich will mich nicht aufregen. Vielleicht war es nur ein Missverständnis.', vi: 'Mình hiểu. Mình không muốn nổi nóng. Có lẽ chỉ là hiểu lầm.' },
          { speaker: 'B', de: 'Lass uns einen Kompromiss finden. Ich spüle heute alles, und morgen kochen wir zusammen.', vi: 'Mình tìm cách thỏa hiệp nhé. Hôm nay mình rửa hết, mai chúng ta nấu chung.' },
          { speaker: 'A', de: 'Super Idee! Im Großen und Ganzen vertragen wir uns ja gut.', vi: 'Ý hay! Nhìn chung bọn mình vẫn hòa thuận mà.' },
          { speaker: 'B', de: 'Genau. Eine WG ist ein Ort, wo man Toleranz lernt.', vi: 'Đúng vậy. Nhà chung là nơi người ta học sự khoan dung.' },
        ],
        gloss: { Töpfe: 'nồi (số nhiều)', spüle: 'rửa bát (spülen)', 'lass uns': 'chúng ta hãy', WG: 'nhà ở chung', los: '(chuyện) xảy ra' },
        questions: [
          mc('Điều gì làm A bực?', ['nồi chưa rửa trong bếp', 'tiếng nhạc to', 'Lena về muộn'], 'nồi chưa rửa trong bếp'),
          tf('Lena hatte heute eine Prüfung.', true),
          mc('Hai người thỏa hiệp thế nào?', ['Lena rửa hôm nay, mai nấu chung', 'A rửa hết', 'thuê người dọn'], 'Lena rửa hôm nay, mai nấu chung'),
          tf('A und Lena vertragen sich im Großen und Ganzen schlecht.', false, { explain: 'Sie vertragen sich gut.' }),
        ],
        dictation: [2, 5],
      },
      writing_prompt_vi:
        'Kể về một hiểu lầm khi sống chung và cách giải quyết (5–6 câu), dùng ít nhất hai mệnh đề quan hệ có giới từ (mit dem, über die…) hoặc wo.',
    },
  ],
  test: {
    grammar: {
      'relativ-akk': [
        choose('Der Film, ___ ich gesehen habe, war gut.', ['den', 'der'], 'den'),
        choose('Die Frau, ___ dort wartet, ist meine Mitbewohnerin.', ['die', 'den'], 'die'),
        fill('Der Tisch, {den} wir gekauft haben, ist zu groß.', 'Cái bàn chúng tôi mua quá to.'),
        choose('Das Buch, ___ du mir geliehen hast, ist spannend.', ['das', 'den'], 'das'),
        order('Der Putzplan, / den / wir / gemacht / haben, / hängt / in der Küche.', 'Lịch dọn dẹp chúng tôi làm treo trong bếp.'),
        choose('Die Regeln, ___ alle kennen, sind einfach.', ['die', 'denen'], 'die'),
      ],
      'relativ-dat': [
        choose('Der Nachbar, ___ ich helfe, ist alt.', ['dem', 'den'], 'dem'),
        choose('Die Leute, ___ das Haus gehört, wohnen nicht hier.', ['denen', 'den'], 'denen'),
        fill('Die Frau, {der} ich das Paket gegeben habe, ist nett.', 'Người phụ nữ tôi đưa bưu kiện rất tốt bụng.'),
        choose('Das Kind, ___ ich ein Buch geschenkt habe, freut sich.', ['dem', 'das'], 'dem'),
        order('Der Hausmeister, / dem / alle / vertrauen, / ist / sehr nett.', 'Người quản lý mà mọi người tin tưởng rất tốt.'),
        fill('Die Kinder, {denen} der Hund gehört, sind laut.', 'Bọn trẻ có con chó rất ồn.'),
      ],
      'relativ-praep': [
        choose('Das ist der Freund, mit ___ ich wohne.', ['dem', 'den'], 'dem'),
        choose('Das Thema, über ___ wir sprechen, ist schwierig.', ['das', 'dem'], 'das'),
        fill('Die Stadt, {wo} ich wohne, ist ruhig.', 'Thành phố tôi sống rất yên tĩnh.', { alt: ['in der'] }),
        choose('Die Kollegen, mit ___ ich arbeite, sind nett.', ['denen', 'den'], 'denen'),
        order('Das ist der Brief, / auf den / ich / gewartet / habe.', 'Đây là lá thư tôi đã chờ.'),
        choose('Die Nachbarin, über ___ ich mich ärgere, ist laut.', ['die', 'der'], 'die'),
      ],
    },
    reading: {
      title_de: 'Leben im Generationenhaus',
      text_de:
        'Ich heiße Paul und wohne seit zwei Jahren in einem Generationenhaus in Leipzig. Hier leben junge Familien, Studenten und Rentner unter einem Dach. Jeder hat eine eigene Wohnung, aber es gibt einen Gemeinschaftsraum, in dem wir oft zusammen kochen. Frau Schulz, der ich manchmal beim Einkaufen helfe, passt dafür auf meine Tochter auf. Natürlich gibt es auch Konflikte, zum Beispiel über den Lärm. Aber wir haben Regeln, an die sich alle halten. Einmal im Monat gibt es ein Treffen, bei dem wir Probleme klären. Im Großen und Ganzen ist das Zusammenleben sehr harmonisch.',
      gloss: {
        eigene: 'riêng',
        'passt … auf': 'trông, chăm (aufpassen auf)',
        dafür: 'đổi lại',
        Treffen: 'buổi gặp mặt',
        einmal: 'một lần',
        Monat: 'tháng',
      },
      questions: [
        tf('Paul wohnt seit zwei Jahren im Generationenhaus.', true),
        mc('Trong phòng sinh hoạt chung, mọi người thường làm gì?', ['nấu ăn cùng nhau', 'xem phim', 'học bài'], 'nấu ăn cùng nhau'),
        mc('Bà Schulz giúp Paul việc gì?', ['trông con gái anh', 'đi chợ', 'dọn nhà'], 'trông con gái anh'),
        tf('Im Haus gibt es nie Konflikte.', false, { explain: 'Natürlich gibt es auch Konflikte, zum Beispiel über den Lärm.' }),
      ],
    },
  },
});
