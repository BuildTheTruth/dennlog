-- 기존 테이블 모두 삭제
DROP TABLE IF EXISTS character_game_attributes CASCADE;
DROP TABLE IF EXISTS game_specific_attributes CASCADE;
DROP TABLE IF EXISTS team_compositions CASCADE;
DROP TABLE IF EXISTS character_stats CASCADE;
DROP TABLE IF EXISTS stat_types CASCADE;
DROP TABLE IF EXISTS character_artifact_sets CASCADE;
DROP TABLE IF EXISTS artifact_sets CASCADE;
DROP TABLE IF EXISTS character_skills CASCADE;
DROP TABLE IF EXISTS character_equipment CASCADE;
DROP TABLE IF EXISTS equipment_types CASCADE;
DROP TABLE IF EXISTS characters CASCADE;
DROP TABLE IF EXISTS games CASCADE;

-- 트리거 함수 삭제
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;

-- 인덱스 삭제 (테이블이 삭제되면 자동으로 삭제되지만, 명시적으로 삭제)
DROP INDEX IF EXISTS idx_characters_game_id;
DROP INDEX IF EXISTS idx_character_equipment_character_id;
DROP INDEX IF EXISTS idx_character_skills_character_id;
DROP INDEX IF EXISTS idx_character_artifact_sets_character_id;
DROP INDEX IF EXISTS idx_character_stats_character_id;
DROP INDEX IF EXISTS idx_team_compositions_character_id;
DROP INDEX IF EXISTS idx_character_game_attributes_character_id; 