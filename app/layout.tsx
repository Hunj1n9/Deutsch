import type { Metadata, Viewport } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';

// Be Vietnam Pro: chữ hình học gọn như Brilliant, đủ dấu tiếng Việt và ä ö ü ß (design/DESIGN.md).
const beVietnam = Be_Vietnam_Pro({
  variable: '--font-be-vietnam',
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'Deutsch', template: '%s · Deutsch' },
  description: 'Tự học tiếng Đức từ số 0 đến TestDaF',
  applicationName: 'Deutsch',
  appleWebApp: { capable: true, title: 'Deutsch', statusBarStyle: 'default' },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  // Bàn phím ảo thu nhỏ vùng hiển thị thay vì che ô nhập.
  interactiveWidget: 'resizes-content',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f6f3' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f10' },
  ],
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} h-full`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
