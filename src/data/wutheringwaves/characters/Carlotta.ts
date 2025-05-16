import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Carlotta-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 8,
    min: 6,
    priority: 4,
  },
  {
    id: 'Carlotta-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Carlotta-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Carlotta-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 3,
  },
  {
    id: 'Carlotta-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Carlotta-stat-1',
    type: '기본',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '120',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'Carlotta-stat-2',
    type: '준종결',
    fields: {
      공격력: '2200~2400',
      '공명 효율': '130',
      '크리/크피': '70/250',
    },
  },
  {
    id: 'Carlotta-stat-3',
    type: '종결',
    fields: {
      공격력: '2400+',
      '공명 효율': '140',
      '크리/크피': '80/270',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'PhantomSentryConstruct',
    main: '이성(異性) 무장',
    mainURL: getEchoImageURL('PhantomSentryConstruct'),
    sonataEffect: 'FrostyResolve',
    descriptions: ['부옵션 크리티컬 및 공명 스킬 피해 추천'],
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'TheLastDance',
    name: '죽음의 춤',
    imageURL: getWeaponImageURL('TheLastDance'),
    priority: 1,
    mainStat: '공격력 500',
    subStat: '크리티컬 피해 72.0%',
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
    id: 'Thunderbolt',
    name: '뇌전',
    imageURL: getWeaponImageURL('Thunderbolt'),
    priority: 3,
    mainStat: '공격력 387',
    subStat: '공격력 36.4%',
  },
  {
    id: 'UndyingFlame',
    name: '불멸의 성화',
    imageURL: getWeaponImageURL('UndyingFlame'),
    priority: 4,
    mainStat: '공격력 412',
    subStat: '공격력 30.3%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Carlotta-team-1',
    name: '카를로타, 절지, 파수인',
    characters: 'Carlotta, Zhezhi, Shorekeeper',
    descriptions: [],
    score: 5,
  },
];

const Carlotta: Wutheringwaves.Character = {
  id: 'Carlotta',
  name: '카를로타',
  attribute: 'Glacio',
  weaponType: '권총',
  rarity: 5,
  imageURL: getCharacterImageURL('Carlotta'),
  profileImageURL: getCharacterProfileImageURL('Carlotta'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Carlotta;
