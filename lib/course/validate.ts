import { stripCloze } from '@/lib/items/cloze';
import type { ItemDraft } from '@/lib/items/types';
import { RULE_KEY_MAX, RULE_KEY_RE } from '@/lib/errors';
import type { Exercise, Lesson, StageLessons } from './types';

/**
 * Kiểm dữ liệu bài học (TCHT F11, F12). Trả danh sách vấn đề; rỗng là hợp lệ. Hàm thuần, chạy trong test.
 */
export const GRAMMAR_EXERCISES = { min: 8, max: 14 } as const;
export const SECTION_EXERCISES = { min: 2, max: 4 } as const;
export const MIXED_EXERCISES = { min: 4, max: 6 } as const;
export const QUESTIONS = { min: 3, max: 5 } as const;
export const DICTATION_LINES = 2;
export const TEST_POOL_MIN = 5;
export const READING_POOL_MIN = 3;
export const DIALOGUE_KNOWN_RATIO = 0.9;
const TEST_KINDS: Exercise['kind'][] = ['fill', 'choose', 'order'];

export function itemKey(d: Pick<ItemDraft, 'german'>): string {
  return d.german;
}

function exerciseProblems(e: Exercise): string[] {
  const out: string[] = [];
  switch (e.kind) {
    case 'fill': {
      const n = (e.text.match(/\{[^{}]+\}/g) ?? []).length;
      if (n !== 1) out.push(`${e.id}: cần đúng một {…}, có ${n}`);
      if (e.answers.some((a) => !a.trim())) out.push(`${e.id}: đáp án rỗng`);
      break;
    }
    case 'order':
      if (e.chunks.length < 2) out.push(`${e.id}: cần ít nhất 2 mảnh`);
      if (e.answers[0] !== e.chunks.join(' ')) out.push(`${e.id}: mảnh ghép lại không khớp đáp án`);
      break;
    case 'choose':
      if (e.text.split('___').length !== 2) out.push(`${e.id}: cần đúng một ___`);
    // falls through
    case 'question':
      if (new Set(e.options).size !== e.options.length) out.push(`${e.id}: lựa chọn trùng`);
      if (e.options.length < 2 || e.options.length > 4) out.push(`${e.id}: cần 2–4 lựa chọn`);
      if (!e.options.includes(e.answer)) out.push(`${e.id}: đáp án không nằm trong lựa chọn`);
      break;
    case 'transform':
    case 'translate':
    case 'listen':
      if (e.answers.length === 0 || e.answers.some((a) => !a.trim())) out.push(`${e.id}: thiếu đáp án`);
      break;
  }
  if (/[{}]/.test(JSON.stringify('answers' in e ? e.answers : []))) out.push(`${e.id}: đáp án chứa ngoặc {}`);
  return out;
}

