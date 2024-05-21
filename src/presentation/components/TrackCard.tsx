import { Button, Layout, Text } from "@ui-kitten/components"
import { StyleSheet } from "react-native"
import { Track } from "../../infraestructure/Entities/Track"
import { Image } from "react-native"
import { IonIcon } from "./IonIcons"

interface Props {
    track: Track
}

export const TrackCard = ({ track }: Props) => {
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
                        <Layout style={{flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Button 
                                style={{ flex: 1, borderRadius: 100, marginRight:5, marginLeft:5 }}
                                appearance="outline"
                                status="basic"
                                size="tiny"
                                accessoryRight={() =>(
                                    <IonIcon  name="shuffle-outline" color="gray"/>
                                )} 
                                onPress={() => {}}
                            />
                            <Button 
                                style={{ flex: 1, borderRadius: 30, marginRight:5 }}
                                status="basic"
                                size="small"
                                appearance="outline"
                                
                                accessoryRight={() =>(
                                    <IonIcon name="play-back-circle-outline" color="gray" />
                                )} 
                                onPress={() => {}}
                            />
                            <Button 
                                style={{ flex: 1, borderRadius: 100, marginRight:5 }}
                                status="primary"
                                appearance="outline"
                                
                                accessoryRight={() =>(
                                    <IonIcon name="play-outline" color="blue" />
                                )} 
                                onPress={() => {}}
                            />
                            <Button 
                                style={{ flex: 1, borderRadius: 30, marginRight:5 }}
                                appearance="outline"
                                status="basic"
                                size="small"
                                
                                accessoryRight={() =>(
                                    <IonIcon name="play-forward-circle-outline" color="gray" />
                                )} 
                                onPress={() => {}}
                            />
                            <Button 
                                style={{ flex: 1, borderRadius: 30, marginRight:5 }}
                                appearance="outline"
                                status="basic"
                                size="tiny"
                                
                                accessoryRight={() =>(
                                    <IonIcon name="repeat-outline" color="gray" />
                                )} 
                                onPress={() => {}}
                            />
                        </Layout>
                    </Layout>
                </Layout>
            </Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        padding:5
    },
    trackTitle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    trackGender: {
        alignSelf: 'center',
        fontSize: 14
    }
})
