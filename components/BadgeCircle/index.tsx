import { colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface BadgeCircleProps {
  title: string;
  unlocked?: boolean;
  iconName?: React.ComponentProps<typeof Ionicons>["name"];
  style?: ViewStyle;
}

export const BadgeCircle: React.FC<BadgeCircleProps> = ({
  title,
  unlocked = false,
  iconName = "star",
  style,
}) => {
  const background = unlocked ? "#FFB24D" : "#F0F2F5";
  const iconColor = unlocked ? colors.white : "#D1D5D9";

  return (
    <View style={[styles.wrapper, style]}>
      <View style={[styles.circle, { backgroundColor: background }]}>
        <Ionicons name={iconName} size={26} color={iconColor} />
      </View>
      <Text
        style={[styles.title, !unlocked && styles.lockedTitle]}
        numberOfLines={2}
      >
        {title}
      </Text>
    </View>
  );
};

export default BadgeCircle;
