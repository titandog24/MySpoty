import { Button, Card, Layout, Modal, Text } from "@ui-kitten/components"
import { Alert, StyleSheet, View } from "react-native"
import { Track } from "../../infraestructure/Entities/Track"
import { Image } from "react-native"
import { IonIcon } from "./IonIcons"
import { useQuery } from "@tanstack/react-query"
import { getAll } from "../../infraestructure/Actions/LibraryMusic/Library"
import { useState } from "react"
import { LibraryEntity } from "../../infraestructure/Entities/Library"
import { saveTrackInPlayList } from "../../infraestructure/Actions/Track/Track"

interface Props {
    track: Track,
    requireEventFav?: boolean
}

export const TrackCard = ({ track, requireEventFav = false }: Props) => {

    const [ModalVisible, setModalVisible] = useState(false)
    const [Idtrack, setIdTrack] = useState(0)

    const openModal = (id: number) => {
        setIdTrack(id);
        setModalVisible(true)
    }

    const saveFavorite = async (id: number) => {

        const data = await saveTrackInPlayList(id, Idtrack);
        setModalVisible(false);
        if (data != undefined) {
            Alert.alert("Se guardó correctamente");
        }
    }

    const { isLoading, data: Playlist } = useQuery({
        queryKey: ['playlist'],
        queryFn: getAll
    })


    return (
        <Layout style={styles.container}>
            <Layout style={{ flex: 1, flexDirection: 'row', height: 130, alignItems: 'center' }}>
                <Layout style={{ flex: 1 }}>
                    <Image
                        height={100}
                        resizeMode="cover"
                        borderRadius={10}
                        source={{
                            uri: `${track.imageTrack.imageName}`
                        }}
                    />
                </Layout>
                <Layout style={{ flex: 3 }}>
                    <Layout><Text style={styles.trackTitle}>{track.title}</Text></Layout>
                    <Layout><Text style={styles.trackGender}>{track.gender}</Text></Layout>
                    <Layout style={{ flex: 1 }}>
                        <Layout style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Button
                                style={{ flex: 1, borderRadius: 100, marginRight: 5, marginLeft: 5 }}
                                appearance="outline"
                                status="basic"
                                size="tiny"
                                accessoryRight={() => (
                                    <IonIcon name="shuffle-outline" color="gray" />
                                )}
                                onPress={() => { }}
                            />
                            <Button
                                style={{ flex: 1, borderRadius: 30, marginRight: 5 }}
                                status="basic"
                                size="small"
                                appearance="outline"

                                accessoryRight={() => (
                                    <IonIcon name="play-back-circle-outline" color="gray" />
                                )}
                                onPress={() => { }}
                            />
                            <Button
                                style={{ flex: 1, borderRadius: 100, marginRight: 5 }}
                                status="primary"
                                appearance="outline"

                                accessoryRight={() => (
                                    <IonIcon name="play-outline" color="blue" />
                                )}
                                onPress={() => { }}
                            />
                            <Button
                                style={{ flex: 1, borderRadius: 30, marginRight: 5 }}
                                appearance="outline"
                                status="basic"
                                size="small"

                                accessoryRight={() => (
                                    <IonIcon name="play-forward-circle-outline" color="gray" />
                                )}
                                onPress={() => { }}
                            />
                            <Button
                                style={{ flex: 1, borderRadius: 30, marginRight: 5 }}
                                appearance="outline"
                                status="basic"
                                size="tiny"

                                accessoryRight={() => (
                                    <IonIcon name="repeat-outline" color="gray" />
                                )}
                                onPress={() => { }}
                            />
                        </Layout>
                    </Layout>
                    {
                        requireEventFav
                            ? (
                                <Button
                                    onPress={() => openModal(track.id)}
                                    style={styles.buttonFav}
                                    appearance="ghost"
                                    accessoryRight={<IonIcon name="star-outline" />}
                                />
                            )
                            : <></>
                    }
                </Layout>
            </Layout>
            <View style={styles.containerModal}>
                <Modal
                    visible={ModalVisible}
                    backdropStyle={styles.backdrop}
                    onBackdropPress={() => setModalVisible(false)}>
                    <Card disabled={true} style={{ width: 350 }}>
                        <Button
                            appearance="ghost"
                            style={{ position: 'absolute', top: 0, right: 0 }}
                            accessoryRight={() => (
                                <IonIcon name="close-outline" size={25} />
                            )}
                            onPress={() => setModalVisible(false)} />
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 24,
                                marginBottom: 10
                            }}>
                            {`Select playlist`}
                        </Text>

                        {
                            Playlist == undefined ? <></>
                                : Playlist.map((value, index) => (
                                    <Button key={index} appearance="ghost" onPress={() => saveFavorite(value.id)}>{value.name}</Button>
                                ))
                        }
                    </Card>
                </Modal>
            </View>
        </Layout>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        padding: 5
    },
    trackTitle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    trackGender: {
        alignSelf: 'center',
        fontSize: 14
    },
    buttonFav: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    containerModal: {
        flex: 1
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})
