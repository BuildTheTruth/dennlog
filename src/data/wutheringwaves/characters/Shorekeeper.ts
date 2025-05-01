import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Shorekeeper-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 1,
    min: 1,
    priority: 5,
  },
  {
    id: 'Shorekeeper-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 8,
    min: 6,
    priority: 2,
  },
  {
    id: 'Shorekeeper-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 8,
    min: 6,
    priority: 3,
  },
  {
    id: 'Shorekeeper-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 8,
    min: 6,
    priority: 1,
  },
  {
    id: 'Shorekeeper-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 4,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Shorekeeper-stat-1',
    type: '기본',
    fields: {
      HP: '40000',
      '공명 효율': '230',
    },
  },
  {
    id: 'Shorekeeper-stat-2',
    type: '준종결',
    fields: {
      HP: '42000',
      '공명 효율': '240',
    },
  },
  {
    id: 'Shorekeeper-stat-3',
    type: '종결',
    fields: {
      HP: '45000',
      '공명 효율': '250',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'FallacyOfNoReturn',
    main: '돌아갈 곳이 없는 오류',
    mainURL: getEchoImageURL('FallacyOfNoReturn'),
    sonataEffect: 'RejuvenatingGlow',
    descriptions: ['공명 효율 최대한 챙기고 추가적으로 HP% 챙기기'],
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'StellarSymphony',
    name: '뭇별의 교향곡',
    imageURL: getWeaponImageURL('StellarSymphony'),
    priority: 1,
    mainStat: '공격력 413',
    subStat: '공명 효율 77.0%',
  },
  {
    id: 'Variation',
    name: '판타지 변주',
    imageURL: getWeaponImageURL('Variation'),
    priority: 2,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
  {
    id: 'Rectifier_25',
    name: '25형 증폭기 · 울림의 멜로디',
    imageURL: getWeaponImageURL('Rectifier_25'),
    priority: 3,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
  {
    id: 'RectifierOfVoyager',
    name: '수행자의 증폭기 · 탐색',
    imageURL: getWeaponImageURL('RectifierOfVoyager'),
    priority: 4,
    mainStat: '공격력 300',
    subStat: '공명 효율 32.4%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Shorekeeper-team-1',
    name: '카멜리아, 산화, 파수인',
    characters: 'Camellya, Sanhua, Shorekeeper',
    descriptions: [
      '[파수인] E - 평x4 - 강공 - (협주까지 반복) - Q - R',
      '[산화] E - R - 강공 - Q',
      '[카멜리아] R - E - 평꾹 - E(일순의 꽃) - E - 평꾹',
    ],
    score: 5,
  },
  {
    id: 'Shorekeeper-team-2',
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
];

const Shorekeeper: Wutheringwaves.Character = {
  id: 'Shorekeeper',
  name: '파수인',
  attribute: '회절',
  weaponType: '증폭기',
  rarity: 5,
  imageURL: getCharacterImageURL('Shorekeeper'),
  profileImageURL: getCharacterProfileImageURL('Shorekeeper'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Shorekeeper;
