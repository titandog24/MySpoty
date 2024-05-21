import { Layout, List, Text } from '@ui-kitten/components'
import { UltimoEscuchadoItem } from './UltimoEscuchadoItem'
import { StyleSheet } from 'react-native'
import { useContext } from 'react'
import { ThemeContext } from '../theme/ThemeProviders'
import { Artist } from '../../infraestructure/Entities/Artist';

interface Props {
  data?: Artist[] | undefined,
  titulo?: string
}
export const UltimosEscuchados = ({ data, titulo = '' }: Props) => {

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', // Esto hace que los elementos se distribuyan horizontalmente
      justifyContent: 'space-between', // Esto distribuye los elementos a lo largo del eje principal (horizontal)
      alignItems: 'flex-start', // Esto alinea los elementos a lo largo del eje secundario (vertical)
      marginHorizontal: 10
    },
    column: {
      marginBottom: 5,
      marginTop: 5
    },
    titulo: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 3,
      marginLeft:10,
    }
  })



  return (
    <Layout>
      <Text style={[styles.titulo]}>
        {titulo}
      </Text>
      <Layout style={styles.container}>
        <List
          data={data}
          numColumns={2}
          style={{backgroundColor: 'white'}}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => (
            <UltimoEscuchadoItem key={item.id} artist={item}/>
          )}
        />
      </Layout>
    </Layout>
  )
}
