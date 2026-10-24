// B1 · 06 Sức khỏe và y tế — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b1-06',
  points: [
    {
      key: 'n-dekl',
      rule_key: 'n-deklination',
      category: 'case',
      title_vi: 'Danh từ n-Deklination',
      explanation_vi: 'Một số danh từ giống đực thêm -n/-en ở mọi cách trừ Nominativ số ít: den/dem/des Patienten, Kollegen, Menschen, Nachbarn, Herrn. Nhận ra: -e chỉ người, -ent, -ant, -ist.',
    },
    {
      key: 'je-desto',
      rule_key: 'je-desto',
      category: 'verb_position',
      title_vi: 'je … desto: càng … càng',
      explanation_vi: 'Je + so sánh hơn … động từ cuối, desto + so sánh hơn + động từ + chủ ngữ: Je mehr man schläft, desto fitter ist man.',
    },
    {
      key: 'partizip-adj',
      rule_key: 'partizip-als-adjektiv',
      category: 'adjective_ending',
      title_vi: 'Phân từ làm tính từ (Partizip I và II)',
      explanation_vi: 'Partizip I (-end) = đang: das weinende Kind. Partizip II = đã, bị: das gebrochene Bein. Thêm đuôi tính từ như thường.',
    },
  ],
  lessons: [
    {
      title_vi: 'Đi khám bác sĩ',
      goal_vi: 'Mô tả triệu chứng, nói chuyện với bác sĩ; dùng đúng danh từ n-Deklination.',
      items: [
        'Patient', 'Hausarzt', 'Facharzt', 'Krankenkasse', 'Sprechstunde', 'Untersuchung', 'Diagnose', 'Symptom', 'Krankheit',
        'Grippe', 'Infektion', 'Blutdruck', 'Schwindel', 'Übelkeit', 'Kreislauf', 'Apotheker', 'messen', 'atmen', 'schwitzen',
        'sich anstecken', 'sich krankmelden', 'ansteckend', 'blass', 'erschöpft', 'krankgeschrieben sein',
        'auf nüchternen Magen', 'n-Deklination: thêm -n/-en',
      ],
      grammar: {
        point: 'n-dekl',
        sections: [
          {
            text_vi:
              'Một nhóm danh từ **giống đực** thêm **-n/-en** ở **mọi cách trừ Nominativ** số ít: der Patient → den Patient**en**, dem Patient**en**, des Patient**en**. Nhóm này gồm danh từ tận cùng **-e** chỉ người, động vật (der Kollege, der Junge, der Kunde) và đuôi **-ent, -ant, -ist** (der Student, der Patient, der Polizist).',
            table: 'Cách | der Patient | der Kollege\nNominativ | der Patient | der Kollege\nAkkusativ | den Patienten | den Kollegen\nDativ | dem Patienten | dem Kollegen\nGenitiv | des Patienten | des Kollegen',
            examples: [
              ['Der Arzt untersucht den Patienten.', 'Bác sĩ khám cho bệnh nhân.'],
              ['Ich habe mich bei meinem Kollegen angesteckt.', 'Tôi bị lây từ đồng nghiệp.'],
            ],
            exercises: [
              choose('Die Ärztin spricht mit dem ___.', ['Patienten', 'Patient'], 'Patienten', { vi: 'Bác sĩ nói chuyện với bệnh nhân.' }),
              fill('Kennst du den neuen {Kollegen}? (Kollege)', 'Bạn biết anh đồng nghiệp mới không?'),
              choose('Der ___ wartet schon lange.', ['Patient', 'Patienten'], 'Patient', { vi: 'Bệnh nhân đã đợi lâu rồi.' }),
            ],
          },
          {
            text_vi:
              'Cũng thuộc nhóm này: **der Mensch** → den Mensch**en**, **der Herr** → den Herr**n**, **der Nachbar** → den Nachbar**n**, **der Junge** → dem Junge**n**. Lưu ý: **der Arzt**, **der Apotheker** **không** thuộc nhóm: den Arzt, dem Apotheker. Số nhiều luôn -n/-en: die Patienten.',
            examples: [['Die Krankenschwester hilft dem Jungen.', 'Cô y tá giúp cậu bé.']],
            exercises: [
              choose('Ich frage den ___ nach einem Medikament.', ['Apotheker', 'Apothekern'], 'Apotheker', { vi: 'Tôi hỏi dược sĩ về một loại thuốc.' }),
              fill('Der Arzt gibt dem {Jungen} eine Tablette. (Junge)', 'Bác sĩ đưa cậu bé một viên thuốc.'),
              order('Ich / helfe / meinem Nachbarn / beim Einkaufen.', 'Tôi giúp hàng xóm đi chợ.'),
            ],
          },
          {
            text_vi:
              'Đi khám: hẹn trong **Sprechstunde**, mang thẻ **Krankenkasse**. Mô tả **Symptome**: Schwindel (chóng mặt), Übelkeit (buồn nôn). Bác sĩ **misst den Blutdruck** (đo huyết áp). Bị ốm thì **sich krankmelden** (báo ốm) và được **krankgeschrieben** (cho nghỉ ốm).',
            examples: [['Ich bin seit Montag krankgeschrieben.', 'Tôi được nghỉ ốm từ thứ Hai.']],
            exercises: [
              fill('Die Ärztin {misst} meinen Blutdruck. (messen)', 'Bác sĩ đo huyết áp cho tôi.'),
              translate('Tôi bị chóng mặt và buồn nôn.', ['Ich habe Schwindel und Übelkeit.', 'Mir ist schwindlig und übel.']),
            ],
          },
        ],
        mixed: [
          choose('Hast du den ___ gefragt?', ['Polizisten', 'Polizist'], 'Polizisten', { vi: 'Bạn đã hỏi anh cảnh sát chưa?' }),
          fill('Das ist das Auto des {Studenten}. (Student)', 'Đây là ô tô của anh sinh viên.'),
          choose('Ich schreibe dem ___ einen Brief.', ['Arzt', 'Arzten'], 'Arzt', { vi: 'Tôi viết thư cho bác sĩ.' }),
          choose('Wir haben einen netten ___.', ['Nachbarn', 'Nachbar'], 'Nachbarn', { vi: 'Chúng tôi có một người hàng xóm dễ mến.' }),
          order('Die Ärztin / untersucht / den Patienten / sehr gründlich.', 'Bác sĩ khám bệnh nhân rất kỹ.'),
        ],
      },
      dialogue: {
        title_de: 'Beim Hausarzt',
        lines: [
          { speaker: 'A', de: 'Guten Morgen, Herr Pham. Was fehlt Ihnen?', vi: 'Chào anh Phạm. Anh bị làm sao?' },
          { speaker: 'B', de: 'Seit drei Tagen habe ich Fieber und Kopfschmerzen. Mir ist auch oft schwindlig.', vi: 'Ba ngày nay tôi bị sốt và đau đầu. Tôi cũng hay chóng mặt.' },
          { speaker: 'A', de: 'Haben Sie noch andere Symptome?', vi: 'Anh còn triệu chứng nào khác không?' },
          { speaker: 'B', de: 'Ja, Übelkeit, und ich schwitze nachts sehr stark.', vi: 'Có, buồn nôn, và ban đêm tôi đổ mồ hôi rất nhiều.' },
          { speaker: 'A', de: 'Ich messe zuerst Ihren Blutdruck. Der ist normal. Vielleicht ist es eine Grippe.', vi: 'Trước tiên tôi đo huyết áp. Bình thường. Có lẽ là cúm.' },
          { speaker: 'B', de: 'Ist das ansteckend? Mein Kollege hatte letzte Woche die gleichen Symptome.', vi: 'Có lây không? Tuần trước đồng nghiệp tôi cũng có triệu chứng giống vậy.' },
          { speaker: 'A', de: 'Ja, wahrscheinlich haben Sie sich bei Ihrem Kollegen angesteckt. Ich schreibe Sie eine Woche krank.', vi: 'Có, có lẽ anh bị lây từ đồng nghiệp. Tôi cho anh nghỉ ốm một tuần.' },
          { speaker: 'B', de: 'Danke. Muss ich mich bei meinem Chef krankmelden?', vi: 'Cảm ơn. Tôi có phải báo ốm với sếp không?' },
          { speaker: 'A', de: 'Ja, rufen Sie ihn heute noch an. Und bleiben Sie im Bett!', vi: 'Có, anh gọi cho ông ấy ngay hôm nay. Và nằm nghỉ trên giường nhé!' },
        ],
        gloss: { fehlt: 'thiếu (Was fehlt Ihnen? = Anh bị sao?)', Fieber: 'sốt', schwindlig: 'chóng mặt', nachts: 'ban đêm', normal: 'bình thường', gleichen: 'giống nhau', wahrscheinlich: 'có lẽ', 'schreibe … krank': 'cho nghỉ ốm' },
        questions: [
          mc('Anh Phạm bị sốt bao lâu rồi?', ['ba ngày', 'một tuần', 'một ngày'], 'ba ngày'),
          tf('Der Blutdruck von Herrn Pham ist zu hoch.', false, { explain: 'Der ist normal.' }),
          mc('Anh Phạm có lẽ bị lây từ ai?', ['đồng nghiệp', 'hàng xóm', 'con trai'], 'đồng nghiệp'),
          tf('Herr Pham ist eine Woche krankgeschrieben.', true),
        ],
        dictation: [1, 6],
      },
      writing_prompt_vi:
        'Viết một đoạn hội thoại ngắn ở phòng khám (6 câu) mô tả triệu chứng của bạn; dùng ít nhất hai danh từ n-Deklination (den Patienten, dem Kollegen…).',
    },
    {
      title_vi: 'Sống khỏe',
      goal_vi: 'Nói về lối sống lành mạnh, phòng bệnh; dùng je … desto.',
      items: [
        'Lebensstil', 'Übergewicht', 'Sucht', 'Psyche', 'Vorsorge', 'Impfung', 'Gesundheitssystem', 'Gesundheitszustand',
        'Muskel', 'Knie', 'vorbeugen', 'impfen', 'leiden', 'verursachen', 'chronisch', 'ausgewogen', 'körperlich', 'seelisch',
        'übergewichtig', 'schwanger', 'vorsichtig', 'harmlos', 'zur Vorsorge gehen', 'Muskelkater haben', 'je … desto',
      ],
      grammar: {
        point: 'je-desto',
        sections: [
          {
            text_vi:
              '**je** + so sánh hơn …, **desto** + so sánh hơn … = càng … càng: **Je** mehr Sport man macht, **desto** gesünder ist man. Vế **je** là câu phụ: động từ **cuối**. Vế **desto** (hoặc **umso**): so sánh hơn đứng ngay sau desto, rồi **động từ**, rồi chủ ngữ.',
            table: 'Vế je (động từ cuối) | Vế desto (động từ ngay sau)\nJe älter man wird, | desto wichtiger ist die Vorsorge.\nJe mehr du schläfst, | desto fitter bist du.\nJe weniger Zucker man isst, | desto besser ist es.',
            examples: [
              ['Je älter man wird, desto wichtiger ist die Vorsorge.', 'Càng lớn tuổi, khám định kỳ càng quan trọng.'],
              ['Je mehr Obst man isst, desto besser.', 'Ăn càng nhiều trái cây càng tốt.'],
            ],
            exercises: [
              fill('Je mehr man sich bewegt, {desto} gesünder lebt man.', 'Càng vận động nhiều, sống càng khỏe.'),
              choose('Je älter man ist, ___ wichtiger ist die Vorsorge.', ['desto', 'so', 'als'], 'desto', { vi: 'Càng lớn tuổi, khám định kỳ càng quan trọng.' }),
              order('Je / früher / man / schläft, / desto / besser / fühlt / man / sich.', 'Ngủ càng sớm, cảm thấy càng khỏe.'),
            ],
          },
          {
            text_vi:
              'Lỗi hay gặp: quên đẩy động từ vế je xuống cuối, hoặc đặt chủ ngữ trước động từ ở vế desto. **Sai**: Je mehr ich lerne, desto ich weiß mehr. **Đúng**: Je mehr ich lerne, **desto mehr weiß ich**. Danh từ đi kèm so sánh hơn: je **mehr Obst** …, desto **weniger Probleme** …',
            examples: [['Je weniger Stress man hat, desto besser schläft man.', 'Càng ít căng thẳng, ngủ càng ngon.']],
            exercises: [
              choose('Je mehr ich lerne, desto ___.', ['mehr weiß ich', 'ich weiß mehr', 'weiß ich mehr'], 'mehr weiß ich', { vi: 'Tôi càng học nhiều càng biết nhiều.' }),
              transform('Viết câu je … desto (gesünder / fitter)', 'Man isst gesund. Man ist fit.', ['Je gesünder man isst, desto fitter ist man.']),
              fill('Je weniger Stress man hat, desto besser {schläft} man.', 'Càng ít căng thẳng, ngủ càng ngon.'),
            ],
          },
          {
            text_vi:
              'Sống khỏe: ăn **ausgewogen** (cân bằng), vận động **körperlich**, chăm sóc **seelisch** (tinh thần). **vorbeugen** + Dativ = phòng ngừa: einer Krankheit vorbeugen. **zur Vorsorge gehen** = đi khám định kỳ. **leiden an** + Dativ = mắc bệnh: Er leidet an einer chronischen Krankheit.',
            examples: [['Mit einer Impfung kann man vielen Krankheiten vorbeugen.', 'Tiêm phòng có thể phòng ngừa nhiều bệnh.']],
            exercises: [
              fill('Mein Opa leidet an einer {chronischen} Krankheit. (chronisch)', 'Ông tôi mắc một bệnh mãn tính.'),
              translate('Tôi đi khám định kỳ mỗi năm.', ['Ich gehe jedes Jahr zur Vorsorge.', 'Jedes Jahr gehe ich zur Vorsorge.']),
            ],
          },
        ],
        mixed: [
          transform('Viết câu je … desto (mehr / müder)', 'Man arbeitet viel. Man ist müde.', ['Je mehr man arbeitet, desto müder ist man.']),
          choose('Je länger du wartest, ___ schwieriger wird es.', ['desto', 'als', 'wie'], 'desto', { vi: 'Bạn càng đợi lâu càng khó.' }),
          fill('Je öfter ich trainiere, desto stärker {werden} meine Muskeln.', 'Tôi càng tập thường xuyên, cơ càng khỏe.'),
          choose('Je mehr Zucker man isst, desto ___ Übergewicht.', ['mehr riskiert man', 'man riskiert mehr'], 'mehr riskiert man', { vi: 'Càng ăn nhiều đường, càng dễ thừa cân.' }),
          order('Je / ausgewogener / man / isst, / desto / gesünder / ist / man.', 'Ăn càng cân bằng, càng khỏe.'),
        ],
      },
      dialogue: {
        title_de: 'Gesund leben',
        lines: [
          { speaker: 'A', de: 'Du siehst so fit aus! Was ist dein Geheimnis?', vi: 'Trông bạn khỏe quá! Bí quyết của bạn là gì?' },
          { speaker: 'B', de: 'Kein Geheimnis. Ich esse ausgewogen und mache jeden Tag Sport. Je mehr ich mich bewege, desto besser fühle ich mich.', vi: 'Chẳng có bí quyết gì. Mình ăn cân bằng và tập thể thao mỗi ngày. Càng vận động, mình càng thấy khỏe.' },
          { speaker: 'A', de: 'Ich habe leider etwas Übergewicht, und nach dem Sport habe ich immer Muskelkater.', vi: 'Tiếc là mình hơi thừa cân, và sau khi tập lúc nào cũng đau cơ.' },
          { speaker: 'B', de: 'Das ist am Anfang normal. Je öfter du trainierst, desto weniger Muskelkater hast du.', vi: 'Lúc đầu thì bình thường. Bạn tập càng thường xuyên càng ít đau cơ.' },
          { speaker: 'A', de: 'Und was ist mit Stress? Ich arbeite sehr viel.', vi: 'Còn căng thẳng thì sao? Mình làm việc rất nhiều.' },
          { speaker: 'B', de: 'Auch die Psyche ist wichtig. Je weniger Stress man hat, desto gesünder ist man, körperlich und seelisch.', vi: 'Tâm lý cũng quan trọng. Càng ít căng thẳng càng khỏe, cả thể chất lẫn tinh thần.' },
          { speaker: 'A', de: 'Stimmt. Gehst du auch regelmäßig zur Vorsorge?', vi: 'Đúng. Bạn có đi khám định kỳ đều đặn không?' },
          { speaker: 'B', de: 'Ja, einmal im Jahr. Je älter man wird, desto wichtiger ist das.', vi: 'Có, mỗi năm một lần. Càng lớn tuổi điều đó càng quan trọng.' },
        ],
        gloss: { fit: 'khỏe khoắn', Geheimnis: 'bí quyết', trainierst: 'tập luyện (trainieren)', öfter: 'thường xuyên hơn', regelmäßig: 'đều đặn', normal: 'bình thường', einmal: 'một lần' },
        questions: [
          mc('B tập thể thao bao lâu một lần?', ['mỗi ngày', 'mỗi tuần', 'mỗi tháng'], 'mỗi ngày'),
          tf('A hat nach dem Sport oft Muskelkater.', true),
          mc('Theo B, điều gì cũng quan trọng?', ['tâm lý', 'tiền bạc', 'thời tiết'], 'tâm lý'),
          tf('B geht nie zur Vorsorge.', false, { explain: 'Ja, einmal im Jahr.' }),
        ],
        dictation: [3, 7],
      },
      writing_prompt_vi:
        'Viết 5 lời khuyên sống khỏe bằng câu je … desto (Je mehr …, desto …).',
    },
    {
      title_vi: 'Ở bệnh viện',
      goal_vi: 'Nói về điều trị, cấp cứu, thuốc men; dùng phân từ làm tính từ.',
      items: [
        'Behandlung', 'Operation', 'Nebenwirkung', 'Notfall', 'Krankenwagen', 'Pflege', 'Heilung', 'Krankenschwester',
        'Station', 'Wunde', 'Knochen', 'Dosis', 'behandeln', 'verschreiben', 'einnehmen', 'operieren', 'heilen', 'pflegen',
        'bluten', 'brechen', 'sich übergeben', 'schmerzhaft', 'verschreibungspflichtig', 'bewusstlos', 'akut',
        'lebensgefährlich', 'wieder auf den Beinen sein', 'Phân từ I làm tính từ: -end', 'Phân từ II làm tính từ',
      ],
      grammar: {
        point: 'partizip-adj',
        sections: [
          {
            text_vi:
              '**Partizip I** (nguyên mẫu + **-d**) làm tính từ = **đang** diễn ra: das weinen**de** Kind (đứa bé đang khóc), steigen**de** Kosten (chi phí đang tăng). Thêm đuôi tính từ như thường: ein bluten**der** Finger, mit steigen**dem** Fieber.',
            examples: [
              ['Das weinende Kind sucht seine Mutter.', 'Đứa bé đang khóc tìm mẹ.'],
              ['Der behandelnde Arzt kommt um neun Uhr.', 'Bác sĩ điều trị đến lúc chín giờ.'],
            ],
            exercises: [
              fill('Das {schreiende} Baby hat Hunger. (schreien)', 'Em bé đang khóc ré vì đói.'),
              choose('Der Arzt hilft dem ___ Patienten.', ['blutenden', 'geblutet', 'blutend'], 'blutenden', { vi: 'Bác sĩ giúp bệnh nhân đang chảy máu.' }),
              choose('Wegen ___ Kosten wird die Krankenkasse teurer.', ['steigender', 'steigend', 'gestiegen'], 'steigender', { vi: 'Vì chi phí đang tăng, bảo hiểm y tế đắt hơn.' }),
            ],
          },
          {
            text_vi:
              '**Partizip II** làm tính từ = **đã** (bị) làm: das **gebrochene** Bein (cái chân bị gãy), das **verschriebene** Medikament (thuốc đã được kê). So sánh: das **operierende** Team (nhóm đang mổ) – der **operierte** Patient (bệnh nhân đã được mổ).',
            table: 'Partizip I (đang) | Partizip II (đã, bị)\ndas schreiende Kind | das gebrochene Bein\nsteigende Kosten | die verschriebenen Tabletten\nder behandelnde Arzt | der operierte Patient',
            examples: [['Die verschriebenen Tabletten muss man auf nüchternen Magen einnehmen.', 'Thuốc được kê phải uống lúc bụng đói.']],
            exercises: [
              fill('Er hat ein {gebrochenes} Bein. (brechen)', 'Anh ấy bị gãy chân.'),
              choose('Der ___ Patient darf morgen nach Hause.', ['operierte', 'operierende'], 'operierte', { vi: 'Bệnh nhân đã được mổ mai được về nhà.' }),
              transform('Viết thành cụm danh từ với Partizip II', 'Das Medikament wurde verschrieben. → das …', ['das verschriebene Medikament']),
            ],
          },
          {
            text_vi:
              'Cấp cứu: gọi **Krankenwagen** (số 112) khi có **Notfall**: người **bewusstlos** (bất tỉnh), **blutet** nhiều, tình trạng **lebensgefährlich**. Uống thuốc: **einnehmen** theo **Dosis**; một số thuốc **verschreibungspflichtig** (phải có đơn). Khỏe lại: **wieder auf den Beinen sein**.',
            examples: [['Nach zwei Wochen war sie wieder auf den Beinen.', 'Sau hai tuần cô ấy đã khỏe lại.']],
            exercises: [
              fill('Nehmen Sie die Tabletten dreimal täglich {ein}.', 'Uống thuốc ba lần mỗi ngày.'),
              translate('Hãy gọi xe cứu thương!', ['Rufen Sie einen Krankenwagen!', 'Ruf einen Krankenwagen!', 'Ruft einen Krankenwagen!']),
            ],
          },
        ],
        mixed: [
          choose('Die ___ Wunde muss sofort behandelt werden.', ['blutende', 'geblutete'], 'blutende', { vi: 'Vết thương đang chảy máu phải được xử lý ngay.' }),
          fill('Die {gepflegten} Patienten sind zufrieden. (pflegen)', 'Những bệnh nhân được chăm sóc đều hài lòng.'),
          choose('Ein ___ Knochen braucht sechs Wochen.', ['gebrochener', 'brechender'], 'gebrochener', { vi: 'Xương bị gãy cần sáu tuần.' }),
          fill('Der {behandelnde} Arzt erklärt die Diagnose. (behandeln)', 'Bác sĩ điều trị giải thích chẩn đoán.'),
          order('Die / verschriebene / Dosis / ist / sehr niedrig.', 'Liều được kê rất thấp.'),
        ],
      },
      dialogue: {
        title_de: 'Besuch im Krankenhaus',
        lines: [
          { speaker: 'A', de: 'Hallo Oma! Wie geht es dir nach der Operation?', vi: 'Chào bà! Sau ca mổ bà thấy thế nào?' },
          { speaker: 'B', de: 'Schon besser, danke. Das gebrochene Bein tut noch weh, aber die Wunde heilt gut.', vi: 'Đỡ hơn rồi, cảm ơn cháu. Cái chân gãy vẫn còn đau, nhưng vết thương lành tốt.' },
          { speaker: 'A', de: 'Was ist eigentlich passiert?', vi: 'Mà chuyện gì đã xảy ra vậy bà?' },
          { speaker: 'B', de: 'Ich bin im Bad gefallen und war kurz bewusstlos. Zum Glück hat der Nachbar sofort einen Krankenwagen gerufen.', vi: 'Bà bị ngã trong nhà tắm và bất tỉnh một lúc. May mà ông hàng xóm gọi xe cứu thương ngay.' },
          { speaker: 'A', de: 'Und wie ist die Station?', vi: 'Còn khoa ở đây thế nào ạ?' },
          { speaker: 'B', de: 'Die Krankenschwestern sind sehr nett. Der behandelnde Arzt kommt jeden Morgen.', vi: 'Các cô y tá rất tốt. Bác sĩ điều trị đến mỗi sáng.' },
          { speaker: 'A', de: 'Musst du viele Medikamente einnehmen?', vi: 'Bà có phải uống nhiều thuốc không?' },
          { speaker: 'B', de: 'Nur Tabletten gegen die Schmerzen. Die Dosis ist niedrig, also gibt es kaum Nebenwirkungen.', vi: 'Chỉ thuốc giảm đau thôi. Liều thấp nên hầu như không có tác dụng phụ.' },
          { speaker: 'A', de: 'Gut! Ich hoffe, du bist bald wieder auf den Beinen.', vi: 'Tốt quá! Cháu mong bà sớm khỏe lại.' },
        ],
        gloss: { eigentlich: 'thật ra', passiert: 'xảy ra', Bad: 'nhà tắm', gefallen: 'ngã (fallen)', Glück: 'may mắn', gerufen: 'gọi (rufen)', Schmerzen: 'cơn đau', niedrig: 'thấp', also: 'vì vậy', 'tut … weh': 'đau' },
        questions: [
          tf('Die Oma hat ein gebrochenes Bein.', true),
          mc('Bà bị ngã ở đâu?', ['trong nhà tắm', 'ngoài đường', 'ở bếp'], 'trong nhà tắm'),
          mc('Ai gọi xe cứu thương?', ['ông hàng xóm', 'cháu', 'y tá'], 'ông hàng xóm'),
          tf('Die Tabletten haben viele Nebenwirkungen.', false, { explain: 'Die Dosis ist niedrig, also gibt es kaum Nebenwirkungen.' }),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Kể về một lần bạn hoặc người thân phải đi viện (5–6 câu), dùng ít nhất hai phân từ làm tính từ (das gebrochene …, der behandelnde …).',
    },
  ],
  test: {
    grammar: {
      'n-dekl': [
        choose('Der Arzt untersucht den ___.', ['Patienten', 'Patient'], 'Patienten'),
        fill('Ich helfe meinem {Kollegen}. (Kollege)', 'Tôi giúp đồng nghiệp.'),
        choose('Kennst du den ___ dort?', ['Jungen', 'Junge'], 'Jungen'),
        choose('Ich frage den ___.', ['Arzt', 'Arzten'], 'Arzt'),
        order('Wir / besuchen / unseren Nachbarn / im Krankenhaus.', 'Chúng tôi thăm hàng xóm ở bệnh viện.'),
        fill('Das ist das Buch des {Studenten}. (Student)', 'Đây là sách của anh sinh viên.'),
      ],
      'je-desto': [
        fill('Je mehr man schläft, {desto} fitter ist man.', 'Ngủ càng nhiều càng khỏe.'),
        choose('Je älter er wird, desto ___.', ['ruhiger wird er', 'er wird ruhiger'], 'ruhiger wird er'),
        choose('Je früher du kommst, ___ besser.', ['desto', 'als'], 'desto'),
        order('Je / mehr / ich / lerne, / desto / mehr / weiß / ich.', 'Tôi càng học càng biết nhiều.'),
        fill('Je weniger man isst, desto dünner {wird} man.', 'Càng ăn ít càng gầy.'),
        choose('Je ___ das Wetter ist, desto lieber gehe ich raus.', ['schöner', 'schön'], 'schöner'),
      ],
      'partizip-adj': [
        fill('Das {weinende} Kind sucht seine Mutter. (weinen)', 'Đứa bé đang khóc tìm mẹ.'),
        choose('Er hat einen ___ Arm.', ['gebrochenen', 'brechenden'], 'gebrochenen'),
        choose('Die ___ Tabletten helfen gut.', ['verschriebenen', 'verschreibenden'], 'verschriebenen'),
        choose('Wegen ___ Preise kaufen wir weniger.', ['steigender', 'gestiegen'], 'steigender'),
        order('Der / operierte / Patient / schläft / jetzt.', 'Bệnh nhân đã được mổ giờ đang ngủ.'),
        fill('Der {behandelnde} Arzt ist sehr freundlich. (behandeln)', 'Bác sĩ điều trị rất thân thiện.'),
      ],
    },
    reading: {
      title_de: 'Das Gesundheitssystem in Deutschland',
      text_de:
        'In Deutschland muss jeder Mensch eine Krankenkasse haben. Die Kosten werden zum Teil vom Arbeitgeber bezahlt. Wenn man krank ist, geht man zuerst zum Hausarzt. Er untersucht den Patienten und schickt ihn wenn nötig zum Facharzt. Für einen Termin beim Facharzt muss man manchmal lange warten. In einem Notfall ruft man die Nummer 112, dann kommt sofort ein Krankenwagen. Viele Medikamente sind verschreibungspflichtig, man bekommt sie nur mit einem Rezept in der Apotheke. Die Vorsorge ist sehr wichtig: Je früher eine Krankheit erkannt wird, desto besser kann sie behandelt werden.',
      gloss: {
        'zum Teil': 'một phần',
        'wenn nötig': 'khi cần',
        Rezept: 'đơn thuốc',
        Apotheke: 'hiệu thuốc',
        erkannt: 'phát hiện (erkennen)',
        Termin: 'cuộc hẹn',
      },
      questions: [
        tf('In Deutschland muss jeder eine Krankenkasse haben.', true),
        mc('Khi ốm, trước tiên người ta đi đâu?', ['bác sĩ gia đình', 'bác sĩ chuyên khoa', 'bệnh viện'], 'bác sĩ gia đình'),
        mc('Số gọi cấp cứu là số nào?', ['112', '110', '113'], '112'),
        tf('Alle Medikamente bekommt man ohne Rezept.', false, { explain: 'Viele Medikamente sind verschreibungspflichtig.' }),
      ],
    },
  },
});
