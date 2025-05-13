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
    id: 'Calcharo-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 6,
    min: 1,
    priority: 5,
  },
  {
    id: 'Calcharo-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 3,
  },
  {
    id: 'Calcharo-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Calcharo-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Calcharo-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 4,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Calcharo-stat-1',
    type: '기본',
    fields: {
      공격력: '1900~2100',
      '공명 효율': '120',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'Calcharo-stat-2',
    type: '준종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '120',
      '크리/크피': '70/250',
    },
  },
  {
    id: 'Calcharo-stat-3',
    type: '종결',
    fields: {
      공격력: '2200~2400',
      '공명 효율': '130',
      '크리/크피': '80/270',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'TempestMephis',
    main: '천둥의 비늘',
    mainURL: getEchoImageURL('TempestMephis'),
    sonataEffect: 'RejuvenatingGlow',
    descriptions: ['크리티컬 확률 또는 크리티컬 피해', '전도 피해 보너스', '공격력'],
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'LustrousRazor',
    name: '푸른물결의 빛',
    imageURL: getWeaponImageURL('LustrousRazor'),
    priority: 1,
    mainStat: '공격력 587',
    subStat: '공격력 36.4%',
  },
  {
    id: 'Autumntrace',
    name: '가을의 무늬',
    imageURL: getWeaponImageURL('Autumntrace'),
    priority: 2,
    mainStat: '공격력 412',
    subStat: '크리티컬 20.2%',
  },
  {
    id: 'HeliosCleaver',
    name: '저무는 동녘',
    imageURL: getWeaponImageURL('HeliosCleaver'),
    priority: 3,
    mainStat: '공격력 412',
    subStat: '공격력 30.3%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Calcharo-team-1',
    name: '카카루, 음림, 벨리나',
    characters: 'Calcharo, Yinlin, Verina',
    descriptions: [],
    score: 5,
  },
];

const Calcharo: Wutheringwaves.Character = {
  id: 'Calcharo',
  name: '카카루',
  attribute: 'Conducto',
  weaponType: '대검',
  rarity: 5,
  imageURL: getCharacterImageURL('Calcharo'),
  profileImageURL: getCharacterProfileImageURL('Calcharo'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Calcharo;
