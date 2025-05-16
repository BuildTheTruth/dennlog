import {
  getArtifactImageURL,
  getCharacterImageURL,
  getCharacterProfileImageURL,
  getWeaponImageURL,
} from '@/lib/image/genshin';

const skills: Genshin.CharacterSkill[] = [
  {
    id: 'Ororon-skill-basic',
    type: '기본공격',
    name: '기본 공격',
    max: 1,
    min: 1,
    priority: 3,
  },
  {
    id: 'Ororon-skill-elemental-skill',
    type: '원소전투스킬',
    name: '원소 전투 스킬',
    max: 9,
    min: 8,
    priority: 2,
  },
  {
    id: 'Ororon-skill-elemental-burst',
    type: '원소폭발',
    name: '원소 폭발',
    max: 9,
    min: 8,
    priority: 1,
  },
];

const stats: Genshin.CharacterStat[] = [
  {
    id: 'Ororon-stat-basic',
    type: '기본',
    fields: {
      공격력: '1600',
      원충: '160',
      '치확/치피': '60/120',
    },
  },
  {
    id: 'Ororon-stat-normal',
    type: '준종결',
    fields: {
      공격력: '1800',
      원충: '180',
      '치확/치피': '70/140',
    },
  },
  {
    id: 'Ororon-stat-final',
    type: '종결',
    fields: {
      공격력: '2000',
      원충: '200',
      '치확/치피': '80/160',
    },
  },
];

const artifactSets: Genshin.ArtifactSet[] = [
  {
    id: 'ScrollOfTheHeroOfCinderCity',
    name: '잿더미 4세트',
    score: 5,
    imageURL: getArtifactImageURL('ScrollOfTheHeroOfCinderCity/sands'),
    descriptions: [
      '[시계] 공격력 / 원소 충전 효율',
      '[성배] 번개 피해 보너스',
      '[왕관] 치명타 확률 / 치명타 피해',
      '[부옵션] 치명타, 공격력, 원소 충전 효율',
    ],
  },
];

const weapons: Genshin.Weapon[] = [
  {
    id: 'WeaponElegyForTheEnd',
    name: '종말 탄식의 노래',
    imageURL: getWeaponImageURL('WeaponElegyForTheEnd'),
    priority: 1,
    mainStat: '기초 공격력 608',
    subStat: '원소 충전 효율 55.1%',
  },
  {
    id: 'FavoniusWarbow',
    name: '페보니우스 활',
    imageURL: getWeaponImageURL('FavoniusWarbow'),
    priority: 2,
    mainStat: '기초 공격력 454',
    subStat: '원소 충전 효율 61.3%',
  },
  {
    id: 'SacrificialBow',
    name: '제례활',
    imageURL: getWeaponImageURL('SacrificialBow'),
    priority: 3,
    mainStat: '기초 공격력 454',
    subStat: '원소 충전 효율 61.3%',
  },
  {
    id: 'TheStringless',
    name: '절현',
    imageURL: getWeaponImageURL('TheStringless'),
    priority: 4,
    mainStat: '기초 공격력 510',
    subStat: '원소 마스터리 165',
  },
];

const teams: Genshin.Team[] = [
  {
    id: 'Ororon-team-first',
    name: '차푸올실',
    characters: 'Chasca, Furina, Ororon, Xilonen',
    descriptions: [],
    score: 5,
  },
  {
    id: 'Ororon-team-second',
    name: '클푸올나',
    characters: 'Clorinde, Furina, Ororon, Nahida',
    descriptions: [],
    score: 4,
  },
];

const breakthroughs: Genshin.Breakthrough[] = [];

const Ororon: Genshin.Character = {
  id: 'Ororon',
  name: '올로룬',
  element: '번개',
  weaponType: '활',
  rarity: 4,
  imageURL: getCharacterImageURL('Ororon'),
  profileImageURL: getCharacterProfileImageURL('Ororon'),
  skills,
  stats,
  artifactSets,
  weapons,
  teams,
  breakthroughs,
};

export default Ororon;
