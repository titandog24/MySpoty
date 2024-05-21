import { Button, Layout } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const CardPlan = () => {
  return (
    <Layout style={styles.container}>
        <Layout style={styles.card}>
            <Layout style={styles.headerCard}>
                <Text>plan</Text>
                <Text>Price</Text>
            </Layout>
            <Layout>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odio magni consectetur, porro quisquam maiores voluptates inventore. 
                    Similique ab fuga quos exercitationem illum architecto, eum molestiae, sequi, nulla iure tempora.</Text>
            </Layout>
            <Layout>
                <Button>Get Plan</Button>
                <Text>infoAdicional</Text>
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
        flex: 1,
        flexDirection: 'column'
    },
    headerCard: {
        flexDirection: 'row'
    }
})