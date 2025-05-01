import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Camellya-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 10,
    min: 8,
    priority: 3,
  },
  {
    id: 'Camellya-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Camellya-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Camellya-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 8,
    min: 6,
    priority: 4,
  },
  {
    id: 'Camellya-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Camellya-stat-1',
    type: '기본',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '110',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'Camellya-stat-2',
    type: '준종결',
    fields: {
      공격력: '2200~2400',
      '공명 효율': '120',
      '크리/크피': '70/250',
    },
  },
  {
    id: 'Camellya-stat-3',
    type: '종결',
    fields: {
      공격력: '2400~2600',
      '공명 효율': '120',
      '크리/크피': '80/270',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'Crownless',
    main: '크라운리스',
    mainURL: getEchoImageURL('Crownless'),
    sonataEffect: 'HavocEclipse',
    descriptions: ['부옵션 크리티컬 관련 및 일반 공격 피해 추천'],
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'RedSpring',
    name: '날카로운 봄',
    imageURL: getWeaponImageURL('RedSpring'),
    priority: 1,
    mainStat: '공격력 588',
    subStat: '크리티컬 24.3%',
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
    id: 'SomnoireAnchor',
    name: '마음의 닻',
    imageURL: getWeaponImageURL('SomnoireAnchor'),
    priority: 3,
    mainStat: '공격력 463',
    subStat: '크리티컬 18.2%',
  },
  {
    id: 'CommandoOfConviction',
    name: '야귀의 신념',
    imageURL: getWeaponImageURL('CommandoOfConviction'),
    priority: 4,
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
  {
    id: 'Camellya-team-1',
    name: '카멜리아, 로코코, 파수인',
    characters: 'Camellya, Roccia, Shorekeeper',
    descriptions: [
      '[파수인] E - 평x4 - 강공 - (협주까지 반복) - Q - R',
      '[로코코] (평) - E - 낙공x3 - R - Q',
      '[카멜리아] R - E - 평꾹 - E(일순의 꽃) - E - 평꾹',
    ],
    score: 5,
  },
];

const Camellya: Wutheringwaves.Character = {
  id: 'Camellya',
  name: '카멜리아',
  attribute: '인멸',
  weaponType: '직검',
  rarity: 5,
  imageURL: getCharacterImageURL('Camellya'),
  profileImageURL: getCharacterProfileImageURL('Camellya'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Camellya;
