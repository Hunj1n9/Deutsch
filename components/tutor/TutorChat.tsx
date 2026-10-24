'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { saveTutorErrorAction } from '@/app/(app)/tutor/actions';
import { parseTutorReply } from '@/lib/ai/p3-tutor';
import { GermanField } from '../GermanField';
import { errorBoxClass, fieldClass, primaryClass } from '../ui';

export type ThreadOption = { id: string; title: string | null; created_at: string };
export type ChatMessage = { id: string; role: 'user' | 'assistant'; content: string };

/** Có chữ cái đặc trưng hoặc từ tiếng Đức hay gặp: hiện nút "Lưu lỗi này". */
const GERMAN_HINT = /[äöüßÄÖÜ]|\b(ich|du|er|sie|wir|ihr|der|die|das|den|dem|ein|eine|ist|bin|habe|nicht|mit|und)\b/i;

export function TutorChat({
  threads,
  threadId: initialThreadId,
  initialMessages,
  cardId,
  cardLabel,
  lessonRef = null,
}: {
  threads: ThreadOption[];
  threadId: string | null;
  initialMessages: ChatMessage[];
  cardId: string | null;
  cardLabel: string | null;
  /** Mở từ bài học: bài và bài tập đang hỏi (SPEC F11). */
  lessonRef?: { lessonId: string; exerciseId: string | null } | null;
}) {
  const router = useRouter();
  const [threadId, setThreadId] = useState(initialThreadId);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' });
  }, [messages]);

  async function send() {
    const message = input.trim();
    if (!message || streaming) return;
    setError(null);
    setInput('');
    setStreaming(true);
    const userMsg: ChatMessage = { id: `u-${Date.now()}`, role: 'user', content: message };
    const replyId = `a-${Date.now()}`;
    setMessages((m) => [...m, userMsg, { id: replyId, role: 'assistant', content: '' }]);

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ threadId, message, cardId, lesson: threadId ? null : lessonRef }),
      });
      if (!res.ok || !res.body) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? 'Không gọi được gia sư.');
      }
      const newThread = res.headers.get('x-thread-id');
      if (newThread && newThread !== threadId) {
        setThreadId(newThread);
        window.history.replaceState(null, '', `/tutor?thread=${newThread}`);
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((m) => m.map((x) => (x.id === replyId ? { ...x, content: x.content + chunk } : x)));
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Không gọi được gia sư.');
      setInput(message);
      setMessages((m) => m.filter((x) => x.id !== replyId && x.id !== userMsg.id));
    } finally {
      setStreaming(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <select
          aria-label="Cuộc trò chuyện"
          value={threadId ?? ''}
          onChange={(e) => router.push(e.target.value ? `/tutor?thread=${e.target.value}` : '/tutor')}
          className={`${fieldClass} h-11 min-w-0 flex-1 text-[15px]`}
        >
          <option value="">Cuộc trò chuyện mới</option>
          {threads.map((t) => (
            <option key={t.id} value={t.id}>
              {t.title ?? 'Không tên'}
            </option>
          ))}
        </select>
        {threadId && (
          <Link href="/tutor" className="flex h-11 items-center rounded-full bg-primary px-4 text-[14px] font-semibold text-on-primary">
            Mới
          </Link>
        )}
      </div>

      {cardLabel && !threadId && (
        <p className="rounded-[20px] bg-pastel-yellow p-3 text-[14px]">
          {lessonRef ? 'Hỏi về bài: ' : 'Hỏi về thẻ: '}<span className="font-semibold" lang="de">{cardLabel}</span>
        </p>
      )}

      {messages.length === 0 && (
        <div className="scribble rounded-block bg-pastel-sage p-5 text-[15px] leading-relaxed">
          Hỏi bất cứ điều gì về tiếng Đức, bằng tiếng Việt. Ví dụ: “Tại sao ‘Ich gebe dem Mann den Schlüssel’ dùng dem?”, hoặc dán câu
          tiếng Đức của bạn để nhờ sửa.
        </div>
      )}

      <ol className="flex flex-col gap-3">
        {messages.map((m, i) => (
          <li key={m.id}>
            {m.role === 'user' ? (
              <UserBubble text={m.content} />
            ) : (
              <AssistantBubble text={m.content} pending={streaming && i === messages.length - 1} />
            )}
          </li>
        ))}
      </ol>
      <div ref={endRef} />

      {error && (
        <p role="alert" className={errorBoxClass}>
          {error}
        </p>
      )}

      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          void send();
        }}
      >
        <GermanField id="tutor-input" label="Câu hỏi" value={input} onChange={setInput} multiline placeholder="Hỏi gia sư…" />
        <button type="submit" disabled={streaming || !input.trim()} className={primaryClass}>
          {streaming ? 'Gia sư đang trả lời…' : 'Gửi'}
        </button>
      </form>
    </div>
  );
}

function UserBubble({ text }: { text: string }) {
  const [state, setState] = useState<{ pending: boolean; note: string | null }>({ pending: false, note: null });
  async function saveError() {
    setState({ pending: true, note: null });
    const res = await saveTutorErrorAction({ text });
    setState({
      pending: false,
      note: res.ok
        ? res.titles.length
          ? `Đã ghi vào sổ lỗi: ${res.titles.join('; ')}`
          : 'Không thấy lỗi tiếng Đức để ghi.'
        : res.error,
    });
  }
  return (
    <div className="ml-8 flex flex-col items-end gap-1">
      <p className="whitespace-pre-wrap rounded-[20px] rounded-br-md bg-primary px-4 py-3 text-[16px] text-on-primary">{text}</p>
      {GERMAN_HINT.test(text) && (
        <button type="button" onClick={saveError} disabled={state.pending} className="text-[13px] font-semibold text-muted underline">
          {state.pending ? 'Đang ghi…' : 'Lưu lỗi này'}
        </button>
      )}
      {state.note && <p className="text-right text-[13px] text-muted">{state.note}</p>}
    </div>
  );
}

function AssistantBubble({ text, pending }: { text: string; pending: boolean }) {
  const segments = parseTutorReply(text);
  return (
    <div className="mr-4 flex flex-col gap-2 rounded-[20px] rounded-bl-md bg-surface px-4 py-3 text-[16px] leading-relaxed">
      {segments.length === 0 && pending && <p className="text-muted">…</p>}
      {segments.map((s, i) =>
        s.type === 'text' ? (
          <p key={i} className="whitespace-pre-wrap">
            {renderBold(s.text)}
          </p>
        ) : (
          <div key={i} className="rounded-[16px] bg-pastel-sage px-3 py-2">
            <p className="text-[17px] font-semibold" lang="de">
              {s.de}
            </p>
            {s.vi && <p className="text-[14px] opacity-80">{s.vi}</p>}
            {!pending && (
              <Link
                href={`/add?type=phrase&german=${encodeURIComponent(s.de)}`}
                className="mt-1 inline-block rounded-full bg-primary px-3 py-1 text-[12px] font-semibold text-on-primary"
              >
                Lưu thành thẻ
              </Link>
            )}
          </div>
        ),
      )}
    </div>
  );
}

/** **in đậm** → <strong>; không dựng HTML từ chuỗi nên không có nguy cơ chèn mã. */
function renderBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
  );
}
