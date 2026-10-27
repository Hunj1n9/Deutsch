import { describe, expect, it } from 'vitest';
import {
  dueNotification,
  goalMet,
  lessonGoal,
  reminderMessage,
  remainingUnits,
  shortfall,
  shortfallText,
  studyDaysLeft,
  type ReminderSettings,
  type StageUnits,
} from '@/lib/daily-goal';
import { localTime } from '@/lib/time';

const stages: StageUnits[] = [
  { stageId: 'a1-01', level: 'A1', lessons: [{ id: 'a', done: true }, { id: 'b', done: true }], passed: true },
  { stageId: 'a1-02', level: 'A1', lessons: [{ id: 'c', done: true }, { id: 'd', done: false }], passed: false },
  { stageId: 'a2-01', level: 'A2', lessons: [{ id: 'e', done: false }, { id: 'f', done: false }, { id: 'g', done: false }], passed: false },
  { stageId: 'b1-01', level: 'B1', lessons: [{ id: 'h', done: false }], passed: false },
];

describe('remainingUnits', () => {
  it('đếm bài chưa xong + kiểm tra chưa qua tới hết cấp thi', () => {
    expect(remainingUnits(stages, 'A1')).toBe(2); // bài d + kiểm tra a1-02
    expect(remainingUnits(stages, 'A2')).toBe(6); // + 3 bài + kiểm tra a2-01
    expect(remainingUnits(stages, 'B2')).toBe(8);
  });

  it('chặng đã qua kiểm tra thì không tính, kể cả khi còn bài chưa học (bỏ qua chặng)', () => {
    expect(remainingUnits([{ stageId: 'x', level: 'A1', lessons: [{ id: 'a', done: false }], passed: true }], 'A1')).toBe(0);
  });
});

describe('studyDaysLeft', () => {
  it('học 7 ngày/tuần: số ngày tới trước ngày thi', () => {
    expect(studyDaysLeft('2026-10-27', '2026-11-06', 7)).toBe(10);
  });
  it('học 6 ngày/tuần thì bớt ngày nghỉ', () => {
    expect(studyDaysLeft('2026-10-27', '2026-11-10', 6)).toBe(12);
  });
  it('ngày thi hôm nay hoặc đã qua → 0; còn 1 ngày → ít nhất 1', () => {
    expect(studyDaysLeft('2026-10-27', '2026-10-27', 6)).toBe(0);
    expect(studyDaysLeft('2026-10-27', '2026-10-01', 6)).toBe(0);
    expect(studyDaysLeft('2026-10-27', '2026-10-28', 1)).toBe(1);
  });
});

describe('lessonGoal', () => {
  it('chỉ tiêu = phần còn lại ÷ ngày học còn lại, làm tròn lên', () => {
    const g = lessonGoal(25, 0, '2026-10-27', '2026-11-06', 7)!;
    expect(g).toMatchObject({ target: 3, studyDays: 10, heavy: false });
  });

  it('không giảm trong ngày khi đã xong bài', () => {
    const before = lessonGoal(25, 0, '2026-10-27', '2026-11-06', 7)!;
    const after = lessonGoal(23, 2, '2026-10-27', '2026-11-06', 7)!;
    expect(after.target).toBe(before.target);
  });

  it('quá 4 phần/ngày thì báo khó kịp', () => {
    expect(lessonGoal(50, 0, '2026-10-27', '2026-11-06', 7)!.heavy).toBe(true);
  });

  it('chưa đặt ngày thi hoặc ngày thi đã qua → null', () => {
    expect(lessonGoal(10, 0, '2026-10-27', null, 6)).toBeNull();
    expect(lessonGoal(10, 0, '2026-10-27', '2026-10-20', 6)).toBeNull();
  });
});

describe('shortfall', () => {
  const lesson = lessonGoal(25, 1, '2026-10-27', '2026-11-06', 7);
  it('tính phần còn thiếu và đạt khi đủ cả ba', () => {
    const s = { lesson, dueCards: 12, minutesToday: 40.4, minutesTarget: 120 };
    expect(shortfall(s)).toEqual({ units: 2, cards: 12, minutes: 80 });
    expect(shortfallText(shortfall(s))).toBe('2 bài mới · 12 thẻ đến hạn · 80 phút');
    expect(goalMet(s)).toBe(false);
    expect(goalMet({ lesson: { ...lesson!, doneToday: 3 }, dueCards: 0, minutesToday: 125, minutesTarget: 120 })).toBe(true);
  });
  it('không có ngày thi thì chỉ xét thẻ và phút', () => {
    expect(goalMet({ lesson: null, dueCards: 0, minutesToday: 120, minutesTarget: 120 })).toBe(true);
  });
});

describe('reminderMessage', () => {
  it('nhắc lần hai ghi phần còn thiếu và đếm ngược', () => {
    const m = reminderMessage('nag', { lesson: null, dueCards: 5, minutesToday: 100, minutesTarget: 120 }, 'Goethe B2', 30);
    expect(m.body).toContain('Goethe B2 còn 30 ngày');
    expect(m.body).toContain('5 thẻ đến hạn · 20 phút');
  });
});

describe('dueNotification', () => {
  const r: ReminderSettings = { enabled: true, reminderTime: '19:00:00', nagTime: '21:30', lastReminderDate: null, lastNagDate: null };
  const today = '2026-10-27';

  it('gửi nhắc khi tới giờ, trong cửa sổ 60 phút', () => {
    expect(dueNotification(r, today, '18:59', false)).toBeNull();
    expect(dueNotification(r, today, '19:00', false)).toBe('reminder');
    expect(dueNotification(r, today, '19:59', false)).toBe('reminder');
    expect(dueNotification(r, today, '20:00', false)).toBeNull();
  });

  it('đã gửi hôm nay thì thôi; tắt nhắc thì không gửi', () => {
    expect(dueNotification({ ...r, lastReminderDate: today }, today, '19:15', false)).toBeNull();
    expect(dueNotification({ ...r, enabled: false }, today, '19:15', false)).toBeNull();
  });

  it('nhắc lần hai chỉ khi chưa đạt', () => {
    expect(dueNotification(r, today, '21:30', false)).toBe('nag');
    expect(dueNotification(r, today, '21:30', true)).toBeNull();
    expect(dueNotification({ ...r, lastNagDate: today }, today, '21:45', false)).toBeNull();
    expect(dueNotification({ ...r, nagTime: null }, today, '21:30', false)).toBeNull();
  });
});

describe('localTime', () => {
  it('giờ Việt Nam', () => {
    expect(localTime(new Date('2026-10-27T12:05:00Z'))).toBe('19:05');
    expect(localTime(new Date('2026-10-27T17:30:00Z'))).toBe('00:30');
  });
});
