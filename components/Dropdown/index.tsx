// src/components/Dropdown.tsx

import { Picker } from "@react-native-picker/picker";
import React from "react";
import { View, ViewStyle } from "react-native";
import { styles } from "./styles";

// A interface para as opções que serão passadas
interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[]; // O array de opções (label/value)
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
  placeholderLabel?: string;
  style?: ViewStyle;
}

// Paleta de Cores (Reutilizada)
const colors = {
  Primary: "#58CC02",
  White: "#FFFFFF",
  Border: "#E5E5E5",
  Text: "#4B4B4B",
  Placeholder: "#A9A9A9",
};

export const CustomDropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue,
  onValueChange,
  placeholderLabel = "Selecione uma opção...",
  style,
}) => {
  // Define a cor do texto no Picker dependendo se o valor padrão (placeholder) está selecionado
  const pickerTextColor =
    selectedValue === "" ? colors.Placeholder : colors.Text;

  return (
    <View style={[styles.container, style]}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={{ height: 60, width: "100%" }}
        itemStyle={{ color: pickerTextColor }}
      >
        {/* Opção de placeholder, com value vazio */}
        <Picker.Item
          label={placeholderLabel}
          value=""
          enabled={false}
          style={{ color: colors.Placeholder }}
        />

        {/* Mapeia as opções passadas por prop */}
        {options.map((item) => (
          <Picker.Item
            key={item.value}
            label={item.label}
            value={item.value}
            style={{ color: colors.Text }}
          />
        ))}
      </Picker>
    </View>
  );
};
