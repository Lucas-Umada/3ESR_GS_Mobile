import StatPill from "@/components/StatPill";
import { colors } from "@/theme/colors";
import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface ProfileCardProps {
  name?: string;
  level?: string | number;
  xp?: number;
  missions?: number;
  badges?: number;
  style?: ViewStyle;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name = "Usuário",
  level = "Nível 1",
  xp = 0,
  missions = 0,
  badges = 0,
  style,
}) => {
  const initials = name ? name.charAt(0).toUpperCase() : "U";

  return (
    <View style={[styles.container, style]}>
      <View style={styles.top}>
        <View style={[styles.avatar, { backgroundColor: "#4BD35E" }]}>
          <Text
            style={{ color: colors.white, fontWeight: "800", fontSize: 20 }}
          >
            {initials}
          </Text>
        </View>

        <View style={styles.meta}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.level}>{`Nível ${level} • Aventureiro`}</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <StatPill iconName="star" value={`${xp} XP`} label="Total" />
        <StatPill iconName="trophy" value={missions} label="Missões" />
        <StatPill iconName="ribbon" value={badges} label="Badges" />
      </View>
    </View>
  );
};

export default ProfileCard;
