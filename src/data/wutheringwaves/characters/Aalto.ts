/**
 * 참고 외부 사이트
 * https://game8.co/games/Wuthering-Waves/archives/454214
 */

import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Aalto-skill-1',
    name: '기본 공격',
    type: '기본공격',
    max: 6,
    min: 1,
    priority: 4,
  },
  {
    id: 'Aalto-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Aalto-skill-3',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Aalto-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 8,
    min: 6,
    priority: 3,
  },
  {
    id: 'Aalto-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Carlotta-stat-1',
    type: '기본',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '120',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'Carlotta-stat-2',
    type: '준종결',
    fields: {
      공격력: '2200~2400',
      '공명 효율': '130',
      '크리/크피': '70/250',
    },
  },
  {
    id: 'Carlotta-stat-3',
    type: '종결',
    fields: {
      공격력: '2400',
      '공명 효율': '130',
      '크리/크피': '80/270',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'ImpermanenceHeron',
    main: '음험한 백로',
    mainURL: getEchoImageURL('ImpermanenceHeron'),
    sonataEffect: 'MoonlitClouds',
    descriptions: ['떠오르는 구름', '크리티컬 관련 및 기류 피해 보너스', '공격력 및 공명 효율'],
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'TheLastDance',
    name: '죽음의 춤',
    imageURL: getWeaponImageURL('TheLastDance'),
    priority: 1,
    mainStat: '공격력 500',
    subStat: '크리티컬 피해 72.0%',
  },
  {
    id: 'StaticMist',
    name: '부동의 안개',
    imageURL: getWeaponImageURL('StaticMist'),
    priority: 2,
    mainStat: '공격력 587',
    subStat: '크리티컬 24.3%',
  },
  {
    id: 'UndyingFlame',
    name: '불멸의 성화',
    imageURL: getWeaponImageURL('UndyingFlame'),
    priority: 3,
    mainStat: '공격력 412',
    subStat: '공격력 30.3%',
  },
  {
    id: 'Novaburst',
    name: '천공의 순간',
    imageURL: getWeaponImageURL('Novaburst'),
    priority: 4,
    mainStat: '공격력 412',
    subStat: '공격력 30.3%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Aalto-team-1',
    name: '기염, 알토, 파수인',
    characters: 'Jiyan, Aalto, Shorekeeper',
    descriptions: [],
    score: 5,
  },
];

const Aalto: Wutheringwaves.Character = {
  id: 'Aalto',
  name: '알토',
  attribute: 'Aero',
  weaponType: '권총',
  rarity: 4,
  imageURL: getCharacterImageURL('Aalto'),
  profileImageURL: getCharacterProfileImageURL('Aalto'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Aalto;
