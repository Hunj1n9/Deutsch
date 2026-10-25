// B2 · 10 Chính trị và xã hội — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b2-10',
  points: [
    {
      key: 'argumentieren',
      rule_key: 'argument-dafuer-dagegen-spricht',
      category: 'word_choice',
      title_vi: 'Lập luận ủng hộ / phản bác',
      explanation_vi: 'Dafür spricht, dass … / Dagegen spricht, dass … (động từ của câu dass ở cuối). Für/Gegen + Akk + spricht, dass … Ein wichtiges Argument für/gegen … ist, dass … Zum einen …, zum anderen … để liệt kê hai lý do.',
    },
    {
      key: 'sofern-insofern',
      rule_key: 'sofern-insofern-als',
      category: 'verb_position',
      title_vi: 'sofern, insofern … als',
      explanation_vi: 'sofern = miễn là, nếu (trang trọng hơn wenn), mở câu phụ, động từ cuối. insofern … als = ở mức độ mà / xét ở chỗ: Er hat insofern recht, als … ; insofern đứng trong câu chính, als mở câu phụ.',
    },
    {
      key: 'konjunktiv-1-ersatz',
      rule_key: 'konjunktiv-i-ersatzform-ii',
      category: 'conjugation',
      title_vi: 'Konjunktiv I (ôn tập) và dạng thay bằng Konjunktiv II',
      explanation_vi: 'Khi Konjunktiv I trùng với Präsens (nhất là số nhiều: sie haben, sie kommen) thì dùng Konjunktiv II (sie hätten) hoặc würde + Infinitiv (sie würden kommen) để người đọc thấy đây là lời gián tiếp. sein luôn có Konjunktiv I riêng: sie seien.',
    },
  ],
  lessons: [
    {
      title_vi: 'Tranh luận chính sách xã hội',
      goal_vi: 'Cân nhắc ưu nhược điểm của một chính sách (lương hưu, thu nhập cơ bản…) và lập luận ủng hộ, phản bác.',
      items: [
        'Sozialstaat', 'Ungleichheit', 'Wohlstand', 'Teilhabe', 'Generationengerechtigkeit', 'Bevölkerung', 'Überalterung',
        'Pro-Argument', 'Kontra-Argument', 'Befürworter', 'Gegner', 'befürworten', 'abwägen', 'einwenden', 'zugeben',
        'sich aussprechen', 'verteilen', 'unverzichtbar', 'fragwürdig', 'vertretbar', 'zum einen … zum anderen',
        'dafür spricht, dass', 'dagegen spricht, dass', 'im Mittelpunkt stehen', 'Lập luận ủng hộ / phản đối', 'Sozialleistung',
        'Grundeinkommen', 'Rentensystem', 'Steuererhöhung', 'Haushaltsdefizit', 'kürzen', 'finanzieren', 'zur Debatte stehen',
        'Stellung beziehen',
      ],
      grammar: {
        point: 'argumentieren',
        sections: [
          {
            text_vi:
              'Trong bài viết và bài nói B2, lập luận cần cấu trúc rõ. Mẫu then chốt: **Dafür spricht, dass** … (lý do ủng hộ là) và **Dagegen spricht, dass** … (lý do phản đối là). Đây là câu dass: **động từ cuối**. Nêu đối tượng: **Für** das Grundeinkommen **spricht**, dass … / **Gegen** die Reform **spricht**, dass … (für/gegen + Akk).',
            table: 'Mẫu câu | Ví dụ\nDafür spricht, dass … | Dafür spricht, dass es Armut verringert.\nDagegen spricht, dass … | Dagegen spricht, dass es teuer ist.\nFür + Akk spricht, dass … | Für die Reform spricht, dass sie gerecht ist.\nEin wichtiges Argument gegen … ist, dass … | Ein Argument gegen den Plan ist, dass …',
            examples: [
              ['Für das Grundeinkommen spricht, dass niemand in Armut leben müsste.', 'Lý do ủng hộ thu nhập cơ bản là không ai phải sống trong nghèo đói.'],
              ['Dagegen spricht, dass es sehr schwer zu finanzieren ist.', 'Lý do phản đối là nó rất khó tài trợ.'],
            ],
            exercises: [
              fill('Dafür spricht, dass die Reform mehr Gerechtigkeit {bringt}.', 'Lý do ủng hộ là cải cách mang lại nhiều công bằng hơn.'),
              choose('___ die Steuererhöhung spricht, dass sie die Wirtschaft schwächt.', ['Gegen', 'Dagegen', 'Gegner'], 'Gegen', { vi: 'Lý do phản đối việc tăng thuế là nó làm suy yếu kinh tế.' }),
              order('Ein wichtiges Argument / gegen / den Plan / ist, / dass / er / zu teuer / ist.', 'Một lập luận quan trọng phản đối kế hoạch là nó quá đắt.'),
            ],
          },
          {
            text_vi:
              'Liệt kê hai lý do: **zum einen** …, **zum anderen** … (một là…, hai là…); đứng vị trí 1 thì **động từ ngay sau**: Zum einen **ist** das System teuer, zum anderen **ist** es ungerecht. Thừa nhận rồi phản bác: **Man muss zugeben, dass** … **Allerdings** … Kết luận: **Wenn man alle Argumente abwägt**, … **Meiner Ansicht nach** …',
            examples: [['Man muss zugeben, dass die Rente sicher sein muss. Allerdings können die Jungen nicht alles bezahlen.', 'Phải thừa nhận rằng lương hưu cần được đảm bảo. Tuy nhiên người trẻ không thể trả hết.']],
            exercises: [
              choose('Zum einen ___ die Kosten hoch, zum anderen fehlt das Personal.', ['sind', 'die Kosten sind', 'seien'], 'sind', { vi: 'Một là chi phí cao, hai là thiếu nhân lực.' }),
              fill('Man muss {zugeben}, dass das Rentensystem Probleme hat.', 'Phải thừa nhận rằng hệ thống lương hưu có vấn đề.'),
              translate('Lý do ủng hộ là điều đó giúp những gia đình nghèo.', ['Dafür spricht, dass es armen Familien hilft.', 'Dafür spricht, dass das armen Familien hilft.']),
            ],
          },
        ],
        mixed: [
          fill('Dagegen spricht, dass die Bevölkerung immer älter {wird}.', 'Lý do phản đối là dân số ngày càng già đi.'),
          choose('Zum einen ist die Idee gerecht, zum ___ ist sie bezahlbar.', ['anderen', 'andere', 'zweiten'], 'anderen', { vi: 'Một là ý tưởng công bằng, hai là có thể chi trả được.' }),
          transform('Viết lại với "Dafür spricht, dass"', 'Ein Argument dafür ist: Das Grundeinkommen gibt Sicherheit.', [
            'Dafür spricht, dass das Grundeinkommen Sicherheit gibt.',
          ]),
          choose('Wenn man alle Argumente ___, ist die Reform vertretbar.', ['abwägt', 'abwägen', 'wägt ab'], 'abwägt', { vi: 'Nếu cân nhắc mọi lập luận, cải cách là có thể biện hộ được.' }),
          order('Für / ein höheres Rentenalter / spricht, / dass / die Menschen / länger / leben.', 'Lý do ủng hộ tuổi nghỉ hưu cao hơn là người ta sống lâu hơn.'),
        ],
      },
      dialogue: {
        title_de: 'Grundeinkommen für alle?',
        lines: [
          { speaker: 'A', de: 'In der Uni steht gerade das bedingungslose Grundeinkommen zur Debatte. Was meinst du?', vi: 'Ở trường đang tranh luận về thu nhập cơ bản vô điều kiện. Bạn nghĩ sao?' },
          { speaker: 'B', de: 'Ich bin skeptisch. Dagegen spricht vor allem, dass es extrem teuer wäre.', vi: 'Mình hoài nghi. Lý do phản đối chủ yếu là nó sẽ cực kỳ tốn kém.' },
          { speaker: 'A', de: 'Das muss man zugeben. Aber dafür spricht, dass niemand mehr Angst vor Armut haben müsste.', vi: 'Phải thừa nhận vậy. Nhưng lý do ủng hộ là không ai còn phải sợ nghèo đói.' },
          { speaker: 'B', de: 'Und wer würde dann noch die unbeliebten Jobs machen?', vi: 'Thế thì ai sẽ làm những công việc không ai thích?' },
          { speaker: 'A', de: 'Studien zeigen, dass die meisten Menschen trotzdem weiterarbeiten. Zum einen wegen des Geldes, zum anderen wegen der Teilhabe.', vi: 'Các nghiên cứu cho thấy phần lớn mọi người vẫn tiếp tục làm việc. Một là vì tiền, hai là vì muốn được tham gia vào xã hội.' },
          { speaker: 'B', de: 'Vielleicht. Trotzdem finde ich es fragwürdig, Geld an alle zu verteilen, auch an Reiche.', vi: 'Có thể. Dù vậy mình thấy đáng ngờ khi chia tiền cho tất cả, kể cả người giàu.' },
          { speaker: 'A', de: 'Das ist ein berechtigter Einwand. Man könnte die Reichen über Steuern beteiligen.', vi: 'Đó là ý phản bác chính đáng. Có thể bắt người giàu đóng góp qua thuế.' },
          { speaker: 'B', de: 'Wenn man alles abwägt, bin ich eher für Reformen im bestehenden Sozialstaat.', vi: 'Cân nhắc mọi thứ, mình nghiêng về cải cách trong nhà nước phúc lợi hiện có.' },
        ],
        gloss: { bedingungslose: 'vô điều kiện', skeptisch: 'hoài nghi', Armut: 'sự nghèo đói', unbeliebten: 'không được ưa thích', Reiche: 'người giàu', beteiligen: 'cho tham gia, bắt đóng góp', bestehenden: 'hiện có' },
        questions: [
          mc('Ở trường đang tranh luận về gì?', ['thu nhập cơ bản vô điều kiện', 'học phí', 'bầu cử'], 'thu nhập cơ bản vô điều kiện'),
          tf('B ist sofort für das Grundeinkommen.', false, { explain: 'Ich bin skeptisch.' }),
          mc('Theo A, vì sao phần lớn mọi người vẫn làm việc?', ['vì tiền và vì muốn tham gia vào xã hội', 'vì bị bắt buộc', 'vì chán ở nhà'], 'vì tiền và vì muốn tham gia vào xã hội'),
          tf('Am Ende ist B eher für Reformen im Sozialstaat.', true),
        ],
        dictation: [1, 2],
      },
      writing_prompt_vi:
        'Viết bài lập luận (8–10 câu) về một câu hỏi: "Có nên nâng tuổi nghỉ hưu lên 70 không?" Gồm mở bài, hai lý do ủng hộ, hai lý do phản đối, kết luận; dùng Dafür spricht, dass / Dagegen spricht, dass và zum einen … zum anderen.',
    },
    {
      title_vi: 'Dân chủ và bầu cử',
      goal_vi: 'Nói về bầu cử, đảng phái và sự tham gia của công dân; đặt điều kiện và giới hạn bằng sofern, insofern … als.',
      items: [
        'Koalition', 'Parlament', 'Wahlbeteiligung', 'Bürgerinitiative', 'mehrheitlich', 'insofern', 'sofern',
        'sofern / insofern … als', 'Wahlprogramm', 'Wähler', 'Stimmzettel', 'Volksabstimmung', 'Bürgerrecht', 'Mitbestimmung',
        'Kompromissbereitschaft', 'Zivilgesellschaft', 'kandidieren', 'mitbestimmen', 'sich enthalten', 'parteilos', 'bürgernah',
        'mehrheitsfähig', 'politikverdrossen', 'überparteilich', 'die Mehrheit erreichen', 'einen Kompromiss schließen',
        'Wahlrecht', 'regierungsfähig', 'an die Macht kommen',
      ],
      grammar: {
        point: 'sofern-insofern',
        sections: [
          {
            text_vi:
              '**sofern** = "miễn là, nếu như", trang trọng hơn **wenn**, hay gặp trong luật và thông báo. Câu phụ, **động từ cuối**: **Sofern** Sie wahlberechtigt **sind**, erhalten Sie einen Brief. Đặt đầu câu thì câu chính bắt đầu bằng **động từ**. Phủ định: **sofern nicht** = trừ khi.',
            examples: [
              ['Sofern keine Partei die Mehrheit erreicht, muss eine Koalition gebildet werden.', 'Nếu không đảng nào giành đa số thì phải lập liên minh.'],
              ['Die Abstimmung findet statt, sofern nichts dagegen spricht.', 'Cuộc bỏ phiếu sẽ diễn ra, miễn là không có gì cản trở.'],
            ],
            exercises: [
              fill('Sofern Sie über 18 {sind}, dürfen Sie wählen.', 'Miễn là bạn trên 18 tuổi, bạn được đi bầu.'),
              choose('Sofern die Partei die Mehrheit erreicht, ___ sie allein regieren.', ['kann', 'sie kann', 'können'], 'kann', { vi: 'Nếu đảng giành được đa số, họ có thể tự cầm quyền.' }),
              order('Wir / unterstützen / die Initiative, / sofern / sie / überparteilich / bleibt.', 'Chúng tôi ủng hộ sáng kiến, miễn là nó vẫn vượt đảng phái.'),
            ],
          },
          {
            text_vi:
              '**insofern … als** = "ở mức độ mà / xét ở chỗ": giới hạn một nhận định. **insofern** đứng trong **câu chính**, **als** mở **câu phụ** (động từ cuối): Er hat **insofern** recht, **als** die Wahlbeteiligung gesunken **ist** (anh ấy đúng ở chỗ…). Đứng một mình, **insofern** = "về mặt đó, vì vậy": Das ist **insofern** wichtig.',
            table: 'Từ | Nghĩa | Ví dụ\nsofern | miễn là, nếu | Sofern du Zeit hast, …\nsofern nicht | trừ khi | …, sofern nichts passiert.\ninsofern … als | ở chỗ, xét ở mức | Er hat insofern recht, als …',
            examples: [['Die Wahl war insofern historisch, als zum ersten Mal drei Parteien eine Koalition bildeten.', 'Cuộc bầu cử mang tính lịch sử ở chỗ lần đầu tiên ba đảng lập liên minh.']],
            exercises: [
              choose('Sie hat insofern recht, ___ viele junge Leute politikverdrossen sind.', ['als', 'dass', 'wenn'], 'als', { vi: 'Cô ấy đúng ở chỗ nhiều người trẻ chán ghét chính trị.' }),
              fill('Die Reform ist {insofern} wichtig, als sie mehr Mitbestimmung ermöglicht.', 'Cải cách quan trọng ở chỗ nó cho phép nhiều quyền cùng quyết định hơn.'),
              translate('Miễn là trời không mưa, buổi biểu tình sẽ diễn ra.', [
                'Sofern es nicht regnet, findet die Demonstration statt.',
                'Sofern es nicht regnet, findet die Demo statt.',
              ]),
            ],
          },
          {
            text_vi:
              '**es sei denn** (= **außer wenn**) = "trừ khi": nêu **ngoại lệ duy nhất** của câu trước. Nó đứng **sau** câu chính, có dấu phẩy hai bên; sau đó là câu có trật tự **câu chính** (động từ vị trí 2): Die Wahl findet statt, **es sei denn**, es **gibt** einen Sturm. Gần nghĩa với **sofern nicht** (động từ cuối): …, sofern es keinen Sturm **gibt**.',
            examples: [
              ['Ich gehe wählen, es sei denn, ich bin krank.', 'Tôi sẽ đi bầu, trừ khi tôi bị ốm.'],
              ['Das Gesetz tritt in Kraft, es sei denn, das Gericht stoppt es.', 'Luật sẽ có hiệu lực, trừ khi tòa án ngăn lại.'],
            ],
            exercises: [
              choose('Ich komme zur Sitzung, es sei denn, ich ___ länger arbeiten.', ['muss', 'müsse', 'müssen'], 'muss', { vi: 'Tôi sẽ đến cuộc họp, trừ khi phải làm muộn.' }),
              transform('Viết lại với "es sei denn"', 'Wir fahren morgen, außer wenn es regnet.', ['Wir fahren morgen, es sei denn, es regnet.', 'Wir fahren morgen, es sei denn, dass es regnet.']),
            ],
          },
        ],
        mixed: [
          choose('___ du am Sonntag Zeit hast, komm mit zur Wahl.', ['Sofern', 'Insofern', 'Als'], 'Sofern', { vi: 'Nếu Chủ nhật bạn có thời gian thì đi bầu cùng nhé.' }),
          fill('Die Koalition hält, sofern beide Parteien kompromissbereit {bleiben}.', 'Liên minh còn đứng vững, miễn là cả hai đảng vẫn sẵn sàng thỏa hiệp.'),
          choose('Das Ergebnis ist insofern überraschend, als die Partei kaum Geld ___.', ['hatte', 'hat gehabt', 'haben'], 'hatte', { vi: 'Kết quả bất ngờ ở chỗ đảng này hầu như không có tiền.' }),
          transform('Viết lại với "sofern"', 'Wenn die Bürger es wollen, gibt es eine Volksabstimmung.', ['Sofern die Bürger es wollen, gibt es eine Volksabstimmung.']),
          order('Er / hat / insofern / recht, / als / die Wahlbeteiligung / gesunken / ist.', 'Anh ấy đúng ở chỗ tỷ lệ đi bầu đã giảm.'),
        ],
      },
      dialogue: {
        title_de: 'Gehst du wählen?',
        lines: [
          { speaker: 'A', de: 'Am Sonntag ist Landtagswahl. Gehst du wählen?', vi: 'Chủ nhật bầu cử quốc hội bang. Bạn có đi bầu không?' },
          { speaker: 'B', de: 'Ehrlich gesagt bin ich etwas politikverdrossen. Alle Parteien versprechen dasselbe.', vi: 'Nói thật là mình hơi chán chính trị. Đảng nào cũng hứa giống nhau.' },
          { speaker: 'A', de: 'Da hast du insofern recht, als die Wahlprogramme sich ähneln. Aber die Details sind wichtig.', vi: 'Bạn đúng ở chỗ các cương lĩnh tranh cử giống nhau. Nhưng chi tiết mới quan trọng.' },
          { speaker: 'B', de: 'Und was bringt meine eine Stimme?', vi: 'Thế một phiếu của mình thì được gì?' },
          { speaker: 'A', de: 'Mehr als du denkst. Wenn die Wahlbeteiligung niedrig ist, bekommen radikale Parteien mehr Gewicht.', vi: 'Nhiều hơn bạn nghĩ. Nếu tỷ lệ đi bầu thấp, các đảng cực đoan có trọng lượng lớn hơn.' },
          { speaker: 'B', de: 'Das stimmt. Ich darf doch auch per Brief wählen, oder?', vi: 'Đúng thật. Mình cũng được bầu qua thư phải không?' },
          { speaker: 'A', de: 'Ja, sofern du die Unterlagen rechtzeitig beantragst.', vi: 'Được, miễn là bạn xin giấy tờ kịp thời.' },
          { speaker: 'B', de: 'Okay, überzeugt. Ich wähle eine Partei, die bürgernah ist und Kompromisse schließen kann.', vi: 'Được, bạn thuyết phục được mình rồi. Mình sẽ bầu một đảng gần dân và biết thỏa hiệp.' },
        ],
        gloss: { Landtagswahl: 'bầu cử quốc hội bang', versprechen: 'hứa', 'ähneln sich': 'giống nhau', Stimme: 'lá phiếu; giọng nói', Gewicht: 'trọng lượng', 'per Brief': 'qua thư', Unterlagen: 'giấy tờ', beantragst: 'xin, nộp đơn (beantragen)' },
        questions: [
          mc('Chủ nhật có sự kiện gì?', ['bầu cử quốc hội bang', 'trưng cầu dân ý', 'lễ hội'], 'bầu cử quốc hội bang'),
          tf('B ist sehr begeistert von Politik.', false, { explain: 'Ich bin etwas politikverdrossen.' }),
          mc('Theo A, khi tỷ lệ đi bầu thấp thì điều gì xảy ra?', ['các đảng cực đoan có trọng lượng lớn hơn', 'cuộc bầu bị hủy', 'không ai thắng'], 'các đảng cực đoan có trọng lượng lớn hơn'),
          tf('Man kann per Brief wählen, sofern man die Unterlagen rechtzeitig beantragt.', true),
        ],
        dictation: [2, 4],
      },
      writing_prompt_vi:
        'Viết một đoạn (6–8 câu) trả lời: "Có nên hạ tuổi được đi bầu xuống 16 không?"; dùng ít nhất hai câu với sofern và một câu với insofern … als.',
    },
    {
      title_vi: 'Nhà nước và quyền lực',
      goal_vi: 'Đọc tin chính trị về luật, tham nhũng, từ chức; thuật lại lời chính trị gia bằng Konjunktiv I và dạng thay Konjunktiv II.',
      items: [
        'Rechtsstaat', 'Gewaltenteilung', 'Gesetzentwurf', 'Reform', 'Interessenvertretung', 'Lobby', 'Machtmissbrauch',
        'Korruption', 'durchsetzen', 'verabschieden', 'kontrollieren', 'missbrauchen', 'einflussreich', 'korrupt', 'rechtlich',
        'gesellschaftlich', 'Konjunktiv I trong tường thuật', 'Konjunktiv II thay cho Konjunktiv I', 'Bundesregierung',
        'Bundespräsident', 'Landtag', 'Pressefreiheit', 'Polarisierung', 'Populismus', 'regeln', 'zurücktreten', 'polarisieren',
        'populistisch', 'radikal', 'zustimmungspflichtig', 'Gesetzgebung', 'Amtszeit', 'ernennen', 'vereidigen',
        'die Weichen stellen',
      ],
      grammar: {
        point: 'konjunktiv-1-ersatz',
        sections: [
          {
            text_vi:
              'Ôn Konjunktiv I: er **habe**, **sei**, **werde**, **könne**. Vấn đề: ở **số nhiều** (và ngôi ich, wir) Konjunktiv I thường **trùng Präsens**: sie **haben** (Konj. I) = sie haben (Präsens). Người đọc không nhận ra lời gián tiếp, nên báo chí dùng **Konjunktiv II**: Die Minister sagten, sie **hätten** keine Zeit. Riêng **sein** luôn rõ: sie **seien**.',
            table: 'Lời trực tiếp | Konjunktiv I | Dùng thay\n„Wir haben einen Plan.“ | sie haben (trùng) | sie hätten einen Plan\n„Wir können nichts tun.“ | sie können (trùng) | sie könnten nichts tun\n„Wir sind bereit.“ | sie seien bereit | (giữ nguyên)\n„Er hat recht.“ | er habe recht | (giữ nguyên)',
            examples: [
              ['Die Abgeordneten erklärten, sie hätten von der Korruption nichts gewusst.', 'Các nghị sĩ giải thích rằng họ không hề biết về vụ tham nhũng.'],
              ['Die Ministerin sagte, das Gesetz werde bald verabschiedet.', 'Bà bộ trưởng nói luật sẽ sớm được thông qua.'],
            ],
            exercises: [
              choose('Die Politiker sagten, sie ___ keine Fehler gemacht.', ['hätten', 'haben', 'habe'], 'hätten', { vi: 'Các chính trị gia nói họ đã không mắc lỗi nào.' }),
              choose('Der Minister erklärte, er ___ zurücktreten.', ['werde', 'würden', 'wird'], 'werde', { vi: 'Bộ trưởng tuyên bố ông sẽ từ chức.' }),
              fill('Die Parteien betonten, sie {seien} zu einem Kompromiss bereit.', 'Các đảng nhấn mạnh rằng họ sẵn sàng thỏa hiệp.'),
            ],
          },
          {
            text_vi:
              'Với động từ thường ở số nhiều, Konjunktiv II nhiều khi cũng trùng Präteritum (sie **kauften**), nên dùng **würde + Infinitiv**: Die Bürger sagten, sie **würden** die Reform **unterstützen**. Quá khứ trong lời gián tiếp: **habe/sei** (hoặc hätten/seien) + **Partizip II**: Er sagte, er **habe** das Geld nicht **genommen**.',
            table: 'Thời | Ví dụ\nhiện tại | Sie sagt, sie sei krank.\nquá khứ | Sie sagt, sie sei krank gewesen / sie habe nichts gewusst.\ntương lai | Sie sagt, sie werde kommen.\nsố nhiều, động từ thường | Sie sagen, sie würden kommen.',
            examples: [['Der Politiker behauptete, er habe das Geld nicht angenommen.', 'Chính trị gia khẳng định ông không nhận tiền.']],
            exercises: [
              fill('Die Lobbyisten sagten, sie {würden} die Gesetzgebung nicht beeinflussen.', 'Những người vận động hành lang nói họ không tác động đến việc lập pháp.'),
              transform('Chuyển sang lời gián tiếp', 'Die Bürger sagen: „Wir haben kein Vertrauen mehr.“', [
                'Die Bürger sagen, sie hätten kein Vertrauen mehr.',
              ]),
              choose('Er behauptete, er ___ von nichts gewusst.', ['habe', 'sei', 'werde'], 'habe', { vi: 'Ông ta khẳng định mình không biết gì.' }),
            ],
          },
        ],
        mixed: [
          choose('Die Journalisten berichteten, die Regierung ___ die Pressefreiheit einschränken.', ['wolle', 'will', 'wollen'], 'wolle', { vi: 'Các nhà báo đưa tin chính phủ muốn hạn chế tự do báo chí.' }),
          fill('Die Abgeordneten erklärten, sie {hätten} den Gesetzentwurf geprüft.', 'Các nghị sĩ tuyên bố họ đã xem xét dự thảo luật.'),
          transform('Chuyển sang lời gián tiếp', 'Der Präsident sagt: „Ich bin nicht korrupt.“', [
            'Der Präsident sagt, er sei nicht korrupt.',
            'Der Präsident sagt, dass er nicht korrupt sei.',
          ]),
          choose('Die Kritiker meinen, die Parteien ___ die Gesellschaft polarisieren.', ['würden', 'werden', 'wird'], 'würden', { vi: 'Những người chỉ trích cho rằng các đảng đang gây chia rẽ xã hội.' }),
          order('Die Ministerin / sagte, / sie / sei / nicht / zurückgetreten.', 'Bà bộ trưởng nói bà không từ chức.'),
        ],
      },
      dialogue: {
        title_de: 'Ein Skandal in der Hauptstadt',
        lines: [
          { speaker: 'A', de: 'Hast du die Nachrichten gesehen? Der Bauminister soll Geld von einer Lobby bekommen haben.', vi: 'Bạn xem tin chưa? Nghe nói bộ trưởng xây dựng đã nhận tiền từ một nhóm vận động hành lang.' },
          { speaker: 'B', de: 'Ja. Er sagte im Interview, er habe nichts Falsches getan.', vi: 'Có. Ông ấy nói trong cuộc phỏng vấn rằng ông không làm gì sai.' },
          { speaker: 'A', de: 'Und die Opposition?', vi: 'Còn phe đối lập?' },
          { speaker: 'B', de: 'Die Opposition behauptet, er habe das Gesetz für die Baufirmen geschrieben. Sie fordert seinen Rücktritt.', vi: 'Phe đối lập khẳng định ông ấy đã soạn luật có lợi cho các công ty xây dựng. Họ đòi ông từ chức.' },
          { speaker: 'A', de: 'Das ist Machtmissbrauch, wenn es stimmt. Im Rechtsstaat muss das kontrolliert werden.', vi: 'Nếu đúng thì đó là lạm quyền. Trong nhà nước pháp quyền điều đó phải được kiểm soát.' },
          { speaker: 'B', de: 'Genau dafür gibt es die Gewaltenteilung und die Pressefreiheit. Die Journalisten haben den Fall ja aufgedeckt.', vi: 'Chính vì vậy mới có tam quyền phân lập và tự do báo chí. Các nhà báo đã phanh phui vụ việc.' },
          { speaker: 'A', de: 'Und was sagt die Bundesregierung?', vi: 'Thế chính phủ liên bang nói gì?' },
          { speaker: 'B', de: 'Ein Sprecher erklärte, man werde den Fall genau prüfen. Erst dann wolle man entscheiden.', vi: 'Một người phát ngôn tuyên bố sẽ xem xét kỹ vụ việc. Chỉ sau đó mới quyết định.' },
        ],
        gloss: { Bauminister: 'bộ trưởng xây dựng', Opposition: 'phe đối lập', Baufirmen: 'công ty xây dựng', Rücktritt: 'sự từ chức', Fall: 'vụ việc', aufgedeckt: 'phanh phui (aufdecken)', Sprecher: 'người phát ngôn' },
        questions: [
          mc('Bộ trưởng bị cáo buộc điều gì?', ['nhận tiền từ nhóm vận động hành lang', 'gian lận bầu cử', 'trốn thuế'], 'nhận tiền từ nhóm vận động hành lang'),
          tf('Der Minister gibt zu, dass er Fehler gemacht hat.', false, { explain: 'Er sagte, er habe nichts Falsches getan.' }),
          mc('Ai đã phanh phui vụ việc?', ['các nhà báo', 'cảnh sát', 'tổng thống'], 'các nhà báo'),
          tf('Die Bundesregierung will den Fall zuerst prüfen.', true),
        ],
        dictation: [1, 4],
      },
      writing_prompt_vi:
        'Viết một bản tin ngắn (6–8 câu) về một vụ bê bối chính trị tưởng tượng: ai bị cáo buộc gì, các bên nói gì; dùng Konjunktiv I và ít nhất hai dạng thay bằng Konjunktiv II (hätten, würden).',
    },
  ],
  test: {
    grammar: {
      argumentieren: [
        fill('Dafür spricht, dass es Geld {spart}.', 'Lý do ủng hộ là nó tiết kiệm tiền.'),
        choose('___ den Plan spricht, dass er zu teuer ist.', ['Gegen', 'Dagegen', 'Wider'], 'Gegen'),
        choose('Zum einen ist es billig, zum ___ ist es schnell.', ['anderen', 'zweiten', 'andere'], 'anderen'),
        order('Dagegen / spricht, / dass / es / viel Zeit / kostet.', 'Lý do phản đối là nó tốn nhiều thời gian.'),
        fill('Man muss {zugeben}, dass die Idee gut ist.', 'Phải thừa nhận rằng ý tưởng hay.'),
        choose('Ein wichtiges Argument ___ die Reform ist, dass sie gerecht ist.', ['für', 'dafür', 'pro'], 'für'),
      ],
      'sofern-insofern': [
        choose('___ Sie Fragen haben, rufen Sie uns an.', ['Sofern', 'Insofern', 'Als'], 'Sofern'),
        fill('Sofern es nicht {regnet}, gehen wir wandern.', 'Miễn là trời không mưa, chúng ta đi leo núi.'),
        choose('Er hat insofern recht, ___ die Preise gestiegen sind.', ['als', 'dass', 'wenn'], 'als'),
        order('Ich / komme / mit, / sofern / ich / Zeit / habe.', 'Tôi sẽ đi cùng, miễn là tôi có thời gian.'),
        fill('Das ist {insofern} problematisch, als niemand dafür bezahlen will.', 'Điều đó có vấn đề ở chỗ không ai muốn trả tiền.'),
        choose('Sofern du Lust hast, ___ wir ins Kino.', ['gehen', 'wir gehen', 'gehen wir'], 'gehen'),
      ],
      'konjunktiv-1-ersatz': [
        choose('Sie sagten, sie ___ keine Zeit.', ['hätten', 'haben', 'habe'], 'hätten'),
        choose('Er sagte, er ___ krank.', ['sei', 'ist', 'wäre sein'], 'sei'),
        fill('Die Kinder sagten, sie {würden} gern mitkommen.', 'Bọn trẻ nói chúng muốn đi cùng.'),
        fill('Sie erklärte, sie {habe} nichts gewusst.', 'Cô ấy giải thích rằng mình không biết gì.'),
        order('Die Minister / sagten, / sie / seien / einverstanden.', 'Các bộ trưởng nói họ đồng ý.'),
        choose('Er behauptet, er ___ das Geld nicht genommen.', ['habe', 'sei', 'werde'], 'habe'),
      ],
    },
    reading: {
      title_de: 'Wählen ab 16?',
      text_de:
        'In mehreren Bundesländern dürfen Jugendliche schon mit 16 Jahren bei Landtagswahlen wählen. Nun wird diskutiert, ob das auch für die Bundestagswahl gelten soll. Dafür spricht, dass junge Menschen von vielen politischen Entscheidungen, zum Beispiel beim Klimaschutz, besonders lange betroffen sind. Befürworter sagen, Jugendliche seien heute gut informiert und politisch interessiert. Gegner wenden ein, viele Sechzehnjährige hätten noch nicht genug Erfahrung. Außerdem sei nicht klar, ob die Wahlbeteiligung dadurch steigen würde. Studien zeigen, dass junge Wähler insofern wichtig sind, als sie früh Gewohnheiten entwickeln: Wer einmal wählt, geht meistens auch später zur Wahl.',
      gloss: {
        Bundesländern: 'các bang',
        Bundestagswahl: 'bầu cử quốc hội liên bang',
        gelten: 'có hiệu lực, áp dụng',
        betroffen: 'bị ảnh hưởng',
        Sechzehnjährige: 'người 16 tuổi',
        Gewohnheiten: 'thói quen',
      },
      questions: [
        tf('In einigen Bundesländern darf man schon mit 16 bei Landtagswahlen wählen.', true),
        mc('Lập luận ủng hộ được nêu là gì?', ['người trẻ chịu ảnh hưởng lâu nhất từ các quyết định chính trị', 'người trẻ đóng nhiều thuế', 'người trẻ thích đi bầu'], 'người trẻ chịu ảnh hưởng lâu nhất từ các quyết định chính trị'),
        mc('Người phản đối cho rằng gì?', ['nhiều người 16 tuổi chưa đủ kinh nghiệm', 'bầu cử quá đắt', 'người trẻ không có quốc tịch'], 'nhiều người 16 tuổi chưa đủ kinh nghiệm'),
        tf('Wer früh wählt, geht später meistens nicht mehr wählen.', false, { explain: 'Wer einmal wählt, geht meistens auch später zur Wahl.' }),
      ],
    },
  },
});
