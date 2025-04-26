import Cantarella from './Cantarella';
import Carlotta from './Carlotta';
import Camellya from './Camellya';
import Jinhsi from './Jinhsi';

export const WUTHERINGWAVES_CHARACTER_BY_ID = {
  Cantarella,
  Carlotta,
  Camellya,
  Jinhsi,
} as const;

export const WUTHERINGWAVES_CHARACTERS: Wutheringwaves.Character[] = Object.values(
  WUTHERINGWAVES_CHARACTER_BY_ID,
);

export type WutheringwavesCharacterID = keyof typeof WUTHERINGWAVES_CHARACTER_BY_ID;
