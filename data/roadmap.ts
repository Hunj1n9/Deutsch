import type { Level } from '@/lib/items/types';

/**
 * Lộ trình A1 → B2 (F10). Chủ đề và điểm ngữ pháp theo khung CEFR, tự soạn; không theo cấu trúc giáo trình nào.
 * Giờ mục tiêu mỗi chặng = giờ của cấp (mốc F8) chia đều cho số chặng.
 */
export type Stage = {
  id: string;
  level: Exclude<Level, 'C1'>;
  order: number;
  title_vi: string;
  title_de: string;
  grammar: string[];
};

const A1: Omit<Stage, 'level' | 'id'>[] = [
  { order: 1, title_vi: 'Chào hỏi và giới thiệu', title_de: 'Hallo!', grammar: ['Đại từ nhân xưng', 'Động từ sein', 'Câu hỏi W (wer, wie, woher)'] },
  { order: 2, title_vi: 'Gia đình và bạn bè', title_de: 'Familie und Freunde', grammar: ['Động từ haben', 'Mạo từ sở hữu mein/dein', 'Chia động từ có quy tắc'] },
  { order: 3, title_vi: 'Số, giờ và ngày tháng', title_de: 'Zahlen und Zeit', grammar: ['Số đếm', 'Hỏi giờ', 'Giới từ thời gian am, um, im'] },
  { order: 4, title_vi: 'Nhà ở và đồ đạc', title_de: 'Wohnen', grammar: ['Mạo từ der/die/das', 'ein/kein', 'Số nhiều danh từ'] },
  { order: 5, title_vi: 'Ăn uống và mua sắm', title_de: 'Essen und Einkaufen', grammar: ['Cách Akkusativ', 'möchten', 'Câu hỏi có/không'] },
  { order: 6, title_vi: 'Một ngày của tôi', title_de: 'Mein Tag', grammar: ['Động từ tách', 'Khung câu', 'Trạng từ tần suất'] },
  { order: 7, title_vi: 'Thời gian rảnh và sở thích', title_de: 'Freizeit', grammar: ['gern/lieber/am liebsten', 'Động từ khuyết thiếu können, wollen', 'Phủ định nicht/kein'] },
  { order: 8, title_vi: 'Trong thành phố', title_de: 'In der Stadt', grammar: ['Giới từ chỉ nơi chốn + Dativ', 'Mệnh lệnh cách', 'Hỏi đường'] },
  { order: 9, title_vi: 'Giao thông và du lịch', title_de: 'Unterwegs', grammar: ['mit + Dativ', 'Perfekt với haben', 'Perfekt với sein'] },
  { order: 10, title_vi: 'Cơ thể và sức khỏe', title_de: 'Gesundheit', grammar: ['müssen, dürfen, sollen', 'Mệnh lệnh với Sie', 'Đại từ sở hữu ở Akkusativ'] },
  { order: 11, title_vi: 'Quần áo và thời tiết', title_de: 'Kleidung und Wetter', grammar: ['Tính từ làm vị ngữ', 'Đại từ nhân xưng Akkusativ', 'welch-/dies-'] },
  { order: 12, title_vi: 'Công việc và học tập', title_de: 'Arbeit und Lernen', grammar: ['Präteritum của sein, haben', 'Perfekt (ôn tập)', 'Liên từ und, aber, oder, denn'] },
];

