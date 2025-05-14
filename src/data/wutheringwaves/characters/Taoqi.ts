import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Taoqi-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 1,
    min: 1,
    priority: 5,
  },
  {
    id: 'Taoqi-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 8,
    min: 6,
    priority: 3,
  },
  {
    id: 'Taoqi-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 8,
    min: 6,
    priority: 1,
  },
  {
    id: 'Taoqi-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 8,
    min: 6,
    priority: 2,
  },
  {
    id: 'Taoqi-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 1,
    min: 1,
    priority: 4,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Taoqi-stat-1',
    type: '기본',
    fields: {
      방어력: '1800~2000',
      '크리/크피': '50/200',
    },
  },
  {
    id: 'Taoqi-stat-2',
    type: '준종결',
    fields: {
      방어력: '2000~2200',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'Taoqi-stat-3',
    type: '종결',
    fields: {
      방어력: '2200~2400',
      '크리/크피': '70/250',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'ImpermanenceHeron',
    main: '음험한 백로',
    mainURL: getEchoImageURL('ImpermanenceHeron'),
    sonataEffect: 'MoonlitClouds',
    descriptions: ['떠오르는 구름', '크리티컬 및 인멸 피해 보너스', '방어력'],
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'DauntlessEvernight',
    name: '장야의 불빛',
    imageURL: getWeaponImageURL('DauntlessEvernight'),
    priority: 1,
    mainStat: '공격력 338',
    subStat: '방어력 61.6%',
  },
  {
    id: 'Discord',
    name: '기묘한 울림',
    imageURL: getWeaponImageURL('Discord'),
    priority: 2,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
  {
    id: 'Autumntrace',
    name: '가을의 무늬',
    imageURL: getWeaponImageURL('Autumntrace'),
    priority: 3,
    mainStat: '공격력 412',
    subStat: '크리티컬 20.2%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Taoqi-team-1',
    name: '금희, 도기, 파수인',
    characters: 'Jinhsi, Taoqi, Shorekeeper',
    descriptions: [],
    score: 5,
  },
  {
    id: 'Dangjin-team-2',
    name: '단근, 도기, 설지',
    characters: 'Dangjin, Taoqi, Baizhi',
    descriptions: [],
    score: 4,
  },
];

const Taoqi: Wutheringwaves.Character = {
  id: 'Taoqi',
  name: '도기',
  attribute: 'Havoc',
  weaponType: '대검',
  rarity: 4,
  imageURL: getCharacterImageURL('Taoqi'),
  profileImageURL: getCharacterProfileImageURL('Taoqi'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Taoqi;
