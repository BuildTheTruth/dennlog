"use client";

import { useEffect, useState } from "react";
import { getSupabaseClient } from "@/lib/supabase";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tables } from "@/types/supabase";

// 타입 정의
type Character = Tables<"characters">;

type Equipment = {
  equipment_name: string;
  priority: number;
};

type Skill = {
  skill_name: string;
  skill_type: string;
  priority: number;
  recommended_level: number;
};

type ArtifactSet = {
  set_name: string;
  priority: number;
};

type Stat = {
  stat_type: string;
  value: number;
};

type TeamComposition = Tables<"team_compositions">;

export default function GenshinCharacterPage() {
  const params = useParams();
  const characterId = params.characterId as string;
  const [character, setCharacter] = useState<Character | null>(null);
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [artifactSets, setArtifactSets] = useState<ArtifactSet[]>([]);
  const [stats, setStats] = useState<{ 준종결: Stat[]; 종결: Stat[] }>({
    준종결: [],
    종결: [],
  });
  const [teamCompositions, setTeamCompositions] = useState<TeamComposition[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const supabase = getSupabaseClient();

  useEffect(() => {
    async function fetchCharacterData() {
      try {
        // 캐릭터 정보 가져오기
        const { data: characterData, error: characterError } = await supabase
          .from("characters")
          .select("*")
          .eq("id", characterId)
          .single();

        if (characterError) throw characterError;
        setCharacter(characterData);

        // 장비 정보 가져오기
        const { data: equipmentData, error: equipmentError } = await supabase
          .from("character_equipment")
          .select("equipment_name, priority")
          .eq("character_id", characterId)
          .order("priority");

        if (equipmentError) throw equipmentError;
        setEquipment(equipmentData);

        // 스킬 정보 가져오기
        const { data: skillsData, error: skillsError } = await supabase
          .from("character_skills")
          .select("skill_name, skill_type, priority, recommended_level")
          .eq("character_id", characterId)
          .order("priority");

        if (skillsError) throw skillsError;
        setSkills(skillsData);

        // 성유물 세트 정보 가져오기
        const { data: artifactSetsData, error: artifactSetsError } =
          await supabase
            .from("character_artifact_sets")
            .select("artifact_sets(set_name), priority")
            .eq("character_id", characterId)
            .order("priority");

        if (artifactSetsError) throw artifactSetsError;
        setArtifactSets(
          artifactSetsData?.map((item) => ({
            set_name: item.artifact_sets?.set_name || "",
            priority: item.priority,
          })) || []
        );

        // 스탯 정보 가져오기
        const { data: statsData, error: statsError } = await supabase
          .from("character_stats")
          .select("stat_type, value, stat_type_id")
          .eq("character_id", characterId);

        if (statsError) throw statsError;

        const 준종결 = statsData.filter((stat) => stat.stat_type === "준종결");
        const 종결 = statsData.filter((stat) => stat.stat_type === "종결");
        setStats({ 준종결, 종결 });

        // 팀 구성 정보 가져오기
        const { data: teamData, error: teamError } = await supabase
          .from("team_compositions")
          .select(
            "id, team_name, team_members, priority, description, character_id, created_at"
          )
          .eq("character_id", characterId)
          .order("priority");

        if (teamError) throw teamError;
        setTeamCompositions(teamData || []);
      } catch (error) {
        console.error("Error fetching character data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacterData();
  }, [characterId, supabase]);

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <Skeleton className="h-8 w-64 mb-4" />
        <Skeleton className="h-4 w-32 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
        </div>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">캐릭터를 찾을 수 없습니다.</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{character.name}</h1>
        <div className="flex gap-2">
          <Badge variant="outline">{character.element}</Badge>
          <Badge variant="outline">{character.weapon_type}</Badge>
          <Badge variant="outline">{character.role}</Badge>
          <Badge variant="outline">{character.rarity}성</Badge>
        </div>
      </div>

      <Tabs defaultValue="equipment" className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="equipment">무기</TabsTrigger>
          <TabsTrigger value="skills">스킬</TabsTrigger>
          <TabsTrigger value="artifacts">성유물</TabsTrigger>
          <TabsTrigger value="stats">스탯</TabsTrigger>
          <TabsTrigger value="teams">팀 구성</TabsTrigger>
        </TabsList>

        <TabsContent value="equipment">
          <Card>
            <CardHeader>
              <CardTitle>추천 무기</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {equipment.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{index + 1}순위</Badge>
                      <span>{item.equipment_name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>스킬 우선순위</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{index + 1}순위</Badge>
                        <span>
                          {skill.skill_name} ({skill.skill_type})
                        </span>
                      </div>
                      <Badge variant="outline">
                        레벨 {skill.recommended_level}
                      </Badge>
                    </div>
                    <Progress
                      value={((skills.length - index) / skills.length) * 100}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="artifacts">
          <Card>
            <CardHeader>
              <CardTitle>추천 성유물 세트</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {artifactSets.map((set, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{index + 1}순위</Badge>
                      <span>{set.set_name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats">
          <Card>
            <CardHeader>
              <CardTitle>추천 스탯</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">준종결 스탯</h3>
                  <div className="space-y-2">
                    {stats.준종결.map((stat, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span>{stat.stat_type}</span>
                        <span>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-semibold mb-4">종결 스탯</h3>
                  <div className="space-y-2">
                    {stats.종결.map((stat, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span>{stat.stat_type}</span>
                        <span>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teams">
          <Card>
            <CardHeader>
              <CardTitle>추천 팀 구성</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {teamCompositions.map((team, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{index + 1}순위</Badge>
                      <h3 className="text-lg font-semibold">
                        {team.team_name}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {team.team_members.map((member, memberIndex) => (
                        <Badge key={memberIndex} variant="outline">
                          {member}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {team.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
