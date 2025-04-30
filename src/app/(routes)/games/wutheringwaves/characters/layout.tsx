import { Metadata } from 'next';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: '[명조] 캐릭터 목록',
  description: '명조 캐릭터 육성 가이드',
  openGraph: {
    title: '[명조] 캐릭터 목록',
    description: '명조 캐릭터 육성 가이드',
    images: [{ url: '/wutheringwaves.webp' }],
  },
};

export default function WutheringwavesCharactersLayout({ children }: Props) {
  return <>{children}</>;
}
