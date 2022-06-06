import React, {useState,useEffect,Platform} from 'react';
import { View,Text,TextInput , TouchableOpacity ,KeyboardAvoidingView ,ScrollView } from 'react-native';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';



//* Meus Icones
import LogoJG from '../../../assets/Icons/Logo_Da_JG.svg';
import IconLogin from '../../../assets/Icons/sign-up.svg';
import IconEmail from '../../../assets/Icons/mail.svg';
import IconSenha from '../../../assets/Icons/padlock.svg';
import IconUser from '../../../assets/Icons/user.svg';
import IconConfirmPassword from '../../../assets/Icons/confirm.svg';
import { Ionicons } from '@expo/vector-icons'
import IconRowRight from '../../../assets/Icons/seta-direita.svg';

//*Minhas fonts
import { RFValue } from 'react-native-responsive-fontsize';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

// import { Container } from './styles';

const RegisterUser = ({navigation}) => {

  //*Área Lógica
  const [nome , setNome] = useState(null);
  const [email , setEmail] = useState(null);
  const [senha , setSenha] = useState(null);
  const [confirmSenha, setConfirmSenha ] = useState(null);
  const [senhaVisivel , setSenhaVisivel] = useState(true);


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
              <Text style={styles.title_header_form}>Cadastra-se</Text>
              <IconLogin width={RFValue(16)} height={RFValue(16)} color={'#fff'}/>
            </View>
            <KeyboardAvoidingView 
            behavior={Platform == 'ios' ? 'padding': 'height'}
            keyboardVerticalOffset={RFValue(60)}
            style={styles.area_inputs}>
                <View style={styles.container_input}>
                  <IconUser width={RFValue(16)} height={RFValue(16)} color={'#fff'} />
                  <TextInput
                  style={styles.input}
                  keyboardAppearance='dark'
                  keyboardType='default'
                  autoCorrect={false}
                  placeholderTextColor={'#fff'}
                  value={nome}
                  onChangeText={(nome)=> setNome(nome)}
                  placeholder='Nome'/>
                </View>

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

                <View style={styles.container_input}>
                  <IconConfirmPassword width={RFValue(16)} height={RFValue(16)} color={'#fff'} />
                  <TextInput
                  style={styles.inputSenha}
                  keyboardAppearance='dark'
                  autoCapitalize='none'
                  value={confirmSenha}
                  onChangeText={(confirmSenha)=> setConfirmSenha(confirmSenha)}
                  secureTextEntry={senhaVisivel}
                  placeholderTextColor={'#fff'}
                  maxLength={12}
                  placeholder='Confirmar senha'/>
                  <TouchableOpacity style={styles.view_senha} onPress={()=> setSenhaVisivel(!senhaVisivel)}>
                    <Ionicons name='eye' color={'#fff'} size={RFValue(16)}/>
                  </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            <View style={styles.footer_form}>
              <TouchableOpacity onPress={()=> navigation.push('Login')}>
                <Text style={styles.text_footer_form}>Já possui uma Conta?</Text>
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

export default RegisterUser;