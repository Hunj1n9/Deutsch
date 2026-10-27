# Cài đặt nhắc học (F16)

Làm một lần sau khi deploy bản có M20.

## 1. Tạo khóa

```bash
npx web-push generate-vapid-keys   # ra Public Key và Private Key
openssl rand -hex 32               # CRON_SECRET
```

## 2. Biến môi trường trên Vercel (Production)

| Biến | Giá trị |
| --- | --- |
| `NEXT_PUBLIC_VAPID_PUBLIC_KEY` | Public Key ở bước 1 |
| `VAPID_PRIVATE_KEY` | Private Key ở bước 1 |
| `VAPID_SUBJECT` | `mailto:<email của bạn>` |
| `CRON_SECRET` | chuỗi ngẫu nhiên ở bước 1 |
| `SUPABASE_SERVICE_ROLE_KEY` | đã có từ trước; lần chạy nhắc cần khóa này |

Đặt xong thì Redeploy (biến `NEXT_PUBLIC_*` được nhúng lúc build).

## 3. Áp migration và đặt khóa cho Supabase gọi app

```bash
npx supabase db push
```

Migration bật `pg_cron`, `pg_net` và lên lịch gọi `POST <app>/api/cron/remind` mỗi 15 phút.
Mở Supabase → SQL Editor, chạy một lần (thay giá trị thật):

```sql
select vault.create_secret('https://<tên-app>.vercel.app', 'deutsch_app_url');
select vault.create_secret('<CRON_SECRET>', 'deutsch_cron_secret');
```

Kiểm tra: `select * from cron.job_run_details order by start_time desc limit 5;` và
`select status_code, content from net._http_response order by created desc limit 5;` (200 là chạy đúng).

## 4. Bật trên điện thoại

- **iPhone (iOS 16.4+):** mở app trong Safari → Chia sẻ → "Thêm vào MH chính" → mở app từ biểu tượng mới → Cài đặt → "Bật nhắc trên máy này".
- **Android (Chrome):** Cài đặt → "Bật nhắc trên máy này" → Cho phép.

Bấm "Gửi thử" để kiểm tra. Giờ nhắc theo giờ Việt Nam, có thể lệch tối đa 15 phút.
