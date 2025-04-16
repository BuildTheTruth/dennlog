import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">소개</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>DennLog에 대한 소개 페이지입니다.</p>
        <p>이 페이지에서는 블로그나 웹사이트에 대한 정보를 제공할 수 있습니다.</p>
      </div>
    </div>
  );
}
