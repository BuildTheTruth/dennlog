import { GENSHIN_CHARACTERS } from '@/data/genshin/characters';
import { Metadata } from 'next';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: '[원신] 캐릭터 목록',
  description: '원신 캐릭터 육성 가이드',
  keywords: GENSHIN_CHARACTERS.map(character => character.name),
  openGraph: {
    title: '[원신] 캐릭터 목록',
    description: '원신 캐릭터 육성 가이드',
    images: [{ url: '/genshin.webp' }],
  },
};

export default function GenshinCharactersLayout({ children }: Props) {
  return <>{children}</>;
}
