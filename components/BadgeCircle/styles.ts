import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: { alignItems: "center", width: 84, margin: 8 },
  circle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 8,
    fontSize: 12,
    color: colors.text,
    textAlign: "center",
  },
  lockedTitle: { color: colors.Placeholder },
});
