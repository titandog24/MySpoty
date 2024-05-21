import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { BottomTabNavigator } from './BottomTabNavigator';
import { IonIcon } from '../components/IonIcons';
import { ProfileScreen } from '../screen/ProfileScreen';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { StorageLocal } from '../../infraestructure/Config/StoreLocal';
export type RootStacksParams = {
  Home: undefined;
  Product: {id: number, name: string};
  Products: undefined;
  Profile: undefined;
  Settings: undefined;
}

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  const dimesiones = useWindowDimensions();
  const navigation = useNavigation();

  const Logout = async () => {
    await StorageLocal.removeData('user');
    navigation.dispatch({
      ...CommonActions.navigate('Login')
  });
  }

  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent props={props} logout={Logout} />} 
    screenOptions={{
    //   drawerType:(dimesiones.width >= 400) ? 'permanent': 'slide',
      headerShown: false,
    }}>
      <Drawer.Screen
        options={{
          drawerIcon:(({color})=>(<IonIcon name="home-outline" size={20} color={color}/>))
        }} 
      name="Home" component={BottomTabNavigator} />
      <Drawer.Screen
      options={{
        drawerIcon:(({color})=>(<IonIcon name="person-outline" size={20} color={color}/>))
      }}  
      name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

interface custom {
  props: DrawerContentComponentProps,
  logout: () => void
}

const CustomDrawerContent = ({props, logout}:custom) => {
  return(
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
      <DrawerItem
        icon={({ focused, color, size }) => <IonIcon name='log-out-outline' />}
        label="Logout"
        onPress={() => logout()}
      />

    </DrawerContentScrollView>
  );
}