import { Button, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { IonIcon } from './IonIcons'
import { StyleSheet } from 'react-native'
import { DrawerActions, useNavigation } from "@react-navigation/native";

interface Props {
    title: string
}

export const HeaderComponent = ({title}:Props) => {

  const navigation = useNavigation();

  return (
    <Layout style={styles.container}>
        <Button 
        style={{flex:1}}
        appearance='ghost'
        accessoryLeft={<IonIcon name='menu-outline' size={30} />}
        onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer)}
         />
        <Layout style={{flex:9, justifyContent: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
        </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row'
    }
})
