import { Header } from '@/components/Header';
import ReactQueryClientProvider from '@/components/providers/ReactQueryClientProvider';
import { ThemeProvider } from '@/components/ThemeProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DennLog',
  description: '개발 및 게임 공략법 공유 블로그',
  keywords: [
    '원신',
    '명조',
    'Genshin Impact',
    'Wuthering Waves',
    '추천 무기',
    '추천 성유물',
    '추천 에코',
    '추천 파티',
    '추천 돌파',
    '스킬 순서',
    '캐릭터 육성법',
  ],
  authors: [
    {
      name: 'Dennis',
      url: 'https://dennlog.vercel.app',
    },
  ],
  creator: 'Dennis',
  publisher: 'DennLog',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://dennlog.vercel.app',
    title: 'DennLog',
    description: '개발 및 게임 공략법 공유 블로그',
    siteName: 'DennLog',
    images: [
      {
        url: '/logo.png',
        width: 500,
        height: 500,
        alt: 'DennLog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DennLog',
    description: '개발 및 게임 공략법 공유 블로그',
    creator: '@dennlog',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://dennlog.vercel.app',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="CzYUTzmfZZPJVjc9xU9aQ8mWHgOvQeJ_FLAmVv5Oduo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ReactQueryClientProvider>
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
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
