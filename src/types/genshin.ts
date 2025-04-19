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
  fields: { [name: string]: string }; // { "공격력": "1800+", "원마": "120~300", "성배": "불원피/공%" }
}

// 추천 성유물 세트
interface ArtifactSet {
  id: string;
  name: string;
  score: number;
  imageURLs: string[];
}

interface Weapon {
  id: string;
  name: string;
  imageURL: string;
  priority: number;
  mainStat: string;
  subStat: string;
}

interface Team {
  id: string;
  name: string;
  characters: string;
  descriptions: string[];
  score: number; // 0 ~ 10
}

interface Breakthrough {
  id: string;
  name: string;
  description: string;
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
  artifactSets: ArtifactSet[]; // 추천 성유물
  weapons: Weapon[]; // 추천 무기
  teams: Team[]; // 추천 팀
  breakthroughs: Breakthrough[]; // 추천 돌파
}
