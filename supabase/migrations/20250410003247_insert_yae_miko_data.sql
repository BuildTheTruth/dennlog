-- 게임 데이터 삽입
INSERT INTO games (id, name, description) VALUES 
('genshin', '원신', '호요버스에서 개발한 오픈월드 RPG 게임');

-- 캐릭터 데이터 삽입
INSERT INTO characters (id, game_id, name, element, weapon_type, role, rarity) VALUES 
('yae-miko', 'genshin', '야에 미코', '번개', '법구', '서브딜러', 5);

-- 장비 유형 데이터 삽입
INSERT INTO equipment_types (id, game_id, name) VALUES 
('catalyst', 'genshin', '법구');

-- 캐릭터 장비 데이터 삽입
INSERT INTO character_equipment (character_id, equipment_type_id, equipment_name, priority) VALUES 
('yae-miko', 'catalyst', '천공의 고서', 1),
('yae-miko', 'catalyst', '카구라의 진의', 2),
('yae-miko', 'catalyst', '별의 유성', 3),
('yae-miko', 'catalyst', '해마의 이야기', 4),
('yae-miko', 'catalyst', '만국의 서', 5);

-- 캐릭터 스킬 데이터 삽입
INSERT INTO character_skills (character_id, skill_name, skill_type, priority, recommended_level) VALUES 
('yae-miko', '야타가라스의 비밀', '궁극기', 1, 10),
('yae-miko', '야타가라스의 비밀', '스킬', 2, 10),
('yae-miko', '야타가라스의 비밀', '기본공격', 3, 10);

-- 성유물 세트 데이터 삽입
INSERT INTO artifact_sets (id, game_id, set_name) VALUES 
('thundering_fury', 'genshin', '번개의 분노'),
('gilded_dreams', 'genshin', '황금의 꿈'),
('wanderers_troupe', 'genshin', '방랑자의 악단');

-- 캐릭터 성유물 세트 데이터 삽입
INSERT INTO character_artifact_sets (character_id, artifact_set_id, priority) VALUES 
('yae-miko', 'thundering_fury', 1),
('yae-miko', 'gilded_dreams', 2),
('yae-miko', 'wanderers_troupe', 3);

-- 스탯 유형 데이터 삽입
INSERT INTO stat_types (id, game_id, name) VALUES 
('hp', 'genshin', 'HP'),
('attack', 'genshin', '공격력'),
('defense', 'genshin', '방어력'),
('elemental_mastery', 'genshin', '원소 마스터리'),
('crit_rate', 'genshin', '치명타 확률'),
('crit_damage', 'genshin', '치명타 피해'),
('energy_recharge', 'genshin', '원소 충전 효율');

-- 캐릭터 스탯 데이터 삽입
INSERT INTO character_stats (character_id, stat_type_id, stat_type, value) VALUES 
-- 준종결 스탯
('yae-miko', 'hp', '준종결', 20000),
('yae-miko', 'attack', '준종결', 2000),
('yae-miko', 'defense', '준종결', 800),
('yae-miko', 'elemental_mastery', '준종결', 200),
('yae-miko', 'crit_rate', '준종결', 60),
('yae-miko', 'crit_damage', '준종결', 120),
('yae-miko', 'energy_recharge', '준종결', 120),
-- 종결 스탯
('yae-miko', 'hp', '종결', 25000),
('yae-miko', 'attack', '종결', 2500),
('yae-miko', 'defense', '종결', 1000),
('yae-miko', 'elemental_mastery', '종결', 300),
('yae-miko', 'crit_rate', '종결', 70),
('yae-miko', 'crit_damage', '종결', 150),
('yae-miko', 'energy_recharge', '종결', 130);

-- 팀 구성 데이터 삽입
INSERT INTO team_compositions (character_id, team_name, team_members, priority, description) VALUES 
('yae-miko', '번개 팀', ARRAY['야에 미코', '라덴 쇼군', '베넷', '카즈하'], 1, '번개 원소 팀으로, 라덴 쇼군의 버프와 카즈하의 원소 마스터리 버프를 활용하여 높은 딜을 뽑아내는 팀'),
('yae-miko', '번개 서브딜러', ARRAY['야에 미코', '라덴 쇼군', '코코미', '카즈하'], 2, '번개 서브딜러로 활용하는 팀으로, 코코미의 치유와 카즈하의 버프를 받아 안정적인 딜을 뽑아내는 팀'),
('yae-miko', '번개 과부하', ARRAY['야에 미코', '라덴 쇼군', '향릉', '종려'], 3, '번개와 불 원소의 과부하 반응을 활용하는 팀으로, 향릉의 불 원소와 야에 미코의 번개 원소로 강력한 과부하 딜을 뽑아내는 팀');

-- 게임 특수 속성 데이터 삽입
INSERT INTO game_specific_attributes (id, game_id, attribute_name) VALUES 
('element', 'genshin', '원소');

-- 캐릭터 게임 속성 데이터 삽입
INSERT INTO character_game_attributes (character_id, attribute_id, value) VALUES 
('yae-miko', 'element', '번개'); 