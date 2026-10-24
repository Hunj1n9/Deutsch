import { findLesson, findLessonExercise, grammarPoint } from './catalog';
import { fullSentence } from './grade';
import type { Exercise } from './types';

/** Mô tả bài tập cho gia sư: đề và đáp án mẫu (gia sư được dặn gợi ý trước khi đưa đáp án). */
function describe(e: Exercise): string {
  switch (e.kind) {
    case 'fill':
      return `điền chỗ trống "${e.text.replace(/\{[^{}]+\}/, '___')}" (${e.vi}); đáp án mẫu: ${fullSentence(e)}`;
    case 'choose':
      return `chọn "${e.text}" trong ${e.options.join(' / ')}; đáp án: ${e.answer}`;
    case 'order':
      return `sắp xếp câu "${e.vi}"; đáp án mẫu: ${e.answers[0]}`;
    case 'transform':
      return `${e.instruction_vi}: "${e.text}"; đáp án mẫu: ${e.answers[0]}`;
    case 'translate':
      return `dịch "${e.vi}"; đáp án mẫu: ${e.answers[0]}`;
    case 'listen':
      return `nghe chép; câu: ${e.answers[0]}`;
    case 'question':
      return `câu hỏi hiểu "${e.text}"; đáp án: ${e.answer}`;
  }
}

/** Ngữ cảnh bài học gửi kèm gia sư (F6 + F11). Null nếu không tìm thấy bài. */
export function lessonTutorContext(lessonId: string, exerciseId: string | null) {
  const found = findLesson(lessonId);
  if (!found) return null;
  const point = grammarPoint(found.stage, found.lesson.grammar.point);
  const ex = exerciseId ? findLessonExercise(found.lesson, exerciseId) : null;
  return {
    title: `${lessonId.toUpperCase()} ${found.lesson.title_vi}`,
    grammar: point?.title_vi ?? '',
    exercise: ex ? describe(ex) : null,
  };
}
