import { useQuery } from '@tanstack/react-query'
import { Layout, Text } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'
import { getAllTrackByArtistId } from '../../infraestructure/Actions/Track/Track'
import { ListOfTracks } from '../components/ListOfTracks'

interface Props {
  idUsuario: number
}

export const TrackScreen = ({idUsuario}:Props) => {

  const { isLoading, data: Tracks = [] } = useQuery({
    queryKey: ['tracks', 1],
    queryFn: () => getAllTrackByArtistId(idUsuario)
  });

  if (isLoading) {
    <View><Text>Cargando...</Text></View>
  }
  
  return (
    <Layout style={styles.container}>
      <ListOfTracks tracks={Tracks} />
    </Layout>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})