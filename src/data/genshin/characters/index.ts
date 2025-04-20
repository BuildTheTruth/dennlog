import Iansan from './Iansan';
import Mavuika from './Mavuika';
import RaidenShogun from './RaidenShogun';
import Varesa from './Varesa';

export const GENSHIN_CHARACTER_BY_ID = {
  Mavuika,
  RaidenShogun,
  Varesa,
  Iansan,
} as const;

export const GENSHIN_CHARACTERS: Genshin.Character[] = Object.values(GENSHIN_CHARACTER_BY_ID);

export type GenshinCharacterID = keyof typeof GENSHIN_CHARACTER_BY_ID;
