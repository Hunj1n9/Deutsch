import type { IconName } from './Icon';

/** Màu biểu tượng của mục (lớp text-*), để mỗi khu vực có một màu dễ nhận như app học ngôn ngữ. */
export type NavTone = 'text-orange' | 'text-green' | 'text-gold' | 'text-purple' | 'text-blue' | 'text-red' | 'text-muted';

export type NavItem = { href: string; label: string; icon: IconName; tone: NavTone };

/** Thanh dưới: đúng 5 mục theo SPEC mục 7 (từ M11: Học thay cho Thêm). */
export const BOTTOM_NAV: readonly NavItem[] = [
  { href: '/', label: 'Hôm nay', icon: 'home', tone: 'text-orange' },
  { href: '/learn', label: 'Học', icon: 'learn', tone: 'text-green' },
  { href: '/review', label: 'Ôn', icon: 'cards', tone: 'text-gold' },
  { href: '/write', label: 'Viết', icon: 'pen', tone: 'text-purple' },
  { href: '/tutor', label: 'Gia sư', icon: 'chat', tone: 'text-blue' },
];

/** Các trang còn lại, vào từ menu. */
export const MENU_ITEMS: readonly NavItem[] = [
  { href: '/add', label: 'Thêm mục', icon: 'plus', tone: 'text-blue' },
  { href: '/items', label: 'Danh sách mục', icon: 'list', tone: 'text-green' },
  { href: '/errors', label: 'Sổ lỗi', icon: 'book', tone: 'text-red' },
  { href: '/write/history', label: 'Lịch sử bài viết', icon: 'clock', tone: 'text-purple' },
  { href: '/progress', label: 'Tiến độ', icon: 'chart', tone: 'text-orange' },
  { href: '/settings', label: 'Cài đặt', icon: 'settings', tone: 'text-muted' },
];
