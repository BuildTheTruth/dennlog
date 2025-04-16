"use client";

import characters from "@/__mock__/genshin/characters";

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

  return <div>{character.name}</div>;
};

export default GenshinCharacterPage;
