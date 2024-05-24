import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { RegisterScreen } from '../screen/RegisterScreen';
import { ArtistScreen } from '../screen/ArtistScreen';
import { DrawerNavigator } from './DrawerNavigator';
import { PlayListScreen } from '../screen/PlayListScreen';
import { LibraryEntity } from '../../infraestructure/Entities/Library';

export type RootStackParams = {
    Login: undefined,
    Register: undefined,
    Artist: { artistId: number },
    Application: undefined,
    PlayList: {library: LibraryEntity},
    

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
      <Stack.Screen name="PlayList" component={PlayListScreen} />
    </Stack.Navigator>
  )
}