// src/components/Input.tsx

import React from "react";
import { KeyboardTypeOptions, TextInput, ViewStyle } from "react-native";

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;

  style?: ViewStyle | null;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

import { colors } from "@/theme/colors";
import { styles } from "./styles";

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  style,
  ...rest
}) => {
  return (
    <TextInput
      style={[styles.input]}
      placeholder={placeholder}
      placeholderTextColor={colors.Placeholder}
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
};
