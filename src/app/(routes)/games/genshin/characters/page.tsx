import { GENSHIN_CHARACTERS } from '@/data/genshin/characters';
import Image from 'next/image';
import Link from 'next/link';

const GenshinCharactersPage = () => {
  return (
    <div className="flex flex-col gap-4 px-4 md:px-0 w-full mx-auto md:mx-0 md:w-auto">
      <div className="text-black dark:text-white text-lg font-bold">캐릭터 목록</div>
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        {GENSHIN_CHARACTERS.map(character => (
          <Link
            className="flex flex-col items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 cursor-pointer md:w-auto hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md transition-all duration-200"
            key={character.id}
            href={`/games/genshin/characters/${character.id}`}
          >
            <Image src={character.profileImageURL} alt={character.name} width={100} height={100} />
            <div className="text-black dark:text-white text-lg font-bold">{character.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenshinCharactersPage;
