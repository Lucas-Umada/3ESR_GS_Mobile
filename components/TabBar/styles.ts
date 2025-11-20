import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 16,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  inner: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 14,
    width: "100%",
    maxWidth: 520,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 8,
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activePill: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 18,
  },
  activeLabel: {
    marginTop: 4,
    fontSize: 12,
    color: colors.primary,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
    color: colors.Placeholder,
  },
});
