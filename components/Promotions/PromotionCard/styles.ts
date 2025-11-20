import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ECEFF1",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 15, fontWeight: "700", color: colors.text },
  pill: {
    backgroundColor: "#FFF4D9",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
  },
  pillText: { fontSize: 12, color: colors.text, fontWeight: "600" },
  actionRow: { marginTop: 12 },
  actionButton: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  actionText: { color: colors.white, fontWeight: "700" },
  actionTextLocked: { color: colors.text, fontWeight: "700" },
});
