"use client";

import { LNB } from "@/components/LNB";
import { usePathname } from "next/navigation";

const titleByRoute = {
  denncar: "DennCar",
  dennquiz: "DennQuiz",
  genshin: "원신",
  wutheringwaves: "명조",
  zenless: "젠레스 존 제로",
} as const;

const categoriesByPage: Record<string, (keyof typeof titleByRoute)[]> = {
  "/dev": ["denncar", "dennquiz"],
  "/games": ["genshin", "wutheringwaves", "zenless"],
};

const createNavItems = (pathname: string) => {
  const navItems = [];
  for (const [page, categories] of Object.entries(categoriesByPage)) {
    if (pathname.startsWith(page)) {
      for (const category of categories) {
        navItems.push({
          title: titleByRoute[category],
          href: `${page}/${category}`,
        });
      }
    }
  }
  return navItems;
};

interface Props {
  children: React.ReactNode;
}

export default function RouteLayout({ children }: Props) {
  const pathname = usePathname();
  const navItems = createNavItems(pathname);

  return (
    <div className="flex">
      <LNB items={navItems} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
