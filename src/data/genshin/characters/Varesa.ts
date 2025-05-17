import {
  getArtifactImageURL,
  getCharacterImageURL,
  getCharacterProfileImageURL,
  getWeaponImageURL,
} from '@/lib/image/genshin';

const skills: Genshin.CharacterSkill[] = [
  {
    id: 'Varesa-skill-basic',
    type: '기본공격',
    name: '기본 공격',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Varesa-skill-elemental-skill',
    type: '원소전투스킬',
    name: '원소 전투 스킬',
    max: 9,
    min: 8,
    priority: 3,
  },
  {
    id: 'Varesa-skill-elemental-burst',
    type: '원소폭발',
    name: '원소 폭발',
    max: 9,
    min: 8,
    priority: 2,
  },
];

const stats: Genshin.CharacterStat[] = [
  {
    id: 'Varesa-stat-basic',
    type: '기본',
    fields: {
      공격력: '2000',
      원충: '120',
      '치확/치피': '70/150',
    },
  },
  {
    id: 'Varesa-stat-normal',
    type: '준종결',
    fields: {
      공격력: '2200',
      원충: '130',
      '치확/치피': '80/170',
    },
  },
  {
    id: 'Varesa-stat-final',
    type: '종결',
    fields: {
      공격력: '2400',
      원충: '140',
      '치확/치피': '90/190',
    },
  },
];

const artifactSets: Genshin.ArtifactSet[] = [
  {
    id: 'LongNightOath',
    name: '긴 밤의 맹세 4세트',
    score: 5,
    imageURL: getArtifactImageURL('LongNightOath/sands'),
    descriptions: [
      '[시계] 공격력',
      '[성배] 번개 원소 피해 보너스',
      '[왕관] 치명타 확률 / 치명타 피해',
      '[부옵션] 치명타, 공격력, 원소 충전 효율',
    ],
  },
  {
    id: 'ObsidianCodex',
    name: '흑요석 4세트',
    score: 4,
    imageURL: getArtifactImageURL('ObsidianCodex/sands'),
    descriptions: ['오버 치확되지 않도록 주의'],
  },
];

const weapons: Genshin.Weapon[] = [
  {
    id: 'VividNotions',
    name: '빛나는 마음',
    imageURL: getWeaponImageURL('VividNotions'),
    priority: 1,
    mainStat: '기초 공격력 674',
    subStat: '치명타 피해 44.1%',
  },
  {
    id: 'LostPrayerToTheSacredWinds',
    name: '사풍 원서',
    imageURL: getWeaponImageURL('LostPrayerToTheSacredWinds'),
    priority: 2,
    mainStat: '기초 공격력 608',
    subStat: '치명타 확률 33.1%',
  },
  {
    id: 'TheWidsith',
    name: '음유시인의 악장',
    imageURL: getWeaponImageURL('TheWidsith'),
    priority: 3,
    mainStat: '기초 공격력 510',
    subStat: '치명타 피해 55.1%',
  },
];

const teams: Genshin.Team[] = [
  {
    id: 'Varesa-team-first',
    name: '바푸얀한',
    characters: 'Varesa, Furina, Iansan, Xianyun',
    descriptions: [],
    score: 5,
  },
  {
    id: 'Varesa-team-second',
    name: '바마얀슈',
    characters: 'Varesa, Mavuika, Iansan, Chevreuse',
    descriptions: [],
    score: 4,
  },
];

const breakthroughs: Genshin.Breakthrough[] = [
  {
    id: 'Varesa-breakthrough-first',
    name: '2돌: 빛의 한계 돌파',
    description: '원소 폭발 매번 사용 가능, 낙하 공격 명중 시 에너지 회복',
  },
];

const Varesa: Genshin.Character = {
  id: 'Varesa',
  name: '바레사',
  element: '번개',
  weaponType: '법구',
  rarity: 5,
  imageURL: getCharacterImageURL('Varesa'),
  profileImageURL: getCharacterProfileImageURL('Varesa'),
  skills,
  stats,
  artifactSets,
  weapons,
  teams,
  breakthroughs,
};

export default Varesa;
