// A1 · 03 Số, giờ và ngày tháng — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a1-03',
  points: [
    {
      key: 'zahlen',
      rule_key: 'zahlen-21-99',
      category: 'spelling',
      title_vi: 'Số đếm: 21–99 đọc đơn vị trước, chục sau',
      explanation_vi: 'Số hai chữ số: đơn vị + und + hàng chục, viết liền (fünfundzwanzig). 21 là einundzwanzig; 30 là dreißig.',
    },
    {
      key: 'uhrzeit',
      rule_key: 'uhrzeit-halb-viertel',
      category: 'other',
      title_vi: 'Nói giờ: halb, Viertel vor/nach',
      explanation_vi: 'halb + giờ kế tiếp: halb acht = 7:30. Viertel nach = quá 15 phút, Viertel vor = kém 15 phút.',
    },
    {
      key: 'zeit-praep',
      rule_key: 'zeit-praep-am-um-im',
      category: 'preposition',
      title_vi: 'Giới từ thời gian: am, um, im',
      explanation_vi: 'um + giờ; am + ngày trong tuần, ngày tháng, buổi; im + tháng, mùa. Ngoại lệ: in der Nacht.',
    },
  ],
  lessons: [
    {
      title_vi: 'Số đếm',
      goal_vi: 'Đếm, nói tuổi, số điện thoại và giá tiền.',
      items: [
        'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf',
        'zwanzig', 'hundert', 'tausend', 'Zahl', 'zählen', 'wie viel', 'Số 21–99: đơn vị trước, chục sau',
      ],
      grammar: {
        point: 'zahlen',
        sections: [
          {
            text_vi:
              'Số 0–12 phải thuộc lòng: null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf. Khi đếm hoặc đọc số điện thoại thì nói **eins**; trước danh từ dùng **ein/eine** (ein Kind, eine Stunde).\n\nSố 13–19 = đơn vị + **zehn**: dreizehn, vierzehn. Chú ý **sechzehn** (mất s) và **siebzehn** (mất en).',
            table: 'Số | Tiếng Đức\n13 | dreizehn\n16 | sechzehn\n17 | siebzehn\n20 | zwanzig\n30 | dreißig\n40 | vierzig',
            examples: [
              ['Ich habe zwei Brüder.', 'Tôi có hai anh trai.'],
              ['Meine Telefonnummer ist null eins sieben sechs.', 'Số điện thoại của tôi là 0176.'],
            ],
            exercises: [
              fill('Eins, zwei, {drei}, vier.', 'Một, hai, ba, bốn.'),
              choose('Die Woche hat ___ Tage.', ['sechs', 'sieben', 'acht'], 'sieben', { vi: 'Một tuần có bảy ngày.' }),
              fill('Mein Sohn ist {sechzehn}. (16)', 'Con trai tôi 16 tuổi.', { hint: '6 + 10; sechs mất chữ s.' }),
            ],
          },
          {
            text_vi:
              'Số 21–99 đọc **ngược với tiếng Việt**: hàng đơn vị trước, rồi **und**, rồi hàng chục, viết liền thành một chữ. 25 = fünf**und**zwanzig ("năm và hai mươi"). Hàng chục: zwanzig, **dreißig** (ß, không phải -zig), vierzig, fünfzig, sechzig, siebzig, achtzig, neunzig. 21 là **einundzwanzig**, không phải "einsundzwanzig".',
            table: 'Số | Đọc\n21 | einundzwanzig\n35 | fünfunddreißig\n48 | achtundvierzig\n99 | neunundneunzig',
            examples: [
              ['Mein Vater ist dreiundfünfzig.', 'Bố tôi 53 tuổi.'],
              ['Das kostet vierundzwanzig Euro.', 'Cái này giá 24 euro.'],
            ],
            exercises: [
              fill('Ich bin {zweiunddreißig} Jahre alt. (32)', 'Tôi 32 tuổi.'),
              choose('67 = ___', ['sechsundsiebzig', 'siebenundsechzig', 'sechzigsieben'], 'siebenundsechzig', {
                explain: 'Đơn vị (sieben) trước, rồi und, rồi chục (sechzig).',
              }),
              fill('Er ist {einundzwanzig}. (21)', 'Anh ấy 21 tuổi.', { hint: '21: ein + und + zwanzig' }),
            ],
          },
          {
            text_vi:
              'Số lớn: **hundert** (100), **tausend** (1.000). 250 = zweihundertfünfzig. Hỏi giá: **Wie viel kostet das?** – **Das kostet … Euro.** Tiếng Đức dùng dấu phẩy cho phần lẻ: 2,50 € đọc là "zwei Euro fünfzig".',
            examples: [
              ['Wie viel kostet das Fahrrad? – Tausend Euro.', 'Chiếc xe đạp giá bao nhiêu? – Một nghìn euro.'],
              ['Das Buch hat hundert Seiten.', 'Cuốn sách có một trăm trang.'],
            ],
            exercises: [
              order('Wie viel / kostet / das?', 'Cái này giá bao nhiêu?'),
              choose('120 = ___', ['hundertzwanzig', 'zwanzighundert', 'hundertzwölf'], 'hundertzwanzig'),
            ],
          },
        ],
        mixed: [
          translate('Tôi 25 tuổi.', ['Ich bin fünfundzwanzig.', 'Ich bin fünfundzwanzig Jahre alt.']),
          fill('Ein Jahr hat {zwölf} Monate.', 'Một năm có mười hai tháng.'),
          choose('Das kostet ___ Euro. (45)', ['fünfundvierzig', 'vierundfünfzig', 'vierzigfünf'], 'fünfundvierzig'),
          transform('Viết số bằng chữ', 'Meine Mutter ist 58.', ['Meine Mutter ist achtundfünfzig.']),
          fill('Kannst du bis hundert {zählen}?', 'Bạn đếm được đến một trăm không?'),
        ],
      },
      dialogue: {
        title_de: 'Die Telefonnummer',
        lines: [
          { speaker: 'A', de: 'Hallo Tom! Wie ist deine Telefonnummer?', vi: 'Chào Tom! Số điện thoại của bạn là gì?' },
          { speaker: 'B', de: 'Null eins sieben sechs, dreiundzwanzig, fünfundvierzig.', vi: 'Không một bảy sáu, hai mươi ba, bốn mươi lăm.' },
          { speaker: 'A', de: 'Langsam, bitte! Null eins sieben sechs, und dann?', vi: 'Chậm thôi! Không một bảy sáu, rồi sao nữa?' },
          { speaker: 'B', de: 'Dreiundzwanzig, fünfundvierzig.', vi: 'Hai mươi ba, bốn mươi lăm.' },
          { speaker: 'A', de: 'Danke! Und wie alt ist deine Schwester jetzt?', vi: 'Cảm ơn! Còn chị gái bạn giờ bao nhiêu tuổi?' },
          { speaker: 'B', de: 'Sie ist einundzwanzig. Mein Bruder ist achtzehn.', vi: 'Chị ấy hai mươi mốt. Em trai mình mười tám.' },
          { speaker: 'A', de: 'Und du? Du bist zwanzig, oder?', vi: 'Còn bạn? Bạn hai mươi phải không?' },
          { speaker: 'B', de: 'Nein, ich bin schon zweiundzwanzig!', vi: 'Không, mình hai mươi hai rồi!' },
        ],
        gloss: {
          null: 'số 0',
          dreiundzwanzig: '23',
          fünfundvierzig: '45',
          langsam: 'chậm',
          dann: 'rồi, sau đó',
          achtzehn: '18',
          schon: 'đã, rồi',
          zweiundzwanzig: '22',
        },
        questions: [
          mc('Số điện thoại của Tom bắt đầu bằng gì?', ['0176', '0167', '0716'], '0176'),
          tf('Die Schwester ist einundzwanzig.', true),
          mc('Tom bao nhiêu tuổi?', ['22', '20', '18'], '22'),
          tf('Der Bruder ist zwanzig.', false, { explain: 'Mein Bruder ist achtzehn.' }),
        ],
        dictation: [3, 5],
      },
      writing_prompt_vi:
        'Viết 4–5 câu có số: tuổi của bạn và người thân, một số điện thoại (tưởng tượng), giá một món đồ. Viết số bằng chữ.',
    },
    {
      title_vi: 'Mấy giờ rồi?',
      goal_vi: 'Hỏi và nói giờ, nói việc gì bắt đầu lúc mấy giờ và kéo dài bao lâu.',
      items: [
        'Uhr', 'Stunde', 'Minute', 'Viertel', 'halb', 'Zeit', 'jetzt', 'wann', 'dauern', 'beginnen', 'um', 'Termin',
        'Morgen', 'Mittag', 'Nachmittag', 'Abend', 'Nacht', 'Hỏi giờ: Wie spät ist es?',
        'Sekunde', 'Vormittag', 'gegen',
      ],
      grammar: {
        point: 'uhrzeit',
        sections: [
          {
            text_vi:
              'Hỏi giờ: **Wie spät ist es?** hoặc **Wie viel Uhr ist es?** Giờ chẵn: **Es ist acht Uhr.** Cách nói chính thức (đài, tàu xe) dùng 24 giờ: 14:30 = vierzehn Uhr dreißig. Hỏi giờ của một việc: **Wann beginnt …?** – **Um neun (Uhr).**',
            examples: [
              ['Wie spät ist es? – Es ist zehn Uhr.', 'Mấy giờ rồi? – Mười giờ.'],
              ['Der Zug kommt um vierzehn Uhr zwanzig.', 'Tàu đến lúc 14 giờ 20.'],
            ],
            exercises: [
              fill('Wie spät {ist} es?', 'Mấy giờ rồi?'),
              order('Es / ist / acht Uhr.', 'Bây giờ là tám giờ.'),
              choose('___ beginnt der Kurs? – Um neun.', ['Wann', 'Wo', 'Wer'], 'Wann', { vi: 'Khóa học bắt đầu khi nào? – Lúc chín giờ.' }),
            ],
          },
          {
            text_vi:
              'Nói thường ngày (12 giờ): **Viertel nach** = quá 15 phút, **Viertel vor** = kém 15 phút, **nach/vor** + số phút. Bẫy lớn với người Việt: **halb** là nửa giờ **trước** giờ kế tiếp: **halb acht = 7:30** (nửa đường tới 8 giờ), không phải 8:30.',
            table: 'Giờ | Cách nói\n3:15 | Viertel nach drei\n3:45 | Viertel vor vier\n7:30 | halb acht\n7:10 | zehn nach sieben\n7:50 | zehn vor acht',
            examples: [
              ['Es ist halb acht.', 'Bây giờ là bảy giờ rưỡi.'],
              ['Der Film beginnt um Viertel nach neun.', 'Phim bắt đầu lúc chín giờ mười lăm.'],
            ],
            exercises: [
              choose('7:30 = Es ist ___.', ['halb sieben', 'halb acht', 'sieben halb'], 'halb acht', {
                explain: 'halb acht = nửa giờ trước 8 giờ = 7:30.',
              }),
              choose('9:45 = Es ist Viertel ___ zehn.', ['nach', 'vor'], 'vor'),
              fill('4:10 = Es ist zehn {nach} vier.', 'Bốn giờ mười.'),
              fill('11:30 = Es ist {halb} zwölf.', 'Mười một giờ rưỡi.'),
            ],
          },
          {
            text_vi:
              'Khoảng thời gian: **eine Stunde** (một tiếng), **zwei Stunden**, **zehn Minuten**. **dauern** = kéo dài: Der Film dauert zwei Stunden. **beginnen** = bắt đầu. Các buổi: am Morgen, am Mittag, am Nachmittag, am Abend, nhưng **in der Nacht**.',
            examples: [
              ['Der Kurs dauert drei Stunden.', 'Khóa học kéo dài ba tiếng.'],
              ['Am Abend habe ich Zeit.', 'Buổi tối tôi rảnh.'],
            ],
            exercises: [
              fill('Der Film {dauert} zwei Stunden.', 'Bộ phim dài hai tiếng.'),
              choose('___ der Nacht schlafe ich.', ['Am', 'In', 'Um'], 'In', { vi: 'Ban đêm tôi ngủ.' }),
            ],
          },
        ],
        mixed: [
          translate('Mấy giờ rồi?', ['Wie spät ist es?', 'Wie viel Uhr ist es?']),
          choose('8:30 = ___', ['halb neun', 'halb acht', 'acht halb'], 'halb neun'),
          transform('Viết giờ theo cách nói thường ngày', 'Es ist 6:15.', ['Es ist Viertel nach sechs.']),
          order('Der Unterricht / beginnt / um neun.', 'Buổi học bắt đầu lúc chín giờ.'),
          fill('Ich habe um zehn einen {Termin}.', 'Tôi có cuộc hẹn lúc mười giờ.'),
        ],
      },
      dialogue: {
        title_de: 'Wann beginnt der Film?',
        lines: [
          { speaker: 'A', de: 'Entschuldigung, wie spät ist es?', vi: 'Xin lỗi, mấy giờ rồi?' },
          { speaker: 'B', de: 'Es ist Viertel nach sieben.', vi: 'Bảy giờ mười lăm.' },
          { speaker: 'A', de: 'Oh, der Film beginnt um halb acht!', vi: 'Ôi, phim bắt đầu lúc bảy rưỡi!' },
          { speaker: 'B', de: 'Welcher Film? Und wie lange dauert er?', vi: 'Phim gì? Dài bao lâu?' },
          { speaker: 'A', de: 'Berlin bei Nacht. Er dauert zwei Stunden.', vi: '„Berlin về đêm“. Phim dài hai tiếng.' },
          { speaker: 'B', de: 'Dann ist er um halb zehn zu Ende.', vi: 'Vậy chín rưỡi là hết.' },
          { speaker: 'A', de: 'Genau. Hast du jetzt Zeit? Kommst du mit?', vi: 'Đúng rồi. Bây giờ bạn rảnh không? Đi cùng nhé?' },
          { speaker: 'B', de: 'Nein, leider nicht. Ich habe um acht einen Termin.', vi: 'Không, tiếc là không. Tám giờ mình có hẹn.' },
        ],
        gloss: {
          oh: 'ôi',
          welcher: 'nào',
          'wie lange': 'bao lâu',
          bei: 'vào lúc, ở',
          dann: 'vậy thì',
          'zu Ende': 'kết thúc',
          genau: 'đúng vậy',
          mit: 'cùng (kommst du mit = đi cùng không)',
          leider: 'tiếc là',
          nicht: 'không',
        },
        questions: [
          mc('Bây giờ là mấy giờ?', ['7:15', '7:30', '6:45'], '7:15'),
          mc('Phim bắt đầu lúc mấy giờ?', ['7:30', '8:30', '7:15'], '7:30'),
          tf('Der Film dauert zwei Stunden.', true),
          tf('B hat Zeit und kommt mit.', false, { explain: 'Nein, leider nicht. Ich habe um acht einen Termin.' }),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Viết 4–5 câu về giờ giấc hôm nay của bạn: mấy giờ bạn học, làm việc, ăn tối; việc gì kéo dài bao lâu. Dùng um, halb, Viertel.',
    },
    {
      title_vi: 'Ngày, tuần, tháng',
      goal_vi: 'Nói thứ, tháng, ngày sinh nhật và hẹn gặp; dùng đúng am, um, im.',
      items: [
        'Tag', 'Woche', 'Monat', 'Wochenende', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag',
        'Januar', 'Februar', 'Mai', 'Juli', 'Dezember', 'Geburtstag', 'Datum', 'heute', 'morgen', 'gestern', 'am / um / im',
        'Wochentag', 'März', 'April', 'Juni', 'August', 'September', 'Oktober', 'November', 'Ende', 'zurzeit', 'später',
        'enden',
      ],
      grammar: {
        point: 'zeit-praep',
        sections: [
          {
            text_vi:
              'Ba giới từ thời gian hay nhầm: **um** + giờ (um acht Uhr); **am** + ngày trong tuần, ngày tháng, buổi (am Montag, am Wochenende, am Abend); **im** + tháng, mùa (im Mai, im Sommer). Ngoại lệ: **in der Nacht**. (am = an dem, im = in dem.)',
            table: 'Giới từ | Dùng với | Ví dụ\num | giờ | um halb neun\nam | ngày, buổi | am Freitag, am Morgen\nim | tháng, mùa | im Dezember',
            examples: [
              ['Am Montag beginnt der Kurs.', 'Thứ Hai khóa học bắt đầu.'],
              ['Im Juli fahre ich nach Deutschland.', 'Tháng Bảy tôi đi Đức.'],
            ],
            exercises: [
              choose('Wir treffen uns ___ Freitag.', ['am', 'um', 'im'], 'am', { vi: 'Chúng ta gặp nhau vào thứ Sáu.' }),
              choose('Der Kurs beginnt ___ neun Uhr.', ['am', 'um', 'im'], 'um', { vi: 'Khóa học bắt đầu lúc chín giờ.' }),
              fill('{Im} Februar feiern wir Tet.', 'Tháng Hai chúng tôi ăn Tết.'),
              choose('___ Wochenende schlafe ich lange.', ['Am', 'Im', 'Um'], 'Am', { vi: 'Cuối tuần tôi ngủ dậy muộn.' }),
            ],
          },
          {
            text_vi:
              'Nói hôm nay là thứ mấy không cần giới từ: **Heute ist Montag.** Hỏi: **Wann hast du Geburtstag?** – **Im Mai.** Hôm qua – hôm nay – ngày mai: **gestern – heute – morgen**. Chú ý: **morgen** (ngày mai, viết thường) khác **der Morgen** (buổi sáng).\n\nTừ chỉ thời gian đứng đầu câu thì động từ vẫn ở vị trí 2, chủ ngữ đứng sau: **Am Sonntag besuche ich** Freunde.',
            examples: [
              ['Wann hast du Geburtstag? – Im Dezember.', 'Bạn sinh nhật khi nào? – Tháng Mười hai.'],
              ['Morgen habe ich keine Zeit.', 'Ngày mai tôi không rảnh.'],
            ],
            exercises: [
              fill('Heute ist Dienstag, {morgen} ist Mittwoch.', 'Hôm nay thứ Ba, ngày mai thứ Tư.'),
              choose('Wann hast du Geburtstag? – ___ Juli.', ['Am', 'Im', 'Um'], 'Im', { vi: 'Bạn sinh nhật khi nào? – Tháng Bảy.' }),
              order('Am Sonntag / besuche / ich / Freunde.', 'Chủ nhật tôi đi thăm bạn bè.', {
                explain: 'Từ chỉ thời gian đứng đầu thì động từ ở vị trí 2, chủ ngữ đứng sau động từ.',
              }),
            ],
          },
        ],
        mixed: [
          translate('Thứ Sáu tôi có thời gian.', ['Am Freitag habe ich Zeit.', 'Ich habe am Freitag Zeit.']),
          choose('___ Morgen trinke ich Kaffee.', ['Am', 'Im', 'Um'], 'Am', { vi: 'Buổi sáng tôi uống cà phê.' }),
          fill('Der Termin ist {um} Viertel nach zehn.', 'Cuộc hẹn lúc mười giờ mười lăm.'),
          transform('Viết lại, bắt đầu bằng „Am Samstag“', 'Ich arbeite am Samstag nicht.', ['Am Samstag arbeite ich nicht.']),
          choose('___ Dezember ist Weihnachten.', ['Am', 'Im', 'Um'], 'Im', { vi: 'Tháng Mười hai là Giáng sinh.' }),
        ],
      },
      dialogue: {
        title_de: 'Hast du am Montag Zeit?',
        lines: [
          { speaker: 'A', de: 'Hast du am Montag Zeit?', vi: 'Thứ Hai bạn rảnh không?' },
          { speaker: 'B', de: 'Am Montag? Nein, am Montag arbeite ich bis sechs.', vi: 'Thứ Hai à? Không, thứ Hai mình làm đến sáu giờ.' },
          { speaker: 'A', de: 'Und am Mittwoch?', vi: 'Còn thứ Tư?' },
          { speaker: 'B', de: 'Am Mittwoch habe ich frei. Wann denn?', vi: 'Thứ Tư mình nghỉ. Mấy giờ?' },
          { speaker: 'A', de: 'Am Nachmittag, um drei?', vi: 'Buổi chiều, lúc ba giờ nhé?' },
          { speaker: 'B', de: 'Gut, um drei. Und am Wochenende ist mein Geburtstag!', vi: 'Được, ba giờ. À, cuối tuần là sinh nhật mình đấy!' },
          { speaker: 'A', de: 'Wirklich? Wann genau?', vi: 'Thật à? Chính xác là ngày nào?' },
          { speaker: 'B', de: 'Am Samstag. Kommst du?', vi: 'Thứ Bảy. Bạn đến nhé?' },
        ],
        gloss: { bis: 'đến (khi)', frei: 'nghỉ, rảnh', denn: 'vậy, thế (làm câu hỏi mềm hơn)', genau: 'chính xác' },
        questions: [
          tf('B hat am Montag Zeit.', false, { explain: 'Am Montag arbeite ich bis sechs.' }),
          mc('Họ hẹn gặp khi nào?', ['thứ Tư lúc 3 giờ chiều', 'thứ Hai lúc 6 giờ', 'thứ Bảy buổi sáng'], 'thứ Tư lúc 3 giờ chiều'),
          mc('Sinh nhật của B vào ngày nào?', ['thứ Bảy', 'Chủ nhật', 'thứ Tư'], 'thứ Bảy'),
          tf('Am Mittwoch hat B frei.', true),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Viết 5 câu về tuần của bạn: thứ mấy làm gì, lúc mấy giờ, tháng nào có sinh nhật ai. Dùng am, um, im.',
    },
  ],
  test: {
    grammar: {
      zahlen: [
        choose('23 = ___', ['dreiundzwanzig', 'zweiunddreißig', 'zwanzigdrei'], 'dreiundzwanzig'),
        fill('Ich bin {neunzehn}. (19)', 'Tôi 19 tuổi.'),
        choose('Er ist ___ Jahre alt. (31)', ['einunddreißig', 'einsunddreißig', 'dreißigeins'], 'einunddreißig'),
        fill('Das kostet {sechzig} Euro. (60)', 'Cái này giá 60 euro.'),
        choose('70 = ___', ['siebzig', 'siebenzig', 'sechzig'], 'siebzig'),
        order('Wie viel / kostet / das Buch?', 'Cuốn sách giá bao nhiêu?'),
      ],
      uhrzeit: [
        choose('6:30 = Es ist ___.', ['halb sieben', 'halb sechs', 'sechs halb'], 'halb sieben'),
        choose('2:15 = Es ist Viertel ___ zwei.', ['nach', 'vor'], 'nach'),
        fill('8:45 = Es ist Viertel {vor} neun.', 'Chín giờ kém mười lăm.'),
        fill('Wie spät {ist} es?', 'Mấy giờ rồi?'),
        order('Der Film / dauert / zwei Stunden.', 'Phim dài hai tiếng.'),
        choose('5:50 = Es ist zehn ___ sechs.', ['vor', 'nach'], 'vor'),
      ],
      'zeit-praep': [
        choose('Ich komme ___ sieben Uhr.', ['am', 'um', 'im'], 'um'),
        choose('___ Januar ist es kalt.', ['Am', 'Im', 'Um'], 'Im'),
        choose('___ Dienstag gehe ich schwimmen.', ['Am', 'Im', 'Um'], 'Am'),
        fill('{In} der Nacht schlafe ich.', 'Ban đêm tôi ngủ.'),
        fill('Wir lernen {am} Abend.', 'Chúng tôi học vào buổi tối.'),
        order('Am Freitag / gehen / wir / ins Kino.', 'Thứ Sáu chúng tôi đi xem phim.'),
      ],
    },
    reading: {
      title_de: 'Mein Wochenplan',
      text_de:
        'Ich heiße Lan und ich lerne Deutsch. Der Kurs ist am Montag, am Mittwoch und am Freitag. Er beginnt um halb neun und dauert drei Stunden. Um halb zwölf ist der Kurs zu Ende. Am Dienstag und am Donnerstag arbeite ich in einem Café, von zwei Uhr bis sieben Uhr. Am Abend lerne ich eine Stunde Wörter. Am Samstag schlafe ich lange und am Nachmittag besuche ich Freunde. Am Sonntag telefoniere ich mit meiner Familie in Vietnam. In Vietnam ist es dann sechs Stunden später. Im Juli habe ich Geburtstag. Dann habe ich zwei Wochen Urlaub und fliege nach Hause.',
      gloss: {
        Wochenplan: 'lịch tuần',
        'zu Ende': 'kết thúc',
        'von … bis': 'từ … đến',
        Wörter: 'từ vựng',
        telefoniere: 'gọi điện',
        später: 'muộn hơn',
        Urlaub: 'kỳ nghỉ',
        'fliege nach Hause': 'bay về nhà',
      },
      questions: [
        mc('Khóa học bắt đầu lúc mấy giờ?', ['8:30', '9:30', '11:30'], '8:30'),
        tf('Lan arbeitet am Montag im Café.', false, { explain: 'Lan làm ở quán cà phê vào thứ Ba và thứ Năm.' }),
        mc('Khóa học kéo dài bao lâu?', ['3 tiếng', '2 tiếng', '1 tiếng'], '3 tiếng'),
        tf('Lan hat im Juli Geburtstag.', true),
        tf('Am Sonntag besucht Lan Freunde.', false, { explain: 'Chủ nhật Lan gọi điện cho gia đình.' }),
      ],
    },
  },
});
