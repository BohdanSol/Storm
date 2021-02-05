import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Swiper from 'react-native-swiper';
import Logo from '../../assets/logo.svg';

const Onboarding = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.absoluteLogoContainer}>
                <Logo style={{ height: 20 }} />
            </View>
            <Swiper
                style={styles.wrapper}
                activeDot={
                    <View style={{ backgroundColor: '#212121', width: 15, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />
                }
            >
                <ImageBackground
                    source={require('../../assets/onboardingImages/onboarding1.png')}
                    style={styles.image}
                >
                    <Text style={styles.swiperText}>Відкрийте для себе{'\n'}новинки моди</Text>
                </ImageBackground>
                <ImageBackground
                    source={require('../../assets/onboardingImages/onboarding2.png')}
                    style={styles.image}
                >
                    <Text style={styles.swiperText}>Солідний стиль{'\n'}зі знижками</Text>
                </ImageBackground>
                <ImageBackground
                    source={require('../../assets/onboardingImages/onboarding3.png')}
                    style={styles.image}
                >
                    <Text style={styles.swiperText}>Навчіть дитину{'\n'}фантазувати</Text>
                </ImageBackground>
            </Swiper>
            <View style={styles.inputs}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.btnGray}
                >
                    <Text style={[styles.btnText, { color: '#212121' }]}>Продовжити як гість</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.btnOutlined}
                    onPress={() => { navigation.navigate('Login') }}
                >
                    <Text style={[styles.btnText, { color: '#212121' }]}>Вхід</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.btnBlack}
                >
                    <Text style={[styles.btnText, { color: '#fff' }]}>Реєстрація</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    absoluteLogoContainer: {
        position: 'absolute',
        zIndex: 10,
        elevation: 11,
        width: width,
        alignItems: 'center',
        top: getStatusBarHeight() + 22
    },
    btnText: {
        fontSize: 16
    },
    btnGray: {
        width: width - 48,
        height: 48,
        marginHorizontal: 24,
        backgroundColor: '#f3f3f3',
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
    wrapper: {},
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
    swiperText: {
        color: '#212121',
        fontSize: 26,
        lineHeight: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 60
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});
export default Onboarding;