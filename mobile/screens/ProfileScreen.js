import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useTheme } from "../theme/ThemeContext";

export default function ProfileScreen() {
  const { theme, toggleTheme, isDark } = useTheme();
    
  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Text style={[globalStyles.titleText, { color: theme.text }]}>Dark Mode</Text>
      <Switch
        trackColor={{ false: theme.secondary, true: theme.primary }}
        thumbColor={isDark ? theme.accent : theme.primary}
        ios_backgroundColor={theme.secondary}
        onValueChange={toggleTheme}
        value={isDark}
      />
    </View>
  );
}
