import {
  getArtifactImageURL,
  getCharacterImageURL,
  getCharacterProfileImageURL,
  getWeaponImageURL,
} from '@/lib/image/genshin';

const skills: Genshin.CharacterSkill[] = [
  {
    id: 'Layla-skill-basic',
    type: '기본공격',
    name: '기본 공격',
    max: 1,
    min: 1,
    priority: 3,
  },
  {
    id: 'Layla-skill-elemental-skill',
    type: '원소전투스킬',
    name: '원소 전투 스킬',
    max: 9,
    min: 8,
    priority: 1,
  },
  {
    id: 'Layla-skill-elemental-burst',
    type: '원소폭발',
    name: '원소 폭발',
    max: 8,
    min: 6,
    priority: 2,
  },
];

const stats: Genshin.CharacterStat[] = [
  {
    id: 'Layla-stat-basic',
    type: '기본',
    fields: {
      HP: '40000',
      원충: '120',
    },
  },
  {
    id: 'Layla-stat-normal',
    type: '준종결',
    fields: {
      HP: '45000',
      원충: '140',
    },
  },
  {
    id: 'Layla-stat-final',
    type: '종결',
    fields: {
      HP: '50000',
      원충: '160',
    },
  },
];

const artifactSets: Genshin.ArtifactSet[] = [
  {
    id: 'OrichalceousTimeDial',
    name: '천암 4세트',
    score: 5,
    imageURL: getArtifactImageURL('OrichalceousTimeDial/sands'),
    descriptions: [
      '[시계] HP',
      '[성배] HP',
      '[왕관] HP',
      '[부옵션] HP, 원소 충전 효율',
      '페보검 사용 시 치명타 확률 필요',
    ],
  },
  {
    id: 'NoblesseOblige',
    name: '천암 4세트',
    score: 4,
    imageURL: getArtifactImageURL('NoblesseOblige/sands'),
    descriptions: ['옵션은 위와 동일', '다른 파티원이 천암을 착용한 경우 추천'],
  },
];

const weapons: Genshin.Weapon[] = [
  {
    id: 'FavoniusSword',
    name: '페보니우스 검',
    imageURL: getWeaponImageURL('FavoniusSword'),
    priority: 1,
    mainStat: '기초 공격력 454',
    subStat: '원소 충전 효율 61.3%',
  },
  {
    id: 'KeyOfKhajNisu',
    name: '성현의 열쇠',
    imageURL: getWeaponImageURL('KeyOfKhajNisu'),
    priority: 2,
    mainStat: '기초 공격력 542',
    subStat: 'HP 66.2%',
  },
  {
    id: 'SacrificialSword',
    name: '제례검',
    imageURL: getWeaponImageURL('SacrificialSword'),
    priority: 3,
    mainStat: '기초 공격력 454',
    subStat: '원소 충전 효율 61.3%',
  },
];

const teams: Genshin.Team[] = [
  {
    id: 'Layla-team-first',
    name: '호야레베',
    characters: 'HuTao, Yelan, Layla, Bennett',
    descriptions: [],
    score: 5,
  },
  {
    id: 'Layla-team-second',
    name: '아모레카',
    characters: 'KamisatoAyaka, Mona, Layla, KaedeharaKazuha',
    descriptions: [],
    score: 4,
  },
];

const breakthroughs: Genshin.Breakthrough[] = [];

const Layla: Genshin.Character = {
  id: 'Layla',
  name: '레일라',
  element: '얼음',
  weaponType: '한손검',
  rarity: 4,
  imageURL: getCharacterImageURL('Layla'),
  profileImageURL: getCharacterProfileImageURL('Layla'),
  skills,
  stats,
  artifactSets,
  weapons,
  teams,
  breakthroughs,
};

export default Layla;
