import React from 'react';
import { StatusBar } from 'expo-status-bar'; // or from 'react-native'
import { useTheme } from '../theme/ThemeContext'; // Adjust the path as necessary

const MyStatusBar = () => {
  const { theme } = useTheme();
  return (
    <StatusBar style={theme.text === '#040316' ? 'dark' : 'light'} />
  );
};

export default MyStatusBar;
