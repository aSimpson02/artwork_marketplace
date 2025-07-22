import { Slot } from "expo-router";
import { useTheme } from "@/hooks/useTheme";
import { View } from "react-native";

export default function Layout() {
  const { theme } = useTheme();

  return (
    <View className={theme === "dark" ? "dark flex-1 bg-black" : "flex-1 bg-white"}>
      <Slot />
    </View>
  );
}
