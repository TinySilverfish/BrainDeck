import React, { createContext, useEffect, useState } from 'react';
import { lightTheme, darkTheme } from './Themes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const value = await AsyncStorage.getItem('darkModeEnabled');
                setIsDark(value === 'enabled');
            } catch (error) {
                console.error('Error retrieving data from AsyncStorage:', error);
            }
        };

        fetchData();
    }, []);

    const toggleTheme = async () => {
        try {
            const darkModeEnabled = !isDark;
            setIsDark(darkModeEnabled);
            await AsyncStorage.setItem('darkModeEnabled', darkModeEnabled ? 'enabled' : 'disabled');
        } catch (error) {
            console.error('Error saving data to AsyncStorage:', error);
        }
    };

    const theme = isDark ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);