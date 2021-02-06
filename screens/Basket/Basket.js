import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Basket = ({ navigation }) => {
    return (
        <View>
            <Text>Basket</Text>
        </View>
    );
}
const styles = StyleSheet.create({

});
export default Basket;