import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { display: "flex", alignItems: "center", width: "100%" },
  header: { fontSize: 16, fontWeight: "700", marginBottom: 12 },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
