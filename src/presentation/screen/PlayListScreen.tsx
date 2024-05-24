import { StackScreenProps } from '@react-navigation/stack'
import { Layout, List, Text } from '@ui-kitten/components'
import React from 'react'
import { RootStackParams } from '../navigator/StackNavigator'
import { useQuery } from '@tanstack/react-query'
import { getAllTracksByPlaylist } from '../../infraestructure/Actions/Track/Track'
import { TrackCard } from '../components/TrackCard'
import { Image, StyleSheet, View } from 'react-native'
import { colors } from '../theme/theme'



interface Props extends StackScreenProps<RootStackParams, 'PlayList'> { }

export const PlayListScreen = ({route}:Props) => {

  const {id,name,picture} = route.params.library;


    const {isLoading, data: Tracks} = useQuery({
      queryKey: ['playlist',route.params.library.id],
      queryFn: () => getAllTracksByPlaylist(route.params.library.id)
    })

  if (isLoading) {
    return <View><Text>Cargando...</Text></View>
  }

  return (
    <Layout style={styles.container}>
        <Layout style={styles.header}>
          <Image 
            resizeMode='cover'
            style={{width: '100%', height:'100%'}}
            source={{
              uri: picture
            }}
          />
          <Text style={styles.title}>{name}</Text>
        </Layout>
        <Layout style={styles.body}>
          <List 
            data={Tracks == undefined ? [] : Tracks}
            keyExtractor={(item) => item.id.toString()}
            numColumns={1}
            style={{backgroundColor: colors.background}}
            renderItem={({item}) => <TrackCard key={item.id} track={item} />}
          />
        </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  body: {
    flex: 6, 
  },
  title: {
    color: colors.text, 
    fontSize:36, 
    position: 'absolute', 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    width: '100%', 
    height: '100%',
    textAlign: 'center',
    paddingTop: 100
  }
})

