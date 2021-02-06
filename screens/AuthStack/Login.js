import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, ImageBackground, TouchableOpacity, TextInput, TextBase } from 'react-native';
const { height, width } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Swiper from 'react-native-swiper';
import Logo from '../../assets/logo.svg';
import EmailIcon from '../../assets/icons/email.svg';
import PasswordIcon from '../../assets/icons/password.svg';
import EyeClosed from '../../assets/icons/eye.svg';
import EyeClosedIcon from '../../assets/icons/eyeClosed.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import GoogleIcon from '../../assets/icons/google.svg';

const Login = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.absoluteLogoContainer}>
                <Logo style={{ height: 20 }} />
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ marginBottom: 15 }}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputIconContainer}>
                        <EmailIcon />
                    </View>
                    <TextInput
                        placeholder={'Email'}
                        placeholderTextColor={'#7c7c7c'}
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputIconContainer}>
                        <PasswordIcon />
                    </View>
                    <TextInput
                        placeholder={'Пароль'}
                        placeholderTextColor={'#7c7c7c'}
                        style={styles.input}
                    />
                </View>
            </View>
            <View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.btnBlack}
                >
                    <Text style={[styles.btnText, { color: '#fff' }]}>Увійти</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.btnGray}
                >
                    <Text style={[styles.btnText, { color: '#212121' }]}>Забули пароль?</Text>
                </TouchableOpacity>
                <Text style={[styles.btnText, { marginTop: 15, marginBottom: 30, textAlign: 'center', color: '#C7C7C7' }]}>Або авторизуйтесь</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 14 }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[styles.socialBtn, { backgroundColor: '#FEECEB' }]}
                    >
                        <GoogleIcon />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[styles.socialBtn, { backgroundColor: '#E9F4FE' }]}
                    >
                        <FacebookIcon />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.btnWhite}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={[styles.btnText, { color: '#212121' }]}>Немає аккаунту? Зареєструватись</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    socialBtn: {
        height: 48,
        flex: 1,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    inputIconContainer: {
        height: 48,
        width: 48,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#EBEBEB',
        borderRightWidth: 1,
    },
    input: {
        fontSize: 16,
        color: '#212121',
        paddingLeft: 15,
        width: width - 48 - 48 - 15
    },
    inputContainer: {
        width: width - 48,
        height: 48,
        marginHorizontal: 24,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#EBEBEB',
        backgroundColor: '#FDFDFD',
        marginBottom: 15,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    absoluteLogoContainer: {
        zIndex: 10,
        elevation: 11,
        width: width,
        alignItems: 'center',
        marginTop: getStatusBarHeight() + 44
    },
    wrapper: {},
    btnText: {
        fontSize: 16
    },
    btnWhite: {
        marginTop: 15,
        width: width - 48,
        height: 48,
        marginHorizontal: 24,
        backgroundColor: '#fff',
        marginBottom: 25,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnGray: {
        width: width - 48,
        height: 48,
        marginHorizontal: 24,
        backgroundColor: '#F3F3F3',
        marginBottom: 15,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnOutlined: {
        width: width - 48,
        height: 48,
        marginHorizontal: 24,
        backgroundColor: '#fff',
        marginBottom: 15,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnBlack: {
        width: width - 48,
        height: 48,
        marginHorizontal: 24,
        backgroundColor: '#212121',
        marginBottom: 15,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    }
});
export default Login;