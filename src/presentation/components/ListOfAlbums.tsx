import { Layout, List } from "@ui-kitten/components"
import { Album } from "../../infraestructure/Entities/Album"
import { AlbumImage } from "./AlbumImage"

interface Props {
    albums: Album[]
}
export const ListOfAlbums = ({albums}:Props) => {
  return (
    <List
            data={albums}
            numColumns={2}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item }) => (
              <AlbumImage key={item.id} image={item.imageAlbum.imageName} />
            )}

            ListFooterComponent={() => <Layout style={{ height: 50 }} />}
            onEndReachedThreshold={0.5}
            // onEndReached={fetchNextPage}
            // refreshControl={
            //     <RefreshControl
            //         refreshing={isRefreshin}
            //         onRefresh={onPullToRefresh}
            //     />
            // }
        />
  )
}
