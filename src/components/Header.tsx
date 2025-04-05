"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dev", label: "Dev" },
  { href: "/games", label: "Games" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 w-full items-center px-4 md:px-6">
        {/* 로고 */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">DennLog</span>
          </Link>
        </div>
        {/* 네비게이션 - 왼쪽 배치 */}
        <nav className="flex-1 flex items-center justify-start space-x-6 text-sm font-medium ml-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.href
                  ? "text-foreground font-semibold"
                  : "text-foreground/60"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center ml-auto">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
