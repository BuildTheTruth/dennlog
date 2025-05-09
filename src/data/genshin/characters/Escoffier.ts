// https://lootbar.gg/blog/en/genshin-impact-escoffier-build-guide.html

import {
  getArtifactImageURL,
  getCharacterImageURL,
  getCharacterProfileImageURL,
  getCharacterThumbnailImageURL,
  getWeaponImageURL,
} from '@/lib/image/genshin';

const skills: Genshin.CharacterSkill[] = [
  {
    id: 'escoffier-skill-basic',
    type: '기본공격',
    name: '기본 공격',
    max: 1,
    min: 1,
    priority: 3,
  },
  {
    id: 'escoffier-skill-elemental-skill',
    type: '원소전투스킬',
    name: '원소 전투 스킬',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'escoffier-skill-elemental-burst',
    type: '원소폭발',
    name: '원소 폭발',
    max: 9,
    min: 8,
    priority: 2,
  },
];

const stats: Genshin.CharacterStat[] = [
  {
    id: 'escoffier-stat-basic',
    type: '기본',
    fields: {
      공격력: '1800~2000',
      원충: '140',
      성배: '공%',
      시계: '원충/공%',
      '치확/치피': '60/140',
    },
  },
  {
    id: 'escoffier-stat-normal',
    type: '준종결',
    fields: {
      공격력: '2000~2200',
      원충: '160',
      성배: '공%',
      시계: '원충/공%',
      '치확/치피': '70/170',
    },
  },
  {
    id: 'escoffier-stat-final',
    type: '종결',
    fields: {
      공격력: '2200~2400',
      원충: '180',
      성배: '공%',
      시계: '원충/공%',
      '치확/치피': '80/200',
    },
  },
];

const artifactSets: Genshin.ArtifactSet[] = [
  {
    id: 'GoldenTroupe',
    name: '황금 극단 4세트',
    score: 5,
    imageURLs: [getArtifactImageURL('GoldenTroupe/sands')],
  },
];

const weapons: Genshin.Weapon[] = [
  {
    id: 'SymphonistOfScents',
    name: '맛의 지휘자',
    imageURL: getWeaponImageURL('SymphonistOfScents'),
    priority: 1,
    mainStat: '기초 공격력 608',
    subStat: '치명타 피해 66.2%',
  },
  {
    id: 'StaffOfHoma',
    name: '호마의 지팡이',
    imageURL: getWeaponImageURL('StaffOfHoma'),
    priority: 2,
    mainStat: '기초 공격력 608',
    subStat: '치명타 피해 66.2%',
  },
  {
    id: 'Deathmatch',
    name: '결투의 창',
    imageURL: getWeaponImageURL('Deathmatch'),
    priority: 3,
    mainStat: '기초 공격력 454',
    subStat: '치명타 확률 36.8%',
  },
  {
    id: 'SkywardSpine',
    name: '천공의 마루',
    imageURL: getWeaponImageURL('SkywardSpine'),
    priority: 4,
    mainStat: '기초 공격력 674',
    subStat: '원소 충전 효율 36.8%',
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
    id: 'escoffier-team-first',
    name: '아신푸에',
    characters: 'KamisatoAyaka, Shenhe, Furina, Escoffier',
    descriptions: [],
    score: 4,
  },
  {
    id: 'escoffier-team-second',
    name: '라신푸에',
    characters: 'Wriothesley, Shenhe, Furina, Escoffier',
    descriptions: [],
    score: 4,
  },
];

const breakthroughs: Genshin.Breakthrough[] = [];

const Escoffier: Genshin.Character = {
  id: 'Escoffier',
  name: '에스코피에',
  element: '얼음',
  weaponType: '장병기',
  rarity: 5,
  imageURL: getCharacterImageURL('Escoffier'),
  profileImageURL: getCharacterProfileImageURL('Escoffier'),
  thumbnailImageURL: getCharacterThumbnailImageURL('Escoffier'),
  skills,
  stats,
  artifactSets,
  weapons,
  teams,
  breakthroughs,
};

export default Escoffier;
