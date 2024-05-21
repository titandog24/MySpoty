import { Layout, Text } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'
import { useQuery } from '@tanstack/react-query';
import { getAllAlbumsByArtistId } from '../../infraestructure/Actions/Artist/Artist';
import { ListOfAlbums } from '../components/ListOfAlbums';

interface Props {
  idUsuario: number
}

export const AlbumScreen = ({idUsuario}:Props) => {

  const {isLoading, data} = useQuery({
    queryKey: ['artistAlbumId','id'],
    queryFn: () => getAllAlbumsByArtistId(idUsuario)
  })

if (isLoading) {
  return <View><Text>Cargando...</Text></View>
}

  return (
    <Layout style={styles.container}>
        {
          data !== undefined
          ? <ListOfAlbums albums={data.albums} />
          :<></>
        }
    </Layout>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})