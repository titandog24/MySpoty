import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { ScrollView } from 'react-native-gesture-handler'
import { Alert, useWindowDimensions } from 'react-native'
import { useState, useEffect } from 'react';
import { login } from '../../infraestructure/Actions/User/UserActions'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator'
import { IonIcon } from '../components/IonIcons'
import { existLoginUser, saveLoginUser } from '../../infraestructure/Store/LoginStore';
import { useNavigation } from '@react-navigation/native';


export const LoginScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const {height} = useWindowDimensions();

  const onLogin = async () => {
    if (form.email.length === 0 || form.password.length === 0) {
      return;
    }

    const wasSuccesfull = await login(form.email, form.password);

    if (wasSuccesfull.message === "") 
      {
        await saveLoginUser(wasSuccesfull.user);
        navigation.reset({
          index: 0,
          routes: [{name: 'Application'}]
        })
        return;
      } 

    Alert.alert('Error', 'usuario o contraseña incorrectos');
  }

  useEffect(() => {
    const validateUserLogin = async () => {
      const response = await existLoginUser();
      if (response) {
        navigation.navigate('Application');
      }
    }
 
    validateUserLogin();

  }, [])


  return (
    <Layout style={{ flex: 1 }}>
    <ScrollView style={{ marginHorizontal: 40 }}>
      <Layout style={{ paddingTop: height * 0.35 }}>
        <Text category="h1">Ingresar</Text>
        <Text category='p2'>Por favor, ingrese para continuar</Text>
      </Layout>
      <Layout>
        <Input
          placeholder='Correo electrónico'
          keyboardType='email-address'
          autoCapitalize='none'
          value={form.email}
          onChangeText={value => setForm({ ...form, email: value })}
          accessoryLeft={<IonIcon name='mail-outline' />}
          style={{ marginBottom: 10, marginTop: 10 }}
        />
        <Input
          placeholder='Contraseña'
          autoCapitalize='none'
          secureTextEntry
          value={form.password}
          onChangeText={value => setForm({ ...form, password: value })}
          accessoryLeft={<IonIcon name='lock-closed-outline' />}
          style={{ marginBottom: 10 }}
        />
      </Layout>
      <Layout style={{ height: 20 }} />
      <Layout>
        <Button onPress={onLogin}
          accessoryRight={<IonIcon name='arrow-forward-outline' />}>
          Ingresar
        </Button>
      </Layout>
      <Layout style={{ height: 20 }} />
      <Layout style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>¿No tienes una cuenta? </Text>
        <Text
          status='primary'
          category='s1'
          onPress={() => navigation.navigate('Register')}>Crea una</Text>
      </Layout>
    </ScrollView>
  </Layout>
  )
}
