import { describe, expect, it } from 'vitest';
import { fill, tf } from '@/lib/course/define';
import { cleanExcerpt, exerciseExcerpt, parseReportTarget, reportLabel, reportsText, reportTarget } from '@/lib/course/report';
import type { Exercise } from '@/lib/course/types';

describe('mã chỗ báo', () => {
  it('tạo và đọc lại', () => {
    const t = reportTarget('word', 'a1-01', 'Tisch');
    expect(t).toBe('word:a1-01:Tisch');
    expect(parseReportTarget(t)).toEqual({ kind: 'word', parts: ['a1-01', 'Tisch'] });
    expect(parseReportTarget(reportTarget('exercise', 'a1-01-1.g0.2'))).toEqual({ kind: 'exercise', parts: ['a1-01-1.g0.2'] });
  });

  it('khóa mục có khoảng trắng, dấu, umlaut vẫn đọc được', () => {
    const t = reportTarget('word', 'b1-03', 'Liên từ hai vế: nicht nur … sondern auch');
    expect(parseReportTarget(t)?.parts[0]).toBe('b1-03');
  });

  it('từ chối loại lạ, thiếu phần, quá dài', () => {
    expect(parseReportTarget('foo:x')).toBeNull();
    expect(parseReportTarget('word')).toBeNull();
    expect(parseReportTarget('word::x')).toBeNull();
    expect(parseReportTarget(`exercise:${'x'.repeat(400)}`)).toBeNull();
  });

  it('nhãn tiếng Việt', () => {
    expect(reportLabel('grammar:a1-01-1:0')).toBe('Giải thích ngữ pháp · bài A1-01-1, đoạn 1');
    expect(reportLabel('dialogue:a1-01-2:4')).toBe('Hội thoại · bài A1-01-2, dòng 5');
    expect(reportLabel('word:a2-03:Tisch')).toBe('Từ · chặng A2-03');
    expect(reportLabel('test:a1-02.r.1')).toBe('Câu kiểm tra · a1-02.r.1');
  });
});

describe('văn bản sao chép', () => {
  it('mỗi chỗ một dòng, ghi chú khi có', () => {
    const text = reportsText([
      { target: 'exercise:a1-01-1.g0.2', excerpt: 'Ich bin Minh.', note: ' sai dịch\n nghĩa ', created_at: '' },
      { target: 'word:a1-01:Tisch', excerpt: 'der Tisch = cái bàn', note: null, created_at: '' },
    ]);
    expect(text).toBe('exercise:a1-01-1.g0.2 · Ich bin Minh. · Ghi chú: sai dịch nghĩa\nword:a1-01:Tisch · der Tisch = cái bàn');
  });

  it('gộp khoảng trắng và cắt độ dài nội dung', () => {
    expect(cleanExcerpt('  a\n\n b  ')).toBe('a b');
    expect(cleanExcerpt('x'.repeat(2000))).toHaveLength(1000);
  });
});

describe('exerciseExcerpt', () => {
  it('fill kèm đáp án và dịch', () => {
    const e = { ...fill('Ich {bin} Minh.', 'Tôi là Minh.', { alt: ['heiße'] }), id: 'a1-01-1.g0.0' } as Exercise;
    expect(exerciseExcerpt(e)).toBe('Ich {bin} Minh. · Đáp án: bin / heiße · Tôi là Minh.');
  });
  it('câu hỏi richtig/falsch', () => {
    const e = { ...tf('Anna kommt aus Wien.', false), id: 'x' } as Exercise;
    expect(exerciseExcerpt(e)).toBe('Anna kommt aus Wien. · Lựa chọn: richtig / falsch · Đáp án: falsch');
  });
});
