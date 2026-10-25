// B2 · 07 Truyền thông số — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b2-07',
  points: [
    {
      key: 'mithilfe',
      rule_key: 'genitiv-praep-mithilfe-mittels',
      category: 'case',
      title_vi: 'Giới từ Genitiv: mithilfe, mittels, anstelle',
      explanation_vi: 'mithilfe (nhờ vào), mittels (bằng, thông qua), anstelle (thay cho) đi với Genitiv: mithilfe des Internets, mittels einer App, anstelle eines Passworts. Không có mạo từ thì dùng von + Dativ: mithilfe von Apps.',
    },
    {
      key: 'als-ob',
      rule_key: 'als-ob-konjunktiv-ii',
      category: 'verb_position',
      title_vi: 'als ob + Konjunktiv II (như thể)',
      explanation_vi: 'als ob + Konjunktiv II, động từ chia ở cuối: Er tut so, als ob er alles wüsste. Dạng ngắn als + Konjunktiv II: động từ đứng ngay sau als (als wüsste er alles). Quá khứ: als ob er … gewesen wäre / gemacht hätte.',
    },
    {
      key: 'auch-wenn',
      rule_key: 'auch-wenn-konzessiv',
      category: 'verb_position',
      title_vi: 'auch wenn (cho dù, ngay cả khi)',
      explanation_vi: 'auch wenn mở câu phụ nhượng bộ, động từ cuối: Auch wenn es schwer ist, gebe ich nicht auf. Câu chính sau đó bắt đầu bằng động từ. Gần nghĩa obwohl, nhưng auch wenn cũng dùng cho điều giả định (ngay cả nếu).',
    },
  ],
  lessons: [
    {
      title_vi: 'Internet và dữ liệu',
      goal_vi: 'Nói về bảo mật, dữ liệu cá nhân và học trực tuyến; dùng mithilfe, mittels, anstelle + Genitiv.',
      items: [
        'Algorithmus', 'Privatsphäre', 'Erreichbarkeit', 'Datenmissbrauch', 'Cloud', 'Videokonferenz', 'Hacker',
        'Sicherheitslücke', 'Nachweis', 'sperren', 'überprüfen', 'vernetzt', 'Giới từ Genitiv: mithilfe, anhand',
        'Danh từ hóa động từ với -ung', 'Digitalkompetenz', 'Endgerät', 'Nutzungsbedingung', 'Suchmaschine', 'Online-Handel',
        'Urheberrecht', 'Zugangsdaten', 'Zwei-Faktor-Authentifizierung', 'Online-Unterricht', 'googeln', 'verifizieren',
        'ausspionieren', 'internetfähig', 'datensparsam', 'smart', 'im Internet surfen', 'Spuren hinterlassen', 'Datenleck',
        'barrierefrei', 'digitalisieren',
      ],
      grammar: {
        point: 'mithilfe',
        sections: [
          {
            text_vi:
              'Văn viết về công nghệ hay dùng giới từ **Genitiv**: **mithilfe** (nhờ vào), **mittels** (bằng, thông qua), **anstelle** (thay cho). Mithilfe **des** Internets kann man viel lernen. Man meldet sich **mittels einer** App an. **Anstelle eines** Passworts nutzt man den Fingerabdruck. Nhớ đuôi Genitiv: **des/eines** + danh từ -(e)s, **der/einer**.',
            table: 'Giới từ | Nghĩa | Ví dụ\nmithilfe | nhờ vào | mithilfe einer Suchmaschine\nmittels | bằng, thông qua | mittels eines Codes\nanstelle | thay cho | anstelle des Passworts\nanhand | dựa vào | anhand der Daten',
            examples: [
              ['Mithilfe eines Algorithmus werden die Beiträge sortiert.', 'Các bài đăng được sắp xếp nhờ một thuật toán.'],
              ['Die Anmeldung erfolgt mittels eines Codes per SMS.', 'Việc đăng nhập được thực hiện bằng một mã gửi qua SMS.'],
            ],
            exercises: [
              choose('Mithilfe ___ Suchmaschine fand ich die Antwort.', ['einer', 'eine', 'einem'], 'einer', { vi: 'Nhờ một công cụ tìm kiếm tôi đã tìm ra câu trả lời.' }),
              fill('Anstelle {des} Passworts benutze ich meinen Fingerabdruck.', 'Thay cho mật khẩu tôi dùng vân tay.'),
              choose('Die Identität wird mittels ___ Ausweises verifiziert.', ['eines', 'einen', 'einem'], 'eines', { vi: 'Danh tính được xác minh bằng một giấy tờ tùy thân.' }),
            ],
          },
          {
            text_vi:
              'Khi **không có mạo từ** hoặc danh từ số nhiều không có từ đi kèm, Genitiv không nhìn ra, nên dùng **von + Dativ**: mithilfe **von** Apps, anstelle **von** Bargeld. Có mạo từ hoặc tính từ thì giữ Genitiv: mithilfe **moderner** Technik. Văn bản kỹ thuật còn hay danh từ hóa với **-ung**: nutzen → **die Nutzung**, sichern → **die Sicherung**.',
            examples: [['Viele Schulen unterrichten mithilfe von Tablets.', 'Nhiều trường dạy học nhờ máy tính bảng.']],
            exercises: [
              fill('Anstelle {von} Bargeld zahlen viele mit dem Handy.', 'Thay vì tiền mặt, nhiều người trả bằng điện thoại.'),
              choose('Die ___ der Daten ist gesetzlich geregelt. (nutzen)', ['Nutzung', 'Nutzen', 'Genutzte'], 'Nutzung', { vi: 'Việc sử dụng dữ liệu được pháp luật quy định.' }),
              translate('Nhờ xác thực hai yếu tố, tài khoản an toàn hơn.', [
                'Mithilfe der Zwei-Faktor-Authentifizierung ist das Konto sicherer.',
                'Dank der Zwei-Faktor-Authentifizierung ist das Konto sicherer.',
              ]),
            ],
          },
        ],
        mixed: [
          choose('Mithilfe ___ Cloud kann man überall arbeiten.', ['der', 'die', 'dem'], 'der', { vi: 'Nhờ đám mây có thể làm việc ở mọi nơi.' }),
          fill('Der Unterricht fand mittels {einer} Videokonferenz statt.', 'Buổi học diễn ra thông qua một hội nghị trực tuyến.'),
          choose('Anstelle ___ Briefs schreibe ich eine E-Mail.', ['eines', 'einem', 'einen'], 'eines', { vi: 'Thay vì một lá thư, tôi viết email.' }),
          choose('Mithilfe ___ Apps lernen viele Sprachen.', ['von', 'der', 'des'], 'von', { vi: 'Nhờ ứng dụng nhiều người học ngoại ngữ.' }),
          order('Anhand / der Daten / erkannte / man / das Datenleck.', 'Dựa vào dữ liệu người ta phát hiện ra vụ rò rỉ dữ liệu.'),
        ],
      },
      dialogue: {
        title_de: 'Mein Konto wurde gehackt',
        lines: [
          { speaker: 'A', de: 'So ein Ärger! Gestern hat ein Hacker mein E-Mail-Konto gesperrt.', vi: 'Bực quá! Hôm qua một tin tặc đã khóa tài khoản email của mình.' },
          { speaker: 'B', de: 'Oh nein! Wie ist das passiert?', vi: 'Ôi không! Sao lại thế?' },
          { speaker: 'A', de: 'Wahrscheinlich gab es ein Datenleck bei einem Online-Shop. Dort hatte ich dieselben Zugangsdaten.', vi: 'Có lẽ có một vụ rò rỉ dữ liệu ở một cửa hàng trực tuyến. Ở đó mình dùng cùng thông tin đăng nhập.' },
          { speaker: 'B', de: 'Das ist gefährlich. Benutzt du keine Zwei-Faktor-Authentifizierung?', vi: 'Nguy hiểm thật. Bạn không dùng xác thực hai yếu tố à?' },
          { speaker: 'A', de: 'Leider nicht. Aber mithilfe des Kundenservice habe ich das Konto zurückbekommen.', vi: 'Tiếc là không. Nhưng nhờ dịch vụ khách hàng mình đã lấy lại được tài khoản.' },
          { speaker: 'B', de: 'Zum Glück. Ab jetzt solltest du dich mittels eines Codes auf dem Handy anmelden.', vi: 'May quá. Từ giờ bạn nên đăng nhập bằng mã trên điện thoại.' },
          { speaker: 'A', de: 'Ja, und anstelle eines einfachen Passworts nehme ich jetzt einen Passwort-Manager.', vi: 'Ừ, và thay vì một mật khẩu đơn giản giờ mình dùng trình quản lý mật khẩu.' },
          { speaker: 'B', de: 'Gute Idee. Im Netz hinterlässt man so viele Spuren. Man muss datensparsam sein.', vi: 'Ý hay. Trên mạng người ta để lại rất nhiều dấu vết. Phải tiết kiệm dữ liệu cá nhân.' },
        ],
        gloss: { Ärger: 'sự bực mình', Konto: 'tài khoản', dieselben: 'giống nhau, cùng', zurückbekommen: 'lấy lại', 'Passwort-Manager': 'trình quản lý mật khẩu', Passworts: 'mật khẩu (Passwort)' },
        questions: [
          mc('Chuyện gì xảy ra với A?', ['tài khoản email bị tin tặc khóa', 'mất điện thoại', 'quên mật khẩu wifi'], 'tài khoản email bị tin tặc khóa'),
          tf('A hatte überall andere Zugangsdaten.', false, { explain: 'Dort hatte ich dieselben Zugangsdaten.' }),
          mc('Nhờ ai A lấy lại được tài khoản?', ['dịch vụ khách hàng', 'B', 'cảnh sát'], 'dịch vụ khách hàng'),
          tf('A will jetzt einen Passwort-Manager benutzen.', true),
        ],
        dictation: [2, 4],
      },
      writing_prompt_vi:
        'Viết lời khuyên (5–7 câu) cho người lớn tuổi về cách dùng Internet an toàn; dùng ít nhất ba giới từ mithilfe, mittels, anstelle hoặc anhand.',
    },
    {
      title_vi: 'Mạng xã hội',
      goal_vi: 'Bàn về người có ảnh hưởng, hình ảnh bản thân và bắt nạt trên mạng; so sánh không thật với als ob.',
      items: [
        'soziale Netzwerke', 'Plattform', 'Nutzer', 'Beitrag', 'Follower', 'Influencer', 'Cybermobbing', 'Hassrede', 'posten',
        'liken', 'kommentieren', 'abonnieren', 'blockieren', 'sich austauschen', 'strafbar', 'im Netz', 'viral gehen',
        'als ob + Konjunktiv II', 'Shitstorm', 'Selbstdarstellung', 'Schönheitsideal', 'Reichweite', 'Netzgemeinde', 'hetzen',
        'sich vergleichen', 'werbefinanziert', 'schnelllebig', 'einen Beitrag teilen', 'Netiquette', 'Kommentarspalte',
        'im Trend liegen', 'sich einen Namen machen',
      ],
      grammar: {
        point: 'als-ob',
        sections: [
          {
            text_vi:
              '**als ob** = "như thể", so sánh với điều **không thật**. Đi với **Konjunktiv II**, động từ chia **cuối câu**: Sie tut so, **als ob** ihr Leben perfekt **wäre**. Hay đứng sau **so tun** (làm như thể), **aussehen** (trông như thể), **sich anfühlen** (cảm giác như thể): Es sieht so aus, als ob es regnen **würde**.',
            examples: [
              ['Er tut so, als ob er alles wüsste.', 'Anh ta làm như thể mình biết hết mọi thứ.'],
              ['Auf den Fotos sieht es so aus, als ob sie immer Urlaub hätte.', 'Trên ảnh trông như thể cô ấy lúc nào cũng đi nghỉ.'],
            ],
            exercises: [
              choose('Die Influencerin tut so, als ob sie nie müde ___.', ['wäre', 'ist', 'sei'], 'wäre', { vi: 'Người có ảnh hưởng đó làm như thể cô ấy không bao giờ mệt.' }),
              fill('Er redet, als ob er ein Experte {wäre}.', 'Anh ta nói như thể mình là chuyên gia.'),
              choose('Es fühlt sich an, als ob mich alle ___.', ['beobachten würden', 'beobachten', 'beobachtet'], 'beobachten würden', { vi: 'Cảm giác như thể mọi người đang theo dõi tôi.' }),
            ],
          },
          {
            text_vi:
              'Dạng ngắn **als + Konjunktiv II**: bỏ ob, đưa **động từ lên ngay sau als**: Er tut so, **als wüsste** er alles. Nói về **quá khứ**: **hätte/wäre + Partizip II**: Sie tut so, als ob nichts **passiert wäre**. Khác với **wie** (so sánh thật): Er spricht **wie** ein Experte (anh ấy đúng là nói như chuyên gia).',
            table: 'Dạng | Ví dụ\nals ob + … + KII | Er tut so, als ob er krank wäre.\nals + KII + … | Er tut so, als wäre er krank.\nquá khứ | …, als ob nichts passiert wäre.\nso sánh thật | Er spricht wie ein Profi.',
            examples: [['Nach dem Shitstorm postete er weiter, als wäre nichts passiert.', 'Sau làn sóng chỉ trích anh ta vẫn đăng bài như thể không có gì xảy ra.']],
            exercises: [
              transform('Viết lại với "als" (bỏ ob)', 'Sie tut so, als ob sie mich nicht kennen würde.', ['Sie tut so, als würde sie mich nicht kennen.', 'Sie tut so, als kennte sie mich nicht.']),
              fill('Er tut so, als ob er den Kommentar nicht gelesen {hätte}.', 'Anh ta làm như thể chưa đọc bình luận đó.'),
              choose('Sie lächelt, als ___ nichts passiert.', ['wäre', 'ob wäre', 'ist'], 'wäre', { vi: 'Cô ấy cười như thể không có chuyện gì xảy ra.' }),
            ],
          },
        ],
        mixed: [
          choose('Viele Nutzer tun so, als ob ihr Leben perfekt ___.', ['wäre', 'ist', 'war'], 'wäre', { vi: 'Nhiều người dùng làm như thể cuộc sống của họ hoàn hảo.' }),
          fill('Das Video sieht aus, als {wäre} es echt.', 'Video trông như thể là thật.'),
          transform('Viết lại với "als ob"', 'Er tut so, als hätte er keine Zeit.', ['Er tut so, als ob er keine Zeit hätte.']),
          choose('Er schreibt Kommentare, als ob Hassrede nicht strafbar ___.', ['wäre', 'würde', 'hätte'], 'wäre', { vi: 'Anh ta viết bình luận như thể ngôn từ thù hận không bị phạt.' }),
          order('Sie / tut / so, / als ob / sie / viele Follower / hätte.', 'Cô ấy làm như thể có nhiều người theo dõi.'),
        ],
      },
      dialogue: {
        title_de: 'Perfekte Welt auf Instagram',
        lines: [
          { speaker: 'A', de: 'Schau mal, Lisa hat wieder ein Foto vom Strand gepostet.', vi: 'Nhìn này, Lisa lại đăng ảnh ở biển.' },
          { speaker: 'B', de: 'Sie tut immer so, als ob sie jeden Tag Urlaub hätte.', vi: 'Cô ấy lúc nào cũng làm như thể ngày nào cũng đi nghỉ.' },
          { speaker: 'A', de: 'Ich weiß. Manchmal vergleiche ich mich mit ihr und fühle mich schlecht.', vi: 'Mình biết. Đôi khi mình so sánh mình với cô ấy và thấy tệ.' },
          { speaker: 'B', de: 'Das ist nur Selbstdarstellung. Niemand postet seine schlechten Tage.', vi: 'Đó chỉ là thể hiện bản thân thôi. Chẳng ai đăng những ngày tồi tệ cả.' },
          { speaker: 'A', de: 'Stimmt. Und unter ihrem letzten Beitrag gab es sogar Hassrede in der Kommentarspalte.', vi: 'Đúng. Và dưới bài đăng gần nhất của cô ấy còn có ngôn từ thù hận trong phần bình luận.' },
          { speaker: 'B', de: 'Furchtbar. Manche schreiben, als wäre das Internet ein rechtsfreier Raum.', vi: 'Kinh khủng. Có người viết như thể Internet là nơi ngoài vòng pháp luật.' },
          { speaker: 'A', de: 'Dabei ist das oft strafbar. Sie hat die Leute zum Glück blockiert.', vi: 'Trong khi điều đó thường bị phạt. May là cô ấy đã chặn những người đó.' },
          { speaker: 'B', de: 'Gut so. Etwas mehr Netiquette würde allen guttun.', vi: 'Tốt. Thêm chút phép lịch sự trên mạng sẽ tốt cho mọi người.' },
        ],
        gloss: { 'schau mal': 'nhìn này', Strand: 'bãi biển', niemand: 'không ai', rechtsfreier: 'ngoài vòng pháp luật', Raum: 'không gian', dabei: 'trong khi đó', guttun: 'có lợi, tốt cho' },
        questions: [
          mc('Lisa đăng gì?', ['ảnh ở biển', 'video nấu ăn', 'ảnh công việc'], 'ảnh ở biển'),
          tf('A fühlt sich manchmal schlecht, wenn sie sich mit Lisa vergleicht.', true),
          mc('Dưới bài đăng của Lisa có gì?', ['ngôn từ thù hận', 'quảng cáo', 'lời khen'], 'ngôn từ thù hận'),
          tf('Lisa hat die Leute nicht blockiert.', false, { explain: 'Sie hat die Leute zum Glück blockiert.' }),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi:
        'Viết một bài ngắn (6–8 câu): mạng xã hội cho ta thấy thực tế hay chỉ "thế giới hoàn hảo"? Dùng ít nhất ba câu với als ob hoặc als + Konjunktiv II.',
    },
    {
      title_vi: 'Thời gian màn hình và tin giả',
      goal_vi: 'Bàn về nghiện điện thoại, tin giả và bong bóng thông tin; nêu ý nhượng bộ bằng auch wenn.',
      items: [
        'Desinformation', 'Medienkompetenz', 'Bildschirmzeit', 'Abhängigkeit', 'Streamingdienst', 'Abonnement', 'manipulieren',
        'begrenzen', 'vernachlässigen', 'öffentlich zugänglich', 'ständig', 'irreführend', 'kritisch', 'offline gehen',
        'auch wenn: nhượng bộ', 'Benachrichtigung', 'Filterblase', 'Echokammer', 'Digital Detox', 'Mediennutzung', 'streamen',
        'scrollen', 'sich abmelden', 'manipulativ', 'suchtgefährdet', 'auf dem neuesten Stand bleiben', 'abschalten',
      ],
      grammar: {
        point: 'auch-wenn',
        sections: [
          {
            text_vi:
              '**auch wenn** = "cho dù, ngay cả khi": điều kiện **không ngăn được** kết quả. Câu auch wenn là câu phụ, **động từ cuối**. Đứng đầu thì câu chính bắt đầu bằng **động từ**: **Auch wenn** ich müde **bin**, **scrolle** ich weiter. Câu chính hay có thêm **trotzdem** hoặc **dennoch** để nhấn mạnh.',
            examples: [
              ['Auch wenn das Handy praktisch ist, sollte man die Bildschirmzeit begrenzen.', 'Dù điện thoại tiện lợi, nên giới hạn thời gian dùng màn hình.'],
              ['Ich lese die Nachrichten, auch wenn sie manchmal deprimierend sind.', 'Tôi đọc tin tức, cho dù đôi khi chúng làm tôi chán nản.'],
            ],
            exercises: [
              fill('Auch wenn ich wenig Zeit {habe}, lese ich jeden Tag Zeitung.', 'Dù có ít thời gian, ngày nào tôi cũng đọc báo.'),
              choose('Auch wenn die Nachricht echt aussieht, ___ man sie überprüfen.', ['sollte', 'man sollte', 'sollen'], 'sollte', { vi: 'Dù tin trông có vẻ thật, vẫn nên kiểm tra lại.' }),
              order('Auch wenn / es / schwerfällt, / gehe / ich / am Wochenende / offline.', 'Dù khó, cuối tuần tôi vẫn ngắt kết nối.'),
            ],
          },
          {
            text_vi:
              'So với **obwohl**: obwohl nói điều **có thật** (Obwohl es regnet, … = trời đang mưa thật). **auch wenn** dùng được cả cho điều **giả định**: Auch wenn du mir Geld **gäbest**, würde ich das nicht posten (ngay cả nếu bạn cho tiền). Với Konjunktiv II, auch wenn mang nghĩa "**ngay cả nếu**".',
            table: 'Liên từ | Dùng khi | Ví dụ\nobwohl | sự thật | Obwohl er müde ist, arbeitet er.\nauch wenn | sự thật | Auch wenn er müde ist, arbeitet er.\nauch wenn + KII | giả định | Auch wenn ich Zeit hätte, würde ich nicht streamen.',
            examples: [['Auch wenn alle es teilen würden, würde ich es nicht glauben.', 'Ngay cả nếu mọi người cùng chia sẻ, tôi cũng không tin.']],
            exercises: [
              choose('___ ich mehr Geld hätte, würde ich kein zweites Abonnement kaufen.', ['Auch wenn', 'Obwohl', 'Weil'], 'Auch wenn', { vi: 'Ngay cả nếu có nhiều tiền hơn, tôi cũng không mua thuê bao thứ hai.' }),
              transform('Viết lại với "auch wenn"', 'Obwohl der Artikel irreführend ist, wird er oft geteilt.', [
                'Auch wenn der Artikel irreführend ist, wird er oft geteilt.',
              ]),
              translate('Dù trời đã khuya, anh ấy vẫn tiếp tục lướt điện thoại.', ['Auch wenn es spät ist, scrollt er weiter.', 'Obwohl es spät ist, scrollt er weiter.', 'Auch wenn es schon spät ist, scrollt er weiter.']),
            ],
          },
        ],
        mixed: [
          choose('Auch wenn Streamingdienste teuer ___, haben viele drei Abos.', ['sind', 'seien', 'sein'], 'sind', { vi: 'Dù dịch vụ phát trực tuyến đắt, nhiều người có ba thuê bao.' }),
          fill('Auch wenn die Quelle seriös wirkt, {sollte} man kritisch bleiben.', 'Dù nguồn có vẻ đáng tin, vẫn nên giữ thái độ phê phán.'),
          choose('Auch wenn ich es ___, würde ich nicht offline gehen.', ['könnte', 'kann', 'konnte'], 'könnte', { vi: 'Ngay cả nếu tôi có thể, tôi cũng không ngắt kết nối.' }),
          transform('Nối bằng "auch wenn" (đặt đầu câu)', 'Benachrichtigungen sind nützlich. Ich schalte sie abends ab.', [
            'Auch wenn Benachrichtigungen nützlich sind, schalte ich sie abends ab.',
          ]),
          order('Man / sollte / die Nachrichten / prüfen, / auch wenn / man / wenig Zeit / hat.', 'Nên kiểm tra tin tức, dù có ít thời gian.'),
        ],
      },
      dialogue: {
        title_de: 'Digital Detox',
        lines: [
          { speaker: 'A', de: 'Weißt du, wie hoch meine Bildschirmzeit letzte Woche war? Sieben Stunden am Tag!', vi: 'Bạn biết tuần trước thời gian dùng màn hình của mình là bao nhiêu không? Bảy tiếng mỗi ngày!' },
          { speaker: 'B', de: 'Wow. Auch wenn du viel für die Uni arbeitest, ist das sehr viel.', vi: 'Trời. Dù bạn làm nhiều việc cho trường, thế vẫn là rất nhiều.' },
          { speaker: 'A', de: 'Ich weiß. Ich scrolle ständig, auch wenn mich die Inhalte gar nicht interessieren.', vi: 'Mình biết. Mình lướt liên tục, dù nội dung chẳng làm mình quan tâm.' },
          { speaker: 'B', de: 'Die Apps sind eben manipulativ. Die Benachrichtigungen holen dich immer wieder zurück.', vi: 'Các ứng dụng vốn có tính thao túng mà. Thông báo cứ kéo bạn quay lại.' },
          { speaker: 'A', de: 'Ich will ein Digital Detox machen. Ein Wochenende ganz offline.', vi: 'Mình muốn cai thiết bị số. Một cuối tuần hoàn toàn ngắt kết nối.' },
          { speaker: 'B', de: 'Gute Idee. Aber wie bleibst du dann auf dem neuesten Stand?', vi: 'Ý hay. Nhưng thế thì bạn cập nhật tin tức kiểu gì?' },
          { speaker: 'A', de: 'Ich lese Zeitung. Da gibt es weniger Desinformation als in meiner Filterblase.', vi: 'Mình đọc báo. Ở đó ít tin sai lệch hơn trong bong bóng thông tin của mình.' },
          { speaker: 'B', de: 'Stimmt. Und auch wenn es am Anfang schwerfällt: Man kann richtig abschalten.', vi: 'Đúng. Và dù lúc đầu khó: người ta có thể thật sự thư giãn.' },
        ],
        gloss: { Inhalte: 'nội dung', 'gar nicht': 'hoàn toàn không', eben: 'vốn dĩ, đúng là', 'holen … zurück': 'kéo về (zurückholen)', schwerfällt: 'khó khăn (schwerfallen)' },
        questions: [
          mc('Thời gian dùng màn hình của A tuần trước là bao nhiêu?', ['bảy tiếng mỗi ngày', 'hai tiếng mỗi ngày', 'bảy tiếng mỗi tuần'], 'bảy tiếng mỗi ngày'),
          tf('A scrollt nur, wenn ihn die Inhalte interessieren.', false, { explain: 'Ich scrolle ständig, auch wenn mich die Inhalte gar nicht interessieren.' }),
          mc('A định làm gì?', ['một cuối tuần hoàn toàn ngắt kết nối', 'mua điện thoại mới', 'xóa tài khoản ngân hàng'], 'một cuối tuần hoàn toàn ngắt kết nối'),
          tf('A will sich über die Zeitung informieren.', true),
        ],
        dictation: [2, 6],
      },
      writing_prompt_vi:
        'Viết kế hoạch "cai thiết bị số" của bạn (6–8 câu): vấn đề, quy tắc mới, khó khăn; dùng ít nhất ba câu với auch wenn.',
    },
  ],
  test: {
    grammar: {
      mithilfe: [
        choose('Mithilfe ___ App lerne ich Vokabeln.', ['einer', 'eine', 'einem'], 'einer'),
        fill('Anstelle {des} Autos nehme ich das Fahrrad.', 'Thay vì ô tô tôi đi xe đạp.'),
        choose('Die Daten werden mittels ___ Programms analysiert.', ['eines', 'einem', 'einen'], 'eines'),
        fill('Mithilfe {von} Videos lernt man schneller.', 'Nhờ video người ta học nhanh hơn.'),
        order('Mithilfe / des Internets / findet / man / alles.', 'Nhờ Internet người ta tìm được mọi thứ.'),
        choose('Anstelle ___ Kuchens gab es Obst.', ['eines', 'einem', 'ein'], 'eines'),
      ],
      'als-ob': [
        choose('Er tut so, als ob er krank ___.', ['wäre', 'ist', 'sei'], 'wäre'),
        fill('Sie tut so, als {hätte} sie keine Zeit.', 'Cô ấy làm như thể không có thời gian.'),
        choose('Es sieht so aus, als ___ es gleich regnen.', ['würde', 'wird', 'ob würde'], 'würde'),
        fill('Er lacht, als ob nichts passiert {wäre}.', 'Anh ấy cười như thể không có gì xảy ra.'),
        order('Sie / redet, / als ob / sie / alles / wüsste.', 'Cô ấy nói như thể biết hết mọi thứ.'),
        choose('Du siehst aus, als ___ du nicht geschlafen.', ['hättest', 'wärst', 'hast'], 'hättest'),
      ],
      'auch-wenn': [
        choose('Auch wenn es regnet, ___ wir.', ['joggen', 'wir joggen', 'joggen nicht wir'], 'joggen'),
        fill('Auch wenn er müde {ist}, arbeitet er weiter.', 'Dù mệt, anh ấy vẫn tiếp tục làm.'),
        choose('___ ich reich wäre, würde ich weiter arbeiten.', ['Auch wenn', 'Obwohl', 'Weil'], 'Auch wenn'),
        order('Ich / komme / mit, / auch wenn / ich / keine Lust / habe.', 'Tôi sẽ đi cùng, dù không có hứng.'),
        fill('Auch wenn es teuer ist, {kaufe} ich das Buch.', 'Dù đắt tôi vẫn mua cuốn sách.'),
        choose('Auch wenn du es nicht ___, ist es wahr.', ['glaubst', 'glauben', 'geglaubt'], 'glaubst'),
      ],
    },
    reading: {
      title_de: 'Fake News erkennen',
      text_de:
        'Im Netz verbreiten sich falsche Nachrichten oft schneller als echte. Ein Grund dafür sind Algorithmen, die vor allem emotionale Beiträge zeigen. Viele Nutzer teilen eine Meldung, als ob sie schon geprüft wäre. Auch wenn eine Nachricht seriös aussieht, kann sie irreführend sein. Medienpädagogen empfehlen deshalb einige einfache Schritte: Man sollte die Quelle überprüfen und mithilfe einer Suchmaschine nach weiteren Berichten suchen. Auch Bilder lassen sich leicht manipulieren. Schulen bieten inzwischen Kurse an, in denen Jugendliche Medienkompetenz lernen. Wer kritisch bleibt, fällt seltener auf Desinformation herein.',
      gloss: {
        verbreiten: 'lan truyền',
        Meldung: 'tin, thông báo',
        seriös: 'đứng đắn, đáng tin',
        Medienpädagogen: 'nhà giáo dục truyền thông',
        Schritte: 'bước',
        inzwischen: 'hiện nay, trong lúc đó',
        'fällt … herein': 'mắc lừa (hereinfallen)',
      },
      questions: [
        tf('Falsche Nachrichten verbreiten sich im Netz oft schneller als echte.', true),
        mc('Thuật toán chủ yếu hiển thị loại bài nào?', ['bài đăng gây cảm xúc', 'bài khoa học', 'bài cũ'], 'bài đăng gây cảm xúc'),
        mc('Các nhà giáo dục truyền thông khuyên gì?', ['kiểm tra nguồn và tìm thêm bài khác', 'không đọc tin trên mạng', 'chỉ đọc báo giấy'], 'kiểm tra nguồn và tìm thêm bài khác'),
        tf('Laut Text kann man Bilder nicht manipulieren.', false, { explain: 'Auch Bilder lassen sich leicht manipulieren.' }),
      ],
    },
  },
});
