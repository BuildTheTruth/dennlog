import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Map, Sword, Trophy } from "lucide-react";

const GenshinPage = () => {
  return (
    <div className="container mx-auto py-8">
      {/* 히어로 섹션 */}
      <div className="relative rounded-xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
        <div className="relative h-[400px] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/genshin/hero-bg.jpg"
              alt="원신 배경"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative z-20 text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">원신</h1>
            <p className="text-xl mb-6 max-w-2xl">
              티바트 대륙에서 펼쳐지는 모험의 세계. 원소의 힘을 다루는 '비전'을
              가진 자들이 모험을 떠나는 판타지 RPG 게임입니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100"
              >
                <Link href="https://genshin.hoyoverse.com" target="_blank">
                  공식 사이트 방문
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/games/genshin/characters">캐릭터 육성법 보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 캐릭터 육성법 배너 */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 mb-12 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-3">캐릭터 육성법</h2>
            <p className="text-lg mb-4">
              원신의 모든 캐릭터들의 육성법과 추천 빌드를 확인하세요. 무기,
              성유물, 스킬 우선순위 등 상세한 정보를 제공합니다.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link href="/games/genshin/characters">
                육성법 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="w-full md:w-1/3 h-64 relative rounded-lg overflow-hidden">
            <Image
              src="/images/genshin/characters-banner.jpg"
              alt="원신 캐릭터들"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 주요 콘텐츠 섹션 */}
      <h2 className="text-3xl font-bold mb-6">원신 가이드</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Sword className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle>캐릭터 육성</CardTitle>
            <CardDescription>캐릭터 육성법과 추천 빌드</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              모든 캐릭터의 육성법, 무기, 성유물, 스킬 우선순위 등을 확인하세요.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/games/genshin/characters">
                자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Map className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle>월드 가이드</CardTitle>
            <CardDescription>지역별 정보와 퀘스트</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              티바트 대륙의 각 지역 정보, 숨겨진 보물, 퀘스트 가이드를
              확인하세요.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/games/genshin/world">
                자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <Trophy className="h-6 w-6 text-yellow-600" />
            </div>
            <CardTitle>전투 가이드</CardTitle>
            <CardDescription>전투 시스템과 팀 구성</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              원소 반응, 팀 구성, 전투 전략 등 전투 관련 정보를 확인하세요.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/games/genshin/combat">
                자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-red-600" />
            </div>
            <CardTitle>이벤트 정보</CardTitle>
            <CardDescription>현재 진행 중인 이벤트</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              현재 진행 중인 이벤트와 한정 콘텐츠 정보를 확인하세요.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/games/genshin/events">
                자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* 최신 소식 섹션 */}
      <h2 className="text-3xl font-bold mb-6">최신 소식</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="overflow-hidden">
          <div className="h-48 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              업데이트 이미지
            </div>
          </div>
          <CardHeader>
            <CardTitle>4.6 버전 업데이트</CardTitle>
            <CardDescription>2024년 4월 24일</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              4.6 버전에서 추가된 새로운 지역, 캐릭터, 이벤트 정보를 확인하세요.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/games/genshin/news/4-6-update">
                자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden">
          <div className="h-48 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              캐릭터 이미지
            </div>
          </div>
          <CardHeader>
            <CardTitle>새로운 캐릭터: 아르레키노</CardTitle>
            <CardDescription>2024년 4월 10일</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              4.6 버전에서 추가된 새로운 캐릭터 아르레키노의 정보와 육성법을
              확인하세요.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/games/genshin/characters/arlecchino">
                자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden">
          <div className="h-48 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              이벤트 이미지
            </div>
          </div>
          <CardHeader>
            <CardTitle>한정 이벤트: 꽃 피는 봄의 축제</CardTitle>
            <CardDescription>2024년 4월 15일 ~ 5월 5일</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              봄맞이 한정 이벤트에서 특별한 보상을 획득하고 새로운 미니게임을
              즐겨보세요.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/games/genshin/events/spring-festival">
                자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default GenshinPage;
