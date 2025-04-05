import { LNB } from "@/components/LNB";

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { title: "개발 블로그", href: "/dev" },
    { title: "게임", href: "/games" },
    { title: "소개", href: "/about" },
  ];

  return (
    <div className="flex">
      <LNB items={navItems} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