const A2: Omit<Stage, 'level' | 'id'>[] = [
  { order: 1, title_vi: 'Kể chuyện đã qua', title_de: 'Erinnerungen', grammar: ['Perfekt: động từ bất quy tắc', 'Perfekt của động từ tách', 'Trạng từ thời gian'] },
  { order: 2, title_vi: 'Nhà cửa và chuyển nhà', title_de: 'Umziehen', grammar: ['Giới từ hai cách (wo? / wohin?)', 'legen/liegen, stellen/stehen', 'hängen'] },
  { order: 3, title_vi: 'Ở nhà hàng', title_de: 'Im Restaurant', grammar: ['Đuôi tính từ sau mạo từ xác định', 'Câu với weil', 'Vị trí động từ trong câu phụ'] },
  { order: 4, title_vi: 'Mua sắm và thời trang', title_de: 'Mode und Einkauf', grammar: ['Đuôi tính từ sau mạo từ không xác định', 'So sánh hơn', 'als / wie'] },
  { order: 5, title_vi: 'Sức khỏe và lối sống', title_de: 'Gesund leben', grammar: ['Động từ phản thân', 'Đại từ phản thân Dativ', 'deshalb'] },
  { order: 6, title_vi: 'Nghề nghiệp', title_de: 'Berufe', grammar: ['Câu với dass', 'Präteritum của động từ khuyết thiếu', 'Đuôi tính từ không mạo từ'] },
  { order: 7, title_vi: 'Học tập và đào tạo', title_de: 'Schule und Ausbildung', grammar: ['Câu với wenn', 'Câu hỏi gián tiếp ob', 'Câu hỏi gián tiếp với từ để hỏi'] },
  { order: 8, title_vi: 'Du lịch và kỳ nghỉ', title_de: 'Reisen', grammar: ['Giới từ nơi chốn: woher / wohin / wo', 'Trạng từ chỉ hướng', 'Số thứ tự và ngày tháng'] },
  { order: 9, title_vi: 'Lễ hội và quà tặng', title_de: 'Feste und Geschenke', grammar: ['Động từ đi với Dativ', 'Hai tân ngữ Dativ + Akkusativ', 'Đại từ ở Dativ'] },
  { order: 10, title_vi: 'Truyền thông và công nghệ', title_de: 'Medien', grammar: ['Động từ đi với giới từ', 'Từ để hỏi wo(r)- và da(r)-', 'zu + Infinitiv'] },
  { order: 11, title_vi: 'Quan hệ và cảm xúc', title_de: 'Gefühle und Beziehungen', grammar: ['Konjunktiv II: würde, hätte, wäre', 'Lời khuyên với sollte', 'trotzdem'] },
  { order: 12, title_vi: 'Môi trường và thời tiết', title_de: 'Natur und Umwelt', grammar: ['So sánh nhất', 'Câu bị động hiện tại (giới thiệu)', 'Mệnh đề quan hệ (giới thiệu)'] },
];

const B1: Omit<Stage, 'level' | 'id'>[] = [
  { order: 1, title_vi: 'Tiểu sử và ký ức', title_de: 'Lebenswege', grammar: ['Präteritum (động từ thường dùng)', 'als / wenn', 'Câu với nachdem + Plusquamperfekt'] },
  { order: 2, title_vi: 'Sống chung', title_de: 'Zusammenleben', grammar: ['Mệnh đề quan hệ Nominativ, Akkusativ', 'Mệnh đề quan hệ Dativ', 'Mệnh đề quan hệ với giới từ'] },
  { order: 3, title_vi: 'Trường học và học tập', title_de: 'Bildung', grammar: ['obwohl', 'trotzdem / deshalb', 'Liên từ hai vế: nicht nur … sondern auch'] },
  { order: 4, title_vi: 'Đi làm và ứng tuyển', title_de: 'Bewerbung', grammar: ['Konjunktiv II lịch sự', 'Infinitiv mit zu', 'um … zu / damit'] },
  { order: 5, title_vi: 'Tiền bạc và tiêu dùng', title_de: 'Geld und Konsum', grammar: ['Bị động Präsens', 'Bị động với động từ khuyết thiếu', 'Đuôi tính từ (ôn tập)'] },
  { order: 6, title_vi: 'Sức khỏe và y tế', title_de: 'Gesundheit', grammar: ['Danh từ n-Deklination', 'je … desto', 'Phân từ làm tính từ'] },
  { order: 7, title_vi: 'Du lịch và văn hóa', title_de: 'Reisen und Kultur', grammar: ['Plusquamperfekt', 'bevor / während', 'Giới từ Genitiv: während, wegen, trotz'] },
  { order: 8, title_vi: 'Báo chí và tin tức', title_de: 'Nachrichten', grammar: ['Bị động Präteritum, Perfekt', 'Genitiv', 'Câu hỏi gián tiếp (ôn tập)'] },
  { order: 9, title_vi: 'Thiên nhiên và môi trường', title_de: 'Umwelt', grammar: ['Futur I', 'lassen', 'Câu điều kiện không thật (Konjunktiv II hiện tại)'] },
  { order: 10, title_vi: 'Xã hội và chính trị', title_de: 'Gesellschaft', grammar: ['Konjunktiv II quá khứ', 'sowohl … als auch, weder … noch', 'entweder … oder'] },
  { order: 11, title_vi: 'Nghệ thuật và giải trí', title_de: 'Kunst und Unterhaltung', grammar: ['Danh từ hóa động từ và tính từ', 'statt … zu / ohne … zu', 'falls'] },
  { order: 12, title_vi: 'Khoa học và kỹ thuật', title_de: 'Technik', grammar: ['Động từ có giới từ (mở rộng)', 'seit / bis', 'sodass'] },
  { order: 13, title_vi: 'Thảo luận và ý kiến', title_de: 'Diskussion', grammar: ['Nêu ý kiến: meiner Meinung nach', 'Đồng ý / phản đối', 'zwar … aber'] },
];

