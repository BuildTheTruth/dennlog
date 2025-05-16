import {
  getArtifactImageURL,
  getCharacterImageURL,
  getCharacterProfileImageURL,
  getWeaponImageURL,
} from '@/lib/image/genshin';

const skills: Genshin.CharacterSkill[] = [
  {
    id: 'mavuika-skill-basic',
    type: '기본공격',
    name: '기본 공격',
    max: 1,
    min: 1,
    priority: 3,
  },
  {
    id: 'mavuika-skill-elemental-skill',
    type: '원소전투스킬',
    name: '원소 전투 스킬',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'mavuika-skill-elemental-burst',
    type: '원소폭발',
    name: '원소 폭발',
    max: 10,
    min: 8,
    priority: 1,
  },
];

const stats: Genshin.CharacterStat[] = [
  {
    id: 'mavuika-stat-basic',
    type: '기본',
    fields: {
      공격력: '2000',
      원마: '120',
      '치확/치피': '80/200',
    },
  },
  {
    id: 'mavuika-stat-normal',
    type: '준종결',
    fields: {
      공격력: '2200',
      원마: '150',
      '치확/치피': '85/230',
    },
  },
  {
    id: 'mavuika-stat-final',
    type: '종결',
    fields: {
      공격력: '2400',
      원마: '200',
      '치확/치피': '90/260',
    },
  },
];

const artifactSets: Genshin.ArtifactSet[] = [
  {
    id: 'ObsidianCodex',
    name: '흑요석 4세트',
    score: 5,
    imageURL: getArtifactImageURL('ObsidianCodex/sands'),
    descriptions: [
      '[시계] 공격력 / 원소 마스터리',
      '[성배] 불 원소 피해 보너스',
      '[왕관] 치명타 피해',
      '[부옵션] 치명타, 공격력, 원소 마스터리',
      '원마 120~300까지 효율이 높음',
    ],
  },
];

const weapons: Genshin.Weapon[] = [
  {
    id: 'AThousandBlazingSuns',
    name: '타오르는 천개의 태양',
    imageURL: getWeaponImageURL('AThousandBlazingSuns'),
    priority: 1,
    mainStat: '기초 공격력 741',
    subStat: '치명타 확률 11.0%',
  },
  {
    id: 'Verdict',
    name: '판정',
    imageURL: getWeaponImageURL('Verdict'),
    priority: 2,
    mainStat: '기초 공격력 674',
    subStat: '치명타 확률 22.1%',
  },
  {
    id: 'SerpentSpine',
    name: '이무기 검',
    imageURL: getWeaponImageURL('SerpentSpine'),
    priority: 3,
    mainStat: '기초 공격력 510',
    subStat: '치명타 확률 27.6%',
  },
  {
    id: 'RedhornStonethresher',
    name: '쇄석의 붉은 뿔',
    imageURL: getWeaponImageURL('RedhornStonethresher'),
    priority: 4,
    mainStat: '기초 공격력 542',
    subStat: '치명타 피해 88.2%',
  },
  {
    id: 'MailedFlower',
    name: '꽃 장식 대검',
    imageURL: getWeaponImageURL('MailedFlower'),
    priority: 5,
    mainStat: '기초 공격력 565',
    subStat: '원소 마스터리 110',
  },
];

const teams: Genshin.Team[] = [
  {
    id: 'mavuika-team-first',
    name: '마실시베 융해 파티',
    characters: 'Mavuika, Xilonen, Citlali, Bennett',
    descriptions: [],
    score: 5,
  },
  {
    id: 'mavuika-team-second',
    name: '키에베마 연소 파티',
    characters: 'Kinich, Emilie, Bennett, Mavuika',
    descriptions: [],
    score: 4,
  },
];

const breakthroughs: Genshin.Breakthrough[] = [
  {
    id: 'mavuika-breakthrough-first',
    name: '1돌: 밤 주인의 계시',
    description: '밤혼 최대치 및 전의효율 / 공격력 증가 (명함 대비 약 15% 딜 상승)',
  },
  {
    id: 'mavuika-breakthrough-second',
    name: '2돌: 잿더미의 대가',
    description: '기초 공격력 및 무장 효과 강화 (명함 대비 약 50% 딜 상승)',
  },
  {
    id: 'mavuika-breakthrough-third',
    name: '6돌: 인간의 이름 해방',
    description: '무장 효과 완전 강화 (명함 대비 약 130% 딜 상승)',
  },
];

const Mavuika: Genshin.Character = {
  id: 'Mavuika',
  name: '마비카',
  element: '불',
  weaponType: '양손검',
  rarity: 5,
  imageURL: getCharacterImageURL('Mavuika'),
  profileImageURL: getCharacterProfileImageURL('Mavuika'),
  skills,
  stats,
  artifactSets,
  weapons,
  teams,
  breakthroughs,
};

export default Mavuika;
