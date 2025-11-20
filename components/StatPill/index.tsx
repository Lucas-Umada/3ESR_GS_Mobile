import { colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface StatPillProps {
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  value: string | number;
  label: string;
  style?: ViewStyle;
}

export const StatPill: React.FC<StatPillProps> = ({
  iconName,
  value,
  label,
  style,
}) => {
  return (
    <View style={[styles.pill, style]}>
      <Ionicons name={iconName} size={24} color={colors.primary} />
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default StatPill;
