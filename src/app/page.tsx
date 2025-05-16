import { Avatar, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center  mb-6 sm:mb-8">DennLog</h1>
      <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">게임 목록</div>
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
