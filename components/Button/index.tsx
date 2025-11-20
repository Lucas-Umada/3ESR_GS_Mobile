import { colors } from "@/theme/colors";
import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { styles } from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
      style={[
        styles.container,
        { backgroundColor: colors.primary, opacity: disabled ? 0.5 : 1 },
        style,
        styles.shadow,
      ]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
