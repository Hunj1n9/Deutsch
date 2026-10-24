// B1 · 13 Thảo luận và ý kiến — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b1-13',
  points: [
    {
      key: 'meinung',
      rule_key: 'meinung-aeussern-wortstellung',
      category: 'verb_position',
      title_vi: 'Nêu ý kiến: meiner Meinung nach, ich bin der Meinung, dass',
      explanation_vi: 'Meiner Meinung nach (vị trí 1) → động từ ngay sau. Ich bin der Meinung / überzeugt, dass … → động từ cuối. Ich finde, + câu chính (động từ vị trí 2).',
    },
    {
      key: 'zustimmen',
      rule_key: 'zustimmen-widersprechen',
      category: 'word_choice',
      title_vi: 'Đồng ý và phản đối',
      explanation_vi: 'Ich stimme dir zu / Ich gebe dir recht / Das sehe ich genauso. Da bin ich anderer Meinung / Das stimmt nicht ganz. zustimmen, widersprechen + Dativ; einverstanden sein mit + Dativ.',
    },
    {
      key: 'zwar-aber',
      rule_key: 'zwar-aber-einerseits',
      category: 'word_choice',
      title_vi: 'zwar … aber; einerseits … andererseits',
      explanation_vi: 'zwar … aber = tuy … nhưng (thừa nhận rồi phản bác). einerseits … andererseits = một mặt … mặt khác. Đứng đầu câu thì động từ ngay sau.',
    },
  ],
  lessons: [
    {
      title_vi: 'Nêu ý kiến',
      goal_vi: 'Trình bày quan điểm có lý do và ví dụ; đặt động từ đúng sau các mẫu câu nêu ý kiến.',
      items: [
        'Diskussion', 'Argument', 'Standpunkt', 'Ansicht', 'Beispiel', 'Grund', 'These', 'Thema', 'Gesichtspunkt', 'Tatsache',
        'Überzeugung', 'Erfahrungsbericht', 'Behauptung', 'Beweis', 'meinen', 'glauben', 'betonen', 'äußern', 'erwähnen',
        'überzeugt', 'grundsätzlich', 'wahrscheinlich', 'vielleicht', 'tatsächlich', 'meiner Meinung nach',
        'ich bin der Meinung, dass', 'Was halten Sie davon?', 'meiner Meinung nach: động từ ngay sau',
      ],
      grammar: {
        point: 'meinung',
        sections: [
          {
            text_vi:
              '**Meiner Meinung nach** / **Meiner Ansicht nach** đứng **vị trí 1** → động từ **ngay sau**: Meiner Meinung nach **ist** das Thema wichtig. Còn **Ich bin der Meinung, dass** … mở câu dass → động từ **cuối**: Ich bin der Meinung, dass das Thema wichtig **ist**.',
            table: 'Mở đầu | Vị trí động từ | Ví dụ\nMeiner Meinung nach | ngay sau | Meiner Meinung nach ist das richtig.\nIch bin der Meinung, dass | cuối câu | …, dass das richtig ist.\nIch finde, (không dass) | vị trí 2 | Ich finde, das ist richtig.',
            examples: [
              ['Meiner Meinung nach sollten Kinder mehr draußen spielen.', 'Theo tôi, trẻ em nên chơi ngoài trời nhiều hơn.'],
              ['Ich bin der Meinung, dass Sport sehr wichtig ist.', 'Tôi cho rằng thể thao rất quan trọng.'],
            ],
            exercises: [
              choose('Meiner Meinung nach ___ das Handyverbot sinnvoll.', ['ist', 'das ist'], 'ist', { vi: 'Theo tôi, lệnh cấm điện thoại là hợp lý.' }),
              fill('Ich bin der Meinung, dass Schüler weniger Hausaufgaben {brauchen}.', 'Tôi cho rằng học sinh cần ít bài tập về nhà hơn.'),
              order('Meiner Meinung nach / sollten / alle / mehr / Fahrrad / fahren.', 'Theo tôi, mọi người nên đi xe đạp nhiều hơn.'),
            ],
          },
          {
            text_vi:
              '**Ich finde**, + câu chính (động từ vị trí 2): Ich finde, das **ist** gut; hoặc **Ich finde, dass** das gut **ist**. **Ich bin überzeugt, dass** … (tin chắc). Hỏi ý kiến: **Was halten Sie davon?** / **Was meinst du?** Nêu lý do: **Ein wichtiger Grund ist, dass** … và **zum Beispiel** …',
            examples: [['Ich bin überzeugt, dass wir eine Lösung finden.', 'Tôi tin chắc chúng ta sẽ tìm ra giải pháp.']],
            exercises: [
              choose('Ich finde, das ___ eine gute Idee.', ['ist', 'sein'], 'ist', { vi: 'Tôi thấy đó là một ý hay.' }),
              choose('Ich bin überzeugt, dass wir eine Lösung ___.', ['finden', 'gefunden', 'finden wir'], 'finden', { vi: 'Tôi tin chắc chúng ta sẽ tìm ra giải pháp.' }),
              transform('Viết lại với "Meiner Meinung nach"', 'Ich finde, Sport ist sehr wichtig.', ['Meiner Meinung nach ist Sport sehr wichtig.']),
            ],
          },
          {
            text_vi:
              'Từ để thảo luận: **Standpunkt**, **Ansicht** (quan điểm), **Argument** (lập luận), **These** (luận điểm), **Tatsache** (sự thật) khác **Behauptung** (lời khẳng định chưa chứng minh), **Beweis** (bằng chứng). **betonen** = nhấn mạnh; **erwähnen** = đề cập.',
            examples: [['Das ist keine Tatsache, sondern nur eine Behauptung.', 'Đó không phải sự thật mà chỉ là một lời khẳng định.']],
            exercises: [
              fill('Ich möchte {betonen}, dass das nur meine Meinung ist.', 'Tôi muốn nhấn mạnh rằng đó chỉ là ý kiến của tôi.'),
              translate('Ông/bà nghĩ gì về điều đó?', ['Was halten Sie davon?', 'Was meinen Sie dazu?']),
            ],
          },
        ],
        mixed: [
          transform('Viết lại với "Ich bin der Meinung, dass"', 'Meiner Meinung nach ist das Thema wichtig.', ['Ich bin der Meinung, dass das Thema wichtig ist.']),
          choose('Meiner Ansicht nach ___ wir mehr Zeit.', ['brauchen', 'wir brauchen'], 'brauchen', { vi: 'Theo tôi, chúng ta cần thêm thời gian.' }),
          fill('Ich bin überzeugt, dass das richtig {ist}.', 'Tôi tin chắc điều đó đúng.'),
          choose('Ich finde, man ___ mehr lesen.', ['sollte', 'sollen'], 'sollte', { vi: 'Tôi thấy người ta nên đọc nhiều hơn.' }),
          order('Ein wichtiger Grund / ist, / dass / Sport / gesund / ist.', 'Một lý do quan trọng là thể thao tốt cho sức khỏe.'),
        ],
      },
      dialogue: {
        title_de: 'Handys in der Schule?',
        lines: [
          { speaker: 'A', de: 'Unser Thema heute: Sollen Handys in der Schule verboten werden? Was hältst du davon?', vi: 'Chủ đề hôm nay: Có nên cấm điện thoại ở trường không? Bạn nghĩ sao?' },
          { speaker: 'B', de: 'Meiner Meinung nach sollten Handys im Unterricht verboten sein. Sonst können sich die Schüler nicht konzentrieren.', vi: 'Theo mình, điện thoại nên bị cấm trong giờ học. Nếu không học sinh không tập trung được.' },
          { speaker: 'A', de: 'Hast du dafür Beweise?', vi: 'Bạn có bằng chứng không?' },
          { speaker: 'B', de: 'Ja, eine Studie zeigt, dass Schüler ohne Handy bessere Noten haben. Das ist eine Tatsache, keine Behauptung.', vi: 'Có, một nghiên cứu cho thấy học sinh không có điện thoại được điểm tốt hơn. Đó là sự thật, không phải lời nói suông.' },
          { speaker: 'A', de: 'Ich bin der Meinung, dass Handys auch nützlich sind. Zum Beispiel kann man damit Wörter nachschlagen.', vi: 'Mình cho rằng điện thoại cũng hữu ích. Ví dụ có thể tra từ bằng nó.' },
          { speaker: 'B', de: 'Ein interessantes Argument. Aber was ist dein wichtigster Grund?', vi: 'Một lập luận thú vị. Nhưng lý do quan trọng nhất của bạn là gì?' },
          { speaker: 'A', de: 'Ich bin überzeugt, dass Kinder den richtigen Umgang mit Technik lernen müssen. Das möchte ich betonen.', vi: 'Mình tin chắc trẻ em phải học cách dùng công nghệ đúng đắn. Mình muốn nhấn mạnh điều đó.' },
          { speaker: 'B', de: 'Das ist ein wichtiger Gesichtspunkt. Darüber muss ich nachdenken.', vi: 'Đó là một khía cạnh quan trọng. Mình phải suy nghĩ về điều đó.' },
        ],
        gloss: { sonst: 'nếu không', konzentrieren: 'tập trung', damit: 'bằng nó', nachschlagen: 'tra (từ điển)', wichtigster: 'quan trọng nhất', Umgang: 'cách sử dụng, ứng xử', darüber: 'về điều đó' },
        questions: [
          mc('Chủ đề thảo luận là gì?', ['cấm điện thoại ở trường', 'bài tập về nhà', 'học phí'], 'cấm điện thoại ở trường'),
          tf('B ist für ein Handyverbot im Unterricht.', true),
          mc('A đưa ví dụ gì về lợi ích của điện thoại?', ['tra từ', 'chơi trò chơi', 'gọi cho bố mẹ'], 'tra từ'),
          tf('B findet das Argument von A unwichtig.', false, { explain: 'Das ist ein wichtiger Gesichtspunkt.' }),
        ],
        dictation: [1, 4],
      },
      writing_prompt_vi:
        'Nêu ý kiến của bạn về việc cấm điện thoại ở trường (5–6 câu): quan điểm, hai lý do, một ví dụ; dùng Meiner Meinung nach và Ich bin der Meinung, dass.',
    },
    {
      title_vi: 'Đồng ý và phản đối',
      goal_vi: 'Đồng ý, phản đối lịch sự và bổ sung ý trong thảo luận.',
      items: [
        'Zustimmung', 'Ablehnung', 'Vorschlag', 'Einwand', 'Zweifel', 'Kritikpunkt', 'Gegenargument', 'Gesprächspartner',
        'Reaktion', 'zustimmen', 'widersprechen', 'ablehnen', 'recht haben', 'sich irren', 'einverstanden sein', 'unterbrechen',
        'ergänzen', 'zuhören', 'nachgeben', 'berechtigt', 'übertrieben', 'einseitig', 'fraglich', 'im Gegenteil',
        'Da bin ich anderer Meinung', 'Das sehe ich genauso', 'Das stimmt nicht ganz', 'Ich gebe dir recht', 'Ich bin dafür',
        'Ich bin dagegen', 'Mẫu câu đồng ý / phản đối',
      ],
      grammar: {
        point: 'zustimmen',
        sections: [
          {
            text_vi:
              'Đồng ý: **Ich stimme dir zu.** **Das sehe ich genauso.** **Da hast du recht.** / **Ich gebe dir recht.** **Ich bin dafür.** **Ich bin mit** … **einverstanden.** Lưu ý: **zustimmen** + **Dativ** (dir, Ihnen, dem Vorschlag): Ich stimme **dem Vorschlag** zu.',
            examples: [
              ['Ich stimme dir völlig zu.', 'Tôi hoàn toàn đồng ý với bạn.'],
              ['Mit diesem Vorschlag bin ich einverstanden.', 'Tôi đồng ý với đề xuất này.'],
            ],
            exercises: [
              fill('Ich stimme {dir} völlig zu. (du)', 'Tôi hoàn toàn đồng ý với bạn.'),
              choose('Das sehe ich ___.', ['genauso', 'gleich', 'so gleich'], 'genauso', { vi: 'Tôi cũng thấy như vậy.' }),
              choose('Ich bin ___ dem Vorschlag einverstanden.', ['mit', 'für', 'von'], 'mit', { vi: 'Tôi đồng ý với đề xuất.' }),
            ],
          },
          {
            text_vi:
              'Phản đối lịch sự: **Da bin ich anderer Meinung.** **Das stimmt nicht ganz.** **Ich bin dagegen.** **widersprechen** + **Dativ**: Da muss ich **Ihnen** widersprechen. Mềm hơn: **Ja, aber** … Ngược hẳn: **Im Gegenteil!** Ngắt lời lịch sự: **Darf ich kurz unterbrechen?**',
            table: 'Đồng ý | Phản đối\nIch stimme dir zu. | Da bin ich anderer Meinung.\nDas sehe ich genauso. | Das stimmt nicht ganz.\nIch gebe dir recht. | Da muss ich dir widersprechen.\nIch bin dafür. | Ich bin dagegen.',
            examples: [['Das stimmt nicht ganz. Im Gegenteil, die Preise sind gesunken.', 'Điều đó không hoàn toàn đúng. Ngược lại, giá đã giảm.']],
            exercises: [
              choose('Da muss ich ___ widersprechen.', ['Ihnen', 'Sie', 'Ihr'], 'Ihnen', { vi: 'Ở điểm này tôi phải phản đối ông/bà.' }),
              fill('Da bin ich {anderer} Meinung.', 'Ở điểm này tôi có ý kiến khác.'),
              transform('Nói lịch sự hơn', 'Das ist falsch!', ['Das stimmt nicht ganz.', 'Da bin ich anderer Meinung.']),
            ],
          },
          {
            text_vi:
              'Thảo luận văn minh: **zuhören** (lắng nghe) **Gesprächspartner**, **ergänzen** (bổ sung), không **unterbrechen**. Có **Einwand** (phản bác) hay **Zweifel** (nghi ngờ) thì nói ra. Nhận sai: **Ich habe mich geirrt.** Lập luận có thể **berechtigt** (chính đáng), **übertrieben** (cường điệu) hay **einseitig** (phiến diện).',
            examples: [['Das ist ein berechtigter Einwand.', 'Đó là một ý phản bác chính đáng.']],
            exercises: [
              fill('Entschuldigung, ich habe mich {geirrt}.', 'Xin lỗi, tôi đã nhầm.'),
              translate('Tôi ủng hộ đề xuất này.', ['Ich bin für diesen Vorschlag.', 'Ich bin dafür.', 'Ich stimme diesem Vorschlag zu.']),
            ],
          },
        ],
        mixed: [
          choose('Ich gebe ___ recht.', ['dir', 'dich'], 'dir', { vi: 'Tôi đồng ý là bạn đúng.' }),
          fill('Darf ich Sie kurz {unterbrechen}?', 'Tôi có thể ngắt lời ông/bà một chút không?'),
          choose('Viele Eltern lehnen den Vorschlag ___.', ['ab', 'zu', 'an'], 'ab', { vi: 'Nhiều phụ huynh bác bỏ đề xuất.' }),
          choose('Ist das teurer geworden? – Im ___, es ist billiger!', ['Gegenteil', 'Gegensatz'], 'Gegenteil', { vi: 'Nó đắt hơn à? – Ngược lại, nó rẻ hơn!' }),
          order('Ich / bin / mit / deinem Vorschlag / einverstanden.', 'Tôi đồng ý với đề xuất của bạn.'),
        ],
      },
      dialogue: {
        title_de: 'Ein Veggie-Tag in der Kantine?',
        lines: [
          { speaker: 'A', de: 'Die Schule will einen Veggie-Tag in der Kantine einführen. Ich bin dafür.', vi: 'Trường muốn có một ngày ăn chay ở căng-tin. Mình ủng hộ.' },
          { speaker: 'B', de: 'Da bin ich anderer Meinung. Jeder sollte selbst entscheiden, was er isst.', vi: 'Mình có ý kiến khác. Mỗi người nên tự quyết định mình ăn gì.' },
          { speaker: 'A', de: 'Das stimmt nicht ganz. Man hat ja jeden Tag eine Wahl, nur am Donnerstag nicht.', vi: 'Điều đó không hoàn toàn đúng. Ngày nào cũng có lựa chọn, chỉ thứ Năm là không.' },
          { speaker: 'B', de: 'Darf ich kurz ergänzen? Viele Schüler essen dann gar nichts. Das finde ich nicht sinnvoll.', vi: 'Cho mình bổ sung một chút? Nhiều học sinh khi đó sẽ không ăn gì. Mình thấy vậy không hợp lý.' },
          { speaker: 'A', de: 'Ich gebe dir recht, das ist ein berechtigter Einwand. Aber weniger Fleisch ist gesünder.', vi: 'Mình đồng ý, đó là ý phản bác chính đáng. Nhưng ít thịt thì tốt cho sức khỏe hơn.' },
          { speaker: 'B', de: 'Das sehe ich genauso. Trotzdem finde ich ein Verbot übertrieben.', vi: 'Mình cũng thấy vậy. Dù vậy mình thấy cấm thì cường điệu quá.' },
          { speaker: 'A', de: 'Und was wäre ein Kompromiss?', vi: 'Thế đâu là cách thỏa hiệp?' },
          { speaker: 'B', de: 'Vielleicht zwei Gerichte: eins mit Fleisch und eins ohne.', vi: 'Có lẽ hai món: một món có thịt và một món không.' },
          { speaker: 'A', de: 'Damit bin ich einverstanden!', vi: 'Mình đồng ý với điều đó!' },
        ],
        gloss: { 'Veggie-Tag': 'ngày ăn chay', Kantine: 'căng-tin', selbst: 'tự mình', entscheiden: 'quyết định', 'gar nichts': 'không gì cả', Gerichte: 'món ăn', eins: 'một (cái)', damit: 'với điều đó', Verbot: 'lệnh cấm' },
        questions: [
          tf('A ist gegen den Veggie-Tag.', false, { explain: 'Ich bin dafür.' }),
          mc('B lo ngại điều gì?', ['nhiều học sinh sẽ không ăn gì', 'đồ chay đắt', 'căng-tin đóng cửa'], 'nhiều học sinh sẽ không ăn gì'),
          mc('Ngày ăn chay là thứ mấy?', ['thứ Năm', 'thứ Hai', 'thứ Sáu'], 'thứ Năm'),
          tf('Am Ende finden sie einen Kompromiss.', true),
        ],
        dictation: [1, 4],
      },
      writing_prompt_vi:
        'Viết một đoạn hội thoại tranh luận ngắn (6 câu) về một quy định ở trường hoặc nơi làm việc, dùng ít nhất hai mẫu câu đồng ý và hai mẫu câu phản đối.',
    },
    {
      title_vi: 'Cân nhắc hai mặt',
      goal_vi: 'Cân nhắc ưu nhược điểm và đưa ra kết luận; dùng zwar … aber, einerseits … andererseits.',
      items: [
        'Debatte', 'Pro und Contra', 'Zusammenfassung', 'Schluss', 'Schlussfolgerung', 'Kompromisslösung', 'argumentieren',
        'zweifeln', 'überlegen', 'einsehen', 'verteidigen', 'sinnvoll', 'sinnlos', 'logisch', 'eindeutig', 'kontrovers',
        'sachlich', 'emotional', 'nachvollziehbar', 'widersprüchlich', 'unbedingt', 'einerseits', 'andererseits', 'außerdem',
        'allerdings', 'zwar', 'auf der einen Seite … auf der anderen Seite', 'Das kommt darauf an', 'zwar … aber',
        'einerseits … andererseits',
      ],
      grammar: {
        point: 'zwar-aber',
        sections: [
          {
            text_vi:
              '**zwar … aber** = tuy … nhưng: thừa nhận một điểm rồi đưa ý ngược lại: Das Studium ist **zwar** teuer, **aber** es lohnt sich. zwar là trạng từ: thường đứng **sau động từ**; đứng vị trí 1 thì động từ ngay sau (**Zwar ist** das teuer, aber …). Vế aber: trật tự câu bình thường.',
            examples: [
              ['Das Auto ist zwar alt, aber es fährt noch gut.', 'Chiếc ô tô tuy cũ nhưng vẫn chạy tốt.'],
              ['Zwar ist die Idee gut, aber sie ist zu teuer.', 'Tuy ý tưởng hay nhưng quá tốn kém.'],
            ],
            exercises: [
              fill('Die Wohnung ist {zwar} klein, aber sehr gemütlich.', 'Căn hộ tuy nhỏ nhưng rất ấm cúng.'),
              choose('Zwar ___ er viel, aber er versteht wenig.', ['liest', 'er liest'], 'liest', { vi: 'Tuy đọc nhiều nhưng anh ấy hiểu ít.' }),
              order('Die Idee / ist / zwar / gut, / aber / zu teuer.', 'Ý tưởng tuy hay nhưng quá đắt.'),
            ],
          },
          {
            text_vi:
              '**einerseits … andererseits** (= **auf der einen Seite … auf der anderen Seite**) = một mặt … mặt khác: cân nhắc **hai mặt**. **Einerseits spart** Homeoffice Zeit, **andererseits fehlt** der Kontakt. Đứng đầu câu thì động từ ngay sau. Thêm ý: **außerdem**; chuyển ý trái ngược nhẹ: **allerdings** (tuy nhiên).',
            table: 'Từ nối | Chức năng | Ví dụ\nzwar … aber | thừa nhận rồi phản bác | Das ist zwar teuer, aber gut.\neinerseits … andererseits | cân nhắc hai mặt | Einerseits …, andererseits …\naußerdem | thêm ý | Außerdem ist es billig.\nallerdings | tuy nhiên | Allerdings fehlt die Zeit.',
            examples: [['Einerseits ist die Stadt laut, andererseits gibt es viele Angebote.', 'Một mặt thành phố ồn ào, mặt khác có nhiều tiện ích.']],
            exercises: [
              choose('Einerseits ist das Land ruhig, ___ gibt es wenig Arbeit.', ['andererseits', 'außerdem', 'zwar'], 'andererseits', { vi: 'Một mặt nông thôn yên tĩnh, mặt khác ít việc làm.' }),
              transform('Nối bằng zwar … aber', 'Das Homeoffice ist bequem. Man ist oft allein.', [
                'Das Homeoffice ist zwar bequem, aber man ist oft allein.',
                'Zwar ist das Homeoffice bequem, aber man ist oft allein.',
              ]),
              fill('Das Hotel war schön. {Allerdings} war es sehr teuer.', 'Khách sạn đẹp. Tuy nhiên rất đắt.'),
            ],
          },
          {
            text_vi:
              'Kết thúc tranh luận: **Zusammenfassung** (tóm tắt) **Pro und Contra**, rồi **Schlussfolgerung** (kết luận). Lập luận tốt thì **sachlich** (khách quan), **logisch**, **nachvollziehbar** (dễ hiểu); tránh **emotional**, **widersprüchlich**. **Das kommt darauf an** = còn tùy.',
            examples: [['Das Thema ist kontrovers, deshalb sollten wir sachlich bleiben.', 'Chủ đề gây tranh cãi nên chúng ta nên giữ khách quan.']],
            exercises: [
              fill('Ist Homeoffice besser? – Das kommt {darauf} an.', 'Làm việc ở nhà có tốt hơn không? – Còn tùy.'),
              translate('Chúng ta hãy thảo luận một cách khách quan.', ['Lass uns sachlich diskutieren.', 'Lasst uns sachlich diskutieren.', 'Wir sollten sachlich diskutieren.']),
            ],
          },
        ],
        mixed: [
          transform('Nối bằng einerseits … andererseits', 'Das Auto ist praktisch. Es ist schlecht für die Umwelt.', [
            'Einerseits ist das Auto praktisch, andererseits ist es schlecht für die Umwelt.',
          ]),
          choose('Er hat ___ recht, aber er übertreibt.', ['zwar', 'einerseits', 'außerdem'], 'zwar', { vi: 'Anh ấy tuy đúng nhưng nói quá lên.' }),
          fill('Das Essen ist gesund. {Außerdem} ist es billig.', 'Món ăn tốt cho sức khỏe. Ngoài ra còn rẻ.'),
          choose('Einerseits möchte ich reisen, andererseits ___ ich Geld sparen.', ['will', 'ich will'], 'will', { vi: 'Một mặt tôi muốn đi du lịch, mặt khác tôi muốn tiết kiệm tiền.' }),
          order('Die Arbeit / ist / zwar / anstrengend, / aber / sie / macht / Spaß.', 'Công việc tuy vất vả nhưng vui.'),
        ],
      },
      dialogue: {
        title_de: 'Homeoffice: Pro und Contra',
        lines: [
          { speaker: 'A', de: 'Was hältst du vom Homeoffice?', vi: 'Bạn nghĩ gì về làm việc ở nhà?' },
          { speaker: 'B', de: 'Das kommt darauf an. Einerseits spare ich viel Zeit, weil ich nicht ins Büro fahren muss.', vi: 'Còn tùy. Một mặt mình tiết kiệm nhiều thời gian vì không phải đến văn phòng.' },
          { speaker: 'A', de: 'Und andererseits?', vi: 'Còn mặt khác?' },
          { speaker: 'B', de: 'Andererseits fehlt mir der Kontakt zu den Kollegen. Wir telefonieren zwar oft, aber das ist nicht dasselbe.', vi: 'Mặt khác mình thiếu sự tiếp xúc với đồng nghiệp. Tuy hay gọi điện nhưng không giống nhau.' },
          { speaker: 'A', de: 'Das verstehe ich. Außerdem ist es zu Hause manchmal laut, oder?', vi: 'Mình hiểu. Ngoài ra ở nhà đôi khi ồn, đúng không?' },
          { speaker: 'B', de: 'Genau! Allerdings kann ich mir die Zeit frei einteilen. Das ist ein großer Vorteil.', vi: 'Đúng! Tuy nhiên mình có thể tự do sắp xếp thời gian. Đó là ưu điểm lớn.' },
          { speaker: 'A', de: 'Also, was ist deine Schlussfolgerung?', vi: 'Vậy kết luận của bạn là gì?' },
          { speaker: 'B', de: 'Ich finde eine Kompromisslösung sinnvoll: zwei Tage im Büro, drei Tage zu Hause.', vi: 'Mình thấy giải pháp thỏa hiệp là hợp lý: hai ngày ở văn phòng, ba ngày ở nhà.' },
          { speaker: 'A', de: 'Das klingt logisch. Ich bin überzeugt, dass viele Firmen das so machen werden.', vi: 'Nghe hợp lý. Mình tin chắc nhiều công ty sẽ làm như vậy.' },
        ],
        gloss: { Kontakt: 'sự tiếp xúc', dasselbe: 'cùng một thứ', frei: 'tự do', einteilen: 'sắp xếp, phân chia', klingt: 'nghe có vẻ' },
        questions: [
          mc('Ưu điểm đầu tiên của làm việc ở nhà theo B là gì?', ['tiết kiệm thời gian đi lại', 'lương cao hơn', 'nhà yên tĩnh'], 'tiết kiệm thời gian đi lại'),
          tf('B fehlt der Kontakt zu den Kollegen.', true),
          tf('Zu Hause ist es immer ruhig.', false, { explain: 'Außerdem ist es zu Hause manchmal laut.' }),
          mc('Giải pháp thỏa hiệp của B là gì?', ['hai ngày ở văn phòng, ba ngày ở nhà', 'chỉ làm ở nhà', 'chỉ làm ở văn phòng'], 'hai ngày ở văn phòng, ba ngày ở nhà'),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi:
        'Viết một bài ngắn (6–8 câu) cân nhắc ưu nhược điểm của việc sống ở thành phố lớn: mở đầu, einerseits … andererseits, zwar … aber, kết luận với meiner Meinung nach.',
    },
  ],
  test: {
    grammar: {
      meinung: [
        choose('Meiner Meinung nach ___ das falsch.', ['ist', 'das ist'], 'ist'),
        fill('Ich bin der Meinung, dass wir mehr lernen {sollten}.', 'Tôi cho rằng chúng ta nên học nhiều hơn.'),
        choose('Ich finde, das ___ eine gute Idee.', ['ist', 'sein'], 'ist'),
        order('Meiner Meinung nach / ist / Sport / sehr / wichtig.', 'Theo tôi, thể thao rất quan trọng.'),
        choose('Ich bin überzeugt, dass er recht ___.', ['hat', 'haben'], 'hat'),
        fill('{Meiner} Meinung nach sollte man mehr lesen.', 'Theo tôi, người ta nên đọc nhiều hơn.'),
      ],
      zustimmen: [
        fill('Ich stimme {dir} zu. (du)', 'Tôi đồng ý với bạn.'),
        choose('Da bin ich ___ Meinung.', ['anderer', 'andere'], 'anderer'),
        choose('Ich gebe ___ recht.', ['Ihnen', 'Sie'], 'Ihnen'),
        choose('Ich bin ___ dem Plan einverstanden.', ['mit', 'für'], 'mit'),
        order('Das / sehe / ich / genauso.', 'Tôi cũng thấy như vậy.'),
        fill('Da muss ich dir {widersprechen}.', 'Ở điểm này tôi phải phản đối bạn.'),
      ],
      'zwar-aber': [
        fill('Das ist {zwar} teuer, aber gut.', 'Cái đó tuy đắt nhưng tốt.'),
        choose('Einerseits ist es schön, ___ ist es teuer.', ['andererseits', 'außerdem'], 'andererseits'),
        choose('Zwar ___ ich müde, aber ich komme mit.', ['bin', 'ich bin'], 'bin'),
        order('Das Buch / ist / zwar / lang, / aber / spannend.', 'Cuốn sách tuy dài nhưng hấp dẫn.'),
        choose('Er ist nett. ___ ist er hilfsbereit.', ['Außerdem', 'Andererseits'], 'Außerdem'),
        fill('Die Reise war schön, {aber} zu kurz.', 'Chuyến đi đẹp nhưng quá ngắn.'),
      ],
    },
    reading: {
      title_de: 'Die Vier-Tage-Woche',
      text_de:
        'In Deutschland wird über die Vier-Tage-Woche diskutiert. Einige Firmen haben sie schon eingeführt. Die Befürworter sind der Meinung, dass Menschen mit mehr Freizeit gesünder und motivierter sind. Eine Studie zeigt tatsächlich, dass die Leistung nicht sinkt. Andererseits gibt es auch Kritikpunkte. Zwar ist die Idee für Büros gut, aber in Krankenhäusern oder Geschäften ist sie schwer umzusetzen. Außerdem fürchten manche Arbeitgeber höhere Kosten. Meiner Meinung nach kommt es auf den Beruf an. Eine Kompromisslösung wäre, dass jede Firma selbst entscheidet.',
      gloss: {
        'Vier-Tage-Woche': 'tuần làm bốn ngày',
        eingeführt: 'áp dụng (einführen)',
        Befürworter: 'người ủng hộ',
        motivierter: 'có động lực hơn',
        umzusetzen: 'thực hiện (umsetzen)',
        fürchten: 'lo sợ',
        selbst: 'tự',
        entscheidet: 'quyết định',
      },
      questions: [
        tf('Einige Firmen haben die Vier-Tage-Woche schon eingeführt.', true),
        mc('Người ủng hộ cho rằng điều gì?', ['có nhiều thời gian rảnh thì khỏe và có động lực hơn', 'lương sẽ tăng', 'ít việc hơn'], 'có nhiều thời gian rảnh thì khỏe và có động lực hơn'),
        mc('Ở đâu ý tưởng này khó thực hiện?', ['bệnh viện và cửa hàng', 'văn phòng', 'trường học'], 'bệnh viện và cửa hàng'),
        tf('Laut der Studie sinkt die Leistung stark.', false, { explain: 'Eine Studie zeigt, dass die Leistung nicht sinkt.' }),
      ],
    },
  },
});
