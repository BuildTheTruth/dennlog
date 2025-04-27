/**
 * 참고 외부 사이트
 * https://foreverhan.tistory.com/2221
 */

import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Phoebe-skill-1',
    name: '기본 공격',
    type: '기본공격',
    max: 6,
    min: 1,
    priority: 3,
  },
  {
    id: 'Phoebe-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Phoebe-skill-3',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Phoebe-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Phoebe-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 4,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Phoebe-stat-1',
    type: '기본',
    fields: {
      공격력: '1800~1900',
      '공명 효율': '110',
      '크확/크피': '50/240',
    },
  },
  {
    id: 'Camellya-stat-2',
    type: '준종결',
    fields: {
      공격력: '1900~2000',
      '공명 효율': '115',
      '크확/크피': '60/250',
    },
  },
  {
    id: 'Phoebe-stat-2',
    type: '종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '120',
      '크확/크피': '70/290',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'NightmareMourningAix',
    main: '악몽 · 애곡하는 아익스',
    mainURL: getEchoImageURL('NightmareMourningAix'),
    sonataEffect: 'EternalRadiance',
    description: '부옵션 크리티컬 관련 및 강공격 피해 보너스',
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'LuminousHymn',
    name: '광휘의 찬송가',
    imageURL: getWeaponImageURL('LuminousHymn'),
    priority: 1,
    mainStat: '공격력 500',
    subStat: '크리티컬 36.0%',
  },
  {
    id: 'Stringmaster',
    name: '꼭두각시의 손',
    imageURL: getWeaponImageURL('Stringmaster'),
    priority: 2,
    mainStat: '공격력 500',
    subStat: '크리티컬 36.0%',
  },
  {
    id: 'OceanGift',
    name: '바다의 선물',
    imageURL: getWeaponImageURL('OceanGift'),
    priority: 3,
    mainStat: '공격력 463',
    subStat: '공격력 18.2%',
  },
  {
    id: 'Augment',
    name: '청음',
    imageURL: getWeaponImageURL('Augment'),
    priority: 4,
    mainStat: '공격력 413',
    subStat: '크리티컬 20.3%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Phoebe-team-1',
    name: '페비, 방랑자, 파수인',
    characters: 'Phoebe, Rover/Female, Shorekeeper',
    descriptions: [
      '[파수인] E - 평x4 - 강공 - (협주까지 반복) - Q - R',
      '[방랑자] R - E - 강공 - 평 - 강공 - 평 - E - Q',
      '[페비] 평꾹 - E - (평x3 - 강공)x3 - R - 평x3 - 강공',
    ],
    score: 5,
  },
];

const Phoebe: Wutheringwaves.Character = {
  id: 'Phoebe',
  name: '페비',
  attribute: '회절',
  weaponType: '증폭기',
  rarity: 5,
  imageURL: getCharacterImageURL('Phoebe'),
  profileImageURL: getCharacterProfileImageURL('Phoebe'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Phoebe;
