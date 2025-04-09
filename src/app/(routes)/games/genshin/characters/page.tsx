import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 원신 캐릭터 데이터 (예시)
const characters = [
  {
    id: "yae-miko",
    name: "야에 미코",
    element: "번개",
    rarity: 5,
    weapon: "법구",
    image: "/images/genshin/yae-miko.jpg",
  },
  {
    id: "zhongli",
    name: "종려",
    element: "바위",
    rarity: 5,
    weapon: "장병기",
    image: "/images/genshin/zhongli.jpg",
  },
  {
    id: "raiden",
    name: "라이덴 쇼군",
    element: "번개",
    rarity: 5,
    weapon: "장병기",
    image: "/images/genshin/raiden.jpg",
  },
  {
    id: "hutao",
    name: "호두",
    element: "불",
    rarity: 5,
    weapon: "장병기",
    image: "/images/genshin/hutao.jpg",
  },
  {
    id: "ganyu",
    name: "감우",
    element: "얼음",
    rarity: 5,
    weapon: "활",
    image: "/images/genshin/ganyu.jpg",
  },
  {
    id: "ayaka",
    name: "카미사토 아야카",
    element: "얼음",
    rarity: 5,
    weapon: "한손검",
    image: "/images/genshin/ayaka.jpg",
  },
];

const GenshinCharactersPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">원신 캐릭터 육성법</h1>
      <p className="mb-8 text-gray-600">
        원신의 다양한 캐릭터들의 육성법과 추천 빌드를 확인하세요.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character) => (
          <Card key={character.id} className="overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              {/* 실제 이미지 경로로 변경 필요 */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                {character.name} 이미지
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{character.name}</span>
                <span className="text-yellow-500">
                  {"★".repeat(character.rarity)}
                </span>
              </CardTitle>
              <CardDescription>
                {character.element} 속성 | {character.weapon}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                {character.name}의 육성법과 추천 빌드를 확인하세요.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/games/genshin/characters/${character.id}`}
                className="w-full"
              >
                <Button className="w-full">육성법 보기</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GenshinCharactersPage;
