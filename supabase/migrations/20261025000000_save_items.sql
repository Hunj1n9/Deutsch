-- M2: hàm cho F2. Chỉ thêm hàm, không sửa bảng.
-- Cả hai chạy theo quyền người gọi (security invoker) nên RLS của items/cards vẫn áp dụng.

-- Lưu nhiều mục và thẻ của chúng trong một giao dịch: không có chuyện lưu được mục mà thiếu thẻ.
-- Mỗi phần tử p_items:
--   { id?, type, german, article, plural, vietnamese, example_de, example_vi, grammar_note_vi,
--     level, source_id, tags: text[], card_kinds: card_kind[] }
-- Có id: gộp vào mục cũ (ghi nội dung đã gộp, giữ loại/nguồn/cấp độ, giữ thẻ và lịch ôn cũ, thêm thẻ còn thiếu).
-- Không có id: thêm mục mới.
-- Trả về id các mục theo đúng thứ tự đầu vào.
create or replace function public.save_items(p_items jsonb)
returns uuid[]
language plpgsql
security invoker
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_item jsonb;
  v_id uuid;
  v_ids uuid[] := '{}';
begin
  if v_user is null then
    raise exception 'not authenticated' using errcode = '42501';
  end if;
  if jsonb_typeof(p_items) is distinct from 'array' then
    raise exception 'p_items must be a json array' using errcode = '22023';
  end if;

  for v_item in select value from jsonb_array_elements(p_items) loop
    if nullif(v_item->>'id', '') is not null then
      update public.items set
        plural          = nullif(v_item->>'plural', ''),
        vietnamese      = v_item->>'vietnamese',
        example_de      = nullif(v_item->>'example_de', ''),
        example_vi      = nullif(v_item->>'example_vi', ''),
        grammar_note_vi = nullif(v_item->>'grammar_note_vi', ''),
        tags            = coalesce(array(select jsonb_array_elements_text(v_item->'tags')), tags)
      where id = (v_item->>'id')::uuid and user_id = v_user
      returning id into v_id;
      if not found then
        raise exception 'item % not found', v_item->>'id' using errcode = 'P0002';
      end if;
    else
      insert into public.items (
        user_id, type, german, article, plural, vietnamese,
        example_de, example_vi, grammar_note_vi, level, source_id, tags
      ) values (
        v_user,
        (v_item->>'type')::public.item_type,
        v_item->>'german',
        nullif(v_item->>'article', ''),
        nullif(v_item->>'plural', ''),
        v_item->>'vietnamese',
        nullif(v_item->>'example_de', ''),
        nullif(v_item->>'example_vi', ''),
        nullif(v_item->>'grammar_note_vi', ''),
        nullif(v_item->>'level', '')::public.cefr_level,
        nullif(v_item->>'source_id', '')::uuid,
        coalesce(array(select jsonb_array_elements_text(v_item->'tags')), '{}')
      )
      returning id into v_id;
    end if;

    insert into public.cards (user_id, item_id, kind)
    select v_user, v_id, kind::public.card_kind
    from jsonb_array_elements_text(coalesce(v_item->'card_kinds', '[]'::jsonb)) as kind
    on conflict (item_id, kind) do nothing;

    v_ids := v_ids || v_id;
  end loop;

  return v_ids;
end;
$$;

-- Tìm mục đã lưu trùng khóa german + article + type (không phân biệt hoa thường) để cảnh báo trùng.
-- p_keys: [{ type, german, article }]
create or replace function public.find_item_duplicates(p_keys jsonb)
returns setof public.items
language sql
stable
security invoker
set search_path = ''
as $$
  select i.*
  from public.items i
  where i.user_id = (select auth.uid())
    and exists (
      select 1
      from jsonb_to_recordset(p_keys) as k(type text, german text, article text)
      where i.type::text = k.type
        and lower(i.german) = lower(k.german)
        and coalesce(i.article, '') = coalesce(k.article, '')
    );
$$;

revoke execute on function public.save_items(jsonb) from public, anon;
revoke execute on function public.find_item_duplicates(jsonb) from public, anon;
grant execute on function public.save_items(jsonb) to authenticated;
grant execute on function public.find_item_duplicates(jsonb) to authenticated;
