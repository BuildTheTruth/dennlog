import { getSupabaseClient } from './supabase';

export type GameName = 'genshin' | 'zenless';

export async function getRedeems() {
  const supabase = getSupabaseClient();
  const { data: redeems } = await supabase
    .from('redeems')
    .select('*')
    .or('expires_at.gt.' + new Date().toISOString() + ',expires_at.is.null');

  if (!redeems) return [];

  return redeems;
}
