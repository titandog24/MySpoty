import { useQuery } from "@tanstack/react-query"
import { Button, Card, Input, Layout, List, Modal, Text } from "@ui-kitten/components"
import { AddNewLibrary, getAll } from "../../infraestructure/Actions/LibraryMusic/Library"
import { StyleSheet, View } from "react-native"
import { LibraryItem } from "../components/LibraryItem"
import { HeaderComponent } from "../components/HeaderComponent"
import { IonIcon } from "../components/IonIcons"
import { ReactElement, useEffect, useState } from "react"
import { LibraryEntity } from "../../infraestructure/Entities/Library"
import { StorageLocal } from "../../infraestructure/Config/StoreLocal"

export const BibliotecaScreen = () => {



  const [modalVisible, SetModalVisible] = useState(false);
  const [library, setLibrary] = useState<LibraryEntity>({
    id: 0,
    name: '',
    counterSong: 0,
    picture: '',
    user: null
  });


  const createNewPlayList = async (libraryModal: LibraryEntity) => {

    const newLibrary: LibraryEntity = {
      id: 0,
      name: libraryModal.name,
      picture: libraryModal.picture,
      counterSong: 0,
      user: library.user
    }

    const data = await AddNewLibrary(newLibrary);
    if (data != undefined) {
      SetModalVisible(false);
      libraries?.push(data)
    }
  }

  const { isLoading, data: libraries } = useQuery({
    queryKey: ['library'],
    queryFn: getAll
  })

  useEffect(() => {
    const loadUser = async () => {
      const data = await StorageLocal.getData('user');
      if (data != null) {
        setLibrary({ ...library, user: JSON.parse(data) })
      }
    }
    loadUser();
  }, [])

  if (isLoading) {
    return <View><Text>Cargando...</Text></View>
  }

  return (
    <Layout style={{ flex: 1 }}>
      <HeaderComponent title="Tus bibliotecas" />
      <List
        data={libraries}
        style={{ backgroundColor: '#141D2C' }}
        keyExtractor={(item) => `${item.id}`}
        numColumns={1}
        renderItem={({ item, index }) => <LibraryItem key={index} library={item} />}
      />
      <Button
        appearance="primary"
        status="primary"
        accessoryRight={<IonIcon name="add-outline" size={25} color="white" />}
        style={{ position: 'absolute', bottom: 0, right: 0, margin: 25, borderRadius: 50 }}
        onPress={() => SetModalVisible(true)}
      />
      {
        (modalVisible)
          ? (
            <ShowModalToAddPlayList modalVisible SetModalVisible={SetModalVisible} createNewPlayList={(value) => createNewPlayList(value)} />
          )
          : <></>
      }
    </Layout>
  )
}

interface Props {
  modalVisible: boolean,
  SetModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  createNewPlayList: (value: LibraryEntity) => void
}

const ShowModalToAddPlayList = ({ modalVisible, SetModalVisible, createNewPlayList }: Props): ReactElement => {

  const [library, setLibrary] = useState<LibraryEntity>({
    id: 0,
    name: '',
    counterSong: 0,
    picture: '',
    user: null
  });

  return (
    <View style={styles.containerModal}>
      <Modal
        visible={modalVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => SetModalVisible(false)}>
        <Card disabled={true} style={{ width: 350 }}>
          <Button
            appearance="ghost"
            style={{ position: 'absolute', top: 0, right: 0 }}
            accessoryRight={() => (
              <IonIcon name="close-outline" size={25} />
            )}
            onPress={() => SetModalVisible(false)} />
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 24,
              marginBottom: 10
            }}>
            {`Add new playlist`}
          </Text>
          <Layout style={styles.inputLayout}>
            <Text style={styles.textInput}>{'Name'}</Text>
            <Input placeholder="Playlist's Name"
              value={library.name} onChangeText={(value) => setLibrary({ ...library, name: value })}
            />
          </Layout>
          <Layout style={styles.inputLayout}>
            <Text style={styles.textInput}>{'Picture'}</Text>
            <Input placeholder="url" value={library.picture}
              onChangeText={(value) => setLibrary({ ...library, picture: value })}
            />
          </Layout>
          <Button
            appearance="primary"
            status="primary"
            style={{ marginVertical: 10 }}
            accessoryRight={<IonIcon name="save-outline" size={20} color="white" />}
            onPress={() => createNewPlayList(library)}
          >Save</Button>
        </Card>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  containerModal: {
    flex: 1
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  inputLayout: {
    marginVertical: 10
  },
  textInput: {
    textAlign: 'justify',
    fontStyle: 'italic',
    fontSize: 16
  }
})