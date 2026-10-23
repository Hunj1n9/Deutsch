-- M1: toàn bộ schema SPEC mục 4 + RLS.
-- Mọi bảng có user_id: chính sách user_id = auth.uid().
-- Bảng con không có user_id (error_occurrences, tutor_messages): kiểm quyền qua bảng cha.

-- Cấp độ và nguồn
create type cefr_level as enum ('A1','A2','B1','B2','C1');
create type source_kind as enum ('textbook','edeutsch','deutschvn','tutor','writing','other');

create table sources (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  kind source_kind not null,
  title text not null,
  chapter text,
  created_at timestamptz default now()
);

-- Đơn vị nội dung
create type item_type as enum ('word','phrase','grammar','error_fix');

create table items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  type item_type not null,
  german text not null,
  article text check (article in ('der','die','das')),
  plural text,
  vietnamese text not null,
  example_de text,
  example_vi text,
  grammar_note_vi text,
  level cefr_level,
  source_id uuid references sources(id) on delete set null,
  error_id uuid,
  tags text[] default '{}',
  created_at timestamptz default now()
);

-- Thẻ ôn
create type card_kind as enum ('vi_de','audio_de','cloze','error_fix');

create table cards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  item_id uuid not null references items(id) on delete cascade,
  kind card_kind not null,
  due timestamptz not null default now(),
  stability double precision not null default 0,
  difficulty double precision not null default 0,
  elapsed_days int not null default 0,
  scheduled_days int not null default 0,
  reps int not null default 0,
  lapses int not null default 0,
  state smallint not null default 0,     -- 0 New,1 Learning,2 Review,3 Relearning
  last_review timestamptz,
  suspended boolean not null default false,
  created_at timestamptz default now(),
  unique (item_id, kind)
);
create index on cards (user_id, due) where suspended = false;

create table review_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  card_id uuid not null references cards(id) on delete cascade,
  rating smallint not null,              -- 1 Again,2 Hard,3 Good,4 Easy
  suggested_rating smallint not null,
  answer_given text,
  correct boolean not null,
  flags text[] default '{}',
  response_ms int,
  state_before smallint, due_before timestamptz,
  stability_before double precision, difficulty_before double precision,
  reviewed_at timestamptz default now()
);

-- Sổ lỗi
create type error_category as enum (
  'gender','case','adjective_ending','verb_position','conjugation',
  'preposition','separable_verb','plural','spelling','word_choice','tense','other'
);
create type error_status as enum ('open','resolved');

create table errors (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  rule_key text not null,
  category error_category not null,
  title_vi text not null,
  explanation_vi text not null,
  occurrences int not null default 1,
  first_seen timestamptz default now(),
  last_seen timestamptz default now(),
  status error_status not null default 'open',
  resolved_at timestamptz,
  unique (user_id, rule_key)
);
alter table items add constraint items_error_fk foreign key (error_id) references errors(id) on delete cascade;

create table error_occurrences (
  id uuid primary key default gen_random_uuid(),
  error_id uuid not null references errors(id) on delete cascade,
  source source_kind not null,
  text_wrong text not null,
  text_correct text not null,
  created_at timestamptz default now()
);

-- Bài viết ngắn
create table writings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  prompt text,
  original_text text not null,
  revised_text text,
  ai_feedback jsonb not null,
  created_at timestamptz default now()
);

-- Gia sư
create table tutor_threads (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text,
  created_at timestamptz default now()
);
create table tutor_messages (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references tutor_threads(id) on delete cascade,
  role text not null check (role in ('user','assistant')),
  content text not null,
  created_at timestamptz default now()
);

-- Nhật ký và kế hoạch
create type activity_kind as enum ('review','writing','tutor','lesson','other');

create table study_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  activity activity_kind not null,
  started_at timestamptz not null,
  ended_at timestamptz,
  active_seconds int not null default 0
);

create table daily_tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  task_date date not null,
  title text not null,
  minutes int,
  done boolean not null default false
);

create table settings (
  user_id uuid primary key references auth.users(id) on delete cascade,
  current_level cefr_level not null default 'A1',
  current_source_id uuid references sources(id),
  next_exam_name text default 'Goethe-Zertifikat B2',
  next_exam_date date,
  daily_minutes_target int not null default 120,
  weekly_days_target int not null default 6,
  new_cards_per_day int not null default 15,
  desired_retention double precision not null default 0.9,
  hours_offset numeric not null default 0
);

create table weekly_reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  week_start date not null,
  stats jsonb not null,
  summary_vi text not null,
  created_at timestamptz default now(),
  unique (user_id, week_start)
);

-- Chỉ mục cho khóa ngoại và cho điều kiện RLS
create index on sources (user_id);
create index on items (user_id);
create index on items (source_id);
create index on items (error_id);
create index on review_logs (card_id);
create index on review_logs (user_id, reviewed_at);
create index on error_occurrences (error_id);
create index on writings (user_id, created_at);
create index on tutor_threads (user_id);
create index on tutor_messages (thread_id, created_at);
create index on study_sessions (user_id, started_at);
create index on daily_tasks (user_id, task_date);

-- RLS
alter table sources           enable row level security;
alter table items             enable row level security;
alter table cards             enable row level security;
alter table review_logs       enable row level security;
alter table errors            enable row level security;
alter table error_occurrences enable row level security;
alter table writings          enable row level security;
alter table tutor_threads     enable row level security;
alter table tutor_messages    enable row level security;
alter table study_sessions    enable row level security;
alter table daily_tasks       enable row level security;
alter table settings          enable row level security;
alter table weekly_reports    enable row level security;

-- (select auth.uid()) để Postgres tính một lần mỗi truy vấn thay vì mỗi dòng.
create policy own_rows on sources        for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy own_rows on items          for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy own_rows on cards          for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy own_rows on review_logs    for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy own_rows on errors         for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy own_rows on writings       for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy own_rows on tutor_threads  for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy own_rows on study_sessions for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy own_rows on daily_tasks    for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy own_rows on settings       for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy own_rows on weekly_reports for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

create policy own_rows on error_occurrences for all to authenticated
  using (exists (select 1 from errors e where e.id = error_id and e.user_id = (select auth.uid())))
  with check (exists (select 1 from errors e where e.id = error_id and e.user_id = (select auth.uid())));

create policy own_rows on tutor_messages for all to authenticated
  using (exists (select 1 from tutor_threads t where t.id = thread_id and t.user_id = (select auth.uid())))
  with check (exists (select 1 from tutor_threads t where t.id = thread_id and t.user_id = (select auth.uid())));
