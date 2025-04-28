/**
 * 참고 외부 사이트
 * https://foreverhan.tistory.com/2219
 */

import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Changli-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 6,
    min: 1,
    priority: 5,
  },
  {
    id: 'Changli-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Changli-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Changli-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 3,
  },
  {
    id: 'Changli-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 8,
    min: 6,
    priority: 4,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Changli-stat-1',
    type: '기본',
    fields: {
      공격력: '2000~2200',
      '크리/크피': '60/230',
      '공명 효율': '120',
    },
  },
  {
    id: 'Changli-stat-2',
    type: '준종결',
    fields: {
      공격력: '2200~2400',
      '크리/크피': '70/250',
      '공명 효율': '120',
    },
  },
  {
    id: 'Changli-stat-3',
    type: '종결',
    fields: {
      공격력: '2400~2600',
      '크리/크피': '80/270',
      '공명 효율': '130',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'NightmareInfernoRider',
    main: '지옥불 기사',
    mainURL: getEchoImageURL('NightmareInfernoRider'),
    sonataEffect: 'MoltenRift',
    descriptions: ['용융 피해 증가와 공명 스킬 피해 증가'],
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'BlazingBrilliance',
    name: '솟아오르는 화염',
    imageURL: getWeaponImageURL('BlazingBrilliance'),
    priority: 1,
    mainStat: '공격력 588',
    subStat: '크리티컬 피해 70.1%',
  },
  {
    id: 'EmeraldOfGenesis',
    name: '천년의 회류',
    imageURL: getWeaponImageURL('EmeraldOfGenesis'),
    priority: 2,
    mainStat: '공격력 588',
    subStat: '크리티컬 24.3%',
  },
  {
    id: 'CommandoOfConviction',
    name: '야귀의 신념',
    imageURL: getWeaponImageURL('CommandoOfConviction'),
    priority: 3,
    mainStat: '공격력 413',
    subStat: '공격력 30.4%',
  },
  {
    id: 'Lumingloss',
    name: '천공의 광경',
    imageURL: getWeaponImageURL('Lumingloss'),
    priority: 4,
    mainStat: '공격력 388',
    subStat: '공격력 36.5%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Changli-team-1',
    name: '장리, 브렌트, 파수인',
    characters: 'Changli, Brant, Shorekeeper',
    descriptions: [
      '[장리] R - 강공 - Q',
      '[파수인] E - 평x4 - 강공 - (협주까지 반복) - Q - R',
      '[브렌트] R - 평x4 - E - Q',
      '[장리] 낙공 - 평x3 - E - 평 - E - 평 - 강공 - R - 강공',
    ],
    score: 5,
  },
  {
    id: 'Changli-team-2',
    name: '장리, 금희, 벨리나',
    characters: 'Changli, Jinhsi, Verina',
    descriptions: [
      '[장리] E - 평',
      '[벨리나] E - Q - R - 점평x2',
      '[금희] E',
      '[장리] E - 평',
      '[금희] 평x4 - Q - E',
      '[장리] E - 평 - 강공 - R - 강공',
      '[금희] R - E - 평x3 - E - 평 - E',
    ],
    score: 4,
  },
];

const Changli: Wutheringwaves.Character = {
  id: 'Changli',
  name: '장리',
  attribute: '용융',
  weaponType: '직검',
  rarity: 5,
  imageURL: getCharacterImageURL('Changli'),
  profileImageURL: getCharacterProfileImageURL('Changli'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Changli;
