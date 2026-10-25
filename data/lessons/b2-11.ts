// B2 · 11 Văn học và nghệ thuật — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b2-11',
  points: [
    {
      key: 'praeteritum-erzaehlen',
      rule_key: 'praeteritum-erzaehltext',
      category: 'tense',
      title_vi: 'Präteritum trong văn kể',
      explanation_vi: 'Truyện, tiểu thuyết, tiểu sử viết bằng Präteritum (ging, kam, sah, dachte); văn nói dùng Perfekt. Động từ mạnh đổi nguyên âm, ngôi ich/er không có đuôi (ich ging, er ging); động từ yếu thêm -te (sagte).',
    },
    {
      key: 'inversion-betonung',
      rule_key: 'inversion-betonung-vorfeld',
      category: 'verb_position',
      title_vi: 'Đảo ngữ nhấn mạnh và nói về nội dung (handeln von, es geht um)',
      explanation_vi: 'Muốn nhấn mạnh, đưa tân ngữ hoặc trạng ngữ lên vị trí 1; động từ vẫn ở vị trí 2, chủ ngữ đứng sau: Diesen Roman habe ich dreimal gelesen. Nói nội dung: Der Roman handelt von + Dat = In dem Roman geht es um + Akk.',
    },
    {
      key: 'modalpartikel',
      rule_key: 'modalpartikel-doch-ja-eben',
      category: 'word_choice',
      title_vi: 'Hạt từ tình thái: doch, ja, eben, mal',
      explanation_vi: 'doch: nhắc điều người nghe nên biết, thúc giục (Komm doch mit!). ja: điều cả hai đều biết hoặc ngạc nhiên (Das ist ja toll!). eben: chấp nhận thực tế (Das ist eben so). mal: làm lời yêu cầu nhẹ (Schau mal!). Hạt từ không nhấn trọng âm, đứng sau động từ.',
    },
  ],
  lessons: [
    {
      title_vi: 'Truyện kể và thơ ca',
      goal_vi: 'Nói về thể loại, nhân vật và cốt truyện; kể và tóm tắt truyện bằng Präteritum.',
      items: [
        'Literatur', 'Werk', 'Erzählung', 'Kurzgeschichte', 'Novelle', 'Hauptfigur', 'Erzähler', 'Perspektive', 'Motiv',
        'Epoche', 'Gattung', 'Metapher', 'verfassen', 'schildern', 'literarisch', 'zeitlos', 'autobiografisch', 'fiktiv',
        'Präteritum trong văn kể', 'Lyrik', 'Strophe', 'Reim', 'Spannungsbogen', 'Höhepunkt', 'Wendung', 'Schauplatz',
        'Klassiker', 'vortragen', 'Erzählperspektive', 'Sprachbild',
      ],
      grammar: {
        point: 'praeteritum-erzaehlen',
        sections: [
          {
            text_vi:
              'Văn kể (truyện, tiểu thuyết, tin tức, tiểu sử) dùng **Präteritum**; khi nói chuyện thì dùng **Perfekt**. Động từ **yếu**: gốc + **-te**: sagte, wohnte, arbeitete. Động từ **mạnh** đổi nguyên âm, ngôi **ich** và **er/sie/es không có đuôi**: ging, kam, sah, fand, schrieb. Động từ **hỗn hợp**: dachte, brachte, wusste, kannte.',
            table: 'Nguyên mẫu | Präteritum (er) | Perfekt\ngehen | ging | ist gegangen\nschreiben | schrieb | hat geschrieben\nfinden | fand | hat gefunden\ndenken | dachte | hat gedacht\nwerden | wurde | ist geworden',
            examples: [
              ['Eines Morgens erwachte Gregor und fand sich in einen Käfer verwandelt.', 'Một buổi sáng Gregor tỉnh dậy và thấy mình biến thành một con bọ.'],
              ['Die Hauptfigur verließ ihr Dorf und zog in die Stadt.', 'Nhân vật chính rời làng và chuyển lên thành phố.'],
            ],
            exercises: [
              fill('Die junge Frau {ging} jeden Abend an den Fluss. (gehen)', 'Người phụ nữ trẻ mỗi tối đi ra bờ sông.'),
              choose('Der Autor ___ den Roman in nur drei Monaten.', ['schrieb', 'schreibte', 'hat geschreibt'], 'schrieb', { vi: 'Tác giả viết cuốn tiểu thuyết chỉ trong ba tháng.' }),
              fill('Plötzlich {dachte} er an seine Kindheit. (denken)', 'Đột nhiên anh ấy nghĩ đến tuổi thơ của mình.'),
            ],
          },
          {
            text_vi:
              'Kể chuyện cần **thứ tự thời gian**: **Zuerst** … **Dann** … **Plötzlich** … **Schließlich** … Việc xảy ra **trước** một việc trong quá khứ dùng **Plusquamperfekt**: Als er ankam, **war** sie schon **gegangen**. **Tóm tắt** một tác phẩm (Inhaltsangabe) thì lại dùng **Präsens**: In der Erzählung **verlässt** die Hauptfigur ihr Dorf.',
            table: 'Mục đích | Thì | Ví dụ\nkể chuyện | Präteritum | Sie verließ das Dorf.\nviệc xảy ra trước | Plusquamperfekt | Sie hatte alles verkauft.\ntóm tắt nội dung | Präsens | Sie verlässt das Dorf.',
            examples: [['Als die Polizei kam, war der Dieb schon geflohen.', 'Khi cảnh sát đến, tên trộm đã trốn mất.']],
            exercises: [
              choose('Als sie den Brief las, ___ er schon abgereist.', ['war', 'hatte', 'ist'], 'war', { vi: 'Khi cô ấy đọc thư, anh ấy đã đi rồi.' }),
              transform('Chuyển sang Präteritum (văn kể)', 'Er hat die Tür geöffnet und ist hinausgegangen.', ['Er öffnete die Tür und ging hinaus.']),
              translate('Đột nhiên điện thoại reo.', ['Plötzlich klingelte das Telefon.']),
            ],
          },
        ],
        mixed: [
          fill('Nach dem Krieg {kehrte} der Erzähler in seine Heimat zurück. (zurückkehren)', 'Sau chiến tranh người kể chuyện trở về quê hương.'),
          choose('Niemand ___, wer der Fremde war.', ['wusste', 'wisste', 'weißte'], 'wusste', { vi: 'Không ai biết người lạ là ai.' }),
          transform('Chuyển sang Präteritum', 'Sie ist sehr berühmt geworden.', ['Sie wurde sehr berühmt.']),
          choose('In der Inhaltsangabe schreibt man: Die Hauptfigur ___ ihr Dorf.', ['verlässt', 'verließ', 'hat verlassen'], 'verlässt', { vi: 'Trong bản tóm tắt người ta viết: Nhân vật chính rời làng.' }),
          order('Zuerst / las / er / den Brief, / dann / verbrannte / er / ihn.', 'Đầu tiên anh ấy đọc lá thư, sau đó đốt nó.'),
        ],
      },
      dialogue: {
        title_de: 'Ein Klassiker im Unterricht',
        lines: [
          { speaker: 'A', de: 'Wir lesen gerade eine Novelle von Theodor Storm. Kennst du sie?', vi: 'Bọn mình đang đọc một truyện vừa của Theodor Storm. Bạn biết không?' },
          { speaker: 'B', de: 'Den Schimmelreiter? Ja, ein Klassiker. Worum geht es noch mal?', vi: '"Người cưỡi ngựa trắng" à? Có, tác phẩm kinh điển. Nội dung là gì nhỉ?' },
          { speaker: 'A', de: 'Ein junger Mann baute an der Nordsee einen neuen Deich. Die Dorfbewohner misstrauten ihm.', vi: 'Một chàng trai trẻ xây con đê mới ở biển Bắc. Dân làng không tin anh ta.' },
          { speaker: 'B', de: 'Und wie endet es?', vi: 'Thế kết thúc ra sao?' },
          { speaker: 'A', de: 'In einer Sturmnacht brach der alte Deich. Er ritt mit seinem Pferd ins Meer und starb.', vi: 'Trong một đêm bão, con đê cũ bị vỡ. Anh ta phi ngựa xuống biển và chết.' },
          { speaker: 'B', de: 'Das klingt dramatisch. Wer erzählt die Geschichte?', vi: 'Nghe kịch tính quá. Ai kể câu chuyện?' },
          { speaker: 'A', de: 'Das ist das Interessante: Es gibt mehrere Erzähler, und man weiß nie genau, was wahr ist.', vi: 'Điều thú vị là: có nhiều người kể, và không bao giờ biết chính xác điều gì là thật.' },
          { speaker: 'B', de: 'Die Erzählperspektive ist also ein wichtiges Motiv. Darüber kannst du gut schreiben.', vi: 'Vậy ngôi kể là một mô-típ quan trọng. Bạn có thể viết hay về điều đó.' },
        ],
        gloss: { Schimmelreiter: 'người cưỡi ngựa trắng', Nordsee: 'biển Bắc', Deich: 'con đê', Dorfbewohner: 'dân làng', misstrauten: 'không tin (misstrauen)', Sturmnacht: 'đêm bão', brach: 'vỡ (brechen)', ritt: 'cưỡi ngựa (reiten)', starb: 'chết (sterben)', 'noch mal': 'nhắc lại' },
        questions: [
          mc('Nhân vật chính xây gì?', ['một con đê mới', 'một cây cầu', 'một ngôi nhà'], 'một con đê mới'),
          tf('Die Dorfbewohner vertrauten dem jungen Mann.', false, { explain: 'Die Dorfbewohner misstrauten ihm.' }),
          mc('Điều gì xảy ra trong đêm bão?', ['con đê cũ bị vỡ', 'làng bị cháy', 'con ngựa bỏ chạy'], 'con đê cũ bị vỡ'),
          tf('In der Novelle gibt es mehrere Erzähler.', true),
        ],
        dictation: [2, 4],
      },
      writing_prompt_vi:
        'Kể lại một câu chuyện cổ tích Việt Nam bạn thích (8–10 câu) bằng Präteritum, dùng Zuerst / Dann / Plötzlich / Schließlich và ít nhất một câu Plusquamperfekt.',
    },
    {
      title_vi: 'Đọc và bình sách',
      goal_vi: 'Giới thiệu và nhận xét một cuốn sách; nhấn mạnh bằng cách đổi trật tự câu; nói nội dung với handeln von, es geht um.',
      items: [
        'Verlag', 'Übersetzung', 'Lesung', 'Bestseller', 'Rezension', 'interpretieren', 'handeln', 'sich hineinversetzen',
        'wirken', 'fesselnd', 'ausdrucksstark', 'gelungen', 'zum Ausdruck bringen', 'in den Bann ziehen',
        'zwischen den Zeilen lesen', 'Đảo ngữ nhấn mạnh', 'handeln von / es geht um', 'Gegenwartsliteratur', 'rezensieren',
        'thematisieren', 'sich widerspiegeln', 'ironisch', 'tiefsinnig', 'vielschichtig', 'provokant', 'Geschmack treffen',
        'Leseprobe', 'anspielungsreich', 'deuten', 'Bände sprechen', 'ein Buch verschlingen',
      ],
      grammar: {
        point: 'inversion-betonung',
        sections: [
          {
            text_vi:
              'Vị trí 1 trong câu tiếng Đức là chỗ **nhấn mạnh** hoặc **nối với câu trước**. Đưa **tân ngữ** hay **trạng ngữ** lên đầu thì **động từ vẫn ở vị trí 2**, chủ ngữ chuyển ra **sau động từ**: Ich habe **diesen Roman** dreimal gelesen → **Diesen Roman** habe ich dreimal gelesen. Lỗi hay gặp: giữ chủ ngữ trước động từ (*Diesen Roman ich habe…*).',
            examples: [
              ['Diesen Roman habe ich in zwei Tagen verschlungen.', 'Cuốn tiểu thuyết này tôi đã đọc ngấu nghiến trong hai ngày.'],
              ['Besonders gelungen finde ich das Ende.', 'Tôi thấy đoạn kết đặc biệt hay.'],
            ],
            exercises: [
              choose('Diese Geschichte ___ mir meine Großmutter erzählt.', ['hat', 'sie hat', 'erzählt'], 'hat', { vi: 'Câu chuyện này bà tôi đã kể cho tôi nghe.' }),
              order('Seine Gedichte / kennt / in Deutschland / jedes Kind.', 'Thơ của ông ấy thì ở Đức đứa trẻ nào cũng biết.'),
              transform('Nhấn mạnh "das Ende" (đưa lên đầu câu)', 'Ich finde das Ende besonders spannend.', ['Das Ende finde ich besonders spannend.']),
            ],
          },
          {
            text_vi:
              'Nói về **nội dung**: Der Roman **handelt von** + **Dativ** (einer Familie); **In** dem Roman **geht es um** + **Akkusativ** (eine Familie). Lưu ý: "es geht um" luôn có **es** làm chủ ngữ, tác phẩm đứng sau **in**. Để giới thiệu, hay bắt đầu bằng **In** dem Buch …, rồi động từ ngay sau: **In dem Buch geht es um** eine Frau, die …',
            table: 'Mẫu | Cách | Ví dụ\nX handelt von | Dativ | Der Roman handelt von einem Arzt.\nIn X geht es um | Akkusativ | Im Roman geht es um einen Arzt.\nX thematisiert | Akkusativ | Der Film thematisiert die Armut.',
            examples: [['In dem Buch geht es um eine Familie, die nach Deutschland auswandert.', 'Cuốn sách nói về một gia đình di cư sang Đức.']],
            exercises: [
              choose('Der Roman handelt ___ einer jungen Ärztin.', ['von', 'um', 'über'], 'von', { vi: 'Cuốn tiểu thuyết kể về một nữ bác sĩ trẻ.' }),
              fill('In der Kurzgeschichte geht es um {einen} Streit zwischen Brüdern.', 'Truyện ngắn nói về một cuộc cãi vã giữa hai anh em.'),
              transform('Viết lại với "es geht um"', 'Der Film handelt von einem alten Mann.', ['In dem Film geht es um einen alten Mann.', 'Im Film geht es um einen alten Mann.']),
            ],
          },
        ],
        mixed: [
          choose('Dieses Buch ___ ich jedem empfehlen.', ['kann', 'ich kann', 'empfehle'], 'kann', { vi: 'Cuốn sách này tôi có thể giới thiệu cho mọi người.' }),
          fill('Das Gedicht handelt von {der} Liebe.', 'Bài thơ nói về tình yêu.'),
          transform('Nhấn mạnh "die Figuren" (đưa lên đầu câu)', 'Ich finde die Figuren sehr vielschichtig.', ['Die Figuren finde ich sehr vielschichtig.']),
          choose('In dem Roman geht es ___ die Frage nach Identität.', ['um', 'von', 'über'], 'um', { vi: 'Cuốn tiểu thuyết nói về câu hỏi bản sắc.' }),
          order('Am meisten / hat / mich / das Ende / überrascht.', 'Điều làm tôi bất ngờ nhất là đoạn kết.'),
        ],
      },
      dialogue: {
        title_de: 'Im Lesekreis',
        lines: [
          { speaker: 'A', de: 'Also, wie hat euch der Roman gefallen?', vi: 'Nào, các bạn thấy cuốn tiểu thuyết thế nào?' },
          { speaker: 'B', de: 'Mich hat er sofort in seinen Bann gezogen. Ich habe ihn in zwei Nächten verschlungen.', vi: 'Nó cuốn hút mình ngay lập tức. Mình đọc ngấu nghiến trong hai đêm.' },
          { speaker: 'A', de: 'Worum geht es eigentlich genau? Ich habe nur die Leseprobe gelesen.', vi: 'Chính xác thì nó nói về gì? Mình mới đọc đoạn đọc thử.' },
          { speaker: 'B', de: 'Der Roman handelt von einer Familie in Hanoi und Leipzig. Es geht um drei Generationen.', vi: 'Tiểu thuyết kể về một gia đình ở Hà Nội và Leipzig. Nó nói về ba thế hệ.' },
          { speaker: 'A', de: 'Und die Sprache?', vi: 'Còn ngôn ngữ?' },
          { speaker: 'B', de: 'Sehr ausdrucksstark und oft ironisch. Man muss zwischen den Zeilen lesen.', vi: 'Rất giàu sức biểu cảm và hay mỉa mai. Phải đọc giữa các dòng chữ.' },
          { speaker: 'A', de: 'Das Ende fand ich ehrlich gesagt nicht so gelungen.', vi: 'Nói thật mình thấy đoạn kết không hay lắm.' },
          { speaker: 'B', de: 'Wirklich? Gerade das Ende hat mich zu Tränen gerührt!', vi: 'Thật à? Chính đoạn kết làm mình cảm động rơi nước mắt!' },
          { speaker: 'A', de: 'Jeder deutet es eben anders. Das zeigt, wie vielschichtig das Buch ist.', vi: 'Mỗi người hiểu một khác. Điều đó cho thấy cuốn sách nhiều tầng nghĩa thế nào.' },
        ],
        gloss: { Lesekreis: 'câu lạc bộ đọc sách', Generationen: 'thế hệ', 'ehrlich gesagt': 'nói thật', gerade: 'chính' },
        questions: [
          mc('B đọc cuốn sách trong bao lâu?', ['hai đêm', 'hai tuần', 'một tháng'], 'hai đêm'),
          tf('Der Roman handelt von einer Familie in Hanoi und Leipzig.', true),
          mc('Ngôn ngữ của cuốn sách thế nào?', ['giàu biểu cảm và hay mỉa mai', 'đơn giản và khô khan', 'toàn thơ'], 'giàu biểu cảm và hay mỉa mai'),
          tf('A und B finden das Ende beide gleich gut.', false, { explain: 'A fand das Ende nicht so gelungen, B war zu Tränen gerührt.' }),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi:
        'Viết bài điểm sách ngắn (6–8 câu) về cuốn sách hoặc bộ phim bạn thích: nội dung (handeln von / es geht um), điều bạn thích, điều chưa hay; ít nhất hai câu bắt đầu bằng tân ngữ để nhấn mạnh.',
    },
    {
      title_vi: 'Nghệ thuật, sân khấu và phim',
      goal_vi: 'Nói về triển lãm, buổi diễn, phim chuyển thể; dùng hạt từ doch, ja, eben, mal cho lời nói tự nhiên.',
      items: [
        'Leidenschaft', 'Fantasie', 'Inspiration', 'Kunstrichtung', 'Meisterwerk', 'Kulturerbe', 'inspirieren', 'bedeutend',
        'eben', 'doch', 'ja', 'Hạt từ tình thái: doch, ja, eben, mal', 'Drama', 'Akt', 'Kunstsammlung', 'Bildhauer',
        'Architektur', 'Kunstkritiker', 'Filmfestival', 'Uraufführung', 'Verfilmung', 'Bühnenbild', 'Kulturszene', 'verfilmen',
        'ansprechen', 'verkörpern', 'gestalten', 'poetisch', 'dramatisch', 'zeitgenössisch', 'stimmungsvoll', 'unvergänglich',
        'Beifall klatschen', 'zu Tränen rühren', 'vertonen',
      ],
      grammar: {
        point: 'modalpartikel',
        sections: [
          {
            text_vi:
              'Hạt từ tình thái (Modalpartikeln) không đổi nghĩa câu nhưng thêm **sắc thái**, giống "mà, đi, nhé, đấy" trong tiếng Việt. **mal** làm lời yêu cầu **nhẹ nhàng**: Schau **mal**! **doch** trong câu mệnh lệnh = **thúc giục, khuyên**: Komm **doch** mit! **ja** = điều **ai cũng biết** hoặc **ngạc nhiên**: Das ist **ja** toll! Hạt từ **không nhấn giọng** và đứng **sau động từ**.',
            table: 'Hạt từ | Sắc thái | Ví dụ\nmal | nhẹ nhàng | Schau mal!\ndoch (mệnh lệnh) | thúc giục, khuyên | Komm doch mit!\nja | ai cũng biết / ngạc nhiên | Das ist ja toll!\neben | chấp nhận, không đổi được | Das ist eben so.',
            examples: [
              ['Komm doch heute Abend mit ins Theater!', 'Tối nay đi xem kịch cùng đi!'],
              ['Das Bühnenbild ist ja fantastisch!', 'Thiết kế sân khấu tuyệt vời thật đấy!'],
            ],
            exercises: [
              choose('Hör ___ zu, das ist wichtig!', ['mal', 'ja', 'eben'], 'mal', { vi: 'Nghe này, cái này quan trọng!' }),
              choose('Das ist ___ eine Überraschung! Ich dachte, du bist in Berlin.', ['ja', 'eben', 'mal'], 'ja', { vi: 'Bất ngờ quá! Mình tưởng bạn ở Berlin.' }),
              fill('Komm {doch} am Samstag mit ins Museum!', 'Thứ Bảy đi bảo tàng cùng đi!'),
            ],
          },
          {
            text_vi:
              '**doch** trong câu kể = nhắc điều người nghe **lẽ ra phải biết**, đôi khi hơi trách: Du weißt **doch**, dass ich keine Zeit habe. **ja** trong câu kể = điều **cả hai đều biết**: Er ist **ja** Künstler. **eben** = chấp nhận thực tế: Kunst ist **eben** Geschmackssache. Khi trả lời phản bác câu phủ định, **Doch!** là "có chứ!".',
            examples: [['Du kennst ihn doch! Er war doch bei der Uraufführung.', 'Bạn biết anh ấy mà! Anh ấy đã có mặt ở buổi công diễn đầu tiên mà.']],
            exercises: [
              choose('Wir müssen nicht hetzen. Der Film beginnt ___ erst um acht.', ['ja', 'mal', 'eben'], 'ja', { vi: 'Không cần vội. Phim tám giờ mới bắt đầu mà.' }),
              fill('Nicht jeder mag moderne Kunst. Das ist {eben} Geschmackssache.', 'Không phải ai cũng thích nghệ thuật hiện đại. Đó là chuyện sở thích thôi.'),
              choose('Warum kommst du nicht? Du hast ___ gesagt, dass du Zeit hast!', ['doch', 'mal', 'eben'], 'doch', { vi: 'Sao bạn không đến? Bạn đã bảo là có thời gian mà!' }),
            ],
          },
        ],
        mixed: [
          choose('Gib mir ___ das Programmheft, bitte.', ['mal', 'ja', 'eben'], 'mal', { vi: 'Đưa mình tờ chương trình với.' }),
          fill('Die Verfilmung ist {ja} viel besser als das Buch!', 'Bản phim hay hơn sách nhiều thật đấy!'),
          choose('Es gibt keine Karten mehr. Da kann man nichts machen, das ist ___ so.', ['eben', 'mal', 'doch'], 'eben', { vi: 'Hết vé rồi. Không làm gì được, đành vậy thôi.' }),
          choose('Hast du keine Lust auf das Konzert? – ___! Ich komme gern mit.', ['Doch', 'Ja', 'Eben'], 'Doch', { vi: 'Bạn không muốn đi hòa nhạc à? – Có chứ! Mình rất muốn đi.' }),
          order('Sieh / dir / doch / mal / die Ausstellung / an!', 'Bạn đi xem triển lãm thử đi!'),
        ],
      },
      dialogue: {
        title_de: 'Kommst du mit ins Theater?',
        lines: [
          { speaker: 'A', de: 'Am Freitag ist die Uraufführung des neuen Dramas. Komm doch mit!', vi: 'Thứ Sáu là buổi công diễn đầu tiên của vở kịch mới. Đi cùng đi!' },
          { speaker: 'B', de: 'Ins Theater? Du weißt doch, dass ich lieber ins Kino gehe.', vi: 'Đi xem kịch á? Bạn biết mà, mình thích đi xem phim hơn.' },
          { speaker: 'A', de: 'Schau dir mal das Programm an. Das Bühnenbild hat ein bekannter Bildhauer gestaltet.', vi: 'Xem chương trình thử đi. Thiết kế sân khấu do một nhà điêu khắc nổi tiếng làm.' },
          { speaker: 'B', de: 'Oh, das ist ja interessant! Und worum geht es?', vi: 'Ồ, thú vị đấy! Thế nội dung về gì?' },
          { speaker: 'A', de: 'Um eine Künstlerin, die ihre Leidenschaft und ihre Familie verbinden will. Sehr zeitgenössisch.', vi: 'Về một nữ nghệ sĩ muốn kết hợp đam mê và gia đình. Rất đương đại.' },
          { speaker: 'B', de: 'Klingt gut. Aber die Karten sind bestimmt teuer.', vi: 'Nghe hay đấy. Nhưng vé chắc đắt lắm.' },
          { speaker: 'A', de: 'Für Studierende gibt es ja Ermäßigung. Zehn Euro, das geht doch!', vi: 'Sinh viên được giảm giá mà. Mười euro, được mà!' },
          { speaker: 'B', de: 'Na gut, überredet. Wenn es mir nicht gefällt, ist das eben so.', vi: 'Thôi được, bạn thuyết phục được rồi. Nếu không thích thì cũng đành vậy.' },
          { speaker: 'A', de: 'Du wirst begeistert sein. Am Ende klatscht bestimmt der ganze Saal Beifall.', vi: 'Bạn sẽ thích mê cho xem. Cuối buổi chắc cả khán phòng vỗ tay tán thưởng.' },
        ],
        gloss: { Programm: 'chương trình', Künstlerin: 'nữ nghệ sĩ', verbinden: 'kết hợp', Ermäßigung: 'sự giảm giá', 'das geht': 'được mà, ổn mà', überredet: 'bị thuyết phục (überreden)', Saal: 'khán phòng', begeistert: 'say mê' },
        questions: [
          mc('A rủ B đi đâu?', ['xem buổi công diễn đầu tiên một vở kịch', 'xem phim', 'đi triển lãm'], 'xem buổi công diễn đầu tiên một vở kịch'),
          tf('B geht lieber ins Kino als ins Theater.', true),
          mc('Ai thiết kế sân khấu?', ['một nhà điêu khắc nổi tiếng', 'A', 'một nhà phê bình'], 'một nhà điêu khắc nổi tiếng'),
          tf('Für Studierende kosten die Karten zwanzig Euro.', false, { explain: 'Zehn Euro.' }),
        ],
        dictation: [1, 6],
      },
      writing_prompt_vi:
        'Viết một đoạn hội thoại (6–8 câu) rủ bạn đi xem triển lãm hoặc buổi hòa nhạc; dùng mỗi hạt từ doch, ja, eben, mal ít nhất một lần.',
    },
  ],
  test: {
    grammar: {
      'praeteritum-erzaehlen': [
        choose('Der Prinz ___ in den Wald.', ['ritt', 'reitete', 'ist geritten'], 'ritt'),
        fill('Plötzlich {sah} sie einen Schatten. (sehen)', 'Đột nhiên cô ấy nhìn thấy một cái bóng.'),
        choose('Niemand ___ die Antwort.', ['wusste', 'wisste', 'weißte'], 'wusste'),
        fill('Er {dachte} lange nach. (nachdenken)', 'Anh ấy suy nghĩ rất lâu.'),
        choose('Als sie ankam, ___ der Zug schon abgefahren.', ['war', 'hatte', 'ist'], 'war'),
        order('Am nächsten Morgen / verließ / er / das Dorf.', 'Sáng hôm sau anh ấy rời làng.'),
      ],
      'inversion-betonung': [
        choose('Diesen Film ___ ich schon dreimal gesehen.', ['habe', 'ich habe', 'gesehen'], 'habe'),
        choose('Der Roman handelt ___ einem Arzt.', ['von', 'um', 'über'], 'von'),
        fill('In dem Buch geht es um {eine} Reise.', 'Cuốn sách nói về một chuyến đi.'),
        order('Das Ende / fand / ich / besonders / spannend.', 'Đoạn kết tôi thấy đặc biệt hấp dẫn.'),
        choose('Im Film geht es ___ eine Familie.', ['um', 'von', 'mit'], 'um'),
        fill('Seine Bücher {kennt} jedes Kind.', 'Sách của ông ấy đứa trẻ nào cũng biết.'),
      ],
      modalpartikel: [
        choose('Komm ___ mit, das wird lustig!', ['doch', 'eben', 'ja'], 'doch'),
        choose('Schau ___, da ist ein Regenbogen!', ['mal', 'eben', 'ja'], 'mal'),
        fill('Das ist {ja} eine tolle Idee!', 'Ý tưởng hay thật đấy!'),
        choose('So ist das Leben ___.', ['eben', 'mal', 'denn'], 'eben'),
        choose('Kommst du nicht? – ___, ich komme!', ['Doch', 'Ja', 'Mal'], 'Doch'),
        order('Ruf / mich / doch / mal / an!', 'Gọi cho mình nhé!'),
      ],
    },
    reading: {
      title_de: 'Eine Lesung in Leipzig',
      text_de:
        'Jedes Frühjahr findet in Leipzig die Buchmesse statt. Neben großen Verlagen kommen auch viele junge Autorinnen und Autoren. Bei einer Lesung stellte eine Schriftstellerin ihren ersten Roman vor. Er handelt von einer jungen Frau, die zwischen zwei Kulturen aufwächst. Die Autorin las ein Kapitel vor und beantwortete danach Fragen aus dem Publikum. Viele Zuhörer wollten wissen, ob die Geschichte autobiografisch sei. Sie lachte und sagte, jeder Roman enthalte eben ein bisschen vom eigenen Leben. Die Kritiker loben vor allem die poetische Sprache. Nach der Lesung bildete sich eine lange Schlange: Alle wollten ein Buch mit Widmung.',
      gloss: {
        Buchmesse: 'hội chợ sách',
        Schriftstellerin: 'nữ nhà văn',
        'stellte … vor': 'giới thiệu (vorstellen)',
        Kapitel: 'chương',
        Zuhörer: 'người nghe',
        enthalte: 'chứa đựng (enthalten)',
        Schlange: 'hàng người xếp',
        Widmung: 'lời đề tặng',
      },
      questions: [
        mc('Hội chợ sách Leipzig diễn ra khi nào?', ['mỗi mùa xuân', 'mỗi mùa thu', 'hai năm một lần'], 'mỗi mùa xuân'),
        tf('Der Roman handelt von einer jungen Frau zwischen zwei Kulturen.', true),
        mc('Người nghe muốn biết điều gì?', ['câu chuyện có phải tự truyện không', 'giá cuốn sách', 'tác giả bao nhiêu tuổi'], 'câu chuyện có phải tự truyện không'),
        tf('Nach der Lesung gingen alle sofort nach Hause.', false, { explain: 'Es bildete sich eine lange Schlange.' }),
      ],
    },
  },
});
