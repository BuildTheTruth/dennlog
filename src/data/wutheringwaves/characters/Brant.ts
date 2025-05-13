/**
 * 참고 외부 사이트
 * https://vortexgaming.io/postdetail/480895
 */

import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Brant-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 8,
    min: 6,
    priority: 3,
  },
  {
    id: 'Brant-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 8,
    min: 6,
    priority: 4,
  },
  {
    id: 'Brant-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Brant-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Brant-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Brant-stat-1',
    type: '기본',
    fields: {
      '크리/크피': '50/200',
      '공명 효율': '260',
    },
  },
  {
    id: 'Brant-stat-2',
    type: '준종결',
    fields: {
      '크리/크피': '60/220',
      '공명 효율': '270',
    },
  },
  {
    id: 'Brant-stat-3',
    type: '종결',
    fields: {
      '크리/크피': '70/240',
      '공명 효율': '280+',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'DragonOfDirge',
    main: '탄식의 고룡',
    mainURL: getEchoImageURL('DragonOfDirge'),
    sonataEffect: 'TidebreakingCourage',
    descriptions: ['공명효율 최대 280%', '크리티컬 관련'],
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'UnflickeringValor',
    name: '흔들리지 않는 용기',
    imageURL: getWeaponImageURL('UnflickeringValor'),
    priority: 1,
    mainStat: '공격력 413',
    subStat: '공명 효율 77%',
  },
  {
    id: 'Overture',
    name: '행진의 서곡',
    imageURL: getWeaponImageURL('Overture'),
    priority: 2,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
  {
    id: 'EmeraldOfGenesis',
    name: '천년의 회류',
    imageURL: getWeaponImageURL('EmeraldOfGenesis'),
    priority: 3,
    mainStat: '공격력 588',
    subStat: '크리티컬 24.3%',
  },
  {
    id: 'CommandoOfConviction',
    name: '야귀의 신념',
    imageURL: getWeaponImageURL('CommandoOfConviction'),
    priority: 4,
    mainStat: '공격력 413',
    subStat: '공격력 30.4%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Brant-team-1',
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
];

const Brant: Wutheringwaves.Character = {
  id: 'Brant',
  name: '브렌트',
  attribute: 'Fusion',
  weaponType: '직검',
  rarity: 5,
  imageURL: getCharacterImageURL('Brant'),
  profileImageURL: getCharacterProfileImageURL('Brant'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Brant;
