import { describe, expect, it } from 'vitest';
import { PACKS } from '@/data/packs';
import { STAGES } from '@/data/roadmap';
import { cardKindsFor } from '@/lib/items/cards';
import { clozeMarkerError, hasClozeMarker } from '@/lib/items/cloze';
import { dedupeKey } from '@/lib/items/dedupe';
import { normalizeDraft, validateDraft } from '@/lib/items/validate';
import { parsePack, parsePackLine } from '@/lib/packs/format';
import { roadmapPosition, stagePercent } from '@/lib/roadmap';

describe('parsePackLine', () => {
  it('đọc danh từ, động từ, cụm, ngữ pháp', () => {
    expect(parsePackLine('n|Tisch|der|-e|cái bàn|Der {Tisch} ist neu.|Cái bàn mới.|')).toMatchObject({
      type: 'word',
      pos: 'noun',
      german: 'Tisch',
      article: 'der',
      plural: '-e',
      grammar_note_vi: 'Danh từ giống đực (der), số nhiều: -e.',
    });
    expect(parsePackLine('v|wohnen|||sống|Ich {wohne} hier.|Tôi sống ở đây.|er wohnt, hat gewohnt')).toMatchObject({
      pos: 'verb',
      grammar_note_vi: 'er wohnt, hat gewohnt',
    });
    expect(parsePackLine('p|Guten Tag|||xin chào|{Guten Tag}!|Xin chào!|')).toMatchObject({ type: 'phrase' });
    expect(parsePackLine('g|mit + Dativ|||mit đi với Dativ|Ich fahre mit {dem} Bus.|Tôi đi xe buýt.|')).toMatchObject({
      type: 'grammar',
    });
  });

  it('báo lỗi dòng sai', () => {
    expect(parsePackLine('n|Tisch||-e|cái bàn|x|y|')).toMatch(/mạo từ/);
    expect(parsePackLine('v|gehen|der||đi|x|y|')).toMatch(/chỉ danh từ/);
    expect(parsePackLine('x|a|||b|c|d|')).toMatch(/loại/);
    expect(parsePackLine('n|Tisch|der')).toMatch(/8 cột/);
  });
});

describe('roadmapPosition', () => {
  const stages = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  it('chặng hiện tại là chặng đã mở chưa thuộc, chặng kế là chặng chưa mở', () => {
    const progress = new Map([
      ['a', { opened: true, cards: 10, learned: 9 }],
      ['b', { opened: true, cards: 10, learned: 3 }],
    ]);
    expect(roadmapPosition(stages, progress)).toEqual({ current: { id: 'b' }, next: { id: 'c' } });
    expect(roadmapPosition(stages, new Map())).toEqual({ current: { id: 'a' }, next: { id: 'a' } });
    expect(stagePercent({ opened: true, cards: 4, learned: 1 })).toBe(0.25);
  });
});

describe('dữ liệu lộ trình và gói từ (TCHT F10)', () => {
  const all = STAGES.filter((s) => PACKS[s.id]).map((s) => ({ stage: s, ...parsePack(PACKS[s.id]) }));

  it('mọi gói có trong lộ trình và đọc không lỗi', () => {
    for (const id of Object.keys(PACKS)) expect(STAGES.some((s) => s.id === id), id).toBe(true);
    for (const p of all) expect(p.errors, p.stage.id).toEqual([]);
  });

  it('100% mục hợp lệ, có câu ví dụ đánh dấu chỗ trống, đủ thẻ', () => {
    const problems: string[] = [];
    for (const p of all) {
      for (const raw of p.drafts) {
        const d = normalizeDraft(raw);
        const tag = `${p.stage.id} ${d.german}`;
        const issues = validateDraft(d);
        if (issues.length) problems.push(`${tag}: ${issues.map((i) => i.message).join('; ')}`);
        if (!hasClozeMarker(d.example_de) || clozeMarkerError(d.example_de)) problems.push(`${tag}: câu ví dụ thiếu {…}`);
        if (!d.example_vi || /[{}]/.test(d.example_vi)) problems.push(`${tag}: thiếu bản dịch hoặc bản dịch có {}`);
        if (d.pos === 'verb' && !d.grammar_note_vi) problems.push(`${tag}: động từ thiếu dạng chia`);
        const kinds = cardKindsFor(d);
        const expected = d.type === 'grammar' ? 1 : 3;
        if (kinds.length !== expected) problems.push(`${tag}: ${kinds.length} thẻ`);
      }
    }
    expect(problems).toEqual([]);
  });

  it('chỗ trống của danh từ, tính từ đúng là chính từ đó (không phải từ ghép khác)', () => {
    const fold = (t: string) =>
      t.toLowerCase().replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss');
    const bad: string[] = [];
    for (const p of all) {
      for (const d of p.drafts.map(normalizeDraft)) {
        if (d.type !== 'word' || (d.pos !== 'noun' && d.pos !== 'adjective')) continue;
        const answer = /{([^}]*)}/.exec(d.example_de)?.[1] ?? '';
        const a = fold(answer);
        const g = fold(d.german);
        if (!a.startsWith(g.slice(0, 2)) || a.length > g.length + 4) bad.push(`${p.stage.id} ${d.german} → {${answer}}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('không trùng trong và giữa các gói', () => {
    const seen = new Map<string, string>();
    const dups: string[] = [];
    for (const p of all) {
      for (const d of p.drafts.map(normalizeDraft)) {
        const key = dedupeKey(d);
        if (seen.has(key)) dups.push(`${d.german} (${seen.get(key)} và ${p.stage.id})`);
        else seen.set(key, p.stage.id);
      }
    }
    expect(dups).toEqual([]);
  });
});
