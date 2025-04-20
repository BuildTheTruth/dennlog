import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DennLog',
  description: '개발, 게임 공략 블로그',
  keywords: [
    '원신',
    '젠레스존제로',
    '명조',
    'Genshin Impact',
    'Wuthringwaves',
    'Zenless Zone Zero',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="CzYUTzmfZZPJVjc9xU9aQ8mWHgOvQeJ_FLAmVv5Oduo"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
