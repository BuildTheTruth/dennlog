/**
 * 참고 외부 사이트
 * https://vortexgaming.io/postdetail/421096
 */

import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Jiyan-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 6,
    min: 1,
    priority: 5,
  },
  {
    id: 'Jiyan-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 3,
  },
  {
    id: 'Jiyan-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Jiyan-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Jiyan-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 4,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Jiyan-stat-1',
    type: '기본',
    fields: {
      공격력: '1900~2100',
      '공명 효율': '120',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'Jiyan-stat-2',
    type: '준종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '120+',
      '크리/크피': '70/250',
    },
  },
  {
    id: 'Jiyan-stat-3',
    type: '종결',
    fields: {
      공격력: '2200~2400',
      '공명 효율': '130+',
      '크리/크피': '80/270',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'FeilianBeringal',
    main: '폭주의 고릴라',
    mainURL: getEchoImageURL('FeilianBeringal'),
    sonataEffect: 'SierraGale',
    descriptions: ['크리티컬 관련 및 공명 해방 피해 증가', '부옵션 공명 효율 최소 120 추천'],
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'VerdantSummit',
    name: '청룡의 천장',
    imageURL: getWeaponImageURL('VerdantSummit'),
    priority: 1,
    mainStat: '공격력 588',
    subStat: '크리티컬 피해 48.6%',
  },
  {
    id: 'AgesOfHarvest',
    name: '태평성대',
    imageURL: getWeaponImageURL('AgesOfHarvest'),
    priority: 2,
    mainStat: '공격력 588',
    subStat: '크리티컬 24.3%',
  },
  {
    id: 'LustrousRazor',
    name: '푸른물결의 빛',
    imageURL: getWeaponImageURL('LustrousRazor'),
    priority: 3,
    mainStat: '공격력 587',
    subStat: '공격력 36.4%',
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
    id: 'Jiyan-team-1',
    name: '기염, 모르테피, 벨리나',
    characters: 'Jiyan, Mortefi, Verina',
    descriptions: [],
    score: 5,
  },
];

const Jiyan: Wutheringwaves.Character = {
  id: 'Jiyan',
  name: '기염',
  attribute: 'Aero',
  weaponType: '대검',
  rarity: 5,
  imageURL: getCharacterImageURL('Jiyan'),
  profileImageURL: getCharacterProfileImageURL('Jiyan'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Jiyan;
