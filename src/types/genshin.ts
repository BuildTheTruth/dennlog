type SkillType = '기본공격' | '원소전투스킬' | '원소폭발';

interface CharacterSkill {
  id: string;
  type: SkillType;
  name: string;
  max: number; // 고인물 특성 레벨
  min: number; // 권장 특성 레벨
  priority: number; // 레벨업 순서
}

type StatType = '기본' | '준종결' | '종결';

interface CharacterStat {
  id: string;
  type: StatType;
  /* { "공격력": "1800+", "원소 마스터리": "120~300", "성배": "불원피/공%" } */
  fields: { [name: string]: string };
}

// 추천 성유물 세트
interface RecommendedArtifactSet {
  id: string;

  name: string;
  priority: number;
  imageURLs: string;
  description: string;
}

interface RecommendedWeapon {
  id: string;

  name: string;
  imageURL: string;
  priority: number;
  description: string;
  mainStat: string;
  subStat: string;
}

interface RecommendedTeam {
  id: string;

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
  profileImageURL: string;
  thumbnailImageURL: string;
  skills: CharacterSkill[];
  stats: CharacterStat[];
  recommendedArtifactSets: RecommendedArtifactSet[]; // 추천 성유물
  recommendedWeapons: RecommendedWeapon[]; // 추천 무기
  recommendedTeams: RecommendedTeam[]; // 추천 팀
}
