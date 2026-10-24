/**
 * Biểu đồ cột một chuỗi theo tuần (Sổ lỗi, Tiến độ). Một chuỗi nên không cần chú giải: tiêu đề nói tên chuỗi.
 * Cột mảnh, bo 4px ở đầu dữ liệu, chạm cột hiện giá trị (title), kèm bảng số cho trình đọc màn hình.
 */
export function WeeklyBars({
  title,
  labels,
  values,
  unit = '',
  format = (v: number) => String(v),
}: {
  title: string;
  labels: string[];
  values: number[];
  unit?: string;
  format?: (v: number) => string;
}) {
  const max = Math.max(1, ...values);
  const last = values.length - 1;
  return (
    <figure className="rounded-[20px] bg-surface p-4">
      <figcaption className="text-[13px] font-semibold text-muted">{title}</figcaption>
      <div className="mt-6 flex h-28 items-end gap-[2px] border-b border-line" aria-hidden>
        {values.map((v, i) => (
          <div key={i} className="group relative flex h-full flex-1 items-end justify-center" title={`${labels[i]}: ${format(v)}${unit}`}>
            <div
              className={`w-full max-w-6 rounded-t-[4px] ${i === last ? 'bg-ink' : 'bg-ink/45'}`}
              style={{ height: `${(v / max) * 100}%`, minHeight: v > 0 ? 2 : 0 }}
            />
            {i === last && (
              <span className="absolute -top-5 right-0 whitespace-nowrap text-[12px] font-semibold text-ink">
                {format(v)}
                {unit}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-1 flex gap-[2px]" aria-hidden>
        {labels.map((l, i) => (
          <span key={i} className="flex-1 text-center text-[10px] text-muted">
            {i % 2 === last % 2 ? l : ''}
          </span>
        ))}
      </div>
      <table className="sr-only">
        <caption>{title}</caption>
        <tbody>
          {labels.map((l, i) => (
            <tr key={i}>
              <th scope="row">{l}</th>
              <td>
                {format(values[i])}
                {unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
