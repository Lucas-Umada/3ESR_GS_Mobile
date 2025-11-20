import BadgeCircle from "@/components/BadgeCircle";
import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface BadgeItem {
  id: string;
  title: string;
  unlocked?: boolean;
  icon?: string;
}

interface AchievementsListProps {
  badges: BadgeItem[];
  style?: ViewStyle;
}

export const AchievementsList: React.FC<AchievementsListProps> = ({
  badges,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.header}>Conquistas Desbloqueadas</Text>
      <View style={styles.grid}>
        {badges.map((b) => (
          <BadgeCircle
            key={b.id}
            title={b.title}
            unlocked={!!b.unlocked}
            iconName={(b.icon as any) ?? "star"}
          />
        ))}
      </View>
    </View>
  );
};

export default AchievementsList;
