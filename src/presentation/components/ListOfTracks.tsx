import { Layout, List } from "@ui-kitten/components"
import { Track } from "../../infraestructure/Entities/Track"
import { TrackCard } from "./TrackCard"

interface Props {
    tracks: Track[]
}
export const ListOfTracks = ({tracks}:Props) => {
  return (
    <List 
        data={tracks}
        numColumns={1}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item}) => <TrackCard key={item.id} track={item} />}
        ListFooterComponent={() => <Layout style={{ height: 50 }} />}
        onEndReachedThreshold={0.5}
    />
  )
}