const B2: Omit<Stage, 'level' | 'id'>[] = [
  { order: 1, title_vi: 'Tính cách và quan hệ', title_de: 'Persönlichkeit', grammar: ['Cụm danh từ – động từ (Nomen-Verb-Verbindungen)', 'Tính từ đi với giới từ', 'Đuôi tính từ nâng cao'] },
  { order: 2, title_vi: 'Thế giới việc làm', title_de: 'Arbeitswelt', grammar: ['Bị động với động từ khuyết thiếu (quá khứ)', 'Bị động trạng thái (sein + Partizip II)', 'Thay thế bị động: sich lassen, -bar'] },
  { order: 3, title_vi: 'Đại học và nghiên cứu', title_de: 'Studium', grammar: ['Danh từ hóa (Nominalstil)', 'Giới từ Genitiv trong văn viết', 'Liên từ indem, sodass'] },
  { order: 4, title_vi: 'Kinh tế và tiêu dùng', title_de: 'Wirtschaft', grammar: ['Phân từ làm định ngữ mở rộng', 'Câu quan hệ với wer, was, wo', 'je nachdem'] },
  { order: 5, title_vi: 'Môi trường và năng lượng', title_de: 'Energie und Umwelt', grammar: ['Konjunktiv I – lời nói gián tiếp', 'Liên từ nối ý: dennoch, folglich', 'Câu điều kiện không có wenn'] },
  { order: 6, title_vi: 'Y học và sức khỏe', title_de: 'Medizin', grammar: ['Động từ khuyết thiếu chủ quan (Vermutung)', 'Futur II', 'zu + Partizip I (Gerundiv)'] },
  { order: 7, title_vi: 'Truyền thông số', title_de: 'Digitale Welt', grammar: ['Giới từ đi Genitiv: mithilfe, anhand', 'Câu với als ob', 'Mệnh đề nhượng bộ: auch wenn'] },
  { order: 8, title_vi: 'Di cư và văn hóa', title_de: 'Migration', grammar: ['Liên từ chỉ đối lập: während, wohingegen', 'Câu so sánh không thật', 'Đại từ bất định'] },
  { order: 9, title_vi: 'Khoa học và phát minh', title_de: 'Wissenschaft', grammar: ['Giới từ aufgrund, infolge, angesichts', 'Bị động thay thế man', 'Tường thuật số liệu'] },
  { order: 10, title_vi: 'Chính trị và xã hội', title_de: 'Politik', grammar: ['Lập luận ủng hộ / phản bác', 'Liên từ insofern, sofern', 'Konjunktiv I (ôn tập)'] },
  { order: 11, title_vi: 'Văn học và nghệ thuật', title_de: 'Literatur', grammar: ['Präteritum trong văn kể', 'Đảo ngữ nhấn mạnh', 'Hạt từ tình thái (doch, ja, eben)'] },
  { order: 12, title_vi: 'Pháp luật và quyền', title_de: 'Recht', grammar: ['Văn phong hành chính', 'Cụm danh từ – động từ (mở rộng)', 'Mệnh đề quan hệ với Genitiv (dessen, deren)'] },
  { order: 13, title_vi: 'Thuyết trình và lập luận', title_de: 'Präsentieren', grammar: ['Mẫu câu thuyết trình', 'Tóm tắt và trích dẫn', 'Liên từ cấu trúc bài: zunächst, ferner, abschließend'] },
];

function build(level: Stage['level'], stages: Omit<Stage, 'level' | 'id'>[]): Stage[] {
  return stages.map((s) => ({ ...s, level, id: `${level.toLowerCase()}-${String(s.order).padStart(2, '0')}` }));
}

export const STAGES: readonly Stage[] = [...build('A1', A1), ...build('A2', A2), ...build('B1', B1), ...build('B2', B2)];

/** Giờ học của từng cấp (khoảng cách giữa các mốc ở F8). */
export const LEVEL_STUDY_HOURS: Record<Stage['level'], number> = { A1: 105, A2: 100, B1: 170, B2: 150 };

export function stageHours(stage: Stage): number {
  const count = STAGES.filter((s) => s.level === stage.level).length;
  return Math.round(LEVEL_STUDY_HOURS[stage.level] / count);
}
