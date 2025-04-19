const BASE_URL = 'https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public/genshin';

export const getCharacterProfileImageURL = (id: string) =>
  `${BASE_URL}/characters/${id}/profile.webp`;
export const getCharacterImageURL = (id: string) => `${BASE_URL}/characters/${id}/default.webp`;
export const getCharacterThumbnailImageURL = (id: string) =>
  `${BASE_URL}/characters/${id}/thumbnail.webp`;

export const getArtifactImageURL = (id: string) => `${BASE_URL}/artifacts/${id}.webp`;

export const getWeaponImageURL = (id: string) => `${BASE_URL}/weapons/${id}.webp`;
