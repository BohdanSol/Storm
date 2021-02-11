import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, Touchable } from 'react-native';
const { height, width } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Categories = ({ navigation }) => {
    return (
        <View style={styles.categoriesContainer}>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.categoryContainer}
                onPress={() => navigation.navigate('Category', { headerTitle: 'Чоловікам' })}
            >
                <Image
                    source={{ uri: 'https://p1.pxfuel.com/preview/845/791/783/sensolatino-sunglasses-italia-man.jpg' }}
                    style={styles.image}
                />
                <View style={{ height: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>Чоловікам</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.categoryContainer}
                onPress={() => navigation.navigate('Category', { headerTitle: 'Жінкам' })}
            >
                <Image
                    source={{ uri: 'https://media.istockphoto.com/photos/beautiful-and-happy-portrait-of-cute-indian-style-girl-with-tikka-on-picture-id1204479466' }}
                    style={styles.image}
                />
                <View style={{ height: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>Жінкам</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.categoryContainer}
                onPress={() => navigation.navigate('Category', { headerTitle: 'Дітям' })}
            >
                <Image
                    source={{ uri: 'https://hips.hearstapps.com/hmg-prod/images/easy-kids-hairstyles-headband-1587407210.jpg?crop=0.653xw:0.871xh;0.168xw,0.118xh&resize=480:*' }}
                    style={styles.image}
                />
                <View style={{ height: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>Дітям</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    categoriesContainer: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 19
    },
    categoryContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#EBEBEB',
        borderRadius: 4,
        marginHorizontal: 5,
    },
    image: {
        height: 70,
        borderRadius: 4,
    },
    text: {
        color: '#212121',
        fontSize: 16
    }
});
export default Categories;