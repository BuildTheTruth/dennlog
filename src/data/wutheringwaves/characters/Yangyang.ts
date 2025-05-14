import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Yangyang-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 1,
    min: 1,
    priority: 4,
  },
  {
    id: 'Yangyang-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 8,
    min: 6,
    priority: 2,
  },
  {
    id: 'Yangyang-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 8,
    min: 6,
    priority: 3,
  },
  {
    id: 'Yangyang-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Yangyang-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 1,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Yangyang-stat-1',
    type: '기본',
    fields: {
      공격력: '1600~1800',
      '공명 효율': '120',
      '크리/크피': '50/200',
    },
  },
  {
    id: 'Yangyang-stat-2',
    type: '준종결',
    fields: {
      공격력: '1800~2000',
      '공명 효율': '130',
      '크리/크피': '60/220',
    },
  },
  {
    id: 'Yangyang-stat-3',
    type: '종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '140',
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
    descriptions: ['떠오르는 구름', '크리티컬 및 공명 효율', '공명 해방 피해 보너스'],
    score: 5,
  },
  {
    id: 'FeilianBeringal',
    main: '폭주의 고릴라',
    mainURL: getEchoImageURL('FeilianBeringal'),
    sonataEffect: 'SierraGale',
    descriptions: ['스쳐가는 바람', '크리티컬 및 기류 피해 보너스'],
    score: 4,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'EmeraldOfGenesis',
    name: '천년의 회류',
    imageURL: getWeaponImageURL('EmeraldOfGenesis'),
    priority: 1,
    mainStat: '공격력 588',
    subStat: '크리티컬 24.3%',
  },
  {
    id: 'CommandoOfConviction',
    name: '야귀의 신념',
    imageURL: getWeaponImageURL('CommandoOfConviction'),
    priority: 2,
    mainStat: '공격력 413',
    subStat: '공격력 30.4%',
  },
  {
    id: 'LunarCutter',
    name: '상승의 서녘',
    imageURL: getWeaponImageURL('LunarCutter'),
    priority: 2,
    mainStat: '공격력 413',
    subStat: '공격력 30.4%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Yangyang-team-1',
    name: '기염, 양양, 파수인',
    characters: 'Jiyan, Yangyang, Shorekeeper',
    descriptions: [],
    score: 5,
  },
  {
    id: 'Yangyang-team-2',
    name: '양양, 절지, 파수인',
    characters: 'Yangyang, Zhezhi, Shorekeeper',
    descriptions: [],
    score: 4,
  },
  {
    id: 'Yangyang-team-2',
    name: '방랑자(회절), 양양, 설지',
    characters: 'Rover_Spectro, Yangyang, Baizhi',
    descriptions: [],
    score: 3,
  },
];

const Yangyang: Wutheringwaves.Character = {
  id: 'Yangyang',
  name: '양양',
  attribute: 'Aero',
  weaponType: '직검',
  rarity: 4,
  imageURL: getCharacterImageURL('Yangyang'),
  profileImageURL: getCharacterProfileImageURL('Yangyang'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Yangyang;
