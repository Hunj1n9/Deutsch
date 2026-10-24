import { fetchAll } from '@/lib/progress';
import { getSession, SESSION_EXPIRED_VI } from '@/lib/supabase/session';
import { localDate } from '@/lib/time';

/** Thứ tự bảng trong file sao lưu (cha trước con). */
const BACKUP_TABLES = [
  'settings',
  'sources',
  'errors',
  'items',
  'cards',
  'review_logs',
  'error_occurrences',
  'writings',
  'tutor_threads',
  'tutor_messages',
  'study_sessions',
  'daily_tasks',
  'weekly_reports',
  'lesson_progress',
  'stage_tests',
  'content_reports',
] as const;

/** Khóa sắp xếp ổn định để phân trang không sót dòng. */
const ORDER: Record<(typeof BACKUP_TABLES)[number], string> = {
  settings: 'user_id',
  sources: 'id',
  errors: 'id',
  items: 'id',
  cards: 'id',
  review_logs: 'id',
  error_occurrences: 'id',
  writings: 'id',
  tutor_threads: 'id',
  tutor_messages: 'id',
  study_sessions: 'id',
  daily_tasks: 'id',
  weekly_reports: 'id',
  lesson_progress: 'lesson_id',
  stage_tests: 'id',
  content_reports: 'id',
};

/** "Xuất dữ liệu" (SPEC F9): một file JSON chứa toàn bộ bảng của người dùng (RLS chỉ trả dòng của họ). */
export async function GET() {
  const session = await getSession();
  if (!session) return Response.json({ error: SESSION_EXPIRED_VI }, { status: 401 });

  const data: Record<string, unknown[]> = {};
  try {
    for (const table of BACKUP_TABLES) {
      data[table] = await fetchAll((a, b) => session.supabase.from(table).select('*').order(ORDER[table]).range(a, b));
    }
  } catch {
    return Response.json({ error: 'Không xuất được dữ liệu. Thử lại sau.' }, { status: 500 });
  }

  const body = JSON.stringify({ app: 'deutsch', version: 1, exported_at: new Date().toISOString(), ...data });
  return new Response(body, {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'content-disposition': `attachment; filename="deutsch-backup-${localDate(new Date())}.json"`,
      'cache-control': 'no-store',
    },
  });
}

/** "Nhập dữ liệu" (SPEC F9): khôi phục từ file xuất ở trên vào CSDL trống, một giao dịch (hàm SQL import_backup). */
export async function POST(request: Request) {
  const session = await getSession();
  if (!session) return Response.json({ error: SESSION_EXPIRED_VI }, { status: 401 });

  const backup = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!backup || backup.app !== 'deutsch' || backup.version !== 1) {
    return Response.json({ error: 'File không phải bản sao lưu của app này.' }, { status: 400 });
  }
  const payload = Object.fromEntries(BACKUP_TABLES.map((t) => [t, Array.isArray(backup[t]) ? backup[t] : []]));

  const { data, error } = await session.supabase.rpc('import_backup', { p: payload });
  if (error) {
    const message =
      error.code === '23505'
        ? 'Tài khoản đã có dữ liệu. Chỉ nhập được vào CSDL trống.'
        : 'Không nhập được: file hỏng hoặc không khớp cấu trúc. Không có gì bị ghi.';
    console.error('[backup] import lỗi:', error.code);
    return Response.json({ error: message }, { status: 400 });
  }
  return Response.json({ counts: data });
}
