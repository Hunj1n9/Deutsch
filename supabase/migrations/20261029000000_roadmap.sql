-- M7: tiến độ lộ trình (F10). Chỉ thêm hàm, không sửa bảng.
-- Mỗi gói: số thẻ (không treo) của các mục có tag `pack:<mã chặng>` và số thẻ đã ở trạng thái Review.
create or replace function public.roadmap_progress()
returns table (pack text, cards int, learned int)
language sql
stable
security invoker
set search_path = ''
as $$
  select substr(t.tag, 6) as pack,
         count(c.id)::int as cards,
         (count(c.id) filter (where c.state = 2))::int as learned
  from public.items i
  cross join lateral unnest(i.tags) as t(tag)
  left join public.cards c on c.item_id = i.id and not c.suspended
  where i.user_id = (select auth.uid()) and t.tag like 'pack:%'
  group by t.tag;
$$;

revoke execute on function public.roadmap_progress() from public, anon;
grant execute on function public.roadmap_progress() to authenticated;
