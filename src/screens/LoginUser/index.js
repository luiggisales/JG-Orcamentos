import React, {useState} from 'react';
import { View,Text,TextInput , TouchableOpacity} from 'react-native';
import styles from './style';
import { StatusBar } from 'expo-status-bar';

//* Meus Icones
import LogoJG from '../../../assets/Icons/Logo_Da_JG.svg';
import IconLogin from '../../../assets/Icons/sign-up.svg';
import IconEmail from '../../../assets/Icons/mail.svg';
import IconSenha from '../../../assets/Icons/padlock.svg';
import IconGoogle from '../../../assets/Icons/google-icon.svg'
import { Ionicons } from '@expo/vector-icons'
//*Minhas fonts
import { RFValue } from 'react-native-responsive-fontsize';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


// import { Container } from './styles';

const LoginUser = () => {
  //*Áreas das fonts
  let {fontsLoading} = useFonts({
    'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
  })
  if (!fontsLoading) {
    <AppLoading/>
  }

  //*Área lógica
  const [email , setEmail] = useState(null);
  const [senha , setSenha] = useState(null);
  const [senhaVisivel , setSenhaVisivel] = useState(true);
  
  return (
      <View style={styles.container}>
        <StatusBar style='light'/>
          <View style={styles.container_primary}>
            <View style={styles.container_logo}>
              <LogoJG widht={RFValue(310)} height={RFValue(287)} color={'#fff'}/>
              <Text style={styles.title_logo}>JG Orçamentos</Text>
              <Text style={styles.subtitle_logo}>Faça seus orçamentos conosco👇</Text>
            </View>
            <View style={styles.container_form}>
              <View style={styles.header_form}>
                <Text style={styles.title_header_form}>Login</Text>
                <IconLogin width={RFValue(16)} height={RFValue(16)} color={'#fff'}/>
              </View>
              <View style={styles.area_inputs}>
                <View style={styles.container_input}>
                  <IconEmail width={RFValue(16)} height={RFValue(16)} color={'#fff'} />
                  <TextInput
                  style={styles.input}
                  keyboardAppearance='dark'
                  keyboardType='email-address'
                  placeholderTextColor={'#fff'}
                  value={email}
                  onChangeText={(email)=> setEmail(email)}
                  placeholder='Email'/>
                </View>

                <View style={styles.container_input}>
                  <IconSenha width={RFValue(16)} height={RFValue(16)} color={'#fff'} />
                  <TextInput
                  style={styles.inputSenha}
                  keyboardAppearance='dark'
                  value={senha}
                  onChangeText={(senha)=> setSenha(senha)}
                  secureTextEntry={senhaVisivel}
                  placeholderTextColor={'#fff'}
                  maxLength={12}
                  placeholder='Senha'/>
                  <TouchableOpacity style={styles.view_senha} onPress={()=> setSenhaVisivel(!senhaVisivel)}>
                    <Ionicons name='eye' color={'#fff'} size={RFValue(16)}/>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.footer_form}>
                <TouchableOpacity>
                  <Text style={styles.text_footer_form}>Não tem Conta?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.login_google_form}>
                  <IconGoogle width={RFValue(24)} height={RFValue(24)} color={'#fff'}/>
                  <Text style={styles.text_login_google_form}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </View>
  );
}

export default LoginUser;