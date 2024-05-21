import { Layout, Text } from "@ui-kitten/components"
import { FlatList, ImageStyle, StyleSheet, ViewStyle } from "react-native"
import { Items } from "./Items"
import { Artist } from "../../infraestructure/Entities/Artist"

interface Props {
    data: Artist[] | undefined,
    title: string,
    style?: ViewStyle,
    styleImg?: ImageStyle,
    onlyArtist? : boolean,
    viewArtist: (id:number) => void
}

export const MenuItemList = ({ data, title, style, styleImg, onlyArtist = false, viewArtist }: Props) => {

    const styles = StyleSheet.create({
        contenedor: {
            marginHorizontal: 10,
            marginVertical: 15,
        },
        titulo: {
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 3,
        }
    })
    
    return (
        <Layout style={[styles.contenedor, style]}>
            <Text style={[styles.titulo]}>
                {title}
            </Text>
            <FlatList
                data={data}
                horizontal={true}
                renderItem={({ item }) => 
                <Items 
                    key={item.id} 
                    id={item.id} 
                    artisName={item.artistName} 
                    name={item.name} age={item.age} 
                    imageUrl={item.imageArtist.imageName} 
                    styleImg={styleImg} 
                    onlyArtist={onlyArtist}
                    viewArtist={viewArtist} />}
                keyExtractor={item => item.id.toString()}
            />
        </Layout>
    )
}



