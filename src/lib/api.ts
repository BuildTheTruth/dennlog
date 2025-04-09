import { getSupabaseClient } from "./supabase";

export async function getCharacterData(characterId: string) {
  const supabase = getSupabaseClient();
  const { data: character, error } = await supabase
    .from("characters")
    .select(
      `
      *,
      game:games(*),
      equipment:character_equipment(
        *,
        equipment_type:equipment_types(*)
      ),
      skills:character_skills(*),
      artifact_sets:character_artifact_sets(
        *,
        artifact_set:artifact_sets(*)
      ),
      stats:character_stats(
        *,
        stat_type:stat_types(*)
      ),
      team_compositions(*),
      game_attributes:character_game_attributes(
        *,
        attribute:game_specific_attributes(*)
      )
    `
    )
    .eq("id", characterId)
    .single();

  if (error) {
    throw error;
  }

  return character;
}
