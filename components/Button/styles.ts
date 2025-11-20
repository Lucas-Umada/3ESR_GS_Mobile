import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  shadow: {
    shadowColor: colors.buttonShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 5,
    // Uma sombra que simula o fundo 3D é aplicada em muitos apps gamificados.
  },
});
