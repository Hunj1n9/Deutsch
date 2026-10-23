'use client';

import { insertAt } from '@/lib/text';

const KEYS = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'] as const;

/**
 * Hàng phím chèn nhanh, đặt ngay trên mọi ô gõ tiếng Đức (CLAUDE.md).
 * Chèn tại con trỏ của ô có id = targetId mà không làm mất focus; chạy được với input có kiểm soát của React.
 */
export function UmlautBar({ targetId }: { targetId: string }) {
  function insert(char: string) {
    const el = document.getElementById(targetId);
    if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) return;
    const start = el.selectionStart ?? el.value.length;
    const end = el.selectionEnd ?? start;
    const next = insertAt(el.value, start, end, char);
    // Gán qua setter gốc rồi phát sự kiện input để onChange của React nhận giá trị mới.
    const proto = el instanceof HTMLInputElement ? HTMLInputElement.prototype : HTMLTextAreaElement.prototype;
    Object.getOwnPropertyDescriptor(proto, 'value')?.set?.call(el, next.value);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.setSelectionRange(next.caret, next.caret);
    el.focus();
  }

  return (
    <div className="mb-2 flex gap-1.5" role="group" aria-label="Chèn ký tự tiếng Đức">
      {KEYS.map((k) => (
        <button
          key={k}
          type="button"
          tabIndex={-1}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => insert(k)}
          className="h-10 flex-1 rounded-xl bg-surface text-[17px] font-medium outline outline-1 outline-line active:bg-primary active:text-on-primary"
        >
          {k}
        </button>
      ))}
    </div>
  );
}
