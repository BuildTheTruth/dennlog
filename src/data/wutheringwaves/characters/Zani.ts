/**
 * 참고 외부 사이트
 * https://easyjwork.tistory.com/230
 */

import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Zani-skill-1',
    name: '기본 공격',
    type: '기본공격',
    max: 6,
    min: 1,
    priority: 3,
  },
  {
    id: 'Zani-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Zani-skill-3',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Zani-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Zani-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 3,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Zani-stat-1',
    type: '기본',
    fields: {
      공격력: '1800~1900',
      '공명 효율': '110',
      '크리/크피': '50/240',
    },
  },
  {
    id: 'Camellya-stat-2',
    type: '준종결',
    fields: {
      공격력: '1900~2000',
      '공명 효율': '115',
      '크리/크피': '60/250',
    },
  },
  {
    id: 'Zani-stat-2',
    type: '종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '120',
      '크리/크피': '70/290',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'Capitaneus',
    main: '카피타네우스',
    mainURL: getEchoImageURL('Capitaneus'),
    sonataEffect: 'EternalRadiance',
    descriptions: ['부옵션 크리티컬 관련'],
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'BlazingJustice',
    name: '불빛의 심판',
    imageURL: getWeaponImageURL('BlazingJustice'),
    priority: 1,
    mainStat: '공격력 587',
    subStat: '크리티컬 피해 48.6%',
  },
  {
    id: 'AbyssSurges',
    name: '물결의 파동',
    imageURL: getWeaponImageURL('AbyssSurges'),
    priority: 2,
    mainStat: '공격력 587',
    subStat: '공격력 36.4%',
  },
  {
    id: 'LegendOfDrunkenHero',
    name: '만취 영웅지',
    imageURL: getWeaponImageURL('LegendOfDrunkenHero'),
    priority: 3,
    mainStat: '공격력 462',
    subStat: '공격력 18.2%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Zani-team-1',
    name: '잔니, 페비, 파수인',
    characters: 'Zani, Phoebe, Shorekeeper',
    descriptions: [],
    score: 5,
  },
];

const Zani: Wutheringwaves.Character = {
  id: 'Zani',
  name: '젠니',
  attribute: '회절',
  weaponType: '권갑',
  rarity: 5,
  imageURL: getCharacterImageURL('Zani'),
  profileImageURL: getCharacterProfileImageURL('Zani'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Zani;
