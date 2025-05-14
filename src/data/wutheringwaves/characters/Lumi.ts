/**
 * 참고 외부 사이트
 * https://sdro.tistory.com/1304
 */

import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Lumi-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Lumi-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 8,
    min: 6,
    priority: 4,
  },
  {
    id: 'Lumi-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Lumi-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 8,
    min: 6,
    priority: 3,
  },
  {
    id: 'Lumi-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Lumi-stat-1',
    type: '기본',
    fields: {
      공격력: '1800~2000',
      '공명 효율': '200',
      '크리/크피': '50/200',
    },
  },
  {
    id: 'Lumi-stat-2',
    type: '준종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '230',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'Lumi-stat-3',
    type: '종결',
    fields: {
      공격력: '2200~2400',
      '공명 효율': '250',
      '크리/크피': '70/250',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'TempestMephis',
    main: '천둥의 비늘',
    mainURL: getEchoImageURL('TempestMephis'),
    sonataEffect: 'VoidThunder',
    descriptions: ['크리티컬 관련 옵션', '공명 효율', '일반 공격 피해 보너스'],
    score: 5,
  },
  {
    id: 'ImpermanenceHeron',
    main: '음험한 백로',
    mainURL: getEchoImageURL('ImpermanenceHeron'),
    sonataEffect: 'MoonlitClouds',
    descriptions: ['떠오르는 구름 (서포터)', '공명 효율'],
    score: 4,
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
    id: 'WaningRedshift',
    name: '멸망의 주파수',
    imageURL: getWeaponImageURL('WaningRedshift'),
    priority: 3,
    mainStat: '공격력 463',
    subStat: '공격력 18.2%',
  },
  {
    id: 'Discord',
    name: '기묘한 울림',
    imageURL: getWeaponImageURL('Discord'),
    priority: 4,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Lumi-team-1',
    name: '루미, 산화, 파수인',
    characters: 'Lumi, Sanhua, Shorekeeper',
    descriptions: [],
    score: 5,
  },
  {
    id: 'Lumi-team-1',
    name: '금희, 루미, 벨리나',
    characters: 'Jinhsi, Lumi, Verina',
    descriptions: [],
    score: 5,
  },
];

const Lumi: Wutheringwaves.Character = {
  id: 'Lumi',
  name: '루미',
  attribute: 'Conducto',
  weaponType: '대검',
  rarity: 5,
  imageURL: getCharacterImageURL('Lumi'),
  profileImageURL: getCharacterProfileImageURL('Lumi'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Lumi;
