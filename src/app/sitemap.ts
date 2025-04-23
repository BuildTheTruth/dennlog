import { MetadataRoute } from 'next';
import { GENSHIN_CHARACTERS } from '@/data/genshin/characters';
import { WUTHERINGWAVES_CHARACTERS } from '@/data/wutheringwaves/characters';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 기본 URL 설정
  const baseURL = 'https://dennlog.vercel.app';

  // 정적 라우트 정의
  const staticRoutes = [
    '', // 홈
    '/games/genshin', // 원신 페이지
    '/games/genshin/characters', // 원신 캐릭터 목록 페이지
    '/games/wutheringwaves', // 명조 페이지
    '/games/wutheringwaves/characters', // 명조 캐릭터 목록 페이지
    '/about', // 소개 페이지
  ].map(route => ({
    url: `${baseURL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const genshinCharactersRoutes = GENSHIN_CHARACTERS.map(({ id }) => ({
    url: `${baseURL}/games/genshin/characters/${id}`,
    lastModified: new Date().toISOString(),
  }));

  const wutheringwavesCharactersRoutes = WUTHERINGWAVES_CHARACTERS.map(({ id }) => ({
    url: `${baseURL}/games/wutheringwaves/characters/${id}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...genshinCharactersRoutes, ...wutheringwavesCharactersRoutes];
}
