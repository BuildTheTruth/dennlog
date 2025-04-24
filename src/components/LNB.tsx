'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { GENSHIN_CHARACTER_BY_ID, GenshinCharacterID } from '@/data/genshin/characters';
import {
  WUTHERINGWAVES_CHARACTER_BY_ID,
  WutheringwavesCharacterID,
} from '@/data/wutheringwaves/characters';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  id: string;
  title: string;
  href: string;
  imageURL?: string;
}

interface LNBProps {
  items: NavItem[];
}

export function LNB({ items }: LNBProps) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  // 현재 경로에 맞는 아이템 찾기
  const activeItem = items.find(item => pathname.startsWith(item.href));

  // 경로 타입 판별
  const isGamesRoot = pathSegments.length === 1 && pathSegments[0] === 'games';
  const isGameCharactersPage =
    pathSegments.length === 3 && pathSegments[0] === 'games' && pathSegments[2] === 'characters';
  const isCharacterDetailPage =
    pathSegments.length > 3 && pathSegments[0] === 'games' && pathSegments[2] === 'characters';
  const isDevPath = pathSegments.length >= 1 && pathSegments[0] === 'dev';

  // Breadcrumb 표시 조건
  const showAllGames = isGamesRoot || isGameCharactersPage;
  const showAllItems = showAllGames || isDevPath;

  // 캐릭터 상세 페이지일 때 캐릭터 이름 표시
  let characterName = '';
  if (isCharacterDetailPage) {
    const characterId = pathSegments[pathSegments.length - 1];
    characterName =
      GENSHIN_CHARACTER_BY_ID[characterId as GenshinCharacterID]?.name ||
      WUTHERINGWAVES_CHARACTER_BY_ID[characterId as WutheringwavesCharacterID]?.name ||
      '';
  }

  return (
    <>
      {/* 모바일 환경에서만 표시되는 Breadcrumb */}
      <div className="md:hidden w-full border-b p-4">
        <Breadcrumb>
          <BreadcrumbList className={showAllItems ? 'flex-wrap gap-3' : 'gap-3'}>
            {showAllItems ? (
              // 모든 카테고리 목록 표시
              items.map(item => (
                <BreadcrumbItem className="text-base" key={item.id}>
                  <BreadcrumbLink
                    href={item.href}
                    className={pathname.startsWith(item.href) ? 'font-bold text-foreground' : ''}
                  >
                    {item.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ))
            ) : (
              // 게임 > 캐릭터 형태로 표시
              <>
                {activeItem && (
                  <BreadcrumbItem className="text-base">
                    <BreadcrumbLink href={activeItem.href}>{activeItem.title}</BreadcrumbLink>
                  </BreadcrumbItem>
                )}

                {isCharacterDetailPage && characterName && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem className="text-base">
                      <BreadcrumbPage>{characterName}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* 데스크톱 환경에서만 표시되는 기존 LNB */}
      <nav className="hidden md:block w-64 border-r p-4">
        <ul className="space-y-2">
          {items.map(item => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                  pathname.startsWith(item.href)
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.imageURL && (
                  <Image src={item.imageURL} alt={item.title} width={32} height={32} />
                )}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
