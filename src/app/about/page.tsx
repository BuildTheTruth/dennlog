'use client';

import GithubIcon from '@/components/icons/GithubIcon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, User, Check, Copy } from 'lucide-react';
import { useState } from 'react';

const POSTS = [
  {
    date: '2021. 6. 2.',
    title: '프레임워크의 선택, React vs Angular',
    url: 'https://tech.kakaoenterprise.com/109',
  },
  {
    date: '2022. 7. 11.',
    title: '실전 Infinite Scroll with React',
    url: 'https://tech.kakaoenterprise.com/149',
  },
  {
    date: '2024. 1. 9.',
    title: 'OROR Forge: Figma to Code 도구 제작기 (2) 실전용으로 만들기',
    url: 'https://tech.kakao.com/posts/612',
  },
];
export default function AboutPage() {
  const [copied, setCopied] = useState(false);
  const email = 'corrhd123@gmail.com';

  const copyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col gap-4 md:gap-8 container mx-auto px-4 py-6 md:py-8">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <Avatar className="w-20 h-20 md:w-24 md:h-24 self-center md:self-auto md:mr-4">
          <AvatarImage src="/author.png" />
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-3 md:gap-4 prose dark:prose-invert max-w-none text-center md:text-left">
          <div className="text-xl md:text-2xl font-bold">Dennis</div>
          <div className="text-base md:text-lg font-bold">Frontend Developer</div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <GithubIcon />
            <a
              target="_blank"
              href="https://github.com/BuildTheTruth"
              className="text-sm md:text-base break-all hover:underline"
            >
              https://github.com/BuildTheTruth
            </a>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Mail />
            <button
              onClick={copyToClipboard}
              className="text-sm md:text-base break-all hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span className="break-all mr-0.5">{email}</span>
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 opacity-70" />
              )}
            </button>
          </div>
        </div>
      </div>

      <hr className="my-2 md:my-4" />
      <div className="flex flex-col gap-3 md:gap-4 prose dark:prose-invert max-w-none">
        <div className="text-xl md:text-2xl font-bold">Posts</div>
        <div className="flex flex-col gap-2">
          {POSTS.map(post => (
            <div key={post.date} className="overflow-hidden">
              <a className="hover:underline text-sm md:text-base" target="_blank" href={post.url}>
                {post.title}
              </a>
              <span className="text-xs md:text-sm text-gray-500"> ({post.date})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
