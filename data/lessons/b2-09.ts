// B2 · 09 Khoa học và phát minh — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b2-09',
  points: [
    {
      key: 'aufgrund',
      rule_key: 'genitiv-praep-aufgrund-infolge',
      category: 'case',
      title_vi: 'aufgrund, infolge, angesichts + Genitiv',
      explanation_vi: 'Văn viết nêu nguyên nhân bằng giới từ Genitiv: aufgrund (do, vì), infolge (do hậu quả của), angesichts (trước tình hình). aufgrund des Wetters, infolge eines Unfalls. Văn nói thường dùng wegen hoặc câu weil.',
    },
    {
      key: 'passiv-man',
      rule_key: 'passiv-aktiv-man-umformung',
      category: 'word_choice',
      title_vi: 'Bị động và câu chủ động với man',
      explanation_vi: 'Câu bị động không nêu người làm có thể đổi thành câu với man: Die Probe wird untersucht → Man untersucht die Probe. Chủ ngữ bị động thành tân ngữ Akkusativ (der Versuch → den Versuch); thì giữ nguyên.',
    },
    {
      key: 'grafik',
      rule_key: 'grafik-steigen-um-auf',
      category: 'preposition',
      title_vi: 'Mô tả biểu đồ: um / auf, phân số và phần trăm',
      explanation_vi: 'steigen/sinken um = thay đổi bao nhiêu (um 10 %), auf = đạt tới mức nào (auf 500). Phân số: die Hälfte, ein Drittel, ein Viertel + Genitiv; động từ chia theo danh từ phân số (Ein Drittel der Befragten ist …).',
    },
    {
      key: 'es',
      rule_key: 'es-platzhalter-korrelat',
      category: 'other',
      title_vi: 'Từ es: giữ chỗ, báo trước câu dass, cụm cố định',
      explanation_vi: 'es ở vị trí 1 chỉ giữ chỗ và biến mất khi có thành phần khác đứng đầu; es báo trước câu dass/zu (bỏ nếu câu đó đứng đầu); es cố định trong es gibt, es geht um, es handelt sich um.',
    },
  ],
  lessons: [
    {
      title_vi: 'Khám phá và đột phá',
      goal_vi: 'Nói về các phát minh, nghiên cứu cơ bản và đạo đức khoa học; nêu nguyên nhân trong văn viết bằng aufgrund, infolge, angesichts.',
      items: [
        'Forschungsergebnis', 'Durchbruch', 'Theorie', 'Fachzeitschrift', 'Patent', 'Nobelpreis', 'Raumstation', 'Gentechnik',
        'Ethik', 'Ursache', 'Auswirkung', 'ermöglichen', 'bahnbrechend', 'aufgrund / infolge / angesichts + Genitiv',
        'Grundlagenforschung', 'Naturwissenschaft', 'Geisteswissenschaft', 'Gen', 'Evolution', 'Satellit', 'Weltraumforschung',
        'Innovation', 'Fördermittel', 'Tierversuch', 'entschlüsseln', 'revolutionieren', 'naturwissenschaftlich', 'ethisch',
        'fortschrittlich', 'wegweisend', 'in Frage stellen', 'Fortschritte erzielen',
      ],
      grammar: {
        point: 'aufgrund',
        sections: [
          {
            text_vi:
              'Văn bản khoa học, tin tức nêu **nguyên nhân** bằng giới từ đi **Genitiv**: **aufgrund** (do, vì; trung tính), **infolge** (do hậu quả của một sự kiện), **angesichts** (trước tình hình, xét đến). **Aufgrund des** schlechten Wetters wurde der Start verschoben. Văn nói dùng **wegen** hoặc câu **weil**.',
            table: 'Giới từ | Sắc thái | Ví dụ\naufgrund | do, vì | aufgrund fehlender Fördermittel\ninfolge | do hậu quả của | infolge eines Unfalls\nangesichts | trước tình hình | angesichts der hohen Kosten\nwegen (văn nói) | vì | wegen des Regens',
            examples: [
              ['Aufgrund fehlender Fördermittel musste das Projekt gestoppt werden.', 'Do thiếu kinh phí tài trợ, dự án phải dừng lại.'],
              ['Angesichts der hohen Kosten wird die Mission verschoben.', 'Trước chi phí cao, sứ mệnh bị hoãn lại.'],
            ],
            exercises: [
              choose('Aufgrund ___ technischen Problems startete die Rakete nicht.', ['eines', 'einem', 'einen'], 'eines', { vi: 'Do một sự cố kỹ thuật, tên lửa không phóng được.' }),
              fill('Infolge {des} Stromausfalls gingen Daten verloren.', 'Do hậu quả của vụ mất điện, dữ liệu đã bị mất.'),
              choose('___ der ethischen Bedenken wurde die Studie gestoppt.', ['Angesichts', 'Weil', 'Obwohl'], 'Angesichts', { vi: 'Trước những lo ngại về đạo đức, nghiên cứu bị dừng lại.' }),
            ],
          },
          {
            text_vi:
              'Biến **câu weil** thành **giới từ + danh từ** (Nominalstil): Weil die Kosten **hoch sind** → **Aufgrund der hohen Kosten**. Động từ/tính từ trong câu weil thành danh từ hoặc tính từ đứng trước danh từ. Không có mạo từ ở số nhiều thì tính từ mang đuôi Genitiv mạnh **-er**: aufgrund **neuer** Erkenntnisse.',
            examples: [['Aufgrund neuer Erkenntnisse muss die Theorie in Frage gestellt werden.', 'Do những phát hiện mới, lý thuyết phải bị đặt dấu hỏi.']],
            exercises: [
              transform('Viết lại với "aufgrund"', 'Weil das Wetter schlecht war, wurde der Start verschoben.', [
                'Aufgrund des schlechten Wetters wurde der Start verschoben.',
              ]),
              fill('Aufgrund {neuer} Daten änderten die Forscher ihre Theorie.', 'Do dữ liệu mới, các nhà nghiên cứu đã thay đổi lý thuyết.'),
              translate('Do một bước đột phá, liệu pháp mới có thể thực hiện được.', [
                'Aufgrund eines Durchbruchs ist die neue Therapie möglich.',
                'Infolge eines Durchbruchs ist die neue Therapie möglich.',
                'Aufgrund eines Durchbruchs wurde die neue Therapie möglich.',
              ]),
            ],
          },
        ],
        mixed: [
          choose('Infolge ___ Klimawandels schmelzen die Gletscher.', ['des', 'dem', 'den'], 'des', { vi: 'Do biến đổi khí hậu, các sông băng tan chảy.' }),
          fill('Aufgrund {ihrer} bahnbrechenden Forschung bekam sie den Nobelpreis.', 'Nhờ nghiên cứu mang tính đột phá, bà ấy nhận giải Nobel.'),
          choose('___ der Kritik an Tierversuchen sucht man nach Alternativen.', ['Angesichts', 'Trotz', 'Statt'], 'Angesichts', { vi: 'Trước những chỉ trích về thí nghiệm trên động vật, người ta tìm phương án khác.' }),
          transform('Viết lại với "infolge"', 'Weil es einen Unfall gab, wurde die Raumstation evakuiert.', [
            'Infolge eines Unfalls wurde die Raumstation evakuiert.',
          ]),
          order('Aufgrund / fehlender Fördermittel / wurde / die Grundlagenforschung / gekürzt.', 'Do thiếu kinh phí, nghiên cứu cơ bản bị cắt giảm.'),
        ],
      },
      dialogue: {
        title_de: 'Die Gen-Schere',
        lines: [
          { speaker: 'A', de: 'Hast du von der Gen-Schere gehört? Sie soll die Medizin revolutionieren.', vi: 'Bạn nghe về "kéo cắt gen" chưa? Nghe nói nó sẽ cách mạng hóa y học.' },
          { speaker: 'B', de: 'Ja, das war ein echter Durchbruch. Die Forscherinnen haben dafür sogar den Nobelpreis bekommen.', vi: 'Có, đó là một bước đột phá thật sự. Các nhà nghiên cứu còn nhận giải Nobel nhờ nó.' },
          { speaker: 'A', de: 'Was genau ermöglicht diese Technik?', vi: 'Chính xác thì kỹ thuật này giúp làm được gì?' },
          { speaker: 'B', de: 'Man kann Gene gezielt verändern. Mithilfe dieser Methode könnte man vielleicht Erbkrankheiten heilen.', vi: 'Người ta có thể thay đổi gen một cách có chủ đích. Nhờ phương pháp này có lẽ có thể chữa bệnh di truyền.' },
          { speaker: 'A', de: 'Klingt wegweisend. Aber gibt es keine ethischen Probleme?', vi: 'Nghe mang tính định hướng đấy. Nhưng không có vấn đề đạo đức sao?' },
          { speaker: 'B', de: 'Doch. Angesichts der Risiken fordern viele strenge Regeln, besonders bei Embryos.', vi: 'Có chứ. Trước những rủi ro, nhiều người đòi hỏi quy định nghiêm ngặt, nhất là với phôi thai.' },
          { speaker: 'A', de: 'Das verstehe ich. Nicht alles, was technisch möglich ist, ist auch ethisch richtig.', vi: 'Mình hiểu. Không phải mọi thứ khả thi về kỹ thuật đều đúng về đạo đức.' },
          { speaker: 'B', de: 'Genau deshalb braucht die Forschung auch die Geisteswissenschaften.', vi: 'Chính vì vậy nghiên cứu cũng cần đến các ngành khoa học nhân văn.' },
        ],
        gloss: { 'Gen-Schere': 'kéo cắt gen (CRISPR)', gezielt: 'có chủ đích', verändern: 'thay đổi', Erbkrankheiten: 'bệnh di truyền', heilen: 'chữa khỏi', fordern: 'đòi hỏi', streng: 'nghiêm ngặt', strenge: 'nghiêm ngặt', Embryos: 'phôi thai', Risiken: 'rủi ro (Risiko)' },
        questions: [
          mc('Các nhà nghiên cứu nhận được gì nhờ kéo cắt gen?', ['giải Nobel', 'bằng sáng chế đầu tiên', 'một trạm vũ trụ'], 'giải Nobel'),
          tf('Mit der Gen-Schere kann man Gene gezielt verändern.', true),
          mc('Nhiều người đòi hỏi gì?', ['quy định nghiêm ngặt', 'thêm kinh phí', 'dừng mọi nghiên cứu'], 'quy định nghiêm ngặt'),
          tf('B meint, die Forschung braucht keine Geisteswissenschaften.', false, { explain: 'Genau deshalb braucht die Forschung auch die Geisteswissenschaften.' }),
        ],
        dictation: [3, 6],
      },
      writing_prompt_vi:
        'Viết một đoạn (5–7 câu) về một phát minh bạn cho là quan trọng nhất: nó giúp được gì, có rủi ro gì; dùng ít nhất ba giới từ aufgrund, infolge hoặc angesichts.',
    },
    {
      title_vi: 'Thí nghiệm và phương pháp',
      goal_vi: 'Mô tả cách tiến hành một thí nghiệm; chuyển qua lại giữa câu bị động và câu với man.',
      items: [
        'Beobachtung', 'Messung', 'Versuch', 'Probe', 'Forscher', 'Zusammenhang', 'erforschen', 'nachweisen', 'durchführen',
        'messbar', 'nachweisbar', 'Bị động thay bằng man', 'Teilchen', 'Molekül', 'Zelle', 'Klimaforschung', 'Prototyp',
        'Fehlerquelle', 'simulieren', 'testen', 'sich herausstellen', 'beitragen', 'experimentell', 'präzise',
        'zu dem Schluss kommen', 'auf dem Prüfstand stehen', 'Forschungsgruppe', 'Laborergebnis', 'erproben',
        'Licht ins Dunkel bringen', 'auf der Hand liegen',
      ],
      grammar: {
        point: 'passiv-man',
        sections: [
          {
            text_vi:
              'Báo cáo khoa học thường dùng **bị động** vì người làm không quan trọng: Die Proben **werden** im Labor **untersucht**. Văn nói thích **man** hơn: **Man untersucht** die Proben im Labor. Đổi bị động → man: chủ ngữ bị động thành **tân ngữ Akkusativ** (der Versuch → **den** Versuch), động từ chia với man (ngôi 3 số ít), **giữ nguyên thì**.',
            table: 'Bị động | Câu với man\nDer Versuch wird wiederholt. | Man wiederholt den Versuch.\nDie Daten wurden gemessen. | Man maß die Daten.\nDie Studie ist durchgeführt worden. | Man hat die Studie durchgeführt.',
            examples: [
              ['Der Versuch wurde dreimal wiederholt.', 'Thí nghiệm đã được lặp lại ba lần.'],
              ['Man hat die Temperatur jede Stunde gemessen.', 'Người ta đã đo nhiệt độ mỗi giờ.'],
            ],
            exercises: [
              transform('Viết lại với "man"', 'Die Proben werden untersucht.', ['Man untersucht die Proben.']),
              choose('Man wiederholt ___ Versuch morgen.', ['den', 'der', 'dem'], 'den', { vi: 'Ngày mai người ta lặp lại thí nghiệm.' }),
              fill('Die Studie wurde in zehn Ländern durchgeführt. → Man {führte} die Studie in zehn Ländern durch.', 'Người ta tiến hành nghiên cứu ở mười nước.'),
            ],
          },
          {
            text_vi:
              'Chiều ngược lại, **man → bị động**: tân ngữ Akkusativ thành **chủ ngữ** (den Prototyp → **der** Prototyp), dùng **werden + Partizip II**. Nếu câu man **không có tân ngữ** thì bị động bắt đầu bằng **es** hoặc trạng từ: Man arbeitet hier viel → Hier **wird** viel **gearbeitet**. Bị động nghe khách quan, trang trọng hơn.',
            examples: [['Im Labor wird auch am Wochenende gearbeitet.', 'Trong phòng thí nghiệm người ta làm việc cả cuối tuần.']],
            exercises: [
              transform('Viết lại ở bị động', 'Man testet den Prototyp.', ['Der Prototyp wird getestet.']),
              choose('Man hat die Ergebnisse veröffentlicht. → Die Ergebnisse ___ veröffentlicht worden.', ['sind', 'haben', 'werden'], 'sind', { vi: 'Kết quả đã được công bố.' }),
              transform('Viết lại ở bị động', 'Man simulierte das Klima am Computer.', ['Das Klima wurde am Computer simuliert.']),
            ],
          },
        ],
        mixed: [
          choose('Man misst ___ Temperatur jede Stunde.', ['die', 'der', 'den'], 'die', { vi: 'Người ta đo nhiệt độ mỗi giờ.' }),
          transform('Viết lại với "man"', 'Der Zusammenhang wurde nachgewiesen.', ['Man wies den Zusammenhang nach.']),
          fill('Man hat einen neuen Stoff entwickelt. → Ein neuer Stoff ist entwickelt {worden}.', 'Một chất mới đã được phát triển.'),
          transform('Viết lại ở bị động', 'Man beobachtet die Zellen unter dem Mikroskop.', ['Die Zellen werden unter dem Mikroskop beobachtet.']),
          order('Im Labor / wird / sehr / präzise / gearbeitet.', 'Trong phòng thí nghiệm người ta làm việc rất chính xác.'),
        ],
      },
      dialogue: {
        title_de: 'Im Labor',
        lines: [
          { speaker: 'A', de: 'Wie läuft euer Versuch? Habt ihr schon Ergebnisse?', vi: 'Thí nghiệm của các bạn thế nào? Đã có kết quả chưa?' },
          { speaker: 'B', de: 'Noch nicht. Die Proben werden gerade untersucht. Man misst jede Stunde die Temperatur.', vi: 'Chưa. Các mẫu đang được phân tích. Người ta đo nhiệt độ mỗi giờ.' },
          { speaker: 'A', de: 'Und wofür ist das wichtig?', vi: 'Thế cái đó quan trọng để làm gì?' },
          { speaker: 'B', de: 'Wir wollen einen Zusammenhang zwischen Wärme und Zellwachstum nachweisen.', vi: 'Bọn mình muốn chứng minh mối liên hệ giữa nhiệt và sự phát triển của tế bào.' },
          { speaker: 'A', de: 'Gab es Probleme?', vi: 'Có vấn đề gì không?' },
          { speaker: 'B', de: 'Ja, letzte Woche hat sich herausgestellt, dass ein Messgerät falsch war. Der ganze Versuch musste wiederholt werden.', vi: 'Có, tuần trước hóa ra một máy đo bị sai. Cả thí nghiệm phải làm lại.' },
          { speaker: 'A', de: 'Ärgerlich! Aber so findet man wenigstens die Fehlerquellen.', vi: 'Bực thật! Nhưng ít ra như vậy cũng tìm ra nguồn sai số.' },
          { speaker: 'B', de: 'Stimmt. Jetzt wird alles präzise dokumentiert, und jede Messung wird zweimal überprüft.', vi: 'Đúng. Giờ mọi thứ được ghi chép chính xác và mỗi phép đo được kiểm tra hai lần.' },
          { speaker: 'A', de: 'Dann bin ich gespannt, zu welchem Schluss ihr kommt.', vi: 'Vậy mình háo hức xem các bạn đi đến kết luận gì.' },
        ],
        gloss: { 'Wie läuft': 'diễn ra thế nào', Zellwachstum: 'sự phát triển của tế bào', Wärme: 'nhiệt', Messgerät: 'máy đo', ärgerlich: 'bực mình', wenigstens: 'ít ra', dokumentiert: 'được ghi chép (dokumentieren)' },
        questions: [
          mc('Nhóm của B muốn chứng minh điều gì?', ['mối liên hệ giữa nhiệt và sự phát triển của tế bào', 'hiệu quả của vắc-xin', 'tốc độ của ánh sáng'], 'mối liên hệ giữa nhiệt và sự phát triển của tế bào'),
          tf('Die Temperatur wird einmal am Tag gemessen.', false, { explain: 'Man misst jede Stunde die Temperatur.' }),
          mc('Tuần trước đã xảy ra chuyện gì?', ['một máy đo bị sai', 'mẫu bị mất', 'phòng lab bị cháy'], 'một máy đo bị sai'),
          tf('Jetzt wird jede Messung zweimal überprüft.', true),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Mô tả một thí nghiệm đơn giản bạn từng làm hoặc biết (6–8 câu): chuẩn bị gì, làm thế nào, kết quả ra sao; dùng cả câu bị động và câu với man, ít nhất ba câu mỗi loại.',
    },
    {
      title_vi: 'Số liệu và biểu đồ',
      goal_vi: 'Mô tả biểu đồ và số liệu thống kê: tăng/giảm um hay auf, phân số và phần trăm.',
      items: [
        'Anstieg', 'Rückgang', 'Grafik', 'Diagramm', 'Anteil', 'Hälfte', 'Drittel', 'Durchschnitt', 'betragen', 'hervorgehen',
        'veranschaulichen', 'erheblich', 'geringfügig', 'kontinuierlich', 'vergleichbar', 'im Vergleich zu',
        'an erster Stelle stehen', 'um … Prozent steigen', 'Mô tả biểu đồ: steigen um / auf', 'Phân số và phần trăm',
        'Stichprobe', 'Prognose', 'vorhersagen', 'statistisch', 'Wahrscheinlichkeit', 'signifikant', 'quantifizieren',
      ],
      grammar: {
        point: 'grafik',
        sections: [
          {
            text_vi:
              'Mô tả thay đổi: **steigen / zunehmen** (tăng), **sinken / zurückgehen** (giảm). Giới từ quyết định nghĩa: **um** = thay đổi **bao nhiêu** (Die Zahl stieg **um** 10 Prozent); **auf** = **đạt tới** mức nào (Die Zahl stieg **auf** 500); **von … auf** = từ … lên/xuống. Danh từ: **der Anstieg** / **der Rückgang um** 5 %.',
            table: 'Giới từ | Nghĩa | Ví dụ\num | thay đổi một khoảng | stieg um 20 %\nauf | đạt tới mức | sank auf 3 %\nvon … auf | từ … đến | stieg von 100 auf 150\nder Anstieg um | sự tăng thêm | ein Anstieg um 5 %',
            examples: [
              ['Die Zahl der Studierenden stieg von 2.000 auf 2.500.', 'Số sinh viên tăng từ 2.000 lên 2.500.'],
              ['Der Anteil sank um fünf Prozentpunkte.', 'Tỷ lệ giảm năm điểm phần trăm.'],
            ],
            exercises: [
              choose('Die Preise sind ___ 3 Prozent gestiegen. (thêm 3 %)', ['um', 'auf', 'bei'], 'um', { vi: 'Giá đã tăng thêm 3%.' }),
              choose('Die Arbeitslosenquote sank ___ 5 Prozent. (xuống còn 5 %)', ['auf', 'um', 'zu'], 'auf', { vi: 'Tỷ lệ thất nghiệp giảm xuống còn 5%.' }),
              fill('Die Zahl stieg {von} 100 auf 150.', 'Con số tăng từ 100 lên 150.'),
            ],
          },
          {
            text_vi:
              'Phân số: **die Hälfte** (1/2), **ein Drittel** (1/3), **ein Viertel** (1/4), **drei Viertel**. Theo sau là **Genitiv**: ein Drittel **der** Befragten. Động từ thường chia theo **danh từ phân số** (số ít): **Ein Drittel** der Befragten **ist** dagegen (theo nghĩa, số nhiều *sind* cũng được chấp nhận; với danh từ số ít thì chỉ số ít: Ein Viertel der Fläche **ist** Wald). **Die Hälfte** der Studierenden **arbeitet** neben dem Studium. Phần trăm: **30 Prozent** der Befragten **sind** dafür (thường số nhiều).',
            table: 'Cách nói | Ví dụ\ndie Hälfte + Gen | Die Hälfte der Befragten ist zufrieden.\nein Drittel + Gen | Ein Drittel der Kinder hat ein Handy.\nein Viertel + Gen | Ein Viertel der Fläche ist Wald.\nX Prozent + Gen | 60 Prozent der Nutzer sind jung.',
            examples: [['Aus der Grafik geht hervor, dass ein Viertel der Jugendlichen täglich liest.', 'Từ biểu đồ có thể thấy một phần tư thanh thiếu niên đọc sách hằng ngày.']],
            exercises: [
              choose('Ein Drittel der Fläche ___ mit Wald bedeckt.', ['ist', 'sind', 'seien'], 'ist', { vi: 'Một phần ba diện tích được rừng bao phủ.' }),
              fill('Die {Hälfte} der Studierenden hat einen Nebenjob.', 'Một nửa sinh viên có việc làm thêm.'),
              translate('Một phần tư số người được hỏi dùng xe đạp.', ['Ein Viertel der Befragten fährt Fahrrad.', 'Ein Viertel der Befragten nutzt das Fahrrad.', 'Ein Viertel der Befragten benutzt das Fahrrad.', 'Ein Viertel der Befragten fahren Fahrrad.']),
            ],
          },
        ],
        mixed: [
          choose('Der Umsatz stieg ___ 2 Millionen Euro. (đạt tới)', ['auf', 'um', 'von'], 'auf', { vi: 'Doanh thu tăng lên 2 triệu euro.' }),
          fill('Im Vergleich zu 2020 gab es einen Anstieg {um} zehn Prozent.', 'So với năm 2020 có mức tăng 10%.'),
          choose('Die Hälfte des Geldes ___ schon ausgegeben.', ['war', 'waren', 'seien'], 'war', { vi: 'Một nửa số tiền đã tiêu hết.' }),
          choose('Aus dem Diagramm ___ hervor, dass die Zahlen kontinuierlich sinken.', ['geht', 'gehen', 'kommt'], 'geht', { vi: 'Từ sơ đồ có thể thấy các con số giảm liên tục.' }),
          order('Die Grafik / zeigt / einen Rückgang / um / 15 Prozent.', 'Biểu đồ cho thấy mức giảm 15%.'),
        ],
      },
      dialogue: {
        title_de: 'Eine Grafik präsentieren',
        lines: [
          { speaker: 'A', de: 'Morgen muss ich im Seminar eine Grafik beschreiben. Kannst du mir helfen?', vi: 'Mai mình phải mô tả một biểu đồ trong seminar. Bạn giúp mình được không?' },
          { speaker: 'B', de: 'Klar. Worum geht es?', vi: 'Được chứ. Về chủ đề gì?' },
          { speaker: 'A', de: 'Um die Mediennutzung von Jugendlichen zwischen 2015 und 2025.', vi: 'Về việc sử dụng truyền thông của thanh thiếu niên từ 2015 đến 2025.' },
          { speaker: 'B', de: 'Fang mit dem Thema und der Quelle an: Die Grafik veranschaulicht … Die Daten stammen von …', vi: 'Bắt đầu bằng chủ đề và nguồn: Biểu đồ minh họa … Dữ liệu lấy từ …' },
          { speaker: 'A', de: 'Okay. Dann: Die tägliche Bildschirmzeit stieg von zwei auf vier Stunden.', vi: 'Được. Rồi: Thời gian dùng màn hình hằng ngày tăng từ hai lên bốn tiếng.' },
          { speaker: 'B', de: 'Gut. Du kannst auch sagen: Sie hat sich verdoppelt. Und was ist mit Büchern?', vi: 'Tốt. Bạn cũng có thể nói: Nó đã tăng gấp đôi. Còn sách thì sao?' },
          { speaker: 'A', de: 'Da gibt es einen Rückgang um zehn Prozentpunkte. Nur noch ein Viertel der Jugendlichen liest regelmäßig.', vi: 'Có mức giảm mười điểm phần trăm. Chỉ còn một phần tư thanh thiếu niên đọc sách đều đặn.' },
          { speaker: 'B', de: 'Erheblich! Am Ende brauchst du noch eine Prognose oder deine Meinung.', vi: 'Đáng kể thật! Cuối cùng bạn cần thêm một dự báo hoặc ý kiến của mình.' },
          { speaker: 'A', de: 'Ich vermute, dass der Trend weitergeht. Danke, jetzt fühle ich mich sicherer!', vi: 'Mình đoán xu hướng sẽ tiếp tục. Cảm ơn, giờ mình thấy tự tin hơn rồi!' },
        ],
        gloss: { 'fang … an': 'bắt đầu (anfangen)', stammen: 'có nguồn gốc từ', tägliche: 'hằng ngày', verdoppelt: 'tăng gấp đôi (verdoppeln)', Prozentpunkte: 'điểm phần trăm', vermute: 'đoán (vermuten)', Trend: 'xu hướng' },
        questions: [
          mc('Biểu đồ của A nói về gì?', ['việc sử dụng truyền thông của thanh thiếu niên', 'giá nhà', 'khí hậu'], 'việc sử dụng truyền thông của thanh thiếu niên'),
          tf('Die Bildschirmzeit ist von zwei auf vier Stunden gestiegen.', true),
          mc('Bao nhiêu thanh thiếu niên còn đọc sách đều đặn?', ['một phần tư', 'một nửa', 'một phần ba'], 'một phần tư'),
          tf('B rät, am Ende keine eigene Meinung zu sagen.', false, { explain: 'Am Ende brauchst du noch eine Prognose oder deine Meinung.' }),
        ],
        dictation: [4, 6],
      },
      writing_prompt_vi:
        'Mô tả một biểu đồ tưởng tượng về số du học sinh Việt Nam ở Đức từ 2015 đến 2025 (6–8 câu): chủ đề, xu hướng chính, số liệu với um/auf, một phân số, dự báo.',
    },
    {
      title_vi: 'Ngôn ngữ của bài báo khoa học',
      goal_vi: 'Hiểu và dùng các vai trò của es trong văn khoa học: es giữ chỗ, es báo trước câu dass, các cụm cố định với es.',
      items: [
        'es handelt sich um', 'es kommt auf … an', 'schwerfallen', 'feststellen', 'auffallen', 'Annahme', 'Vermutung', 'Phänomen',
        'Messwert', 'Từ es: giữ chỗ, báo trước, cố định',
      ],
      grammar: {
        point: 'es',
        sections: [
          {
            text_vi:
              '**es** ở **vị trí 1** có khi chỉ để **giữ chỗ**, còn chủ ngữ thật đứng sau động từ; kiểu này hay gặp trong tin tức: **Es** nahmen 300 Forscher an der Konferenz teil. Động từ chia theo **chủ ngữ thật** (300 Forscher → nahmen). Khi thành phần khác đứng vị trí 1, es **biến mất**: An der Konferenz nahmen 300 Forscher teil. Bị động không có chủ ngữ cũng vậy: **Es** wird viel geforscht → Im Labor wird viel geforscht.',
            examples: [
              ['Es haben sich über 1.000 Personen an der Studie beteiligt.', 'Hơn 1.000 người đã tham gia nghiên cứu.'],
              ['An der Studie haben sich über 1.000 Personen beteiligt.', 'Hơn 1.000 người đã tham gia nghiên cứu (không cần es).'],
            ],
            exercises: [
              choose('Es ___ viele neue Daten veröffentlicht.', ['wurden', 'wurde'], 'wurden', { vi: 'Nhiều dữ liệu mới đã được công bố.', explain: 'Động từ chia theo chủ ngữ thật: viele neue Daten.' }),
              transform('Đưa "Im Labor" lên đầu câu', 'Es wird im Labor auch nachts gearbeitet.', ['Im Labor wird auch nachts gearbeitet.']),
              choose('Gestern ___ zwei Forscherinnen einen Vortrag.', ['hielten', 'hielten es', 'es hielten'], 'hielten', { vi: 'Hôm qua hai nhà nghiên cứu nữ thuyết trình.', explain: 'Vị trí 1 đã có "Gestern" nên không cần es.' }),
            ],
          },
          {
            text_vi:
              '**es** còn **báo trước** một câu **dass** hoặc **zu + Infinitiv** đứng sau: **Es** ist bekannt, **dass** Schlaf wichtig ist. **Es** fällt mir schwer, Fachtexte **zu** lesen. Với **finden**, es là tân ngữ: Ich finde **es** wichtig, **dass** … Nếu câu dass đứng **đầu** thì bỏ es: **Dass** Schlaf wichtig ist, ist bekannt.',
            examples: [
              ['Es ist noch nicht bewiesen, dass das Medikament wirkt.', 'Vẫn chưa chứng minh được là thuốc có tác dụng.'],
              ['Mir fällt es schwer, die Statistik zu verstehen.', 'Tôi thấy khó hiểu bảng thống kê.'],
            ],
            exercises: [
              transform('Đưa câu dass lên đầu (bỏ es)', 'Es ist bekannt, dass Bewegung gesund ist.', ['Dass Bewegung gesund ist, ist bekannt.']),
              fill('Ich finde {es} wichtig, dass die Daten öffentlich sind.', 'Tôi thấy việc dữ liệu được công khai là quan trọng.'),
              choose('___ fällt vielen Studierenden schwer, Fachliteratur zu lesen.', ['Es', 'Er', 'Sie'], 'Es', { vi: 'Nhiều sinh viên thấy khó đọc tài liệu chuyên ngành.' }),
            ],
          },
          {
            text_vi:
              'Cụm **cố định** với es: **es gibt** + Akk (có): Es gibt **einen** Zusammenhang. **es handelt sich um** + Akk (đó là, ở đây là). **es kommt auf** + Akk **an** (phụ thuộc vào). **es geht um** + Akk (nói về). Ở đây es là **chủ ngữ thật**, nên vẫn giữ khi đảo ngữ: Bei der Studie **geht es** um Schlaf. Bei dem Stoff **handelt es sich** um Kupfer.',
            examples: [
              ['Bei dem Phänomen handelt es sich um eine optische Täuschung.', 'Hiện tượng này là một ảo giác thị giác.'],
              ['Ob das Experiment gelingt, kommt auf die Messwerte an.', 'Thí nghiệm thành công hay không phụ thuộc vào các giá trị đo.'],
            ],
            exercises: [
              choose('Bei dieser Methode handelt ___ sich um ein neues Verfahren.', ['es', 'sie', 'das'], 'es', { vi: 'Phương pháp này là một quy trình mới.' }),
              fill('Es gibt {einen} klaren Zusammenhang zwischen Schlaf und Lernen.', 'Có một mối liên hệ rõ ràng giữa giấc ngủ và việc học.'),
            ],
          },
        ],
        mixed: [
          choose('In der Studie ___ es um die Folgen von Stress.', ['geht', 'gibt', 'handelt'], 'geht', { vi: 'Nghiên cứu nói về hậu quả của căng thẳng.' }),
          transform('Viết lại với "Es" ở đầu câu', 'Viele Fragen bleiben offen.', ['Es bleiben viele Fragen offen.']),
          choose('Dass die Hypothese stimmt, ___ noch nicht bewiesen.', ['ist', 'ist es', 'es ist'], 'ist', { vi: 'Việc giả thuyết đúng vẫn chưa được chứng minh.' }),
          fill('Es kommt {auf} die Qualität der Daten an.', 'Điều đó phụ thuộc vào chất lượng dữ liệu.'),
          translate('Có một mối liên hệ giữa giấc ngủ và trí nhớ.', ['Es gibt einen Zusammenhang zwischen Schlaf und Gedächtnis.']),
        ],
      },
      dialogue: {
        title_de: 'Ein Artikel über Schlafforschung',
        lines: [
          { speaker: 'A', de: 'Hast du den Artikel über Schlafforschung gelesen?', vi: 'Bạn đã đọc bài báo về nghiên cứu giấc ngủ chưa?' },
          { speaker: 'B', de: 'Ja. Es haben über tausend Personen an der Studie teilgenommen.', vi: 'Rồi. Hơn một nghìn người đã tham gia nghiên cứu.' },
          { speaker: 'A', de: 'Und worum geht es genau?', vi: 'Thế chính xác là nói về gì?' },
          { speaker: 'B', de: 'Es geht um die Frage, ob Schlaf das Gedächtnis verbessert.', vi: 'Về câu hỏi liệu giấc ngủ có cải thiện trí nhớ không.' },
          { speaker: 'A', de: 'Ich finde es spannend, dass man das messen kann.', vi: 'Mình thấy thú vị là người ta đo được điều đó.' },
          { speaker: 'B', de: 'Die Forscher haben festgestellt, dass es einen klaren Zusammenhang gibt.', vi: 'Các nhà nghiên cứu xác định rằng có một mối liên hệ rõ ràng.' },
          { speaker: 'A', de: 'Ist das schon bewiesen?', vi: 'Điều đó đã được chứng minh chưa?' },
          { speaker: 'B', de: 'Nicht ganz. Es handelt sich zunächst um eine Vermutung, die man weiter prüfen muss.', vi: 'Chưa hẳn. Trước mắt đó mới là một phỏng đoán cần kiểm tra thêm.' },
          { speaker: 'A', de: 'Mir fällt es übrigens schwer, solche Statistiken zu verstehen.', vi: 'Nhân tiện, mình thấy khó hiểu những bảng thống kê như vậy.' },
          { speaker: 'B', de: 'Es kommt darauf an, wie gut die Grafik ist. Diese ist sehr klar.', vi: 'Còn tùy biểu đồ tốt đến đâu. Cái này rất rõ ràng.' },
        ],
        gloss: { Schlafforschung: 'nghiên cứu giấc ngủ', Gedächtnis: 'trí nhớ' },
        questions: [
          mc('Bài báo nói về gì?', ['giấc ngủ và trí nhớ', 'dinh dưỡng', 'thể thao'], 'giấc ngủ và trí nhớ'),
          tf('An der Studie haben über tausend Personen teilgenommen.', true),
          tf('Der Zusammenhang ist schon endgültig bewiesen.', false, { explain: 'Es handelt sich zunächst um eine Vermutung.' }),
          mc('A thấy khó điều gì?', ['hiểu các bảng thống kê', 'đọc tiếng Anh', 'tìm bài báo'], 'hiểu các bảng thống kê'),
        ],
        dictation: [3, 7],
      },
      writing_prompt_vi:
        'Tóm tắt một kết quả nghiên cứu bạn từng đọc (5–6 câu), dùng ít nhất ba cấu trúc với es: Es ist bekannt, dass …; Es gibt …; Es handelt sich um …; Es kommt darauf an, …',
    },
  ],
  test: {
    grammar: {
      aufgrund: [
        choose('Aufgrund ___ Regens fiel das Spiel aus.', ['des', 'dem', 'den'], 'des'),
        fill('Infolge {eines} Unfalls war die Straße gesperrt.', 'Do một vụ tai nạn, con đường bị chặn.'),
        choose('___ der hohen Kosten wurde das Projekt gestoppt.', ['Angesichts', 'Weil', 'Obwohl'], 'Angesichts'),
        fill('Aufgrund {neuer} Daten änderte sich die Prognose.', 'Do dữ liệu mới, dự báo thay đổi.'),
        order('Infolge / des Sturms / fiel / der Strom / aus.', 'Do cơn bão, điện bị cúp.'),
        choose('Aufgrund ___ Erkrankung fehlte sie.', ['einer', 'eine', 'einem'], 'einer'),
      ],
      'passiv-man': [
        choose('Man testet ___ neuen Impfstoff.', ['den', 'der', 'dem'], 'den'),
        fill('Der Versuch wird wiederholt. → Man {wiederholt} den Versuch.', 'Người ta lặp lại thí nghiệm.'),
        choose('Man hat das Ergebnis veröffentlicht. → Das Ergebnis ___ veröffentlicht worden.', ['ist', 'hat', 'wird'], 'ist'),
        fill('Hier wird viel {gearbeitet}.', 'Ở đây người ta làm việc nhiều.'),
        order('Die Proben / werden / im Labor / untersucht.', 'Các mẫu được phân tích trong phòng thí nghiệm.'),
        choose('Die Daten wurden gemessen. → Man ___ die Daten.', ['maß', 'misst', 'hat gemessen worden'], 'maß'),
      ],
      grafik: [
        choose('Die Preise stiegen ___ 5 Prozent. (thêm 5 %)', ['um', 'auf', 'bei'], 'um'),
        choose('Die Quote sank ___ 3 Prozent. (xuống còn 3 %)', ['auf', 'um', 'von'], 'auf'),
        choose('Ein Viertel der Fläche ___ Wald.', ['ist', 'sind', 'seien'], 'ist'),
        fill('Die Zahl stieg {von} 50 auf 80.', 'Con số tăng từ 50 lên 80.'),
        fill('Die {Hälfte} der Kinder spielt ein Instrument.', 'Một nửa số trẻ em chơi một nhạc cụ.'),
        order('Aus der Grafik / geht / hervor, / dass / die Zahlen / steigen.', 'Từ biểu đồ có thể thấy các con số đang tăng.'),
      ],
      es: [
        choose('Es ___ viele Studierende an der Umfrage teil.', ['nahmen', 'nahm'], 'nahmen'),
        fill('Ich finde {es} wichtig, dass man Quellen prüft.', 'Tôi thấy việc kiểm tra nguồn là quan trọng.'),
        choose('Bei dem Stoff handelt ___ sich um Kupfer.', ['es', 'er'], 'es'),
        order('Es / gibt / einen / Zusammenhang.', 'Có một mối liên hệ.'),
        choose('Dass Rauchen schadet, ___ bekannt.', ['ist', 'ist es'], 'ist'),
        fill('Im Labor {wird} auch am Wochenende gearbeitet.', 'Trong phòng thí nghiệm người ta làm cả cuối tuần.'),
      ],
    },
    reading: {
      title_de: 'Frauen in der Wissenschaft',
      text_de:
        'Laut einer aktuellen Statistik ist in Deutschland etwa die Hälfte der Studierenden weiblich. Bei den Professuren sieht es anders aus: Nur ein Viertel der Professorinnen und Professoren ist weiblich. Im Vergleich zu 2010 ist der Anteil zwar um acht Prozentpunkte gestiegen, aber der Anstieg verläuft langsam. Besonders in den Naturwissenschaften und der Technik sind Frauen unterrepräsentiert. Aufgrund dieser Zahlen haben viele Universitäten Förderprogramme gestartet. Man bietet zum Beispiel Mentoring und flexible Arbeitszeiten für Eltern an. Experten sagen voraus, dass der Anteil bis 2035 auf ein Drittel steigen könnte.',
      gloss: {
        Statistik: 'thống kê',
        Professuren: 'chức danh giáo sư',
        weiblich: 'nữ',
        verläuft: 'diễn ra (verlaufen)',
        unterrepräsentiert: 'chiếm tỷ lệ thấp',
        Förderprogramme: 'chương trình hỗ trợ',
        Mentoring: 'kèm cặp, cố vấn',
      },
      questions: [
        mc('Tỷ lệ nữ trong số giáo sư là bao nhiêu?', ['khoảng một phần tư', 'khoảng một nửa', 'khoảng một phần ba'], 'khoảng một phần tư'),
        tf('Seit 2010 ist der Anteil der Professorinnen gesunken.', false, { explain: 'Der Anteil ist um acht Prozentpunkte gestiegen.' }),
        mc('Nhiều trường đại học đã làm gì?', ['bắt đầu chương trình hỗ trợ', 'giảm học phí', 'đóng ngành kỹ thuật'], 'bắt đầu chương trình hỗ trợ'),
        tf('Experten erwarten, dass der Anteil bis 2035 auf ein Drittel steigen könnte.', true),
      ],
    },
  },
});
