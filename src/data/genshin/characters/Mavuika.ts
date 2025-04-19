import { getArtifactImageURL } from '@/lib/image/genshin';

const skills: CharacterSkill[] = [
  {
    id: 'mavuika-skill-basic',
    type: '기본공격',
    name: '기본 공격',
    max: 1,
    min: 1,
    priority: 3,
  },
  {
    id: 'mavuika-skill-elemental-skill',
    type: '원소전투스킬',
    name: '원소 전투 스킬',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'mavuika-skill-elemental-burst',
    type: '원소폭발',
    name: '원소 폭발',
    max: 10,
    min: 8,
    priority: 1,
  },
];

const stats: CharacterStat[] = [
  {
    id: 'mavuika-stat-basic',
    type: '기본',
    fields: {
      공격력: '1800+',
      원마: '120~150',
      성배: '불원피/공%',
      시계: '공%',
      '치확/치피': '40/200',
    },
  },
  {
    id: 'mavuika-stat-normal',
    type: '준종결',
    fields: {
      공격력: '1900~2100',
      원마: '150~200',
      성배: '불원피',
      시계: '공%',
      '치확/치피': '45/230',
    },
  },
  {
    id: 'mavuika-stat-final',
    type: '종결',
    fields: {
      공격력: '2100+',
      원마: '200+',
      성배: '불원피',
      시계: '공%',
      '치확/치피': '50/260+',
    },
  },
];

const recommendedArtifactSets: RecommendedArtifactSet[] = [
  {
    id: 'ObsidianCodex',
    name: '흑요석 비전',
    recommendedScore: 5,
    imageURLs: [
      getArtifactImageURL('ObsidianCodex/flower'),
      getArtifactImageURL('ObsidianCodex/plume'),
      getArtifactImageURL('ObsidianCodex/sands'),
      getArtifactImageURL('ObsidianCodex/goblet'),
      getArtifactImageURL('ObsidianCodex/circlet'),
    ],
    description: '마비카에게 흑요석을 맞춰주는 것만이 정답</br>흑요석 특성 레벨 120 이상 권장',
  },
];

const recommendedWeapons: RecommendedWeapon[] = [
  {
    id: 'mavuika-weapon-first',
    name: '타오르는 천개의 태양',
    imageURL:
      'https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public/genshin/weapons/AThousandBlazingSuns.webp',
    priority: 1,
    description: '마비카에게 흑요석을 맞춰주는 것만이 정답',
    mainStat: '기초 공격력 741',
    subStat: '치명타 확률 11.0%',
  },
  {
    id: 'mavuika-weapon-second',
    name: '판정',
    imageURL:
      'https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public/genshin/weapons/Verdict.webp',
    priority: 2,
    description: '마비카에게 흑요석을 맞춰주는 것만이 정답',
    mainStat: '기초 공격력 674',
    subStat: '치명타 확률 22.1%',
  },
  {
    id: 'mavuika-weapon-third',
    name: '이무기 검',
    imageURL:
      'https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public/genshin/weapons/SerpentSpine.webp',
    priority: 3,
    description: '마비카에게 흑요석을 맞춰주는 것만이 정답',
    mainStat: '기초 공격력 510',
    subStat: '치명타 확률 27.6%',
  },
];

const recommendedTeams: RecommendedTeam[] = [
  {
    id: 'mavuika-team-first',
    name: '마실시베 융해 파티',
    characters: 'Mavuika, Xilonen,Citlali, Bennett',
    descriptions: ['마키바 E', '실로닌 (Q)E 평평', '베넷 EQ', '시틀라리 EQ 평', '마비카 Q 강공'],
    recommendedScore: 5,
  },
  {
    id: 'mavuika-team-second',
    name: '키에베마 연소 파티',
    characters: 'Kinich, Emilie, Bennett, Mavuika',
    descriptions: ['에밀리 E(Q)', '마키바 EQ', '베넷 EQ', '키니치 E(Q) 평평x4'],
    recommendedScore: 4,
  },
];

const recommendedBreakthroughs: RecommendedBreakthrough[] = [
  {
    id: 'mavuika-breakthrough-first',
    name: '1돌: 밤 주인의 계시',
    description: '밤혼 최대치 및 전의효율 / 공격력 증가 (명함 대비 약 15% 딜 상승)',
  },
  {
    id: 'mavuika-breakthrough-second',
    name: '2돌: 잿더미의 대가',
    description: '기초 공격력 및 무장 효과 강화 (명함 대비 약 50% 딜 상승)',
  },
  {
    id: 'mavuika-breakthrough-third',
    name: '6돌: 인간의 이름 해방',
    description: '무장 효과 완전 강화 (명함 대비 약 130% 딜 상승)',
  },
];
const Mavuika: GenshinCharacter = {
  id: 'Mavuika',
  name: '마비카',
  element: '불',
  weaponType: '양손검',
  rarity: 5,
  imageURL:
    'https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public/genshin/characters/Mavuika/default.webp',
  profileImageURL:
    'https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public/genshin/characters/Mavuika/profile.webp',
  thumbnailImageURL:
    'https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public/genshin/characters/Mavuika/thumbnail.webp',
  skills,
  stats,
  recommendedArtifactSets,
  recommendedWeapons,
  recommendedTeams,
  recommendedBreakthroughs,
};

export default Mavuika;
