import CharacterProfile from '@/components/CharacterProfile';
import { WUTHERINGWAVES_CHARACTERS } from '@/data/wutheringwaves/characters';
import Link from 'next/link';

const WutheringwavesCharactersPage = () => {
  return (
    <div className="flex flex-col gap-4 w-full mx-auto">
      <div className="text-black dark:text-white text-lg font-bold">캐릭터 목록</div>
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        {WUTHERINGWAVES_CHARACTERS.map(character => (
          <Link
            className="flex flex-col items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md transition-all duration-200"
            key={character.id}
            href={`/games/wutheringwaves/characters/${character.id}`}
          >
            <CharacterProfile id={character.id} />
            <div className="text-black dark:text-white text-lg font-bold">{character.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WutheringwavesCharactersPage;
