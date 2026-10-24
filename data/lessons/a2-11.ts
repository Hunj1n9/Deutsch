// A2 · 11 Quan hệ và cảm xúc — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'a2-11',
  points: [
    {
      key: 'konj2',
      rule_key: 'konjunktiv-ii-wuerde-haette-waere',
      category: 'conjugation',
      title_vi: 'Konjunktiv II: würde, hätte, wäre, könnte',
      explanation_vi: 'Mong ước, giả định: würde + nguyên mẫu cuối câu; haben → hätte, sein → wäre, können → könnte. Wenn ich Zeit hätte, würde ich kommen.',
    },
    {
      key: 'sollte',
      rule_key: 'ratschlag-sollte',
      category: 'conjugation',
      title_vi: 'Lời khuyên: sollte, An deiner Stelle würde ich …',
      explanation_vi: 'ich/er sollte, du solltest, ihr solltet + nguyên mẫu cuối câu. Khuyên lịch sự: An deiner Stelle würde ich … raten + Dativ.',
    },
    {
      key: 'trotzdem',
      rule_key: 'trotzdem-inversion',
      category: 'verb_position',
      title_vi: 'trotzdem: kết quả trái mong đợi, động từ ngay sau',
      explanation_vi: 'trotzdem ở vị trí 1: Es regnet, trotzdem gehen wir spazieren. Kết quả hợp lý dùng deshalb.',
    },
  ],
  lessons: [
    {
      title_vi: 'Giá mà…',
      goal_vi: 'Nói mong ước và điều giả định; mời lịch sự bằng Konjunktiv II.',
      items: [
        'Gefühl', 'Liebe', 'Glück', 'Freude', 'Single', 'Paar', 'Verabredung', 'sich verlieben', 'hoffen', 'lachen',
        'lächeln', 'küssen', 'verliebt', 'sympathisch', 'Konjunktiv II: würde + Infinitiv', 'Konjunktiv II: hätte, wäre',
        'blöd', 'furchtbar',
      ],
      grammar: {
        point: 'konj2',
        sections: [
          {
            text_vi:
              '**Konjunktiv II** diễn đạt điều **giả định, mong ước**, không có thật. Cách dễ nhất: **würde** + nguyên mẫu cuối câu: Ich **würde** gern mehr **reisen**. (Tôi muốn được đi du lịch nhiều hơn.) Chia: ich würde, du würdest, er würde, wir würden, ihr würdet, sie würden.',
            table: 'Đại từ | würde\nich | würde\ndu | würdest\ner/sie/es | würde\nwir | würden\nihr | würdet\nsie/Sie | würden',
            examples: [
              ['Ich würde gern mit dir ins Kino gehen.', 'Tôi rất muốn đi xem phim với bạn.'],
              ['Was würdest du machen?', 'Bạn sẽ làm gì?'],
            ],
            exercises: [
              fill('Ich {würde} gern mehr reisen.', 'Tôi muốn được đi du lịch nhiều hơn.'),
              choose('___ du mit mir tanzen?', ['Würdest', 'Würde', 'Würdet'], 'Würdest', { vi: 'Bạn có muốn nhảy với mình không?' }),
              order('Wir / würden / gern / heiraten.', 'Chúng tôi muốn kết hôn.'),
            ],
          },
          {
            text_vi:
              '**haben**, **sein** và **können** có dạng riêng: haben → **hätte**, sein → **wäre**, können → **könnte**. Câu điều kiện không thật: **Wenn** ich Zeit **hätte**, **würde** ich dich besuchen. (Nếu có thời gian – nhưng thật ra không có.) **Wenn** ich reich **wäre**, …',
            table: 'Thực | Giả định\nich habe | ich hätte\nich bin | ich wäre\nich kann | ich könnte\nich mache | ich würde machen',
            examples: [
              ['Wenn ich Zeit hätte, würde ich dich besuchen.', 'Nếu có thời gian, tôi sẽ đến thăm bạn.'],
              ['Es wäre schön, wenn du hier wärst.', 'Thật tuyệt nếu bạn ở đây.'],
            ],
            exercises: [
              fill('Wenn ich Geld {hätte}, würde ich ein Haus kaufen.', 'Nếu có tiền, tôi sẽ mua nhà.'),
              choose('Wenn ich du ___, würde ich anrufen.', ['wäre', 'bin', 'hätte'], 'wäre', { vi: 'Nếu tôi là bạn, tôi sẽ gọi điện.' }),
              choose('___ du mir bitte helfen?', ['Könntest', 'Konntest'], 'Könntest', { vi: 'Bạn có thể giúp mình được không?' }),
            ],
          },
          {
            text_vi:
              'Tình cảm: **sich verlieben in** + Akk (phải lòng): Er hat **sich in** sie **verliebt**. **verliebt sein** (đang yêu), **eine Verabredung haben** (có hẹn), **ein schönes Paar** (một cặp đẹp). Mời lịch sự bằng Konjunktiv II: **Hättest** du Lust, …? **Würdest** du …?',
            examples: [['Hättest du Lust, mit mir essen zu gehen?', 'Bạn có muốn đi ăn với mình không?']],
            exercises: [
              fill('Er hat sich in seine Kollegin {verliebt}.', 'Anh ấy đã phải lòng cô đồng nghiệp.'),
              translate('Nếu tôi là bạn, tôi sẽ gọi cho cô ấy.', ['Wenn ich du wäre, würde ich sie anrufen.']),
            ],
          },
        ],
        mixed: [
          transform('Viết thành mong ước với „würde gern“', 'Ich reise nach Paris.', ['Ich würde gern nach Paris reisen.']),
          transform('Đổi sang giả định', 'Wenn ich Zeit habe, komme ich.', ['Wenn ich Zeit hätte, würde ich kommen.']),
          choose('Wenn ich nicht so müde ___, würde ich tanzen.', ['wäre', 'würde', 'hätte'], 'wäre', { vi: 'Nếu tôi không mệt thế, tôi sẽ nhảy.' }),
          fill('{Hättest} du Lust, ins Kino zu gehen?', 'Bạn có muốn đi xem phim không?'),
          choose('Was ___ ihr an meiner Stelle machen?', ['würdet', 'würden'], 'würdet', { vi: 'Nếu là tôi, các bạn sẽ làm gì?' }),
        ],
      },
      dialogue: {
        title_de: 'Verliebt?',
        lines: [
          { speaker: 'A', de: 'Du lächelst die ganze Zeit. Bist du verliebt?', vi: 'Bạn cứ cười suốt. Bạn đang yêu à?' },
          { speaker: 'B', de: 'Vielleicht. Ich habe am Samstag eine Verabredung mit Tom.', vi: 'Có lẽ. Thứ Bảy mình có hẹn với Tom.' },
          { speaker: 'A', de: 'Mit Tom? Er ist sehr sympathisch! Wohin geht ihr?', vi: 'Với Tom à? Anh ấy dễ mến lắm! Hai bạn đi đâu?' },
          { speaker: 'B', de: 'Ins Kino. Aber ich würde lieber tanzen gehen.', vi: 'Đi xem phim. Nhưng mình thích đi nhảy hơn.' },
          { speaker: 'A', de: 'Dann sag es ihm doch!', vi: 'Thế thì nói với anh ấy đi!' },
          { speaker: 'B', de: 'Wenn ich mutiger wäre, würde ich es sagen.', vi: 'Nếu mình can đảm hơn thì mình đã nói rồi.' },
          { speaker: 'A', de: 'Ich hoffe, ihr habt viel Spaß zusammen. Ihr wärt ein schönes Paar!', vi: 'Mong hai bạn vui vẻ. Hai bạn sẽ là một cặp đẹp đấy!' },
          { speaker: 'B', de: 'Ach, hör auf! Aber das wäre schön.', vi: 'Thôi đi! Nhưng nếu vậy thì tuyệt thật.' },
        ],
        gloss: { 'die ganze Zeit': 'suốt, cả lúc', mutiger: 'can đảm hơn', wärt: 'sẽ là (ihr)', 'hör auf': 'thôi đi' },
        questions: [
          tf('B hat eine Verabredung mit Tom.', true),
          mc('Họ định đi đâu?', ['xem phim', 'khiêu vũ', 'ăn tối'], 'xem phim'),
          mc('B thích đi đâu hơn?', ['đi nhảy', 'xem phim', 'đi dạo'], 'đi nhảy'),
          tf('B sagt es Tom sofort.', false, { explain: 'Wenn ich mutiger wäre, würde ich es sagen.' }),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi:
        'Viết 5 câu mong ước và giả định: Ich würde gern…, Wenn ich … hätte / wäre, würde ich …',
    },
    {
      title_vi: 'Lời khuyên',
      goal_vi: 'Xin và cho lời khuyên (sollte, An deiner Stelle…); cãi nhau và làm lành.',
      items: [
        'Beziehung', 'Streit', 'Rat', 'Problem', 'Vertrauen', 'Kompliment', 'sich streiten', 'sich trennen',
        'sich versöhnen', 'sich entschuldigen', 'vertrauen', 'raten', 'eifersüchtig', 'ehrlich', 'höflich',
        'Das tut mir leid', 'Lời khuyên với sollte', 'An deiner Stelle würde ich …',
      ],
      grammar: {
        point: 'sollte',
        sections: [
          {
            text_vi:
              'Khuyên ai đó: **sollte** (Konjunktiv II của sollen) + nguyên mẫu cuối câu: Du **solltest** mit ihr **sprechen**. (Bạn nên nói chuyện với cô ấy.) Chia: ich sollte, du solltest, er sollte, wir sollten, ihr solltet. Mềm hơn **musst** (phải).',
            table: 'Đại từ | sollte\nich | sollte\ndu | solltest\ner/sie/es | sollte\nwir | sollten\nihr | solltet\nsie/Sie | sollten',
            examples: [
              ['Du solltest dich entschuldigen.', 'Bạn nên xin lỗi.'],
              ['Ihr solltet nicht so viel streiten.', 'Các bạn không nên cãi nhau nhiều thế.'],
            ],
            exercises: [
              fill('Du {solltest} ehrlich sein.', 'Bạn nên thành thật.'),
              choose('Sie ___ mehr schlafen. (ông/bà)', ['sollten', 'solltest'], 'sollten', { vi: 'Ông/bà nên ngủ nhiều hơn.' }),
              order('Du / solltest / ihm / vertrauen.', 'Bạn nên tin anh ấy.'),
            ],
          },
          {
            text_vi:
              'Cách khuyên khác: **An deiner Stelle würde ich** … (Nếu tôi là bạn…): An deiner Stelle **würde** ich mich **entschuldigen**. Xin lời khuyên: **Was würdest du machen?** / **Kannst du mir einen Rat geben?** **raten** + Dativ: Ich **rate dir**, mit ihr zu sprechen.',
            examples: [['An deiner Stelle würde ich mit ihm sprechen.', 'Nếu là bạn, tôi sẽ nói chuyện với anh ấy.']],
            exercises: [
              fill('An deiner Stelle {würde} ich nicht so eifersüchtig sein.', 'Nếu là bạn, tôi sẽ không ghen như vậy.'),
              choose('Ich rate ___, ehrlich zu sein.', ['dir', 'dich'], 'dir', { vi: 'Tôi khuyên bạn nên thành thật.' }),
              translate('Bạn có thể cho tôi một lời khuyên không?', ['Kannst du mir einen Rat geben?', 'Können Sie mir einen Rat geben?']),
            ],
          },
          {
            text_vi:
              'Cãi nhau và làm lành: **sich streiten** (cãi nhau), **sich trennen von** + Dat (chia tay), **sich versöhnen** (làm lành), **sich entschuldigen bei** + Dat **für** + Akk: Ich **entschuldige mich bei** dir **für** den Streit. Nói xin lỗi: **Das tut mir leid.**',
            examples: [['Ich möchte mich bei dir entschuldigen.', 'Mình muốn xin lỗi bạn.']],
            exercises: [
              order('Wir / haben / uns / versöhnt.', 'Chúng tôi đã làm lành.'),
              fill('Sie haben {sich} getrennt.', 'Họ đã chia tay.'),
            ],
          },
        ],
        mixed: [
          transform('Viết lời khuyên với sollte', 'Du sprichst mit ihr.', ['Du solltest mit ihr sprechen.']),
          transform('Viết lại bằng „An deiner Stelle würde ich …“', 'Ich entschuldige mich.', ['An deiner Stelle würde ich mich entschuldigen.']),
          choose('Ihr ___ höflicher sein.', ['solltet', 'sollten', 'solltest'], 'solltet', { vi: 'Các bạn nên lịch sự hơn.' }),
          translate('Bạn nên thành thật.', ['Du solltest ehrlich sein.', 'Sie sollten ehrlich sein.']),
          fill('Ich entschuldige mich {bei} dir.', 'Mình xin lỗi bạn.'),
        ],
      },
      dialogue: {
        title_de: 'Ein Rat',
        lines: [
          { speaker: 'A', de: 'Was ist los? Hattest du Streit mit Minh?', vi: 'Có chuyện gì vậy? Bạn cãi nhau với Minh à?' },
          { speaker: 'B', de: 'Ja. Er ist so eifersüchtig. Ich habe ein Problem und weiß nicht, was ich machen soll.', vi: 'Ừ. Anh ấy ghen quá. Mình có vấn đề mà không biết nên làm gì.' },
          { speaker: 'A', de: 'Du solltest ehrlich mit ihm sprechen.', vi: 'Bạn nên nói chuyện thẳng thắn với anh ấy.' },
          { speaker: 'B', de: 'Aber er hört nicht zu.', vi: 'Nhưng anh ấy không chịu nghe.' },
          { speaker: 'A', de: 'An deiner Stelle würde ich ihm sagen, dass Vertrauen wichtig ist.', vi: 'Nếu là bạn, mình sẽ nói với anh ấy rằng tin tưởng là quan trọng.' },
          { speaker: 'B', de: 'Und wenn er wütend wird?', vi: 'Còn nếu anh ấy nổi giận thì sao?' },
          { speaker: 'A', de: 'Dann solltet ihr eine Pause machen. Aber ich glaube, ihr versöhnt euch bald.', vi: 'Thì hai bạn nên tạm xa nhau một chút. Nhưng mình nghĩ hai bạn sẽ sớm làm lành.' },
          { speaker: 'B', de: 'Danke für den Rat. Das tut mir gut.', vi: 'Cảm ơn lời khuyên. Mình thấy nhẹ lòng hơn.' },
        ],
        gloss: { 'hört … zu': 'lắng nghe', wütend: 'giận dữ', wird: 'trở nên', 'tut mir gut': 'làm tôi dễ chịu' },
        questions: [
          mc('Vì sao họ cãi nhau?', ['Minh hay ghen', 'Minh không có thời gian', 'vì tiền'], 'Minh hay ghen'),
          tf('A rät B, ehrlich zu sein.', true),
          tf('A glaubt, sie trennen sich.', false, { explain: 'Ich glaube, ihr versöhnt euch bald.' }),
          mc('Nếu Minh nổi giận, A khuyên gì?', ['tạm xa nhau một chút', 'chia tay', 'gọi bạn bè'], 'tạm xa nhau một chút'),
        ],
        dictation: [2, 4],
      },
      writing_prompt_vi:
        'Một người bạn gặp vấn đề trong tình cảm. Viết 5 lời khuyên: Du solltest…, An deiner Stelle würde ich…',
    },
    {
      title_vi: 'Mặc dù vậy',
      goal_vi: 'Nói về cảm xúc khó khăn và kết quả trái mong đợi với trotzdem.',
      items: [
        'Freundschaft', 'Angst', 'Sorge', 'Trauer', 'Wut', 'sich verstehen', 'vermissen', 'weinen', 'trösten', 'umarmen',
        'wütend', 'enttäuscht', 'einsam', 'böse', 'trotzdem', 'Ich vermisse dich',
      ],
      grammar: {
        point: 'trotzdem',
        sections: [
          {
            text_vi:
              '**trotzdem** (mặc dù vậy, dù thế) nối hai câu chính khi kết quả **trái với mong đợi**. Nó đứng **vị trí 1**, nên **động từ theo ngay sau**: Es regnet, **trotzdem gehen** wir spazieren. So sánh deshalb (kết quả hợp lý): Es regnet, **deshalb bleiben** wir zu Hause.',
            table: 'Câu 1 | Từ nối | Câu 2\nEs regnet, | deshalb | bleiben wir zu Hause.\nEs regnet, | trotzdem | gehen wir spazieren.',
            examples: [
              ['Ich bin müde, trotzdem lerne ich noch.', 'Tôi mệt, dù vậy vẫn học tiếp.'],
              ['Wir hatten Streit, trotzdem sind wir Freunde.', 'Chúng tôi đã cãi nhau, dù vậy vẫn là bạn.'],
            ],
            exercises: [
              order('Es regnet, / trotzdem / gehen / wir / spazieren.', 'Trời mưa, dù vậy chúng tôi vẫn đi dạo.'),
              choose('Er ist krank, trotzdem ___ zur Arbeit.', ['geht er', 'er geht'], 'geht er', { vi: 'Anh ấy ốm, dù vậy vẫn đi làm.' }),
              fill('Ich habe Angst, trotzdem {fliege} ich.', 'Tôi sợ, dù vậy tôi vẫn bay.'),
            ],
          },
          {
            text_vi:
              'Chọn **deshalb** hay **trotzdem**: kết quả **hợp lý** → deshalb; kết quả **ngược** → trotzdem. Ich vermisse meine Familie, **deshalb** rufe ich sie jeden Tag an. – Ich vermisse meine Familie, **trotzdem** bleibe ich in Deutschland.',
            examples: [['Sie war wütend, trotzdem hat sie gelächelt.', 'Cô ấy giận, dù vậy vẫn mỉm cười.']],
            exercises: [
              choose('Ich bin einsam, ___ rufe ich meine Freunde an.', ['deshalb', 'trotzdem'], 'deshalb', { vi: 'Tôi cô đơn nên gọi điện cho bạn bè.' }),
              choose('Ich bin einsam, ___ bleibe ich allein zu Hause.', ['trotzdem', 'deshalb'], 'trotzdem', { vi: 'Tôi cô đơn, dù vậy vẫn ở nhà một mình.' }),
              transform('Nối hai câu bằng trotzdem', 'Er ist böse. Er umarmt sie.', ['Er ist böse, trotzdem umarmt er sie.']),
            ],
          },
          {
            text_vi:
              'Cảm xúc: **Angst haben vor** + Dat (sợ), **sich Sorgen machen** (lo lắng): Mach dir keine **Sorgen**! **wütend** (giận dữ), **enttäuscht** (thất vọng), **einsam** (cô đơn). An ủi: **trösten**, **umarmen** (ôm). Nhớ ai đó: **Ich vermisse dich.**',
            examples: [['Mach dir keine Sorgen, alles wird gut.', 'Đừng lo, mọi chuyện sẽ ổn.']],
            exercises: [
              translate('Mình nhớ bạn.', ['Ich vermisse dich.']),
              fill('Sie {tröstet} ihre Freundin.', 'Cô ấy an ủi bạn mình.'),
            ],
          },
        ],
        mixed: [
          transform('Nối hai câu bằng trotzdem', 'Ich bin enttäuscht. Ich vertraue dir.', ['Ich bin enttäuscht, trotzdem vertraue ich dir.']),
          choose('Er hat sich entschuldigt, trotzdem ___ sie noch böse.', ['ist', 'sie ist'], 'ist', { vi: 'Anh ấy đã xin lỗi, dù vậy cô ấy vẫn giận.' }),
          translate('Trời lạnh, dù vậy chúng tôi vẫn đi bơi.', ['Es ist kalt, trotzdem gehen wir schwimmen.']),
          choose('Ich habe keine Zeit, ___ komme ich nicht.', ['deshalb', 'trotzdem'], 'deshalb', { vi: 'Tôi không có thời gian nên không đến.' }),
          order('Wir verstehen uns gut, / trotzdem / streiten / wir / manchmal.', 'Chúng tôi hợp nhau, dù vậy đôi khi vẫn cãi nhau.'),
        ],
      },
      dialogue: {
        title_de: 'Weit weg von zu Hause',
        lines: [
          { speaker: 'A', de: 'Du siehst traurig aus. Was ist los?', vi: 'Trông bạn buồn quá. Có chuyện gì vậy?' },
          { speaker: 'B', de: 'Ich vermisse meine Familie. Ich bin seit einem Jahr in Deutschland und fühle mich oft einsam.', vi: 'Mình nhớ gia đình. Mình ở Đức một năm rồi và hay thấy cô đơn.' },
          { speaker: 'A', de: 'Das verstehe ich. Rufst du sie oft an?', vi: 'Mình hiểu mà. Bạn có hay gọi về nhà không?' },
          { speaker: 'B', de: 'Ja, jeden Tag. Trotzdem ist es schwer.', vi: 'Có, ngày nào cũng gọi. Dù vậy vẫn khó khăn lắm.' },
          { speaker: 'A', de: 'Komm her, ich umarme dich. Du bist nicht allein!', vi: 'Lại đây, mình ôm bạn nào. Bạn không cô đơn đâu!' },
          { speaker: 'B', de: 'Danke. Mit dir verstehe ich mich wirklich gut.', vi: 'Cảm ơn. Mình thật sự rất hợp với bạn.' },
          { speaker: 'A', de: 'Mach dir keine Sorgen. Am Wochenende kochen wir zusammen vietnamesisch!', vi: 'Đừng lo. Cuối tuần mình cùng nấu món Việt nhé!' },
          { speaker: 'B', de: 'Gute Idee! Trotzdem freue ich mich schon auf Tet zu Hause.', vi: 'Ý hay! Dù vậy mình vẫn mong được về nhà ăn Tết.' },
        ],
        gloss: { 'siehst … aus': 'trông có vẻ', her: 'lại đây', vietnamesisch: 'món Việt' },
        questions: [
          mc('Vì sao B buồn?', ['nhớ gia đình', 'cãi nhau', 'mất việc'], 'nhớ gia đình'),
          tf('B ruft die Familie jeden Tag an.', true),
          tf('B fühlt sich nie einsam.', false),
          mc('Cuối tuần họ làm gì?', ['nấu món Việt', 'đi xem phim', 'gọi điện về nhà'], 'nấu món Việt'),
        ],
        dictation: [3, 5],
      },
      writing_prompt_vi:
        'Viết 5 câu về cảm xúc của bạn khi xa nhà hoặc trong một tình huống khó, dùng ít nhất hai câu với trotzdem.',
    },
  ],
  test: {
    grammar: {
      konj2: [
        fill('Ich {würde} gern mehr reisen.', 'Tôi muốn được đi du lịch nhiều hơn.'),
        choose('Wenn ich Zeit ___, würde ich kommen.', ['hätte', 'habe'], 'hätte'),
        choose('Wenn ich reich ___, würde ich ein Haus kaufen.', ['wäre', 'bin'], 'wäre'),
        choose('___ du mir helfen?', ['Könntest', 'Konntest'], 'Könntest'),
        order('Ich / würde / gern / tanzen.', 'Tôi muốn được nhảy.'),
        fill('{Hättest} du Lust mitzukommen?', 'Bạn có muốn đi cùng không?'),
      ],
      sollte: [
        fill('Du {solltest} mehr schlafen.', 'Bạn nên ngủ nhiều hơn.'),
        choose('Ihr ___ ehrlich sein.', ['solltet', 'sollten'], 'solltet'),
        fill('An deiner Stelle {würde} ich anrufen.', 'Nếu là bạn, tôi sẽ gọi điện.'),
        choose('Ich rate ___, zu warten.', ['dir', 'dich'], 'dir'),
        order('Du / solltest / dich / entschuldigen.', 'Bạn nên xin lỗi.'),
        choose('Sie ___ zum Arzt gehen. (cô ấy)', ['sollte', 'solltest'], 'sollte'),
      ],
      trotzdem: [
        choose('Es regnet, trotzdem ___ wir spazieren.', ['gehen', 'wir gehen'], 'gehen'),
        order('Ich bin müde, / trotzdem / lerne / ich.', 'Tôi mệt, dù vậy vẫn học.'),
        choose('Ich bin krank, ___ bleibe ich zu Hause.', ['deshalb', 'trotzdem'], 'deshalb'),
        choose('Ich bin krank, ___ gehe ich zur Arbeit.', ['trotzdem', 'deshalb'], 'trotzdem'),
        fill('Er ist wütend, trotzdem {lächelt} er.', 'Anh ấy giận, dù vậy vẫn mỉm cười.'),
        fill('Wir hatten Streit, trotzdem {sind} wir Freunde.', 'Chúng tôi đã cãi nhau, dù vậy vẫn là bạn.'),
      ],
    },
    reading: {
      title_de: 'Ich brauche Ihren Rat',
      text_de:
        'Liebe Frau Lehmann, ich habe ein Problem und brauche Ihren Rat. Ich bin seit zwei Jahren mit meinem Freund zusammen. Wir verstehen uns gut, trotzdem streiten wir in letzter Zeit oft. Er arbeitet sehr viel und hat kaum Zeit für mich. Wenn ich ihn anrufe, ist er oft müde und schlecht gelaunt. Ich fühle mich einsam und bin enttäuscht. Meine Freundin sagt, ich sollte mich von ihm trennen. Aber ich liebe ihn noch. Was würden Sie an meiner Stelle machen? Viele Grüße, Hoa',
      gloss: { 'in letzter Zeit': 'dạo gần đây', kaum: 'hầu như không', 'schlecht gelaunt': 'tâm trạng tệ' },
      questions: [
        mc('Hoa đã ở bên bạn trai bao lâu?', ['2 năm', '1 năm', '3 năm'], '2 năm'),
        tf('Hoa und ihr Freund streiten nie.', false),
        mc('Bạn của Hoa khuyên gì?', ['chia tay', 'kết hôn', 'đi du lịch'], 'chia tay'),
        tf('Hoa liebt ihren Freund noch.', true),
      ],
    },
  },
});
