/**
 * 참고 외부 사이트
 * https://lootbar.gg/blog/en/wuthering-waves-ciaccona-build-guide.html
 */

import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Ciaccona-skill-1',
    name: '기본 공격',
    type: '기본공격',
    max: 6,
    min: 1,
    priority: 3,
  },
  {
    id: 'Ciaccona-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 6,
    min: 1,
    priority: 4,
  },
  {
    id: 'Ciaccona-skill-3',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Ciaccona-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Ciaccona-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Ciaccona-stat-1',
    type: '기본',
    fields: {
      공명효율: '110',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'Camellya-stat-2',
    type: '준종결',
    fields: {
      공명효율: '115',
      '크리/크피': '70/250',
    },
  },
  {
    id: 'Ciaccona-stat-2',
    type: '종결',
    fields: {
      공명효율: '120',
      '크리/크피': '80/270',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'ReminiscenceFleurdelys',
    main: '공명의 메아리 · 플뢰르 드 리스',
    mainURL: getEchoImageURL('ReminiscenceFleurdelys'),
    sonataEffect: 'GustsOfWelkin',
    descriptions: ['끝없는 하늘', '크리티컬 관련 및 기류 피해 보너스'],
    score: 5,
  },
  {
    id: 'ImpermanenceHeron',
    main: '음험한 백로',
    mainURL: getEchoImageURL('ImpermanenceHeron'),
    sonataEffect: 'MoonlitClouds',
    descriptions: ['떠오르는 구름', '크리티컬 관련 및 기류 피해 보너스'],
    score: 4,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'WoodlandAria',
    name: '숲속의 아리아',
    imageURL: getWeaponImageURL('WoodlandAria'),
    priority: 1,
    mainStat: '공격력 500',
    subStat: '크리티컬 36.0%',
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
    id: 'RomanceInFarewell',
    name: '작별의 로맨스',
    imageURL: getWeaponImageURL('RomanceInFarewell'),
    priority: 3,
    mainStat: '공격력 462',
    subStat: '공격력 18.2%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Ciaccona-team-1',
    name: '샤콘, 페비, 방랑자(기류)',
    characters: 'Ciaccona, Phoebe, Rover/Female',
    descriptions: [],
    score: 5,
  },
  {
    id: 'Zani-team-2',
    name: '잔니, 페비, 샤콘',
    characters: 'Zani, Phoebe, Ciaccona',
    descriptions: [],
    score: 4,
  },
];

const Ciaccona: Wutheringwaves.Character = {
  id: 'Ciaccona',
  name: '샤콘',
  attribute: '기류',
  weaponType: '권총',
  rarity: 5,
  imageURL: getCharacterImageURL('Ciaccona'),
  profileImageURL: getCharacterProfileImageURL('Ciaccona'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Ciaccona;
