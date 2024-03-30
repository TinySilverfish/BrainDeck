import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import TabNavigator from './navigation/TabNavigator';
import { StatusBar } from 'expo-status-bar';

const ThemedAppContent = () => {
  const { theme } = useTheme();

  return (
    <>
      <StatusBar backgroundColor={theme.background} style={theme.text === '#040316' ? 'dark' : 'light'} />
      <TabNavigator />
    </>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <ThemedAppContent />
      </NavigationContainer>
    </ThemeProvider>
  );
};
