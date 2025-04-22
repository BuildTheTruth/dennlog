import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Camellya-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
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
    id: 'Camellya-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 10,
    min: 8,
    priority: 3,
  },
  {
    id: 'Camellya-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 4,
  },
  {
    id: 'Camellya-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 8,
    min: 6,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Camellya-stat-1',
    type: '기본',
    fields: {
      공격력: '1900~2200',
      '공명 효율': '110+',
      '크확/크피': '55/210',
    },
  },
  {
    id: 'Camellya-stat-2',
    type: '준종결',
    fields: {
      공격력: '2300~2600',
      '공명 효율': '120+',
      '크확/크피': '70/240',
    },
  },
  {
    id: 'Camellya-stat-3',
    type: '종결',
    fields: {
      공격력: '2600+',
      '공명 효율': '130+',
      '크확/크피': '80/280',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'Crownless',
    main: '크라운리스',
    mainURL: getEchoImageURL('Crownless'),
    sonataEffect: 'HavocEclipse',
    score: 10,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'RedSpring',
    name: '날카로운 봄',
    imageURL: getWeaponImageURL('RedSpring'),
    priority: 1,
    mainStat: '공격력 588 / 크리티컬 24.3%',
    subStat: '공격력 12% / 일반 공격 피해 증가 70%',
  },
  {
    id: 'EmeraldOfGenesis',
    name: '천년의 회류',
    imageURL: getWeaponImageURL('EmeraldOfGenesis'),
    priority: 2,
    mainStat: '공격력 588 / 크리티컬 24.3%',
    subStat: '공명효율 12.8% / 공격력 6%',
  },
  {
    id: 'SomnoireAnchor',
    name: '마음의 닻',
    imageURL: getWeaponImageURL('SomnoireAnchor'),
    priority: 3,
    mainStat: '공격력 463 / 크리티컬 18.2%',
    subStat: '크리티컬 6% / 공격력 20%',
  },
  {
    id: 'CommandoOfConviction',
    name: '야귀의 신념',
    imageURL: getWeaponImageURL('CommandoOfConviction'),
    priority: 4,
    mainStat: '공격력 413 / 공격력 30.4%',
    subStat: '공격력 15%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Camellya-team-1',
    name: '팀 1',
    characters: 'Camellya, Sanhua, Shorekeeper',
    descriptions: ['팀 1 설명'],
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
