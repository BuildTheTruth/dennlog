'use client';

import { WUTHERINGWAVES_CHARACTERS } from '@/data/wutheringwaves/characters';
import { useRouter } from 'next/navigation';

const WutheringwavesCharactersPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 px-4 md:px-0 w-full max-w-screen-xl mx-auto md:mx-0 md:w-auto">
      <div className="text-black dark:text-white text-lg font-bold">캐릭터 육성법</div>
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        {WUTHERINGWAVES_CHARACTERS.map(character => (
          <div
            className="flex flex-col items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 cursor-pointer w-[140px] md:w-auto"
            key={character.id}
            onClick={() => {
              router.push(`/games/wutheringwaves/characters/${character.id}`);
            }}
          >
            <img src={character.profileImageURL} alt={character.name} width={100} height={100} />
            <div className="text-black dark:text-white text-lg font-bold">{character.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WutheringwavesCharactersPage;
