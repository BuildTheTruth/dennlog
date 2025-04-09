export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      games: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      characters: {
        Row: {
          id: string;
          game_id: string;
          name: string;
          element: string | null;
          weapon_type: string | null;
          role: string | null;
          rarity: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          game_id: string;
          name: string;
          element?: string | null;
          weapon_type?: string | null;
          role?: string | null;
          rarity?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          game_id?: string;
          name?: string;
          element?: string | null;
          weapon_type?: string | null;
          role?: string | null;
          rarity?: number | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      equipment_types: {
        Row: {
          id: string;
          game_id: string;
          name: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          game_id: string;
          name: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          game_id?: string;
          name?: string;
          created_at?: string;
        };
      };
      character_equipment: {
        Row: {
          id: string;
          character_id: string;
          equipment_type_id: string;
          equipment_name: string;
          priority: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          character_id: string;
          equipment_type_id: string;
          equipment_name: string;
          priority: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          character_id?: string;
          equipment_type_id?: string;
          equipment_name?: string;
          priority?: number;
          created_at?: string;
        };
      };
      character_skills: {
        Row: {
          id: string;
          character_id: string;
          skill_name: string;
          skill_type: string;
          priority: number;
          recommended_level: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          character_id: string;
          skill_name: string;
          skill_type: string;
          priority: number;
          recommended_level: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          character_id?: string;
          skill_name?: string;
          skill_type?: string;
          priority?: number;
          recommended_level?: number;
          created_at?: string;
        };
      };
      artifact_sets: {
        Row: {
          id: string;
          game_id: string;
          set_name: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          game_id: string;
          set_name: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          game_id?: string;
          set_name?: string;
          created_at?: string;
        };
      };
      character_artifact_sets: {
        Row: {
          id: string;
          character_id: string;
          artifact_set_id: string;
          priority: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          character_id: string;
          artifact_set_id: string;
          priority: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          character_id?: string;
          artifact_set_id?: string;
          priority?: number;
          created_at?: string;
        };
      };
      stat_types: {
        Row: {
          id: string;
          game_id: string;
          name: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          game_id: string;
          name: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          game_id?: string;
          name?: string;
          created_at?: string;
        };
      };
      character_stats: {
        Row: {
          id: string;
          character_id: string;
          stat_type_id: string;
          stat_type: string;
          value: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          character_id: string;
          stat_type_id: string;
          stat_type: string;
          value: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          character_id?: string;
          stat_type_id?: string;
          stat_type?: string;
          value?: number;
          created_at?: string;
        };
      };
      team_compositions: {
        Row: {
          id: string;
          character_id: string;
          team_name: string;
          team_members: string[];
          priority: number;
          description: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          character_id: string;
          team_name: string;
          team_members: string[];
          priority: number;
          description?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          character_id?: string;
          team_name?: string;
          team_members?: string[];
          priority?: number;
          description?: string | null;
          created_at?: string;
        };
      };
      game_specific_attributes: {
        Row: {
          id: string;
          game_id: string;
          attribute_name: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          game_id: string;
          attribute_name: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          game_id?: string;
          attribute_name?: string;
          created_at?: string;
        };
      };
      character_game_attributes: {
        Row: {
          id: string;
          character_id: string;
          attribute_id: string;
          value: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          character_id: string;
          attribute_id: string;
          value: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          character_id?: string;
          attribute_id?: string;
          value?: string;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
