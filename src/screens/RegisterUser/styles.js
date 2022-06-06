import {StyleSheet} from "react-native";
import {getBottomSpace , getStatusBarHeight} from 'react-native-iphone-x-helper'
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#314A6A',
        paddingTop: getStatusBarHeight()+ 22,
        paddingBottom: getBottomSpace(),
    },
    container_primary: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_logo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title_logo: {
        textAlign: "center",
        fontSize: RFValue(26),
        fontFamily: 'Poppins_Bold',
        color: '#fff',
        bottom: RFValue(92),
    },
    subtitle_logo: {
        textAlign: "center",
        fontSize: RFValue(16),
        color: '#fff',
        bottom: RFValue(90),
    },
    header_form: {
        width: RFValue(274),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    container_form:{
        width: RFValue(274),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bottom: RFValue(70),
        paddingBottom: getBottomSpace() + RFValue(12),
    },
    title_header_form: {
        color: '#fff',
        fontFamily: 'Poppins_SemiBold',
        fontSize: RFValue(14),
    },
    container_input:{
        width: RFValue(274),
        height: RFValue(40),
        display: 'flex',
        flexDirection: 'row',
        alignItems :'center',
        justifyContent: 'space-between',
        padding: 8,
        marginTop: RFValue(8),
        backgroundColor: '#fff2',
        borderRadius: RFValue(8),
        paddingHorizontal: RFValue(12),
    },
    input: {
        width: RFValue(225),
        color: '#fff',
        fontSize: RFValue(14),
    },
    inputSenha: {
        paddingLeft: RFValue(8),
        width: RFValue(205),
        color: '#fff',
        fontSize: RFValue(14),
    },
    view_senha: {
        width: RFValue(42),
        height: RFValue(45),
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer_form: {
        marginTop: RFValue(11),
        width: RFValue(272),
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text_footer_form: {
        color: '#fff',
        fontFamily: 'Poppins_Medium',
        fontSize: RFValue(16),
    },
    login_google_form:{
        width: RFValue(108),
        height: RFValue(50),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: RFValue(12),
        borderTopLeftRadius: RFValue(35),
        borderBottomLeftRadius: RFValue(35),
        borderTopRightRadius: RFValue(8),
        borderBottomRightRadius: RFValue(8),
        backgroundColor: '#fff2',
    },
    text_login_google_form: {
        color: '#fff',
        fontFamily: 'Poppins_Medium',
        fontSize: RFValue(16),
    },
    container_botao_next: {
        position: 'absolute',
        top: RFValue(41),
        right: 0,
    },
    botao_next: {
        width: RFValue(64),
        height:RFValue(64),
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff2'
    }
}) 


export default styles;