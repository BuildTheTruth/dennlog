'use client';

import { GENSHIN_CHARACTER_BY_ID, GenshinCharacterID } from '@/data/genshin/characters';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Typography from '@/components/Typography';
interface Props {
  params: { characterId: GenshinCharacterID };
}

const GenshinCharacterPage = ({ params }: Props) => {
  const character = GENSHIN_CHARACTER_BY_ID[params.characterId];

  if (!character) {
    return <div>캐릭터를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex flex-col w-full gap-20 items-center">
      <div className="flex flex-col gap-2 w-full max-w-[720px]">
        <Typography
          variant="h2"
          className="py-2 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg w-full text-center"
        >
          {character.name}
        </Typography>
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

      <div className="flex flex-col gap-2 w-full max-w-[720px]">
        <Typography
          variant="h3"
          className="text-center py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg w-full"
        >
          {character.name} 특성 (스킬)
        </Typography>
        <Table className="text-lg">
          <TableHeader>
            <TableRow>
              <TableHead className="text-end"></TableHead>
              <TableHead className="text-end w-[200px]">기본 공격</TableHead>
              <TableHead className="text-end w-[200px]">원소 전투 스킬(E)</TableHead>
              <TableHead className="text-end w-[200px]">원소 폭발(Q)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>최소 (권장)</TableCell>
              {character.skills.map(skill => (
                <TableCell className="text-end" key={skill.id}>
                  {skill.min}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">최대 (고인물)</TableCell>
              {character.skills.map(skill => (
                <TableCell className="font-bold text-end" key={skill.id}>
                  {skill.max}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="text-gray-500">우선순위</TableCell>
              {character.skills.map(skill => (
                <TableCell className="text-gray-500 text-end" key={skill.id}>
                  {skill.priority}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-[720px]">
        <Typography
          variant="h3"
          className="text-center py-2 px-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg w-full"
        >
          추천 무기
        </Typography>
        {character.recommendedWeapons.map(weapon => (
          <div key={weapon.id} className="flex flex-col items-center gap-2 my-4 w-full">
            <span className="text-lg font-bold">
              {weapon.priority}위. {weapon.name}
            </span>
            <span className="text-gray-500">
              {weapon.mainStat} / {weapon.subStat}
            </span>
            <figure className="relative w-[160px] h-[160px] border border-gray-300 rounded-md bg-gray-100">
              <Image
                src={weapon.imageURL}
                alt={weapon.name}
                className="object-cover"
                fill
                priority
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenshinCharacterPage;
