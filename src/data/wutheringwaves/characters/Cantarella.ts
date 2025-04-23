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
    max: 6,
    min: 1,
    priority: 4,
  },
  {
    id: 'Camellya-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 3,
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
    max: 10,
    min: 8,
    priority: 2,
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
      공격력: '1800~2000',
      '공명 효율': '120+',
      '크확/크피': '60/220',
    },
  },
  {
    id: 'Camellya-stat-2',
    type: '준종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '130+',
      '크확/크피': '70/240',
    },
  },
  {
    id: 'Camellya-stat-3',
    type: '종결',
    fields: {
      공격력: '2200+',
      '공명 효율': '140+',
      '크확/크피': '80/260',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'Lorelei',
    main: '로렐라이',
    mainURL: getEchoImageURL('Lorelei'),
    sonataEffect: 'HavocEclipse',
    description: '부옵션 크리티컬 관련 및 공명 효율 추천',
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'WhispersOfSirens',
    name: '바다의 속삭임',
    imageURL: getWeaponImageURL('WhispersOfSirens'),
    priority: 1,
    mainStat: '공격력 500',
    subStat: '크리티컬 피해 72%',
  },
  {
    id: 'RimeDrapedSprouts',
    name: '옥수 비단',
    imageURL: getWeaponImageURL('RimeDrapedSprouts'),
    priority: 2,
    mainStat: '공격력 500',
    subStat: '크리티컬 피해 72%',
  },
  {
    id: 'CosmicRipples',
    name: '파도의 기록',
    imageURL: getWeaponImageURL('CosmicRipples'),
    priority: 3,
    mainStat: '공격력 500',
    subStat: '공격력 54%',
  },
  {
    id: 'Augment',
    name: '청음',
    imageURL: getWeaponImageURL('Augment'),
    priority: 4,
    mainStat: '공격력 413',
    subStat: ' 크리티컬 20.3%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Camellya-team-1',
    name: '금희, 칸타렐라, 벨리나',
    characters: 'Jinhsi, Cantarella, Verina',
    descriptions: [
      '[칸타렐라] E',
      '[벨리나] E - Q - R - 강공 - 공중 평타',
      '[금희] E - 평x4 - Q - E',
      '[칸타렐라] E - Q - R - 강공 - E - 평x3 - E',
      '[금희] R- E - 평x3 - E - 평 - E',
    ],
    score: 5,
  },
];

const Cantarella: Wutheringwaves.Character = {
  id: 'Cantarella',
  name: '칸타렐라',
  attribute: '인멸',
  weaponType: '직검',
  rarity: 5,
  imageURL: getCharacterImageURL('Cantarella'),
  profileImageURL: getCharacterProfileImageURL('Cantarella'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Cantarella;
