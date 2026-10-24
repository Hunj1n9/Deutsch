-- M3: ôn tập FSRS.

-- ts-fsrs 5 có trường learning_steps trong Card (bước học hiện tại: 1 phút → 10 phút).
-- Không lưu thì thẻ đang học luôn bị tính lại từ bước đầu (DECISIONS.md).
alter table public.cards add column learning_steps smallint not null default 0;

-- Ghi một lần chấm: cập nhật trạng thái thẻ và thêm review_logs trong cùng một giao dịch (SPEC F3).
-- p_expected_reps chống ghi đè khi cùng một thẻ được chấm hai lần (vd hai tab).
-- p_next: trạng thái FSRS mới; p_log: rating, suggested_rating, answer_given, correct, flags, response_ms,
--         state_before, due_before, stability_before, difficulty_before.
create or replace function public.apply_review(p_card_id uuid, p_expected_reps int, p_next jsonb, p_log jsonb)
returns uuid
language plpgsql
security invoker
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_log_id uuid;
begin
  if v_user is null then
    raise exception 'not authenticated' using errcode = '42501';
  end if;

  update public.cards set
    due            = (p_next->>'due')::timestamptz,
    stability      = (p_next->>'stability')::double precision,
    difficulty     = (p_next->>'difficulty')::double precision,
    elapsed_days   = (p_next->>'elapsed_days')::int,
    scheduled_days = (p_next->>'scheduled_days')::int,
    learning_steps = (p_next->>'learning_steps')::smallint,
    reps           = (p_next->>'reps')::int,
    lapses         = (p_next->>'lapses')::int,
    state          = (p_next->>'state')::smallint,
    last_review    = nullif(p_next->>'last_review', '')::timestamptz
  where id = p_card_id and user_id = v_user and reps = p_expected_reps;
  if not found then
    raise exception 'card changed or not found' using errcode = '40001';
  end if;

  insert into public.review_logs (
    user_id, card_id, rating, suggested_rating, answer_given, correct, flags, response_ms,
    state_before, due_before, stability_before, difficulty_before
  ) values (
    v_user,
    p_card_id,
    (p_log->>'rating')::smallint,
    (p_log->>'suggested_rating')::smallint,
    p_log->>'answer_given',
    (p_log->>'correct')::boolean,
    coalesce(array(select jsonb_array_elements_text(p_log->'flags')), '{}'),
    (p_log->>'response_ms')::int,
    (p_log->>'state_before')::smallint,
    (p_log->>'due_before')::timestamptz,
    (p_log->>'stability_before')::double precision,
    (p_log->>'difficulty_before')::double precision
  )
  returning id into v_log_id;

  return v_log_id;
end;
$$;

-- Hoàn tác lần chấm gần nhất của một thẻ: khôi phục trạng thái trước đó và xóa log, trong một giao dịch.
-- p_restore là toàn bộ trạng thái thẻ trước lần chấm (client giữ lại); phải khớp các cột *_before của log.
create or replace function public.undo_review(p_log_id uuid, p_restore jsonb)
returns void
language plpgsql
security invoker
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_log public.review_logs;
begin
  if v_user is null then
    raise exception 'not authenticated' using errcode = '42501';
  end if;

  select * into v_log from public.review_logs where id = p_log_id and user_id = v_user;
  if not found then
    raise exception 'review not found' using errcode = 'P0002';
  end if;
  if exists (
    select 1 from public.review_logs
    where card_id = v_log.card_id and reviewed_at > v_log.reviewed_at
  ) then
    raise exception 'only the latest review can be undone' using errcode = '22023';
  end if;
  if (p_restore->>'state')::smallint is distinct from v_log.state_before
     or (p_restore->>'due')::timestamptz is distinct from v_log.due_before
     or (p_restore->>'stability')::double precision is distinct from v_log.stability_before
     or (p_restore->>'difficulty')::double precision is distinct from v_log.difficulty_before then
    raise exception 'restore state does not match review log' using errcode = '22023';
  end if;

  update public.cards set
    due            = (p_restore->>'due')::timestamptz,
    stability      = (p_restore->>'stability')::double precision,
    difficulty     = (p_restore->>'difficulty')::double precision,
    elapsed_days   = (p_restore->>'elapsed_days')::int,
    scheduled_days = (p_restore->>'scheduled_days')::int,
    learning_steps = (p_restore->>'learning_steps')::smallint,
    reps           = (p_restore->>'reps')::int,
    lapses         = (p_restore->>'lapses')::int,
    state          = (p_restore->>'state')::smallint,
    last_review    = nullif(p_restore->>'last_review', '')::timestamptz
  where id = v_log.card_id and user_id = v_user;

  delete from public.review_logs where id = p_log_id;
end;
$$;

revoke execute on function public.apply_review(uuid, int, jsonb, jsonb) from public, anon;
revoke execute on function public.undo_review(uuid, jsonb) from public, anon;
grant execute on function public.apply_review(uuid, int, jsonb, jsonb) to authenticated;
grant execute on function public.undo_review(uuid, jsonb) to authenticated;
