import { describe, expect, it } from 'vitest';
import { letterHint, wordChoices } from '@/lib/course/words';

const w = (key: string, vietnamese = key) => ({ key, vietnamese });

describe('wordChoices', () => {
  const group = [w('a'), w('b'), w('c'), w('d'), w('e')];
  const lesson = [...group, w('f'), w('g')];

  it('có đáp án đúng, 4 phương án khác nhau, nhiễu lấy trong nhóm trước', () => {
    const out = wordChoices(group[0], group, lesson, 7);
    expect(out).toHaveLength(4);
    expect(out.map((x) => x.key)).toContain('a');
    expect(new Set(out.map((x) => x.key)).size).toBe(4);
    expect(out.every((x) => group.includes(x))).toBe(true);
  });

  it('nhóm ít từ thì lấy thêm từ khác của bài', () => {
    const small = [w('x'), w('y')];
    const out = wordChoices(small[0], small, [...lesson, ...small], 3);
    expect(out).toHaveLength(4);
    expect(out.map((x) => x.key)).toEqual(expect.arrayContaining(['x', 'y']));
  });

  it('bỏ từ trùng nghĩa với đáp án', () => {
    const g = [w('k1', 'nhà'), w('k2', ' Nhà '), w('k3', 'cửa')];
    expect(wordChoices(g[0], g, g, 1).map((x) => x.key).sort()).toEqual(['k1', 'k3']);
  });

  it('bài chỉ có một từ thì chỉ có đáp án đúng; cùng hạt giống cho cùng thứ tự', () => {
    expect(wordChoices(w('z'), [w('z')], [w('z')], 1)).toHaveLength(1);
    expect(wordChoices(group[1], group, lesson, 42)).toEqual(wordChoices(group[1], group, lesson, 42));
  });
});

describe('letterHint', () => {
  it('giữ chữ đầu mỗi từ, che phần còn lại, giữ dấu không phải chữ', () => {
    expect(letterHint('Tisch')).toBe('T _ _ _ _');
    expect(letterHint('sich freuen')).toBe('s _ _ _   f _ _ _ _ _');
    expect(letterHint('E-Mail')).toBe('E - _ _ _ _');
    expect(letterHint('(sich) waschen')).toBe('( s _ _ _ )   w _ _ _ _ _ _');
    expect(letterHint('Äpfel')).toBe('Ä _ _ _ _');
  });
});
