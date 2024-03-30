import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useTheme } from "../theme/ThemeContext";

export default function AddScreen() {
  const { theme } = useTheme();

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Text style={[globalStyles.titleText, { color: theme.text }]}>Add Screen</Text>
    </View>
  );
}
