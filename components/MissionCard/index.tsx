import { colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface MissionCardProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  locked?: boolean;
  style?: ViewStyle;
  onPress?: () => void;
}

export const MissionCard: React.FC<MissionCardProps> = ({
  title,
  subtitle,
  icon,
  rightIcon,
  locked = false,
  style,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        style,
        pressed && { opacity: 0.85 },
      ]}
    >
      <View style={styles.left}>
        <View
          style={[
            styles.iconCircle,
            locked ? styles.locked : { backgroundColor: colors.primary },
          ]}
        >
          {icon ?? <Ionicons name="star" color={colors.white} size={24} />}
        </View>
      </View>

      <View style={styles.mid}>
        <Text style={[styles.title, locked && styles.lockedText]}>{title}</Text>
        {subtitle ? (
          <Text style={[styles.subtitle, locked && styles.lockedText]}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      <View style={styles.right}>
        <View
          style={[
            styles.rightCircle,
            { backgroundColor: locked ? "#F5F6F7" : "#FFF4D9" },
          ]}
        >
          {rightIcon ??
            (locked ? (
              <Ionicons name="lock-closed" color={colors.darkGray} />
            ) : (
              <Ionicons name="flash" color={colors.primary} />
            ))}
        </View>
      </View>
    </Pressable>
  );
};

export default MissionCard;
