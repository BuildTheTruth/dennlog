import { getImageURL } from '.';

const PATH = 'genshin';

export const getCharacterProfileImageURL = (id: string) =>
  getImageURL(`${PATH}/characters/${id}/profile.webp`, { format: 'webp', width: 100, height: 100 });

export const getCharacterImageURL = (id: string) =>
  getImageURL(`${PATH}/characters/${id}/default.webp`, {
    format: 'webp',
    width: 720,
    height: 600,
    resize: 'cover',
  });

export const getCharacterThumbnailImageURL = (id: string) =>
  getImageURL(`${PATH}/characters/${id}/thumbnail.webp`, { format: 'webp' });

export const getArtifactImageURL = (id: string) =>
  getImageURL(`${PATH}/artifacts/${id}.webp`, { format: 'webp', width: 100, height: 100 });

export const getWeaponImageURL = (id: string) =>
  getImageURL(`${PATH}/weapons/${id}.webp`, { format: 'webp', width: 160, height: 160 });
