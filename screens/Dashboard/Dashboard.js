import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Dashboard = ({ navigation }) => {
    return (
        <View>
            <Text>Dashboard</Text>
        </View>
    );
}
const styles = StyleSheet.create({

});
export default Dashboard;