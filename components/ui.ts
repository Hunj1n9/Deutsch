// Lớp Tailwind dùng chung theo design/DESIGN.md (phong cách Brilliant). Hiệu ứng bấm nằm ở app/globals.css.

export const fieldClass =
  'h-13 w-full rounded-xl bg-surface px-[16px] text-[17px] font-medium outline-[1.5px] outline-line transition-[outline-color] placeholder:font-normal placeholder:text-muted/80';
/** Ô gõ tiếng Đức: chữ 20px (≥ 16px để iOS không tự phóng to). */
export const germanFieldClass = `${fieldClass} text-[20px]`;
export const textareaClass =
  'w-full rounded-xl bg-surface px-[16px] py-3 text-[17px] leading-relaxed outline-[1.5px] outline-line transition-[outline-color] placeholder:text-muted/80';
export const labelClass = 'ml-1 text-[13px] font-semibold text-muted';
export const primaryClass =
  'flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-[16px] font-bold text-on-primary';
export const secondaryClass =
  'btn-3d flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-surface px-4 text-[15px] font-semibold text-ink outline-[1.5px] outline-line disabled:opacity-50';
export const chipClass = (active: boolean) =>
  `h-10 rounded-full px-4 text-[14px] font-semibold transition-colors ${
    active ? 'bg-primary text-on-primary' : 'bg-surface text-muted outline-[1.5px] outline-line'
  }`;
export const errorBoxClass = 'rounded-xl border-[1.5px] border-bad/25 bg-bad-soft p-4 text-[15px] leading-relaxed';
export const noticeBoxClass = 'rounded-xl border-[1.5px] border-blue/20 bg-pastel-sky p-4 text-[15px] leading-relaxed';
/** Nhãn nhỏ ở đầu khối. */
export const blockLabelClass = 'text-[13px] font-semibold text-muted';
