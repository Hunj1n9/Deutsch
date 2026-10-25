# SPEC — App tự học tiếng Đức đến TestDaF (giai đoạn 1: lõi 4 tuần)

> Ngôn ngữ: tài liệu và giao diện bằng tiếng Việt; tên biến, bảng, hàm bằng tiếng Anh; nội dung học bằng tiếng Đức.

## 1. Bối cảnh và mục tiêu

- **Người dùng:** đúng một người (chủ dự án), người Việt, bắt đầu từ số 0, mục tiêu TestDaF đạt 4 điểm cả 4 phần (TDN 4×4, mức C1) để học thạc sĩ dạy bằng tiếng Đức. Mốc trung gian: thi Goethe B2 sau khoảng 11 tháng.
- **Cách học:** ban đầu phần giảng nằm ở giáo trình (Netzwerk neu A1–B1) và khóa eDeutsch / Deutsch.vn; app có **lộ trình A1 → B2 kèm gói từ tự viết** (F10). **Từ M11 (F11–F12, thêm 2026-10-24 theo yêu cầu người dùng), app là một khóa học dùng được một mình:** mỗi chặng có các bài học (từ mới, ngữ pháp giải thích bằng tiếng Việt, bài tập, hội thoại để nghe và đọc, viết) và một bài kiểm tra chặng. Giáo trình và khóa học ngoài chỉ còn là nguồn bổ sung, không bắt buộc. Ngoài ra app làm những việc các nguồn kia làm chưa tốt:
  1. Gom mọi từ, mẫu câu, điểm ngữ pháp và **lỗi** từ mọi nguồn về một chỗ.
  2. Ôn bằng **gợi nhớ chủ động** (gõ ra đáp án, không lật thẻ) với **lịch giãn cách thích ứng (FSRS)**.
  3. **Sổ lỗi cá nhân:** lỗi lặp lại được gom nhóm và ôn đến khi hết mắc.
  4. **Gia sư AI bằng tiếng Việt** giải thích ngữ pháp.
  5. **Nhật ký và kế hoạch** để giữ kỷ luật tự học.
- **Nguyên tắc sản phẩm (từ nghiên cứu):** tự kiểm tra + ôn giãn cách có hiệu quả cao nhất; luyện xen kẽ; sửa lỗi phải bắt người học tự sửa trước rồi mới cho đáp án; không có màn hình kiểu "đọc lại bài". Ở bài học (F11): mỗi phần trình bày phải ngắn và **ngay sau đó là bài tập gợi nhớ** về đúng phần vừa học; không có trang lý thuyết dài để đọc lướt.
- **Ràng buộc quan trọng nhất:** thời gian xây app không được ăn vào thời gian học. Giai đoạn 1 phải dùng được hằng ngày sau tối đa 4 tuần. Mọi thứ ngoài phạm vi ở mục 2 đều để sau.

## 2. Phạm vi

### Trong phạm vi giai đoạn 1
- F1 Đăng nhập một người dùng
- F2 Thêm nội dung (thủ công, AI điền giúp, nhập hàng loạt)
- F3 Ôn tập FSRS với 4 kiểu thẻ gợi nhớ chủ động
- F4 Sổ lỗi cá nhân
- F5 Kiểm tra câu / đoạn viết ngắn bằng AI
- F6 Gia sư AI tiếng Việt
- F7 Trang "Hôm nay"
- F8 Nhật ký học, kế hoạch, dự báo, báo cáo tuần
- F9 Xuất / nhập dữ liệu (sao lưu JSON)
- F10 Lộ trình A1 → B2 và gói từ tự viết (thêm 2026-10-24)
- F11 Bài học theo chặng (thêm 2026-10-24)
- F12 Kiểm tra chặng (thêm 2026-10-24)
- F13 Báo nội dung sai (thêm 2026-10-25)
- F14 Thi thử cuối cấp (thêm 2026-10-25)
- F15 Nói theo có ghi âm, không chấm (thêm 2026-10-25)

### Ngoài phạm vi (KHÔNG làm ở giai đoạn 1)
- Chấm phát âm đến âm vị (giai đoạn A1–A2, dùng Azure Pronunciation Assessment de-DE)
- Chấm bài viết dài theo thang Goethe/TestDaF, đề thi thử theo đúng định dạng Goethe/TestDaF, mô phỏng TestDaF (giai đoạn B1–C1). Kiểm tra chặng (F12) chỉ kiểm nội dung của một chặng; thi thử cuối cấp (F14) chỉ trộn câu từ kho của các chặng trong cấp, không theo định dạng đề thi thật.
- Bài học C1 (lộ trình F10 dừng ở B2)
- Luyện nói có chấm (chấm phát âm, chấm câu nói). Bài học chỉ có nghe bằng giọng đọc của trình duyệt và nói theo có ghi âm để tự nghe lại (F15); bản ghi không lưu, không gửi đi, không chấm
- Chạy offline, app di động gốc, nhiều người dùng, thanh toán, mạng xã hội, xếp hạng, huy hiệu, trò chơi

## 3. Công nghệ

| Thành phần | Lựa chọn |
| --- | --- |
| Framework | Next.js (App Router) + TypeScript (strict) |
| Giao diện | Tailwind CSS; mobile-first; cài được lên màn hình chính (PWA manifest, không cần service worker offline) |
| CSDL, đăng nhập | Supabase (Postgres + Auth magic link + Row Level Security) |
| AI | Anthropic Claude API qua `@anthropic-ai/sdk`; model đặt trong biến môi trường; đầu ra có cấu trúc qua tool use + JSON schema |
| Ôn giãn cách | `ts-fsrs` |
| Đọc tiếng Đức | Web Speech API (`speechSynthesis`, giọng `de-DE`) |
| Kiểm thử | Vitest (logic), Playwright (luồng chính, tùy chọn) |
| Triển khai | Vercel |

Biến môi trường (`.env.local`, không commit):
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=      # chỉ dùng ở server
ALLOWED_EMAIL=                  # email duy nhất được đăng nhập
ANTHROPIC_API_KEY=              # chỉ dùng ở server
ANTHROPIC_MODEL=claude-sonnet-5-5
```
Mọi lời gọi AI chạy ở server (Route Handler / Server Action). Khóa API không bao giờ xuống trình duyệt.

## 4. Mô hình dữ liệu

Mọi bảng có `user_id uuid not null references auth.users` (trừ bảng con nối qua khóa ngoại), bật RLS với chính sách `user_id = auth.uid()`. Migration đặt trong `supabase/migrations/`.

```sql
-- Cấp độ và nguồn
create type cefr_level as enum ('A1','A2','B1','B2','C1');
create type source_kind as enum ('textbook','edeutsch','deutschvn','tutor','writing','other');

create table sources (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  kind source_kind not null,
  title text not null,            -- vd 'Netzwerk neu A1'
  chapter text,                   -- vd 'Kapitel 3'
  created_at timestamptz default now()
);

-- Đơn vị nội dung
create type item_type as enum ('word','phrase','grammar','error_fix');

create table items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  type item_type not null,
  german text not null,           -- từ (không kèm mạo từ), cụm, câu mẫu ngữ pháp
  article text check (article in ('der','die','das')),  -- chỉ cho danh từ
  plural text,                    -- vd '-e', 'Tische'
  vietnamese text not null,
  example_de text,
  example_vi text,
  grammar_note_vi text,           -- ghi chú ngữ pháp ngắn bằng tiếng Việt
  level cefr_level,
  source_id uuid references sources(id) on delete set null,
  error_id uuid,                  -- cho type='error_fix', FK thêm sau khi tạo errors
  tags text[] default '{}',
  created_at timestamptz default now()
);

