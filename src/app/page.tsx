import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">DennLog</h1>

      <div className="text-2xl font-bold mb-4">게임 목록</div>
      <div className="flex gap-4">
        <Link href="/games/genshin">
          <Image src="/genshin.webp" alt="원신" width={100} height={100} />
        </Link>
        <Link href="/games/wutheringwaves">
          <Image src="/wutheringwaves.webp" alt="명조" width={100} height={100} />
        </Link>
      </div>
    </div>
  );
}
