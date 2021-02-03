import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, ImageBackground } from 'react-native';
const { height, width } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Swiper from 'react-native-swiper';
import Logo from '../../assets/logo.svg';

const Login = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ position: 'absolute' }}>
                <Logo />
            </View>
            <Swiper style={styles.wrapper} showsButtons={true}>
                <ImageBackground
                    source={require('../../assets/onboardingImages/onboarding1.png')}
                    style={styles.image}
                >
                    <Text style={styles.text}>Hello Swiper</Text>
                </ImageBackground>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
            <View style={styles.inputs}>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
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