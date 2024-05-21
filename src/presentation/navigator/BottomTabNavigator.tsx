import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreens } from '../screen/HomeScreens';
import { SearchScreen } from '../screen/SearchScreen';
import { IonIcon } from '../components/IonIcons';
import { PlanScreen } from '../screen/PlanScreen';
import { BibliotecaScreen } from '../screen/BibliotecaScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {

  return (
    <Tab.Navigator  
      screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen
        name="HomeScreens"
        component={HomeScreens}
        options={{
          title: 'Inicio',
          tabBarIcon: () => (
            <IonIcon
              name='home-outline'
              size={25}
              color={'gray'} />
          )
        }} />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: 'Buscar tu música',
          tabBarIcon: () => (
            <IonIcon
              name='search-outline'
              size={25}
              color={'gray'} />
          )
        }} />
      <Tab.Screen
        name="BibliotecaScreen"
        component={BibliotecaScreen}
        options={{
          title: 'Tu biblioteca',
          tabBarIcon: () => (
            <IonIcon
              name='library-outline'
              size={25}
              color={'gray'} />
          )
        }} />
      <Tab.Screen
        name="PlanScreen"
        component={PlanScreen}
        options={{
          title: 'Premium',
          tabBarIcon: () => (
            <IonIcon
              name='accessibility-outline'
              size={25}
              color={'gray'} />
          )
        }} />

    </Tab.Navigator>
  );
}