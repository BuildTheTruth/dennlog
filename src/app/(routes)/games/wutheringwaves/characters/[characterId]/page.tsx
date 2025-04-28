'use client';

import StatsTable from '@/components/StatsTable';
import Typography from '@/components/Typography';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  WUTHERINGWAVES_CHARACTER_BY_ID,
  WutheringwavesCharacterID,
} from '@/data/wutheringwaves/characters';
import { getCharacterProfileImageURL } from '@/lib/image/wutheringwaves';
import Image from 'next/image';

interface Props {
  params: { characterId: WutheringwavesCharacterID };
}

const WutheringwavesCharacterPage = ({ params }: Props) => {
  const character = WUTHERINGWAVES_CHARACTER_BY_ID[params.characterId];

  if (!character) {
    return <div>캐릭터를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex flex-col w-full gap-8 md:gap-20 items-center px-4">
      <div className="flex flex-col gap-2 w-full max-w-full md:max-w-[720px]">
        <Typography
          variant="h2"
          className="py-2 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg w-full text-center text-xl md:text-2xl"
        >
          {character.name}
        </Typography>
        <figure className="relative h-[300px] md:h-[500px] w-full">
          <Image
            src={character.imageURL}
            alt={character.name}
            className="object-cover rounded-lg"
            fill
            priority
          />
        </figure>
      </div>

      <div className="flex flex-col gap-2 w-full max-w-full md:max-w-[720px]">
        <Typography
          variant="h3"
          className="text-center py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg w-full text-lg md:text-xl"
        >
          {character.name} 스킬 순서
        </Typography>
        <div className="overflow-x-auto">
          <Table className="text-sm md:text-lg min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="text-end"></TableHead>
                <TableHead className="text-end">기본 공격</TableHead>
                <TableHead className="text-end">공명 스킬</TableHead>
                <TableHead className="text-end">공명 회로</TableHead>
                <TableHead className="text-end">공명 해방</TableHead>
                <TableHead className="text-end">변주 스킬</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>권장</TableCell>
                {character.skills.map(skill => (
                  <TableCell className="text-end" key={skill.id}>
                    {skill.min}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">애정</TableCell>
                {character.skills.map(skill => (
                  <TableCell className="font-bold text-end" key={skill.id}>
                    {skill.max}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell>우선순위</TableCell>
                {character.skills.map(skill => (
                  <TableCell className="text-end" key={skill.id}>
                    {skill.priority}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-full md:max-w-[720px]">
        <Typography
          variant="h3"
          className="text-center py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg w-full text-lg md:text-xl"
        >
          {character.name} 추천 무기
        </Typography>
        <div className="flex flex-col gap-6">
          {character.weapons.map(weapon => (
            <div key={weapon.id} className="flex flex-col items-center gap-2 w-full">
              <span className="text-base md:text-lg font-bold text-center">
                {weapon.priority}위. {weapon.name}
              </span>
              <span className="text-gray-400">
                {weapon.mainStat} / {weapon.subStat}
              </span>
              <figure className="relative w-[120px] h-[120px] md:w-[160px] md:h-[160px] border border-gray-300 rounded-md bg-gray-100">
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
      <div className="flex flex-col gap-2 w-full max-w-full md:max-w-[720px]">
        <Typography
          variant="h3"
          className="text-center py-2 px-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-lg w-full text-lg md:text-xl"
        >
          {character.name} 추천 에코
        </Typography>
        <div className="flex flex-col gap-4">
          {character.echoSets.map(echoSet => (
            <div key={echoSet.id} className="flex flex-col items-center gap-2 my-4">
              <div className="text-base md:text-lg font-semibold text-center">{echoSet.main}</div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                추천도:
                <span className="font-bold">
                  {Array.from({ length: echoSet.score }).map((_, i) => (
                    <span key={i}>⭐️</span>
                  ))}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-gray-100 border border-gray-300 rounded-md overflow-hidden">
                  <Image
                    src={echoSet.mainURL}
                    alt={echoSet.main}
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
                  />
                </span>
              </div>
              <div className="text-sm md:text-base flex flex-col gap-2 items-center">
                {echoSet.descriptions.map((desc, index) => (
                  <div key={index}>{desc}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-full md:max-w-[720px] mb-10">
        <Typography
          variant="h3"
          className="text-center py-2 px-4 bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-lg w-full text-lg md:text-xl"
        >
          {character.name} 기본 / 준종결 / 종결 스펙
        </Typography>
        <div className="overflow-x-auto">
          <StatsTable type="wutheringwaves" stats={character.stats} />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-full md:max-w-[720px] mb-10">
        <Typography
          variant="h3"
          className="text-center py-2 px-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg w-full text-lg md:text-xl"
        >
          {character.name} 파티 조합
        </Typography>
        {character.teams.map(team => (
          <div key={team.id} className="flex flex-col items-center gap-2 my-6 md:my-8 w-full">
            <span className="text-base md:text-lg font-bold text-center">{team.name}</span>
            <div className="flex items-center gap-2 text-sm md:text-base">
              추천도:
              <span className="font-bold">
                {Array.from({ length: team.score }).map((_, i) => (
                  <span key={i}>⭐️</span>
                ))}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {team.characters
                .split(',')
                .map(id => id.trim())
                .map(id => (
                  <span
                    key={id}
                    className="bg-gray-100 border border-gray-300 rounded-md overflow-hidden"
                  >
                    <Image
                      src={getCharacterProfileImageURL(id)}
                      alt={id}
                      width={80}
                      height={80}
                      className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
                    />
                  </span>
                ))}
            </div>
            <div className="text-gray-500 text-sm md:text-base mt-2">파티 사이클</div>
            <div className="flex flex-col gap-2 text-sm md:text-base">
              {team.descriptions.map((desc, index) => (
                <div key={desc} className="text-center md:text-left">
                  {index + 1}. {desc}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WutheringwavesCharacterPage;
