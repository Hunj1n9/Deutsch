// B1 · 07 Du lịch và văn hóa — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b1-07',
  points: [
    {
      key: 'plusquam',
      rule_key: 'plusquamperfekt-erzaehlen',
      category: 'tense',
      title_vi: 'Plusquamperfekt khi kể chuyện',
      explanation_vi: 'Trong câu chuyện ở Präteritum, việc xảy ra trước đó dùng hatte/war + Partizip II. Hay đi với schon, vorher, noch nie: Ich war noch nie in Asien gewesen.',
    },
    {
      key: 'bevor-waehrend',
      rule_key: 'bevor-waehrend-nebensatz',
      category: 'verb_position',
      title_vi: 'bevor / während (liên từ thời gian)',
      explanation_vi: 'bevor = trước khi, während = trong khi; cả hai mở câu phụ, động từ cuối. Đừng nhầm với giới từ vor + Dativ (vor der Reise).',
    },
    {
      key: 'genitiv-praep',
      rule_key: 'praeposition-genitiv',
      category: 'preposition',
      title_vi: 'Giới từ + Genitiv: während, wegen, trotz',
      explanation_vi: 'wegen des Regens, trotz der Sprachbarriere, während der Reise. Giống đực/trung: des + danh từ -s/-es; giống cái, số nhiều: der.',
    },
  ],
  lessons: [
    {
      title_vi: 'Kể về chuyến đi',
      goal_vi: 'Kể lại một chuyến du lịch; dùng Plusquamperfekt cho việc xảy ra trước.',
      items: [
        'Rundreise', 'Pauschalreise', 'Reiseziel', 'Halbpension', 'Reiseveranstalter', 'Reiseleiter', 'Ausstellung', 'Denkmal',
        'Tempel', 'Pagode', 'Abenteuer', 'Eindruck', 'Fernweh', 'Heimweh', 'Begegnung', 'Umgebung', 'erkunden', 'entdecken',
        'genießen', 'verreisen', 'ausprobieren', 'sich verirren', 'beeindruckend', 'malerisch', 'einzigartig', 'spontan',
        'vorher', 'nachher', 'sich auf den Weg machen', 'Plusquamperfekt trong câu kể',
      ],
      grammar: {
        point: 'plusquam',
        sections: [
          {
            text_vi:
              'Trong câu chuyện ở **Präteritum**, việc xảy ra **trước đó** dùng **Plusquamperfekt** (hatte/war + Partizip II): Als wir am Hotel ankamen, **hatte** der Reiseleiter schon alles **organisiert**. Thứ tự thời gian: Plusquamperfekt (trước) → Präteritum (sau).',
            table: 'Trước (Plusquamperfekt) | Sau (Präteritum)\nIch hatte den Pass vergessen. | Deshalb musste ich zurückfahren.\nWir waren früh aufgestanden. | Wir sahen den Sonnenaufgang.\nSie hatte nie Pho gegessen. | In Hanoi probierte sie es.',
            examples: [
              ['Als wir am Bahnhof ankamen, war der Zug schon abgefahren.', 'Khi chúng tôi đến ga, tàu đã chạy rồi.'],
              ['Ich hatte das Hotel vorher im Internet gebucht.', 'Tôi đã đặt khách sạn trên mạng từ trước.'],
            ],
            exercises: [
              choose('Als wir ankamen, ___ der Bus schon abgefahren.', ['war', 'hatte'], 'war', { vi: 'Khi chúng tôi đến, xe buýt đã chạy rồi.' }),
              fill('Ich {hatte} die Tickets vorher gekauft.', 'Tôi đã mua vé từ trước.'),
              choose('Sie war müde, weil sie die ganze Nacht ___ hatte.', ['getanzt', 'tanzte', 'tanzen'], 'getanzt', { vi: 'Cô ấy mệt vì đã nhảy cả đêm.' }),
            ],
          },
          {
            text_vi:
              'Plusquamperfekt hay đi với **schon**, **vorher** (trước đó), **noch nie**: Ich **war** noch nie in Asien **gewesen**. Khi kể chuyện bằng lời nói, người Đức hay dùng Perfekt; nhưng khi cần làm rõ việc nào xảy ra **trước**, hãy dùng Plusquamperfekt.',
            examples: [['Vor dieser Reise hatte ich noch nie das Meer gesehen.', 'Trước chuyến đi này tôi chưa bao giờ thấy biển.']],
            exercises: [
              transform('Viết lại với Plusquamperfekt', 'Ich habe noch nie Pho gegessen.', ['Ich hatte noch nie Pho gegessen.']),
              fill('Wir {waren} noch nie in Vietnam gewesen.', 'Chúng tôi chưa bao giờ đến Việt Nam.'),
              order('Er / hatte / sich / in der Altstadt / verirrt.', 'Anh ấy đã bị lạc trong phố cổ.'),
            ],
          },
          {
            text_vi:
              '**Pauschalreise** = tour trọn gói (của **Reiseveranstalter**), **Halbpension** = gồm bữa sáng và tối. **Rundreise** = chuyến đi vòng quanh. **Fernweh** (khao khát đi xa) ≠ **Heimweh** (nhớ nhà). **erkunden**, **entdecken** = khám phá; **genießen** = tận hưởng.',
            examples: [['Wir haben die Umgebung mit dem Fahrrad erkundet.', 'Chúng tôi khám phá vùng xung quanh bằng xe đạp.']],
            exercises: [
              fill('Im Urlaub {genieße} ich die Ruhe. (genießen)', 'Khi đi nghỉ tôi tận hưởng sự yên tĩnh.'),
              translate('Tôi rất nhớ nhà.', ['Ich habe großes Heimweh.', 'Ich habe starkes Heimweh.', 'Ich habe sehr Heimweh.']),
            ],
          },
        ],
        mixed: [
          transform('Viết lại với Plusquamperfekt', 'Wir sind früh aufgestanden.', ['Wir waren früh aufgestanden.']),
          choose('Ich konnte nicht einchecken, weil ich meinen Pass vergessen ___.', ['hatte', 'war', 'habe'], 'hatte', { vi: 'Tôi không làm thủ tục được vì đã quên hộ chiếu.' }),
          fill('Als ich ins Hotel kam, {war} meine Freundin schon angekommen.', 'Khi tôi đến khách sạn, bạn gái tôi đã đến rồi.'),
          choose('Vorher ___ ich noch nie eine Pagode gesehen.', ['hatte', 'war'], 'hatte', { vi: 'Trước đó tôi chưa từng thấy một ngôi chùa tháp.' }),
          order('Nachdem / wir / uns / verirrt / hatten, / fragten / wir / einen Polizisten.', 'Sau khi bị lạc, chúng tôi hỏi một anh cảnh sát.'),
        ],
      },
      dialogue: {
        title_de: 'Erinnerungen an Vietnam',
        lines: [
          { speaker: 'A', de: 'Erzähl mal, wie war deine Rundreise durch Vietnam?', vi: 'Kể đi, chuyến đi vòng quanh Việt Nam của bạn thế nào?' },
          { speaker: 'B', de: 'Einzigartig! Ich war vorher noch nie in Asien gewesen.', vi: 'Có một không hai! Trước đó mình chưa bao giờ đến châu Á.' },
          { speaker: 'A', de: 'Was hat dir am besten gefallen?', vi: 'Bạn thích nhất điều gì?' },
          { speaker: 'B', de: 'Die Halong-Bucht war malerisch. Und in Hue haben wir viele alte Tempel und Pagoden besucht.', vi: 'Vịnh Hạ Long đẹp như tranh. Còn ở Huế bọn mình thăm nhiều đền và chùa cổ.' },
          { speaker: 'A', de: 'Hattest du die Reise lange geplant?', vi: 'Bạn đã lên kế hoạch chuyến đi lâu chưa?' },
          { speaker: 'B', de: 'Nein, ganz spontan. Ich hatte im Internet eine günstige Pauschalreise gefunden.', vi: 'Không, hoàn toàn ngẫu hứng. Mình đã tìm được một tour trọn gói giá rẻ trên mạng.' },
          { speaker: 'A', de: 'Gab es auch Probleme?', vi: 'Có gặp vấn đề gì không?' },
          { speaker: 'B', de: 'Einmal habe ich mich in Hanoi verirrt, weil ich mein Handy im Hotel vergessen hatte.', vi: 'Có lần mình bị lạc ở Hà Nội vì đã để quên điện thoại ở khách sạn.' },
          { speaker: 'A', de: 'Das war ja ein Abenteuer! Hast du jetzt Fernweh?', vi: 'Đúng là một cuộc phiêu lưu! Giờ bạn có muốn đi xa nữa không?' },
          { speaker: 'B', de: 'Ja, ich will unbedingt wieder hin!', vi: 'Có, mình nhất định phải quay lại đó!' },
        ],
        gloss: { 'Halong-Bucht': 'vịnh Hạ Long', unbedingt: 'nhất định', hin: 'đến đó', einmal: 'một lần', gab: 'đã có (es gab)' },
        questions: [
          tf('B war schon oft in Asien.', false, { explain: 'Ich war vorher noch nie in Asien gewesen.' }),
          mc('Ở Huế B đã thăm gì?', ['đền và chùa cổ', 'bãi biển', 'chợ nổi'], 'đền và chùa cổ'),
          mc('B tìm tour ở đâu?', ['trên mạng', 'ở công ty du lịch', 'qua bạn bè'], 'trên mạng'),
          tf('B hat sich in Hanoi verirrt, weil das Handy im Hotel war.', true),
        ],
        dictation: [1, 7],
      },
      writing_prompt_vi:
        'Kể về chuyến đi đáng nhớ nhất của bạn (6 câu) bằng Präteritum, dùng ít nhất hai câu Plusquamperfekt cho những việc xảy ra trước.',
    },
    {
      title_vi: 'Chuẩn bị lên đường',
      goal_vi: 'Chuẩn bị giấy tờ, tiền, hành lý; nói trình tự bằng bevor và während.',
      items: [
        'Vorbereitung', 'Gepäckstück', 'Reisepass', 'Zoll', 'Währung', 'Wechselkurs', 'Reiseversicherung', 'Hochsaison',
        'Nebensaison', 'Klimaanlage', 'Nachtzug', 'wechseln', 'verzollen', 'stornieren', 'ablaufen', 'einchecken', 'auschecken',
        'gültig', 'überfüllt', 'touristisch', 'ruhig gelegen', 'vor Ort', 'bevor', 'während', 'bevor: trước khi',
        'während (liên từ): trong khi',
      ],
      grammar: {
        point: 'bevor-waehrend',
        sections: [
          {
            text_vi:
              '**bevor** (trước khi) và **während** (trong khi) mở câu phụ, động từ **cuối**: **Bevor** wir abreisen, **checken** wir aus. **Während** ich packe, **ruft** meine Mutter an. Câu phụ đứng trước → câu chính bắt đầu bằng động từ. Đừng nhầm bevor với **vor** (giới từ + Dativ): vor der Reise.',
            examples: [
              ['Bevor du fährst, musst du den Pass prüfen.', 'Trước khi đi, bạn phải kiểm tra hộ chiếu.'],
              ['Während ich im Zug saß, habe ich gelesen.', 'Trong khi ngồi trên tàu, tôi đọc sách.'],
            ],
            exercises: [
              fill('{Bevor} wir abfahren, wechseln wir Geld.', 'Trước khi lên đường, chúng tôi đổi tiền.'),
              choose('___ der Reise habe ich Euro gewechselt.', ['Vor', 'Bevor'], 'Vor', { vi: 'Trước chuyến đi tôi đã đổi euro.' }),
              order('Während / ich / packe, / kocht / mein Mann.', 'Trong khi tôi xếp đồ, chồng tôi nấu ăn.'),
            ],
          },
          {
            text_vi:
              '**während** = trong khi, hai việc **song song**: Während mein Mann fährt, schlafe ich. **bevor** = việc ở câu chính xảy ra **trước**: Ich wechsle Geld, **bevor** ich fliege. Ngược lại là **nachdem** (sau khi). **vorher**, **nachher** là trạng từ: **Vorher** wechsle ich Geld.',
            examples: [['Ich checke aus, bevor ich zum Flughafen fahre.', 'Tôi trả phòng trước khi ra sân bay.']],
            exercises: [
              choose('___ wir am Strand lagen, regnete es in Berlin.', ['Während', 'Bevor'], 'Während', { vi: 'Trong khi chúng tôi nằm trên bãi biển, Berlin trời mưa.' }),
              transform('Nối bằng bevor', 'Ich checke aus. Danach fahre ich zum Flughafen.', [
                'Bevor ich zum Flughafen fahre, checke ich aus.',
                'Ich checke aus, bevor ich zum Flughafen fahre.',
              ]),
              fill('Ich packe jetzt, {nachher} habe ich keine Zeit.', 'Tôi xếp đồ bây giờ, lát nữa tôi không có thời gian.'),
            ],
          },
          {
            text_vi:
              'Chuẩn bị: kiểm tra **Reisepass** còn **gültig** hay đã **abgelaufen**; mua **Reiseversicherung**; **Geld wechseln** theo **Wechselkurs**. Đi **Nebensaison** rẻ hơn **Hochsaison** (đông, **überfüllt**). Có thể **stornieren** (hủy) đặt chỗ.',
            examples: [['In der Hochsaison sind die Strände überfüllt.', 'Mùa cao điểm các bãi biển quá đông.']],
            exercises: [
              fill('Mein Reisepass ist leider {abgelaufen}.', 'Tiếc là hộ chiếu của tôi đã hết hạn.'),
              translate('Tôi muốn hủy đặt phòng.', ['Ich möchte die Buchung stornieren.', 'Ich möchte meine Buchung stornieren.', 'Ich will die Buchung stornieren.']),
            ],
          },
        ],
        mixed: [
          transform('Nối bằng während', 'Ich warte am Flughafen. Ich trinke einen Kaffee.', [
            'Während ich am Flughafen warte, trinke ich einen Kaffee.',
            'Ich trinke einen Kaffee, während ich am Flughafen warte.',
          ]),
          choose('___ ich verreise, gieße ich die Blumen.', ['Bevor', 'Vor'], 'Bevor', { vi: 'Trước khi đi xa, tôi tưới hoa.' }),
          fill('Bevor wir einchecken, {essen} wir etwas.', 'Trước khi làm thủ tục, chúng tôi ăn chút gì.'),
          choose('Während ich ___, hörte ich Musik.', ['kochte', 'koche ich', 'ich kochte'], 'kochte', { vi: 'Trong khi nấu ăn, tôi nghe nhạc.' }),
          order('Bevor / Sie / einreisen, / müssen / Sie / das / verzollen.', 'Trước khi nhập cảnh, ông/bà phải khai hải quan món này.'),
        ],
      },
      dialogue: {
        title_de: 'Vor der Abreise',
        lines: [
          { speaker: 'A', de: 'Hast du alles? Bevor wir losfahren, will ich alles noch einmal prüfen.', vi: 'Có đủ hết chưa? Trước khi đi, mình muốn kiểm tra lại mọi thứ.' },
          { speaker: 'B', de: 'Reisepässe, Tickets, Reiseversicherung … Alles da. Mein Pass ist noch zwei Jahre gültig.', vi: 'Hộ chiếu, vé, bảo hiểm du lịch… Đủ cả. Hộ chiếu của mình còn hạn hai năm.' },
          { speaker: 'A', de: 'Gut. Hast du schon Geld gewechselt?', vi: 'Tốt. Bạn đã đổi tiền chưa?' },
          { speaker: 'B', de: 'Nein, das mache ich vor Ort. Dort ist der Wechselkurs besser.', vi: 'Chưa, mình đổi tại chỗ. Ở đó tỷ giá tốt hơn.' },
          { speaker: 'A', de: 'Und das Hotel? Ist es ruhig gelegen?', vi: 'Còn khách sạn? Có ở chỗ yên tĩnh không?' },
          { speaker: 'B', de: 'Ja, und es hat eine Klimaanlage. Wir reisen in der Nebensaison, deshalb ist es nicht überfüllt.', vi: 'Có, và có máy lạnh. Bọn mình đi mùa thấp điểm nên không đông.' },
          { speaker: 'A', de: 'Super. Während du das Gepäck ins Auto bringst, schließe ich die Fenster.', vi: 'Tuyệt. Trong khi bạn mang hành lý ra xe, mình đóng cửa sổ.' },
          { speaker: 'B', de: 'Okay! Und bevor wir einchecken, essen wir am Flughafen etwas.', vi: 'Được! Và trước khi làm thủ tục, bọn mình ăn chút gì ở sân bay.' },
        ],
        gloss: { losfahren: 'lên đường', prüfen: 'kiểm tra', Tickets: 'vé', schließe: 'đóng (schließen)', Gepäck: 'hành lý' },
        questions: [
          tf('Der Pass von B ist abgelaufen.', false, { explain: 'Mein Pass ist noch zwei Jahre gültig.' }),
          mc('B đổi tiền ở đâu?', ['tại nơi đến', 'ở ngân hàng tại nhà', 'ở sân bay'], 'tại nơi đến'),
          mc('Vì sao khách sạn không đông?', ['họ đi mùa thấp điểm', 'khách sạn đắt', 'khách sạn mới mở'], 'họ đi mùa thấp điểm'),
          tf('Vor dem Einchecken wollen sie am Flughafen essen.', true),
        ],
        dictation: [1, 6],
      },
      writing_prompt_vi:
        'Viết danh sách việc cần làm trước một chuyến đi (5–6 câu), dùng ít nhất hai câu bevor và một câu während.',
    },
    {
      title_vi: 'Văn hóa và sốc văn hóa',
      goal_vi: 'Nói về khác biệt văn hóa và thích nghi; dùng giới từ Genitiv während, wegen, trotz.',
      items: [
        'Kultur', 'Sitte', 'Sprachbarriere', 'Kulturschock', 'Gastfreundschaft', 'Fremdsprache', 'Austausch', 'sich anpassen',
        'sich verständigen', 'beobachten', 'sich zurechtfinden', 'vermeiden', 'exotisch', 'unbekannt', 'gastfreundlich',
        'kulturell', 'ungewohnt', 'landestypisch', 'Andere Länder, andere Sitten', 'ins Gespräch kommen',
        'Land und Leute kennenlernen', 'Giới từ + Genitiv: während, wegen, trotz',
      ],
      grammar: {
        point: 'genitiv-praep',
        sections: [
          {
            text_vi:
              'Giới từ đi với **Genitiv**: **während** (trong lúc), **wegen** (vì), **trotz** (mặc dù). Mạo từ Genitiv: **des** cho der/das (danh từ thêm **-s/-es**), **der** cho die và số nhiều: **wegen des** Regens, **trotz der** Sprachbarriere, **während der** Reise.',
            table: 'Danh từ | Genitiv\nder Regen | wegen des Regens\ndas Wetter | trotz des Wetters\ndie Reise | während der Reise\ndie Ferien (số nhiều) | während der Ferien',
            examples: [
              ['Wegen des Regens blieben wir im Hotel.', 'Vì trời mưa, chúng tôi ở lại khách sạn.'],
              ['Trotz der Sprachbarriere haben wir uns gut verstanden.', 'Dù có rào cản ngôn ngữ, chúng tôi vẫn hiểu nhau.'],
            ],
            exercises: [
              choose('___ des Regens blieben wir zu Hause.', ['Wegen', 'Trotz'], 'Wegen', { vi: 'Vì trời mưa, chúng tôi ở nhà.' }),
              fill('Trotz {des} schlechten Wetters sind wir gewandert.', 'Dù thời tiết xấu, chúng tôi vẫn đi bộ đường dài.'),
              choose('Während ___ Reise habe ich viel gelernt.', ['der', 'die', 'des'], 'der', { vi: 'Trong chuyến đi tôi đã học được nhiều.' }),
            ],
          },
          {
            text_vi:
              'Phân biệt: **während** + Genitiv (giới từ: während **der** Reise) – **während** + câu (liên từ: während ich **reise**). Tương tự: **trotz** – **obwohl** – **trotzdem**; **wegen** – **weil** – **deshalb**. Khi nói, người Đức hay dùng Dativ sau wegen (wegen dem Regen); khi viết dùng Genitiv.',
            table: 'Ý nghĩa | Giới từ + Genitiv | Liên từ (động từ cuối)\nnguyên nhân | wegen des Staus | weil es Stau gibt\nnhượng bộ | trotz des Regens | obwohl es regnet\nthời gian | während der Reise | während ich reise',
            examples: [['Wegen des Streiks fiel unser Flug aus.', 'Vì đình công, chuyến bay của chúng tôi bị hủy.']],
            exercises: [
              transform('Viết lại với trotz', 'Obwohl es regnete, besichtigten wir die Stadt.', ['Trotz des Regens besichtigten wir die Stadt.']),
              transform('Viết lại với wegen', 'Weil das Wetter schlecht war, blieben wir im Hotel.', ['Wegen des schlechten Wetters blieben wir im Hotel.']),
              choose('Ich war glücklich, ___ ich in Japan war.', ['während', 'wegen'], 'während', { vi: 'Tôi đã hạnh phúc khi ở Nhật.' }),
            ],
          },
          {
            text_vi:
              '**Andere Länder, andere Sitten** = nhập gia tùy tục. **Kulturschock** khi mọi thứ **ungewohnt** (chưa quen). **sich anpassen** = thích nghi; **sich verständigen** = giao tiếp được, dù có **Sprachbarriere**. **ins Gespräch kommen** = bắt chuyện; **Land und Leute kennenlernen** = tìm hiểu đất nước, con người.',
            examples: [['Im Zug bin ich mit einer alten Dame ins Gespräch gekommen.', 'Trên tàu tôi bắt chuyện với một bà cụ.']],
            exercises: [
              fill('Trotz der Sprachbarriere konnten wir uns gut {verständigen}.', 'Dù có rào cản ngôn ngữ, chúng tôi vẫn giao tiếp tốt.'),
              translate('Nhập gia tùy tục.', ['Andere Länder, andere Sitten.']),
            ],
          },
        ],
        mixed: [
          choose('___ der Ferien arbeite ich in einem Hotel.', ['Während', 'Wegen'], 'Während', { vi: 'Trong kỳ nghỉ tôi làm ở một khách sạn.' }),
          fill('Wegen {der} Hitze sind wir im Hotel geblieben.', 'Vì nóng, chúng tôi ở lại khách sạn.'),
          choose('Trotz des ___ war die Reise schön.', ['Regens', 'Regen'], 'Regens', { vi: 'Dù mưa, chuyến đi vẫn đẹp.' }),
          transform('Viết lại với während (giới từ)', 'Während wir gegessen haben, haben wir viel gelacht.', ['Während des Essens haben wir viel gelacht.']),
          order('Wegen / des Kulturschocks / hatte / sie / am Anfang / Heimweh.', 'Vì sốc văn hóa, lúc đầu cô ấy nhớ nhà.'),
        ],
      },
      dialogue: {
        title_de: 'Kulturschock',
        lines: [
          { speaker: 'A', de: 'Wie war dein erstes Jahr in Deutschland?', vi: 'Năm đầu ở Đức của bạn thế nào?' },
          { speaker: 'B', de: 'Am Anfang hatte ich einen Kulturschock. Vieles war ungewohnt, zum Beispiel die Pünktlichkeit.', vi: 'Lúc đầu mình bị sốc văn hóa. Nhiều thứ chưa quen, ví dụ như sự đúng giờ.' },
          { speaker: 'A', de: 'Und die Sprache?', vi: 'Còn ngôn ngữ?' },
          { speaker: 'B', de: 'Trotz der Sprachbarriere konnte ich mich meistens verständigen.', vi: 'Dù có rào cản ngôn ngữ, phần lớn thời gian mình vẫn giao tiếp được.' },
          { speaker: 'A', de: 'Was war am schwierigsten?', vi: 'Điều gì khó nhất?' },
          { speaker: 'B', de: 'Während der ersten Wochen hatte ich starkes Heimweh. Wegen des Wetters war ich oft traurig.', vi: 'Trong những tuần đầu mình rất nhớ nhà. Vì thời tiết mà mình hay buồn.' },
          { speaker: 'A', de: 'Und jetzt?', vi: 'Còn bây giờ?' },
          { speaker: 'B', de: 'Jetzt habe ich mich angepasst. Andere Länder, andere Sitten! Ich komme leicht mit Leuten ins Gespräch.', vi: 'Giờ mình đã thích nghi. Nhập gia tùy tục mà! Mình dễ dàng bắt chuyện với mọi người.' },
          { speaker: 'A', de: 'Was vermisst du am meisten?', vi: 'Bạn nhớ nhất điều gì?' },
          { speaker: 'B', de: 'Die Gastfreundschaft in Vietnam und natürlich das Essen!', vi: 'Lòng hiếu khách ở Việt Nam và tất nhiên là đồ ăn!' },
        ],
        gloss: { Pünktlichkeit: 'sự đúng giờ', meistens: 'phần lớn, thường', schwierigsten: 'khó nhất', Wetters: 'thời tiết (Genitiv)', vermisst: 'nhớ (vermissen)' },
        questions: [
          mc('Lúc đầu điều gì làm B chưa quen?', ['sự đúng giờ', 'đồ ăn', 'giao thông'], 'sự đúng giờ'),
          tf('B konnte sich wegen der Sprachbarriere nie verständigen.', false, { explain: 'Trotz der Sprachbarriere konnte ich mich meistens verständigen.' }),
          tf('Wegen des Wetters war B oft traurig.', true),
          mc('B nhớ gì nhất?', ['lòng hiếu khách và đồ ăn', 'thời tiết', 'trường học'], 'lòng hiếu khách và đồ ăn'),
        ],
        dictation: [3, 5],
      },
      writing_prompt_vi:
        'Viết về một khác biệt văn hóa giữa Việt Nam và Đức (5–6 câu), dùng ít nhất ba giới từ Genitiv (während, wegen, trotz).',
    },
  ],
  test: {
    grammar: {
      plusquam: [
        choose('Als ich kam, ___ er schon gegangen.', ['war', 'hatte'], 'war'),
        fill('Ich {hatte} das Hotel vorher gebucht.', 'Tôi đã đặt khách sạn từ trước.'),
        choose('Wir ___ noch nie in Asien gewesen.', ['waren', 'hatten'], 'waren'),
        order('Sie / hatte / den Pass / zu Hause / vergessen.', 'Cô ấy đã để quên hộ chiếu ở nhà.'),
        fill('Als wir ankamen, war der Zug schon {abgefahren}. (abfahren)', 'Khi chúng tôi đến, tàu đã chạy.'),
        choose('Er war müde, weil er schlecht ___ hatte.', ['geschlafen', 'schlief'], 'geschlafen'),
      ],
      'bevor-waehrend': [
        fill('{Bevor} wir fahren, packen wir.', 'Trước khi đi, chúng tôi xếp đồ.'),
        choose('___ dem Essen wasche ich mir die Hände.', ['Vor', 'Bevor'], 'Vor'),
        choose('___ ich koche, höre ich Radio.', ['Während', 'Bevor'], 'Während'),
        order('Bevor / ich / schlafe, / lese / ich.', 'Trước khi ngủ, tôi đọc sách.'),
        choose('Während er ___, telefoniert sie.', ['fährt', 'er fährt'], 'fährt'),
        fill('Ich wechsle Geld, bevor ich {fliege}. (fliegen)', 'Tôi đổi tiền trước khi bay.'),
      ],
      'genitiv-praep': [
        choose('___ des Regens bleiben wir zu Hause.', ['Wegen', 'Trotz'], 'Wegen'),
        fill('Trotz {der} Kälte gehen wir spazieren.', 'Dù lạnh, chúng tôi vẫn đi dạo.'),
        choose('Während ___ Urlaubs war ich krank.', ['des', 'der'], 'des'),
        choose('Wegen der ___ fiel der Zug aus.', ['Streiks', 'Streik'], 'Streiks'),
        order('Trotz / des / Staus / kamen / wir / pünktlich / an.', 'Dù kẹt xe, chúng tôi vẫn đến đúng giờ.'),
        fill('Während {der} Ferien besuche ich meine Oma.', 'Trong kỳ nghỉ tôi thăm bà.'),
      ],
    },
    reading: {
      title_de: 'Ein Austauschjahr in Vietnam',
      text_de:
        'Jonas ist 17 und hat ein Austauschjahr in Da Nang gemacht. Vor der Reise hatte er ein bisschen Vietnamesisch gelernt, aber vor Ort verstand er fast nichts. Trotz der Sprachbarriere fand er sich schnell zurecht, denn seine Gastfamilie war sehr gastfreundlich. Während der ersten Wochen war vieles ungewohnt: das scharfe Essen, der Verkehr, die Hitze. Wegen des Wetters musste er oft duschen! Bevor er zur Schule ging, aß er jeden Morgen eine Nudelsuppe mit seiner Gastmutter. Am Wochenende erkundete er die Umgebung. Heute sagt Jonas: „Ich habe nicht nur eine Sprache gelernt, sondern auch Land und Leute kennengelernt.“',
      gloss: {
        Austauschjahr: 'năm trao đổi học sinh',
        Gastfamilie: 'gia đình bản xứ',
        scharfe: 'cay',
        Verkehr: 'giao thông',
        duschen: 'tắm vòi sen',
        Nudelsuppe: 'món súp mì',
        Gastmutter: 'mẹ bản xứ',
        denn: 'vì',
      },
      questions: [
        mc('Jonas đã ở thành phố nào?', ['Đà Nẵng', 'Hà Nội', 'Huế'], 'Đà Nẵng'),
        tf('Vor Ort verstand Jonas alles.', false, { explain: 'Vor Ort verstand er fast nichts.' }),
        mc('Mỗi sáng trước khi đi học, Jonas ăn gì?', ['súp mì', 'bánh mì', 'cơm'], 'súp mì'),
        tf('Die Gastfamilie war sehr gastfreundlich.', true),
      ],
    },
  },
});
