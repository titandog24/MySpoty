import { Layout, Text } from "@ui-kitten/components"
import { Image, StyleSheet } from "react-native"
import { LibraryEntity } from "../../infraestructure/Entities/Library"
import { colors } from "../theme/theme"

interface Props {
    library: LibraryEntity,
    goToPlayList: (lib:LibraryEntity) => void
}

export const LibraryItem = ({library, goToPlayList}:Props) => {
    const color = colors;

    return (
        <Layout style={[styles.container, {backgroundColor:color.primary}]}>
            <Layout style={[styles.card, {backgroundColor:color.primary}]}>
                <Layout style={{flex: 1}}>
                    <Image
                        height={60}
                        resizeMode="cover"
                        source={{
                            uri: library.picture
                        }}
                        />
                </Layout>
                <Layout style={{flex:3, backgroundColor: color.primary}}>
                        <Layout style={{paddingTop: 10, paddingLeft: 20, backgroundColor: color.primary}}>
                            <Layout style={{backgroundColor: color.primary}}>
                                <Text 
                                style={{fontSize:18, color: color.text }}
                                onPress={() => goToPlayList(library)}>{library.name}</Text>
                            </Layout>
                            <Layout style={{backgroundColor: color.primary}}>
                                <Text 
                                style={{fontSize:12, color: color.text}}
                                onPress={() => goToPlayList(library)}>Playlist - {library.counterSong} songs</Text>
                            </Layout>
                        </Layout>
                </Layout>
            </Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        flexDirection: 'row',
        flex: 1,
        marginBottom: 20
    }
})