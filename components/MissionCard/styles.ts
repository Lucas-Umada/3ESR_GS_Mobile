import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 24,
  },
  left: {
    width: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  mid: { flex: 1, paddingLeft: 12 },
  title: { fontSize: 16, fontWeight: "700", color: colors.text },
  subtitle: { fontSize: 13, color: colors.Placeholder, marginTop: 4 },
  right: {
    width: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  rightCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  locked: {
    backgroundColor: "#F0F0F0",
  },
  lockedText: { color: "#BFC3C6" },
});
