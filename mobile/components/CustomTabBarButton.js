import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const CustomTabBarButton = ({ children, onPress, accessibilityState }) => {
  const [isPressed, setIsPressed] = useState(false);
  const focused = accessibilityState.selected;
  const { theme } = useTheme();

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    onPress(); 
  };

  const getBackgroundColor = () => {
    if (isPressed) {
      return theme.backgroundPressed;
    } else if (focused) {
      return theme.backgroundFocused;
    }
    return theme.background;
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        styles.button,
        {
          backgroundColor: getBackgroundColor(),
          flex: 1, // Ensure the button takes equal space
        }
      ]}
      activeOpacity={0.7} // Adjust the opacity for a pressed effect
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Make sure the button fills the tab bar vertically
  },
});

export default CustomTabBarButton;
