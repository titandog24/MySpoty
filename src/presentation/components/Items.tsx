import { Layout, Text, Button } from '@ui-kitten/components'
import { Image } from 'react-native';
import React from 'react'
import { ImageStyle, StyleSheet } from 'react-native';
import { IonIcon } from './IonIcons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props{
    id: number,
    artisName: string,
    name: string,
    age: string,
    imageUrl: string,
    styleImg?: ImageStyle,
    onlyArtist: boolean,
    viewArtist: (id:number) => void
}

interface nav extends StackScreenProps<RootStackParams, 'Artist'> {}

export const Items = ({id, artisName = 'test', name, age, imageUrl, styleImg, onlyArtist, viewArtist}: Props, {navigation}:nav) => {


    const formatterText = (text: string) => {
        const textArray = text.split(' ');
        return textArray.length > 1 ? `${textArray[0]} ${textArray[1]}` : text
    }
    const styles = StyleSheet.create({
        cardStyle: {
            marginVertical: 5,
            marginHorizontal: 5,
            paddingTop: 0,
            borderRadius: 5,
            shadowColor: 'white',
            borderColor: styleImg === undefined ? "#f3f3f3" : "white",
            justifyContent: 'center',
            alignSelf: 'auto',
            borderBottomColor: '#6d6d6d',
        },
        cardBody: {
            paddingVertical: 10,
            paddingHorizontal: 3,
            width: '100%'
        },
        autorTexto: {
            fontSize: 15,
            color: 'black',
            alignSelf: (onlyArtist) ? 'center' : 'flex-start'
        },
        albumTexto: {
            fontSize: 12,
            color: 'black'
        },
        fechaLanzamientoTexto: {
            fontSize: 9,
            color: 'black'
        },
        cardDetails: {
            flexDirection: 'column',
            backgroundColor: 'red',
            width: '100%'
        }
    })

   

    return (
        <Layout>
            <Layout style={styles.cardStyle}>
                <Layout style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        alt={artisName}
                        style={[{
                            height: 250,
                            width: 200
                        }, styleImg]}
                        resizeMode='cover'
                        source={{
                            uri: `${imageUrl}`,
                        }}
                    />
                </Layout>
                <Layout style={styles.cardBody}>
                    {
                        (!onlyArtist)
                            ? (
                                <Button
                                    appearance='outline'
                                    status='success'
                                    style={{ position: 'absolute', right: 0, top: 10, zIndex: 10 }}
                                    accessoryRight={<IonIcon name='eye-outline' />}
                                    onPress={() => viewArtist(id)}
                                />
                            )
                            : <></>
                    }
                    <Text style={styles.autorTexto}>{artisName}</Text>
                    {
                        (!onlyArtist)
                            ? (
                                <Layout style={styles.cardDetails}>
                                    <Layout>
                                        <Text style={styles.albumTexto}>{formatterText(name)}</Text>
                                        <Text style={styles.fechaLanzamientoTexto}>{age}</Text>
                                    </Layout>
                                </Layout>
                            )
                            : <></>
                    }
                </Layout>
            </Layout>
        </Layout>
    )
}