/** Tách từ để đo độ phủ từ vựng: chữ thường, bỏ dấu câu và số. */
export function tokens(text: string): string[] {
  return (
    stripCloze(text)
      .toLowerCase()
      .match(/[a-zäöüß]+(?:'[a-z]+)?/g) ?? []
  );
}

function lessonTexts(lesson: Lesson, drafts: ReadonlyMap<string, ItemDraft>): string[] {
  const texts: string[] = [];
  for (const key of lesson.items) {
    const d = drafts.get(key);
    if (d) texts.push(d.german, d.example_de, d.article ?? '', d.grammar_note_vi.match(/[a-zäöüß ,]+/gi)?.join(' ') ?? '');
  }
  for (const s of lesson.grammar.sections) {
    texts.push(...s.examples.map(([de]) => de));
    for (const e of s.exercises) texts.push(...exerciseTexts(e));
  }
  for (const e of lesson.grammar.mixed) texts.push(...exerciseTexts(e));
  return texts;
}

function exerciseTexts(e: Exercise): string[] {
  switch (e.kind) {
    case 'fill':
    case 'choose':
    case 'question':
      return [e.text, ...('answers' in e ? e.answers : []), ...('options' in e ? e.options : [])];
    case 'transform':
      return [e.text, ...e.answers];
    default:
      return e.answers;
  }
}

export function validateStageLessons(
  stage: StageLessons,
  pack: readonly ItemDraft[],
  stageGrammarCount: number,
  /** Từ đã biết từ các chặng trước (để đo độ phủ hội thoại). */
  knownBefore: ReadonlySet<string> = new Set(),
): { problems: string[]; known: Set<string> } {
  const problems: string[] = [];
  const drafts = new Map(pack.map((d) => [itemKey(d), d]));
  if (drafts.size !== pack.length) problems.push('gói có hai mục cùng khóa german');

  // Mục của gói thuộc đúng một bài.
  const owner = new Map<string, string>();
  for (const l of stage.lessons) {
    for (const key of l.items) {
      if (!drafts.has(key)) problems.push(`${l.id}: mục "${key}" không có trong gói`);
      if (owner.has(key)) problems.push(`${l.id}: mục "${key}" đã thuộc ${owner.get(key)}`);
      owner.set(key, l.id);
    }
  }
  for (const key of drafts.keys()) if (!owner.has(key)) problems.push(`mục "${key}" chưa thuộc bài nào`);

  // Điểm ngữ pháp: đúng số của chặng, mỗi điểm đúng một bài, khóa lỗi hợp lệ.
  if (stage.points.length !== stageGrammarCount) problems.push(`cần ${stageGrammarCount} điểm ngữ pháp, có ${stage.points.length}`);
  for (const p of stage.points) {
    const n = stage.lessons.filter((l) => l.grammar.point === p.key).length;
    if (n !== 1) problems.push(`điểm ${p.key}: cần đúng một bài, có ${n}`);
    if (!RULE_KEY_RE.test(p.rule_key) || p.rule_key.length > RULE_KEY_MAX) problems.push(`điểm ${p.key}: rule_key sai định dạng`);
    const pool = stage.test.grammar[p.key] ?? [];
    if (pool.length < TEST_POOL_MIN) problems.push(`điểm ${p.key}: kho kiểm tra cần ≥ ${TEST_POOL_MIN} câu, có ${pool.length}`);
    for (const e of pool) {
      if (!TEST_KINDS.includes(e.kind)) problems.push(`${e.id}: kiểm tra chỉ dùng fill/choose/order`);
      problems.push(...exerciseProblems(e));
    }
  }
  for (const l of stage.lessons) {
    if (!stage.points.some((p) => p.key === l.grammar.point)) problems.push(`${l.id}: điểm ngữ pháp "${l.grammar.point}" không có`);
  }

  // Từng bài.
  const known = new Set(knownBefore);
  for (const l of stage.lessons) {
    const sections = l.grammar.sections;
    if (sections.length < 1 || sections.length > 3) problems.push(`${l.id}: cần 1–3 đoạn giải thích`);
    for (const [i, s] of sections.entries()) {
      const n = s.exercises.length;
      if (n < SECTION_EXERCISES.min || n > SECTION_EXERCISES.max) problems.push(`${l.id} đoạn ${i + 1}: cần 2–4 bài tập, có ${n}`);
      const words = s.text_vi.split(/\s+/).filter(Boolean).length;
      if (words > 120) problems.push(`${l.id} đoạn ${i + 1}: giải thích dài ${words} từ (> 120)`);
    }
    const mixed = l.grammar.mixed.length;
    if (mixed < MIXED_EXERCISES.min || mixed > MIXED_EXERCISES.max) problems.push(`${l.id}: cần 4–6 bài tập trộn, có ${mixed}`);
    const total = sections.reduce((n, s) => n + s.exercises.length, 0) + mixed;
    if (total < GRAMMAR_EXERCISES.min || total > GRAMMAR_EXERCISES.max) problems.push(`${l.id}: cần 8–14 bài tập ngữ pháp, có ${total}`);
    for (const e of [...sections.flatMap((s) => s.exercises), ...l.grammar.mixed]) problems.push(...exerciseProblems(e));

    const q = l.dialogue.questions;
    if (q.length < QUESTIONS.min || q.length > QUESTIONS.max) problems.push(`${l.id}: cần 3–5 câu hỏi hiểu, có ${q.length}`);
    for (const e of q) {
      if (e.kind !== 'question') problems.push(`${e.id}: câu hỏi hiểu phải là kiểu question`);
      problems.push(...exerciseProblems(e));
    }
    const dict = l.dialogue.dictation;
    if (dict.length !== DICTATION_LINES || dict.some((i) => !l.dialogue.lines[i])) problems.push(`${l.id}: cần 2 dòng chép chính tả hợp lệ`);
    const lines = l.dialogue.lines.length;
    if (lines < 6 || lines > 12) problems.push(`${l.id}: hội thoại cần 6–12 dòng, có ${lines}`);
    if (!l.writing_prompt_vi.trim() || !l.goal_vi.trim()) problems.push(`${l.id}: thiếu mục tiêu hoặc đề viết`);

    // Độ phủ: từ trong hội thoại phải đã gặp ở bài này hoặc trước, hoặc có chú nghĩa.
    for (const t of lessonTexts(l, drafts)) for (const w of tokens(t)) known.add(w);
    const gloss = new Set(Object.keys(l.dialogue.gloss).flatMap(tokens));
    const words = l.dialogue.lines.flatMap((line) => tokens(line.de));
    const unknown = words.filter((w) => !known.has(w) && !gloss.has(w));
    if (words.length > 0 && 1 - unknown.length / words.length < DIALOGUE_KNOWN_RATIO) {
      problems.push(`${l.id}: hội thoại có ${unknown.length}/${words.length} từ chưa học: ${[...new Set(unknown)].join(', ')}`);
    }
    for (const line of l.dialogue.lines) for (const w of tokens(line.de)) known.add(w);
    for (const w of gloss) known.add(w);
  }

  const reading = stage.test.reading;
  if (reading.questions.length < READING_POOL_MIN) problems.push(`bài đọc kiểm tra cần ≥ ${READING_POOL_MIN} câu hỏi`);
  for (const e of reading.questions) {
    if (e.kind !== 'question') problems.push(`${e.id}: câu hỏi đọc phải là kiểu question`);
    problems.push(...exerciseProblems(e));
  }
  const readingWords = reading.text_de.split(/\s+/).filter(Boolean).length;
  if (readingWords < 80 || readingWords > 150) problems.push(`bài đọc kiểm tra dài ${readingWords} từ (cần 80–150)`);

  return { problems, known };
}
