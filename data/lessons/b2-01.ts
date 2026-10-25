// B2 · 01 Tính cách và quan hệ — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b2-01',
  points: [
    {
      key: 'nvv',
      rule_key: 'nomen-verb-verbindung',
      category: 'word_choice',
      title_vi: 'Cụm danh từ – động từ (Nomen-Verb-Verbindungen)',
      explanation_vi: 'Nghĩa nằm ở danh từ, động từ đi kèm cố định: Kritik üben (an + Dat), Rücksicht nehmen (auf + Akk), eine Entscheidung treffen, Verantwortung übernehmen. Phải học cả cụm, không thay động từ khác.',
    },
    {
      key: 'adj-praep',
      rule_key: 'adjektiv-praeposition',
      category: 'preposition',
      title_vi: 'Tính từ đi với giới từ',
      explanation_vi: 'Nhiều tính từ đi với giới từ cố định: stolz auf + Akk, zufrieden mit + Dat, abhängig von + Dat, interessiert an + Dat, neidisch auf + Akk. Hỏi bằng wo(r)+giới từ, nói lại bằng da(r)+giới từ.',
    },
    {
      key: 'adj-indefinit',
      rule_key: 'adjektivendung-indefinitpronomen',
      category: 'adjective_ending',
      title_vi: 'Đuôi tính từ sau viele, einige, alle, keine',
      explanation_vi: 'Sau viele, einige, mehrere, wenige, zwei… tính từ mang đuôi mạnh như không có mạo từ (viele gute Freunde). Sau alle, beide, keine, meine… (số nhiều) tính từ mang đuôi yếu -en (alle guten Freunde).',
    },
  ],
  lessons: [
    {
      title_vi: 'Cư xử và trách nhiệm',
      goal_vi: 'Nói về cách cư xử, lời trách móc và sự tha thứ bằng các cụm danh từ – động từ cố định.',
      items: [
        'Verhalten', 'Anerkennung', 'Enttäuschung', 'Erwartung', 'Rücksichtnahme', 'beeindrucken', 'enttäuschen', 'übernehmen',
        'sich verhalten', 'Verantwortung übernehmen', 'Rücksicht nehmen', 'Kritik üben', 'einen Eindruck machen',
        'in Kontakt bleiben', 'jemandem auf die Nerven gehen', 'unter vier Augen', 'Nomen-Verb-Verbindungen',
        'Hilfsbereitschaft', 'Ehrlichkeit', 'Höflichkeit', 'Gesprächsbereitschaft', 'Vorwurf', 'Kränkung', 'beleidigen',
        'kränken', 'verzeihen', 'vorwerfen', 'sich angegriffen fühlen', 'sich Zeit nehmen', 'ein offenes Ohr haben',
        'Vertrauen fassen', 'die Nase voll haben',
      ],
      grammar: {
        point: 'nvv',
        sections: [
          {
            text_vi:
              '**Nomen-Verb-Verbindung** là cụm **danh từ + động từ** dùng như một động từ: **eine Entscheidung treffen** = entscheiden, **Kritik üben** = kritisieren. Nghĩa nằm ở **danh từ**; động từ gần như "rỗng" nhưng **cố định**: nói *eine Entscheidung machen* là sai. Kiểu nói này hay gặp trong văn viết và đề B2, nên học **cả cụm** như một từ.',
            table: 'Cụm | Động từ tương ứng | Nghĩa\neine Entscheidung treffen | entscheiden | quyết định\nKritik üben | kritisieren | phê bình\nVerantwortung übernehmen | verantworten | nhận trách nhiệm\neinen Eindruck machen | beeindrucken | tạo ấn tượng\neinen Vorwurf machen | vorwerfen | trách móc',
            examples: [
              ['Wir müssen bald eine Entscheidung treffen.', 'Chúng ta phải sớm đưa ra quyết định.'],
              ['Er hat im Vorstellungsgespräch einen guten Eindruck gemacht.', 'Anh ấy đã tạo ấn tượng tốt trong buổi phỏng vấn.'],
            ],
            exercises: [
              choose('Wer ___ am Ende die Entscheidung?', ['trifft', 'macht', 'nimmt'], 'trifft', { vi: 'Cuối cùng ai là người quyết định?' }),
              fill('Sie hat einen sehr guten {Eindruck} gemacht.', 'Cô ấy đã tạo ấn tượng rất tốt.'),
              choose('Der Chef ___ die Verantwortung für den Fehler.', ['übernimmt', 'nimmt', 'gibt'], 'übernimmt', { vi: 'Sếp nhận trách nhiệm về lỗi đó.' }),
            ],
          },
          {
            text_vi:
              'Nhiều cụm có **giới từ cố định**: **Rücksicht nehmen auf** + Akk, **Kritik üben an** + Dat, **in Kontakt bleiben mit** + Dat, **Vertrauen fassen zu** + Dat. Trong câu, **động từ** chia ở vị trí 2, **danh từ** đứng gần cuối như phần thứ hai của khung câu: Er **übt** oft **Kritik** an seinen Kollegen. Perfekt: Er **hat** Kritik **geübt**.',
            examples: [
              ['Bitte nehmt Rücksicht auf die Nachbarn.', 'Các bạn hãy ý tứ với hàng xóm.'],
              ['Nach dem Umzug sind wir in Kontakt geblieben.', 'Sau khi chuyển nhà chúng tôi vẫn giữ liên lạc.'],
            ],
            exercises: [
              choose('Sie übte scharfe Kritik ___ dem Plan.', ['an', 'auf', 'über'], 'an', { vi: 'Cô ấy phê bình gay gắt kế hoạch đó.' }),
              fill('Man sollte Rücksicht {auf} ältere Menschen nehmen.', 'Nên ý tứ với người lớn tuổi.'),
              order('Langsam / fasste / das Kind / Vertrauen / zu / der neuen Lehrerin.', 'Dần dần đứa trẻ bắt đầu tin cô giáo mới.'),
            ],
          },
          {
            text_vi:
              'Một số cụm là **thành ngữ**, không dịch từng chữ: **jemandem auf die Nerven gehen** (làm ai phát bực), **die Nase voll haben von** (chán ngấy), **unter vier Augen** (nói riêng), **ein offenes Ohr haben für** (sẵn lòng lắng nghe), **sich Zeit nehmen für** (dành thời gian).',
            examples: [['Ich habe die Nase voll von seinen Ausreden.', 'Tôi chán ngấy những lời bào chữa của anh ta.']],
            exercises: [
              fill('Der Lärm {geht} mir auf die Nerven.', 'Tiếng ồn làm tôi phát bực.'),
              translate('Chúng ta có thể nói chuyện riêng không?', ['Können wir unter vier Augen sprechen?', 'Können wir unter vier Augen reden?', 'Können wir kurz unter vier Augen sprechen?']),
            ],
          },
        ],
        mixed: [
          choose('Bitte ___ Rücksicht auf die anderen Gäste!', ['nehmt', 'macht', 'gebt'], 'nehmt', { vi: 'Hãy ý tứ với các vị khách khác!' }),
          fill('Er hat nie Verantwortung für seine Fehler {übernommen}.', 'Anh ta chưa bao giờ nhận trách nhiệm về lỗi của mình.'),
          transform('Viết lại với "eine Entscheidung treffen"', 'Wir entscheiden morgen.', ['Wir treffen morgen eine Entscheidung.', 'Morgen treffen wir eine Entscheidung.']),
          choose('Meine Schwester hat immer ein offenes ___ für mich.', ['Ohr', 'Auge', 'Herz'], 'Ohr', { vi: 'Chị tôi luôn sẵn lòng lắng nghe tôi.' }),
          order('Sie / hat / ihm / keinen Vorwurf / gemacht.', 'Cô ấy đã không trách móc anh ấy.'),
        ],
      },
      dialogue: {
        title_de: 'Ärger in der WG',
        lines: [
          { speaker: 'A', de: 'Hast du kurz Zeit? Ich möchte mit dir unter vier Augen sprechen.', vi: 'Bạn rảnh một chút không? Mình muốn nói chuyện riêng với bạn.' },
          { speaker: 'B', de: 'Klar. Was ist los? Du siehst enttäuscht aus.', vi: 'Được chứ. Có chuyện gì vậy? Trông bạn có vẻ thất vọng.' },
          { speaker: 'A', de: 'Ehrlich gesagt habe ich die Nase voll. Die laute Musik in der Nacht geht mir auf die Nerven.', vi: 'Nói thật là mình chán ngấy rồi. Nhạc to ban đêm làm mình phát bực.' },
          { speaker: 'B', de: 'Oh, das tut mir leid. Ich wollte dich nicht kränken.', vi: 'Ồ, mình xin lỗi. Mình không muốn làm bạn tổn thương.' },
          { speaker: 'A', de: 'Ich will dir keinen Vorwurf machen, aber ich erwarte ein bisschen mehr Rücksichtnahme.', vi: 'Mình không muốn trách bạn, nhưng mình mong bạn ý tứ hơn một chút.' },
          { speaker: 'B', de: 'Das verstehe ich. Ich übernehme die Verantwortung und nehme in Zukunft mehr Rücksicht.', vi: 'Mình hiểu. Mình nhận trách nhiệm và từ nay sẽ ý tứ hơn.' },
          { speaker: 'A', de: 'Danke. Ich fühle mich jetzt nicht mehr so angegriffen, wenn ich das anspreche.', vi: 'Cảm ơn. Giờ mình không còn thấy bị công kích khi nói ra chuyện này.' },
          { speaker: 'B', de: 'Gut, dass du so ehrlich bist. Ich schätze deine Gesprächsbereitschaft.', vi: 'May mà bạn thẳng thắn như vậy. Mình quý thiện chí đối thoại của bạn.' },
          { speaker: 'A', de: 'Dann verzeihe ich dir. Und du hast bei mir immer ein offenes Ohr.', vi: 'Vậy mình tha thứ cho bạn. Và bạn luôn có mình lắng nghe.' },
        ],
        gloss: { WG: 'nhà ở chung', 'ehrlich gesagt': 'nói thật', anspreche: 'nói ra, đề cập (ansprechen)', schätze: 'quý trọng (schätzen)' },
        questions: [
          mc('A muốn nói chuyện với B như thế nào?', ['riêng hai người', 'trong cuộc họp nhà', 'qua điện thoại'], 'riêng hai người'),
          mc('Điều gì làm A phát bực?', ['nhạc to ban đêm', 'bếp bẩn', 'B hay đến muộn'], 'nhạc to ban đêm'),
          tf('B reagiert beleidigt und will nichts ändern.', false, { explain: 'Ich übernehme die Verantwortung und nehme in Zukunft mehr Rücksicht.' }),
          tf('Am Ende verzeiht A seinem Mitbewohner.', true),
        ],
        dictation: [2, 5],
      },
      writing_prompt_vi:
        'Viết một tin nhắn (5–6 câu) cho bạn cùng nhà hoặc đồng nghiệp về một việc làm bạn khó chịu: nêu vấn đề lịch sự, nói điều bạn mong đợi; dùng ít nhất ba cụm như Rücksicht nehmen, Verantwortung übernehmen, einen Vorwurf machen.',
    },
    {
      title_vi: 'Tính cách',
      goal_vi: 'Miêu tả tính cách của bản thân và người khác; dùng đúng giới từ sau tính từ như stolz auf, zufrieden mit.',
      items: [
        'Persönlichkeit', 'Charakter', 'Eigenschaft', 'Temperament', 'Selbstbewusstsein', 'Selbstwertgefühl',
        'Einfühlungsvermögen', 'Zuverlässigkeit', 'Ehrgeiz', 'Neugier', 'Geduld', 'Humor', 'Vorbild', 'schätzen', 'bewundern',
        'verachten', 'neigen', 'zurückhaltend', 'aufgeschlossen', 'ehrgeizig', 'empfindlich', 'gelassen', 'launisch',
        'neugierig', 'stur', 'verlässlich', 'kontaktfreudig', 'schüchtern', 'oberflächlich', 'tiefgründig', 'vertrauenswürdig',
        'Tính từ đi với giới từ', 'Gewissen', 'Verlegenheit', 'Gelassenheit', 'Unsicherheit', 'Vorliebe', 'Charakterzug',
        'unberechenbar', 'bodenständig',
      ],
      grammar: {
        point: 'adj-praep',
        sections: [
          {
            text_vi:
              'Nhiều tính từ đi với **giới từ cố định** và giới từ quyết định **cách**: **stolz auf** + Akk, **neidisch auf** + Akk, **verliebt in** + Akk, **zufrieden mit** + Dat, **abhängig von** + Dat, **interessiert an** + Dat, **gespannt auf** + Akk. Tiếng Việt thường không có giới từ ở đây ("tự hào về", "hài lòng với"), nên phải học cả cụm.',
            table: 'Tính từ | Giới từ + cách | Ví dụ\nstolz | auf + Akk | stolz auf seinen Sohn\nzufrieden | mit + Dat | zufrieden mit dem Ergebnis\nabhängig | von + Dat | abhängig von den Eltern\ninteressiert | an + Dat | interessiert an Politik\nneidisch | auf + Akk | neidisch auf ihren Erfolg',
            examples: [
              ['Sie ist sehr stolz auf ihre Tochter.', 'Bà ấy rất tự hào về con gái.'],
              ['Mit dem Ergebnis bin ich nicht zufrieden.', 'Tôi không hài lòng với kết quả.'],
            ],
            exercises: [
              choose('Er ist stolz ___ seine Arbeit.', ['auf', 'an', 'mit'], 'auf', { vi: 'Anh ấy tự hào về công việc của mình.' }),
              fill('Bist du mit deinem neuen Job {zufrieden}?', 'Bạn có hài lòng với công việc mới không?'),
              choose('Viele junge Leute sind finanziell abhängig ___ ihren Eltern.', ['von', 'an', 'auf'], 'von', { vi: 'Nhiều người trẻ phụ thuộc tài chính vào bố mẹ.' }),
            ],
          },
          {
            text_vi:
              'Giới từ kéo theo đúng **cách**: stolz auf **den** Erfolg (Akk), zufrieden mit **dem** Erfolg (Dat). Hỏi về vật dùng **wo(r)** + giới từ: **Worauf** bist du stolz? **Womit** bist du zufrieden? Nói lại bằng **da(r)** + giới từ: Ich bin stolz **darauf**, dass ich es geschafft habe. Hỏi về người: **Auf wen** bist du neidisch?',
            examples: [
              ['Worauf bist du am meisten stolz?', 'Bạn tự hào nhất về điều gì?'],
              ['Ich bin gespannt darauf, wie es weitergeht.', 'Tôi rất háo hức xem chuyện tiếp diễn thế nào.'],
            ],
            exercises: [
              choose('___ bist du so stolz? – Auf meine Prüfung.', ['Worauf', 'Wofür', 'Womit'], 'Worauf', { vi: 'Bạn tự hào về điều gì vậy? – Về kỳ thi của tôi.' }),
              fill('Er ist neidisch auf {den} Erfolg seines Bruders.', 'Anh ấy ghen tị với thành công của anh trai.'),
              choose('Ich bin sehr gespannt ___, wie sie reagiert.', ['darauf', 'damit', 'davon'], 'darauf', { vi: 'Tôi rất háo hức xem cô ấy phản ứng thế nào.' }),
            ],
          },
          {
            text_vi:
              'Một số **động từ** về tính cách cũng đi với giới từ: **neigen zu** + Dat (có xu hướng): Er neigt **zu** Übertreibungen. Còn **schätzen**, **bewundern**, **verachten** đi thẳng với **Akkusativ**: Ich bewundere **ihren** Mut. Tính từ trái nghĩa hay gặp: **schüchtern** – **kontaktfreudig**, **launisch** – **gelassen**, **oberflächlich** – **tiefgründig**.',
            examples: [['Sie neigt dazu, alles zu kritisieren.', 'Cô ấy có xu hướng chỉ trích mọi thứ.']],
            exercises: [
              fill('Er neigt {zu} Übertreibungen.', 'Anh ấy hay nói quá.'),
              translate('Tôi ngưỡng mộ sự kiên nhẫn của cô ấy.', ['Ich bewundere ihre Geduld.']),
            ],
          },
        ],
        mixed: [
          choose('Sie ist sehr interessiert ___ Politik.', ['an', 'für', 'auf'], 'an', { vi: 'Cô ấy rất quan tâm đến chính trị.' }),
          fill('Wir sind mit {dem} Hotel sehr zufrieden.', 'Chúng tôi rất hài lòng với khách sạn.'),
          choose('Ich bin stolz ___, dass ich die Prüfung bestanden habe.', ['darauf', 'dafür', 'daran'], 'darauf', { vi: 'Tôi tự hào vì đã đỗ kỳ thi.' }),
          order('Mein Bruder / ist / in / seine Kollegin / verliebt.', 'Anh trai tôi phải lòng đồng nghiệp của anh ấy.'),
          choose('___ bist du abhängig? – Von meinem Stipendium.', ['Wovon', 'Woran', 'Worauf'], 'Wovon', { vi: 'Bạn phụ thuộc vào cái gì? – Vào học bổng.' }),
        ],
      },
      dialogue: {
        title_de: 'Wie bist du eigentlich?',
        lines: [
          { speaker: 'A', de: 'Für das Seminar sollen wir uns gegenseitig beschreiben. Wie würdest du deinen Charakter beschreiben?', vi: 'Cho buổi seminar, chúng ta phải mô tả lẫn nhau. Bạn sẽ mô tả tính cách mình thế nào?' },
          { speaker: 'B', de: 'Hm, ich bin eher zurückhaltend und manchmal ein bisschen schüchtern.', vi: 'Hừm, mình khá dè dặt và đôi khi hơi nhút nhát.' },
          { speaker: 'A', de: 'Das finde ich nicht. Du bist sehr verlässlich, und alle schätzen deinen Humor.', vi: 'Mình không thấy vậy. Bạn rất đáng tin cậy và ai cũng quý khiếu hài hước của bạn.' },
          { speaker: 'B', de: 'Danke! Und du? Du bist ehrgeizig, aber trotzdem gelassen. Diese Eigenschaft bewundere ich.', vi: 'Cảm ơn! Còn bạn? Bạn đầy tham vọng nhưng vẫn điềm tĩnh. Mình ngưỡng mộ đặc điểm này.' },
          { speaker: 'A', de: 'Nicht immer. Vor Prüfungen bin ich ziemlich launisch und neige zu Unsicherheit.', vi: 'Không phải lúc nào cũng thế. Trước kỳ thi mình khá thất thường và hay bất an.' },
          { speaker: 'B', de: 'Aber am Ende bist du immer zufrieden mit deinen Noten.', vi: 'Nhưng cuối cùng bạn luôn hài lòng với điểm số.' },
          { speaker: 'A', de: 'Stimmt, und darauf bin ich auch ein bisschen stolz.', vi: 'Đúng, và mình cũng hơi tự hào về điều đó.' },
          { speaker: 'B', de: 'Wer ist eigentlich dein Vorbild?', vi: 'Mà tấm gương của bạn là ai?' },
          { speaker: 'A', de: 'Meine Oma. Sie ist bodenständig, neugierig und hat unglaublich viel Geduld.', vi: 'Bà mình. Bà chân chất, tò mò và vô cùng kiên nhẫn.' },
        ],
        gloss: { Seminar: 'buổi seminar', gegenseitig: 'lẫn nhau', beschreiben: 'mô tả', eher: 'khá là, đúng hơn là', unglaublich: 'không thể tin được' },
        questions: [
          mc('B tự mô tả mình thế nào?', ['dè dặt và hơi nhút nhát', 'thích giao tiếp', 'bướng bỉnh'], 'dè dặt và hơi nhút nhát'),
          tf('A findet B unzuverlässig.', false, { explain: 'Du bist sehr verlässlich.' }),
          mc('Trước kỳ thi A thế nào?', ['thất thường và bất an', 'rất điềm tĩnh', 'luôn vui vẻ'], 'thất thường và bất an'),
          tf('Das Vorbild von A ist die Großmutter.', true),
        ],
        dictation: [1, 4],
      },
      writing_prompt_vi:
        'Mô tả tính cách của một người bạn ngưỡng mộ (5–7 câu): ba đặc điểm, một nhược điểm, và điều bạn học được từ người đó; dùng ít nhất ba tính từ có giới từ (stolz auf, zufrieden mit, interessiert an…).',
    },
    {
      title_vi: 'Tình bạn và quan hệ',
      goal_vi: 'Nói về bạn bè, quan hệ và xung đột; chia đúng đuôi tính từ sau viele, einige, alle, keine.',
      items: [
        'Bezugsperson', 'Bekanntschaft', 'Partnerschaft', 'Zuneigung', 'Abneigung', 'Eifersucht', 'Konfliktfähigkeit',
        'sich verlassen', 'sich anvertrauen', 'sich auseinandersetzen', 'sich zurückziehen', 'Đuôi tính từ sau đại từ bất định',
        'Đuôi tính từ sau alle, keine (số nhiều)', 'Mitgefühl', 'Freundeskreis', 'Clique', 'Lebenspartner', 'Trennung',
        'Scheidung', 'sich einfühlen', 'wertschätzen', 'sich öffnen', 'zurechtkommen', 'auskommen', 'ausgleichen',
        'ausgeglichen', 'temperamentvoll', 'nachtragend', 'verständnisvoll', 'rücksichtslos', 'zuvorkommend', 'unzuverlässig',
        'selbstkritisch', 'harmoniebedürftig', 'gutmütig', 'auf einer Wellenlänge sein', 'jemanden im Stich lassen',
        'Freundschaftsdienst', 'sich anfreunden', 'sich entfremden', 'ein Herz und eine Seele sein',
        'jemandem den Rücken stärken',
      ],
      grammar: {
        point: 'adj-indefinit',
        sections: [
          {
            text_vi:
              'Sau **viele, einige, mehrere, wenige** và số đếm (zwei, drei…) tính từ số nhiều mang **đuôi mạnh**, giống như khi không có mạo từ: Nom/Akk **-e**, Dat **-en**, Gen **-er**. Vì các từ này không cho biết cách, tính từ phải "gánh" đuôi: viele **gute** Freunde, mit einigen **alten** Bekannten.',
            table: 'Cách | viele + tính từ | Ví dụ\nNominativ | -e | viele nette Kollegen\nAkkusativ | -e | Ich habe einige gute Ideen.\nDativ | -en (+ danh từ -n) | mit mehreren engen Freunden\nGenitiv | -er | die Meinung vieler junger Leute',
            examples: [
              ['Er hat viele gute Freunde.', 'Anh ấy có nhiều bạn tốt.'],
              ['Ich habe mit einigen alten Bekannten gesprochen.', 'Tôi đã nói chuyện với vài người quen cũ.'],
            ],
            exercises: [
              fill('In meiner Clique gibt es viele {lustige} Leute.', 'Trong nhóm bạn tôi có nhiều người vui tính.'),
              choose('Sie wohnt mit zwei ___ Freundinnen zusammen.', ['guten', 'gute', 'guter'], 'guten', { vi: 'Cô ấy sống chung với hai người bạn tốt.' }),
              fill('Einige {neue} Kollegen kommen aus Spanien.', 'Vài đồng nghiệp mới đến từ Tây Ban Nha.'),
            ],
          },
          {
            text_vi:
              'Sau **alle, beide, keine** và mạo từ sở hữu số nhiều (**meine, deine, unsere**…) tính từ mang **đuôi yếu -en** ở mọi cách, vì từ đứng trước đã cho biết cách: **alle guten** Freunde, **keine neuen** Ideen, mit **meinen besten** Freunden. Mẹo: có từ "mạnh" phía trước (alle, keine, die) thì tính từ chỉ cần **-en**.',
            table: 'Từ đứng trước | Đuôi tính từ | Ví dụ\nviele, einige, mehrere, zwei | mạnh (-e, -en, -er) | viele gute Ideen\nalle, beide, keine, meine | yếu (-en) | alle guten Ideen\ndie (số nhiều) | yếu (-en) | die guten Ideen',
            examples: [
              ['Alle neuen Kollegen sind sehr hilfsbereit.', 'Tất cả đồng nghiệp mới đều rất nhiệt tình.'],
              ['Ich habe keine engen Freunde in der Stadt.', 'Tôi không có bạn thân nào trong thành phố.'],
            ],
            exercises: [
              choose('Alle ___ Studenten müssen sich anmelden.', ['neuen', 'neue', 'neuer'], 'neuen', { vi: 'Tất cả sinh viên mới phải đăng ký.' }),
              fill('Ich treffe mich oft mit meinen {alten} Schulfreunden.', 'Tôi hay gặp những người bạn học cũ.'),
              choose('Viele ___ Menschen ziehen sich zurück.', ['schüchterne', 'schüchternen'], 'schüchterne', { vi: 'Nhiều người nhút nhát hay thu mình lại.' }),
            ],
          },
        ],
        mixed: [
          choose('Beide ___ Schwestern sind sehr verständnisvoll.', ['älteren', 'ältere'], 'älteren', { vi: 'Cả hai chị gái đều rất thấu hiểu.' }),
          fill('Mehrere {enge} Freunde haben mir geholfen.', 'Vài người bạn thân đã giúp tôi.'),
          choose('Ich habe keine ___ Erwartungen mehr.', ['großen', 'große'], 'großen', { vi: 'Tôi không còn kỳ vọng lớn nào nữa.' }),
          fill('Er hat nur wenige {echte} Freunde.', 'Anh ấy chỉ có ít bạn thật sự.'),
          order('Ich / kann / mich / auf / alle / meine / guten Freunde / verlassen.', 'Tôi có thể tin cậy tất cả bạn tốt của mình.'),
          choose('Die Meinung vieler ___ Leute ist wichtig.', ['junger', 'jungen', 'junge'], 'junger', { vi: 'Ý kiến của nhiều người trẻ là quan trọng.' }),
        ],
      },
      dialogue: {
        title_de: 'Alte Freundschaften',
        lines: [
          { speaker: 'A', de: 'Hast du noch Kontakt zu deinen alten Schulfreunden?', vi: 'Bạn còn liên lạc với những người bạn học cũ không?' },
          { speaker: 'B', de: 'Nur mit wenigen. Von vielen guten Freunden habe ich mich leider entfremdet.', vi: 'Chỉ với vài người. Tiếc là mình đã xa cách nhiều người bạn tốt.' },
          { speaker: 'A', de: 'Das kenne ich. Nach dem Umzug ist mein Freundeskreis auch kleiner geworden.', vi: 'Mình hiểu. Sau khi chuyển nhà nhóm bạn của mình cũng nhỏ lại.' },
          { speaker: 'B', de: 'Aber mit Lena bin ich immer noch ein Herz und eine Seele. Auf sie kann ich mich verlassen.', vi: 'Nhưng với Lena mình vẫn thân thiết như một. Mình có thể tin cậy cô ấy.' },
          { speaker: 'A', de: 'Wie habt ihr euch kennengelernt?', vi: 'Hai bạn quen nhau thế nào?' },
          { speaker: 'B', de: 'In der fünften Klasse. Wir waren sofort auf einer Wellenlänge.', vi: 'Hồi lớp năm. Bọn mình hợp nhau ngay.' },
          { speaker: 'A', de: 'Und habt ihr nie Streit?', vi: 'Thế các bạn không bao giờ cãi nhau à?' },
          { speaker: 'B', de: 'Doch, aber wir setzen uns mit Konflikten auseinander. Keiner von uns ist nachtragend.', vi: 'Có chứ, nhưng bọn mình đối mặt với mâu thuẫn. Không ai trong hai đứa để bụng.' },
          { speaker: 'A', de: 'Das ist wichtig. Alle echten Freundschaften brauchen Konfliktfähigkeit.', vi: 'Điều đó quan trọng. Mọi tình bạn thật sự đều cần khả năng xử lý mâu thuẫn.' },
          { speaker: 'B', de: 'Genau. Und als ich meine Trennung hatte, hat sie mir den Rücken gestärkt.', vi: 'Đúng vậy. Và khi mình chia tay, cô ấy đã ủng hộ mình.' },
        ],
        gloss: { Schulfreunden: 'bạn học (Schulfreund)', Umzug: 'việc chuyển nhà', Streit: 'cuộc cãi nhau', keiner: 'không ai', echten: 'thật sự (echt)' },
        questions: [
          tf('B hat noch Kontakt zu allen alten Schulfreunden.', false, { explain: 'Nur mit wenigen.' }),
          mc('B và Lena quen nhau khi nào?', ['hồi lớp năm', 'ở đại học', 'ở chỗ làm'], 'hồi lớp năm'),
          mc('Khi có mâu thuẫn, B và Lena làm gì?', ['đối mặt và giải quyết', 'không nói chuyện nữa', 'nhờ người khác'], 'đối mặt và giải quyết'),
          tf('Lena hat B bei der Trennung unterstützt.', true),
        ],
        dictation: [1, 8],
      },
      writing_prompt_vi:
        'Viết về một tình bạn quan trọng với bạn (6–8 câu): quen nhau thế nào, vì sao hợp nhau, một lần mâu thuẫn và cách giải quyết; dùng viele, einige, alle hoặc keine kèm tính từ ít nhất ba lần.',
    },
  ],
  test: {
    grammar: {
      nvv: [
        choose('Wir müssen heute eine Entscheidung ___.', ['treffen', 'machen', 'nehmen'], 'treffen'),
        fill('Er übt oft Kritik {an} seinem Chef.', 'Anh ấy hay phê bình sếp.'),
        choose('Sie hat bei der Präsentation einen guten Eindruck ___.', ['gemacht', 'getroffen', 'genommen'], 'gemacht'),
        fill('Bitte nehmen Sie {Rücksicht} auf die Nachbarn.', 'Xin hãy ý tứ với hàng xóm.'),
        order('Niemand / will / die Verantwortung / übernehmen.', 'Không ai muốn nhận trách nhiệm.'),
        choose('Seine Ausreden gehen mir auf die ___.', ['Nerven', 'Augen', 'Ohren'], 'Nerven'),
      ],
      'adj-praep': [
        choose('Die Eltern sind stolz ___ ihren Sohn.', ['auf', 'an', 'von'], 'auf'),
        fill('Ich bin mit {dem} Ergebnis zufrieden.', 'Tôi hài lòng với kết quả.'),
        choose('Er ist sehr interessiert ___ Geschichte.', ['an', 'für', 'auf'], 'an'),
        choose('___ bist du neidisch?', ['Worauf', 'Woran', 'Womit'], 'Worauf'),
        fill('Kinder sind von {ihren} Eltern abhängig.', 'Trẻ em phụ thuộc vào bố mẹ.'),
        order('Ich / bin / gespannt / auf / den neuen Film.', 'Tôi háo hức chờ bộ phim mới.'),
      ],
      'adj-indefinit': [
        fill('Er hat viele {gute} Ideen.', 'Anh ấy có nhiều ý tưởng hay.'),
        choose('Alle ___ Mitarbeiter bekommen einen Laptop.', ['neuen', 'neue'], 'neuen'),
        choose('Ich habe einige ___ Bücher gekauft.', ['interessante', 'interessanten'], 'interessante'),
        fill('Sie spricht mit mehreren {alten} Freunden.', 'Cô ấy nói chuyện với vài người bạn cũ.'),
        choose('Wir haben keine ___ Probleme.', ['großen', 'große'], 'großen'),
        choose('Die Hilfe vieler ___ Menschen war wichtig.', ['freundlicher', 'freundlichen', 'freundliche'], 'freundlicher'),
      ],
    },
    reading: {
      title_de: 'Was macht eine gute Freundschaft aus?',
      text_de:
        'Eine Umfrage unter 2000 Erwachsenen zeigt, was Menschen von Freunden erwarten. Für die meisten ist Ehrlichkeit die wichtigste Eigenschaft. Viele Befragte sagen, dass sie sich in schwierigen Zeiten auf ihre Freunde verlassen wollen. Ein guter Freund hat ein offenes Ohr und lässt einen nicht im Stich. Interessant ist, dass gemeinsame Hobbys weniger wichtig sind als gedacht. Wichtiger ist, auf einer Wellenlänge zu sein. Allerdings berichten einige Befragte auch, dass sie sich nach einem Umzug oder einer Trennung von alten Freunden entfremdet haben. Experten empfehlen deshalb, sich bewusst Zeit für Freundschaften zu nehmen.',
      gloss: {
        Umfrage: 'cuộc khảo sát',
        Erwachsenen: 'người trưởng thành',
        Befragte: 'người được hỏi',
        gemeinsame: 'chung',
        'als gedacht': 'so với suy nghĩ',
        berichten: 'kể lại, báo cáo',
        bewusst: 'có ý thức, chủ động',
      },
      questions: [
        mc('Theo khảo sát, đặc điểm quan trọng nhất ở bạn bè là gì?', ['sự trung thực', 'sở thích chung', 'khiếu hài hước'], 'sự trung thực'),
        tf('Gemeinsame Hobbys sind für die meisten das Wichtigste.', false, { explain: 'Gemeinsame Hobbys sind weniger wichtig als gedacht.' }),
        mc('Sau khi chuyển nhà hoặc chia tay, một số người đã thế nào?', ['xa cách bạn cũ', 'có nhiều bạn mới hơn', 'không thay đổi gì'], 'xa cách bạn cũ'),
        tf('Experten raten, sich bewusst Zeit für Freunde zu nehmen.', true),
      ],
    },
  },
});
