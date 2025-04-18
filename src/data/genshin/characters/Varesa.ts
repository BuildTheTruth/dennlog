import {
  getArtifactImageURL,
  getCharacterImageURL,
  getCharacterProfileImageURL,
  getCharacterThumbnailImageURL,
  getWeaponImageURL,
} from '@/lib/image/genshin';

const skills: CharacterSkill[] = [
  {
    id: 'mavuika-skill-basic',
    type: '기본공격',
    name: '기본 공격',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'mavuika-skill-elemental-skill',
    type: '원소전투스킬',
    name: '원소 전투 스킬',
    max: 9,
    min: 8,
    priority: 3,
  },
  {
    id: 'mavuika-skill-elemental-burst',
    type: '원소폭발',
    name: '원소 폭발',
    max: 9,
    min: 8,
    priority: 2,
  },
];

const stats: CharacterStat[] = [
  {
    id: 'mavuika-stat-basic',
    type: '기본',
    fields: {
      시계: '공%',
      성배: '번원피',
      왕관: '치확/치피',
      공격력: '1800~2000',
      원충: '120%+',
      '치확/치피': '70/150',
    },
  },
  {
    id: 'mavuika-stat-normal',
    type: '준종결',
    fields: {
      시계: '공%',
      성배: '번원피',
      왕관: '치확/치피',
      공격력: '2000~2200',
      원충: '130%+',
      '치확/치피': '80/170',
    },
  },
  {
    id: 'mavuika-stat-final',
    type: '종결',
    fields: {
      시계: '공%',
      성배: '번원피',
      왕관: '치확/치피',
      공격력: '2300+',
      원충: '140%+',
      '치확/치피': '90/190',
    },
  },
];

const artifactSets: ArtifactSet[] = [
  {
    id: 'LongNightOath',
    name: '긴 밤의 맹세 4세트',
    score: 5,
    imageURLs: [
      getArtifactImageURL('LongNightOath/flower'),
      getArtifactImageURL('LongNightOath/plume'),
      getArtifactImageURL('LongNightOath/sands'),
      getArtifactImageURL('LongNightOath/goblet'),
      getArtifactImageURL('LongNightOath/circlet'),
    ],
  },
  {
    id: 'ObsidianCodex',
    name: '흑요석 4세트',
    score: 4,
    imageURLs: [
      getArtifactImageURL('ObsidianCodex/flower'),
      getArtifactImageURL('ObsidianCodex/plume'),
      getArtifactImageURL('ObsidianCodex/sands'),
      getArtifactImageURL('ObsidianCodex/goblet'),
      getArtifactImageURL('ObsidianCodex/circlet'),
    ],
  },
];

const weapons: Weapon[] = [
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

const teams: Team[] = [
  {
    id: 'mavuika-team-first',
    name: '바푸얀한',
    characters: 'Varesa, Furina, Iansan, Xianyun',
    descriptions: ['바레사 E', '푸리나 EQ', '얀사 EQ', '한운 EQ', '바레사 E평평x2 Q 반복'],
    score: 5,
  },
  {
    id: 'mavuika-team-second',
    name: '바마얀슈',
    characters: 'Varesa, Mavuika, Iansan, Chevreuse',
    descriptions: [
      '마비카 E',
      '얀사 Q',
      '슈브르즈 E',
      '얀사 E',
      '바레사 Q E평평x2 Q 반복',
      '마비카 Q',
    ],
    score: 4,
  },
];

const breakthroughs: Breakthrough[] = [
  {
    id: 'mavuika-breakthrough-first',
    name: '2돌: 빛의 한계 돌파',
    description: '원소 폭발 매번 사용 가능, 낙하 공격 명중 시 에너지 회복',
  },
];

const Varesa: GenshinCharacter = {
  id: 'Varesa',
  name: '바레사',
  element: '번개',
  weaponType: '법구',
  rarity: 5,
  imageURL: getCharacterImageURL('Varesa'),
  profileImageURL: getCharacterProfileImageURL('Varesa'),
  thumbnailImageURL: getCharacterThumbnailImageURL('Varesa'),
  skills,
  stats,
  artifactSets,
  weapons,
  teams,
  breakthroughs,
};

export default Varesa;
