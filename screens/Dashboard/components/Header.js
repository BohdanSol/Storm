import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Logo from '../../../assets/logo.svg';
import BellIcon from '../../../assets/icons/bell.svg';

const Header = ({ navigation }) => {
    return (
        <View style={styles.hederContainer}>
            <View style={styles.emplyBlock} />
            <Logo width={105} />
            <TouchableOpacity
                style={styles.emplyBlock}
            >
                <BellIcon />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    hederContainer: {
        marginTop: getStatusBarHeight(),
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center'
    },
    emplyBlock: {
        width: 64,
        height: 60,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default Header;