import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { AnnotatedText } from '@/components/write/AnnotatedText';
import { getPageSession } from '@/lib/supabase/session';
import type { WritingFeedback } from '../actions';

export const metadata: Metadata = { title: 'Lịch sử bài viết' };

export default function Page() {
  return (
    <>
      <PageHeader title="Lịch sử bài viết" />
      <Suspense fallback={<p className="px-1 text-[15px] text-muted">Đang tải…</p>}>
        <History />
      </Suspense>
    </>
  );
}

type WritingRow = {
  id: string;
  prompt: string | null;
  original_text: string;
  revised_text: string | null;
  ai_feedback: WritingFeedback;
  created_at: string;
};

async function History() {
  const session = await getPageSession();
  if (!session) return null;
  const { data } = await session.supabase
    .from('writings')
    .select('id, prompt, original_text, revised_text, ai_feedback, created_at')
    .order('created_at', { ascending: false })
    .limit(50);
  const rows = (data ?? []) as WritingRow[];
  if (rows.length === 0) {
    return <p className="rounded-block bg-surface p-5 text-[15px] text-muted">Chưa có bài viết nào.</p>;
  }
  return (
    <ul className="flex flex-col gap-3">
      {rows.map((w) => {
        const check = w.ai_feedback.check;
        return (
          <li key={w.id}>
            <details className="rounded-block bg-surface p-5">
              <summary className="cursor-pointer list-none">
                <p className="text-[13px] text-muted">
                  {new Date(w.created_at).toLocaleDateString('vi-VN')} · {check.errors.length} lỗi
                  {w.prompt && ` · ${w.prompt}`}
                </p>
                <p className="line-clamp-2 text-[16px]" lang="de">
                  {w.original_text}
                </p>
              </summary>
              <div className="mt-3 flex flex-col gap-2 border-t border-line pt-3">
                <AnnotatedText text={w.original_text} errors={check.errors} />
                <p className="text-[14px]">{check.overall_vi}</p>
                {check.errors.map((e, i) => (
                  <p key={i} className="text-[14px]" lang="de">
                    {i + 1}. <span className="line-through opacity-60">{e.wrong}</span> → <b>{e.correct}</b>{' '}
                    <span lang="vi" className="text-muted">
                      ({e.title_vi})
                    </span>
                  </p>
                ))}
                {w.revised_text && (
                  <p className="text-[14px]">
                    Bản tự sửa: <span lang="de">{w.revised_text}</span>
                  </p>
                )}
                <p className="text-[14px]">
                  Đáp án: <span lang="de">{check.corrected_text}</span>
                </p>
              </div>
            </details>
          </li>
        );
      })}
    </ul>
  );
}