-- Thẻ ôn (một item có thể có nhiều thẻ)
create type card_kind as enum ('vi_de','audio_de','cloze','error_fix');

create table cards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  item_id uuid not null references items(id) on delete cascade,
  kind card_kind not null,
  -- trạng thái FSRS (khớp kiểu Card của ts-fsrs)
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
  user_id uuid not null,
  card_id uuid not null references cards(id) on delete cascade,
  rating smallint not null,              -- 1 Again,2 Hard,3 Good,4 Easy
  suggested_rating smallint not null,    -- do app đề xuất
  answer_given text,
  correct boolean not null,
  flags text[] default '{}',             -- vd {'umlaut_fallback','capitalization'}
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
  user_id uuid not null,
  rule_key text not null,                -- khóa chuẩn hóa, vd 'dativ-nach-mit'
  category error_category not null,
  title_vi text not null,                -- vd 'mit luôn đi với Dativ'
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
  user_id uuid not null,
  prompt text,
  original_text text not null,
  revised_text text,
  ai_feedback jsonb not null,
  created_at timestamptz default now()
);

-- Gia sư
create table tutor_threads (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
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
  user_id uuid not null,
  activity activity_kind not null,
  started_at timestamptz not null,
  ended_at timestamptz,
  active_seconds int not null default 0
);

create table daily_tasks (                -- việc học bài mới ngoài app
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  task_date date not null,
  title text not null,                    -- vd 'Netzwerk neu A1 Kapitel 4, phần A–B'
  minutes int,                            -- thời gian đã học, người dùng nhập khi tick
  done boolean not null default false
);

create table settings (
  user_id uuid primary key,
  current_level cefr_level not null default 'A1',
  current_source_id uuid references sources(id),
  next_exam_name text default 'Goethe-Zertifikat B2',
  next_exam_date date,
  daily_minutes_target int not null default 120,
  weekly_days_target int not null default 6,
  new_cards_per_day int not null default 15,
  desired_retention double precision not null default 0.9,
  hours_offset numeric not null default 0  -- giờ đã học trước khi dùng app
);

create table weekly_reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  week_start date not null,
  stats jsonb not null,
  summary_vi text not null,
  created_at timestamptz default now(),
  unique (user_id, week_start)
);

-- Bài học và kiểm tra chặng (F11, F12; thêm ở M11)
alter type source_kind add value 'lesson';   -- lỗi ghi từ bài học / kiểm tra chặng

create table lesson_progress (
  user_id uuid not null,
  lesson_id text not null,                -- vd 'a1-01-2' (dữ liệu tĩnh trong code)
  step smallint not null default 0,       -- bước đang làm, để học tiếp
  started_at timestamptz not null default now(),
  completed_at timestamptz,               -- lần hoàn thành đầu tiên
  skipped boolean not null default false, -- bỏ qua nhờ đạt kiểm tra chặng
  score smallint,                         -- số bài tập đúng ngay lần đầu, lần làm gần nhất
  total smallint,
  primary key (user_id, lesson_id)
);

create table stage_tests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  stage_id text not null,                 -- vd 'a1-01'
  score smallint not null,
  total smallint not null,
  passed boolean not null,
  answers jsonb not null,                 -- từng câu: mã câu, đáp án đã gõ, đúng/sai (để xem lại)
  taken_at timestamptz not null default now()
);
create index on stage_tests (user_id, stage_id, taken_at desc);

-- Báo nội dung sai (F13; thêm ở M16)
create table content_reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  target text not null,                   -- chỗ bị báo, vd 'exercise:a1-01-1.g0.2', 'word:a1-01:Tisch'
  excerpt text not null,                  -- nội dung lúc báo (đọc được cả khi dữ liệu đã sửa)
  note text,                              -- người học ghi sai ở đâu (không bắt buộc)
  created_at timestamptz not null default now(),
  resolved_at timestamptz                 -- null = đang mở
);

