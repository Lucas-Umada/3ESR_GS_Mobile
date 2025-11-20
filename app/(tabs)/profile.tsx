import AchievementsList from "@/components/AchievementsList";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import PromotionsList from "@/components/PromotionsList";
import TabBar from "@/components/TabBar";
import { loadProfile } from "@/services/storage";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const MOCK_BADGES = [
  { id: "b1", title: "Primeiro Passo", unlocked: true, icon: "star" },
  { id: "b2", title: "Explorador", unlocked: false, icon: "compass" },
  { id: "b3", title: "Pensador", unlocked: true, icon: "flash" },
  { id: "b4", title: "Mestre Tech", unlocked: false, icon: "trophy" },
  { id: "b5", title: "Líder", unlocked: false, icon: "crown" },
  { id: "b6", title: "Inovador", unlocked: false, icon: "bulb" },
];

const MOCK_PROMOTIONS = [
  {
    id: "p1",
    title: "Desconto 10% em Cursos",
    subtitle: "Troque seus pontos por benefícios",
    cost: 200,
    locked: true,
  },
  {
    id: "p2",
    title: "Certificado Digital",
    subtitle: "Comprove sua conclusão",
    cost: 500,
    locked: true,
  },
];

export default function Profile() {
  const [name, setName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchProfile = async () => {
      const userProfile = await loadProfile();

      if (userProfile) {
        setName(userProfile.name);
      }
    };

    fetchProfile();
  }, []);

  return (
    <View style={styles.container}>
      <Header title={name} />

      <ScrollView contentContainerStyle={styles.content}>
        <ProfileCard name={name} level={1} xp={0} missions={0} badges={3} />

        <AchievementsList badges={MOCK_BADGES} />

        <PromotionsList promotions={MOCK_PROMOTIONS} />
      </ScrollView>

      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F7F7" },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
