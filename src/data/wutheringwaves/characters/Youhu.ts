/**
 * 참고 외부 사이트
 * https://blog.naver.com/12512512/223631999982
 */

import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Youhu-skill-1',
    name: '기본 공격',
    type: '기본공격',
    max: 1,
    min: 1,
    priority: 4,
  },
  {
    id: 'Youhu-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 8,
    min: 6,
    priority: 1,
  },
  {
    id: 'Youhu-skill-3',
    name: '공명 회로',
    type: '공명회로',
    max: 8,
    min: 6,
    priority: 2,
  },
  {
    id: 'Youhu-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 8,
    min: 6,
    priority: 3,
  },
  {
    id: 'Youhu-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 1,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Youhu-stat-1',
    type: '기본',
    fields: {
      공격력: '1600~1800',
      '공명 효율': '160',
      '크리/크피': '50/200',
    },
  },
  {
    id: 'Youhu-stat-2',
    type: '준종결',
    fields: {
      공격력: '1800~2000',
      '공명 효율': '180',
      '크리/크피': '60/220',
    },
  },
  {
    id: 'Youhu-stat-3',
    type: '종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '200',
      '크리/크피': '70/240',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'FallacyOfNoReturn',
    main: '돌아갈 곳이 없는 오류',
    mainURL: getEchoImageURL('FallacyOfNoReturn'),
    sonataEffect: 'RejuvenatingGlow',
    descriptions: ['찬란한 광휘', '치유 효과 보너스 및 공격력'],
    score: 5,
  },
  {
    id: 'BellBorneGeochelone',
    main: '타종 거북이',
    mainURL: getEchoImageURL('BellBorneGeochelone'),
    sonataEffect: 'RejuvenatingGlow',
    descriptions: ['찬란한 광휘', '치유 효과 보너스 및 공격력'],
    score: 4,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'Marcato',
    name: '바람의 악센트',
    imageURL: getWeaponImageURL('Marcato'),
    priority: 1,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
  {
    id: 'Gauntlets_21D',
    name: '21형 권갑',
    imageURL: getWeaponImageURL('Gauntlets_21D'),
    priority: 2,
    mainStat: '공격력 387',
    subStat: '공명 효율 38.9%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Youhu-team-1',
    name: '절지, 산화, 유호',
    characters: 'Zhezhi, Sanhua, Youhu',
    descriptions: [],
    score: 5,
  },
  {
    id: 'Youhu-team-2',
    name: '음림, 유호, 파수인',
    characters: 'Yinlin, Youhu, Shorekeeper',
    descriptions: [],
    score: 4,
  },
];

const Youhu: Wutheringwaves.Character = {
  id: 'Youhu',
  name: '유호',
  attribute: 'Glacio',
  weaponType: '권갑',
  rarity: 5,
  imageURL: getCharacterImageURL('Youhu'),
  profileImageURL: getCharacterProfileImageURL('Youhu'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Youhu;
