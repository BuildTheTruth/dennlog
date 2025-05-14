import Cantarella from './Cantarella';
import Carlotta from './Carlotta';
import Camellya from './Camellya';
import Jinhsi from './Jinhsi';
import Changli from './Changli';
import Brant from './Brant';
import Shorekeeper from './Shorekeeper';
import Phoebe from './Phoebe';
import Verina from './Verina';
import Yinlin from './Yinlin';
import Zani from './Zani';
import Ciaccona from './Ciaccona';
import XiangliYao from './XiangliYao';
import Jiyan from './Jiyan';
import Jianxin from './Jianxin';
import Roccia from './Roccia';
import Zhezhi from './Zhezhi';
import Sanhua from './Sanhua';
import Rover_Spectro from './Rorver_Spectro';
import Rover_Havoc from './Rover_Havoc';
import Rover_Aero from './Rover_Aero';
import Mortefi from './Mortefi';
import Calcharo from './Calcharo';
import Baizhi from './Baizhi';
import Encore from './Encore';
import Lingyang from './Lingyang';
import Yangyang from './Yangyang';
import Youhu from './Youhu';
import Lumi from './Lumi';
import Chixia from './Chixia';
import Dangjin from './Dangjin';
import Taoqi from './Taoqi';
import Yuanwu from './Yuanwu';
import Aalto from './Aalto';

export const WUTHERINGWAVES_CHARACTER_BY_ID = {
  Rover_Spectro,
  Mortefi,
  Calcharo,
  Baizhi,
  Encore,
  Lingyang,
  Yangyang,
  Sanhua,
  Rover_Havoc,
  Verina,
  Yinlin,
  XiangliYao,
  Jiyan,
  Jianxin,
  Roccia,
  Zhezhi,
  Cantarella,
  Carlotta,
  Camellya,
  Jinhsi,
  Changli,
  Brant,
  Shorekeeper,
  Phoebe,
  Zani,
  Ciaccona,
  Rover_Aero,
  Youhu,
  Lumi,
  Chixia,
  Dangjin,
  Taoqi,
  Yuanwu,
  Aalto,
} as const;

export const WUTHERINGWAVES_CHARACTERS: Wutheringwaves.Character[] = Object.values(
  WUTHERINGWAVES_CHARACTER_BY_ID,
);

export type WutheringwavesCharacterID = keyof typeof WUTHERINGWAVES_CHARACTER_BY_ID;
