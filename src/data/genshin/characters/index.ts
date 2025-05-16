import Escoffier from './Escoffier';
import Iansan from './Iansan';
import Ifa from './Ifa';
import Mavuika from './Mavuika';
import RaidenShogun from './RaidenShogun';
import Varesa from './Varesa';
import Ororon from './Ororon';
import Layla from './Layla';

export const GENSHIN_CHARACTER_BY_ID = {
  Mavuika,
  RaidenShogun,
  Varesa,
  Iansan,
  Ifa,
  Escoffier,
  Ororon,
  Layla,
} as const;

export const GENSHIN_CHARACTERS: Genshin.Character[] = Object.values(GENSHIN_CHARACTER_BY_ID);

export type GenshinCharacterID = keyof typeof GENSHIN_CHARACTER_BY_ID;