-- Thi thử cuối cấp (F14; thêm ở M18)
create table level_tests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  level cefr_level not null,
  score smallint not null,
  total smallint not null,
  passed boolean not null,
  answers jsonb not null,                 -- như stage_tests.answers
  taken_at timestamptz not null default now()
);
create index on level_tests (user_id, level, taken_at desc);
```

## 5. Tính năng

Mỗi tính năng có **Tiêu chí hoàn thành (TCHT)**. Một tính năng chỉ coi là xong khi mọi TCHT đều đạt và có test cho phần logic.

### F1. Đăng nhập một người dùng
- Supabase magic link. Tắt đăng ký tự do trong Supabase; tạo sẵn tài khoản cho `ALLOWED_EMAIL`.
- Middleware chặn mọi route (trừ `/login`) nếu chưa đăng nhập hoặc email ≠ `ALLOWED_EMAIL`.
- Lần đăng nhập đầu tạo dòng `settings` mặc định.

TCHT:
- Email khác `ALLOWED_EMAIL` không vào được bất kỳ trang nào.
- Phiên đăng nhập giữ được ít nhất 30 ngày trên điện thoại.

### F2. Thêm nội dung
**Thêm một mục:** form chọn loại (`word`, `phrase`, `grammar`), nguồn và chương (mặc định lấy từ `settings.current_source_id`), cấp độ (mặc định `settings.current_level`).
- **AI điền giúp:** người dùng gõ một từ hoặc cụm tiếng Đức (vd `Tisch`) rồi bấm "Điền giúp". Server gọi AI (prompt P1) và trả về mạo từ, số nhiều, nghĩa tiếng Việt, câu ví dụ đúng trình độ, bản dịch, ghi chú ngữ pháp. Người dùng sửa được mọi trường trước khi lưu.
- **Nhập hàng loạt:** ô dán văn bản, mỗi dòng một mục. Chấp nhận các dạng:
  - `der Tisch, -e = cái bàn`
  - `Tisch` (chỉ từ, để AI điền)
  - TSV có tiêu đề: `german	article	plural	vietnamese	example_de	example_vi`
  
  Các dòng thiếu thông tin được gửi AI điền theo lô (tối đa 20 dòng một lần). Hiện bảng xem trước, người dùng duyệt rồi mới lưu.
- **Tự sinh thẻ khi lưu:**
  - `word`, `phrase` → `vi_de` + `audio_de`; thêm `cloze` nếu có `example_de` và từ xuất hiện trong câu.
  - `grammar` → `cloze` (bắt buộc có `example_de`; phần bỏ trống do người dùng đánh dấu hoặc AI đề xuất).
- **Chống trùng:** cùng `german` + `article` + `type` thì cảnh báo, cho chọn gộp hoặc vẫn thêm.

TCHT:
- Thêm một danh từ bằng "Điền giúp" mất dưới 15 giây thao tác.
- Dán 30 dòng hỗn hợp các dạng trên → xem trước đúng → lưu đủ 30 mục, mỗi mục có thẻ đúng loại.
- Danh từ không có mạo từ thì không lưu được, báo lỗi rõ ràng.

### F3. Ôn tập (FSRS)
**Phiên ôn:** lấy thẻ đến hạn (`due <= now()`, không bị treo), cộng tối đa `new_cards_per_day` thẻ mới trong ngày.
- **Trộn xen kẽ:** không để quá 3 thẻ cùng `kind` liên tiếp nếu còn thẻ loại khác.
- **Không ôn hai thẻ của cùng một item trong cùng một ngày** (trừ thẻ vừa trả lời sai, được phép quay lại trong phiên).

**4 kiểu thẻ, đều phải gõ ra đáp án:**
| Kiểu | Hiện | Người dùng gõ |
| --- | --- | --- |
| `vi_de` | Nghĩa tiếng Việt (+ cấp độ, loại từ) | Từ tiếng Đức; danh từ phải kèm mạo từ (vd `der Tisch`) |
| `audio_de` | Nút nghe (tự phát lần đầu, nghe lại được) | Từ / câu vừa nghe (chính tả) |
| `cloze` | Câu ví dụ có chỗ trống + bản dịch tiếng Việt | Từ còn thiếu, đúng dạng trong câu |
| `error_fix` | Một câu sai lấy từ `error_occurrences` (xoay vòng) + tiêu đề lỗi ẩn, có nút "Gợi ý" | Câu đã sửa đúng |

**Chấm đáp án** (`lib/answer-check.ts`, hàm thuần, có unit test):
1. Chuẩn hóa: bỏ khoảng trắng thừa, chuẩn hóa dấu nháy, bỏ dấu chấm câu cuối.
2. So khớp chính xác → đúng.
3. Chấp nhận nhưng gắn cờ (rating tối đa Hard):
   - `ae/oe/ue` thay cho `ä/ö/ü`: cờ `umlaut_fallback`
   - `ss` thay cho `ß`: cờ `eszett_fallback`
   - Sai viết hoa: cờ `capitalization`
4. Danh từ sai mạo từ → **sai**, cờ `wrong_article`. Đồng thời ghi một lần mắc lỗi vào sổ lỗi với `rule_key = gender-<từ viết thường>`, `category = gender`.
5. Riêng `error_fix`: không khớp chính xác với `text_correct` nào đã lưu thì gọi AI (prompt P4) để phán đúng/sai; nếu AI xác nhận đúng thì lưu câu đó thành một đáp án hợp lệ mới.

**Đề xuất rating** (người dùng xác nhận bằng một chạm hoặc phím Enter, đổi được):
- Sai → Again (1)
- Đúng nhưng có dùng gợi ý, có cờ, hoặc mất trên 15 giây → Hard (2)
- Đúng → Good (3)
- Đúng, không cờ, dưới 4 giây, và thẻ đang ở trạng thái Review → Easy (4)

Sau khi trả lời, hiện đáp án đúng, câu ví dụ, nút nghe và nút "Hỏi gia sư về thẻ này" (mở F6 kèm ngữ cảnh thẻ).

**Lập lịch:** dùng `ts-fsrs` với `request_retention = settings.desired_retention`, bật `enable_fuzz`. Mọi thay đổi trạng thái thẻ và `review_logs` ghi trong cùng một giao dịch. Có nút "Hoàn tác" cho lần chấm gần nhất (khôi phục trạng thái từ `*_before`).

TCHT:
- Unit test `answer-check` phủ đủ: đúng chính xác; mạo từ sai; umlaut thay thế; ß/ss; viết hoa; khoảng trắng thừa; dấu câu cuối.
- Unit test lập lịch: chấm Again một thẻ Review → `lapses` +1 và `due` trong vòng 1 ngày; chấm Good một thẻ New → `state` chuyển khỏi New.
- Một phiên 50 thẻ trên điện thoại không có trễ cảm nhận được (lấy sẵn thẻ kế tiếp).
- Hoàn tác khôi phục chính xác trạng thái trước đó.

### F4. Sổ lỗi cá nhân
**Nguồn ghi lỗi:**
- F5 (kiểm tra câu)
- F3 (sai mạo từ, sai ở thẻ `error_fix`)
- F6 (người dùng bấm "Lưu lỗi này" trên một câu gia sư đã sửa)
- Thêm tay (lỗi giáo viên hoặc eDeutsch chỉ ra)

**Gom nhóm theo `rule_key`:**
- Nếu `rule_key` đã có: tăng `occurrences`, cập nhật `last_seen`, thêm `error_occurrences`. Nếu lỗi đang `resolved` thì chuyển về `open`.
- Nếu chưa có: tạo `errors` mới, một `items` loại `error_fix` (german = câu đúng, vietnamese = `title_vi`) và một thẻ `error_fix`.

**Khóa lỗi nhất quán:** khi gọi AI ở F5 và F6, gửi kèm danh sách tối đa 200 `rule_key` hiện có (kèm `title_vi`) và yêu cầu dùng lại khóa cũ nếu cùng quy tắc. Định dạng khóa: chữ thường, gạch nối, tối đa 40 ký tự, vd `dativ-nach-mit`, `verb-position-nebensatz`, `adj-ending-dativ-definite`, `gender-tisch`.

**Đóng lỗi tự động:** chuyển `resolved` khi đủ cả ba điều kiện:
1. Thẻ `error_fix` của lỗi đúng 3 lần liên tiếp.
2. Lần đúng gần nhất có `scheduled_days ≥ 21`.
3. Không phát sinh lần mắc mới trong 30 ngày.

**Màn hình Sổ lỗi:**
- Lọc theo trạng thái và loại lỗi; sắp xếp mặc định theo `occurrences` giảm dần, rồi `last_seen`.
- Mỗi lỗi hiện tiêu đề, giải thích, 3 câu sai gần nhất kèm câu đúng.
- Biểu đồ đơn giản: số lỗi đang mở theo tuần (8 tuần gần nhất).

TCHT:
- Kiểm tra hai câu cùng sai "mit + Akkusativ" ở hai lần khác nhau → chỉ có một lỗi với `occurrences = 2` và một thẻ `error_fix`.
- Unit test quy tắc đóng lỗi và mở lại lỗi.

### F5. Kiểm tra câu / đoạn viết ngắn
**Luồng:**
1. Người dùng nhập 1–10 câu tiếng Đức, có thể kèm đề bài (vd "Viết 5 câu về buổi sáng của bạn, dùng động từ tách").
2. Server gọi AI (prompt P2). AI trả JSON theo schema S2.
3. **Bước tự sửa (bắt buộc):** hiện văn bản gốc, gạch chân từng chỗ sai kèm `hint_vi` (gợi ý không lộ đáp án). Người dùng sửa ngay trong ô văn bản.
4. Bấm "Kiểm tra lại": AI so bản sửa với lời giải (prompt P2, chế độ `recheck`), báo chỗ nào đã đúng, chỗ nào còn sai.
5. Bấm "Xem đáp án": hiện `corrected_text` và `explanation_vi` cho từng lỗi.
6. Lưu `writings`, ghi mọi lỗi vào F4 (`source = writing`).

Nút "Tạo thẻ từ câu này" lưu một câu đúng thành item `phrase` (F2).

TCHT:
- Câu `Ich fahre mit den Bus.` → bắt lỗi `case`, `rule_key` kiểu `dativ-nach-mit`, gợi ý không chứa chữ `dem`.
- Câu đúng hoàn toàn → không tạo lỗi, hiện lời khen ngắn kèm một gợi ý nâng cấp câu (tùy chọn).
- Đáp án AI trả về sai schema → thử lại tối đa 2 lần, sau đó báo lỗi thân thiện, không mất văn bản người dùng đã gõ.

### F6. Gia sư AI tiếng Việt
- Giao diện chat theo luồng (`tutor_threads`), trả lời dạng stream.
- **Ngữ cảnh gửi kèm mỗi lượt:** cấp độ hiện tại, nguồn và chương đang học, 10 lỗi đang mở nhiều nhất (`title_vi`), và thẻ hiện tại nếu mở từ F3.
- Mỗi câu ví dụ tiếng Đức trong câu trả lời có nút "Lưu thành thẻ" (mở F2 điền sẵn).
- Khi người dùng gửi câu tiếng Đức và nhờ sửa, có nút "Lưu lỗi này" để chuyển lỗi sang F4.

TCHT:
- Hỏi "Tại sao 'Ich gebe dem Mann den Schlüssel' dùng dem?" → câu trả lời bằng tiếng Việt, đúng (Dativ cho người nhận, Akkusativ cho vật), có ít nhất một ví dụ mới kèm bản dịch.
- Câu trả lời mặc định dưới 200 từ, trừ khi người dùng xin giải thích chi tiết.

### F7. Trang "Hôm nay" (trang chủ)
Thứ tự hiển thị, mỗi phần là một khối có nút bắt đầu:
1. **Ôn thẻ:** số thẻ đến hạn + số thẻ mới → bắt đầu F3.
2. **Sổ lỗi:** số thẻ `error_fix` đến hạn (đã nằm trong F3, hiện riêng để nhấn mạnh).
3. **Bài mới hôm nay:** checklist `daily_tasks`. Người dùng tự thêm việc (vd "eDeutsch A1 buổi 12"). Mặc định gợi ý chép lại việc chưa xong của hôm qua. Khi tick xong thì nhập số phút đã học.
4. **Viết 5 câu:** lối tắt sang F5 với đề gợi ý theo chương đang học (AI sinh, cache theo ngày).
5. **Tiến độ:** thanh tiến độ phút học hôm nay so với `daily_minutes_target`; số ngày đã học tuần này so với `weekly_days_target`; đếm ngược đến `next_exam_date`.

TCHT: mở app trên điện thoại thấy ngay việc cần làm, bắt đầu phiên ôn chỉ bằng một chạm.

### F8. Nhật ký, kế hoạch, dự báo, báo cáo tuần
**Đo thời gian học thật:**
- Client gửi heartbeat mỗi 30 giây khi người dùng có thao tác trong vòng 120 giây gần nhất, trên các màn F3, F5, F6.
- Server cộng `active_seconds` vào `study_sessions` theo `activity`.
- Không tương tác quá 120 giây thì phiên dừng tính giờ.
- Phút học bài mới lấy từ `daily_tasks.minutes`.

**Màn hình Tiến độ:**
- Giờ học mỗi tuần (12 tuần gần nhất).
- Số ngày học mỗi tuần.
- Tỉ lệ nhớ thực tế (tỉ lệ đúng ở các lần ôn thẻ trạng thái Review, 30 ngày gần nhất).
- Số thẻ theo trạng thái.
- Số lỗi đang mở.

**Dự báo ngày sẵn sàng thi:**
- Mốc giờ học tích lũy: A1 = 105, A2 = 205, B1 = 375, B2 = 525, C1 = 675 (trung điểm khoảng ước tính của Goethe).
- Giờ đã học = `hours_offset` + tổng giờ trong app.
- Tốc độ = trung bình giờ/tuần của 4 tuần gần nhất.
- Hiện ngày dự kiến đạt từng mốc còn lại.
- Nếu ngày đạt B2 muộn hơn `next_exam_date` thì cảnh báo và tính số giờ/ngày cần tăng.

**Báo cáo tuần:**
- Nút "Tạo báo cáo tuần" (gợi ý vào Chủ nhật).
- Server tính `stats` (giờ, ngày, số thẻ đã ôn, tỉ lệ nhớ, lỗi mới, lỗi đã đóng, top 3 lỗi) rồi gọi AI (prompt P5) viết tóm tắt tiếng Việt ≤ 120 từ kèm 3 điều chỉnh cụ thể cho tuần sau.
- Lưu vào `weekly_reports`.

**Cài đặt:** sửa mọi trường trong `settings`; quản lý `sources`.

TCHT:
- Unit test dự báo: tốc độ 10 giờ/tuần, đã học 205 giờ → mốc B1 sau 17 tuần.
- Treo máy 5 phút giữa phiên ôn thì không bị cộng thêm quá 2 phút.

### F9. Sao lưu
- "Xuất dữ liệu": tải về một file JSON chứa toàn bộ bảng của người dùng.
- "Nhập dữ liệu": khôi phục từ file đó vào CSDL trống, có xác nhận trước khi ghi.

TCHT: xuất → xóa sạch → nhập lại → số thẻ, trạng thái FSRS và sổ lỗi khớp 100%.

### F10. Lộ trình và gói từ (thêm 2026-10-24)
- Lộ trình A1 → B2 chia thành khoảng 50 chặng (A1 12, A2 12, B1 13, B2 13). Mỗi chặng: chủ đề, điểm ngữ pháp chính, số giờ mục tiêu (theo mốc giờ ở F8), một gói từ.
- **Gói từ tự viết** (không chép danh sách từ của Goethe hay giáo trình): khoảng 650 mục mới ở A1, 650 ở A2, 1.100 ở B1, 1.300 ở B2, cộng mục ngữ pháp dạng điền chỗ trống. Mỗi mục có mạo từ và số nhiều (danh từ), nghĩa tiếng Việt, câu ví dụ đúng cấp có đánh dấu chỗ trống `{…}` và bản dịch, ghi chú ngữ pháp (động từ: Präsens ngôi 3 và Perfekt).
- **Mở chặng** = nhập gói vào kho (F2 `save_items`), gắn tag `pack:<mã chặng>`, nguồn "Lộ trình <cấp>". Mục đã có thì không thêm lại, chỉ gắn tag. Thẻ mới vẫn theo `new_cards_per_day` (F3).
- **Màn `/roadmap`:** các chặng theo cấp, % đã thuộc mỗi chặng (thẻ ở trạng thái Review / tổng thẻ của gói), chặng hiện tại, nút mở chặng kế. Khối "Bài mới hôm nay" (F7) gợi ý chặng kế.
- Không đổi bảng: lộ trình và gói là dữ liệu tĩnh trong code; tiến độ tính từ thẻ có tag gói.
- **Từ M11:** mục của gói được nhập theo từng bài (F11) thay vì cả chặng một lần; nút "Mở chặng" chỉ còn ở chặng chưa có bài (trên `/learn`). Chặng đã mở trước M11 giữ nguyên thẻ và lịch ôn. Trạng thái chặng ở `/roadmap` tính theo F11/F12 (xem F12).

TCHT:
- Test tự động trên toàn bộ gói: 100% mục qua `validateDraft`; không trùng trong và giữa các gói; mỗi mục từ/cụm có đủ 3 thẻ (vi_de, audio_de, cloze); động từ có ghi chú dạng chia.
- Mở một chặng dưới 5 giây; mở lại không sinh mục hay thẻ trùng.
- `/roadmap` hiện đúng chặng hiện tại và % đã thuộc ở 375px.

### F11. Bài học theo chặng (thêm 2026-10-24)
**Cấu trúc:** chặng (F10) → mỗi điểm ngữ pháp của chặng một bài (phần lớn chặng có 3; A1-07, A1-12, B2-09, B2-11 có 4 từ 2026-10-25; tổng 154 bài) → kiểm tra chặng (F12). Mục của gói chia hết cho các bài của chặng theo chủ đề con; mục ngữ pháp (`g`) theo bài của điểm ngữ pháp đó. Một bài khoảng 25–40 phút.

**Các bước của một bài** (làm theo thứ tự; mỗi bước một màn, có thanh tiến độ bước):
1. **Mục tiêu:** 1–2 câu "Sau bài này bạn có thể…" (vd "giới thiệu tên, quê và nơi ở"). Nút Bắt đầu.
2. **Từ mới:** đi theo nhóm 5 mục, mỗi nhóm qua 4 bậc từ dễ đến khó (sửa 2026-10-25): (a) mỗi mục một thẻ giới thiệu (tiếng Đức, mạo từ tô màu, số nhiều, nghĩa, câu ví dụ có dịch, tự đọc to một lần), có nút quay lại thẻ trước; (b) **xem lại cả nhóm** trên một màn (tiếng Đức kèm mạo từ và nghĩa, chạm để nghe), có thể quay lại các thẻ; (c) **chọn từ**: hiện nghĩa tiếng Việt, chạm một trong tối đa 4 từ tiếng Đức (nhiễu lấy trong nhóm, thiếu thì lấy từ khác của bài), chỉ để luyện, không tính điểm, không ghi lần ôn; (d) **lượt gợi nhớ**: hiện nghĩa tiếng Việt, gõ tiếng Đức (danh từ kèm mạo từ), có nút "Gợi ý chữ đầu" (hiện chữ đầu mỗi từ, không lộ mạo từ), chấm bằng `answer-check`. Bậc (c) và (d) xáo thứ tự; sai thì hiện đáp án và hỏi lại cuối lượt, tối đa 2 lần.
3. **Ngữ pháp:** phần giải thích chia 1–3 đoạn, mỗi đoạn ≤ 120 từ tiếng Việt, có thể kèm một bảng và 2–4 ví dụ có dịch và nút nghe; đối chiếu tiếng Việt khi hữu ích. **Sau mỗi đoạn là 2–4 bài tập về đúng đoạn đó**; cuối bước là 4–6 bài tập trộn cả bài. Tổng 8–14 bài tập.
4. **Hội thoại / đoạn đọc:** 6–12 dòng tự soạn, chỉ dùng từ đã học đến bài này (từ ngoài danh sách có chú nghĩa `gloss`), dùng điểm ngữ pháp của bài. (a) Nghe cả bài khi chưa hiện chữ, trả lời 3–5 câu hỏi hiểu. (b) Hiện chữ; chạm một dòng để nghe lại và xem dịch. (c) Chép chính tả 2 dòng của bài. (d) Nói theo có ghi âm, bỏ qua được (F15, thêm 2026-10-25).
5. **Vận dụng:** viết 3–5 câu theo đề của bài, dùng lại luồng F5 ngay trong bài (tự sửa, kiểm lại, xem đáp án; đề và cấp điền sẵn). Bỏ qua được.
6. **Tổng kết:** điểm (số bài tập đúng ngay lần đầu / tổng), lỗi mới đã vào sổ lỗi, số thẻ đã vào hàng ôn, gợi ý làm lại nếu điểm < 70%, nút "Bài tiếp".

**Kiểu bài tập** (chấm bằng hàm thuần ở client; mọi ô gõ có hàng nút umlaut):
| Kiểu | Hiện | Người dùng | Chấm |
| --- | --- | --- | --- |
| `fill` | Câu có một chỗ trống + dịch tiếng Việt | Gõ chỗ trống | `answer-check` với danh sách đáp án |
| `order` | Các mảnh câu xáo trộn + dịch | Chạm theo thứ tự | Khớp một trong các thứ tự đúng đã liệt kê |
| `transform` | Câu + yêu cầu (vd "Chuyển sang Perfekt") | Gõ cả câu | `answer-check`; không khớp đáp án nào thì hỏi AI (P6) |
| `translate` | Câu tiếng Việt ngắn | Gõ câu tiếng Đức | Như `transform` |
| `choose` | Câu + 2–4 lựa chọn | Chạm một | Khớp. Chỉ dùng để phân biệt (der/die/das, Dativ/Akkusativ, als/wenn) |
| `listen` | Nút nghe | Gõ câu vừa nghe | `answer-check` |
| `question` | Câu hỏi hiểu hội thoại (richtig/falsch hoặc a/b/c) | Chạm một | Khớp |

- Mỗi bài tập có thể có `hint_vi` (nút "Gợi ý"). Có `explain_vi` ngắn hiện sau khi trả lời. Đúng ngay lần đầu, không dùng gợi ý thì mới tính điểm.
- Bài tập sai được đưa lại cuối bước một lần (không tính điểm lại).
- Sau mỗi bài tập có nút "Hỏi gia sư" (mở F6 kèm ngữ cảnh: bài, bài tập, đáp án đã gõ).

**Nối với ôn (F3):**
- Xong lượt gợi nhớ của một nhóm từ: nhập các mục đó vào kho (`save_items`, gắn tag `pack:<chặng>` và `lesson:<mã bài>`, nguồn "Lộ trình <cấp>"). Mục đã có thì chỉ gắn tag.
- Kết quả lần gõ đầu ở lượt gợi nhớ **là lần ôn đầu của thẻ `vi_de`**. Lần ôn này ghi `review_logs` và lập lịch bằng ts-fsrs, rating lấy theo luật đề xuất ở F3 (dùng gợi ý chữ đầu tính như dùng gợi ý, cờ `used_hint`, và không tính điểm bài), người dùng không phải xác nhận. Thẻ vào bước học của FSRS như mọi thẻ đã ôn lần đầu (đến hạn lại sau vài phút đến 1 ngày tùy rating). Lần ôn này gắn cờ `lesson` và không tính vào giới hạn thẻ mới trong ngày. Thẻ `audio_de`, `cloze` giữ trạng thái New và vào phiên ôn theo `new_cards_per_day`, ưu tiên thẻ mới của mục đã học qua bài.
- Thẻ `vi_de` không còn ở trạng thái New (đã mở chặng trước M11 hoặc đã thêm tay) thì lượt gợi nhớ chỉ để luyện, không ghi lần ôn.
- Mục ngữ pháp (`g`) của bài được nhập khi xong bước Ngữ pháp, thẻ cloze ở trạng thái New.

**Nối với sổ lỗi (F4):**
- Mỗi điểm ngữ pháp trong dữ liệu có sẵn `rule_key`, `category`, `title_vi`, `explanation_vi` (1–2 câu).
- Ghi một lần mắc lỗi với `rule_key` của điểm ngữ pháp, nguồn `lesson`, khi sai ở **bài tập trộn cuối bước Ngữ pháp** hoặc ở F12. Câu sai lấy câu có đáp án đã gõ, câu đúng lấy câu với đáp án đầu tiên. Sai ở bài tập ngay sau một đoạn giải thích thì không ghi, vì đó là lần đầu gặp quy tắc. Sai mạo từ ở lượt gợi nhớ thì ghi như F3.
- Danh sách `rule_key` gửi cho P2/P3 (F4 "Khóa lỗi nhất quán") có thêm khóa của các điểm ngữ pháp đã học, để lỗi từ bài viết và từ bài học cùng một khóa.

**Học tiếp và mở bài:**
- Lưu bước đang làm vào `lesson_progress.step`. Mở lại bài thì vào đầu bước đó.
- Làm lại bài đã xong được, nhưng chỉ để luyện: không nhập mục trùng, không ghi lần ôn, cập nhật `score` mới.
- Thứ tự bài và chặng là **gợi ý, không khóa cứng**. Mở một bài khi bài trước chưa xong thì hỏi xác nhận một lần. Lý do: người học vẫn có thể đi trước bằng giáo trình.
- Giờ học trên các màn bài học được đo bằng heartbeat F8 với `activity = 'lesson'`.

**Dữ liệu bài học:** tĩnh trong code, mỗi chặng một file `data/lessons/<mã chặng>.ts`, tự soạn (không chép giáo trình). Hàm thuần đọc và kiểm dữ liệu ở `lib/course/`. Giải thích ngữ pháp dùng định dạng hạn chế: đoạn văn, `**đậm**`, danh sách `-`, bảng `|`. App tự hiển thị định dạng này, không thêm thư viện markdown. Khung dữ liệu:
```ts
type GrammarPoint = { key: string; rule_key: string; category: ErrorCategory; title_vi: string; explanation_vi: string };
type Lesson = {
  id: string;                    // 'a1-01-1'
  title_vi: string; goal_vi: string;
  items: string[];               // khóa mục trong gói (german, kèm mạo từ nếu là danh từ)
  grammar: { point: string; sections: { text_vi: string; table?: string; examples: [de: string, vi: string][]; exercises: Exercise[] }[]; mixed: Exercise[] };
  dialogue: { lines: { speaker: 'A' | 'B'; de: string; vi: string }[]; gloss: Record<string, string>; questions: Exercise[]; dictation: number[] };
  writing_prompt_vi: string;
};
type StageLessons = { stage_id: string; points: GrammarPoint[]; lessons: Lesson[]; test: StageTestPool };
```

**Màn hình:**
- `/learn` (trang Học): bài kế tiếp ở đầu trang (nút Học tiếp / Bắt đầu); bên dưới là các chặng theo cấp. Mỗi chặng mở ra các bài (chưa học / đang học bước x/6 / xong kèm điểm) và kiểm tra chặng (chưa làm / điểm cao nhất / đã qua). `/roadmap` chuyển hướng về `/learn`.
- `/learn/[lessonId]`: làm bài, ẩn thanh điều hướng dưới như phiên ôn, thoát bằng nút X (lưu bước).
- Trang Hôm nay (F7): thêm khối **Bài học** ngay sau Sổ lỗi, hiện bài hoặc kiểm tra kế tiếp và nút một chạm. Nếu còn trên 50 thẻ đến hạn thì nhắc "ôn trước" nhưng không chặn. Khối "Bài mới hôm nay" đổi tên thành "Việc học khác" (việc ngoài app) và thôi gợi ý mở chặng. Đề "Viết 5 câu" lấy theo bài vừa học gần nhất nếu có.

TCHT:
- Test tự động trên toàn bộ dữ liệu bài của các chặng đã có:
  - Mọi mục của gói thuộc đúng một bài của chặng.
  - Mỗi điểm ngữ pháp của chặng có đúng một bài.
  - Mỗi bài có 8–14 bài tập ngữ pháp, 3–5 câu hỏi hiểu và 2 dòng chép chính tả.
  - `fill` có đúng một `{…}`. Các mảnh của `order` ghép lại khớp một đáp án. `choose`/`question` có đúng một đáp án đúng nằm trong các lựa chọn.
  - Mọi `rule_key` đúng định dạng F4 và không trùng giữa các điểm ngữ pháp.
  - Hội thoại: ≥ 90% từ (sau chuẩn hóa) đã xuất hiện trong mục hoặc câu ví dụ của các bài đến bài này, hoặc có trong `gloss`.
- Unit test hàm thuần: chấm từng kiểu bài tập; tính điểm; đổi kết quả gợi nhớ thành rating; vị trí khóa học (bài kế, chặng hiện tại).
- Làm trọn bài A1-01-1 ở 375px:
  - Rời giữa bài rồi mở lại thì vào đúng bước.
  - Xong bài: mục của bài có trong `/items`, thẻ `vi_de` có `review_logs` (cờ `lesson`) và đã rời trạng thái New, thẻ khác ở trạng thái New.
- Làm lại bài đã xong không sinh mục, thẻ hay `review_logs` trùng.
- Sai một bài tập trộn của điểm "sein" thì sổ lỗi có một lần mắc với `rule_key` của điểm đó, nguồn `lesson`.
- Giờ học trong bài được cộng vào `study_sessions` với `activity = 'lesson'`.

### F12. Kiểm tra chặng (thêm 2026-10-24)
- **Đề 20 câu** (23 câu ở chặng có 4 điểm ngữ pháp), rút ngẫu nhiên mỗi lần làm:
  - 8 câu từ vựng: rút từ mục của gói chặng (6 Việt→Đức, 2 nghe chép).
  - 9 câu ngữ pháp (12 nếu chặng có 4 điểm): 3 câu cho mỗi điểm ngữ pháp, rút từ kho soạn sẵn ≥ 5 câu mỗi điểm. Kho này khác các bài tập trong bài học.
  - 3 câu đọc hiểu về một đoạn đọc mới 80–150 từ của chặng.
- Không có gợi ý và không hiện đáp án trong lúc làm. Nộp xong mới hiện từng câu sai kèm đáp án và giải thích.
- **Đạt khi đúng ≥ 80%** (16/20; 19/23). Chặng có một lần đạt thì tính là "đã qua"; chặng hiện tại là chặng đầu tiên chưa qua.
- Chưa đạt: liệt kê điểm ngữ pháp đúng dưới 2/3 câu và gợi ý làm lại bài tương ứng. Mọi lần làm lưu vào `stage_tests`.
- Câu ngữ pháp sai thì ghi sổ lỗi như F11.
- **Bỏ qua chặng:** làm kiểm tra khi chưa học bài nào của chặng mà đạt thì các bài của chặng được đánh dấu `skipped`. Mục của gói được nhập vào kho, thẻ ở trạng thái New.
- Trạng thái chặng ở `/learn` và Hôm nay tính theo F11/F12, không theo % thẻ Review như F10 nữa. % thẻ đã thuộc vẫn hiện để tham khảo.

TCHT:
- Unit test rút đề (đủ 20 câu, đúng tỉ lệ, không trùng), chấm, ngưỡng đạt 16/20, liệt kê điểm yếu.
- Đạt kiểm tra A1-02 trước khi học: các bài A1-02 thành `skipped`, mục được nhập, A1-03 thành chặng hiện tại.
- Làm kiểm tra ở 375px trọn luồng, không lộ đáp án trước khi nộp.

### F13. Báo nội dung sai (thêm 2026-10-25)
Nội dung gói từ và bài học do AI soạn, chưa có người bản xứ duyệt. Người học cần ghi lại ngay chỗ nghi sai để sửa dữ liệu sau, không phải nhớ hay chụp màn hình.
- **Nút "Báo sai"** (chữ nhỏ, không chiếm chỗ) ở: thẻ giới thiệu từ (bước Từ mới), mỗi đoạn giải thích ngữ pháp, mỗi bài tập sau khi đã trả lời (cả câu hỏi hiểu và chép chính tả), mỗi dòng hội thoại khi đã hiện chữ, mỗi câu sai trong kết quả kiểm tra chặng (F12) và thi thử (F14).
- Bấm thì mở ô ghi chú (không bắt buộc, ≤ 500 ký tự) và nút Gửi. Lưu một dòng `content_reports`: `target` là mã chỗ báo (`word:<chặng>:<khóa mục>`, `grammar:<bài>:<đoạn>`, `exercise:<mã bài tập>`, `dialogue:<bài>:<dòng>`, `test:<mã câu>`), `excerpt` là nội dung đang hiện lúc báo.
- Báo lại một chỗ đang mở thì cập nhật ghi chú và nội dung của dòng cũ, không thêm dòng.
- **`/settings`, khối "Nội dung đã báo":** danh sách đang mở, mới nhất trước; mỗi dòng có "Đã sửa" (đặt `resolved_at`) và "Xóa". Nút "Sao chép danh sách" chép văn bản thuần (mỗi chỗ một dòng: mã · nội dung · ghi chú) để dán cho người sửa dữ liệu. Có số lượng đã sửa để tham khảo.
- Có trong sao lưu (F9).

TCHT:
- Unit test: tạo và đọc mã chỗ báo, định dạng văn bản sao chép.
- Báo một bài tập ở 375px thì dòng đó hiện ở `/settings`; báo lại cùng chỗ không thêm dòng; "Đã sửa" thì dòng rời danh sách đang mở.
- Xuất rồi nhập sao lưu giữ nguyên các dòng báo.

### F14. Thi thử cuối cấp (thêm 2026-10-25)
Một đề dài hơn kiểm tra chặng để biết đã vững cả cấp chưa trước khi lên cấp sau. Không phải đề theo định dạng Goethe.
- Có cho mỗi cấp mà mọi chặng đã có bài và kiểm tra (F11, F12). **Đề 40 câu**, rút ngẫu nhiên mỗi lần làm từ dữ liệu sẵn có của các chặng trong cấp:
  - 12 câu từ vựng (9 Việt→Đức, 3 nghe chép) rút từ mục từ của các gói trong cấp.
  - 22 câu ngữ pháp rút từ kho câu kiểm tra chặng: chọn ngẫu nhiên 22 điểm ngữ pháp khác nhau của cấp, mỗi điểm một câu.
  - 6 câu đọc hiểu: 2 bài đọc của 2 chặng khác nhau, mỗi bài 3 câu.
- Như F12: không gợi ý, không hiện đáp án trước khi nộp, server chấm lại theo mã câu. Có đồng hồ thời gian đã làm (không giới hạn giờ).
- **Đạt khi đúng ≥ 60% (24/40)**, như ngưỡng đạt của Goethe. Kết quả: điểm từng phần (từ vựng, ngữ pháp, đọc), các câu sai kèm đáp án, các điểm ngữ pháp sai kèm link bài tương ứng.
- Mỗi lần làm lưu vào `level_tests`. Câu ngữ pháp sai ghi sổ lỗi như F12. Thi thử không đổi trạng thái bài hay chặng.
- `/learn`: cuối mỗi cấp có thẻ "Thi thử <cấp>" (chưa làm / điểm cao nhất / đã đạt). Gợi ý làm khi đã qua mọi chặng của cấp nhưng không khóa.

TCHT:
- Unit test rút đề (đủ 40 câu, đúng tỉ lệ, không trùng, 22 điểm khác nhau, 2 bài đọc khác chặng), chấm, ngưỡng 24/40, điểm từng phần.
- Làm trọn thi thử A1 ở 375px, không lộ đáp án trước khi nộp; lần làm có trong `level_tests`.

### F15. Nói theo có ghi âm (thêm 2026-10-25)
Luyện miệng theo cách shadowing: nghe câu mẫu, tự đọc theo, nghe lại giọng mình cạnh giọng mẫu. Không chấm.
- Bước Hội thoại (F11) có thêm phần **(d) Nói theo** sau chép chính tả, bỏ qua được: lần lượt từng dòng hội thoại, hiện chữ và nghĩa; nút "Nghe mẫu", "Ghi âm" (bấm lần nữa để dừng, tự dừng sau 15 giây), "Nghe lại mình", "Mẫu rồi mình" (phát giọng mẫu rồi bản ghi liền nhau); ghi lại được nhiều lần; "Dòng tiếp".
- Ghi bằng `MediaRecorder` của trình duyệt. Bản ghi chỉ ở bộ nhớ trang: không tải lên, không lưu, rời phần này là mất.
- Không tính điểm bài. Trình duyệt không có micro hoặc người học từ chối quyền thì báo rõ và vẫn đi tiếp được.

TCHT:
- Ghi và nghe lại một dòng ở 375px (Chrome Android, Safari iOS); từ chối quyền micro thì vẫn sang được bước Vận dụng.
- Không có request mạng nào mang dữ liệu âm thanh.

## 6. AI: prompt và schema

Quy định chung:
- Đặt trong `lib/ai/`. Mỗi prompt là một hàm nhận đầu vào có kiểu và trả về kết quả đã kiểm bằng Zod.
- Dùng tool use với `input_schema` để ép JSON.
- Nhiệt độ thấp (0–0.3) cho chấm và điền; 0.7 cho gia sư và sinh đề.
- Ghi log mỗi lời gọi (prompt id, thời gian, lỗi) để gỡ rối.

Quy tắc chung đưa vào mọi system prompt:
> Người học là người Việt, đang học tiếng Đức ở trình độ {level}. Giải thích bằng tiếng Việt, ngắn gọn, chính xác. Ví dụ tiếng Đức phải tự nhiên, đúng chuẩn, kèm bản dịch tiếng Việt. Khi hữu ích, đối chiếu với cấu trúc tiếng Việt. Không bịa quy tắc; nếu có ngoại lệ hoặc không chắc, nói rõ.

**P1 — Điền mục từ** (đầu vào: `german`, `level`). Schema S1:
```json
{ "german": "Tisch", "type": "word", "pos": "noun",
  "article": "der", "plural": "-e",
  "vietnamese": "cái bàn",
  "example_de": "Der Tisch steht in der Küche.", "example_vi": "Cái bàn ở trong bếp.",
  "grammar_note_vi": "Danh từ giống đực, số nhiều: die Tische.",
  "level_guess": "A1" }
