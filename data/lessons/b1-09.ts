// B1 · 09 Thiên nhiên và môi trường — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b1-09',
  points: [
    {
      key: 'futur',
      rule_key: 'futur-i',
      category: 'tense',
      title_vi: 'Futur I: werden + Infinitiv',
      explanation_vi: 'werden (vị trí 2) + nguyên mẫu (cuối): dự đoán, hứa, quyết tâm. Có từ chỉ thời gian thì hay dùng Präsens. Câu phụ: werden đứng cuối.',
    },
    {
      key: 'lassen',
      rule_key: 'lassen-infinitiv',
      category: 'verb_position',
      title_vi: 'lassen + Infinitiv',
      explanation_vi: 'lassen + nguyên mẫu (không zu) = nhờ / để ai làm: Ich lasse das Fahrrad reparieren. du/er lässt. Perfekt có nguyên mẫu: habe … reparieren lassen.',
    },
    {
      key: 'irreal',
      rule_key: 'konjunktiv-ii-irreal-bedingung',
      category: 'conjugation',
      title_vi: 'Câu điều kiện không thật (Konjunktiv II hiện tại)',
      explanation_vi: 'Wenn + Konjunktiv II (cuối), Konjunktiv II …: Wenn ich Zeit hätte, würde ich mitkommen. Dùng trực tiếp wäre, hätte, könnte, gäbe; động từ khác: würde + nguyên mẫu.',
    },
  ],
  lessons: [
    {
      title_vi: 'Biến đổi khí hậu',
      goal_vi: 'Nói về biến đổi khí hậu và hậu quả; dự đoán bằng Futur I.',
      items: [
        'Klimawandel', 'Erderwärmung', 'Treibhausgas', 'Kohlendioxid', 'Meeresspiegel', 'Wüste', 'Regenwald', 'Küstengebiet',
        'Dürre', 'Ernte', 'Unwetter', 'Schaden', 'Zukunft', 'Folge', 'schmelzen', 'abholzen', 'bedrohen', 'aussterben',
        'verschwinden', 'anrichten', 'aufbrauchen', 'extrem', 'weltweit', 'zunehmend', 'langfristig', 'kurzfristig',
        'in Zukunft', 'Futur I: werden + Infinitiv',
      ],
      grammar: {
        point: 'futur',
        sections: [
          {
            text_vi:
              '**Futur I** = **werden** (chia, vị trí 2) + **nguyên mẫu** (cuối): Der Meeresspiegel **wird steigen**. Dùng để **dự đoán**, hoặc **hứa, quyết tâm**: Ich **werde** weniger fliegen. Nếu đã có từ chỉ thời gian (morgen, nächstes Jahr), người Đức thường dùng **Präsens**: Morgen regnet es.',
            table: 'Ngôi | werden + Infinitiv\nich | werde … sparen\ndu | wirst … sparen\ner/sie/es | wird … sparen\nwir | werden … sparen\nihr | werdet … sparen\nsie/Sie | werden … sparen',
            examples: [
              ['In Zukunft wird es mehr Dürren geben.', 'Trong tương lai sẽ có nhiều hạn hán hơn.'],
              ['Ich werde ab jetzt weniger Fleisch essen.', 'Từ giờ tôi sẽ ăn ít thịt hơn.'],
            ],
            exercises: [
              fill('In Zukunft {wird} es mehr Unwetter geben.', 'Trong tương lai sẽ có nhiều giông bão hơn.'),
              choose('Ich ___ jeden Tag mit dem Fahrrad fahren.', ['werde', 'wird', 'würde'], 'werde', { vi: 'Tôi sẽ đi xe đạp mỗi ngày.' }),
              order('Viele Tierarten / werden / aussterben.', 'Nhiều loài động vật sẽ tuyệt chủng.'),
            ],
          },
          {
            text_vi:
              'Ba cách dùng **werden**: (1) động từ chính = trở nên: Es **wird** heiß. (2) Futur + **nguyên mẫu**: Es **wird** heiß **werden**. (3) bị động + **Partizip II**: Der Wald **wird abgeholzt**. Trong câu phụ, werden đứng **cuối**: Ich glaube, dass das Eis schmelzen **wird**.',
            examples: [['Experten glauben, dass die Temperatur weiter steigen wird.', 'Các chuyên gia tin rằng nhiệt độ sẽ còn tăng.']],
            exercises: [
              choose('Viele glauben, dass das Eis weiter schmelzen ___.', ['wird', 'werden', 'würde'], 'wird', { vi: 'Nhiều người tin rằng băng sẽ tiếp tục tan.' }),
              transform('Chuyển sang Futur I', 'Die Wüsten wachsen.', ['Die Wüsten werden wachsen.']),
              choose('Der Regenwald ___ jeden Tag abgeholzt. (bị động)', ['wird', 'werden'], 'wird', { vi: 'Rừng mưa bị chặt phá mỗi ngày.' }),
            ],
          },
          {
            text_vi:
              '**Klimawandel**, **Erderwärmung** do **Treibhausgase** (như Kohlendioxid). **Folgen** (hậu quả): **Meeresspiegel** dâng, **Dürre** (hạn hán), **Unwetter** gây **Schaden**. **zunehmend** = ngày càng; **kurzfristig** ≠ **langfristig**; **in Zukunft** = trong tương lai.',
            examples: [['Das Unwetter hat in der Region großen Schaden angerichtet.', 'Trận giông bão gây thiệt hại lớn trong vùng.']],
            exercises: [
              fill('Das Unwetter hat großen {Schaden} angerichtet.', 'Trận giông bão gây thiệt hại lớn.'),
              translate('Mực nước biển sẽ dâng lên.', ['Der Meeresspiegel wird steigen.']),
            ],
          },
        ],
        mixed: [
          transform('Chuyển sang Futur I', 'Wir brauchen mehr Wasser.', ['Wir werden mehr Wasser brauchen.']),
          choose('Wann ___ du dein Auto verkaufen?', ['wirst', 'wird', 'werdest'], 'wirst', { vi: 'Khi nào bạn sẽ bán ô tô?' }),
          fill('Die Ernte wird wegen der Dürre schlecht {sein}.', 'Vì hạn hán, mùa màng sẽ kém.'),
          choose('Ich bin sicher, dass wir das Problem lösen ___.', ['werden', 'wird'], 'werden', { vi: 'Tôi chắc rằng chúng ta sẽ giải quyết được vấn đề.' }),
          order('Langfristig / werden / viele Küstengebiete / verschwinden.', 'Về lâu dài nhiều vùng ven biển sẽ biến mất.'),
        ],
      },
      dialogue: {
        title_de: 'Wie wird die Welt in 50 Jahren aussehen?',
        lines: [
          { speaker: 'A', de: 'Hast du die Dokumentation über den Klimawandel gesehen?', vi: 'Bạn đã xem phim tài liệu về biến đổi khí hậu chưa?' },
          { speaker: 'B', de: 'Ja, sehr beunruhigend. Laut den Experten wird der Meeresspiegel weiter steigen.', vi: 'Rồi, rất đáng lo. Theo các chuyên gia, mực nước biển sẽ còn dâng.' },
          { speaker: 'A', de: 'Was bedeutet das für Vietnam?', vi: 'Điều đó có ý nghĩa gì với Việt Nam?' },
          { speaker: 'B', de: 'Viele Küstengebiete werden unter Wasser stehen. Im Mekong-Delta wird die Ernte zunehmend leiden.', vi: 'Nhiều vùng ven biển sẽ chìm dưới nước. Ở đồng bằng sông Cửu Long, mùa màng sẽ ngày càng bị ảnh hưởng.' },
          { speaker: 'A', de: 'Und es wird mehr extreme Unwetter geben, oder?', vi: 'Và sẽ có nhiều thời tiết cực đoan hơn, phải không?' },
          { speaker: 'B', de: 'Genau. Langfristig werden auch viele Tierarten aussterben.', vi: 'Đúng vậy. Về lâu dài nhiều loài động vật cũng sẽ tuyệt chủng.' },
          { speaker: 'A', de: 'Das macht mir Angst. Was können wir tun?', vi: 'Điều đó làm mình sợ. Chúng ta có thể làm gì?' },
          { speaker: 'B', de: 'Ich werde in Zukunft weniger fliegen und mehr mit dem Zug fahren.', vi: 'Sau này mình sẽ ít bay hơn và đi tàu nhiều hơn.' },
          { speaker: 'A', de: 'Und ich werde weniger Fleisch essen. Jeder kleine Schritt zählt.', vi: 'Còn mình sẽ ăn ít thịt hơn. Mỗi bước nhỏ đều có ý nghĩa.' },
        ],
        gloss: { Dokumentation: 'phim tài liệu', beunruhigend: 'đáng lo ngại', Experten: 'chuyên gia', bedeutet: 'có nghĩa (bedeuten)', 'Mekong-Delta': 'đồng bằng sông Cửu Long', Tierarten: 'loài động vật', Schritt: 'bước', zählt: 'có giá trị (zählen)' },
        questions: [
          tf('Laut den Experten wird der Meeresspiegel sinken.', false, { explain: 'Der Meeresspiegel wird weiter steigen.' }),
          mc('Ở đồng bằng sông Cửu Long điều gì sẽ bị ảnh hưởng?', ['mùa màng', 'du lịch', 'trường học'], 'mùa màng'),
          mc('B sẽ làm gì?', ['ít bay hơn, đi tàu nhiều hơn', 'mua ô tô điện', 'ăn ít thịt'], 'ít bay hơn, đi tàu nhiều hơn'),
          tf('A wird weniger Fleisch essen.', true),
        ],
        dictation: [3, 7],
      },
      writing_prompt_vi:
        'Dự đoán thế giới năm 2070 (5 câu) bằng Futur I, và viết thêm hai lời hứa của bạn (Ich werde …).',
    },
    {
      title_vi: 'Sống xanh ở nhà',
      goal_vi: 'Nói về thói quen bảo vệ môi trường ở nhà; dùng lassen + Infinitiv.',
      items: [
        'Umweltschutz', 'Umweltbewusstsein', 'Mülltrennung', 'Verpackung', 'Wegwerfgesellschaft', 'Plastiktüte', 'Mehrwegflasche',
        'Pfand', 'Kompost', 'Verkehrsmittel', 'Elektroauto', 'wiederverwenden', 'verzichten', 'kompostieren', 'lassen',
        'reduzieren', 'saisonal', 'klimafreundlich', 'verantwortungsvoll', 'Strom sparen', 'auf etwas achten',
        'die Umwelt belasten', 'lassen + Infinitiv',
      ],
      grammar: {
        point: 'lassen',
        sections: [
          {
            text_vi:
              '**lassen + nguyên mẫu** (cuối câu) = **nhờ / để ai làm**: Ich **lasse** mein Fahrrad **reparieren** (nhờ người sửa). Sie **lässt** die Kinder draußen **spielen** (cho phép). Chia: ich lasse, du **lässt**, er **lässt**, wir lassen. **Không** dùng zu.',
            table: 'Nghĩa | Ví dụ\nnhờ người khác làm | Ich lasse die Heizung prüfen.\ncho phép | Sie lässt die Kinder draußen spielen.\nđể nguyên | Lass das Licht nicht brennen!',
            examples: [
              ['Ich lasse meine alten Schuhe reparieren.', 'Tôi mang giày cũ đi sửa.'],
              ['Er lässt das Auto stehen und fährt mit dem Rad.', 'Anh ấy để ô tô ở nhà và đi xe đạp.'],
            ],
            exercises: [
              fill('Ich {lasse} meine alte Jacke reparieren.', 'Tôi mang áo khoác cũ đi sửa.'),
              choose('Er ___ das Auto stehen und geht zu Fuß.', ['lässt', 'lasst', 'lässe'], 'lässt', { vi: 'Anh ấy để ô tô ở nhà và đi bộ.' }),
              order('Wir / lassen / eine Solaranlage / installieren.', 'Chúng tôi thuê lắp một hệ thống điện mặt trời.'),
            ],
          },
          {
            text_vi:
              '**lassen** còn là động từ chính = **để lại**: Ich lasse den Schirm zu Hause. **sich lassen** = có thể được: Das Glas **lässt sich** recyceln. Perfekt **có** nguyên mẫu: habe … reparieren **lassen**; **không có** nguyên mẫu: habe … **gelassen**. Giống lassen, sau **sehen, hören, gehen, bleiben** nguyên mẫu **không có zu**: Ich **höre** die Vögel **singen**. Wir **gehen** am Sonntag **wandern**.',
            examples: [['Ich habe die Waschmaschine reparieren lassen.', 'Tôi đã mang máy giặt đi sửa.']],
            exercises: [
              choose('Ich habe den Kühlschrank reparieren ___.', ['lassen', 'gelassen'], 'lassen', { vi: 'Tôi đã nhờ sửa tủ lạnh.' }),
              choose('Ich habe meine Tasche im Bus ___.', ['gelassen', 'lassen'], 'gelassen', { vi: 'Tôi để quên túi trên xe buýt.' }),
              choose('Ich sehe die Kinder im Garten ___.', ['spielen', 'zu spielen'], 'spielen', { vi: 'Tôi thấy bọn trẻ chơi trong vườn.' }),
              transform('Viết lại với lassen', 'Ein Techniker prüft unsere Heizung (für uns).', ['Wir lassen unsere Heizung prüfen.']),
            ],
          },
          {
            text_vi:
              'Ở nhà: **Mülltrennung**, **kompostieren** rác hữu cơ, dùng **Mehrwegflasche** (chai tái sử dụng) rồi trả lại lấy **Pfand** (tiền cọc). **verzichten auf** + Akk = nhịn, bỏ: auf Plastiktüten verzichten. **achten auf** + Akk = chú ý: auf die Verpackung achten.',
            examples: [['Wir kaufen saisonales Gemüse und achten auf wenig Verpackung.', 'Chúng tôi mua rau theo mùa và chú ý ít bao bì.']],
            exercises: [
              fill('Ich verzichte {auf} Plastiktüten.', 'Tôi không dùng túi ni lông.'),
              translate('Chúng tôi tiết kiệm điện.', ['Wir sparen Strom.']),
            ],
          },
        ],
        mixed: [
          transform('Viết lại với lassen', 'Ein Mechaniker repariert mein Fahrrad (für mich).', ['Ich lasse mein Fahrrad reparieren.']),
          choose('___ du deine Kinder allein mit dem Bus fahren?', ['Lässt', 'Lasst', 'Lassen'], 'Lässt', { vi: 'Bạn có để con đi xe buýt một mình không?' }),
          fill('Wir haben das Dach neu machen {lassen}.', 'Chúng tôi đã thuê làm lại mái nhà.'),
          choose('Plastik ___ sich nicht immer recyceln.', ['lässt', 'lassen', 'wird'], 'lässt', { vi: 'Nhựa không phải lúc nào cũng tái chế được.' }),
          order('Sie / lässt / das Licht / nie / brennen.', 'Cô ấy không bao giờ để đèn sáng.'),
        ],
      },
      dialogue: {
        title_de: 'Ein grüner Haushalt',
        lines: [
          { speaker: 'A', de: 'Deine Wohnung ist so ordentlich! Wo ist eigentlich dein Mülleimer?', vi: 'Nhà bạn gọn gàng quá! Mà thùng rác của bạn đâu?' },
          { speaker: 'B', de: 'Ich habe drei: für Papier, Plastik und Bio. Den Bio-Müll kompostiere ich im Garten.', vi: 'Mình có ba cái: cho giấy, nhựa và rác hữu cơ. Rác hữu cơ mình ủ phân trong vườn.' },
          { speaker: 'A', de: 'Und diese Flaschen?', vi: 'Còn mấy cái chai này?' },
          { speaker: 'B', de: 'Das sind Mehrwegflaschen. Ich bringe sie zurück und bekomme das Pfand.', vi: 'Đó là chai tái sử dụng. Mình mang trả lại và nhận tiền cọc.' },
          { speaker: 'A', de: 'Du hast ja auch eine neue Waschmaschine.', vi: 'Bạn còn có máy giặt mới nữa.' },
          { speaker: 'B', de: 'Nein, die alte habe ich reparieren lassen. Sie funktioniert wieder super.', vi: 'Không, mình mang cái cũ đi sửa. Nó lại chạy tốt lắm.' },
          { speaker: 'A', de: 'Und deine Kinder? Machen sie auch mit?', vi: 'Còn các con bạn? Chúng có cùng làm không?' },
          { speaker: 'B', de: 'Klar! Ich lasse sie den Müll trennen. Sie achten sogar im Supermarkt auf die Verpackung.', vi: 'Có chứ! Mình để chúng phân loại rác. Chúng còn chú ý đến bao bì khi ở siêu thị.' },
          { speaker: 'A', de: 'Ich verzichte jetzt auch auf Plastiktüten.', vi: 'Giờ mình cũng không dùng túi ni lông nữa.' },
        ],
        gloss: { eigentlich: 'mà, thật ra', Mülleimer: 'thùng rác', 'Bio-Müll': 'rác hữu cơ', funktioniert: 'hoạt động', 'machen … mit': 'cùng tham gia', sogar: 'thậm chí', Waschmaschine: 'máy giặt' },
        questions: [
          mc('B có mấy thùng rác?', ['ba', 'một', 'hai'], 'ba'),
          tf('B hat eine neue Waschmaschine gekauft.', false, { explain: 'Die alte habe ich reparieren lassen.' }),
          mc('B để các con làm gì?', ['phân loại rác', 'nấu ăn', 'đi chợ'], 'phân loại rác'),
          tf('A verzichtet jetzt auf Plastiktüten.', true),
        ],
        dictation: [3, 5],
      },
      writing_prompt_vi:
        'Mô tả 5 việc bạn làm (hoặc nhờ người khác làm) để sống xanh hơn, dùng ít nhất ba câu với lassen.',
    },
    {
      title_vi: 'Nếu tôi là thị trưởng…',
      goal_vi: 'Nói về năng lượng, thiên nhiên và đề xuất giải pháp; dùng câu điều kiện không thật.',
      items: [
        'Verschmutzung', 'Luftverschmutzung', 'Abgas', 'Ressource', 'Rohstoff', 'Naturschutzgebiet', 'Artenvielfalt', 'Lebensraum',
        'Landwirtschaft', 'Windkraft', 'Kraftwerk', 'Maßnahme', 'Insekt', 'Biene', 'erzeugen', 'fördern', 'sich engagieren',
        'demonstrieren', 'erneuerbar', 'schädlich', 'giftig', 'bedroht', 'ökologisch', 'dringend', 'bisher', 'eine Rolle spielen',
        'Konjunktiv II hiện tại: câu điều kiện không thật', 'wenn … dann',
      ],
      grammar: {
        point: 'irreal',
        sections: [
          {
            text_vi:
              '**Câu điều kiện không thật** nói điều trái với thực tế: **Wenn** + Konjunktiv II (cuối), (**dann**) + Konjunktiv II: **Wenn** ich Bürgermeister **wäre**, **würde** ich mehr Fahrradwege **bauen**. Dùng trực tiếp **wäre, hätte, könnte, müsste, gäbe**; động từ khác: **würde + nguyên mẫu**.',
            table: 'Thực tế | Điều kiện không thật\nIch habe kein Geld. | Wenn ich Geld hätte, würde ich ein Elektroauto kaufen.\nEs gibt wenig Windkraft. | Wenn es mehr Windkraft gäbe, wäre die Luft sauberer.\nIch habe keine Zeit. | Wenn ich Zeit hätte, würde ich mich engagieren.',
            examples: [
              ['Wenn ich mehr Geld hätte, würde ich ein Elektroauto kaufen.', 'Nếu có nhiều tiền hơn, tôi sẽ mua ô tô điện.'],
              ['Wenn es keine Bienen gäbe, hätte die Landwirtschaft große Probleme.', 'Nếu không có ong, nông nghiệp sẽ gặp vấn đề lớn.'],
            ],
            exercises: [
              fill('Wenn ich einen Garten {hätte}, würde ich Gemüse pflanzen.', 'Nếu có vườn, tôi sẽ trồng rau.'),
              choose('Wenn alle weniger Auto fahren ___, wäre die Luft sauberer.', ['würden', 'werden', 'wurden'], 'würden', { vi: 'Nếu mọi người ít đi ô tô hơn, không khí sẽ sạch hơn.' }),
              order('Wenn / ich / Zeit / hätte, / würde / ich / mich / engagieren.', 'Nếu có thời gian, tôi sẽ tham gia tích cực.'),
            ],
          },
          {
            text_vi:
              'Câu **wenn** đứng trước → vế sau bắt đầu bằng **động từ** (hoặc dann + động từ): Wenn es keine Bienen gäbe, **würden** viele Pflanzen sterben. Có thể đổi thứ tự: Ich würde demonstrieren, wenn ich Zeit **hätte**. So sánh điều kiện **có thật**: Wenn es regnet, bleibe ich zu Hause.',
            examples: [['Ich würde mehr Fahrrad fahren, wenn es mehr Fahrradwege gäbe.', 'Tôi sẽ đi xe đạp nhiều hơn nếu có nhiều đường xe đạp hơn.']],
            exercises: [
              choose('Wenn die Regierung Windkraft fördern würde, ___ weniger Abgase.', ['gäbe es', 'es gäbe', 'gibt es'], 'gäbe es', { vi: 'Nếu chính phủ hỗ trợ điện gió, sẽ ít khí thải hơn.' }),
              transform('Viết câu điều kiện không thật', 'Ich habe kein Auto. Ich fahre mit dem Bus.', [
                'Wenn ich ein Auto hätte, würde ich nicht mit dem Bus fahren.',
                'Wenn ich ein Auto hätte, würde ich nicht mehr mit dem Bus fahren.',
              ]),
              fill('Wenn es mehr Windkraft gäbe, {wäre} die Luft sauberer.', 'Nếu có nhiều điện gió hơn, không khí sẽ sạch hơn.'),
            ],
          },
          {
            text_vi:
              '**Luftverschmutzung** do **Abgase**; **Artenvielfalt** (đa dạng sinh học) bị **bedroht** khi mất **Lebensraum**. Năng lượng **erneuerbar**: **Windkraft**, Solarenergie thay cho **Kraftwerk** than. **eine Rolle spielen** = đóng vai trò; **fördern** = thúc đẩy, hỗ trợ.',
            examples: [['Viele Insekten sind bedroht, weil sie ihren Lebensraum verlieren.', 'Nhiều loài côn trùng bị đe dọa vì mất môi trường sống.']],
            exercises: [
              fill('Bienen spielen eine wichtige {Rolle} in der Landwirtschaft.', 'Ong đóng vai trò quan trọng trong nông nghiệp.'),
              translate('Khí thải có hại cho sức khỏe.', ['Abgase sind schädlich für die Gesundheit.', 'Abgase sind gesundheitsschädlich.']),
            ],
          },
        ],
        mixed: [
          transform('Viết câu điều kiện không thật', 'Ich bin nicht Ministerin. Ich verbiete Plastiktüten nicht.', ['Wenn ich Ministerin wäre, würde ich Plastiktüten verbieten.']),
          choose('Wenn ich du ___, würde ich weniger fliegen.', ['wäre', 'war', 'bin'], 'wäre', { vi: 'Nếu tôi là bạn, tôi sẽ ít bay hơn.' }),
          fill('Wenn wir mehr Bäume pflanzen {würden}, gäbe es mehr Lebensraum für Vögel.', 'Nếu chúng ta trồng nhiều cây hơn, chim sẽ có nhiều nơi sống hơn.'),
          choose('Wenn ich nicht arbeiten ___, würde ich mitkommen.', ['müsste', 'muss', 'musste'], 'müsste', { vi: 'Nếu không phải làm việc, tôi sẽ đi cùng.' }),
          order('Die Luft / wäre / sauberer, / wenn / es / weniger Autos / gäbe.', 'Không khí sẽ sạch hơn nếu có ít ô tô hơn.'),
        ],
      },
      dialogue: {
        title_de: 'Wenn ich Bürgermeisterin wäre …',
        lines: [
          { speaker: 'A', de: 'Die Luftverschmutzung in unserer Stadt ist schlimm. Wenn ich Bürgermeisterin wäre, würde ich das Zentrum für Autos sperren.', vi: 'Ô nhiễm không khí ở thành phố mình tệ quá. Nếu mình là thị trưởng, mình sẽ cấm ô tô vào trung tâm.' },
          { speaker: 'B', de: 'Das wäre toll! Aber dann bräuchten die Leute bessere Busse und Bahnen.', vi: 'Thế thì tuyệt! Nhưng khi đó mọi người cần xe buýt và tàu tốt hơn.' },
          { speaker: 'A', de: 'Genau. Ich würde auch erneuerbare Energie fördern, zum Beispiel Windkraft.', vi: 'Đúng. Mình cũng sẽ hỗ trợ năng lượng tái tạo, ví dụ điện gió.' },
          { speaker: 'B', de: 'Und ich würde mehr Naturschutzgebiete schaffen. Viele Insekten sind bedroht.', vi: 'Còn mình sẽ lập thêm khu bảo tồn. Nhiều loài côn trùng đang bị đe dọa.' },
          { speaker: 'A', de: 'Wenn es keine Bienen gäbe, hätte die Landwirtschaft große Probleme.', vi: 'Nếu không có ong, nông nghiệp sẽ gặp vấn đề lớn.' },
          { speaker: 'B', de: 'Leider sind wir nicht in der Regierung. Aber wir können uns engagieren.', vi: 'Tiếc là chúng ta không ở trong chính phủ. Nhưng chúng ta có thể tham gia tích cực.' },
          { speaker: 'A', de: 'Am Samstag gibt es eine Demonstration für das Klima. Kommst du mit?', vi: 'Thứ Bảy có cuộc biểu tình vì khí hậu. Bạn đi cùng không?' },
          { speaker: 'B', de: 'Wenn ich nicht arbeiten müsste, würde ich sofort mitkommen. Ich frage meinen Chef!', vi: 'Nếu không phải đi làm, mình sẽ đi ngay. Để mình hỏi sếp!' },
        ],
        gloss: { Bürgermeisterin: 'nữ thị trưởng', schlimm: 'tệ', Zentrum: 'trung tâm', sperren: 'cấm, chặn', bräuchten: 'cần (Konjunktiv II)', Bahnen: 'tàu điện', schaffen: 'tạo ra', Demonstration: 'cuộc biểu tình', Klima: 'khí hậu' },
        questions: [
          mc('Nếu là thị trưởng, A sẽ làm gì?', ['cấm ô tô vào trung tâm', 'xây thêm đường', 'mở nhà máy điện'], 'cấm ô tô vào trung tâm'),
          tf('B würde mehr Naturschutzgebiete schaffen.', true),
          mc('Cuộc biểu tình diễn ra khi nào?', ['thứ Bảy', 'Chủ nhật', 'thứ Hai'], 'thứ Bảy'),
          tf('B hat am Samstag frei.', false, { explain: 'Wenn ich nicht arbeiten müsste, würde ich mitkommen.' }),
        ],
        dictation: [4, 7],
      },
      writing_prompt_vi:
        'Nếu bạn là thị trưởng thành phố của mình, bạn sẽ làm gì cho môi trường? Viết 5–6 câu điều kiện không thật (Wenn ich … wäre, würde ich …).',
    },
  ],
  test: {
    grammar: {
      futur: [
        fill('Morgen {wird} es regnen.', 'Ngày mai trời sẽ mưa.'),
        choose('Ich ___ dir helfen.', ['werde', 'wird'], 'werde'),
        choose('Du ___ das schaffen!', ['wirst', 'wird'], 'wirst'),
        order('Die Temperaturen / werden / weiter / steigen.', 'Nhiệt độ sẽ còn tăng.'),
        choose('Ich glaube, dass er bald kommen ___.', ['wird', 'werden'], 'wird'),
        fill('Wir werden in Zukunft mehr Wasser {brauchen}.', 'Trong tương lai chúng ta sẽ cần nhiều nước hơn.'),
      ],
      lassen: [
        fill('Ich {lasse} mein Auto reparieren.', 'Tôi mang ô tô đi sửa.'),
        choose('Er ___ sich die Haare schneiden.', ['lässt', 'lasst'], 'lässt'),
        choose('Ich habe das Fahrrad reparieren ___.', ['lassen', 'gelassen'], 'lassen'),
        choose('Ich habe den Schlüssel zu Hause ___.', ['gelassen', 'lassen'], 'gelassen'),
        order('Wir / lassen / die Kinder / im Garten / spielen.', 'Chúng tôi để bọn trẻ chơi trong vườn.'),
        fill('Das Glas {lässt} sich gut recyceln.', 'Thủy tinh dễ tái chế.'),
      ],
      irreal: [
        fill('Wenn ich Zeit {hätte}, würde ich kommen.', 'Nếu có thời gian, tôi sẽ đến.'),
        choose('Wenn ich reich ___, würde ich reisen.', ['wäre', 'war'], 'wäre'),
        choose('Wenn es keine Autos gäbe, ___ die Luft sauberer.', ['wäre', 'ist'], 'wäre'),
        order('Wenn / ich / du / wäre, / würde / ich / das / machen.', 'Nếu tôi là bạn, tôi sẽ làm điều đó.'),
        choose('Ich würde mitkommen, wenn ich nicht arbeiten ___.', ['müsste', 'muss'], 'müsste'),
        fill('Wenn wir weniger fliegen {würden}, gäbe es weniger CO2.', 'Nếu chúng ta bay ít hơn, sẽ có ít CO2 hơn.'),
      ],
    },
    reading: {
      title_de: 'Eine Stadt ohne Autos?',
      text_de:
        'In vielen Städten ist die Luftverschmutzung ein großes Problem. Die Stadt Freiburg hat deshalb schon vor Jahren Maßnahmen getroffen. Im Zentrum dürfen fast keine Autos fahren, und es gibt sehr viele Fahrradwege. Viele Familien lassen ihr Auto zu Hause oder haben gar keins. Experten glauben, dass in Zukunft noch mehr Städte diesem Beispiel folgen werden. Die Bürgermeisterin sagt: „Wenn alle Städte so handeln würden, wäre die Luft in Deutschland viel sauberer.“ Aber nicht alle sind zufrieden. Einige Geschäftsleute meinen, sie hätten weniger Kunden, weil die Leute nicht mehr mit dem Auto kommen können.',
      gloss: {
        'Maßnahmen getroffen': 'đưa ra biện pháp',
        'gar keins': 'không có cái nào',
        Experten: 'chuyên gia',
        folgen: 'noi theo',
        handeln: 'hành động',
        Geschäftsleute: 'giới kinh doanh',
        Kunden: 'khách hàng',
        hätten: 'có (lời dẫn)',
      },
      questions: [
        tf('Im Zentrum von Freiburg dürfen fast keine Autos fahren.', true),
        mc('Các chuyên gia tin điều gì?', ['nhiều thành phố khác sẽ làm theo', 'ô tô sẽ tăng', 'không gì thay đổi'], 'nhiều thành phố khác sẽ làm theo'),
        tf('Alle Menschen in Freiburg sind zufrieden.', false, { explain: 'Aber nicht alle sind zufrieden.' }),
        mc('Một số người kinh doanh lo ngại điều gì?', ['ít khách hơn', 'nhiều tiếng ồn', 'thuế cao'], 'ít khách hơn'),
      ],
    },
  },
});
