import { Button, Layout } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from '../theme/theme'
import { IonIcon } from './IonIcons'

interface Props {
    plan: 'gold' | 'extra' | 'basic',
    title: string,
    price: number
}

export const CardPlan = ({ title, price, plan }: Props) => {
    const body: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odio magni consectetur, porro quisquam maiores voluptates inventore. Similique ab fuga quos exercitationem illum architecto, eum molestiae, sequi, nulla iure tempora."
    const arrayBody: string[] = body.split('.');

    return (
        <Layout style={styles.container}>
            <Layout style={styles.card}>
                <Layout style={[styles.headerCard, { backgroundColor: colors[plan] }]}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>Price: {price}</Text>
                </Layout>
                <Layout style={{ padding: 20 }}>
                    {
                        arrayBody.map((value, index) => (
                            (arrayBody.length - 1 > index) ? <Text key={index} style={{ marginBottom: 10 }}><IonIcon name='star-outline' size={12} />{value}</Text>
                                : <Text key={index}></Text>
                        ))
                    }
                    <Text></Text>
                </Layout>
                <Layout>
                    <Button
                        style={{ backgroundColor: colors[plan], borderColor: colors[plan], width: 200, alignSelf: 'center' }}>Get Plan</Button>
                    <Text style={{ padding: 10, textAlign: 'center', fontSize: 10 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
                </Layout>
            </Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'colors.background',
        padding: 20
    },
    headerCard: {
        flexDirection: 'row',
        height: 60
    },
    title: {
        flex: 2,
        padding: 10,
        alignSelf: 'center',
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold'
    },
    price: {
        flex: 1,
        padding: 15,
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
})