/**
 * 참고 외부 사이트
 * https://wuthering.gg/characters/verina
 * https://game8.co/games/Wuthering-Waves/archives/454229
 */

import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Verina-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 1,
    min: 1,
    priority: 4,
  },
  {
    id: 'Verina-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 6,
    min: 1,
    priority: 3,
  },
  {
    id: 'Verina-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 8,
    min: 6,
    priority: 1,
  },
  {
    id: 'Verina-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 8,
    min: 6,
    priority: 2,
  },
  {
    id: 'Verina-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 1,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Verina-stat-1',
    type: '기본',
    fields: {
      '공명 효율': '200',
    },
  },
  {
    id: 'Verina-stat-2',
    type: '준종결',
    fields: {
      '공명 효율': '220',
    },
  },
  {
    id: 'Verina-stat-3',
    type: '종결',
    fields: {
      '공명 효율': '240',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'BellBorneGeochelone',
    main: '타종 거북이',
    mainURL: getEchoImageURL('BellBorneGeochelone'),
    sonataEffect: 'RejuvenatingGlow',
    descriptions: ['공명 효율 및 공격력'],
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'Variation',
    name: '판타지 변주',
    imageURL: getWeaponImageURL('Variation'),
    priority: 1,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
  {
    id: 'Rectifier_25',
    name: '25형 증폭기 · 울림의 멜로디',
    imageURL: getWeaponImageURL('Rectifier_25'),
    priority: 2,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
  {
    id: 'RectifierOfVoyager',
    name: '수행자의 증폭기 · 탐색',
    imageURL: getWeaponImageURL('RectifierOfVoyager'),
    priority: 3,
    mainStat: '공격력 300',
    subStat: '공명 효율 32.4%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Verina-team-1',
    name: '금희, 칸타렐라, 벨리나',
    characters: 'Jinhsi, Cantarella, Verina',
    descriptions: [
      '[칸타렐라] E',
      '[벨리나] E - Q - R - 강공 - 공중 평타',
      '[금희] E - 평x4 - Q - E',
      '[칸타렐라] E - Q - R - 강공 - E - 평x3 - E',
      '[금희] R - E - 평x3 - E - 평 - E',
    ],
    score: 5,
  },
  {
    id: 'Verina-team-2',
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
  {
    id: 'Verina-team-3',
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

const Verina: Wutheringwaves.Character = {
  id: 'Verina',
  name: '벨리나',
  attribute: 'Spectro',
  weaponType: '정류기',
  rarity: 5,
  imageURL: getCharacterImageURL('Verina'),
  profileImageURL: getCharacterProfileImageURL('Verina'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Verina;
