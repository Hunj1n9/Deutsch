import { z } from 'zod';

const publicEnvSchema = z.object({
  url: z.url(),
  anonKey: z.string().min(1),
});

export type PublicEnv = z.infer<typeof publicEnvSchema>;

/** Trả về null nếu thiếu cấu hình Supabase, để proxy và trang đăng nhập báo lỗi rõ ràng thay vì sập. */
export function readPublicEnv(): PublicEnv | null {
  // Phải đọc từng biến NEXT_PUBLIC_* theo tên đầy đủ để Next nhúng được vào bundle trình duyệt.
  const parsed = publicEnvSchema.safeParse({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  });
  return parsed.success ? parsed.data : null;
}

export function getPublicEnv(): PublicEnv {
  const env = readPublicEnv();
  if (!env) throw new Error('Thiếu NEXT_PUBLIC_SUPABASE_URL hoặc NEXT_PUBLIC_SUPABASE_ANON_KEY trong .env.local');
  return env;
}

export const CONFIG_ERROR_VI = 'App chưa được cấu hình Supabase. Kiểm tra file .env.local.';
