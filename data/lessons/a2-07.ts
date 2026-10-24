// A2 · 07 Học tập và đào tạo — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a2-07',
  points: [
    {
      key: 'wenn',
      rule_key: 'wenn-satz',
      category: 'verb_position',
      title_vi: 'Câu với wenn (nếu, mỗi khi); wenn hay als',
      explanation_vi: 'wenn mở câu phụ, động từ cuối; câu phụ đứng trước thì động từ câu chính ngay sau dấu phẩy. Một lần trong quá khứ dùng als.',
    },
    {
      key: 'ob',
      rule_key: 'indirekte-frage-ob',
      category: 'verb_position',
      title_vi: 'Câu hỏi gián tiếp với ob',
      explanation_vi: 'Câu hỏi có/không chuyển thành câu phụ với ob, động từ cuối: Ich weiß nicht, ob ich die Prüfung bestehe. ob ≠ wenn.',
    },
    {
      key: 'w-indirekt',
      rule_key: 'indirekte-frage-w-wort',
      category: 'verb_position',
      title_vi: 'Câu hỏi gián tiếp với từ để hỏi',
      explanation_vi: 'Từ để hỏi giữ nguyên, động từ ra cuối: Können Sie mir sagen, wann der Kurs beginnt? Động từ tách viết liền: … wann der Zug ankommt.',
    },
  ],
  lessons: [
    {
      title_vi: 'Đi học ở Đức',
      goal_vi: 'Nói về trường lớp, bằng cấp và nêu điều kiện bằng wenn.',
      items: [
        'Ausbildung', 'Studium', 'Fach', 'Note', 'Zeugnis', 'Abschluss', 'Abitur', 'Klasse', 'Grundschule', 'Kindergarten',
        'Stundenplan', 'Semester', 'Vorlesung', 'wenn', 'faul', 'streng', 'eine Prüfung ablegen', 'Câu với wenn',
      ],
      grammar: {
        point: 'wenn',
        sections: [
          {
            text_vi:
              '**wenn** = nếu (điều kiện) hoặc mỗi khi (lặp lại). Nó mở câu phụ: **động từ chia ở cuối**: Ich lerne Vokabeln, **wenn** ich Zeit **habe**. Hay đứng đầu câu: câu phụ chiếm vị trí 1, nên động từ câu chính đứng ngay sau dấu phẩy: **Wenn** ich Zeit **habe**, **lerne** ich Vokabeln.',
            table: 'Câu | Trật tự\n…, wenn ich Zeit habe. | động từ cuối câu phụ\nWenn ich Zeit habe, lerne ich. | động từ chính ngay sau dấu phẩy',
            examples: [
              ['Wenn du Fragen hast, frag mich.', 'Nếu bạn có câu hỏi thì hỏi tôi.'],
              ['Wenn ich müde bin, trinke ich Kaffee.', 'Mỗi khi mệt, tôi uống cà phê.'],
            ],
            exercises: [
              order('Wenn ich Zeit habe, / lerne / ich / Vokabeln.', 'Nếu có thời gian, tôi học từ vựng.'),
              fill('Ich gehe spazieren, wenn das Wetter schön {ist}.', 'Tôi đi dạo nếu trời đẹp.'),
              choose('Wenn es regnet, ___ ich zu Hause.', ['bleibe', 'ich bleibe'], 'bleibe', { vi: 'Nếu trời mưa, tôi ở nhà.' }),
            ],
          },
          {
            text_vi:
              '**wenn** hay **als**? **als** dùng cho **một lần duy nhất trong quá khứ** (Als ich Kind war… = hồi tôi còn nhỏ). **wenn** dùng cho **mỗi lần** (kể cả lặp lại trong quá khứ) và cho hiện tại, tương lai: **Immer wenn** ich eine gute Note bekomme, freue ich mich.',
            examples: [['Immer wenn ich in Hanoi bin, besuche ich meine alte Schule.', 'Mỗi lần ở Hà Nội tôi đều về thăm trường cũ.']],
            exercises: [
              choose('___ ich ein Kind war, wohnte ich in Hue.', ['Als', 'Wenn'], 'Als', { vi: 'Hồi tôi còn nhỏ, tôi sống ở Huế.' }),
              choose('Immer ___ ich Ferien habe, fahre ich zu Oma.', ['wenn', 'als'], 'wenn', { vi: 'Lần nào được nghỉ tôi cũng về bà.' }),
            ],
          },
          {
            text_vi:
              'Hệ thống giáo dục: **Kindergarten** → **Grundschule** → trung học → **Abitur** (tú tài) → **Studium** (đại học, tính theo **Semester**) hoặc **Ausbildung** (học nghề). Điểm ở Đức: **1 là tốt nhất**, 6 là kém nhất. **Zeugnis** = học bạ, **Abschluss** = bằng tốt nghiệp.',
            examples: [['Nach dem Abitur will ich studieren.', 'Sau tú tài tôi muốn học đại học.']],
            exercises: [
              fill('Das {Studium} dauert vier Jahre.', 'Việc học đại học kéo dài bốn năm.'),
              translate('Nếu tôi thi đỗ, tôi sẽ học đại học.', ['Wenn ich bestehe, studiere ich.', 'Wenn ich die Prüfung bestehe, studiere ich.']),
            ],
          },
        ],
        mixed: [
          transform('Nối bằng wenn, câu phụ đứng trước', 'Ich habe Hunger. Ich esse.', ['Wenn ich Hunger habe, esse ich.']),
          choose('Wenn du eine gute Note ___, gehen wir essen.', ['bekommst', 'bekommen'], 'bekommst', { vi: 'Nếu con được điểm tốt, mình đi ăn.' }),
          order('Ich bin froh, / wenn / der Lehrer / nicht streng / ist.', 'Tôi vui khi thầy giáo không nghiêm khắc.'),
          choose('Wenn ich faul bin, ___ ich nichts.', ['lerne', 'ich lerne'], 'lerne', { vi: 'Khi lười, tôi chẳng học gì.' }),
          translate('Khi trời mưa tôi ở nhà.', ['Wenn es regnet, bleibe ich zu Hause.', 'Ich bleibe zu Hause, wenn es regnet.']),
        ],
      },
      dialogue: {
        title_de: 'Schule in Deutschland',
        lines: [
          { speaker: 'A', de: 'Wie ist die Schule in Deutschland? Ist sie wie in Vietnam?', vi: 'Trường học ở Đức thế nào? Có giống Việt Nam không?' },
          { speaker: 'B', de: 'Nicht ganz. Kinder gehen mit sechs in die Grundschule.', vi: 'Không hẳn. Trẻ vào tiểu học lúc sáu tuổi.' },
          { speaker: 'A', de: 'Und wann macht man Abitur?', vi: 'Thế khi nào thì thi tú tài?' },
          { speaker: 'B', de: 'Meistens mit achtzehn oder neunzehn. Wenn man das Abitur hat, kann man studieren.', vi: 'Thường là mười tám, mười chín tuổi. Có bằng tú tài thì học đại học được.' },
          { speaker: 'A', de: 'Und wenn man nicht studieren will?', vi: 'Còn nếu không muốn học đại học?' },
          { speaker: 'B', de: 'Dann macht man eine Ausbildung. Das ist hier ganz normal.', vi: 'Thì đi học nghề. Ở đây chuyện đó rất bình thường.' },
          { speaker: 'A', de: 'Stimmt es, dass die Note 1 die beste ist?', vi: 'Có đúng là điểm 1 là cao nhất không?' },
          { speaker: 'B', de: 'Ja! Wenn du eine 6 bekommst, ist das sehr schlecht.', vi: 'Đúng! Bị điểm 6 là rất kém.' },
        ],
        gloss: { ganz: 'hoàn toàn; rất', achtzehn: '18', neunzehn: '19', normal: 'bình thường', beste: 'tốt nhất' },
        questions: [
          mc('Trẻ ở Đức vào tiểu học lúc mấy tuổi?', ['6', '5', '7'], '6'),
          tf('Wenn man Abitur hat, kann man studieren.', true),
          mc('Không muốn học đại học thì làm gì?', ['học nghề', 'đi làm ngay', 'học thêm một năm'], 'học nghề'),
          tf('Die Note 6 ist sehr gut.', false),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi:
        'Viết 5 câu về việc học của bạn (đã học trường nào, môn gì, điểm thế nào) và hai câu với wenn.',
    },
    {
      title_vi: 'Trước kỳ thi',
      goal_vi: 'Nói về việc chuẩn bị thi; diễn đạt điều chưa chắc bằng ob.',
      items: [
        'Fehler', 'Zertifikat', 'Ziel', 'Kenntnis', 'Wissen', 'bestehen', 'durchfallen', 'sich vorbereiten', 'sich anmelden',
        'sich konzentrieren', 'teilnehmen', 'mündlich', 'schriftlich', 'ob', 'Câu hỏi gián tiếp với ob',
      ],
      grammar: {
        point: 'ob',
        sections: [
          {
            text_vi:
              '**Câu hỏi gián tiếp** loại có/không dùng **ob** (liệu … có … không): Bestehe ich die Prüfung? → Ich weiß nicht, **ob** ich die Prüfung **bestehe**. Động từ chia **cuối câu**. Hay đứng sau: Ich weiß nicht, … / Weißt du, …? / Ich frage mich, …',
            examples: [
              ['Ich weiß nicht, ob ich die Prüfung bestehe.', 'Tôi không biết liệu mình có thi đỗ không.'],
              ['Weißt du, ob der Kurs morgen stattfindet?', 'Bạn có biết mai lớp có học không?'],
            ],
            exercises: [
              order('Ich weiß nicht, / ob / ich / die Prüfung / bestehe.', 'Tôi không biết mình có thi đỗ không.'),
              transform('Chuyển thành câu hỏi gián tiếp với ob', 'Ist der Test schwer? (Weißt du, …)', ['Weißt du, ob der Test schwer ist?']),
              fill('Ich frage mich, ob er die Prüfung {bestanden} hat.', 'Tôi tự hỏi liệu anh ấy đã thi đỗ chưa.'),
            ],
          },
          {
            text_vi:
              'Phân biệt **ob** và **wenn**: **ob** = liệu có … không (câu hỏi), **wenn** = nếu, khi (điều kiện). Ich weiß nicht, **ob** er kommt. (không biết anh ấy có đến không) – **Wenn** er kommt, freue ich mich. (nếu anh ấy đến thì tôi vui). Tiếng Việt đều có thể nói "nếu", tiếng Đức phải chọn đúng.',
            examples: [['Ich weiß nicht, ob ich mich anmelden soll.', 'Tôi không biết có nên đăng ký không.']],
            exercises: [
              choose('Ich weiß nicht, ___ ich morgen Zeit habe.', ['ob', 'wenn'], 'ob', { vi: 'Tôi không biết mai mình có rảnh không.' }),
              choose('___ ich Zeit habe, komme ich.', ['Wenn', 'Ob'], 'Wenn', { vi: 'Nếu có thời gian, tôi sẽ đến.' }),
              choose('Kannst du mir sagen, ___ das richtig ist?', ['ob', 'wenn', 'dass'], 'ob', { vi: 'Bạn cho mình biết cái này có đúng không?' }),
            ],
          },
          {
            text_vi:
              'Thi cử: **sich anmelden** (đăng ký), **sich vorbereiten auf** + Akk (chuẩn bị cho), **eine Prüfung ablegen** (dự thi), **bestehen** (đỗ) – **durchfallen** (trượt, dùng sein: Er **ist** durchgefallen). Phần thi: **schriftlich** (viết) và **mündlich** (nói).',
            examples: [['Ich bereite mich auf die B1-Prüfung vor.', 'Tôi đang chuẩn bị cho kỳ thi B1.']],
            exercises: [
              fill('Ich {bereite} mich auf die Prüfung vor.', 'Tôi chuẩn bị cho kỳ thi.'),
              choose('Er ___ durch die Prüfung gefallen.', ['ist', 'hat'], 'ist', { vi: 'Anh ấy đã thi trượt.' }),
            ],
          },
        ],
        mixed: [
          transform('Chuyển thành câu hỏi gián tiếp với ob', 'Kommst du mit? (Ich möchte wissen, …)', ['Ich möchte wissen, ob du mitkommst.']),
          choose('Weißt du, ob die Prüfung mündlich ___?', ['ist', 'sind'], 'ist', { vi: 'Bạn có biết kỳ thi có phần nói không?' }),
          translate('Tôi không biết liệu tôi có thi đỗ không.', ['Ich weiß nicht, ob ich die Prüfung bestehe.', 'Ich weiß nicht, ob ich bestehe.']),
          order('Weißt du, / ob / wir / teilnehmen / dürfen?', 'Bạn có biết chúng ta được tham gia không?'),
          fill('Ich habe {mich} für den Kurs angemeldet.', 'Tôi đã đăng ký khóa học.'),
        ],
      },
      dialogue: {
        title_de: 'Vor der Prüfung',
        lines: [
          { speaker: 'A', de: 'Hast du dich für die B1-Prüfung angemeldet?', vi: 'Bạn đã đăng ký thi B1 chưa?' },
          { speaker: 'B', de: 'Ja, sie ist im Juni. Aber ich weiß nicht, ob ich sie bestehe.', vi: 'Rồi, thi vào tháng Sáu. Nhưng mình không biết có đỗ không.' },
          { speaker: 'A', de: 'Wie bereitest du dich vor?', vi: 'Bạn chuẩn bị thế nào?' },
          { speaker: 'B', de: 'Ich mache jeden Tag Übungen. Aber ich kann mich oft nicht konzentrieren.', vi: 'Ngày nào mình cũng làm bài luyện. Nhưng mình hay không tập trung được.' },
          { speaker: 'A', de: 'Ist die Prüfung schriftlich oder mündlich?', vi: 'Thi viết hay thi nói?' },
          { speaker: 'B', de: 'Beides. Ich frage mich, ob die mündliche Prüfung schwer ist.', vi: 'Cả hai. Mình tự hỏi phần nói có khó không.' },
          { speaker: 'A', de: 'Frag doch die Lehrerin, ob sie eine Probeprüfung macht.', vi: 'Thì hỏi cô giáo xem cô có cho thi thử không.' },
          { speaker: 'B', de: 'Gute Idee! Mein Ziel ist ein Zertifikat für das Visum.', vi: 'Ý hay! Mục tiêu của mình là có chứng chỉ để xin thị thực.' },
        ],
        gloss: { Übungen: 'bài luyện tập', beides: 'cả hai', mündliche: 'nói (vấn đáp)', Probeprüfung: 'kỳ thi thử', Visum: 'thị thực' },
        questions: [
          mc('Kỳ thi B1 vào khi nào?', ['tháng Sáu', 'tháng Bảy', 'tháng Năm'], 'tháng Sáu'),
          tf('B weiß sicher, dass sie besteht.', false, { explain: 'Ich weiß nicht, ob ich sie bestehe.' }),
          mc('Kỳ thi có những phần nào?', ['viết và nói', 'chỉ viết', 'chỉ nói'], 'viết và nói'),
          tf('B braucht das Zertifikat für das Visum.', true),
        ],
        dictation: [1, 6],
      },
      writing_prompt_vi:
        'Bạn sắp có một kỳ thi. Viết 5 câu: bạn đã đăng ký chưa, chuẩn bị thế nào, và hai câu với ob (Ich weiß nicht, ob …).',
    },
    {
      title_vi: 'Trong lớp học ngoại ngữ',
      goal_vi: 'Hỏi lịch sự bằng câu hỏi gián tiếp; nói cách học từ, dịch, tra từ điển.',
      items: [
        'Grammatik', 'Aussprache', 'Wortschatz', 'Text', 'Übung', 'unterrichten', 'korrigieren', 'ankreuzen', 'übersetzen',
        'nachschlagen', 'fehlen', 'merken', 'schlau', 'intelligent', 'geduldig', 'dumm',
        'Câu hỏi gián tiếp với từ để hỏi', 'Động từ tách trong câu phụ',
      ],
      grammar: {
        point: 'w-indirekt',
        sections: [
          {
            text_vi:
              'Câu hỏi gián tiếp với **từ để hỏi** (wann, wo, wie, was, warum…): từ để hỏi giữ nguyên, **động từ chuyển ra cuối**: Wann beginnt der Kurs? → Können Sie mir sagen, **wann** der Kurs **beginnt**? Cách hỏi này **lịch sự hơn** câu hỏi trực tiếp, rất hay dùng với người lạ.',
            table: 'Trực tiếp | Gián tiếp\nWo ist die Bibliothek? | Wissen Sie, wo die Bibliothek ist?\nWie schreibt man das? | Ich weiß nicht, wie man das schreibt.',
            examples: [
              ['Können Sie mir sagen, wann der Kurs beginnt?', 'Ông/bà cho tôi biết khi nào khóa học bắt đầu được không?'],
              ['Ich weiß nicht, wie man das Wort schreibt.', 'Tôi không biết từ này viết thế nào.'],
            ],
            exercises: [
              order('Wissen Sie, / wo / die Bibliothek / ist?', 'Ông/bà có biết thư viện ở đâu không?'),
              transform('Chuyển thành câu hỏi gián tiếp', 'Wann beginnt die Vorlesung? (Können Sie mir sagen, …)', ['Können Sie mir sagen, wann die Vorlesung beginnt?']),
              fill('Ich weiß nicht, was das Wort {bedeutet}.', 'Tôi không biết từ này nghĩa là gì.'),
            ],
          },
          {
            text_vi:
              'Trong câu phụ, **động từ tách viết liền** ở cuối: Wann kommt der Zug an? → Ich weiß nicht, wann der Zug **ankommt**. Có động từ khuyết thiếu thì nó đứng sau cùng: Ich weiß nicht, wie ich das Wort übersetzen **soll**.',
            examples: [['Weißt du, wann der Kurs anfängt?', 'Bạn có biết khi nào lớp bắt đầu không?']],
            exercises: [
              choose('Ich weiß nicht, wann der Unterricht ___.', ['anfängt', 'fängt an'], 'anfängt', { vi: 'Tôi không biết khi nào buổi học bắt đầu.' }),
              fill('Weißt du, wann die Lehrerin {zurückkommt}?', 'Bạn có biết khi nào cô giáo quay lại không?'),
            ],
          },
          {
            text_vi:
              'Học ngoại ngữ: **nachschlagen** (tra từ điển), **übersetzen** (dịch), **ankreuzen** (đánh dấu x), **korrigieren** (sửa lỗi), **sich etwas merken** (ghi nhớ): Das kann ich **mir** nicht **merken**. **fehlen** = vắng mặt: Wer **fehlt** heute?',
            examples: [['Ich schlage das Wort im Wörterbuch nach.', 'Tôi tra từ đó trong từ điển.']],
            exercises: [
              order('Kreuzen / Sie / die richtige Antwort / an.', 'Hãy đánh dấu câu trả lời đúng.'),
              translate('Tôi không nhớ được từ này.', ['Ich kann mir das Wort nicht merken.', 'Das Wort kann ich mir nicht merken.']),
            ],
          },
        ],
        mixed: [
          transform('Chuyển thành câu hỏi gián tiếp', 'Warum fehlt Tom? (Weißt du, …)', ['Weißt du, warum Tom fehlt?']),
          choose('Kannst du mir sagen, wie man das ___?', ['übersetzt', 'übersetzt man'], 'übersetzt', { vi: 'Bạn cho mình biết dịch câu này thế nào?' }),
          translate('Tôi không biết thư viện ở đâu.', ['Ich weiß nicht, wo die Bibliothek ist.']),
          fill('Ich weiß nicht, wann der Zug {ankommt}.', 'Tôi không biết khi nào tàu đến.'),
          order('Können Sie / mir sagen, / was / das / bedeutet?', 'Ông/bà cho tôi biết cái này nghĩa là gì được không?'),
        ],
      },
      dialogue: {
        title_de: 'Im Sprachkurs',
        lines: [
          { speaker: 'A', de: 'Entschuldigung, können Sie mir sagen, was das Wort Ziel bedeutet?', vi: 'Xin lỗi, chị cho tôi biết từ „Ziel“ nghĩa là gì được không?' },
          { speaker: 'B', de: 'Schlag es doch im Wörterbuch nach!', vi: 'Tra từ điển đi!' },
          { speaker: 'A', de: 'Ich habe kein Wörterbuch dabei. Wissen Sie, wo die Bibliothek ist?', vi: 'Tôi không mang từ điển. Chị có biết thư viện ở đâu không?' },
          { speaker: 'B', de: 'Im zweiten Stock. Aber ich weiß nicht, wann sie heute zumacht.', vi: 'Ở tầng hai. Nhưng tôi không biết hôm nay mấy giờ đóng cửa.' },
          { speaker: 'A', de: 'Danke. Und wissen Sie, warum Herr Klein heute fehlt?', vi: 'Cảm ơn. Chị có biết sao hôm nay thầy Klein vắng không?' },
          { speaker: 'B', de: 'Er ist krank. Frau Berg unterrichtet heute und korrigiert die Tests.', vi: 'Thầy bị ốm. Hôm nay cô Berg dạy và chấm bài kiểm tra.' },
          { speaker: 'A', de: 'Hoffentlich ist sie nicht so streng!', vi: 'Mong là cô ấy không nghiêm lắm!' },
          { speaker: 'B', de: 'Keine Sorge, sie ist sehr geduldig.', vi: 'Đừng lo, cô ấy rất kiên nhẫn.' },
        ],
        gloss: { dabei: 'mang theo', zweiten: 'thứ hai', zumacht: 'đóng cửa', Tests: 'bài kiểm tra' },
        questions: [
          tf('A hat ein Wörterbuch dabei.', false),
          mc('Thư viện ở đâu?', ['tầng hai', 'tầng trệt', 'tầng ba'], 'tầng hai'),
          mc('Vì sao thầy Klein vắng?', ['bị ốm', 'đi họp', 'đi du lịch'], 'bị ốm'),
          tf('Frau Berg ist sehr geduldig.', true),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Viết 5 câu hỏi lịch sự (câu hỏi gián tiếp) bạn có thể hỏi ở trường hoặc lớp học: Können Sie mir sagen, …? Wissen Sie, …?',
    },
  ],
  test: {
    grammar: {
      wenn: [
        order('Wenn ich Zeit habe, / lerne / ich.', 'Nếu có thời gian, tôi học.'),
        fill('Ich komme, wenn ich Zeit {habe}.', 'Tôi sẽ đến nếu có thời gian.'),
        choose('Wenn es regnet, ___ wir zu Hause.', ['bleiben', 'wir bleiben'], 'bleiben'),
        choose('___ ich ein Kind war, wohnte ich in Hue.', ['Als', 'Wenn'], 'Als'),
        fill('Wenn du Hunger hast, {iss} etwas.', 'Nếu đói thì ăn gì đi.'),
        choose('Immer ___ ich müde bin, trinke ich Kaffee.', ['wenn', 'als'], 'wenn'),
      ],
      ob: [
        choose('Ich weiß nicht, ___ er kommt.', ['ob', 'wenn'], 'ob'),
        order('Weißt du, / ob / der Test / schwer / ist?', 'Bạn có biết bài kiểm tra có khó không?'),
        fill('Ich frage mich, ob ich die Prüfung {bestehe}.', 'Tôi tự hỏi liệu mình có thi đỗ không.'),
        choose('Kannst du mir sagen, ob das richtig ___?', ['ist', 'sind'], 'ist'),
        choose('___ du willst, helfe ich dir.', ['Wenn', 'Ob'], 'Wenn'),
        order('Ich weiß nicht, / ob / ich / Zeit / habe.', 'Tôi không biết mình có rảnh không.'),
      ],
      'w-indirekt': [
        order('Wissen Sie, / wo / der Bahnhof / ist?', 'Ông/bà có biết nhà ga ở đâu không?'),
        fill('Können Sie mir sagen, wann der Kurs {beginnt}?', 'Ông/bà cho tôi biết khi nào khóa học bắt đầu?'),
        choose('Ich weiß nicht, wann der Zug ___.', ['ankommt', 'kommt an'], 'ankommt'),
        fill('Weißt du, warum er {fehlt}?', 'Bạn có biết vì sao anh ấy vắng không?'),
        choose('Ich weiß nicht, wie man das ___.', ['schreibt', 'schreibt man'], 'schreibt'),
        order('Ich weiß nicht, / was / das Wort / bedeutet.', 'Tôi không biết từ này nghĩa là gì.'),
      ],
    },
    reading: {
      title_de: 'Mein Weg zum Zertifikat',
      text_de:
        'Seit einem Jahr lerne ich Deutsch an einer Sprachschule in Hanoi. Mein Ziel ist das B1-Zertifikat, weil ich in Deutschland eine Ausbildung als Krankenpflegerin machen möchte. Der Kurs ist am Abend, wenn ich von der Arbeit komme. Manchmal bin ich müde und kann mich nicht konzentrieren. Unsere Lehrerin ist streng, aber sehr geduldig. Wenn wir Fehler machen, korrigiert sie uns freundlich. Die Grammatik finde ich schwer, aber meine Aussprache ist gut. Im Juni lege ich die Prüfung ab. Ich weiß noch nicht, ob ich sie beim ersten Mal bestehe, aber ich bereite mich jeden Tag vor.',
      gloss: { Sprachschule: 'trường ngoại ngữ', Krankenpflegerin: 'y tá (nữ)', 'beim ersten Mal': 'ngay lần đầu' },
      questions: [
        mc('Người viết muốn học nghề gì ở Đức?', ['y tá', 'đầu bếp', 'kỹ sư'], 'y tá'),
        tf('Der Kurs ist am Morgen.', false, { explain: 'Der Kurs ist am Abend.' }),
        mc('Cô giáo thế nào?', ['nghiêm nhưng rất kiên nhẫn', 'dễ dãi', 'không kiên nhẫn'], 'nghiêm nhưng rất kiên nhẫn'),
        tf('Die Prüfung ist im Juni.', true),
      ],
    },
  },
});
