import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react'
import { ThemeProviders } from './presentation/theme/ThemeProviders';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { StackNavigator } from './presentation/navigator/StackNavigator';


const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <ThemeProviders> 
          <StackNavigator /> 
        </ThemeProviders>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}
