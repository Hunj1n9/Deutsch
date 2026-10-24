// A1 · 01 Chào hỏi và giới thiệu — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a1-01',
  points: [
    {
      key: 'pronomen',
      rule_key: 'personalpronomen',
      category: 'other',
      title_vi: 'Đại từ nhân xưng: ich, du, er/sie/es, wir, ihr, sie/Sie',
      explanation_vi: 'Mỗi ngôi có một đại từ cố định; du dùng khi thân mật, Sie (viết hoa) khi lịch sự và chia như sie số nhiều.',
    },
    {
      key: 'sein',
      rule_key: 'sein-praesens',
      category: 'conjugation',
      title_vi: 'Chia sein ở hiện tại',
      explanation_vi: 'sein bất quy tắc: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.',
    },
    {
      key: 'w-fragen',
      rule_key: 'verb-position-frage',
      category: 'verb_position',
      title_vi: 'Câu hỏi: động từ ở vị trí 2 (câu hỏi W) hoặc đầu câu (câu hỏi có/không)',
      explanation_vi: 'Câu hỏi W: từ để hỏi, rồi động từ chia, rồi chủ ngữ. Câu hỏi có/không: động từ chia đứng đầu câu.',
    },
  ],
  lessons: [
    {
      title_vi: 'Xin chào!',
      goal_vi: 'Chào hỏi, tạm biệt, xưng hô đúng (du hay Sie) và nói tên mình.',
      items: [
        'Hallo', 'Guten Morgen', 'Guten Tag', 'Guten Abend', 'Gute Nacht', 'Tschüss', 'Auf Wiedersehen', 'Bis bald',
        'Danke', 'Bitte', 'Entschuldigung', 'Freut mich', 'Ja', 'Nein',
        'ich', 'du', 'er', 'sie', 'wir', 'ihr', 'heißen', 'Herr', 'Frau', 'Name',
        'Đuôi động từ ở thì hiện tại',
      ],
      grammar: {
        point: 'pronomen',
        sections: [
          {
            text_vi:
              'Tiếng Việt xưng hô theo quan hệ (anh, chị, em, cô, chú…). Tiếng Đức chỉ có **một bộ đại từ nhân xưng cố định**, dùng cho mọi người:',
            table: 'Số ít | Số nhiều\nich (tôi) | wir (chúng tôi)\ndu (bạn, thân mật) | ihr (các bạn)\ner (anh ấy) · sie (cô ấy) · es (nó) | sie (họ)\n— | Sie (ông/bà, lịch sự)',
            examples: [
              ['Ich heiße Lan.', 'Tôi tên là Lan.'],
              ['Er heißt Tom.', 'Anh ấy tên là Tom.'],
              ['Wir lernen Deutsch.', 'Chúng tôi học tiếng Đức.'],
            ],
            exercises: [
              choose('___ heiße Minh.', ['Ich', 'Du', 'Er'], 'Ich', { vi: 'Tôi tên là Minh.' }),
              fill('{Wir} lernen Deutsch.', 'Chúng tôi học tiếng Đức.'),
              choose('Das ist Anna. ___ kommt aus Berlin.', ['Er', 'Sie', 'Es'], 'Sie', {
                vi: 'Đây là Anna. Cô ấy đến từ Berlin.',
                explain: 'Anna là nữ nên dùng sie (cô ấy); động từ chia ngôi 3 số ít: kommt.',
              }),
            ],
          },
          {
            text_vi:
              '**du** hay **Sie**? Dùng **du** với bạn bè, gia đình, trẻ em, bạn cùng lớp. Dùng **Sie** (luôn viết hoa) với người lạ, thầy cô, nhân viên, người lớn tuổi. Động từ đi với Sie chia giống sie (họ): Sie heißen.\n\nLời chào cũng vậy: **Hallo, Tschüss** là thân mật; **Guten Tag, Auf Wiedersehen** là lịch sự.',
            examples: [
              ['Wie heißt du?', 'Bạn tên là gì?'],
              ['Wie heißen Sie?', 'Ông/bà tên là gì?'],
              ['Guten Tag, Frau Weber!', 'Xin chào bà Weber!'],
            ],
            exercises: [
              choose('Guten Tag, Herr Lang! Wie heißen ___?', ['du', 'Sie', 'ihr'], 'Sie', { vi: 'Xin chào ông Lang! Ông tên là gì?' }),
              choose('Hallo! Ich bin Tom. Wie heißt ___?', ['du', 'Sie', 'er'], 'du', { vi: 'Chào! Mình là Tom. Bạn tên gì?' }),
              choose('Hết giờ học, chào cô giáo: „___, Frau Weber!“', ['Tschüss', 'Auf Wiedersehen', 'Hallo'], 'Auf Wiedersehen', {
                explain: 'Với cô giáo dùng lời chào lịch sự: Auf Wiedersehen.',
              }),
            ],
          },
          {
            text_vi:
              'Động từ **đổi đuôi theo đại từ**. Gốc động từ là dạng nguyên mẫu bỏ **-en** (heißen → heiß-). Đuôi: ich **-e**, du **-st**, er/sie/es **-t**, wir **-en**, ihr **-t**, sie/Sie **-en**. Gốc heiß- đã có ß nên du chỉ thêm -t: du heißt.',
            table: 'Đại từ | heißen | kommen\nich | heiße | komme\ndu | heißt | kommst\ner/sie/es | heißt | kommt\nwir | heißen | kommen\nihr | heißt | kommt\nsie/Sie | heißen | kommen',
            examples: [
              ['Ich heiße Minh.', 'Tôi tên là Minh.'],
              ['Wie heißt ihr?', 'Các bạn tên là gì?'],
            ],
            exercises: [
              fill('Wie {heißt} du?', 'Bạn tên là gì?', { hint: 'Ngôi du; gốc heiß- đã có ß.' }),
              fill('Wir {heißen} Lan und Minh.', 'Chúng tôi tên là Lan và Minh.'),
            ],
          },
        ],
        mixed: [
          translate('Tôi tên là Minh.', ['Ich heiße Minh.', 'Mein Name ist Minh.', 'Ich bin Minh.']),
          order('Wie / heißen / Sie?', 'Ông/bà tên là gì?'),
          choose('Lan und Minh sind hier. ___ heißen Lan und Minh.', ['Wir', 'Sie', 'Ihr'], 'Sie', {
            vi: 'Lan và Minh ở đây. Họ tên là Lan và Minh.',
          }),
          transform('Đổi sang cách xưng hô thân mật (du)', 'Wie heißen Sie?', ['Wie heißt du?']),
          fill('Anna und Paul, wie {heißt} ihr?', 'Anna và Paul, các bạn tên là gì?'),
        ],
      },
      dialogue: {
        title_de: 'Im Kurs',
        lines: [
          { speaker: 'A', de: 'Guten Morgen! Ich heiße Minh. Wie heißt du?', vi: 'Chào buổi sáng! Mình tên là Minh. Bạn tên gì?' },
          { speaker: 'B', de: 'Hallo, Minh! Ich heiße Anna.', vi: 'Chào Minh! Mình tên là Anna.' },
          { speaker: 'A', de: 'Freut mich, Anna!', vi: 'Rất vui được gặp, Anna!' },
          { speaker: 'B', de: 'Entschuldigung, ist das Herr Weber?', vi: 'Xin lỗi, đó có phải ông Weber không?' },
          { speaker: 'A', de: 'Nein, das ist Herr Schmidt.', vi: 'Không, đó là ông Schmidt.' },
          { speaker: 'B', de: 'Ah, danke!', vi: 'À, cảm ơn!' },
          { speaker: 'A', de: 'Bitte! Tschüss, Anna! Bis bald!', vi: 'Không có gì! Tạm biệt Anna! Hẹn sớm gặp lại!' },
          { speaker: 'B', de: 'Tschüss, Minh!', vi: 'Tạm biệt Minh!' },
        ],
        gloss: { ah: 'à (thán từ)' },
        questions: [
          mc('Người nữ tên là gì?', ['Anna', 'Minh', 'Weber'], 'Anna'),
          tf('Der Mann ist Herr Weber.', false, { explain: 'Minh nói: Nein, das ist Herr Schmidt.' }),
          mc('Minh chào Anna vào lúc nào?', ['buổi sáng', 'buổi tối', 'ban đêm'], 'buổi sáng'),
          mc('Cuối cùng hai người nói gì?', ['Tschüss', 'Guten Tag', 'Gute Nacht'], 'Tschüss'),
        ],
        dictation: [2, 4],
      },
      writing_prompt_vi:
        'Viết 3–4 câu: chào, nói tên bạn, hỏi tên một người bạn (dùng du) và hỏi tên một giáo viên (dùng Sie).',
    },
    {
      title_vi: 'Tôi đến từ Việt Nam',
      goal_vi: 'Nói mình là ai, đến từ đâu, sống ở đâu và hỏi thăm sức khỏe.',
      items: [
        'Wie geht\'s?', 'Wie geht es Ihnen?', 'Mir geht es gut', 'Ich komme aus', 'Ich wohne in',
        'sein', 'kommen', 'wohnen', 'auch', 'hier', 'neu', 'Vorname', 'Nachname', 'Land', 'Stadt',
        'sein: ich bin, du bist, er ist',
      ],
      grammar: {
        point: 'sein',
        sections: [
          {
            text_vi:
              '**sein** (là, thì, ở) là động từ quan trọng nhất và **bất quy tắc**: phải thuộc từng dạng. Tiếng Việt có thể bỏ chữ "là" (Tôi sinh viên), còn câu tiếng Đức **luôn cần động từ**: Ich bin Studentin.',
            table: 'Đại từ | sein\nich | bin\ndu | bist\ner/sie/es | ist\nwir | sind\nihr | seid\nsie/Sie | sind',
            examples: [
              ['Ich bin Lan.', 'Tôi là Lan.'],
              ['Du bist neu hier.', 'Bạn mới đến đây.'],
              ['Das ist Herr Schmidt.', 'Đây là ông Schmidt.'],
            ],
            exercises: [
              fill('Ich {bin} Minh.', 'Tôi là Minh.'),
              fill('{Bist} du neu hier?', 'Bạn mới đến đây à?', { hint: 'Ngôi du. Câu hỏi có/không nên động từ đứng đầu.' }),
              choose('Anna und Paul ___ hier.', ['ist', 'sind', 'seid'], 'sind', { vi: 'Anna và Paul ở đây.' }),
              fill('Ihr {seid} neu im Kurs.', 'Các bạn mới vào lớp.'),
            ],
          },
          {
            text_vi:
              'Nói **đến từ đâu**: **kommen aus** + nước/thành phố. Nói **sống ở đâu**: **wohnen in** + thành phố. kommen và wohnen chia có quy tắc (ich komme, du kommst, er kommt). Đa số tên nước không có mạo từ: aus Vietnam, aus Deutschland.',
            examples: [
              ['Ich komme aus Vietnam.', 'Tôi đến từ Việt Nam.'],
              ['Er wohnt in Berlin.', 'Anh ấy sống ở Berlin.'],
              ['Woher kommst du?', 'Bạn đến từ đâu?'],
            ],
            exercises: [
              fill('Ich komme {aus} Vietnam.', 'Tôi đến từ Việt Nam.'),
              fill('Sie {wohnt} in Hamburg.', 'Cô ấy sống ở Hamburg.'),
              choose('Wir wohnen ___ Hanoi.', ['aus', 'in', 'bin'], 'in', { vi: 'Chúng tôi sống ở Hà Nội.' }),
            ],
          },
          {
            text_vi:
              'Hỏi thăm: **Wie geht\'s?** (thân mật) hoặc **Wie geht es Ihnen?** (lịch sự). Trả lời: **Mir geht es gut, danke.** Hỏi lại: **Und dir?** (thân mật) hoặc **Und Ihnen?** (lịch sự). "es geht" là cụm cố định, học thuộc cả cụm.',
            examples: [
              ['Wie geht\'s, Anna? – Gut, danke. Und dir?', 'Khỏe không Anna? – Khỏe, cảm ơn. Còn bạn?'],
              ['Wie geht es Ihnen, Herr Lang?', 'Ông Lang có khỏe không?'],
            ],
            exercises: [
              choose('Guten Tag, Frau Weber! Wie geht es ___?', ['dir', 'Ihnen', 'du'], 'Ihnen', { vi: 'Chào bà Weber! Bà có khỏe không?' }),
              fill('Mir {geht} es gut, danke.', 'Tôi khỏe, cảm ơn.'),
            ],
          },
        ],
        mixed: [
          transform('Đổi chủ ngữ thành wir', 'Ich bin neu hier.', ['Wir sind neu hier.']),
          translate('Tôi đến từ Việt Nam và sống ở Hà Nội.', [
            'Ich komme aus Vietnam und wohne in Hanoi.',
            'Ich komme aus Vietnam und ich wohne in Hanoi.',
          ]),
          order('Woher / kommt / Herr Schmidt?', 'Ông Schmidt đến từ đâu?'),
          fill('Wo {ist} Herr Schmidt?', 'Ông Schmidt ở đâu?'),
          choose('Du ___ Lan, oder?', ['bin', 'bist', 'ist'], 'bist', { vi: 'Bạn là Lan phải không?' }),
        ],
      },
      dialogue: {
        title_de: 'Neu in Berlin',
        lines: [
          { speaker: 'A', de: 'Hallo! Bist du neu hier?', vi: 'Chào! Bạn mới đến đây à?' },
          { speaker: 'B', de: 'Ja, ich bin neu im Kurs. Ich heiße Lan.', vi: 'Ừ, mình mới vào lớp. Mình tên là Lan.' },
          { speaker: 'A', de: 'Ich bin Paul. Woher kommst du, Lan?', vi: 'Mình là Paul. Bạn đến từ đâu, Lan?' },
          { speaker: 'B', de: 'Ich komme aus Vietnam, aus Hanoi. Und du?', vi: 'Mình đến từ Việt Nam, từ Hà Nội. Còn bạn?' },
          { speaker: 'A', de: 'Ich komme aus Hamburg, aber ich wohne hier in Berlin.', vi: 'Mình đến từ Hamburg, nhưng mình sống ở Berlin này.' },
          { speaker: 'B', de: 'Ich wohne auch in Berlin. Berlin ist eine große Stadt!', vi: 'Mình cũng sống ở Berlin. Berlin là một thành phố lớn!' },
          { speaker: 'A', de: 'Ja! Wie geht es dir hier?', vi: 'Đúng vậy! Bạn ở đây thấy thế nào?' },
          { speaker: 'B', de: 'Mir geht es gut, danke.', vi: 'Mình ổn, cảm ơn.' },
        ],
        gloss: { aber: 'nhưng' },
        questions: [
          mc('Lan đến từ đâu?', ['Hamburg', 'Hanoi', 'Berlin'], 'Hanoi'),
          tf('Paul wohnt in Hamburg.', false, { explain: 'Paul đến từ Hamburg nhưng sống ở Berlin.' }),
          tf('Lan ist neu im Kurs.', true),
          mc('Cả hai người đang sống ở đâu?', ['Berlin', 'Hamburg', 'Hanoi'], 'Berlin'),
        ],
        dictation: [3, 7],
      },
      writing_prompt_vi:
        'Viết 4–5 câu giới thiệu bản thân: tên, bạn đến từ đâu, sống ở đâu, bạn có mới ở đây không. Dùng sein ít nhất hai lần.',
    },
    {
      title_vi: 'Bạn đến từ đâu?',
      goal_vi: 'Đặt câu hỏi W (wer, wie, woher, wo) và câu hỏi có/không; nói mình học và nói tiếng gì.',
      items: [
        'Wie heißt du?', 'Woher kommst du?', 'Wie heißen Sie?', 'sprechen', 'lernen', 'buchstabieren', 'verstehen',
        'wer', 'wie', 'woher', 'wo', 'Sprache', 'Deutsch', 'Kurs', 'Adresse', 'Telefonnummer',
        'Câu hỏi W: động từ đứng thứ hai', 'Câu hỏi có/không: động từ đứng đầu',
      ],
      grammar: {
        point: 'w-fragen',
        sections: [
          {
            text_vi:
              '**Câu hỏi W** bắt đầu bằng từ để hỏi: **wer** (ai), **wie** (thế nào), **woher** (từ đâu), **wo** (ở đâu). Quy tắc vàng: **động từ chia đứng ở vị trí 2**, chủ ngữ đứng ngay sau. Tiếng Việt để từ hỏi ở cuối (Bạn đến từ đâu?), tiếng Đức để ở đầu: Woher kommst du?',
            table: 'Vị trí 1 | Vị trí 2 (động từ) | Phần còn lại\nWoher | kommst | du?\nWo | wohnt | Anna?\nWer | ist | das?',
            examples: [
              ['Wo wohnst du?', 'Bạn sống ở đâu?'],
              ['Wer ist das?', 'Đó là ai?'],
              ['Wie ist Ihre Adresse?', 'Địa chỉ của ông/bà là gì?'],
            ],
            exercises: [
              order('Wo / wohnst / du?', 'Bạn sống ở đâu?'),
              choose('___ kommen Sie? – Aus Vietnam.', ['Wo', 'Woher', 'Wer'], 'Woher', { vi: 'Ông/bà đến từ đâu? – Từ Việt Nam.' }),
              choose('___ ist das? – Das ist Frau Weber.', ['Wer', 'Wie', 'Wo'], 'Wer', { vi: 'Đó là ai? – Đó là bà Weber.' }),
              order('Welche Sprachen / sprichst / du?', 'Bạn nói những thứ tiếng nào?'),
            ],
          },
          {
            text_vi:
              '**Câu hỏi có/không** (trả lời ja/nein) không có từ để hỏi: **động từ chia đứng đầu câu**, sau đó là chủ ngữ. Tiếng Việt thêm "không", "à" ở cuối câu; tiếng Đức chỉ đảo động từ lên đầu: Du sprichst Deutsch. → Sprichst du Deutsch?',
            examples: [
              ['Sprichst du Deutsch? – Ja, ein bisschen.', 'Bạn nói tiếng Đức không? – Có, một chút.'],
              ['Verstehen Sie das? – Nein.', 'Ông/bà hiểu cái đó không? – Không.'],
            ],
            exercises: [
              transform('Đổi thành câu hỏi có/không', 'Du lernst Deutsch.', ['Lernst du Deutsch?']),
              order('Wohnt / Anna / in Berlin?', 'Anna sống ở Berlin à?'),
              choose('___ du Vietnamesisch? – Ja.', ['Sprichst', 'Spricht', 'Sprechen'], 'Sprichst', { vi: 'Bạn nói tiếng Việt không? – Có.' }),
            ],
          },
          {
            text_vi:
              '**sprechen** đổi nguyên âm e → i ở du và er/sie/es: ich spreche, **du sprichst, er spricht**, wir sprechen. **lernen, verstehen, buchstabieren** chia có quy tắc. Khi không hiểu, hãy nói: **Ich verstehe das nicht. Können Sie das bitte buchstabieren?**',
            table: 'Đại từ | sprechen | lernen\nich | spreche | lerne\ndu | sprichst | lernst\ner/sie/es | spricht | lernt\nwir | sprechen | lernen\nihr | sprecht | lernt\nsie/Sie | sprechen | lernen',
            examples: [
              ['Er spricht Englisch und Deutsch.', 'Anh ấy nói tiếng Anh và tiếng Đức.'],
              ['Wir lernen im Kurs Deutsch.', 'Chúng tôi học tiếng Đức ở lớp.'],
            ],
            exercises: [
              fill('Paul {spricht} Deutsch.', 'Paul nói tiếng Đức.', { hint: 'sprechen đổi e → i ở ngôi er/sie/es.' }),
              fill('Ich {verstehe} das nicht.', 'Tôi không hiểu cái đó.'),
            ],
          },
        ],
        mixed: [
          translate('Bạn sống ở đâu?', ['Wo wohnst du?']),
          translate('Ông/bà có nói tiếng Đức không?', ['Sprechen Sie Deutsch?']),
          order('Wie / ist / Ihre Telefonnummer?', 'Số điện thoại của ông/bà là gì?'),
          transform('Đặt câu hỏi W để hỏi phần viết hoa', 'Anna kommt AUS POLEN.', ['Woher kommt Anna?']),
          choose('Woher ___ ihr?', ['kommt', 'kommst', 'kommen'], 'kommt', { vi: 'Các bạn đến từ đâu?' }),
        ],
      },
      dialogue: {
        title_de: 'Die Anmeldung',
        lines: [
          { speaker: 'A', de: 'Guten Tag! Wie heißen Sie?', vi: 'Xin chào! Anh tên là gì?' },
          { speaker: 'B', de: 'Guten Tag! Mein Name ist Minh Nguyen.', vi: 'Xin chào! Tên tôi là Minh Nguyen.' },
          { speaker: 'A', de: 'Können Sie das bitte buchstabieren?', vi: 'Anh đánh vần giúp tôi được không?' },
          { speaker: 'B', de: 'N-G-U-Y-E-N.', vi: 'N-G-U-Y-E-N.' },
          { speaker: 'A', de: 'Danke. Woher kommen Sie, Herr Nguyen?', vi: 'Cảm ơn. Anh Nguyen đến từ đâu?' },
          { speaker: 'B', de: 'Ich komme aus Vietnam. Ich wohne jetzt hier in Berlin.', vi: 'Tôi đến từ Việt Nam. Bây giờ tôi sống ở Berlin.' },
          { speaker: 'A', de: 'Wie ist Ihre Adresse?', vi: 'Địa chỉ của anh là gì?' },
          { speaker: 'B', de: 'Gartenstraße 5.', vi: 'Số 5 phố Garten.' },
          { speaker: 'A', de: 'Und Ihre Telefonnummer?', vi: 'Còn số điện thoại của anh?' },
          { speaker: 'B', de: '0176 123456.', vi: '0176 123456.' },
          { speaker: 'A', de: 'Sprechen Sie Deutsch?', vi: 'Anh có nói tiếng Đức không?' },
          { speaker: 'B', de: 'Ja, ein bisschen. Ich lerne Deutsch im Kurs.', vi: 'Có, một chút. Tôi học tiếng Đức ở lớp.' },
        ],
        gloss: { 'N-G-U-Y-E-N': 'đánh vần tên Nguyen', jetzt: 'bây giờ', Gartenstraße: 'phố Garten (tên phố)' },
        questions: [
          mc('Người đàn ông tên là gì?', ['Minh Nguyen', 'Paul Weber', 'Herr Schmidt'], 'Minh Nguyen'),
          tf('Herr Nguyen wohnt in Hamburg.', false),
          tf('Herr Nguyen spricht ein bisschen Deutsch.', true),
          mc('Người thư ký hỏi những gì?', ['tên, quê, địa chỉ, số điện thoại, tiếng Đức', 'chỉ hỏi tên', 'tuổi và nghề nghiệp'], 'tên, quê, địa chỉ, số điện thoại, tiếng Đức'),
        ],
        dictation: [4, 10],
      },
      writing_prompt_vi:
        'Viết 5 câu hỏi để làm quen một người bạn mới: dùng wer, wie, woher, wo và ít nhất một câu hỏi có/không.',
    },
  ],
  test: {
    grammar: {
      pronomen: [
        choose('Das ist Tom. ___ kommt aus London.', ['Er', 'Sie', 'Ich'], 'Er', { vi: 'Đây là Tom. Anh ấy đến từ London.' }),
        choose('Frau Weber, woher kommen ___?', ['du', 'Sie', 'ihr'], 'Sie', { vi: 'Bà Weber, bà đến từ đâu?' }),
        fill('Ich bin Lan und das ist Minh. {Wir} kommen aus Vietnam.', 'Tôi là Lan và đây là Minh. Chúng tôi đến từ Việt Nam.'),
        choose('Anna und Paul, woher kommt ___?', ['ihr', 'du', 'sie'], 'ihr', { vi: 'Anna và Paul, các bạn đến từ đâu?' }),
        choose('Das ist Frau Schmidt. ___ wohnt in Berlin.', ['Er', 'Sie', 'Es'], 'Sie', { vi: 'Đây là bà Schmidt. Bà ấy sống ở Berlin.' }),
        fill('Hallo! Ich heiße Minh. Und wie heißt {du}?', 'Chào! Mình tên Minh. Còn bạn tên gì?'),
      ],
      sein: [
        fill('Ich {bin} Studentin.', 'Tôi là sinh viên.'),
        fill('Wir {sind} neu im Kurs.', 'Chúng tôi mới vào lớp.'),
        choose('Wer ___ das?', ['bin', 'ist', 'sind'], 'ist', { vi: 'Đó là ai?' }),
        choose('Ihr ___ aus Vietnam, oder?', ['seid', 'sind', 'ist'], 'seid', { vi: 'Các bạn đến từ Việt Nam phải không?' }),
        fill('{Bist} du Paul?', 'Bạn là Paul à?'),
        choose('Frau Weber, ___ Sie neu hier?', ['ist', 'sind', 'seid'], 'sind', { vi: 'Bà Weber, bà mới đến đây à?' }),
      ],
      'w-fragen': [
        order('Woher / kommen / Sie?', 'Ông/bà đến từ đâu?'),
        order('Wo / wohnt / Herr Schmidt?', 'Ông Schmidt sống ở đâu?'),
        order('Sprichst / du / Deutsch?', 'Bạn nói tiếng Đức không?'),
        choose('___ wohnst du? – In Hanoi.', ['Wo', 'Woher', 'Wer'], 'Wo', { vi: 'Bạn sống ở đâu? – Ở Hà Nội.' }),
        choose('___ heißen Sie? – Weber.', ['Wer', 'Wie', 'Wo'], 'Wie', { vi: 'Ông/bà tên là gì? – Weber.' }),
        order('Wie / ist / Ihr Name?', 'Tên của ông/bà là gì?'),
      ],
    },
    reading: {
      title_de: 'Mein Deutschkurs',
      text_de:
        'Hallo! Ich heiße Lan Tran. Ich komme aus Vietnam, aus Da Nang. Jetzt wohne ich in Berlin. Ich bin neu hier und lerne Deutsch im Kurs. Der Kurs ist sehr gut. Im Kurs sind zwölf Personen. Paul kommt aus Hamburg, er spricht Deutsch und Englisch. Anna und Marek kommen aus Polen. Sie sprechen Polnisch und ein bisschen Deutsch. Frau Weber ist die Lehrerin. Sie ist sehr nett. Wir lernen zusammen und sprechen viel Deutsch. Ich verstehe noch nicht alles, aber das ist kein Problem. Meine Adresse ist Gartenstraße 12 und meine Telefonnummer ist 0176 554433. Tschüss und bis bald!',
      gloss: {
        jetzt: 'bây giờ',
        'zwölf Personen': 'mười hai người',
        Lehrerin: 'cô giáo',
        viel: 'nhiều',
        'noch nicht alles': 'chưa (hiểu) hết',
        aber: 'nhưng',
        'kein Problem': 'không sao',
      },
      questions: [
        tf('Lan wohnt in Da Nang.', false, { explain: 'Lan đến từ Đà Nẵng, bây giờ sống ở Berlin.' }),
        tf('Paul spricht Englisch.', true),
        mc('Wer ist Frau Weber?', ['die Lehrerin', 'eine Studentin', 'Lans Mutter'], 'die Lehrerin'),
        tf('Anna und Marek kommen aus Polen.', true),
        mc('Lan đã hiểu hết chưa?', ['Chưa hiểu hết', 'Hiểu hết', 'Không hiểu gì'], 'Chưa hiểu hết'),
      ],
    },
  },
});
