import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Logo from '../../../assets/logo.svg';
import BackIcon from '../../../assets/icons/backBtn.svg';

const TitledHeader = ({ title, navigation }) => {
    return (
        <View style={styles.hederContainer}>
            <TouchableOpacity
                style={styles.emplyBlock}
                onPress={() => navigation.goBack()}
            >
                <BackIcon />
            </TouchableOpacity>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.emplyBlock} />
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
    },
    titleText: {
        fontSize: 22,
        color: '#212121'
    }
});
export default TitledHeader;