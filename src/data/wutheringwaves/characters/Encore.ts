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
    id: 'Encore-skill-3',
    name: '기본 공격',
    type: '기본공격',
    max: 6,
    min: 1,
    priority: 4,
  },
  {
    id: 'Encore-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 10,
    min: 8,
    priority: 3,
  },
  {
    id: 'Encore-skill-1',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Encore-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Encore-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Encore-stat-1',
    type: '기본',
    fields: {
      공격력: '1600~1800',
      '공명 효율': '120',
      '크리/크피': '60/230',
    },
  },
  {
    id: 'Encore-stat-2',
    type: '준종결',
    fields: {
      공격력: '1800~2000',
      '공명 효율': '120',
      '크리/크피': '70/250',
    },
  },
  {
    id: 'Encore-stat-3',
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
    id: 'NightmareInfernoRider',
    main: '지옥불 기사',
    mainURL: getEchoImageURL('NightmareInfernoRider'),
    sonataEffect: 'MoltenRift',
    descriptions: ['크리티컬 확률 및 크리티컬 피해', '용융 피해 증가와 일반 공격 피해 증가'],
    score: 5,
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
    id: 'Variation',
    name: '판타지 변주',
    imageURL: getWeaponImageURL('Variation'),
    priority: 4,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Encore-team-1',
    name: '장리, 앙코, 파수인',
    characters: 'Changli, Encore, Shorekeeper',
    descriptions: [],
    score: 5,
  },
  {
    id: 'Encore-team-1',
    name: '앙코, 브렌트, 파수인',
    characters: 'Encore, Brant, Shorekeeper',
    descriptions: [],
    score: 4,
  },
  {
    id: 'Encore-team-1',
    name: '앙코, 산화, 파수인',
    characters: 'Encore, Sanhua, Shorekeeper',
    descriptions: [],
    score: 3,
  },
];

const Encore: Wutheringwaves.Character = {
  id: 'Encore',
  name: '앙코',
  attribute: 'Fusion',
  weaponType: '증폭기',
  rarity: 5,
  imageURL: getCharacterImageURL('Encore'),
  profileImageURL: getCharacterProfileImageURL('Encore'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Encore;
