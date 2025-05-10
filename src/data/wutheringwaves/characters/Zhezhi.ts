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
    id: 'Zhezhi-skill-1',
    name: '기본 공격',
    type: '기본공격',
    max: 6,
    min: 1,
    priority: 4,
  },
  {
    id: 'Zhezhi-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 8,
    min: 6,
    priority: 3,
  },
  {
    id: 'Zhezhi-skill-3',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Zhezhi-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Zhezhi-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Zhezhi-stat-1',
    type: '기본',
    fields: {
      공격력: '1600~1700',
      '공명 효율': '120',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'Zhezhi-stat-2',
    type: '준종결',
    fields: {
      공격력: '1700~1800',
      '공명 효율': '120',
      '크리/크피': '70/250',
    },
  },
  {
    id: 'Zhezhi-stat-3',
    type: '종결',
    fields: {
      공격력: '1800~2000',
      '공명 효율': '130',
      '크리/크피': '80/280',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'Hecate',
    main: '헤카테',
    mainURL: getEchoImageURL('Hecate'),
    sonataEffect: 'EmpyreanAnthem',
    descriptions: ['하늘의 합주곡', '크리티컬 및 공명 효율'],
    score: 5,
  },
  {
    id: 'ImpermanenceHeron',
    main: '음험한 백로',
    mainURL: getEchoImageURL('ImpermanenceHeron'),
    sonataEffect: 'MoonlitClouds',
    descriptions: ['떠오르는 구름', '크리티컬 및 공명 효율'],
    score: 4,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'RimeDrapedSprouts',
    name: '옥수 비단',
    imageURL: getWeaponImageURL('RimeDrapedSprouts'),
    priority: 1,
    mainStat: '공격력 500',
    subStat: '크리티컬 피해 72%',
  },
  {
    id: 'CosmicRipples',
    name: '파도의 기록',
    imageURL: getWeaponImageURL('CosmicRipples'),
    priority: 2,
    mainStat: '공격력 500',
    subStat: '공격력 54%',
  },
  {
    id: 'Augment',
    name: '청음',
    imageURL: getWeaponImageURL('Augment'),
    priority: 3,
    mainStat: '공격력 413',
    subStat: '크리티컬 20.3%',
  },
  {
    id: 'Variation',
    name: '판타지 변주',
    imageURL: getWeaponImageURL('Variation'),
    priority: 4,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Camellya-team-1',
    name: '카를로타, 절지, 파수인',
    characters: 'Carlotta, Zhezhi, Shorekeeper',
    descriptions: [
      '[카를로타] E - E',
      '[절지] R - 평x3',
      '[파수인] E - 평x4 - 강공 - (협주까지 반복) - Q - R',
      '[절지] Ex4 - Q',
      '[카를로타] E - E - 낙공 - 강공 - Rx5 - E - E',
    ],
    score: 5,
  },
  {
    id: 'Zhezhi-team-2',
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

const Zhezhi: Wutheringwaves.Character = {
  id: 'Zhezhi',
  name: '절지',
  attribute: '응결',
  weaponType: '증폭기',
  rarity: 5,
  imageURL: getCharacterImageURL('Zhezhi'),
  profileImageURL: getCharacterProfileImageURL('Zhezhi'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Zhezhi;
