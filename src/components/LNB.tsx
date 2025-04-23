'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { GENSHIN_CHARACTER_BY_ID, GenshinCharacterID } from '@/data/genshin/characters';

interface NavItem {
  title: string;
  href: string;
}

interface LNBProps {
  items: NavItem[];
}

export function LNB({ items }: LNBProps) {
  const pathname = usePathname();

  // 현재 경로에 맞는 아이템 찾기
  const activeItem = items.find(item => pathname.startsWith(item.href));

  // 경로 분석
  const pathSegments = pathname.split('/').filter(Boolean);

  // 마지막 세그먼트가 의미있는 엔티티인 경우에만 표시 (characters는 표시하지 않음)
  const shouldShowLastSegment =
    pathSegments.length > 3 && pathSegments[pathSegments.length - 2] === 'characters';

  // 마지막 세그먼트가 있고 표시해야 하는 경우
  const lastSegment = shouldShowLastSegment ? pathSegments[pathSegments.length - 1] : '';

  // 마지막 세그먼트가 캐릭터인 경우 캐릭터 이름 표시
  const lastSegmentName = GENSHIN_CHARACTER_BY_ID[lastSegment as GenshinCharacterID]?.name || '';

  return (
    <>
      {/* 모바일 환경에서만 표시되는 Breadcrumb */}
      <div className="md:hidden w-full border-b p-4">
        <Breadcrumb>
          <BreadcrumbList>
            {activeItem && (
              <BreadcrumbItem>
                <BreadcrumbLink href={activeItem.href}>{activeItem.title}</BreadcrumbLink>
              </BreadcrumbItem>
            )}

            {lastSegment && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{lastSegmentName}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* 데스크톱 환경에서만 표시되는 기존 LNB */}
      <nav className="hidden md:block w-64 border-r p-4">
        <ul className="space-y-2">
          {items.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block p-2 rounded-lg transition-colors ${
                  pathname.startsWith(item.href)
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
