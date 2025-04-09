-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create games table
CREATE TABLE games (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create characters table
CREATE TABLE characters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    game_id UUID REFERENCES games(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    element TEXT, -- 게임에 따라 NULL 가능
    weapon_type TEXT, -- 게임에 따라 NULL 가능
    role TEXT, -- 게임에 따라 다른 역할 (탱커, 딜러, 서포터 등)
    rarity INTEGER, -- 캐릭터 등급
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(game_id, name)
);

-- Create equipment_types table
CREATE TABLE equipment_types (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    game_id UUID REFERENCES games(id) ON DELETE CASCADE,
    name TEXT NOT NULL, -- 무기, 방어구, 장신구 등
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(game_id, name)
);

-- Create character_equipment table
CREATE TABLE character_equipment (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
    equipment_type_id UUID REFERENCES equipment_types(id) ON DELETE CASCADE,
    equipment_name TEXT NOT NULL,
    priority INTEGER NOT NULL CHECK (priority BETWEEN 1 AND 5),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create character_skills table
CREATE TABLE character_skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
    skill_name TEXT NOT NULL,
    skill_type TEXT NOT NULL, -- 기본공격, 스킬, 궁극기 등
    priority INTEGER NOT NULL,
    recommended_level INTEGER NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create artifact_sets table
CREATE TABLE artifact_sets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    game_id UUID REFERENCES games(id) ON DELETE CASCADE,
    set_name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(game_id, set_name)
);

-- Create character_artifact_sets table
CREATE TABLE character_artifact_sets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
    artifact_set_id UUID REFERENCES artifact_sets(id) ON DELETE CASCADE,
    priority INTEGER NOT NULL CHECK (priority BETWEEN 1 AND 3),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create stat_types table
CREATE TABLE stat_types (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    game_id UUID REFERENCES games(id) ON DELETE CASCADE,
    name TEXT NOT NULL, -- HP, 공격력, 방어력 등
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(game_id, name)
);

-- Create character_stats table
CREATE TABLE character_stats (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
    stat_type_id UUID REFERENCES stat_types(id) ON DELETE CASCADE,
    stat_type TEXT NOT NULL CHECK (stat_type IN ('준종결', '종결')),
    value NUMERIC NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create team_compositions table
CREATE TABLE team_compositions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
    team_name TEXT NOT NULL,
    team_members TEXT[] NOT NULL,
    priority INTEGER NOT NULL CHECK (priority BETWEEN 1 AND 3),
    description TEXT, -- 팀 조합에 대한 설명
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create game_specific_attributes table
CREATE TABLE game_specific_attributes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    game_id UUID REFERENCES games(id) ON DELETE CASCADE,
    attribute_name TEXT NOT NULL, -- 게임별 특수 속성 (원신: 원소, 블루아카이브: 학원 등)
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(game_id, attribute_name)
);

-- Create character_game_attributes table
CREATE TABLE character_game_attributes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
    attribute_id UUID REFERENCES game_specific_attributes(id) ON DELETE CASCADE,
    value TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_characters_game_id ON characters(game_id);
CREATE INDEX idx_character_equipment_character_id ON character_equipment(character_id);
CREATE INDEX idx_character_skills_character_id ON character_skills(character_id);
CREATE INDEX idx_character_artifact_sets_character_id ON character_artifact_sets(character_id);
CREATE INDEX idx_character_stats_character_id ON character_stats(character_id);
CREATE INDEX idx_team_compositions_character_id ON team_compositions(character_id);
CREATE INDEX idx_character_game_attributes_character_id ON character_game_attributes(character_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for tables with updated_at
CREATE TRIGGER update_games_updated_at
    BEFORE UPDATE ON games
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_characters_updated_at
    BEFORE UPDATE ON characters
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 