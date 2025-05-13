import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Rover_Havoc-skill-1',
    name: '기본 공격',
    type: '기본공격',
    max: 8,
    min: 6,
    priority: 3,
  },
  {
    id: 'Rover_Havoc-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Rover_Havoc-skill-3',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Rover_Havoc-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 8,
    min: 6,
    priority: 4,
  },
  {
    id: 'Rover_Havoc-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Rover_Havoc-stat-1',
    type: '기본',
    fields: {
      공격력: '1800~2000',
      '공명 효율': '120',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'Rover_Havoc-stat-2',
    type: '준종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '130',
      '크리/크피': '70/250',
    },
  },
  {
    id: 'Rover_Havoc-stat-3',
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
    id: 'Dreamless',
    main: '무망자',
    mainURL: getEchoImageURL('Dreamless'),
    sonataEffect: 'MidnightVeil',
    descriptions: ['크리티컬 관련 및 공명 스킬 피해 보너스'],
    score: 5,
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
    id: 'LunarCutter',
    name: '상승의 서녘',
    imageURL: getWeaponImageURL('LunarCutter'),
    priority: 2,
    mainStat: '공격력 413',
    subStat: '공격력 30.4%',
  },
  {
    id: 'CommandoOfConviction',
    name: '야귀의 신념',
    imageURL: getWeaponImageURL('CommandoOfConviction'),
    priority: 3,
    mainStat: '공격력 413',
    subStat: '공격력 30.4%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Rover_Havoc-team-1',
    name: '방랑자(인멸), 감심, 벨리나',
    characters: 'Rover_Havoc, Jianxin, Verina',
    descriptions: [],
    score: 4,
  },
];

const Rover_Havoc: Wutheringwaves.Character = {
  id: 'Rover_Havoc',
  name: '방랑자(인멸)',
  attribute: 'Havoc',
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

export default Rover_Havoc;
