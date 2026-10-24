// B1 · 04 Đi làm và ứng tuyển — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b1-04',
  points: [
    {
      key: 'hoeflich',
      rule_key: 'konjunktiv-ii-hoeflich',
      category: 'conjugation',
      title_vi: 'Konjunktiv II lịch sự: könnten, würden, hätten, dürfte',
      explanation_vi: 'Hỏi, đề nghị lịch sự: Könnten Sie …? Würden Sie …? Ich hätte gern … Dürfte ich …? Động từ Konjunktiv II đứng đầu (câu hỏi) hoặc vị trí 2, nguyên mẫu cuối câu.',
    },
    {
      key: 'zu-infinitiv',
      rule_key: 'zu-infinitiv-nomen-adjektiv',
      category: 'verb_position',
      title_vi: 'zu + Infinitiv sau danh từ, tính từ; động từ tách',
      explanation_vi: 'Es ist wichtig / Ich habe Lust / Ich freue mich, … zu + nguyên mẫu ở cuối. Động từ tách: einzureichen, anzurufen. Không dùng zu sau động từ khuyết thiếu.',
    },
    {
      key: 'um-zu',
      rule_key: 'um-zu-damit',
      category: 'verb_position',
      title_vi: 'Mục đích: um … zu / damit',
      explanation_vi: 'Cùng chủ ngữ: um … zu + nguyên mẫu (cuối). Khác chủ ngữ: damit + động từ chia (cuối). Hỏi Wozu? (để làm gì) khác Warum? (vì sao → weil).',
    },
  ],
  lessons: [
    {
      title_vi: 'Đọc tin tuyển dụng',
      goal_vi: 'Hiểu tin tuyển dụng; gọi điện hỏi lịch sự bằng Konjunktiv II.',
      items: [
        'Stellenanzeige', 'Stellenangebot', 'Arbeitgeber', 'Arbeitnehmer', 'Arbeitsmarkt', 'Fachkraft', 'Branche', 'Unternehmen',
        'Voraussetzung', 'Qualifikation', 'Berufserfahrung', 'Tätigkeit', 'Arbeitsbedingung', 'Überstunde', 'Personalabteilung',
        'Arbeitslosigkeit', 'zuständig sein', 'zuständig', 'erwarten', 'anbieten', 'qualifiziert', 'geeignet',
        'unbefristet', 'abwechslungsreich', 'in Frage kommen', 'Konjunktiv II lịch sự: würden Sie, könnten Sie',
      ],
      grammar: {
        point: 'hoeflich',
        sections: [
          {
            text_vi:
              'Hỏi, đề nghị **lịch sự** (điện thoại, thư, phỏng vấn) dùng **Konjunktiv II**: **Könnten Sie** mir … schicken? **Würden Sie** mir helfen? **Hätten Sie** kurz Zeit? **Wäre es möglich**, …? Trong câu hỏi, động từ Konjunktiv II đứng **đầu**, nguyên mẫu ở **cuối**.',
            table: 'Ngôi | können | werden | haben | sein\nich | könnte | würde | hätte | wäre\ndu | könntest | würdest | hättest | wärst\ner/sie | könnte | würde | hätte | wäre\nwir/Sie | könnten | würden | hätten | wären',
            examples: [
              ['Könnten Sie mir bitte mehr Informationen schicken?', 'Ông/bà có thể gửi tôi thêm thông tin được không?'],
              ['Ich hätte gern einen Termin.', 'Tôi muốn có một cuộc hẹn.'],
            ],
            exercises: [
              choose('___ Sie mir bitte helfen?', ['Könnten', 'Konnten', 'Kann'], 'Könnten', { vi: 'Ông/bà có thể giúp tôi được không?' }),
              fill('{Würden} Sie mir bitte die Stellenanzeige schicken?', 'Ông/bà vui lòng gửi tôi tin tuyển dụng được không?'),
              choose('Ich ___ eine Frage zur Stelle.', ['hätte', 'hatte', 'würde'], 'hätte', { vi: 'Tôi có một câu hỏi về vị trí này.' }),
            ],
          },
          {
            text_vi:
              'Thêm lịch sự: **Dürfte ich** Sie etwas fragen? **Ich würde gern** … (mềm hơn ich will). **Es wäre schön, wenn** … Đổi câu ra lệnh thành câu hỏi: Gib mir … → **Könnten Sie mir … geben?** Ich will … → **Ich möchte** / **Ich würde gern** …',
            examples: [['Ich würde gern mehr über die Tätigkeit erfahren.', 'Tôi muốn biết thêm về công việc.']],
            exercises: [
              transform('Nói lịch sự hơn (Könnten Sie …?)', 'Schicken Sie mir die Informationen!', [
                'Könnten Sie mir die Informationen schicken?',
                'Könnten Sie mir bitte die Informationen schicken?',
              ]),
              transform('Nói lịch sự hơn (Ich würde gern …)', 'Ich will mehr über die Arbeitsbedingungen wissen.', [
                'Ich würde gern mehr über die Arbeitsbedingungen wissen.',
              ]),
              order('Dürfte / ich / Sie / etwas / fragen?', 'Tôi có thể hỏi ông/bà một điều không?'),
            ],
          },
          {
            text_vi:
              'Tin tuyển dụng thường có: **Tätigkeit** (công việc), **Voraussetzungen** (yêu cầu: Qualifikation, Berufserfahrung), **wir bieten** (chúng tôi đề nghị: Vertrag **unbefristet**, **Arbeitsbedingungen** tốt). Hỏi **Wer ist zuständig?** = Ai phụ trách? – thường là **Personalabteilung**.',
            examples: [['Für Bewerbungen ist Frau Klein zuständig.', 'Bà Klein phụ trách hồ sơ ứng tuyển.']],
            exercises: [
              fill('Wer ist für die Bewerbungen {zuständig}?', 'Ai phụ trách hồ sơ ứng tuyển?'),
              translate('Chúng tôi đề nghị một hợp đồng không thời hạn.', ['Wir bieten einen unbefristeten Vertrag an.', 'Wir bieten einen unbefristeten Vertrag.']),
            ],
          },
        ],
        mixed: [
          transform('Nói lịch sự hơn (Könnten Sie …?)', 'Rufen Sie mich zurück!', ['Könnten Sie mich zurückrufen?', 'Könnten Sie mich bitte zurückrufen?']),
          choose('___ es möglich, den Termin zu verschieben?', ['Wäre', 'War', 'Würde'], 'Wäre', { vi: 'Có thể dời cuộc hẹn được không?' }),
          fill('Ich {würde} gern in Ihrem Unternehmen arbeiten.', 'Tôi rất muốn làm việc ở doanh nghiệp của ông/bà.'),
          choose('___ Sie kurz Zeit für ein Gespräch?', ['Hätten', 'Hatten', 'Wären'], 'Hätten', { vi: 'Ông/bà có chút thời gian để nói chuyện không?' }),
          order('Könnten / Sie / mich / mit der Personalabteilung / verbinden?', 'Ông/bà có thể nối máy tôi với phòng nhân sự không?'),
        ],
      },
      dialogue: {
        title_de: 'Ein Anruf wegen der Stelle',
        lines: [
          { speaker: 'A', de: 'Guten Tag, mein Name ist Linh Tran. Ich rufe wegen der Stellenanzeige an.', vi: 'Xin chào, tôi tên là Trần Linh. Tôi gọi về tin tuyển dụng.' },
          { speaker: 'B', de: 'Guten Tag, Frau Tran. Hier ist die Personalabteilung. Was kann ich für Sie tun?', vi: 'Chào chị Trần. Đây là phòng nhân sự. Tôi có thể giúp gì cho chị?' },
          { speaker: 'A', de: 'Ich hätte ein paar Fragen zur Stelle als Pflegerin. Wäre der Vertrag unbefristet?', vi: 'Tôi có vài câu hỏi về vị trí điều dưỡng. Hợp đồng có phải không thời hạn không ạ?' },
          { speaker: 'B', de: 'Ja, nach einer Probezeit von sechs Monaten.', vi: 'Có, sau sáu tháng thử việc.' },
          { speaker: 'A', de: 'Und welche Voraussetzungen sind wichtig?', vi: 'Còn những yêu cầu nào quan trọng?' },
          { speaker: 'B', de: 'Sie bräuchten eine Ausbildung und Berufserfahrung. Gutes Deutsch wäre auch wichtig.', vi: 'Chị cần có bằng nghề và kinh nghiệm làm việc. Tiếng Đức tốt cũng quan trọng.' },
          { speaker: 'A', de: 'Ich habe drei Jahre in Vietnam gearbeitet. Käme ich da in Frage?', vi: 'Tôi đã làm ba năm ở Việt Nam. Tôi có thể được xem xét không?' },
          { speaker: 'B', de: 'Auf jeden Fall! Würden Sie uns bitte Ihre Unterlagen per E-Mail schicken?', vi: 'Chắc chắn rồi! Chị vui lòng gửi hồ sơ cho chúng tôi qua email nhé?' },
          { speaker: 'A', de: 'Sehr gern. Vielen Dank für die Informationen!', vi: 'Rất sẵn lòng. Cảm ơn ông về thông tin!' },
        ],
        gloss: { Pflegerin: 'nữ điều dưỡng', Probezeit: 'thời gian thử việc', bräuchten: 'cần (Konjunktiv II của brauchen)', käme: 'được (Konjunktiv II của kommen)', 'auf jeden Fall': 'chắc chắn', Unterlagen: 'hồ sơ' },
        questions: [
          mc('Linh gọi về vị trí nào?', ['điều dưỡng', 'giáo viên', 'kế toán'], 'điều dưỡng'),
          tf('Der Vertrag ist befristet.', false, { explain: 'Ja, unbefristet – nach einer Probezeit von sechs Monaten.' }),
          mc('Thời gian thử việc bao lâu?', ['sáu tháng', 'ba tháng', 'một năm'], 'sáu tháng'),
          tf('Linh soll ihre Unterlagen per E-Mail schicken.', true),
        ],
        dictation: [2, 7],
      },
      writing_prompt_vi:
        'Viết 5 câu hỏi lịch sự bạn muốn hỏi khi gọi điện về một tin tuyển dụng (Könnten Sie …? Wäre es möglich …? Ich hätte gern …).',
    },
    {
      title_vi: 'Viết thư xin việc',
      goal_vi: 'Viết thư xin việc, nêu điểm mạnh; dùng zu + Infinitiv.',
      items: [
        'Bewerber', 'Anschreiben', 'Unterlagen', 'Fähigkeit', 'Stärke', 'Schwäche', 'Arbeitszeugnis', 'Gehaltsvorstellung',
        'Zusage', 'Absage', 'einreichen', 'überzeugen', 'sich bemühen', 'zögern', 'teamfähig', 'belastbar', 'selbstbewusst',
        'engagiert', 'kommunikativ', 'vielseitig', 'überzeugend', 'zielstrebig', 'eigenständig', 'hiermit',
        'Mit freundlichen Grüßen', 'Sehr geehrte Damen und Herren', 'zum Vorstellungsgespräch einladen', 'Infinitiv mit zu',
      ],
      grammar: {
        point: 'zu-infinitiv',
        sections: [
          {
            text_vi:
              'Sau nhiều **động từ**, **danh từ** và **tính từ**, vế sau dùng **zu + nguyên mẫu** ở cuối: Ich versuche, Sie **zu überzeugen**. **Es ist wichtig**, teamfähig **zu sein**. Ich **habe die Möglichkeit**, Erfahrung **zu sammeln**. Hay gặp: Es ist schwer/leicht/wichtig …; Ich habe Lust/Zeit/Angst …; Ich freue mich …',
            examples: [
              ['Es ist nicht leicht, eine gute Stelle zu finden.', 'Không dễ tìm được một chỗ làm tốt.'],
              ['Ich habe Angst, im Gespräch nervös zu sein.', 'Tôi sợ bị run khi phỏng vấn.'],
            ],
            exercises: [
              fill('Es ist wichtig, im Team arbeiten {zu} können.', 'Điều quan trọng là có thể làm việc nhóm.'),
              choose('Ich freue mich, Sie ___.', ['kennenzulernen', 'zu kennenlernen', 'kennenlernen'], 'kennenzulernen', { vi: 'Tôi rất vui được làm quen với ông/bà.' }),
              order('Ich / habe / keine Zeit, / das Anschreiben / zu / schreiben.', 'Tôi không có thời gian viết thư xin việc.'),
            ],
          },
          {
            text_vi:
              'Động từ **tách**: **zu** chen giữa tiền tố và gốc, viết liền: ein**zu**reichen, an**zu**rufen, kennen**zu**lernen. **Không** dùng zu sau động từ khuyết thiếu (Ich muss arbeiten), sau werden, lassen và sau gehen, sehen, hören.',
            table: 'Động từ | zu + Infinitiv\narbeiten | zu arbeiten\neinreichen | einzureichen\nanrufen | anzurufen\nsich bewerben | sich zu bewerben',
            examples: [['Vergessen Sie nicht, Ihr Arbeitszeugnis einzureichen.', 'Đừng quên nộp giấy nhận xét công việc.']],
            exercises: [
              fill('Ich habe vor, die Unterlagen morgen {einzureichen}. (einreichen)', 'Tôi định nộp hồ sơ vào ngày mai.'),
              choose('Ich muss die Bewerbung heute ___.', ['schreiben', 'zu schreiben'], 'schreiben', { vi: 'Hôm nay tôi phải viết hồ sơ.' }),
              transform('Viết lại với zu + Infinitiv', 'Ich rufe morgen an. Das habe ich vor.', ['Ich habe vor, morgen anzurufen.']),
            ],
          },
          {
            text_vi:
              'Thư xin việc (**Anschreiben**) mở đầu **Sehr geehrte Damen und Herren**, kết thúc **Mit freundlichen Grüßen**. Câu mẫu: **Hiermit** bewerbe ich mich um die Stelle als … Nêu **Stärken**: teamfähig, belastbar, kommunikativ. Mong được **zum Vorstellungsgespräch eingeladen** (mời phỏng vấn).',
            examples: [['Über eine Einladung zum Vorstellungsgespräch würde ich mich sehr freuen.', 'Tôi rất vui nếu được mời phỏng vấn.']],
            exercises: [
              fill('{Hiermit} bewerbe ich mich um die Stelle als Verkäuferin.', 'Bằng thư này tôi xin ứng tuyển vị trí nhân viên bán hàng.'),
              translate('Tôi biết làm việc nhóm và chịu được áp lực.', ['Ich bin teamfähig und belastbar.']),
            ],
          },
        ],
        mixed: [
          transform('Viết lại với zu + Infinitiv', 'Ich bin selbstbewusst. Das ist wichtig.', ['Es ist wichtig, selbstbewusst zu sein.']),
          choose('Er hat keine Lust, Überstunden ___.', ['zu machen', 'machen', 'gemacht'], 'zu machen', { vi: 'Anh ấy không muốn làm thêm giờ.' }),
          fill('Vergiss nicht, mich {anzurufen}! (anrufen)', 'Đừng quên gọi cho tôi!'),
          choose('Ich kann gut im Team ___.', ['arbeiten', 'zu arbeiten'], 'arbeiten', { vi: 'Tôi làm việc nhóm tốt.' }),
          order('Ich / bemühe / mich, / Sie / zu / überzeugen.', 'Tôi cố gắng thuyết phục ông/bà.'),
        ],
      },
      dialogue: {
        title_de: 'Hilfe beim Anschreiben',
        lines: [
          { speaker: 'A', de: 'Kannst du mein Anschreiben lesen? Ich habe Angst, Fehler zu machen.', vi: 'Bạn đọc thư xin việc của mình được không? Mình sợ mắc lỗi.' },
          { speaker: 'B', de: 'Klar. „Sehr geehrte Damen und Herren, hiermit bewerbe ich mich …“ Der Anfang ist gut.', vi: 'Được. "Kính gửi quý ông bà, bằng thư này tôi xin ứng tuyển…" Phần mở đầu tốt.' },
          { speaker: 'A', de: 'Und der Teil über meine Stärken?', vi: 'Còn phần về điểm mạnh?' },
          { speaker: 'B', de: 'Du schreibst nur „Ich bin gut“. Versuch, genauer zu sein: teamfähig, belastbar, kommunikativ.', vi: 'Bạn chỉ viết "Tôi giỏi". Thử cụ thể hơn: biết làm việc nhóm, chịu áp lực, giỏi giao tiếp.' },
          { speaker: 'A', de: 'Stimmt. Und meine Schwächen? Soll ich die auch nennen?', vi: 'Đúng. Còn điểm yếu? Mình có nên nêu không?' },
          { speaker: 'B', de: 'Nicht im Anschreiben. Aber im Vorstellungsgespräch ist es wichtig, ehrlich zu sein.', vi: 'Không nên trong thư. Nhưng khi phỏng vấn thì cần thành thật.' },
          { speaker: 'A', de: 'Ich zögere noch, die Bewerbung abzuschicken.', vi: 'Mình vẫn còn chần chừ gửi hồ sơ.' },
          { speaker: 'B', de: 'Du hast nichts zu verlieren! Vergiss nicht, das Arbeitszeugnis mitzuschicken.', vi: 'Bạn chẳng mất gì cả! Đừng quên gửi kèm giấy nhận xét công việc.' },
          { speaker: 'A', de: 'Danke! Ich freue mich schon darauf, eine Antwort zu bekommen.', vi: 'Cảm ơn! Mình đã mong nhận được hồi âm rồi.' },
        ],
        gloss: { genauer: 'cụ thể hơn', nennen: 'nêu', ehrlich: 'thành thật', abzuschicken: 'gửi đi (abschicken)', mitzuschicken: 'gửi kèm (mitschicken)', verlieren: 'mất', darauf: 'vào điều đó', Teil: 'phần' },
        questions: [
          tf('A hat Angst, Fehler zu machen.', true),
          mc('B khuyên viết điểm mạnh thế nào?', ['cụ thể hơn', 'ngắn hơn', 'bằng tiếng Anh'], 'cụ thể hơn'),
          tf('A soll ihre Schwächen im Anschreiben nennen.', false, { explain: 'Nicht im Anschreiben, aber im Vorstellungsgespräch.' }),
          mc('A phải gửi kèm gì?', ['giấy nhận xét công việc', 'ảnh gia đình', 'hợp đồng'], 'giấy nhận xét công việc'),
        ],
        dictation: [5, 7],
      },
      writing_prompt_vi:
        'Viết đoạn chính của một thư xin việc (5–6 câu): mở đầu, kinh nghiệm, điểm mạnh, câu kết; dùng ít nhất ba cấu trúc zu + Infinitiv.',
    },
    {
      title_vi: 'Thăng tiến trong nghề',
      goal_vi: 'Nói về hợp đồng, thử việc, thăng tiến; nêu mục đích bằng um … zu và damit.',
      items: [
        'Probezeit', 'Kündigung', 'Arbeitsplatz', 'Karriere', 'Beförderung', 'Gehaltserhöhung', 'Team', 'Selbstständigkeit',
        'Einarbeitung', 'verhandeln', 'sich weiterbilden', 'zusammenarbeiten', 'präsentieren', 'planen',
        'entlassen', 'sich einarbeiten', 'befördern', 'vertreten', 'sich auskennen', 'motivieren', 'damit',
        'Erfahrung sammeln', 'sich selbstständig machen', 'um … zu: mục đích, cùng chủ ngữ', 'damit: mục đích, khác chủ ngữ',
      ],
      grammar: {
        point: 'um-zu',
        sections: [
          {
            text_vi:
              '**um … zu** nêu **mục đích** khi hai vế **cùng chủ ngữ**: Ich lerne Deutsch, **um** in Deutschland **zu arbeiten**. **damit** dùng khi **khác chủ ngữ**: Ich erkläre es langsam, **damit** du es **verstehst**. um … zu: nguyên mẫu ở cuối; damit: động từ chia ở cuối.',
            table: 'Chủ ngữ | Câu mục đích\ncùng: Ich lerne, … | um eine Stelle zu finden.\nkhác: Ich lerne, … | damit meine Eltern stolz sind.',
            examples: [
              ['Sie bildet sich weiter, um Karriere zu machen.', 'Cô ấy học nâng cao để thăng tiến.'],
              ['Die Chefin erklärt alles genau, damit die Neuen sich schnell einarbeiten.', 'Chị trưởng phòng giải thích kỹ để người mới nhanh quen việc.'],
            ],
            exercises: [
              fill('Ich mache einen Kurs, {um} mich weiterzubilden.', 'Tôi học một khóa để nâng cao trình độ.'),
              choose('Der Chef erklärt alles, ___ wir gut zusammenarbeiten.', ['damit', 'um'], 'damit', { vi: 'Sếp giải thích mọi thứ để chúng tôi cộng tác tốt.' }),
              order('Sie / spart, / um / sich / selbstständig / zu / machen.', 'Cô ấy tiết kiệm để tự lập nghiệp.'),
            ],
          },
          {
            text_vi:
              'Hỏi **Wozu?** (để làm gì) → trả lời um … zu / damit; hỏi **Warum?** (vì sao) → weil. Động từ tách: um **anzufangen**, um **kennenzulernen**. Câu mục đích đứng trước → câu chính bắt đầu bằng **động từ**: **Um** Erfahrung **zu sammeln**, **macht** sie ein Praktikum.',
            examples: [['Wozu lernst du Deutsch? – Um in Deutschland zu studieren.', 'Bạn học tiếng Đức để làm gì? – Để du học Đức.']],
            exercises: [
              transform('Nối bằng um … zu', 'Er macht einen Kurs. Er will befördert werden.', ['Er macht einen Kurs, um befördert zu werden.']),
              transform('Nối bằng damit', 'Ich gebe dir meine Nummer. Du kannst mich anrufen.', ['Ich gebe dir meine Nummer, damit du mich anrufen kannst.']),
              choose('Um Erfahrung zu sammeln, ___ sie ein Praktikum.', ['macht', 'sie macht'], 'macht', { vi: 'Để tích lũy kinh nghiệm, cô ấy đi thực tập.' }),
            ],
          },
          {
            text_vi:
              'Sau khi **unterschreiben** (ký) **Vertrag**: **Probezeit** (thử việc, thường 6 tháng), **Einarbeitung** (làm quen việc). Muốn thăng tiến: **sich weiterbilden**, **verhandeln** về **Gehaltserhöhung**, được **befördert**. Kết thúc: **Kündigung** (thôi việc) hoặc bị **entlassen** (sa thải).',
            examples: [['Nach zwei Jahren wurde sie befördert.', 'Sau hai năm cô ấy được thăng chức.']],
            exercises: [
              fill('Morgen {unterschreibe} ich den Vertrag.', 'Ngày mai tôi ký hợp đồng.'),
              translate('Tôi muốn đàm phán tăng lương.', [
                'Ich möchte eine Gehaltserhöhung verhandeln.',
                'Ich will eine Gehaltserhöhung verhandeln.',
                'Ich möchte über eine Gehaltserhöhung verhandeln.',
              ]),
            ],
          },
        ],
        mixed: [
          choose('Ich spreche langsam, ___ alle mich verstehen.', ['damit', 'um'], 'damit', { vi: 'Tôi nói chậm để mọi người hiểu.' }),
          fill('Er arbeitet viel, um befördert {zu} werden.', 'Anh ấy làm nhiều để được thăng chức.'),
          transform('Nối bằng um … zu', 'Sie lernt jeden Abend. Sie will sich in der Branche auskennen.', [
            'Sie lernt jeden Abend, um sich in der Branche auszukennen.',
          ]),
          choose('___ lernst du Deutsch? – Um in Berlin zu arbeiten.', ['Wozu', 'Warum', 'Wo'], 'Wozu', { vi: 'Bạn học tiếng Đức để làm gì? – Để làm việc ở Berlin.' }),
          order('Die Chefin / lobt / das Team, / damit / alle / motiviert / sind.', 'Trưởng phòng khen nhóm để mọi người có động lực.'),
        ],
      },
      dialogue: {
        title_de: 'Nach der Probezeit',
        lines: [
          { speaker: 'A', de: 'Herzlichen Glückwunsch! Du hast die Probezeit geschafft!', vi: 'Chúc mừng! Bạn đã qua thời gian thử việc!' },
          { speaker: 'B', de: 'Danke! Die Einarbeitung war anstrengend, aber das Team ist super.', vi: 'Cảm ơn! Thời gian làm quen việc vất vả, nhưng nhóm rất tuyệt.' },
          { speaker: 'A', de: 'Was planst du jetzt?', vi: 'Giờ bạn định làm gì?' },
          { speaker: 'B', de: 'Ich möchte mich weiterbilden, um später befördert zu werden.', vi: 'Mình muốn học nâng cao để sau này được thăng chức.' },
          { speaker: 'A', de: 'Gute Idee. Und dein Gehalt?', vi: 'Ý hay. Còn lương của bạn?' },
          { speaker: 'B', de: 'Nächste Woche verhandle ich mit meiner Chefin. Ich mache eine Liste, damit sie meine Erfolge sieht.', vi: 'Tuần sau mình đàm phán với chị trưởng phòng. Mình làm một danh sách để chị ấy thấy thành tích của mình.' },
          { speaker: 'A', de: 'Willst du dich irgendwann selbstständig machen?', vi: 'Bao giờ đó bạn có muốn tự lập nghiệp không?' },
          { speaker: 'B', de: 'Vielleicht. Aber zuerst will ich Erfahrung sammeln, um mich in der Branche gut auszukennen.', vi: 'Có thể. Nhưng trước tiên mình muốn tích lũy kinh nghiệm để thông thạo ngành.' },
          { speaker: 'A', de: 'Das klingt sehr zielstrebig!', vi: 'Nghe rất có chí hướng!' },
        ],
        gloss: { Glückwunsch: 'lời chúc mừng', geschafft: 'vượt qua (schaffen)', anstrengend: 'vất vả', Gehalt: 'lương', Liste: 'danh sách', irgendwann: 'một lúc nào đó', klingt: 'nghe có vẻ', auszukennen: 'thông thạo (sich auskennen)' },
        questions: [
          tf('B hat die Probezeit nicht geschafft.', false, { explain: 'Du hast die Probezeit geschafft!' }),
          mc('B học nâng cao để làm gì?', ['để được thăng chức', 'để đổi việc', 'để đi du lịch'], 'để được thăng chức'),
          mc('Vì sao B làm danh sách?', ['để trưởng phòng thấy thành tích', 'để nhớ việc', 'để tìm việc mới'], 'để trưởng phòng thấy thành tích'),
          tf('B will zuerst Erfahrung sammeln.', true),
        ],
        dictation: [3, 7],
      },
      writing_prompt_vi:
        'Viết về kế hoạch nghề nghiệp của bạn trong 5 năm tới (5–6 câu), dùng ít nhất hai câu um … zu và một câu damit.',
    },
  ],
  test: {
    grammar: {
      hoeflich: [
        choose('___ Sie mir bitte das Formular geben?', ['Könnten', 'Konnten'], 'Könnten'),
        fill('{Würden} Sie mich bitte zurückrufen?', 'Ông/bà vui lòng gọi lại cho tôi được không?'),
        choose('Ich ___ gern einen Termin.', ['hätte', 'hatte'], 'hätte'),
        choose('___ es möglich, morgen zu kommen?', ['Wäre', 'War'], 'Wäre'),
        order('Dürfte / ich / kurz / etwas / fragen?', 'Tôi có thể hỏi một chút không?'),
        fill('Ich {würde} gern mehr über die Stelle erfahren.', 'Tôi muốn biết thêm về vị trí này.'),
      ],
      'zu-infinitiv': [
        fill('Es ist wichtig, pünktlich {zu} sein.', 'Đúng giờ là điều quan trọng.'),
        choose('Ich habe vor, morgen ___.', ['anzurufen', 'zu anrufen', 'anrufen'], 'anzurufen'),
        choose('Ich muss heute ___.', ['arbeiten', 'zu arbeiten'], 'arbeiten'),
        order('Ich / habe / Lust, / ins Kino / zu / gehen.', 'Tôi muốn đi xem phim.'),
        fill('Vergiss nicht, die Unterlagen {einzureichen}. (einreichen)', 'Đừng quên nộp hồ sơ.'),
        choose('Es ist schwer, eine Wohnung zu ___.', ['finden', 'gefunden'], 'finden'),
      ],
      'um-zu': [
        fill('Ich lerne Deutsch, {um} in Berlin zu studieren.', 'Tôi học tiếng Đức để học ở Berlin.'),
        choose('Ich spreche laut, ___ alle mich hören.', ['damit', 'um'], 'damit'),
        choose('Er spart, um ein Auto zu ___.', ['kaufen', 'kauft'], 'kaufen'),
        order('Sie / macht / einen Kurs, / um / Erfahrung / zu / sammeln.', 'Cô ấy học một khóa để tích lũy kinh nghiệm.'),
        fill('Ich gebe dir das Buch, {damit} du lernen kannst.', 'Tôi đưa bạn quyển sách để bạn có thể học.'),
        choose('___ machst du das? – Um Geld zu sparen.', ['Wozu', 'Wo'], 'Wozu'),
      ],
    },
    reading: {
      title_de: 'Mein erster Job in Deutschland',
      text_de:
        'Vor einem Jahr bin ich nach München gekommen, um als Pflegerin zu arbeiten. Am Anfang war es nicht leicht, eine Stelle zu finden. Ich habe zehn Bewerbungen geschrieben und viele Absagen bekommen. Dann hat mich ein Krankenhaus zum Vorstellungsgespräch eingeladen. Ich war nervös, aber ich habe versucht, ruhig zu bleiben. Zwei Tage später kam die Zusage! Die Probezeit war anstrengend, denn ich musste viele neue Wörter lernen. Meine Kollegen haben mir geholfen, damit ich mich schnell einarbeite. Heute habe ich einen unbefristeten Vertrag. Nächstes Jahr möchte ich mich weiterbilden, um Stationsleiterin zu werden.',
      gloss: {
        Pflegerin: 'nữ điều dưỡng',
        Krankenhaus: 'bệnh viện',
        nervös: 'hồi hộp',
        ruhig: 'bình tĩnh',
        anstrengend: 'vất vả',
        denn: 'vì',
        Stationsleiterin: 'trưởng khoa (điều dưỡng)',
      },
      questions: [
        mc('Người viết đến München để làm gì?', ['làm điều dưỡng', 'du học', 'du lịch'], 'làm điều dưỡng'),
        tf('Sie hat sofort eine Zusage bekommen.', false, { explain: 'Sie hat zehn Bewerbungen geschrieben und viele Absagen bekommen.' }),
        tf('Die Kollegen haben ihr bei der Einarbeitung geholfen.', true),
        mc('Năm sau cô ấy muốn làm gì?', ['học nâng cao', 'về Việt Nam', 'nghỉ việc'], 'học nâng cao'),
      ],
    },
  },
});
