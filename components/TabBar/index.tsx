import { colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useSegments } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface TabItem {
  key: string;
  label: string;
  route: string;
  iconName: React.ComponentProps<typeof Ionicons>["name"];
}

export const TabBar: React.FC = () => {
  const router = useRouter();
  const segments = useSegments();

  const active = segments.length ? segments[segments.length - 1] : "index";
  const currentPath =
    (router as any).asPath || (router as any).pathname || segments.join("/");

  const tabs: TabItem[] = [
    {
      key: "trilhas",
      label: "Trilhas",
      route: "./trilhas",
      iconName: "home-outline",
    },
    {
      key: "explorar",
      label: "Explorar",
      route: "./explore",
      iconName: "grid-outline",
    },
    {
      key: "perfil",
      label: "Perfil",
      route: "./profile",
      iconName: "person-outline",
    },
  ];

  const navigate = (route: string) => {
    router.push(route as any);
  };

  return (
    <View style={styles.container} pointerEvents="box-none">
      <View style={styles.inner}>
        {tabs.map((t) => {
          let routeName = t.route.replace("./", "");
          if (!routeName || routeName === "/") routeName = "trilhas";

          const isActive =
            active === routeName ||
            (routeName === "trilhas" &&
              (active === "trilhas" ||
                currentPath === "/" ||
                currentPath === "")) ||
            currentPath.includes(routeName) ||
            currentPath.includes(t.key);

          return (
            <TouchableOpacity
              key={t.key}
              style={[
                styles.item,
                t.key === "explorar" ? { opacity: 0.5 } : undefined,
              ]}
              onPress={() => navigate(t.route)}
              activeOpacity={t.key === "explorar" ? 1 : 0.8}
              disabled={t.key === "explorar"}
            >
              {isActive ? (
                <View style={styles.activePill}>
                  <Ionicons name={t.iconName} size={20} color={colors.white} />
                </View>
              ) : (
                <Ionicons
                  name={t.iconName}
                  size={20}
                  color={colors.Placeholder}
                />
              )}
              <Text style={isActive ? styles.activeLabel : styles.label}>
                {t.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
