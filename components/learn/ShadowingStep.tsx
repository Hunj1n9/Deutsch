'use client';

import { useState } from 'react';
import type { DialogueLine } from '@/lib/course/types';
import { canSpeak, speakGerman, stopSpeaking } from '../review/speech';
import { noticeBoxClass, primaryClass, secondaryClass } from '../ui';
import { useRecorder } from './useRecorder';

const MAX_SECONDS = 15;

/**
 * Phần (d) Nói theo của bước Hội thoại (SPEC F15): nghe mẫu, tự ghi âm, nghe lại cạnh giọng mẫu. Không chấm, không lưu.
 */
export function ShadowingStep({ title, lines, onDone }: { title: string; lines: DialogueLine[]; onDone: () => void }) {
  const [index, setIndex] = useState(0);
  const rec = useRecorder(MAX_SECONDS);
  const line = lines[index];
  const last = index + 1 >= lines.length;

  function next() {
    stopSpeaking();
    rec.stop();
    rec.discard();
    if (last) onDone();
    else setIndex(index + 1);
  }

  function finish() {
    stopSpeaking();
    rec.stop();
    onDone();
  }

  const blocked = !rec.supported || rec.state === 'denied' || rec.state === 'error';

  return (
    <div className="flex flex-col gap-3">
      <p className="px-1 text-[13px] font-semibold text-muted">
        {title} · nói theo {index + 1}/{lines.length}
      </p>
      <section className="scribble rounded-block bg-pastel-sky p-5">
        <p className="text-[13px] font-semibold uppercase tracking-[.06em] opacity-70">Nói theo · {line.speaker}</p>
        <p className="mt-2 text-[22px] font-semibold leading-snug" lang="de">
          {line.de}
        </p>
        <p className="mt-1 text-[15px] opacity-80">{line.vi}</p>
      </section>

      <p className="px-1 text-[14px] text-muted">Nghe mẫu, rồi ghi âm và đọc theo. Nghe lại để so với giọng mẫu; ghi lại bao nhiêu lần cũng được.</p>

      <div className="flex gap-2">
        <button type="button" onClick={() => speakGerman(line.de, 0.85)} disabled={!canSpeak()} className={`${secondaryClass} flex-1`}>
          ▶ Nghe mẫu
        </button>
        {!blocked &&
          (rec.state === 'recording' ? (
            <button type="button" onClick={rec.stop} className={`${secondaryClass} flex-1 bg-pastel-pink`}>
              ■ Dừng ({rec.seconds}s)
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                stopSpeaking();
                void rec.start();
              }}
              className={`${secondaryClass} flex-1`}
            >
              ● {rec.state === 'ready' ? 'Ghi lại' : 'Ghi âm'}
            </button>
          ))}
      </div>

      {rec.state === 'ready' && (
        <div className="flex gap-2">
          <button type="button" onClick={() => rec.play()} className={`${secondaryClass} flex-1`}>
            ▶ Nghe lại mình
          </button>
          <button type="button" onClick={() => speakGerman(line.de, 0.85, () => rec.play())} className={`${secondaryClass} flex-1`}>
            ▶ Mẫu rồi mình
          </button>
        </div>
      )}

      {blocked && (
        <p className={noticeBoxClass} role="status">
          {!rec.supported
            ? 'Trình duyệt này không ghi âm được. Bạn vẫn có thể nghe mẫu và đọc to theo.'
            : rec.state === 'denied'
              ? 'Chưa có quyền dùng micro. Bật quyền micro cho trang trong cài đặt trình duyệt, hoặc chỉ nghe mẫu và đọc to theo.'
              : 'Không mở được micro. Bạn vẫn có thể nghe mẫu và đọc to theo.'}
        </p>
      )}

      <button type="button" onClick={next} className={primaryClass}>
        {last ? 'Xong, sang Vận dụng' : 'Dòng tiếp'}
      </button>
      {!last && (
        <button type="button" onClick={finish} className={`${secondaryClass} self-center`}>
          Bỏ qua phần nói theo
        </button>
      )}
      <p className="px-1 text-[12px] text-muted">Bản ghi chỉ nằm trên máy này trong lúc làm bài, không được gửi đi hay lưu lại.</p>
    </div>
  );
}