```
Ràng buộc: `article` bắt buộc khi `pos = noun`; câu ví dụ không vượt trình độ `level`; với động từ thì ghi các dạng chính (Präsens ngôi 3, Perfekt) trong `grammar_note_vi`.

**P2 — Kiểm tra câu** (đầu vào: `text`, `prompt?`, `level`, `existing_rule_keys`, `mode: 'check'|'recheck'`, `previous_feedback?`). Schema S2:
```json
{ "corrected_text": "Ich fahre mit dem Bus.",
  "errors": [
    { "wrong": "den Bus", "correct": "dem Bus",
      "start": 13, "end": 20,
      "category": "case", "rule_key": "dativ-nach-mit",
      "title_vi": "mit luôn đi với Dativ",
      "hint_vi": "Giới từ mit đòi hỏi cách nào?",
      "explanation_vi": "mit + Dativ, nên der Bus → dem Bus." } ],
  "overall_vi": "Câu đúng trật tự, chỉ sai cách sau mit.",
  "upgrade_suggestion_de": null }
```
Ràng buộc:
- `start` và `end` là vị trí ký tự trong `text` gốc; server kiểm `text.slice(start,end) === wrong`, sai thì tự tìm lại theo `wrong`.
- `hint_vi` không được chứa chuỗi `correct`.
- Chỉ đánh dấu lỗi thật, không sửa văn phong khi câu đã đúng và tự nhiên.
- Chế độ `recheck`: trả thêm `fixed: string[]` (rule_key đã sửa đúng) và `still_wrong: string[]`.

**P3 — Gia sư** (stream, không ép JSON). System prompt = quy tắc chung + ngữ cảnh F6 +:
> Nếu người học hỏi đáp án của một bài tập, trước hết gợi ý một bước để họ tự nghĩ; chỉ đưa đáp án khi họ xin lần nữa.

**P4 — Phán câu sửa lỗi** (đầu vào: `wrong`, `accepted_corrections[]`, `answer`, `rule_title_vi`). Schema:
```json
{ "correct": true, "fixes_target_error": true, "other_errors": [], "note_vi": "Đúng, cách viết khác nhưng hợp lệ." }
```
Chỉ tính đúng khi `correct` và `fixes_target_error` đều là `true`.

**P5 — Báo cáo tuần** (đầu vào: `stats`, `settings`, báo cáo tuần trước). Đầu ra:
```json
{ "summary_vi": "…", "adjustments": ["…","…","…"] }
```
Điều chỉnh phải cụ thể và đo được (vd "Giảm thẻ mới còn 10/ngày vì tỉ lệ nhớ 82% < 90%").

**P6 — Phán đáp án bài tập** (F11 `transform`/`translate`, khi đáp án không khớp đáp án soạn sẵn nào; đầu vào: `instruction_vi`, `prompt`, `accepted_answers[]`, `answer`, `grammar_title_vi`, `level`). Schema:
```json
{ "correct": true, "uses_target_grammar": true, "note_vi": "Đúng, trật tự khác nhưng hợp lệ." }
```
Chỉ tính đúng khi cả hai là `true`. AI lỗi thì tính là sai, hiện đáp án soạn sẵn và báo "chưa kiểm được bằng AI".

## 7. Màn hình và route

| Route | Nội dung |
| --- | --- |
| `/login` | Đăng nhập magic link |
| `/` | Hôm nay (F7) |
| `/review` | Phiên ôn (F3) |
| `/add` | Thêm một mục / nhập hàng loạt (F2) |
| `/items` | Danh sách mục: tìm, lọc theo nguồn/cấp/loại, sửa, treo thẻ |
| `/errors` | Sổ lỗi (F4) |
| `/write` | Kiểm tra câu (F5); `/write/history` lịch sử |
| `/tutor` | Gia sư (F6) |
| `/progress` | Tiến độ, dự báo, báo cáo tuần (F8) |
| `/settings` | Cài đặt, nguồn, sao lưu, nội dung đã báo sai (F8, F9, F13) |
| `/roadmap` | Lộ trình A1 → B2 (F10); từ M11 chuyển hướng về `/learn` |
| `/learn` | Học: bài kế tiếp, các chặng, bài và kiểm tra chặng (F11, F12) |
| `/learn/[lessonId]` | Làm một bài (F11) |
| `/learn/test/[stageId]` | Kiểm tra chặng (F12) |
| `/learn/exam/[level]` | Thi thử cuối cấp (F14) |

Điều hướng: thanh dưới trên điện thoại gồm 5 mục: Hôm nay · Học · Ôn · Viết · Gia sư (từ M11; trước đó "Thêm" thay cho "Học"). "Thêm" và các trang còn lại vào từ menu.

Yêu cầu giao diện:
- Chữ tiếng Đức dễ đọc (≥ 18px trên thẻ ôn).
- Bàn phím ảo không che ô nhập.
- Có hàng nút chèn nhanh `ä ö ü ß Ä Ö Ü` ngay trên ô nhập ở mọi màn hình gõ tiếng Đức.
- Mạo từ tô màu thống nhất (der xanh dương, die đỏ, das xanh lá), kèm chữ để không phụ thuộc màu.
- Chế độ tối theo hệ thống.

## 8. Yêu cầu phi chức năng
- Bảo mật: RLS trên mọi bảng; khóa service role và Anthropic chỉ dùng ở server; không ghi nội dung người dùng vào log của bên thứ ba.
- Hiệu năng: trang Hôm nay tải dưới 1,5 giây trên 4G; phiên ôn tải sẵn thẻ kế tiếp.
- Độ bền: lỗi gọi AI không làm mất dữ liệu người dùng đã nhập; mọi lời gọi AI có timeout 30 giây và thử lại có backoff.
- Chất lượng mã: TypeScript strict, ESLint, không `any` ở logic lõi; logic thuần (chấm đáp án, lập lịch, gom lỗi, dự báo) tách khỏi UI và có unit test.

## 9. Thứ tự build (mốc)

Làm tuần tự, mỗi mốc kết thúc bằng: test xanh, chạy thử trên điện thoại thật, commit. Không bắt đầu mốc sau khi mốc trước chưa đạt TCHT.

| Mốc | Nội dung | Ước lượng |
| --- | --- | --- |
| M1 | Khởi tạo Next.js + Tailwind + Supabase; migration toàn bộ schema mục 4; RLS; F1; khung điều hướng; PWA manifest | 2–3 ngày |
| M2 | F2 (thêm tay, P1 điền giúp, nhập hàng loạt, tự sinh thẻ) + `/items` | 3–4 ngày |
| M3 | F3 đầy đủ (answer-check + test, ts-fsrs + test, 4 kiểu thẻ, hoàn tác) + phần ôn của F7 | 4–5 ngày |
| M4 | F5 + F4 (gom lỗi, thẻ error_fix, P4, quy tắc đóng lỗi + test) | 4–5 ngày |
| M5 | F6 gia sư (stream, ngữ cảnh, lưu thẻ, lưu lỗi) | 2 ngày |
| M6 | F7 hoàn chỉnh + F8 (heartbeat, tiến độ, dự báo + test, báo cáo tuần) + F9 | 3–4 ngày |
| M7 | F10 khung lộ trình (dữ liệu, mở chặng, `/roadmap`, gợi ý ở Hôm nay) + gói A1 | thêm 2026-10-24 |
| M8 | Gói A2 | |
| M9 | Gói B1 | |
| M10 | Gói B2 | |
| M11 | Khung F11 + F12: migration, định dạng dữ liệu bài + kiểm tra tự động, trình làm bài (6 bước, 7 kiểu bài tập), P6, nối F3/F4/F8, `/learn`, khối Bài học ở Hôm nay, thanh điều hướng mới; nội dung mẫu A1-01, A1-02 (bài + kiểm tra) | thêm 2026-10-24 · 5–6 ngày |
| M12 | Bài + kiểm tra A1-03 → A1-12 | |
| M13 | Bài + kiểm tra A2 (12 chặng) | |
| M14 | Bài + kiểm tra B1 (13 chặng) | |
| M15 | Bài + kiểm tra B2 (13 chặng) | |
| M16 | F13 báo nội dung sai: migration, nút ở bài học và kết quả kiểm tra, khối ở `/settings`, sao lưu | thêm 2026-10-25 |
| M17 | Bổ sung từ đời sống A2 (phát hiện 3 ở `docs/doi-chieu-goethe.md`), gán vào bài | thêm 2026-10-25 |
| M18 | F14 thi thử cuối cấp: migration, rút đề + test, `/learn/exam/[level]`, thẻ ở `/learn`, sao lưu | thêm 2026-10-25 |
| M19 | F15 nói theo trong bước Hội thoại | thêm 2026-10-25 |

Thứ tự làm từ 2026-10-25 (người dùng duyệt): M16 → M15 → M17 → M18 → M19.

**Điểm dừng để bắt đầu học thật:** sau M3 là đủ để dùng hằng ngày. Từ đó, việc build làm song song nhưng không quá 20% thời gian học mỗi tuần.

## 10. Sau giai đoạn 1 (chỉ để định hướng, KHÔNG làm bây giờ)
- **A1–A2:** chấm phát âm theo câu và bài cặp tối thiểu (Azure Pronunciation Assessment de-DE); sổ lỗi phát âm riêng cho người Việt (cụm phụ âm, phụ âm cuối, ü/ö, độ dài nguyên âm).
- **B1:** chấm bài viết dài theo thang Goethe; luyện hỏi đáp nói với AI; thư viện bài đọc phân cấp có chạm tra từ.
- **B2:** thuyết trình và thảo luận kiểu Goethe B2; kho mẫu câu học thuật; nghe bài giảng và ghi chú.
- **C1:** mô phỏng TestDaF số đủ 4 phần (Đọc 7 nhiệm vụ ~55 phút, Nghe 7 ~40, Viết 2 ~60, Nói 7 ~35, có ghi âm và đếm giờ); chấm theo bậc TDN 3–5; hiệu chỉnh AI bằng điểm thi thật.
