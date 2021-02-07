import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
const { height, width } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Header from './components/Header';

const Dashboard = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header />
            <Text>Dashboard</Text>
        </View>
    );
}
const styles = StyleSheet.create({

});
export default Dashboard;