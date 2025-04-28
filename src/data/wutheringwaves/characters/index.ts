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

export const WUTHERINGWAVES_CHARACTER_BY_ID = {
  Cantarella,
  Carlotta,
  Camellya,
  Jinhsi,
  Changli,
  Brant,
  Shorekeeper,
  Phoebe,
  Verina,
  Yinlin,
  Zani,
} as const;

export const WUTHERINGWAVES_CHARACTERS: Wutheringwaves.Character[] = Object.values(
  WUTHERINGWAVES_CHARACTER_BY_ID,
);

export type WutheringwavesCharacterID = keyof typeof WUTHERINGWAVES_CHARACTER_BY_ID;
