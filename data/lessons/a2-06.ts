// A2 · 06 Nghề nghiệp — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a2-06',
  points: [
    {
      key: 'dass',
      rule_key: 'dass-satz-verb-ende',
      category: 'verb_position',
      title_vi: 'Câu với dass: động từ chia đứng cuối',
      explanation_vi: 'Sau glauben, denken, hoffen, wissen, finden, sagen: …, dass ich die Stelle bekomme. Phần chia đứng sau cùng (… sprechen kann / … geschickt habe).',
    },
    {
      key: 'praet-modal',
      rule_key: 'praeteritum-modalverben',
      category: 'tense',
      title_vi: 'Präteritum của động từ khuyết thiếu',
      explanation_vi: 'Bỏ umlaut + -te: musste, konnte, durfte, wollte, sollte; ich = er. Động từ chính vẫn ở nguyên mẫu cuối câu.',
    },
    {
      key: 'adj-ohne',
      rule_key: 'adj-ending-ohne-artikel',
      category: 'adjective_ending',
      title_vi: 'Đuôi tính từ không có mạo từ',
      explanation_vi: 'Không có mạo từ, tính từ mang đuôi của der/die/das: guter Wein, frische Milch, kaltes Wasser, erfahrene Mitarbeiter; mit freundlichen Grüßen.',
    },
  ],
  lessons: [
    {
      title_vi: 'Xin việc',
      goal_vi: 'Tự giới thiệu khi phỏng vấn, nói kinh nghiệm và mong muốn; dùng câu với dass.',
      items: [
        'Stelle', 'Bewerbung', 'Lebenslauf', 'Vorstellungsgespräch', 'Erfahrung', 'Praktikum', 'sich bewerben',
        'sich vorstellen', 'einstellen', 'zuverlässig', 'flexibel', 'freundlich', 'kreativ', 'dass',
        'Ich interessiere mich für', 'Spaß machen', 'Câu với dass',
        'Vertrag',
        'Führerschein',
      ],
      grammar: {
        point: 'dass',
        sections: [
          {
            text_vi:
              '**dass** (rằng) mở câu phụ sau các động từ nói, nghĩ, cảm: glauben, denken, hoffen, wissen, finden, sagen. Như weil, **động từ chia đứng cuối**: Ich hoffe, **dass** ich die Stelle **bekomme**. Trước dass có dấu phẩy. Tiếng Việt hay bỏ chữ "rằng", tiếng Đức không bỏ dass trong kiểu câu này.',
            examples: [
              ['Ich glaube, dass die Stelle gut ist.', 'Tôi nghĩ rằng vị trí này tốt.'],
              ['Er sagt, dass er Erfahrung hat.', 'Anh ấy nói rằng anh ấy có kinh nghiệm.'],
            ],
            exercises: [
              order('Ich hoffe, / dass / ich / die Stelle / bekomme.', 'Tôi hy vọng rằng tôi được nhận.'),
              fill('Ich glaube, dass sie sehr zuverlässig {ist}.', 'Tôi nghĩ rằng cô ấy rất đáng tin cậy.'),
              choose('Wir wissen, dass Sie Erfahrung ___.', ['haben', 'hat'], 'haben', { vi: 'Chúng tôi biết rằng ông/bà có kinh nghiệm.' }),
            ],
          },
          {
            text_vi:
              'Có động từ khuyết thiếu hoặc Perfekt: phần chia đứng **sau cùng**: …, dass ich gut Deutsch sprechen **kann**. …, dass ich die Bewerbung geschickt **habe**. Động từ phản thân: đại từ đứng sớm, ngay sau chủ ngữ: …, dass **ich mich** für die Stelle **interessiere**.',
            examples: [['Ich schreibe, dass ich mich für die Stelle interessiere.', 'Tôi viết rằng tôi quan tâm đến vị trí này.']],
            exercises: [
              choose('Ich denke, dass ich die Aufgabe gut machen ___.', ['kann', 'können'], 'kann', { vi: 'Tôi nghĩ rằng tôi làm tốt được nhiệm vụ này.' }),
              transform('Nối hai câu bằng dass', 'Ich glaube. Die Arbeit macht Spaß.', ['Ich glaube, dass die Arbeit Spaß macht.']),
              fill('Er sagt, dass er sich um die Stelle {beworben} hat.', 'Anh ấy nói rằng anh ấy đã nộp đơn vào vị trí đó.'),
            ],
          },
          {
            text_vi:
              'Xin việc: **sich bewerben um** + Akk (nộp đơn vào): Ich **bewerbe mich um** die Stelle (du bewirbst dich). **sich interessieren für** + Akk: Ich **interessiere mich für** Technik. Phỏng vấn: **Darf ich mich kurz vorstellen?** Công việc vui: Die Arbeit **macht mir Spaß**.',
            examples: [['Darf ich mich kurz vorstellen? Mein Name ist Minh Tran.', 'Tôi xin tự giới thiệu ngắn. Tôi tên là Trần Minh.']],
            exercises: [
              fill('Ich {bewerbe} mich um die Stelle als Verkäuferin.', 'Tôi nộp đơn vào vị trí nhân viên bán hàng.'),
              translate('Công việc làm tôi vui.', ['Die Arbeit macht mir Spaß.']),
            ],
          },
        ],
        mixed: [
          transform('Nối hai câu bằng dass', 'Ich hoffe. Ich bekomme die Stelle.', ['Ich hoffe, dass ich die Stelle bekomme.']),
          choose('Ich finde, dass der Job sehr kreativ ___.', ['ist', 'sind'], 'ist', { vi: 'Tôi thấy rằng công việc này rất sáng tạo.' }),
          translate('Tôi nghĩ rằng anh ấy rất thân thiện.', [
            'Ich glaube, dass er sehr freundlich ist.',
            'Ich denke, dass er sehr freundlich ist.',
            'Ich finde, dass er sehr freundlich ist.',
          ]),
          order('Ich weiß, / dass / Sie / flexibel / sind.', 'Tôi biết rằng ông/bà rất linh hoạt.'),
          fill('Die Firma {stellt} zehn neue Mitarbeiter ein.', 'Công ty tuyển mười nhân viên mới.'),
        ],
      },
      dialogue: {
        title_de: 'Das Vorstellungsgespräch',
        lines: [
          { speaker: 'A', de: 'Guten Tag, Frau Pham. Bitte stellen Sie sich kurz vor.', vi: 'Chào chị Phạm. Mời chị tự giới thiệu ngắn.' },
          { speaker: 'B', de: 'Gern. Ich heiße Lan Pham, ich bin 27 Jahre alt und komme aus Vietnam.', vi: 'Vâng. Tôi tên là Phạm Lan, 27 tuổi, đến từ Việt Nam.' },
          { speaker: 'A', de: 'Warum bewerben Sie sich um diese Stelle?', vi: 'Vì sao chị nộp đơn vào vị trí này?' },
          { speaker: 'B', de: 'Ich interessiere mich sehr für Mode und ich glaube, dass ich gut in Ihr Team passe.', vi: 'Tôi rất quan tâm đến thời trang và tôi nghĩ rằng tôi hợp với đội của anh.' },
          { speaker: 'A', de: 'Haben Sie Erfahrung im Verkauf?', vi: 'Chị có kinh nghiệm bán hàng không?' },
          { speaker: 'B', de: 'Ja, ich habe ein Praktikum in einem Kaufhaus gemacht. Die Arbeit hat mir viel Spaß gemacht.', vi: 'Có, tôi đã thực tập ở một cửa hàng bách hóa. Công việc làm tôi rất vui.' },
          { speaker: 'A', de: 'Gut. Wir brauchen auch Mitarbeiter am Samstag. Ist das ein Problem?', vi: 'Tốt. Chúng tôi cũng cần nhân viên vào thứ Bảy. Có vấn đề gì không?' },
          { speaker: 'B', de: 'Nein, ich bin sehr flexibel. Ich hoffe, dass ich die Stelle bekomme!', vi: 'Không, tôi rất linh hoạt. Tôi hy vọng được nhận!' },
        ],
        gloss: { Ihr: 'của anh/chị (lịch sự)', Team: 'đội, nhóm', Verkauf: 'bán hàng', Problem: 'vấn đề' },
        questions: [
          mc('Lan quan tâm đến gì?', ['thời trang', 'kỹ thuật', 'nấu ăn'], 'thời trang'),
          tf('Lan hat keine Erfahrung im Verkauf.', false, { explain: 'Sie hat ein Praktikum in einem Kaufhaus gemacht.' }),
          mc('Lan đã thực tập ở đâu?', ['cửa hàng bách hóa', 'ngân hàng', 'nhà hàng'], 'cửa hàng bách hóa'),
          tf('Lan kann auch am Samstag arbeiten.', true),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Viết 5–6 câu tự giới thiệu ở buổi phỏng vấn: bạn là ai, quan tâm đến gì, có kinh nghiệm gì, và hai câu với dass (Ich glaube/hoffe, dass …).',
    },
    {
      title_vi: 'Một ngày dài ở chỗ làm',
      goal_vi: 'Kể công việc đã qua: phải làm gì, được làm gì (musste, konnte, durfte, wollte).',
      items: [
        'Gehalt', 'Lohn', 'Arbeitszeit', 'Teilzeit', 'Vollzeit', 'Schicht', 'Urlaubstag', 'Arbeitsvertrag', 'Besprechung',
        'Kantine', 'kündigen', 'erledigen', 'pendeln', 'befristet', 'unterwegs', 'Überstunden machen',
        'Präteritum của động từ khuyết thiếu',
        'Notiz', 'notieren',
      ],
      grammar: {
        point: 'praet-modal',
        sections: [
          {
            text_vi:
              'Kể quá khứ của **động từ khuyết thiếu**, người Đức dùng **Präteritum**: **bỏ umlaut** + **-te**: müssen → **musste**, können → **konnte**, dürfen → **durfte**, wollen → **wollte**, sollen → **sollte**. Ngôi ich và er giống nhau: ich **musste**, er **musste**.',
            table: 'Nguyên mẫu | ich/er | wir/sie\nmüssen | musste | mussten\nkönnen | konnte | konnten\ndürfen | durfte | durften\nwollen | wollte | wollten\nsollen | sollte | sollten',
            examples: [
              ['Gestern musste ich lange arbeiten.', 'Hôm qua tôi phải làm việc muộn.'],
              ['Als Kind wollte ich Polizist werden.', 'Hồi nhỏ tôi muốn làm cảnh sát.'],
            ],
            exercises: [
              fill('Gestern {musste} ich Überstunden machen.', 'Hôm qua tôi phải làm thêm giờ.'),
              choose('Ich ___ leider nicht kommen.', ['konnte', 'könnte', 'kannte'], 'konnte', { vi: 'Tiếc là tôi đã không đến được.' }),
              choose('Wir ___ früher nicht im Büro essen.', ['durften', 'dürften'], 'durften', { vi: 'Trước đây chúng tôi không được ăn trong văn phòng.' }),
            ],
          },
          {
            text_vi:
              'Động từ chính vẫn ở **nguyên mẫu cuối câu**: Ich **musste** gestern bis acht Uhr **arbeiten**. Hỏi: **Konntest** du alles erledigen? Chia: ich konnte, du konn**test**, er konnte, wir konn**ten**, ihr konn**tet**.',
            examples: [['Konntest du alles erledigen?', 'Bạn làm xong hết chưa?']],
            exercises: [
              order('Ich / musste / jeden Tag / pendeln.', 'Ngày nào tôi cũng phải đi làm xa.'),
              transform('Chuyển sang Präteritum', 'Ich kann nicht kommen.', ['Ich konnte nicht kommen.']),
              fill('{Wolltest} du nicht kündigen?', 'Chẳng phải bạn đã muốn nghỉ việc sao?'),
            ],
          },
          {
            text_vi:
              'Công việc: **Vollzeit** (toàn thời gian) – **Teilzeit** (bán thời gian), **Schicht** (ca làm: Früh-, Spät-, Nachtschicht), **Überstunden machen** (làm thêm giờ), **Gehalt** (lương tháng) / **Lohn** (tiền công), **befristet** (có thời hạn). **unterwegs** = đang trên đường, đi công tác.',
            examples: [['Mein Vertrag ist befristet.', 'Hợp đồng của tôi có thời hạn.']],
            exercises: [
              choose('Sie arbeitet nur 20 Stunden pro Woche, in ___.', ['Teilzeit', 'Vollzeit'], 'Teilzeit', { vi: 'Cô ấy chỉ làm 20 tiếng mỗi tuần, bán thời gian.' }),
              translate('Tuần này tôi phải làm thêm giờ.', ['Diese Woche muss ich Überstunden machen.']),
            ],
          },
        ],
        mixed: [
          transform('Chuyển sang Präteritum', 'Wir müssen lange arbeiten.', ['Wir mussten lange arbeiten.']),
          choose('Er ___ früher in Köln wohnen.', ['wollte', 'wollt'], 'wollte', { vi: 'Trước đây anh ấy muốn sống ở Köln.' }),
          translate('Hôm qua tôi không thể đến.', ['Gestern konnte ich nicht kommen.', 'Ich konnte gestern nicht kommen.']),
          fill('Ihr {solltet} pünktlich sein.', 'Các bạn đáng lẽ phải đúng giờ.'),
          order('Letzte Woche / durfte / ich / früher gehen.', 'Tuần trước tôi được về sớm.'),
        ],
      },
      dialogue: {
        title_de: 'Ein langer Tag',
        lines: [
          { speaker: 'A', de: 'Du bist spät! Was war los?', vi: 'Bạn về muộn thế! Có chuyện gì vậy?' },
          { speaker: 'B', de: 'Ich musste Überstunden machen. Wir hatten eine lange Besprechung.', vi: 'Mình phải làm thêm giờ. Bọn mình có một cuộc họp dài.' },
          { speaker: 'A', de: 'Konntest du nicht früher gehen?', vi: 'Không về sớm được à?' },
          { speaker: 'B', de: 'Nein, ich durfte nicht. Der Chef wollte, dass alle bleiben.', vi: 'Không, mình không được về. Sếp muốn mọi người ở lại.' },
          { speaker: 'A', de: 'Und konntest du in der Kantine essen?', vi: 'Thế bạn ăn ở căng tin được không?' },
          { speaker: 'B', de: 'Nein, die Kantine war schon geschlossen. Ich musste alles bis sieben erledigen.', vi: 'Không, căng tin đóng cửa rồi. Mình phải làm xong hết trước bảy giờ.' },
          { speaker: 'A', de: 'Du solltest mal mit dem Chef sprechen.', vi: 'Bạn nên nói chuyện với sếp.' },
          { speaker: 'B', de: 'Ja. Mein Vertrag ist befristet, deshalb suche ich vielleicht eine neue Stelle.', vi: 'Ừ. Hợp đồng của mình có thời hạn, nên có lẽ mình sẽ tìm chỗ mới.' },
        ],
        gloss: { 'Was war los?': 'đã có chuyện gì', alle: 'mọi người', Vertrag: 'hợp đồng', vielleicht: 'có lẽ' },
        questions: [
          tf('B musste Überstunden machen.', true),
          tf('B hat in der Kantine gegessen.', false, { explain: 'Die Kantine war schon geschlossen.' }),
          mc('Vì sao B không về sớm được?', ['sếp muốn mọi người ở lại', 'có khách hàng', 'tàu trễ'], 'sếp muốn mọi người ở lại'),
          mc('Hợp đồng của B thế nào?', ['có thời hạn', 'vô thời hạn', 'bán thời gian'], 'có thời hạn'),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Kể một ngày làm việc hoặc đi học vất vả (5 câu) với Präteritum của động từ khuyết thiếu: musste, konnte, wollte, durfte.',
    },
    {
      title_vi: 'Các nghề và tin tuyển dụng',
      goal_vi: 'Đọc và viết tin tuyển dụng; dùng tính từ không mạo từ và als + nghề.',
      items: [
        'Betrieb', 'Mitarbeiter', 'Abteilungsleiter', 'Aufgabenbereich', 'Werkstatt', 'Handwerker', 'Polizist', 'Friseur',
        'Mechaniker', 'Erzieher', 'Programmierer', 'Rente', 'leiten', 'organisieren', 'verkaufen', 'beraten',
        'selbstständig', 'beruflich', 'erfahren', 'Đuôi tính từ không có mạo từ', 'als + nghề nghiệp',
      ],
      grammar: {
        point: 'adj-ohne',
        sections: [
          {
            text_vi:
              'Khi **không có mạo từ**, tính từ tự mang dấu hiệu giống, giống đuôi của **der/die/das**: gut**er** Wein (der), frisch**e** Milch (die), kalt**es** Wasser (das), erfahren**e** Mitarbeiter (số nhiều). Hay gặp trong tin tuyển dụng: **Wir suchen erfahrene Mitarbeiter.**',
            table: 'Giống | Nominativ\nder | guter Wein\ndie | frische Milch\ndas | kaltes Wasser\nsố nhiều | erfahrene Mitarbeiter',
            examples: [
              ['Wir suchen erfahrene Programmierer.', 'Chúng tôi tìm lập trình viên giàu kinh nghiệm.'],
              ['Gutes Deutsch ist wichtig.', 'Tiếng Đức tốt là điều quan trọng.'],
            ],
            exercises: [
              fill('Wir suchen {erfahrene} Mitarbeiter. (erfahren)', 'Chúng tôi tìm nhân viên giàu kinh nghiệm.'),
              choose('___ Wetter heute!', ['Schönes', 'Schöne', 'Schöner'], 'Schönes', { vi: 'Hôm nay trời đẹp quá!' }),
              choose('Wir bieten ___ Arbeitszeiten.', ['flexible', 'flexibler', 'flexibles'], 'flexible', { vi: 'Chúng tôi có giờ làm việc linh hoạt.' }),
            ],
          },
          {
            text_vi:
              'Ở Akkusativ giống đực đuôi là **-en**: Ich trinke **schwarzen** Kaffee. Ở Dativ: **-em/-er** giống dem/der: mit **großem** Interesse, mit **guter** Laune. Số nhiều Dativ: **-en**. Câu kết thư quen thuộc: **Mit freundlichen Grüßen** (Trân trọng).',
            examples: [
              ['Mit freundlichen Grüßen', 'Trân trọng (cuối thư)'],
              ['Ich trinke schwarzen Kaffee.', 'Tôi uống cà phê đen.'],
            ],
            exercises: [
              choose('Ich trinke ___ Tee.', ['grünen', 'grüner', 'grünes'], 'grünen', { vi: 'Tôi uống trà xanh.' }),
              fill('Mit {freundlichen} Grüßen', 'Trân trọng'),
            ],
          },
          {
            text_vi:
              'Nói nghề với **als** và **không mạo từ**: Sie arbeitet **als** Erzieherin. Er ist **selbstständig** (tự kinh doanh). Động từ: **leiten** (điều hành), **organisieren**, **beraten** (tư vấn; du berätst, er berät), **verkaufen**. Nghỉ hưu: **in Rente gehen**.',
            examples: [['Mein Onkel arbeitet als Mechaniker in einer Werkstatt.', 'Chú tôi làm thợ máy ở một xưởng sửa chữa.']],
            exercises: [
              fill('Sie arbeitet {als} Friseurin.', 'Cô ấy làm thợ cắt tóc.'),
              choose('Er ___ Kunden am Telefon.', ['berät', 'beratet'], 'berät', { vi: 'Anh ấy tư vấn khách hàng qua điện thoại.' }),
            ],
          },
        ],
        mixed: [
          choose('Wir suchen ___ Handwerker.', ['zuverlässige', 'zuverlässiger'], 'zuverlässige', { vi: 'Chúng tôi tìm thợ đáng tin cậy.' }),
          fill('{Frische} Milch ist gesund. (frisch)', 'Sữa tươi tốt cho sức khỏe.'),
          translate('Tôi làm lập trình viên.', ['Ich arbeite als Programmierer.', 'Ich bin Programmierer.', 'Ich arbeite als Programmiererin.', 'Ich bin Programmiererin.']),
          choose('Er hat ___ Erfahrung.', ['große', 'großer', 'großes'], 'große', { vi: 'Anh ấy có nhiều kinh nghiệm.' }),
          order('Mein Vater / geht / nächstes Jahr / in Rente.', 'Năm sau bố tôi nghỉ hưu.'),
        ],
      },
      dialogue: {
        title_de: 'Stellenanzeigen',
        lines: [
          { speaker: 'A', de: 'Schau mal, hier ist eine Anzeige: Wir suchen erfahrene Mechaniker.', vi: 'Nhìn này, có một tin tuyển dụng: Chúng tôi tìm thợ máy giàu kinh nghiệm.' },
          { speaker: 'B', de: 'Das ist nichts für mich. Ich bin Erzieherin.', vi: 'Không hợp với mình. Mình là giáo viên mầm non.' },
          { speaker: 'A', de: 'Hier: Kindergarten sucht freundliche Erzieherin in Teilzeit.', vi: 'Đây này: Nhà trẻ tìm giáo viên mầm non thân thiện, bán thời gian.' },
          { speaker: 'B', de: 'Super! Was steht da noch?', vi: 'Tuyệt! Còn ghi gì nữa?' },
          { speaker: 'A', de: 'Wir bieten flexible Arbeitszeiten und gutes Gehalt.', vi: 'Chúng tôi có giờ làm linh hoạt và lương tốt.' },
          { speaker: 'B', de: 'Klingt gut! Ich schreibe heute noch eine Bewerbung.', vi: 'Nghe hay đấy! Ngay hôm nay mình viết đơn.' },
          { speaker: 'A', de: 'Und schick deinen Lebenslauf mit!', vi: 'Nhớ gửi kèm sơ yếu lý lịch nhé!' },
          { speaker: 'B', de: 'Natürlich. Mit freundlichen Grüßen, Mai Nguyen!', vi: 'Tất nhiên. Trân trọng, Nguyễn Mai!' },
        ],
        gloss: { 'Schau mal': 'nhìn này', Anzeige: 'tin rao', nichts: 'không gì', 'steht da': 'ghi ở đó', bieten: 'cung cấp', klingt: 'nghe có vẻ', 'schick … mit': 'gửi kèm' },
        questions: [
          tf('Mai ist Mechanikerin.', false, { explain: 'Ich bin Erzieherin.' }),
          mc('Nhà trẻ tìm ai?', ['giáo viên mầm non bán thời gian', 'thợ máy', 'lập trình viên'], 'giáo viên mầm non bán thời gian'),
          mc('Công việc có gì?', ['giờ linh hoạt và lương tốt', 'xe công ty', 'ăn trưa miễn phí'], 'giờ linh hoạt và lương tốt'),
          tf('Mai schreibt heute eine Bewerbung.', true),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Viết một tin tuyển dụng ngắn (4–5 câu) cho nghề bạn thích: Wir suchen … (tính từ không mạo từ: erfahrene, freundliche…), Wir bieten …',
    },
  ],
  test: {
    grammar: {
      dass: [
        order('Ich glaube, / dass / er / krank / ist.', 'Tôi nghĩ rằng anh ấy bị ốm.'),
        fill('Ich hoffe, dass ich die Stelle {bekomme}.', 'Tôi hy vọng rằng tôi được nhận.'),
        choose('Er sagt, dass er keine Zeit ___.', ['hat', 'haben'], 'hat'),
        choose('Ich weiß, ___ du flexibel bist.', ['dass', 'weil'], 'dass'),
        fill('Sie denkt, dass die Arbeit Spaß {macht}.', 'Cô ấy nghĩ rằng công việc vui.'),
        order('Ich finde, / dass / die Kollegen / freundlich / sind.', 'Tôi thấy rằng đồng nghiệp thân thiện.'),
      ],
      'praet-modal': [
        fill('Gestern {musste} ich arbeiten.', 'Hôm qua tôi phải làm việc.'),
        choose('Ich ___ nicht kommen.', ['konnte', 'kannte'], 'konnte'),
        choose('Wir ___ früher gehen.', ['durften', 'dürften'], 'durften'),
        fill('Als Kind {wollte} ich Arzt werden.', 'Hồi nhỏ tôi muốn làm bác sĩ.'),
        choose('___ du das erledigen?', ['Konntest', 'Konntet'], 'Konntest'),
        order('Ich / musste / Überstunden / machen.', 'Tôi đã phải làm thêm giờ.'),
      ],
      'adj-ohne': [
        fill('Wir suchen {erfahrene} Köche. (erfahren)', 'Chúng tôi tìm đầu bếp giàu kinh nghiệm.'),
        choose('Ich trinke ___ Kaffee.', ['schwarzen', 'schwarzer'], 'schwarzen'),
        choose('___ Wasser, bitte.', ['Kaltes', 'Kalte'], 'Kaltes'),
        fill('Mit {freundlichen} Grüßen', 'Trân trọng'),
        choose('Er hat ___ Erfahrung.', ['gute', 'guter'], 'gute'),
        choose('Wir bieten ___ Gehalt.', ['gutes', 'guter'], 'gutes'),
      ],
    },
    reading: {
      title_de: 'Eine Bewerbung',
      text_de:
        'Liebe Frau Schmidt, ich habe Ihre Anzeige im Internet gelesen und bewerbe mich um die Stelle als Erzieherin in Teilzeit. Ich bin 29 Jahre alt und komme aus Vietnam. In Hanoi habe ich fünf Jahre als Erzieherin in einem Kindergarten gearbeitet. Ich musste dort jeden Tag mit dreißig Kindern arbeiten, deshalb bin ich sehr geduldig und gut organisiert. Seit einem Jahr wohne ich in Leipzig. Ich spreche gutes Deutsch und habe ein Praktikum in einer Kita gemacht. Ich glaube, dass ich gut in Ihr Team passe, weil ich kreativ und zuverlässig bin. Über eine Einladung zum Vorstellungsgespräch freue ich mich sehr. Mit freundlichen Grüßen, Mai Nguyen',
      gloss: { geduldig: 'kiên nhẫn', organisiert: 'ngăn nắp, có tổ chức', Kita: 'nhà trẻ', Team: 'đội, nhóm', Einladung: 'lời mời', 'freue ich mich': 'tôi rất vui' },
      questions: [
        mc('Mai nộp đơn vào vị trí gì?', ['giáo viên mầm non bán thời gian', 'y tá', 'đầu bếp'], 'giáo viên mầm non bán thời gian'),
        tf('Mai hat in Vietnam als Erzieherin gearbeitet.', true),
        mc('Ở Hà Nội Mai làm việc với bao nhiêu trẻ mỗi ngày?', ['30', '5', '29'], '30'),
        tf('Mai wohnt seit fünf Jahren in Leipzig.', false, { explain: 'Seit einem Jahr wohne ich in Leipzig.' }),
      ],
    },
  },
});
