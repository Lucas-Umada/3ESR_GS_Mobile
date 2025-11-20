import { StyleSheet } from "react-native";

export const indexStyles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#F7F7F7" },
  content: {
    display: "flex",
    paddingHorizontal: 20,
    paddingTop: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginBottom: 6,
  },
  sectionSub: { fontSize: 13, color: "#666", marginBottom: 18 },
});
