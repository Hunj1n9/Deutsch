'use client';

import { useState } from 'react';
import { UmlautBar } from './UmlautBar';
import { germanFieldClass, labelClass, textareaClass } from './ui';

/**
 * Ô gõ tiếng Đức kèm hàng phím ä ö ü ß Ä Ö Ü (CLAUDE.md). Hàng phím hiện khi ô đang được chọn,
 * để form nhiều ô tiếng Đức không bị rối.
 */
export function GermanField({
  id,
  label,
  value,
  onChange,
  placeholder,
  multiline = false,
  error,
  hint,
  autoFocus,
  onEnter,
  alwaysShowBar = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  multiline?: boolean;
  error?: string;
  hint?: string;
  autoFocus?: boolean;
  onEnter?: () => void;
  alwaysShowBar?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const common = {
    id,
    value,
    lang: 'de',
    placeholder,
    autoFocus,
    autoCapitalize: 'off',
    autoCorrect: 'off',
    spellCheck: false,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `${id}-error` : undefined,
    onFocus: () => setFocused(true),
    // Trễ một nhịp: trên điện thoại chạm hàng phím có thể làm ô mất focus trước khi phím kịp chèn.
    onBlur: () => setTimeout(() => setFocused(document.activeElement?.id === id), 150),
  } as const;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {(focused || alwaysShowBar) && <UmlautBar targetId={id} />}
      {multiline ? (
        <textarea
          {...common}
          rows={2}
          onChange={(e) => onChange(e.target.value)}
          className={`${textareaClass} text-[18px] ${error ? 'outline-bad' : ''}`}
        />
      ) : (
        <input
          {...common}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && onEnter) {
              e.preventDefault();
              onEnter();
            }
          }}
          className={`${germanFieldClass} ${error ? 'outline-bad' : ''}`}
        />
      )}
      {hint && !error && <p className="px-1 text-[13px] text-muted">{hint}</p>}
      {error && (
        <p id={`${id}-error`} className="px-1 text-[13px] font-semibold text-bad">
          {error}
        </p>
      )}
    </div>
  );
}
