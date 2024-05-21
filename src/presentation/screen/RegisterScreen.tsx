import { StackScreenProps } from '@react-navigation/stack'
import { ScrollView, useWindowDimensions} from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator'
import { Input, Layout, Text, Button } from '@ui-kitten/components'
import { IonIcon } from '../components/IonIcons'
import { useState } from 'react'
import { User } from '../../infraestructure/Entities/User';
import { register } from '../../infraestructure/Actions/User/UserActions'
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport'
import { userStore } from '../../infraestructure/Store/UserStore'

interface Props extends StackScreenProps<RootStackParams, 'Register'>{}

export const RegisterScreen = ({navigation}:Props) => {

  const [users, setusers] = useState<User>({
    id: 0,
    name: '',
    email: '',
    password: '',
    photo: '',
    isDeleted: false
  })
  const [error, seterror] = useState("");
  const [securyTextFlag, setsecuryTextFlag] = useState(true)
  const {gbSetUser} = userStore();


  const {height} = useWindowDimensions();

  const registerUser = async () => {   
    const {message, user: UsuarioDb} = await register(users);
    seterror(message);
    if (message === "") {
      gbSetUser(UsuarioDb);
      navigation.navigate('Login');
    }
  }

  const renderIconRight = () =>{
    return <TouchableWithoutFeedback onPress={() => setsecuryTextFlag(!securyTextFlag)}>
      <IonIcon name={securyTextFlag ? 'eye-off-outline' : 'eye-outline'} />
    </TouchableWithoutFeedback>
  }

  return (
    <Layout style={{ flex: 1 }}>
    <ScrollView style={{ marginHorizontal: 40 }}>
      <Layout style={{ paddingTop: height * 0.30 }}>
        <Text category="h1">Crear Cuenta</Text>
        <Text category='p2'>Por favor, crea una cuenta para continuar</Text>
      </Layout>

      <Layout>
        <Input
          placeholder='Nombre Completo'
          onChangeText={value => setusers({...users,name: value })}
          value={users.name}
          accessoryLeft={<IonIcon name='person-outline' />}
          style={{ marginBottom: 10, marginTop: 10 }}
        />
         <Input
          placeholder='Correo electrónico'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={value => setusers({...users,email: value })}
          value={users.email}
          accessoryLeft={<IonIcon name='mail-outline' />}
          style={{ marginBottom: 10, marginTop: 10 }}
        />
        <Input
          placeholder='Contraseña'
          autoCapitalize='none'
          onChangeText={value => setusers({...users,password: value })}
          value={users.password}
          accessoryLeft={<IonIcon name='lock-closed-outline' />}
          secureTextEntry={securyTextFlag}
          accessoryRight={renderIconRight}
          
          style={{ marginBottom: 10 }}
        />
      </Layout>

      <Layout style={{ height: 20 }} />

      <Layout>
        <Button onPress={registerUser}
        accessoryRight={<IonIcon name='save-outline' color='white' />}>
          Crear
        </Button>
      </Layout>
      {
          error !== ""
          ? (
            <>
              <Text style={{color: 'red', fontWeight: 'bold', marginTop: 20}}>{error}</Text>
            </>
          )
          : ""
        }
      <Layout style={{ height: 20 }} />

      <Layout style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>¿Ya tienes una cuenta? </Text>
        <Text 
          status='primary'
          category='s1'
          onPress={() => navigation.goBack()}>Iniciar Sesión</Text>
      </Layout>
    </ScrollView>
  </Layout>
  )
}
