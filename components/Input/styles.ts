import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.locked,
    shadowColor: "#89ff44ff",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
    width: "100%",
    marginBottom: 15,
  },
});
