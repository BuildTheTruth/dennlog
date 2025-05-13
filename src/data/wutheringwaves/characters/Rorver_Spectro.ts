import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Rover_Spectro-skill-1',
    name: '기본 공격',
    type: '기본공격',
    max: 6,
    min: 1,
    priority: 4,
  },
  {
    id: 'Rover_Spectro-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Rover_Spectro-skill-3',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Rover_Spectro-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 3,
  },
  {
    id: 'Rover_Spectro-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Rover_Spectro-stat-1',
    type: '기본',
    fields: {
      공격력: '1800~2000',
      '공명 효율': '120',
      '크리/크피': '70/180',
    },
  },
  {
    id: 'Rover_Spectro-stat-2',
    type: '준종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '125',
      '크리/크피': '70/200',
    },
  },
  {
    id: 'Rover_Spectro-stat-3',
    type: '종결',
    fields: {
      공격력: '2200~2400',
      '공명 효율': '130',
      '크리/크피': '80/220',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'NightmareImpermanenceHeron',
    main: '악몽 · 애곡하는 아익스',
    mainURL: getEchoImageURL('NightmareImpermanenceHeron'),
    sonataEffect: 'MidnightVeil',
    descriptions: ['크리티컬 관련 및 강공격 피해 보너스'],
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'Tragicomedy',
    name: '희비극',
    imageURL: getWeaponImageURL('Tragicomedy'),
    priority: 1,
    mainStat: '공격력 588',
    subStat: '크리티컬 24.3%',
  },
  {
    id: 'VerityHandle',
    name: '팔방의 천추',
    imageURL: getWeaponImageURL('VerityHandle'),
    priority: 2,
    mainStat: '공격력 588',
    subStat: '크리티컬 24.3%',
  },
  {
    id: 'Stonard',
    name: '황금 권갑',
    imageURL: getWeaponImageURL('Stonard'),
    priority: 3,
    mainStat: '공격력 413',
    subStat: '크리티컬 20.3%',
  },
  {
    id: 'Marcato',
    name: '바람의 악센트',
    imageURL: getWeaponImageURL('Marcato'),
    priority: 4,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Rover_Spectro-team-1',
    name: '카멜리아, 로코코, 파수인',
    characters: 'Camellya, Rover_Spectro, Shorekeeper',
    descriptions: [],
    score: 5,
  },
  {
    id: 'Rover_Spectro-team-2',
    name: '방랑자(인멸), 로코코, 벨리나',
    characters: 'Rover_Spectro, Rover_Spectro, Verina',
    descriptions: [],
    score: 4,
  },
];

const Rover_Spectro: Wutheringwaves.Character = {
  id: 'Rover_Spectro',
  name: '방랑자(회절)',
  attribute: 'Spectro',
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

export default Rover_Spectro;
