// B2 · 05 Môi trường và năng lượng — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b2-05',
  points: [
    {
      key: 'konjunktiv-1',
      rule_key: 'konjunktiv-i-indirekte-rede',
      category: 'conjugation',
      title_vi: 'Konjunktiv I – lời nói gián tiếp',
      explanation_vi: 'Báo chí thuật lại lời người khác bằng Konjunktiv I: gốc động từ + -e ở ngôi 3 số ít (er habe, könne, werde, gehe); sein: er sei, sie seien. Người viết không khẳng định điều đó là đúng.',
    },
    {
      key: 'dennoch-folglich',
      rule_key: 'dennoch-folglich-inversion',
      category: 'verb_position',
      title_vi: 'Trạng từ nối ý: dennoch, folglich, infolgedessen',
      explanation_vi: 'dennoch (tuy vậy), folglich / infolgedessen (do đó) là trạng từ, không phải liên từ: đứng ở vị trí 1 thì động từ ngay sau (Dennoch investiert die Stadt). Cũng đứng được sau động từ: Die Stadt investiert dennoch.',
    },
    {
      key: 'bedingung-ohne-wenn',
      rule_key: 'konditionalsatz-ohne-wenn',
      category: 'verb_position',
      title_vi: 'Câu điều kiện không có wenn',
      explanation_vi: 'Bỏ wenn thì động từ chia của câu điều kiện lên đầu: Wenn alle mitmachen würden → Würden alle mitmachen, … Vế chính đứng sau, thường mở bằng so/dann hoặc động từ.',
    },
  ],
  lessons: [
    {
      title_vi: 'Tin tức khí hậu',
      goal_vi: 'Đọc và thuật lại tin về khí hậu, thiên tai bằng lời nói gián tiếp (Konjunktiv I).',
      items: [
        'Emission', 'Klimaschutz', 'Klimaziel', 'Wasserknappheit', 'Naturkatastrophe', 'Ökosystem', 'Tierart', 'Verursacher',
        'Umweltaktivist', 'Abkommen', 'warnen', 'appellieren', 'gefährden', 'unumkehrbar', 'verbindlich',
        'Konjunktiv I: lời nói gián tiếp', 'Konjunktiv I của sein', 'Erderhitzung', 'Hitzewelle', 'Starkregen', 'Waldbrand',
        'Gletscher', 'Klimaanpassung', 'aufheizen', 'überfluten', 'vertrocknen', 'alarmierend', 'bedenklich', 'menschengemacht',
        'Klimakonferenz', 'Treibhauseffekt', 'Ozonschicht', 'abmildern',
      ],
      grammar: {
        point: 'konjunktiv-1',
        sections: [
          {
            text_vi:
              'Tin tức thuật lại lời người khác bằng **Konjunktiv I**: người viết chỉ **truyền lại**, không khẳng định. Dạng hay gặp nhất là **ngôi 3 số ít**: gốc động từ + **-e**: er **habe**, er **könne**, er **müsse**, er **werde**, er **gehe**. Riêng **sein**: er **sei**. Tiếng Việt chỉ cần "ông ấy nói rằng…", tiếng Đức đổi cả dạng động từ.',
            table: 'Nguyên mẫu | Indikativ | Konjunktiv I\nhaben | er hat | er habe\nsein | er ist | er sei\nkönnen | er kann | er könne\nwerden | er wird | er werde\nmüssen | er muss | er müsse',
            examples: [
              ['Die Ministerin sagte, die Lage sei ernst.', 'Bà bộ trưởng nói tình hình nghiêm trọng.'],
              ['Ein Experte erklärte, man müsse sofort handeln.', 'Một chuyên gia giải thích rằng phải hành động ngay.'],
            ],
            exercises: [
              choose('Der Forscher sagt, die Erderhitzung ___ menschengemacht.', ['sei', 'ist sein', 'wäre'], 'sei', { vi: 'Nhà nghiên cứu nói sự nóng lên của trái đất là do con người gây ra.' }),
              fill('Die Umweltaktivistin erklärte, sie {habe} keine Angst vor Kritik. (haben)', 'Nhà hoạt động môi trường giải thích rằng cô không sợ bị chỉ trích.'),
              choose('Der Minister betonte, man ___ die Klimaziele erreichen.', ['könne', 'kann', 'könnte'], 'könne', { vi: 'Bộ trưởng nhấn mạnh rằng có thể đạt được các mục tiêu khí hậu.' }),
            ],
          },
          {
            text_vi:
              'Lời gián tiếp có thể có hoặc không có **dass**. Không có dass thì **động từ ở vị trí 2**: Er sagte, die Lage **sei** ernst. Có dass thì động từ **cuối câu**: Er sagte, dass die Lage ernst **sei**. Đại từ đổi theo người nói: "Ich **bin** besorgt" → Sie sagte, **sie sei** besorgt. Số nhiều của sein: sie **seien**.',
            table: 'Lời trực tiếp | Lời gián tiếp\n„Ich bin besorgt.“ | Sie sagte, sie sei besorgt.\n„Wir sind bereit.“ | Sie sagten, sie seien bereit.\n„Die Lage ist ernst.“ | Er sagte, dass die Lage ernst sei.',
            examples: [['Die Aktivisten sagten, sie seien enttäuscht von der Klimakonferenz.', 'Các nhà hoạt động nói họ thất vọng về hội nghị khí hậu.']],
            exercises: [
              transform('Chuyển sang lời gián tiếp (Konjunktiv I)', 'Die Expertin sagt: „Die Lage ist alarmierend.“', [
                'Die Expertin sagt, die Lage sei alarmierend.',
                'Die Expertin sagt, dass die Lage alarmierend sei.',
              ]),
              choose('Die Forscher sagten, sie ___ sehr besorgt.', ['seien', 'sei', 'sind'], 'seien', { vi: 'Các nhà nghiên cứu nói họ rất lo ngại.' }),
              fill('Er sagte, dass er morgen zur Konferenz fahren {werde}.', 'Ông ấy nói rằng ngày mai ông sẽ đi dự hội nghị.'),
            ],
          },
          {
            text_vi:
              'Động từ thuật lại: **sagen, erklären, betonen** (nhấn mạnh), **warnen vor** + Dat (cảnh báo), **appellieren an** + Akk (kêu gọi), **berichten** (đưa tin). Từ tin khí hậu: **Hitzewelle**, **Starkregen**, **Waldbrand**, **Gletscher**; hậu quả có thể **unumkehrbar** (không thể đảo ngược).',
            examples: [['Experten warnen vor weiteren Hitzewellen.', 'Các chuyên gia cảnh báo về các đợt nắng nóng tiếp theo.']],
            exercises: [
              fill('Die Wissenschaftler warnen {vor} schweren Waldbränden.', 'Các nhà khoa học cảnh báo về những vụ cháy rừng lớn.'),
              translate('Bộ trưởng nói tình hình nghiêm trọng.', ['Der Minister sagte, die Lage sei ernst.', 'Der Minister sagt, die Lage sei ernst.', 'Der Minister sagte, dass die Lage ernst sei.']),
            ],
          },
        ],
        mixed: [
          choose('Die Zeitung berichtet, der Gletscher ___ in 30 Jahren verschwunden.', ['werde', 'wird', 'würden'], 'werde', { vi: 'Báo đưa tin sông băng sẽ biến mất trong 30 năm.' }),
          fill('Der Sprecher erklärte, die Stadt {müsse} sich an die Hitze anpassen. (müssen)', 'Người phát ngôn giải thích rằng thành phố phải thích nghi với cái nóng.'),
          transform('Chuyển sang lời gián tiếp', 'Die Bürgermeisterin sagt: „Ich habe einen Plan.“', [
            'Die Bürgermeisterin sagt, sie habe einen Plan.',
            'Die Bürgermeisterin sagt, dass sie einen Plan habe.',
          ]),
          choose('Die Aktivisten appellierten ___ die Regierung.', ['an', 'auf', 'für'], 'an', { vi: 'Các nhà hoạt động kêu gọi chính phủ.' }),
          order('Der Experte / sagte, / das Abkommen / sei / nicht / verbindlich.', 'Chuyên gia nói hiệp định không có tính ràng buộc.'),
        ],
      },
      dialogue: {
        title_de: 'Nach der Klimakonferenz',
        lines: [
          { speaker: 'A', de: 'Hast du gehört, was auf der Klimakonferenz beschlossen wurde?', vi: 'Bạn nghe hội nghị khí hậu đã quyết định gì chưa?' },
          { speaker: 'B', de: 'Ja, im Radio hieß es, die Länder hätten ein neues Abkommen unterschrieben.', vi: 'Có, trên đài nói các nước đã ký một hiệp định mới.' },
          { speaker: 'A', de: 'Und ist es verbindlich?', vi: 'Thế nó có tính ràng buộc không?' },
          { speaker: 'B', de: 'Leider nicht. Eine Expertin sagte, das Abkommen sei ein guter Anfang, aber zu schwach.', vi: 'Tiếc là không. Một chuyên gia nói hiệp định là khởi đầu tốt nhưng quá yếu.' },
          { speaker: 'A', de: 'Die Umweltaktivisten sind bestimmt enttäuscht.', vi: 'Các nhà hoạt động môi trường chắc thất vọng lắm.' },
          { speaker: 'B', de: 'Ja, ihre Sprecherin erklärte, man habe keine Zeit mehr zu verlieren.', vi: 'Ừ, nữ phát ngôn viên của họ giải thích rằng không còn thời gian để lãng phí nữa.' },
          { speaker: 'A', de: 'Das stimmt. Die Hitzewellen und der Starkregen werden immer schlimmer.', vi: 'Đúng vậy. Nắng nóng và mưa lớn ngày càng tồi tệ.' },
          { speaker: 'B', de: 'Der Minister betonte, Deutschland werde die Klimaziele trotzdem erreichen.', vi: 'Bộ trưởng nhấn mạnh rằng Đức vẫn sẽ đạt các mục tiêu khí hậu.' },
          { speaker: 'A', de: 'Das sagen sie jedes Jahr. Ich glaube es erst, wenn ich es sehe.', vi: 'Năm nào họ cũng nói vậy. Khi nào thấy mình mới tin.' },
        ],
        gloss: { beschlossen: 'quyết định (beschließen)', 'hieß es': 'người ta nói rằng', hätten: 'đã (Konjunktiv của haben)', Anfang: 'sự khởi đầu', schwach: 'yếu', Sprecherin: 'nữ phát ngôn viên', schlimmer: 'tồi tệ hơn' },
        questions: [
          mc('Các nước đã làm gì tại hội nghị?', ['ký một hiệp định mới', 'rời hội nghị', 'tăng thuế xăng'], 'ký một hiệp định mới'),
          tf('Das Abkommen ist verbindlich.', false, { explain: 'Leider nicht.' }),
          mc('Chuyên gia đánh giá hiệp định thế nào?', ['khởi đầu tốt nhưng quá yếu', 'hoàn hảo', 'vô nghĩa'], 'khởi đầu tốt nhưng quá yếu'),
          tf('A glaubt dem Minister sofort.', false, { explain: 'Ich glaube es erst, wenn ich es sehe.' }),
        ],
        dictation: [3, 7],
      },
      writing_prompt_vi:
        'Thuật lại một bản tin về thời tiết cực đoan hoặc môi trường (5–7 câu) như phóng viên: ai nói gì, cảnh báo gì; dùng Konjunktiv I ít nhất bốn lần (sei, habe, müsse, werde…).',
    },
    {
      title_vi: 'Chuyển đổi năng lượng',
      goal_vi: 'Nói về các nguồn năng lượng và tiết kiệm điện; nối ý tương phản và kết quả bằng dennoch, folglich.',
      items: [
        'Energiewende', 'Kernkraft', 'Kohle', 'Erdgas', 'Solaranlage', 'Windrad', 'Stromverbrauch', 'Energieeffizienz', 'Anreiz',
        'ausstoßen', 'umrüsten', 'subventionieren', 'ausbauen', 'klimaneutral', 'fossil', 'energiesparend', 'dennoch',
        'folglich', 'infolgedessen', 'aus der Kohle aussteigen', 'dennoch / folglich: nối ý', 'Wärmepumpe', 'Dämmung',
        'Energiequelle', 'Stromnetz', 'einsparen', 'dämmen', 'CO2-neutral', 'energieintensiv', 'auf erneuerbare Energien setzen',
        'den Gürtel enger schnallen',
      ],
      grammar: {
        point: 'dennoch-folglich',
        sections: [
          {
            text_vi:
              '**dennoch** = "tuy vậy, dù vậy" (giống trotzdem nhưng trang trọng hơn). **folglich** và **infolgedessen** = "do đó, vì thế" (giống deshalb, dùng trong văn viết). Chúng là **trạng từ**, nên khi đứng **vị trí 1** thì **động từ đứng ngay sau**, chủ ngữ đứng sau động từ: Die Kosten sind hoch. **Dennoch investiert** die Stadt.',
            table: 'Trạng từ | Nghĩa | Ví dụ\ndennoch | tuy vậy | Dennoch baut die Stadt Windräder.\nfolglich | do đó | Folglich steigen die Preise.\ninfolgedessen | vì thế, kết quả là | Infolgedessen sinkt der Verbrauch.',
            examples: [
              ['Solaranlagen sind teuer. Dennoch lohnen sie sich langfristig.', 'Hệ thống điện mặt trời đắt. Tuy vậy về lâu dài vẫn đáng.'],
              ['Der Gaspreis ist gestiegen. Folglich sparen viele Haushalte Energie.', 'Giá khí đốt tăng. Do đó nhiều hộ gia đình tiết kiệm năng lượng.'],
            ],
            exercises: [
              choose('Kohle ist billig. Dennoch ___ das Land aus der Kohle aus.', ['steigt', 'das Land steigt', 'steigen'], 'steigt', { vi: 'Than rẻ. Tuy vậy đất nước vẫn từ bỏ điện than.' }),
              fill('Die Nachfrage ist gestiegen. {Folglich} sind die Preise höher.', 'Nhu cầu tăng. Do đó giá cao hơn.'),
              order('Infolgedessen / sank / der Stromverbrauch / um zehn Prozent.', 'Kết quả là lượng tiêu thụ điện giảm 10%.'),
            ],
          },
          {
            text_vi:
              'Các trạng từ này cũng đứng được **sau động từ**: Die Stadt investiert **dennoch** in Windräder. Khác với **obwohl** và **weil** (liên từ, động từ cuối câu) và **aber** (vị trí 0, không đổi trật tự). So sánh: **Obwohl** es teuer **ist**, … / Es ist teuer, **aber** wir **kaufen** … / Es ist teuer. **Dennoch kaufen** wir …',
            table: 'Loại từ | Ví dụ\nliên từ câu phụ (động từ cuối) | Obwohl es teuer ist, kaufen wir es.\nliên từ vị trí 0 | Es ist teuer, aber wir kaufen es.\ntrạng từ vị trí 1 | Es ist teuer. Dennoch kaufen wir es.',
            examples: [['Wir haben das Haus gedämmt und sparen folglich viel Energie.', 'Chúng tôi đã cách nhiệt ngôi nhà và do đó tiết kiệm nhiều năng lượng.']],
            exercises: [
              transform('Viết lại với "dennoch" ở đầu câu thứ hai', 'Obwohl Wärmepumpen teuer sind, kaufen viele Leute sie.', [
                'Wärmepumpen sind teuer. Dennoch kaufen viele Leute sie.',
                'Wärmepumpen sind teuer, dennoch kaufen viele Leute sie.',
              ]),
              choose('Die Regierung subventioniert Solaranlagen, ___ kaufen mehr Menschen eine.', ['folglich', 'obwohl', 'weil'], 'folglich', { vi: 'Chính phủ trợ giá điện mặt trời, do đó nhiều người mua hơn.' }),
              transform('Viết lại với "folglich"', 'Weil das Haus gut gedämmt ist, braucht es wenig Energie.', [
                'Das Haus ist gut gedämmt. Folglich braucht es wenig Energie.',
                'Das Haus ist gut gedämmt, folglich braucht es wenig Energie.',
              ]),
            ],
          },
        ],
        mixed: [
          choose('Windräder sind umstritten. ___ baut die Gemeinde zwei neue.', ['Dennoch', 'Obwohl', 'Weil'], 'Dennoch', { vi: 'Cối xay gió gây tranh cãi. Tuy vậy xã vẫn xây hai cái mới.' }),
          fill('Erdgas wurde knapp. Infolgedessen {stiegen} die Preise stark. (steigen, Präteritum)', 'Khí đốt trở nên khan hiếm. Kết quả là giá tăng mạnh.'),
          choose('Der Strom ist teuer. Folglich ___ wir weniger.', ['heizen', 'wir heizen', 'heizt'], 'heizen', { vi: 'Điện đắt. Do đó chúng tôi sưởi ít hơn.' }),
          order('Fossile Energie / ist / billig, / dennoch / setzt / das Land / auf erneuerbare Energien.', 'Năng lượng hóa thạch rẻ, tuy vậy đất nước vẫn đặt cược vào năng lượng tái tạo.'),
          translate('Tuy vậy chúng tôi vẫn lắp một hệ thống điện mặt trời.', ['Dennoch installieren wir eine Solaranlage.', 'Dennoch haben wir eine Solaranlage installiert.', 'Dennoch bauen wir eine Solaranlage.']),
        ],
      },
      dialogue: {
        title_de: 'Eine Wärmepumpe für das alte Haus?',
        lines: [
          { speaker: 'A', de: 'Unsere Gasrechnung ist schon wieder gestiegen. Wir müssen den Gürtel enger schnallen.', vi: 'Hóa đơn gas nhà mình lại tăng nữa. Phải thắt lưng buộc bụng thôi.' },
          { speaker: 'B', de: 'Habt ihr schon über eine Wärmepumpe nachgedacht?', vi: 'Nhà bạn đã nghĩ đến bơm nhiệt chưa?' },
          { speaker: 'A', de: 'Ja, aber das Haus ist alt und schlecht gedämmt. Folglich bräuchten wir zuerst eine neue Dämmung.', vi: 'Có, nhưng nhà cũ và cách nhiệt kém. Do đó trước hết phải làm lớp cách nhiệt mới.' },
          { speaker: 'B', de: 'Das ist teuer. Dennoch lohnt es sich, weil ihr langfristig viel Energie einspart.', vi: 'Cái đó đắt. Tuy vậy vẫn đáng, vì về lâu dài nhà bạn tiết kiệm được nhiều năng lượng.' },
          { speaker: 'A', de: 'Gibt es dafür Anreize vom Staat?', vi: 'Nhà nước có hỗ trợ gì cho việc này không?' },
          { speaker: 'B', de: 'Ja, der Umbau wird subventioniert. Infolgedessen haben viele Nachbarn schon umgerüstet.', vi: 'Có, việc cải tạo được trợ giá. Kết quả là nhiều hàng xóm đã chuyển đổi rồi.' },
          { speaker: 'A', de: 'Und auf dem Dach könnten wir eine Solaranlage installieren.', vi: 'Và trên mái mình có thể lắp hệ thống điện mặt trời.' },
          { speaker: 'B', de: 'Genau. Dann seid ihr fast unabhängig von fossilen Energiequellen.', vi: 'Đúng vậy. Khi đó nhà bạn gần như không phụ thuộc vào nguồn năng lượng hóa thạch.' },
          { speaker: 'A', de: 'Klingt gut. Ich rede heute Abend mit meiner Frau darüber.', vi: 'Nghe hay đấy. Tối nay mình sẽ bàn với vợ.' },
        ],
        gloss: { Gasrechnung: 'hóa đơn gas', bräuchten: 'sẽ cần (Konjunktiv II của brauchen)', langfristig: 'về lâu dài', Umbau: 'việc cải tạo', Dach: 'mái nhà', installieren: 'lắp đặt', unabhängig: 'không phụ thuộc' },
        questions: [
          mc('Vấn đề của A là gì?', ['hóa đơn gas tăng', 'mái nhà bị dột', 'mất điện'], 'hóa đơn gas tăng'),
          tf('Das Haus von A ist neu und gut gedämmt.', false, { explain: 'Das Haus ist alt und schlecht gedämmt.' }),
          mc('Vì sao nhiều hàng xóm đã chuyển đổi?', ['việc cải tạo được trợ giá', 'gas bị cấm', 'nhà mới'], 'việc cải tạo được trợ giá'),
          tf('A möchte mit seiner Frau über die Pläne sprechen.', true),
        ],
        dictation: [2, 3],
      },
      writing_prompt_vi:
        'Viết một đoạn (6–8 câu) về cách gia đình bạn có thể tiết kiệm năng lượng: vấn đề, giải pháp, chi phí, kết quả; dùng ít nhất hai lần dennoch và hai lần folglich hoặc infolgedessen.',
    },
    {
      title_vi: 'Lối sống bền vững',
      goal_vi: 'Bàn về rác thải, tiêu dùng và trách nhiệm cá nhân; nêu điều kiện bằng câu không có wenn.',
      items: [
        'Nachhaltigkeit', 'Umweltbelastung', 'Fußabdruck', 'Abfallvermeidung', 'Verbot', 'eindämmen', 'verringern', 'belasten',
        'bewahren', 'umweltschädlich', 'verantwortlich', 'drastisch', 'einen Beitrag leisten', 'Maßnahmen ergreifen',
        'auf Kosten der Umwelt', 'Câu điều kiện không có wenn', 'Biomüll', 'Kreislaufwirtschaft', 'Mikroplastik',
        'Einwegprodukt', 'Umweltzone', 'Tempolimit', 'Umweltbewegung', 'Verschwendung', 'Lebensmittelverschwendung',
        'aufforsten', 'kompensieren', 'umdenken', 'wiederverwertbar', 'biologisch abbaubar', 'zukunftsfähig',
        'mit gutem Beispiel vorangehen', 'Verantwortung tragen', 'ressourcenschonend', 'ins Gewicht fallen',
        'den Planeten retten',
      ],
      grammar: {
        point: 'bedingung-ohne-wenn',
        sections: [
          {
            text_vi:
              'Trong văn viết và lời nói trang trọng, câu điều kiện có thể **bỏ wenn**. Khi đó **động từ chia** lên **đầu câu**, giống câu hỏi có/không: **Wenn** alle mitmachen **würden**, … → **Würden** alle mitmachen, … Vế chính đứng sau, thường bắt đầu bằng **động từ** hoặc **so / dann**.',
            table: 'Với wenn | Không có wenn\nWenn ich mehr Zeit hätte, … | Hätte ich mehr Zeit, …\nWenn es morgen regnet, … | Regnet es morgen, …\nWenn alle mitmachen würden, … | Würden alle mitmachen, …',
            examples: [
              ['Würden alle weniger Fleisch essen, sänken die Emissionen deutlich.', 'Nếu mọi người ăn ít thịt hơn, khí thải sẽ giảm rõ rệt.'],
              ['Fährt man mit dem Rad, spart man Geld und CO2.', 'Nếu đi xe đạp, người ta tiết kiệm tiền và CO2.'],
            ],
            exercises: [
              choose('___ ich ein Auto, würde ich es selten benutzen.', ['Hätte', 'Wenn hätte', 'Ich hätte'], 'Hätte', { vi: 'Nếu tôi có ô tô, tôi sẽ ít dùng.' }),
              transform('Bỏ "wenn"', 'Wenn alle Plastik vermeiden würden, gäbe es weniger Mikroplastik.', [
                'Würden alle Plastik vermeiden, gäbe es weniger Mikroplastik.',
              ]),
              order('Kauft / man / regional, / spart / man / Transportwege.', 'Nếu mua hàng địa phương, người ta tiết kiệm quãng đường vận chuyển.'),
            ],
          },
          {
            text_vi:
              'Dạng này dùng được cả với **Indikativ** (điều kiện thật) và **Konjunktiv II** (điều kiện giả định). Ở quá khứ: **Hätten** wir früher **gehandelt**, **wäre** das Klima heute stabiler. Phân biệt với **câu hỏi**: câu điều kiện không có wenn luôn có **vế chính theo sau** và **dấu phẩy**, không có dấu hỏi.',
            examples: [['Hätte die Stadt früher Maßnahmen ergriffen, wäre die Luft heute besser.', 'Nếu thành phố áp dụng biện pháp sớm hơn thì giờ không khí đã tốt hơn.']],
            exercises: [
              fill('{Hätten} wir früher umgedacht, wäre das Problem kleiner. (haben)', 'Nếu chúng ta thay đổi tư duy sớm hơn, vấn đề đã nhỏ hơn.'),
              choose('Gibt es ein Tempolimit, ___ weniger Unfälle.', ['passieren', 'passieren sie', 'dann passieren sie'], 'passieren', { vi: 'Nếu có giới hạn tốc độ, sẽ xảy ra ít tai nạn hơn.' }),
              translate('Nếu tôi có nhiều tiền hơn, tôi sẽ mua sản phẩm hữu cơ.', ['Hätte ich mehr Geld, würde ich Bio-Produkte kaufen.', 'Hätte ich mehr Geld, würde ich Bioprodukte kaufen.', 'Hätte ich mehr Geld, kaufte ich Bio-Produkte.']),
            ],
          },
        ],
        mixed: [
          choose('___ jeder einen kleinen Beitrag, könnten wir viel erreichen.', ['Leistete', 'Wenn leistete', 'Jeder leistete'], 'Leistete', { vi: 'Nếu mỗi người đóng góp một chút, chúng ta có thể đạt được nhiều.' }),
          transform('Bỏ "wenn"', 'Wenn man Biomüll trennt, entsteht wertvoller Kompost.', ['Trennt man Biomüll, entsteht wertvoller Kompost.']),
          fill('{Würde} die Stadt mehr Bäume pflanzen, wäre es im Sommer kühler.', 'Nếu thành phố trồng thêm cây, mùa hè sẽ mát hơn.'),
          choose('Hätten wir weniger Lebensmittel verschwendet, ___ wir Geld gespart.', ['hätten', 'wären', 'würden'], 'hätten', { vi: 'Nếu chúng ta ít lãng phí thực phẩm hơn, chúng ta đã tiết kiệm được tiền.' }),
          order('Gäbe / es / keine Einwegprodukte, / hätten / wir / weniger Müll.', 'Nếu không có sản phẩm dùng một lần, chúng ta sẽ có ít rác hơn.'),
        ],
      },
      dialogue: {
        title_de: 'Kann ich den Planeten retten?',
        lines: [
          { speaker: 'A', de: 'Ich frage mich manchmal, ob mein Verhalten überhaupt ins Gewicht fällt.', vi: 'Đôi khi mình tự hỏi cách mình sống có quan trọng gì không.' },
          { speaker: 'B', de: 'Natürlich! Würde jeder so denken wie du, würde sich nie etwas ändern.', vi: 'Tất nhiên rồi! Nếu ai cũng nghĩ như bạn, sẽ chẳng bao giờ có gì thay đổi.' },
          { speaker: 'A', de: 'Aber die großen Firmen sind doch die Hauptverursacher.', vi: 'Nhưng các công ty lớn mới là thủ phạm chính mà.' },
          { speaker: 'B', de: 'Das stimmt. Kaufen wir aber keine Einwegprodukte mehr, müssen die Firmen umdenken.', vi: 'Đúng vậy. Nhưng nếu chúng ta không mua đồ dùng một lần nữa, các công ty phải thay đổi tư duy.' },
          { speaker: 'A', de: 'Ich versuche schon, Lebensmittelverschwendung zu vermeiden und Biomüll zu trennen.', vi: 'Mình đã cố tránh lãng phí thực phẩm và phân loại rác hữu cơ.' },
          { speaker: 'B', de: 'Super. Und hättest du ein Fahrrad, könntest du auch das Auto öfter stehen lassen.', vi: 'Tuyệt. Và nếu bạn có xe đạp, bạn có thể để ô tô ở nhà thường xuyên hơn.' },
          { speaker: 'A', de: 'Gute Idee. In der Umweltzone ist Autofahren sowieso teuer geworden.', vi: 'Ý hay. Trong vùng hạn chế khí thải thì lái xe dù sao cũng đắt lên rồi.' },
          { speaker: 'B', de: 'Siehst du? Wenn wir alle mit gutem Beispiel vorangehen, tragen wir gemeinsam Verantwortung.', vi: 'Thấy chưa? Nếu tất cả chúng ta làm gương, chúng ta cùng nhau chịu trách nhiệm.' },
        ],
        gloss: { 'frage mich': 'tự hỏi (sich fragen)', überhaupt: 'có … hay không, rốt cuộc', Hauptverursacher: 'thủ phạm chính', vermeiden: 'tránh', trennen: 'phân loại', 'stehen lassen': 'để yên, không dùng', sowieso: 'dù sao', gemeinsam: 'cùng nhau' },
        questions: [
          mc('A băn khoăn điều gì?', ['cách mình sống có quan trọng không', 'giá xe đạp', 'chỗ đổ rác'], 'cách mình sống có quan trọng không'),
          tf('B meint, das Verhalten jedes Einzelnen ist unwichtig.', false, { explain: 'Natürlich! Würde jeder so denken wie du, würde sich nie etwas ändern.' }),
          mc('A đã làm gì để bảo vệ môi trường?', ['tránh lãng phí thực phẩm và phân loại rác hữu cơ', 'bán ô tô', 'trồng rừng'], 'tránh lãng phí thực phẩm và phân loại rác hữu cơ'),
          tf('In der Umweltzone ist Autofahren teurer geworden.', true),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi:
        'Viết một bài ý kiến ngắn (6–8 câu): mỗi cá nhân có thể làm gì cho môi trường? Dùng ít nhất ba câu điều kiện không có wenn (Würde jeder …, Kauft man …, Hätten wir …).',
    },
  ],
  test: {
    grammar: {
      'konjunktiv-1': [
        choose('Der Minister sagte, die Lage ___ ernst.', ['sei', 'ist', 'wäre sein'], 'sei'),
        fill('Sie erklärte, sie {habe} keine Zeit. (haben)', 'Cô ấy giải thích rằng cô không có thời gian.'),
        choose('Die Experten sagten, sie ___ besorgt.', ['seien', 'sei', 'sind'], 'seien'),
        fill('Er betonte, man {müsse} sofort handeln. (müssen)', 'Ông ấy nhấn mạnh rằng phải hành động ngay.'),
        order('Die Zeitung / schreibt, / der Sommer / werde / heiß.', 'Báo viết rằng mùa hè sẽ nóng.'),
        choose('Sie sagt, dass sie morgen kommen ___.', ['könne', 'kann', 'können'], 'könne'),
      ],
      'dennoch-folglich': [
        choose('Es regnete. Dennoch ___ wir spazieren.', ['gingen', 'wir gingen', 'gehen wir nicht'], 'gingen'),
        fill('Der Preis stieg. {Folglich} kauften weniger Leute.', 'Giá tăng. Do đó ít người mua hơn.'),
        choose('Er war krank. ___ kam er zur Arbeit.', ['Dennoch', 'Obwohl', 'Weil'], 'Dennoch'),
        choose('Das Haus ist gedämmt. Folglich ___ es wenig Energie.', ['braucht', 'es braucht', 'brauchen'], 'braucht'),
        order('Infolgedessen / stiegen / die Preise.', 'Kết quả là giá tăng.'),
        fill('Die Aufgabe war schwer. Dennoch {haben} wir sie geschafft.', 'Nhiệm vụ khó. Tuy vậy chúng tôi đã làm được.'),
      ],
      'bedingung-ohne-wenn': [
        choose('___ ich Zeit, käme ich mit.', ['Hätte', 'Wenn hätte', 'Ich hätte'], 'Hätte'),
        fill('{Regnet} es morgen, bleiben wir zu Hause. (regnen)', 'Nếu mai mưa, chúng ta ở nhà.'),
        choose('Würden alle mitmachen, ___ das Problem gelöst.', ['wäre', 'ist', 'sei'], 'wäre'),
        order('Hätte / ich / mehr Geld, / würde / ich / reisen.', 'Nếu có nhiều tiền hơn, tôi sẽ đi du lịch.'),
        choose('___ man früher losfährt, kommt man pünktlich an.', ['Fährt', 'Wenn fährt', 'Man fährt'], 'Fährt'),
        fill('{Wäre} das Wetter besser, gingen wir schwimmen. (sein)', 'Nếu thời tiết đẹp hơn, chúng tôi đã đi bơi.'),
      ],
    },
    reading: {
      title_de: 'Eine Stadt ohne Autos?',
      text_de:
        'Die Stadt Freiburg gilt als Vorbild für Nachhaltigkeit. Im Stadtteil Vauban gibt es kaum Autos, dafür viele Fahrräder und eine gute Straßenbahn. Der Bürgermeister sagte in einem Interview, das Modell sei ein Erfolg. Die Luft sei sauberer und die Kinder könnten sicher auf der Straße spielen. Dennoch gibt es auch Kritik: Wer ein Auto besitzt, muss teure Parkplätze am Rand des Viertels mieten. Folglich ziehen manche Familien wieder weg. Würden mehr Städte solche Projekte starten, könnten die Emissionen im Verkehr deutlich sinken. Experten warnen allerdings, man könne das Modell nicht einfach auf jede Stadt übertragen.',
      gloss: {
        'gilt als': 'được coi là (gelten als)',
        Stadtteil: 'khu phố',
        Straßenbahn: 'tàu điện',
        besitzt: 'sở hữu (besitzen)',
        Rand: 'rìa',
        Viertels: 'khu (Viertel)',
        übertragen: 'áp dụng sang, chuyển sang',
      },
      questions: [
        tf('Im Stadtteil Vauban gibt es sehr viele Autos.', false, { explain: 'Im Stadtteil Vauban gibt es kaum Autos.' }),
        mc('Theo thị trưởng, mô hình mang lại điều gì?', ['không khí sạch hơn và trẻ em chơi an toàn', 'nhiều chỗ đậu xe hơn', 'giá nhà rẻ hơn'], 'không khí sạch hơn và trẻ em chơi an toàn'),
        mc('Vì sao một số gia đình chuyển đi?', ['phải thuê chỗ đậu xe đắt', 'không có trường học', 'quá ồn'], 'phải thuê chỗ đậu xe đắt'),
        tf('Experten meinen, man könne das Modell auf jede Stadt übertragen.', false, { explain: 'Man könne das Modell nicht einfach auf jede Stadt übertragen.' }),
      ],
    },
  },
});
