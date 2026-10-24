import type { IconName } from './Icon';

export type NavItem = { href: string; label: string; icon: IconName };

/** Thanh dưới: đúng 5 mục theo SPEC mục 7 (từ M11: Học thay cho Thêm). */
export const BOTTOM_NAV: readonly NavItem[] = [
  { href: '/', label: 'Hôm nay', icon: 'home' },
  { href: '/learn', label: 'Học', icon: 'learn' },
  { href: '/review', label: 'Ôn', icon: 'cards' },
  { href: '/write', label: 'Viết', icon: 'pen' },
  { href: '/tutor', label: 'Gia sư', icon: 'chat' },
];

/** Các trang còn lại, vào từ menu. */
export const MENU_ITEMS: readonly NavItem[] = [
  { href: '/add', label: 'Thêm mục', icon: 'plus' },
  { href: '/items', label: 'Danh sách mục', icon: 'list' },
  { href: '/errors', label: 'Sổ lỗi', icon: 'book' },
  { href: '/write/history', label: 'Lịch sử bài viết', icon: 'clock' },
  { href: '/progress', label: 'Tiến độ', icon: 'chart' },
  { href: '/settings', label: 'Cài đặt', icon: 'settings' },
];
