// A2 · 05 Sức khỏe và lối sống — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a2-05',
  points: [
    {
      key: 'reflexiv-akk',
      rule_key: 'reflexivpronomen-akkusativ',
      category: 'other',
      title_vi: 'Động từ phản thân: mich, dich, sich, uns, euch',
      explanation_vi: 'sich fühlen, sich bewegen, sich entspannen… cần đại từ phản thân theo ngôi: mich, dich, sich, uns, euch, sich. Perfekt luôn với haben.',
    },
    {
      key: 'reflexiv-dat',
      rule_key: 'reflexivpronomen-dativ',
      category: 'case',
      title_vi: 'Đại từ phản thân Dativ: mir, dir (khi đã có tân ngữ)',
      explanation_vi: 'Có tân ngữ Akkusativ khác thì phản thân chuyển sang Dativ: Ich wasche mich ↔ Ich wasche mir die Hände. Chỉ ich, du đổi: mir, dir.',
    },
    {
      key: 'deshalb',
      rule_key: 'deshalb-inversion',
      category: 'verb_position',
      title_vi: 'deshalb: kết quả, động từ đứng ngay sau',
      explanation_vi: 'deshalb ở vị trí 1 nên động từ đứng ngay sau: …, deshalb bleibe ich zu Hause. weil nêu nguyên nhân, động từ cuối câu.',
    },
  ],
  lessons: [
    {
      title_vi: 'Sống khỏe',
      goal_vi: 'Nói về lối sống: vận động, ăn uống, thư giãn; dùng động từ phản thân.',
      items: [
        'Ernährung', 'Bewegung', 'Gewicht', 'Diät', 'Vitamin', 'Schlaf', 'Fitnessstudio', 'Gewohnheit', 'sich bewegen',
        'sich ernähren', 'sich entspannen', 'sich fühlen', 'abnehmen', 'zunehmen', 'fit', 'regelmäßig', 'entspannt',
        'in Form bleiben', 'Động từ phản thân: mich, dich, sich',
      ],
      grammar: {
        point: 'reflexiv-akk',
        sections: [
          {
            text_vi:
              '**Động từ phản thân** đi với đại từ chỉ chính chủ ngữ: **sich** fühlen (cảm thấy), **sich** bewegen (vận động), **sich** entspannen (thư giãn). Đại từ đổi theo ngôi: ich → **mich**, du → **dich**, er/sie/es → **sich**, wir → **uns**, ihr → **euch**, sie/Sie → **sich**. Tiếng Việt nói "Tôi thư giãn", tiếng Đức bắt buộc có đại từ.',
            table: 'Ngôi | Đại từ phản thân\nich | mich\ndu | dich\ner/sie/es | sich\nwir | uns\nihr | euch\nsie/Sie | sich',
            examples: [
              ['Ich fühle mich heute fit.', 'Hôm nay tôi thấy khỏe khoắn.'],
              ['Am Wochenende entspannen wir uns.', 'Cuối tuần chúng tôi thư giãn.'],
            ],
            exercises: [
              fill('Ich fühle {mich} gut.', 'Tôi thấy khỏe.'),
              choose('Du solltest ___ mehr bewegen.', ['dich', 'sich', 'mich'], 'dich', { vi: 'Bạn nên vận động nhiều hơn.' }),
              choose('Sie ernährt ___ sehr gesund.', ['sich', 'ihr', 'sie'], 'sich', { vi: 'Cô ấy ăn uống rất lành mạnh.' }),
            ],
          },
          {
            text_vi:
              'Đại từ phản thân đứng **ngay sau động từ chia**, hoặc sau chủ ngữ khi đảo ngữ: Ich **entspanne mich** am Abend. – Am Abend **entspanne ich mich**. Với động từ khuyết thiếu: Du **musst dich** mehr **bewegen**. Ở Perfekt luôn dùng **haben**: Ich **habe mich** entspannt.',
            examples: [
              ['Am Abend entspanne ich mich mit Musik.', 'Buổi tối tôi thư giãn với âm nhạc.'],
              ['Wir haben uns im Urlaub gut entspannt.', 'Kỳ nghỉ chúng tôi đã thư giãn thoải mái.'],
            ],
            exercises: [
              order('Am Abend / entspanne / ich / mich.', 'Buổi tối tôi thư giãn.'),
              fill('Wir müssen {uns} mehr bewegen.', 'Chúng ta phải vận động nhiều hơn.'),
              choose('Ich ___ mich gestern sehr gut gefühlt.', ['habe', 'bin'], 'habe', { vi: 'Hôm qua tôi thấy rất khỏe.' }),
            ],
          },
          {
            text_vi:
              'Giữ sức khỏe: **regelmäßig** Sport machen, **in Form bleiben** (giữ dáng), **abnehmen** (giảm cân) – **zunehmen** (tăng cân), đều là động từ tách: Ich möchte fünf Kilo **abnehmen**. Im Urlaub habe ich **zugenommen**.',
            examples: [['Ich gehe regelmäßig ins Fitnessstudio.', 'Tôi đi tập gym đều đặn.']],
            exercises: [
              fill('Im Urlaub habe ich drei Kilo {zugenommen}.', 'Kỳ nghỉ tôi tăng ba ký.'),
              translate('Bạn giữ dáng thế nào?', ['Wie bleibst du in Form?']),
            ],
          },
        ],
        mixed: [
          choose('Fühlt ihr ___ wohl?', ['euch', 'sich', 'uns'], 'euch', { vi: 'Các bạn thấy ổn không?' }),
          transform('Đổi chủ ngữ thành „er“', 'Ich entspanne mich im Garten.', ['Er entspannt sich im Garten.']),
          translate('Tôi thấy khỏe khoắn.', ['Ich fühle mich fit.']),
          fill('Du ernährst {dich} zu ungesund.', 'Bạn ăn uống quá thiếu lành mạnh.'),
          order('Wir / bewegen / uns / zu wenig.', 'Chúng ta vận động quá ít.'),
        ],
      },
      dialogue: {
        title_de: 'Gesund leben',
        lines: [
          { speaker: 'A', de: 'Du siehst fit aus! Wie bleibst du in Form?', vi: 'Trông bạn khỏe thế! Bạn giữ dáng thế nào?' },
          { speaker: 'B', de: 'Ich gehe dreimal pro Woche ins Fitnessstudio und ernähre mich gesund.', vi: 'Mỗi tuần mình đi gym ba lần và ăn uống lành mạnh.' },
          { speaker: 'A', de: 'Ich bewege mich zu wenig. Ich sitze den ganzen Tag im Büro.', vi: 'Mình vận động quá ít. Cả ngày ngồi ở văn phòng.' },
          { speaker: 'B', de: 'Dann fahr doch mit dem Fahrrad zur Arbeit!', vi: 'Thế thì đạp xe đi làm đi!' },
          { speaker: 'A', de: 'Gute Idee. Und was isst du?', vi: 'Ý hay. Còn bạn ăn gì?' },
          { speaker: 'B', de: 'Viel Obst und Gemüse, wenig Zucker. Und ich schlafe genug.', vi: 'Nhiều trái cây và rau, ít đường. Và mình ngủ đủ.' },
          { speaker: 'A', de: 'Ich habe im Winter fünf Kilo zugenommen.', vi: 'Mùa đông mình tăng năm ký.' },
          { speaker: 'B', de: 'Keine Sorge! Mit Bewegung nimmst du schnell wieder ab.', vi: 'Đừng lo! Vận động là bạn sẽ giảm lại nhanh thôi.' },
        ],
        gloss: { wenig: 'ít', ganzen: 'cả (den ganzen Tag = cả ngày)', genug: 'đủ', 'Keine Sorge': 'đừng lo' },
        questions: [
          mc('B đi tập gym bao lâu một lần?', ['3 lần một tuần', 'mỗi ngày', '1 lần một tuần'], '3 lần một tuần'),
          tf('A bewegt sich viel.', false, { explain: 'Ich bewege mich zu wenig.' }),
          mc('B khuyên A làm gì?', ['đạp xe đi làm', 'ăn kiêng', 'ngủ nhiều hơn'], 'đạp xe đi làm'),
          tf('A hat im Winter zugenommen.', true),
        ],
        dictation: [2, 4],
      },
      writing_prompt_vi:
        'Viết 5 câu về lối sống của bạn: vận động, ăn uống, thư giãn thế nào (sich bewegen, sich ernähren, sich entspannen, sich fühlen).',
    },
    {
      title_vi: 'Bị thương, bị ốm',
      goal_vi: 'Kể mình bị thương hay ốm ra sao; dùng mir/dir khi nói về bộ phận cơ thể.',
      items: [
        'Zahnarzt', 'Wartezimmer', 'Pflaster', 'Salbe', 'Spritze', 'Haut', 'Herz', 'Magen', 'Blut', 'Lunge', 'sich verletzen',
        'sich erkälten', 'untersuchen', 'husten', 'verletzt', 'schwach', 'Ich fühle mich nicht wohl',
        'Đại từ phản thân Dativ: mir, dir',
      ],
      grammar: {
        point: 'reflexiv-dat',
        sections: [
          {
            text_vi:
              'Khi câu **đã có tân ngữ Akkusativ khác**, đại từ phản thân chuyển sang **Dativ**: Ich wasche **mich**. (tắm rửa) – Ich wasche **mir** die Hände. (rửa tay). Chỉ ngôi **ich** và **du** đổi: **mir, dir**; các ngôi khác giữ nguyên (sich, uns, euch).',
            table: 'Ngôi | Akkusativ | Dativ\nich | mich | mir\ndu | dich | dir\ner/sie | sich | sich\nwir | uns | uns',
            examples: [
              ['Ich putze mir die Zähne.', 'Tôi đánh răng.'],
              ['Wasch dir die Hände!', 'Rửa tay đi!'],
            ],
            exercises: [
              choose('Ich putze ___ die Zähne.', ['mir', 'mich'], 'mir', { vi: 'Tôi đánh răng.' }),
              choose('Ich wasche ___.', ['mich', 'mir'], 'mich', { vi: 'Tôi tắm rửa.' }),
              fill('Wasch {dir} die Hände!', 'Rửa tay đi!'),
            ],
          },
          {
            text_vi:
              'Tiếng Đức dùng phản thân Dativ cho bộ phận cơ thể, không dùng sở hữu như tiếng Việt: Ich habe **mir** den Arm gebrochen. (Tôi bị gãy tay; không nói "meinen Arm".) Nhưng: **sich verletzen** (bị thương), **sich erkälten** (bị cảm) không có tân ngữ khác nên dùng Akk: Ich habe **mich** erkältet.',
            examples: [
              ['Er hat sich beim Fußball verletzt.', 'Anh ấy bị thương khi đá bóng.'],
              ['Ich habe mir den Fuß verletzt.', 'Tôi bị đau chân.'],
            ],
            exercises: [
              choose('Ich habe ___ den Arm gebrochen.', ['mir', 'mich', 'mein'], 'mir', { vi: 'Tôi bị gãy tay.' }),
              fill('Ich habe {mich} erkältet.', 'Tôi bị cảm.'),
              choose('Hast du ___ verletzt?', ['dich', 'dir'], 'dich', { vi: 'Bạn có bị thương không?' }),
            ],
          },
          {
            text_vi:
              'Ở phòng khám: **untersuchen** (khám): Die Ärztin untersucht **mich**. **Ich fühle mich nicht wohl.** = Tôi thấy không khỏe. Dùng: ein **Pflaster** (băng dán), eine **Salbe** (thuốc mỡ), eine **Spritze** (mũi tiêm).',
            examples: [['Ich habe einen Termin beim Zahnarzt.', 'Tôi có hẹn với nha sĩ.']],
            exercises: [
              translate('Tôi thấy không khỏe.', ['Ich fühle mich nicht wohl.', 'Ich fühle mich nicht gut.']),
              order('Die Ärztin / untersucht / den Patienten.', 'Bác sĩ khám cho bệnh nhân.'),
            ],
          },
        ],
        mixed: [
          transform('Đổi chủ ngữ thành „ich“', 'Er putzt sich die Zähne.', ['Ich putze mir die Zähne.']),
          choose('Wäschst du ___ die Haare?', ['dir', 'dich'], 'dir', { vi: 'Bạn gội đầu à?' }),
          translate('Tôi đánh răng.', ['Ich putze mir die Zähne.']),
          fill('Wir waschen {uns} die Hände.', 'Chúng tôi rửa tay.'),
          choose('Er hat ___ beim Sport verletzt.', ['sich', 'ihm'], 'sich', { vi: 'Anh ấy bị thương khi chơi thể thao.' }),
        ],
      },
      dialogue: {
        title_de: 'Im Wartezimmer',
        lines: [
          { speaker: 'A', de: 'Was ist passiert? Warum bist du hier im Wartezimmer?', vi: 'Có chuyện gì vậy? Sao bạn ở phòng chờ?' },
          { speaker: 'B', de: 'Ich habe mir beim Fußball den Fuß verletzt. Und du?', vi: 'Mình bị đau chân khi đá bóng. Còn bạn?' },
          { speaker: 'A', de: 'Ich habe mich erkältet und huste seit einer Woche.', vi: 'Mình bị cảm và ho cả tuần nay.' },
          { speaker: 'B', de: 'Du Arme! Fühlst du dich schwach?', vi: 'Tội bạn! Bạn có thấy yếu không?' },
          { speaker: 'A', de: 'Ja, ziemlich. Die Ärztin untersucht mich gleich.', vi: 'Có, khá yếu. Bác sĩ sắp khám cho mình.' },
          { speaker: 'B', de: 'Ich bekomme bestimmt eine Salbe und ein Pflaster.', vi: 'Chắc mình sẽ được thuốc mỡ và băng dán.' },
          { speaker: 'A', de: 'Hoffentlich ist es nicht schlimm.', vi: 'Mong là không nghiêm trọng.' },
          { speaker: 'B', de: 'Nein, nein. Aber ich darf zwei Wochen keinen Sport machen.', vi: 'Không đâu. Nhưng mình không được chơi thể thao hai tuần.' },
        ],
        gloss: { einer: 'một (Dativ, seit einer Woche)', Arme: 'tội nghiệp (du Arme!)', ziemlich: 'khá', Ärztin: 'bác sĩ (nữ)', hoffentlich: 'mong là' },
        questions: [
          mc('B bị gì?', ['đau chân khi đá bóng', 'cảm', 'đau răng'], 'đau chân khi đá bóng'),
          tf('A hustet seit einer Woche.', true),
          tf('B darf weiter Fußball spielen.', false, { explain: 'Ich darf zwei Wochen keinen Sport machen.' }),
          mc('B nghĩ mình sẽ được gì?', ['thuốc mỡ và băng dán', 'mũi tiêm', 'thuốc viên'], 'thuốc mỡ và băng dán'),
        ],
        dictation: [1, 2],
      },
      writing_prompt_vi:
        'Kể một lần bạn bị thương hoặc bị ốm (5 câu): Ich habe mir … verletzt / Ich habe mich erkältet …, rồi bạn đã làm gì.',
    },
    {
      title_vi: 'Nguyên nhân và kết quả',
      goal_vi: 'Nói nguyên nhân (weil) và kết quả (deshalb) khi bàn về sức khỏe.',
      items: [
        'Stress', 'Verletzung', 'Allergie', 'Notaufnahme', 'achten auf', 'aufpassen', 'schaden', 'dick', 'dünn',
        'ungesund', 'nervös', 'deshalb', 'genug', 'ziemlich', 'deshalb: kết quả, động từ ngay sau', 'weil hay deshalb?',
      ],
      grammar: {
        point: 'deshalb',
        sections: [
          {
            text_vi:
              '**deshalb** (vì vậy) nối hai câu chính và nêu **kết quả**. deshalb đứng **vị trí 1** của câu sau, nên **động từ theo ngay sau**, rồi mới đến chủ ngữ: Ich habe Fieber, **deshalb bleibe ich** im Bett. Cùng nghĩa: darum, deswegen.',
            table: 'Vị trí 1 | Vị trí 2 | Phần còn lại\ndeshalb | bleibe | ich im Bett.\ndeshalb | gehe | ich zum Arzt.',
            examples: [['Ich habe Stress, deshalb schlafe ich schlecht.', 'Tôi bị căng thẳng nên ngủ không ngon.']],
            exercises: [
              order('Ich bin krank, / deshalb / bleibe / ich / zu Hause.', 'Tôi ốm nên ở nhà.'),
              choose('Ich habe eine Allergie, deshalb ___ keine Nüsse.', ['esse ich', 'ich esse'], 'esse ich', { vi: 'Tôi bị dị ứng nên không ăn các loại hạt.' }),
              fill('Er ist nervös, deshalb {schläft} er schlecht.', 'Anh ấy lo lắng nên ngủ không ngon.'),
            ],
          },
          {
            text_vi:
              '**weil** hay **deshalb**? **weil** nêu **nguyên nhân**, động từ ở **cuối**: Ich bleibe zu Hause, **weil** ich krank **bin**. **deshalb** nêu **kết quả**, động từ **ngay sau**: Ich bin krank, **deshalb bleibe** ich zu Hause. Cùng một ý, chỉ đổi chỗ nguyên nhân và kết quả.',
            table: 'Từ | Nêu | Ví dụ\nweil | nguyên nhân | …, weil ich krank bin.\ndeshalb | kết quả | …, deshalb bleibe ich zu Hause.',
            examples: [['Zucker schadet den Zähnen, deshalb esse ich wenig Süßes.', 'Đường hại răng nên tôi ít ăn đồ ngọt.']],
            exercises: [
              transform('Viết lại với deshalb', 'Ich gehe zum Arzt, weil ich Fieber habe.', ['Ich habe Fieber, deshalb gehe ich zum Arzt.']),
              choose('Ich trinke viel Wasser, ___ es gesund ist.', ['weil', 'deshalb'], 'weil', { vi: 'Tôi uống nhiều nước vì nó tốt cho sức khỏe.' }),
              choose('Rauchen ist ungesund, ___ rauche ich nicht.', ['deshalb', 'weil'], 'deshalb', { vi: 'Hút thuốc có hại nên tôi không hút.' }),
            ],
          },
          {
            text_vi:
              'Cảnh báo, chú ý: **Pass auf!** (cẩn thận!). **achten auf** + Akk: Ich **achte auf** meine Gesundheit. **schaden** + Dativ (gây hại): Zu viel Zucker **schadet** den Zähnen. **genug** (đủ), **ziemlich** (khá): Ich schlafe nicht **genug**.',
            examples: [['Pass auf, die Treppe ist glatt!', 'Cẩn thận, cầu thang trơn!']],
            exercises: [
              fill('Ich {achte} auf meine Ernährung.', 'Tôi chú ý đến chế độ ăn uống.'),
              translate('Hút thuốc gây hại cho phổi.', ['Rauchen schadet der Lunge.']),
            ],
          },
        ],
        mixed: [
          transform('Viết lại với deshalb', 'Ich esse wenig Fleisch, weil es ungesund ist.', ['Fleisch ist ungesund, deshalb esse ich wenig Fleisch.']),
          choose('Ich habe Stress, deshalb ___ ich nicht gut.', ['schlafe', 'schlafen'], 'schlafe', { vi: 'Tôi căng thẳng nên ngủ không ngon.' }),
          order('Er hat sich verletzt, / deshalb / fährt / er / in die Notaufnahme.', 'Anh ấy bị thương nên vào phòng cấp cứu.'),
          choose('Ich bin müde, ___ ich nicht genug geschlafen habe.', ['weil', 'deshalb'], 'weil', { vi: 'Tôi mệt vì ngủ không đủ.' }),
          translate('Tôi bị dị ứng nên không ăn đậu phộng.', [
            'Ich habe eine Allergie, deshalb esse ich keine Erdnüsse.',
            'Ich habe eine Allergie, deshalb esse ich keine Nüsse.',
          ]),
        ],
      },
      dialogue: {
        title_de: 'Zu viel Stress',
        lines: [
          { speaker: 'A', de: 'Du siehst müde aus. Was ist los?', vi: 'Trông bạn mệt quá. Có chuyện gì vậy?' },
          { speaker: 'B', de: 'Ich habe im Moment viel Stress, deshalb schlafe ich schlecht.', vi: 'Dạo này mình căng thẳng lắm nên ngủ không ngon.' },
          { speaker: 'A', de: 'Bewegst du dich genug?', vi: 'Bạn có vận động đủ không?' },
          { speaker: 'B', de: 'Nein, ich habe keine Zeit, deshalb mache ich keinen Sport.', vi: 'Không, mình không có thời gian nên không chơi thể thao.' },
          { speaker: 'A', de: 'Das ist ungesund. Du musst auf deine Gesundheit achten!', vi: 'Không tốt đâu. Bạn phải chú ý đến sức khỏe chứ!' },
          { speaker: 'B', de: 'Ich weiß. Und ich bin ziemlich nervös, weil ich bald eine Prüfung habe.', vi: 'Mình biết. Mình còn khá lo vì sắp có kỳ thi.' },
          { speaker: 'A', de: 'Geh doch am Abend spazieren. Das hilft gegen Stress.', vi: 'Buổi tối đi dạo đi. Nó giúp giảm căng thẳng.' },
          { speaker: 'B', de: 'Gute Idee. Deshalb gehe ich jetzt nach Hause und morgen früh joggen!', vi: 'Ý hay. Vậy giờ mình về nhà, sáng mai đi chạy bộ!' },
        ],
        gloss: { 'Was ist los?': 'có chuyện gì vậy', 'im Moment': 'dạo này', bald: 'sắp', gegen: 'chống lại' },
        questions: [
          mc('Vì sao B ngủ không ngon?', ['vì căng thẳng', 'vì ồn', 'vì ốm'], 'vì căng thẳng'),
          tf('B macht viel Sport.', false),
          mc('Vì sao B lo lắng?', ['vì sắp thi', 'vì mất việc', 'vì bị dị ứng'], 'vì sắp thi'),
          tf('A sagt: Geh am Abend spazieren.', true),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi:
        'Viết 5 câu về thói quen sức khỏe của bạn, dùng ít nhất hai câu với deshalb và một câu với weil.',
    },
  ],
  test: {
    grammar: {
      'reflexiv-akk': [
        fill('Ich fühle {mich} gut.', 'Tôi thấy khỏe.'),
        choose('Er entspannt ___.', ['sich', 'ihn'], 'sich'),
        choose('Wir bewegen ___ zu wenig.', ['uns', 'sich'], 'uns'),
        fill('Du musst {dich} gesund ernähren.', 'Bạn phải ăn uống lành mạnh.'),
        order('Am Wochenende / entspanne / ich / mich.', 'Cuối tuần tôi thư giãn.'),
        choose('Habt ihr ___ gut gefühlt?', ['euch', 'sich'], 'euch'),
      ],
      'reflexiv-dat': [
        choose('Ich putze ___ die Zähne.', ['mir', 'mich'], 'mir'),
        fill('Wasch {dir} die Hände!', 'Rửa tay đi!'),
        choose('Ich habe ___ den Fuß verletzt.', ['mir', 'mich'], 'mir'),
        choose('Ich habe ___ erkältet.', ['mich', 'mir'], 'mich'),
        fill('Er wäscht {sich} die Haare.', 'Anh ấy gội đầu.'),
        order('Ich / putze / mir / die Zähne.', 'Tôi đánh răng.'),
      ],
      deshalb: [
        choose('Ich bin krank, deshalb ___ zu Hause.', ['bleibe ich', 'ich bleibe'], 'bleibe ich'),
        choose('Ich bleibe zu Hause, ___ ich krank bin.', ['weil', 'deshalb'], 'weil'),
        order('Ich habe Fieber, / deshalb / gehe / ich / zum Arzt.', 'Tôi bị sốt nên đi bác sĩ.'),
        fill('Sie hat Stress, deshalb {schläft} sie schlecht.', 'Cô ấy căng thẳng nên ngủ không ngon.'),
        choose('Rauchen ist ungesund, ___ rauche ich nicht.', ['deshalb', 'weil'], 'deshalb'),
        fill('Ich esse kein Eis, weil ich Halsschmerzen {habe}.', 'Tôi không ăn kem vì bị đau họng.'),
      ],
    },
    reading: {
      title_de: 'Mein neues Leben',
      text_de:
        'Vor einem Jahr habe ich mich oft schwach und müde gefühlt. Ich habe viel Fast Food gegessen und mich kaum bewegt, deshalb habe ich zehn Kilo zugenommen. Meine Ärztin hat mich untersucht und gesagt: Sie müssen mehr auf Ihre Gesundheit achten. Jetzt fahre ich jeden Tag mit dem Fahrrad zur Arbeit und gehe zweimal pro Woche ins Fitnessstudio. Ich ernähre mich gesünder: viel Gemüse, wenig Zucker. Am Abend entspanne ich mich mit Yoga, weil ich im Job viel Stress habe. Ich habe schon sechs Kilo abgenommen und fühle mich viel besser!',
      gloss: { 'vor einem Jahr': 'một năm trước', 'Fast Food': 'đồ ăn nhanh', kaum: 'hầu như không', gesünder: 'lành mạnh hơn', Yoga: 'yoga' },
      questions: [
        tf('Früher hat sich die Person viel bewegt.', false),
        mc('Bây giờ người viết đi làm bằng gì?', ['xe đạp', 'ô tô', 'xe buýt'], 'xe đạp'),
        mc('Người viết đã giảm bao nhiêu ký?', ['6', '10', '2'], '6'),
        tf('Am Abend macht die Person Yoga.', true),
      ],
    },
  },
});
