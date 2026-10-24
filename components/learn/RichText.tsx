import { Fragment, type ReactNode } from 'react';

/**
 * Hiển thị định dạng hạn chế của giải thích ngữ pháp (SPEC F11): đoạn văn, **đậm**, danh sách `- `.
 * Không dùng thư viện markdown.
 */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? <b key={i}>{part.slice(2, -2)}</b> : <Fragment key={i}>{part}</Fragment>,
  );
}

export function RichText({ text }: { text: string }) {
  return (
    <div className="flex flex-col gap-2 text-[16px] leading-relaxed">
      {text.split(/\n{2,}/).map((block, i) => {
        const lines = block.split('\n');
        if (lines.every((l) => l.startsWith('- '))) {
          return (
            <ul key={i} className="flex list-disc flex-col gap-1 pl-5">
              {lines.map((l, j) => (
                <li key={j}>{inline(l.slice(2))}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{inline(block)}</p>;
      })}
    </div>
  );
}

/** Bảng: các dòng `a | b | c`, dòng đầu là tiêu đề. */
export function SimpleTable({ table }: { table: string }) {
  const [head, ...rows] = table.split('\n').map((r) => r.split('|').map((c) => c.trim()));
  return (
    <div className="overflow-x-auto rounded-[16px] bg-surface">
      <table className="w-full text-left text-[15px]">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i} className="border-b border-line px-3 py-2 text-[13px] font-semibold text-muted">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-line last:border-0">
              {r.map((c, j) => (
                <td key={j} className={`px-3 py-2 ${j > 0 ? 'font-semibold' : ''}`} lang="de">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
