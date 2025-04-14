type SkillType = "기본공격" | "원소전투스킬" | "원소폭발";

interface CharacterSkill {
  id: string;
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
  type: StatType;
  artifacts: Artifact[];
}

// 추천 성유물 세트
interface RecommendedArtifactSet {
  id: string;
  name: string;
  priority: number;
  imageURLs: string[];
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
  characters: string[];
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
    skills: [
      {
        id: "mavuika-skill-basic",
        type: "기본공격",
        name: "기본 공격",
        max: 1,
        min: 1,
        priority: 3,
      },
      {
        id: "mavuika-skill-elemental-skill",
        type: "원소전투스킬",
        name: "원소 전투 스킬",
        max: 10,
        min: 8,
        priority: 2,
      },
      {
        id: "mavuika-skill-elemental-burst",
        type: "원소폭발",
        name: "원소 폭발",
        max: 10,
        min: 8,
        priority: 1,
      },
    ],
    stats: [
      {
        id: "mavuika-stat-basic",
        type: "기본",
        artifacts: [
          {
            id: "mavuika_basic",
            name: "시계",
            stat: "공%",
          },
          {
            id: "mavuika_basic",
            name: "성배",
            stat: "불원피/공%",
          },
          {
            id: "mavuika_basic",
            name: "왕관",
            stat: "치확/치피",
          },
          {
            id: "mavuika_basic",
            name: "공격력",
            stat: "1800+",
          },
          {
            id: "mavuika_basic",
            name: "원마",
            stat: "120~300",
          },
          {
            id: "mavuika_basic",
            name: "치확/치피",
            stat: "80/200",
          },
        ],
      },
      {
        id: "mavuika-stat-normal",
        type: "준종결",
        artifacts: [
          {
            id: "mavuika-stat-normal-artifact-watch",
            name: "시계",
            stat: "공%",
          },
          {
            id: "mavuika-stat-normal-artifact-scepter",
            name: "성배",
            stat: "불원피/공%",
          },
          {
            id: "mavuika-stat-normal-artifact-crown",
            name: "왕관",
            stat: "치확/치피",
          },
          {
            id: "mavuika-stat-normal-artifact-power",
            name: "공격력",
            stat: "1800+",
          },
          {
            id: "mavuika-stat-normal-artifact-element",
            name: "원마",
            stat: "120~300",
          },
          {
            id: "mavuika-stat-normal-artifact-critical",
            name: "치확/치피",
            stat: "80/200",
          },
        ],
      },
      {
        id: "mavuika-stat-final",
        type: "종결",
        artifacts: [
          {
            id: "mavuika-stat-final-artifact-watch",
            name: "시계",
            stat: "공%",
          },
          {
            id: "mavuika-stat-final-artifact-scepter",
            name: "성배",
            stat: "불원피/공%",
          },
          {
            id: "mavuika-stat-final-artifact-crown",
            name: "왕관",
            stat: "치확/치피",
          },
          {
            id: "mavuika-stat-final-artifact-power",
            name: "공격력",
            stat: "1800+",
          },
          {
            id: "mavuika-stat-final-artifact-element",
            name: "원마",
            stat: "120~300",
          },
          {
            id: "mavuika-stat-final-artifact-critical",
            name: "치확/치피",
            stat: "80/200",
          },
        ],
      },
    ],
    recommendedArtifactSets: [
      {
        id: "mavuika-artifact-set-first",
        name: "흑요석 4세트",
        priority: 1,
        imageURLs: [],
        description: "마비카에게 흑요석을 맞춰주는 것만이 정답",
      },
    ],
    recommendedWeapons: [
      {
        id: "mavuika-weapon-first",
        name: "타오르는 천개의 태양",
        imageURL: "",
        priority: 1,
        description: "마비카에게 흑요석을 맞춰주는 것만이 정답",
        mainStat: "기초 공격력 741",
        subStat: "치명톼 확률 11.0%",
      },
      {
        id: "mavuika-weapon-second",
        name: "판정",
        imageURL: "",
        priority: 2,
        description: "마비카에게 흑요석을 맞춰주는 것만이 정답",
        mainStat: "기초 공격력 674",
        subStat: "치명타 확률 22.1%",
      },
      {
        id: "mavuika-weapon-third",
        name: "이무기 검",
        imageURL: "",
        priority: 3,
        description: "마비카에게 흑요석을 맞춰주는 것만이 정답",
        mainStat: "기초 공격력 510",
        subStat: "치명타 확률 27.6%",
      },
    ],
    recommendedTeams: [
      {
        id: "mavuika-team-first",
        name: "마비카 하이퍼캐리",
        characters: ["마비카", "실로닌", "베넷", "실로닌"],
        description: "마비카에게 흑요석을 맞춰주는 것만이 정답",
        recommendedScore: 10,
      },
      {
        id: "mavuika-team-second",
        name: "마비카 오프필드 조합",
        characters: ["마비카", "키니치", "나히다", "실로닌"],
        description: "마비카에게 흑요석을 맞춰주는 것만이 정답",
        recommendedScore: 9,
      },
    ],
  },
];
