// A1 · 09 Giao thông và du lịch — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a1-09',
  points: [
    {
      key: 'mit-dativ',
      rule_key: 'dativ-nach-mit',
      category: 'case',
      title_vi: 'mit luôn đi với Dativ',
      explanation_vi: 'mit + Dativ: der/das → dem, die → der, số nhiều → den (+n). Đi đến thành phố, nước: nach; đi bộ: zu Fuß.',
    },
    {
      key: 'perfekt-haben',
      rule_key: 'perfekt-haben-partizip',
      category: 'tense',
      title_vi: 'Perfekt với haben và Partizip II',
      explanation_vi: 'haben (vị trí 2) + Partizip II (cuối câu): ge- + gốc + -t (gebucht); bất quy tắc -en (getrunken); -ieren, be-, ver- không có ge-.',
    },
    {
      key: 'perfekt-sein',
      rule_key: 'perfekt-sein-bewegung',
      category: 'tense',
      title_vi: 'Perfekt với sein (di chuyển, thay đổi)',
      explanation_vi: 'Động từ chỉ di chuyển từ A đến B hoặc thay đổi trạng thái, và bleiben, dùng sein: Ich bin gefahren, er ist angekommen.',
    },
  ],
  lessons: [
    {
      title_vi: 'Đi bằng gì?',
      goal_vi: 'Nói mình đi lại bằng phương tiện gì, đi đâu và từ đâu đến.',
      items: [
        'Bus', 'Zug', 'U-Bahn', 'Straßenbahn', 'Auto', 'Taxi', 'Flugzeug', 'Fahrer', 'mit', 'nach', 'von', 'zu Fuß',
        'fahren', 'fliegen', 'voll', 'leer', 'direkt', 'gleich', 'mit + Dativ',
        'S-Bahn', 'Autobahn', 'eilig',
      ],
      grammar: {
        point: 'mit-dativ',
        sections: [
          {
            text_vi:
              'Nói phương tiện: **mit** + Dativ: mit **dem** Bus, mit **dem** Auto, mit **der** U-Bahn. **mit luôn đi với Dativ**: der/das → **dem**, die → **der**, số nhiều → **den** (+n). Đi bộ thì không dùng mit: **zu Fuß**. Tiếng Việt "đi bằng xe buýt" không đổi gì; tiếng Đức đổi mạo từ.',
            table: 'Danh từ | mit + Dativ\nder Bus | mit dem Bus\ndas Taxi | mit dem Taxi\ndie U-Bahn | mit der U-Bahn\ndie Freunde | mit den Freunden',
            examples: [
              ['Ich fahre mit dem Zug nach Berlin.', 'Tôi đi tàu hỏa đến Berlin.'],
              ['Wir fahren mit der Straßenbahn.', 'Chúng tôi đi tàu điện.'],
            ],
            exercises: [
              choose('Ich fahre mit ___ Bus.', ['dem', 'den', 'der'], 'dem', { vi: 'Tôi đi xe buýt.' }),
              choose('Sie fährt mit ___ U-Bahn.', ['dem', 'der', 'die'], 'der', { vi: 'Cô ấy đi tàu điện ngầm.' }),
              fill('Wir fahren mit {dem} Auto.', 'Chúng tôi đi ô tô.', { hint: 'das Auto → Dativ' }),
            ],
          },
          {
            text_vi:
              '**fahren** đổi nguyên âm: du **fährst**, er **fährt**. Đi đến thành phố, nước (không mạo từ) dùng **nach**: nach Berlin, nach Vietnam. Từ đâu tới: **von** + Dativ (von München). Phân biệt: **nach** Hanoi nhưng **zum** Bahnhof.',
            examples: [
              ['Wir fliegen nach Vietnam.', 'Chúng tôi bay về Việt Nam.'],
              ['Der Zug kommt von München.', 'Tàu đến từ München.'],
            ],
            exercises: [
              fill('Er {fährt} jeden Tag mit dem Fahrrad.', 'Ngày nào anh ấy cũng đi xe đạp.'),
              choose('Wir fliegen ___ Hanoi.', ['nach', 'zu', 'mit'], 'nach', { vi: 'Chúng tôi bay đến Hà Nội.' }),
              choose('Ich gehe ___ Fuß.', ['zu', 'mit', 'nach'], 'zu', { vi: 'Tôi đi bộ.' }),
            ],
          },
          {
            text_vi:
              'Nhận xét phương tiện: **voll** (đông, đầy) – **leer** (trống); **direkt** (đi thẳng, không đổi tàu); **gleich** (ngay, sắp): Der Bus kommt **gleich**. Hỏi: **Wie fährst du zur Arbeit?** – **Mit der U-Bahn.**',
            examples: [['Am Morgen ist die U-Bahn immer voll.', 'Buổi sáng tàu điện ngầm lúc nào cũng đông.']],
            exercises: [
              translate('Bạn đi làm bằng gì?', ['Wie fährst du zur Arbeit?', 'Womit fährst du zur Arbeit?']),
              choose('Um zehn Uhr ist der Bus fast ___.', ['leer', 'voll', 'gleich'], 'leer', { vi: 'Lúc mười giờ xe buýt gần như trống.' }),
            ],
          },
        ],
        mixed: [
          translate('Tôi đi tàu hỏa.', ['Ich fahre mit dem Zug.']),
          choose('Ich fahre mit ___ Freunden.', ['den', 'dem', 'der'], 'den', { vi: 'Tôi đi cùng các bạn.' }),
          transform('Viết câu với mit (das Taxi)', 'Ich fahre …', ['Ich fahre mit dem Taxi.']),
          fill('Wir fahren morgen {nach} Hamburg.', 'Ngày mai chúng tôi đi Hamburg.'),
          order('Fährst / du / mit / der Straßenbahn?', 'Bạn đi tàu điện à?'),
        ],
      },
      dialogue: {
        title_de: 'Wie fährst du zur Arbeit?',
        lines: [
          { speaker: 'A', de: 'Wie fährst du zur Arbeit?', vi: 'Bạn đi làm bằng gì?' },
          { speaker: 'B', de: 'Meistens fahre ich mit der U-Bahn. Sie ist schnell, aber am Morgen immer voll.', vi: 'Thường mình đi tàu điện ngầm. Nhanh nhưng buổi sáng lúc nào cũng đông.' },
          { speaker: 'A', de: 'Ich fahre mit dem Fahrrad. Das ist gesund.', vi: 'Mình đi xe đạp. Tốt cho sức khỏe.' },
          { speaker: 'B', de: 'Und im Winter?', vi: 'Còn mùa đông?' },
          { speaker: 'A', de: 'Im Winter fahre ich mit dem Bus. Oder ich gehe zu Fuß.', vi: 'Mùa đông mình đi xe buýt. Hoặc đi bộ.' },
          { speaker: 'B', de: 'Mein Mann fährt mit dem Auto, aber er steht oft im Stau.', vi: 'Chồng mình đi ô tô, nhưng hay bị tắc đường.' },
          { speaker: 'A', de: 'Und am Wochenende?', vi: 'Còn cuối tuần?' },
          { speaker: 'B', de: 'Am Wochenende fahren wir mit dem Zug nach Hamburg, zu meinen Eltern.', vi: 'Cuối tuần bọn mình đi tàu đến Hamburg, về nhà bố mẹ mình.' },
        ],
        gloss: { schnell: 'nhanh', gesund: 'tốt cho sức khỏe', Winter: 'mùa đông', Stau: 'tắc đường', meinen: 'của tôi (Dativ số nhiều)' },
        questions: [
          mc('B thường đi làm bằng gì?', ['tàu điện ngầm', 'xe đạp', 'ô tô'], 'tàu điện ngầm'),
          tf('A fährt mit dem Fahrrad zur Arbeit.', true),
          mc('Mùa đông A đi làm thế nào?', ['xe buýt hoặc đi bộ', 'ô tô', 'tàu hỏa'], 'xe buýt hoặc đi bộ'),
          tf('Am Wochenende fahren sie mit dem Auto nach Hamburg.', false, { explain: 'Sie fahren mit dem Zug.' }),
        ],
        dictation: [0, 4],
      },
      writing_prompt_vi:
        'Viết 5 câu: bạn đi làm hoặc đi học, đi chợ, về quê bằng phương tiện gì (mit + Dativ, zu Fuß, nach + thành phố).',
    },
    {
      title_vi: 'Ở nhà ga',
      goal_vi: 'Mua vé, hỏi giờ tàu và kể việc đã làm bằng Perfekt với haben.',
      items: [
        'Flughafen', 'Gleis', 'Fahrkarte', 'Ticket', 'Abfahrt', 'Ankunft', 'Verspätung', 'Koffer', 'Gepäck', 'Pass', 'packen',
        'buchen', 'einsteigen', 'aussteigen', 'umsteigen', 'schwer', 'leicht', 'weg', 'einfach oder hin und zurück',
        'Perfekt với haben',
        'Bahnsteig', 'Schalter', 'Ansage', 'Durchsage', 'Anschluss', 'besetzt',
      ],
      grammar: {
        point: 'perfekt-haben',
        sections: [
          {
            text_vi:
              'Kể chuyện đã qua trong văn nói dùng **Perfekt**: **haben** (chia, vị trí 2) + **Partizip II** (cuối câu). Động từ có quy tắc: **ge- + gốc + -t**: buchen → **gebucht**, packen → **gepackt**, kaufen → **gekauft**, machen → **gemacht**. Tiếng Việt chỉ thêm "đã"; tiếng Đức cần hai phần như một cái khung.',
            table: 'Nguyên mẫu | Perfekt\nbuchen | Ich habe ein Hotel gebucht.\npacken | Er hat den Koffer gepackt.\nkaufen | Wir haben Fahrkarten gekauft.',
            examples: [
              ['Ich habe gestern ein Ticket gekauft.', 'Hôm qua tôi đã mua một cái vé.'],
              ['Hast du den Koffer schon gepackt?', 'Bạn xếp va li chưa?'],
            ],
            exercises: [
              fill('Ich habe ein Hotel {gebucht}.', 'Tôi đã đặt khách sạn.'),
              choose('Er ___ den Koffer gepackt.', ['hat', 'ist', 'haben'], 'hat', { vi: 'Anh ấy đã xếp va li.' }),
              order('Wir / haben / zwei Fahrkarten / gekauft.', 'Chúng tôi đã mua hai vé.'),
            ],
          },
          {
            text_vi:
              'Động từ **bất quy tắc** thường có Partizip tận cùng **-en** và hay đổi nguyên âm: essen → **gegessen**, trinken → **getrunken**, nehmen → **genommen**, sehen → **gesehen**. Những dạng này phải học thuộc; ghi chú của động từ trong gói từ có sẵn dạng Perfekt.',
            table: 'Nguyên mẫu | Partizip II\nessen | gegessen\ntrinken | getrunken\nnehmen | genommen\nsehen | gesehen',
            examples: [
              ['Wir haben im Zug gegessen.', 'Chúng tôi đã ăn trên tàu.'],
              ['Ich habe ein Taxi genommen.', 'Tôi đã đi taxi.'],
            ],
            exercises: [
              fill('Ich habe einen Kaffee {getrunken}.', 'Tôi đã uống một ly cà phê.'),
              choose('Hast du den Film ___?', ['gesehen', 'gesieht', 'sehen'], 'gesehen', { vi: 'Bạn đã xem phim đó chưa?' }),
            ],
          },
          {
            text_vi:
              'Động từ tận cùng **-ieren** và động từ có tiền tố không tách (be-, ver-) **không thêm ge-**: telefonieren → telefoniert, bezahlen → **bezahlt**, besuchen → **besucht**. Câu hỏi: **Hast** du schon **bezahlt**?',
            examples: [
              ['Ich habe die Fahrkarte am Automaten bezahlt.', 'Tôi đã trả tiền vé ở máy bán vé.'],
              ['Wir haben Oma besucht.', 'Chúng tôi đã đi thăm bà.'],
            ],
            exercises: [
              choose('Ich habe das Ticket ___.', ['bezahlt', 'gebezahlt', 'bezahlen'], 'bezahlt', { vi: 'Tôi đã trả tiền vé.' }),
              fill('Hast du deine Eltern {besucht}?', 'Bạn đã thăm bố mẹ chưa?'),
            ],
          },
        ],
        mixed: [
          transform('Chuyển sang Perfekt', 'Ich buche ein Hotel.', ['Ich habe ein Hotel gebucht.']),
          transform('Chuyển sang Perfekt', 'Wir kaufen eine Fahrkarte.', ['Wir haben eine Fahrkarte gekauft.']),
          translate('Tôi đã xếp va li.', ['Ich habe den Koffer gepackt.', 'Ich habe meinen Koffer gepackt.']),
          choose('Was ___ du gestern gemacht?', ['hast', 'bist', 'hat'], 'hast', { vi: 'Hôm qua bạn đã làm gì?' }),
          fill('Der Zug hat zehn Minuten {Verspätung}.', 'Tàu bị trễ mười phút.'),
        ],
      },
      dialogue: {
        title_de: 'Am Bahnhof',
        lines: [
          { speaker: 'A', de: 'Guten Tag, eine Fahrkarte nach Köln, bitte.', vi: 'Xin chào, cho tôi một vé đi Köln.' },
          { speaker: 'B', de: 'Einfach oder hin und zurück?', vi: 'Một chiều hay khứ hồi?' },
          { speaker: 'A', de: 'Hin und zurück, bitte. Wann fährt der nächste Zug?', vi: 'Khứ hồi. Chuyến tàu tiếp theo chạy lúc mấy giờ?' },
          { speaker: 'B', de: 'Um Viertel nach zehn von Gleis drei. Aber er hat heute zwanzig Minuten Verspätung.', vi: 'Mười giờ mười lăm, sân ga số ba. Nhưng hôm nay tàu trễ hai mươi phút.' },
          { speaker: 'A', de: 'Oh nein! Muss ich umsteigen?', vi: 'Ôi không! Tôi có phải đổi tàu không?' },
          { speaker: 'B', de: 'Nein, der Zug fährt direkt. Das macht sechzig Euro.', vi: 'Không, tàu đi thẳng. Tổng cộng sáu mươi euro.' },
          { speaker: 'A', de: 'Hier, bitte. Ich habe schon ein Hotel gebucht, aber noch keine Fahrkarte gekauft.', vi: 'Đây ạ. Tôi đặt khách sạn rồi, mà chưa mua vé.' },
          { speaker: 'B', de: 'Jetzt haben Sie alles. Gute Reise!', vi: 'Giờ thì anh có đủ rồi. Chúc thượng lộ bình an!' },
        ],
        gloss: { nächste: 'tiếp theo', muss: 'phải (ich muss)', alles: 'tất cả', 'Gute Reise': 'chúc thượng lộ bình an' },
        questions: [
          mc('A mua vé đi đâu?', ['Köln', 'Berlin', 'Hamburg'], 'Köln'),
          tf('A kauft eine einfache Fahrkarte.', false, { explain: 'Hin und zurück, bitte.' }),
          mc('Tàu trễ bao lâu?', ['20 phút', '10 phút', '15 phút'], '20 phút'),
          tf('A muss nicht umsteigen.', true),
        ],
        dictation: [0, 1],
      },
      writing_prompt_vi:
        'Viết 4–5 câu kể bạn đã chuẩn bị cho một chuyến đi: đã đặt gì, mua gì, xếp gì (Perfekt với haben).',
    },
    {
      title_vi: 'Chuyến đi của tôi',
      goal_vi: 'Kể một chuyến đi đã qua: đi đâu, đến lúc nào, ở bao lâu (Perfekt với sein).',
      items: [
        'Reise', 'Urlaub', 'Meer', 'Berg', 'Strand', 'Ausland', 'ankommen', 'abfahren', 'bleiben', 'reisen', 'landen',
        'Gute Reise', 'Perfekt với sein',
        'Abflug', 'abfliegen', 'Ausweis',
      ],
      grammar: {
        point: 'perfekt-sein',
        sections: [
          {
            text_vi:
              'Động từ chỉ **di chuyển từ chỗ này sang chỗ khác** hoặc **thay đổi trạng thái** dùng **sein** ở Perfekt: ich **bin** gefahren, **bin** geflogen, **bin** gegangen, **bin** gekommen. **bleiben** (ở lại) cũng dùng sein: Ich **bin** geblieben.',
            table: 'Nguyên mẫu | Perfekt\nfahren | ist gefahren\nfliegen | ist geflogen\nkommen | ist gekommen\nbleiben | ist geblieben',
            examples: [
              ['Wir sind nach Berlin gefahren.', 'Chúng tôi đã đi Berlin.'],
              ['Ich bin eine Woche in Hamburg geblieben.', 'Tôi đã ở lại Hamburg một tuần.'],
            ],
            exercises: [
              choose('Wir ___ nach Vietnam geflogen.', ['haben', 'sind', 'hat'], 'sind', { vi: 'Chúng tôi đã bay về Việt Nam.' }),
              fill('Ich {bin} mit dem Zug gefahren.', 'Tôi đã đi bằng tàu hỏa.'),
              choose('Er ist zwei Wochen in Spanien ___.', ['geblieben', 'gebleibt', 'bleiben'], 'geblieben', { vi: 'Anh ấy đã ở Tây Ban Nha hai tuần.' }),
            ],
          },
          {
            text_vi:
              'Động từ tách ở Perfekt: **ge-** chen giữa tiền tố và gốc: an**ge**kommen, ab**ge**fahren, ein**ge**stiegen, um**ge**stiegen. Các động từ này đều dùng **sein**: Der Zug **ist** pünktlich **angekommen**.',
            examples: [
              ['Der Zug ist um acht abgefahren.', 'Tàu đã khởi hành lúc tám giờ.'],
              ['Wir sind in Köln umgestiegen.', 'Chúng tôi đã đổi tàu ở Köln.'],
            ],
            exercises: [
              fill('Wann bist du {angekommen}?', 'Bạn đã đến lúc nào?'),
              choose('Wir sind in Frankfurt ___.', ['umgestiegen', 'geumsteigt', 'umgesteigt'], 'umgestiegen', { vi: 'Chúng tôi đã đổi tàu ở Frankfurt.' }),
            ],
          },
          {
            text_vi:
              'So sánh: **Ich habe** ein Ticket gekauft (mua: không di chuyển) – **Ich bin** nach Berlin gefahren (đi: có di chuyển). Mẹo: hỏi "có đi từ A đến B không?" Có thì dùng sein. **reisen** (du lịch) cũng dùng sein: Ich **bin** viel **gereist**.',
            examples: [['Ich habe ein Hotel gebucht und bin nach Paris geflogen.', 'Tôi đã đặt khách sạn và bay đến Paris.']],
            exercises: [
              choose('Ich ___ im Urlaub viel gereist.', ['habe', 'bin'], 'bin', { vi: 'Kỳ nghỉ tôi đã đi du lịch nhiều.' }),
              choose('Wir ___ am Strand Fotos gemacht.', ['haben', 'sind'], 'haben', { vi: 'Chúng tôi đã chụp ảnh ở bãi biển.' }),
            ],
          },
        ],
        mixed: [
          transform('Chuyển sang Perfekt', 'Ich fahre nach Hamburg.', ['Ich bin nach Hamburg gefahren.']),
          transform('Chuyển sang Perfekt', 'Das Flugzeug landet pünktlich.', ['Das Flugzeug ist pünktlich gelandet.']),
          translate('Chúng tôi đã đi biển.', ['Wir sind ans Meer gefahren.']),
          choose('Wann ___ ihr angekommen?', ['seid', 'habt', 'sind'], 'seid', { vi: 'Các bạn đã đến lúc nào?' }),
          order('Ich / bin / eine Woche / geblieben.', 'Tôi đã ở lại một tuần.'),
        ],
      },
      dialogue: {
        title_de: 'Mein Urlaub',
        lines: [
          { speaker: 'A', de: 'Hallo Minh! Wie war dein Urlaub?', vi: 'Chào Minh! Kỳ nghỉ của bạn thế nào?' },
          { speaker: 'B', de: 'Super! Ich bin nach Spanien geflogen.', vi: 'Tuyệt lắm! Mình đã bay sang Tây Ban Nha.' },
          { speaker: 'A', de: 'Toll! Bist du am Meer gewesen?', vi: 'Hay quá! Bạn có ra biển không?' },
          { speaker: 'B', de: 'Ja, ich bin eine Woche am Strand geblieben. Danach bin ich in die Berge gefahren.', vi: 'Có, mình ở bãi biển một tuần. Sau đó mình lên núi.' },
          { speaker: 'A', de: 'Und wie bist du nach Hause gekommen?', vi: 'Còn về nhà thế nào?' },
          { speaker: 'B', de: 'Mit dem Flugzeug. Aber es hat drei Stunden Verspätung gehabt!', vi: 'Bằng máy bay. Nhưng nó bị trễ ba tiếng!' },
          { speaker: 'A', de: 'Oh nein! Wann bist du angekommen?', vi: 'Ôi không! Bạn về đến lúc mấy giờ?' },
          { speaker: 'B', de: 'Erst um Mitternacht. Ich war sehr müde.', vi: 'Mãi nửa đêm mới đến. Mình mệt lắm.' },
        ],
        gloss: { war: 'đã là, đã (quá khứ của sein)', Spanien: 'Tây Ban Nha', Berge: 'núi (số nhiều)', gehabt: 'đã có (Partizip của haben)', erst: 'mãi đến', Mitternacht: 'nửa đêm' },
        questions: [
          mc('Minh đã đi đâu?', ['Tây Ban Nha', 'Việt Nam', 'Hamburg'], 'Tây Ban Nha'),
          tf('Minh ist zwei Wochen am Strand geblieben.', false, { explain: 'Ich bin eine Woche am Strand geblieben.' }),
          mc('Sau khi ở biển, Minh đi đâu?', ['lên núi', 'về nhà', 'đi Berlin'], 'lên núi'),
          tf('Das Flugzeug hatte Verspätung.', true),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Viết 5 câu kể chuyến đi gần nhất của bạn: đi đâu, bằng gì, ở bao lâu, làm gì. Chú ý chọn haben hay sein.',
    },
  ],
  test: {
    grammar: {
      'mit-dativ': [
        choose('Ich fahre mit ___ Zug.', ['dem', 'den'], 'dem'),
        choose('Wir fahren mit ___ Straßenbahn.', ['der', 'die', 'dem'], 'der'),
        fill('Er fährt mit {dem} Taxi.', 'Anh ấy đi taxi.'),
        choose('Ich fliege ___ Berlin.', ['nach', 'zu'], 'nach'),
        fill('Sie {fährt} mit dem Bus.', 'Cô ấy đi xe buýt.'),
        order('Ich / fahre / mit / dem Fahrrad.', 'Tôi đi xe đạp.'),
      ],
      'perfekt-haben': [
        fill('Ich habe ein Ticket {gekauft}.', 'Tôi đã mua một cái vé.'),
        choose('Wir ___ ein Hotel gebucht.', ['haben', 'sind'], 'haben'),
        fill('Hast du schon {bezahlt}?', 'Bạn đã trả tiền chưa?'),
        order('Er / hat / den Koffer / gepackt.', 'Anh ấy đã xếp va li.'),
        choose('Ich habe einen Kaffee ___.', ['getrunken', 'getrinkt'], 'getrunken'),
        choose('Was hast du gestern ___?', ['gemacht', 'machen', 'gemachen'], 'gemacht'),
      ],
      'perfekt-sein': [
        choose('Ich ___ nach Hamburg gefahren.', ['bin', 'habe'], 'bin'),
        fill('Wir sind nach Vietnam {geflogen}.', 'Chúng tôi đã bay về Việt Nam.'),
        choose('Der Zug ___ pünktlich angekommen.', ['ist', 'hat'], 'ist'),
        order('Wir / sind / zu Hause / geblieben.', 'Chúng tôi đã ở nhà.'),
        fill('Wann {bist} du angekommen?', 'Bạn đã đến lúc nào?'),
        choose('Wir sind in Köln ___.', ['umgestiegen', 'umgesteigt'], 'umgestiegen'),
      ],
    },
    reading: {
      title_de: 'Eine Reise nach München',
      text_de:
        'Letzte Woche bin ich mit meiner Freundin nach München gefahren. Wir haben die Fahrkarten online gebucht. Am Freitag sind wir um acht Uhr abgefahren. Der Zug war sehr voll und hatte dreißig Minuten Verspätung. In Nürnberg sind wir umgestiegen. Um zwölf Uhr sind wir in München angekommen. Wir haben ein kleines Hotel im Zentrum gebucht. Am Nachmittag sind wir zu Fuß durch die Stadt gegangen und haben viele Fotos gemacht. Am Abend haben wir in einem Restaurant gegessen. Wir sind drei Tage geblieben. Am Sonntag sind wir mit dem Bus zurückgefahren, das war billig.',
      gloss: {
        'letzte Woche': 'tuần trước',
        online: 'qua mạng',
        war: 'đã (quá khứ của sein)',
        hatte: 'đã có (quá khứ của haben)',
        kleines: 'nhỏ',
        durch: 'xuyên qua',
        zurückgefahren: 'đã quay về',
      },
      questions: [
        mc('Họ đi đến München bằng gì?', ['tàu hỏa', 'xe buýt', 'máy bay'], 'tàu hỏa'),
        tf('Der Zug war pünktlich.', false, { explain: 'Der Zug hatte dreißig Minuten Verspätung.' }),
        mc('Họ đổi tàu ở đâu?', ['Nürnberg', 'München', 'Köln'], 'Nürnberg'),
        tf('Sie sind drei Tage in München geblieben.', true),
        tf('Sie sind mit dem Zug zurückgefahren.', false, { explain: 'Sie sind mit dem Bus zurückgefahren.' }),
      ],
    },
  },
});
