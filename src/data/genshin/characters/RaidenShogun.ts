const skills: CharacterSkill[] = [
  {
    id: "mavuika-skill-basic",
    characterId: "mavuika",
    type: "기본공격",
    name: "기본 공격",
    max: 1,
    min: 1,
    priority: 3,
  },
  {
    id: "mavuika-skill-elemental-skill",
    characterId: "mavuika",
    type: "원소전투스킬",
    name: "원소 전투 스킬",
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: "mavuika-skill-elemental-burst",
    characterId: "mavuika",
    type: "원소폭발",
    name: "원소 폭발",
    max: 10,
    min: 8,
    priority: 1,
  },
];

const stats: CharacterStat[] = [
  {
    id: "mavuika-stat-basic",
    characterId: "mavuika",
    type: "기본",
    fields: {
      공격력: "1800+",
      "원소 마스터리": "120~300",
      성배: "불원피/공%",
    },
  },
  {
    id: "mavuika-stat-normal",
    characterId: "mavuika",
    type: "준종결",
    fields: {
      공격력: "1800+",
      "원소 마스터리": "120~300",
      성배: "불원피/공%",
    },
  },
  {
    id: "mavuika-stat-final",
    characterId: "mavuika",
    type: "종결",
    fields: {
      공격력: "1800+",
      "원소 마스터리": "120~300",
      성배: "불원피/공%",
    },
  },
];

const recommendedArtifactSets: RecommendedArtifactSet[] = [
  {
    id: "mavuika-artifact-set-first",
    characterId: "mavuika",
    name: "흑요석 4세트",
    priority: 1,
    imageURLs: "",
    description: "마비카에게 흑요석을 맞춰주는 것만이 정답",
  },
];

const recommendedWeapons: RecommendedWeapon[] = [
  {
    id: "mavuika-weapon-first",
    characterId: "mavuika",
    name: "타오르는 천개의 태양",
    imageURL: "",
    priority: 1,
    description: "마비카에게 흑요석을 맞춰주는 것만이 정답",
    mainStat: "기초 공격력 741",
    subStat: "치명톼 확률 11.0%",
  },
  {
    id: "mavuika-weapon-second",
    characterId: "mavuika",
    name: "판정",
    imageURL: "",
    priority: 2,
    description: "마비카에게 흑요석을 맞춰주는 것만이 정답",
    mainStat: "기초 공격력 674",
    subStat: "치명타 확률 22.1%",
  },
  {
    id: "mavuika-weapon-third",
    characterId: "mavuika",
    name: "이무기 검",
    imageURL: "",
    priority: 3,
    description: "마비카에게 흑요석을 맞춰주는 것만이 정답",
    mainStat: "기초 공격력 510",
    subStat: "치명타 확률 27.6%",
  },
];

const recommendedTeams: RecommendedTeam[] = [
  {
    id: "mavuika-team-first",
    characterId: "mavuika",
    name: "마비카 하이퍼캐리",
    characters: "마비카, 실로닌, 베넷, 실로닌",
    description: "마비카에게 흑요석을 맞춰주는 것만이 정답",
    recommendedScore: 10,
  },
  {
    id: "mavuika-team-second",
    characterId: "mavuika",
    name: "마비카 오프필드 조합",
    characters: "마비카, 키니치, 나히다, 실로닌",
    description: "마비카에게 흑요석을 맞춰주는 것만이 정답",
    recommendedScore: 9,
  },
];

const RaidenShogun: GenshinCharacter = {
  id: "Mavuika",
  name: "마비카",
  element: "불",
  weaponType: "양손검",
  rarity: 5,
  imageURL:
    "https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public/genshin/characters/RaidenShogun/default.webp",
  profileImageURL:
    "https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public/genshin/characters/RaidenShogun/profile.webp",
  skills,
  stats,
  recommendedArtifactSets,
  recommendedWeapons,
  recommendedTeams,
};

export default RaidenShogun;
