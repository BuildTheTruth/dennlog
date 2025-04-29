import { Metadata } from 'next';
import {
  WUTHERINGWAVES_CHARACTER_BY_ID,
  WutheringwavesCharacterID,
} from '@/data/wutheringwaves/characters';

interface Props {
  children: React.ReactNode;
  params: { characterId: WutheringwavesCharacterID };
}

const DESCRIPTIONS = [
  '육성법',
  '스킬 순서',
  '추천 무기',
  '추천 에코',
  '스펙',
  '파티 조합',
] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const character = WUTHERINGWAVES_CHARACTER_BY_ID[params.characterId];

  return {
    title: `${character.name} | DennLog`,
    description: `${DESCRIPTIONS.map(desc => `명조 ${character.name} ${desc}`).join(', ')}`,
    openGraph: {
      title: `${character.name} | DennLog`,
      description: `${DESCRIPTIONS.map(desc => `명조 ${character.name} ${desc}`).join(', ')}`,
      images: [{ url: character.imageURL }],
    },
  };
}

export default function WutheringwavesCharacterLayout({ children }: Props) {
  return <>{children}</>;
}
