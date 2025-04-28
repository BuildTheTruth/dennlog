import { GENSHIN_CHARACTER_BY_ID, GenshinCharacterID } from '@/data/genshin/characters';
import { Metadata } from 'next';

interface Props {
  children: React.ReactNode;
  params: { characterId: GenshinCharacterID };
}

const DESCRIPTIONS = [
  '특성 순서',
  '추천 무기',
  '추천 성유물',
  '스펙',
  '파티 조합',
  '추천 돌파',
] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const character = GENSHIN_CHARACTER_BY_ID[params.characterId];

  return {
    title: `${character.name} | DennLog`,
    description: `${DESCRIPTIONS.map(desc => `원신 ${character.name} ${desc}`).join(', ')}`,
    openGraph: {
      title: `${character.name} | DennLog`,
      description: `${DESCRIPTIONS.map(desc => `원신 ${character.name} ${desc}`).join(', ')}`,
      images: [{ url: character.imageURL }],
    },
  };
}

export default function GenshinCharacterLayout({ children }: Props) {
  return <>{children}</>;
}
