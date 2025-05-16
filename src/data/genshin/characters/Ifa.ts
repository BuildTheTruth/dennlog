import {
  getArtifactImageURL,
  getCharacterImageURL,
  getCharacterProfileImageURL,
  getWeaponImageURL,
} from '@/lib/image/genshin';

const skills: Genshin.CharacterSkill[] = [
  {
    id: 'ifa-skill-basic',
    type: '기본공격',
    name: '기본 공격',
    max: 9,
    min: 8,
    priority: 1,
  },
  {
    id: 'ifa-skill-elemental-skill',
    type: '원소전투스킬',
    name: '원소 전투 스킬',
    max: 9,
    min: 8,
    priority: 2,
  },
  {
    id: 'ifa-skill-elemental-burst',
    type: '원소폭발',
    name: '원소 폭발',
    max: 9,
    min: 8,
    priority: 3,
  },
];

const stats: Genshin.CharacterStat[] = [
  {
    id: 'ifa-stat-basic',
    type: '기본',
    fields: {
      공격력: '1600~1800',
      왕관: '치확/치피',
      성배: '바원피',
      시계: '공%',
      '치확/치피': '70/150',
    },
  },
  {
    id: 'ifa-stat-normal',
    type: '준종결',
    fields: {
      공격력: '1800~2000',
      왕관: '치확/치피',
      성배: '바원피',
      시계: '공%',
      '치확/치피': '80/170',
    },
  },
  {
    id: 'ifa-stat-final',
    type: '종결',
    fields: {
      공격력: '2000~2200',
      왕관: '치확/치피',
      성배: '바원피',
      시계: '공%',
      '치확/치피': '90/190',
    },
  },
];

const artifactSets: Genshin.ArtifactSet[] = [
  {
    id: 'ObsidianCodex',
    name: '흑요석 4세트',
    score: 5,
    imageURL: getArtifactImageURL('ObsidianCodex/sands'),
    descriptions: [],
  },
];

const weapons: Genshin.Weapon[] = [
  {
    id: 'TulaytullahRemembrance',
    name: '툴레이툴라의 기억',
    imageURL: getWeaponImageURL('TulaytullahRemembrance'),
    priority: 1,
    mainStat: '기초 공격력 674',
    subStat: '치명타 피해 44.1%',
  },
  {
    id: 'LostPrayerToTheSacredWinds',
    name: '사풍 원서',
    imageURL: getWeaponImageURL('LostPrayerToTheSacredWinds'),
    priority: 2,
    mainStat: '기초 공격력 608',
    subStat: '치명타 확률 33.1%',
  },
  {
    id: 'SolarPearl',
    name: '일월의 정수',
    imageURL: getWeaponImageURL('SolarPearl'),
    priority: 3,
    mainStat: '기초 공격력 510',
    subStat: '치명타 확률 27.6%',
  },
  {
    id: 'TheWidsith',
    name: '음유시인의 악장',
    imageURL: getWeaponImageURL('TheWidsith'),
    priority: 4,
    mainStat: '기초 공격력 510',
    subStat: '치명타 피해 55.1%',
  },
];

const teams: Genshin.Team[] = [
  {
    id: 'ifa-team-first',
    name: '이파 메인딜',
    characters: 'Ifa, Faruzan, Yelan, Bennett',
    descriptions: [],
    score: 5,
  },
  {
    id: 'ifa-team-second',
    name: '이파 감전덱',
    characters: 'Ifa, Furina, Yelan, Ororon',
    descriptions: [],
    score: 4,
  },
];

const breakthroughs: Genshin.Breakthrough[] = [];

const Ifa: Genshin.Character = {
  id: 'Ifa',
  name: '이파',
  element: '바람',
  weaponType: '법구',
  rarity: 4,
  imageURL: getCharacterImageURL('Ifa'),
  profileImageURL: getCharacterProfileImageURL('Ifa'),
  skills,
  stats,
  artifactSets,
  weapons,
  teams,
  breakthroughs,
};

export default Ifa;
