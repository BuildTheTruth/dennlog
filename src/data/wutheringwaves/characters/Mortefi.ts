import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Mortefi-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 6,
    min: 1,
    priority: 4,
  },
  {
    id: 'Mortefi-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 8,
    min: 6,
    priority: 3,
  },
  {
    id: 'Mortefi-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 8,
    min: 6,
    priority: 2,
  },
  {
    id: 'Mortefi-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 8,
    min: 6,
    priority: 1,
  },
  {
    id: 'Mortefi-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Mortefi-stat-1',
    type: '기본',
    fields: {
      공격력: '1600~1800',
      '공명 효율': '120',
      '크리/크피': '50/200',
    },
  },
  {
    id: 'Mortefi-stat-2',
    type: '준종결',
    fields: {
      공격력: '1800~2000',
      '공명 효율': '130',
      '크리/크피': '60/220',
    },
  },
  {
    id: 'Mortefi-stat-3',
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
    descriptions: ['떠오르는 구름 (서포터)', '크리티컬 관련 주옵션', '용융 피해 보너스', '공격력%'],
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'StaticMist',
    name: '부동의 안개',
    imageURL: getWeaponImageURL('StaticMist'),
    priority: 1,
    mainStat: '공격력 587',
    subStat: '크리티컬 24.3%',
  },
  {
    id: 'Cadenza',
    name: '화려한 악곡',
    imageURL: getWeaponImageURL('Cadenza'),
    priority: 2,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Mortefi-team-1',
    name: '기염, 모르테피, 벨리나',
    characters: 'Jiyan, Mortefi, Verina',
    descriptions: [],
    score: 5,
  },
];

const Mortefi: Wutheringwaves.Character = {
  id: 'Mortefi',
  name: '모르테피',
  attribute: 'Fusion',
  weaponType: '권총',
  rarity: 5,
  imageURL: getCharacterImageURL('Mortefi'),
  profileImageURL: getCharacterProfileImageURL('Mortefi'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Mortefi;
