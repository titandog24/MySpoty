import { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { MenuItemList } from '../components/MenuItemList'
import { UltimosEscuchados } from '../components/UltimosEscuchados'
import { getAllArtist } from '../../infraestructure/Actions/Artist/Artist'
import { useQuery } from '@tanstack/react-query';
import { Layout, Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { CommonActions } from '@react-navigation/native';
import { useEffect } from 'react';
import { Artist } from '../../infraestructure/Entities/Artist'
import { getTempUser, removeTemp } from '../../infraestructure/Store/ArtistStoreLocal'
import { useArtistStore } from '../../infraestructure/Store/ArtistStore'
import { HeaderComponent } from '../components/HeaderComponent'


export const HomeScreens = () => {
    const [tempArtist] = useState<Artist[]>([])
    const { artistStore, gbSetArtist } = useArtistStore();
    const navigation = useNavigation();


    const viewInfoArtist = (id: number) => {
        gbSetArtist(!artistStore)
        navigation.dispatch({
            ...CommonActions.navigate('Artist', { artistId: id })
        });
    }

    const { isLoading, data: Artist } = useQuery({
        queryKey: ['artist'],
        queryFn: getAllArtist
    })

    if (isLoading) {
        return <Layout><Text>Cargando...</Text></Layout>
    }

    return (
        <Layout>
            <HeaderComponent title='Inicio'/>
            {
                tempArtist.length > 0
                    ? (
                        <UltimosEscuchados data={tempArtist} titulo='Lo último escuchado' />
                    )
                    : <></>
            }
            <ScrollView style={{ marginVertical: 5 }}>
                <MenuItemList data={Artist} title='Artistas más escuchados' viewArtist={viewInfoArtist} />
                <MenuItemList data={Artist} title='Artistas favoritos' viewArtist={viewInfoArtist} style={{
                    height: 200, borderRadius: 60
                }}
                    styleImg={{
                        borderRadius: 100,
                        height: 110,
                        width: 100
                    }} onlyArtist={true} />
            </ScrollView>
        </Layout>
    )
}