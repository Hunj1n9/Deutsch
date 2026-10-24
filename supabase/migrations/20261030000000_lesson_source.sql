-- M11: nguồn lỗi 'lesson' (lỗi ghi từ bài học và kiểm tra chặng, F11 F12).
-- Tách file riêng: giá trị enum mới không dùng được trong cùng giao dịch với lệnh thêm nó.
alter type public.source_kind add value if not exists 'lesson';
