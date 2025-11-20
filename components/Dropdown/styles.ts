import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.Placeholder,
    justifyContent: "center",
    overflow: "hidden", // Importante para garantir que o picker siga o borderRadius
    width: "100%",
    marginBottom: 15,
  },
});
