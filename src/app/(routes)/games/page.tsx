'use client';

import { redeemsOptions } from '@/tanstack/options/redeems';
import { Tables } from '@/types/supabase';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useMemo } from 'react';

type GameName = 'genshin' | 'zenless';

const TITLE_BY_GAME_NAME = {
  genshin: '원신',
  zenless: '젠레스 존 제로',
} as const satisfies Record<GameName, string>;

const REDEEM_URL_BY_GAME_NAME = {
  genshin: 'https://genshin.hoyoverse.com/ko/gift',
  zenless: 'https://zenless.hoyoverse.com/redemption',
} as const satisfies Record<GameName, string>;

export default function GamesPage() {
  const { data: redeems = [], isLoading } = useQuery(redeemsOptions());
  const redeemsByGameName = useMemo(() => {
    return redeems.reduce(
      (acc, redeem) => {
        if (!acc[redeem.game_name as GameName]) {
          acc[redeem.game_name as GameName] = [];
        }
        acc[redeem.game_name as GameName].push(redeem);
        return acc;
      },
      {} as Record<GameName, Tables<'redeems'>[]>,
    );
  }, [redeems]);

  return (
    <div className="container mx-auto py-4">
      {Object.entries(REDEEM_URL_BY_GAME_NAME).map(([gameName, url]) => (
        <div key={gameName} className="mb-12">
          <h1 className="text-3xl font-bold mb-6">
            {TITLE_BY_GAME_NAME[gameName as GameName]}
            <span className="text-gray-500"> 리딤코드</span>
          </h1>
          <div className="flex flex-col gap-2">
            {redeemsByGameName[gameName as GameName]?.length > 0
              ? redeemsByGameName[gameName as GameName].map(redeem => (
                  <div className="flex gap-2" key={redeem.code}>
                    <a
                      className="text-blue-500"
                      target="_blank"
                      href={`${url}?code=${redeem.code}`}
                    >
                      {redeem.code}
                    </a>
                    <p className="text-gray-500">{redeem.content}</p>
                  </div>
                ))
              : !isLoading && <p className="text-gray-500">유효한 리딤코드가 없습니다.</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
