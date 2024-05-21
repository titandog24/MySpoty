import { Layout, Text } from "@ui-kitten/components"
import { Image, StyleSheet } from "react-native"
import { Artist } from "../../infraestructure/Entities/Artist"

interface Props {
    artist: Artist | undefined
}

export const UltimoEscuchadoItem = ({artist}:Props) => {

    const styles = StyleSheet.create({
        card: {
            backgroundColor: 'white',
            flexDirection: 'row',
            maxHeight: 50,
            padding: 0,
            width: 180,
            marginRight: 10,
            marginBottom: 10,
            borderRadius: 2
        },
        Layout: {
            justifyContent: 'center',
            paddingHorizontal: 5,
            backgroundColor: 'white',
            borderRadius: 2
        }
    })

    return (
        <Layout style={styles.card}>
            <Layout>
                <Image
                    height={40}
                    width={50}
                    alt={'test'}
                    resizeMode="cover"
                    borderTopLeftRadius={2}
                    borderBottomLeftRadius={2}
                    source={{
                        uri: artist?.imageArtist.imageName,
                    }}
                />
            </Layout>
            <Layout style={[styles.Layout, { width: 66 }]}>
                <Text style={{ color: 'black' }}>{artist?.artistName}</Text>
            </Layout>
        </Layout>
    )
}

