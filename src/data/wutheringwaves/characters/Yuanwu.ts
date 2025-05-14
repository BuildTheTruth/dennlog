import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Yuanwu-skill-1',
    name: '기본 공격',
    type: '기본공격',
    max: 6,
    min: 1,
    priority: 4,
  },
  {
    id: 'Yuanwu-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 8,
    min: 6,
    priority: 2,
  },
  {
    id: 'Yuanwu-skill-3',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Yuanwu-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 8,
    min: 6,
    priority: 3,
  },
  {
    id: 'Yuanwu-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Yuanwu-stat-1',
    type: '기본',
    fields: {
      방어력: '1800~2000',
      '크리/크피': '50/200',
    },
  },
  {
    id: 'Yuanwu-stat-2',
    type: '준종결',
    fields: {
      방어력: '2000~2200',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'Yuanwu-stat-3',
    type: '종결',
    fields: {
      방어력: '2200~2400',
      '크리/크피': '70/250',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'NightmareThunderingMephis',
    main: '헤카테',
    mainURL: getEchoImageURL('NightmareThunderingMephis'),
    sonataEffect: 'EmpyreanAnthem',
    descriptions: ['하늘의 합주곡', '크리티컬 및 전도 피해 보너스', '방어력'],
    score: 5,
  },
  {
    id: 'ImpermanenceHeron',
    main: '음험한 백로',
    mainURL: getEchoImageURL('ImpermanenceHeron'),
    sonataEffect: 'MoonlitClouds',
    descriptions: ['떠오르는 구름', '크리티컬 및 전도 피해 보너스'],
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
    id: 'AmityAccord',
    name: '전우의 의리',
    imageURL: getWeaponImageURL('AmityAccord'),
    priority: 2,
    mainStat: '공격력 338',
    subStat: '방어력 61.6%',
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
    id: 'Marcato',
    name: '바람의 악센트',
    imageURL: getWeaponImageURL('Marcato'),
    priority: 4,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Yuanwu-team-1',
    name: '금희, 연무, 파수인',
    characters: 'Jinhsi, Yuanwu, Shorekeeper',
    descriptions: [],
    score: 5,
  },
  {
    id: 'Yuanwu-team-2',
    name: '방랑자(회절), 연무, 설지',
    characters: 'Rover_Spectro, Yuanwu, Baizhi',
    descriptions: [],
    score: 4,
  },
];

const Yuanwu: Wutheringwaves.Character = {
  id: 'Yuanwu',
  name: '연무',
  attribute: 'Conducto',
  weaponType: '권갑',
  rarity: 4,
  imageURL: getCharacterImageURL('Yuanwu'),
  profileImageURL: getCharacterProfileImageURL('Yuanwu'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Yuanwu;
