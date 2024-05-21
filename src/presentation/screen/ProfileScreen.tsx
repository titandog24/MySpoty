import { Alert, Image, StyleSheet, Text, View } from "react-native"
import { Button, Input, Layout } from "@ui-kitten/components";
import { IonIcon } from "../components/IonIcons";
import { useEffect, useState } from "react";
import { StorageLocal } from "../../infraestructure/Config/StoreLocal";
import { MySpotyUser } from "../../infraestructure/Adapter/Interfaces/MySpotyArtist";
import { register } from "../../infraestructure/Actions/User/UserActions";
import { saveLoginUser } from "../../infraestructure/Store/LoginStore";

export const ProfileScreen = () => {

  const [user, setuser] = useState<MySpotyUser>({
    id: 0,
    email: '',
    isDeleted: false,
    name: 'test',
    password: '',
    photo: ''
  });

  useEffect(() => {

    const getDataUser = async () => {
      const data = await StorageLocal.getData('user');

      if (data != null) {
        const userLocal: MySpotyUser = JSON.parse(data);
        setuser(userLocal);
      }
    }

    getDataUser();
  }, [])

  const registerUser = async() => {
    const response = await register(user);
    if (response.message == "200") {
      await saveLoginUser(response.user);
      Alert.alert('Response', 'User updated', [
        {text: 'OK', onPress: () => {}},
      ]);
    }
  }
  

  return (
    <Layout style={styles.container}>
      <Layout>
        <Image
          resizeMode="center"
          height={300}
          source={{
            uri: `https://static.wikia.nocookie.net/videojuego/images/7/75/Mario.png/revision/latest?cb=20130812110749`
          }}
        />
      </Layout>
      <Text style={styles.title}>User Information</Text>
      <Layout style={styles.formContainer}>
        <Text>User</Text>
        <Input
          appearance="basic"
          onChangeText={(value) => setuser({...user,name:value})}
          value={user.name}
        />
      </Layout>
      <Layout style={styles.formContainer}>
        <Text>Email</Text>
        <Input
          appearance="basic"
          textContentType="emailAddress"
          onChangeText={(value) => setuser({...user,email:value})}
          value={user.email}
        />
      </Layout>
      <Layout style={styles.formContainer}>
        <Text>Pasword</Text>
        <Input
          appearance="basic"
          textContentType="emailAddress"
          secureTextEntry
          onChangeText={(value) => setuser({...user,password:value})}
          value={user.password}
        />
      </Layout>
      <Layout style={styles.formContainer}>
       <Button 
        appearance="primary"
        accessoryRight={() => <IonIcon name="save-outline" color="white" />}
        onPress={() => registerUser()}
        >Save</Button>
      </Layout>
    </Layout>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  formContainer: {
    marginVertical: 15
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop:10
  }
})