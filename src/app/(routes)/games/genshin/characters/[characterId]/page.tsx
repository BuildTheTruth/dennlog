"use client";

import characters from "@/data/genshin/characters";
import Image from "next/image";

const GenshinCharacterPage = ({
  params,
}: {
  params: { characterId: string };
}) => {
  const character = characters.find(
    (character) => character.id === params.characterId
  );

  if (!character) {
    return <div>캐릭터를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex w-full">
      <div className="flex w-full">
        <figure>
          <Image
            src={character.imageURL}
            alt={character.name}
            width={720}
            height={360}
          />
        </figure>
        <div className="flex flex-col gap-2">
          <div>{character.name}</div>
          <div>{character.element}</div>
          <div>{character.weaponType}</div>
          <div>{character.rarity}</div>
        </div>
      </div>
    </div>
  );
};

export default GenshinCharacterPage;
