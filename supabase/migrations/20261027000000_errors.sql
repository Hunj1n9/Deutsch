-- M4: ghi lỗi vào sổ lỗi, gom theo rule_key (SPEC F4). Chỉ thêm hàm, không sửa bảng.
-- Mỗi phần tử p_errors: { rule_key, category, title_vi, explanation_vi, source, text_wrong, text_correct }
-- - rule_key đã có: occurrences +1, cập nhật last_seen, mở lại nếu đang resolved, thêm error_occurrences.
-- - chưa có: tạo errors, một items loại error_fix (german = câu đúng, vietnamese = title_vi) và một thẻ error_fix.
-- Trả về [{ error_id, rule_key, created }] theo thứ tự đầu vào.
create or replace function public.record_errors(p_errors jsonb)
returns jsonb
language plpgsql
security invoker
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_err jsonb;
  v_error_id uuid;
  v_item_id uuid;
  v_created boolean;
  v_level public.cefr_level;
  v_out jsonb := '[]'::jsonb;
begin
  if v_user is null then
    raise exception 'not authenticated' using errcode = '42501';
  end if;
  select current_level into v_level from public.settings where user_id = v_user;

  for v_err in select value from jsonb_array_elements(p_errors) loop
    select id into v_error_id from public.errors
    where user_id = v_user and rule_key = v_err->>'rule_key'
    for update;

    if found then
      v_created := false;
      update public.errors set
        occurrences = occurrences + 1,
        last_seen = now(),
        status = 'open',
        resolved_at = null
      where id = v_error_id;
    else
      v_created := true;
      insert into public.errors (user_id, rule_key, category, title_vi, explanation_vi)
      values (
        v_user,
        v_err->>'rule_key',
        (v_err->>'category')::public.error_category,
        v_err->>'title_vi',
        v_err->>'explanation_vi'
      )
      returning id into v_error_id;

      insert into public.items (user_id, type, german, vietnamese, level, error_id, tags)
      values (v_user, 'error_fix', v_err->>'text_correct', v_err->>'title_vi', v_level, v_error_id, '{}')
      returning id into v_item_id;

      insert into public.cards (user_id, item_id, kind) values (v_user, v_item_id, 'error_fix');
    end if;

    insert into public.error_occurrences (error_id, source, text_wrong, text_correct)
    values (v_error_id, (v_err->>'source')::public.source_kind, v_err->>'text_wrong', v_err->>'text_correct');

    v_out := v_out || jsonb_build_object('error_id', v_error_id, 'rule_key', v_err->>'rule_key', 'created', v_created);
  end loop;

  return v_out;
end;
$$;

revoke execute on function public.record_errors(jsonb) from public, anon;
grant execute on function public.record_errors(jsonb) to authenticated;
