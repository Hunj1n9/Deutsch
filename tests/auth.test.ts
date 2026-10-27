import { describe, expect, it } from 'vitest';
import {
  isAllowedEmail,
  isPublicPath,
  normalizeOtp,
  SESSION_MAX_AGE_SECONDS,
} from '@/lib/auth';

describe('isAllowedEmail', () => {
  const allowed = 'hoc@example.com';

  it('chấp nhận đúng email được phép', () => {
    expect(isAllowedEmail('hoc@example.com', allowed)).toBe(true);
  });

  it('không phân biệt hoa thường và khoảng trắng', () => {
    expect(isAllowedEmail('  Hoc@Example.COM ', allowed)).toBe(true);
    expect(isAllowedEmail('hoc@example.com', ' HOC@example.com ')).toBe(true);
  });

  it('từ chối email khác', () => {
    expect(isAllowedEmail('nguoi-khac@example.com', allowed)).toBe(false);
    expect(isAllowedEmail('hoc@example.com.evil.io', allowed)).toBe(false);
    expect(isAllowedEmail('xhoc@example.com', allowed)).toBe(false);
  });

  it('từ chối khi thiếu email', () => {
    expect(isAllowedEmail(undefined, allowed)).toBe(false);
    expect(isAllowedEmail(null, allowed)).toBe(false);
    expect(isAllowedEmail('', allowed)).toBe(false);
  });

  it('đóng mặc định khi chưa cấu hình ALLOWED_EMAIL', () => {
    expect(isAllowedEmail('hoc@example.com', undefined)).toBe(false);
    expect(isAllowedEmail('hoc@example.com', '')).toBe(false);
    expect(isAllowedEmail('', '')).toBe(false);
    expect(isAllowedEmail('  ', '  ')).toBe(false);
  });
});

describe('isPublicPath', () => {
  it('chỉ mở /login, /auth/confirm và API nhắc học (tự kiểm khóa)', () => {
    expect(isPublicPath('/login')).toBe(true);
    expect(isPublicPath('/login/')).toBe(true);
    expect(isPublicPath('/auth/confirm')).toBe(true);
    expect(isPublicPath('/api/cron/remind')).toBe(true);
    expect(isPublicPath('/api/cron')).toBe(false);
    expect(isPublicPath('/api/backup')).toBe(false);
  });

  it('mọi route khác đều bị chặn', () => {
    for (const p of ['/', '/review', '/add', '/items', '/errors', '/write', '/write/history', '/tutor', '/progress', '/settings']) {
      expect(isPublicPath(p)).toBe(false);
    }
  });

  it('không bị lừa bởi tiền tố', () => {
    expect(isPublicPath('/login-admin')).toBe(false);
    expect(isPublicPath('/loginx')).toBe(false);
    expect(isPublicPath('/auth/confirm/../settings')).toBe(false);
    expect(isPublicPath('/auth')).toBe(false);
  });
});

describe('normalizeOtp', () => {
  it('nhận mã 6 số, bỏ khoảng trắng', () => {
    expect(normalizeOtp('123456')).toBe('123456');
    expect(normalizeOtp(' 123 456 ')).toBe('123456');
  });

  it('từ chối mã sai dạng', () => {
    expect(normalizeOtp('12345')).toBeNull();
    expect(normalizeOtp('12a456')).toBeNull();
    expect(normalizeOtp('')).toBeNull();
  });
});

describe('SESSION_MAX_AGE_SECONDS', () => {
  it('cookie phiên sống ít nhất 30 ngày (TCHT F1)', () => {
    expect(SESSION_MAX_AGE_SECONDS).toBeGreaterThanOrEqual(30 * 24 * 60 * 60);
  });
});
