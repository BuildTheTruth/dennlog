import Typography from '@/components/Typography';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { GENSHIN_CHARACTER_BY_ID, GenshinCharacterID } from '@/data/genshin/characters';
import { getCharacterProfileImageURL } from '@/lib/image/genshin';
import Image from 'next/image';
import StatsTable from '@/components/StatsTable';

interface Props {
  params: { characterId: GenshinCharacterID };
}

const GenshinCharacterPage = ({ params }: Props) => {
  const character = GENSHIN_CHARACTER_BY_ID[params.characterId];

  if (!character) {
    return <div>캐릭터를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex flex-col w-full gap-8 md:gap-20 items-center">
      <div className="flex flex-col gap-2 w-full max-w-full md:max-w-[720px]">
        <Typography
          variant="h2"
          className="py-2 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg w-full text-center text-xl md:text-2xl"
        >
          [원신] {character.name} 육성법
        </Typography>
        <figure className="relative h-[400px] md:h-[600px] w-full">
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
          {character.name} 특성 (스킬)
        </Typography>
        <div className="overflow-x-auto">
          <Table className="text-sm md:text-lg min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="text-end"></TableHead>
                <TableHead className="text-end">기본 공격</TableHead>
                <TableHead className="text-end">원소 전투 스킬</TableHead>
                <TableHead className="text-end">원소 폭발</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>최소</TableCell>
                {character.skills.map(skill => (
                  <TableCell className="text-end" key={skill.id}>
                    {skill.min}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">권장</TableCell>
                {character.skills.map(skill => (
                  <TableCell className="font-bold text-end" key={skill.id}>
                    {skill.max}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="truncate">우선순위</TableCell>
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
              <figure className="relative border border-gray-300 rounded-md bg-gray-100">
                <Image
                  src={weapon.imageURL}
                  alt={weapon.name}
                  className="object-cover"
                  width={160}
                  height={160}
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
          {character.name} 추천 성유물
        </Typography>
        <div className="flex flex-col gap-4">
          {character.artifactSets.map(artifactSet => (
            <div key={artifactSet.id} className="flex flex-col items-center gap-2 my-4">
              <div className="text-base md:text-lg font-semibold text-center">
                {artifactSet.name}
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                추천도:
                <span className="font-bold">
                  {Array.from({ length: artifactSet.score }).map((_, i) => (
                    <span key={i}>⭐️</span>
                  ))}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-gray-100 border m-2 border-gray-300 rounded-md">
                  <Image
                    src={artifactSet.imageURL}
                    alt={artifactSet.name}
                    width={100}
                    height={100}
                  />
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                {artifactSet.descriptions.map((desc, index) => (
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
          <StatsTable type="genshin" stats={character.stats} />
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
          <div key={team.id} className="flex flex-col items-center gap-2 my-4 md:my-6 w-full">
            <span className="text-base md:text-lg font-bold text-center">{team.name}</span>
            <div className="flex items-center gap-2 text-sm md:text-base">
              추천도:
              <span className="font-bold">
                {Array.from({ length: team.score }).map((_, i) => (
                  <span key={i}>⭐️</span>
                ))}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
                      width={100}
                      height={100}
                    />
                  </span>
                ))}
            </div>
            {team.descriptions.length > 0 && (
              <div className="flex flex-col gap-2 text-sm md:text-base my-2">
                {team.descriptions.map((desc, index) => (
                  <div key={index} className="text-center md:text-left">
                    {desc}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {character.breakthroughs.length > 0 && (
        <div className="flex flex-col gap-2 w-full max-w-full md:max-w-[720px] mb-10">
          <Typography
            variant="h3"
            className="text-center py-2 px-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg w-full text-lg md:text-xl"
          >
            {character.name} 추천 돌파
          </Typography>
          <div className="flex flex-col gap-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>돌파</TableHead>
                  <TableHead>설명</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {character.breakthroughs.map(breakthrough => (
                  <TableRow key={breakthrough.id}>
                    <TableCell>{breakthrough.name}</TableCell>
                    <TableCell>{breakthrough.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenshinCharacterPage;
