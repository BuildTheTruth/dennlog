import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Chixia-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 6,
    min: 1,
    priority: 4,
  },
  {
    id: 'Chixia-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 3,
  },
  {
    id: 'Chixia-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Chixia-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Chixia-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Chixia-stat-1',
    type: '기본',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '120',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'Chixia-stat-2',
    type: '준종결',
    fields: {
      공격력: '2200~2400',
      '공명 효율': '130',
      '크리/크피': '70/250',
    },
  },
  {
    id: 'Chixia-stat-3',
    type: '종결',
    fields: {
      공격력: '2400~2600',
      '공명 효율': '130',
      '크리/크피': '80/270',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'NightmareInfernoRider',
    main: '지옥불 기사',
    mainURL: getEchoImageURL('NightmareInfernoRider'),
    sonataEffect: 'MoltenRift',
    descriptions: ['크리티컬 확률 및 크리티컬 피해', '용융 피해 증가와 공명 스킬 피해 증가'],
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
    id: 'Chixia-team-1',
    name: '장리, 치샤, 파수인',
    characters: 'Changli, Chixia, Shorekeeper',
    descriptions: [],
    score: 5,
  },
  {
    id: 'Chixia-team-2',
    name: '치샤, 브렌트, 파수인',
    characters: 'Chixia, Brant, Shorekeeper',
    descriptions: [],
    score: 4,
  },
];

const Chixia: Wutheringwaves.Character = {
  id: 'Chixia',
  name: '치샤',
  attribute: 'Fusion',
  weaponType: '권총',
  rarity: 5,
  imageURL: getCharacterImageURL('Chixia'),
  profileImageURL: getCharacterProfileImageURL('Chixia'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Chixia;
