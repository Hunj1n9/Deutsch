// Lớp Tailwind dùng chung theo design/DESIGN.md.

export const fieldClass =
  'h-13 w-full rounded-[20px] bg-surface px-[16px] text-[17px] outline-2 outline-line focus:outline-ink';
/** Ô gõ tiếng Đức: chữ 20px (≥ 16px để iOS không tự phóng to). */
export const germanFieldClass = `${fieldClass} text-[20px]`;
export const textareaClass =
  'w-full rounded-[20px] bg-surface px-[16px] py-3 text-[17px] leading-relaxed outline-2 outline-line focus:outline-ink';
export const labelClass = 'ml-1 text-[13px] font-semibold text-muted';
export const primaryClass =
  'flex h-13 w-full items-center justify-center gap-2 rounded-full bg-primary text-[16px] font-semibold text-on-primary disabled:opacity-50';
export const secondaryClass =
  'flex h-11 items-center justify-center gap-2 rounded-full bg-surface px-4 text-[15px] font-semibold outline-1 outline-line disabled:opacity-50';
export const chipClass = (active: boolean) =>
  `h-10 rounded-full px-4 text-[14px] font-semibold ${active ? 'bg-primary text-on-primary' : 'bg-surface text-muted'}`;
export const errorBoxClass = 'rounded-[20px] bg-pastel-pink p-4 text-[15px] leading-relaxed';
export const noticeBoxClass = 'rounded-[20px] bg-pastel-sage p-4 text-[15px] leading-relaxed';
