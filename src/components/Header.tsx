import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-6">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">DennLog</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/dev"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Dev
            </Link>
            <Link
              href="/game"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Game
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* 검색 컴포넌트 추가 예정 */}
          </div>
          <nav className="flex items-center">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
