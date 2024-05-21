import { NavigationContainer, Theme, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { PropsWithChildren, createContext, useEffect, useState } from 'react'
import { ThemeColors, darkColors, lightColors } from './theme';
import { useColorScheme, AppState, Appearance } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
//Los temas utilizados por los dispositivos
type ThemeColor = 'light' | 'dark';
//Propiedades a utilizar para el provider del tema
interface ThemeContextProps {
    currentTheme: ThemeColor,
    colors: ThemeColors,
    isDark: Theme
    setTheme: (theme: ThemeColor) => void;
}

//Se crea un componente encargado de proveer el tema
export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProviders = ({ children }: PropsWithChildren) => {

    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? eva.dark : eva.light;
    const bgColorTheme = colorScheme === 'dark'
        ? theme['color-basic-700']
        : theme['color-basic-100']

    return (
        <ApplicationProvider  {...eva} theme={theme}>
            <NavigationContainer>
                {children}
            </NavigationContainer>
        </ApplicationProvider>
    )
}
