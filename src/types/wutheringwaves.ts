namespace Wutheringwaves {
  export type SkillType = '기본공격' | '공명스킬' | '공명회로' | '공명해방' | '변주스킬';
  export type SonataEffectType =
    | 'FreezingFrost' // 야밤의 서리
    | 'MoltenRift' // 솟구치는 용암
    | 'VoidThunder' // 울려퍼지는 뇌음
    | 'SierraGale' // 스쳐가는 바람
    | 'CelestialLight' // 빛나는 별
    | 'HavocEclipse' // 빛을 삼키는 해
    | 'RejuvenatingGlow' // 찬란한 광휘
    | 'MoonlitClouds' // 떠오르는 구름
    | 'LingeringTunes' // 끊임없는 잔향
    | 'FrostyResolve' // 냉철한 결단
    | 'EternalRadiance' // 영원의 광채
    | 'MidnightVeil' // 어둠의 장막
    | 'EmpyreanAnthem' // 하늘의 합주곡
    | 'TidebreakingCourage' // 파도에 맞선 용기
    | 'GustsOfWelkin'; // 끝없는 하늘

  export interface CharacterSkill {
    id: string;
    type: SkillType;
    name: string;
    max: number; // 고인물 특성 레벨
    min: number; // 권장 특성 레벨
    priority: number; // 레벨업 순서
  }

  export type StatType = '기본' | '준종결' | '종결';

  export interface CharacterStat {
    id: string;
    type: StatType;
    fields: { [name: string]: string }; // { "공격력": "1800+", "공명 효율": "130+", "크확/크피": "70/240" }
  }

  export interface EchoSet {
    id: string;
    main: string;
    mainURL: string;
    sonataEffect: SonataEffectType;
    description: string;
    score: number;
  }

  export interface Weapon {
    id: string;
    name: string;
    imageURL: string;
    priority: number;
    mainStat: string;
    subStat: string;
  }

  export interface Team {
    id: string;
    name: string;
    characters: string;
    descriptions: string[];
    score: number; // 0 ~ 10
  }

  export interface Breakthrough {
    id: string;
    name: string;
    description: string;
  }

  export interface Character {
    id: string;
    name: string;
    attribute: string; // 속성
    weaponType: string;
    rarity: number;
    imageURL: string;
    profileImageURL: string;
    // thumbnailImageURL: string;
    skills: CharacterSkill[];
    stats: CharacterStat[];
    echoSets: EchoSet[]; // 추천 에코
    weapons: Weapon[]; // 추천 무기
    teams: Team[]; // 추천 팀
    // breakthroughs: Breakthrough[]; // 추천 돌파
  }
}
