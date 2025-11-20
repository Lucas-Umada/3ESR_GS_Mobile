import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  image: {
    height: 180,
    marginBottom: 24,
    borderRadius: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: colors.secondary,
    marginBottom: 8,
    textAlign: "center",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
  },
  subtitle: {
    fontSize: 14,
    color: colors.text,
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  footerText: {
    fontSize: 12,
    color: colors.lightGray,
    textAlign: "center",
    marginTop: 24,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
