-- M7: gắn tag cho nhiều mục trong một lệnh (mở chặng khi mục đã có sẵn). Chỉ thêm hàm.
create or replace function public.add_item_tag(p_ids uuid[], p_tag text)
returns int
language sql
security invoker
set search_path = ''
as $$
  with updated as (
    update public.items
    set tags = array_append(coalesce(tags, '{}'), p_tag)
    where id = any(p_ids) and user_id = (select auth.uid()) and not (p_tag = any(coalesce(tags, '{}')))
    returning 1
  )
  select count(*)::int from updated;
$$;

revoke execute on function public.add_item_tag(uuid[], text) from public, anon;
grant execute on function public.add_item_tag(uuid[], text) to authenticated;
