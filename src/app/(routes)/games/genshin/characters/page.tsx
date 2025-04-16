"use client";

import characters from "@/__mock__/genshin/characters";
import { useRouter } from "next/navigation";

const GenshinCharactersPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      <div className="text-black dark:text-white text-lg font-bold">
        캐릭터 육성법
      </div>
      <div className="flex flex-wrap gap-4">
        {characters.map((character) => (
          <div
            className="flex flex-col items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-4"
            key={character.id}
            onClick={() => {
              router.push(`/games/genshin/characters/${character.id}`);
            }}
          >
            <img
              src={character.profileImageURL}
              alt={character.name}
              width={100}
              height={100}
            />
            <div className="text-black dark:text-white text-lg font-bold">
              {character.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenshinCharactersPage;
