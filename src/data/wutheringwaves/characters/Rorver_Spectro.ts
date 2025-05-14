import {
  getCharacterProfileImageURL,
  getCharacterImageURL,
  getEchoImageURL,
  getWeaponImageURL,
} from '@/lib/image/wutheringwaves';

const skills: Wutheringwaves.CharacterSkill[] = [
  {
    id: 'Rover_Spectro-skill-1',
    name: '기본 공격',
    type: '기본공격',
    max: 8,
    min: 6,
    priority: 3,
  },
  {
    id: 'Rover_Spectro-skill-2',
    name: '공명 스킬',
    type: '공명스킬',
    max: 8,
    min: 6,
    priority: 4,
  },
  {
    id: 'Rover_Spectro-skill-3',
    name: '공명 회로',
    type: '공명회로',
    max: 10,
    min: 8,
    priority: 1,
  },
  {
    id: 'Rover_Spectro-skill-4',
    name: '공명 해방',
    type: '공명해방',
    max: 10,
    min: 8,
    priority: 2,
  },
  {
    id: 'Rover_Spectro-skill-5',
    name: '변주 스킬',
    type: '변주스킬',
    max: 6,
    min: 1,
    priority: 5,
  },
];

const stats: Wutheringwaves.CharacterStat[] = [
  {
    id: 'Rover_Spectro-stat-1',
    type: '기본',
    fields: {
      공격력: '1600~1800',
      '공명 효율': '140',
      '크리/크피': '50/200',
    },
  },
  {
    id: 'Rover_Spectro-stat-2',
    type: '준종결',
    fields: {
      공격력: '1800~2000',
      '공명 효율': '150',
      '크리/크피': '60/220',
    },
  },
  {
    id: 'Rover_Spectro-stat-3',
    type: '종결',
    fields: {
      공격력: '2000~2200',
      '공명 효율': '160',
      '크리/크피': '70/240',
    },
  },
];

const echoSets: Wutheringwaves.EchoSet[] = [
  {
    id: 'ImpermanenceHeron',
    main: '음험한 백로',
    mainURL: getEchoImageURL('ImpermanenceHeron'),
    sonataEffect: 'MidnightVeil',
    descriptions: ['크리티컬 관련 및 공명 해방 피해 보너스'],
    score: 5,
  },
];

const weapons: Wutheringwaves.Weapon[] = [
  {
    id: 'EmeraldOfGenesis',
    name: '천년의 회류',
    imageURL: getWeaponImageURL('EmeraldOfGenesis'),
    priority: 1,
    mainStat: '공격력 588',
    subStat: '크리티컬 24.3%',
  },
  {
    id: 'BlazingBrilliance',
    name: '솟아오르는 화염',
    imageURL: getWeaponImageURL('BlazingBrilliance'),
    priority: 2,
    mainStat: '공격력 588',
    subStat: '크리티컬 피해 70.1%',
  },
  {
    id: 'Overture',
    name: '행진의 서곡',
    imageURL: getWeaponImageURL('Overture'),
    priority: 3,
    mainStat: '공격력 338',
    subStat: '공명 효율 51.8%',
  },
  {
    id: 'CommandoOfConviction',
    name: '야귀의 신념',
    imageURL: getWeaponImageURL('CommandoOfConviction'),
    priority: 4,
    mainStat: '공격력 413',
    subStat: '공격력 30.4%',
  },
];

const teams: Wutheringwaves.Team[] = [
  {
    id: 'Rover_Spectro-team-1',
    name: '페비, 방랑자(회절), 파수인',
    characters: 'Phoebe, Rover_Spectro, Shorekeeper',
    descriptions: [],
    score: 5,
  },
  {
    id: 'Zani-team-2',
    name: '젠니, 방랑자(회절), 벨리나',
    characters: 'Zani, Rover_Spectro, Verina',
    descriptions: [],
    score: 4,
  },
];

const Rover_Spectro: Wutheringwaves.Character = {
  id: 'Rover_Spectro',
  name: '방랑자(회절)',
  attribute: 'Spectro',
  weaponType: '직검',
  rarity: 5,
  imageURL: getCharacterImageURL('Rover'),
  profileImageURL: getCharacterProfileImageURL('Rover'),
  skills,
  stats,
  echoSets,
  weapons,
  teams,
};

export default Rover_Spectro;
