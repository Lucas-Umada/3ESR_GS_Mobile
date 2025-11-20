import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 6,
    marginBottom: 18,
  },
  top: { flexDirection: "row", alignItems: "center", gap: 14 },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  meta: { flex: 1 },
  name: { fontSize: 18, fontWeight: "800", color: colors.text },
  level: { fontSize: 13, color: colors.Placeholder, marginTop: 4 },
  statsRow: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
  },
});
