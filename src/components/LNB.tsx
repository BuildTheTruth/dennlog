'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  title: string;
  href: string;
}

interface LNBProps {
  items: NavItem[];
}

export function LNB({ items }: LNBProps) {
  const pathname = usePathname();

  return (
    <nav className="w-64 border-r p-4">
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
  );
}
