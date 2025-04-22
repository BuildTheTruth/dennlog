const BASE_URL = 'https://idphhmvmuywfflotbvei.supabase.co/storage/v1/object/public/wutheringwaves';

export const getCharacterProfileImageURL = (id: string) =>
  `${BASE_URL}/characters/${id}/profile.webp`;

export const getCharacterImageURL = (id: string) => `${BASE_URL}/characters/${id}/default.webp`;

export const getEchoImageURL = (id: string) => `${BASE_URL}/echoes/${id}.webp`;

export const getWeaponImageURL = (id: string) => `${BASE_URL}/weapons/${id}.webp`;
