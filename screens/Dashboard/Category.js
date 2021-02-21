import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
const { height, width } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';
import TitledHeader from './components/TitledHeader';
import Collections from './components/Collections';
import BannerCarousel from './components/BannerCarousel';

const Collection = ({ route, navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <TitledHeader title={route.params.headerTitle} navigation={navigation} />
            <ScrollView style={{ flex: 1 }}>
                <BannerCarousel />
                <Collections filter={route.params.headerTitle} navigation={navigation} />
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({

});
export default Collection;