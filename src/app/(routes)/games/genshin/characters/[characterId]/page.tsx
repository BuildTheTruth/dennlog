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
    <div className="flex flex-col w-full gap-20">
      <div className="flex flex-col gap-2">
        <Typography variant="h2">{character.name}</Typography>
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

      <div className="flex flex-col gap-2">
        <Typography variant="h3">특성 (스킬) 순서</Typography>
        <Table className="font-bold text-lg">
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>기본 공격</TableHead>
              <TableHead>원소 전투 스킬</TableHead>
              <TableHead>원소 폭발</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>최소 (권장)</TableCell>
              {character.skills.map(skill => (
                <TableCell key={skill.id}>{skill.min}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>최대 (추천)</TableCell>
              {character.skills.map(skill => (
                <TableCell key={skill.id}>{skill.max}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>우선순위</TableCell>
              {character.skills.map(skill => (
                <TableCell key={skill.id}>{skill.priority}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col gap-2">
        <Typography variant="h3">추천 무기</Typography>
        {character.recommendedWeapons.map(weapon => (
          <div key={weapon.id} className="flex flex-col items-center gap-2 my-4">
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
