// B2 · 06 Y học và sức khỏe — bài học (F11) và kiểm tra chặng (F12). Tự soạn.
import { choose, defineStage, fill, mc, order, tf, transform, translate } from '@/lib/course/define';

export default defineStage({
  stage_id: 'b2-06',
  points: [
    {
      key: 'modal-vermutung',
      rule_key: 'modalverb-subjektiv-vermutung',
      category: 'word_choice',
      title_vi: 'Động từ khuyết thiếu chủ quan: phỏng đoán và nghe nói',
      explanation_vi: 'Modalverb diễn tả mức chắc chắn của người nói: muss (chắc chắn), dürfte (có lẽ), kann/könnte (có thể), soll (nghe nói, theo người khác). Về quá khứ: Modalverb + Partizip II + haben/sein (Er muss krank gewesen sein).',
    },
    {
      key: 'futur-2',
      rule_key: 'futur-ii-vermutung',
      category: 'tense',
      title_vi: 'Futur II: phỏng đoán việc đã xảy ra',
      explanation_vi: 'werden + Partizip II + haben/sein. Dùng để đoán về việc đã xảy ra (Er wird den Termin vergessen haben = chắc anh ấy đã quên) hoặc việc sẽ xong trước một mốc (Bis Montag wird sie sich erholt haben).',
    },
    {
      key: 'gerundiv',
      rule_key: 'gerundiv-zu-partizip-i',
      category: 'adjective_ending',
      title_vi: 'zu + Partizip I (Gerundiv)',
      explanation_vi: 'Văn viết: zu + Partizip I trước danh từ = cái phải/có thể được làm: die zu beachtenden Regeln = die Regeln, die beachtet werden müssen. Mang đuôi tính từ; động từ tách: die einzunehmenden Tabletten.',
    },
  ],
  lessons: [
    {
      title_vi: 'Khám bệnh và chẩn đoán',
      goal_vi: 'Hiểu khám bệnh, xét nghiệm; nói mức chắc chắn khi phỏng đoán (muss, dürfte, kann) và truyền lại tin đồn (soll).',
      items: [
        'Erkrankung', 'Krebs', 'Pandemie', 'Erreger', 'Abwehrkräfte', 'Schlafmangel', 'diagnostizieren', 'schwächen', 'auslösen',
        'sich ausbreiten', 'vorliegen', 'erblich', 'vermutlich', 'Động từ khuyết thiếu chủ quan: phỏng đoán', 'sollen: nghe nói',
        'Anamnese', 'Befund', 'Ultraschall', 'Röntgenbild', 'Blutuntersuchung', 'Immunsystem', 'Ansteckung', 'Quarantäne',
        'Impfstoff', 'röntgen', 'nüchtern', 'unauffällig', 'vorbelastet', 'auf Herz und Nieren prüfen', 'psychosomatisch',
        'sich impfen lassen', 'sich etwas einfangen',
      ],
      grammar: {
        point: 'modal-vermutung',
        sections: [
          {
            text_vi:
              'Ngoài nghĩa "phải, có thể", động từ khuyết thiếu còn cho biết **người nói chắc đến đâu**. **muss** = chắc chắn (~90%): Er **muss** krank sein. **dürfte** = có lẽ (~70%). **kann / könnte** = có thể (~50%). **kann nicht** = không thể nào. Tiếng Việt dùng "chắc là, có lẽ, có thể"; tiếng Đức gói vào động từ.',
            table: 'Mức chắc chắn | Động từ | Ví dụ\nrất chắc | muss | Er muss Fieber haben.\nkhá chắc | dürfte | Das dürfte eine Grippe sein.\ncó thể | kann / könnte | Es könnte eine Allergie sein.\nkhông thể | kann nicht | Das kann nicht stimmen.',
            examples: [
              ['Sie hustet ständig. Sie muss sich etwas eingefangen haben.', 'Cô ấy ho liên tục. Chắc chắn cô ấy bị nhiễm gì đó.'],
              ['Der Befund dürfte morgen vorliegen.', 'Có lẽ ngày mai sẽ có kết quả khám.'],
            ],
            exercises: [
              choose('Er sieht sehr blass aus. Er ___ krank sein.', ['muss', 'soll', 'darf'], 'muss', { vi: 'Anh ấy trông rất xanh xao. Chắc chắn anh ấy bị ốm.' }),
              choose('Die Schmerzen ___ vom Stress kommen, aber ich bin nicht sicher.', ['könnten', 'müssen', 'sollen'], 'könnten', { vi: 'Cơn đau có thể do căng thẳng, nhưng tôi không chắc.' }),
              fill('Das Ergebnis {dürfte} morgen da sein.', 'Có lẽ ngày mai sẽ có kết quả.'),
            ],
          },
          {
            text_vi:
              '**sollen** = "nghe nói, người ta bảo": thông tin từ **người khác**, chưa kiểm chứng: Der neue Impfstoff **soll** sehr gut wirken. Khác với **wollen** = "tự nhận": Er **will** nie krank sein (anh ta tự nói vậy). Phỏng đoán về **quá khứ**: Modalverb + **Partizip II + haben/sein**: Er **muss** sich angesteckt **haben**.',
            table: 'Nghĩa | Hiện tại | Quá khứ\nchắc chắn | Er muss krank sein. | Er muss krank gewesen sein.\nnghe nói | Das soll helfen. | Das soll geholfen haben.\ntự nhận | Er will Arzt sein. | Er will alles gewusst haben.',
            examples: [['In der Stadt soll sich eine neue Grippe ausbreiten.', 'Nghe nói trong thành phố một loại cúm mới đang lây lan.']],
            exercises: [
              choose('Laut Zeitung ___ der Impfstoff sehr wirksam sein.', ['soll', 'muss', 'will'], 'soll', { vi: 'Theo báo, vắc-xin được cho là rất hiệu quả.' }),
              fill('Er hat Fieber. Er muss sich im Urlaub angesteckt {haben}.', 'Anh ấy sốt. Chắc chắn anh ấy bị lây khi đi nghỉ.'),
              transform('Viết lại với "soll" (nghe nói)', 'Man sagt, dass das Hausmittel gut hilft.', ['Das Hausmittel soll gut helfen.']),
            ],
          },
          {
            text_vi:
              'Ở phòng khám: bác sĩ hỏi **Anamnese** (tiền sử bệnh), làm **Blutuntersuchung** (đến lúc **nüchtern** = bụng đói), **Ultraschall**, chụp **Röntgenbild**. Kết quả là **Befund**; bình thường thì **unauffällig**. Kiểm tra kỹ: **auf Herz und Nieren prüfen**.',
            examples: [['Der Befund ist zum Glück unauffällig.', 'May mắn là kết quả khám bình thường.']],
            exercises: [
              fill('Zur Blutuntersuchung müssen Sie {nüchtern} kommen.', 'Đi xét nghiệm máu bạn phải nhịn ăn.'),
              translate('Có lẽ đó là một bệnh cúm.', ['Das dürfte eine Grippe sein.', 'Es dürfte eine Grippe sein.', 'Das ist vermutlich eine Grippe.']),
            ],
          },
        ],
        mixed: [
          choose('Der Arzt ___ sehr gut sein, sagen alle.', ['soll', 'muss', 'will'], 'soll', { vi: 'Ai cũng nói bác sĩ đó rất giỏi.' }),
          choose('Sie hat seit Tagen keinen Appetit. Sie ___ etwas Ernstes haben.', ['könnte', 'will', 'soll'], 'könnte', { vi: 'Cô ấy mấy ngày nay không thấy ngon miệng. Có thể cô ấy bị bệnh gì nghiêm trọng.' }),
          fill('Das {kann} nicht stimmen! Der Befund war doch unauffällig.', 'Không thể nào đúng! Kết quả khám bình thường mà.'),
          transform('Viết lại với "muss" (chắc chắn, quá khứ)', 'Ich bin sicher, dass er die Tabletten vergessen hat.', ['Er muss die Tabletten vergessen haben.']),
          order('Die Erkrankung / dürfte / erblich / sein.', 'Căn bệnh có lẽ là di truyền.'),
        ],
      },
      dialogue: {
        title_de: 'Was fehlt mir?',
        lines: [
          { speaker: 'A', de: 'Herr Doktor, ich bin seit Wochen müde und habe ständig Kopfschmerzen.', vi: 'Thưa bác sĩ, mấy tuần nay tôi mệt và đau đầu liên tục.' },
          { speaker: 'B', de: 'Wie viel schlafen Sie denn? Schlafmangel könnte eine Ursache sein.', vi: 'Anh ngủ bao nhiêu? Thiếu ngủ có thể là một nguyên nhân.' },
          { speaker: 'A', de: 'Höchstens fünf Stunden. Ich habe gerade viel Stress im Job.', vi: 'Nhiều nhất năm tiếng. Dạo này tôi căng thẳng nhiều ở chỗ làm.' },
          { speaker: 'B', de: 'Das dürfte die Abwehrkräfte schwächen. Gibt es in Ihrer Familie Erkrankungen?', vi: 'Điều đó có lẽ làm suy yếu sức đề kháng. Trong gia đình anh có ai mắc bệnh gì không?' },
          { speaker: 'A', de: 'Mein Vater hatte Diabetes. Ich soll also vorbelastet sein, hat mein alter Arzt gesagt.', vi: 'Bố tôi bị tiểu đường. Bác sĩ cũ của tôi bảo tôi có tiền sử gia đình.' },
          { speaker: 'B', de: 'Dann machen wir eine Blutuntersuchung. Kommen Sie morgen früh nüchtern.', vi: 'Vậy chúng ta làm xét nghiệm máu. Sáng mai anh đến khi chưa ăn gì nhé.' },
          { speaker: 'A', de: 'Und wann liegt der Befund vor?', vi: 'Thế khi nào có kết quả ạ?' },
          { speaker: 'B', de: 'Das Ergebnis dürfte in zwei Tagen da sein. Ich prüfe Sie auf Herz und Nieren.', vi: 'Kết quả chắc khoảng hai ngày nữa. Tôi sẽ kiểm tra anh thật kỹ.' },
          { speaker: 'A', de: 'Danke. Es muss ja nichts Schlimmes sein, oder?', vi: 'Cảm ơn bác sĩ. Chắc không có gì nghiêm trọng đâu nhỉ?' },
          { speaker: 'B', de: 'Wahrscheinlich nicht. Aber schlafen Sie mehr und gehen Sie öfter an die frische Luft.', vi: 'Có lẽ là không. Nhưng anh hãy ngủ nhiều hơn và ra ngoài hít thở không khí thường xuyên hơn.' },
        ],
        gloss: { 'Was fehlt mir?': 'Tôi bị làm sao?', Ursache: 'nguyên nhân', höchstens: 'nhiều nhất', Diabetes: 'bệnh tiểu đường', Schlimmes: 'điều tồi tệ' },
        questions: [
          mc('A bị làm sao mấy tuần nay?', ['mệt và đau đầu', 'đau bụng', 'ho và sốt'], 'mệt và đau đầu'),
          tf('A schläft jede Nacht acht Stunden.', false, { explain: 'Höchstens fünf Stunden.' }),
          mc('Bố của A bị bệnh gì?', ['tiểu đường', 'ung thư', 'trầm cảm'], 'tiểu đường'),
          tf('A soll morgen nüchtern zur Blutuntersuchung kommen.', true),
        ],
        dictation: [1, 5],
      },
      writing_prompt_vi:
        'Viết một đoạn (5–7 câu) về một người bạn có vẻ không khỏe: bạn đoán nguyên nhân gì và chắc đến đâu; dùng muss, dürfte, könnte và ít nhất một câu với soll (nghe nói).',
    },
    {
      title_vi: 'Ở bệnh viện',
      goal_vi: 'Nói về điều trị, phẫu thuật và hồi phục; phỏng đoán việc đã xảy ra bằng Futur II.',
      items: [
        'Pflegekraft', 'Pflegeheim', 'Klinik', 'Therapie', 'einliefern', 'lindern', 'genesen', 'sich unterziehen', 'überwachen',
        'stationär', 'ambulant', 'in Behandlung sein', 'zur Kur fahren', 'einen Rückfall erleiden',
        'Futur II: phỏng đoán việc đã xảy ra', 'Narkose', 'Intensivstation', 'Rehabilitation', 'verabreichen', 'sich schonen',
        'abklingen', 'sich verschlechtern', 'sich bessern', 'behindert', 'pflegebedürftig', 'sich in Behandlung begeben',
        'Wartezeit', 'auskurieren', 'auf dem Weg der Besserung',
      ],
      grammar: {
        point: 'futur-2',
        sections: [
          {
            text_vi:
              '**Futur II** = **werden** (chia, vị trí 2) + **Partizip II** + **haben/sein** (cuối câu). Cách dùng chính ở B2 là **đoán về việc đã xảy ra**: Er ist nicht gekommen. Er **wird** den Termin **vergessen haben** (chắc là anh ấy đã quên). Thường đi với **wohl, sicher, bestimmt**. haben hay sein theo Perfekt của động từ.',
            table: 'Perfekt | Futur II (phỏng đoán)\nEr hat den Termin vergessen. | Er wird den Termin vergessen haben.\nSie ist nach Hause gegangen. | Sie wird nach Hause gegangen sein.\nDie Operation hat lange gedauert. | Die Operation wird lange gedauert haben.',
            examples: [
              ['Sie ist nicht da. Sie wird wohl zur Kur gefahren sein.', 'Cô ấy không có ở đây. Có lẽ cô ấy đã đi an dưỡng.'],
              ['Der Arzt wird die Ergebnisse schon gesehen haben.', 'Chắc bác sĩ đã xem kết quả rồi.'],
            ],
            exercises: [
              choose('Er antwortet nicht. Er wird wohl ___.', ['eingeschlafen sein', 'eingeschlafen haben', 'einschlafen'], 'eingeschlafen sein', { vi: 'Anh ấy không trả lời. Có lẽ anh ấy đã ngủ thiếp đi.' }),
              fill('Die Pflegekraft wird die Tabletten schon verabreicht {haben}.', 'Chắc điều dưỡng đã cho uống thuốc rồi.'),
              transform('Viết thành phỏng đoán (Futur II)', 'Sie hat die Nachricht wohl nicht gelesen.', ['Sie wird die Nachricht wohl nicht gelesen haben.']),
            ],
          },
          {
            text_vi:
              'Futur II còn nói việc **sẽ hoàn thành trước một mốc** trong tương lai: **Bis** Ende des Monats **wird** er sich **erholt haben** (đến cuối tháng anh ấy sẽ đã hồi phục). Trong văn nói, người Đức hay thay bằng **Perfekt + trạng từ**: Bis Montag **hat** er sich erholt. Trong câu phụ: …, dass er den Termin vergessen haben **wird**.',
            examples: [['In drei Wochen wird die Wunde verheilt sein.', 'Ba tuần nữa vết thương sẽ lành.']],
            exercises: [
              choose('Bis Freitag ___ die Schwellung abgeklungen sein.', ['wird', 'ist', 'hat'], 'wird', { vi: 'Đến thứ Sáu vết sưng sẽ xẹp.' }),
              fill('Nach der Reha wird er wieder ganz genesen {sein}.', 'Sau phục hồi chức năng anh ấy sẽ bình phục hoàn toàn.'),
              order('Bis morgen / wird / sie / die Narkose / gut / überstanden / haben.', 'Đến mai cô ấy sẽ vượt qua cơn gây mê tốt.'),
            ],
          },
        ],
        mixed: [
          choose('Das Licht ist aus. Die Patienten ___ schon geschlafen haben.', ['werden', 'sind', 'haben'], 'werden', { vi: 'Đèn tắt rồi. Chắc bệnh nhân đã ngủ.' }),
          fill('Er war gestern nicht im Büro. Er wird sich krank gemeldet {haben}.', 'Hôm qua anh ấy không đến cơ quan. Chắc anh ấy đã báo ốm.'),
          choose('Bis nächsten Monat wird sie die Grippe ___ haben.', ['auskuriert', 'auskurieren', 'auskuriert sein'], 'auskuriert', { vi: 'Đến tháng sau cô ấy sẽ khỏi hẳn cúm.' }),
          transform('Viết thành phỏng đoán (Futur II)', 'Vermutlich ist der Krankenwagen schon angekommen.', [
            'Der Krankenwagen wird schon angekommen sein.',
            'Der Krankenwagen wird wohl schon angekommen sein.',
          ]),
          order('Sie / wird / sich / in der Klinik / gut / erholt / haben.', 'Chắc cô ấy đã hồi phục tốt ở bệnh viện.'),
        ],
      },
      dialogue: {
        title_de: 'Besuch im Krankenhaus',
        lines: [
          { speaker: 'A', de: 'Hallo Oma! Wie geht es dir nach der Operation?', vi: 'Chào bà! Sau ca mổ bà thấy thế nào ạ?' },
          { speaker: 'B', de: 'Schon besser. Die Narkose war anstrengend, aber die Schmerzen klingen langsam ab.', vi: 'Đỡ rồi cháu. Gây mê mệt lắm, nhưng cơn đau đang dần giảm.' },
          { speaker: 'A', de: 'Mama hat gesagt, du warst eine Nacht auf der Intensivstation.', vi: 'Mẹ bảo bà đã nằm một đêm ở khoa hồi sức tích cực.' },
          { speaker: 'B', de: 'Ja, sie mussten mich überwachen. Jetzt bin ich auf dem Weg der Besserung.', vi: 'Ừ, họ phải theo dõi bà. Giờ bà đang hồi phục rồi.' },
          { speaker: 'A', de: 'Wo ist denn deine Nachbarin? Das Bett ist leer.', vi: 'Thế bà cùng phòng đâu rồi ạ? Giường trống.' },
          { speaker: 'B', de: 'Sie wird wohl zur Untersuchung gebracht worden sein. Oder sie wird schon entlassen worden sein.', vi: 'Chắc bà ấy được đưa đi khám. Hoặc chắc đã được xuất viện rồi.' },
          { speaker: 'A', de: 'Und wie lange musst du noch stationär bleiben?', vi: 'Thế bà còn phải nằm viện bao lâu nữa ạ?' },
          { speaker: 'B', de: 'Noch eine Woche. Danach mache ich eine Rehabilitation. Bis Weihnachten werde ich mich hoffentlich erholt haben.', vi: 'Một tuần nữa. Sau đó bà đi phục hồi chức năng. Mong là đến Giáng sinh bà sẽ khỏe lại.' },
          { speaker: 'A', de: 'Bestimmt! Aber du musst dich schonen. Die Pflegekräfte passen gut auf dich auf.', vi: 'Chắc chắn rồi! Nhưng bà phải giữ sức. Các cô điều dưỡng sẽ chăm bà chu đáo.' },
        ],
        gloss: { Operation: 'ca phẫu thuật', 'gebracht worden': 'được đưa đi (bị động Perfekt)', entlassen: 'xuất viện, cho ra', 'passen … auf': 'trông nom (aufpassen)', erholt: 'hồi phục (sich erholen)' },
        questions: [
          mc('Bà đã nằm ở đâu một đêm?', ['khoa hồi sức tích cực', 'viện dưỡng lão', 'nhà riêng'], 'khoa hồi sức tích cực'),
          tf('Die Schmerzen der Oma werden immer stärker.', false, { explain: 'Die Schmerzen klingen langsam ab.' }),
          mc('Sau khi nằm viện, bà sẽ làm gì?', ['phục hồi chức năng', 'đi du lịch', 'mổ thêm'], 'phục hồi chức năng'),
          tf('Die Oma weiß genau, wo ihre Nachbarin ist.', false, { explain: 'Sie wird wohl … (Vermutung).' }),
        ],
        dictation: [1, 3],
      },
      writing_prompt_vi:
        'Viết tin nhắn hỏi thăm (5–7 câu) một người quen vừa phẫu thuật: hỏi tình hình, đoán xem họ đã trải qua gì, chúc mau khỏe; dùng Futur II ít nhất ba lần (wird … haben/sein).',
    },
    {
      title_vi: 'Phòng bệnh và hệ thống y tế',
      goal_vi: 'Bàn về phòng bệnh, y học chính thống và tự nhiên, hệ thống bảo hiểm; hiểu cụm zu + Partizip I trong văn bản y tế.',
      items: [
        'Medizin', 'Gesundheitswesen', 'Heilmittel', 'Wirkstoff', 'Wirkung', 'Vorbeugung', 'Früherkennung', 'Volkskrankheit',
        'Lebenserwartung', 'Organspende', 'Depression', 'Achtsamkeit', 'Rezeptpflicht', 'Zuzahlung', 'stärken', 'medizinisch',
        'ärztlich', 'wirksam', 'unheilbar', 'psychisch', 'vorbeugend', 'gesundheitsschädlich', 'zu + Partizip I (Gerundiv)',
        'Hausmittel', 'Schulmedizin', 'Naturheilkunde', 'Akupunktur', 'Pflegeversicherung', 'Ärztemangel', 'Volksgesundheit',
        'Bewegungsmangel', 'vorsorgen', 'abraten', 'zuraten', 'lebenswichtig', 'rezeptfrei', 'gesundheitsbewusst',
        'an die frische Luft gehen', 'Gesundheitsvorsorge', 'Lebensqualität',
      ],
      grammar: {
        point: 'gerundiv',
        sections: [
          {
            text_vi:
              'Văn bản y tế, hướng dẫn dùng thuốc hay dùng **zu + Partizip I** trước danh từ (Gerundiv) = "**phải / cần / có thể được** làm": die **zu beachtenden** Regeln = die Regeln, die **beachtet werden müssen**. Nó mang **đuôi tính từ** như mọi tính từ khác. Động từ tách: zu chen vào giữa: einnehmen → die **einzunehmenden** Tabletten.',
            table: 'Câu quan hệ | Gerundiv\ndie Regeln, die beachtet werden müssen | die zu beachtenden Regeln\ndie Tabletten, die eingenommen werden müssen | die einzunehmenden Tabletten\nein Risiko, das nicht unterschätzt werden darf | ein nicht zu unterschätzendes Risiko',
            examples: [
              ['Bitte lesen Sie die zu beachtenden Hinweise.', 'Vui lòng đọc các lưu ý cần tuân thủ.'],
              ['Bewegungsmangel ist ein nicht zu unterschätzendes Risiko.', 'Thiếu vận động là một rủi ro không thể đánh giá thấp.'],
            ],
            exercises: [
              choose('Das sind die ___ Tabletten.', ['einzunehmenden', 'zu einnehmenden', 'eingenommenen'], 'einzunehmenden', { vi: 'Đây là những viên thuốc cần uống.' }),
              fill('Es gibt noch viele zu {lösende} Probleme im Gesundheitswesen.', 'Ngành y tế còn nhiều vấn đề cần giải quyết.'),
              transform('Viết lại thành câu quan hệ', 'die zu beachtenden Regeln', ['die Regeln, die beachtet werden müssen', 'die Regeln, die man beachten muss']),
            ],
          },
          {
            text_vi:
              'Gerundiv có nguồn gốc từ **sein + zu + Infinitiv** (= phải/có thể được): Die Regeln **sind zu beachten** → die **zu beachtenden** Regeln. Khi đọc, tìm mạo từ rồi danh từ, phần giữa có "zu + -end" thì dịch "cần được…". Trong lời nói hằng ngày dùng câu quan hệ hoặc **müssen + bị động** cho tự nhiên.',
            examples: [['Die Nebenwirkungen sind ernst zu nehmen.', 'Các tác dụng phụ cần được xem xét nghiêm túc.']],
            exercises: [
              fill('Die Packungsbeilage ist genau {zu} lesen.', 'Tờ hướng dẫn trong hộp thuốc cần được đọc kỹ.'),
              choose('Die ___ Kosten sind sehr hoch.', ['zu erwartenden', 'zu erwarten', 'erwarteten zu'], 'zu erwartenden', { vi: 'Chi phí dự kiến rất cao.' }),
              translate('Đây là một vấn đề cần được giải quyết.', ['Das ist ein zu lösendes Problem.', 'Das ist ein Problem, das gelöst werden muss.']),
            ],
          },
        ],
        mixed: [
          choose('Die Ärztin erklärt die ___ Schritte.', ['zu beachtenden', 'zu beachten', 'beachtet'], 'zu beachtenden', { vi: 'Bác sĩ giải thích các bước cần lưu ý.' }),
          fill('Der Ärztemangel ist ein nicht zu {unterschätzendes} Problem.', 'Thiếu bác sĩ là một vấn đề không thể xem nhẹ.'),
          transform('Viết thành cụm Gerundiv', 'die Medikamente, die eingenommen werden müssen', ['die einzunehmenden Medikamente']),
          choose('Die Regeln sind genau ___.', ['einzuhalten', 'einhalten', 'zu einhalten'], 'einzuhalten', { vi: 'Các quy định cần được tuân thủ chính xác.' }),
          order('Das / ist / eine / nicht / zu ändernde / Tatsache.', 'Đó là một sự thật không thể thay đổi.'),
        ],
      },
      dialogue: {
        title_de: 'Schulmedizin oder Naturheilkunde?',
        lines: [
          { speaker: 'A', de: 'Ich habe ständig Rückenschmerzen. Meine Kollegin rät mir zu Akupunktur.', vi: 'Mình đau lưng liên tục. Đồng nghiệp khuyên mình đi châm cứu.' },
          { speaker: 'B', de: 'Warum nicht? Bei manchen Menschen soll das sehr wirksam sein.', vi: 'Sao lại không? Nghe nói với một số người nó rất hiệu quả.' },
          { speaker: 'A', de: 'Mein Arzt rät eher davon ab. Er glaubt nur an die Schulmedizin.', vi: 'Bác sĩ của mình thì khuyên không nên. Ông ấy chỉ tin y học chính thống.' },
          { speaker: 'B', de: 'Vielleicht ist die Ursache ja Bewegungsmangel. Das ist ein nicht zu unterschätzendes Problem.', vi: 'Có khi nguyên nhân là thiếu vận động. Đó là vấn đề không thể xem nhẹ.' },
          { speaker: 'A', de: 'Stimmt, ich sitze den ganzen Tag. Gibt es vorbeugende Übungen?', vi: 'Đúng thế, mình ngồi cả ngày. Có bài tập phòng ngừa nào không?' },
          { speaker: 'B', de: 'Ja, zum Beispiel Rückengymnastik. Die Krankenkasse bezahlt solche Kurse oft ohne Zuzahlung.', vi: 'Có, ví dụ thể dục cho lưng. Bảo hiểm y tế thường trả tiền những khóa này mà không cần đồng chi trả.' },
          { speaker: 'A', de: 'Das wusste ich nicht. Und was ist mit rezeptfreien Schmerzmitteln?', vi: 'Mình không biết đấy. Thế còn thuốc giảm đau không cần đơn thì sao?' },
          { speaker: 'B', de: 'Die lindern nur kurz. Die Packungsbeilage ist genau zu lesen, und man sollte sie nicht zu oft nehmen.', vi: 'Chúng chỉ đỡ đau tạm thời. Phải đọc kỹ tờ hướng dẫn và không nên uống quá thường xuyên.' },
          { speaker: 'A', de: 'Okay. Ich probiere zuerst die Gymnastik und gehe öfter an die frische Luft.', vi: 'Được. Mình sẽ thử tập thể dục trước và ra ngoài trời thường xuyên hơn.' },
        ],
        gloss: { Rückenschmerzen: 'đau lưng', Rückengymnastik: 'thể dục cho lưng', Krankenkasse: 'quỹ bảo hiểm y tế', Schmerzmitteln: 'thuốc giảm đau', Packungsbeilage: 'tờ hướng dẫn trong hộp thuốc', Übungen: 'bài tập' },
        questions: [
          mc('Đồng nghiệp khuyên A làm gì?', ['đi châm cứu', 'phẫu thuật', 'nghỉ việc'], 'đi châm cứu'),
          tf('Der Arzt von A findet Akupunktur gut.', false, { explain: 'Mein Arzt rät eher davon ab.' }),
          mc('Theo B, nguyên nhân có thể là gì?', ['thiếu vận động', 'thiếu ngủ', 'ăn quá nhiều'], 'thiếu vận động'),
          tf('Die Krankenkasse bezahlt Rückengymnastik oft ohne Zuzahlung.', true),
        ],
        dictation: [3, 5],
      },
      writing_prompt_vi:
        'Viết một bài ngắn (6–8 câu) so sánh y học chính thống và y học tự nhiên / mẹo dân gian ở Việt Nam: ưu điểm, rủi ro, ý kiến của bạn; dùng ít nhất hai cụm zu + Partizip I hoặc sein + zu + Infinitiv.',
    },
  ],
  test: {
    grammar: {
      'modal-vermutung': [
        choose('Er hat hohes Fieber. Er ___ krank sein.', ['muss', 'will', 'darf'], 'muss'),
        choose('Die neue Ärztin ___ sehr nett sein, habe ich gehört.', ['soll', 'muss', 'will'], 'soll'),
        fill('Das {dürfte} eine Erkältung sein.', 'Có lẽ đó là cảm lạnh.'),
        fill('Sie muss die Tabletten vergessen {haben}.', 'Chắc chắn cô ấy đã quên uống thuốc.'),
        order('Es / könnte / eine Allergie / sein.', 'Có thể đó là dị ứng.'),
        choose('Das ___ nicht sein! Ich war gestern noch gesund.', ['kann', 'soll', 'muss'], 'kann'),
      ],
      'futur-2': [
        choose('Er ist nicht gekommen. Er wird den Termin ___ haben.', ['vergessen', 'vergessen sein', 'vergisst'], 'vergessen'),
        fill('Sie wird wohl schon nach Hause gegangen {sein}.', 'Có lẽ cô ấy đã về nhà rồi.'),
        choose('Bis Montag ___ er sich erholt haben.', ['wird', 'hat', 'ist'], 'wird'),
        order('Der Arzt / wird / den Befund / schon / gelesen / haben.', 'Chắc bác sĩ đã đọc kết quả khám rồi.'),
        fill('In einer Woche wird die Erkältung abgeklungen {sein}.', 'Một tuần nữa cảm lạnh sẽ khỏi.'),
        choose('Die Patienten werden schon ___ sein.', ['eingeschlafen', 'einschlafen', 'eingeschlafen haben'], 'eingeschlafen'),
      ],
      gerundiv: [
        choose('Das sind die ___ Regeln.', ['zu beachtenden', 'zu beachten', 'beachtenden zu'], 'zu beachtenden'),
        fill('Die {einzunehmenden} Tabletten liegen auf dem Tisch. (einnehmen)', 'Những viên thuốc cần uống nằm trên bàn.'),
        choose('Die Packungsbeilage ist genau ___ lesen.', ['zu', 'um', 'zum'], 'zu'),
        fill('Das ist ein nicht zu {unterschätzendes} Risiko.', 'Đó là một rủi ro không thể xem nhẹ.'),
        order('Es gibt / viele / zu lösende / Probleme.', 'Có nhiều vấn đề cần giải quyết.'),
        choose('Die Hinweise sind unbedingt ___.', ['zu befolgen', 'befolgen', 'zu befolgend'], 'zu befolgen'),
      ],
    },
    reading: {
      title_de: 'Lange Wartezeiten beim Facharzt',
      text_de:
        'Wer in Deutschland einen Termin beim Facharzt braucht, muss oft lange warten. Für Kassenpatienten soll die Wartezeit im Durchschnitt mehr als einen Monat betragen. Besonders auf dem Land gibt es einen Ärztemangel, weil viele junge Mediziner lieber in Großstädten arbeiten. Experten sehen darin ein nicht zu unterschätzendes Problem: Erkrankungen werden später erkannt, und die Früherkennung leidet. Die Regierung plant deshalb Servicestellen, die Termine schneller vermitteln. Außerdem sollen mehr Studienplätze für Medizin geschaffen werden. Bis die neuen Ärzte fertig ausgebildet sind, werden allerdings noch viele Jahre vergangen sein.',
      gloss: {
        Facharzt: 'bác sĩ chuyên khoa',
        Kassenpatienten: 'bệnh nhân bảo hiểm công',
        'im Durchschnitt': 'trung bình',
        betragen: 'lên tới, là',
        Mediziner: 'bác sĩ, người hành nghề y',
        erkannt: 'được phát hiện (erkennen)',
        Servicestellen: 'điểm dịch vụ',
        vermitteln: 'làm trung gian, sắp xếp',
      },
      questions: [
        mc('Bệnh nhân bảo hiểm công chờ trung bình bao lâu?', ['hơn một tháng', 'một tuần', 'một năm'], 'hơn một tháng'),
        tf('Auf dem Land gibt es mehr Ärzte als in der Stadt.', false, { explain: 'Besonders auf dem Land gibt es einen Ärztemangel.' }),
        mc('Chính phủ có kế hoạch gì?', ['lập điểm dịch vụ sắp xếp lịch hẹn và tăng chỉ tiêu ngành y', 'đóng cửa bệnh viện nhỏ', 'tăng phí bảo hiểm'], 'lập điểm dịch vụ sắp xếp lịch hẹn và tăng chỉ tiêu ngành y'),
        tf('Das Problem wird laut Text schnell gelöst sein.', false, { explain: 'Bis die neuen Ärzte fertig ausgebildet sind, werden noch viele Jahre vergangen sein.' }),
      ],
    },
  },
});
