import { useColorScheme, Appearance } from "react-native";
import { useState, useEffect } from "react";

export function useTheme() {
  const systemScheme = useColorScheme(); 
  const [theme, setTheme] = useState(systemScheme || "light");

  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme || "light");
    });
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
