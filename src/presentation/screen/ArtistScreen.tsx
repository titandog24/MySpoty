import { StackScreenProps } from "@react-navigation/stack"
import { Button, Card, Layout, Modal, Text } from "@ui-kitten/components"
import { RootStackParams } from "../navigator/StackNavigator"
import { ReactElement, useState } from "react"
import { useQuery } from '@tanstack/react-query';
import { getArtistById } from "../../infraestructure/Actions/Artist/Artist";
import { Image, StyleSheet, View } from "react-native";
import { TapTopNavigator } from "../navigator/TapTopNavigator";
import { IonIcon } from "../components/IonIcons";
import { saveTempUser } from "../../infraestructure/Store/ArtistStoreLocal";

interface Props extends StackScreenProps<RootStackParams, 'Artist'> { }

export const ArtistScreen = ({ route }: Props): ReactElement => {

  const [modalVisible, SetModalVisible] = useState(false);


  const { isLoading, data: Artist } = useQuery({
    queryKey: ['artistId', `${route.params.artistId}`],
    queryFn: () => getArtistById(route.params.artistId)!
  })

  if (isLoading) {
    return <Layout><Text>Cargando...</Text></Layout>
  }

  if (Artist !== undefined) {
    saveTempUser(Artist)
  }


  const ArtistBiography = (): ReactElement => {
    return (
      <View style={styles.containerModal}>
        <Modal
          visible={modalVisible}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => SetModalVisible(false)}
        >
          <Card disabled={true}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 24,
                marginBottom: 10
              }}>
              {Artist?.artistName! + `'s Biography`}
            </Text>
            <Text style={{
              textAlign: 'justify',
              fontStyle: 'italic',
              fontSize: 16
            }}>
              {Artist?.biography}
            </Text>
            <Button
              appearance="ghost"
              style={{ position: 'absolute', top: 0, right: 0 }}
              accessoryRight={() => (
                <IonIcon name="close-outline" size={25} />
              )}
              onPress={() => SetModalVisible(false)}
            />
          </Card>
        </Modal>
      </View>
    )
  }

  return (
    <Layout
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <Layout style={{ flex: 1, backgroundColor: 'red', flexDirection: 'row' }}>
        <Layout style={{ flex: 1 }}>
          <Image
            alt={Artist?.name}
            style={styles.artistPhone}
            resizeMode='stretch'
            source={{
              uri: `${Artist?.imageArtist.imageName}`
            }} />
          <Layout style={{ marginLeft: 20, marginTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{Artist?.artistName}</Text>
            <Text style={{ fontSize: 14 }}>{Artist?.name}</Text>
            <Text style={{ fontSize: 14 }}>{Artist?.age}</Text>
          </Layout>
        </Layout>
        <Layout style={{ flex: 2 }}>
          <Layout style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
            <Layout style={styles.infoArtist}>
              <Text style={styles.numberArtist}>1</Text>
              <Text style={styles.numberLabelArtist}>Albums</Text>
            </Layout>
            <Layout style={styles.infoArtist}>
              <Text style={styles.numberArtist}>2</Text>
              <Text style={styles.numberLabelArtist}>Tracks</Text>
            </Layout>
          </Layout>
          <Layout style={{ flex: 1, paddingHorizontal: 10 }}>
            <Text style={{ textAlign: 'justify' }}>
              {
                (Artist?.biography.length! > 150)
                  ? `${Artist?.biography.substring(0, 150)}`
                  : Artist?.biography
              }
            </Text>
            <Text
              style={{ color: 'blue' }}
              onPress={() => SetModalVisible(true)}>...more</Text>
          </Layout>
        </Layout>
      </Layout>
      <Layout style={{ flex: 2 }}>
        <TapTopNavigator idUsuario={route.params.artistId} />
      </Layout>

      <Layout>
        {
          (modalVisible)
            ? (
              <ArtistBiography />
            )
            : <></>
        }
      </Layout>
    </Layout >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  infoArtist: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  artistPhone: {
    height: 100,
    width: '80%',
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 40
  },
  numberArtist: {
    fontWeight: 'bold',
    fontSize: 20
  },
  numberLabelArtist: {
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle: 'italic'
  },
  containerModal: {
    flex: 1
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});