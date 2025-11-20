import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.locked,
  },
  left: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  greeting: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 2,
  },
  name: {
    fontSize: 22,
    fontWeight: "800",
    color: colors.text,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  xpPill: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#FFF4D9",
    minHeight: 36,
  },
  xpText: {
    marginLeft: 8,
    color: colors.text,
    fontWeight: "600",
  },
  trophyButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  trophyIcon: {
    color: colors.white,
    fontSize: 18,
  },
});
