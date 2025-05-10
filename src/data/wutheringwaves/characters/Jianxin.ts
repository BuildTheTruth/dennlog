/**
 * 참고 외부 사이트
 * https://vortexgaming.io/postdetail/393255
 * https://vortexgaming.io/postdetail/395421
 */

import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Jianxin-skill-1',
    name: '기본 공격',
    type: '기본공격',
    max: 6,
    min: 1,
    priority: 4,
  },
  {
    id: 'Jianxin-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 3,
  },
  {
    id: 'Jianxin-skill-3',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Jianxin-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Jianxin-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Jianxin-stat-1',
    type: '기본',
    fields: {
      공격력: '1600~1800',
      '공명 효율': '160',
      '크리/크피': '50/200',
    },
  },
  {
    id: 'Jianxin-stat-2',
    type: '준종결',
    fields: {
      공격력: '1800~2000',
      '공명 효율': '180',
      '크리/크피': '60/220',
    },
  },
  {
    id: 'Jianxin-stat-3',
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
    id: 'ImpermanenceHeron',
    main: '음험한 백로',
    mainURL: getEchoImageURL('ImpermanenceHeron'),
    sonataEffect: 'MoonlitClouds',
    descriptions: [
      '떠오르는 구름 (서포터)',
      '딜 투자를 전혀 하지 않는다면 공퍼와 공명효율',
      '딜포터라면 크리티컬 관련 및 기류 피해',
    ],
    score: 5,
  },
  {
    id: 'FeilianBeringal',
    main: '폭주의 고릴라',
    mainURL: getEchoImageURL('FeilianBeringal'),
    sonataEffect: 'GustsOfWelkin',
    descriptions: ['스쳐가는 바람', '크리티컬 관련 및 기류 피해 보너스'],
    score: 4,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'AbyssSurges',
    name: '물결의 파동',
    imageURL: getWeaponImageURL('AbyssSurges'),
    priority: 1,
    mainStat: '공격력 588',
    subStat: '공격력 36.5%',
  },
  {
    id: 'Marcato',
    name: '바람의 악센트',
    imageURL: getWeaponImageURL('Marcato'),
    priority: 2,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
  {
    id: 'Stonard',
    name: '황금 권갑',
    imageURL: getWeaponImageURL('Stonard'),
    priority: 3,
    mainStat: '공격력 413',
    subStat: '크리티컬 20.3%',
  },
  {
    id: 'Gauntlets_21D',
    name: '21형 권갑',
    imageURL: getWeaponImageURL('Gauntlets_21D'),
    priority: 4,
    mainStat: '공격력 387',
    subStat: '공명 효율 38.9%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Jianxin-team-1',
    name: '카카루, 감심, 벨리나',
    characters: 'Calcharo, Jianxin, Verina',
    descriptions: [],
    score: 5,
  },
  {
    id: 'Jianxin-team-2',
    name: '방랑자(인멸), 감심, 설지',
    characters: 'Rover/Female, Jianxin, Verina',
    descriptions: [],
    score: 4,
  },
];

const Jianxin: Wutheringwaves.Character = {
  id: 'Jianxin',
  name: '감심',
  attribute: '기류',
  weaponType: '권갑',
  rarity: 5,
  imageURL: getCharacterImageURL('Jianxin'),
  profileImageURL: getCharacterProfileImageURL('Jianxin'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Jianxin;
