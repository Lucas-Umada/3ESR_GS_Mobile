import { colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./styles";

interface HeaderProps {
  /** Nome do usuário (ex: Lucas). Se `title` for passado, usará como fallback compatível. */
  name?: string;
  /** Saudação curta (ex: 'Olá,') */
  greeting?: string;
  /** Valor de XP a mostrar (ex: '0 XP' ou 120) */
  xp?: string | number;
  onPressXP?: (e?: GestureResponderEvent) => void;
  onPressTrophy?: (e?: GestureResponderEvent) => void;
  rightElement?: React.ReactNode;
  style?: ViewStyle;
  /** Compatibilidade: aceita `title` antigo como `name` */
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({
  name,
  title,
  greeting = "Olá,",
  xp = "0 XP",
  onPressXP,
  onPressTrophy,
  rightElement,
  style,
}) => {
  const displayName = name ?? title ?? "";

  return (
    <View style={[styles.container, style]}>
      <View style={styles.left}>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text numberOfLines={1} style={styles.name}>
          {displayName}
        </Text>
      </View>

      <View style={styles.right}>
        <TouchableOpacity
          style={styles.xpPill}
          activeOpacity={0.8}
          onPress={onPressXP}
          accessibilityLabel="XP"
        >
          <Text>⭐</Text>
          <Text style={styles.xpText}>
            {typeof xp === "number" ? `${xp} XP` : xp}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.trophyButton}
          activeOpacity={0.8}
          onPress={onPressTrophy}
          accessibilityLabel="Troféu"
        >
          <Ionicons name="trophy" size={20} color={colors.yellow} />
        </TouchableOpacity>

        {rightElement}
      </View>
    </View>
  );
};

export default Header;
