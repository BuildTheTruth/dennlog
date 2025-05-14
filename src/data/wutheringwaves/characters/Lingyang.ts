/**
 * 참고 외부 사이트
 * https://game8.co/games/Wuthering-Waves/archives/454223
 */

import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Lingyang-skill-1',
    name: '기본 공격',
    type: '기본공격',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Lingyang-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 8,
    min: 6,
    priority: 3,
  },
  {
    id: 'Lingyang-skill-3',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Lingyang-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 8,
    min: 6,
    priority: 4,
  },
  {
    id: 'Lingyang-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Lingyang-stat-1',
    type: '기본',
    fields: {
      공격력: '1800~2000',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'Lingyang-stat-2',
    type: '준종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '120',
      '크리/크피': '70/250',
    },
  },
  {
    id: 'Lingyang-stat-3',
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
    id: 'PhantomSentryConstruct',
    main: '이성(異性) 무장',
    mainURL: getEchoImageURL('PhantomSentryConstruct'),
    sonataEffect: 'FrostyResolve',
    descriptions: ['냉철한 결단', '크리티컬 및 응결 피해 보너스', '일반 공격 보너스'],
    score: 5,
  },
  {
    id: 'LampylumenMyriad',
    main: '반디의 군세',
    mainURL: getEchoImageURL('LampylumenMyriad'),
    sonataEffect: 'FreezingFrost',
    descriptions: ['야밤의 서리', '크리티컬 및 응결 피해 보너스', '일반 공격 보너스'],
    score: 4,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'AbyssSurges',
    name: '물결의 파동',
    imageURL: getWeaponImageURL('AbyssSurges'),
    priority: 1,
    mainStat: '공격력 588',
    subStat: '공격력 36.5%',
  },
  {
    id: 'HollowMirage',
    name: '천공의 역행',
    imageURL: getWeaponImageURL('HollowMirage'),
    priority: 2,
    mainStat: '공격력 413',
    subStat: '공격력 30.4%',
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
    id: 'Lingyang-team-1',
    name: '능양, 절지, 파수인',
    characters: 'Lingyang, Zhezhi, Shorekeeper',
    descriptions: [],
    score: 5,
  },
  {
    id: 'Lingyang-team-2',
    name: '능양, 산화, 설지',
    characters: 'Lingyang, Sanhua, Baizhi',
    descriptions: [],
    score: 4,
  },
];

const Lingyang: Wutheringwaves.Character = {
  id: 'Lingyang',
  name: '능양',
  attribute: 'Glacio',
  weaponType: '권갑',
  rarity: 5,
  imageURL: getCharacterImageURL('Lingyang'),
  profileImageURL: getCharacterProfileImageURL('Lingyang'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Lingyang;
