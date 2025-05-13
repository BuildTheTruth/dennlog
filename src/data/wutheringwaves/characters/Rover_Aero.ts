// https://wutheringlab.com/character/rover-aero-build/

import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Rover_Aero-skill-1',
    name: '기본 공격',
    type: '기본공격',
    max: 8,
    min: 6,
    priority: 3,
  },
  {
    id: 'Rover_Aero-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 8,
    min: 6,
    priority: 4,
  },
  {
    id: 'Rover_Aero-skill-3',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Rover_Aero-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Rover_Aero-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Rover_Aero-stat-1',
    type: '기본',
    fields: {
      공격력: '1800~2000',
      '공명 효율': '120',
      '크리/크피': '70/180',
    },
  },
  {
    id: 'Rover_Aero-stat-2',
    type: '준종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '125',
      '크리/크피': '70/200',
    },
  },
  {
    id: 'Rover_Aero-stat-3',
    type: '종결',
    fields: {
      공격력: '2200~2400',
      '공명 효율': '130',
      '크리/크피': '80/220',
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
    id: 'BellBorneGeochelone',
    main: '타종 거북이',
    mainURL: getEchoImageURL('BellBorneGeochelone'),
    sonataEffect: 'RejuvenatingGlow',
    descriptions: ['찬란한 광휘', '크리티컬 관련 및 기류 피해 보너스'],
    score: 4,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'BloodpactPledge',
    name: '혈맹의 서약',
    imageURL: getWeaponImageURL('BloodpactPledge'),
    priority: 1,
    mainStat: '공격력 500',
    subStat: '치유량 보너스 26%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Rover_Aero-team-1',
    name: '기염, 모르테피, 방랑자(기류)',
    characters: 'Jiyan, Mortefi, Rover_Aero',
    descriptions: [],
    score: 4,
  },
];

const Rover_Aero: Wutheringwaves.Character = {
  id: 'Rover_Aero',
  name: '방랑자(기류)',
  attribute: 'Aero',
  weaponType: '직검',
  rarity: 5,
  imageURL: getCharacterImageURL('Rover'),
  profileImageURL: getCharacterProfileImageURL('Rover'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Rover_Aero;
