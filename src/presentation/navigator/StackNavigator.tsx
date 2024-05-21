import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { RegisterScreen } from '../screen/RegisterScreen';
import { BottomTabNavigator } from './BottomTabNavigator';
import { ArtistScreen } from '../screen/ArtistScreen';
import { HomeScreens } from '../screen/HomeScreens';
import { DrawerNavigator } from './DrawerNavigator';

export type RootStackParams = {
    Login: undefined,
    Register: undefined,
    Artist: { artistId: number },
    Application: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login'
        screenOptions={{
            headerShown: false
        }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Artist" component={ArtistScreen} />
      <Stack.Screen name="Application" component={DrawerNavigator} />
    </Stack.Navigator>
  )
}