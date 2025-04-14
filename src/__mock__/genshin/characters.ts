type SkillType = "기본공격" | "원소전투스킬" | "원소폭발";

interface CharacterSkill {
  id: string;
  characterId: string;
  type: SkillType;
  name: string;
  max: number; // 고인물 특성 레벨
  min: number; // 권장 특성 레벨
  priority: number; // 레벨업 순서
}

type StatType = "기본" | "준종결" | "종결";

// 성유물
interface Artifact {
  id: string;
  name: string;
  stat: string; // 공%, 치확, 치피, 불원피 등
}

interface CharacterStat {
  id: string;
  characterId: string;
  type: StatType;
  artifactIds: string;
}

// 추천 성유물 세트
interface RecommendedArtifactSet {
  id: string;
  characterId: string;
  name: string;
  priority: number;
  imageURLs: string;
  description: string;
}

interface RecommendedWeapon {
  id: string;
  characterId: string;
  name: string;
  imageURL: string;
  priority: number;
  description: string;
  mainStat: string;
  subStat: string;
}

interface RecommendedTeam {
  id: string;
  characterId: string;
  name: string;
  characters: string;
  description: string;
  recommendedScore: number; // 0 ~ 10
}

interface GenshinCharacter {
  id: string;
  name: string;
  element: string; // 원소
  weaponType: string;
  rarity: number;
  imageURL: string;
  thumbnailImageURL: string;
  skills: CharacterSkill[];
  stats: CharacterStat[];
  recommendedArtifactSets: RecommendedArtifactSet[]; // 추천 성유물
  recommendedWeapons: RecommendedWeapon[]; // 추천 무기
  recommendedTeams: RecommendedTeam[]; // 추천 팀
}

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

const basicArtifacts: Artifact[] = [
  {
    id: "1",
    name: "시계",
    stat: "공%",
  },
  {
    id: "2",
    name: "성배",
    stat: "불원피/공%",
  },
  {
    id: "3",
    name: "왕관",
    stat: "치확/치피",
  },
  {
    id: "4",
    name: "공격력",
    stat: "1800+",
  },
  {
    id: "5",
    name: "원마",
    stat: "120~300",
  },
  {
    id: "6",
    name: "치확/치피",
    stat: "80/200",
  },
];

const normalArtifacts: Artifact[] = [
  {
    id: "7",
    name: "시계",
    stat: "공%",
  },
  {
    id: "8",
    name: "성배",
    stat: "불원피/공%",
  },
  {
    id: "9",
    name: "왕관",
    stat: "치확/치피",
  },
  {
    id: "10",
    name: "공격력",
    stat: "1800+",
  },
  {
    id: "11",
    name: "원마",
    stat: "120~300",
  },
  {
    id: "12",
    name: "치확/치피",
    stat: "80/200",
  },
];

const finalArtifacts: Artifact[] = [
  {
    id: "13",
    name: "시계",
    stat: "공%",
  },
  {
    id: "14",
    name: "성배",
    stat: "불원피/공%",
  },
  {
    id: "15",
    name: "왕관",
    stat: "치확/치피",
  },
  {
    id: "16",
    name: "공격력",
    stat: "1800+",
  },
  {
    id: "17",
    name: "원마",
    stat: "120~300",
  },
  {
    id: "18",
    name: "치확/치피",
    stat: "80/200",
  },
];

const stats: CharacterStat[] = [
  {
    id: "mavuika-stat-basic",
    characterId: "mavuika",
    type: "기본",
    artifactIds: basicArtifacts.map((artifact) => artifact.id).join(","),
  },
  {
    id: "mavuika-stat-normal",
    characterId: "mavuika",
    type: "준종결",
    artifactIds: normalArtifacts.map((artifact) => artifact.id).join(","),
  },
  {
    id: "mavuika-stat-final",
    characterId: "mavuika",
    type: "종결",
    artifactIds: finalArtifacts.map((artifact) => artifact.id).join(","),
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

const characters: GenshinCharacter[] = [
  {
    id: "mavuika",
    name: "마비카",
    element: "불",
    weaponType: "양손검",
    rarity: 5,
    imageURL:
      "https://i.namu.wiki/i/uokOamxY4uU48QGBFlBwoerdlK-Ai6DZbumzi4E_csLODbpi0Xzqv_Jsj_E4cgGiMZsUbdAX-6oDX0msDRcXOrLZz-SjPNqmkmzbmYOR4ErPitkG-JSk0bclMNeYS-HtSY6XpG8QK4LgxdkYL_DLBQ.webp",
    thumbnailImageURL:
      "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shougun.png",
    skills,
    stats,
    recommendedArtifactSets,
    recommendedWeapons,
    recommendedTeams,
  },
];
