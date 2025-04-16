import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

// Supabase 클라이언트 타입 정의
export type SupabaseClient = ReturnType<typeof createClient<Database>>;

// 싱글톤 인스턴스를 저장할 변수
let supabase: SupabaseClient | null = null;

/**
 * Supabase 클라이언트를 생성하고 반환하는 함수
 * 싱글톤 패턴을 사용하여 하나의 인스턴스만 생성되도록 함
 *
 * @returns Supabase 클라이언트 인스턴스
 */
export function getSupabaseClient(): SupabaseClient {
  // 이미 클라이언트가 생성되어 있다면 기존 인스턴스 반환
  if (supabase) {
    return supabase;
  }

  // 환경 변수에서 Supabase URL과 API 키 가져오기
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  // 환경 변수가 설정되어 있는지 확인
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL과 API 키가 설정되어 있지 않습니다.');
  }

  // 새로운 Supabase 클라이언트 생성
  supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });

  return supabase;
}

/**
 * 서버 사이드에서 사용할 Supabase 클라이언트를 생성하는 함수
 * 서버 컴포넌트나 API 라우트에서 사용
 *
 * @returns Supabase 클라이언트 인스턴스
 */
export function getServerSupabaseClient(): SupabaseClient {
  // 서버 사이드 환경 변수에서 Supabase URL과 API 키 가져오기
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  // 환경 변수가 설정되어 있는지 확인
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Supabase URL과 서비스 키가 설정되어 있지 않습니다.');
  }

  // 서버 사이드용 Supabase 클라이언트 생성
  return createClient<Database>(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
