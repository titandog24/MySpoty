import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumScreen } from '../screen/AlbumScreen';
import { TrackScreen } from '../screen/TrackScreen';
import { IonIcon } from '../components/IonIcons';

const Tab = createMaterialTopTabNavigator();

interface Props {
  idUsuario: number
}

export const TapTopNavigator = ({idUsuario}:Props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Album" 
        options={{
            title: '',
            tabBarStyle: {height: 50},
            tabBarIcon: () => (
                <IonIcon
                  name='grid-outline'
                  color={'gray'} />
              )
        }}>{(props) => <AlbumScreen {...props} idUsuario={idUsuario} />}</Tab.Screen>
      <Tab.Screen 
        name="Track" 
        options={{
            title: '',
            tabBarStyle: {height: 50},
            tabBarIcon: () => (
                <IonIcon
                  name='play-outline'
                  color={'gray'} />
              )
        }}>{(props) => <TrackScreen {...props} idUsuario={idUsuario} />}</Tab.Screen>
    </Tab.Navigator>
  )
}
