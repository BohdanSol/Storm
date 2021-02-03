import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';

const ForgotPassword = ({ navigation }) => {
    return (
        <View>
            <Text>Forgot Pass</Text>
        </View>
    );
}
const styles = StyleSheet.create({

});
export default ForgotPassword;