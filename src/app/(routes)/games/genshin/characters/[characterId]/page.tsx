"use client";

import {
  GENSHIN_CHARACTER_BY_ID,
  GenshinCharacterID,
} from "@/data/genshin/characters";
import Image from "next/image";

interface Props {
  params: { characterId: GenshinCharacterID };
}

const GenshinCharacterPage = ({ params }: Props) => {
  const character = GENSHIN_CHARACTER_BY_ID[params.characterId];

  if (!character) {
    return <div>캐릭터를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-bold">{character.name}</div>
      </div>
      <figure className="relative w-[720px] h-[500px]">
        <Image
          src={character.imageURL}
          alt={character.name}
          className="object-cover"
          fill
          priority
        />
      </figure>
    </div>
  );
};

export default GenshinCharacterPage;
