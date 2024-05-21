import { useQuery } from "@tanstack/react-query"
import { Input, Layout, Text } from "@ui-kitten/components"
import { useMemo, useState } from "react"
import { ActivityIndicator, StyleSheet } from "react-native"
import { getAllTrack } from "../../infraestructure/Actions/Track/Track"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ListOfTracks } from "../components/ListOfTracks"
import { useDebouncedValues } from '../hooks/debounce';
import { HeaderComponent } from "../components/HeaderComponent"

export const SearchScreen = () => {

  const [textSearch, setTextSearch] = useState("")
  const {top} = useSafeAreaInsets();

  const debouncedValue = useDebouncedValues(textSearch);


  const {isLoading, data:TrackList = []} = useQuery({
    queryKey: ['searchArtistByName'],
    queryFn: () => getAllTrack()
  })

  
 const TrackListFilter = useMemo(() => {
   
    if (debouncedValue.length === 0 || debouncedValue.length < 3) {
      return [];
    }

    return TrackList.filter(track => track.title.toLocaleLowerCase().includes(debouncedValue.toLocaleLowerCase()))
  }, [debouncedValue]);

  return (
    <Layout style={{backgroundColor: 'white', flex: 1}}>
      <HeaderComponent title="Busca tus canciones" />
      <Layout>
        <Text style={{alignSelf: 'center', fontSize: 26, fontWeight: 'bold', margin: 30}}>Buscador de canciones</Text>
      </Layout>
      <Input
        style={[styles.input]}
        status='basic'
        placeholder='Ingrese el nombre de la canción'
        onChangeText={setTextSearch}
      />
      {
        isLoading && <ActivityIndicator style={{ paddingTop: 20 }} />
      }

      {
        TrackListFilter.length > 0
        ? <ListOfTracks tracks={TrackListFilter} />
        : <Layout style={styles.NoData}><Text style={styles.NoDataText}>No data</Text></Layout>
      }
      
    </Layout>
  )
}

const styles = StyleSheet.create({
  NoData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  NoDataText: {
    color: 'gray',
    fontSize: 22,
    fontStyle: 'italic'
  },
  input: {
    margin: 2,
    marginBottom: 30,
    marginTop: 10
  }
})