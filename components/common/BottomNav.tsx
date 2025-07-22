import { View, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import {
  Home,
  Search,
  PlusCircle,
  User,
  Menu,
  Sun,
  Moon,
} from "lucide-react-native";
import { useTheme } from "@/hooks/useTheme";

export default function BottomNav() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const iconColor = theme === "dark" ? "white" : "black";

  return (
    <View className="flex-row justify-around items-center py-3 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-black">
      <TouchableOpacity onPress={() => router.push("/explore")}>
        <Search size={24} color={iconColor} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/galleries")}>
        <Home size={24} color={iconColor} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/upload")}>
        <PlusCircle size={24} color={iconColor} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/profile")}>
        <User size={24} color={iconColor} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/more")}>
        <Menu size={24} color={iconColor} />
      </TouchableOpacity>

      {/* Optional: Add theme toggle icon at end */}
      <TouchableOpacity onPress={toggleTheme}>
        {theme === "dark" ? (
          <Sun size={20} color={iconColor} />
        ) : (
          <Moon size={20} color={iconColor} />
        )}
      </TouchableOpacity>
    </View>
  );
}
