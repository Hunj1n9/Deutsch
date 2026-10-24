-- M11: bài học và kiểm tra chặng (F11, F12). Nội dung bài là dữ liệu tĩnh trong code; bảng chỉ lưu tiến độ.

create table public.lesson_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null check (lesson_id ~ '^[ab][12]-[0-9]{2}-[0-9]$'),
  step smallint not null default 0 check (step between 0 and 5),
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  skipped boolean not null default false,
  score smallint,
  total smallint,
  primary key (user_id, lesson_id)
);

create table public.stage_tests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  stage_id text not null check (stage_id ~ '^[ab][12]-[0-9]{2}$'),
  score smallint not null,
  total smallint not null,
  passed boolean not null,
  answers jsonb not null,
  taken_at timestamptz not null default now()
);
create index stage_tests_user_stage_idx on public.stage_tests (user_id, stage_id, taken_at desc);

alter table public.lesson_progress enable row level security;
alter table public.stage_tests     enable row level security;

create policy own_rows on public.lesson_progress for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy own_rows on public.stage_tests     for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

-- Sao lưu (F9): nhập thêm hai bảng mới. Thay hàm của M6, các bảng cũ giữ nguyên cách nhập.
create or replace function public.import_backup(p jsonb)
returns jsonb
language plpgsql
security invoker
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_counts jsonb := '{}'::jsonb;
  v_n int;
begin
  if v_user is null then
    raise exception 'not authenticated' using errcode = '42501';
  end if;
  if exists (select 1 from public.sources where user_id = v_user)
     or exists (select 1 from public.items where user_id = v_user)
     or exists (select 1 from public.errors where user_id = v_user)
     or exists (select 1 from public.writings where user_id = v_user)
     or exists (select 1 from public.tutor_threads where user_id = v_user)
     or exists (select 1 from public.study_sessions where user_id = v_user)
     or exists (select 1 from public.daily_tasks where user_id = v_user)
     or exists (select 1 from public.weekly_reports where user_id = v_user)
     or exists (select 1 from public.lesson_progress where user_id = v_user)
     or exists (select 1 from public.stage_tests where user_id = v_user) then
    raise exception 'database not empty' using errcode = '23505';
  end if;

  -- Gắn user_id của người đang đăng nhập vào từng dòng.
  create temp table _b (name text primary key, rows jsonb) on commit drop;
  insert into _b
  select key, coalesce((select jsonb_agg(e || jsonb_build_object('user_id', v_user)) from jsonb_array_elements(value) e), '[]'::jsonb)
  from jsonb_each(p)
  where key in ('sources','errors','items','cards','review_logs','writings','tutor_threads','study_sessions','daily_tasks',
                'weekly_reports','settings','lesson_progress','stage_tests')
    and jsonb_typeof(value) = 'array';
  insert into _b
  select key, value from jsonb_each(p)
  where key in ('error_occurrences','tutor_messages') and jsonb_typeof(value) = 'array';

  insert into public.sources select * from jsonb_populate_recordset(null::public.sources, (select rows from _b where name = 'sources'));
  get diagnostics v_n = row_count; v_counts := v_counts || jsonb_build_object('sources', v_n);
  insert into public.errors select * from jsonb_populate_recordset(null::public.errors, (select rows from _b where name = 'errors'));
  get diagnostics v_n = row_count; v_counts := v_counts || jsonb_build_object('errors', v_n);
  insert into public.items select * from jsonb_populate_recordset(null::public.items, (select rows from _b where name = 'items'));
  get diagnostics v_n = row_count; v_counts := v_counts || jsonb_build_object('items', v_n);
  insert into public.cards select * from jsonb_populate_recordset(null::public.cards, (select rows from _b where name = 'cards'));
  get diagnostics v_n = row_count; v_counts := v_counts || jsonb_build_object('cards', v_n);
  insert into public.review_logs select * from jsonb_populate_recordset(null::public.review_logs, (select rows from _b where name = 'review_logs'));
  get diagnostics v_n = row_count; v_counts := v_counts || jsonb_build_object('review_logs', v_n);
  insert into public.error_occurrences select * from jsonb_populate_recordset(null::public.error_occurrences, (select rows from _b where name = 'error_occurrences'));
  get diagnostics v_n = row_count; v_counts := v_counts || jsonb_build_object('error_occurrences', v_n);
  insert into public.writings select * from jsonb_populate_recordset(null::public.writings, (select rows from _b where name = 'writings'));
  get diagnostics v_n = row_count; v_counts := v_counts || jsonb_build_object('writings', v_n);
  insert into public.tutor_threads select * from jsonb_populate_recordset(null::public.tutor_threads, (select rows from _b where name = 'tutor_threads'));
  get diagnostics v_n = row_count; v_counts := v_counts || jsonb_build_object('tutor_threads', v_n);
  insert into public.tutor_messages select * from jsonb_populate_recordset(null::public.tutor_messages, (select rows from _b where name = 'tutor_messages'));
  get diagnostics v_n = row_count; v_counts := v_counts || jsonb_build_object('tutor_messages', v_n);
  insert into public.study_sessions select * from jsonb_populate_recordset(null::public.study_sessions, (select rows from _b where name = 'study_sessions'));
  get diagnostics v_n = row_count; v_counts := v_counts || jsonb_build_object('study_sessions', v_n);
  insert into public.daily_tasks select * from jsonb_populate_recordset(null::public.daily_tasks, (select rows from _b where name = 'daily_tasks'));
  get diagnostics v_n = row_count; v_counts := v_counts || jsonb_build_object('daily_tasks', v_n);
  insert into public.weekly_reports select * from jsonb_populate_recordset(null::public.weekly_reports, (select rows from _b where name = 'weekly_reports'));
  get diagnostics v_n = row_count; v_counts := v_counts || jsonb_build_object('weekly_reports', v_n);
  insert into public.lesson_progress select * from jsonb_populate_recordset(null::public.lesson_progress, (select rows from _b where name = 'lesson_progress'));
  get diagnostics v_n = row_count; v_counts := v_counts || jsonb_build_object('lesson_progress', v_n);
  insert into public.stage_tests select * from jsonb_populate_recordset(null::public.stage_tests, (select rows from _b where name = 'stage_tests'));
  get diagnostics v_n = row_count; v_counts := v_counts || jsonb_build_object('stage_tests', v_n);

  -- settings: thay dòng mặc định tạo lúc đăng nhập bằng dòng trong file (nếu có).
  if jsonb_array_length(coalesce((select rows from _b where name = 'settings'), '[]'::jsonb)) > 0 then
    delete from public.settings where user_id = v_user;
    insert into public.settings select * from jsonb_populate_recordset(null::public.settings, (select rows from _b where name = 'settings')) limit 1;
  end if;

  return v_counts;
end;
$$;

revoke execute on function public.import_backup(jsonb) from public, anon;
grant execute on function public.import_backup(jsonb) to authenticated;
