/**
 * 참고 외부 사이트
 * https://foreverhan.tistory.com/2218
 */

import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Yinlin-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 6,
    min: 1,
    priority: 4,
  },
  {
    id: 'Yinlin-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 3,
  },
  {
    id: 'Yinlin-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Yinlin-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Yinlin-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Yinlin-stat-1',
    type: '기본',
    fields: {
      공격력: '1600~1800',
      '공명 효율': '120',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'Yinlin-stat-2',
    type: '준종결',
    fields: {
      공격력: '1800~2000',
      '공명 효율': '120',
      '크리/크피': '70/250',
    },
  },
  {
    id: 'Yinlin-stat-3',
    type: '종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '120',
      '크리/크피': '80/270',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'ImpermanenceHeron',
    main: '음험한 백로',
    mainURL: getEchoImageURL('ImpermanenceHeron'),
    sonataEffect: 'MoonlitClouds',
    descriptions: ['떠오르는 구름 (서포터)', '크리티컬 및 전도 피해 보너스'],
    score: 5,
  },
  {
    id: 'NightmareThunderingMephis',
    main: '악몽 · 뇌운의 비늘',
    mainURL: getEchoImageURL('NightmareThunderingMephis'),
    sonataEffect: 'RejuvenatingGlow',
    descriptions: ['울려퍼지는 뇌음 (메인 딜러)', '크리티컬 및 전도 피해 보너스'],
    score: 4,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'Stringmaster',
    name: '꼭두각시의 손',
    imageURL: getWeaponImageURL('Stringmaster'),
    priority: 1,
    mainStat: '공격력 500',
    subStat: '크리티컬 36.0%',
  },
  {
    id: 'CosmicRipples',
    name: '파도의 기록',
    imageURL: getWeaponImageURL('CosmicRipples'),
    priority: 2,
    mainStat: '공격력 500',
    subStat: '공격력 54%',
  },
  {
    id: 'Augment',
    name: '청음',
    imageURL: getWeaponImageURL('Augment'),
    priority: 3,
    mainStat: '공격력 413',
    subStat: '크리티컬 20.3%',
  },
  {
    id: 'JinzhouKeeper',
    name: '금주의 수호',
    imageURL: getWeaponImageURL('JinzhouKeeper'),
    priority: 4,
    mainStat: '공격력 387',
    subStat: '공격력 36.4%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Yinlin-team-1',
    name: '상리요, 음림, 벨리나',
    characters: 'XiangliYao, Yinlin, Verina',
    descriptions: [
      '[상리요] R - E평E - 평x3 - E - E평E - E',
      '[음림] E - R - 강공 - E - 점공',
      '[벨리나] E - Q - R - 점평x2',
      '[상리요] E',
      '[음림] 강공 - Q',
      '[상리요] Q - 강공',
    ],
    score: 5,
  },
  {
    id: 'Yinlin-team-2',
    name: '금희, 음림, 벨리나',
    characters: 'Jinhsi, Yinlin, Verina',
    descriptions: [
      '[음림] E - E',
      '[벨리나] E - Q - R - 점평x2',
      '[금희] E - 평x4 - Q - E',
      '[음림] E - Q - R- E - 강공',
      '[금희] R - E - 평x3 - E - 평 - E',
    ],
    score: 4,
  },
];

const Yinlin: Wutheringwaves.Character = {
  id: 'Yinlin',
  name: '음림',
  attribute: 'Conducto',
  weaponType: '증폭기',
  rarity: 5,
  imageURL: getCharacterImageURL('Yinlin'),
  profileImageURL: getCharacterProfileImageURL('Yinlin'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Yinlin;
