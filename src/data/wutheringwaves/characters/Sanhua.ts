import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Sanhua-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 1,
    min: 1,
    priority: 5,
  },
  {
    id: 'Sanhua-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 8,
    min: 6,
    priority: 3,
  },
  {
    id: 'Sanhua-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 8,
    min: 6,
    priority: 1,
  },
  {
    id: 'Sanhua-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 8,
    min: 6,
    priority: 2,
  },
  {
    id: 'Sanhua-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 1,
    min: 1,
    priority: 4,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Sanhua-stat-1',
    type: '기본',
    fields: {
      공격력: '1600~1800',
      '공명 효율': '120',
      '크리/크피': '50/200',
    },
  },
  {
    id: 'Sanhua-stat-2',
    type: '준종결',
    fields: {
      공격력: '1800~2000',
      '공명 효율': '130',
      '크리/크피': '60/220',
    },
  },
  {
    id: 'Sanhua-stat-3',
    type: '종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '130',
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
    descriptions: ['떠오르는 구름', '크리티컬 및 응결 피해'],
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
    id: 'EndlessCollapse',
    name: '영원의 붕괴',
    imageURL: getWeaponImageURL('EndlessCollapse'),
    priority: 2,
    mainStat: '공격력 463',
    subStat: '공격력 18.2%',
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
    id: 'Camellya-team-1',
    name: '카멜리아, 산화, 파수인',
    characters: 'Camellya, Sanhua, Shorekeeper',
    descriptions: [
      '[파수인] E - 평x4 - 강공 - (협주까지 반복) - Q - R',
      '[산화] E - R - 강공 - Q',
      '[카멜리아] R - E - 평꾹 - E(일순의 꽃) - E - 평꾹',
    ],
    score: 5,
  },
];

const Sanhua: Wutheringwaves.Character = {
  id: 'Sanhua',
  name: '산화',
  attribute: 'Glacio',
  weaponType: '직검',
  rarity: 4,
  imageURL: getCharacterImageURL('Sanhua'),
  profileImageURL: getCharacterProfileImageURL('Sanhua'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Sanhua;
