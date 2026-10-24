// A2 · 10 Truyền thông và công nghệ — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a2-10',
  points: [
    {
      key: 'verb-praep',
      rule_key: 'verb-mit-praeposition',
      category: 'preposition',
      title_vi: 'Động từ đi với giới từ cố định',
      explanation_vi: 'Học cả cụm: warten auf + Akk, denken an + Akk, sich interessieren für + Akk, sich ärgern über + Akk, sich freuen auf + Akk, Angst haben vor + Dat.',
    },
    {
      key: 'wo-da',
      rule_key: 'wo-da-praeposition',
      category: 'preposition',
      title_vi: 'wo(r) + giới từ (hỏi) và da(r) + giới từ (thay thế)',
      explanation_vi: 'Hỏi về vật: Worauf? Wofür? Woran? Thay vật đã nhắc: darauf, dafür, daran. Với người: Auf wen? – auf ihn.',
    },
    {
      key: 'zu-inf',
      rule_key: 'zu-infinitiv',
      category: 'verb_position',
      title_vi: 'zu + Infinitiv',
      explanation_vi: 'Sau vergessen, versuchen, anfangen, Lust/Zeit haben, es ist wichtig…: …, die Datei zu speichern. Động từ tách: herunterzuladen. Không dùng zu sau động từ khuyết thiếu.',
    },
  ],
  lessons: [
    {
      title_vi: 'Chờ tin nhắn',
      goal_vi: 'Nói mình chờ, nghĩ, quan tâm, bực về điều gì; dùng động từ đi với giới từ.',
      items: [
        'Nachricht', 'Zeitung', 'Zeitschrift', 'Sendung', 'Radio', 'Fernseher', 'Werbung', 'Medien', 'warten auf',
        'sich interessieren', 'sich ärgern', 'erreichen', 'aktuell', 'Ich melde mich', 'Động từ đi với giới từ',
        'Kontakt', 'verschieben', 'vereinbaren',
      ],
      grammar: {
        point: 'verb-praep',
        sections: [
          {
            text_vi:
              'Nhiều động từ đi kèm **giới từ cố định**, phải học cả cụm: **warten auf** + Akk (chờ), **denken an** + Akk (nghĩ đến), **sich interessieren für** + Akk (quan tâm), **sich ärgern über** + Akk (bực vì), **sich freuen auf** + Akk (mong đợi). Tiếng Việt "chờ bạn" không cần giới từ; tiếng Đức bắt buộc: Ich warte **auf** dich.',
            table: 'Động từ + giới từ | Ví dụ\nwarten auf + Akk | Ich warte auf den Bus.\ndenken an + Akk | Ich denke an dich.\nsich interessieren für | Er interessiert sich für Technik.\nsich ärgern über | Ich ärgere mich über die Werbung.',
            examples: [
              ['Ich warte auf deine Nachricht.', 'Tôi chờ tin nhắn của bạn.'],
              ['Sie interessiert sich für Politik.', 'Cô ấy quan tâm đến chính trị.'],
            ],
            exercises: [
              choose('Ich warte ___ den Bus.', ['auf', 'für', 'an'], 'auf', { vi: 'Tôi chờ xe buýt.' }),
              choose('Er interessiert sich ___ Fußball.', ['für', 'auf', 'über'], 'für', { vi: 'Anh ấy quan tâm đến bóng đá.' }),
              fill('Ich denke oft {an} meine Familie.', 'Tôi hay nghĩ đến gia đình.'),
            ],
          },
          {
            text_vi:
              'Giới từ quyết định cách: phần lớn các cụm trên đi với **Akkusativ** (auf, für, über, an): Ich ärgere mich über **den** langsamen Computer. Một số đi với Dativ: **Angst haben vor** + Dat, **teilnehmen an** + Dat. Khi học từ mới, ghi luôn cả giới từ và cách: warten **auf + Akk**.',
            examples: [['Ich ärgere mich über die viele Werbung im Fernsehen.', 'Tôi bực vì quá nhiều quảng cáo trên TV.']],
            exercises: [
              choose('Ich ärgere mich über ___ Werbung.', ['die', 'der'], 'die', { vi: 'Tôi bực vì quảng cáo.' }),
              fill('Wir freuen uns {auf} das Wochenende.', 'Chúng tôi mong đến cuối tuần.'),
              choose('Ich habe Angst ___ Hunden.', ['vor', 'auf', 'für'], 'vor', { vi: 'Tôi sợ chó.' }),
            ],
          },
          {
            text_vi:
              'Liên lạc: **erreichen** (liên lạc được): Ich kann dich nicht **erreichen**. Hứa liên lạc lại: **Ich melde mich** morgen. Truyền thông: **Zeitung** (báo), **Zeitschrift** (tạp chí), **Sendung** (chương trình), **Werbung** (quảng cáo), **aktuelle Nachrichten** (tin thời sự).',
            examples: [['Ich melde mich heute Abend bei dir.', 'Tối nay tôi sẽ liên lạc với bạn.']],
            exercises: [
              translate('Tôi không liên lạc được với anh ấy.', ['Ich kann ihn nicht erreichen.']),
              order('Ich / melde / mich / morgen.', 'Mai tôi sẽ liên lạc.'),
            ],
          },
        ],
        mixed: [
          translate('Tôi chờ bạn.', ['Ich warte auf dich.']),
          choose('Sie freut sich ___ die Ferien.', ['auf', 'für', 'an'], 'auf', { vi: 'Cô ấy mong kỳ nghỉ.' }),
          fill('Er interessiert sich {für} Medien.', 'Anh ấy quan tâm đến truyền thông.'),
          transform('Viết câu với warten auf (die Antwort)', 'Ich warte …', ['Ich warte auf die Antwort.']),
          order('Ich / ärgere / mich / über / den Computer.', 'Tôi bực vì cái máy tính.'),
        ],
      },
      dialogue: {
        title_de: 'Keine Antwort',
        lines: [
          { speaker: 'A', de: 'Warum bist du so nervös?', vi: 'Sao bạn bồn chồn thế?' },
          { speaker: 'B', de: 'Ich warte auf eine Nachricht von Minh. Er antwortet nicht.', vi: 'Mình chờ tin nhắn của Minh. Anh ấy không trả lời.' },
          { speaker: 'A', de: 'Vielleicht hat er kein Netz.', vi: 'Có lẽ anh ấy không có sóng.' },
          { speaker: 'B', de: 'Ich kann ihn seit gestern nicht erreichen. Ich ärgere mich wirklich!', vi: 'Từ hôm qua mình không liên lạc được. Mình bực thật sự!' },
          { speaker: 'A', de: 'Denk nicht immer an ihn. Lies doch die Zeitung oder hör Radio.', vi: 'Đừng nghĩ đến anh ấy suốt. Đọc báo hay nghe đài đi.' },
          { speaker: 'B', de: 'Das interessiert mich jetzt nicht.', vi: 'Giờ mình không quan tâm mấy thứ đó.' },
          { speaker: 'A', de: 'Oh, schau! Eine Nachricht: Sorry, mein Handy war kaputt. Ich melde mich heute Abend!', vi: 'Ồ, nhìn kìa! Có tin nhắn: Xin lỗi, điện thoại anh bị hỏng. Tối nay anh liên lạc nhé!' },
          { speaker: 'B', de: 'Endlich! Jetzt freue ich mich auf heute Abend.', vi: 'Cuối cùng! Giờ mình mong đến tối nay.' },
        ],
        gloss: { Netz: 'sóng điện thoại', sorry: 'xin lỗi (thân mật)', Handy: 'điện thoại di động' },
        questions: [
          mc('B chờ gì?', ['tin nhắn của Minh', 'một email', 'cuộc gọi của mẹ'], 'tin nhắn của Minh'),
          tf('B kann Minh seit gestern nicht erreichen.', true),
          mc('Vì sao Minh không trả lời?', ['điện thoại bị hỏng', 'không có sóng', 'quên'], 'điện thoại bị hỏng'),
          tf('Am Ende ärgert sich B noch.', false, { explain: 'Jetzt freue ich mich auf heute Abend.' }),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Viết 5 câu về bạn và truyền thông: bạn quan tâm gì (sich interessieren für), bực vì gì (sich ärgern über), chờ gì (warten auf).',
    },
    {
      title_vi: 'Worauf? Darauf!',
      goal_vi: 'Hỏi về vật với wo(r)-, thay vật bằng da(r)-; nói chuyện điện thoại, mạng.',
      items: [
        'Handy', 'Internet', 'Webseite', 'Video', 'App', 'Kamera', 'Netz', 'Akku', 'Ladegerät', 'chatten', 'surfen',
        'schicken', 'aufladen', 'online', 'süchtig', 'schnell', 'langsam', 'Hỏi về vật: wo(r) + giới từ',
        'Thay vật bằng da(r) + giới từ',
        'berichten',
      ],
      grammar: {
        point: 'wo-da',
        sections: [
          {
            text_vi:
              'Hỏi về **vật, sự việc** đi với động từ + giới từ: **wo(r) + giới từ**: **Worauf** wartest du? **Wofür** interessierst du dich? **Woran** denkst du? Thêm **r** khi giới từ bắt đầu bằng nguyên âm (wo**r**auf, wo**r**an). Hỏi về **người**: giới từ + wen/wem: **Auf wen** wartest du?',
            table: 'Về vật | Về người\nWorauf wartest du? | Auf wen wartest du?\nWofür interessierst du dich? | Für wen …?\nWoran denkst du? | An wen denkst du?',
            examples: [
              ['Worauf wartest du? – Auf den Bus.', 'Bạn chờ gì? – Chờ xe buýt.'],
              ['Auf wen wartest du? – Auf meine Freundin.', 'Bạn chờ ai? – Chờ bạn gái.'],
            ],
            exercises: [
              choose('___ wartest du? – Auf eine E-Mail.', ['Worauf', 'Auf wen', 'Wofür'], 'Worauf', { vi: 'Bạn chờ gì? – Chờ một email.' }),
              choose('___ denkst du? – An meine Mutter.', ['An wen', 'Woran'], 'An wen', { vi: 'Bạn nghĩ đến ai? – Đến mẹ tôi.' }),
              fill('{Wofür} interessierst du dich? – Für Computer.', 'Bạn quan tâm đến gì? – Máy tính.'),
            ],
          },
          {
            text_vi:
              'Thay **vật** đã nhắc bằng **da(r) + giới từ**: Wartest du auf den Bus? – Ja, ich warte **darauf**. Interessierst du dich für Apps? – Ja, ich interessiere mich **dafür**. Với **người** thì dùng giới từ + đại từ: Wartest du auf Minh? – Ja, ich warte **auf ihn**.',
            examples: [['Freust du dich auf den Urlaub? – Ja, ich freue mich sehr darauf.', 'Bạn mong kỳ nghỉ không? – Có, mình rất mong.']],
            exercises: [
              choose('Ärgerst du dich über das langsame Internet? – Ja, ich ärgere mich ___.', ['darüber', 'über es', 'worüber'], 'darüber', { vi: 'Bạn bực vì mạng chậm à? – Ừ, mình bực vì nó.' }),
              choose('Wartest du auf deinen Bruder? – Ja, ich warte ___.', ['auf ihn', 'darauf'], 'auf ihn', { vi: 'Bạn chờ anh trai à? – Ừ, mình chờ anh ấy.' }),
              fill('Denkst du an den Termin? – Ja, ich denke {daran}.', 'Bạn có nhớ cuộc hẹn không? – Có, mình nhớ.'),
            ],
          },
          {
            text_vi:
              'Điện thoại, mạng: **der Akku ist leer** (hết pin) → **aufladen** (sạc) bằng **Ladegerät**. **kein Netz** = không có sóng. **chatten**, **surfen**, **online sein**. Cảnh báo: **süchtig nach** + Dativ (nghiện): Er ist süchtig nach dem Handy.',
            examples: [['Mein Akku ist leer. Hast du ein Ladegerät?', 'Điện thoại mình hết pin. Bạn có cục sạc không?']],
            exercises: [
              fill('Ich muss mein Handy {aufladen}.', 'Tôi phải sạc điện thoại.'),
              translate('Ở đây tôi không có sóng.', ['Hier habe ich kein Netz.', 'Ich habe hier kein Netz.']),
            ],
          },
        ],
        mixed: [
          transform('Thay phần viết hoa bằng da(r)-', 'Ich warte AUF DIE NACHRICHT.', ['Ich warte darauf.']),
          choose('___ ärgerst du dich? – Über das Wetter.', ['Worüber', 'Über was', 'Wofür'], 'Worüber', { vi: 'Bạn bực vì gì? – Vì thời tiết.' }),
          translate('Bạn chờ ai?', ['Auf wen wartest du?', 'Auf wen warten Sie?']),
          fill('Interessierst du dich für Videos? – Nein, ich interessiere mich nicht {dafür}.', 'Bạn có quan tâm đến video không? – Không, mình không quan tâm.'),
          order('Worauf / freust / du / dich?', 'Bạn mong chờ điều gì?'),
        ],
      },
      dialogue: {
        title_de: 'Handysüchtig?',
        lines: [
          { speaker: 'A', de: 'Du bist schon wieder online! Woran denkst du nur?', vi: 'Bạn lại lên mạng rồi! Bạn đang nghĩ gì vậy?' },
          { speaker: 'B', de: 'Ich chatte mit Lan. Wir sprechen über das Konzert.', vi: 'Mình đang nhắn tin với Lan. Bọn mình nói về buổi hòa nhạc.' },
          { speaker: 'A', de: 'Freust du dich darauf?', vi: 'Bạn có mong buổi đó không?' },
          { speaker: 'B', de: 'Ja, sehr! Ich warte nur noch auf die Tickets.', vi: 'Có, rất mong! Mình chỉ còn chờ vé thôi.' },
          { speaker: 'A', de: 'Und worüber ärgerst du dich gerade?', vi: 'Thế giờ bạn đang bực vì gì?' },
          { speaker: 'B', de: 'Mein Akku ist fast leer und das Internet ist so langsam!', vi: 'Pin sắp hết mà mạng thì chậm quá!' },
          { speaker: 'A', de: 'Leg das Handy weg. Ich glaube, du bist süchtig danach.', vi: 'Bỏ điện thoại xuống đi. Mình nghĩ bạn nghiện nó rồi.' },
          { speaker: 'B', de: 'Vielleicht hast du recht. Hast du ein Ladegerät für mich?', vi: 'Có lẽ bạn nói đúng. Bạn có cục sạc cho mình không?' },
        ],
        gloss: { nur: 'vậy (nhấn mạnh câu hỏi)', Tickets: 'vé', fast: 'gần như', weg: 'đi (bỏ xuống)', 'recht haben': 'nói đúng' },
        questions: [
          mc('B đang nhắn tin với ai?', ['Lan', 'Minh', 'mẹ'], 'Lan'),
          tf('B freut sich auf das Konzert.', true),
          mc('B bực vì gì?', ['pin sắp hết và mạng chậm', 'không có vé', 'Lan không trả lời'], 'pin sắp hết và mạng chậm'),
          tf('A glaubt, B ist süchtig nach dem Handy.', true),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi:
        'Viết đoạn hội thoại 5–6 câu, dùng Worauf…? / Wofür…? / Woran…? và trả lời bằng darauf / dafür / daran.',
    },
    {
      title_vi: 'Đừng quên lưu tệp!',
      goal_vi: 'Nhắc việc và nói điều quan trọng bằng zu + Infinitiv; dùng từ về máy tính.',
      items: [
        'Passwort', 'Bildschirm', 'Tastatur', 'Drucker', 'Datei', 'Anhang', 'herunterladen', 'speichern', 'löschen',
        'drucken', 'anklicken', 'einschalten', 'ausschalten', 'benutzen', 'digital', 'kostenlos', 'zu + Infinitiv',
      ],
      grammar: {
        point: 'zu-inf',
        sections: [
          {
            text_vi:
              '**zu + Infinitiv**: sau một số động từ và cụm từ, động từ thứ hai đứng **cuối câu** với **zu**: Vergiss nicht, die Datei **zu speichern**. Hay gặp sau **vergessen, versuchen, anfangen, aufhören**, **Lust haben**, **Zeit haben**, **es ist wichtig/schwer/einfach**. Không dùng zu sau động từ khuyết thiếu (können, müssen…).',
            table: 'Mở đầu | zu + Infinitiv\nIch habe vergessen, | die Datei zu speichern.\nEs ist wichtig, | das Passwort zu ändern.\nIch habe keine Lust, | fernzusehen.',
            examples: [
              ['Vergiss nicht, das Handy aufzuladen!', 'Đừng quên sạc điện thoại!'],
              ['Es ist wichtig, ein sicheres Passwort zu haben.', 'Có một mật khẩu an toàn là điều quan trọng.'],
            ],
            exercises: [
              fill('Vergiss nicht, die Datei zu {speichern}.', 'Đừng quên lưu tệp.'),
              order('Ich / versuche, / dich / anzurufen.', 'Tôi cố gắng gọi cho bạn.'),
              choose('Ich kann dir die Datei ___.', ['schicken', 'zu schicken'], 'schicken', {
                vi: 'Tôi có thể gửi tệp cho bạn.',
                explain: 'Sau động từ khuyết thiếu (kann) không dùng zu.',
              }),
            ],
          },
          {
            text_vi:
              'Với **động từ tách**, **zu** chen giữa tiền tố và gốc, viết liền: herunterladen → herunter**zu**laden, einschalten → ein**zu**schalten, ausschalten → aus**zu**schalten: Es ist einfach, die App herunter**zu**laden.',
            examples: [['Bitte vergessen Sie nicht, das Handy auszuschalten.', 'Xin đừng quên tắt điện thoại.']],
            exercises: [
              fill('Es ist einfach, die App {herunterzuladen}.', 'Tải ứng dụng xuống rất dễ.'),
              choose('Ich habe vergessen, den Drucker ___.', ['einzuschalten', 'zu einschalten', 'einschalten zu'], 'einzuschalten', { vi: 'Tôi quên bật máy in.' }),
              fill('Hast du Lust, ein Video zu {sehen}?', 'Bạn có muốn xem video không?'),
            ],
          },
          {
            text_vi:
              'Máy tính: **Datei** (tệp) – **speichern** (lưu), **löschen** (xóa), **drucken** (in) bằng **Drucker**. Email có **Anhang** (tệp đính kèm). **den Link anklicken** (nhấp vào đường dẫn). **Passwort** (mật khẩu), **kostenlos** (miễn phí).',
            examples: [['Der Lebenslauf ist im Anhang.', 'Sơ yếu lý lịch nằm trong tệp đính kèm.']],
            exercises: [
              order('Bitte / klicken / Sie / den Link / an.', 'Xin hãy nhấp vào đường dẫn.'),
              translate('Tôi đã quên mật khẩu.', ['Ich habe mein Passwort vergessen.', 'Ich habe das Passwort vergessen.']),
            ],
          },
        ],
        mixed: [
          transform('Nối bằng zu + Infinitiv', 'Ich habe vergessen. Ich drucke das Dokument.', ['Ich habe vergessen, das Dokument zu drucken.']),
          choose('Es ist wichtig, die Datei zu ___.', ['speichern', 'speichert'], 'speichern', { vi: 'Lưu tệp là điều quan trọng.' }),
          fill('Vergiss nicht, den Computer {auszuschalten}.', 'Đừng quên tắt máy tính.'),
          translate('Tôi không có thời gian xem TV.', ['Ich habe keine Zeit fernzusehen.', 'Ich habe keine Zeit, fernzusehen.']),
          order('Hör auf, / so viel / zu surfen!', 'Đừng lướt web nhiều thế nữa!'),
        ],
      },
      dialogue: {
        title_de: 'Computerprobleme',
        lines: [
          { speaker: 'A', de: 'Hilfe! Mein Computer ist so langsam.', vi: 'Cứu với! Máy tính của mình chậm quá.' },
          { speaker: 'B', de: 'Hast du versucht, ihn neu zu starten?', vi: 'Bạn đã thử khởi động lại chưa?' },
          { speaker: 'A', de: 'Ja. Und jetzt habe ich vergessen, die Datei zu speichern!', vi: 'Rồi. Mà giờ mình quên lưu tệp!' },
          { speaker: 'B', de: 'Oh nein. Ist sie gelöscht?', vi: 'Ôi không. Mất rồi à?' },
          { speaker: 'A', de: 'Ich weiß nicht. Ich muss den Bericht heute drucken.', vi: 'Mình không biết. Hôm nay mình phải in bản báo cáo.' },
          { speaker: 'B', de: 'Hast du ihn vielleicht als Anhang an dich geschickt?', vi: 'Có khi nào bạn đã tự gửi nó cho mình dưới dạng tệp đính kèm?' },
          { speaker: 'A', de: 'Ja! Er ist in meiner E-Mail. Zum Glück!', vi: 'Có! Nó nằm trong email của mình. May quá!' },
          { speaker: 'B', de: 'Siehst du? Es ist wichtig, alles zweimal zu speichern.', vi: 'Thấy chưa? Lưu mọi thứ hai lần là điều quan trọng.' },
        ],
        gloss: { Hilfe: 'cứu với', 'neu zu starten': 'khởi động lại', Bericht: 'bản báo cáo', 'zum Glück': 'may quá' },
        questions: [
          tf('Der Computer ist sehr schnell.', false),
          mc('A đã quên làm gì?', ['lưu tệp', 'tắt máy', 'in tài liệu'], 'lưu tệp'),
          mc('Bản báo cáo ở đâu?', ['trong email', 'trong máy in', 'trong điện thoại'], 'trong email'),
          tf('B sagt, man soll alles zweimal speichern.', true),
        ],
        dictation: [2, 7],
      },
      writing_prompt_vi:
        'Viết 5 lời nhắc cho bản thân khi dùng máy tính và điện thoại: Vergiss nicht, … zu …; Es ist wichtig, … zu …',
    },
  ],
  test: {
    grammar: {
      'verb-praep': [
        choose('Ich warte ___ dich.', ['auf', 'für'], 'auf'),
        choose('Er interessiert sich ___ Sport.', ['für', 'an'], 'für'),
        fill('Ich denke {an} dich.', 'Tôi nghĩ đến bạn.'),
        choose('Ich ärgere mich ___ das Wetter.', ['über', 'auf'], 'über'),
        fill('Wir freuen uns {auf} die Ferien.', 'Chúng tôi mong kỳ nghỉ.'),
        order('Ich / warte / auf / den Bus.', 'Tôi chờ xe buýt.'),
      ],
      'wo-da': [
        choose('___ wartest du? – Auf den Zug.', ['Worauf', 'Auf wen'], 'Worauf'),
        choose('___ wartest du? – Auf Anna.', ['Auf wen', 'Worauf'], 'Auf wen'),
        fill('Ich freue mich {darauf}.', 'Tôi mong điều đó.'),
        choose('Interessierst du dich für Musik? – Ja, ich interessiere mich ___.', ['dafür', 'für sie'], 'dafür'),
        fill('{Woran} denkst du?', 'Bạn đang nghĩ gì?'),
        choose('Wartest du auf Tom? – Ja, ich warte ___.', ['auf ihn', 'darauf'], 'auf ihn'),
      ],
      'zu-inf': [
        fill('Vergiss nicht, das Fenster zu {schließen}.', 'Đừng quên đóng cửa sổ.'),
        choose('Ich habe keine Lust, ___.', ['fernzusehen', 'zu fernsehen'], 'fernzusehen'),
        choose('Ich muss die Datei ___.', ['speichern', 'zu speichern'], 'speichern'),
        fill('Es ist wichtig, viel Wasser zu {trinken}.', 'Uống nhiều nước là điều quan trọng.'),
        order('Ich / versuche, / pünktlich / zu sein.', 'Tôi cố gắng đúng giờ.'),
        fill('Ich habe vergessen, das Handy {aufzuladen}.', 'Tôi quên sạc điện thoại.'),
      ],
    },
    reading: {
      title_de: 'Digitale Medien im Alltag',
      text_de:
        'Heute benutzen fast alle Menschen jeden Tag ein Handy. Viele lesen die Nachrichten nicht mehr in der Zeitung, sondern online. Junge Leute chatten stundenlang mit ihren Freunden und sehen Videos. Das hat Vorteile: Man kann schnell Informationen finden und Menschen in der ganzen Welt erreichen. Aber es gibt auch Probleme. Manche Jugendliche sind schon süchtig nach ihrem Handy. Experten raten deshalb, das Handy am Abend auszuschalten. Es ist auch wichtig, ein sicheres Passwort zu benutzen und nicht jeden Link anzuklicken. Ich selbst versuche, am Wochenende weniger online zu sein.',
      gloss: {
        sondern: 'mà là',
        stundenlang: 'hàng giờ liền',
        Vorteile: 'ưu điểm',
        ganzen: 'toàn bộ',
        manche: 'một số',
        Jugendliche: 'thanh thiếu niên',
        Experten: 'chuyên gia',
        raten: 'khuyên',
        sicheres: 'an toàn',
        selbst: 'bản thân',
      },
      questions: [
        tf('Viele lesen die Nachrichten online.', true),
        mc('Chuyên gia khuyên gì?', ['tắt điện thoại buổi tối', 'không dùng Internet', 'mua điện thoại mới'], 'tắt điện thoại buổi tối'),
        mc('Điện thoại và mạng có lợi gì?', ['tìm thông tin nhanh và liên lạc khắp thế giới', 'tiết kiệm tiền', 'ngủ ngon hơn'], 'tìm thông tin nhanh và liên lạc khắp thế giới'),
        tf('Die Person ist am Wochenende mehr online.', false, { explain: 'Ich versuche, am Wochenende weniger online zu sein.' }),
      ],
    },
  },
});
