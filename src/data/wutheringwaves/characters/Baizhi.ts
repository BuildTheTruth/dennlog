import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Baizhi-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 1,
    min: 1,
    priority: 5,
  },
  {
    id: 'Baizhi-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 8,
    min: 6,
    priority: 2,
  },
  {
    id: 'Baizhi-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 8,
    min: 6,
    priority: 3,
  },
  {
    id: 'Baizhi-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 8,
    min: 6,
    priority: 1,
  },
  {
    id: 'Baizhi-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 1,
    min: 1,
    priority: 4,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Baizhi-stat-1',
    type: '기본',
    fields: {
      HP: '38000',
      '공명 효율': '200',
    },
  },
  {
    id: 'Baizhi-stat-2',
    type: '준종결',
    fields: {
      HP: '40000',
      '공명 효율': '220',
    },
  },
  {
    id: 'Baizhi-stat-3',
    type: '종결',
    fields: {
      HP: '42000',
      '공명 효율': '240',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'FallacyOfNoReturn',
    main: '돌아갈 곳이 없는 오류',
    mainURL: getEchoImageURL('FallacyOfNoReturn'),
    sonataEffect: 'RejuvenatingGlow',
    descriptions: ['치유 보너스', '공명 효율 및 HP%'],
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'StellarSymphony',
    name: '뭇별의 교향곡',
    imageURL: getWeaponImageURL('StellarSymphony'),
    priority: 1,
    mainStat: '공격력 413',
    subStat: '공명 효율 77.0%',
  },
  {
    id: 'Variation',
    name: '판타지 변주',
    imageURL: getWeaponImageURL('Variation'),
    priority: 2,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
  {
    id: 'Rectifier_25',
    name: '25형 증폭기 · 울림의 멜로디',
    imageURL: getWeaponImageURL('Rectifier_25'),
    priority: 3,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
  {
    id: 'RectifierOfVoyager',
    name: '수행자의 증폭기 · 탐색',
    imageURL: getWeaponImageURL('RectifierOfVoyager'),
    priority: 4,
    mainStat: '공격력 300',
    subStat: '공명 효율 32.4%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Baizhi-team-1',
    name: '기염, 모르테피, 설지',
    characters: 'Jiyan, Mortefi, Baizhi',
    descriptions: [],
    score: 5,
  },
];

const Baizhi: Wutheringwaves.Character = {
  id: 'Baizhi',
  name: '설지',
  attribute: 'Glacio',
  weaponType: '증폭기',
  rarity: 5,
  imageURL: getCharacterImageURL('Baizhi'),
  profileImageURL: getCharacterProfileImageURL('Baizhi'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Baizhi;
