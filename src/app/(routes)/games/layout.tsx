import { Metadata } from 'next';

interface Props {
  children: React.ReactNode;
}

const GAMES = ['원신', '젠레스 존 제로'] as const;

export const metadata: Metadata = {
  title: '리딤 코드',
  description: GAMES.map(game => `${game} 리딤 코드`).join(', '),
  openGraph: {
    title: '리딤 코드',
    description: GAMES.map(game => `${game} 리딤 코드`).join(', '),
  },
  keywords: ['Genshin Impact', 'Wuthering Waves', 'Zenless Zone Zero'],
};

export default function GamesLayout({ children }: Props) {
  return <>{children}</>;
}
