import React from 'react';

export default function DevPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">개발 블로그</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>개발 관련 포스트가 여기에 표시됩니다.</p>
      </div>
    </div>
  );
}
