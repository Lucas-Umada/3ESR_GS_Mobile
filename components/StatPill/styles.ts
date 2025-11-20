import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pill: {
    width: 100,
    height: 72,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  value: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
    marginTop: 6,
  },
  label: {
    fontSize: 12,
    color: colors.Placeholder,
    marginTop: 2,
  },
});
