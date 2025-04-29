/**
 * 참고 외부 사이트
 * https://vortexgaming.io/postdetail/393255
 * https://vortexgaming.io/postdetail/395421
 */

import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'XiangliYao-skill-1',
    name: '기본 공격',
    type: '기본공격',
    max: 8,
    min: 6,
    priority: 4,
  },
  {
    id: 'XiangliYao-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 3,
  },
  {
    id: 'XiangliYao-skill-3',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'XiangliYao-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'XiangliYao-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'XiangliYao-stat-1',
    type: '기본',
    fields: {
      공격력: '1800~2000',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'XiangliYao-stat-2',
    type: '준종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '120',
      '크리/크피': '70/250',
    },
  },
  {
    id: 'XiangliYao-stat-2',
    type: '종결',
    fields: {
      공격력: '2200~2400',
      '공명 효율': '120',
      '크리/크피': '80/270',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'ThunderingMephis',
    main: '뇌운의 비늘',
    mainURL: getEchoImageURL('ThunderingMephis'),
    sonataEffect: 'RejuvenatingGlow',
    descriptions: [
      '에코 마지막 공격(6타) 명중 시 전도 피해 및 공명 해방 피해 증가',
      '시전 시간이 길지만 확실한 버프 제공',
    ],
    score: 5,
  },
  {
    id: 'TempestMephis',
    main: '천둥의 비늘',
    mainURL: getEchoImageURL('TempestMephis'),
    sonataEffect: 'RejuvenatingGlow',
    descriptions: [
      '에코 마지막 공격(2타) 명중 시 전도 피해 및 강공격 피해 증가',
      '시전 시간이 짧지만 상리요는 강공격 비중이 낮은 편',
    ],
    score: 4,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'VerityHandle',
    name: '팔방의 천추',
    imageURL: getWeaponImageURL('VerityHandle'),
    priority: 1,
    mainStat: '공격력 588',
    subStat: '크리티컬 24.3%',
  },
  {
    id: 'AbyssSurges',
    name: '물결의 파동',
    imageURL: getWeaponImageURL('AbyssSurges'),
    priority: 2,
    mainStat: '공격력 588',
    subStat: '공격력 36.5%',
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
    id: 'HollowMirage',
    name: '천공의 역행',
    imageURL: getWeaponImageURL('HollowMirage'),
    priority: 4,
    mainStat: '공격력 413',
    subStat: '공격력 30.4%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'XiangliYao-team-1',
    name: '상리요, 음림, 벨리나',
    characters: 'XiangliYao, Yinlin, Verina',
    descriptions: [],
    score: 5,
  },
  {
    id: 'XiangliYao-team-2',
    name: '상리요, 장리, 벨리나',
    characters: 'XiangliYao, Changli, Verina',
    descriptions: [],
    score: 4,
  },
];

const XiangliYao: Wutheringwaves.Character = {
  id: 'XiangliYao',
  name: '상리요',
  attribute: '전도',
  weaponType: '권갑',
  rarity: 5,
  imageURL: getCharacterImageURL('XiangliYao'),
  profileImageURL: getCharacterProfileImageURL('XiangliYao'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default XiangliYao;
