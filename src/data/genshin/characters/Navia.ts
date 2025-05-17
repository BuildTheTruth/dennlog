import {
  getArtifactImageURL,
  getCharacterImageURL,
  getCharacterProfileImageURL,
  getWeaponImageURL,
} from '@/lib/image/genshin';

const skills: Genshin.CharacterSkill[] = [
  {
    id: 'Navia-skill-basic',
    type: '기본공격',
    name: '기본 공격',
    max: 9,
    min: 8,
    priority: 2,
  },
  {
    id: 'Navia-skill-elemental-skill',
    type: '원소전투스킬',
    name: '원소 전투 스킬',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Navia-skill-elemental-burst',
    type: '원소폭발',
    name: '원소 폭발',
    max: 8,
    min: 6,
    priority: 3,
  },
];

const stats: Genshin.CharacterStat[] = [
  {
    id: 'Navia-stat-basic',
    type: '기본',
    fields: {
      공격력: '2000',
      원충: '130',
      '치확/치피': '60/150',
    },
  },
  {
    id: 'Navia-stat-normal',
    type: '준종결',
    fields: {
      공격력: '2200',
      원충: '140',
      '치확/치피': '70/180',
    },
  },
  {
    id: 'Navia-stat-final',
    type: '종결',
    fields: {
      공격력: '2400',
      원충: '150',
      '치확/치피': '80/210',
    },
  },
];

const artifactSets: Genshin.ArtifactSet[] = [
  {
    id: 'NighttimeWhispersInTheEchoingWoods',
    name: '야화 4세트',
    score: 5,
    imageURL: getArtifactImageURL('NighttimeWhispersInTheEchoingWoods/sands'),
    descriptions: [
      '[시계] 공격력',
      '[성배] 바위 원소 피해 보너스',
      '[왕관] 치명타 확률 / 치명타 피해',
      '[부옵션] 치명타, 공격력, 원소 충전 효율',
    ],
  },
  {
    id: 'MarechausseeHunter',
    name: '그림자 4세트',
    score: 4,
    imageURL: getArtifactImageURL('MarechausseeHunter/sands'),
    descriptions: ['옵션은 위와 동일', '푸리나와 조합 시 사용 가능', '오버 치확되지 않도록 주의'],
  },
];

const weapons: Genshin.Weapon[] = [
  {
    id: 'Verdict',
    name: '판정',
    imageURL: getWeaponImageURL('Verdict'),
    priority: 1,
    mainStat: '기초 공격력 674',
    subStat: '치명타 확률 22.1%',
  },

  {
    id: 'BeaconOfTheReedSea',
    name: '갈대 바다의 등대',
    imageURL: getWeaponImageURL('BeaconOfTheReedSea'),
    priority: 2,
    mainStat: '기초 공격력 608',
    subStat: '치명타 확률 33.1%',
  },
  {
    id: ' WolfGravestone',
    name: '늑대의 말로',
    imageURL: getWeaponImageURL('WolfGravestone'),
    priority: 3,
    mainStat: '기초 공격력 542',
    subStat: '',
  },
  {
    id: 'SerpentSpine',
    name: '이무기 검',
    imageURL: getWeaponImageURL('SerpentSpine'),
    priority: 4,
    mainStat: '기초 공격력 510',
    subStat: '치명타 확률 27.6%',
  },
  {
    id: 'UltimateOverlordMegaMagicSword',
    name: '슈퍼 울트라 패왕 마검',
    imageURL: getWeaponImageURL('UltimateOverlordMegaMagicSword'),
    priority: 5,
    mainStat: '기초 공격력 565',
    subStat: '원소 충전 효율 30.6%',
  },
];

const teams: Genshin.Team[] = [
  {
    id: 'Navia-team-first',
    name: '나종베푸',
    characters: 'Navia, Zhongli, Bennett, Furina',
    descriptions: [],
    score: 5,
  },
  {
    id: 'Navia-team-second',
    name: '나치베푸',
    characters: 'Navia, Chiori, Bennett, Furina',
    descriptions: [],
    score: 4,
  },
];

const breakthroughs: Genshin.Breakthrough[] = [];

const Navia: Genshin.Character = {
  id: 'Navia',
  name: '나비아',
  element: '바위',
  weaponType: '양손검',
  rarity: 5,
  imageURL: getCharacterImageURL('Navia'),
  profileImageURL: getCharacterProfileImageURL('Navia'),
  skills,
  stats,
  artifactSets,
  weapons,
  teams,
  breakthroughs,
};

export default Navia;
