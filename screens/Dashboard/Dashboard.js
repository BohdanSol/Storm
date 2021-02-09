import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
const { height, width } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Header from './components/Header';
import Categories from './components/Categories';
import BannerCarousel from './components/BannerCarousel';

const Dashboard = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header />
            <ScrollView style={{ flex: 1 }}>
                <Categories />
                <BannerCarousel />
                <Text>Dashboard</Text>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({

});
export default Dashboard;