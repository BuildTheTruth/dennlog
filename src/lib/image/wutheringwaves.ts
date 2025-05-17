import { getImageURL } from '.';

const PATH = 'wutheringwaves';

export const getCharacterProfileImageURL = (id: string) =>
  getImageURL(`${PATH}/characters/${id}/profile.webp`, { format: 'webp', width: 100, height: 100 });

export const getCharacterImageURL = (id: string) =>
  getImageURL(`${PATH}/characters/${id}/default.webp`, {
    format: 'webp',
    width: 720,
    height: 600,
    resize: 'cover',
  });

export const getEchoImageURL = (id: string) =>
  getImageURL(`${PATH}/echoes/${id}.webp`, { format: 'webp', width: 100, height: 100 });

export const getWeaponImageURL = (id: string) =>
  getImageURL(`${PATH}/weapons/${id}.webp`, { format: 'webp', width: 160, height: 160 });

export const getAttributeImageURL = (id: string) =>
  getImageURL(`${PATH}/attributes/${id}.webp`, { format: 'webp', width: 32, height: 32 });

export const getMaterialImageURL = (id: string) =>
  getImageURL(`${PATH}/materials/${id}.webp`, {
    format: 'webp',
    width: 100,
    height: 100,
    resize: 'cover',
  });
