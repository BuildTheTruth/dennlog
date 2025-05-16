import { getArtifactImageURL, getCharacterImageURL, getWeaponImageURL } from '@/lib/image/genshin';

import { getCharacterProfileImageURL } from '@/lib/image/genshin';

const skills: Genshin.CharacterSkill[] = [
  {
    id: 'RaidenShogun-skill-basic',
    type: '기본공격',
    name: '기본 공격',
    max: 1,
    min: 1,
    priority: 3,
  },
  {
    id: 'RaidenShogun-skill-elemental-skill',
    type: '원소전투스킬',
    name: '원소 전투 스킬',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'RaidenShogun-skill-elemental-burst',
    type: '원소폭발',
    name: '원소 폭발',
    max: 10,
    min: 8,
    priority: 1,
  },
];

const stats: Genshin.CharacterStat[] = [
  {
    id: 'RaidenShogun-stat-basic',
    type: '기본',
    fields: {
      시계: '원충',
      성배: '번원피',
      왕관: '치확/치피',
      원충: '250',
      공격력: '1600~1800',
      '치확/치피': '55/110',
    },
  },
  {
    id: 'RaidenShogun-stat-normal',
    type: '준종결',
    fields: {
      시계: '원충/공%',
      성배: '번원피',
      왕관: '치확/치피',
      원충: '260',
      공격력: '1800~2000',
      '치확/치피': '60/120',
    },
  },
  {
    id: 'RaidenShogun-stat-final',
    type: '종결',
    fields: {
      시계: '원충/공%',
      성배: '번원피',
      왕관: '치확/치피',
      원충: '270',
      공격력: '2100~2300',
      '치확/치피': '70/140',
    },
  },
];

const artifactSets: Genshin.ArtifactSet[] = [
  {
    id: 'EmblemOfSeveredFate',
    name: '절연 4세트',
    score: 5,
    imageURL: getArtifactImageURL('EmblemOfSeveredFate/sands'),
    descriptions: [],
  },
];

const weapons: Genshin.Weapon[] = [
  {
    id: 'EngulfingLightning',
    name: '예초의 번개',
    imageURL: getWeaponImageURL('EngulfingLightning'),
    priority: 1,
    mainStat: '기초 공격력 608',
    subStat: '원소 충전 효율 55.1%',
  },
  {
    id: 'SkywardSpine',
    name: '천공의 마루',
    imageURL: getWeaponImageURL('SkywardSpine'),
    priority: 2,
    mainStat: '기초 공격력 674',
    subStat: '원소 충전 효율 36.8%',
  },
  {
    id: 'TheCatch',
    name: '어획',
    imageURL: getWeaponImageURL('TheCatch'),
    priority: 3,
    mainStat: '기초 공격력 510',
    subStat: '원소 충전 효율 45.9%',
  },
  {
    id: 'WavebreakerFin',
    name: '파도 베는 지느러미',
    imageURL: getWeaponImageURL('WavebreakerFin'),
    priority: 4,
    mainStat: '기초 공격력 620',
    subStat: '공격력 13.8%',
  },
  {
    id: 'FavoniusLance',
    name: '페보니우스 장창',
    imageURL: getWeaponImageURL('FavoniusLance'),
    priority: 5,
    mainStat: '기초 공격력 565',
    subStat: '원소 충전 효율 30.6%',
  },
];

const teams: Genshin.Team[] = [
  {
    id: 'RaidenShogun-team-first',
    name: '라사카베',
    characters: 'RaidenShogun, KujouSara, KaedeharaKazuha, Bennett',
    descriptions: ['라이덴 E', '카즈하 EQ', '베넷 QE', '쿠죠 사라 EQ', '라이덴 Q'],
    score: 5,
  },
  {
    id: 'RaidenShogun-team-second',
    name: '라행향베',
    characters: 'RaidenShogun, Xingqiu, Xiangling, Bennett',
    descriptions: ['라이덴 E', '행추 Q평 E평 E평', '베넷 QE', '향릉 QE', '라이덴 Q'],
    score: 4,
  },
  {
    id: 'RaidenShogun-team-third',
    name: '라미카베',
    characters: 'RaidenShogun, YaeMiko, KaedeharaKazuha, Bennett',
    descriptions: ['라이덴 E', '미코 EEE', '카즈하 EQ', '베넷 EQ', '미코 QEEE', '라이덴 Q'],
    score: 4,
  },
];

const breakthroughs: Genshin.Breakthrough[] = [
  {
    id: 'RaidenShogun-breakthrough-second',
    name: '2돌: 강철 절단',
    description: '원소 폭발 시전 시 라이덴 쇼군은 적의 방어력 60%를 무시',
  },
];

const RaidenShogun: Genshin.Character = {
  id: 'RaidenShogun',
  name: '라이덴 쇼군',
  element: '번개',
  weaponType: '장병기',
  rarity: 5,
  imageURL: getCharacterImageURL('RaidenShogun'),
  profileImageURL: getCharacterProfileImageURL('RaidenShogun'),
  skills,
  stats,
  artifactSets,
  weapons,
  teams,
  breakthroughs,
};

export default RaidenShogun;
