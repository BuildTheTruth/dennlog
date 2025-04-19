const skills: CharacterSkill[] = [
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

const stats: CharacterStat[] = [
  {
    id: 'mavuika-stat-basic',
    type: '기본',
    fields: {
      공격력: '1800+',
      '원소 마스터리': '120~300',
      성배: '불원피/공%',
    },
  },
  {
    id: 'mavuika-stat-normal',
    type: '준종결',
    fields: {
      공격력: '1800+',
      '원소 마스터리': '120~300',
      성배: '불원피/공%',
    },
  },
  {
    id: 'mavuika-stat-final',
    type: '종결',
    fields: {
      공격력: '1800+',
      '원소 마스터리': '120~300',
      성배: '불원피/공%',
    },
  },
];

const artifactSets: ArtifactSet[] = [
  {
    id: 'mavuika-artifact-set-first',
    name: '흑요석 4세트',
    score: 1,
    imageURLs: [],
  },
];

const weapons: Weapon[] = [
  {
    id: 'mavuika-weapon-first',
    name: '타오르는 천개의 태양',
    imageURL: '',
    priority: 1,
    mainStat: '기초 공격력 741',
    subStat: '치명톼 확률 11.0%',
  },
  {
    id: 'mavuika-weapon-second',

    name: '판정',
    imageURL: '',
    priority: 2,
    mainStat: '기초 공격력 674',
    subStat: '치명타 확률 22.1%',
  },
  {
    id: 'mavuika-weapon-third',

    name: '이무기 검',
    imageURL: '',
    priority: 3,
    mainStat: '기초 공격력 510',
    subStat: '치명타 확률 27.6%',
  },
];

const teams: Team[] = [
  {
    id: 'mavuika-team-first',
    name: '마비카 하이퍼캐리',
    characters: '마비카, 실로닌, 베넷, 실로닌',
    descriptions: ['마비카 E', '실로닌 (Q)E 평평', '베넷 EQ', '실로닌 EQ 평평'],
    score: 10,
  },
  {
    id: 'mavuika-team-second',
    name: '마비카 오프필드 조합',
    characters: '마비카, 키니치, 나히다, 실로닌',
    descriptions: ['마비카 E', '키니치 E(Q)', '나히다 E', '실로닌 EQ 평평'],
    score: 9,
  },
];

const breakthroughs: Breakthrough[] = [
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

const Varesa: GenshinCharacter = {
  id: 'Varesa',
  name: '바레사',
  element: '번개',
  weaponType: '법구',
  rarity: 5,
  imageURL:
    'https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public/genshin/characters/Varesa/default.webp',
  profileImageURL:
    'https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public/genshin/characters/Varesa/profile.webp',
  thumbnailImageURL:
    'https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public/genshin/characters/Varesa/thumbnail.webp',
  skills,
  stats,
  artifactSets,
  weapons,
  teams,
  breakthroughs,
};

export default Varesa;
