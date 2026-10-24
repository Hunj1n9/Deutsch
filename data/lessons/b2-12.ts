// B2 · 12 Pháp luật và quyền — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b2-12',
  points: [
    {
      key: 'amtssprache',
      rule_key: 'amtssprache-erfolgen-gemaess',
      category: 'word_choice',
      title_vi: 'Văn phong hành chính: erfolgen, gemäß, laut, zufolge',
      explanation_vi: 'Thư của cơ quan dùng danh từ + động từ "rỗng": Die Zahlung erfolgt … (= Sie zahlen …), eine Prüfung vornehmen. Nêu căn cứ: gemäß + Dat (gemäß § 5), laut + Dat/Gen (laut Vertrag), zufolge + Dat (đứng sau: dem Bescheid zufolge).',
    },
    {
      key: 'nvv-amtlich',
      rule_key: 'nomen-verb-verbindung-amtlich',
      category: 'word_choice',
      title_vi: 'Cụm danh từ – động từ trong văn bản pháp lý',
      explanation_vi: 'zur Verfügung stellen/stehen, in Anspruch nehmen, zur Kenntnis nehmen, in Kraft treten/sein, in Frage kommen, zur Anwendung kommen. Một số cụm mang nghĩa bị động: zur Anwendung kommen = angewendet werden.',
    },
    {
      key: 'relativ-genitiv',
      rule_key: 'relativsatz-genitiv-dessen-deren',
      category: 'case',
      title_vi: 'Mệnh đề quan hệ Genitiv: dessen, deren',
      explanation_vi: 'dessen cho danh từ giống đực và trung, deren cho giống cái và số nhiều: der Mann, dessen Auto …; die Frau, deren Anwalt … Danh từ sau dessen/deren không có mạo từ; tính từ sau đó mang đuôi mạnh (dessen neuer Anwalt).',
    },
  ],
  lessons: [
    {
      title_vi: 'Thư từ cơ quan',
      goal_vi: 'Đọc hiểu thư và quyết định hành chính, viết đơn khiếu nại đúng hạn; nhận ra văn phong với erfolgen, gemäß, laut.',
      items: [
        'Bescheid', 'Widerspruch', 'Vorschrift', 'einlegen', 'zustehen', 'berechtigen', 'verpflichten', 'beglaubigen',
        'gesetzlich', 'ungültig', 'verpflichtet', 'zulässig', 'amtlich', 'Anspruch haben auf',
        'Văn phong hành chính: Nominalstil', 'Giới từ Genitiv: gemäß, laut, zufolge', 'Notar', 'Antragsteller',
        'Bearbeitungszeit', 'genehmigen', 'bewilligen', 'vorlegen', 'anfechten', 'aufheben', 'erlassen', 'befugt', 'unzulässig',
        'fristgerecht', 'unbefugt', 'Einspruch erheben', 'Vollmacht', 'bevollmächtigen',
      ],
      grammar: {
        point: 'amtssprache',
        sections: [
          {
            text_vi:
              'Thư cơ quan (Ausländerbehörde, Finanzamt…) "đóng gói" hành động vào **danh từ** và dùng động từ trang trọng: **erfolgen** (diễn ra), **vornehmen** (tiến hành), **durchführen**. Die Auszahlung **erfolgt** monatlich = Wir zahlen monatlich aus. Đọc thư: tìm **danh từ -ung** để biết hành động là gì, rồi tìm **ai** làm và **khi nào**.',
            table: 'Văn phong hành chính | Văn nói\nDie Zahlung erfolgt bis zum 1. Mai. | Sie müssen bis zum 1. Mai zahlen.\nDie Prüfung Ihres Antrags wird vorgenommen. | Wir prüfen Ihren Antrag.\nEine Verlängerung ist nicht möglich. | Wir können nicht verlängern.',
            examples: [
              ['Die Bearbeitung Ihres Antrags erfolgt innerhalb von vier Wochen.', 'Hồ sơ của bạn được xử lý trong vòng bốn tuần.'],
              ['Die Vorlage der Originale ist erforderlich.', 'Cần xuất trình bản gốc.'],
            ],
            exercises: [
              choose('Die Zahlung ___ bis spätestens 15. März.', ['erfolgt', 'macht', 'gibt'], 'erfolgt', { vi: 'Việc thanh toán diễn ra chậm nhất vào ngày 15/3.' }),
              fill('Die {Bearbeitung} Ihres Antrags dauert sechs Wochen. (bearbeiten)', 'Việc xử lý hồ sơ của bạn mất sáu tuần.'),
              transform('Viết lại bằng văn nói (Sie müssen …)', 'Die Vorlage des Reisepasses ist erforderlich.', [
                'Sie müssen den Reisepass vorlegen.',
                'Sie müssen Ihren Reisepass vorlegen.',
              ]),
            ],
          },
          {
            text_vi:
              'Nêu **căn cứ** pháp lý: **gemäß** + Dativ (gemäß § 5 des Gesetzes, gemäß den Vorschriften), **laut** + Dativ/Genitiv (laut Vertrag, laut Bescheid), **zufolge** + Dativ, **đứng sau** danh từ: dem Bescheid **zufolge**. Khiếu nại quyết định: **Widerspruch einlegen** hoặc **Einspruch erheben**, phải **fristgerecht** (đúng hạn), thường trong **một tháng**.',
            table: 'Giới từ | Cách | Ví dụ\ngemäß | Dativ (đứng trước) | gemäß den Vorschriften\nlaut | Dativ/Genitiv | laut Vertrag, laut des Bescheids\nzufolge | Dativ (đứng sau) | dem Bescheid zufolge',
            examples: [['Gegen diesen Bescheid können Sie innerhalb eines Monats Widerspruch einlegen.', 'Bạn có thể khiếu nại quyết định này trong vòng một tháng.']],
            exercises: [
              choose('Gemäß ___ Vorschriften ist das Parken hier verboten.', ['den', 'der', 'die'], 'den', { vi: 'Theo quy định, đỗ xe ở đây bị cấm.' }),
              fill('Dem Bescheid {zufolge} muss ich 200 Euro zahlen.', 'Theo quyết định, tôi phải trả 200 euro.'),
              translate('Tôi muốn khiếu nại quyết định này.', [
                'Ich möchte Widerspruch gegen diesen Bescheid einlegen.',
                'Ich lege Widerspruch gegen diesen Bescheid ein.',
                'Ich möchte gegen diesen Bescheid Widerspruch einlegen.',
              ]),
            ],
          },
        ],
        mixed: [
          choose('Laut ___ Mietvertrag ist Rauchen verboten.', ['dem', 'den', 'der'], 'dem', { vi: 'Theo hợp đồng thuê nhà, hút thuốc bị cấm.' }),
          fill('Die Auszahlung des Geldes {erfolgt} am Monatsende.', 'Tiền được chi trả vào cuối tháng.'),
          choose('Den Angaben ___ wurde der Antrag genehmigt.', ['zufolge', 'gemäß', 'laut'], 'zufolge', { vi: 'Theo thông tin, đơn đã được phê duyệt.' }),
          transform('Viết lại bằng văn phong hành chính (erfolgen)', 'Wir prüfen Ihre Unterlagen im Mai.', ['Die Prüfung Ihrer Unterlagen erfolgt im Mai.']),
          order('Der Widerspruch / muss / fristgerecht / eingelegt / werden.', 'Đơn khiếu nại phải được nộp đúng hạn.'),
        ],
      },
      dialogue: {
        title_de: 'Ein Brief von der Ausländerbehörde',
        lines: [
          { speaker: 'A', de: 'Kannst du mir helfen? Ich verstehe diesen Bescheid nicht.', vi: 'Bạn giúp mình được không? Mình không hiểu quyết định này.' },
          { speaker: 'B', de: 'Zeig mal. Hier steht: "Die Verlängerung Ihres Aufenthaltstitels wird abgelehnt."', vi: 'Đưa mình xem. Ở đây ghi: "Việc gia hạn giấy phép lưu trú của bạn bị từ chối."' },
          { speaker: 'A', de: 'Was? Warum denn?', vi: 'Hả? Sao lại thế?' },
          { speaker: 'B', de: 'Dem Bescheid zufolge fehlt ein Nachweis über deine Krankenversicherung.', vi: 'Theo quyết định, thiếu giấy chứng nhận bảo hiểm y tế của bạn.' },
          { speaker: 'A', de: 'Aber ich habe ihn doch abgegeben! Was kann ich jetzt tun?', vi: 'Nhưng mình đã nộp rồi mà! Giờ mình làm gì được?' },
          { speaker: 'B', de: 'Du kannst Widerspruch einlegen. Laut Brief musst du das innerhalb eines Monats machen.', vi: 'Bạn có thể khiếu nại. Theo thư, bạn phải làm trong vòng một tháng.' },
          { speaker: 'A', de: 'Muss ich dafür zu einem Anwalt gehen?', vi: 'Mình có phải đến luật sư không?' },
          { speaker: 'B', de: 'Nicht unbedingt. Schreib einen kurzen Brief und lege eine beglaubigte Kopie des Nachweises bei.', vi: 'Không nhất thiết. Viết một lá thư ngắn và gửi kèm bản sao công chứng của giấy chứng nhận.' },
          { speaker: 'A', de: 'Und wenn ich nicht selbst hingehen kann?', vi: 'Thế nếu mình không tự đến được?' },
          { speaker: 'B', de: 'Dann kannst du mir eine Vollmacht geben. Ich bin dann befugt, die Unterlagen abzugeben.', vi: 'Thì bạn có thể đưa mình giấy ủy quyền. Khi đó mình có thẩm quyền nộp giấy tờ.' },
        ],
        gloss: { Verlängerung: 'sự gia hạn', abgelehnt: 'bị từ chối (ablehnen)', Nachweis: 'giấy chứng nhận', Krankenversicherung: 'bảo hiểm y tế', 'lege … bei': 'gửi kèm (beilegen)', Kopie: 'bản sao', hingehen: 'đi đến đó' },
        questions: [
          mc('Quyết định nói gì?', ['việc gia hạn giấy phép lưu trú bị từ chối', 'A được nhập quốc tịch', 'A phải nộp phạt'], 'việc gia hạn giấy phép lưu trú bị từ chối'),
          mc('Theo quyết định, thiếu giấy tờ gì?', ['giấy chứng nhận bảo hiểm y tế', 'hộ chiếu', 'hợp đồng thuê nhà'], 'giấy chứng nhận bảo hiểm y tế'),
          tf('A hat nur eine Woche Zeit für den Widerspruch.', false, { explain: 'Innerhalb eines Monats.' }),
          tf('Mit einer Vollmacht kann B die Unterlagen abgeben.', true),
        ],
        dictation: [3, 5],
      },
      writing_prompt_vi:
        'Viết đơn khiếu nại ngắn (6–8 câu) gửi một cơ quan về một quyết định sai (ví dụ phí phạt): số hồ sơ, lý do khiếu nại, giấy tờ gửi kèm; dùng gemäß hoặc laut và ít nhất một câu với erfolgen.',
    },
    {
      title_vi: 'Hợp đồng và quyền người tiêu dùng',
      goal_vi: 'Hiểu điều khoản hợp đồng, quyền hủy và bồi thường; dùng các cụm danh từ – động từ của văn bản pháp lý.',
      items: [
        'Vertragsbedingung', 'Kleingedruckte', 'Widerruf', 'Haftung', 'Schadensersatz', 'Datenschutzerklärung',
        'Verbraucherrecht', 'Menschenrecht', 'haften', 'widerrufen', 'verstoßen', 'in Kraft sein',
        'Cụm danh từ – động từ: zur Verfügung stellen', 'Mietvertrag', 'Mietrecht', 'Kaufvertrag', 'Rechtsschutzversicherung',
        'Gleichbehandlung', 'Datenschutzgrundverordnung', 'rechtskräftig', 'vertraglich', 'haftbar',
        'gegen das Gesetz verstoßen', 'Verjährung', 'Rechtsberatung', 'rechtsverbindlich', 'schlichten',
        'außergerichtlich einigen',
      ],
      grammar: {
        point: 'nvv-amtlich',
        sections: [
          {
            text_vi:
              'Văn bản pháp lý dùng nhiều **cụm danh từ – động từ** (đã gặp ở B2-01). Hay gặp: **zur Verfügung stellen** (cung cấp) / **zur Verfügung stehen** (sẵn có), **in Anspruch nehmen** (sử dụng dịch vụ, quyền), **zur Kenntnis nehmen** (ghi nhận), **in Kraft treten** (bắt đầu có hiệu lực) / **in Kraft sein** (đang có hiệu lực), **in Frage kommen** (có thể xem xét).',
            table: 'Cụm | Nghĩa | Động từ gần nghĩa\nzur Verfügung stellen | cung cấp | bereitstellen\nin Anspruch nehmen | sử dụng | nutzen\nzur Kenntnis nehmen | ghi nhận | wahrnehmen\nin Kraft treten | có hiệu lực | gelten (ab)\nin Frage kommen | có thể xét | möglich sein',
            examples: [
              ['Das neue Gesetz tritt am 1. Januar in Kraft.', 'Luật mới có hiệu lực từ ngày 1 tháng 1.'],
              ['Der Vermieter stellt eine Küche zur Verfügung.', 'Chủ nhà cung cấp một gian bếp.'],
            ],
            exercises: [
              choose('Das Gesetz ___ seit 2018 in Kraft.', ['ist', 'tritt', 'hat'], 'ist', { vi: 'Luật đó có hiệu lực từ năm 2018.' }),
              fill('Die Firma stellt den Mitarbeitern Laptops zur {Verfügung}.', 'Công ty cung cấp máy tính xách tay cho nhân viên.'),
              choose('Ich möchte eine Rechtsberatung in ___ nehmen.', ['Anspruch', 'Kraft', 'Kenntnis'], 'Anspruch', { vi: 'Tôi muốn sử dụng dịch vụ tư vấn pháp lý.' }),
            ],
          },
          {
            text_vi:
              'Một số cụm mang **nghĩa bị động**, chủ ngữ là vật: **zur Anwendung kommen** = angewendet werden (được áp dụng), **zur Sprache kommen** = besprochen werden, **in Kraft treten**. Còn **zur Anzeige bringen** = anzeigen (tố giác). Trong câu, động từ chia ở **vị trí 2**, cụm giới từ + danh từ đứng **cuối** như phần thứ hai của khung câu.',
            examples: [['In diesem Fall kommt das Mietrecht zur Anwendung.', 'Trong trường hợp này luật thuê nhà được áp dụng.']],
            exercises: [
              transform('Viết lại với "zur Anwendung kommen"', 'In diesem Fall wird das Verbraucherrecht angewendet.', [
                'In diesem Fall kommt das Verbraucherrecht zur Anwendung.',
              ]),
              fill('Das Problem kam in der Sitzung nicht zur {Sprache}.', 'Vấn đề đã không được đưa ra bàn trong cuộc họp.'),
              translate('Tôi đã ghi nhận lời khiếu nại của bạn.', [
                'Ich habe Ihre Beschwerde zur Kenntnis genommen.',
                'Ich habe deine Beschwerde zur Kenntnis genommen.',
                'Wir haben Ihre Beschwerde zur Kenntnis genommen.',
              ]),
            ],
          },
        ],
        mixed: [
          choose('Die neue Regel ___ nächsten Monat in Kraft.', ['tritt', 'ist', 'kommt'], 'tritt', { vi: 'Quy định mới có hiệu lực từ tháng sau.' }),
          fill('Für das Projekt stehen 5.000 Euro zur {Verfügung}.', 'Dự án có sẵn 5.000 euro.'),
          choose('Eine Kündigung kommt für mich nicht in ___.', ['Frage', 'Kraft', 'Anspruch'], 'Frage', { vi: 'Với tôi, việc chấm dứt hợp đồng không nằm trong xem xét.' }),
          transform('Viết lại với "in Anspruch nehmen"', 'Viele Kunden nutzen das Widerrufsrecht.', ['Viele Kunden nehmen das Widerrufsrecht in Anspruch.']),
          order('Der Mieter / hat / die Kündigung / zur Kenntnis / genommen.', 'Người thuê nhà đã ghi nhận thông báo chấm dứt hợp đồng.'),
        ],
      },
      dialogue: {
        title_de: 'Das Kleingedruckte',
        lines: [
          { speaker: 'A', de: 'Ich habe online einen Handyvertrag abgeschlossen und bereue es schon.', vi: 'Mình đã ký hợp đồng điện thoại trực tuyến và giờ hối hận rồi.' },
          { speaker: 'B', de: 'Hast du das Kleingedruckte nicht gelesen?', vi: 'Bạn không đọc phần chữ nhỏ à?' },
          { speaker: 'A', de: 'Nein. Der Vertrag läuft zwei Jahre, und ab dem siebten Monat wird es viel teurer.', vi: 'Không. Hợp đồng kéo dài hai năm, và từ tháng thứ bảy sẽ đắt hơn nhiều.' },
          { speaker: 'B', de: 'Wann hast du ihn abgeschlossen? Bei Online-Verträgen hast du ein Widerrufsrecht von vierzehn Tagen.', vi: 'Bạn ký khi nào? Với hợp đồng trực tuyến bạn có quyền hủy trong mười bốn ngày.' },
          { speaker: 'A', de: 'Vor einer Woche. Das heißt, ich kann ihn noch widerrufen?', vi: 'Một tuần trước. Vậy là mình vẫn hủy được à?' },
          { speaker: 'B', de: 'Genau. Dieses Recht kannst du ohne Begründung in Anspruch nehmen.', vi: 'Đúng vậy. Bạn có thể dùng quyền này mà không cần lý do.' },
          { speaker: 'A', de: 'Und was ist, wenn die Firma nicht reagiert?', vi: 'Thế nếu công ty không phản hồi thì sao?' },
          { speaker: 'B', de: 'Dann hilft die Verbraucherzentrale. Dort steht dir eine Rechtsberatung zur Verfügung.', vi: 'Thì trung tâm bảo vệ người tiêu dùng sẽ giúp. Ở đó có dịch vụ tư vấn pháp lý cho bạn.' },
          { speaker: 'A', de: 'Super. Ich schreibe den Widerruf noch heute.', vi: 'Tuyệt. Mình viết đơn hủy ngay hôm nay.' },
        ],
        gloss: { Handyvertrag: 'hợp đồng điện thoại', abgeschlossen: 'ký kết (abschließen)', bereue: 'hối hận (bereuen)', Widerrufsrecht: 'quyền hủy hợp đồng', Begründung: 'lý do', Verbraucherzentrale: 'trung tâm bảo vệ người tiêu dùng', reagiert: 'phản hồi (reagieren)' },
        questions: [
          mc('A đã ký hợp đồng gì?', ['hợp đồng điện thoại', 'hợp đồng thuê nhà', 'hợp đồng lao động'], 'hợp đồng điện thoại'),
          tf('Der Vertrag läuft nur sechs Monate.', false, { explain: 'Der Vertrag läuft zwei Jahre.' }),
          mc('Quyền hủy hợp đồng trực tuyến kéo dài bao lâu?', ['mười bốn ngày', 'một tháng', 'bảy ngày'], 'mười bốn ngày'),
          tf('Bei der Verbraucherzentrale gibt es eine Rechtsberatung.', true),
        ],
        dictation: [3, 7],
      },
      writing_prompt_vi:
        'Viết thư (6–8 câu) cho một công ty để hủy hợp đồng mua hàng trực tuyến: bạn mua gì, khi nào, vì sao hủy, yêu cầu hoàn tiền; dùng ít nhất ba cụm như in Anspruch nehmen, zur Kenntnis nehmen, zur Verfügung stellen.',
    },
    {
      title_vi: 'Ở tòa án',
      goal_vi: 'Nói về vụ kiện, nhân chứng và bản án; mô tả người và vật bằng mệnh đề quan hệ dessen, deren.',
      items: [
        'Rechtsanwalt', 'Richter', 'Gerichtsverfahren', 'Klage', 'Anklage', 'Straftat', 'Strafe', 'Geldstrafe', 'Gefängnis',
        'Betrug', 'verklagen', 'anklagen', 'bestrafen', 'freisprechen', 'rechtswidrig', 'vor Gericht gehen',
        'zur Rechenschaft ziehen', 'dessen / deren: quan hệ Genitiv', 'Rechtsprechung', 'Strafrecht', 'Zivilrecht',
        'Gerichtskosten', 'Zeugenaussage', 'Beweismittel', 'Bewährung', 'Freispruch', 'Berufung', 'Gutachten', 'aussagen',
        'Recht bekommen', 'zur Anzeige bringen', 'sich im Recht fühlen',
      ],
      grammar: {
        point: 'relativ-genitiv',
        sections: [
          {
            text_vi:
              'Mệnh đề quan hệ **Genitiv** nói "**của** người/vật đó": **dessen** cho danh từ **giống đực** và **trung**, **deren** cho **giống cái** và **số nhiều**. Chọn dessen/deren theo **danh từ đứng trước** (người sở hữu), không theo vật bị sở hữu: der Mann, **dessen** Frau …; die Frau, **deren** Mann … Động từ vẫn ở **cuối**.',
            table: 'Danh từ đứng trước | Đại từ | Ví dụ\nder Zeuge (đực) | dessen | der Zeuge, dessen Aussage wichtig war\ndas Kind (trung) | dessen | das Kind, dessen Eltern klagen\ndie Richterin (cái) | deren | die Richterin, deren Urteil …\ndie Kläger (số nhiều) | deren | die Kläger, deren Anwalt …',
            examples: [
              ['Der Mann, dessen Auto gestohlen wurde, ging zur Polizei.', 'Người đàn ông bị mất trộm xe đã đến cảnh sát.'],
              ['Die Firma, deren Chef angeklagt ist, schweigt.', 'Công ty mà sếp bị truy tố thì im lặng.'],
            ],
            exercises: [
              choose('Der Zeuge, ___ Aussage sehr wichtig war, kam nicht.', ['dessen', 'deren', 'der'], 'dessen', { vi: 'Nhân chứng mà lời khai rất quan trọng đã không đến.' }),
              fill('Die Mieterin, {deren} Wohnung gekündigt wurde, ging vor Gericht.', 'Người thuê nhà bị chấm dứt hợp đồng thuê đã ra tòa.'),
              choose('Die Nachbarn, ___ Hund ständig bellt, wurden verklagt.', ['deren', 'dessen', 'die'], 'deren', { vi: 'Những người hàng xóm có con chó sủa suốt đã bị kiện.' }),
            ],
          },
          {
            text_vi:
              'Danh từ sau dessen/deren **không có mạo từ**. Có tính từ thì tính từ mang **đuôi mạnh** (như không có mạo từ): der Angeklagte, dessen **neuer** Anwalt …; die Firma, deren **ehemalige** Mitarbeiter … Có giới từ thì giới từ đứng **trước** dessen/deren: die Richterin, **mit deren** Urteil niemand zufrieden war.',
            examples: [['Das ist der Anwalt, mit dessen Hilfe ich Recht bekommen habe.', 'Đó là luật sư nhờ có sự giúp đỡ của ông mà tôi được xử thắng.']],
            exercises: [
              fill('Der Angeklagte, dessen {neuer} Anwalt sehr bekannt ist, wurde freigesprochen.', 'Bị cáo có luật sư mới rất nổi tiếng đã được tuyên vô tội.'),
              transform('Nối bằng dessen/deren', 'Das ist die Richterin. Ihr Urteil war sehr streng.', ['Das ist die Richterin, deren Urteil sehr streng war.']),
              choose('Das ist die Firma, mit ___ Chef ich gesprochen habe.', ['deren', 'dessen', 'der'], 'deren', { vi: 'Đó là công ty mà tôi đã nói chuyện với sếp của họ.' }),
            ],
          },
        ],
        mixed: [
          choose('Das Kind, ___ Eltern geklagt hatten, bekam Schadensersatz.', ['dessen', 'deren', 'das'], 'dessen', { vi: 'Đứa trẻ có bố mẹ đã khởi kiện được nhận tiền bồi thường.' }),
          fill('Die Angeklagten, {deren} Strafe zur Bewährung ausgesetzt wurde, sind frei.', 'Những bị cáo được hưởng án treo đã được tự do.'),
          choose('Der Rechtsanwalt, ___ Klienten fast immer Recht bekommen, ist teuer.', ['dessen', 'deren', 'die'], 'dessen', { vi: 'Luật sư mà thân chủ gần như luôn thắng kiện thì đắt.' }),
          transform('Nối bằng dessen/deren', 'Der Zeuge sagte aus. Seine Aussage war entscheidend.', ['Der Zeuge, dessen Aussage entscheidend war, sagte aus.']),
          order('Die Firma, / deren / Chef / angeklagt / ist, / muss / eine Geldstrafe / zahlen.', 'Công ty có sếp bị truy tố phải nộp tiền phạt.'),
        ],
      },
      dialogue: {
        title_de: 'Ein Betrugsfall',
        lines: [
          { speaker: 'A', de: 'Hast du vom Prozess gegen den Online-Händler gehört?', vi: 'Bạn nghe về vụ xử người bán hàng trực tuyến chưa?' },
          { speaker: 'B', de: 'Ja, das ist der Mann, dessen Shop nie Waren geliefert hat. Hunderte Kunden haben ihn angezeigt.', vi: 'Có, đó là người đàn ông có cửa hàng chưa bao giờ giao hàng. Hàng trăm khách hàng đã tố giác ông ta.' },
          { speaker: 'A', de: 'Und was ist rausgekommen?', vi: 'Thế kết quả ra sao?' },
          { speaker: 'B', de: 'Die Anklage lautete auf Betrug. Eine Zeugin, deren Aussage sehr überzeugend war, hat alles bestätigt.', vi: 'Cáo trạng là lừa đảo. Một nữ nhân chứng có lời khai rất thuyết phục đã xác nhận mọi thứ.' },
          { speaker: 'A', de: 'Musste er ins Gefängnis?', vi: 'Ông ta có phải vào tù không?' },
          { speaker: 'B', de: 'Nein, er bekam zwei Jahre auf Bewährung und eine hohe Geldstrafe.', vi: 'Không, ông ta bị hai năm án treo và một khoản phạt lớn.' },
          { speaker: 'A', de: 'Und die Kunden, deren Geld weg ist?', vi: 'Thế những khách hàng bị mất tiền?' },
          { speaker: 'B', de: 'Sie können Schadensersatz verlangen. Aber sein Anwalt hat schon Berufung eingelegt.', vi: 'Họ có thể đòi bồi thường. Nhưng luật sư của ông ta đã kháng cáo rồi.' },
          { speaker: 'A', de: 'Das Urteil ist also noch nicht rechtskräftig.', vi: 'Vậy bản án chưa có hiệu lực pháp luật.' },
        ],
        gloss: { Prozess: 'vụ xử', 'Online-Händler': 'người bán hàng trực tuyến', Waren: 'hàng hóa', rausgekommen: 'kết quả là (herauskommen)', lautete: 'có nội dung (lauten)', bestätigt: 'xác nhận (bestätigen)', verlangen: 'đòi hỏi', Urteil: 'bản án' },
        questions: [
          mc('Người bán hàng bị cáo buộc tội gì?', ['lừa đảo', 'trộm cắp', 'trốn thuế'], 'lừa đảo'),
          tf('Der Händler musste ins Gefängnis.', false, { explain: 'Er bekam zwei Jahre auf Bewährung.' }),
          mc('Luật sư của bị cáo đã làm gì?', ['kháng cáo', 'từ chức', 'trả tiền cho khách'], 'kháng cáo'),
          tf('Das Urteil ist noch nicht rechtskräftig.', true),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Viết một bản tin ngắn (6–8 câu) về một vụ xử tưởng tượng: ai bị buộc tội gì, nhân chứng, bản án; dùng ít nhất ba mệnh đề quan hệ với dessen hoặc deren.',
    },
  ],
  test: {
    grammar: {
      amtssprache: [
        choose('Die Zahlung ___ bis zum Monatsende.', ['erfolgt', 'macht', 'tut'], 'erfolgt'),
        choose('Gemäß ___ Vertrag haben Sie 30 Tage Urlaub.', ['dem', 'den', 'des'], 'dem'),
        fill('Dem Bescheid {zufolge} ist der Antrag abgelehnt.', 'Theo quyết định, đơn bị từ chối.'),
        fill('Die {Bearbeitung} dauert vier Wochen. (bearbeiten)', 'Việc xử lý mất bốn tuần.'),
        order('Laut / Mietvertrag / sind / Haustiere / verboten.', 'Theo hợp đồng thuê nhà, vật nuôi bị cấm.'),
        choose('Sie können innerhalb eines Monats Widerspruch ___.', ['einlegen', 'machen', 'geben'], 'einlegen'),
      ],
      'nvv-amtlich': [
        choose('Das Gesetz tritt morgen in ___.', ['Kraft', 'Frage', 'Anspruch'], 'Kraft'),
        fill('Wir stellen Ihnen ein Zimmer zur {Verfügung}.', 'Chúng tôi cung cấp cho bạn một phòng.'),
        choose('Ich möchte die Beratung in ___ nehmen.', ['Anspruch', 'Kenntnis', 'Kraft'], 'Anspruch'),
        fill('Ich habe Ihre Nachricht zur {Kenntnis} genommen.', 'Tôi đã ghi nhận tin nhắn của bạn.'),
        order('Diese Lösung / kommt / leider / nicht / in Frage.', 'Tiếc là giải pháp này không thể xem xét.'),
        choose('In diesem Fall kommt das Strafrecht zur ___.', ['Anwendung', 'Verfügung', 'Kenntnis'], 'Anwendung'),
      ],
      'relativ-genitiv': [
        choose('Der Mann, ___ Auto kaputt ist, nimmt den Bus.', ['dessen', 'deren', 'der'], 'dessen'),
        choose('Die Frau, ___ Sohn Arzt ist, wohnt hier.', ['deren', 'dessen', 'die'], 'deren'),
        fill('Die Kinder, {deren} Eltern arbeiten, essen in der Schule.', 'Những đứa trẻ có bố mẹ đi làm ăn ở trường.'),
        fill('Das Haus, {dessen} Dach kaputt ist, wird renoviert.', 'Ngôi nhà có mái bị hỏng đang được sửa.'),
        choose('Der Autor, dessen ___ Buch erscheint, gibt eine Lesung.', ['neues', 'neue', 'neuen'], 'neues'),
        order('Das ist / die Kollegin, / deren / Idee / gewonnen / hat.', 'Đó là đồng nghiệp có ý tưởng đã thắng.'),
      ],
    },
    reading: {
      title_de: 'Streit mit dem Vermieter',
      text_de:
        'Viele Mieter wissen nicht, welche Rechte ihnen zustehen. Ein Beispiel: Ein Student, dessen Heizung den ganzen Winter nicht funktionierte, zahlte weiter die volle Miete. Laut Mietrecht hätte er die Miete mindern dürfen. Zuerst muss der Mieter den Mangel aber schriftlich melden. Reagiert der Vermieter nicht, kann der Mieter einen Teil der Miete einbehalten. Bei Streit lohnt sich eine Rechtsberatung, die zum Beispiel der Mieterverein zur Verfügung stellt. Nicht jeder Fall muss vor Gericht enden: Oft einigen sich die Parteien außergerichtlich. Wer eine Rechtsschutzversicherung hat, muss die Gerichtskosten im Ernstfall nicht selbst bezahlen.',
      gloss: {
        Heizung: 'hệ thống sưởi',
        mindern: 'giảm (tiền thuê)',
        Mangel: 'khiếm khuyết, hỏng hóc',
        schriftlich: 'bằng văn bản',
        einbehalten: 'giữ lại',
        Mieterverein: 'hội người thuê nhà',
        'im Ernstfall': 'khi có chuyện thật sự',
      },
      questions: [
        mc('Vấn đề của sinh viên là gì?', ['hệ thống sưởi hỏng cả mùa đông', 'chủ nhà tăng tiền thuê', 'nhà bị dột'], 'hệ thống sưởi hỏng cả mùa đông'),
        tf('Laut Mietrecht hätte der Student weniger Miete zahlen dürfen.', true),
        mc('Trước tiên người thuê nhà phải làm gì?', ['báo hỏng hóc bằng văn bản', 'ra tòa ngay', 'chuyển nhà'], 'báo hỏng hóc bằng văn bản'),
        tf('Jeder Streit mit dem Vermieter endet vor Gericht.', false, { explain: 'Oft einigen sich die Parteien außergerichtlich.' }),
      ],
    },
  },
});
