export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      artifact_sets: {
        Row: {
          created_at: string | null
          game_id: string | null
          id: string
          set_name: string
        }
        Insert: {
          created_at?: string | null
          game_id?: string | null
          id?: string
          set_name: string
        }
        Update: {
          created_at?: string | null
          game_id?: string | null
          id?: string
          set_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "artifact_sets_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      character_artifact_sets: {
        Row: {
          artifact_set_id: string | null
          character_id: string | null
          created_at: string | null
          id: string
          priority: number
        }
        Insert: {
          artifact_set_id?: string | null
          character_id?: string | null
          created_at?: string | null
          id?: string
          priority: number
        }
        Update: {
          artifact_set_id?: string | null
          character_id?: string | null
          created_at?: string | null
          id?: string
          priority?: number
        }
        Relationships: [
          {
            foreignKeyName: "character_artifact_sets_artifact_set_id_fkey"
            columns: ["artifact_set_id"]
            isOneToOne: false
            referencedRelation: "artifact_sets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_artifact_sets_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
        ]
      }
      character_equipment: {
        Row: {
          character_id: string | null
          created_at: string | null
          equipment_name: string
          equipment_type_id: string | null
          id: string
          priority: number
        }
        Insert: {
          character_id?: string | null
          created_at?: string | null
          equipment_name: string
          equipment_type_id?: string | null
          id?: string
          priority: number
        }
        Update: {
          character_id?: string | null
          created_at?: string | null
          equipment_name?: string
          equipment_type_id?: string | null
          id?: string
          priority?: number
        }
        Relationships: [
          {
            foreignKeyName: "character_equipment_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_equipment_equipment_type_id_fkey"
            columns: ["equipment_type_id"]
            isOneToOne: false
            referencedRelation: "equipment_types"
            referencedColumns: ["id"]
          },
        ]
      }
      character_game_attributes: {
        Row: {
          attribute_id: string | null
          character_id: string | null
          created_at: string | null
          id: string
          value: string
        }
        Insert: {
          attribute_id?: string | null
          character_id?: string | null
          created_at?: string | null
          id?: string
          value: string
        }
        Update: {
          attribute_id?: string | null
          character_id?: string | null
          created_at?: string | null
          id?: string
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "character_game_attributes_attribute_id_fkey"
            columns: ["attribute_id"]
            isOneToOne: false
            referencedRelation: "game_specific_attributes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_game_attributes_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
        ]
      }
      character_skills: {
        Row: {
          character_id: string | null
          created_at: string | null
          id: string
          priority: number
          recommended_level: number
          skill_name: string
          skill_type: string
        }
        Insert: {
          character_id?: string | null
          created_at?: string | null
          id?: string
          priority: number
          recommended_level: number
          skill_name: string
          skill_type: string
        }
        Update: {
          character_id?: string | null
          created_at?: string | null
          id?: string
          priority?: number
          recommended_level?: number
          skill_name?: string
          skill_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "character_skills_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
        ]
      }
      character_stats: {
        Row: {
          character_id: string | null
          created_at: string | null
          id: string
          stat_type: string
          stat_type_id: string | null
          value: number
        }
        Insert: {
          character_id?: string | null
          created_at?: string | null
          id?: string
          stat_type: string
          stat_type_id?: string | null
          value: number
        }
        Update: {
          character_id?: string | null
          created_at?: string | null
          id?: string
          stat_type?: string
          stat_type_id?: string | null
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "character_stats_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_stats_stat_type_id_fkey"
            columns: ["stat_type_id"]
            isOneToOne: false
            referencedRelation: "stat_types"
            referencedColumns: ["id"]
          },
        ]
      }
      characters: {
        Row: {
          created_at: string | null
          element: string | null
          game_id: string | null
          id: string
          name: string
          rarity: number | null
          role: string | null
          updated_at: string | null
          weapon_type: string | null
        }
        Insert: {
          created_at?: string | null
          element?: string | null
          game_id?: string | null
          id?: string
          name: string
          rarity?: number | null
          role?: string | null
          updated_at?: string | null
          weapon_type?: string | null
        }
        Update: {
          created_at?: string | null
          element?: string | null
          game_id?: string | null
          id?: string
          name?: string
          rarity?: number | null
          role?: string | null
          updated_at?: string | null
          weapon_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "characters_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      equipment_types: {
        Row: {
          created_at: string | null
          game_id: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          game_id?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          game_id?: string | null
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "equipment_types_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      game_specific_attributes: {
        Row: {
          attribute_name: string
          created_at: string | null
          game_id: string | null
          id: string
        }
        Insert: {
          attribute_name: string
          created_at?: string | null
          game_id?: string | null
          id?: string
        }
        Update: {
          attribute_name?: string
          created_at?: string | null
          game_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "game_specific_attributes_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      games: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      stat_types: {
        Row: {
          created_at: string | null
          game_id: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          game_id?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          game_id?: string | null
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "stat_types_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      team_compositions: {
        Row: {
          character_id: string | null
          created_at: string | null
          description: string | null
          id: string
          priority: number
          team_members: string[]
          team_name: string
        }
        Insert: {
          character_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          priority: number
          team_members: string[]
          team_name: string
        }
        Update: {
          character_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          priority?: number
          team_members?: string[]
          team_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_compositions_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
