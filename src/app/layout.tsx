import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DennLog',
  description:
    '원신(Genshin Impact)과 명조(Wuthering Waves) 캐릭터 육성법, 무기 추천, 성유물/유물 조합, 팀 구성 가이드를 제공하는 게임 공략 블로그',
  keywords: [
    '원신',
    '명조',
    'Genshin Impact',
    'Wuthering Waves',
    '원신 캐릭터 육성',
    '명조 캐릭터 육성',
    '원신 가이드',
    '명조 가이드',
    '원신 무기 추천',
    '명조 무기 추천',
    '원신 성유물',
    '명조 유물',
    '원신 팀 구성',
    '명조 팀 구성',
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
    title: 'DennLog - 원신/명조 캐릭터 육성 가이드',
    description:
      '원신(Genshin Impact)과 명조(Wuthering Waves) 캐릭터 육성법, 무기 추천, 성유물/유물 조합, 팀 구성 가이드를 제공하는 게임 공략 블로그',
    siteName: 'DennLog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DennLog - 원신/명조 캐릭터 육성 가이드',
    description:
      '원신(Genshin Impact)과 명조(Wuthering Waves) 캐릭터 육성법, 무기 추천, 성유물/유물 조합, 팀 구성 가이드',
    creator: '@dennlog',
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
