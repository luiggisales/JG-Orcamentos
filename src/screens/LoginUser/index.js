import React, {useState,useEffect,Platform} from 'react';
import { View,Text,TextInput , TouchableOpacity ,KeyboardAvoidingView } from 'react-native';
import styles from './style';
import { StatusBar } from 'expo-status-bar';

//* Meus Icones
import LogoJG from '../../../assets/Icons/Logo_Da_JG.svg';
import IconLogin from '../../../assets/Icons/sign-up.svg';
import IconEmail from '../../../assets/Icons/mail.svg';
import IconSenha from '../../../assets/Icons/padlock.svg';
import IconGoogle from '../../../assets/Icons/google-icon.svg'
import { Ionicons } from '@expo/vector-icons'
import IconRowRight from '../../../assets/Icons/seta-direita.svg';
//*Minhas fonts
import { RFValue } from 'react-native-responsive-fontsize';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';



// import { Container } from './styles';

SplashScreen.preventAutoHideAsync().catch(console.warn); // Carregar Splash Screen enquanto as fontes nao carregam
const LoginUser = ({navigation}) => {
  //*Áreas das fonts
  const [appIsReady, setAppIsReady] = useState(false);
  const LoadingFonts = async () => {
    try {
      await Font.loadAsync({
        Poppins_Bold: require('../../../assets/fonts/Poppins-Bold.ttf'),
        Poppins_SemiBold: require('../../../assets/fonts/Poppins-SemiBold.ttf'),
        Poppins_Medium: require('../../../assets/fonts/Poppins-Medium.ttf'),
        ...Ionicons.font,
      });
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }
  };

  //*Área lógica
  const [email , setEmail] = useState(null);
  const [senha , setSenha] = useState(null);
  const [senhaVisivel , setSenhaVisivel] = useState(true);

  useEffect(() => {
    LoadingFonts();
  }, []);
  //*Parte Da Função das Fontes
  if (!appIsReady) {
    return null;
  }
  return (
      <View style={styles.container}>
        <StatusBar style='auto'/>
          <View style={styles.container_primary}>
            <View style={styles.container_logo}>
              <View style={{top: 18,}}>
                <LogoJG widht={RFValue(310)} height={RFValue(287)} color={'#fff'}/>
              </View>
              <Text style={styles.title_logo}>JG Orçamentos</Text>
              <Text style={styles.subtitle_logo}>Faça seus orçamentos conosco👇</Text>
            </View>
            <View style={styles.container_form}>
              <View style={styles.header_form}>
                <Text style={styles.title_header_form}>Login</Text>
                <IconLogin width={RFValue(16)} height={RFValue(16)} color={'#fff'}/>
              </View>
              <KeyboardAvoidingView 
              behavior={Platform == 'ios' ? 'padding': 'height'}
              keyboardVerticalOffset={RFValue(60)}
              style={styles.area_inputs}>
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
              </KeyboardAvoidingView>
              <View style={styles.footer_form}>
                <TouchableOpacity onPress={()=> navigation.push('Register')}>
                  <Text style={styles.text_footer_form}>Não tem Conta?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.login_google_form}>
                  <IconGoogle width={RFValue(24)} height={RFValue(24)} color={'#fff'}/>
                  <Text style={styles.text_login_google_form}>Login</Text>
                </TouchableOpacity>
                <View style={styles.container_botao_next}>
                  <TouchableOpacity style={styles.botao_next}>
                    <IconRowRight widht={RFValue(21.33)} height={RFValue(20.74)} color={'#fff'}/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
      </View>
  );
}

export default LoginUser;