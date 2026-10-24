// A1 · 10 Cơ thể và sức khỏe — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a1-10',
  points: [
    {
      key: 'possessiv-akk',
      rule_key: 'possessiv-akkusativ',
      category: 'case',
      title_vi: 'Mạo từ sở hữu ở Akkusativ (meinen, deinen…) và Mir tut … weh',
      explanation_vi: 'Ở Akkusativ chỉ giống đực thêm -en: meinen, deinen, seinen. Nói chỗ đau: Mir tut der Kopf weh / Mir tun die Füße weh.',
    },
    {
      key: 'modal-pflicht',
      rule_key: 'modalverben-muessen-duerfen-sollen',
      category: 'conjugation',
      title_vi: 'müssen, dürfen, sollen; nicht dürfen ≠ nicht müssen',
      explanation_vi: 'ich muss/darf/soll, er muss/darf/soll (không đuôi). nicht dürfen = không được phép; nicht müssen = không cần phải.',
    },
    {
      key: 'imperativ-rat',
      rule_key: 'imperativ-ratschlag',
      category: 'conjugation',
      title_vi: 'Khuyên bảo bằng mệnh lệnh (Sie, du, ihr)',
      explanation_vi: 'Nehmen Sie! – Nimm! – Nehmt! Động từ đổi e → i giữ i ở du (nimm). Phản thân: Ruh dich aus! Ruhen Sie sich aus!',
    },
  ],
  lessons: [
    {
      title_vi: 'Tôi bị đau',
      goal_vi: 'Gọi tên các bộ phận cơ thể và nói mình đau ở đâu.',
      items: [
        'Körper', 'Kopf', 'Haar', 'Auge', 'Ohr', 'Nase', 'Mund', 'Hals', 'Arm', 'Hand', 'Finger', 'Bein', 'Fuß', 'Bauch',
        'Rücken', 'Schmerz', 'wehtun', 'stark', 'schlimm', 'Mir geht es nicht gut', 'Mir tut … weh',
      ],
      grammar: {
        point: 'possessiv-akk',
        sections: [
          {
            text_vi:
              'Nói chỗ đau: **Mein Kopf tut weh.** (Đầu tôi đau.) Số nhiều: **Meine Füße tun weh.** Cách nói tự nhiên hơn dùng **mir** (Dativ của ich): **Mir tut der Kopf weh.** – **Mir tun die Füße weh.** wehtun là động từ tách: es **tut** … **weh**.',
            table: 'Cách nói | Ví dụ\nMein … tut weh. | Mein Rücken tut weh.\nMir tut … weh. | Mir tut der Hals weh.\nsố nhiều | Mir tun die Augen weh.',
            examples: [
              ['Mein Bauch tut weh.', 'Bụng tôi đau.'],
              ['Mir tun die Beine weh.', 'Chân tôi đau.'],
            ],
            exercises: [
              fill('Mein Kopf {tut} weh.', 'Đầu tôi đau.'),
              choose('Mir ___ die Füße weh.', ['tut', 'tun'], 'tun', { vi: 'Bàn chân tôi đau.', explain: 'die Füße số nhiều → tun.' }),
              order('Mir / tut / der Rücken / weh.', 'Lưng tôi đau.'),
            ],
          },
          {
            text_vi:
              'Mạo từ sở hữu ở **Akkusativ** đổi giống ein → einen: chỉ **giống đực** thêm **-en**: mein → **meinen**, dein → **deinen**, sein → **seinen**. Giống cái, trung, số nhiều giữ nguyên: Ich wasche **meine** Hände. Ich brauche **meinen** Pass.',
            table: 'Giống | Nominativ | Akkusativ\nder | mein Arm | meinen Arm\ndas | mein Bein | mein Bein\ndie | meine Hand | meine Hand\nsố nhiều | meine Füße | meine Füße',
            examples: [
              ['Ich kann meinen Arm nicht bewegen.', 'Tôi không cử động được cánh tay.'],
              ['Wasch deine Hände!', 'Rửa tay đi!'],
            ],
            exercises: [
              choose('Ich brauche ___ Pass.', ['mein', 'meinen', 'meine'], 'meinen', { vi: 'Tôi cần hộ chiếu của tôi.' }),
              fill('Er wäscht {seine} Hände.', 'Anh ấy rửa tay.'),
              choose('Mach bitte ___ Mund auf.', ['dein', 'deinen'], 'deinen', { vi: 'Há miệng ra nào.' }),
            ],
          },
          {
            text_vi:
              'Mức độ: **stark** (mạnh): starke Schmerzen; **schlimm** (nghiêm trọng): Ist es schlimm? **Mir geht es nicht gut.** = Tôi không khỏe. **Mir ist schlecht.** = Tôi buồn nôn (không phải "tôi tệ").',
            examples: [
              ['Ich habe starke Kopfschmerzen.', 'Tôi đau đầu dữ dội.'],
              ['Ist es schlimm? – Nein, nicht so schlimm.', 'Có nghiêm trọng không? – Không, không đến nỗi.'],
            ],
            exercises: [
              translate('Tôi không khỏe.', ['Mir geht es nicht gut.', 'Es geht mir nicht gut.']),
              choose('Mir ist ___. Ich glaube, das Essen war nicht gut.', ['schlecht', 'stark'], 'schlecht', { vi: 'Tôi buồn nôn. Chắc đồ ăn không ổn.' }),
            ],
          },
        ],
        mixed: [
          transform('Nói bằng „Mir tut … weh“', 'Mein Hals tut weh.', ['Mir tut der Hals weh.']),
          choose('Ich wasche ___ Haare.', ['meine', 'meinen'], 'meine', { vi: 'Tôi gội đầu.' }),
          fill('Meine Nase {läuft}.', 'Tôi bị chảy nước mũi.'),
          translate('Lưng tôi đau.', ['Mein Rücken tut weh.', 'Mir tut der Rücken weh.']),
          choose('Siehst du ___ Bruder?', ['deinen', 'dein'], 'deinen', { vi: 'Bạn có thấy anh trai bạn không?' }),
        ],
      },
      dialogue: {
        title_de: 'Was ist los?',
        lines: [
          { speaker: 'A', de: 'Was ist los? Du siehst müde aus.', vi: 'Sao thế? Trông bạn mệt quá.' },
          { speaker: 'B', de: 'Mir geht es nicht gut. Mein Kopf tut weh.', vi: 'Mình không khỏe. Đầu mình đau.' },
          { speaker: 'A', de: 'Seit wann?', vi: 'Từ bao giờ?' },
          { speaker: 'B', de: 'Seit gestern. Und mir tut auch der Hals weh.', vi: 'Từ hôm qua. Họng mình cũng đau.' },
          { speaker: 'A', de: 'Hast du Fieber?', vi: 'Bạn có sốt không?' },
          { speaker: 'B', de: 'Ich glaube nicht. Aber meine Augen tun weh und ich bin so müde.', vi: 'Chắc không. Nhưng mắt mình đau và mình mệt lắm.' },
          { speaker: 'A', de: 'Das ist bestimmt eine Erkältung. Geh nach Hause und ruh dich aus!', vi: 'Chắc là cảm lạnh rồi. Về nhà nghỉ ngơi đi!' },
          { speaker: 'B', de: 'Ja, das mache ich. Danke!', vi: 'Ừ, mình sẽ làm vậy. Cảm ơn!' },
        ],
        gloss: {
          los: 'was ist los = có chuyện gì thế',
          'siehst … aus': 'trông (có vẻ)',
          seit: 'từ (khi)',
          Fieber: 'sốt',
          bestimmt: 'chắc chắn',
          Erkältung: 'cảm lạnh',
          'ruh dich aus': 'nghỉ ngơi đi',
        },
        questions: [
          mc('B đau ở đâu?', ['đầu, họng và mắt', 'bụng', 'lưng'], 'đầu, họng và mắt'),
          tf('B hat seit gestern Kopfschmerzen.', true),
          tf('B hat starkes Fieber.', false, { explain: 'Ich glaube nicht (B nghĩ là không sốt).' }),
          mc('A khuyên B làm gì?', ['về nhà nghỉ ngơi', 'đi bác sĩ ngay', 'uống cà phê'], 'về nhà nghỉ ngơi'),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi: 'Viết 4–5 câu: hôm nay bạn đau ở đâu (Mein … tut weh / Mir tut … weh) và cảm thấy thế nào.',
    },
    {
      title_vi: 'Ở phòng khám',
      goal_vi: 'Nói triệu chứng với bác sĩ, hiểu lời dặn: phải làm gì, không được làm gì.',
      items: [
        'Arzt', 'Praxis', 'Medikament', 'Tablette', 'Fieber', 'Erkältung', 'Husten', 'Schnupfen', 'Rezept',
        'Versichertenkarte', 'Krankmeldung', 'müssen', 'dürfen', 'sollen', 'rauchen', 'täglich', 'seit', 'Was fehlt Ihnen?',
        'müssen / dürfen / sollen', 'nicht dürfen = không được phép',
        'Hilfe',
      ],
      grammar: {
        point: 'modal-pflicht',
        sections: [
          {
            text_vi:
              '**müssen** (phải), **dürfen** (được phép), **sollen** (nên, phải theo lời người khác) là động từ khuyết thiếu: chia ở vị trí 2, động từ chính ở cuối câu. Ngôi ich và er/sie/es giống nhau, không đuôi: ich **muss**, er **muss**; ich **darf**; ich **soll**.',
            table: 'Đại từ | müssen | dürfen | sollen\nich | muss | darf | soll\ndu | musst | darfst | sollst\ner/sie/es | muss | darf | soll\nwir | müssen | dürfen | sollen',
            examples: [
              ['Du musst im Bett bleiben.', 'Bạn phải nằm nghỉ trên giường.'],
              ['Der Arzt sagt, ich soll viel Wasser trinken.', 'Bác sĩ bảo tôi nên uống nhiều nước.'],
            ],
            exercises: [
              fill('Ich {muss} zum Arzt gehen.', 'Tôi phải đi bác sĩ.'),
              choose('Er ___ dreimal täglich eine Tablette nehmen.', ['soll', 'sollst', 'sollen'], 'soll', { vi: 'Anh ấy nên uống thuốc ba lần mỗi ngày.' }),
              order('Du / musst / viel / schlafen.', 'Bạn phải ngủ nhiều.'),
            ],
          },
          {
            text_vi:
              'Bẫy lớn: **nicht dürfen** = **không được phép** (cấm): Sie **dürfen nicht** rauchen. Còn **nicht müssen** = **không cần phải**: Sie **müssen nicht** kommen (không đến cũng được). Tiếng Việt "không phải" dễ dịch nhầm thành nicht müssen khi muốn nói "cấm".',
            table: 'Câu | Nghĩa\nSie dürfen nicht rauchen. | không được hút thuốc\nSie müssen nicht kommen. | không cần đến',
            examples: [
              ['Hier darf man nicht rauchen.', 'Ở đây không được hút thuốc.'],
              ['Morgen muss ich nicht arbeiten.', 'Mai tôi không phải đi làm.'],
            ],
            exercises: [
              choose('Sie haben Fieber. Sie ___ nicht arbeiten.', ['dürfen', 'müssen'], 'dürfen', {
                vi: 'Ông bị sốt. Ông không được đi làm.',
                explain: 'Bác sĩ cấm đi làm → nicht dürfen.',
              }),
              choose('Es ist Sonntag. Ich ___ nicht früh aufstehen.', ['muss', 'darf'], 'muss', {
                vi: 'Hôm nay Chủ nhật. Tôi không cần dậy sớm.',
                explain: 'Không cần dậy sớm → nicht müssen.',
              }),
              fill('Hier {darf} man nicht rauchen.', 'Ở đây không được hút thuốc.'),
            ],
          },
          {
            text_vi:
              'Ở phòng khám, bác sĩ hỏi **Was fehlt Ihnen?** (Ông/bà bị làm sao?). Trả lời: **Ich habe Fieber / Husten / eine Erkältung.** Nói thời gian: **seit** + Dativ: seit drei Tagen, seit gestern. Uống thuốc: **zweimal täglich** (hai lần mỗi ngày).',
            examples: [
              ['Ich habe seit zwei Tagen Husten.', 'Tôi bị ho hai ngày nay.'],
              ['Nehmen Sie die Tabletten dreimal täglich.', 'Uống thuốc ba lần mỗi ngày.'],
            ],
            exercises: [
              fill('Ich habe {seit} gestern Fieber.', 'Tôi bị sốt từ hôm qua.'),
              translate('Tôi bị cảm lạnh.', ['Ich habe eine Erkältung.']),
            ],
          },
        ],
        mixed: [
          transform('Thêm „müssen“', 'Ich bleibe im Bett.', ['Ich muss im Bett bleiben.']),
          translate('Bạn không được hút thuốc.', ['Du darfst nicht rauchen.', 'Sie dürfen nicht rauchen.']),
          choose('___ ich hier parken? – Ja, das ist kein Problem.', ['Darf', 'Muss', 'Soll'], 'Darf', { vi: 'Tôi đỗ xe ở đây được không? – Được, không sao.' }),
          fill('Der Arzt sagt, ich {soll} viel trinken.', 'Bác sĩ bảo tôi nên uống nhiều nước.'),
          order('Haben / Sie / Ihre Versichertenkarte / dabei?', 'Ông/bà có mang thẻ bảo hiểm không?'),
        ],
      },
      dialogue: {
        title_de: 'In der Praxis',
        lines: [
          { speaker: 'A', de: 'Guten Tag, Frau Nguyen. Was fehlt Ihnen?', vi: 'Chào chị Nguyen. Chị bị làm sao?' },
          { speaker: 'B', de: 'Ich habe seit drei Tagen Husten und Fieber.', vi: 'Tôi bị ho và sốt ba ngày nay.' },
          { speaker: 'A', de: 'Haben Sie auch Kopfschmerzen?', vi: 'Chị có đau đầu không?' },
          { speaker: 'B', de: 'Ja, und mein Hals tut weh.', vi: 'Có, và họng tôi đau.' },
          { speaker: 'A', de: 'Sie haben eine Erkältung. Sie müssen viel trinken und im Bett bleiben.', vi: 'Chị bị cảm lạnh. Chị phải uống nhiều nước và nằm nghỉ.' },
          { speaker: 'B', de: 'Darf ich arbeiten?', vi: 'Tôi có được đi làm không?' },
          { speaker: 'A', de: 'Nein, Sie dürfen diese Woche nicht arbeiten. Hier ist Ihre Krankmeldung.', vi: 'Không, tuần này chị không được đi làm. Đây là giấy báo ốm.' },
          { speaker: 'B', de: 'Muss ich Tabletten nehmen?', vi: 'Tôi có phải uống thuốc không?' },
          { speaker: 'A', de: 'Ja, hier ist das Rezept. Nehmen Sie die Tabletten dreimal täglich.', vi: 'Có, đây là đơn thuốc. Uống thuốc ba lần mỗi ngày.' },
        ],
        gloss: { Kopfschmerzen: 'đau đầu', diese: 'này (diese Woche = tuần này)', Tabletten: 'thuốc viên', dreimal: 'ba lần' },
        questions: [
          mc('Chị Nguyen bị ho bao lâu rồi?', ['3 ngày', '1 tuần', 'từ hôm qua'], '3 ngày'),
          tf('Frau Nguyen darf diese Woche arbeiten.', false),
          mc('Bác sĩ khuyên gì?', ['uống nhiều nước và nằm nghỉ', 'tập thể dục', 'đi làm bình thường'], 'uống nhiều nước và nằm nghỉ'),
          tf('Sie soll die Tabletten dreimal täglich nehmen.', true),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Bạn bị ốm. Viết 5 câu: bạn bị gì, từ khi nào (seit), bác sĩ nói bạn phải và không được làm gì (müssen, dürfen, sollen).',
    },
    {
      title_vi: 'Mau khỏe nhé!',
      goal_vi: 'Khuyên người ốm bằng mệnh lệnh cách và chúc mau khỏe.',
      items: [
        'Gesundheit', 'helfen', 'liegen bleiben', 'sich ausruhen', 'krank', 'gesund', 'schlecht', 'gut', 'wieder',
        'Gute Besserung', 'Mệnh lệnh cách số nhiều ihr',
      ],
      grammar: {
        point: 'imperativ-rat',
        sections: [
          {
            text_vi:
              'Khuyên bảo bằng mệnh lệnh. Với **Sie**: **Nehmen Sie** die Tabletten! Với **du**: **Nimm** die Tabletten! (nehmen đổi e → i: du nimmst → Nimm!). Với **ihr**: **Bleibt** zu Hause! (ihr bleibt → Bleibt!). Thêm **bitte** hoặc **doch** cho mềm: Trink **doch** einen Tee!',
            table: 'Sie | du | ihr\nNehmen Sie! | Nimm! | Nehmt!\nTrinken Sie! | Trink! | Trinkt!\nBleiben Sie! | Bleib! | Bleibt!',
            examples: [
              ['Trinken Sie viel Wasser!', 'Ông/bà uống nhiều nước nhé!'],
              ['Kinder, bleibt heute zu Hause!', 'Các con, hôm nay ở nhà nhé!'],
            ],
            exercises: [
              choose('Herr Klein, ___ Sie bitte die Tabletten!', ['nehmen', 'nimm', 'nehmt'], 'nehmen', { vi: 'Ông Klein, ông uống thuốc nhé!' }),
              choose('Lisa, ___ viel Tee!', ['trink', 'trinken', 'trinkt'], 'trink', { vi: 'Lisa, uống nhiều trà vào!' }),
              fill('Kinder, {bleibt} bitte im Bett!', 'Các con, nằm trên giường nhé!'),
            ],
          },
          {
            text_vi:
              'Động từ phản thân **sich ausruhen** (nghỉ ngơi) ở mệnh lệnh: **Ruhen Sie sich aus!** – **Ruh dich aus!** – **Ruht euch aus!** **helfen** đi với Dativ: Können Sie **mir** helfen? Chúc người ốm: **Gute Besserung!** Khi ai hắt hơi: **Gesundheit!**',
            examples: [
              ['Ruh dich aus und trink viel!', 'Nghỉ ngơi và uống nhiều nước nhé!'],
              ['Gute Besserung!', 'Chúc mau khỏe!'],
            ],
            exercises: [
              choose('Du bist krank. ___ dich aus!', ['Ruh', 'Ruhen', 'Ruht'], 'Ruh', { vi: 'Bạn ốm rồi. Nghỉ ngơi đi!' }),
              fill('Können Sie mir {helfen}?', 'Ông/bà giúp tôi được không?'),
              choose('Hatschi! – ___!', ['Gesundheit', 'Gute Besserung', 'Guten Appetit'], 'Gesundheit', { vi: 'Hắt xì! – Sống lâu nhé!' }),
            ],
          },
        ],
        mixed: [
          transform('Đổi sang mệnh lệnh với Sie', 'Nimm eine Tablette.', ['Nehmen Sie eine Tablette.']),
          transform('Đổi sang mệnh lệnh với du', 'Bleiben Sie im Bett.', ['Bleib im Bett.']),
          translate('Chúc mau khỏe!', ['Gute Besserung!']),
          choose('Ich bin ___ gesund.', ['wieder', 'seit'], 'wieder', { vi: 'Tôi đã khỏe lại.' }),
          order('Trinken / Sie / viel / Wasser!', 'Ông/bà uống nhiều nước nhé!'),
        ],
      },
      dialogue: {
        title_de: 'Gute Besserung!',
        lines: [
          { speaker: 'A', de: 'Hallo Anna! Ich habe gehört, du bist krank.', vi: 'Chào Anna! Mình nghe nói bạn bị ốm.' },
          { speaker: 'B', de: 'Ja, ich habe eine Erkältung. Mir geht es nicht gut.', vi: 'Ừ, mình bị cảm. Mình không khỏe.' },
          { speaker: 'A', de: 'Oh, das tut mir leid! Brauchst du etwas?', vi: 'Ôi, tội bạn quá! Bạn cần gì không?' },
          { speaker: 'B', de: 'Kannst du mir helfen? Ich habe keine Tabletten mehr.', vi: 'Bạn giúp mình được không? Mình hết thuốc rồi.' },
          { speaker: 'A', de: 'Natürlich! Ich gehe gleich zur Apotheke. Bleib im Bett und ruh dich aus!', vi: 'Tất nhiên! Mình ra hiệu thuốc ngay. Bạn cứ nằm nghỉ đi!' },
          { speaker: 'B', de: 'Danke, du bist so nett!', vi: 'Cảm ơn, bạn tốt quá!' },
          { speaker: 'A', de: 'Und trink viel Tee mit Honig. Gute Besserung!', vi: 'Uống nhiều trà mật ong nhé. Mau khỏe nhé!' },
          { speaker: 'B', de: 'Danke! Morgen bin ich bestimmt wieder gesund.', vi: 'Cảm ơn! Mai chắc chắn mình khỏe lại.' },
        ],
        gloss: { gehört: 'đã nghe', 'tut mir leid': 'tôi rất tiếc', etwas: 'cái gì đó', natürlich: 'tất nhiên', Honig: 'mật ong' },
        questions: [
          tf('Anna ist krank.', true),
          mc('Anna cần gì?', ['thuốc viên', 'trà', 'bác sĩ'], 'thuốc viên'),
          mc('A sẽ làm gì?', ['đi hiệu thuốc', 'đưa Anna đi bác sĩ', 'nấu súp'], 'đi hiệu thuốc'),
          tf('A sagt: Trink viel Kaffee.', false, { explain: 'Trink viel Tee mit Honig.' }),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Một người bạn bị ốm. Viết tin nhắn 4–5 câu: hỏi thăm, khuyên (Bleib…, Trink…, Ruh dich aus!) và chúc mau khỏe.',
    },
  ],
  test: {
    grammar: {
      'possessiv-akk': [
        choose('Ich suche ___ Pass.', ['meinen', 'mein'], 'meinen'),
        fill('Wasch {deine} Hände!', 'Rửa tay đi!'),
        choose('Mir ___ der Kopf weh.', ['tut', 'tun'], 'tut'),
        choose('Mir ___ die Augen weh.', ['tun', 'tut'], 'tun'),
        fill('Er sucht {seinen} Koffer.', 'Anh ấy tìm va li của mình.'),
        order('Mein Rücken / tut / weh.', 'Lưng tôi đau.'),
      ],
      'modal-pflicht': [
        fill('Du {musst} zum Arzt gehen.', 'Bạn phải đi bác sĩ.'),
        choose('Hier ___ man nicht rauchen.', ['darf', 'muss'], 'darf'),
        choose('Der Arzt sagt, ich ___ viel Wasser trinken.', ['soll', 'sollst'], 'soll'),
        order('Sie / müssen / im Bett / bleiben.', 'Ông/bà phải nằm nghỉ.'),
        choose('Morgen ist frei. Ich ___ nicht arbeiten.', ['muss', 'darf'], 'muss'),
        fill('{Darf} ich hier parken?', 'Tôi đỗ xe ở đây được không?'),
      ],
      'imperativ-rat': [
        choose('___ Sie bitte die Tabletten!', ['Nehmen', 'Nimm'], 'Nehmen'),
        choose('Anna, ___ im Bett!', ['bleib', 'bleibt', 'bleiben'], 'bleib'),
        fill('Kinder, {trinkt} viel Wasser!', 'Các con, uống nhiều nước vào!'),
        choose('Du bist müde. ___ dich aus!', ['Ruh', 'Ruht'], 'Ruh'),
        order('Trinken / Sie / viel / Tee!', 'Ông/bà uống nhiều trà nhé!'),
        fill('{Nimm} die Tabletten, Tom!', 'Tom, uống thuốc đi!'),
      ],
    },
    reading: {
      title_de: 'Eine E-Mail an die Chefin',
      text_de:
        'Liebe Frau Schulz, leider kann ich heute nicht zur Arbeit kommen. Mir geht es seit gestern Abend nicht gut. Ich habe Fieber, Husten und starke Kopfschmerzen. Heute Morgen war ich beim Arzt. Er sagt, ich habe eine Grippe. Ich muss eine Woche im Bett bleiben und darf nicht arbeiten. Ich soll viel trinken und dreimal täglich ein Medikament nehmen. Die Krankmeldung schicke ich Ihnen heute per Post. Können Sie bitte Herrn Meier sagen, dass er meine Termine am Montag übernimmt? Vielen Dank und viele Grüße, Thu Pham',
      gloss: {
        Liebe: 'Thân gửi (chị/bà)',
        war: 'đã (quá khứ của sein)',
        'beim Arzt': 'ở chỗ bác sĩ',
        Grippe: 'cúm',
        'schicke … per Post': 'gửi qua bưu điện',
        sagen: 'nói',
        dass: 'rằng',
        übernimmt: 'đảm nhận thay',
        'viele Grüße': 'thân ái',
      },
      questions: [
        tf('Thu kann heute arbeiten.', false),
        mc('Thu bị gì?', ['cúm', 'đau chân', 'đau bụng'], 'cúm'),
        mc('Thu phải nằm nghỉ bao lâu?', ['1 tuần', '3 ngày', '2 tuần'], '1 tuần'),
        tf('Thu schickt die Krankmeldung per Post.', true),
      ],
    },
  },
});
