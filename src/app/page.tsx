import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">DennLog</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 개발 블로그 섹션 */}
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">개발 블로그</h2>
          <p className="mb-4">개발 관련 포스트가 여기에 표시됩니다.</p>
          <Link href="/dev" className="text-blue-600 hover:underline">
            개발 블로그 보기 →
          </Link>
        </div>

        {/* 게임 섹션 */}
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">게임</h2>
          <p className="mb-4">게임 관련 콘텐츠가 여기에 표시됩니다.</p>
          <Link href="/games" className="text-blue-600 hover:underline">
            게임 페이지 보기 →
          </Link>
        </div>

        {/* 소개 섹션 */}
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">소개</h2>
          <p className="mb-4">DennLog에 대한 소개 페이지입니다.</p>
          <Link href="/about" className="text-blue-600 hover:underline">
            소개 페이지 보기 →
          </Link>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg mb-4">DennLog에 오신 것을 환영합니다!</p>
        <p className="text-gray-600 dark:text-gray-400">
          개발, 게임, 그리고 더 많은 콘텐츠를 탐색해보세요.
        </p>
      </div>
    </div>
  );
}
