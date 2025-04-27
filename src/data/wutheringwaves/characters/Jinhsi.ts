/**
 * 참고 외부 사이트
 * https://foreverhan.tistory.com/2216
 */

import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Jinhsi-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 8,
    min: 6,
    priority: 4,
  },
  {
    id: 'Jinhsi-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 3,
  },
  {
    id: 'Jinhsi-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Jinhsi-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Jinhsi-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Jinhsi-stat-1',
    type: '기본',
    fields: {
      공격력: '1900~2100',
      '공명 효율': '120',
      '크확/크피': '60/230',
    },
  },
  {
    id: 'Jinhsi-stat-2',
    type: '준종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '120+',
      '크확/크피': '70/250',
    },
  },
  {
    id: 'Jinhsi-stat-3',
    type: '종결',
    fields: {
      공격력: '2200~2400',
      '공명 효율': '130+',
      '크확/크피': '80/270',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'Jue',
    main: '용의 별자리',
    mainURL: getEchoImageURL('Jue'),
    sonataEffect: 'HavocEclipse',
    description: '부옵션 크리티컬 및 공명 스킬 피해 추천',
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'AgesOfHarvest',
    name: '태평성대',
    imageURL: getWeaponImageURL('AgesOfHarvest'),
    priority: 1,
    mainStat: '공격력 588',
    subStat: '크리티컬 24.3%',
  },
  {
    id: 'LustrousRazor',
    name: '푸른물결의 빛',
    imageURL: getWeaponImageURL('LustrousRazor'),
    priority: 2,
    mainStat: '공격력 587',
    subStat: '공격력 36.4%',
  },
  {
    id: 'HeliosCleaver',
    name: '저무는 동녘',
    imageURL: getWeaponImageURL('HeliosCleaver'),
    priority: 3,
    mainStat: '공격력 412',
    subStat: '공격력 30.3%',
  },
  {
    id: 'Autumntrace',
    name: '가을의 무늬',
    imageURL: getWeaponImageURL('Autumntrace'),
    priority: 4,
    mainStat: '공격력 412',
    subStat: '크리티컬 20.2%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Jinhsi-team-1',
    name: '금희, 칸타렐라, 벨리나',
    characters: 'Jinhsi, Cantarella, Verina',
    descriptions: [
      '[칸타렐라] E',
      '[벨리나] E - Q - R - 점평x2',
      '[금희] E - 평x4 - Q - E',
      '[칸타렐라] E - Q - R - 강공 - E - 평x3 - E',
      '[금희] R - E - 평x3 - E - 평 - E',
    ],
    score: 5,
  },
  {
    id: 'Jinhsi-team-2',
    name: '금희, 절지, 벨리나',
    characters: 'Jinhsi, Zhezhi, Verina',
    descriptions: [
      '[절지] R - 평x3',
      '[벨리나] E - Q - R - 점평x2',
      '[금희] R - E - 평x4 - Q - E',
      '[절지] E - 평 - Ex3 - Q',
      '[금희] E - 평x4 - E ',
    ],
    score: 5,
  },
];

const Jinhsi: Wutheringwaves.Character = {
  id: 'Jinhsi',
  name: '금희',
  attribute: '회절',
  weaponType: '대검',
  rarity: 5,
  imageURL: getCharacterImageURL('Jinhsi'),
  profileImageURL: getCharacterProfileImageURL('Jinhsi'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Jinhsi;
