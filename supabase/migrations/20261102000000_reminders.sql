-- M20: chỉ tiêu hôm nay theo ngày thi và nhắc học bằng thông báo đẩy (F16).

alter table public.settings
  add column exam_level public.cefr_level not null default 'B2',   -- cấp cần xong bài trước ngày thi
  add column reminder_enabled boolean not null default false,
  add column reminder_time time not null default '19:00',          -- giờ Việt Nam
  add column nag_time time default '21:30',                        -- nhắc lần hai nếu chưa đạt; null = tắt
  add column last_reminder_date date,                              -- ngày đã gửi, để không gửi trùng
  add column last_nag_date date;

-- Mỗi trình duyệt/thiết bị đã bật thông báo là một dòng. Không đưa vào sao lưu (gắn với thiết bị).
create table public.push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  endpoint text not null unique,
  p256dh text not null,
  auth text not null,
  created_at timestamptz not null default now()
);
create index push_subscriptions_user_idx on public.push_subscriptions (user_id);

alter table public.push_subscriptions enable row level security;
create policy own_rows on public.push_subscriptions for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

-- Gọi /api/cron/remind mỗi 15 phút. Địa chỉ app và khóa lấy từ Vault (đặt một lần, xem docs/nhac-hoc.md);
-- chưa đặt thì lời gọi hỏng lặng lẽ, không ảnh hưởng gì khác.
create extension if not exists pg_cron with schema pg_catalog;
create extension if not exists pg_net with schema extensions;

select cron.schedule(
  'deutsch-remind',
  '*/15 * * * *',
  $$
  select net.http_post(
    url := (select decrypted_secret from vault.decrypted_secrets where name = 'deutsch_app_url') || '/api/cron/remind',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || (select decrypted_secret from vault.decrypted_secrets where name = 'deutsch_cron_secret')
    ),
    body := '{}'::jsonb,
    timeout_milliseconds := 30000
  );
  $$
);
