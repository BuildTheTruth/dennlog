import { getArtifactImageURL, getWeaponImageURL } from '@/lib/image/genshin';

const skills: Genshin.CharacterSkill[] = [
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
    max: 8,
    min: 6,
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

const stats: Genshin.CharacterStat[] = [
  {
    id: 'mavuika-stat-basic',
    type: '기본',
    fields: {
      시계: '원충/공%',
      성배: '공격력',
      왕관: '공격력',
      공격력: '2500~2700',
      원충: '160%+',
    },
  },
  {
    id: 'mavuika-stat-normal',
    type: '준종결',
    fields: {
      시계: '공%',
      성배: '공격력',
      왕관: '공격력',
      공격력: '2700~2900',
      원충: '180%+',
    },
  },
  {
    id: 'mavuika-stat-final',
    type: '종결',
    fields: {
      시계: '공%',
      성배: '공격력',
      왕관: '공격력',
      공격력: '3000+',
      원충: '200%+',
    },
  },
];

const artifactSets: Genshin.ArtifactSet[] = [
  {
    id: 'ScrollOfTheHeroOfCinderCity',
    name: '잿더미 4세트',
    score: 5,
    imageURLs: [
      getArtifactImageURL('ScrollOfTheHeroOfCinderCity/flower'),
      getArtifactImageURL('ScrollOfTheHeroOfCinderCity/plume'),
      getArtifactImageURL('ScrollOfTheHeroOfCinderCity/sands'),
      getArtifactImageURL('ScrollOfTheHeroOfCinderCity/goblet'),
      getArtifactImageURL('ScrollOfTheHeroOfCinderCity/circlet'),
    ],
  },
];

const weapons: Genshin.Weapon[] = [
  {
    id: 'SkywardPride',
    name: '천공의 마루',
    imageURL: getWeaponImageURL('SkywardPride'),
    priority: 1,
    mainStat: '기초 공격력 674',
    subStat: '원소 충전 효율 36.8%',
  },
  {
    id: 'TamayurateiNoOhanashi',
    name: '쉼터의 이야기꾼',
    imageURL: getWeaponImageURL('TamayurateiNoOhanashi'),
    priority: 2,
    mainStat: '기초 공격력 565',
    subStat: '원소 충전 효율 30.6%',
  },
  {
    id: 'FavoniusLance',
    name: '페보니우스 장창',
    imageURL: getWeaponImageURL('FavoniusLance'),
    priority: 3,
    mainStat: '기초 공격력 510',
    subStat: '원소 충전 효율 45.9%',
  },
];

const teams: Genshin.Team[] = [
  {
    id: 'mavuika-team-first',
    name: '바푸얀한',
    characters: 'Varesa, Furina, Iansan, Xianyun',
    descriptions: ['바레사 E', '푸리나 EQ', '얀사 EQ', '한운 EQ', '바레사 E평평x2 Q 반복'],
    score: 5,
  },
  {
    id: 'mavuika-team-second',
    name: '바마얀슈',
    characters: 'Varesa, Mavuika, Iansan, Chevreuse',
    descriptions: [
      '마비카 E',
      '얀사 Q',
      '슈브르즈 E',
      '얀사 E',
      '바레사 Q E평평x2 Q 반복',
      '마비카 Q',
    ],
    score: 4,
  },
];

const breakthroughs: Genshin.Breakthrough[] = [
  {
    id: 'mavuika-breakthrough-first',
    name: '1돌: 뭐든 시작이 어려운 법',
    description: '원소 충전 효율 요구량 감소',
  },
  {
    id: 'mavuika-breakthrough-second',
    name: '2돌: 게으름은 운동의 적!',
    description: 'EQ 가능, 현재 필드 위 캐릭터의 공격력 30% 증가',
  },
  {
    id: 'mavuika-breakthrough-third',
    name: '5돌: 아직 한계가 아니다!',
    description: '최대 공격력 보너스 690에서 810으로 증가 (공격력 3000+ 필요)',
  },
];

const Iansan: Genshin.Character = {
  id: 'Iansan',
  name: '얀사',
  element: '번개',
  weaponType: '장병기',
  rarity: 4,
  imageURL:
    'https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public/genshin/characters/Iansan/default.webp',
  profileImageURL:
    'https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public/genshin/characters/Iansan/profile.webp',
  thumbnailImageURL:
    'https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public/genshin/characters/Iansan/thumbnail.webp',
  skills,
  stats,
  artifactSets,
  weapons,
  teams,
  breakthroughs,
};

export default Iansan;
