import Header from "@/components/Header";
import MissionCard from "@/components/MissionCard";
import TabBar from "@/components/TabBar";
import { useProfile } from "@/contexts/ProfileContext";
import React from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { indexStyles as styles } from "./styles";

const MOCK_MISSIONS = [
  {
    id: "m1",
    title: "Fundamentos de IA",
    subtitle: "Iniciante",
    locked: false,
  },
  {
    id: "m2",
    title: "Pensamento Crítico",
    subtitle: "Iniciante",
    locked: true,
  },
  {
    id: "m3",
    title: "Análise de Dados",
    subtitle: "Intermediário",
    locked: true,
  },
  {
    id: "m4",
    title: "Liderança Digital",
    subtitle: "Intermediário",
    locked: true,
  },
  { id: "m5", title: "Machine Learning", subtitle: "Avançado", locked: true },
];

export default function HomeScreen() {
  const { profile, progress, addXp } = useProfile();

  const handleMissionPress = async (mission: any, idx: number) => {
    if (mission.locked) {
      Alert.alert(
        "Missão bloqueada",
        "Complete os requisitos para desbloquear a missão."
      );
      return;
    }

    // XP gained for this mission — customize as needed
    const xpAmount = 50;

    try {
      const updated = await addXp(xpAmount);
      if (updated) {
        Alert.alert(
          "XP ganho",
          `Você ganhou ${xpAmount} XP! Total: ${updated.xp} XP`
        );
      } else {
        Alert.alert(
          "Erro",
          "Não foi possível atualizar seu XP. Tente novamente."
        );
      }
    } catch (e) {
      console.error("Erro ao adicionar XP:", e);
      Alert.alert(
        "Erro",
        "Não foi possível atualizar seu XP. Tente novamente."
      );
    }
  };

  // profile is provided by ProfileContext

  return (
    <View style={styles.wrapper}>
      <Header name={profile?.name} xp={progress?.xp ?? 0} />

      <ScrollView contentContainerStyle={styles.content} style={{ flex: 1 }}>
        <Text style={styles.sectionTitle}>Mapa de Trilhas</Text>
        <Text style={styles.sectionSub}>
          Complete missões e desbloqueie novas habilidades
        </Text>

        <View style={localStyles.listWrapper}>
          {/* vertical connector line */}
          <View style={localStyles.verticalLine} />

          <View style={{ width: "100%" }}>
            {MOCK_MISSIONS.map((m, idx) => (
              <MissionCard
                key={m.id}
                title={m.title}
                subtitle={m.subtitle}
                locked={m.locked}
                style={{ marginLeft: 12, marginRight: 12 }}
                onPress={() => handleMissionPress(m, idx)}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <TabBar />
    </View>
  );
}

const localStyles = StyleSheet.create({
  listWrapper: {
    marginTop: 12,
    width: "100%",
    alignItems: "center",
    position: "relative",
    paddingBottom: 40,
  },
  verticalLine: {
    position: "absolute",
    left: 48,
    top: 48,
    bottom: 24,
    width: 2,
    backgroundColor: "#E6E6E6",
    borderRadius: 2,
  },
});
