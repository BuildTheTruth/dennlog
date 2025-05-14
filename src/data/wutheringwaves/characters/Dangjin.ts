import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Dangjin-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 6,
    min: 1,
    priority: 5,
  },
  {
    id: 'Dangjin-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Dangjin-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Dangjin-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 3,
  },
  {
    id: 'Dangjin-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 4,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Dangjin-stat-1',
    type: '기본',
    fields: {
      공격력: '1800~2000',
      '공명 효율': '120',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'Dangjin-stat-2',
    type: '준종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '130',
      '크리/크피': '70/250',
    },
  },
  {
    id: 'Dangjin-stat-3',
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
    descriptions: ['크리티컬 관련 및 인멸 피해 보너스', '공명 스킬 피해 보너스'],
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'BlazingBrilliance',
    name: '솟아오르는 화염',
    imageURL: getWeaponImageURL('BlazingBrilliance'),
    priority: 1,
    mainStat: '공격력 588',
    subStat: '크리티컬 피해 70.1%',
  },
  {
    id: 'EmeraldOfGenesis',
    name: '천년의 회류',
    imageURL: getWeaponImageURL('EmeraldOfGenesis'),
    priority: 2,
    mainStat: '공격력 588',
    subStat: '크리티컬 24.3%',
  },
  {
    id: 'CommandoOfConviction',
    name: '야귀의 신념',
    imageURL: getWeaponImageURL('CommandoOfConviction'),
    priority: 3,
    mainStat: '공격력 413',
    subStat: '공격력 30.4%',
  },
  {
    id: 'Lumingloss',
    name: '천공의 광경',
    imageURL: getWeaponImageURL('Lumingloss'),
    priority: 4,
    mainStat: '공격력 388',
    subStat: '공격력 36.5%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Dangjin-team-1',
    name: '단근, 칸타렐라, 로코코',
    characters: 'Dangjin, Cantarella, Roccia',
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

const Dangjin: Wutheringwaves.Character = {
  id: 'Dangjin',
  name: '단근',
  attribute: 'Havoc',
  weaponType: '직검',
  rarity: 4,
  imageURL: getCharacterImageURL('Dangjin'),
  profileImageURL: getCharacterProfileImageURL('Dangjin'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Dangjin;
