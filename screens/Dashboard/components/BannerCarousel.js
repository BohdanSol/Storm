import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native';
const { height, width } = Dimensions.get('window');
import Swiper from 'react-native-swiper';

const BannerCarousel = ({ navigation }) => {
    return (
        <Swiper
            style={styles.wrapper}
            activeDot={
                <View style={{ backgroundColor: '#212121', width: 15, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />
            }
            autoplay={true}
            showsPagination={true}
            paginationStyle={{ bottom: 0 }}
        >
            <TouchableOpacity>
                <Image
                    source={{ uri: 'https://i.pinimg.com/originals/6d/08/6a/6d086ac5f60bd2b934e69ad4aa510eda.jpg' }}
                    style={styles.image}
                    resizeMode={'cover'}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={{ uri: 'https://i.pinimg.com/originals/02/cf/cf/02cfcffac595c832c514d58704cd82ce.jpg' }}
                    style={styles.image}
                    resizeMode={'cover'}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={{ uri: 'https://i.pinimg.com/originals/fa/f9/a6/faf9a6b30bd35206ba55b4aa57631d78.jpg' }}
                    style={styles.image}
                    resizeMode={'cover'}
                />
            </TouchableOpacity>
        </Swiper>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        height: 140,
    },
    image: {
        width: width - 48,
        marginLeft: 24,
        height: 118,
        borderRadius: 4
    }
});
export default BannerCarousel;